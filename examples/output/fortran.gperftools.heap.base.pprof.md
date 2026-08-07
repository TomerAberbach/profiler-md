# Allocated heap and retained heap profile

Allocated 47.7 MiB and retained 894 KiB over 450,137 samples (111 B and 2.03 B per sample).

| Category |      % | Allocated | Retained | Samples |
| -------- | -----: | --------: | -------: | ------: |
| ours     | 100.0% |  47.7 MiB |  894 KiB | 450,137 |

## Allocated heap

### Hottest functions

#### Self size

Functions ranked by bytes allocated directly in the function body, excluding callees.

|     % |     Size | Samples | Function                                          | Location                                           |
| ----: | -------: | ------: | ------------------------------------------------- | -------------------------------------------------- |
| 49.2% | 23.4 MiB |  34,087 | `__json_string_utilities_MOD_string_to_integer`   | `src/json-fortran/src/json_string_utilities.F90`   |
| 29.9% | 14.2 MiB | 133,404 | `__json_value_module_MOD_json_value_create`       | `src/json-fortran/src/json_value_module.F90`       |
| 10.2% | 4.88 MiB |  64,240 | `__json_value_module_MOD_parse_string`            | `src/json-fortran/src/json_value_module.F90`       |
|  3.7% | 1.77 MiB |  41,437 | `__json_value_module_MOD_parse_value`             | `src/json-fortran/src/json_value_module.F90`       |
|  3.0% | 1.44 MiB | 122,261 | `__json_value_module_MOD_parse_object`            | `src/json-fortran/src/json_value_module.F90`       |
|  2.6% | 1.25 MiB |      34 | `__json_value_module_MOD_json_parse_file`         | `src/json-fortran/src/json_value_module.F90`       |
|  0.6% |  269 KiB |     897 | `__json_value_module_MOD_json_get_string`         | `src/json-fortran/src/json_value_module.F90`       |
|  0.3% |  149 KiB |  19,115 | `__json_value_module_MOD_to_integer`              | `src/json-fortran/src/json_value_module.F90`       |
|  0.2% |  102 KiB |  26,216 | `__json_value_module_MOD_to_logical`              | `src/json-fortran/src/json_value_module.F90`       |
|  0.2% |   90 KiB |     360 | `__json_value_module_MOD_parse_number`            | `src/json-fortran/src/json_value_module.F90`       |
| <0.1% |   24 KiB |     100 | `MAIN__`                                          | `out/profile.f90`                                  |
| <0.1% | 19.1 KiB |     178 | `__json_string_utilities_MOD_unescape_string`     | `src/json-fortran/src/json_string_utilities.F90`   |
| <0.1% | 7.59 KiB |   7,769 | `__json_value_module_MOD_to_string`               | `src/json-fortran/src/json_value_module.F90`       |
| <0.1% | 2.02 KiB |      10 | `__json_value_module_MOD_json_initialize`         | `src/json-fortran/src/json_value_module.F90`       |
| <0.1% |    864 B |       9 | `__json_string_utilities_MOD_string_to_real`      | `src/json-fortran/src/json_string_utilities.F90`   |
| <0.1% |    245 B |       1 | `__json_value_module_MOD_pop_char.part.0`         | `src/json-fortran/src/json_value_module.F90`       |
| <0.1% |     18 B |      18 | `__json_value_module_MOD_json_get_string_by_path` | `src/json-fortran/src/json_get_scalar_by_path.inc` |
| <0.1% |      3 B |       1 | `__json_value_module_MOD_json_prepare_parser`     | `src/json-fortran/src/json_value_module.F90`       |

##### Lines

Lines ranked by contribution to each function's self size.

###### `__json_string_utilities_MOD_string_to_integer` (`src/json-fortran/src/json_string_utilities.F90`)

|     % |     Size | Samples | Location                                             |
| ----: | -------: | ------: | ---------------------------------------------------- |
| 85.1% |   20 MiB |  13,054 | `src/json-fortran/src/json_string_utilities.F90:132` |
| 14.9% | 3.48 MiB |  19,935 | `src/json-fortran/src/json_string_utilities.F90:134` |
| <0.1% | 1.57 KiB |   1,098 | `src/json-fortran/src/json_string_utilities.F90:131` |

###### `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`)

|      % |     Size | Samples | Location                                          |
| -----: | -------: | ------: | ------------------------------------------------- |
| 100.0% | 14.2 MiB | 133,404 | `src/json-fortran/src/json_value_module.F90:2211` |

###### `__json_value_module_MOD_parse_string` (`src/json-fortran/src/json_value_module.F90`)

|     % |     Size | Samples | Location                                           |
| ----: | -------: | ------: | -------------------------------------------------- |
| 74.2% | 3.62 MiB |  14,815 | `src/json-fortran/src/json_value_module.F90:11073` |
| 18.4% |  920 KiB |  48,684 | `src/json-fortran/src/json_value_module.F90:11122` |
|  7.4% |  371 KiB |     741 | `src/json-fortran/src/json_value_module.F90:11098` |

###### `__json_value_module_MOD_parse_value` (`src/json-fortran/src/json_value_module.F90`)

|      % |     Size | Samples | Location                                           |
| -----: | -------: | ------: | -------------------------------------------------- |
| 100.0% | 1.77 MiB |  41,437 | `src/json-fortran/src/json_value_module.F90:10185` |

###### `__json_value_module_MOD_parse_object` (`src/json-fortran/src/json_value_module.F90`)

|      % |     Size | Samples | Location                                           |
| -----: | -------: | ------: | -------------------------------------------------- |
| 100.0% | 1.44 MiB | 122,261 | `src/json-fortran/src/json_value_module.F90:10922` |

###### `__json_value_module_MOD_json_parse_file` (`src/json-fortran/src/json_value_module.F90`)

|      % |     Size | Samples | Location                                          |
| -----: | -------: | ------: | ------------------------------------------------- |
| 100.0% | 1.25 MiB |      29 | `src/json-fortran/src/json_value_module.F90:9770` |
|  <0.1% |     85 B |       5 | `src/json-fortran/src/json_value_module.F90:9786` |

###### `__json_value_module_MOD_json_get_string` (`src/json-fortran/src/json_value_module.F90`)

|      % |    Size | Samples | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 269 KiB |     897 | `src/json-fortran/src/json_value_module.F90:9094` |

###### `__json_value_module_MOD_to_integer` (`src/json-fortran/src/json_value_module.F90`)

|      % |    Size | Samples | Location                                           |
| -----: | ------: | ------: | -------------------------------------------------- |
| 100.0% | 149 KiB |  19,115 | `src/json-fortran/src/json_value_module.F90:10703` |

###### `__json_value_module_MOD_to_logical` (`src/json-fortran/src/json_value_module.F90`)

|      % |    Size | Samples | Location                                           |
| -----: | ------: | ------: | -------------------------------------------------- |
| 100.0% | 102 KiB |  26,216 | `src/json-fortran/src/json_value_module.F90:10672` |

###### `__json_value_module_MOD_parse_number` (`src/json-fortran/src/json_value_module.F90`)

|      % |   Size | Samples | Location                                           |
| -----: | -----: | ------: | -------------------------------------------------- |
| 100.0% | 90 KiB |     360 | `src/json-fortran/src/json_value_module.F90:11216` |

###### `MAIN__` (`out/profile.f90`)

