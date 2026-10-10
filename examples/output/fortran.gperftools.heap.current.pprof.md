# Allocated heap profile

Allocated 232 MiB over 1,141,340 objects (213 B per object).

| Category |     % |     Size | Objects |
| -------- | ----: | -------: | ------: |
| Unknown  | 70.3% |  163 MiB | 174,255 |
| Ours     | 29.6% | 68.7 MiB | 930,395 |
| Native   |  0.1% |  184 KiB |  36,690 |

Paths starting with `./` or `../` are relative to `/src/json-fortran/src/`.

## Hottest functions

### Self size

Functions with the most bytes allocated within the function body, excluding callees.

|     % |     Size | Objects | Function                                          | Location                             |
| ----: | -------: | ------: | ------------------------------------------------- | ------------------------------------ |
| 70.3% |  163 MiB | 174,255 | `(anonymous)`                                     | `<unknown>`                          |
| 19.2% | 44.6 MiB | 458,333 | `__json_value_module_MOD_parse_string`            | `./json_value_module.F90:11080`      |
|  6.3% | 14.6 MiB | 137,019 | `__json_value_module_MOD_json_value_create`       | `./json_value_module.F90:2211`       |
|  1.9% | 4.31 MiB |  17,652 | `__json_value_module_MOD_parse_number`            | `./json_value_module.F90:11220`      |
|  0.8% |  1.8 MiB |  43,364 | `__json_value_module_MOD_parse_value`             | `./json_value_module.F90:10124`      |
|  0.6% |  1.5 MiB | 125,366 | `__json_value_module_MOD_parse_object`            | `./json_value_module.F90:10889`      |
|  0.5% | 1.15 MiB |   7,845 | `__json_string_utilities_MOD_unescape_string`     | `./json_string_utilities.F90:483`    |
|  0.1% |  270 KiB |   1,800 | `__json_value_module_MOD_json_get_string`         | `./json_value_module.F90:9085`       |
|  0.1% |  184 KiB |  36,690 | `strndup`                                         | `<unknown>`                          |
|  0.1% |  167 KiB |  55,294 | `__json_string_utilities_MOD_string_to_integer`   | `./json_string_utilities.F90:116`    |
|  0.1% |  155 KiB |  19,834 | `__json_value_module_MOD_to_integer`              | `./json_value_module.F90:10697`      |
| <0.1% |  102 KiB |  26,217 | `__json_value_module_MOD_to_logical`              | `./json_value_module.F90:10666`      |
| <0.1% |   34 KiB |  34,861 | `__json_value_module_MOD_to_string`               | `./json_value_module.F90:10762`      |
| <0.1% | 24.7 KiB |   1,818 | `MAIN__`                                          | `/out/profile.f90:5`                 |
| <0.1% | 2.58 KiB |      18 | `__json_value_module_MOD_json_initialize`         | `./json_value_module.F90:1019`       |
| <0.1% | 2.17 KiB |      27 | `__json_value_module_MOD_pop_char.part.0`         | `./json_value_module.F90:11346`      |
| <0.1% | 1.56 KiB |     918 | `__json_value_module_MOD_json_get_string_by_path` | `./json_get_scalar_by_path.inc:9189` |
| <0.1% |  1.2 KiB |      18 | `__json_value_module_MOD_json_throw_exception`    | `./json_value_module.F90:2010`       |
| <0.1% |    170 B |      10 | `__json_value_module_MOD_json_parse_file`         | `./json_value_module.F90:9721`       |
| <0.1% |      3 B |       1 | `__json_value_module_MOD_json_prepare_parser`     | `./json_value_module.F90:9678`       |

#### Categories

Categories accounting for at least 1.0% of self size.

##### Unknown

|     % |    Size | Objects | Function      | Location    |
| ----: | ------: | ------: | ------------- | ----------- |
| 70.3% | 163 MiB | 174,255 | `(anonymous)` | `<unknown>` |

##### Ours

|     % |     Size | Objects | Function                                          | Location                             |
| ----: | -------: | ------: | ------------------------------------------------- | ------------------------------------ |
| 19.2% | 44.6 MiB | 458,333 | `__json_value_module_MOD_parse_string`            | `./json_value_module.F90:11080`      |
|  6.3% | 14.6 MiB | 137,019 | `__json_value_module_MOD_json_value_create`       | `./json_value_module.F90:2211`       |
|  1.9% | 4.31 MiB |  17,652 | `__json_value_module_MOD_parse_number`            | `./json_value_module.F90:11220`      |
|  0.8% |  1.8 MiB |  43,364 | `__json_value_module_MOD_parse_value`             | `./json_value_module.F90:10124`      |
|  0.6% |  1.5 MiB | 125,366 | `__json_value_module_MOD_parse_object`            | `./json_value_module.F90:10889`      |
|  0.5% | 1.15 MiB |   7,845 | `__json_string_utilities_MOD_unescape_string`     | `./json_string_utilities.F90:483`    |
|  0.1% |  270 KiB |   1,800 | `__json_value_module_MOD_json_get_string`         | `./json_value_module.F90:9085`       |
|  0.1% |  167 KiB |  55,294 | `__json_string_utilities_MOD_string_to_integer`   | `./json_string_utilities.F90:116`    |
|  0.1% |  155 KiB |  19,834 | `__json_value_module_MOD_to_integer`              | `./json_value_module.F90:10697`      |
| <0.1% |  102 KiB |  26,217 | `__json_value_module_MOD_to_logical`              | `./json_value_module.F90:10666`      |
| <0.1% |   34 KiB |  34,861 | `__json_value_module_MOD_to_string`               | `./json_value_module.F90:10762`      |
| <0.1% | 24.7 KiB |   1,818 | `MAIN__`                                          | `/out/profile.f90:5`                 |
| <0.1% | 2.58 KiB |      18 | `__json_value_module_MOD_json_initialize`         | `./json_value_module.F90:1019`       |
| <0.1% | 2.17 KiB |      27 | `__json_value_module_MOD_pop_char.part.0`         | `./json_value_module.F90:11346`      |
| <0.1% | 1.56 KiB |     918 | `__json_value_module_MOD_json_get_string_by_path` | `./json_get_scalar_by_path.inc:9189` |
| <0.1% |  1.2 KiB |      18 | `__json_value_module_MOD_json_throw_exception`    | `./json_value_module.F90:2010`       |
| <0.1% |    170 B |      10 | `__json_value_module_MOD_json_parse_file`         | `./json_value_module.F90:9721`       |
| <0.1% |      3 B |       1 | `__json_value_module_MOD_json_prepare_parser`     | `./json_value_module.F90:9678`       |

#### Lines

Lines with the largest contribution to each function's self size.

##### `__json_value_module_MOD_parse_string` (`./json_value_module.F90:11080`)

|     % |     Size | Objects | Location                        |
| ----: | -------: | ------: | ------------------------------- |
| 81.7% | 36.4 MiB | 149,124 | `./json_value_module.F90:11101` |
| 13.4% | 5.96 MiB | 303,949 | `./json_value_module.F90:11150` |
|  4.9% |  2.2 MiB |   4,503 | `./json_value_module.F90:11126` |
| <0.1% |    757 B |     757 | `./json_value_module.F90:11148` |

##### `__json_value_module_MOD_json_value_create` (`./json_value_module.F90:2211`)

|      % |     Size | Objects | Location                       |
| -----: | -------: | ------: | ------------------------------ |
| 100.0% | 14.6 MiB | 137,019 | `./json_value_module.F90:2218` |

##### `__json_value_module_MOD_parse_number` (`./json_value_module.F90:11220`)

|      % |     Size | Objects | Location                        |
| -----: | -------: | ------: | ------------------------------- |
| 100.0% | 4.31 MiB |  17,652 | `./json_value_module.F90:11244` |

##### `__json_value_module_MOD_parse_value` (`./json_value_module.F90:10124`)

|      % |    Size | Objects | Location                        |
| -----: | ------: | ------: | ------------------------------- |
| 100.0% | 1.8 MiB |  43,364 | `./json_value_module.F90:10192` |

##### `__json_value_module_MOD_parse_object` (`./json_value_module.F90:10889`)

|      % |    Size | Objects | Location                        |
| -----: | ------: | ------: | ------------------------------- |
| 100.0% | 1.5 MiB | 125,366 | `./json_value_module.F90:10937` |

##### `__json_string_utilities_MOD_unescape_string` (`./json_string_utilities.F90:483`)

|     % |    Size | Objects | Location                          |
| ----: | ------: | ------: | --------------------------------- |
| 71.7% | 845 KiB |   5,856 | `./json_string_utilities.F90:506` |
| 28.3% | 334 KiB |   1,989 | `./json_string_utilities.F90:611` |

##### `__json_value_module_MOD_json_get_string` (`./json_value_module.F90:9085`)

|     % |    Size | Objects | Location                       |
| ----: | ------: | ------: | ------------------------------ |
| 99.7% | 269 KiB |     900 | `./json_value_module.F90:9101` |
|  0.3% |   900 B |     900 | `./json_value_module.F90:9093` |

##### `__json_string_utilities_MOD_string_to_integer` (`./json_string_utilities.F90:116`)

|     % |     Size | Objects | Location                          |
| ----: | -------: | ------: | --------------------------------- |
| 80.4% |  134 KiB |  36,927 | `./json_string_utilities.F90:134` |
| 19.6% | 32.8 KiB |  18,367 | `./json_string_utilities.F90:131` |

##### `__json_value_module_MOD_to_integer` (`./json_value_module.F90:10697`)

|      % |    Size | Objects | Location                        |
| -----: | ------: | ------: | ------------------------------- |
| 100.0% | 155 KiB |  19,834 | `./json_value_module.F90:10710` |

##### `__json_value_module_MOD_to_logical` (`./json_value_module.F90:10666`)

|      % |    Size | Objects | Location                        |
| -----: | ------: | ------: | ------------------------------- |
| 100.0% | 102 KiB |  26,217 | `./json_value_module.F90:10679` |

##### `__json_value_module_MOD_to_string` (`./json_value_module.F90:10762`)

|      % |   Size | Objects | Location                        |
| -----: | -----: | ------: | ------------------------------- |
| 100.0% | 34 KiB |  34,861 | `./json_value_module.F90:10807` |

##### `MAIN__` (`/out/profile.f90:5`)

|      % |     Size | Objects | Location              |
| -----: | -------: | ------: | --------------------- |
| 100.0% | 24.7 KiB |   1,818 | `/out/profile.f90:32` |

##### `__json_value_module_MOD_json_initialize` (`./json_value_module.F90:1019`)

|     % |    Size | Objects | Location                       |
| ----: | ------: | ------: | ------------------------------ |
| 97.0% | 2.5 KiB |      10 | `./json_value_module.F90:1051` |
|  3.0% |    79 B |       8 | `./json_value_module.F90:1203` |

##### `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90:11346`)

|      % |     Size | Objects | Location                        |
| -----: | -------: | ------: | ------------------------------- |
| 100.0% | 2.17 KiB |      27 | `./json_value_module.F90:11411` |

##### `__json_value_module_MOD_json_get_string_by_path` (`./json_get_scalar_by_path.inc:9189`)

|     % |  Size | Objects | Location                           |
| ----: | ----: | ------: | ---------------------------------- |
| 57.1% | 909 B |     909 | `./json_get_scalar_by_path.inc:6`  |
| 42.9% | 684 B |       9 | `./json_get_scalar_by_path.inc:19` |

##### `__json_value_module_MOD_json_throw_exception` (`./json_value_module.F90:2010`)

|      % |    Size | Objects | Location                       |
| -----: | ------: | ------: | ------------------------------ |
| 100.0% | 1.2 KiB |      18 | `./json_value_module.F90:2028` |

##### `__json_value_module_MOD_json_parse_file` (`./json_value_module.F90:9721`)

|      % |  Size | Objects | Location                       |
| -----: | ----: | ------: | ------------------------------ |
| 100.0% | 170 B |      10 | `./json_value_module.F90:9793` |

##### `__json_value_module_MOD_json_prepare_parser` (`./json_value_module.F90:9678`)

