# CPU profile

Took 4.04s over 4,043 samples (1.0ms per sample).

| Category |     % |    Time | Samples |
| -------- | ----: | ------: | ------: |
| Ours     | 59.2% |   2.39s |   2,394 |
| Native   | 23.7% | 957.0ms |     957 |
| Unknown  | 17.1% | 692.0ms |     692 |

Paths starting with `./` or `../` are relative to `/src/json-fortran/src/`.

## Hottest functions

### Self time

Functions with the most time spent within the function body, excluding callees.

|     % |    Time | Samples | Function                                      | Location                          |
| ----: | ------: | ------: | --------------------------------------------- | --------------------------------- |
| 51.7% |   2.09s |   2,091 | `__json_value_module_MOD_pop_char.part.0`     | `./json_value_module.F90:11318`   |
| 17.1% | 692.0ms |     692 | `(anonymous)`                                 | `<unknown>`                       |
|  7.0% | 281.0ms |     281 | `_gfortran_string_scan`                       | `<unknown>`                       |
|  3.8% | 155.0ms |     155 | `__json_value_module_MOD_parse_string`        | `./json_value_module.F90:11052`   |
|  3.4% | 138.0ms |     138 | `__libc_malloc`                               | `<unknown>`                       |
|  3.2% | 129.0ms |     129 | `_gfortran_string_len_trim`                   | `<unknown>`                       |
|  3.0% | 123.0ms |     123 | `cfree`                                       | `<unknown>`                       |
|  2.2% |  88.0ms |      88 | `_init`                                       | `<unknown>`                       |
|  1.4% |  56.0ms |      56 | `__libc_realloc`                              | `<unknown>`                       |
|  1.1% |  44.0ms |      44 | `__read`                                      | `<unknown>`                       |
|  0.6% |  25.0ms |      25 | `__json_value_module_MOD_parse_value`         | `./json_value_module.F90:10117`   |
|  0.5% |  21.0ms |      21 | `__json_value_module_MOD_parse_object`        | `./json_value_module.F90:10882`   |
|  0.5% |  21.0ms |      21 | `__json_string_utilities_MOD_unescape_string` | `./json_string_utilities.F90:483` |
|  0.4% |  17.0ms |      17 | `__open`                                      | `<unknown>`                       |
|  0.4% |  17.0ms |      17 | `__json_value_module_MOD_destroy_json_data`   | `./json_value_module.F90:1387`    |
|  0.4% |  15.0ms |      15 | `__json_value_module_MOD_json_value_destroy`  | `./json_value_module.F90:2237`    |
|  0.3% |  11.0ms |      11 | `calloc`                                      | `<unknown>`                       |
|  0.2% |  10.0ms |      10 | `__json_value_module_MOD_parse_number`        | `./json_value_module.F90:11192`   |
|  0.2% |  10.0ms |      10 | `__pthread_mutex_lock`                        | `<unknown>`                       |
|  0.2% |   9.0ms |       9 | `_gfortran_st_write_done`                     | `<unknown>`                       |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Ours

|     % |    Time | Samples | Function                                           | Location                          |
| ----: | ------: | ------: | -------------------------------------------------- | --------------------------------- |
| 51.7% |   2.09s |   2,091 | `__json_value_module_MOD_pop_char.part.0`          | `./json_value_module.F90:11318`   |
|  3.8% | 155.0ms |     155 | `__json_value_module_MOD_parse_string`             | `./json_value_module.F90:11052`   |
|  0.6% |  25.0ms |      25 | `__json_value_module_MOD_parse_value`              | `./json_value_module.F90:10117`   |
|  0.5% |  21.0ms |      21 | `__json_value_module_MOD_parse_object`             | `./json_value_module.F90:10882`   |
|  0.5% |  21.0ms |      21 | `__json_string_utilities_MOD_unescape_string`      | `./json_string_utilities.F90:483` |
|  0.4% |  17.0ms |      17 | `__json_value_module_MOD_destroy_json_data`        | `./json_value_module.F90:1387`    |
|  0.4% |  15.0ms |      15 | `__json_value_module_MOD_json_value_destroy`       | `./json_value_module.F90:2237`    |
|  0.2% |  10.0ms |      10 | `__json_value_module_MOD_parse_number`             | `./json_value_module.F90:11192`   |
|  0.2% |   8.0ms |       8 | `__json_value_module_MOD_json_value_add_member`    | `./json_value_module.F90:3394`    |
|  0.2% |   7.0ms |       7 | `__json_value_module_MOD_parse_for_chars`          | `./json_value_module.F90:11145`   |
|  0.1% |   4.0ms |       4 | `__json_value_module_MOD_pop_char`                 | `./json_value_module.F90:11318`   |
|  0.1% |   3.0ms |       3 | `__json_value_module_MOD_json_value_create`        | `./json_value_module.F90:2204`    |
|  0.1% |   3.0ms |       3 | `__json_value_module_MOD_json_info`                | `./json_value_module.F90:1409`    |
| <0.1% |   2.0ms |       2 | `__json_string_utilities_MOD_string_to_integer`    | `./json_string_utilities.F90:116` |
| <0.1% |   2.0ms |       2 | `__json_value_module_MOD_to_string`                | `./json_value_module.F90:10755`   |
| <0.1% |   2.0ms |       2 | `__json_value_module_MOD_to_logical`               | `./json_value_module.F90:10659`   |
| <0.1% |   1.0ms |       1 | `__json_value_module_MOD_parse_array`              | `./json_value_module.F90:10987`   |
| <0.1% |   1.0ms |       1 | `__json_value_module_MOD_json_get_string_by_path`  | `./json_value_module.F90:9182`    |
| <0.1% |   1.0ms |       1 | `__json_value_module_MOD_json_get_by_path_default` | `./json_value_module.F90:6787`    |
| <0.1% |   1.0ms |       1 | `__json_value_module_MOD_json_get_by_path`         | `./json_value_module.F90:6495`    |

##### Native

|     % |    Time | Samples | Function                       | Location    |
| ----: | ------: | ------: | ------------------------------ | ----------- |
|  7.0% | 281.0ms |     281 | `_gfortran_string_scan`        | `<unknown>` |
|  3.4% | 138.0ms |     138 | `__libc_malloc`                | `<unknown>` |
|  3.2% | 129.0ms |     129 | `_gfortran_string_len_trim`    | `<unknown>` |
|  3.0% | 123.0ms |     123 | `cfree`                        | `<unknown>` |
|  2.2% |  88.0ms |      88 | `_init`                        | `<unknown>` |
|  1.4% |  56.0ms |      56 | `__libc_realloc`               | `<unknown>` |
|  1.1% |  44.0ms |      44 | `__read`                       | `<unknown>` |
|  0.4% |  17.0ms |      17 | `__open`                       | `<unknown>` |
|  0.3% |  11.0ms |      11 | `calloc`                       | `<unknown>` |
|  0.2% |  10.0ms |      10 | `__pthread_mutex_lock`         | `<unknown>` |
|  0.2% |   9.0ms |       9 | `_gfortran_st_write_done`      | `<unknown>` |
|  0.2% |   7.0ms |       7 | `__ctype_toupper_loc`          | `<unknown>` |
|  0.1% |   6.0ms |       6 | `log10f32`                     | `<unknown>` |
|  0.1% |   6.0ms |       6 | `__uselocale`                  | `<unknown>` |
|  0.1% |   4.0ms |       4 | `_gfortran_transfer_character` | `<unknown>` |
|  0.1% |   3.0ms |       3 | `_gfortran_string_trim`        | `<unknown>` |
|  0.1% |   3.0ms |       3 | `_gfortran_concat_string`      | `<unknown>` |
|  0.1% |   3.0ms |       3 | `_gfortran_transfer_integer`   | `<unknown>` |
|  0.1% |   3.0ms |       3 | `_gfortran_st_write`           | `<unknown>` |
| <0.1% |   2.0ms |       2 | `__log10f_finite`              | `<unknown>` |

##### Unknown

|     % |    Time | Samples | Function      | Location    |
| ----: | ------: | ------: | ------------- | ----------- |
| 17.1% | 692.0ms |     692 | `(anonymous)` | `<unknown>` |

#### Lines

Lines with the largest contribution to each function's self time.

##### `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90:11318`)

|     % |   Time | Samples | Location                        |
| ----: | -----: | ------: | ------------------------------- |
| 72.3% |  1.51s |   1,511 | `./json_value_module.F90:11447` |
|  4.5% | 95.0ms |      95 | `./json_value_module.F90:11469` |
|  4.3% | 90.0ms |      90 | `./json_value_module.F90:11395` |
|  3.5% | 73.0ms |      73 | `./json_value_module.F90:11452` |
|  3.3% | 70.0ms |      70 | `./json_value_module.F90:11318` |

##### `__json_value_module_MOD_parse_string` (`./json_value_module.F90:11052`)

|     % |   Time | Samples | Location                        |
| ----: | -----: | ------: | ------------------------------- |
| 36.1% | 56.0ms |      56 | `./json_value_module.F90:11084` |
| 19.4% | 30.0ms |      30 | `./json_value_module.F90:11086` |
| 13.5% | 21.0ms |      21 | `./json_value_module.F90:11098` |
| 13.5% | 21.0ms |      21 | `./json_value_module.F90:11091` |
|  5.2% |  8.0ms |       8 | `./json_value_module.F90:11122` |

##### `__json_value_module_MOD_parse_value` (`./json_value_module.F90:10117`)

|     % |   Time | Samples | Location                        |
| ----: | -----: | ------: | ------------------------------- |
| 44.0% | 11.0ms |      11 | `./json_value_module.F90:10221` |
| 12.0% |  3.0ms |       3 | `./json_value_module.F90:10202` |
|  8.0% |  2.0ms |       2 | `./json_value_module.F90:10147` |
|  4.0% |  1.0ms |       1 | `./json_value_module.F90:10177` |
|  4.0% |  1.0ms |       1 | `./json_value_module.F90:10117` |

##### `__json_value_module_MOD_parse_object` (`./json_value_module.F90:10882`)