|     % |     Size | Samples | Location             |
| ----: | -------: | ------: | -------------------- |
| 93.3% | 22.3 KiB |      13 | `out/profile.f90:31` |
|  3.3% |    810 B |      81 | `out/profile.f90:32` |
|  3.2% |    776 B |       2 | `out/profile.f90:18` |
|  0.3% |     68 B |       4 | `out/profile.f90:23` |

###### `__json_string_utilities_MOD_unescape_string` (`src/json-fortran/src/json_string_utilities.F90`)

|      % |     Size | Samples | Location                                             |
| -----: | -------: | ------: | ---------------------------------------------------- |
| 100.0% | 19.1 KiB |     178 | `src/json-fortran/src/json_string_utilities.F90:506` |

###### `__json_value_module_MOD_to_string` (`src/json-fortran/src/json_value_module.F90`)

|      % |     Size | Samples | Location                                           |
| -----: | -------: | ------: | -------------------------------------------------- |
| 100.0% | 7.59 KiB |   7,769 | `src/json-fortran/src/json_value_module.F90:10800` |

###### `__json_value_module_MOD_json_initialize` (`src/json-fortran/src/json_value_module.F90`)

|     % |  Size | Samples | Location                                          |
| ----: | ----: | ------: | ------------------------------------------------- |
| 98.8% | 2 KiB |       8 | `src/json-fortran/src/json_value_module.F90:1048` |
|  1.2% |  24 B |       2 | `src/json-fortran/src/json_value_module.F90:1196` |

###### `__json_string_utilities_MOD_string_to_real` (`src/json-fortran/src/json_string_utilities.F90`)

|      % |  Size | Samples | Location                                             |
| -----: | ----: | ------: | ---------------------------------------------------- |
| 100.0% | 864 B |       9 | `src/json-fortran/src/json_string_utilities.F90:236` |

###### `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`)

|      % |  Size | Samples | Location                                           |
| -----: | ----: | ------: | -------------------------------------------------- |
| 100.0% | 245 B |       1 | `src/json-fortran/src/json_value_module.F90:11383` |

###### `__json_value_module_MOD_json_get_string_by_path` (`src/json-fortran/src/json_get_scalar_by_path.inc`)

|      % | Size | Samples | Location                                             |
| -----: | ---: | ------: | ---------------------------------------------------- |
| 100.0% | 18 B |      18 | `src/json-fortran/src/json_get_scalar_by_path.inc:6` |

###### `__json_value_module_MOD_json_prepare_parser` (`src/json-fortran/src/json_value_module.F90`)

|      % | Size | Samples | Location                                          |
| -----: | ---: | ------: | ------------------------------------------------- |
| 100.0% |  3 B |       1 | `src/json-fortran/src/json_value_module.F90:9680` |

##### Callers

Callers ranked by contribution to each function's self size. Inlining can make caller attribution imprecise.

###### `__json_string_utilities_MOD_string_to_integer` (`src/json-fortran/src/json_string_utilities.F90`)

|     % |     Size | Samples | Caller                                             | Location                                     |
| ----: | -------: | ------: | -------------------------------------------------- | -------------------------------------------- |
| 96.5% | 22.6 MiB |  32,572 | `__json_value_module_MOD_string_to_int`            | `src/json-fortran/src/json_value_module.F90` |
|  3.5% |  837 KiB |   1,515 | `__json_value_module_MOD_json_get_by_path_default` | `src/json-fortran/src/json_value_module.F90` |

###### `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`)

|     % |     Size | Samples | Caller                                    | Location                                     |
| ----: | -------: | ------: | ----------------------------------------- | -------------------------------------------- |
| 92.3% | 13.1 MiB | 123,102 | `__json_value_module_MOD_parse_object`    | `src/json-fortran/src/json_value_module.F90` |
|  7.7% |  1.1 MiB |  10,299 | `__json_value_module_MOD_parse_array`     | `src/json-fortran/src/json_value_module.F90` |
| <0.1% |    336 B |       3 | `__json_value_module_MOD_json_parse_file` | `src/json-fortran/src/json_value_module.F90` |

###### `__json_value_module_MOD_parse_string` (`src/json-fortran/src/json_value_module.F90`)

|     % |     Size | Samples | Caller                                 | Location                                     |
| ----: | -------: | ------: | -------------------------------------- | -------------------------------------------- |
| 51.8% | 2.53 MiB |  37,465 | `__json_value_module_MOD_parse_object` | `src/json-fortran/src/json_value_module.F90` |
| 48.2% | 2.35 MiB |  26,775 | `__json_value_module_MOD_parse_value`  | `src/json-fortran/src/json_value_module.F90` |

###### `__json_value_module_MOD_parse_value` (`src/json-fortran/src/json_value_module.F90`)

|      % |     Size | Samples | Caller                                 | Location                                     |
| -----: | -------: | ------: | -------------------------------------- | -------------------------------------------- |
| 100.0% | 1.77 MiB |  41,437 | `__json_value_module_MOD_parse_object` | `src/json-fortran/src/json_value_module.F90` |

###### `__json_value_module_MOD_parse_object` (`src/json-fortran/src/json_value_module.F90`)

|     % |     Size | Samples | Caller                                    | Location                                     |
| ----: | -------: | ------: | ----------------------------------------- | -------------------------------------------- |
| 98.8% | 1.42 MiB | 119,928 | `__json_value_module_MOD_parse_object`    | `src/json-fortran/src/json_value_module.F90` |
|  1.2% | 18.1 KiB |   2,329 | `__json_value_module_MOD_parse_array`     | `src/json-fortran/src/json_value_module.F90` |
| <0.1% |     32 B |       4 | `__json_value_module_MOD_json_parse_file` | `src/json-fortran/src/json_value_module.F90` |

###### `__json_value_module_MOD_json_parse_file` (`src/json-fortran/src/json_value_module.F90`)

|      % |     Size | Samples | Caller                                  | Location                                    |
| -----: | -------: | ------: | --------------------------------------- | ------------------------------------------- |
| 100.0% | 1.25 MiB |      34 | `__json_file_module_MOD_json_file_load` | `src/json-fortran/src/json_file_module.F90` |

###### `__json_value_module_MOD_json_get_string` (`src/json-fortran/src/json_value_module.F90`)

|      % |    Size | Samples | Caller                                            | Location                                           |
| -----: | ------: | ------: | ------------------------------------------------- | -------------------------------------------------- |
| 100.0% | 269 KiB |     897 | `__json_value_module_MOD_json_get_string_by_path` | `src/json-fortran/src/json_get_scalar_by_path.inc` |

###### `__json_value_module_MOD_to_integer` (`src/json-fortran/src/json_value_module.F90`)

|      % |    Size | Samples | Caller                                 | Location                                     |
| -----: | ------: | ------: | -------------------------------------- | -------------------------------------------- |
| 100.0% | 149 KiB |  19,115 | `__json_value_module_MOD_parse_number` | `src/json-fortran/src/json_value_module.F90` |

###### `__json_value_module_MOD_to_logical` (`src/json-fortran/src/json_value_module.F90`)

|      % |    Size | Samples | Caller                                 | Location                                     |
| -----: | ------: | ------: | -------------------------------------- | -------------------------------------------- |
| 100.0% | 102 KiB |  26,216 | `__json_value_module_MOD_parse_object` | `src/json-fortran/src/json_value_module.F90` |

###### `__json_value_module_MOD_parse_number` (`src/json-fortran/src/json_value_module.F90`)

