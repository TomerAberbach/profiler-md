# Allocated heap profile

Allocated 41.2 MiB over 434,604 objects (99.4 B per object).

| Category |      % |     Size | Objects |
| -------- | -----: | -------: | ------: |
| Ours     | 100.0% | 41.2 MiB | 434,604 |

## Hottest functions

### Self size

Functions ranked by bytes allocated directly in the function body, excluding callees.

#### Categories

##### Ours

|     % |     Size | Objects | Function                                          | Location                                           |
| ----: | -------: | ------: | ------------------------------------------------- | -------------------------------------------------- |
| 39.1% | 16.1 MiB |  28,007 | `__json_string_utilities_MOD_string_to_integer`   | `src/json-fortran/src/json_string_utilities.F90`   |
| 34.6% | 14.3 MiB | 133,471 | `__json_value_module_MOD_json_value_create`       | `src/json-fortran/src/json_value_module.F90`       |
| 11.5% | 4.73 MiB |  52,270 | `__json_value_module_MOD_parse_string`            | `src/json-fortran/src/json_value_module.F90`       |
|  4.3% | 1.76 MiB |  41,310 | `__json_value_module_MOD_parse_value`             | `src/json-fortran/src/json_value_module.F90`       |
|  3.5% | 1.45 MiB | 122,682 | `__json_value_module_MOD_parse_object`            | `src/json-fortran/src/json_value_module.F90`       |
|  3.0% | 1.25 MiB |      34 | `__json_value_module_MOD_json_parse_file`         | `src/json-fortran/src/json_value_module.F90`       |
|  1.6% |  695 KiB |   2,780 | `__json_value_module_MOD_parse_number`            | `src/json-fortran/src/json_value_module.F90`       |
|  1.0% |  412 KiB |     280 | `MAIN__`                                          | `out/profile.f90`                                  |
|  0.7% |  299 KiB |   2,037 | `__json_string_utilities_MOD_unescape_string`     | `src/json-fortran/src/json_string_utilities.F90`   |
|  0.4% |  149 KiB |  19,124 | `__json_value_module_MOD_to_integer`              | `src/json-fortran/src/json_value_module.F90`       |
|  0.2% |  102 KiB |  26,216 | `__json_value_module_MOD_to_logical`              | `src/json-fortran/src/json_value_module.F90`       |
| <0.1% | 6.21 KiB |   6,354 | `__json_value_module_MOD_to_string`               | `src/json-fortran/src/json_value_module.F90`       |
| <0.1% | 6.18 KiB |      11 | `__json_value_module_MOD_json_initialize`         | `src/json-fortran/src/json_value_module.F90`       |
| <0.1% |    128 B |       1 | `__json_string_utilities_MOD_string_to_real`      | `src/json-fortran/src/json_string_utilities.F90`   |
| <0.1% |     18 B |      18 | `__json_value_module_MOD_json_get_string_by_path` | `src/json-fortran/src/json_get_scalar_by_path.inc` |
| <0.1% |      8 B |       8 | `__json_value_module_MOD_pop_char.part.0`         | `src/json-fortran/src/json_value_module.F90`       |
| <0.1% |      3 B |       1 | `__json_value_module_MOD_json_prepare_parser`     | `src/json-fortran/src/json_value_module.F90`       |

#### Lines

Lines ranked by contribution to each function's self size.

##### `__json_string_utilities_MOD_string_to_integer` (`src/json-fortran/src/json_string_utilities.F90`)

|     % |     Size | Objects | Location                                             |
| ----: | -------: | ------: | ---------------------------------------------------- |
| 51.6% | 8.32 MiB |  16,137 | `src/json-fortran/src/json_string_utilities.F90:134` |
| 48.4% |  7.8 MiB |   9,903 | `src/json-fortran/src/json_string_utilities.F90:132` |
| <0.1% | 3.09 KiB |   1,967 | `src/json-fortran/src/json_string_utilities.F90:131` |

##### `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`)

|      % |     Size | Objects | Location                                          |
| -----: | -------: | ------: | ------------------------------------------------- |
| 100.0% | 14.3 MiB | 133,471 | `src/json-fortran/src/json_value_module.F90:2211` |

##### `__json_value_module_MOD_parse_string` (`src/json-fortran/src/json_value_module.F90`)

|     % |     Size | Objects | Location                                           |
| ----: | -------: | ------: | -------------------------------------------------- |
| 90.2% | 4.26 MiB |  17,457 | `src/json-fortran/src/json_value_module.F90:11073` |
|  9.8% |  475 KiB |  34,813 | `src/json-fortran/src/json_value_module.F90:11122` |

##### `__json_value_module_MOD_parse_value` (`src/json-fortran/src/json_value_module.F90`)

|      % |     Size | Objects | Location                                           |
| -----: | -------: | ------: | -------------------------------------------------- |
| 100.0% | 1.76 MiB |  41,310 | `src/json-fortran/src/json_value_module.F90:10185` |

##### `__json_value_module_MOD_parse_object` (`src/json-fortran/src/json_value_module.F90`)

|      % |     Size | Objects | Location                                           |
| -----: | -------: | ------: | -------------------------------------------------- |
| 100.0% | 1.45 MiB | 122,682 | `src/json-fortran/src/json_value_module.F90:10922` |

##### `__json_value_module_MOD_json_parse_file` (`src/json-fortran/src/json_value_module.F90`)

|      % |     Size | Objects | Location                                          |
| -----: | -------: | ------: | ------------------------------------------------- |
| 100.0% | 1.25 MiB |      29 | `src/json-fortran/src/json_value_module.F90:9770` |
|  <0.1% |     85 B |       5 | `src/json-fortran/src/json_value_module.F90:9786` |

##### `__json_value_module_MOD_parse_number` (`src/json-fortran/src/json_value_module.F90`)

|      % |    Size | Objects | Location                                           |
| -----: | ------: | ------: | -------------------------------------------------- |
| 100.0% | 695 KiB |   2,780 | `src/json-fortran/src/json_value_module.F90:11216` |

##### `MAIN__` (`out/profile.f90`)

|     % |     Size | Objects | Location             |
| ----: | -------: | ------: | -------------------- |
| 99.5% |  410 KiB |     109 | `out/profile.f90:31` |
|  0.5% | 2.06 KiB |     162 | `out/profile.f90:32` |
| <0.1% |    136 B |       8 | `out/profile.f90:23` |
| <0.1% |     16 B |       1 | `out/profile.f90:18` |

##### `__json_string_utilities_MOD_unescape_string` (`src/json-fortran/src/json_string_utilities.F90`)

|     % |     Size | Objects | Location                                             |
| ----: | -------: | ------: | ---------------------------------------------------- |
| 74.2% |  222 KiB |   1,098 | `src/json-fortran/src/json_string_utilities.F90:506` |
| 25.8% | 77.1 KiB |     939 | `src/json-fortran/src/json_string_utilities.F90:611` |

##### `__json_value_module_MOD_to_integer` (`src/json-fortran/src/json_value_module.F90`)

|      % |    Size | Objects | Location                                           |
| -----: | ------: | ------: | -------------------------------------------------- |
| 100.0% | 149 KiB |  19,124 | `src/json-fortran/src/json_value_module.F90:10703` |

##### `__json_value_module_MOD_to_logical` (`src/json-fortran/src/json_value_module.F90`)

|      % |    Size | Objects | Location                                           |
| -----: | ------: | ------: | -------------------------------------------------- |
| 100.0% | 102 KiB |  26,216 | `src/json-fortran/src/json_value_module.F90:10672` |

##### `__json_value_module_MOD_to_string` (`src/json-fortran/src/json_value_module.F90`)

|      % |     Size | Objects | Location                                           |
| -----: | -------: | ------: | -------------------------------------------------- |
| 100.0% | 6.21 KiB |   6,354 | `src/json-fortran/src/json_value_module.F90:10800` |

