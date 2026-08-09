# CPU profile

Took 3.95s over 3,956 samples (1.0ms per sample).

| Category |     % |   Time | Samples |
| -------- | ----: | -----: | ------: |
| Ours     | 98.0% |  3.87s |   3,875 |
| Native   |  2.0% | 81.0ms |      81 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|     % |    Time | Samples | Function                                        | Location                                         |
| ----: | ------: | ------: | ----------------------------------------------- | ------------------------------------------------ |
| 55.0% |   2.17s |   2,176 | `__json_value_module_MOD_pop_char.part.0`       | `src/json-fortran/src/json_value_module.F90`     |
| 11.5% | 456.0ms |     456 | `__json_value_module_MOD_parse_string`          | `src/json-fortran/src/json_value_module.F90`     |
|  9.3% | 369.0ms |     369 | `__json_value_module_MOD_parse_object`          | `src/json-fortran/src/json_value_module.F90`     |
|  7.8% | 310.0ms |     310 | `__json_string_utilities_MOD_string_to_integer` | `src/json-fortran/src/json_string_utilities.F90` |
|  3.0% | 120.0ms |     120 | `__json_value_module_MOD_parse_value`           | `src/json-fortran/src/json_value_module.F90`     |
|  2.5% |  99.0ms |      99 | `__json_value_module_MOD_json_value_create`     | `src/json-fortran/src/json_value_module.F90`     |
|  2.1% |  82.0ms |      82 | `__json_value_module_MOD_json_parse_file`       | `src/json-fortran/src/json_value_module.F90`     |
|  2.0% |  81.0ms |      81 | `_init`                                         | `<unknown>`                                      |
|  1.8% |  73.0ms |      73 | `__json_value_module_MOD_json_value_destroy`    | `src/json-fortran/src/json_value_module.F90`     |
|  1.5% |  60.0ms |      60 | `__json_value_module_MOD_string_to_int`         | `src/json-fortran/src/json_value_module.F90`     |
|  0.9% |  35.0ms |      35 | `__json_value_module_MOD_parse_number`          | `src/json-fortran/src/json_value_module.F90`     |
|  0.5% |  19.0ms |      19 | `__json_string_utilities_MOD_unescape_string`   | `src/json-fortran/src/json_string_utilities.F90` |
|  0.5% |  18.0ms |      18 | `__json_value_module_MOD_destroy_json_data`     | `src/json-fortran/src/json_value_module.F90`     |
|  0.2% |   8.0ms |       8 | `__json_value_module_MOD_to_string`             | `src/json-fortran/src/json_value_module.F90`     |
|  0.2% |   8.0ms |       8 | `__json_value_module_MOD_parse_for_chars`       | `src/json-fortran/src/json_value_module.F90`     |
|  0.2% |   7.0ms |       7 | `__json_value_module_MOD_json_value_add_member` | `src/json-fortran/src/json_value_module.F90`     |
|  0.2% |   6.0ms |       6 | `__json_value_module_MOD_parse_array`           | `src/json-fortran/src/json_value_module.F90`     |
|  0.1% |   5.0ms |       5 | `MAIN__`                                        | `out/profile.f90`                                |
|  0.1% |   4.0ms |       4 | `main`                                          | `out/profile.f90`                                |
|  0.1% |   4.0ms |       4 | `__json_value_module_MOD_pop_char`              | `src/json-fortran/src/json_value_module.F90`     |

#### Categories

##### Ours