|     % |   Size | Samples | Caller                                 | Location                                     |
| ----: | -----: | ------: | -------------------------------------- | -------------------------------------------- |
| 90.0% | 81 KiB |     324 | `__json_value_module_MOD_parse_object` | `src/json-fortran/src/json_value_module.F90` |
| 10.0% |  9 KiB |      36 | `__json_value_module_MOD_parse_array`  | `src/json-fortran/src/json_value_module.F90` |

###### `MAIN__` (`out/profile.f90`)

|      % |   Size | Samples | Caller | Location          |
| -----: | -----: | ------: | ------ | ----------------- |
| 100.0% | 24 KiB |     100 | `main` | `out/profile.f90` |

###### `__json_string_utilities_MOD_unescape_string` (`src/json-fortran/src/json_string_utilities.F90`)

|      % |     Size | Samples | Caller                                 | Location                                     |
| -----: | -------: | ------: | -------------------------------------- | -------------------------------------------- |
| 100.0% | 19.1 KiB |     178 | `__json_value_module_MOD_parse_string` | `src/json-fortran/src/json_value_module.F90` |

###### `__json_value_module_MOD_to_string` (`src/json-fortran/src/json_value_module.F90`)

|      % |     Size | Samples | Caller                                | Location                                     |
| -----: | -------: | ------: | ------------------------------------- | -------------------------------------------- |
| 100.0% | 7.59 KiB |   7,769 | `__json_value_module_MOD_parse_value` | `src/json-fortran/src/json_value_module.F90` |

###### `__json_value_module_MOD_json_initialize` (`src/json-fortran/src/json_value_module.F90`)

|      % |     Size | Samples | Caller                                                | Location                                    |
| -----: | -------: | ------: | ----------------------------------------------------- | ------------------------------------------- |
| 100.0% | 2.02 KiB |      10 | `__json_file_module_MOD_initialize_json_core_in_file` | `src/json-fortran/src/json_file_module.F90` |

###### `__json_string_utilities_MOD_string_to_real` (`src/json-fortran/src/json_string_utilities.F90`)

|      % |  Size | Samples | Caller                                   | Location                                     |
| -----: | ----: | ------: | ---------------------------------------- | -------------------------------------------- |
| 100.0% | 864 B |       9 | `__json_value_module_MOD_string_to_dble` | `src/json-fortran/src/json_value_module.F90` |

###### `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`)

|      % |  Size | Samples | Caller                                 | Location                                     |
| -----: | ----: | ------: | -------------------------------------- | -------------------------------------------- |
| 100.0% | 245 B |       1 | `__json_value_module_MOD_parse_string` | `src/json-fortran/src/json_value_module.F90` |

###### `__json_value_module_MOD_json_get_string_by_path` (`src/json-fortran/src/json_get_scalar_by_path.inc`)

|      % | Size | Samples | Caller                                        | Location                                    |
| -----: | ---: | ------: | --------------------------------------------- | ------------------------------------------- |
| 100.0% | 18 B |      18 | `__json_file_module_MOD_json_file_get_string` | `src/json-fortran/src/json_file_module.F90` |

###### `__json_value_module_MOD_json_prepare_parser` (`src/json-fortran/src/json_value_module.F90`)

|      % | Size | Samples | Caller                                    | Location                                     |
| -----: | ---: | ------: | ----------------------------------------- | -------------------------------------------- |
| 100.0% |  3 B |       1 | `__json_value_module_MOD_json_parse_file` | `src/json-fortran/src/json_value_module.F90` |

#### Total size

Functions ranked by total bytes allocated in the function and all its callees.

|     % |     Size | Samples | Function                                           | Location                                           |
| ----: | -------: | ------: | -------------------------------------------------- | -------------------------------------------------- |
| 95.1% | 45.3 MiB | 447,567 | `__json_value_module_MOD_parse_object`             | `src/json-fortran/src/json_value_module.F90`       |
| 49.2% | 23.4 MiB |  34,143 | `__json_string_utilities_MOD_string_to_integer`    | `src/json-fortran/src/json_string_utilities.F90`   |
| 47.9% | 22.9 MiB |  52,056 | `__json_value_module_MOD_parse_number`             | `src/json-fortran/src/json_value_module.F90`       |
| 47.5% | 22.6 MiB |  32,572 | `__json_value_module_MOD_string_to_int`            | `src/json-fortran/src/json_value_module.F90`       |
| 35.2% | 16.8 MiB | 238,054 | `__json_value_module_MOD_parse_array`              | `src/json-fortran/src/json_value_module.F90`       |
| 29.9% | 14.2 MiB | 133,404 | `__json_value_module_MOD_json_value_create`        | `src/json-fortran/src/json_value_module.F90`       |
| 28.1% | 13.4 MiB | 169,249 | `MAIN__`                                           | `out/profile.f90`                                  |
| 27.9% | 13.3 MiB | 184,850 | `__json_value_module_MOD_json_parse_file`          | `src/json-fortran/src/json_value_module.F90`       |
| 27.3% |   13 MiB | 159,966 | `main`                                             | `out/profile.f90`                                  |
| 27.2% | 12.9 MiB | 177,529 | `__json_file_module_MOD_json_file_load`            | `src/json-fortran/src/json_file_module.F90`        |
| 21.8% | 10.4 MiB | 125,670 | `_start`                                           | `<unknown>`                                        |
| 10.7% | 5.12 MiB |  70,140 | `__json_value_module_MOD_parse_string`             | `src/json-fortran/src/json_value_module.F90`       |
|  9.1% | 4.32 MiB |  77,828 | `__json_value_module_MOD_parse_value`              | `src/json-fortran/src/json_value_module.F90`       |
|  2.3% | 1.08 MiB |   2,430 | `__json_value_module_MOD_json_get_string_by_path`  | `src/json-fortran/src/json_get_scalar_by_path.inc` |
|  2.3% | 1.08 MiB |   2,430 | `__json_file_module_MOD_json_file_get_string`      | `src/json-fortran/src/json_file_module.F90`        |
|  1.7% |  837 KiB |   1,515 | `__json_value_module_MOD_json_get_by_path_default` | `src/json-fortran/src/json_value_module.F90`       |
|  1.7% |  837 KiB |   1,515 | `__json_value_module_MOD_json_get_by_path`         | `src/json-fortran/src/json_value_module.F90`       |
|  0.6% |  269 KiB |     897 | `__json_value_module_MOD_json_get_string`          | `src/json-fortran/src/json_value_module.F90`       |
|  0.3% |  149 KiB |  19,115 | `__json_value_module_MOD_to_integer`               | `src/json-fortran/src/json_value_module.F90`       |
|  0.2% |  102 KiB |  26,216 | `__json_value_module_MOD_to_logical`               | `src/json-fortran/src/json_value_module.F90`       |

##### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

###### `__json_value_module_MOD_parse_object` (`src/json-fortran/src/json_value_module.F90`)

|     % |     Size | Samples | Callee                                      | Location                                     |
| ----: | -------: | ------: | ------------------------------------------- | -------------------------------------------- |
| 99.5% | 45.1 MiB | 444,512 | `__json_value_module_MOD_parse_object`      | `src/json-fortran/src/json_value_module.F90` |
| 46.6% | 21.1 MiB |  40,096 | `__json_value_module_MOD_parse_number`      | `src/json-fortran/src/json_value_module.F90` |
| 36.6% | 16.6 MiB | 231,061 | `__json_value_module_MOD_parse_array`       | `src/json-fortran/src/json_value_module.F90` |
| 29.0% | 13.1 MiB | 123,102 | `__json_value_module_MOD_json_value_create` | `src/json-fortran/src/json_value_module.F90` |
|  9.1% | 4.14 MiB |  76,160 | `__json_value_module_MOD_parse_value`       | `src/json-fortran/src/json_value_module.F90` |