##### `__json_value_module_MOD_json_initialize` (`src/json-fortran/src/json_value_module.F90`)

|     % |     Size | Objects | Location                                          |
| ----: | -------: | ------: | ------------------------------------------------- |
| 65.9% | 4.08 KiB |       1 | `src/json-fortran/src/json_value_module.F90:1191` |
| 32.3% |    2 KiB |       8 | `src/json-fortran/src/json_value_module.F90:1048` |
|  1.5% |     96 B |       1 | `src/json-fortran/src/json_value_module.F90:1192` |
|  0.2% |     13 B |       1 | `src/json-fortran/src/json_value_module.F90:1196` |

##### `__json_string_utilities_MOD_string_to_real` (`src/json-fortran/src/json_string_utilities.F90`)

|      % |  Size | Objects | Location                                             |
| -----: | ----: | ------: | ---------------------------------------------------- |
| 100.0% | 128 B |       1 | `src/json-fortran/src/json_string_utilities.F90:236` |

##### `__json_value_module_MOD_json_get_string_by_path` (`src/json-fortran/src/json_get_scalar_by_path.inc`)

|      % | Size | Objects | Location                                             |
| -----: | ---: | ------: | ---------------------------------------------------- |
| 100.0% | 18 B |      18 | `src/json-fortran/src/json_get_scalar_by_path.inc:6` |

##### `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`)

|      % | Size | Objects | Location                                           |
| -----: | ---: | ------: | -------------------------------------------------- |
| 100.0% |  8 B |       8 | `src/json-fortran/src/json_value_module.F90:11383` |

##### `__json_value_module_MOD_json_prepare_parser` (`src/json-fortran/src/json_value_module.F90`)

|      % | Size | Objects | Location                                          |
| -----: | ---: | ------: | ------------------------------------------------- |
| 100.0% |  3 B |       1 | `src/json-fortran/src/json_value_module.F90:9680` |

#### Callers

Callers ranked by contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `__json_string_utilities_MOD_string_to_integer` (`src/json-fortran/src/json_string_utilities.F90`)

|     % |     Size | Objects | Caller                                             | Location                                     |
| ----: | -------: | ------: | -------------------------------------------------- | -------------------------------------------- |
| 97.5% | 15.7 MiB |  26,893 | `__json_value_module_MOD_string_to_int`            | `src/json-fortran/src/json_value_module.F90` |
|  2.5% |  416 KiB |   1,114 | `__json_value_module_MOD_json_get_by_path_default` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`)

|     % |     Size | Objects | Caller                                    | Location                                     |
| ----: | -------: | ------: | ----------------------------------------- | -------------------------------------------- |
| 92.3% | 13.2 MiB | 123,169 | `__json_value_module_MOD_parse_object`    | `src/json-fortran/src/json_value_module.F90` |
|  7.7% |  1.1 MiB |  10,299 | `__json_value_module_MOD_parse_array`     | `src/json-fortran/src/json_value_module.F90` |
| <0.1% |    336 B |       3 | `__json_value_module_MOD_json_parse_file` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_parse_string` (`src/json-fortran/src/json_value_module.F90`)

|     % |     Size | Objects | Caller                                 | Location                                     |
| ----: | -------: | ------: | -------------------------------------- | -------------------------------------------- |
| 70.6% | 3.34 MiB |  41,307 | `__json_value_module_MOD_parse_object` | `src/json-fortran/src/json_value_module.F90` |
| 29.4% | 1.39 MiB |  10,963 | `__json_value_module_MOD_parse_value`  | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_parse_value` (`src/json-fortran/src/json_value_module.F90`)

|      % |     Size | Objects | Caller                                 | Location                                     |
| -----: | -------: | ------: | -------------------------------------- | -------------------------------------------- |
| 100.0% | 1.76 MiB |  41,310 | `__json_value_module_MOD_parse_object` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_parse_object` (`src/json-fortran/src/json_value_module.F90`)

|     % |     Size | Objects | Caller                                    | Location                                     |
| ----: | -------: | ------: | ----------------------------------------- | -------------------------------------------- |
| 98.8% | 1.43 MiB | 120,349 | `__json_value_module_MOD_parse_object`    | `src/json-fortran/src/json_value_module.F90` |
|  1.2% | 18.1 KiB |   2,329 | `__json_value_module_MOD_parse_array`     | `src/json-fortran/src/json_value_module.F90` |
| <0.1% |     32 B |       4 | `__json_value_module_MOD_json_parse_file` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_json_parse_file` (`src/json-fortran/src/json_value_module.F90`)

|      % |     Size | Objects | Caller                                  | Location                                    |
| -----: | -------: | ------: | --------------------------------------- | ------------------------------------------- |
| 100.0% | 1.25 MiB |      34 | `__json_file_module_MOD_json_file_load` | `src/json-fortran/src/json_file_module.F90` |

##### `__json_value_module_MOD_parse_number` (`src/json-fortran/src/json_value_module.F90`)

|     % |    Size | Objects | Caller                                 | Location                                     |
| ----: | ------: | ------: | -------------------------------------- | -------------------------------------------- |
| 71.6% | 498 KiB |   1,990 | `__json_value_module_MOD_parse_array`  | `src/json-fortran/src/json_value_module.F90` |
| 28.4% | 198 KiB |     790 | `__json_value_module_MOD_parse_object` | `src/json-fortran/src/json_value_module.F90` |

##### `MAIN__` (`out/profile.f90`)

|      % |    Size | Objects | Caller | Location          |
| -----: | ------: | ------: | ------ | ----------------- |
| 100.0% | 412 KiB |     280 | `main` | `out/profile.f90` |

##### `__json_string_utilities_MOD_unescape_string` (`src/json-fortran/src/json_string_utilities.F90`)

|      % |    Size | Objects | Caller                                 | Location                                     |
| -----: | ------: | ------: | -------------------------------------- | -------------------------------------------- |
| 100.0% | 299 KiB |   2,037 | `__json_value_module_MOD_parse_string` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_to_integer` (`src/json-fortran/src/json_value_module.F90`)

|      % |    Size | Objects | Caller                                 | Location                                     |
| -----: | ------: | ------: | -------------------------------------- | -------------------------------------------- |
| 100.0% | 149 KiB |  19,124 | `__json_value_module_MOD_parse_number` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_to_logical` (`src/json-fortran/src/json_value_module.F90`)

|      % |    Size | Objects | Caller                                 | Location                                     |
| -----: | ------: | ------: | -------------------------------------- | -------------------------------------------- |
| 100.0% | 102 KiB |  26,216 | `__json_value_module_MOD_parse_object` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_to_string` (`src/json-fortran/src/json_value_module.F90`)

|      % |     Size | Objects | Caller                                | Location                                     |
| -----: | -------: | ------: | ------------------------------------- | -------------------------------------------- |
| 100.0% | 6.21 KiB |   6,354 | `__json_value_module_MOD_parse_value` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_json_initialize` (`src/json-fortran/src/json_value_module.F90`)

|      % |     Size | Objects | Caller                                                | Location                                    |
| -----: | -------: | ------: | ----------------------------------------------------- | ------------------------------------------- |
| 100.0% | 6.18 KiB |      11 | `__json_file_module_MOD_initialize_json_core_in_file` | `src/json-fortran/src/json_file_module.F90` |

##### `__json_string_utilities_MOD_string_to_real` (`src/json-fortran/src/json_string_utilities.F90`)

|      % |  Size | Objects | Caller                                   | Location                                     |
| -----: | ----: | ------: | ---------------------------------------- | -------------------------------------------- |
| 100.0% | 128 B |       1 | `__json_value_module_MOD_string_to_dble` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_json_get_string_by_path` (`src/json-fortran/src/json_get_scalar_by_path.inc`)