|     % |  Time | Samples | Location                        |
| ----: | ----: | ------: | ------------------------------- |
| 19.0% | 4.0ms |       4 | `./json_value_module.F90:10969` |
|  9.5% | 2.0ms |       2 | `./json_value_module.F90:10910` |
|  9.5% | 2.0ms |       2 | `./json_value_module.F90:10974` |
|  9.5% | 2.0ms |       2 | `./json_value_module.F90:10980` |
|  9.5% | 2.0ms |       2 | `./json_value_module.F90:10948` |

##### `__json_string_utilities_MOD_unescape_string` (`./json_string_utilities.F90:483`)

|     % |  Time | Samples | Location                          |
| ----: | ----: | ------: | --------------------------------- |
| 33.3% | 7.0ms |       7 | `./json_string_utilities.F90:605` |
| 19.0% | 4.0ms |       4 | `./json_string_utilities.F90:514` |
| 14.3% | 3.0ms |       3 | `./json_string_utilities.F90:615` |
|  9.5% | 2.0ms |       2 | `./json_string_utilities.F90:506` |
|  9.5% | 2.0ms |       2 | `./json_string_utilities.F90:483` |

##### `__json_value_module_MOD_destroy_json_data` (`./json_value_module.F90:1387`)

|     % |  Time | Samples | Location                       |
| ----: | ----: | ------: | ------------------------------ |
| 47.1% | 8.0ms |       8 | `./json_value_module.F90:1396` |
| 11.8% | 2.0ms |       2 | `./json_value_module.F90:1400` |
| 11.8% | 2.0ms |       2 | `./json_value_module.F90:1395` |
| 11.8% | 2.0ms |       2 | `./json_value_module.F90:1397` |
| 11.8% | 2.0ms |       2 | `./json_value_module.F90:1398` |

##### `__json_value_module_MOD_json_value_destroy` (`./json_value_module.F90:2237`)

|     % |  Time | Samples | Location                       |
| ----: | ----: | ------: | ------------------------------ |
| 33.3% | 5.0ms |       5 | `./json_value_module.F90:2296` |
| 20.0% | 3.0ms |       3 | `./json_value_module.F90:2301` |
| 13.3% | 2.0ms |       2 | `./json_value_module.F90:2290` |
|  6.7% | 1.0ms |       1 | `./json_value_module.F90:2270` |
|  6.7% | 1.0ms |       1 | `./json_value_module.F90:2277` |

##### `__json_value_module_MOD_parse_number` (`./json_value_module.F90:11192`)

|     % |  Time | Samples | Location                        |
| ----: | ----: | ------: | ------------------------------- |
| 50.0% | 5.0ms |       5 | `./json_value_module.F90:11292` |
| 20.0% | 2.0ms |       2 | `./json_value_module.F90:11252` |
| 10.0% | 1.0ms |       1 | `./json_value_module.F90:11216` |
| 10.0% | 1.0ms |       1 | `./json_value_module.F90:11225` |
| 10.0% | 1.0ms |       1 | `./json_value_module.F90:11266` |

##### `__json_value_module_MOD_json_value_add_member` (`./json_value_module.F90:3394`)

|     % |  Time | Samples | Location                       |
| ----: | ----: | ------: | ------------------------------ |
| 25.0% | 2.0ms |       2 | `./json_value_module.F90:3423` |
| 25.0% | 2.0ms |       2 | `./json_value_module.F90:3443` |
| 12.5% | 1.0ms |       1 | `./json_value_module.F90:3429` |
| 12.5% | 1.0ms |       1 | `./json_value_module.F90:3408` |
| 12.5% | 1.0ms |       1 | `./json_value_module.F90:3406` |

##### `__json_value_module_MOD_parse_for_chars` (`./json_value_module.F90:11145`)

|     % |  Time | Samples | Location                        |
| ----: | ----: | ------: | ------------------------------- |
| 71.4% | 5.0ms |       5 | `./json_value_module.F90:11164` |
| 14.3% | 1.0ms |       1 | `./json_value_module.F90:11165` |
| 14.3% | 1.0ms |       1 | `./json_value_module.F90:11163` |

##### `__json_value_module_MOD_pop_char` (`./json_value_module.F90:11318`)

|      % |  Time | Samples | Location                        |
| -----: | ----: | ------: | ------------------------------- |
| 100.0% | 4.0ms |       4 | `./json_value_module.F90:11341` |

##### `__json_value_module_MOD_json_value_create` (`./json_value_module.F90:2204`)

|     % |  Time | Samples | Location                       |
| ----: | ----: | ------: | ------------------------------ |
| 66.7% | 2.0ms |       2 | `./json_value_module.F90:2211` |
| 33.3% | 1.0ms |       1 | `./json_value_module.F90:2213` |

##### `__json_value_module_MOD_json_info` (`./json_value_module.F90:1409`)

|     % |  Time | Samples | Location                       |
| ----: | ----: | ------: | ------------------------------ |
| 33.3% | 1.0ms |       1 | `./json_value_module.F90:1423` |
| 33.3% | 1.0ms |       1 | `./json_value_module.F90:1421` |
| 33.3% | 1.0ms |       1 | `./json_value_module.F90:1419` |

##### `__json_string_utilities_MOD_string_to_integer` (`./json_string_utilities.F90:116`)

|      % |  Time | Samples | Location                          |
| -----: | ----: | ------: | --------------------------------- |
| 100.0% | 2.0ms |       2 | `./json_string_utilities.F90:134` |

##### `__json_value_module_MOD_to_string` (`./json_value_module.F90:10755`)

|      % |  Time | Samples | Location                        |
| -----: | ----: | ------: | ------------------------------- |
| 100.0% | 2.0ms |       2 | `./json_value_module.F90:10800` |

##### `__json_value_module_MOD_to_logical` (`./json_value_module.F90:10659`)

|     % |  Time | Samples | Location                        |
| ----: | ----: | ------: | ------------------------------- |
| 50.0% | 1.0ms |       1 | `./json_value_module.F90:10672` |
| 50.0% | 1.0ms |       1 | `./json_value_module.F90:10659` |

##### `__json_value_module_MOD_parse_array` (`./json_value_module.F90:10987`)

|      % |  Time | Samples | Location                        |
| -----: | ----: | ------: | ------------------------------- |
| 100.0% | 1.0ms |       1 | `./json_value_module.F90:11039` |

##### `__json_value_module_MOD_json_get_string_by_path` (`./json_value_module.F90:9182`)

|      % |  Time | Samples | Location                       |
| -----: | ----: | ------: | ------------------------------ |
| 100.0% | 1.0ms |       1 | `./json_value_module.F90:9198` |

##### `__json_value_module_MOD_json_get_by_path_default` (`./json_value_module.F90:6787`)

|      % |  Time | Samples | Location                       |
| -----: | ----: | ------: | ------------------------------ |
| 100.0% | 1.0ms |       1 | `./json_value_module.F90:6975` |

##### `__json_value_module_MOD_json_get_by_path` (`./json_value_module.F90:6495`)

|      % |  Time | Samples | Location                       |
| -----: | ----: | ------: | ------------------------------ |
| 100.0% | 1.0ms |       1 | `./json_value_module.F90:6495` |

#### Callers

Callers with the largest contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90:11318`)

|     % |    Time | Samples | Caller                                    | Location                        |
| ----: | ------: | ------: | ----------------------------------------- | ------------------------------- |
| 58.6% |   1.22s |   1,225 | `__json_value_module_MOD_parse_string`    | `./json_value_module.F90:11052` |
| 27.8% | 582.0ms |     582 | `__json_value_module_MOD_parse_object`    | `./json_value_module.F90:10882` |
|  7.7% | 160.0ms |     160 | `__json_value_module_MOD_parse_value`     | `./json_value_module.F90:10117` |
|  3.0% |  63.0ms |      63 | `__json_value_module_MOD_parse_number`    | `./json_value_module.F90:11192` |
|  2.3% |  48.0ms |      48 | `__json_value_module_MOD_parse_for_chars` | `./json_value_module.F90:11145` |

##### `(anonymous)` (`<unknown>`)

|     % |    Time | Samples | Caller                                          | Location                          |
| ----: | ------: | ------: | ----------------------------------------------- | --------------------------------- |
| 49.9% | 345.0ms |     345 | `(anonymous)`                                   | `<unknown>`                       |
| 24.3% | 168.0ms |     168 | `__libc_malloc`                                 | `<unknown>`                       |
|  8.7% |  60.0ms |      60 | `cfree`                                         | `<unknown>`                       |
|  6.6% |  46.0ms |      46 | `__json_value_module_MOD_parse_object`          | `./json_value_module.F90:10882`   |
|  2.9% |  20.0ms |      20 | `__json_string_utilities_MOD_string_to_integer` | `./json_string_utilities.F90:116` |

##### `_gfortran_string_scan` (`<unknown>`)

|     % |    Time | Samples | Caller                                 | Location                        |
| ----: | ------: | ------: | -------------------------------------- | ------------------------------- |
| 46.3% | 130.0ms |     130 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90:10882` |
| 44.1% | 124.0ms |     124 | `__json_value_module_MOD_parse_string` | `./json_value_module.F90:11052` |
|  7.8% |  22.0ms |      22 | `__json_value_module_MOD_parse_value`  | `./json_value_module.F90:10117` |
|  1.8% |   5.0ms |       5 | `__json_value_module_MOD_parse_array`  | `./json_value_module.F90:10987` |

##### `__json_value_module_MOD_parse_string` (`./json_value_module.F90:11052`)