###### `__json_string_utilities_MOD_string_to_integer` (`src/json-fortran/src/json_string_utilities.F90`)

|     % |  Size | Samples | Callee   | Location    |
| ----: | ----: | ------: | -------- | ----------- |
| <0.1% | 448 B |      56 | `_start` | `<unknown>` |

###### `__json_value_module_MOD_parse_number` (`src/json-fortran/src/json_value_module.F90`)

|     % |     Size | Samples | Callee                                   | Location                                     |
| ----: | -------: | ------: | ---------------------------------------- | -------------------------------------------- |
| 99.0% | 22.6 MiB |  32,572 | `__json_value_module_MOD_string_to_int`  | `src/json-fortran/src/json_value_module.F90` |
|  0.6% |  149 KiB |  19,115 | `__json_value_module_MOD_to_integer`     | `src/json-fortran/src/json_value_module.F90` |
| <0.1% |    864 B |       9 | `__json_value_module_MOD_string_to_dble` | `src/json-fortran/src/json_value_module.F90` |

###### `__json_value_module_MOD_string_to_int` (`src/json-fortran/src/json_value_module.F90`)

|      % |     Size | Samples | Callee                                          | Location                                         |
| -----: | -------: | ------: | ----------------------------------------------- | ------------------------------------------------ |
| 100.0% | 22.6 MiB |  32,572 | `__json_string_utilities_MOD_string_to_integer` | `src/json-fortran/src/json_string_utilities.F90` |

###### `__json_value_module_MOD_parse_array` (`src/json-fortran/src/json_value_module.F90`)

|     % |     Size | Samples | Callee                                      | Location                                     |
| ----: | -------: | ------: | ------------------------------------------- | -------------------------------------------- |
| 97.6% | 16.4 MiB | 234,235 | `__json_value_module_MOD_parse_object`      | `src/json-fortran/src/json_value_module.F90` |
| 10.4% | 1.74 MiB |  11,960 | `__json_value_module_MOD_parse_number`      | `src/json-fortran/src/json_value_module.F90` |
|  6.6% |  1.1 MiB |  10,299 | `__json_value_module_MOD_json_value_create` | `src/json-fortran/src/json_value_module.F90` |
| <0.1% | 4.57 KiB |   1,171 | `_start`                                    | `<unknown>`                                  |

###### `MAIN__` (`out/profile.f90`)

|     % |     Size | Samples | Callee                                                | Location                                    |
| ----: | -------: | ------: | ----------------------------------------------------- | ------------------------------------------- |
| 91.8% | 12.3 MiB | 166,709 | `__json_file_module_MOD_json_file_load`               | `src/json-fortran/src/json_file_module.F90` |
|  8.0% | 1.08 MiB |   2,430 | `__json_file_module_MOD_json_file_get_string`         | `src/json-fortran/src/json_file_module.F90` |
| <0.1% | 2.02 KiB |      10 | `__json_file_module_MOD_initialize_json_core_in_file` | `src/json-fortran/src/json_file_module.F90` |
| <0.1% |    864 B |       9 | `_start`                                              | `<unknown>`                                 |

###### `__json_value_module_MOD_json_parse_file` (`src/json-fortran/src/json_value_module.F90`)

|     % |    Size | Samples | Callee                                        | Location                                     |
| ----: | ------: | ------: | --------------------------------------------- | -------------------------------------------- |
| 90.6% |  12 MiB | 184,812 | `__json_value_module_MOD_parse_object`        | `src/json-fortran/src/json_value_module.F90` |
|  1.6% | 217 KiB |   1,611 | `_start`                                      | `<unknown>`                                  |
| <0.1% |   336 B |       3 | `__json_value_module_MOD_json_value_create`   | `src/json-fortran/src/json_value_module.F90` |
| <0.1% |     3 B |       1 | `__json_value_module_MOD_json_prepare_parser` | `src/json-fortran/src/json_value_module.F90` |

###### `main` (`out/profile.f90`)

|      % |    Size | Samples | Callee   | Location          |
| -----: | ------: | ------: | -------- | ----------------- |
| 100.0% |  13 MiB | 159,966 | `MAIN__` | `out/profile.f90` |
|   1.5% | 204 KiB |   1,865 | `_start` | `<unknown>`       |

###### `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`)

|      % |     Size | Samples | Callee                                    | Location                                     |
| -----: | -------: | ------: | ----------------------------------------- | -------------------------------------------- |
| 100.0% | 12.9 MiB | 177,529 | `__json_value_module_MOD_json_parse_file` | `src/json-fortran/src/json_value_module.F90` |
|   0.8% |  112 KiB |   1,044 | `_start`                                  | `<unknown>`                                  |

###### `_start` (`<unknown>`)

|      % |     Size | Samples | Callee   | Location          |
| -----: | -------: | ------: | -------- | ----------------- |
| 100.0% | 10.4 MiB | 125,670 | `main`   | `out/profile.f90` |
|  12.1% | 1.26 MiB |     417 | `_start` | `<unknown>`       |

###### `__json_value_module_MOD_parse_string` (`src/json-fortran/src/json_value_module.F90`)

|     % |     Size | Samples | Callee                                        | Location                                         |
| ----: | -------: | ------: | --------------------------------------------- | ------------------------------------------------ |
|  4.8% |  251 KiB |   6,660 | `_start`                                      | `<unknown>`                                      |
|  0.4% | 19.1 KiB |     178 | `__json_string_utilities_MOD_unescape_string` | `src/json-fortran/src/json_string_utilities.F90` |
| <0.1% |    245 B |       1 | `__json_value_module_MOD_pop_char.part.0`     | `src/json-fortran/src/json_value_module.F90`     |

###### `__json_value_module_MOD_parse_value` (`src/json-fortran/src/json_value_module.F90`)

|     % |     Size | Samples | Callee                                 | Location                                     |
| ----: | -------: | ------: | -------------------------------------- | -------------------------------------------- |
| 54.8% | 2.37 MiB |  26,954 | `__json_value_module_MOD_parse_string` | `src/json-fortran/src/json_value_module.F90` |
|  4.1% |  182 KiB |   1,668 | `_start`                               | `<unknown>`                                  |
|  0.2% | 7.59 KiB |   7,769 | `__json_value_module_MOD_to_string`    | `src/json-fortran/src/json_value_module.F90` |

###### `__json_value_module_MOD_json_get_string_by_path` (`src/json-fortran/src/json_get_scalar_by_path.inc`)

|     % |    Size | Samples | Callee                                     | Location                                     |
| ----: | ------: | ------: | ------------------------------------------ | -------------------------------------------- |
| 75.7% | 837 KiB |   1,515 | `__json_value_module_MOD_json_get_by_path` | `src/json-fortran/src/json_value_module.F90` |
| 24.3% | 269 KiB |     897 | `__json_value_module_MOD_json_get_string`  | `src/json-fortran/src/json_value_module.F90` |

###### `__json_file_module_MOD_json_file_get_string` (`src/json-fortran/src/json_file_module.F90`)