|      % | Size | Objects | Caller                                        | Location                                    |
| -----: | ---: | ------: | --------------------------------------------- | ------------------------------------------- |
| 100.0% | 18 B |      18 | `__json_file_module_MOD_json_file_get_string` | `src/json-fortran/src/json_file_module.F90` |

##### `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`)

|      % | Size | Objects | Caller                                   | Location                                     |
| -----: | ---: | ------: | ---------------------------------------- | -------------------------------------------- |
| 100.0% |  8 B |       8 | `__json_value_module_MOD_json_parse_end` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_json_prepare_parser` (`src/json-fortran/src/json_value_module.F90`)

|      % | Size | Objects | Caller                                    | Location                                     |
| -----: | ---: | ------: | ----------------------------------------- | -------------------------------------------- |
| 100.0% |  3 B |       1 | `__json_value_module_MOD_json_parse_file` | `src/json-fortran/src/json_value_module.F90` |

### Total size

Functions ranked by total bytes allocated in the function and all its callees.

|     % |     Size | Objects | Function                                           | Location                                           |
| ----: | -------: | ------: | -------------------------------------------------- | -------------------------------------------------- |
| 95.0% | 39.1 MiB | 433,143 | `__json_value_module_MOD_parse_object`             | `src/json-fortran/src/json_value_module.F90`       |
| 54.6% | 22.5 MiB | 231,808 | `__json_value_module_MOD_parse_array`              | `src/json-fortran/src/json_value_module.F90`       |
| 40.2% | 16.5 MiB |  48,798 | `__json_value_module_MOD_parse_number`             | `src/json-fortran/src/json_value_module.F90`       |
| 39.1% | 16.1 MiB |  28,063 | `__json_string_utilities_MOD_string_to_integer`    | `src/json-fortran/src/json_string_utilities.F90`   |
| 38.2% | 15.7 MiB |  26,893 | `__json_value_module_MOD_string_to_int`            | `src/json-fortran/src/json_value_module.F90`       |
| 34.6% | 14.3 MiB | 133,471 | `__json_value_module_MOD_json_value_create`        | `src/json-fortran/src/json_value_module.F90`       |
| 33.5% | 13.8 MiB | 168,318 | `MAIN__`                                           | `out/profile.f90`                                  |
| 33.3% | 13.7 MiB | 185,235 | `__json_value_module_MOD_json_parse_file`          | `src/json-fortran/src/json_value_module.F90`       |
| 32.4% | 13.4 MiB | 175,450 | `__json_file_module_MOD_json_file_load`            | `src/json-fortran/src/json_file_module.F90`        |
| 31.6% |   13 MiB | 156,448 | `main`                                             | `out/profile.f90`                                  |
| 24.0% | 9.88 MiB | 124,287 | `_start`                                           | `<unknown>`                                        |
| 12.7% | 5.24 MiB |  59,085 | `__json_value_module_MOD_parse_string`             | `src/json-fortran/src/json_value_module.F90`       |
|  8.8% | 3.63 MiB |  62,332 | `__json_value_module_MOD_parse_value`              | `src/json-fortran/src/json_value_module.F90`       |
|  1.0% |  416 KiB |   1,132 | `__json_value_module_MOD_json_get_string_by_path`  | `src/json-fortran/src/json_get_scalar_by_path.inc` |
|  1.0% |  416 KiB |   1,132 | `__json_file_module_MOD_json_file_get_string`      | `src/json-fortran/src/json_file_module.F90`        |
|  1.0% |  416 KiB |   1,114 | `__json_value_module_MOD_json_get_by_path_default` | `src/json-fortran/src/json_value_module.F90`       |
|  1.0% |  416 KiB |   1,114 | `__json_value_module_MOD_json_get_by_path`         | `src/json-fortran/src/json_value_module.F90`       |
|  0.7% |  299 KiB |   2,037 | `__json_string_utilities_MOD_unescape_string`      | `src/json-fortran/src/json_string_utilities.F90`   |
|  0.4% |  149 KiB |  19,124 | `__json_value_module_MOD_to_integer`               | `src/json-fortran/src/json_value_module.F90`       |
|  0.2% |  102 KiB |  26,216 | `__json_value_module_MOD_to_logical`               | `src/json-fortran/src/json_value_module.F90`       |

#### Categories

##### Ours

|     % |     Size | Objects | Function                                           | Location                                           |
| ----: | -------: | ------: | -------------------------------------------------- | -------------------------------------------------- |
| 95.0% | 39.1 MiB | 433,143 | `__json_value_module_MOD_parse_object`             | `src/json-fortran/src/json_value_module.F90`       |
| 54.6% | 22.5 MiB | 231,808 | `__json_value_module_MOD_parse_array`              | `src/json-fortran/src/json_value_module.F90`       |
| 40.2% | 16.5 MiB |  48,798 | `__json_value_module_MOD_parse_number`             | `src/json-fortran/src/json_value_module.F90`       |
| 39.1% | 16.1 MiB |  28,063 | `__json_string_utilities_MOD_string_to_integer`    | `src/json-fortran/src/json_string_utilities.F90`   |
| 38.2% | 15.7 MiB |  26,893 | `__json_value_module_MOD_string_to_int`            | `src/json-fortran/src/json_value_module.F90`       |
| 34.6% | 14.3 MiB | 133,471 | `__json_value_module_MOD_json_value_create`        | `src/json-fortran/src/json_value_module.F90`       |
| 33.5% | 13.8 MiB | 168,318 | `MAIN__`                                           | `out/profile.f90`                                  |
| 33.3% | 13.7 MiB | 185,235 | `__json_value_module_MOD_json_parse_file`          | `src/json-fortran/src/json_value_module.F90`       |
| 32.4% | 13.4 MiB | 175,450 | `__json_file_module_MOD_json_file_load`            | `src/json-fortran/src/json_file_module.F90`        |
| 31.6% |   13 MiB | 156,448 | `main`                                             | `out/profile.f90`                                  |
| 12.7% | 5.24 MiB |  59,085 | `__json_value_module_MOD_parse_string`             | `src/json-fortran/src/json_value_module.F90`       |
|  8.8% | 3.63 MiB |  62,332 | `__json_value_module_MOD_parse_value`              | `src/json-fortran/src/json_value_module.F90`       |
|  1.0% |  416 KiB |   1,132 | `__json_value_module_MOD_json_get_string_by_path`  | `src/json-fortran/src/json_get_scalar_by_path.inc` |
|  1.0% |  416 KiB |   1,132 | `__json_file_module_MOD_json_file_get_string`      | `src/json-fortran/src/json_file_module.F90`        |
|  1.0% |  416 KiB |   1,114 | `__json_value_module_MOD_json_get_by_path_default` | `src/json-fortran/src/json_value_module.F90`       |
|  1.0% |  416 KiB |   1,114 | `__json_value_module_MOD_json_get_by_path`         | `src/json-fortran/src/json_value_module.F90`       |
|  0.7% |  299 KiB |   2,037 | `__json_string_utilities_MOD_unescape_string`      | `src/json-fortran/src/json_string_utilities.F90`   |
|  0.4% |  149 KiB |  19,124 | `__json_value_module_MOD_to_integer`               | `src/json-fortran/src/json_value_module.F90`       |
|  0.2% |  102 KiB |  26,216 | `__json_value_module_MOD_to_logical`               | `src/json-fortran/src/json_value_module.F90`       |
| <0.1% | 6.21 KiB |   6,354 | `__json_value_module_MOD_to_string`                | `src/json-fortran/src/json_value_module.F90`       |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `__json_value_module_MOD_parse_object` (`src/json-fortran/src/json_value_module.F90`)

|     % |     Size | Objects | Callee                                      | Location                                     |
| ----: | -------: | ------: | ------------------------------------------- | -------------------------------------------- |
| 99.4% | 38.9 MiB | 430,081 | `__json_value_module_MOD_parse_object`      | `src/json-fortran/src/json_value_module.F90` |
| 57.0% | 22.3 MiB | 227,390 | `__json_value_module_MOD_parse_array`       | `src/json-fortran/src/json_value_module.F90` |
| 33.6% | 13.2 MiB | 123,169 | `__json_value_module_MOD_json_value_create` | `src/json-fortran/src/json_value_module.F90` |
| 32.0% | 12.5 MiB |  37,950 | `__json_value_module_MOD_parse_number`      | `src/json-fortran/src/json_value_module.F90` |
|  8.8% | 3.45 MiB |  60,664 | `__json_value_module_MOD_parse_value`       | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_parse_array` (`src/json-fortran/src/json_value_module.F90`)