|     % |   Time | Samples | Caller                                 | Location                        |
| ----: | -----: | ------: | -------------------------------------- | ------------------------------- |
| 50.3% | 78.0ms |      78 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90:10882` |
| 49.7% | 77.0ms |      77 | `__json_value_module_MOD_parse_value`  | `./json_value_module.F90:10117` |

##### `__libc_malloc` (`<unknown>`)

|     % |   Time | Samples | Caller                                      | Location                        |
| ----: | -----: | ------: | ------------------------------------------- | ------------------------------- |
| 32.6% | 45.0ms |      45 | `__json_value_module_MOD_parse_object`      | `./json_value_module.F90:10882` |
| 23.9% | 33.0ms |      33 | `__json_value_module_MOD_parse_string`      | `./json_value_module.F90:11052` |
| 10.1% | 14.0ms |      14 | `__json_value_module_MOD_json_value_create` | `./json_value_module.F90:2204`  |
|  9.4% | 13.0ms |      13 | `(anonymous)`                               | `<unknown>`                     |
|  5.1% |  7.0ms |       7 | `strndup`                                   | `<unknown>`                     |

##### `_gfortran_string_len_trim` (`<unknown>`)

|     % |   Time | Samples | Caller                                  | Location                        |
| ----: | -----: | ------: | --------------------------------------- | ------------------------------- |
| 60.5% | 78.0ms |      78 | `__json_value_module_MOD_parse_object`  | `./json_value_module.F90:10882` |
| 23.3% | 30.0ms |      30 | `__json_value_module_MOD_parse_value`   | `./json_value_module.F90:10117` |
|  7.0% |  9.0ms |       9 | `__json_value_module_MOD_string_to_int` | `./json_value_module.F90:8074`  |
|  4.7% |  6.0ms |       6 | `(anonymous)`                           | `<unknown>`                     |
|  3.1% |  4.0ms |       4 | `__json_value_module_MOD_parse_number`  | `./json_value_module.F90:11192` |

##### `cfree` (`<unknown>`)

|     % |   Time | Samples | Caller                                       | Location                        |
| ----: | -----: | ------: | -------------------------------------------- | ------------------------------- |
| 45.5% | 56.0ms |      56 | `__json_value_module_MOD_parse_object`       | `./json_value_module.F90:10882` |
| 14.6% | 18.0ms |      18 | `__json_value_module_MOD_json_value_destroy` | `./json_value_module.F90:2237`  |
| 13.0% | 16.0ms |      16 | `(anonymous)`                                | `<unknown>`                     |
|  8.9% | 11.0ms |      11 | `__json_value_module_MOD_parse_string`       | `./json_value_module.F90:11052` |
|  6.5% |  8.0ms |       8 | `__json_value_module_MOD_parse_value`        | `./json_value_module.F90:10117` |

##### `_init` (`<unknown>`)

|     % |   Time | Samples | Caller                                       | Location                        |
| ----: | -----: | ------: | -------------------------------------------- | ------------------------------- |
| 63.6% | 56.0ms |      56 | `__json_value_module_MOD_parse_object`       | `./json_value_module.F90:10882` |
| 20.5% | 18.0ms |      18 | `__json_value_module_MOD_parse_value`        | `./json_value_module.F90:10117` |
|  6.8% |  6.0ms |       6 | `__json_value_module_MOD_string_to_int`      | `./json_value_module.F90:8074`  |
|  3.4% |  3.0ms |       3 | `__json_value_module_MOD_json_value_destroy` | `./json_value_module.F90:2237`  |
|  2.3% |  2.0ms |       2 | `__json_value_module_MOD_parse_array`        | `./json_value_module.F90:10987` |

##### `__libc_realloc` (`<unknown>`)

|     % |   Time | Samples | Caller                                        | Location                          |
| ----: | -----: | ------: | --------------------------------------------- | --------------------------------- |
| 39.3% | 22.0ms |      22 | `__json_value_module_MOD_parse_string`        | `./json_value_module.F90:11052`   |
| 35.7% | 20.0ms |      20 | `__json_value_module_MOD_parse_object`        | `./json_value_module.F90:10882`   |
| 23.2% | 13.0ms |      13 | `__json_value_module_MOD_parse_value`         | `./json_value_module.F90:10117`   |
|  1.8% |  1.0ms |       1 | `__json_string_utilities_MOD_unescape_string` | `./json_string_utilities.F90:483` |

##### `__read` (`<unknown>`)

|      % |   Time | Samples | Caller        | Location    |
| -----: | -----: | ------: | ------------- | ----------- |
| 100.0% | 44.0ms |      44 | `(anonymous)` | `<unknown>` |

##### `__json_value_module_MOD_parse_value` (`./json_value_module.F90:10117`)

|     % |   Time | Samples | Caller                                 | Location                        |
| ----: | -----: | ------: | -------------------------------------- | ------------------------------- |
| 92.0% | 23.0ms |      23 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90:10882` |
|  8.0% |  2.0ms |       2 | `__json_value_module_MOD_parse_array`  | `./json_value_module.F90:10987` |

##### `__json_value_module_MOD_parse_object` (`./json_value_module.F90:10882`)

|      % |   Time | Samples | Caller                                 | Location                        |
| -----: | -----: | ------: | -------------------------------------- | ------------------------------- |
| 100.0% | 21.0ms |      21 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90:10882` |

##### `__json_string_utilities_MOD_unescape_string` (`./json_string_utilities.F90:483`)

|      % |   Time | Samples | Caller                                 | Location                        |
| -----: | -----: | ------: | -------------------------------------- | ------------------------------- |
| 100.0% | 21.0ms |      21 | `__json_value_module_MOD_parse_string` | `./json_value_module.F90:11052` |

##### `__open` (`<unknown>`)

|      % |   Time | Samples | Caller        | Location    |
| -----: | -----: | ------: | ------------- | ----------- |
| 100.0% | 17.0ms |      17 | `(anonymous)` | `<unknown>` |

##### `__json_value_module_MOD_destroy_json_data` (`./json_value_module.F90:1387`)

|     % |   Time | Samples | Caller                                       | Location                        |
| ----: | -----: | ------: | -------------------------------------------- | ------------------------------- |
| 64.7% | 11.0ms |      11 | `__json_value_module_MOD_json_value_destroy` | `./json_value_module.F90:2237`  |
| 17.6% |  3.0ms |       3 | `__json_value_module_MOD_to_logical`         | `./json_value_module.F90:10659` |
| 11.8% |  2.0ms |       2 | `__json_value_module_MOD_to_string`          | `./json_value_module.F90:10755` |
|  5.9% |  1.0ms |       1 | `__json_value_module_MOD_to_null`            | `./json_value_module.F90:10814` |

##### `__json_value_module_MOD_json_value_destroy` (`./json_value_module.F90:2237`)

|      % |   Time | Samples | Caller                                       | Location                       |
| -----: | -----: | ------: | -------------------------------------------- | ------------------------------ |
| 100.0% | 15.0ms |      15 | `__json_value_module_MOD_json_value_destroy` | `./json_value_module.F90:2237` |

##### `calloc` (`<unknown>`)

|      % |   Time | Samples | Caller        | Location    |
| -----: | -----: | ------: | ------------- | ----------- |
| 100.0% | 11.0ms |      11 | `(anonymous)` | `<unknown>` |

##### `__json_value_module_MOD_parse_number` (`./json_value_module.F90:11192`)

|      % |   Time | Samples | Caller                                 | Location                        |
| -----: | -----: | ------: | -------------------------------------- | ------------------------------- |
| 100.0% | 10.0ms |      10 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90:10882` |

##### `__pthread_mutex_lock` (`<unknown>`)

|      % |   Time | Samples | Caller        | Location    |
| -----: | -----: | ------: | ------------- | ----------- |
| 100.0% | 10.0ms |      10 | `(anonymous)` | `<unknown>` |

##### `_gfortran_st_write_done` (`<unknown>`)

|     % |  Time | Samples | Caller                                  | Location                       |
| ----: | ----: | ------: | --------------------------------------- | ------------------------------ |
| 88.9% | 8.0ms |       8 | `__json_value_module_MOD_string_to_int` | `./json_value_module.F90:8074` |
| 11.1% | 1.0ms |       1 | `main`                                  | `/out/profile.f90:6`           |

##### `__json_value_module_MOD_json_value_add_member` (`./json_value_module.F90:3394`)

|     % |  Time | Samples | Caller                                          | Location                        |
| ----: | ----: | ------: | ----------------------------------------------- | ------------------------------- |
| 62.5% | 5.0ms |       5 | `__json_value_module_MOD_json_value_add_member` | `./json_value_module.F90:3394`  |
| 37.5% | 3.0ms |       3 | `__json_value_module_MOD_parse_object`          | `./json_value_module.F90:10882` |

##### `__json_value_module_MOD_parse_for_chars` (`./json_value_module.F90:11145`)

|      % |  Time | Samples | Caller                                | Location                        |
| -----: | ----: | ------: | ------------------------------------- | ------------------------------- |
| 100.0% | 7.0ms |       7 | `__json_value_module_MOD_parse_value` | `./json_value_module.F90:10117` |

##### `__ctype_toupper_loc` (`<unknown>`)

|      % |  Time | Samples | Caller        | Location    |
| -----: | ----: | ------: | ------------- | ----------- |
| 100.0% | 7.0ms |       7 | `(anonymous)` | `<unknown>` |

##### `log10f32` (`<unknown>`)

|      % |  Time | Samples | Caller                                  | Location                       |
| -----: | ----: | ------: | --------------------------------------- | ------------------------------ |
| 100.0% | 6.0ms |       6 | `__json_value_module_MOD_string_to_int` | `./json_value_module.F90:8074` |

##### `__uselocale` (`<unknown>`)

|      % |  Time | Samples | Caller        | Location    |
| -----: | ----: | ------: | ------------- | ----------- |
| 100.0% | 6.0ms |       6 | `(anonymous)` | `<unknown>` |

##### `__json_value_module_MOD_pop_char` (`./json_value_module.F90:11318`)

|     % |  Time | Samples | Caller                                 | Location                        |
| ----: | ----: | ------: | -------------------------------------- | ------------------------------- |
| 75.0% | 3.0ms |       3 | `__json_value_module_MOD_parse_value`  | `./json_value_module.F90:10117` |
| 25.0% | 1.0ms |       1 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90:10882` |

##### `_gfortran_transfer_character` (`<unknown>`)

|     % |  Time | Samples | Caller                                 | Location                        |
| ----: | ----: | ------: | -------------------------------------- | ------------------------------- |
| 50.0% | 2.0ms |       2 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90:10882` |
| 50.0% | 2.0ms |       2 | `__json_value_module_MOD_parse_string` | `./json_value_module.F90:11052` |

##### `__json_value_module_MOD_json_value_create` (`./json_value_module.F90:2204`)