|      % |     Size | Samples | Callee                                            | Location                                           |
| -----: | -------: | ------: | ------------------------------------------------- | -------------------------------------------------- |
| 100.0% | 1.08 MiB |   2,430 | `__json_value_module_MOD_json_get_string_by_path` | `src/json-fortran/src/json_get_scalar_by_path.inc` |

###### `__json_value_module_MOD_json_get_by_path_default` (`src/json-fortran/src/json_value_module.F90`)

|      % |    Size | Samples | Callee                                          | Location                                         |
| -----: | ------: | ------: | ----------------------------------------------- | ------------------------------------------------ |
| 100.0% | 837 KiB |   1,515 | `__json_string_utilities_MOD_string_to_integer` | `src/json-fortran/src/json_string_utilities.F90` |

###### `__json_value_module_MOD_json_get_by_path` (`src/json-fortran/src/json_value_module.F90`)

|      % |    Size | Samples | Callee                                             | Location                                     |
| -----: | ------: | ------: | -------------------------------------------------- | -------------------------------------------- |
| 100.0% | 837 KiB |   1,515 | `__json_value_module_MOD_json_get_by_path_default` | `src/json-fortran/src/json_value_module.F90` |

### Hottest call stacks

Call stacks ranked by bytes allocated in their leaf frame.