|      % | Size | Objects | Location                       |
| -----: | ---: | ------: | ------------------------------ |
| 100.0% |  3 B |       1 | `./json_value_module.F90:9687` |

#### Callers

Callers with the largest contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `(anonymous)` (`<unknown>`)

|      % |     Size | Objects | Caller                  | Location    |
| -----: | -------: | ------: | ----------------------- | ----------- |
| 100.0% |  163 MiB | 155,393 | `(anonymous)`           | `<unknown>` |
|  <0.1% | 23.4 KiB |  18,862 | `_gfortran_string_trim` | `<unknown>` |

##### `__json_value_module_MOD_parse_string` (`./json_value_module.F90:11080`)

|     % |     Size | Objects | Caller                                 | Location                        |
| ----: | -------: | ------: | -------------------------------------- | ------------------------------- |
| 65.9% | 29.4 MiB | 331,232 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90:10889` |
| 34.1% | 15.2 MiB | 127,101 | `__json_value_module_MOD_parse_value`  | `./json_value_module.F90:10124` |

##### `__json_value_module_MOD_json_value_create` (`./json_value_module.F90:2211`)

|     % |     Size | Objects | Caller                                    | Location                        |
| ----: | -------: | ------: | ----------------------------------------- | ------------------------------- |
| 91.5% | 13.4 MiB | 125,358 | `__json_value_module_MOD_parse_object`    | `./json_value_module.F90:10889` |
|  8.5% | 1.24 MiB |  11,651 | `__json_value_module_MOD_parse_array`     | `./json_value_module.F90:11003` |
| <0.1% | 1.09 KiB |      10 | `__json_value_module_MOD_json_parse_file` | `./json_value_module.F90:9721`  |

##### `__json_value_module_MOD_parse_number` (`./json_value_module.F90:11220`)

|     % |     Size | Objects | Caller                                 | Location                        |
| ----: | -------: | ------: | -------------------------------------- | ------------------------------- |
| 84.4% | 3.64 MiB |  14,904 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90:10889` |
| 15.6% |  687 KiB |   2,748 | `__json_value_module_MOD_parse_array`  | `./json_value_module.F90:11003` |

##### `__json_value_module_MOD_parse_value` (`./json_value_module.F90:10124`)

|      % |    Size | Objects | Caller                                 | Location                        |
| -----: | ------: | ------: | -------------------------------------- | ------------------------------- |
| 100.0% | 1.8 MiB |  43,364 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90:10889` |

##### `__json_value_module_MOD_parse_object` (`./json_value_module.F90:10889`)

|     % |     Size | Objects | Caller                                    | Location                        |
| ----: | -------: | ------: | ----------------------------------------- | ------------------------------- |
| 98.8% | 1.48 MiB | 122,946 | `__json_value_module_MOD_parse_object`    | `./json_value_module.F90:10889` |
|  1.2% | 18.3 KiB |   2,410 | `__json_value_module_MOD_parse_array`     | `./json_value_module.F90:11003` |
| <0.1% |     80 B |      10 | `__json_value_module_MOD_json_parse_file` | `./json_value_module.F90:9721`  |

##### `__json_string_utilities_MOD_unescape_string` (`./json_string_utilities.F90:483`)

|      % |     Size | Objects | Caller                                 | Location                        |
| -----: | -------: | ------: | -------------------------------------- | ------------------------------- |
| 100.0% | 1.15 MiB |   7,845 | `__json_value_module_MOD_parse_string` | `./json_value_module.F90:11080` |

##### `__json_value_module_MOD_json_get_string` (`./json_value_module.F90:9085`)

|      % |    Size | Objects | Caller                                            | Location                             |
| -----: | ------: | ------: | ------------------------------------------------- | ------------------------------------ |
| 100.0% | 270 KiB |   1,800 | `__json_value_module_MOD_json_get_string_by_path` | `./json_get_scalar_by_path.inc:9189` |

##### `strndup` (`<unknown>`)

|      % |    Size | Objects | Caller        | Location    |
| -----: | ------: | ------: | ------------- | ----------- |
| 100.0% | 184 KiB |  36,690 | `(anonymous)` | `<unknown>` |

##### `__json_string_utilities_MOD_string_to_integer` (`./json_string_utilities.F90:116`)

|     % |     Size | Objects | Caller                                             | Location                       |
| ----: | -------: | ------: | -------------------------------------------------- | ------------------------------ |
| 96.3% |  161 KiB |  53,476 | `__json_value_module_MOD_string_to_int`            | `./json_value_module.F90:8081` |
|  3.7% | 6.21 KiB |   1,818 | `__json_value_module_MOD_json_get_by_path_default` | `./json_value_module.F90:6794` |

##### `__json_value_module_MOD_to_integer` (`./json_value_module.F90:10697`)

|      % |    Size | Objects | Caller                                 | Location                        |
| -----: | ------: | ------: | -------------------------------------- | ------------------------------- |
| 100.0% | 155 KiB |  19,834 | `__json_value_module_MOD_parse_number` | `./json_value_module.F90:11220` |

##### `__json_value_module_MOD_to_logical` (`./json_value_module.F90:10666`)

|      % |    Size | Objects | Caller                                 | Location                        |
| -----: | ------: | ------: | -------------------------------------- | ------------------------------- |
| 100.0% | 102 KiB |  26,217 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90:10889` |

##### `__json_value_module_MOD_to_string` (`./json_value_module.F90:10762`)

|      % |   Size | Objects | Caller                                | Location                        |
| -----: | -----: | ------: | ------------------------------------- | ------------------------------- |
| 100.0% | 34 KiB |  34,861 | `__json_value_module_MOD_parse_value` | `./json_value_module.F90:10124` |

##### `MAIN__` (`/out/profile.f90:5`)

|      % |     Size | Objects | Caller | Location             |
| -----: | -------: | ------: | ------ | -------------------- |
| 100.0% | 24.7 KiB |   1,818 | `main` | `/out/profile.f90:6` |

##### `__json_value_module_MOD_json_initialize` (`./json_value_module.F90:1019`)

|      % |     Size | Objects | Caller                                                | Location                     |
| -----: | -------: | ------: | ----------------------------------------------------- | ---------------------------- |
| 100.0% | 2.58 KiB |      18 | `__json_file_module_MOD_initialize_json_core_in_file` | `./json_file_module.F90:504` |

##### `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90:11346`)

|     % |     Size | Objects | Caller                                   | Location                        |
| ----: | -------: | ------: | ---------------------------------------- | ------------------------------- |
| 99.2% | 2.15 KiB |       9 | `__json_value_module_MOD_parse_string`   | `./json_value_module.F90:11080` |
|  0.8% |     18 B |      18 | `__json_value_module_MOD_json_parse_end` | `./json_value_module.F90:9885`  |

##### `__json_value_module_MOD_json_get_string_by_path` (`./json_get_scalar_by_path.inc:9189`)

|      % |     Size | Objects | Caller                                        | Location                      |
| -----: | -------: | ------: | --------------------------------------------- | ----------------------------- |
| 100.0% | 1.56 KiB |     918 | `__json_file_module_MOD_json_file_get_string` | `./json_file_module.F90:1863` |

##### `__json_value_module_MOD_json_throw_exception` (`./json_value_module.F90:2010`)

|     % |  Size | Objects | Caller                                                  | Location                             |
| ----: | ----: | ------: | ------------------------------------------------------- | ------------------------------------ |
| 55.9% | 684 B |       9 | `__json_value_module_MOD_json_get_string_by_path`       | `./json_get_scalar_by_path.inc:9189` |
| 44.1% | 540 B |       9 | `__json_value_module_MOD_json_value_get_child_by_index` | `./json_value_module.F90:5446`       |

##### `__json_value_module_MOD_json_parse_file` (`./json_value_module.F90:9721`)

|      % |  Size | Objects | Caller                                  | Location                     |
| -----: | ----: | ------: | --------------------------------------- | ---------------------------- |
| 100.0% | 170 B |      10 | `__json_file_module_MOD_json_file_load` | `./json_file_module.F90:854` |

##### `__json_value_module_MOD_json_prepare_parser` (`./json_value_module.F90:9678`)

|      % | Size | Objects | Caller                                    | Location                       |
| -----: | ---: | ------: | ----------------------------------------- | ------------------------------ |
| 100.0% |  3 B |       1 | `__json_value_module_MOD_json_parse_file` | `./json_value_module.F90:9721` |

### Total size

Functions with the most bytes allocated within the function and its callees.

|     % |     Size |   Objects | Function                                           | Location                             |
| ----: | -------: | --------: | -------------------------------------------------- | ------------------------------------ |
| 94.4% |  219 MiB | 1,121,189 | `__json_value_module_MOD_parse_object`             | `./json_value_module.F90:10889`      |
| 82.0% |  190 MiB |   535,555 | `(anonymous)`                                      | `<unknown>`                          |
| 68.3% |  159 MiB |   261,571 | `__json_string_utilities_MOD_string_to_integer`    | `./json_string_utilities.F90:116`    |
| 66.9% |  155 MiB |   288,185 | `__json_value_module_MOD_parse_number`             | `./json_value_module.F90:11220`      |
| 65.0% |  151 MiB |   250,663 | `__json_value_module_MOD_string_to_int`            | `./json_value_module.F90:8081`       |
| 54.0% |  125 MiB |   593,904 | `__json_value_module_MOD_parse_array`              | `./json_value_module.F90:11003`      |
| 30.8% | 71.5 MiB |   416,790 | `MAIN__`                                           | `/out/profile.f90:5`                 |
| 28.7% | 66.6 MiB |   446,365 | `__json_value_module_MOD_json_parse_file`          | `./json_value_module.F90:9721`       |
| 27.8% | 64.5 MiB |   390,639 | `main`                                             | `/out/profile.f90:6`                 |
| 26.5% | 61.6 MiB |   424,985 | `__json_file_module_MOD_json_file_load`            | `./json_file_module.F90:854`         |
| 22.3% | 51.7 MiB |   335,454 | `__libc_start_main`                                | `<unknown>`                          |
| 20.5% | 47.6 MiB |   305,488 | `_start`                                           | `<unknown>`                          |
| 19.7% | 45.7 MiB |   466,187 | `__json_value_module_MOD_parse_string`             | `./json_value_module.F90:11080`      |
|  7.8% | 18.2 MiB |   213,180 | `__json_value_module_MOD_parse_value`              | `./json_value_module.F90:10124`      |
|  6.3% | 14.6 MiB |   137,019 | `__json_value_module_MOD_json_value_create`        | `./json_value_module.F90:2211`       |
|  3.4% | 7.96 MiB |    13,653 | `__json_value_module_MOD_json_get_string_by_path`  | `./json_get_scalar_by_path.inc:9189` |
|  3.4% | 7.96 MiB |    13,653 | `__json_file_module_MOD_json_file_get_string`      | `./json_file_module.F90:1863`        |
|  3.3% |  7.7 MiB |    10,917 | `__json_value_module_MOD_json_get_by_path_default` | `./json_value_module.F90:6794`       |
|  3.3% |  7.7 MiB |    10,917 | `__json_value_module_MOD_json_get_by_path`         | `./json_value_module.F90:6502`       |
|  0.5% | 1.25 MiB |        40 | `_gfortran_st_open`                                | `<unknown>`                          |

#### Categories

Categories accounting for at least 1.0% of self size.

##### Unknown

|     % |    Size | Objects | Function      | Location    |
| ----: | ------: | ------: | ------------- | ----------- |
| 82.0% | 190 MiB | 535,555 | `(anonymous)` | `<unknown>` |

##### Ours