|     % |    Time | Samples | Function                                        | Location                                         |
| ----: | ------: | ------: | ----------------------------------------------- | ------------------------------------------------ |
| 55.0% |   2.17s |   2,176 | `__json_value_module_MOD_pop_char.part.0`       | `src/json-fortran/src/json_value_module.F90`     |
| 11.5% | 456.0ms |     456 | `__json_value_module_MOD_parse_string`          | `src/json-fortran/src/json_value_module.F90`     |
|  9.3% | 369.0ms |     369 | `__json_value_module_MOD_parse_object`          | `src/json-fortran/src/json_value_module.F90`     |
|  7.8% | 310.0ms |     310 | `__json_string_utilities_MOD_string_to_integer` | `src/json-fortran/src/json_string_utilities.F90` |
|  3.0% | 120.0ms |     120 | `__json_value_module_MOD_parse_value`           | `src/json-fortran/src/json_value_module.F90`     |
|  2.5% |  99.0ms |      99 | `__json_value_module_MOD_json_value_create`     | `src/json-fortran/src/json_value_module.F90`     |
|  2.1% |  82.0ms |      82 | `__json_value_module_MOD_json_parse_file`       | `src/json-fortran/src/json_value_module.F90`     |
|  1.8% |  73.0ms |      73 | `__json_value_module_MOD_json_value_destroy`    | `src/json-fortran/src/json_value_module.F90`     |
|  1.5% |  60.0ms |      60 | `__json_value_module_MOD_string_to_int`         | `src/json-fortran/src/json_value_module.F90`     |
|  0.9% |  35.0ms |      35 | `__json_value_module_MOD_parse_number`          | `src/json-fortran/src/json_value_module.F90`     |
|  0.5% |  19.0ms |      19 | `__json_string_utilities_MOD_unescape_string`   | `src/json-fortran/src/json_string_utilities.F90` |
|  0.5% |  18.0ms |      18 | `__json_value_module_MOD_destroy_json_data`     | `src/json-fortran/src/json_value_module.F90`     |
|  0.2% |   8.0ms |       8 | `__json_value_module_MOD_to_string`             | `src/json-fortran/src/json_value_module.F90`     |
|  0.2% |   8.0ms |       8 | `__json_value_module_MOD_parse_for_chars`       | `src/json-fortran/src/json_value_module.F90`     |
|  0.2% |   7.0ms |       7 | `__json_value_module_MOD_json_value_add_member` | `src/json-fortran/src/json_value_module.F90`     |
|  0.2% |   6.0ms |       6 | `__json_value_module_MOD_parse_array`           | `src/json-fortran/src/json_value_module.F90`     |
|  0.1% |   5.0ms |       5 | `MAIN__`                                        | `out/profile.f90`                                |
|  0.1% |   4.0ms |       4 | `main`                                          | `out/profile.f90`                                |
|  0.1% |   4.0ms |       4 | `__json_value_module_MOD_pop_char`              | `src/json-fortran/src/json_value_module.F90`     |
|  0.1% |   3.0ms |       3 | `__json_value_module_MOD_json_info`             | `src/json-fortran/src/json_value_module.F90`     |

##### Native

|    % |   Time | Samples | Function | Location    |
| ---: | -----: | ------: | -------- | ----------- |
| 2.0% | 81.0ms |      81 | `_init`  | `<unknown>` |

#### Lines

Lines ranked by contribution to each function's self time.

##### `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`)

|     % |   Time | Samples | Location                                           |
| ----: | -----: | ------: | -------------------------------------------------- |
| 71.4% |  1.55s |   1,554 | `src/json-fortran/src/json_value_module.F90:11447` |
|  4.0% | 86.0ms |      86 | `src/json-fortran/src/json_value_module.F90:11395` |
|  3.8% | 82.0ms |      82 | `src/json-fortran/src/json_value_module.F90:11469` |
|  3.7% | 81.0ms |      81 | `src/json-fortran/src/json_value_module.F90:11452` |
|  3.5% | 77.0ms |      77 | `src/json-fortran/src/json_value_module.F90:11385` |

##### `__json_value_module_MOD_parse_string` (`src/json-fortran/src/json_value_module.F90`)

|     % |    Time | Samples | Location                                           |
| ----: | ------: | ------: | -------------------------------------------------- |
| 28.3% | 129.0ms |     129 | `src/json-fortran/src/json_value_module.F90:11075` |
| 24.3% | 111.0ms |     111 | `src/json-fortran/src/json_value_module.F90:11122` |
| 18.6% |  85.0ms |      85 | `src/json-fortran/src/json_value_module.F90:11073` |
|  8.6% |  39.0ms |      39 | `src/json-fortran/src/json_value_module.F90:11084` |
|  6.6% |  30.0ms |      30 | `src/json-fortran/src/json_value_module.F90:11098` |

##### `__json_value_module_MOD_parse_object` (`src/json-fortran/src/json_value_module.F90`)

|     % |   Time | Samples | Location                                           |
| ----: | -----: | ------: | -------------------------------------------------- |
| 26.3% | 97.0ms |      97 | `src/json-fortran/src/json_value_module.F90:10910` |
| 14.4% | 53.0ms |      53 | `src/json-fortran/src/json_value_module.F90:10918` |
| 13.0% | 48.0ms |      48 | `src/json-fortran/src/json_value_module.F90:10969` |
| 12.7% | 47.0ms |      47 | `src/json-fortran/src/json_value_module.F90:10962` |
| 12.5% | 46.0ms |      46 | `src/json-fortran/src/json_value_module.F90:10938` |

##### `__json_string_utilities_MOD_string_to_integer` (`src/json-fortran/src/json_string_utilities.F90`)

|     % |    Time | Samples | Location                                             |
| ----: | ------: | ------: | ---------------------------------------------------- |
| 50.3% | 156.0ms |     156 | `src/json-fortran/src/json_string_utilities.F90:134` |
| 48.4% | 150.0ms |     150 | `src/json-fortran/src/json_string_utilities.F90:132` |
|  0.6% |   2.0ms |       2 | `src/json-fortran/src/json_string_utilities.F90:130` |
|  0.3% |   1.0ms |       1 | `src/json-fortran/src/json_string_utilities.F90:128` |
|  0.3% |   1.0ms |       1 | `src/json-fortran/src/json_string_utilities.F90:131` |