|      % |  Time | Samples | Caller                                 | Location                        |
| -----: | ----: | ------: | -------------------------------------- | ------------------------------- |
| 100.0% | 3.0ms |       3 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90:10882` |

##### `__json_value_module_MOD_json_info` (`./json_value_module.F90:1409`)

|      % |  Time | Samples | Caller                                          | Location                       |
| -----: | ----: | ------: | ----------------------------------------------- | ------------------------------ |
| 100.0% | 3.0ms |       3 | `__json_value_module_MOD_json_value_add_member` | `./json_value_module.F90:3394` |

##### `_gfortran_string_trim` (`<unknown>`)

|     % |  Time | Samples | Caller                                          | Location                          |
| ----: | ----: | ------: | ----------------------------------------------- | --------------------------------- |
| 66.7% | 2.0ms |       2 | `__json_value_module_MOD_string_to_int`         | `./json_value_module.F90:8074`    |
| 33.3% | 1.0ms |       1 | `__json_string_utilities_MOD_string_to_integer` | `./json_string_utilities.F90:116` |

##### `_gfortran_concat_string` (`<unknown>`)

|     % |  Time | Samples | Caller                                          | Location                          |
| ----: | ----: | ------: | ----------------------------------------------- | --------------------------------- |
| 66.7% | 2.0ms |       2 | `__json_string_utilities_MOD_string_to_integer` | `./json_string_utilities.F90:116` |
| 33.3% | 1.0ms |       1 | `__json_value_module_MOD_string_to_int`         | `./json_value_module.F90:8074`    |

##### `_gfortran_transfer_integer` (`<unknown>`)

|     % |  Time | Samples | Caller                                             | Location                       |
| ----: | ----: | ------: | -------------------------------------------------- | ------------------------------ |
| 66.7% | 2.0ms |       2 | `__json_value_module_MOD_string_to_int`            | `./json_value_module.F90:8074` |
| 33.3% | 1.0ms |       1 | `__json_value_module_MOD_json_get_by_path_default` | `./json_value_module.F90:6787` |

##### `_gfortran_st_write` (`<unknown>`)

|      % |  Time | Samples | Caller                                  | Location                       |
| -----: | ----: | ------: | --------------------------------------- | ------------------------------ |
| 100.0% | 3.0ms |       3 | `__json_value_module_MOD_string_to_int` | `./json_value_module.F90:8074` |

##### `__json_string_utilities_MOD_string_to_integer` (`./json_string_utilities.F90:116`)

|      % |  Time | Samples | Caller                                  | Location                       |
| -----: | ----: | ------: | --------------------------------------- | ------------------------------ |
| 100.0% | 2.0ms |       2 | `__json_value_module_MOD_string_to_int` | `./json_value_module.F90:8074` |

##### `__json_value_module_MOD_to_string` (`./json_value_module.F90:10755`)

|      % |  Time | Samples | Caller                                | Location                        |
| -----: | ----: | ------: | ------------------------------------- | ------------------------------- |
| 100.0% | 2.0ms |       2 | `__json_value_module_MOD_parse_value` | `./json_value_module.F90:10117` |

##### `__json_value_module_MOD_to_logical` (`./json_value_module.F90:10659`)

|      % |  Time | Samples | Caller                                 | Location                        |
| -----: | ----: | ------: | -------------------------------------- | ------------------------------- |
| 100.0% | 2.0ms |       2 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90:10882` |

##### `__log10f_finite` (`<unknown>`)

|     % |  Time | Samples | Caller                                          | Location                          |
| ----: | ----: | ------: | ----------------------------------------------- | --------------------------------- |
| 50.0% | 1.0ms |       1 | `__json_string_utilities_MOD_string_to_integer` | `./json_string_utilities.F90:116` |
| 50.0% | 1.0ms |       1 | `__json_value_module_MOD_string_to_int`         | `./json_value_module.F90:8074`    |

##### `__json_value_module_MOD_parse_array` (`./json_value_module.F90:10987`)

|      % |  Time | Samples | Caller                                 | Location                        |
| -----: | ----: | ------: | -------------------------------------- | ------------------------------- |
| 100.0% | 1.0ms |       1 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90:10882` |

##### `__json_value_module_MOD_json_get_string_by_path` (`./json_value_module.F90:9182`)

|      % |  Time | Samples | Caller                                        | Location                      |
| -----: | ----: | ------: | --------------------------------------------- | ----------------------------- |
| 100.0% | 1.0ms |       1 | `__json_file_module_MOD_json_file_get_string` | `./json_file_module.F90:1837` |

##### `__json_value_module_MOD_json_get_by_path_default` (`./json_value_module.F90:6787`)

|      % |  Time | Samples | Caller                                     | Location                       |
| -----: | ----: | ------: | ------------------------------------------ | ------------------------------ |
| 100.0% | 1.0ms |       1 | `__json_value_module_MOD_json_get_by_path` | `./json_value_module.F90:6495` |

##### `__json_value_module_MOD_json_get_by_path` (`./json_value_module.F90:6495`)

|      % |  Time | Samples | Caller                                        | Location                      |
| -----: | ----: | ------: | --------------------------------------------- | ----------------------------- |
| 100.0% | 1.0ms |       1 | `__json_file_module_MOD_json_file_get_string` | `./json_file_module.F90:1837` |

### Total time

Functions with the most time spent within the function and its callees.

|      % |    Time | Samples | Function                                        | Location                          |
| -----: | ------: | ------: | ----------------------------------------------- | --------------------------------- |
| 100.0% |   4.04s |   4,043 | `(anonymous)`                                   | `<unknown>`                       |
| 100.0% |   4.04s |   4,043 | `main`                                          | `/out/profile.f90:6`              |
| 100.0% |   4.04s |   4,043 | `__libc_start_main`                             | `<unknown>`                       |
| 100.0% |   4.04s |   4,043 | `_start`                                        | `<unknown>`                       |
| 100.0% |   4.04s |   4,042 | `MAIN__`                                        | `/out/profile.f90:5`              |
|  97.1% |   3.92s |   3,925 | `__json_value_module_MOD_json_parse_file`       | `./json_value_module.F90:9714`    |
|  97.1% |   3.92s |   3,925 | `__json_file_module_MOD_json_file_load`         | `./json_file_module.F90:842`      |
|  94.4% |   3.81s |   3,816 | `__json_value_module_MOD_parse_object`          | `./json_value_module.F90:10882`   |
|  94.2% |   3.80s |   3,808 | `__json_value_module_MOD_parse_array`           | `./json_value_module.F90:10987`   |
|  54.0% |   2.18s |   2,182 | `__json_value_module_MOD_pop_char.part.0`       | `./json_value_module.F90:11318`   |
|  43.3% |   1.75s |   1,750 | `__json_value_module_MOD_parse_string`          | `./json_value_module.F90:11052`   |
|  31.1% |   1.25s |   1,257 | `__json_value_module_MOD_parse_value`           | `./json_value_module.F90:10117`   |
|  11.8% | 479.0ms |     479 | `__json_value_module_MOD_parse_number`          | `./json_value_module.F90:11192`   |
|  10.3% | 416.0ms |     416 | `__libc_malloc`                                 | `<unknown>`                       |
|   9.3% | 378.0ms |     378 | `__json_value_module_MOD_string_to_int`         | `./json_value_module.F90:8074`    |
|   8.5% | 342.0ms |     342 | `__json_string_utilities_MOD_string_to_integer` | `./json_string_utilities.F90:116` |
|   7.0% | 281.0ms |     281 | `_gfortran_string_scan`                         | `<unknown>`                       |
|   4.6% | 185.0ms |     185 | `cfree`                                         | `<unknown>`                       |
|   3.2% | 129.0ms |     129 | `_gfortran_string_len_trim`                     | `<unknown>`                       |
|   2.4% |  97.0ms |      97 | `__libc_realloc`                                | `<unknown>`                       |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Ours

|      % |    Time | Samples | Function                                          | Location                             |
| -----: | ------: | ------: | ------------------------------------------------- | ------------------------------------ |
| 100.0% |   4.04s |   4,043 | `main`                                            | `/out/profile.f90:6`                 |
| 100.0% |   4.04s |   4,042 | `MAIN__`                                          | `/out/profile.f90:5`                 |
|  97.1% |   3.92s |   3,925 | `__json_value_module_MOD_json_parse_file`         | `./json_value_module.F90:9714`       |
|  97.1% |   3.92s |   3,925 | `__json_file_module_MOD_json_file_load`           | `./json_file_module.F90:842`         |
|  94.4% |   3.81s |   3,816 | `__json_value_module_MOD_parse_object`            | `./json_value_module.F90:10882`      |
|  94.2% |   3.80s |   3,808 | `__json_value_module_MOD_parse_array`             | `./json_value_module.F90:10987`      |
|  54.0% |   2.18s |   2,182 | `__json_value_module_MOD_pop_char.part.0`         | `./json_value_module.F90:11318`      |
|  43.3% |   1.75s |   1,750 | `__json_value_module_MOD_parse_string`            | `./json_value_module.F90:11052`      |
|  31.1% |   1.25s |   1,257 | `__json_value_module_MOD_parse_value`             | `./json_value_module.F90:10117`      |
|  11.8% | 479.0ms |     479 | `__json_value_module_MOD_parse_number`            | `./json_value_module.F90:11192`      |
|   9.3% | 378.0ms |     378 | `__json_value_module_MOD_string_to_int`           | `./json_value_module.F90:8074`       |
|   8.5% | 342.0ms |     342 | `__json_string_utilities_MOD_string_to_integer`   | `./json_string_utilities.F90:116`    |
|   2.2% |  89.0ms |      89 | `__json_value_module_MOD_json_value_create`       | `./json_value_module.F90:2204`       |
|   1.8% |  74.0ms |      74 | `__json_value_module_MOD_json_value_destroy`      | `./json_value_module.F90:2237`       |
|   1.8% |  74.0ms |      74 | `__json_file_module_MOD_json_file_destroy`        | `./json_file_module.F90:769`         |
|   1.5% |  59.0ms |      59 | `__json_value_module_MOD_parse_for_chars`         | `./json_value_module.F90:11145`      |
|   0.8% |  31.0ms |      31 | `__json_file_module_MOD_json_file_get_string`     | `./json_file_module.F90:1837`        |
|   0.7% |  29.0ms |      29 | `__json_value_module_MOD_json_get_string_by_path` | `./json_get_scalar_by_path.inc:9182` |
|   0.6% |  26.0ms |      26 | `__json_value_module_MOD_destroy_json_data`       | `./json_value_module.F90:1387`       |
|   0.6% |  26.0ms |      26 | `__json_value_module_MOD_json_get_by_path`        | `./json_value_module.F90:6495`       |

##### Native

|      % |    Time | Samples | Function                       | Location    |
| -----: | ------: | ------: | ------------------------------ | ----------- |
| 100.0% |   4.04s |   4,043 | `__libc_start_main`            | `<unknown>` |
| 100.0% |   4.04s |   4,043 | `_start`                       | `<unknown>` |
|  10.3% | 416.0ms |     416 | `__libc_malloc`                | `<unknown>` |
|   7.0% | 281.0ms |     281 | `_gfortran_string_scan`        | `<unknown>` |
|   4.6% | 185.0ms |     185 | `cfree`                        | `<unknown>` |
|   3.2% | 129.0ms |     129 | `_gfortran_string_len_trim`    | `<unknown>` |
|   2.4% |  97.0ms |      97 | `__libc_realloc`               | `<unknown>` |
|   2.3% |  95.0ms |      95 | `_gfortran_st_open`            | `<unknown>` |
|   2.2% |  88.0ms |      88 | `_init`                        | `<unknown>` |
|   1.1% |  44.0ms |      44 | `__read`                       | `<unknown>` |
|   0.4% |  17.0ms |      17 | `__open`                       | `<unknown>` |
|   0.4% |  17.0ms |      17 | `calloc`                       | `<unknown>` |
|   0.3% |  11.0ms |      11 | `strndup`                      | `<unknown>` |
|   0.2% |  10.0ms |      10 | `__pthread_mutex_lock`         | `<unknown>` |
|   0.2% |   9.0ms |       9 | `_gfortran_st_write_done`      | `<unknown>` |
|   0.2% |   7.0ms |       7 | `_gfortran_string_trim`        | `<unknown>` |
|   0.2% |   7.0ms |       7 | `__ctype_toupper_loc`          | `<unknown>` |
|   0.1% |   6.0ms |       6 | `log10f32`                     | `<unknown>` |
|   0.1% |   6.0ms |       6 | `__uselocale`                  | `<unknown>` |
|   0.1% |   4.0ms |       4 | `_gfortran_transfer_character` | `<unknown>` |

##### Unknown

|      % |  Time | Samples | Function      | Location    |
| -----: | ----: | ------: | ------------- | ----------- |
| 100.0% | 4.04s |   4,043 | `(anonymous)` | `<unknown>` |

#### Callers

Callers with the largest contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `(anonymous)` (`<unknown>`)

|      % |    Time | Samples | Caller                                          | Location                          |
| -----: | ------: | ------: | ----------------------------------------------- | --------------------------------- |
| 100.0% |   4.04s |   4,043 | `__libc_start_main`                             | `<unknown>`                       |
|  12.9% | 521.0ms |     521 | `(anonymous)`                                   | `<unknown>`                       |
|   8.0% | 322.0ms |     322 | `__json_string_utilities_MOD_string_to_integer` | `./json_string_utilities.F90:116` |
|   6.9% | 278.0ms |     278 | `__libc_malloc`                                 | `<unknown>`                       |
|   2.3% |  95.0ms |      95 | `_gfortran_st_open`                             | `<unknown>`                       |

##### `main` (`/out/profile.f90:6`)

|      % |  Time | Samples | Caller        | Location    |
| -----: | ----: | ------: | ------------- | ----------- |
| 100.0% | 4.04s |   4,043 | `(anonymous)` | `<unknown>` |

##### `__libc_start_main` (`<unknown>`)

|      % |  Time | Samples | Caller   | Location    |
| -----: | ----: | ------: | -------- | ----------- |
| 100.0% | 4.04s |   4,043 | `_start` | `<unknown>` |

##### `MAIN__` (`/out/profile.f90:5`)

|      % |  Time | Samples | Caller | Location             |
| -----: | ----: | ------: | ------ | -------------------- |
| 100.0% | 4.04s |   4,042 | `main` | `/out/profile.f90:6` |

##### `__json_value_module_MOD_json_parse_file` (`./json_value_module.F90:9714`)

|      % |  Time | Samples | Caller                                  | Location                     |
| -----: | ----: | ------: | --------------------------------------- | ---------------------------- |
| 100.0% | 3.92s |   3,925 | `__json_file_module_MOD_json_file_load` | `./json_file_module.F90:842` |

##### `__json_file_module_MOD_json_file_load` (`./json_file_module.F90:842`)

|      % |  Time | Samples | Caller   | Location             |
| -----: | ----: | ------: | -------- | -------------------- |
| 100.0% | 3.92s |   3,925 | `MAIN__` | `/out/profile.f90:5` |

##### `__json_value_module_MOD_parse_object` (`./json_value_module.F90:10882`)

|      % |  Time | Samples | Caller                                    | Location                        |
| -----: | ----: | ------: | ----------------------------------------- | ------------------------------- |
| 100.0% | 3.81s |   3,816 | `__json_value_module_MOD_json_parse_file` | `./json_value_module.F90:9714`  |
|  99.7% | 3.80s |   3,803 | `__json_value_module_MOD_parse_array`     | `./json_value_module.F90:10987` |
|  99.5% | 3.79s |   3,796 | `__json_value_module_MOD_parse_object`    | `./json_value_module.F90:10882` |

##### `__json_value_module_MOD_parse_array` (`./json_value_module.F90:10987`)

|      % |  Time | Samples | Caller                                 | Location                        |
| -----: | ----: | ------: | -------------------------------------- | ------------------------------- |
| 100.0% | 3.80s |   3,808 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90:10882` |