|     % |     Size | Objects | Callee                                      | Location                                     |
| ----: | -------: | ------: | ------------------------------------------- | -------------------------------------------- |
| 98.2% | 22.1 MiB | 227,989 | `__json_value_module_MOD_parse_object`      | `src/json-fortran/src/json_value_module.F90` |
| 17.8% |    4 MiB |  10,848 | `__json_value_module_MOD_parse_number`      | `src/json-fortran/src/json_value_module.F90` |
|  4.9% |  1.1 MiB |  10,299 | `__json_value_module_MOD_json_value_create` | `src/json-fortran/src/json_value_module.F90` |
|  0.1% | 15.5 KiB |   2,075 | `_start`                                    | `<unknown>`                                  |

##### `__json_value_module_MOD_parse_number` (`src/json-fortran/src/json_value_module.F90`)

|     % |     Size | Objects | Callee                                   | Location                                     |
| ----: | -------: | ------: | ---------------------------------------- | -------------------------------------------- |
| 95.0% | 15.7 MiB |  26,893 | `__json_value_module_MOD_string_to_int`  | `src/json-fortran/src/json_value_module.F90` |
|  0.9% |  149 KiB |  19,124 | `__json_value_module_MOD_to_integer`     | `src/json-fortran/src/json_value_module.F90` |
| <0.1% |    128 B |       1 | `__json_value_module_MOD_string_to_dble` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_string_utilities_MOD_string_to_integer` (`src/json-fortran/src/json_string_utilities.F90`)

|     % |  Size | Objects | Callee   | Location    |
| ----: | ----: | ------: | -------- | ----------- |
| <0.1% | 448 B |      56 | `_start` | `<unknown>` |

##### `__json_value_module_MOD_string_to_int` (`src/json-fortran/src/json_value_module.F90`)

|      % |     Size | Objects | Callee                                          | Location                                         |
| -----: | -------: | ------: | ----------------------------------------------- | ------------------------------------------------ |
| 100.0% | 15.7 MiB |  26,893 | `__json_string_utilities_MOD_string_to_integer` | `src/json-fortran/src/json_string_utilities.F90` |

##### `MAIN__` (`out/profile.f90`)

|     % |     Size | Objects | Callee                                                | Location                                    |
| ----: | -------: | ------: | ----------------------------------------------------- | ------------------------------------------- |
| 94.1% |   13 MiB | 166,895 | `__json_file_module_MOD_json_file_load`               | `src/json-fortran/src/json_file_module.F90` |
|  2.9% |  416 KiB |   1,132 | `__json_file_module_MOD_json_file_get_string`         | `src/json-fortran/src/json_file_module.F90` |
|  0.1% | 8.34 KiB |      89 | `_start`                                              | `<unknown>`                                 |
| <0.1% | 6.18 KiB |      11 | `__json_file_module_MOD_initialize_json_core_in_file` | `src/json-fortran/src/json_file_module.F90` |

##### `__json_value_module_MOD_json_parse_file` (`src/json-fortran/src/json_value_module.F90`)

|     % |     Size | Objects | Callee                                        | Location                                     |
| ----: | -------: | ------: | --------------------------------------------- | -------------------------------------------- |
| 90.9% | 12.5 MiB | 185,189 | `__json_value_module_MOD_parse_object`        | `src/json-fortran/src/json_value_module.F90` |
|  2.2% |  315 KiB |   2,096 | `_start`                                      | `<unknown>`                                  |
| <0.1% |    336 B |       3 | `__json_value_module_MOD_json_value_create`   | `src/json-fortran/src/json_value_module.F90` |
| <0.1% |      8 B |       8 | `__json_value_module_MOD_json_parse_end`      | `src/json-fortran/src/json_value_module.F90` |
| <0.1% |      3 B |       1 | `__json_value_module_MOD_json_prepare_parser` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`)

|      % |     Size | Objects | Callee                                    | Location                                     |
| -----: | -------: | ------: | ----------------------------------------- | -------------------------------------------- |
| 100.0% | 13.4 MiB | 175,450 | `__json_value_module_MOD_json_parse_file` | `src/json-fortran/src/json_value_module.F90` |
|   1.4% |  189 KiB |   1,866 | `_start`                                  | `<unknown>`                                  |

##### `main` (`out/profile.f90`)

|      % |    Size | Objects | Callee   | Location          |
| -----: | ------: | ------: | -------- | ----------------- |
| 100.0% |  13 MiB | 156,448 | `MAIN__` | `out/profile.f90` |
|   1.5% | 203 KiB |   1,940 | `_start` | `<unknown>`       |

##### `_start` (`<unknown>`)

|      % |     Size | Objects | Callee   | Location          |
| -----: | -------: | ------: | -------- | ----------------- |
| 100.0% | 9.88 MiB | 124,287 | `main`   | `out/profile.f90` |
|  12.7% | 1.25 MiB |     173 | `_start` | `<unknown>`       |

##### `__json_value_module_MOD_parse_string` (`src/json-fortran/src/json_value_module.F90`)

|    % |    Size | Objects | Callee                                        | Location                                         |
| ---: | ------: | ------: | --------------------------------------------- | ------------------------------------------------ |
| 5.6% | 299 KiB |   2,037 | `__json_string_utilities_MOD_unescape_string` | `src/json-fortran/src/json_string_utilities.F90` |
| 4.3% | 229 KiB |   4,787 | `_start`                                      | `<unknown>`                                      |

##### `__json_value_module_MOD_parse_value` (`src/json-fortran/src/json_value_module.F90`)

|     % |     Size | Objects | Callee                                 | Location                                     |
| ----: | -------: | ------: | -------------------------------------- | -------------------------------------------- |
| 46.3% | 1.68 MiB |  13,000 | `__json_value_module_MOD_parse_string` | `src/json-fortran/src/json_value_module.F90` |
|  4.9% |  182 KiB |   1,668 | `_start`                               | `<unknown>`                                  |
|  0.2% | 6.21 KiB |   6,354 | `__json_value_module_MOD_to_string`    | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_json_get_string_by_path` (`src/json-fortran/src/json_get_scalar_by_path.inc`)

|      % |    Size | Objects | Callee                                     | Location                                     |
| -----: | ------: | ------: | ------------------------------------------ | -------------------------------------------- |
| 100.0% | 416 KiB |   1,114 | `__json_value_module_MOD_json_get_by_path` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_file_module_MOD_json_file_get_string` (`src/json-fortran/src/json_file_module.F90`)

|      % |    Size | Objects | Callee                                            | Location                                           |
| -----: | ------: | ------: | ------------------------------------------------- | -------------------------------------------------- |
| 100.0% | 416 KiB |   1,132 | `__json_value_module_MOD_json_get_string_by_path` | `src/json-fortran/src/json_get_scalar_by_path.inc` |

##### `__json_value_module_MOD_json_get_by_path_default` (`src/json-fortran/src/json_value_module.F90`)