|     % |     Size |   Objects | Function                                           | Location                             |
| ----: | -------: | --------: | -------------------------------------------------- | ------------------------------------ |
| 94.4% |  219 MiB | 1,121,189 | `__json_value_module_MOD_parse_object`             | `./json_value_module.F90:10889`      |
| 68.3% |  159 MiB |   261,571 | `__json_string_utilities_MOD_string_to_integer`    | `./json_string_utilities.F90:116`    |
| 66.9% |  155 MiB |   288,185 | `__json_value_module_MOD_parse_number`             | `./json_value_module.F90:11220`      |
| 65.0% |  151 MiB |   250,663 | `__json_value_module_MOD_string_to_int`            | `./json_value_module.F90:8081`       |
| 54.0% |  125 MiB |   593,904 | `__json_value_module_MOD_parse_array`              | `./json_value_module.F90:11003`      |
| 30.8% | 71.5 MiB |   416,790 | `MAIN__`                                           | `/out/profile.f90:5`                 |
| 28.7% | 66.6 MiB |   446,365 | `__json_value_module_MOD_json_parse_file`          | `./json_value_module.F90:9721`       |
| 27.8% | 64.5 MiB |   390,639 | `main`                                             | `/out/profile.f90:6`                 |
| 26.5% | 61.6 MiB |   424,985 | `__json_file_module_MOD_json_file_load`            | `./json_file_module.F90:854`         |
| 19.7% | 45.7 MiB |   466,187 | `__json_value_module_MOD_parse_string`             | `./json_value_module.F90:11080`      |
|  7.8% | 18.2 MiB |   213,180 | `__json_value_module_MOD_parse_value`              | `./json_value_module.F90:10124`      |
|  6.3% | 14.6 MiB |   137,019 | `__json_value_module_MOD_json_value_create`        | `./json_value_module.F90:2211`       |
|  3.4% | 7.96 MiB |    13,653 | `__json_value_module_MOD_json_get_string_by_path`  | `./json_get_scalar_by_path.inc:9189` |
|  3.4% | 7.96 MiB |    13,653 | `__json_file_module_MOD_json_file_get_string`      | `./json_file_module.F90:1863`        |
|  3.3% |  7.7 MiB |    10,917 | `__json_value_module_MOD_json_get_by_path_default` | `./json_value_module.F90:6794`       |
|  3.3% |  7.7 MiB |    10,917 | `__json_value_module_MOD_json_get_by_path`         | `./json_value_module.F90:6502`       |
|  0.5% | 1.15 MiB |     7,845 | `__json_string_utilities_MOD_unescape_string`      | `./json_string_utilities.F90:483`    |
|  0.1% |  270 KiB |     1,800 | `__json_value_module_MOD_json_get_string`          | `./json_value_module.F90:9085`       |
|  0.1% |  155 KiB |    19,834 | `__json_value_module_MOD_to_integer`               | `./json_value_module.F90:10697`      |
| <0.1% |  102 KiB |    26,217 | `__json_value_module_MOD_to_logical`               | `./json_value_module.F90:10666`      |

#### Callers

Callers with the largest contribution to each function's total size. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `__json_value_module_MOD_parse_object` (`./json_value_module.F90:10889`)

|     % |     Size |   Objects | Caller                                    | Location                        |
| ----: | -------: | --------: | ----------------------------------------- | ------------------------------- |
| 99.8% |  219 MiB | 1,115,505 | `__json_value_module_MOD_parse_object`    | `./json_value_module.F90:10889` |
| 57.0% |  125 MiB |   589,399 | `__json_value_module_MOD_parse_array`     | `./json_value_module.F90:11003` |
| 29.8% | 65.4 MiB |   446,286 | `__json_value_module_MOD_json_parse_file` | `./json_value_module.F90:9721`  |

##### `(anonymous)` (`<unknown>`)

|     % |     Size | Objects | Caller                                          | Location                          |
| ----: | -------: | ------: | ----------------------------------------------- | --------------------------------- |
| 85.8% |  163 MiB | 192,083 | `(anonymous)`                                   | `<unknown>`                       |
| 83.2% |  158 MiB | 188,343 | `__json_string_utilities_MOD_string_to_integer` | `./json_string_utilities.F90:116` |
| 27.1% | 51.7 MiB | 335,454 | `__libc_start_main`                             | `<unknown>`                       |
|  2.0% | 3.83 MiB |   3,650 | `MAIN__`                                        | `/out/profile.f90:5`              |
|  0.7% | 1.25 MiB |      40 | `_gfortran_st_open`                             | `<unknown>`                       |

##### `__json_string_utilities_MOD_string_to_integer` (`./json_string_utilities.F90:116`)

|     % |    Size | Objects | Caller                                             | Location                       |
| ----: | ------: | ------: | -------------------------------------------------- | ------------------------------ |
| 95.1% | 151 MiB | 250,663 | `__json_value_module_MOD_string_to_int`            | `./json_value_module.F90:8081` |
|  4.9% | 7.7 MiB |  10,908 | `__json_value_module_MOD_json_get_by_path_default` | `./json_value_module.F90:6794` |

##### `__json_value_module_MOD_parse_number` (`./json_value_module.F90:11220`)

|     % |     Size | Objects | Caller                                 | Location                        |
| ----: | -------: | ------: | -------------------------------------- | ------------------------------- |
| 84.0% |  130 MiB | 245,067 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90:10889` |
| 16.0% | 24.9 MiB |  43,118 | `__json_value_module_MOD_parse_array`  | `./json_value_module.F90:11003` |

##### `__json_value_module_MOD_string_to_int` (`./json_value_module.F90:8081`)

|      % |    Size | Objects | Caller                                 | Location                        |
| -----: | ------: | ------: | -------------------------------------- | ------------------------------- |
| 100.0% | 151 MiB | 250,663 | `__json_value_module_MOD_parse_number` | `./json_value_module.F90:11220` |

##### `__json_value_module_MOD_parse_array` (`./json_value_module.F90:11003`)

|     % |    Size | Objects | Caller                                 | Location                        |
| ----: | ------: | ------: | -------------------------------------- | ------------------------------- |
| 93.2% | 117 MiB | 574,657 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90:10889` |

##### `MAIN__` (`/out/profile.f90:5`)

|     % |     Size | Objects | Caller | Location             |
| ----: | -------: | ------: | ------ | -------------------- |
| 90.2% | 64.5 MiB | 390,639 | `main` | `/out/profile.f90:6` |

##### `__json_value_module_MOD_json_parse_file` (`./json_value_module.F90:9721`)

|     % |     Size | Objects | Caller                                  | Location                     |
| ----: | -------: | ------: | --------------------------------------- | ---------------------------- |
| 92.4% | 61.6 MiB | 424,985 | `__json_file_module_MOD_json_file_load` | `./json_file_module.F90:854` |

##### `main` (`/out/profile.f90:6`)

|     % |     Size | Objects | Caller        | Location    |
| ----: | -------: | ------: | ------------- | ----------- |
| 97.0% | 62.5 MiB | 363,752 | `(anonymous)` | `<unknown>` |

##### `__json_file_module_MOD_json_file_load` (`./json_file_module.F90:854`)

|     % |     Size | Objects | Caller   | Location             |
| ----: | -------: | ------: | -------- | -------------------- |
| 96.9% | 59.6 MiB | 396,718 | `MAIN__` | `/out/profile.f90:5` |

##### `__libc_start_main` (`<unknown>`)

|     % |     Size | Objects | Caller   | Location    |
| ----: | -------: | ------: | -------- | ----------- |
| 92.1% | 47.6 MiB | 305,488 | `_start` | `<unknown>` |

##### `__json_value_module_MOD_parse_string` (`./json_value_module.F90:11080`)

|     % |     Size | Objects | Caller                                 | Location                        |
| ----: | -------: | ------: | -------------------------------------- | ------------------------------- |
| 64.2% | 29.4 MiB | 331,232 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90:10889` |
| 35.8% | 16.4 MiB | 134,955 | `__json_value_module_MOD_parse_value`  | `./json_value_module.F90:10124` |

##### `__json_value_module_MOD_parse_value` (`./json_value_module.F90:10124`)

|      % |     Size | Objects | Caller                                 | Location                        |
| -----: | -------: | ------: | -------------------------------------- | ------------------------------- |
| 100.0% | 18.2 MiB | 213,180 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90:10889` |

##### `__json_value_module_MOD_json_value_create` (`./json_value_module.F90:2211`)

|     % |     Size | Objects | Caller                                    | Location                        |
| ----: | -------: | ------: | ----------------------------------------- | ------------------------------- |
| 91.5% | 13.4 MiB | 125,358 | `__json_value_module_MOD_parse_object`    | `./json_value_module.F90:10889` |
|  8.5% | 1.24 MiB |  11,651 | `__json_value_module_MOD_parse_array`     | `./json_value_module.F90:11003` |
| <0.1% | 1.09 KiB |      10 | `__json_value_module_MOD_json_parse_file` | `./json_value_module.F90:9721`  |

##### `__json_value_module_MOD_json_get_string_by_path` (`./json_get_scalar_by_path.inc:9189`)

|      % |     Size | Objects | Caller                                        | Location                      |
| -----: | -------: | ------: | --------------------------------------------- | ----------------------------- |
| 100.0% | 7.96 MiB |  13,653 | `__json_file_module_MOD_json_file_get_string` | `./json_file_module.F90:1863` |

##### `__json_file_module_MOD_json_file_get_string` (`./json_file_module.F90:1863`)

|      % |     Size | Objects | Caller   | Location             |
| -----: | -------: | ------: | -------- | -------------------- |
| 100.0% | 7.96 MiB |  13,653 | `MAIN__` | `/out/profile.f90:5` |

##### `__json_value_module_MOD_json_get_by_path_default` (`./json_value_module.F90:6794`)

|      % |    Size | Objects | Caller                                     | Location                       |
| -----: | ------: | ------: | ------------------------------------------ | ------------------------------ |
| 100.0% | 7.7 MiB |  10,917 | `__json_value_module_MOD_json_get_by_path` | `./json_value_module.F90:6502` |

##### `__json_value_module_MOD_json_get_by_path` (`./json_value_module.F90:6502`)

|      % |    Size | Objects | Caller                                            | Location                             |
| -----: | ------: | ------: | ------------------------------------------------- | ------------------------------------ |
| 100.0% | 7.7 MiB |  10,917 | `__json_value_module_MOD_json_get_string_by_path` | `./json_get_scalar_by_path.inc:9189` |

##### `_gfortran_st_open` (`<unknown>`)

|      % |     Size | Objects | Caller                                    | Location                       |
| -----: | -------: | ------: | ----------------------------------------- | ------------------------------ |
| 100.0% | 1.25 MiB |      40 | `__json_value_module_MOD_json_parse_file` | `./json_value_module.F90:9721` |

##### `__json_string_utilities_MOD_unescape_string` (`./json_string_utilities.F90:483`)

|      % |     Size | Objects | Caller                                 | Location                        |
| -----: | -------: | ------: | -------------------------------------- | ------------------------------- |
| 100.0% | 1.15 MiB |   7,845 | `__json_value_module_MOD_parse_string` | `./json_value_module.F90:11080` |

##### `__json_value_module_MOD_json_get_string` (`./json_value_module.F90:9085`)

|      % |    Size | Objects | Caller                                            | Location                             |
| -----: | ------: | ------: | ------------------------------------------------- | ------------------------------------ |
| 100.0% | 270 KiB |   1,800 | `__json_value_module_MOD_json_get_string_by_path` | `./json_get_scalar_by_path.inc:9189` |

##### `__json_value_module_MOD_to_integer` (`./json_value_module.F90:10697`)

|      % |    Size | Objects | Caller                                 | Location                        |
| -----: | ------: | ------: | -------------------------------------- | ------------------------------- |
| 100.0% | 155 KiB |  19,834 | `__json_value_module_MOD_parse_number` | `./json_value_module.F90:11220` |

##### `__json_value_module_MOD_to_logical` (`./json_value_module.F90:10666`)

|      % |    Size | Objects | Caller                                 | Location                        |
| -----: | ------: | ------: | -------------------------------------- | ------------------------------- |
| 100.0% | 102 KiB |  26,217 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90:10889` |

#### Callees

Callees with the largest contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `__json_value_module_MOD_parse_object` (`./json_value_module.F90:10889`)

|     % |     Size |   Objects | Callee                                 | Location                        |
| ----: | -------: | --------: | -------------------------------------- | ------------------------------- |
| 99.8% |  219 MiB | 1,115,505 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90:10889` |
| 59.5% |  130 MiB |   245,067 | `__json_value_module_MOD_parse_number` | `./json_value_module.F90:11220` |
| 53.4% |  117 MiB |   574,657 | `__json_value_module_MOD_parse_array`  | `./json_value_module.F90:11003` |
| 13.4% | 29.4 MiB |   331,232 | `__json_value_module_MOD_parse_string` | `./json_value_module.F90:11080` |
|  8.3% | 18.2 MiB |   213,180 | `__json_value_module_MOD_parse_value`  | `./json_value_module.F90:10124` |