##### `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90:11318`)

|     % |    Time | Samples | Caller                                    | Location                        |
| ----: | ------: | ------: | ----------------------------------------- | ------------------------------- |
| 58.6% |   1.27s |   1,279 | `__json_value_module_MOD_parse_string`    | `./json_value_module.F90:11052` |
| 27.7% | 604.0ms |     604 | `__json_value_module_MOD_parse_object`    | `./json_value_module.F90:10882` |
|  7.8% | 170.0ms |     170 | `__json_value_module_MOD_parse_value`     | `./json_value_module.F90:10117` |
|  2.9% |  64.0ms |      64 | `__json_value_module_MOD_parse_number`    | `./json_value_module.F90:11192` |
|  2.4% |  52.0ms |      52 | `__json_value_module_MOD_parse_for_chars` | `./json_value_module.F90:11145` |

##### `__json_value_module_MOD_parse_string` (`./json_value_module.F90:11052`)

|     % |    Time | Samples | Caller                                 | Location                        |
| ----: | ------: | ------: | -------------------------------------- | ------------------------------- |
| 50.7% | 888.0ms |     888 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90:10882` |
| 49.3% | 862.0ms |     862 | `__json_value_module_MOD_parse_value`  | `./json_value_module.F90:10117` |

##### `__json_value_module_MOD_parse_value` (`./json_value_module.F90:10117`)

|     % |   Time | Samples | Caller                                    | Location                        |
| ----: | -----: | ------: | ----------------------------------------- | ------------------------------- |
| 96.3% |  1.21s |   1,210 | `__json_value_module_MOD_parse_object`    | `./json_value_module.F90:10882` |
|  2.9% | 37.0ms |      37 | `__json_value_module_MOD_parse_array`     | `./json_value_module.F90:10987` |
|  0.8% | 10.0ms |      10 | `__json_value_module_MOD_json_parse_file` | `./json_value_module.F90:9714`  |

##### `__json_value_module_MOD_parse_number` (`./json_value_module.F90:11192`)

|     % |    Time | Samples | Caller                                 | Location                        |
| ----: | ------: | ------: | -------------------------------------- | ------------------------------- |
| 87.7% | 420.0ms |     420 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90:10882` |
| 12.3% |  59.0ms |      59 | `__json_value_module_MOD_parse_array`  | `./json_value_module.F90:10987` |

##### `__libc_malloc` (`<unknown>`)

|     % |    Time | Samples | Caller                                      | Location                        |
| ----: | ------: | ------: | ------------------------------------------- | ------------------------------- |
| 32.2% | 134.0ms |     134 | `(anonymous)`                               | `<unknown>`                     |
| 23.6% |  98.0ms |      98 | `__json_value_module_MOD_parse_string`      | `./json_value_module.F90:11052` |
| 20.7% |  86.0ms |      86 | `__json_value_module_MOD_json_value_create` | `./json_value_module.F90:2204`  |
| 10.8% |  45.0ms |      45 | `__json_value_module_MOD_parse_object`      | `./json_value_module.F90:10882` |
|  3.8% |  16.0ms |      16 | `__json_value_module_MOD_parse_number`      | `./json_value_module.F90:11192` |

##### `__json_value_module_MOD_string_to_int` (`./json_value_module.F90:8074`)

|      % |    Time | Samples | Caller                                 | Location                        |
| -----: | ------: | ------: | -------------------------------------- | ------------------------------- |
| 100.0% | 378.0ms |     378 | `__json_value_module_MOD_parse_number` | `./json_value_module.F90:11192` |

##### `__json_string_utilities_MOD_string_to_integer` (`./json_string_utilities.F90:116`)

|     % |    Time | Samples | Caller                                             | Location                       |
| ----: | ------: | ------: | -------------------------------------------------- | ------------------------------ |
| 94.7% | 324.0ms |     324 | `__json_value_module_MOD_string_to_int`            | `./json_value_module.F90:8074` |
|  5.3% |  18.0ms |      18 | `__json_value_module_MOD_json_get_by_path_default` | `./json_value_module.F90:6787` |

##### `_gfortran_string_scan` (`<unknown>`)