|      % |    Size | Objects | Callee                                          | Location                                         |
| -----: | ------: | ------: | ----------------------------------------------- | ------------------------------------------------ |
| 100.0% | 416 KiB |   1,114 | `__json_string_utilities_MOD_string_to_integer` | `src/json-fortran/src/json_string_utilities.F90` |

##### `__json_value_module_MOD_json_get_by_path` (`src/json-fortran/src/json_value_module.F90`)

|      % |    Size | Objects | Callee                                             | Location                                     |
| -----: | ------: | ------: | -------------------------------------------------- | -------------------------------------------- |
| 100.0% | 416 KiB |   1,114 | `__json_value_module_MOD_json_get_by_path_default` | `src/json-fortran/src/json_value_module.F90` |

## Hottest call stacks

Call stacks ranked by bytes allocated in their leaf frame.

|     % |     Size | Objects | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ----: | -------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 15.8% |  6.5 MiB |  60,816 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` |
| 13.3% | 5.47 MiB |   1,374 | `__json_string_utilities_MOD_string_to_integer` (`src/json-fortran/src/json_string_utilities.F90`) ← `__json_value_module_MOD_string_to_int` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_number` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                                                                    |
|  8.3% | 3.42 MiB |     858 | `__json_string_utilities_MOD_string_to_integer` (`src/json-fortran/src/json_string_utilities.F90`) ← `__json_value_module_MOD_string_to_int` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_number` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                                                                     |
|  7.7% | 3.17 MiB |     796 | `__json_string_utilities_MOD_string_to_integer` (`src/json-fortran/src/json_string_utilities.F90`) ← `__json_value_module_MOD_string_to_int` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_number` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                                                                      |
|  3.1% |  1.3 MiB |  13,114 | `__json_value_module_MOD_parse_string` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`      |
|  3.0% | 1.25 MiB |      10 | `__json_value_module_MOD_json_parse_file` (`src/json-fortran/src/json_value_module.F90`) ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `_start` ← `_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  2.6% | 1.07 MiB |   1,008 | `__json_string_utilities_MOD_string_to_integer` (`src/json-fortran/src/json_string_utilities.F90`) ← `__json_value_module_MOD_string_to_int` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_number` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main`                                                                                                                                               |
|  2.5% | 1.04 MiB |   7,186 | `__json_value_module_MOD_parse_string` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_value` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`       |
|  2.3% |  979 KiB |     340 | `__json_string_utilities_MOD_string_to_integer` (`src/json-fortran/src/json_string_utilities.F90`) ← `__json_value_module_MOD_string_to_int` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_number` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `_start`                                                                                                                                                                                                                                                                                                        |
|  2.1% |  891 KiB |  59,189 | `__json_value_module_MOD_parse_object` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`      |
|  1.8% |  743 KiB |  22,123 | `__json_value_module_MOD_parse_value` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`       |
|  1.2% |  497 KiB |   4,544 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main`                                                                            |
|  1.2% |  486 KiB |   4,441 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `_start`                                                                                                          |
|  1.0% |  429 KiB |   1,716 | `__json_value_module_MOD_parse_number` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`        |
|  1.0% |  413 KiB |   1,013 | `__json_string_utilities_MOD_string_to_integer` (`src/json-fortran/src/json_string_utilities.F90`) ← `__json_value_module_MOD_json_get_by_path_default` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_json_get_by_path` ← `__json_value_module_MOD_json_get_string_by_path` (`src/json-fortran/src/json_get_scalar_by_path.inc`) ← `__json_file_module_MOD_json_file_get_string` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  1.0% |  406 KiB |     272 | `MAIN__` (`out/profile.f90`) ← `main` ← `_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  0.9% |  392 KiB |      96 | `__json_string_utilities_MOD_string_to_integer` (`src/json-fortran/src/json_string_utilities.F90`) ← `__json_value_module_MOD_string_to_int` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_number` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                                                                     |
|  0.9% |  383 KiB |   3,503 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `_start`                                                                                                                                                   |
|  0.9% |  374 KiB |   3,416 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main`                                   |
|  0.8% |  356 KiB |   3,251 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `_start`                                                                                                                                                                                            |

# Retained heap profile

Retained 894 KiB over 14,825 objects (61.8 B per object).

| Category |      % |    Size | Objects |
| -------- | -----: | ------: | ------: |
| Ours     | 100.0% | 894 KiB |  14,825 |

## Hottest functions

### Self size

Functions ranked by bytes retained directly in the function body, excluding callees.

#### Categories

##### Ours

|     % |     Size | Objects | Function                                          | Location                                           |
| ----: | -------: | ------: | ------------------------------------------------- | -------------------------------------------------- |
| 68.3% |  611 KiB |   5,584 | `__json_value_module_MOD_json_value_create`       | `src/json-fortran/src/json_value_module.F90`       |
| 14.3% |  128 KiB |       4 | `__json_value_module_MOD_json_parse_file`         | `src/json-fortran/src/json_value_module.F90`       |
|  8.7% | 77.5 KiB |   1,865 | `__json_value_module_MOD_parse_value`             | `src/json-fortran/src/json_value_module.F90`       |
|  7.2% | 64.8 KiB |   5,342 | `__json_value_module_MOD_parse_object`            | `src/json-fortran/src/json_value_module.F90`       |
|  0.8% |  6.8 KiB |     871 | `__json_value_module_MOD_to_integer`              | `src/json-fortran/src/json_value_module.F90`       |
|  0.5% | 4.29 KiB |   1,098 | `__json_value_module_MOD_to_logical`              | `src/json-fortran/src/json_value_module.F90`       |
|  0.1% |    793 B |       3 | `MAIN__`                                          | `out/profile.f90`                                  |
|  0.1% |    760 B |       1 | `__json_string_utilities_MOD_string_to_integer`   | `src/json-fortran/src/json_string_utilities.F90`   |
| <0.1% |    269 B |       2 | `__json_value_module_MOD_json_initialize`         | `src/json-fortran/src/json_value_module.F90`       |
| <0.1% |    256 B |       1 | `__json_value_module_MOD_parse_string`            | `src/json-fortran/src/json_value_module.F90`       |
| <0.1% |     52 B |      52 | `__json_value_module_MOD_to_string`               | `src/json-fortran/src/json_value_module.F90`       |
| <0.1% |      3 B |       1 | `__json_value_module_MOD_json_prepare_parser`     | `src/json-fortran/src/json_value_module.F90`       |
| <0.1% |      1 B |       1 | `__json_value_module_MOD_json_get_string_by_path` | `src/json-fortran/src/json_get_scalar_by_path.inc` |

#### Lines

Lines ranked by contribution to each function's self size.

##### `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`)

|      % |    Size | Objects | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 611 KiB |   5,584 | `src/json-fortran/src/json_value_module.F90:2211` |

##### `__json_value_module_MOD_json_parse_file` (`src/json-fortran/src/json_value_module.F90`)

|      % |    Size | Objects | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 128 KiB |       3 | `src/json-fortran/src/json_value_module.F90:9770` |
|  <0.1% |    17 B |       1 | `src/json-fortran/src/json_value_module.F90:9786` |

##### `__json_value_module_MOD_parse_value` (`src/json-fortran/src/json_value_module.F90`)

|      % |     Size | Objects | Location                                           |
| -----: | -------: | ------: | -------------------------------------------------- |
| 100.0% | 77.5 KiB |   1,865 | `src/json-fortran/src/json_value_module.F90:10185` |

##### `__json_value_module_MOD_parse_object` (`src/json-fortran/src/json_value_module.F90`)

|      % |     Size | Objects | Location                                           |
| -----: | -------: | ------: | -------------------------------------------------- |
| 100.0% | 64.8 KiB |   5,342 | `src/json-fortran/src/json_value_module.F90:10922` |

##### `__json_value_module_MOD_to_integer` (`src/json-fortran/src/json_value_module.F90`)

|      % |    Size | Objects | Location                                           |
| -----: | ------: | ------: | -------------------------------------------------- |
| 100.0% | 6.8 KiB |     871 | `src/json-fortran/src/json_value_module.F90:10703` |

##### `__json_value_module_MOD_to_logical` (`src/json-fortran/src/json_value_module.F90`)

|      % |     Size | Objects | Location                                           |
| -----: | -------: | ------: | -------------------------------------------------- |
| 100.0% | 4.29 KiB |   1,098 | `src/json-fortran/src/json_value_module.F90:10672` |

##### `MAIN__` (`out/profile.f90`)

|     % |  Size | Objects | Location             |
| ----: | ----: | ------: | -------------------- |
| 95.8% | 760 B |       1 | `out/profile.f90:31` |
|  2.1% |  17 B |       1 | `out/profile.f90:23` |
|  2.0% |  16 B |       1 | `out/profile.f90:18` |

##### `__json_string_utilities_MOD_string_to_integer` (`src/json-fortran/src/json_string_utilities.F90`)

|      % |  Size | Objects | Location                                             |
| -----: | ----: | ------: | ---------------------------------------------------- |
| 100.0% | 760 B |       1 | `src/json-fortran/src/json_string_utilities.F90:132` |

##### `__json_value_module_MOD_json_initialize` (`src/json-fortran/src/json_value_module.F90`)

|     % |  Size | Objects | Location                                          |
| ----: | ----: | ------: | ------------------------------------------------- |
| 95.2% | 256 B |       1 | `src/json-fortran/src/json_value_module.F90:1048` |
|  4.8% |  13 B |       1 | `src/json-fortran/src/json_value_module.F90:1196` |

##### `__json_value_module_MOD_parse_string` (`src/json-fortran/src/json_value_module.F90`)

|      % |  Size | Objects | Location                                           |
| -----: | ----: | ------: | -------------------------------------------------- |
| 100.0% | 256 B |       1 | `src/json-fortran/src/json_value_module.F90:11073` |

##### `__json_value_module_MOD_to_string` (`src/json-fortran/src/json_value_module.F90`)

|      % | Size | Objects | Location                                           |
| -----: | ---: | ------: | -------------------------------------------------- |
| 100.0% | 52 B |      52 | `src/json-fortran/src/json_value_module.F90:10800` |

##### `__json_value_module_MOD_json_prepare_parser` (`src/json-fortran/src/json_value_module.F90`)

|      % | Size | Objects | Location                                          |
| -----: | ---: | ------: | ------------------------------------------------- |
| 100.0% |  3 B |       1 | `src/json-fortran/src/json_value_module.F90:9680` |

##### `__json_value_module_MOD_json_get_string_by_path` (`src/json-fortran/src/json_get_scalar_by_path.inc`)

|      % | Size | Objects | Location                                             |
| -----: | ---: | ------: | ---------------------------------------------------- |
| 100.0% |  1 B |       1 | `src/json-fortran/src/json_get_scalar_by_path.inc:6` |

#### Callers

Callers ranked by contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`)