##### `(anonymous)` (`<unknown>`)

|     % |     Size | Objects | Callee        | Location             |
| ----: | -------: | ------: | ------------- | -------------------- |
| 85.8% |  163 MiB | 192,083 | `(anonymous)` | `<unknown>`          |
| 32.8% | 62.5 MiB | 363,752 | `main`        | `/out/profile.f90:6` |
|  0.1% |  184 KiB |  36,690 | `strndup`     | `<unknown>`          |

##### `__json_string_utilities_MOD_string_to_integer` (`./json_string_utilities.F90:116`)

|     % |     Size | Objects | Callee                  | Location    |
| ----: | -------: | ------: | ----------------------- | ----------- |
| 99.9% |  158 MiB | 188,343 | `(anonymous)`           | `<unknown>` |
| <0.1% | 21.3 KiB |  17,934 | `_gfortran_string_trim` | `<unknown>` |

##### `__json_value_module_MOD_parse_number` (`./json_value_module.F90:11220`)

|     % |     Size | Objects | Callee                                   | Location                        |
| ----: | -------: | ------: | ---------------------------------------- | ------------------------------- |
| 97.1% |  151 MiB | 250,663 | `__json_value_module_MOD_string_to_int`  | `./json_value_module.F90:8081`  |
|  0.1% |  155 KiB |  19,834 | `__json_value_module_MOD_to_integer`     | `./json_value_module.F90:10697` |
| <0.1% | 4.89 KiB |      36 | `__json_value_module_MOD_string_to_dble` | `./json_value_module.F90:8108`  |

##### `__json_value_module_MOD_string_to_int` (`./json_value_module.F90:8081`)

|      % |    Size | Objects | Callee                                          | Location                          |
| -----: | ------: | ------: | ----------------------------------------------- | --------------------------------- |
| 100.0% | 151 MiB | 250,663 | `__json_string_utilities_MOD_string_to_integer` | `./json_string_utilities.F90:116` |

##### `__json_value_module_MOD_parse_array` (`./json_value_module.F90:11003`)

|     % |     Size | Objects | Callee                                      | Location                        |
| ----: | -------: | ------: | ------------------------------------------- | ------------------------------- |
| 99.6% |  125 MiB | 589,399 | `__json_value_module_MOD_parse_object`      | `./json_value_module.F90:10889` |
| 19.9% | 24.9 MiB |  43,118 | `__json_value_module_MOD_parse_number`      | `./json_value_module.F90:11220` |
|  1.0% | 1.24 MiB |  11,651 | `__json_value_module_MOD_json_value_create` | `./json_value_module.F90:2211`  |

##### `MAIN__` (`/out/profile.f90:5`)

|     % |     Size | Objects | Callee                                                | Location                      |
| ----: | -------: | ------: | ----------------------------------------------------- | ----------------------------- |
| 83.4% | 59.6 MiB | 396,718 | `__json_file_module_MOD_json_file_load`               | `./json_file_module.F90:854`  |
| 11.1% | 7.96 MiB |  13,653 | `__json_file_module_MOD_json_file_get_string`         | `./json_file_module.F90:1863` |
|  5.4% | 3.83 MiB |   3,650 | `(anonymous)`                                         | `<unknown>`                   |
| <0.1% | 15.5 KiB |      32 | `__json_file_module_MOD_initialize_json_core_in_file` | `./json_file_module.F90:504`  |
| <0.1% | 1.88 KiB |     919 | `_gfortran_string_trim`                               | `<unknown>`                   |

##### `__json_value_module_MOD_json_parse_file` (`./json_value_module.F90:9721`)

|     % |     Size | Objects | Callee                                        | Location                        |
| ----: | -------: | ------: | --------------------------------------------- | ------------------------------- |
| 98.1% | 65.4 MiB | 446,286 | `__json_value_module_MOD_parse_object`        | `./json_value_module.F90:10889` |
|  1.9% | 1.25 MiB |      40 | `_gfortran_st_open`                           | `<unknown>`                     |
| <0.1% | 1.09 KiB |      10 | `__json_value_module_MOD_json_value_create`   | `./json_value_module.F90:2211`  |
| <0.1% |     18 B |      18 | `__json_value_module_MOD_json_parse_end`      | `./json_value_module.F90:9885`  |
| <0.1% |      3 B |       1 | `__json_value_module_MOD_json_prepare_parser` | `./json_value_module.F90:9678`  |

##### `main` (`/out/profile.f90:6`)

|      % |     Size | Objects | Callee   | Location             |
| -----: | -------: | ------: | -------- | -------------------- |
| 100.0% | 64.5 MiB | 390,639 | `MAIN__` | `/out/profile.f90:5` |

##### `__json_file_module_MOD_json_file_load` (`./json_file_module.F90:854`)

|      % |     Size | Objects | Callee                                    | Location                       |
| -----: | -------: | ------: | ----------------------------------------- | ------------------------------ |
| 100.0% | 61.6 MiB | 424,985 | `__json_value_module_MOD_json_parse_file` | `./json_value_module.F90:9721` |

##### `__libc_start_main` (`<unknown>`)

|      % |     Size | Objects | Callee        | Location    |
| -----: | -------: | ------: | ------------- | ----------- |
| 100.0% | 51.7 MiB | 335,454 | `(anonymous)` | `<unknown>` |

##### `_start` (`<unknown>`)

|      % |     Size | Objects | Callee              | Location    |
| -----: | -------: | ------: | ------------------- | ----------- |
| 100.0% | 47.6 MiB | 305,488 | `__libc_start_main` | `<unknown>` |

##### `__json_value_module_MOD_parse_string` (`./json_value_module.F90:11080`)

|     % |     Size | Objects | Callee                                        | Location                          |
| ----: | -------: | ------: | --------------------------------------------- | --------------------------------- |
|  2.5% | 1.15 MiB |   7,845 | `__json_string_utilities_MOD_unescape_string` | `./json_string_utilities.F90:483` |
| <0.1% | 2.15 KiB |       9 | `__json_value_module_MOD_pop_char.part.0`     | `./json_value_module.F90:11346`   |

##### `__json_value_module_MOD_parse_value` (`./json_value_module.F90:10124`)

|     % |     Size | Objects | Callee                                 | Location                        |
| ----: | -------: | ------: | -------------------------------------- | ------------------------------- |
| 89.9% | 16.4 MiB | 134,955 | `__json_value_module_MOD_parse_string` | `./json_value_module.F90:11080` |
|  0.2% |   34 KiB |  34,861 | `__json_value_module_MOD_to_string`    | `./json_value_module.F90:10762` |

##### `__json_value_module_MOD_json_get_string_by_path` (`./json_get_scalar_by_path.inc:9189`)

|     % |    Size | Objects | Callee                                         | Location                       |
| ----: | ------: | ------: | ---------------------------------------------- | ------------------------------ |
| 96.7% | 7.7 MiB |  10,917 | `__json_value_module_MOD_json_get_by_path`     | `./json_value_module.F90:6502` |
|  3.3% | 270 KiB |   1,800 | `__json_value_module_MOD_json_get_string`      | `./json_value_module.F90:9085` |
| <0.1% |   684 B |       9 | `__json_value_module_MOD_json_throw_exception` | `./json_value_module.F90:2010` |
| <0.1% |   162 B |       9 | `_gfortran_string_trim`                        | `<unknown>`                    |

##### `__json_file_module_MOD_json_file_get_string` (`./json_file_module.F90:1863`)

|      % |     Size | Objects | Callee                                            | Location                             |
| -----: | -------: | ------: | ------------------------------------------------- | ------------------------------------ |
| 100.0% | 7.96 MiB |  13,653 | `__json_value_module_MOD_json_get_string_by_path` | `./json_get_scalar_by_path.inc:9189` |

##### `__json_value_module_MOD_json_get_by_path_default` (`./json_value_module.F90:6794`)

|      % |    Size | Objects | Callee                                                  | Location                          |
| -----: | ------: | ------: | ------------------------------------------------------- | --------------------------------- |
| 100.0% | 7.7 MiB |  10,908 | `__json_string_utilities_MOD_string_to_integer`         | `./json_string_utilities.F90:116` |
|  <0.1% |   540 B |       9 | `__json_value_module_MOD_json_value_get_child_by_index` | `./json_value_module.F90:5446`    |

##### `__json_value_module_MOD_json_get_by_path` (`./json_value_module.F90:6502`)

|      % |    Size | Objects | Callee                                             | Location                       |
| -----: | ------: | ------: | -------------------------------------------------- | ------------------------------ |
| 100.0% | 7.7 MiB |  10,917 | `__json_value_module_MOD_json_get_by_path_default` | `./json_value_module.F90:6794` |

##### `_gfortran_st_open` (`<unknown>`)

|      % |     Size | Objects | Callee        | Location    |
| -----: | -------: | ------: | ------------- | ----------- |
| 100.0% | 1.25 MiB |      40 | `(anonymous)` | `<unknown>` |

## Hottest call stacks

Call stacks with the most bytes allocated in their leaf frame.