|     % |    Time | Samples | Caller                                 | Location                        |
| ----: | ------: | ------: | -------------------------------------- | ------------------------------- |
| 46.3% | 130.0ms |     130 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90:10882` |
| 44.1% | 124.0ms |     124 | `__json_value_module_MOD_parse_string` | `./json_value_module.F90:11052` |
|  7.8% |  22.0ms |      22 | `__json_value_module_MOD_parse_value`  | `./json_value_module.F90:10117` |
|  1.8% |   5.0ms |       5 | `__json_value_module_MOD_parse_array`  | `./json_value_module.F90:10987` |

##### `cfree` (`<unknown>`)

|     % |   Time | Samples | Caller                                       | Location                        |
| ----: | -----: | ------: | -------------------------------------------- | ------------------------------- |
| 35.7% | 66.0ms |      66 | `__json_value_module_MOD_parse_object`       | `./json_value_module.F90:10882` |
| 20.5% | 38.0ms |      38 | `(anonymous)`                                | `<unknown>`                     |
| 18.9% | 35.0ms |      35 | `__json_value_module_MOD_json_value_destroy` | `./json_value_module.F90:2237`  |
|  7.6% | 14.0ms |      14 | `__json_value_module_MOD_parse_string`       | `./json_value_module.F90:11052` |
|  6.5% | 12.0ms |      12 | `__json_value_module_MOD_parse_value`        | `./json_value_module.F90:10117` |

##### `_gfortran_string_len_trim` (`<unknown>`)

|     % |   Time | Samples | Caller                                  | Location                        |
| ----: | -----: | ------: | --------------------------------------- | ------------------------------- |
| 60.5% | 78.0ms |      78 | `__json_value_module_MOD_parse_object`  | `./json_value_module.F90:10882` |
| 23.3% | 30.0ms |      30 | `__json_value_module_MOD_parse_value`   | `./json_value_module.F90:10117` |
|  7.0% |  9.0ms |       9 | `__json_value_module_MOD_string_to_int` | `./json_value_module.F90:8074`  |
|  4.7% |  6.0ms |       6 | `(anonymous)`                           | `<unknown>`                     |
|  3.1% |  4.0ms |       4 | `__json_value_module_MOD_parse_number`  | `./json_value_module.F90:11192` |

##### `__libc_realloc` (`<unknown>`)

|     % |   Time | Samples | Caller                                        | Location                          |
| ----: | -----: | ------: | --------------------------------------------- | --------------------------------- |
| 51.5% | 50.0ms |      50 | `__json_value_module_MOD_parse_string`        | `./json_value_module.F90:11052`   |
| 25.8% | 25.0ms |      25 | `__json_value_module_MOD_parse_value`         | `./json_value_module.F90:10117`   |
| 20.6% | 20.0ms |      20 | `__json_value_module_MOD_parse_object`        | `./json_value_module.F90:10882`   |
|  1.0% |  1.0ms |       1 | `__json_value_module_MOD_json_get_string`     | `./json_value_module.F90:9078`    |
|  1.0% |  1.0ms |       1 | `__json_string_utilities_MOD_unescape_string` | `./json_string_utilities.F90:483` |

##### `_gfortran_st_open` (`<unknown>`)

|      % |   Time | Samples | Caller                                    | Location                       |
| -----: | -----: | ------: | ----------------------------------------- | ------------------------------ |
| 100.0% | 95.0ms |      95 | `__json_value_module_MOD_json_parse_file` | `./json_value_module.F90:9714` |

##### `__json_value_module_MOD_json_value_create` (`./json_value_module.F90:2204`)

|     % |   Time | Samples | Caller                                 | Location                        |
| ----: | -----: | ------: | -------------------------------------- | ------------------------------- |
| 91.0% | 81.0ms |      81 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90:10882` |
|  9.0% |  8.0ms |       8 | `__json_value_module_MOD_parse_array`  | `./json_value_module.F90:10987` |

##### `_init` (`<unknown>`)

|     % |   Time | Samples | Caller                                       | Location                        |
| ----: | -----: | ------: | -------------------------------------------- | ------------------------------- |
| 63.6% | 56.0ms |      56 | `__json_value_module_MOD_parse_object`       | `./json_value_module.F90:10882` |
| 20.5% | 18.0ms |      18 | `__json_value_module_MOD_parse_value`        | `./json_value_module.F90:10117` |
|  6.8% |  6.0ms |       6 | `__json_value_module_MOD_string_to_int`      | `./json_value_module.F90:8074`  |
|  3.4% |  3.0ms |       3 | `__json_value_module_MOD_json_value_destroy` | `./json_value_module.F90:2237`  |
|  2.3% |  2.0ms |       2 | `__json_value_module_MOD_parse_array`        | `./json_value_module.F90:10987` |

##### `__json_value_module_MOD_json_value_destroy` (`./json_value_module.F90:2237`)

|      % |   Time | Samples | Caller                                       | Location                       |
| -----: | -----: | ------: | -------------------------------------------- | ------------------------------ |
| 100.0% | 74.0ms |      74 | `__json_value_module_MOD_json_value_destroy` | `./json_value_module.F90:2237` |
| 100.0% | 74.0ms |      74 | `__json_file_module_MOD_json_file_destroy`   | `./json_file_module.F90:769`   |

##### `__json_file_module_MOD_json_file_destroy` (`./json_file_module.F90:769`)

|      % |   Time | Samples | Caller   | Location             |
| -----: | -----: | ------: | -------- | -------------------- |
| 100.0% | 74.0ms |      74 | `MAIN__` | `/out/profile.f90:5` |

##### `__json_value_module_MOD_parse_for_chars` (`./json_value_module.F90:11145`)

|      % |   Time | Samples | Caller                                | Location                        |
| -----: | -----: | ------: | ------------------------------------- | ------------------------------- |
| 100.0% | 59.0ms |      59 | `__json_value_module_MOD_parse_value` | `./json_value_module.F90:10117` |

##### `__read` (`<unknown>`)

|      % |   Time | Samples | Caller        | Location    |
| -----: | -----: | ------: | ------------- | ----------- |
| 100.0% | 44.0ms |      44 | `(anonymous)` | `<unknown>` |

##### `__json_file_module_MOD_json_file_get_string` (`./json_file_module.F90:1837`)

|      % |   Time | Samples | Caller   | Location             |
| -----: | -----: | ------: | -------- | -------------------- |
| 100.0% | 31.0ms |      31 | `MAIN__` | `/out/profile.f90:5` |

##### `__json_value_module_MOD_json_get_string_by_path` (`./json_get_scalar_by_path.inc:9182`)

|      % |   Time | Samples | Caller                                        | Location                      |
| -----: | -----: | ------: | --------------------------------------------- | ----------------------------- |
| 100.0% | 29.0ms |      29 | `__json_file_module_MOD_json_file_get_string` | `./json_file_module.F90:1837` |

##### `__json_value_module_MOD_destroy_json_data` (`./json_value_module.F90:1387`)

|     % |   Time | Samples | Caller                                       | Location                        |
| ----: | -----: | ------: | -------------------------------------------- | ------------------------------- |
| 76.9% | 20.0ms |      20 | `__json_value_module_MOD_json_value_destroy` | `./json_value_module.F90:2237`  |
| 11.5% |  3.0ms |       3 | `__json_value_module_MOD_to_logical`         | `./json_value_module.F90:10659` |
|  7.7% |  2.0ms |       2 | `__json_value_module_MOD_to_string`          | `./json_value_module.F90:10755` |
|  3.8% |  1.0ms |       1 | `__json_value_module_MOD_to_null`            | `./json_value_module.F90:10814` |

##### `__json_value_module_MOD_json_get_by_path` (`./json_value_module.F90:6495`)

|     % |   Time | Samples | Caller                                            | Location                             |
| ----: | -----: | ------: | ------------------------------------------------- | ------------------------------------ |
| 96.2% | 25.0ms |      25 | `__json_value_module_MOD_json_get_string_by_path` | `./json_get_scalar_by_path.inc:9182` |
|  3.8% |  1.0ms |       1 | `__json_file_module_MOD_json_file_get_string`     | `./json_file_module.F90:1837`        |

##### `__open` (`<unknown>`)

|      % |   Time | Samples | Caller        | Location    |
| -----: | -----: | ------: | ------------- | ----------- |
| 100.0% | 17.0ms |      17 | `(anonymous)` | `<unknown>` |

##### `calloc` (`<unknown>`)

|      % |   Time | Samples | Caller        | Location    |
| -----: | -----: | ------: | ------------- | ----------- |
| 100.0% | 17.0ms |      17 | `(anonymous)` | `<unknown>` |

##### `strndup` (`<unknown>`)

|      % |   Time | Samples | Caller        | Location    |
| -----: | -----: | ------: | ------------- | ----------- |
| 100.0% | 11.0ms |      11 | `(anonymous)` | `<unknown>` |

##### `__pthread_mutex_lock` (`<unknown>`)

|      % |   Time | Samples | Caller        | Location    |
| -----: | -----: | ------: | ------------- | ----------- |
| 100.0% | 10.0ms |      10 | `(anonymous)` | `<unknown>` |

##### `_gfortran_st_write_done` (`<unknown>`)

|     % |  Time | Samples | Caller                                  | Location                       |
| ----: | ----: | ------: | --------------------------------------- | ------------------------------ |
| 88.9% | 8.0ms |       8 | `__json_value_module_MOD_string_to_int` | `./json_value_module.F90:8074` |
| 11.1% | 1.0ms |       1 | `main`                                  | `/out/profile.f90:6`           |

##### `_gfortran_string_trim` (`<unknown>`)

|     % |  Time | Samples | Caller                                          | Location                          |
| ----: | ----: | ------: | ----------------------------------------------- | --------------------------------- |
| 71.4% | 5.0ms |       5 | `__json_string_utilities_MOD_string_to_integer` | `./json_string_utilities.F90:116` |
| 28.6% | 2.0ms |       2 | `__json_value_module_MOD_string_to_int`         | `./json_value_module.F90:8074`    |

##### `__ctype_toupper_loc` (`<unknown>`)

|      % |  Time | Samples | Caller        | Location    |
| -----: | ----: | ------: | ------------- | ----------- |
| 100.0% | 7.0ms |       7 | `(anonymous)` | `<unknown>` |

##### `log10f32` (`<unknown>`)

|      % |  Time | Samples | Caller                                  | Location                       |
| -----: | ----: | ------: | --------------------------------------- | ------------------------------ |
| 100.0% | 6.0ms |       6 | `__json_value_module_MOD_string_to_int` | `./json_value_module.F90:8074` |

##### `__uselocale` (`<unknown>`)