|     % |     Size | Objects | Caller                                    | Location                                     |
| ----: | -------: | ------: | ----------------------------------------- | -------------------------------------------- |
| 95.7% |  584 KiB |   5,343 | `__json_value_module_MOD_parse_object`    | `src/json-fortran/src/json_value_module.F90` |
|  4.3% | 26.3 KiB |     240 | `__json_value_module_MOD_parse_array`     | `src/json-fortran/src/json_value_module.F90` |
| <0.1% |    112 B |       1 | `__json_value_module_MOD_json_parse_file` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_json_parse_file` (`src/json-fortran/src/json_value_module.F90`)

|      % |    Size | Objects | Caller                                  | Location                                    |
| -----: | ------: | ------: | --------------------------------------- | ------------------------------------------- |
| 100.0% | 128 KiB |       4 | `__json_file_module_MOD_json_file_load` | `src/json-fortran/src/json_file_module.F90` |

##### `__json_value_module_MOD_parse_value` (`src/json-fortran/src/json_value_module.F90`)

|      % |     Size | Objects | Caller                                 | Location                                     |
| -----: | -------: | ------: | -------------------------------------- | -------------------------------------------- |
| 100.0% | 77.5 KiB |   1,865 | `__json_value_module_MOD_parse_object` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_parse_object` (`src/json-fortran/src/json_value_module.F90`)

|     % |   Size | Objects | Caller                                    | Location                                     |
| ----: | -----: | ------: | ----------------------------------------- | -------------------------------------------- |
| 98.7% | 64 KiB |   5,235 | `__json_value_module_MOD_parse_object`    | `src/json-fortran/src/json_value_module.F90` |
|  1.2% |  824 B |     106 | `__json_value_module_MOD_parse_array`     | `src/json-fortran/src/json_value_module.F90` |
| <0.1% |    8 B |       1 | `__json_value_module_MOD_json_parse_file` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_to_integer` (`src/json-fortran/src/json_value_module.F90`)

|      % |    Size | Objects | Caller                                 | Location                                     |
| -----: | ------: | ------: | -------------------------------------- | -------------------------------------------- |
| 100.0% | 6.8 KiB |     871 | `__json_value_module_MOD_parse_number` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_to_logical` (`src/json-fortran/src/json_value_module.F90`)

|      % |     Size | Objects | Caller                                 | Location                                     |
| -----: | -------: | ------: | -------------------------------------- | -------------------------------------------- |
| 100.0% | 4.29 KiB |   1,098 | `__json_value_module_MOD_parse_object` | `src/json-fortran/src/json_value_module.F90` |

##### `MAIN__` (`out/profile.f90`)

|      % |  Size | Objects | Caller | Location          |
| -----: | ----: | ------: | ------ | ----------------- |
| 100.0% | 793 B |       3 | `main` | `out/profile.f90` |

##### `__json_string_utilities_MOD_string_to_integer` (`src/json-fortran/src/json_string_utilities.F90`)

|      % |  Size | Objects | Caller                                  | Location                                     |
| -----: | ----: | ------: | --------------------------------------- | -------------------------------------------- |
| 100.0% | 760 B |       1 | `__json_value_module_MOD_string_to_int` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_json_initialize` (`src/json-fortran/src/json_value_module.F90`)

|      % |  Size | Objects | Caller                                                | Location                                    |
| -----: | ----: | ------: | ----------------------------------------------------- | ------------------------------------------- |
| 100.0% | 269 B |       2 | `__json_file_module_MOD_initialize_json_core_in_file` | `src/json-fortran/src/json_file_module.F90` |

##### `__json_value_module_MOD_parse_string` (`src/json-fortran/src/json_value_module.F90`)

|      % |  Size | Objects | Caller                                 | Location                                     |
| -----: | ----: | ------: | -------------------------------------- | -------------------------------------------- |
| 100.0% | 256 B |       1 | `__json_value_module_MOD_parse_object` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_to_string` (`src/json-fortran/src/json_value_module.F90`)

|      % | Size | Objects | Caller                                | Location                                     |
| -----: | ---: | ------: | ------------------------------------- | -------------------------------------------- |
| 100.0% | 52 B |      52 | `__json_value_module_MOD_parse_value` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_json_prepare_parser` (`src/json-fortran/src/json_value_module.F90`)

|      % | Size | Objects | Caller                                    | Location                                     |
| -----: | ---: | ------: | ----------------------------------------- | -------------------------------------------- |
| 100.0% |  3 B |       1 | `__json_value_module_MOD_json_parse_file` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_json_get_string_by_path` (`src/json-fortran/src/json_get_scalar_by_path.inc`)

|      % | Size | Objects | Caller                                        | Location                                    |
| -----: | ---: | ------: | --------------------------------------------- | ------------------------------------------- |
| 100.0% |  1 B |       1 | `__json_file_module_MOD_json_file_get_string` | `src/json-fortran/src/json_file_module.F90` |