|     % |     Size | Objects | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ----: | -------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 25.2% | 58.6 MiB |  14,721 | `(anonymous)` ← `(anonymous)` ← `(anonymous)` ← `__json_string_utilities_MOD_string_to_integer` (`./json_string_utilities.F90:116`) ← `__json_value_module_MOD_string_to_int` (`./json_value_module.F90:8081`) ← `__json_value_module_MOD_parse_number` (11220) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889)                                                                   |
|  6.3% | 14.7 MiB | 165,648 | `__json_value_module_MOD_parse_string` (`./json_value_module.F90:11080`) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889)     |
|  5.9% | 13.7 MiB |   3,432 | `(anonymous)` ← `(anonymous)` ← `(anonymous)` ← `__json_string_utilities_MOD_string_to_integer` (`./json_string_utilities.F90:116`) ← `__json_value_module_MOD_string_to_int` (`./json_value_module.F90:8081`) ← `__json_value_module_MOD_parse_number` (11220) ← `__json_value_module_MOD_parse_array` (11003) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_array` (11003) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889)                                                                     |
|  3.2% | 7.48 MiB |   1,878 | `(anonymous)` ← `(anonymous)` ← `(anonymous)` ← `__json_string_utilities_MOD_string_to_integer` (`./json_string_utilities.F90:116`) ← `__json_value_module_MOD_string_to_int` (`./json_value_module.F90:8081`) ← `__json_value_module_MOD_parse_number` (11220) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_array` (11003) ← `__json_value_module_MOD_parse_object` (10889)                                                                    |
|  3.2% | 7.48 MiB |   1,878 | `(anonymous)` ← `(anonymous)` ← `(anonymous)` ← `__json_string_utilities_MOD_string_to_integer` (`./json_string_utilities.F90:116`) ← `__json_value_module_MOD_string_to_int` (`./json_value_module.F90:8081`) ← `__json_value_module_MOD_parse_number` (11220) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_array` (11003) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_json_parse_file` (9721) ← `__json_file_module_MOD_json_file_load` (`./json_file_module.F90:854`) ← `MAIN__` (`/out/profile.f90:5`) ← `main` (6) ← `(anonymous)` ← `__libc_start_main` ← `_start`                                                                                                                                                                                                                                                                                                                                                  |
|  3.2% | 7.48 MiB |   1,878 | `(anonymous)` ← `(anonymous)` ← `(anonymous)` ← `__json_string_utilities_MOD_string_to_integer` (`./json_string_utilities.F90:116`) ← `__json_value_module_MOD_string_to_int` (`./json_value_module.F90:8081`) ← `__json_value_module_MOD_parse_number` (11220) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_array` (11003)                                                                    |
|  3.2% | 7.47 MiB |   1,876 | `(anonymous)` ← `(anonymous)` ← `(anonymous)` ← `__json_string_utilities_MOD_string_to_integer` (`./json_string_utilities.F90:116`) ← `__json_value_module_MOD_string_to_int` (`./json_value_module.F90:8081`) ← `__json_value_module_MOD_parse_number` (11220) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_array` (11003) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_json_parse_file` (9721) ← `__json_file_module_MOD_json_file_load` (`./json_file_module.F90:854`) ← `MAIN__` (`/out/profile.f90:5`) ← `main` (6) ← `(anonymous)`                                                                                                                              |
|  3.1% | 7.24 MiB |   1,818 | `(anonymous)` ← `(anonymous)` ← `(anonymous)` ← `__json_string_utilities_MOD_string_to_integer` (`./json_string_utilities.F90:116`) ← `__json_value_module_MOD_json_get_by_path_default` (`./json_value_module.F90:6794`) ← `__json_value_module_MOD_json_get_by_path` (6502) ← `__json_value_module_MOD_json_get_string_by_path` (`./json_get_scalar_by_path.inc:9189`) ← `__json_file_module_MOD_json_file_get_string` (`./json_file_module.F90:1863`) ← `MAIN__` (`/out/profile.f90:5`) ← `main` (6) ← `(anonymous)` ← `__libc_start_main` ← `_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  2.9% | 6.83 MiB |   1,716 | `(anonymous)` ← `(anonymous)` ← `(anonymous)` ← `__json_string_utilities_MOD_string_to_integer` (`./json_string_utilities.F90:116`) ← `__json_value_module_MOD_string_to_int` (`./json_value_module.F90:8081`) ← `__json_value_module_MOD_parse_number` (11220) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_array` (11003) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889)                                                                    |
|  2.9% | 6.72 MiB |   1,688 | `(anonymous)` ← `(anonymous)` ← `(anonymous)` ← `__json_string_utilities_MOD_string_to_integer` (`./json_string_utilities.F90:116`) ← `__json_value_module_MOD_string_to_int` (`./json_value_module.F90:8081`) ← `__json_value_module_MOD_parse_number` (11220) ← `__json_value_module_MOD_parse_array` (11003) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_array` (11003) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889)                                                                     |
|  2.8% |  6.5 MiB |  60,816 | `__json_value_module_MOD_json_value_create` (`./json_value_module.F90:2211`) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) |
|  2.6% | 5.96 MiB |  61,700 | `__json_value_module_MOD_parse_string` (`./json_value_module.F90:11080`) ← `__json_value_module_MOD_parse_value` (10124) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889)      |
|  2.4% | 5.47 MiB |   1,374 | `(anonymous)` ← `(anonymous)` ← `(anonymous)` ← `__json_string_utilities_MOD_string_to_integer` (`./json_string_utilities.F90:116`) ← `__json_value_module_MOD_string_to_int` (`./json_value_module.F90:8081`) ← `__json_value_module_MOD_parse_number` (11220) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_array` (11003) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_json_parse_file` (9721) ← `__json_file_module_MOD_json_file_load` (`./json_file_module.F90:854`) ← `MAIN__` (`/out/profile.f90:5`)                                                         |
|  1.6% | 3.74 MiB |     939 | `(anonymous)` ← `(anonymous)` ← `(anonymous)` ← `__json_string_utilities_MOD_string_to_integer` (`./json_string_utilities.F90:116`) ← `__json_value_module_MOD_string_to_int` (`./json_value_module.F90:8081`) ← `__json_value_module_MOD_parse_number` (11220) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_array` (11003) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_json_parse_file` (9721)                                                                  |
|  1.6% | 3.74 MiB |     939 | `(anonymous)` ← `(anonymous)` ← `(anonymous)` ← `__json_string_utilities_MOD_string_to_integer` (`./json_string_utilities.F90:116`) ← `__json_value_module_MOD_string_to_int` (`./json_value_module.F90:8081`) ← `__json_value_module_MOD_parse_number` (11220) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_array` (11003) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_json_parse_file` (9721) ← `__json_file_module_MOD_json_file_load` (`./json_file_module.F90:854`) ← `MAIN__` (`/out/profile.f90:5`) ← `main` (6) ← `(anonymous)` ← `__libc_start_main` ← `_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  1.6% | 3.62 MiB |     909 | `(anonymous)` ← `(anonymous)` ← `(anonymous)` ← `MAIN__` (`/out/profile.f90:5`) ← `main` (6) ← `(anonymous)` ← `__libc_start_main` ← `_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  1.0% | 2.27 MiB |  29,586 | `(anonymous)` ← `(anonymous)` ← `(anonymous)` ← `(anonymous)` ← `__json_string_utilities_MOD_string_to_integer` (`./json_string_utilities.F90:116`) ← `__json_value_module_MOD_string_to_int` (`./json_value_module.F90:8081`) ← `__json_value_module_MOD_parse_number` (11220) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889)                                                                                                    |
|  0.9% | 2.01 MiB |     504 | `(anonymous)` ← `(anonymous)` ← `(anonymous)` ← `__json_string_utilities_MOD_string_to_integer` (`./json_string_utilities.F90:116`) ← `__json_value_module_MOD_string_to_int` (`./json_value_module.F90:8081`) ← `__json_value_module_MOD_parse_number` (11220) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_array` (11003) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_json_parse_file` (9721) ← `__json_file_module_MOD_json_file_load` (`./json_file_module.F90:854`) ← `MAIN__` (`/out/profile.f90:5`) ← `main` (6) ← `(anonymous)` ← `__libc_start_main`                                                                                                                                                         |
|  0.8% | 1.81 MiB |   4,923 | `__json_value_module_MOD_parse_string` (`./json_value_module.F90:11080`) ← `__json_value_module_MOD_parse_value` (10124) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_array` (11003) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_json_parse_file` (9721) ← `__json_file_module_MOD_json_file_load` (`./json_file_module.F90:854`) ← `MAIN__` (`/out/profile.f90:5`) ← `main` (6) ← `(anonymous)` ← `__libc_start_main` ← `_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  0.8% | 1.75 MiB |  19,164 | `(anonymous)` ← `(anonymous)` ← `(anonymous)` ← `(anonymous)` ← `(anonymous)` ← `__json_string_utilities_MOD_string_to_integer` (`./json_string_utilities.F90:116`) ← `__json_value_module_MOD_string_to_int` (`./json_value_module.F90:8081`) ← `__json_value_module_MOD_parse_number` (11220) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889)                                                                                                                                     |

# Retained heap profile

Retained 894 KiB over 14,825 objects (61.8 B per object).

| Category |     % |    Size | Objects |
| -------- | ----: | ------: | ------: |
| Ours     | 85.5% | 765 KiB |  14,818 |
| Unknown  | 14.5% | 130 KiB |       6 |
| Native   | <0.1% |    18 B |       1 |

Paths starting with `./` or `../` are relative to `/src/json-fortran/src/`.

## Hottest functions

### Self size

Functions with the most bytes retained within the function body, excluding callees.

|     % |     Size | Objects | Function                                          | Location                             |
| ----: | -------: | ------: | ------------------------------------------------- | ------------------------------------ |
| 68.3% |  611 KiB |   5,584 | `__json_value_module_MOD_json_value_create`       | `./json_value_module.F90:2211`       |
| 14.5% |  130 KiB |       6 | `(anonymous)`                                     | `<unknown>`                          |
|  8.7% | 77.5 KiB |   1,865 | `__json_value_module_MOD_parse_value`             | `./json_value_module.F90:10124`      |
|  7.2% | 64.8 KiB |   5,342 | `__json_value_module_MOD_parse_object`            | `./json_value_module.F90:10889`      |
|  0.8% |  6.8 KiB |     871 | `__json_value_module_MOD_to_integer`              | `./json_value_module.F90:10697`      |
|  0.5% | 4.29 KiB |   1,098 | `__json_value_module_MOD_to_logical`              | `./json_value_module.F90:10666`      |
| <0.1% |    269 B |       2 | `__json_value_module_MOD_json_initialize`         | `./json_value_module.F90:1019`       |
| <0.1% |    256 B |       1 | `__json_value_module_MOD_parse_string`            | `./json_value_module.F90:11080`      |
| <0.1% |     52 B |      52 | `__json_value_module_MOD_to_string`               | `./json_value_module.F90:10762`      |
| <0.1% |     18 B |       1 | `strndup`                                         | `<unknown>`                          |
| <0.1% |     17 B |       1 | `__json_value_module_MOD_json_parse_file`         | `./json_value_module.F90:9721`       |
| <0.1% |      3 B |       1 | `__json_value_module_MOD_json_prepare_parser`     | `./json_value_module.F90:9678`       |
| <0.1% |      1 B |       1 | `__json_value_module_MOD_json_get_string_by_path` | `./json_get_scalar_by_path.inc:9189` |

#### Categories

Categories accounting for at least 1.0% of self size.

##### Ours

|     % |     Size | Objects | Function                                          | Location                             |
| ----: | -------: | ------: | ------------------------------------------------- | ------------------------------------ |
| 68.3% |  611 KiB |   5,584 | `__json_value_module_MOD_json_value_create`       | `./json_value_module.F90:2211`       |
|  8.7% | 77.5 KiB |   1,865 | `__json_value_module_MOD_parse_value`             | `./json_value_module.F90:10124`      |
|  7.2% | 64.8 KiB |   5,342 | `__json_value_module_MOD_parse_object`            | `./json_value_module.F90:10889`      |
|  0.8% |  6.8 KiB |     871 | `__json_value_module_MOD_to_integer`              | `./json_value_module.F90:10697`      |
|  0.5% | 4.29 KiB |   1,098 | `__json_value_module_MOD_to_logical`              | `./json_value_module.F90:10666`      |
| <0.1% |    269 B |       2 | `__json_value_module_MOD_json_initialize`         | `./json_value_module.F90:1019`       |
| <0.1% |    256 B |       1 | `__json_value_module_MOD_parse_string`            | `./json_value_module.F90:11080`      |
| <0.1% |     52 B |      52 | `__json_value_module_MOD_to_string`               | `./json_value_module.F90:10762`      |
| <0.1% |     17 B |       1 | `__json_value_module_MOD_json_parse_file`         | `./json_value_module.F90:9721`       |
| <0.1% |      3 B |       1 | `__json_value_module_MOD_json_prepare_parser`     | `./json_value_module.F90:9678`       |
| <0.1% |      1 B |       1 | `__json_value_module_MOD_json_get_string_by_path` | `./json_get_scalar_by_path.inc:9189` |

##### Unknown

|     % |    Size | Objects | Function      | Location    |
| ----: | ------: | ------: | ------------- | ----------- |
| 14.5% | 130 KiB |       6 | `(anonymous)` | `<unknown>` |

#### Lines

Lines with the largest contribution to each function's self size.

##### `__json_value_module_MOD_json_value_create` (`./json_value_module.F90:2211`)

|      % |    Size | Objects | Location                       |
| -----: | ------: | ------: | ------------------------------ |
| 100.0% | 611 KiB |   5,584 | `./json_value_module.F90:2218` |

##### `__json_value_module_MOD_parse_value` (`./json_value_module.F90:10124`)

|      % |     Size | Objects | Location                        |
| -----: | -------: | ------: | ------------------------------- |
| 100.0% | 77.5 KiB |   1,865 | `./json_value_module.F90:10192` |

##### `__json_value_module_MOD_parse_object` (`./json_value_module.F90:10889`)

|      % |     Size | Objects | Location                        |
| -----: | -------: | ------: | ------------------------------- |
| 100.0% | 64.8 KiB |   5,342 | `./json_value_module.F90:10937` |

##### `__json_value_module_MOD_to_integer` (`./json_value_module.F90:10697`)

|      % |    Size | Objects | Location                        |
| -----: | ------: | ------: | ------------------------------- |
| 100.0% | 6.8 KiB |     871 | `./json_value_module.F90:10710` |

##### `__json_value_module_MOD_to_logical` (`./json_value_module.F90:10666`)

|      % |     Size | Objects | Location                        |
| -----: | -------: | ------: | ------------------------------- |
| 100.0% | 4.29 KiB |   1,098 | `./json_value_module.F90:10679` |

##### `__json_value_module_MOD_json_initialize` (`./json_value_module.F90:1019`)

|     % |  Size | Objects | Location                       |
| ----: | ----: | ------: | ------------------------------ |
| 95.2% | 256 B |       1 | `./json_value_module.F90:1051` |
|  4.8% |  13 B |       1 | `./json_value_module.F90:1203` |

##### `__json_value_module_MOD_parse_string` (`./json_value_module.F90:11080`)

|      % |  Size | Objects | Location                        |
| -----: | ----: | ------: | ------------------------------- |
| 100.0% | 256 B |       1 | `./json_value_module.F90:11101` |

##### `__json_value_module_MOD_to_string` (`./json_value_module.F90:10762`)

|      % | Size | Objects | Location                        |
| -----: | ---: | ------: | ------------------------------- |
| 100.0% | 52 B |      52 | `./json_value_module.F90:10807` |

##### `__json_value_module_MOD_json_parse_file` (`./json_value_module.F90:9721`)

|      % | Size | Objects | Location                       |
| -----: | ---: | ------: | ------------------------------ |
| 100.0% | 17 B |       1 | `./json_value_module.F90:9793` |

##### `__json_value_module_MOD_json_prepare_parser` (`./json_value_module.F90:9678`)

|      % | Size | Objects | Location                       |
| -----: | ---: | ------: | ------------------------------ |
| 100.0% |  3 B |       1 | `./json_value_module.F90:9687` |

##### `__json_value_module_MOD_json_get_string_by_path` (`./json_get_scalar_by_path.inc:9189`)

|      % | Size | Objects | Location                          |
| -----: | ---: | ------: | --------------------------------- |
| 100.0% |  1 B |       1 | `./json_get_scalar_by_path.inc:6` |

#### Callers

Callers with the largest contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `__json_value_module_MOD_json_value_create` (`./json_value_module.F90:2211`)

|     % |     Size | Objects | Caller                                    | Location                        |
| ----: | -------: | ------: | ----------------------------------------- | ------------------------------- |
| 95.7% |  584 KiB |   5,343 | `__json_value_module_MOD_parse_object`    | `./json_value_module.F90:10889` |
|  4.3% | 26.3 KiB |     240 | `__json_value_module_MOD_parse_array`     | `./json_value_module.F90:11003` |
| <0.1% |    112 B |       1 | `__json_value_module_MOD_json_parse_file` | `./json_value_module.F90:9721`  |

##### `(anonymous)` (`<unknown>`)

|      % |    Size | Objects | Caller                  | Location    |
| -----: | ------: | ------: | ----------------------- | ----------- |
| 100.0% | 130 KiB |       5 | `(anonymous)`           | `<unknown>` |
|  <0.1% |    17 B |       1 | `_gfortran_string_trim` | `<unknown>` |

##### `__json_value_module_MOD_parse_value` (`./json_value_module.F90:10124`)

|      % |     Size | Objects | Caller                                 | Location                        |
| -----: | -------: | ------: | -------------------------------------- | ------------------------------- |
| 100.0% | 77.5 KiB |   1,865 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90:10889` |