|      % |  Time | Samples | Caller        | Location    |
| -----: | ----: | ------: | ------------- | ----------- |
| 100.0% | 6.0ms |       6 | `(anonymous)` | `<unknown>` |

##### `_gfortran_transfer_character` (`<unknown>`)

|     % |  Time | Samples | Caller                                 | Location                        |
| ----: | ----: | ------: | -------------------------------------- | ------------------------------- |
| 50.0% | 2.0ms |       2 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90:10882` |
| 50.0% | 2.0ms |       2 | `__json_value_module_MOD_parse_string` | `./json_value_module.F90:11052` |

#### Callees

Callees with the largest contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `(anonymous)` (`<unknown>`)

|      % |    Time | Samples | Callee          | Location             |
| -----: | ------: | ------: | --------------- | -------------------- |
| 100.0% |   4.04s |   4,043 | `main`          | `/out/profile.f90:6` |
|  12.9% | 521.0ms |     521 | `(anonymous)`   | `<unknown>`          |
|   3.3% | 134.0ms |     134 | `__libc_malloc` | `<unknown>`          |
|   1.1% |  44.0ms |      44 | `__read`        | `<unknown>`          |
|   0.9% |  38.0ms |      38 | `cfree`         | `<unknown>`          |

##### `main` (`/out/profile.f90:6`)

|      % |  Time | Samples | Callee                    | Location             |
| -----: | ----: | ------: | ------------------------- | -------------------- |
| 100.0% | 4.04s |   4,042 | `MAIN__`                  | `/out/profile.f90:5` |
|  <0.1% | 1.0ms |       1 | `_gfortran_st_write_done` | `<unknown>`          |

##### `__libc_start_main` (`<unknown>`)

|      % |  Time | Samples | Callee        | Location    |
| -----: | ----: | ------: | ------------- | ----------- |
| 100.0% | 4.04s |   4,043 | `(anonymous)` | `<unknown>` |

##### `_start` (`<unknown>`)

|      % |  Time | Samples | Callee              | Location    |
| -----: | ----: | ------: | ------------------- | ----------- |
| 100.0% | 4.04s |   4,043 | `__libc_start_main` | `<unknown>` |

##### `MAIN__` (`/out/profile.f90:5`)

|     % |   Time | Samples | Callee                                        | Location                      |
| ----: | -----: | ------: | --------------------------------------------- | ----------------------------- |
| 97.1% |  3.92s |   3,925 | `__json_file_module_MOD_json_file_load`       | `./json_file_module.F90:842`  |
|  1.8% | 74.0ms |      74 | `__json_file_module_MOD_json_file_destroy`    | `./json_file_module.F90:769`  |
|  0.8% | 31.0ms |      31 | `__json_file_module_MOD_json_file_get_string` | `./json_file_module.F90:1837` |
|  0.3% | 12.0ms |      12 | `(anonymous)`                                 | `<unknown>`                   |

##### `__json_value_module_MOD_json_parse_file` (`./json_value_module.F90:9714`)

|     % |   Time | Samples | Callee                                 | Location                        |
| ----: | -----: | ------: | -------------------------------------- | ------------------------------- |
| 97.2% |  3.81s |   3,816 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90:10882` |
|  2.4% | 95.0ms |      95 | `_gfortran_st_open`                    | `<unknown>`                     |
|  0.3% | 10.0ms |      10 | `__json_value_module_MOD_parse_value`  | `./json_value_module.F90:10117` |
|  0.1% |  3.0ms |       3 | `(anonymous)`                          | `<unknown>`                     |
| <0.1% |  1.0ms |       1 | `_gfortran_st_inquire`                 | `<unknown>`                     |

##### `__json_file_module_MOD_json_file_load` (`./json_file_module.F90:842`)

|      % |  Time | Samples | Callee                                    | Location                       |
| -----: | ----: | ------: | ----------------------------------------- | ------------------------------ |
| 100.0% | 3.92s |   3,925 | `__json_value_module_MOD_json_parse_file` | `./json_value_module.F90:9714` |

##### `__json_value_module_MOD_parse_object` (`./json_value_module.F90:10882`)

|     % |    Time | Samples | Callee                                    | Location                        |
| ----: | ------: | ------: | ----------------------------------------- | ------------------------------- |
| 99.8% |   3.80s |   3,808 | `__json_value_module_MOD_parse_array`     | `./json_value_module.F90:10987` |
| 99.5% |   3.79s |   3,796 | `__json_value_module_MOD_parse_object`    | `./json_value_module.F90:10882` |
| 31.7% |   1.21s |   1,210 | `__json_value_module_MOD_parse_value`     | `./json_value_module.F90:10117` |
| 23.3% | 888.0ms |     888 | `__json_value_module_MOD_parse_string`    | `./json_value_module.F90:11052` |
| 15.8% | 604.0ms |     604 | `__json_value_module_MOD_pop_char.part.0` | `./json_value_module.F90:11318` |

##### `__json_value_module_MOD_parse_array` (`./json_value_module.F90:10987`)

|     % |   Time | Samples | Callee                                      | Location                        |
| ----: | -----: | ------: | ------------------------------------------- | ------------------------------- |
| 99.9% |  3.80s |   3,803 | `__json_value_module_MOD_parse_object`      | `./json_value_module.F90:10882` |
|  1.5% | 59.0ms |      59 | `__json_value_module_MOD_parse_number`      | `./json_value_module.F90:11192` |
|  1.0% | 37.0ms |      37 | `__json_value_module_MOD_parse_value`       | `./json_value_module.F90:10117` |
|  0.3% | 13.0ms |      13 | `__json_value_module_MOD_pop_char.part.0`   | `./json_value_module.F90:11318` |
|  0.2% |  8.0ms |       8 | `__json_value_module_MOD_json_value_create` | `./json_value_module.F90:2204`  |

##### `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90:11318`)

|    % |   Time | Samples | Callee        | Location    |
| ---: | -----: | ------: | ------------- | ----------- |
| 4.2% | 91.0ms |      91 | `(anonymous)` | `<unknown>` |

##### `__json_value_module_MOD_parse_string` (`./json_value_module.F90:11052`)

|     % |    Time | Samples | Callee                                        | Location                          |
| ----: | ------: | ------: | --------------------------------------------- | --------------------------------- |
| 73.1% |   1.27s |   1,279 | `__json_value_module_MOD_pop_char.part.0`     | `./json_value_module.F90:11318`   |
|  7.1% | 124.0ms |     124 | `_gfortran_string_scan`                       | `<unknown>`                       |
|  5.6% |  98.0ms |      98 | `__libc_malloc`                               | `<unknown>`                       |
|  2.9% |  50.0ms |      50 | `__libc_realloc`                              | `<unknown>`                       |
|  1.3% |  22.0ms |      22 | `__json_string_utilities_MOD_unescape_string` | `./json_string_utilities.F90:483` |

##### `__json_value_module_MOD_parse_value` (`./json_value_module.F90:10117`)

|     % |    Time | Samples | Callee                                    | Location                        |
| ----: | ------: | ------: | ----------------------------------------- | ------------------------------- |
| 68.6% | 862.0ms |     862 | `__json_value_module_MOD_parse_string`    | `./json_value_module.F90:11052` |
| 13.5% | 170.0ms |     170 | `__json_value_module_MOD_pop_char.part.0` | `./json_value_module.F90:11318` |
|  4.7% |  59.0ms |      59 | `__json_value_module_MOD_parse_for_chars` | `./json_value_module.F90:11145` |
|  2.4% |  30.0ms |      30 | `_gfortran_string_len_trim`               | `<unknown>`                     |
|  2.0% |  25.0ms |      25 | `__libc_realloc`                          | `<unknown>`                     |

##### `__json_value_module_MOD_parse_number` (`./json_value_module.F90:11192`)

|     % |    Time | Samples | Callee                                    | Location                        |
| ----: | ------: | ------: | ----------------------------------------- | ------------------------------- |
| 78.9% | 378.0ms |     378 | `__json_value_module_MOD_string_to_int`   | `./json_value_module.F90:8074`  |
| 13.4% |  64.0ms |      64 | `__json_value_module_MOD_pop_char.part.0` | `./json_value_module.F90:11318` |
|  3.3% |  16.0ms |      16 | `__libc_malloc`                           | `<unknown>`                     |
|  0.8% |   4.0ms |       4 | `_gfortran_string_len_trim`               | `<unknown>`                     |
|  0.8% |   4.0ms |       4 | `__json_value_module_MOD_string_to_dble`  | `./json_value_module.F90:8101`  |

##### `__libc_malloc` (`<unknown>`)

|     % |    Time | Samples | Callee        | Location    |
| ----: | ------: | ------: | ------------- | ----------- |
| 66.8% | 278.0ms |     278 | `(anonymous)` | `<unknown>` |

##### `__json_value_module_MOD_string_to_int` (`./json_value_module.F90:8074`)

|     % |    Time | Samples | Callee                                          | Location                          |
| ----: | ------: | ------: | ----------------------------------------------- | --------------------------------- |
| 85.7% | 324.0ms |     324 | `__json_string_utilities_MOD_string_to_integer` | `./json_string_utilities.F90:116` |
|  2.4% |   9.0ms |       9 | `_gfortran_string_len_trim`                     | `<unknown>`                       |
|  2.1% |   8.0ms |       8 | `_gfortran_st_write_done`                       | `<unknown>`                       |
|  1.6% |   6.0ms |       6 | `_init`                                         | `<unknown>`                       |
|  1.6% |   6.0ms |       6 | `log10f32`                                      | `<unknown>`                       |

##### `__json_string_utilities_MOD_string_to_integer` (`./json_string_utilities.F90:116`)

|     % |    Time | Samples | Callee                    | Location    |
| ----: | ------: | ------: | ------------------------- | ----------- |
| 94.2% | 322.0ms |     322 | `(anonymous)`             | `<unknown>` |
|  2.0% |   7.0ms |       7 | `__libc_malloc`           | `<unknown>` |
|  1.5% |   5.0ms |       5 | `_gfortran_string_trim`   | `<unknown>` |
|  0.9% |   3.0ms |       3 | `cfree`                   | `<unknown>` |
|  0.6% |   2.0ms |       2 | `_gfortran_concat_string` | `<unknown>` |