##### `__json_value_module_MOD_parse_value` (`src/json-fortran/src/json_value_module.F90`)

|     % |   Time | Samples | Location                                           |
| ----: | -----: | ------: | -------------------------------------------------- |
| 45.0% | 54.0ms |      54 | `src/json-fortran/src/json_value_module.F90:10145` |
| 27.5% | 33.0ms |      33 | `src/json-fortran/src/json_value_module.F90:10186` |
| 10.8% | 13.0ms |      13 | `src/json-fortran/src/json_value_module.F90:10185` |
|  6.7% |  8.0ms |       8 | `src/json-fortran/src/json_value_module.F90:10221` |
|  1.7% |  2.0ms |       2 | `src/json-fortran/src/json_value_module.F90:10209` |

##### `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 98.0% | 97.0ms |      97 | `src/json-fortran/src/json_value_module.F90:2211` |
|  2.0% |  2.0ms |       2 | `src/json-fortran/src/json_value_module.F90:2204` |

##### `__json_value_module_MOD_json_parse_file` (`src/json-fortran/src/json_value_module.F90`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 93.9% | 77.0ms |      77 | `src/json-fortran/src/json_value_module.F90:9770` |
|  4.9% |  4.0ms |       4 | `src/json-fortran/src/json_value_module.F90:9808` |
|  1.2% |  1.0ms |       1 | `src/json-fortran/src/json_value_module.F90:9778` |

##### `__json_value_module_MOD_json_value_destroy` (`src/json-fortran/src/json_value_module.F90`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 41.1% | 30.0ms |      30 | `src/json-fortran/src/json_value_module.F90:2259` |
| 39.7% | 29.0ms |      29 | `src/json-fortran/src/json_value_module.F90:2296` |
|  5.5% |  4.0ms |       4 | `src/json-fortran/src/json_value_module.F90:2273` |
|  5.5% |  4.0ms |       4 | `src/json-fortran/src/json_value_module.F90:2277` |
|  2.7% |  2.0ms |       2 | `src/json-fortran/src/json_value_module.F90:2301` |

##### `__json_value_module_MOD_string_to_int` (`src/json-fortran/src/json_value_module.F90`)

|      % |   Time | Samples | Location                                          |
| -----: | -----: | ------: | ------------------------------------------------- |
| 100.0% | 60.0ms |      60 | `src/json-fortran/src/json_value_module.F90:8074` |

##### `__json_value_module_MOD_parse_number` (`src/json-fortran/src/json_value_module.F90`)

|     % |   Time | Samples | Location                                           |
| ----: | -----: | ------: | -------------------------------------------------- |
| 62.9% | 22.0ms |      22 | `src/json-fortran/src/json_value_module.F90:11216` |
| 14.3% |  5.0ms |       5 | `src/json-fortran/src/json_value_module.F90:11225` |
|  8.6% |  3.0ms |       3 | `src/json-fortran/src/json_value_module.F90:11292` |
|  8.6% |  3.0ms |       3 | `src/json-fortran/src/json_value_module.F90:11283` |
|  5.7% |  2.0ms |       2 | `src/json-fortran/src/json_value_module.F90:11252` |

##### `__json_string_utilities_MOD_unescape_string` (`src/json-fortran/src/json_string_utilities.F90`)

|     % |  Time | Samples | Location                                             |
| ----: | ----: | ------: | ---------------------------------------------------- |
| 26.3% | 5.0ms |       5 | `src/json-fortran/src/json_string_utilities.F90:506` |
| 21.1% | 4.0ms |       4 | `src/json-fortran/src/json_string_utilities.F90:605` |
| 15.8% | 3.0ms |       3 | `src/json-fortran/src/json_string_utilities.F90:501` |
| 10.5% | 2.0ms |       2 | `src/json-fortran/src/json_string_utilities.F90:611` |
| 10.5% | 2.0ms |       2 | `src/json-fortran/src/json_string_utilities.F90:615` |

##### `__json_value_module_MOD_destroy_json_data` (`src/json-fortran/src/json_value_module.F90`)

|     % |  Time | Samples | Location                                          |
| ----: | ----: | ------: | ------------------------------------------------- |
| 50.0% | 9.0ms |       9 | `src/json-fortran/src/json_value_module.F90:1398` |
| 22.2% | 4.0ms |       4 | `src/json-fortran/src/json_value_module.F90:1396` |
| 11.1% | 2.0ms |       2 | `src/json-fortran/src/json_value_module.F90:1400` |
| 11.1% | 2.0ms |       2 | `src/json-fortran/src/json_value_module.F90:1393` |
|  5.6% | 1.0ms |       1 | `src/json-fortran/src/json_value_module.F90:1395` |

##### `__json_value_module_MOD_to_string` (`src/json-fortran/src/json_value_module.F90`)