##### `__json_value_module_MOD_parse_object` (`./json_value_module.F90:10889`)

|     % |   Size | Objects | Caller                                    | Location                        |
| ----: | -----: | ------: | ----------------------------------------- | ------------------------------- |
| 98.7% | 64 KiB |   5,235 | `__json_value_module_MOD_parse_object`    | `./json_value_module.F90:10889` |
|  1.2% |  824 B |     106 | `__json_value_module_MOD_parse_array`     | `./json_value_module.F90:11003` |
| <0.1% |    8 B |       1 | `__json_value_module_MOD_json_parse_file` | `./json_value_module.F90:9721`  |

##### `__json_value_module_MOD_to_integer` (`./json_value_module.F90:10697`)

|      % |    Size | Objects | Caller                                 | Location                        |
| -----: | ------: | ------: | -------------------------------------- | ------------------------------- |
| 100.0% | 6.8 KiB |     871 | `__json_value_module_MOD_parse_number` | `./json_value_module.F90:11220` |

##### `__json_value_module_MOD_to_logical` (`./json_value_module.F90:10666`)

|      % |     Size | Objects | Caller                                 | Location                        |
| -----: | -------: | ------: | -------------------------------------- | ------------------------------- |
| 100.0% | 4.29 KiB |   1,098 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90:10889` |

##### `__json_value_module_MOD_json_initialize` (`./json_value_module.F90:1019`)

|      % |  Size | Objects | Caller                                                | Location                     |
| -----: | ----: | ------: | ----------------------------------------------------- | ---------------------------- |
| 100.0% | 269 B |       2 | `__json_file_module_MOD_initialize_json_core_in_file` | `./json_file_module.F90:504` |

##### `__json_value_module_MOD_parse_string` (`./json_value_module.F90:11080`)

|      % |  Size | Objects | Caller                                 | Location                        |
| -----: | ----: | ------: | -------------------------------------- | ------------------------------- |
| 100.0% | 256 B |       1 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90:10889` |

##### `__json_value_module_MOD_to_string` (`./json_value_module.F90:10762`)

|      % | Size | Objects | Caller                                | Location                        |
| -----: | ---: | ------: | ------------------------------------- | ------------------------------- |
| 100.0% | 52 B |      52 | `__json_value_module_MOD_parse_value` | `./json_value_module.F90:10124` |

##### `strndup` (`<unknown>`)

|      % | Size | Objects | Caller        | Location    |
| -----: | ---: | ------: | ------------- | ----------- |
| 100.0% | 18 B |       1 | `(anonymous)` | `<unknown>` |

##### `__json_value_module_MOD_json_parse_file` (`./json_value_module.F90:9721`)

|      % | Size | Objects | Caller                                  | Location                     |
| -----: | ---: | ------: | --------------------------------------- | ---------------------------- |
| 100.0% | 17 B |       1 | `__json_file_module_MOD_json_file_load` | `./json_file_module.F90:854` |

##### `__json_value_module_MOD_json_prepare_parser` (`./json_value_module.F90:9678`)

|      % | Size | Objects | Caller                                    | Location                       |
| -----: | ---: | ------: | ----------------------------------------- | ------------------------------ |
| 100.0% |  3 B |       1 | `__json_value_module_MOD_json_parse_file` | `./json_value_module.F90:9721` |

##### `__json_value_module_MOD_json_get_string_by_path` (`./json_get_scalar_by_path.inc:9189`)

|      % | Size | Objects | Caller                                        | Location                      |
| -----: | ---: | ------: | --------------------------------------------- | ----------------------------- |
| 100.0% |  1 B |       1 | `__json_file_module_MOD_json_file_get_string` | `./json_file_module.F90:1863` |

### Total size

Functions with the most bytes retained within the function and its callees.

|     % |     Size | Objects | Function                                              | Location                          |
| ----: | -------: | ------: | ----------------------------------------------------- | --------------------------------- |
| 85.5% |  765 KiB |  14,813 | `__json_value_module_MOD_parse_object`                | `./json_value_module.F90:10889`   |
| 68.3% |  611 KiB |   5,584 | `__json_value_module_MOD_json_value_create`           | `./json_value_module.F90:2211`    |
| 51.6% |  462 KiB |   6,153 | `__json_value_module_MOD_json_parse_file`             | `./json_value_module.F90:9721`    |
| 50.0% |  447 KiB |   5,853 | `__json_file_module_MOD_json_file_load`               | `./json_file_module.F90:854`      |
| 48.5% |  433 KiB |   5,580 | `MAIN__`                                              | `/out/profile.f90:5`              |
| 46.6% |  417 KiB |   5,258 | `main`                                                | `/out/profile.f90:6`              |
| 45.6% |  408 KiB |   7,612 | `__json_value_module_MOD_parse_array`                 | `./json_value_module.F90:11003`   |
| 45.0% |  402 KiB |   4,979 | `(anonymous)`                                         | `<unknown>`                       |
| 42.8% |  382 KiB |   4,623 | `__libc_start_main`                                   | `<unknown>`                       |
| 39.1% |  350 KiB |   4,220 | `_start`                                              | `<unknown>`                       |
| 14.3% |  128 KiB |       3 | `_gfortran_st_open`                                   | `<unknown>`                       |
|  8.7% | 77.5 KiB |   1,917 | `__json_value_module_MOD_parse_value`                 | `./json_value_module.F90:10124`   |
|  0.8% | 7.55 KiB |     872 | `__json_value_module_MOD_parse_number`                | `./json_value_module.F90:11220`   |
|  0.8% |  6.8 KiB |     871 | `__json_value_module_MOD_to_integer`                  | `./json_value_module.F90:10697`   |
|  0.5% | 4.29 KiB |   1,098 | `__json_value_module_MOD_to_logical`                  | `./json_value_module.F90:10666`   |
|  0.1% |    760 B |       1 | `__json_string_utilities_MOD_string_to_integer`       | `./json_string_utilities.F90:116` |
|  0.1% |    760 B |       1 | `__json_value_module_MOD_string_to_int`               | `./json_value_module.F90:8081`    |
| <0.1% |    269 B |       2 | `__json_value_module_MOD_json_initialize`             | `./json_value_module.F90:1019`    |
| <0.1% |    269 B |       2 | `__json_file_module_MOD_initialize_json_core_in_file` | `./json_file_module.F90:504`      |
| <0.1% |    256 B |       1 | `__json_value_module_MOD_parse_string`                | `./json_value_module.F90:11080`   |

#### Categories

Categories accounting for at least 1.0% of self size.

##### Ours

|     % |     Size | Objects | Function                                              | Location                             |
| ----: | -------: | ------: | ----------------------------------------------------- | ------------------------------------ |
| 85.5% |  765 KiB |  14,813 | `__json_value_module_MOD_parse_object`                | `./json_value_module.F90:10889`      |
| 68.3% |  611 KiB |   5,584 | `__json_value_module_MOD_json_value_create`           | `./json_value_module.F90:2211`       |
| 51.6% |  462 KiB |   6,153 | `__json_value_module_MOD_json_parse_file`             | `./json_value_module.F90:9721`       |
| 50.0% |  447 KiB |   5,853 | `__json_file_module_MOD_json_file_load`               | `./json_file_module.F90:854`         |
| 48.5% |  433 KiB |   5,580 | `MAIN__`                                              | `/out/profile.f90:5`                 |
| 46.6% |  417 KiB |   5,258 | `main`                                                | `/out/profile.f90:6`                 |
| 45.6% |  408 KiB |   7,612 | `__json_value_module_MOD_parse_array`                 | `./json_value_module.F90:11003`      |
|  8.7% | 77.5 KiB |   1,917 | `__json_value_module_MOD_parse_value`                 | `./json_value_module.F90:10124`      |
|  0.8% | 7.55 KiB |     872 | `__json_value_module_MOD_parse_number`                | `./json_value_module.F90:11220`      |
|  0.8% |  6.8 KiB |     871 | `__json_value_module_MOD_to_integer`                  | `./json_value_module.F90:10697`      |
|  0.5% | 4.29 KiB |   1,098 | `__json_value_module_MOD_to_logical`                  | `./json_value_module.F90:10666`      |
|  0.1% |    760 B |       1 | `__json_string_utilities_MOD_string_to_integer`       | `./json_string_utilities.F90:116`    |
|  0.1% |    760 B |       1 | `__json_value_module_MOD_string_to_int`               | `./json_value_module.F90:8081`       |
| <0.1% |    269 B |       2 | `__json_value_module_MOD_json_initialize`             | `./json_value_module.F90:1019`       |
| <0.1% |    269 B |       2 | `__json_file_module_MOD_initialize_json_core_in_file` | `./json_file_module.F90:504`         |
| <0.1% |    256 B |       1 | `__json_value_module_MOD_parse_string`                | `./json_value_module.F90:11080`      |
| <0.1% |     52 B |      52 | `__json_value_module_MOD_to_string`                   | `./json_value_module.F90:10762`      |
| <0.1% |      3 B |       1 | `__json_value_module_MOD_json_prepare_parser`         | `./json_value_module.F90:9678`       |
| <0.1% |      1 B |       1 | `__json_value_module_MOD_json_get_string_by_path`     | `./json_get_scalar_by_path.inc:9189` |
| <0.1% |      1 B |       1 | `__json_file_module_MOD_json_file_get_string`         | `./json_file_module.F90:1863`        |