##### `cfree` (`<unknown>`)

|     % |   Time | Samples | Callee        | Location    |
| ----: | -----: | ------: | ------------- | ----------- |
| 33.5% | 62.0ms |      62 | `(anonymous)` | `<unknown>` |

##### `__libc_realloc` (`<unknown>`)

|     % |   Time | Samples | Callee        | Location    |
| ----: | -----: | ------: | ------------- | ----------- |
| 42.3% | 41.0ms |      41 | `(anonymous)` | `<unknown>` |

##### `_gfortran_st_open` (`<unknown>`)

|      % |   Time | Samples | Callee        | Location    |
| -----: | -----: | ------: | ------------- | ----------- |
| 100.0% | 95.0ms |      95 | `(anonymous)` | `<unknown>` |

##### `__json_value_module_MOD_json_value_create` (`./json_value_module.F90:2204`)

|     % |   Time | Samples | Callee          | Location    |
| ----: | -----: | ------: | --------------- | ----------- |
| 96.6% | 86.0ms |      86 | `__libc_malloc` | `<unknown>` |

##### `__json_value_module_MOD_json_value_destroy` (`./json_value_module.F90:2237`)

|      % |   Time | Samples | Callee                                       | Location                       |
| -----: | -----: | ------: | -------------------------------------------- | ------------------------------ |
| 100.0% | 74.0ms |      74 | `__json_value_module_MOD_json_value_destroy` | `./json_value_module.F90:2237` |
|  47.3% | 35.0ms |      35 | `cfree`                                      | `<unknown>`                    |
|  27.0% | 20.0ms |      20 | `__json_value_module_MOD_destroy_json_data`  | `./json_value_module.F90:1387` |
|   4.1% |  3.0ms |       3 | `_init`                                      | `<unknown>`                    |
|   1.4% |  1.0ms |       1 | `(anonymous)`                                | `<unknown>`                    |

##### `__json_file_module_MOD_json_file_destroy` (`./json_file_module.F90:769`)

|      % |   Time | Samples | Callee                                       | Location                       |
| -----: | -----: | ------: | -------------------------------------------- | ------------------------------ |
| 100.0% | 74.0ms |      74 | `__json_value_module_MOD_json_value_destroy` | `./json_value_module.F90:2237` |

##### `__json_value_module_MOD_parse_for_chars` (`./json_value_module.F90:11145`)

|     % |   Time | Samples | Callee                                    | Location                        |
| ----: | -----: | ------: | ----------------------------------------- | ------------------------------- |
| 88.1% | 52.0ms |      52 | `__json_value_module_MOD_pop_char.part.0` | `./json_value_module.F90:11318` |

##### `__json_file_module_MOD_json_file_get_string` (`./json_file_module.F90:1837`)

|     % |   Time | Samples | Callee                                            | Location                             |
| ----: | -----: | ------: | ------------------------------------------------- | ------------------------------------ |
| 93.5% | 29.0ms |      29 | `__json_value_module_MOD_json_get_string_by_path` | `./json_get_scalar_by_path.inc:9182` |
|  3.2% |  1.0ms |       1 | `__json_value_module_MOD_json_get_string_by_path` | `./json_value_module.F90:9182`       |
|  3.2% |  1.0ms |       1 | `__json_value_module_MOD_json_get_by_path`        | `./json_value_module.F90:6495`       |

##### `__json_value_module_MOD_json_get_string_by_path` (`./json_get_scalar_by_path.inc:9182`)

|     % |   Time | Samples | Callee                                     | Location                       |
| ----: | -----: | ------: | ------------------------------------------ | ------------------------------ |
| 86.2% | 25.0ms |      25 | `__json_value_module_MOD_json_get_by_path` | `./json_value_module.F90:6495` |
|  3.4% |  1.0ms |       1 | `__json_value_module_MOD_json_get_string`  | `./json_value_module.F90:9078` |
|  3.4% |  1.0ms |       1 | `__libc_malloc`                            | `<unknown>`                    |
|  3.4% |  1.0ms |       1 | `cfree`                                    | `<unknown>`                    |

##### `__json_value_module_MOD_destroy_json_data` (`./json_value_module.F90:1387`)

|     % |  Time | Samples | Callee  | Location    |
| ----: | ----: | ------: | ------- | ----------- |
| 34.6% | 9.0ms |       9 | `cfree` | `<unknown>` |

##### `__json_value_module_MOD_json_get_by_path` (`./json_value_module.F90:6495`)

|     % |   Time | Samples | Callee                                             | Location                       |
| ----: | -----: | ------: | -------------------------------------------------- | ------------------------------ |
| 92.3% | 24.0ms |      24 | `__json_value_module_MOD_json_get_by_path_default` | `./json_value_module.F90:6787` |
|  3.8% |  1.0ms |       1 | `_gfortran_string_len_trim`                        | `<unknown>`                    |

##### `calloc` (`<unknown>`)

|     % |  Time | Samples | Callee        | Location    |
| ----: | ----: | ------: | ------------- | ----------- |
| 35.3% | 6.0ms |       6 | `(anonymous)` | `<unknown>` |

##### `strndup` (`<unknown>`)

|      % |   Time | Samples | Callee          | Location    |
| -----: | -----: | ------: | --------------- | ----------- |
| 100.0% | 11.0ms |      11 | `__libc_malloc` | `<unknown>` |

##### `_gfortran_string_trim` (`<unknown>`)

|     % |  Time | Samples | Callee        | Location    |
| ----: | ----: | ------: | ------------- | ----------- |
| 57.1% | 4.0ms |       4 | `(anonymous)` | `<unknown>` |

## Hottest call stacks

Call stacks with the most time spent in their leaf frame.

Common call stack: `__json_value_module_MOD_json_parse_file` (`./json_value_module.F90:9714`) ← `__json_file_module_MOD_json_file_load` (`./json_file_module.F90:842`) ← `MAIN__` (`/out/profile.f90:5`) ← `main` (6) ← `(anonymous)` ← `__libc_start_main` ← `_start`

|    % |   Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ---: | -----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 2.3% | 92.0ms |      92 | `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90:11318`) ← `__json_value_module_MOD_parse_string` (11052) ← `__json_value_module_MOD_parse_value` (10117) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_array` (10987) ← `__json_value_module_MOD_parse_object` (10882)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 2.1% | 83.0ms |      83 | `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90:11318`) ← `__json_value_module_MOD_parse_string` (11052) ← `__json_value_module_MOD_parse_value` (10117) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_array` (10987) ← `__json_value_module_MOD_parse_object` (10882)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 1.4% | 57.0ms |      57 | `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90:11318`) ← `__json_value_module_MOD_parse_string` (11052) ← `__json_value_module_MOD_parse_value` (10117) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_array` (10987) ← `__json_value_module_MOD_parse_object` (10882)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 1.4% | 56.0ms |      56 | `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90:11318`) ← `__json_value_module_MOD_parse_string` (11052) ← `__json_value_module_MOD_parse_value` (10117) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_array` (10987) ← `__json_value_module_MOD_parse_object` (10882)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 1.4% | 55.0ms |      55 | `(anonymous)` ← `(anonymous)` ← `__libc_malloc` ← `(anonymous)` ← `(anonymous)` ← `(anonymous)` ← `_gfortran_st_open`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 0.6% | 24.0ms |      24 | `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90:11318`) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_array` (10987) ← `__json_value_module_MOD_parse_object` (10882)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 0.6% | 23.0ms |      23 | `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90:11318`) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_array` (10987) ← `__json_value_module_MOD_parse_object` (10882)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 0.5% | 22.0ms |      22 | `(anonymous)` ← `(anonymous)` ← `(anonymous)` ← `__libc_malloc` ← `(anonymous)` ← `(anonymous)` ← `(anonymous)` ← `_gfortran_st_open`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 0.5% | 20.0ms |      20 | `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90:11318`) ← `__json_value_module_MOD_parse_string` (11052) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_array` (10987) ← `__json_value_module_MOD_parse_object` (10882)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 0.5% | 20.0ms |      20 | `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90:11318`) ← `__json_value_module_MOD_parse_string` (11052) ← `__json_value_module_MOD_parse_value` (10117) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_array` (10987) ← `__json_value_module_MOD_parse_object` (10882) |
| 0.5% | 19.0ms |      19 | `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90:11318`) ← `__json_value_module_MOD_parse_string` (11052) ← `__json_value_module_MOD_parse_value` (10117) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_array` (10987) ← `__json_value_module_MOD_parse_object` (10882)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 0.5% | 19.0ms |      19 | `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90:11318`) ← `__json_value_module_MOD_parse_string` (11052) ← `__json_value_module_MOD_parse_value` (10117) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_array` (10987) ← `__json_value_module_MOD_parse_object` (10882)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 0.5% | 19.0ms |      19 | `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90:11318`) ← `__json_value_module_MOD_parse_string` (11052) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_array` (10987) ← `__json_value_module_MOD_parse_object` (10882)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 0.4% | 18.0ms |      18 | `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90:11318`) ← `__json_value_module_MOD_parse_string` (11052) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_array` (10987) ← `__json_value_module_MOD_parse_object` (10882)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 0.4% | 18.0ms |      18 | `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90:11318`) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_array` (10987) ← `__json_value_module_MOD_parse_object` (10882)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 0.4% | 18.0ms |      18 | `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90:11318`) ← `__json_value_module_MOD_parse_string` (11052) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_array` (10987) ← `__json_value_module_MOD_parse_object` (10882)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 0.4% | 18.0ms |      18 | `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90:11318`) ← `__json_value_module_MOD_parse_string` (11052) ← `__json_value_module_MOD_parse_value` (10117) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_array` (10987) ← `__json_value_module_MOD_parse_object` (10882)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 0.4% | 17.0ms |      17 | `__open` ← `(anonymous)` ← `(anonymous)` ← `_gfortran_st_open`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 0.4% | 17.0ms |      17 | `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90:11318`) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_array` (10987) ← `__json_value_module_MOD_parse_object` (10882)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 0.4% | 17.0ms |      17 | `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90:11318`) ← `__json_value_module_MOD_parse_string` (11052) ← `__json_value_module_MOD_parse_value` (10117) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_array` (10987) ← `__json_value_module_MOD_parse_object` (10882)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