### Total size

Functions ranked by total bytes retained in the function and all its callees.

|     % |     Size | Objects | Function                                              | Location                                         |
| ----: | -------: | ------: | ----------------------------------------------------- | ------------------------------------------------ |
| 85.6% |  766 KiB |  14,814 | `__json_value_module_MOD_parse_object`                | `src/json-fortran/src/json_value_module.F90`     |
| 68.3% |  611 KiB |   5,584 | `__json_value_module_MOD_json_value_create`           | `src/json-fortran/src/json_value_module.F90`     |
| 51.6% |  462 KiB |   6,153 | `__json_value_module_MOD_json_parse_file`             | `src/json-fortran/src/json_value_module.F90`     |
| 50.0% |  447 KiB |   5,853 | `__json_file_module_MOD_json_file_load`               | `src/json-fortran/src/json_file_module.F90`      |
| 48.5% |  433 KiB |   5,580 | `MAIN__`                                              | `out/profile.f90`                                |
| 46.6% |  417 KiB |   5,258 | `main`                                                | `out/profile.f90`                                |
| 45.6% |  408 KiB |   7,612 | `__json_value_module_MOD_parse_array`                 | `src/json-fortran/src/json_value_module.F90`     |
| 39.1% |  350 KiB |   4,220 | `_start`                                              | `<unknown>`                                      |
|  9.5% | 84.8 KiB |   1,983 | `__json_value_module_MOD_parse_value`                 | `src/json-fortran/src/json_value_module.F90`     |
|  1.1% | 9.78 KiB |     200 | `__json_value_module_MOD_parse_string`                | `src/json-fortran/src/json_value_module.F90`     |
|  0.8% | 7.55 KiB |     872 | `__json_value_module_MOD_parse_number`                | `src/json-fortran/src/json_value_module.F90`     |
|  0.8% |  6.8 KiB |     871 | `__json_value_module_MOD_to_integer`                  | `src/json-fortran/src/json_value_module.F90`     |
|  0.5% | 4.29 KiB |   1,098 | `__json_value_module_MOD_to_logical`                  | `src/json-fortran/src/json_value_module.F90`     |
|  0.1% |    776 B |       3 | `__json_string_utilities_MOD_string_to_integer`       | `src/json-fortran/src/json_string_utilities.F90` |
|  0.1% |    760 B |       1 | `__json_value_module_MOD_string_to_int`               | `src/json-fortran/src/json_value_module.F90`     |
| <0.1% |    448 B |       4 | `__json_value_module_MOD_pop_char.part.0`             | `src/json-fortran/src/json_value_module.F90`     |
| <0.1% |    269 B |       2 | `__json_value_module_MOD_json_initialize`             | `src/json-fortran/src/json_value_module.F90`     |
| <0.1% |    269 B |       2 | `__json_file_module_MOD_initialize_json_core_in_file` | `src/json-fortran/src/json_file_module.F90`      |
| <0.1% |     52 B |      52 | `__json_value_module_MOD_to_string`                   | `src/json-fortran/src/json_value_module.F90`     |
| <0.1% |      3 B |       1 | `__json_value_module_MOD_json_prepare_parser`         | `src/json-fortran/src/json_value_module.F90`     |

#### Categories

##### Ours

|     % |     Size | Objects | Function                                              | Location                                           |
| ----: | -------: | ------: | ----------------------------------------------------- | -------------------------------------------------- |
| 85.6% |  766 KiB |  14,814 | `__json_value_module_MOD_parse_object`                | `src/json-fortran/src/json_value_module.F90`       |
| 68.3% |  611 KiB |   5,584 | `__json_value_module_MOD_json_value_create`           | `src/json-fortran/src/json_value_module.F90`       |
| 51.6% |  462 KiB |   6,153 | `__json_value_module_MOD_json_parse_file`             | `src/json-fortran/src/json_value_module.F90`       |
| 50.0% |  447 KiB |   5,853 | `__json_file_module_MOD_json_file_load`               | `src/json-fortran/src/json_file_module.F90`        |
| 48.5% |  433 KiB |   5,580 | `MAIN__`                                              | `out/profile.f90`                                  |
| 46.6% |  417 KiB |   5,258 | `main`                                                | `out/profile.f90`                                  |
| 45.6% |  408 KiB |   7,612 | `__json_value_module_MOD_parse_array`                 | `src/json-fortran/src/json_value_module.F90`       |
|  9.5% | 84.8 KiB |   1,983 | `__json_value_module_MOD_parse_value`                 | `src/json-fortran/src/json_value_module.F90`       |
|  1.1% | 9.78 KiB |     200 | `__json_value_module_MOD_parse_string`                | `src/json-fortran/src/json_value_module.F90`       |
|  0.8% | 7.55 KiB |     872 | `__json_value_module_MOD_parse_number`                | `src/json-fortran/src/json_value_module.F90`       |
|  0.8% |  6.8 KiB |     871 | `__json_value_module_MOD_to_integer`                  | `src/json-fortran/src/json_value_module.F90`       |
|  0.5% | 4.29 KiB |   1,098 | `__json_value_module_MOD_to_logical`                  | `src/json-fortran/src/json_value_module.F90`       |
|  0.1% |    776 B |       3 | `__json_string_utilities_MOD_string_to_integer`       | `src/json-fortran/src/json_string_utilities.F90`   |
|  0.1% |    760 B |       1 | `__json_value_module_MOD_string_to_int`               | `src/json-fortran/src/json_value_module.F90`       |
| <0.1% |    448 B |       4 | `__json_value_module_MOD_pop_char.part.0`             | `src/json-fortran/src/json_value_module.F90`       |
| <0.1% |    269 B |       2 | `__json_value_module_MOD_json_initialize`             | `src/json-fortran/src/json_value_module.F90`       |
| <0.1% |    269 B |       2 | `__json_file_module_MOD_initialize_json_core_in_file` | `src/json-fortran/src/json_file_module.F90`        |
| <0.1% |     52 B |      52 | `__json_value_module_MOD_to_string`                   | `src/json-fortran/src/json_value_module.F90`       |
| <0.1% |      3 B |       1 | `__json_value_module_MOD_json_prepare_parser`         | `src/json-fortran/src/json_value_module.F90`       |
| <0.1% |      1 B |       1 | `__json_value_module_MOD_json_get_string_by_path`     | `src/json-fortran/src/json_get_scalar_by_path.inc` |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `__json_value_module_MOD_parse_object` (`src/json-fortran/src/json_value_module.F90`)

|     % |     Size | Objects | Callee                                      | Location                                     |
| ----: | -------: | ------: | ------------------------------------------- | -------------------------------------------- |
| 98.7% |  756 KiB |  14,694 | `__json_value_module_MOD_parse_object`      | `src/json-fortran/src/json_value_module.F90` |
| 76.3% |  584 KiB |   5,343 | `__json_value_module_MOD_json_value_create` | `src/json-fortran/src/json_value_module.F90` |
| 52.2% |  400 KiB |   7,433 | `__json_value_module_MOD_parse_array`       | `src/json-fortran/src/json_value_module.F90` |
| 10.1% | 77.5 KiB |   1,917 | `__json_value_module_MOD_parse_value`       | `src/json-fortran/src/json_value_module.F90` |
|  4.1% |   31 KiB |   1,331 | `_start`                                    | `<unknown>`                                  |

##### `__json_value_module_MOD_json_parse_file` (`src/json-fortran/src/json_value_module.F90`)