|     % |  Time | Samples | Location                                           |
| ----: | ----: | ------: | -------------------------------------------------- |
| 75.0% | 6.0ms |       6 | `src/json-fortran/src/json_value_module.F90:10800` |
| 25.0% | 2.0ms |       2 | `src/json-fortran/src/json_value_module.F90:10776` |

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

##### `__json_value_module_MOD_parse_array` (`src/json-fortran/src/json_value_module.F90`)

|     % |  Time | Samples | Location                                           |
| ----: | ----: | ------: | -------------------------------------------------- |
| 66.7% | 4.0ms |       4 | `src/json-fortran/src/json_value_module.F90:11018` |
| 16.7% | 1.0ms |       1 | `src/json-fortran/src/json_value_module.F90:11007` |
| 16.7% | 1.0ms |       1 | `src/json-fortran/src/json_value_module.F90:11006` |

##### `MAIN__` (`out/profile.f90`)

|      % |  Time | Samples | Location             |
| -----: | ----: | ------: | -------------------- |
| 100.0% | 5.0ms |       5 | `out/profile.f90:31` |

##### `main` (`out/profile.f90`)

|      % |  Time | Samples | Location            |
| -----: | ----: | ------: | ------------------- |
| 100.0% | 4.0ms |       4 | `out/profile.f90:6` |

##### `__json_value_module_MOD_pop_char` (`src/json-fortran/src/json_value_module.F90`)

|      % |  Time | Samples | Location                                           |
| -----: | ----: | ------: | -------------------------------------------------- |
| 100.0% | 4.0ms |       4 | `src/json-fortran/src/json_value_module.F90:11341` |

##### `__json_value_module_MOD_json_info` (`src/json-fortran/src/json_value_module.F90`)

|     % |  Time | Samples | Location                                          |
| ----: | ----: | ------: | ------------------------------------------------- |
| 66.7% | 2.0ms |       2 | `src/json-fortran/src/json_value_module.F90:1419` |
| 33.3% | 1.0ms |       1 | `src/json-fortran/src/json_value_module.F90:1423` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`)

|     % |    Time | Samples | Caller                                    | Location                                     |
| ----: | ------: | ------: | ----------------------------------------- | -------------------------------------------- |
| 59.0% |   1.28s |   1,284 | `__json_value_module_MOD_parse_string`    | `src/json-fortran/src/json_value_module.F90` |
| 26.9% | 586.0ms |     586 | `__json_value_module_MOD_parse_object`    | `src/json-fortran/src/json_value_module.F90` |
|  7.7% | 167.0ms |     167 | `__json_value_module_MOD_parse_value`     | `src/json-fortran/src/json_value_module.F90` |
|  3.1% |  68.0ms |      68 | `__json_value_module_MOD_parse_for_chars` | `src/json-fortran/src/json_value_module.F90` |
|  2.8% |  62.0ms |      62 | `__json_value_module_MOD_parse_number`    | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_parse_string` (`src/json-fortran/src/json_value_module.F90`)

|     % |    Time | Samples | Caller                                 | Location                                     |
| ----: | ------: | ------: | -------------------------------------- | -------------------------------------------- |
| 59.4% | 271.0ms |     271 | `__json_value_module_MOD_parse_object` | `src/json-fortran/src/json_value_module.F90` |
| 40.6% | 185.0ms |     185 | `__json_value_module_MOD_parse_value`  | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_parse_object` (`src/json-fortran/src/json_value_module.F90`)

|     % |    Time | Samples | Caller                                 | Location                                     |
| ----: | ------: | ------: | -------------------------------------- | -------------------------------------------- |
| 98.1% | 362.0ms |     362 | `__json_value_module_MOD_parse_object` | `src/json-fortran/src/json_value_module.F90` |
|  1.9% |   7.0ms |       7 | `__json_value_module_MOD_parse_array`  | `src/json-fortran/src/json_value_module.F90` |

##### `__json_string_utilities_MOD_string_to_integer` (`src/json-fortran/src/json_string_utilities.F90`)

|     % |    Time | Samples | Caller                                             | Location                                     |
| ----: | ------: | ------: | -------------------------------------------------- | -------------------------------------------- |
| 95.8% | 297.0ms |     297 | `__json_value_module_MOD_string_to_int`            | `src/json-fortran/src/json_value_module.F90` |
|  4.2% |  13.0ms |      13 | `__json_value_module_MOD_json_get_by_path_default` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_parse_value` (`src/json-fortran/src/json_value_module.F90`)

|     % |    Time | Samples | Caller                                 | Location                                     |
| ----: | ------: | ------: | -------------------------------------- | -------------------------------------------- |
| 91.7% | 110.0ms |     110 | `__json_value_module_MOD_parse_object` | `src/json-fortran/src/json_value_module.F90` |
|  8.3% |  10.0ms |      10 | `__json_value_module_MOD_parse_array`  | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`)

|     % |   Time | Samples | Caller                                 | Location                                     |
| ----: | -----: | ------: | -------------------------------------- | -------------------------------------------- |
| 93.9% | 93.0ms |      93 | `__json_value_module_MOD_parse_object` | `src/json-fortran/src/json_value_module.F90` |
|  6.1% |  6.0ms |       6 | `__json_value_module_MOD_parse_array`  | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_json_parse_file` (`src/json-fortran/src/json_value_module.F90`)