##### Unknown

|     % |    Size | Objects | Function      | Location    |
| ----: | ------: | ------: | ------------- | ----------- |
| 45.0% | 402 KiB |   4,979 | `(anonymous)` | `<unknown>` |

#### Callers

Callers with the largest contribution to each function's total size. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `__json_value_module_MOD_parse_object` (`./json_value_module.F90:10889`)

|     % |    Size | Objects | Caller                                    | Location                        |
| ----: | ------: | ------: | ----------------------------------------- | ------------------------------- |
| 98.8% | 756 KiB |  14,694 | `__json_value_module_MOD_parse_object`    | `./json_value_module.F90:10889` |
| 52.5% | 402 KiB |   7,555 | `__json_value_module_MOD_parse_array`     | `./json_value_module.F90:11003` |
| 43.6% | 333 KiB |   6,147 | `__json_value_module_MOD_json_parse_file` | `./json_value_module.F90:9721`  |

##### `__json_value_module_MOD_json_value_create` (`./json_value_module.F90:2211`)

|     % |     Size | Objects | Caller                                    | Location                        |
| ----: | -------: | ------: | ----------------------------------------- | ------------------------------- |
| 95.7% |  584 KiB |   5,343 | `__json_value_module_MOD_parse_object`    | `./json_value_module.F90:10889` |
|  4.3% | 26.3 KiB |     240 | `__json_value_module_MOD_parse_array`     | `./json_value_module.F90:11003` |
| <0.1% |    112 B |       1 | `__json_value_module_MOD_json_parse_file` | `./json_value_module.F90:9721`  |

##### `__json_value_module_MOD_json_parse_file` (`./json_value_module.F90:9721`)

|     % |    Size | Objects | Caller                                  | Location                     |
| ----: | ------: | ------: | --------------------------------------- | ---------------------------- |
| 96.8% | 447 KiB |   5,853 | `__json_file_module_MOD_json_file_load` | `./json_file_module.F90:854` |

##### `__json_file_module_MOD_json_file_load` (`./json_file_module.F90:854`)

|     % |    Size | Objects | Caller   | Location             |
| ----: | ------: | ------: | -------- | -------------------- |
| 96.8% | 432 KiB |   5,574 | `MAIN__` | `/out/profile.f90:5` |

##### `MAIN__` (`/out/profile.f90:5`)

|     % |    Size | Objects | Caller | Location             |
| ----: | ------: | ------: | ------ | -------------------- |
| 96.2% | 417 KiB |   5,258 | `main` | `/out/profile.f90:6` |

##### `main` (`/out/profile.f90:6`)

|     % |    Size | Objects | Caller        | Location    |
| ----: | ------: | ------: | ------------- | ----------- |
| 96.5% | 402 KiB |   4,979 | `(anonymous)` | `<unknown>` |

##### `__json_value_module_MOD_parse_array` (`./json_value_module.F90:11003`)

|     % |    Size | Objects | Caller                                 | Location                        |
| ----: | ------: | ------: | -------------------------------------- | ------------------------------- |
| 98.0% | 400 KiB |   7,433 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90:10889` |

##### `(anonymous)` (`<unknown>`)

|     % |    Size | Objects | Caller                                          | Location                          |
| ----: | ------: | ------: | ----------------------------------------------- | --------------------------------- |
| 95.0% | 382 KiB |   4,623 | `__libc_start_main`                             | `<unknown>`                       |
| 32.2% | 130 KiB |       6 | `(anonymous)`                                   | `<unknown>`                       |
| 31.8% | 128 KiB |       3 | `_gfortran_st_open`                             | `<unknown>`                       |
|  0.2% |   776 B |       2 | `MAIN__`                                        | `/out/profile.f90:5`              |
|  0.2% |   760 B |       1 | `__json_string_utilities_MOD_string_to_integer` | `./json_string_utilities.F90:116` |

##### `__libc_start_main` (`<unknown>`)

|     % |    Size | Objects | Caller   | Location    |
| ----: | ------: | ------: | -------- | ----------- |
| 91.5% | 350 KiB |   4,220 | `_start` | `<unknown>` |

##### `_gfortran_st_open` (`<unknown>`)

|      % |    Size | Objects | Caller                                    | Location                       |
| -----: | ------: | ------: | ----------------------------------------- | ------------------------------ |
| 100.0% | 128 KiB |       3 | `__json_value_module_MOD_json_parse_file` | `./json_value_module.F90:9721` |

##### `__json_value_module_MOD_parse_value` (`./json_value_module.F90:10124`)

|      % |     Size | Objects | Caller                                 | Location                        |
| -----: | -------: | ------: | -------------------------------------- | ------------------------------- |
| 100.0% | 77.5 KiB |   1,917 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90:10889` |

##### `__json_value_module_MOD_parse_number` (`./json_value_module.F90:11220`)

|     % |     Size | Objects | Caller                                 | Location                        |
| ----: | -------: | ------: | -------------------------------------- | ------------------------------- |
| 86.1% |  6.5 KiB |     738 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90:10889` |
| 13.9% | 1.05 KiB |     134 | `__json_value_module_MOD_parse_array`  | `./json_value_module.F90:11003` |

##### `__json_value_module_MOD_to_integer` (`./json_value_module.F90:10697`)

|      % |    Size | Objects | Caller                                 | Location                        |
| -----: | ------: | ------: | -------------------------------------- | ------------------------------- |
| 100.0% | 6.8 KiB |     871 | `__json_value_module_MOD_parse_number` | `./json_value_module.F90:11220` |

##### `__json_value_module_MOD_to_logical` (`./json_value_module.F90:10666`)

|      % |     Size | Objects | Caller                                 | Location                        |
| -----: | -------: | ------: | -------------------------------------- | ------------------------------- |
| 100.0% | 4.29 KiB |   1,098 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90:10889` |

##### `__json_string_utilities_MOD_string_to_integer` (`./json_string_utilities.F90:116`)

|      % |  Size | Objects | Caller                                  | Location                       |
| -----: | ----: | ------: | --------------------------------------- | ------------------------------ |
| 100.0% | 760 B |       1 | `__json_value_module_MOD_string_to_int` | `./json_value_module.F90:8081` |

##### `__json_value_module_MOD_string_to_int` (`./json_value_module.F90:8081`)

|      % |  Size | Objects | Caller                                 | Location                        |
| -----: | ----: | ------: | -------------------------------------- | ------------------------------- |
| 100.0% | 760 B |       1 | `__json_value_module_MOD_parse_number` | `./json_value_module.F90:11220` |

##### `__json_value_module_MOD_json_initialize` (`./json_value_module.F90:1019`)

|      % |  Size | Objects | Caller                                                | Location                     |
| -----: | ----: | ------: | ----------------------------------------------------- | ---------------------------- |
| 100.0% | 269 B |       2 | `__json_file_module_MOD_initialize_json_core_in_file` | `./json_file_module.F90:504` |

##### `__json_file_module_MOD_initialize_json_core_in_file` (`./json_file_module.F90:504`)

|      % |  Size | Objects | Caller   | Location             |
| -----: | ----: | ------: | -------- | -------------------- |
| 100.0% | 269 B |       2 | `MAIN__` | `/out/profile.f90:5` |

##### `__json_value_module_MOD_parse_string` (`./json_value_module.F90:11080`)