|     % |     Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ----: | -------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 38.6% | 18.4 MiB |   4,624 | `__json_string_utilities_MOD_string_to_integer` (`src/json-fortran/src/json_string_utilities.F90`) ← `__json_value_module_MOD_string_to_int` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_number` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                                                                    |
| 13.6% |  6.5 MiB |  60,816 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` |
|  2.9% | 1.39 MiB |     350 | `__json_string_utilities_MOD_string_to_integer` (`src/json-fortran/src/json_string_utilities.F90`) ← `__json_value_module_MOD_string_to_int` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_number` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                                                                      |
|  2.6% | 1.25 MiB |      10 | `__json_value_module_MOD_json_parse_file` (`src/json-fortran/src/json_value_module.F90`) ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `_start` ← `_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  1.8% |  891 KiB |  59,189 | `__json_value_module_MOD_parse_object` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`      |
|  1.7% |  839 KiB |     441 | `__json_string_utilities_MOD_string_to_integer` (`src/json-fortran/src/json_string_utilities.F90`) ← `__json_value_module_MOD_string_to_int` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_number` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `_start`                                                                                                                                                                                                                                                                                                        |
|  1.7% |  825 KiB |   1,116 | `__json_string_utilities_MOD_string_to_integer` (`src/json-fortran/src/json_string_utilities.F90`) ← `__json_value_module_MOD_json_get_by_path_default` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_json_get_by_path` ← `__json_value_module_MOD_json_get_string_by_path` (`src/json-fortran/src/json_get_scalar_by_path.inc`) ← `__json_file_module_MOD_json_file_get_string` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  1.6% |  794 KiB |  10,946 | `__json_value_module_MOD_parse_string` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`      |
|  1.5% |  743 KiB |  22,123 | `__json_value_module_MOD_parse_value` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`       |
|  1.3% |  653 KiB |  13,642 | `__json_value_module_MOD_parse_string` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_value` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`       |
|  1.0% |  497 KiB |   4,544 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main`                                                                            |
|  1.0% |  486 KiB |   4,441 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `_start`                                                                                                          |
|  0.8% |  407 KiB |   1,626 | `__json_value_module_MOD_parse_string` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `_start` ← `__json_value_module_MOD_parse_object` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object`                                                                |
|  0.8% |  392 KiB |      96 | `__json_string_utilities_MOD_string_to_integer` (`src/json-fortran/src/json_string_utilities.F90`) ← `__json_value_module_MOD_string_to_int` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_number` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                                                                     |
|  0.8% |  392 KiB |      96 | `__json_string_utilities_MOD_string_to_integer` (`src/json-fortran/src/json_string_utilities.F90`) ← `__json_value_module_MOD_string_to_int` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_number` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                                                                     |
|  0.8% |  383 KiB |   3,503 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `_start`                                                                                                                                                   |
|  0.8% |  374 KiB |   3,416 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main`                                   |
|  0.7% |  356 KiB |   3,251 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `_start`                                                                                                                                                                                            |
|  0.6% |  315 KiB |   2,880 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`  |
|  0.6% |  296 KiB |     592 | `__json_value_module_MOD_parse_string` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_value` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main`                                         |

## Retained heap

### Hottest functions

#### Self size

Functions ranked by bytes retained directly in the function body, excluding callees.

|     % |     Size | Samples | Function                                          | Location                                           |
| ----: | -------: | ------: | ------------------------------------------------- | -------------------------------------------------- |
| 68.3% |  611 KiB | 133,404 | `__json_value_module_MOD_json_value_create`       | `src/json-fortran/src/json_value_module.F90`       |
| 14.3% |  128 KiB |      34 | `__json_value_module_MOD_json_parse_file`         | `src/json-fortran/src/json_value_module.F90`       |
|  8.7% | 77.5 KiB |  41,437 | `__json_value_module_MOD_parse_value`             | `src/json-fortran/src/json_value_module.F90`       |
|  7.2% | 64.8 KiB | 122,261 | `__json_value_module_MOD_parse_object`            | `src/json-fortran/src/json_value_module.F90`       |
|  0.8% |  6.8 KiB |  19,115 | `__json_value_module_MOD_to_integer`              | `src/json-fortran/src/json_value_module.F90`       |
|  0.5% | 4.29 KiB |  26,216 | `__json_value_module_MOD_to_logical`              | `src/json-fortran/src/json_value_module.F90`       |
|  0.1% |    793 B |     100 | `MAIN__`                                          | `out/profile.f90`                                  |
|  0.1% |    760 B |  34,087 | `__json_string_utilities_MOD_string_to_integer`   | `src/json-fortran/src/json_string_utilities.F90`   |
| <0.1% |    269 B |      10 | `__json_value_module_MOD_json_initialize`         | `src/json-fortran/src/json_value_module.F90`       |
| <0.1% |    256 B |  64,240 | `__json_value_module_MOD_parse_string`            | `src/json-fortran/src/json_value_module.F90`       |
| <0.1% |     52 B |   7,769 | `__json_value_module_MOD_to_string`               | `src/json-fortran/src/json_value_module.F90`       |
| <0.1% |      3 B |       1 | `__json_value_module_MOD_json_prepare_parser`     | `src/json-fortran/src/json_value_module.F90`       |
| <0.1% |      1 B |      18 | `__json_value_module_MOD_json_get_string_by_path` | `src/json-fortran/src/json_get_scalar_by_path.inc` |

##### Lines

Lines ranked by contribution to each function's self size.

###### `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`)

|      % |    Size | Samples | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 611 KiB | 133,404 | `src/json-fortran/src/json_value_module.F90:2211` |

###### `__json_value_module_MOD_json_parse_file` (`src/json-fortran/src/json_value_module.F90`)

|      % |    Size | Samples | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 128 KiB |      29 | `src/json-fortran/src/json_value_module.F90:9770` |
|  <0.1% |    17 B |       5 | `src/json-fortran/src/json_value_module.F90:9786` |

###### `__json_value_module_MOD_parse_value` (`src/json-fortran/src/json_value_module.F90`)

|      % |     Size | Samples | Location                                           |
| -----: | -------: | ------: | -------------------------------------------------- |
| 100.0% | 77.5 KiB |  41,437 | `src/json-fortran/src/json_value_module.F90:10185` |

###### `__json_value_module_MOD_parse_object` (`src/json-fortran/src/json_value_module.F90`)

|      % |     Size | Samples | Location                                           |
| -----: | -------: | ------: | -------------------------------------------------- |
| 100.0% | 64.8 KiB | 122,261 | `src/json-fortran/src/json_value_module.F90:10922` |

###### `__json_value_module_MOD_to_integer` (`src/json-fortran/src/json_value_module.F90`)

|      % |    Size | Samples | Location                                           |
| -----: | ------: | ------: | -------------------------------------------------- |
| 100.0% | 6.8 KiB |  19,115 | `src/json-fortran/src/json_value_module.F90:10703` |

###### `__json_value_module_MOD_to_logical` (`src/json-fortran/src/json_value_module.F90`)

|      % |     Size | Samples | Location                                           |
| -----: | -------: | ------: | -------------------------------------------------- |
| 100.0% | 4.29 KiB |  26,216 | `src/json-fortran/src/json_value_module.F90:10672` |

###### `MAIN__` (`out/profile.f90`)

|     % |  Size | Samples | Location             |
| ----: | ----: | ------: | -------------------- |
| 95.8% | 760 B |      13 | `out/profile.f90:31` |
|  2.1% |  17 B |       4 | `out/profile.f90:23` |
|  2.0% |  16 B |       2 | `out/profile.f90:18` |
|  0.0% |   0 B |      81 | `out/profile.f90:32` |

###### `__json_string_utilities_MOD_string_to_integer` (`src/json-fortran/src/json_string_utilities.F90`)

|      % |  Size | Samples | Location                                             |
| -----: | ----: | ------: | ---------------------------------------------------- |
| 100.0% | 760 B |  13,054 | `src/json-fortran/src/json_string_utilities.F90:132` |
|   0.0% |   0 B |  19,935 | `src/json-fortran/src/json_string_utilities.F90:134` |
|   0.0% |   0 B |   1,098 | `src/json-fortran/src/json_string_utilities.F90:131` |

###### `__json_value_module_MOD_json_initialize` (`src/json-fortran/src/json_value_module.F90`)

|     % |  Size | Samples | Location                                          |
| ----: | ----: | ------: | ------------------------------------------------- |
| 95.2% | 256 B |       8 | `src/json-fortran/src/json_value_module.F90:1048` |
|  4.8% |  13 B |       2 | `src/json-fortran/src/json_value_module.F90:1196` |

###### `__json_value_module_MOD_parse_string` (`src/json-fortran/src/json_value_module.F90`)

|      % |  Size | Samples | Location                                           |
| -----: | ----: | ------: | -------------------------------------------------- |
| 100.0% | 256 B |  14,815 | `src/json-fortran/src/json_value_module.F90:11073` |
|   0.0% |   0 B |  48,684 | `src/json-fortran/src/json_value_module.F90:11122` |
|   0.0% |   0 B |     741 | `src/json-fortran/src/json_value_module.F90:11098` |

###### `__json_value_module_MOD_to_string` (`src/json-fortran/src/json_value_module.F90`)

|      % | Size | Samples | Location                                           |
| -----: | ---: | ------: | -------------------------------------------------- |
| 100.0% | 52 B |   7,769 | `src/json-fortran/src/json_value_module.F90:10800` |

###### `__json_value_module_MOD_json_prepare_parser` (`src/json-fortran/src/json_value_module.F90`)

|      % | Size | Samples | Location                                          |
| -----: | ---: | ------: | ------------------------------------------------- |
| 100.0% |  3 B |       1 | `src/json-fortran/src/json_value_module.F90:9680` |

###### `__json_value_module_MOD_json_get_string_by_path` (`src/json-fortran/src/json_get_scalar_by_path.inc`)

|      % | Size | Samples | Location                                             |
| -----: | ---: | ------: | ---------------------------------------------------- |
| 100.0% |  1 B |      18 | `src/json-fortran/src/json_get_scalar_by_path.inc:6` |

##### Callers

Callers ranked by contribution to each function's self size. Inlining can make caller attribution imprecise.

###### `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`)

|     % |     Size | Samples | Caller                                    | Location                                     |
| ----: | -------: | ------: | ----------------------------------------- | -------------------------------------------- |
| 95.7% |  584 KiB | 123,102 | `__json_value_module_MOD_parse_object`    | `src/json-fortran/src/json_value_module.F90` |
|  4.3% | 26.3 KiB |  10,299 | `__json_value_module_MOD_parse_array`     | `src/json-fortran/src/json_value_module.F90` |
| <0.1% |    112 B |       3 | `__json_value_module_MOD_json_parse_file` | `src/json-fortran/src/json_value_module.F90` |

###### `__json_value_module_MOD_json_parse_file` (`src/json-fortran/src/json_value_module.F90`)

|      % |    Size | Samples | Caller                                  | Location                                    |
| -----: | ------: | ------: | --------------------------------------- | ------------------------------------------- |
| 100.0% | 128 KiB |      34 | `__json_file_module_MOD_json_file_load` | `src/json-fortran/src/json_file_module.F90` |

###### `__json_value_module_MOD_parse_value` (`src/json-fortran/src/json_value_module.F90`)

|      % |     Size | Samples | Caller                                 | Location                                     |
| -----: | -------: | ------: | -------------------------------------- | -------------------------------------------- |
| 100.0% | 77.5 KiB |  41,437 | `__json_value_module_MOD_parse_object` | `src/json-fortran/src/json_value_module.F90` |

###### `__json_value_module_MOD_parse_object` (`src/json-fortran/src/json_value_module.F90`)

|     % |   Size | Samples | Caller                                    | Location                                     |
| ----: | -----: | ------: | ----------------------------------------- | -------------------------------------------- |
| 98.7% | 64 KiB | 119,928 | `__json_value_module_MOD_parse_object`    | `src/json-fortran/src/json_value_module.F90` |
|  1.2% |  824 B |   2,329 | `__json_value_module_MOD_parse_array`     | `src/json-fortran/src/json_value_module.F90` |
| <0.1% |    8 B |       4 | `__json_value_module_MOD_json_parse_file` | `src/json-fortran/src/json_value_module.F90` |

###### `__json_value_module_MOD_to_integer` (`src/json-fortran/src/json_value_module.F90`)

|      % |    Size | Samples | Caller                                 | Location                                     |
| -----: | ------: | ------: | -------------------------------------- | -------------------------------------------- |
| 100.0% | 6.8 KiB |  19,115 | `__json_value_module_MOD_parse_number` | `src/json-fortran/src/json_value_module.F90` |

###### `__json_value_module_MOD_to_logical` (`src/json-fortran/src/json_value_module.F90`)

|      % |     Size | Samples | Caller                                 | Location                                     |
| -----: | -------: | ------: | -------------------------------------- | -------------------------------------------- |
| 100.0% | 4.29 KiB |  26,216 | `__json_value_module_MOD_parse_object` | `src/json-fortran/src/json_value_module.F90` |

###### `MAIN__` (`out/profile.f90`)

|      % |  Size | Samples | Caller | Location          |
| -----: | ----: | ------: | ------ | ----------------- |
| 100.0% | 793 B |     100 | `main` | `out/profile.f90` |

###### `__json_string_utilities_MOD_string_to_integer` (`src/json-fortran/src/json_string_utilities.F90`)

|      % |  Size | Samples | Caller                                  | Location                                     |
| -----: | ----: | ------: | --------------------------------------- | -------------------------------------------- |
| 100.0% | 760 B |  32,572 | `__json_value_module_MOD_string_to_int` | `src/json-fortran/src/json_value_module.F90` |

###### `__json_value_module_MOD_json_initialize` (`src/json-fortran/src/json_value_module.F90`)

|      % |  Size | Samples | Caller                                                | Location                                    |
| -----: | ----: | ------: | ----------------------------------------------------- | ------------------------------------------- |
| 100.0% | 269 B |      10 | `__json_file_module_MOD_initialize_json_core_in_file` | `src/json-fortran/src/json_file_module.F90` |

###### `__json_value_module_MOD_parse_string` (`src/json-fortran/src/json_value_module.F90`)

|      % |  Size | Samples | Caller                                 | Location                                     |
| -----: | ----: | ------: | -------------------------------------- | -------------------------------------------- |
| 100.0% | 256 B |  37,465 | `__json_value_module_MOD_parse_object` | `src/json-fortran/src/json_value_module.F90` |

###### `__json_value_module_MOD_to_string` (`src/json-fortran/src/json_value_module.F90`)

|      % | Size | Samples | Caller                                | Location                                     |
| -----: | ---: | ------: | ------------------------------------- | -------------------------------------------- |
| 100.0% | 52 B |   7,769 | `__json_value_module_MOD_parse_value` | `src/json-fortran/src/json_value_module.F90` |

###### `__json_value_module_MOD_json_prepare_parser` (`src/json-fortran/src/json_value_module.F90`)

|      % | Size | Samples | Caller                                    | Location                                     |
| -----: | ---: | ------: | ----------------------------------------- | -------------------------------------------- |
| 100.0% |  3 B |       1 | `__json_value_module_MOD_json_parse_file` | `src/json-fortran/src/json_value_module.F90` |

###### `__json_value_module_MOD_json_get_string_by_path` (`src/json-fortran/src/json_get_scalar_by_path.inc`)

|      % | Size | Samples | Caller                                        | Location                                    |
| -----: | ---: | ------: | --------------------------------------------- | ------------------------------------------- |
| 100.0% |  1 B |      18 | `__json_file_module_MOD_json_file_get_string` | `src/json-fortran/src/json_file_module.F90` |

#### Total size

Functions ranked by total bytes retained in the function and all its callees.

|     % |     Size | Samples | Function                                              | Location                                         |
| ----: | -------: | ------: | ----------------------------------------------------- | ------------------------------------------------ |
| 85.6% |  766 KiB | 447,567 | `__json_value_module_MOD_parse_object`                | `src/json-fortran/src/json_value_module.F90`     |
| 68.3% |  611 KiB | 133,404 | `__json_value_module_MOD_json_value_create`           | `src/json-fortran/src/json_value_module.F90`     |
| 51.6% |  462 KiB | 184,850 | `__json_value_module_MOD_json_parse_file`             | `src/json-fortran/src/json_value_module.F90`     |
| 50.0% |  447 KiB | 177,529 | `__json_file_module_MOD_json_file_load`               | `src/json-fortran/src/json_file_module.F90`      |
| 48.5% |  433 KiB | 169,249 | `MAIN__`                                              | `out/profile.f90`                                |
| 46.6% |  417 KiB | 159,966 | `main`                                                | `out/profile.f90`                                |
| 45.6% |  408 KiB | 238,054 | `__json_value_module_MOD_parse_array`                 | `src/json-fortran/src/json_value_module.F90`     |
| 39.1% |  350 KiB | 125,670 | `_start`                                              | `<unknown>`                                      |
|  9.5% | 84.8 KiB |  77,828 | `__json_value_module_MOD_parse_value`                 | `src/json-fortran/src/json_value_module.F90`     |
|  1.1% | 9.78 KiB |  70,140 | `__json_value_module_MOD_parse_string`                | `src/json-fortran/src/json_value_module.F90`     |
|  0.8% | 7.55 KiB |  52,056 | `__json_value_module_MOD_parse_number`                | `src/json-fortran/src/json_value_module.F90`     |
|  0.8% |  6.8 KiB |  19,115 | `__json_value_module_MOD_to_integer`                  | `src/json-fortran/src/json_value_module.F90`     |
|  0.5% | 4.29 KiB |  26,216 | `__json_value_module_MOD_to_logical`                  | `src/json-fortran/src/json_value_module.F90`     |
|  0.1% |    776 B |  34,143 | `__json_string_utilities_MOD_string_to_integer`       | `src/json-fortran/src/json_string_utilities.F90` |
|  0.1% |    760 B |  32,572 | `__json_value_module_MOD_string_to_int`               | `src/json-fortran/src/json_value_module.F90`     |
| <0.1% |    448 B |     218 | `__json_value_module_MOD_pop_char.part.0`             | `src/json-fortran/src/json_value_module.F90`     |
| <0.1% |    269 B |      10 | `__json_value_module_MOD_json_initialize`             | `src/json-fortran/src/json_value_module.F90`     |
| <0.1% |    269 B |      10 | `__json_file_module_MOD_initialize_json_core_in_file` | `src/json-fortran/src/json_file_module.F90`      |
| <0.1% |     52 B |   7,769 | `__json_value_module_MOD_to_string`                   | `src/json-fortran/src/json_value_module.F90`     |
| <0.1% |      3 B |       1 | `__json_value_module_MOD_json_prepare_parser`         | `src/json-fortran/src/json_value_module.F90`     |

##### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

###### `__json_value_module_MOD_parse_object` (`src/json-fortran/src/json_value_module.F90`)

|     % |     Size | Samples | Callee                                      | Location                                     |
| ----: | -------: | ------: | ------------------------------------------- | -------------------------------------------- |
| 98.7% |  756 KiB | 444,512 | `__json_value_module_MOD_parse_object`      | `src/json-fortran/src/json_value_module.F90` |
| 76.3% |  584 KiB | 123,102 | `__json_value_module_MOD_json_value_create` | `src/json-fortran/src/json_value_module.F90` |
| 52.2% |  400 KiB | 231,061 | `__json_value_module_MOD_parse_array`       | `src/json-fortran/src/json_value_module.F90` |
| 10.1% | 77.5 KiB |  76,160 | `__json_value_module_MOD_parse_value`       | `src/json-fortran/src/json_value_module.F90` |
|  4.1% |   31 KiB |  41,050 | `_start`                                    | `<unknown>`                                  |

###### `__json_value_module_MOD_json_parse_file` (`src/json-fortran/src/json_value_module.F90`)

|     % |     Size | Samples | Callee                                        | Location                                     |
| ----: | -------: | ------: | --------------------------------------------- | -------------------------------------------- |
| 72.2% |  333 KiB | 184,812 | `__json_value_module_MOD_parse_object`        | `src/json-fortran/src/json_value_module.F90` |
|  1.8% | 8.27 KiB |   1,611 | `_start`                                      | `<unknown>`                                  |
| <0.1% |    112 B |       3 | `__json_value_module_MOD_json_value_create`   | `src/json-fortran/src/json_value_module.F90` |
| <0.1% |      3 B |       1 | `__json_value_module_MOD_json_prepare_parser` | `src/json-fortran/src/json_value_module.F90` |

###### `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`)

|      % |     Size | Samples | Callee                                    | Location                                     |
| -----: | -------: | ------: | ----------------------------------------- | -------------------------------------------- |
| 100.0% |  447 KiB | 177,529 | `__json_value_module_MOD_json_parse_file` | `src/json-fortran/src/json_value_module.F90` |
|   1.0% | 4.27 KiB |   1,044 | `_start`                                  | `<unknown>`                                  |

###### `MAIN__` (`out/profile.f90`)

|     % |    Size | Samples | Callee                                                | Location                                    |
| ----: | ------: | ------: | ----------------------------------------------------- | ------------------------------------------- |
| 99.8% | 432 KiB | 166,709 | `__json_file_module_MOD_json_file_load`               | `src/json-fortran/src/json_file_module.F90` |
|  0.1% |   269 B |      10 | `__json_file_module_MOD_initialize_json_core_in_file` | `src/json-fortran/src/json_file_module.F90` |
| <0.1% |    96 B |       9 | `_start`                                              | `<unknown>`                                 |
| <0.1% |     1 B |   2,430 | `__json_file_module_MOD_json_file_get_string`         | `src/json-fortran/src/json_file_module.F90` |

###### `main` (`out/profile.f90`)

|      % |     Size | Samples | Callee   | Location          |
| -----: | -------: | ------: | -------- | ----------------- |
| 100.0% |  417 KiB | 159,966 | `MAIN__` | `out/profile.f90` |
|   2.0% | 8.42 KiB |   1,865 | `_start` | `<unknown>`       |

###### `__json_value_module_MOD_parse_array` (`src/json-fortran/src/json_value_module.F90`)

|     % |     Size | Samples | Callee                                      | Location                                     |
| ----: | -------: | ------: | ------------------------------------------- | -------------------------------------------- |
| 98.5% |  402 KiB | 234,235 | `__json_value_module_MOD_parse_object`      | `src/json-fortran/src/json_value_module.F90` |
|  6.4% | 26.3 KiB |  10,299 | `__json_value_module_MOD_json_value_create` | `src/json-fortran/src/json_value_module.F90` |
|  0.3% | 1.05 KiB |  11,960 | `__json_value_module_MOD_parse_number`      | `src/json-fortran/src/json_value_module.F90` |
| <0.1% |    188 B |   1,171 | `_start`                                    | `<unknown>`                                  |

###### `_start` (`<unknown>`)

|      % |    Size | Samples | Callee   | Location          |
| -----: | ------: | ------: | -------- | ----------------- |
| 100.0% | 350 KiB | 125,670 | `main`   | `out/profile.f90` |
|  36.6% | 128 KiB |     417 | `_start` | `<unknown>`       |

###### `__json_value_module_MOD_parse_value` (`src/json-fortran/src/json_value_module.F90`)

|    % |     Size | Samples | Callee                              | Location                                     |
| ---: | -------: | ------: | ----------------------------------- | -------------------------------------------- |
| 8.5% | 7.22 KiB |   1,668 | `_start`                            | `<unknown>`                                  |
| 0.1% |     52 B |   7,769 | `__json_value_module_MOD_to_string` | `src/json-fortran/src/json_value_module.F90` |

###### `__json_value_module_MOD_parse_string` (`src/json-fortran/src/json_value_module.F90`)

|     % |     Size | Samples | Callee   | Location    |
| ----: | -------: | ------: | -------- | ----------- |
| 97.4% | 9.53 KiB |   6,660 | `_start` | `<unknown>` |

###### `__json_value_module_MOD_parse_number` (`src/json-fortran/src/json_value_module.F90`)

|     % |    Size | Samples | Callee                                  | Location                                     |
| ----: | ------: | ------: | --------------------------------------- | -------------------------------------------- |
| 90.2% | 6.8 KiB |  19,115 | `__json_value_module_MOD_to_integer`    | `src/json-fortran/src/json_value_module.F90` |
|  9.8% |   760 B |  32,572 | `__json_value_module_MOD_string_to_int` | `src/json-fortran/src/json_value_module.F90` |

###### `__json_string_utilities_MOD_string_to_integer` (`src/json-fortran/src/json_string_utilities.F90`)

|    % | Size | Samples | Callee   | Location    |
| ---: | ---: | ------: | -------- | ----------- |
| 2.1% | 16 B |      56 | `_start` | `<unknown>` |

###### `__json_value_module_MOD_string_to_int` (`src/json-fortran/src/json_value_module.F90`)

|      % |  Size | Samples | Callee                                          | Location                                         |
| -----: | ----: | ------: | ----------------------------------------------- | ------------------------------------------------ |
| 100.0% | 760 B |  32,572 | `__json_string_utilities_MOD_string_to_integer` | `src/json-fortran/src/json_string_utilities.F90` |

###### `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`)

|      % |  Size | Samples | Callee   | Location    |
| -----: | ----: | ------: | -------- | ----------- |
| 100.0% | 448 B |     217 | `_start` | `<unknown>` |

###### `__json_file_module_MOD_initialize_json_core_in_file` (`src/json-fortran/src/json_file_module.F90`)

|      % |  Size | Samples | Callee                                    | Location                                     |
| -----: | ----: | ------: | ----------------------------------------- | -------------------------------------------- |
| 100.0% | 269 B |      10 | `__json_value_module_MOD_json_initialize` | `src/json-fortran/src/json_value_module.F90` |

### Hottest call stacks

Call stacks ranked by bytes retained in their leaf frame.

|     % |     Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ----: | -------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 31.5% |  282 KiB |  60,816 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                                        |
| 14.3% |  128 KiB |      10 | `__json_value_module_MOD_json_parse_file` (`src/json-fortran/src/json_value_module.F90`) ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `_start` ← `_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  4.2% | 37.6 KiB |  59,189 | `__json_value_module_MOD_parse_object` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                                             |
|  3.5% | 31.6 KiB |  22,123 | `__json_value_module_MOD_parse_value` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                                              |
|  2.3% | 20.6 KiB |   4,544 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main`                                                                                                                   |
|  2.3% | 20.1 KiB |   4,441 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `_start`                                                                                                                                                 |
|  1.8% |   16 KiB |   3,503 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `_start`                                                                                                                                                                                          |
|  1.7% | 15.3 KiB |   3,416 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main`                                                                          |
|  1.7% |   15 KiB |   3,251 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `_start`                                                                                                                                                                                                                                   |
|  1.3% | 11.7 KiB |   2,564 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `_start`                                                                                                                                                                                                                                                                            |
|  1.3% | 11.3 KiB |   2,389 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main`                                 |
|  1.2% | 10.5 KiB |     876 | `__json_value_module_MOD_parse_value` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main`                                                                                                                         |
|  1.0% | 9.33 KiB |     752 | `__json_value_module_MOD_parse_value` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  1.0% | 8.53 KiB |   1,716 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                                          |
|  1.0% | 8.53 KiB |   1,833 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  1.0% | 8.53 KiB |   1,876 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `_start` ← `__json_value_module_MOD_parse_string` (`src/json-fortran/src/json_value_module.F90`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  1.0% | 8.53 KiB |   1,878 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `_start`                                                                                                                                                                                                                                                                                                                     |
|  1.0% | 8.53 KiB |   1,878 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `_start` ← `__json_value_module_MOD_parse_object` (`src/json-fortran/src/json_value_module.F90`)                                                                                                                                                                                                                                                                                                               |
|  1.0% | 8.53 KiB |   1,878 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `_start` ← `__json_value_module_MOD_parse_object` (`src/json-fortran/src/json_value_module.F90`)                                                                                                                                                                                                                                                                      |
|  0.9% | 7.88 KiB |   1,665 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) |