|      % |   Time | Samples | Caller                                  | Location                                    |
| -----: | -----: | ------: | --------------------------------------- | ------------------------------------------- |
| 100.0% | 82.0ms |      82 | `__json_file_module_MOD_json_file_load` | `src/json-fortran/src/json_file_module.F90` |

##### `_init` (`<unknown>`)

|     % |   Time | Samples | Caller                                       | Location                                     |
| ----: | -----: | ------: | -------------------------------------------- | -------------------------------------------- |
| 64.2% | 52.0ms |      52 | `__json_value_module_MOD_parse_object`       | `src/json-fortran/src/json_value_module.F90` |
| 14.8% | 12.0ms |      12 | `__json_value_module_MOD_parse_value`        | `src/json-fortran/src/json_value_module.F90` |
|  7.4% |  6.0ms |       6 | `__json_value_module_MOD_json_value_destroy` | `src/json-fortran/src/json_value_module.F90` |
|  4.9% |  4.0ms |       4 | `__json_value_module_MOD_string_to_int`      | `src/json-fortran/src/json_value_module.F90` |
|  3.7% |  3.0ms |       3 | `__json_value_module_MOD_parse_number`       | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_json_value_destroy` (`src/json-fortran/src/json_value_module.F90`)

|      % |   Time | Samples | Caller                                       | Location                                     |
| -----: | -----: | ------: | -------------------------------------------- | -------------------------------------------- |
| 100.0% | 73.0ms |      73 | `__json_value_module_MOD_json_value_destroy` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_string_to_int` (`src/json-fortran/src/json_value_module.F90`)

|      % |   Time | Samples | Caller                                 | Location                                     |
| -----: | -----: | ------: | -------------------------------------- | -------------------------------------------- |
| 100.0% | 60.0ms |      60 | `__json_value_module_MOD_parse_number` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_parse_number` (`src/json-fortran/src/json_value_module.F90`)

|     % |   Time | Samples | Caller                                 | Location                                     |
| ----: | -----: | ------: | -------------------------------------- | -------------------------------------------- |
| 91.4% | 32.0ms |      32 | `__json_value_module_MOD_parse_object` | `src/json-fortran/src/json_value_module.F90` |
|  8.6% |  3.0ms |       3 | `__json_value_module_MOD_parse_array`  | `src/json-fortran/src/json_value_module.F90` |

##### `__json_string_utilities_MOD_unescape_string` (`src/json-fortran/src/json_string_utilities.F90`)

|      % |   Time | Samples | Caller                                 | Location                                     |
| -----: | -----: | ------: | -------------------------------------- | -------------------------------------------- |
| 100.0% | 19.0ms |      19 | `__json_value_module_MOD_parse_string` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_destroy_json_data` (`src/json-fortran/src/json_value_module.F90`)

|     % |   Time | Samples | Caller                                       | Location                                     |
| ----: | -----: | ------: | -------------------------------------------- | -------------------------------------------- |
| 83.3% | 15.0ms |      15 | `__json_value_module_MOD_json_value_destroy` | `src/json-fortran/src/json_value_module.F90` |
| 11.1% |  2.0ms |       2 | `__json_value_module_MOD_to_null`            | `src/json-fortran/src/json_value_module.F90` |
|  5.6% |  1.0ms |       1 | `__json_value_module_MOD_to_integer`         | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_to_string` (`src/json-fortran/src/json_value_module.F90`)

|      % |  Time | Samples | Caller                                | Location                                     |
| -----: | ----: | ------: | ------------------------------------- | -------------------------------------------- |
| 100.0% | 8.0ms |       8 | `__json_value_module_MOD_parse_value` | `src/json-fortran/src/json_value_module.F90` |

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

##### `__json_value_module_MOD_parse_array` (`src/json-fortran/src/json_value_module.F90`)

|      % |  Time | Samples | Caller                                 | Location                                     |
| -----: | ----: | ------: | -------------------------------------- | -------------------------------------------- |
| 100.0% | 6.0ms |       6 | `__json_value_module_MOD_parse_object` | `src/json-fortran/src/json_value_module.F90` |

##### `MAIN__` (`out/profile.f90`)

|      % |  Time | Samples | Caller | Location          |
| -----: | ----: | ------: | ------ | ----------------- |
| 100.0% | 5.0ms |       5 | `main` | `out/profile.f90` |

##### `main` (`out/profile.f90`)

|      % |  Time | Samples | Caller   | Location    |
| -----: | ----: | ------: | -------- | ----------- |
| 100.0% | 4.0ms |       4 | `_start` | `<unknown>` |

##### `__json_value_module_MOD_pop_char` (`src/json-fortran/src/json_value_module.F90`)

|     % |  Time | Samples | Caller                                 | Location                                     |
| ----: | ----: | ------: | -------------------------------------- | -------------------------------------------- |
| 50.0% | 2.0ms |       2 | `__json_value_module_MOD_parse_value`  | `src/json-fortran/src/json_value_module.F90` |
| 50.0% | 2.0ms |       2 | `__json_value_module_MOD_parse_object` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_json_info` (`src/json-fortran/src/json_value_module.F90`)