|     % |     Size | Objects | Callee                                        | Location                                     |
| ----: | -------: | ------: | --------------------------------------------- | -------------------------------------------- |
| 72.2% |  333 KiB |   6,147 | `__json_value_module_MOD_parse_object`        | `src/json-fortran/src/json_value_module.F90` |
|  1.8% | 8.27 KiB |      63 | `_start`                                      | `<unknown>`                                  |
| <0.1% |    112 B |       1 | `__json_value_module_MOD_json_value_create`   | `src/json-fortran/src/json_value_module.F90` |
| <0.1% |      3 B |       1 | `__json_value_module_MOD_json_prepare_parser` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`)

|      % |     Size | Objects | Callee                                    | Location                                     |
| -----: | -------: | ------: | ----------------------------------------- | -------------------------------------------- |
| 100.0% |  447 KiB |   5,853 | `__json_value_module_MOD_json_parse_file` | `src/json-fortran/src/json_value_module.F90` |
|   1.0% | 4.27 KiB |      39 | `_start`                                  | `<unknown>`                                  |

##### `MAIN__` (`out/profile.f90`)

|     % |    Size | Objects | Callee                                                | Location                                    |
| ----: | ------: | ------: | ----------------------------------------------------- | ------------------------------------------- |
| 99.8% | 432 KiB |   5,574 | `__json_file_module_MOD_json_file_load`               | `src/json-fortran/src/json_file_module.F90` |
|  0.1% |   269 B |       2 | `__json_file_module_MOD_initialize_json_core_in_file` | `src/json-fortran/src/json_file_module.F90` |
| <0.1% |    96 B |       1 | `_start`                                              | `<unknown>`                                 |
| <0.1% |     1 B |       1 | `__json_file_module_MOD_json_file_get_string`         | `src/json-fortran/src/json_file_module.F90` |

##### `main` (`out/profile.f90`)

|      % |     Size | Objects | Callee   | Location          |
| -----: | -------: | ------: | -------- | ----------------- |
| 100.0% |  417 KiB |   5,258 | `MAIN__` | `out/profile.f90` |
|   2.0% | 8.42 KiB |      77 | `_start` | `<unknown>`       |

##### `__json_value_module_MOD_parse_array` (`src/json-fortran/src/json_value_module.F90`)

|     % |     Size | Objects | Callee                                      | Location                                     |
| ----: | -------: | ------: | ------------------------------------------- | -------------------------------------------- |
| 98.5% |  402 KiB |   7,555 | `__json_value_module_MOD_parse_object`      | `src/json-fortran/src/json_value_module.F90` |
|  6.4% | 26.3 KiB |     240 | `__json_value_module_MOD_json_value_create` | `src/json-fortran/src/json_value_module.F90` |
|  0.3% | 1.05 KiB |     134 | `__json_value_module_MOD_parse_number`      | `src/json-fortran/src/json_value_module.F90` |
| <0.1% |    188 B |      47 | `_start`                                    | `<unknown>`                                  |

##### `_start` (`<unknown>`)

|      % |    Size | Objects | Callee   | Location          |
| -----: | ------: | ------: | -------- | ----------------- |
| 100.0% | 350 KiB |   4,220 | `main`   | `out/profile.f90` |
|  36.6% | 128 KiB |       1 | `_start` | `<unknown>`       |

##### `__json_value_module_MOD_parse_value` (`src/json-fortran/src/json_value_module.F90`)

|    % |     Size | Objects | Callee                              | Location                                     |
| ---: | -------: | ------: | ----------------------------------- | -------------------------------------------- |
| 8.5% | 7.22 KiB |      66 | `_start`                            | `<unknown>`                                  |
| 0.1% |     52 B |      52 | `__json_value_module_MOD_to_string` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_parse_string` (`src/json-fortran/src/json_value_module.F90`)

|     % |     Size | Objects | Callee   | Location    |
| ----: | -------: | ------: | -------- | ----------- |
| 97.4% | 9.53 KiB |     199 | `_start` | `<unknown>` |

##### `__json_value_module_MOD_parse_number` (`src/json-fortran/src/json_value_module.F90`)

|     % |    Size | Objects | Callee                                  | Location                                     |
| ----: | ------: | ------: | --------------------------------------- | -------------------------------------------- |
| 90.2% | 6.8 KiB |     871 | `__json_value_module_MOD_to_integer`    | `src/json-fortran/src/json_value_module.F90` |
|  9.8% |   760 B |       1 | `__json_value_module_MOD_string_to_int` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_string_utilities_MOD_string_to_integer` (`src/json-fortran/src/json_string_utilities.F90`)

|    % | Size | Objects | Callee   | Location    |
| ---: | ---: | ------: | -------- | ----------- |
| 2.1% | 16 B |       2 | `_start` | `<unknown>` |

##### `__json_value_module_MOD_string_to_int` (`src/json-fortran/src/json_value_module.F90`)

|      % |  Size | Objects | Callee                                          | Location                                         |
| -----: | ----: | ------: | ----------------------------------------------- | ------------------------------------------------ |
| 100.0% | 760 B |       1 | `__json_string_utilities_MOD_string_to_integer` | `src/json-fortran/src/json_string_utilities.F90` |

##### `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`)

|      % |  Size | Objects | Callee   | Location    |
| -----: | ----: | ------: | -------- | ----------- |
| 100.0% | 448 B |       4 | `_start` | `<unknown>` |

##### `__json_file_module_MOD_initialize_json_core_in_file` (`src/json-fortran/src/json_file_module.F90`)

|      % |  Size | Objects | Callee                                    | Location                                     |
| -----: | ----: | ------: | ----------------------------------------- | -------------------------------------------- |
| 100.0% | 269 B |       2 | `__json_value_module_MOD_json_initialize` | `src/json-fortran/src/json_value_module.F90` |

## Hottest call stacks

Call stacks ranked by bytes retained in their leaf frame.

|     % |     Size | Objects | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ----: | -------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 31.5% |  282 KiB |   2,577 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                                        |
| 14.3% |  128 KiB |       1 | `__json_value_module_MOD_json_parse_file` (`src/json-fortran/src/json_value_module.F90`) ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `_start` ← `_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  4.2% | 37.6 KiB |   2,507 | `__json_value_module_MOD_parse_object` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                                             |
|  3.5% | 31.6 KiB |     937 | `__json_value_module_MOD_parse_value` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                                              |
|  2.3% | 20.6 KiB |     188 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main`                                                                                                                   |
|  2.3% | 20.1 KiB |     184 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `_start`                                                                                                                                                 |
|  1.8% |   16 KiB |     146 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `_start`                                                                                                                                                                                          |
|  1.7% | 15.3 KiB |     140 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main`                                                                          |
|  1.7% |   15 KiB |     137 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `_start`                                                                                                                                                                                                                                   |
|  1.3% | 11.7 KiB |     107 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `_start`                                                                                                                                                                                                                                                                            |
|  1.3% | 11.3 KiB |     103 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main`                                 |
|  1.2% | 10.5 KiB |      39 | `__json_value_module_MOD_parse_value` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main`                                                                                                                         |
|  1.0% | 9.33 KiB |      32 | `__json_value_module_MOD_parse_value` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  1.0% | 8.53 KiB |      78 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                                          |
|  1.0% | 8.53 KiB |      78 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `_start` ← `__json_value_module_MOD_parse_string` (`src/json-fortran/src/json_value_module.F90`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  1.0% | 8.53 KiB |      78 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `_start` ← `__json_value_module_MOD_parse_object` (`src/json-fortran/src/json_value_module.F90`)                                                                                                                                                                                                                                                                                                               |
|  1.0% | 8.53 KiB |      78 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `_start` ← `__json_value_module_MOD_parse_object` (`src/json-fortran/src/json_value_module.F90`)                                                                                                                                                                                                                                                                      |
|  1.0% | 8.53 KiB |      78 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  1.0% | 8.53 KiB |      78 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `_start`                                                                                                                                                                                                                                                                                                                     |
|  0.9% | 7.88 KiB |      72 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) |