|      % |  Size | Objects | Caller                                 | Location                        |
| -----: | ----: | ------: | -------------------------------------- | ------------------------------- |
| 100.0% | 256 B |       1 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90:10889` |

##### `__json_value_module_MOD_to_string` (`./json_value_module.F90:10762`)

|      % | Size | Objects | Caller                                | Location                        |
| -----: | ---: | ------: | ------------------------------------- | ------------------------------- |
| 100.0% | 52 B |      52 | `__json_value_module_MOD_parse_value` | `./json_value_module.F90:10124` |

##### `__json_value_module_MOD_json_prepare_parser` (`./json_value_module.F90:9678`)

|      % | Size | Objects | Caller                                    | Location                       |
| -----: | ---: | ------: | ----------------------------------------- | ------------------------------ |
| 100.0% |  3 B |       1 | `__json_value_module_MOD_json_parse_file` | `./json_value_module.F90:9721` |

##### `__json_value_module_MOD_json_get_string_by_path` (`./json_get_scalar_by_path.inc:9189`)

|      % | Size | Objects | Caller                                        | Location                      |
| -----: | ---: | ------: | --------------------------------------------- | ----------------------------- |
| 100.0% |  1 B |       1 | `__json_file_module_MOD_json_file_get_string` | `./json_file_module.F90:1863` |

##### `__json_file_module_MOD_json_file_get_string` (`./json_file_module.F90:1863`)

|      % | Size | Objects | Caller   | Location             |
| -----: | ---: | ------: | -------- | -------------------- |
| 100.0% |  1 B |       1 | `MAIN__` | `/out/profile.f90:5` |

#### Callees

Callees with the largest contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `__json_value_module_MOD_parse_object` (`./json_value_module.F90:10889`)

|     % |     Size | Objects | Callee                                      | Location                        |
| ----: | -------: | ------: | ------------------------------------------- | ------------------------------- |
| 98.8% |  756 KiB |  14,694 | `__json_value_module_MOD_parse_object`      | `./json_value_module.F90:10889` |
| 76.4% |  584 KiB |   5,343 | `__json_value_module_MOD_json_value_create` | `./json_value_module.F90:2211`  |
| 52.3% |  400 KiB |   7,433 | `__json_value_module_MOD_parse_array`       | `./json_value_module.F90:11003` |
| 10.1% | 77.5 KiB |   1,917 | `__json_value_module_MOD_parse_value`       | `./json_value_module.F90:10124` |
|  0.8% |  6.5 KiB |     738 | `__json_value_module_MOD_parse_number`      | `./json_value_module.F90:11220` |

##### `__json_value_module_MOD_json_parse_file` (`./json_value_module.F90:9721`)

|     % |    Size | Objects | Callee                                        | Location                        |
| ----: | ------: | ------: | --------------------------------------------- | ------------------------------- |
| 72.2% | 333 KiB |   6,147 | `__json_value_module_MOD_parse_object`        | `./json_value_module.F90:10889` |
| 27.8% | 128 KiB |       3 | `_gfortran_st_open`                           | `<unknown>`                     |
| <0.1% |   112 B |       1 | `__json_value_module_MOD_json_value_create`   | `./json_value_module.F90:2211`  |
| <0.1% |     3 B |       1 | `__json_value_module_MOD_json_prepare_parser` | `./json_value_module.F90:9678`  |

##### `__json_file_module_MOD_json_file_load` (`./json_file_module.F90:854`)

|      % |    Size | Objects | Callee                                    | Location                       |
| -----: | ------: | ------: | ----------------------------------------- | ------------------------------ |
| 100.0% | 447 KiB |   5,853 | `__json_value_module_MOD_json_parse_file` | `./json_value_module.F90:9721` |

##### `MAIN__` (`/out/profile.f90:5`)

|     % |    Size | Objects | Callee                                                | Location                      |
| ----: | ------: | ------: | ----------------------------------------------------- | ----------------------------- |
| 99.8% | 432 KiB |   5,574 | `__json_file_module_MOD_json_file_load`               | `./json_file_module.F90:854`  |
|  0.2% |   776 B |       2 | `(anonymous)`                                         | `<unknown>`                   |
|  0.1% |   269 B |       2 | `__json_file_module_MOD_initialize_json_core_in_file` | `./json_file_module.F90:504`  |
| <0.1% |    17 B |       1 | `_gfortran_string_trim`                               | `<unknown>`                   |
| <0.1% |     1 B |       1 | `__json_file_module_MOD_json_file_get_string`         | `./json_file_module.F90:1863` |

##### `main` (`/out/profile.f90:6`)

|      % |    Size | Objects | Callee   | Location             |
| -----: | ------: | ------: | -------- | -------------------- |
| 100.0% | 417 KiB |   5,258 | `MAIN__` | `/out/profile.f90:5` |

##### `__json_value_module_MOD_parse_array` (`./json_value_module.F90:11003`)

|     % |     Size | Objects | Callee                                      | Location                        |
| ----: | -------: | ------: | ------------------------------------------- | ------------------------------- |
| 98.5% |  402 KiB |   7,555 | `__json_value_module_MOD_parse_object`      | `./json_value_module.F90:10889` |
|  6.4% | 26.3 KiB |     240 | `__json_value_module_MOD_json_value_create` | `./json_value_module.F90:2211`  |
|  0.3% | 1.05 KiB |     134 | `__json_value_module_MOD_parse_number`      | `./json_value_module.F90:11220` |

##### `(anonymous)` (`<unknown>`)

|      % |    Size | Objects | Callee        | Location             |
| -----: | ------: | ------: | ------------- | -------------------- |
| 100.0% | 402 KiB |   4,979 | `main`        | `/out/profile.f90:6` |
|  32.2% | 130 KiB |       6 | `(anonymous)` | `<unknown>`          |
|  <0.1% |    18 B |       1 | `strndup`     | `<unknown>`          |

##### `__libc_start_main` (`<unknown>`)

|      % |    Size | Objects | Callee        | Location    |
| -----: | ------: | ------: | ------------- | ----------- |
| 100.0% | 382 KiB |   4,623 | `(anonymous)` | `<unknown>` |

##### `_start` (`<unknown>`)

|      % |    Size | Objects | Callee              | Location    |
| -----: | ------: | ------: | ------------------- | ----------- |
| 100.0% | 350 KiB |   4,220 | `__libc_start_main` | `<unknown>` |

##### `_gfortran_st_open` (`<unknown>`)

|      % |    Size | Objects | Callee        | Location    |
| -----: | ------: | ------: | ------------- | ----------- |
| 100.0% | 128 KiB |       3 | `(anonymous)` | `<unknown>` |

##### `__json_value_module_MOD_parse_value` (`./json_value_module.F90:10124`)

|    % | Size | Objects | Callee                              | Location                        |
| ---: | ---: | ------: | ----------------------------------- | ------------------------------- |
| 0.1% | 52 B |      52 | `__json_value_module_MOD_to_string` | `./json_value_module.F90:10762` |

##### `__json_value_module_MOD_parse_number` (`./json_value_module.F90:11220`)

|     % |    Size | Objects | Callee                                  | Location                        |
| ----: | ------: | ------: | --------------------------------------- | ------------------------------- |
| 90.2% | 6.8 KiB |     871 | `__json_value_module_MOD_to_integer`    | `./json_value_module.F90:10697` |
|  9.8% |   760 B |       1 | `__json_value_module_MOD_string_to_int` | `./json_value_module.F90:8081`  |

##### `__json_string_utilities_MOD_string_to_integer` (`./json_string_utilities.F90:116`)

|      % |  Size | Objects | Callee        | Location    |
| -----: | ----: | ------: | ------------- | ----------- |
| 100.0% | 760 B |       1 | `(anonymous)` | `<unknown>` |

##### `__json_value_module_MOD_string_to_int` (`./json_value_module.F90:8081`)

|      % |  Size | Objects | Callee                                          | Location                          |
| -----: | ----: | ------: | ----------------------------------------------- | --------------------------------- |
| 100.0% | 760 B |       1 | `__json_string_utilities_MOD_string_to_integer` | `./json_string_utilities.F90:116` |

##### `__json_file_module_MOD_initialize_json_core_in_file` (`./json_file_module.F90:504`)

|      % |  Size | Objects | Callee                                    | Location                       |
| -----: | ----: | ------: | ----------------------------------------- | ------------------------------ |
| 100.0% | 269 B |       2 | `__json_value_module_MOD_json_initialize` | `./json_value_module.F90:1019` |

##### `__json_file_module_MOD_json_file_get_string` (`./json_file_module.F90:1863`)

|      % | Size | Objects | Callee                                            | Location                             |
| -----: | ---: | ------: | ------------------------------------------------- | ------------------------------------ |
| 100.0% |  1 B |       1 | `__json_value_module_MOD_json_get_string_by_path` | `./json_get_scalar_by_path.inc:9189` |

## Hottest call stacks

Call stacks with the most bytes retained in their leaf frame.

|     % |     Size | Objects | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ----: | -------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 31.5% |  282 KiB |   2,577 | `__json_value_module_MOD_json_value_create` (`./json_value_module.F90:2211`) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) |
| 14.3% |  128 KiB |       2 | `(anonymous)` ← `(anonymous)` ← `(anonymous)` ← `_gfortran_st_open` ← `__json_value_module_MOD_json_parse_file` (`./json_value_module.F90:9721`) ← `__json_file_module_MOD_json_file_load` (`./json_file_module.F90:854`) ← `MAIN__` (`/out/profile.f90:5`) ← `main` (6) ← `(anonymous)` ← `__libc_start_main` ← `_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  4.2% | 37.6 KiB |   2,507 | `__json_value_module_MOD_parse_object` (`./json_value_module.F90:10889`) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889)     |
|  3.5% | 31.6 KiB |     937 | `__json_value_module_MOD_parse_value` (`./json_value_module.F90:10124`) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889)      |
|  2.3% | 20.6 KiB |     188 | `__json_value_module_MOD_json_value_create` (`./json_value_module.F90:2211`) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_array` (11003) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_json_parse_file` (9721) ← `__json_file_module_MOD_json_file_load` (`./json_file_module.F90:854`) ← `MAIN__` (`/out/profile.f90:5`) ← `main` (6) ← `(anonymous)` ← `__libc_start_main`                                                                                       |
|  2.3% | 20.1 KiB |     184 | `__json_value_module_MOD_json_value_create` (`./json_value_module.F90:2211`) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_array` (11003) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_json_parse_file` (9721) ← `__json_file_module_MOD_json_file_load` (`./json_file_module.F90:854`) ← `MAIN__` (`/out/profile.f90:5`) ← `main` (6) ← `(anonymous)` ← `__libc_start_main` ← `_start`                                                                                                                             |
|  1.8% |   16 KiB |     146 | `__json_value_module_MOD_json_value_create` (`./json_value_module.F90:2211`) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_array` (11003) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_json_parse_file` (9721) ← `__json_file_module_MOD_json_file_load` (`./json_file_module.F90:854`) ← `MAIN__` (`/out/profile.f90:5`) ← `main` (6) ← `(anonymous)` ← `__libc_start_main` ← `_start`                                                                                                                                                                              |
|  1.7% | 15.3 KiB |     140 | `__json_value_module_MOD_json_value_create` (`./json_value_module.F90:2211`) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_array` (11003) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_json_parse_file` (9721) ← `__json_file_module_MOD_json_file_load` (`./json_file_module.F90:854`) ← `MAIN__` (`/out/profile.f90:5`) ← `main` (6) ← `(anonymous)`                                                            |
|  1.7% |   15 KiB |     137 | `__json_value_module_MOD_json_value_create` (`./json_value_module.F90:2211`) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_array` (11003) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_json_parse_file` (9721) ← `__json_file_module_MOD_json_file_load` (`./json_file_module.F90:854`) ← `MAIN__` (`/out/profile.f90:5`) ← `main` (6) ← `(anonymous)` ← `__libc_start_main` ← `_start`                                                                                                                                                                                                                               |
|  1.3% | 11.7 KiB |     107 | `__json_value_module_MOD_json_value_create` (`./json_value_module.F90:2211`) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_array` (11003) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_json_parse_file` (9721) ← `__json_file_module_MOD_json_file_load` (`./json_file_module.F90:854`) ← `MAIN__` (`/out/profile.f90:5`) ← `main` (6) ← `(anonymous)` ← `__libc_start_main` ← `_start`                                                                                                                                                                                                                                                                                |
|  1.3% | 11.3 KiB |     103 | `__json_value_module_MOD_json_value_create` (`./json_value_module.F90:2211`) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_array` (11003) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_json_parse_file` (9721) ← `__json_file_module_MOD_json_file_load` (`./json_file_module.F90:854`) ← `MAIN__` (`/out/profile.f90:5`) ← `main` (6)                           |
|  1.2% | 11.1 KiB |      39 | `__json_value_module_MOD_parse_value` (`./json_value_module.F90:10124`) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_array` (11003) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_json_parse_file` (9721) ← `__json_file_module_MOD_json_file_load` (`./json_file_module.F90:854`) ← `MAIN__` (`/out/profile.f90:5`) ← `main` (6) ← `(anonymous)` ← `__libc_start_main` ← `_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  1.2% | 10.5 KiB |      39 | `__json_value_module_MOD_parse_value` (`./json_value_module.F90:10124`) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_array` (11003) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_json_parse_file` (9721) ← `__json_file_module_MOD_json_file_load` (`./json_file_module.F90:854`) ← `MAIN__` (`/out/profile.f90:5`) ← `main` (6) ← `(anonymous)` ← `__libc_start_main`                                                                                            |
|  1.0% | 8.53 KiB |      78 | `__json_value_module_MOD_json_value_create` (`./json_value_module.F90:2211`) ← `__json_value_module_MOD_parse_array` (11003) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_array` (11003) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889)   |
|  1.0% | 8.53 KiB |      78 | `__json_value_module_MOD_json_value_create` (`./json_value_module.F90:2211`) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_array` (11003) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_json_parse_file` (9721) ← `__json_file_module_MOD_json_file_load` (`./json_file_module.F90:854`) ← `MAIN__` (`/out/profile.f90:5`) ← `main` (6) ← `(anonymous)` ← `__libc_start_main` ← `_start`                                                                                                                                                                                                                                                                                                                                 |
|  1.0% | 8.53 KiB |      78 | `__json_value_module_MOD_json_value_create` (`./json_value_module.F90:2211`) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_array` (11003) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_json_parse_file` (9721) ← `__json_file_module_MOD_json_file_load` (`./json_file_module.F90:854`) ← `MAIN__` (`/out/profile.f90:5`) ← `main` (6) ← `(anonymous)` ← `__libc_start_main` ← `_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  1.0% | 8.53 KiB |      78 | `__json_value_module_MOD_json_value_create` (`./json_value_module.F90:2211`) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_array` (11003) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_json_parse_file` (9721) ← `__json_file_module_MOD_json_file_load` (`./json_file_module.F90:854`) ← `MAIN__` (`/out/profile.f90:5`) ← `main` (6) ← `(anonymous)` ← `__libc_start_main` ← `_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  1.0% | 8.53 KiB |      78 | `__json_value_module_MOD_json_value_create` (`./json_value_module.F90:2211`) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_array` (11003) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_json_parse_file` (9721) ← `__json_file_module_MOD_json_file_load` (`./json_file_module.F90:854`) ← `MAIN__` (`/out/profile.f90:5`) ← `main` (6) ← `(anonymous)` ← `__libc_start_main` ← `_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  1.0% | 8.53 KiB |      78 | `__json_value_module_MOD_json_value_create` (`./json_value_module.F90:2211`) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_array` (11003) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_json_parse_file` (9721) ← `__json_file_module_MOD_json_file_load` (`./json_file_module.F90:854`) ← `MAIN__` (`/out/profile.f90:5`) ← `main` (6) ← `(anonymous)` ← `__libc_start_main` ← `_start`                                                                                                                                                                                                                                                                                                                                                                                  |
|  1.0% | 8.53 KiB |      78 | `__json_value_module_MOD_json_value_create` (`./json_value_module.F90:2211`) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_array` (11003) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_json_parse_file` (9721) ← `__json_file_module_MOD_json_file_load` (`./json_file_module.F90:854`) ← `MAIN__` (`/out/profile.f90:5`) ← `main` (6) ← `(anonymous)` ← `__libc_start_main` ← `_start`                                                                                                                                                                                                                                                                                                                                                                                                                                   |