|      % |  Time | Samples | Caller                                          | Location                                     |
| -----: | ----: | ------: | ----------------------------------------------- | -------------------------------------------- |
| 100.0% | 3.0ms |       3 | `__json_value_module_MOD_json_value_add_member` | `src/json-fortran/src/json_value_module.F90` |

### Total time

Functions ranked by total time spent in the function and all its callees.

|      % |    Time | Samples | Function                                          | Location                                           |
| -----: | ------: | ------: | ------------------------------------------------- | -------------------------------------------------- |
| 100.0% |   3.95s |   3,956 | `main`                                            | `out/profile.f90`                                  |
| 100.0% |   3.95s |   3,956 | `_start`                                          | `<unknown>`                                        |
|  99.9% |   3.95s |   3,952 | `MAIN__`                                          | `out/profile.f90`                                  |
|  96.8% |   3.82s |   3,829 | `__json_value_module_MOD_json_parse_file`         | `src/json-fortran/src/json_value_module.F90`       |
|  96.8% |   3.82s |   3,829 | `__json_file_module_MOD_json_file_load`           | `src/json-fortran/src/json_file_module.F90`        |
|  94.4% |   3.73s |   3,736 | `__json_value_module_MOD_parse_object`            | `src/json-fortran/src/json_value_module.F90`       |
|  94.4% |   3.73s |   3,734 | `__json_value_module_MOD_parse_array`             | `src/json-fortran/src/json_value_module.F90`       |
|  55.0% |   2.17s |   2,176 | `__json_value_module_MOD_pop_char.part.0`         | `src/json-fortran/src/json_value_module.F90`       |
|  44.5% |   1.76s |   1,760 | `__json_value_module_MOD_parse_string`            | `src/json-fortran/src/json_value_module.F90`       |
|  31.1% |   1.23s |   1,232 | `__json_value_module_MOD_parse_value`             | `src/json-fortran/src/json_value_module.F90`       |
|  11.7% | 463.0ms |     463 | `__json_value_module_MOD_parse_number`            | `src/json-fortran/src/json_value_module.F90`       |
|   9.1% | 361.0ms |     361 | `__json_value_module_MOD_string_to_int`           | `src/json-fortran/src/json_value_module.F90`       |
|   7.8% | 310.0ms |     310 | `__json_string_utilities_MOD_string_to_integer`   | `src/json-fortran/src/json_string_utilities.F90`   |
|   2.5% |  99.0ms |      99 | `__json_value_module_MOD_json_value_create`       | `src/json-fortran/src/json_value_module.F90`       |
|   2.4% |  94.0ms |      94 | `__json_value_module_MOD_json_value_destroy`      | `src/json-fortran/src/json_value_module.F90`       |
|   2.4% |  94.0ms |      94 | `__json_file_module_MOD_json_file_destroy`        | `src/json-fortran/src/json_file_module.F90`        |
|   2.0% |  81.0ms |      81 | `_init`                                           | `<unknown>`                                        |
|   1.9% |  76.0ms |      76 | `__json_value_module_MOD_parse_for_chars`         | `src/json-fortran/src/json_value_module.F90`       |
|   0.6% |  24.0ms |      24 | `__json_file_module_MOD_json_file_get_string`     | `src/json-fortran/src/json_file_module.F90`        |
|   0.5% |  21.0ms |      21 | `__json_value_module_MOD_json_get_string_by_path` | `src/json-fortran/src/json_get_scalar_by_path.inc` |

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

|      % |   Time | Samples | Function | Location    |
| -----: | -----: | ------: | -------- | ----------- |
| 100.0% |  3.95s |   3,956 | `_start` | `<unknown>` |
|   2.0% | 81.0ms |      81 | `_init`  | `<unknown>` |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `main` (`out/profile.f90`)

|     % |  Time | Samples | Callee   | Location          |
| ----: | ----: | ------: | -------- | ----------------- |
| 99.9% | 3.95s |   3,952 | `MAIN__` | `out/profile.f90` |

##### `_start` (`<unknown>`)

|      % |  Time | Samples | Callee | Location          |
| -----: | ----: | ------: | ------ | ----------------- |
| 100.0% | 3.95s |   3,956 | `main` | `out/profile.f90` |

##### `MAIN__` (`out/profile.f90`)

|     % |   Time | Samples | Callee                                        | Location                                    |
| ----: | -----: | ------: | --------------------------------------------- | ------------------------------------------- |
| 96.9% |  3.82s |   3,829 | `__json_file_module_MOD_json_file_load`       | `src/json-fortran/src/json_file_module.F90` |
|  2.4% | 94.0ms |      94 | `__json_file_module_MOD_json_file_destroy`    | `src/json-fortran/src/json_file_module.F90` |
|  0.6% | 24.0ms |      24 | `__json_file_module_MOD_json_file_get_string` | `src/json-fortran/src/json_file_module.F90` |

##### `__json_value_module_MOD_json_parse_file` (`src/json-fortran/src/json_value_module.F90`)

|     % |   Time | Samples | Callee                                 | Location                                     |
| ----: | -----: | ------: | -------------------------------------- | -------------------------------------------- |
| 97.6% |  3.73s |   3,736 | `__json_value_module_MOD_parse_object` | `src/json-fortran/src/json_value_module.F90` |
|  0.3% | 11.0ms |      11 | `__json_value_module_MOD_parse_value`  | `src/json-fortran/src/json_value_module.F90` |

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

##### `__json_value_module_MOD_parse_string` (`src/json-fortran/src/json_value_module.F90`)

|     % |   Time | Samples | Callee                                        | Location                                         |
| ----: | -----: | ------: | --------------------------------------------- | ------------------------------------------------ |
| 73.0% |  1.28s |   1,284 | `__json_value_module_MOD_pop_char.part.0`     | `src/json-fortran/src/json_value_module.F90`     |
|  1.1% | 19.0ms |      19 | `__json_string_utilities_MOD_unescape_string` | `src/json-fortran/src/json_string_utilities.F90` |
|  0.1% |  1.0ms |       1 | `_init`                                       | `<unknown>`                                      |

##### `__json_value_module_MOD_parse_value` (`src/json-fortran/src/json_value_module.F90`)

|     % |    Time | Samples | Callee                                    | Location                                     |
| ----: | ------: | ------: | ----------------------------------------- | -------------------------------------------- |
| 68.8% | 848.0ms |     848 | `__json_value_module_MOD_parse_string`    | `src/json-fortran/src/json_value_module.F90` |
| 13.6% | 167.0ms |     167 | `__json_value_module_MOD_pop_char.part.0` | `src/json-fortran/src/json_value_module.F90` |
|  6.1% |  75.0ms |      75 | `__json_value_module_MOD_parse_for_chars` | `src/json-fortran/src/json_value_module.F90` |
|  1.0% |  12.0ms |      12 | `_init`                                   | `<unknown>`                                  |
|  0.6% |   8.0ms |       8 | `__json_value_module_MOD_to_string`       | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_parse_number` (`src/json-fortran/src/json_value_module.F90`)

|     % |    Time | Samples | Callee                                    | Location                                     |
| ----: | ------: | ------: | ----------------------------------------- | -------------------------------------------- |
| 78.0% | 361.0ms |     361 | `__json_value_module_MOD_string_to_int`   | `src/json-fortran/src/json_value_module.F90` |
| 13.4% |  62.0ms |      62 | `__json_value_module_MOD_pop_char.part.0` | `src/json-fortran/src/json_value_module.F90` |
|  0.6% |   3.0ms |       3 | `_init`                                   | `<unknown>`                                  |
|  0.4% |   2.0ms |       2 | `__json_value_module_MOD_to_integer`      | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_string_to_int` (`src/json-fortran/src/json_value_module.F90`)

|     % |    Time | Samples | Callee                                          | Location                                         |
| ----: | ------: | ------: | ----------------------------------------------- | ------------------------------------------------ |
| 82.3% | 297.0ms |     297 | `__json_string_utilities_MOD_string_to_integer` | `src/json-fortran/src/json_string_utilities.F90` |
|  1.1% |   4.0ms |       4 | `_init`                                         | `<unknown>`                                      |

##### `__json_value_module_MOD_json_value_destroy` (`src/json-fortran/src/json_value_module.F90`)

|      % |   Time | Samples | Callee                                       | Location                                     |
| -----: | -----: | ------: | -------------------------------------------- | -------------------------------------------- |
| 100.0% | 94.0ms |      94 | `__json_value_module_MOD_json_value_destroy` | `src/json-fortran/src/json_value_module.F90` |
|  16.0% | 15.0ms |      15 | `__json_value_module_MOD_destroy_json_data`  | `src/json-fortran/src/json_value_module.F90` |
|   6.4% |  6.0ms |       6 | `_init`                                      | `<unknown>`                                  |

##### `__json_file_module_MOD_json_file_destroy` (`src/json-fortran/src/json_file_module.F90`)

|      % |   Time | Samples | Callee                                       | Location                                     |
| -----: | -----: | ------: | -------------------------------------------- | -------------------------------------------- |
| 100.0% | 94.0ms |      94 | `__json_value_module_MOD_json_value_destroy` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_parse_for_chars` (`src/json-fortran/src/json_value_module.F90`)

|     % |   Time | Samples | Callee                                    | Location                                     |
| ----: | -----: | ------: | ----------------------------------------- | -------------------------------------------- |
| 89.5% | 68.0ms |      68 | `__json_value_module_MOD_pop_char.part.0` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_file_module_MOD_json_file_get_string` (`src/json-fortran/src/json_file_module.F90`)

|     % |   Time | Samples | Callee                                            | Location                                           |
| ----: | -----: | ------: | ------------------------------------------------- | -------------------------------------------------- |
| 87.5% | 21.0ms |      21 | `__json_value_module_MOD_json_get_string_by_path` | `src/json-fortran/src/json_get_scalar_by_path.inc` |

##### `__json_value_module_MOD_json_get_string_by_path` (`src/json-fortran/src/json_get_scalar_by_path.inc`)

|     % |   Time | Samples | Callee                                     | Location                                     |
| ----: | -----: | ------: | ------------------------------------------ | -------------------------------------------- |
| 95.2% | 20.0ms |      20 | `__json_value_module_MOD_json_get_by_path` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_json_get_by_path_default` (`src/json-fortran/src/json_value_module.F90`)

|     % |   Time | Samples | Callee                                                  | Location                                         |
| ----: | -----: | ------: | ------------------------------------------------------- | ------------------------------------------------ |
| 65.0% | 13.0ms |      13 | `__json_string_utilities_MOD_string_to_integer`         | `src/json-fortran/src/json_string_utilities.F90` |
| 20.0% |  4.0ms |       4 | `__json_value_module_MOD_json_value_get_child_by_name`  | `src/json-fortran/src/json_value_module.F90`     |
|  5.0% |  1.0ms |       1 | `__json_value_module_MOD_json_value_get_child_by_index` | `src/json-fortran/src/json_value_module.F90`     |
|  5.0% |  1.0ms |       1 | `_init`                                                 | `<unknown>`                                      |

##### `__json_value_module_MOD_json_get_by_path` (`src/json-fortran/src/json_value_module.F90`)

|      % |   Time | Samples | Callee                                             | Location                                     |
| -----: | -----: | ------: | -------------------------------------------------- | -------------------------------------------- |
| 100.0% | 20.0ms |      20 | `__json_value_module_MOD_json_get_by_path_default` | `src/json-fortran/src/json_value_module.F90` |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

Common call stack: `MAIN__` (`out/profile.f90`) ← `main` ← `_start`

|    % |   Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ---: | -----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2.1% | 85.0ms |      85 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_string` ← `__json_value_module_MOD_parse_value` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 2.1% | 82.0ms |      82 | `__json_value_module_MOD_json_parse_file` (`src/json-fortran/src/json_value_module.F90`) ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 1.8% | 72.0ms |      72 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_string` ← `__json_value_module_MOD_parse_value` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 1.4% | 54.0ms |      54 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_string` ← `__json_value_module_MOD_parse_value` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 1.0% | 38.0ms |      38 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_string` ← `__json_value_module_MOD_parse_value` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 0.8% | 30.0ms |      30 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_string` ← `__json_value_module_MOD_parse_value` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 0.7% | 29.0ms |      29 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_string` ← `__json_value_module_MOD_parse_value` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 0.7% | 28.0ms |      28 | `__json_value_module_MOD_json_value_destroy` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_json_value_destroy` ← `__json_value_module_MOD_json_value_destroy` ← `__json_value_module_MOD_json_value_destroy` ← `__json_value_module_MOD_json_value_destroy` ← `__json_file_module_MOD_json_file_destroy` (`src/json-fortran/src/json_file_module.F90`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 0.7% | 28.0ms |      28 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_string` ← `__json_value_module_MOD_parse_value` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 0.7% | 27.0ms |      27 | `__json_string_utilities_MOD_string_to_integer` (`src/json-fortran/src/json_string_utilities.F90`) ← `__json_value_module_MOD_string_to_int` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_number` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 0.6% | 24.0ms |      24 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 0.6% | 23.0ms |      23 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 0.6% | 22.0ms |      22 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_string` ← `__json_value_module_MOD_parse_value` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 0.6% | 22.0ms |      22 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_string` ← `__json_value_module_MOD_parse_value` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) |
| 0.6% | 22.0ms |      22 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_string` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 0.5% | 21.0ms |      21 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_string` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 0.5% | 21.0ms |      21 | `__json_string_utilities_MOD_string_to_integer` (`src/json-fortran/src/json_string_utilities.F90`) ← `__json_value_module_MOD_string_to_int` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_number` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 0.5% | 21.0ms |      21 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_string` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 0.5% | 20.0ms |      20 | `__json_value_module_MOD_parse_string` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_value` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 0.5% | 19.0ms |      19 | `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_string` ← `__json_value_module_MOD_parse_value` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
