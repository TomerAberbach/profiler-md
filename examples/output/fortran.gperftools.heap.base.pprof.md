# Allocated heap profile

Allocated 47.7 MiB over 450,137 objects (111 B per object).

| Category |     % |     Size | Objects |
| -------- | ----: | -------: | ------: |
| Native   | 51.8% | 24.7 MiB |  26,381 |
| Ours     | 48.2% |   23 MiB | 423,756 |

## Hottest functions

### Self size

Functions ranked by bytes allocated directly in the function body, excluding callees.

|     % |     Size | Objects | Function                                          | Location                                           |
| ----: | -------: | ------: | ------------------------------------------------- | -------------------------------------------------- |
| 51.2% | 24.4 MiB |  16,403 | `0x1c1b3`                                         | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`   |
| 29.9% | 14.2 MiB | 133,404 | `__json_value_module_MOD_json_value_create`       | `src/json-fortran/src/json_value_module.F90`       |
| 10.2% | 4.88 MiB |  64,240 | `__json_value_module_MOD_parse_string`            | `src/json-fortran/src/json_value_module.F90`       |
|  3.7% | 1.77 MiB |  41,437 | `__json_value_module_MOD_parse_value`             | `src/json-fortran/src/json_value_module.F90`       |
|  3.0% | 1.44 MiB | 122,261 | `__json_value_module_MOD_parse_object`            | `src/json-fortran/src/json_value_module.F90`       |
|  0.6% |  282 KiB |   2,937 | `0x1c24b`                                         | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`   |
|  0.6% |  269 KiB |     897 | `__json_value_module_MOD_json_get_string`         | `src/json-fortran/src/json_value_module.F90`       |
|  0.3% |  149 KiB |  19,115 | `__json_value_module_MOD_to_integer`              | `src/json-fortran/src/json_value_module.F90`       |
|  0.2% |  102 KiB |  26,216 | `__json_value_module_MOD_to_logical`              | `src/json-fortran/src/json_value_module.F90`       |
|  0.2% |   90 KiB |     360 | `__json_value_module_MOD_parse_number`            | `src/json-fortran/src/json_value_module.F90`       |
|  0.1% | 25.2 KiB |   7,763 | `__json_string_utilities_MOD_string_to_integer`   | `src/json-fortran/src/json_string_utilities.F90`   |
| <0.1% | 21.4 KiB |   4,336 | `0x9980f`                                         | `usr/lib/aarch64-linux-gnu/libc.so.6`              |
| <0.1% | 19.1 KiB |     178 | `__json_string_utilities_MOD_unescape_string`     | `src/json-fortran/src/json_string_utilities.F90`   |
| <0.1% | 7.59 KiB |   7,769 | `__json_value_module_MOD_to_string`               | `src/json-fortran/src/json_value_module.F90`       |
| <0.1% | 2.72 KiB |   2,705 | `0x1c1f3`                                         | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`   |
| <0.1% | 2.02 KiB |      10 | `__json_value_module_MOD_json_initialize`         | `src/json-fortran/src/json_value_module.F90`       |
| <0.1% |    810 B |      81 | `MAIN__`                                          | `out/profile.f90`                                  |
| <0.1% |    245 B |       1 | `__json_value_module_MOD_pop_char.part.0`         | `src/json-fortran/src/json_value_module.F90`       |
| <0.1% |     85 B |       5 | `__json_value_module_MOD_json_parse_file`         | `src/json-fortran/src/json_value_module.F90`       |
| <0.1% |     18 B |      18 | `__json_value_module_MOD_json_get_string_by_path` | `src/json-fortran/src/json_get_scalar_by_path.inc` |

#### Categories

##### Native

|     % |     Size | Objects | Function  | Location                                         |
| ----: | -------: | ------: | --------- | ------------------------------------------------ |
| 51.2% | 24.4 MiB |  16,403 | `0x1c1b3` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  0.6% |  282 KiB |   2,937 | `0x1c24b` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| <0.1% | 21.4 KiB |   4,336 | `0x9980f` | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| <0.1% | 2.72 KiB |   2,705 | `0x1c1f3` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### Ours

|     % |     Size | Objects | Function                                          | Location                                           |
| ----: | -------: | ------: | ------------------------------------------------- | -------------------------------------------------- |
| 29.9% | 14.2 MiB | 133,404 | `__json_value_module_MOD_json_value_create`       | `src/json-fortran/src/json_value_module.F90`       |
| 10.2% | 4.88 MiB |  64,240 | `__json_value_module_MOD_parse_string`            | `src/json-fortran/src/json_value_module.F90`       |
|  3.7% | 1.77 MiB |  41,437 | `__json_value_module_MOD_parse_value`             | `src/json-fortran/src/json_value_module.F90`       |
|  3.0% | 1.44 MiB | 122,261 | `__json_value_module_MOD_parse_object`            | `src/json-fortran/src/json_value_module.F90`       |
|  0.6% |  269 KiB |     897 | `__json_value_module_MOD_json_get_string`         | `src/json-fortran/src/json_value_module.F90`       |
|  0.3% |  149 KiB |  19,115 | `__json_value_module_MOD_to_integer`              | `src/json-fortran/src/json_value_module.F90`       |
|  0.2% |  102 KiB |  26,216 | `__json_value_module_MOD_to_logical`              | `src/json-fortran/src/json_value_module.F90`       |
|  0.2% |   90 KiB |     360 | `__json_value_module_MOD_parse_number`            | `src/json-fortran/src/json_value_module.F90`       |
|  0.1% | 25.2 KiB |   7,763 | `__json_string_utilities_MOD_string_to_integer`   | `src/json-fortran/src/json_string_utilities.F90`   |
| <0.1% | 19.1 KiB |     178 | `__json_string_utilities_MOD_unescape_string`     | `src/json-fortran/src/json_string_utilities.F90`   |
| <0.1% | 7.59 KiB |   7,769 | `__json_value_module_MOD_to_string`               | `src/json-fortran/src/json_value_module.F90`       |
| <0.1% | 2.02 KiB |      10 | `__json_value_module_MOD_json_initialize`         | `src/json-fortran/src/json_value_module.F90`       |
| <0.1% |    810 B |      81 | `MAIN__`                                          | `out/profile.f90`                                  |
| <0.1% |    245 B |       1 | `__json_value_module_MOD_pop_char.part.0`         | `src/json-fortran/src/json_value_module.F90`       |
| <0.1% |     85 B |       5 | `__json_value_module_MOD_json_parse_file`         | `src/json-fortran/src/json_value_module.F90`       |
| <0.1% |     18 B |      18 | `__json_value_module_MOD_json_get_string_by_path` | `src/json-fortran/src/json_get_scalar_by_path.inc` |
| <0.1% |      3 B |       1 | `__json_value_module_MOD_json_prepare_parser`     | `src/json-fortran/src/json_value_module.F90`       |

#### Lines

Lines ranked by contribution to each function's self size.

##### `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`)

|      % |     Size | Objects | Location                                          |
| -----: | -------: | ------: | ------------------------------------------------- |
| 100.0% | 14.2 MiB | 133,404 | `src/json-fortran/src/json_value_module.F90:2211` |

##### `__json_value_module_MOD_parse_string` (`src/json-fortran/src/json_value_module.F90`)

|     % |     Size | Objects | Location                                           |
| ----: | -------: | ------: | -------------------------------------------------- |
| 74.2% | 3.62 MiB |  14,815 | `src/json-fortran/src/json_value_module.F90:11073` |
| 18.4% |  920 KiB |  48,684 | `src/json-fortran/src/json_value_module.F90:11122` |
|  7.4% |  371 KiB |     741 | `src/json-fortran/src/json_value_module.F90:11098` |

##### `__json_value_module_MOD_parse_value` (`src/json-fortran/src/json_value_module.F90`)

|      % |     Size | Objects | Location                                           |
| -----: | -------: | ------: | -------------------------------------------------- |
| 100.0% | 1.77 MiB |  41,437 | `src/json-fortran/src/json_value_module.F90:10185` |

##### `__json_value_module_MOD_parse_object` (`src/json-fortran/src/json_value_module.F90`)

|      % |     Size | Objects | Location                                           |
| -----: | -------: | ------: | -------------------------------------------------- |
| 100.0% | 1.44 MiB | 122,261 | `src/json-fortran/src/json_value_module.F90:10922` |

##### `__json_value_module_MOD_json_get_string` (`src/json-fortran/src/json_value_module.F90`)

|      % |    Size | Objects | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 269 KiB |     897 | `src/json-fortran/src/json_value_module.F90:9094` |

##### `__json_value_module_MOD_to_integer` (`src/json-fortran/src/json_value_module.F90`)

|      % |    Size | Objects | Location                                           |
| -----: | ------: | ------: | -------------------------------------------------- |
| 100.0% | 149 KiB |  19,115 | `src/json-fortran/src/json_value_module.F90:10703` |

##### `__json_value_module_MOD_to_logical` (`src/json-fortran/src/json_value_module.F90`)

|      % |    Size | Objects | Location                                           |
| -----: | ------: | ------: | -------------------------------------------------- |
| 100.0% | 102 KiB |  26,216 | `src/json-fortran/src/json_value_module.F90:10672` |

##### `__json_value_module_MOD_parse_number` (`src/json-fortran/src/json_value_module.F90`)

|      % |   Size | Objects | Location                                           |
| -----: | -----: | ------: | -------------------------------------------------- |
| 100.0% | 90 KiB |     360 | `src/json-fortran/src/json_value_module.F90:11216` |

##### `__json_string_utilities_MOD_string_to_integer` (`src/json-fortran/src/json_string_utilities.F90`)

|     % |     Size | Objects | Location                                             |
| ----: | -------: | ------: | ---------------------------------------------------- |
| 93.8% | 23.6 KiB |   6,665 | `src/json-fortran/src/json_string_utilities.F90:134` |
|  6.2% | 1.57 KiB |   1,098 | `src/json-fortran/src/json_string_utilities.F90:131` |

##### `__json_string_utilities_MOD_unescape_string` (`src/json-fortran/src/json_string_utilities.F90`)

|      % |     Size | Objects | Location                                             |
| -----: | -------: | ------: | ---------------------------------------------------- |
| 100.0% | 19.1 KiB |     178 | `src/json-fortran/src/json_string_utilities.F90:506` |

##### `__json_value_module_MOD_to_string` (`src/json-fortran/src/json_value_module.F90`)

|      % |     Size | Objects | Location                                           |
| -----: | -------: | ------: | -------------------------------------------------- |
| 100.0% | 7.59 KiB |   7,769 | `src/json-fortran/src/json_value_module.F90:10800` |

##### `__json_value_module_MOD_json_initialize` (`src/json-fortran/src/json_value_module.F90`)

|     % |  Size | Objects | Location                                          |
| ----: | ----: | ------: | ------------------------------------------------- |
| 98.8% | 2 KiB |       8 | `src/json-fortran/src/json_value_module.F90:1048` |
|  1.2% |  24 B |       2 | `src/json-fortran/src/json_value_module.F90:1196` |

##### `MAIN__` (`out/profile.f90`)

|      % |  Size | Objects | Location             |
| -----: | ----: | ------: | -------------------- |
| 100.0% | 810 B |      81 | `out/profile.f90:32` |

##### `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`)

|      % |  Size | Objects | Location                                           |
| -----: | ----: | ------: | -------------------------------------------------- |
| 100.0% | 245 B |       1 | `src/json-fortran/src/json_value_module.F90:11383` |

##### `__json_value_module_MOD_json_parse_file` (`src/json-fortran/src/json_value_module.F90`)

|      % | Size | Objects | Location                                          |
| -----: | ---: | ------: | ------------------------------------------------- |
| 100.0% | 85 B |       5 | `src/json-fortran/src/json_value_module.F90:9786` |

##### `__json_value_module_MOD_json_get_string_by_path` (`src/json-fortran/src/json_get_scalar_by_path.inc`)

|      % | Size | Objects | Location                                             |
| -----: | ---: | ------: | ---------------------------------------------------- |
| 100.0% | 18 B |      18 | `src/json-fortran/src/json_get_scalar_by_path.inc:6` |

##### `__json_value_module_MOD_json_prepare_parser` (`src/json-fortran/src/json_value_module.F90`)

|      % | Size | Objects | Location                                          |
| -----: | ---: | ------: | ------------------------------------------------- |
| 100.0% |  3 B |       1 | `src/json-fortran/src/json_value_module.F90:9680` |

#### Callers

Callers ranked by contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `0x1c1b3` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|     % |     Size | Objects | Caller     | Location                                         |
| ----: | -------: | ------: | ---------- | ------------------------------------------------ |
| 91.5% | 22.3 MiB |   5,602 | `0xfa6bf`  | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  5.1% | 1.25 MiB |      10 | `0x10be83` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  2.7% |  685 KiB |   5,480 | `0x112ecb` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  0.7% |  166 KiB |   5,311 | `0x112ebb` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`)

|     % |     Size | Objects | Caller                                    | Location                                     |
| ----: | -------: | ------: | ----------------------------------------- | -------------------------------------------- |
| 92.3% | 13.1 MiB | 123,102 | `__json_value_module_MOD_parse_object`    | `src/json-fortran/src/json_value_module.F90` |
|  7.7% |  1.1 MiB |  10,299 | `__json_value_module_MOD_parse_array`     | `src/json-fortran/src/json_value_module.F90` |
| <0.1% |    336 B |       3 | `__json_value_module_MOD_json_parse_file` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_parse_string` (`src/json-fortran/src/json_value_module.F90`)

|     % |     Size | Objects | Caller                                 | Location                                     |
| ----: | -------: | ------: | -------------------------------------- | -------------------------------------------- |
| 51.8% | 2.53 MiB |  37,465 | `__json_value_module_MOD_parse_object` | `src/json-fortran/src/json_value_module.F90` |
| 48.2% | 2.35 MiB |  26,775 | `__json_value_module_MOD_parse_value`  | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_parse_value` (`src/json-fortran/src/json_value_module.F90`)

|      % |     Size | Objects | Caller                                 | Location                                     |
| -----: | -------: | ------: | -------------------------------------- | -------------------------------------------- |
| 100.0% | 1.77 MiB |  41,437 | `__json_value_module_MOD_parse_object` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_parse_object` (`src/json-fortran/src/json_value_module.F90`)

|     % |     Size | Objects | Caller                                    | Location                                     |
| ----: | -------: | ------: | ----------------------------------------- | -------------------------------------------- |
| 98.8% | 1.42 MiB | 119,928 | `__json_value_module_MOD_parse_object`    | `src/json-fortran/src/json_value_module.F90` |
|  1.2% | 18.1 KiB |   2,329 | `__json_value_module_MOD_parse_array`     | `src/json-fortran/src/json_value_module.F90` |
| <0.1% |     32 B |       4 | `__json_value_module_MOD_json_parse_file` | `src/json-fortran/src/json_value_module.F90` |

##### `0x1c24b` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|     % |     Size | Objects | Caller     | Location                                         |
| ----: | -------: | ------: | ---------- | ------------------------------------------------ |
| 97.1% |  273 KiB |   2,917 | `0x10c847` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  2.6% | 7.42 KiB |      10 | `0x10a85b` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  0.3% |    864 B |       9 | `0x10bd7b` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| <0.1% |     16 B |       1 | `0x10b1fb` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `__json_value_module_MOD_json_get_string` (`src/json-fortran/src/json_value_module.F90`)

|      % |    Size | Objects | Caller                                            | Location                                           |
| -----: | ------: | ------: | ------------------------------------------------- | -------------------------------------------------- |
| 100.0% | 269 KiB |     897 | `__json_value_module_MOD_json_get_string_by_path` | `src/json-fortran/src/json_get_scalar_by_path.inc` |

##### `__json_value_module_MOD_to_integer` (`src/json-fortran/src/json_value_module.F90`)

|      % |    Size | Objects | Caller                                 | Location                                     |
| -----: | ------: | ------: | -------------------------------------- | -------------------------------------------- |
| 100.0% | 149 KiB |  19,115 | `__json_value_module_MOD_parse_number` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_to_logical` (`src/json-fortran/src/json_value_module.F90`)

|      % |    Size | Objects | Caller                                 | Location                                     |
| -----: | ------: | ------: | -------------------------------------- | -------------------------------------------- |
| 100.0% | 102 KiB |  26,216 | `__json_value_module_MOD_parse_object` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_parse_number` (`src/json-fortran/src/json_value_module.F90`)

|     % |   Size | Objects | Caller                                 | Location                                     |
| ----: | -----: | ------: | -------------------------------------- | -------------------------------------------- |
| 90.0% | 81 KiB |     324 | `__json_value_module_MOD_parse_object` | `src/json-fortran/src/json_value_module.F90` |
| 10.0% |  9 KiB |      36 | `__json_value_module_MOD_parse_array`  | `src/json-fortran/src/json_value_module.F90` |

##### `__json_string_utilities_MOD_string_to_integer` (`src/json-fortran/src/json_string_utilities.F90`)

|      % |     Size | Objects | Caller                                             | Location                                     |
| -----: | -------: | ------: | -------------------------------------------------- | -------------------------------------------- |
| 100.0% | 25.2 KiB |   7,761 | `__json_value_module_MOD_string_to_int`            | `src/json-fortran/src/json_value_module.F90` |
|  <0.1% |      2 B |       2 | `__json_value_module_MOD_json_get_by_path_default` | `src/json-fortran/src/json_value_module.F90` |

##### `0x9980f` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |     Size | Objects | Caller    | Location                                         |
| ----: | -------: | ------: | --------- | ------------------------------------------------ |
| 99.2% | 21.3 KiB |   4,326 | `0x1c42b` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  0.8% |    180 B |      10 | `0x1c3fb` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `__json_string_utilities_MOD_unescape_string` (`src/json-fortran/src/json_string_utilities.F90`)

|      % |     Size | Objects | Caller                                 | Location                                     |
| -----: | -------: | ------: | -------------------------------------- | -------------------------------------------- |
| 100.0% | 19.1 KiB |     178 | `__json_value_module_MOD_parse_string` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_to_string` (`src/json-fortran/src/json_value_module.F90`)

|      % |     Size | Objects | Caller                                | Location                                     |
| -----: | -------: | ------: | ------------------------------------- | -------------------------------------------- |
| 100.0% | 7.59 KiB |   7,769 | `__json_value_module_MOD_parse_value` | `src/json-fortran/src/json_value_module.F90` |

##### `0x1c1f3` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|      % |     Size | Objects | Caller     | Location                                         |
| -----: | -------: | ------: | ---------- | ------------------------------------------------ |
| 100.0% | 2.72 KiB |   2,705 | `0x118783` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `__json_value_module_MOD_json_initialize` (`src/json-fortran/src/json_value_module.F90`)

|      % |     Size | Objects | Caller                                                | Location                                    |
| -----: | -------: | ------: | ----------------------------------------------------- | ------------------------------------------- |
| 100.0% | 2.02 KiB |      10 | `__json_file_module_MOD_initialize_json_core_in_file` | `src/json-fortran/src/json_file_module.F90` |

##### `MAIN__` (`out/profile.f90`)

|      % |  Size | Objects | Caller | Location          |
| -----: | ----: | ------: | ------ | ----------------- |
| 100.0% | 810 B |      81 | `main` | `out/profile.f90` |

##### `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`)

|      % |  Size | Objects | Caller                                 | Location                                     |
| -----: | ----: | ------: | -------------------------------------- | -------------------------------------------- |
| 100.0% | 245 B |       1 | `__json_value_module_MOD_parse_string` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_json_parse_file` (`src/json-fortran/src/json_value_module.F90`)

|      % | Size | Objects | Caller                                  | Location                                    |
| -----: | ---: | ------: | --------------------------------------- | ------------------------------------------- |
| 100.0% | 85 B |       5 | `__json_file_module_MOD_json_file_load` | `src/json-fortran/src/json_file_module.F90` |

##### `__json_value_module_MOD_json_get_string_by_path` (`src/json-fortran/src/json_get_scalar_by_path.inc`)

|      % | Size | Objects | Caller                                        | Location                                    |
| -----: | ---: | ------: | --------------------------------------------- | ------------------------------------------- |
| 100.0% | 18 B |      18 | `__json_file_module_MOD_json_file_get_string` | `src/json-fortran/src/json_file_module.F90` |

##### `__json_value_module_MOD_json_prepare_parser` (`src/json-fortran/src/json_value_module.F90`)

|      % | Size | Objects | Caller                                    | Location                                     |
| -----: | ---: | ------: | ----------------------------------------- | -------------------------------------------- |
| 100.0% |  3 B |       1 | `__json_value_module_MOD_json_parse_file` | `src/json-fortran/src/json_value_module.F90` |

### Total size

Functions ranked by total bytes allocated in the function and all its callees.

|     % |     Size | Objects | Function                                        | Location                                         |
| ----: | -------: | ------: | ----------------------------------------------- | ------------------------------------------------ |
| 95.1% | 45.3 MiB | 447,567 | `__json_value_module_MOD_parse_object`          | `src/json-fortran/src/json_value_module.F90`     |
| 51.2% | 24.4 MiB |  16,403 | `0x1c1b3`                                       | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| 49.2% | 23.4 MiB |  34,143 | `__json_string_utilities_MOD_string_to_integer` | `src/json-fortran/src/json_string_utilities.F90` |
| 47.9% | 22.9 MiB |  52,056 | `__json_value_module_MOD_parse_number`          | `src/json-fortran/src/json_value_module.F90`     |
| 47.5% | 22.6 MiB |  32,572 | `__json_value_module_MOD_string_to_int`         | `src/json-fortran/src/json_value_module.F90`     |
| 46.8% | 22.3 MiB |   9,928 | `0x109623`                                      | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| 46.8% | 22.3 MiB |   5,602 | `0xfa6bf`                                       | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| 35.2% | 16.8 MiB | 238,054 | `__json_value_module_MOD_parse_array`           | `src/json-fortran/src/json_value_module.F90`     |
| 29.9% | 14.2 MiB | 133,404 | `__json_value_module_MOD_json_value_create`     | `src/json-fortran/src/json_value_module.F90`     |
| 28.1% | 13.4 MiB | 169,249 | `MAIN__`                                        | `out/profile.f90`                                |
| 27.9% | 13.3 MiB | 184,850 | `__json_value_module_MOD_json_parse_file`       | `src/json-fortran/src/json_value_module.F90`     |
| 27.3% |   13 MiB | 159,966 | `main`                                          | `out/profile.f90`                                |
| 27.2% | 12.9 MiB | 177,529 | `__json_file_module_MOD_json_file_load`         | `src/json-fortran/src/json_file_module.F90`      |
| 25.8% | 12.3 MiB | 149,037 | `0x27743`                                       | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| 23.6% | 11.3 MiB | 138,003 | `0x27817`                                       | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| 21.8% | 10.4 MiB | 125,670 | `_start`                                        | `<unknown>`                                      |
| 10.7% | 5.12 MiB |  70,140 | `__json_value_module_MOD_parse_string`          | `src/json-fortran/src/json_value_module.F90`     |
|  9.1% | 4.32 MiB |  77,828 | `__json_value_module_MOD_parse_value`           | `src/json-fortran/src/json_value_module.F90`     |
|  2.6% | 1.25 MiB |      29 | `0x10324b`                                      | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  2.6% | 1.25 MiB |      19 | `0x1029eb`                                      | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

#### Categories

##### Native

|     % |     Size | Objects | Function             | Location                                          |
| ----: | -------: | ------: | -------------------- | ------------------------------------------------- |
| 51.2% | 24.4 MiB |  16,403 | `0x1c1b3`            | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`  |
| 46.8% | 22.3 MiB |   9,928 | `0x109623`           | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`  |
| 46.8% | 22.3 MiB |   5,602 | `0xfa6bf`            | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`  |
| 25.8% | 12.3 MiB | 149,037 | `0x27743`            | `usr/lib/aarch64-linux-gnu/libc.so.6`             |
| 23.6% | 11.3 MiB | 138,003 | `0x27817`            | `usr/lib/aarch64-linux-gnu/libc.so.6`             |
| 21.8% | 10.4 MiB | 125,670 | `_start`             | `<unknown>`                                       |
|  2.6% | 1.25 MiB |      29 | `0x10324b`           | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`  |
|  2.6% | 1.25 MiB |      19 | `0x1029eb`           | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`  |
|  2.6% | 1.25 MiB |      10 | `0x10be83`           | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`  |
|  2.6% | 1.24 MiB |     323 | `0x4`                | `<unknown>`                                       |
|  2.3% | 1.11 MiB |  13,719 | `0x1093fb`           | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`  |
|  1.9% |  911 KiB |  16,985 | `0xffffffffffffffff` | `<unknown>`                                       |
|  1.7% |  851 KiB |  10,791 | `0x10b28f`           | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`  |
|  1.5% |  755 KiB |   3,531 | `0x2b167`            | `usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10` |
|  1.4% |  685 KiB |   5,480 | `0x112ecb`           | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`  |
|  1.0% |  501 KiB |   2,846 | `0x39387`            | `usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10` |
|  1.0% |  481 KiB |   2,844 | `0x3143b`            | `usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10` |
|  1.0% |  478 KiB |   3,051 | `0xffffac67003f`     | `<unknown>`                                       |
|  1.0% |  465 KiB |     119 | `0x5`                | `<unknown>`                                       |
|  0.8% |  412 KiB |     101 | `0xaaab08154ba7`     | `<unknown>`                                       |

##### Ours

|     % |     Size | Objects | Function                                           | Location                                                                       |
| ----: | -------: | ------: | -------------------------------------------------- | ------------------------------------------------------------------------------ |
| 95.1% | 45.3 MiB | 447,567 | `__json_value_module_MOD_parse_object`             | `src/json-fortran/src/json_value_module.F90`                                   |
| 49.2% | 23.4 MiB |  34,143 | `__json_string_utilities_MOD_string_to_integer`    | `src/json-fortran/src/json_string_utilities.F90`                               |
| 47.9% | 22.9 MiB |  52,056 | `__json_value_module_MOD_parse_number`             | `src/json-fortran/src/json_value_module.F90`                                   |
| 47.5% | 22.6 MiB |  32,572 | `__json_value_module_MOD_string_to_int`            | `src/json-fortran/src/json_value_module.F90`                                   |
| 35.2% | 16.8 MiB | 238,054 | `__json_value_module_MOD_parse_array`              | `src/json-fortran/src/json_value_module.F90`                                   |
| 29.9% | 14.2 MiB | 133,404 | `__json_value_module_MOD_json_value_create`        | `src/json-fortran/src/json_value_module.F90`                                   |
| 28.1% | 13.4 MiB | 169,249 | `MAIN__`                                           | `out/profile.f90`                                                              |
| 27.9% | 13.3 MiB | 184,850 | `__json_value_module_MOD_json_parse_file`          | `src/json-fortran/src/json_value_module.F90`                                   |
| 27.3% |   13 MiB | 159,966 | `main`                                             | `out/profile.f90`                                                              |
| 27.2% | 12.9 MiB | 177,529 | `__json_file_module_MOD_json_file_load`            | `src/json-fortran/src/json_file_module.F90`                                    |
| 10.7% | 5.12 MiB |  70,140 | `__json_value_module_MOD_parse_string`             | `src/json-fortran/src/json_value_module.F90`                                   |
|  9.1% | 4.32 MiB |  77,828 | `__json_value_module_MOD_parse_value`              | `src/json-fortran/src/json_value_module.F90`                                   |
|  2.3% | 1.08 MiB |   2,430 | `__json_value_module_MOD_json_get_string_by_path`  | `src/json-fortran/src/json_get_scalar_by_path.inc`                             |
|  2.3% | 1.08 MiB |   2,430 | `__json_file_module_MOD_json_file_get_string`      | `src/json-fortran/src/json_file_module.F90`                                    |
|  1.9% |  932 KiB |   8,509 | `0x228cf`                                          | `tmp/nix-shell.eMJcEj/profiler-md-input-generation.40bx0a/fortran-base/binary` |
|  1.7% |  837 KiB |   1,515 | `__json_value_module_MOD_json_get_by_path_default` | `src/json-fortran/src/json_value_module.F90`                                   |
|  1.7% |  837 KiB |   1,515 | `__json_value_module_MOD_json_get_by_path`         | `src/json-fortran/src/json_value_module.F90`                                   |
|  1.5% |  718 KiB |   7,072 | `0x1ed2f`                                          | `[stack]`                                                                      |
|  1.2% |  601 KiB |   5,606 | `0x1eadf`                                          | `[stack]`                                                                      |
|  0.6% |  269 KiB |     897 | `__json_value_module_MOD_json_get_string`          | `src/json-fortran/src/json_value_module.F90`                                   |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `__json_value_module_MOD_parse_object` (`src/json-fortran/src/json_value_module.F90`)

|     % |     Size | Objects | Callee                                      | Location                                     |
| ----: | -------: | ------: | ------------------------------------------- | -------------------------------------------- |
| 99.5% | 45.1 MiB | 444,512 | `__json_value_module_MOD_parse_object`      | `src/json-fortran/src/json_value_module.F90` |
| 46.6% | 21.1 MiB |  40,096 | `__json_value_module_MOD_parse_number`      | `src/json-fortran/src/json_value_module.F90` |
| 36.6% | 16.6 MiB | 231,061 | `__json_value_module_MOD_parse_array`       | `src/json-fortran/src/json_value_module.F90` |
| 29.0% | 13.1 MiB | 123,102 | `__json_value_module_MOD_json_value_create` | `src/json-fortran/src/json_value_module.F90` |
|  9.1% | 4.14 MiB |  76,160 | `__json_value_module_MOD_parse_value`       | `src/json-fortran/src/json_value_module.F90` |

##### `__json_string_utilities_MOD_string_to_integer` (`src/json-fortran/src/json_string_utilities.F90`)

|     % |     Size | Objects | Callee     | Location                                         |
| ----: | -------: | ------: | ---------- | ------------------------------------------------ |
| 95.2% | 22.3 MiB |   9,924 | `0x109623` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  4.7% |  1.1 MiB |  13,699 | `0x1093fb` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| <0.1% | 2.66 KiB |   2,701 | `0x118783` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| <0.1% |    448 B |      56 | `_start`   | `<unknown>`                                      |

##### `__json_value_module_MOD_parse_number` (`src/json-fortran/src/json_value_module.F90`)

|     % |     Size | Objects | Callee                                   | Location                                     |
| ----: | -------: | ------: | ---------------------------------------- | -------------------------------------------- |
| 99.0% | 22.6 MiB |  32,572 | `__json_value_module_MOD_string_to_int`  | `src/json-fortran/src/json_value_module.F90` |
|  0.6% |  149 KiB |  19,115 | `__json_value_module_MOD_to_integer`     | `src/json-fortran/src/json_value_module.F90` |
| <0.1% |    864 B |       9 | `__json_value_module_MOD_string_to_dble` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_string_to_int` (`src/json-fortran/src/json_value_module.F90`)

|      % |     Size | Objects | Callee                                          | Location                                         |
| -----: | -------: | ------: | ----------------------------------------------- | ------------------------------------------------ |
| 100.0% | 22.6 MiB |  32,572 | `__json_string_utilities_MOD_string_to_integer` | `src/json-fortran/src/json_string_utilities.F90` |

##### `0x109623` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|     % |     Size | Objects | Callee    | Location                                         |
| ----: | -------: | ------: | --------- | ------------------------------------------------ |
| 99.9% | 22.3 MiB |   5,602 | `0xfa6bf` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  0.1% | 21.3 KiB |   4,326 | `0xfa6b3` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0xfa6bf` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|      % |     Size | Objects | Callee    | Location                                         |
| -----: | -------: | ------: | --------- | ------------------------------------------------ |
| 100.0% | 22.3 MiB |   5,602 | `0x1c1b3` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `__json_value_module_MOD_parse_array` (`src/json-fortran/src/json_value_module.F90`)

|     % |     Size | Objects | Callee                                      | Location                                     |
| ----: | -------: | ------: | ------------------------------------------- | -------------------------------------------- |
| 97.6% | 16.4 MiB | 234,235 | `__json_value_module_MOD_parse_object`      | `src/json-fortran/src/json_value_module.F90` |
| 10.4% | 1.74 MiB |  11,960 | `__json_value_module_MOD_parse_number`      | `src/json-fortran/src/json_value_module.F90` |
|  6.6% |  1.1 MiB |  10,299 | `__json_value_module_MOD_json_value_create` | `src/json-fortran/src/json_value_module.F90` |
| <0.1% | 4.57 KiB |   1,171 | `_start`                                    | `<unknown>`                                  |

##### `MAIN__` (`out/profile.f90`)

|     % |     Size | Objects | Callee                                                | Location                                         |
| ----: | -------: | ------: | ----------------------------------------------------- | ------------------------------------------------ |
| 91.8% | 12.3 MiB | 166,709 | `__json_file_module_MOD_json_file_load`               | `src/json-fortran/src/json_file_module.F90`      |
|  8.0% | 1.08 MiB |   2,430 | `__json_file_module_MOD_json_file_get_string`         | `src/json-fortran/src/json_file_module.F90`      |
|  0.1% | 16.3 KiB |       4 | `0x109623`                                            | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| <0.1% | 6.79 KiB |      11 | `0x1093fb`                                            | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| <0.1% | 2.02 KiB |      10 | `__json_file_module_MOD_initialize_json_core_in_file` | `src/json-fortran/src/json_file_module.F90`      |

##### `__json_value_module_MOD_json_parse_file` (`src/json-fortran/src/json_value_module.F90`)

|     % |     Size | Objects | Callee                                        | Location                                         |
| ----: | -------: | ------: | --------------------------------------------- | ------------------------------------------------ |
| 90.6% |   12 MiB | 184,812 | `__json_value_module_MOD_parse_object`        | `src/json-fortran/src/json_value_module.F90`     |
|  9.4% | 1.25 MiB |      29 | `0x10324b`                                    | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  1.6% |  217 KiB |   1,611 | `_start`                                      | `<unknown>`                                      |
| <0.1% |    336 B |       3 | `__json_value_module_MOD_json_value_create`   | `src/json-fortran/src/json_value_module.F90`     |
| <0.1% |      3 B |       1 | `__json_value_module_MOD_json_prepare_parser` | `src/json-fortran/src/json_value_module.F90`     |

##### `main` (`out/profile.f90`)

|      % |    Size | Objects | Callee   | Location          |
| -----: | ------: | ------: | -------- | ----------------- |
| 100.0% |  13 MiB | 159,966 | `MAIN__` | `out/profile.f90` |
|   1.5% | 204 KiB |   1,865 | `_start` | `<unknown>`       |

##### `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`)

|      % |     Size | Objects | Callee                                    | Location                                     |
| -----: | -------: | ------: | ----------------------------------------- | -------------------------------------------- |
| 100.0% | 12.9 MiB | 177,529 | `__json_value_module_MOD_json_parse_file` | `src/json-fortran/src/json_value_module.F90` |
|   0.8% |  112 KiB |   1,044 | `_start`                                  | `<unknown>`                                  |

##### `0x27743` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |     Size | Objects | Callee   | Location          |
| -----: | -------: | ------: | -------- | ----------------- |
| 100.0% | 12.3 MiB | 149,037 | `main`   | `out/profile.f90` |
|  <0.1% | 2.02 KiB |      74 | `_start` | `<unknown>`       |

##### `0x27817` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |     Size | Objects | Callee    | Location                              |
| -----: | -------: | ------: | --------- | ------------------------------------- |
| 100.0% | 11.3 MiB | 138,003 | `0x27743` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  11.1% | 1.25 MiB |      18 | `_start`  | `<unknown>`                           |

##### `_start` (`<unknown>`)

|      % |     Size | Objects | Callee    | Location                              |
| -----: | -------: | ------: | --------- | ------------------------------------- |
| 100.0% | 10.4 MiB | 125,670 | `0x27817` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|   0.1% | 12.5 KiB |     399 | `_start`  | `<unknown>`                           |

##### `__json_value_module_MOD_parse_string` (`src/json-fortran/src/json_value_module.F90`)

|     % |     Size | Objects | Callee                                        | Location                                         |
| ----: | -------: | ------: | --------------------------------------------- | ------------------------------------------------ |
|  4.0% |  211 KiB |   2,824 | `_start`                                      | `<unknown>`                                      |
|  0.4% | 21.1 KiB |     939 | `0x1db9f`                                     | `[stack]`                                        |
|  0.4% | 19.1 KiB |     178 | `__json_string_utilities_MOD_unescape_string` | `src/json-fortran/src/json_string_utilities.F90` |
|  0.3% | 18.3 KiB |   1,963 | `0xffffffffffffffff`                          | `<unknown>`                                      |
| <0.1% |    934 B |     934 | `0x4d4486b92e59c3ff`                          | `<unknown>`                                      |

##### `__json_value_module_MOD_parse_value` (`src/json-fortran/src/json_value_module.F90`)

|     % |     Size | Objects | Callee                                 | Location                                     |
| ----: | -------: | ------: | -------------------------------------- | -------------------------------------------- |
| 54.8% | 2.37 MiB |  26,954 | `__json_value_module_MOD_parse_string` | `src/json-fortran/src/json_value_module.F90` |
|  2.1% | 92.3 KiB |     844 | `_start`                               | `<unknown>`                                  |
|  2.0% | 90.1 KiB |     824 | `0x1dc4f`                              | `[stack]`                                    |
|  0.2% | 7.59 KiB |   7,769 | `__json_value_module_MOD_to_string`    | `src/json-fortran/src/json_value_module.F90` |

##### `0x10324b` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|      % |     Size | Objects | Callee     | Location                                         |
| -----: | -------: | ------: | ---------- | ------------------------------------------------ |
| 100.0% | 1.25 MiB |      19 | `0x1029eb` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  <0.1% |    180 B |      10 | `0x102ac7` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x1029eb` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|     % |     Size | Objects | Callee     | Location                                         |
| ----: | -------: | ------: | ---------- | ------------------------------------------------ |
| 99.9% | 1.25 MiB |      10 | `0x10be83` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  0.1% |    864 B |       9 | `0x10bd7b` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x10be83` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|      % |     Size | Objects | Callee    | Location                                         |
| -----: | -------: | ------: | --------- | ------------------------------------------------ |
| 100.0% | 1.25 MiB |      10 | `0x1c1b3` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x4` (`<unknown>`)

|     % |     Size | Objects | Callee           | Location    |
| ----: | -------: | ------: | ---------------- | ----------- |
| 32.4% |  412 KiB |     101 | `0xaaab08154ba7` | `<unknown>` |
| 32.4% |  412 KiB |     101 | `0xaaab0832014f` | `<unknown>` |
|  3.8% |   49 KiB |      21 | `_start`         | `<unknown>` |
|  1.0% | 12.2 KiB |       3 | `0xaaab0826cad7` | `<unknown>` |
|  0.6% | 8.16 KiB |       2 | `0xaaab0820e427` | `<unknown>` |

##### `0x1093fb` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|     % |     Size | Objects | Callee     | Location                                         |
| ----: | -------: | ------: | ---------- | ------------------------------------------------ |
| 75.2% |  851 KiB |  10,791 | `0x10b28f` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| 24.2% |  273 KiB |   2,917 | `0x10b283` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  0.7% | 7.42 KiB |      10 | `0x10b26f` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| <0.1% |     16 B |       1 | `0x10b263` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `__json_value_module_MOD_json_get_string_by_path` (`src/json-fortran/src/json_get_scalar_by_path.inc`)

|     % |    Size | Objects | Callee                                     | Location                                     |
| ----: | ------: | ------: | ------------------------------------------ | -------------------------------------------- |
| 75.7% | 837 KiB |   1,515 | `__json_value_module_MOD_json_get_by_path` | `src/json-fortran/src/json_value_module.F90` |
| 24.3% | 269 KiB |     897 | `__json_value_module_MOD_json_get_string`  | `src/json-fortran/src/json_value_module.F90` |

##### `__json_file_module_MOD_json_file_get_string` (`src/json-fortran/src/json_file_module.F90`)

|      % |     Size | Objects | Callee                                            | Location                                           |
| -----: | -------: | ------: | ------------------------------------------------- | -------------------------------------------------- |
| 100.0% | 1.08 MiB |   2,430 | `__json_value_module_MOD_json_get_string_by_path` | `src/json-fortran/src/json_get_scalar_by_path.inc` |

##### `0x228cf` (`tmp/nix-shell.eMJcEj/profiler-md-input-generation.40bx0a/fortran-base/binary`)

|     % |     Size | Objects | Callee    | Location    |
| ----: | -------: | ------: | --------- | ----------- |
| 48.8% |  455 KiB |   4,162 | `_start`  | `<unknown>` |
| 30.1% |  280 KiB |   2,564 | `0x1eadf` | `[stack]`   |
| 10.6% | 98.5 KiB |     889 | `0x1ed2f` | `[stack]`   |
| 10.5% | 97.8 KiB |     894 | `0x1dbe7` | `[stack]`   |

##### `0xffffffffffffffff` (`<unknown>`)

|     % |     Size | Objects | Callee    | Location                                                                       |
| ----: | -------: | ------: | --------- | ------------------------------------------------------------------------------ |
| 56.8% |  518 KiB |   9,829 | `_start`  | `<unknown>`                                                                    |
| 39.0% |  356 KiB |   3,251 | `0x228cf` | `tmp/nix-shell.eMJcEj/profiler-md-input-generation.40bx0a/fortran-base/binary` |
|  2.2% | 20.1 KiB |   1,972 | `0x4070`  | `<unknown>`                                                                    |
|  1.1% | 10.1 KiB |     939 | `0x1d5f7` | `[stack]`                                                                      |
|  0.8% | 7.33 KiB |     938 | `0xff`    | `<unknown>`                                                                    |

##### `0x10b28f` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|     % |    Size | Objects | Callee     | Location                                         |
| ----: | ------: | ------: | ---------- | ------------------------------------------------ |
| 80.5% | 685 KiB |   5,480 | `0x112ecb` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| 19.5% | 166 KiB |   5,311 | `0x112ebb` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `__json_value_module_MOD_json_get_by_path_default` (`src/json-fortran/src/json_value_module.F90`)

|      % |    Size | Objects | Callee                                          | Location                                         |
| -----: | ------: | ------: | ----------------------------------------------- | ------------------------------------------------ |
| 100.0% | 837 KiB |   1,515 | `__json_string_utilities_MOD_string_to_integer` | `src/json-fortran/src/json_string_utilities.F90` |

##### `__json_value_module_MOD_json_get_by_path` (`src/json-fortran/src/json_value_module.F90`)

|      % |    Size | Objects | Callee                                             | Location                                     |
| -----: | ------: | ------: | -------------------------------------------------- | -------------------------------------------- |
| 100.0% | 837 KiB |   1,515 | `__json_value_module_MOD_json_get_by_path_default` | `src/json-fortran/src/json_value_module.F90` |

##### `0x2b167` (`usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10`)

|     % |     Size | Objects | Callee    | Location                                          |
| ----: | -------: | ------: | --------- | ------------------------------------------------- |
| 97.5% |  735 KiB |   2,575 | `_start`  | `<unknown>`                                       |
|  2.2% | 16.5 KiB |     939 | `0x1e14f` | `[stack]`                                         |
|  0.3% |    2 KiB |       8 | `0x313ef` | `usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10` |
|  0.1% |    603 B |       9 | `0x1e0bf` | `[stack]`                                         |

##### `0x1ed2f` (`[stack]`)

|     % |     Size | Objects | Callee                                    | Location                                     |
| ----: | -------: | ------: | ----------------------------------------- | -------------------------------------------- |
| 57.5% |  413 KiB |   3,803 | `_start`                                  | `<unknown>`                                  |
| 28.6% |  205 KiB |   1,878 | `__json_value_module_MOD_parse_object`    | `src/json-fortran/src/json_value_module.F90` |
| 12.9% | 92.3 KiB |     844 | `__json_value_module_MOD_parse_value`     | `src/json-fortran/src/json_value_module.F90` |
|  0.5% | 3.91 KiB |      94 | `__json_value_module_MOD_pop_char.part.0` | `src/json-fortran/src/json_value_module.F90` |
|  0.3% | 1.87 KiB |     239 | `0xaaab080e27ff`                          | `<unknown>`                                  |

##### `0x112ecb` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|      % |    Size | Objects | Callee    | Location                                         |
| -----: | ------: | ------: | --------- | ------------------------------------------------ |
| 100.0% | 685 KiB |   5,480 | `0x1c1b3` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x1eadf` (`[stack]`)

|     % |    Size | Objects | Callee    | Location    |
| ----: | ------: | ------: | --------- | ----------- |
| 52.3% | 314 KiB |   2,914 | `0x1ed2f` | `[stack]`   |
| 47.5% | 286 KiB |   2,611 | `_start`  | `<unknown>` |
|  0.1% |   810 B |      81 | `0x0`     | `<unknown>` |

##### `0x39387` (`usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10`)

|     % |    Size | Objects | Callee    | Location                                          |
| ----: | ------: | ------: | --------- | ------------------------------------------------- |
| 99.8% | 500 KiB |   1,823 | `0x2b167` | `usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10` |
|  0.2% |   929 B |     929 | `0x1`     | `<unknown>`                                       |
| <0.1% |    94 B |      94 | `_start`  | `<unknown>`                                       |

##### `0x3143b` (`usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10`)

|     % |     Size | Objects | Callee    | Location    |
| ----: | -------: | ------: | --------- | ----------- |
| 50.1% |  241 KiB |     995 | `_start`  | `<unknown>` |
| 48.8% |  235 KiB |     939 | `0x1d5af` | `[stack]`   |
|  1.1% | 5.33 KiB |     910 | `0x1e16f` | `[stack]`   |

##### `0xffffac67003f` (`<unknown>`)

|     % |     Size | Objects | Callee           | Location                                          |
| ----: | -------: | ------: | ---------------- | ------------------------------------------------- |
| 51.6% |  246 KiB |   1,216 | `_start`         | `<unknown>`                                       |
| 28.0% |  134 KiB |     942 | `0xffffacf09d67` | `<unknown>`                                       |
| 20.5% | 97.7 KiB |     893 | `0x2f9e7`        | `usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10` |

##### `0x5` (`<unknown>`)

|    % |     Size | Objects | Callee           | Location    |
| ---: | -------: | ------: | ---------------- | ----------- |
| 7.9% | 36.7 KiB |       9 | `_start`         | `<unknown>` |
| 2.6% | 12.2 KiB |       3 | `0xaaab0820e1c7` | `<unknown>` |
| 2.6% | 12.2 KiB |       3 | `0xaaab0818475f` | `<unknown>` |
| 1.8% | 8.16 KiB |       2 | `0xaaab082f7b9f` | `<unknown>` |
| 1.8% | 8.16 KiB |       2 | `0xaaab082c59f7` | `<unknown>` |

##### `0xaaab08154ba7` (`<unknown>`)

|      % |    Size | Objects | Callee   | Location    |
| -----: | ------: | ------: | -------- | ----------- |
| 100.0% | 412 KiB |     101 | `_start` | `<unknown>` |

## Hottest call stacks

Call stacks ranked by bytes allocated in their leaf frame.

|     % |     Size | Objects | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ----: | -------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 38.6% | 18.4 MiB |   4,624 | `0x1c1b3` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`) ← `0xfa6bf` ← `0x109623` ← `__json_string_utilities_MOD_string_to_integer` (`src/json-fortran/src/json_string_utilities.F90`) ← `__json_value_module_MOD_string_to_int` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_number` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` |
| 13.6% |  6.5 MiB |  60,816 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                      |
|  2.9% | 1.39 MiB |     350 | `0x1c1b3` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`) ← `0xfa6bf` ← `0x109623` ← `__json_string_utilities_MOD_string_to_integer` (`src/json-fortran/src/json_string_utilities.F90`) ← `__json_value_module_MOD_string_to_int` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_number` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`   |
|  2.6% | 1.25 MiB |      10 | `0x1c1b3` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`) ← `0x10be83` ← `0x1029eb` ← `0x10324b` ← `__json_value_module_MOD_json_parse_file` (`src/json-fortran/src/json_value_module.F90`) ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `0x27743` (`usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0x27817` (`usr/lib/aarch64-linux-gnu/libc.so.6`) ← `_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  1.8% |  891 KiB |  59,189 | `__json_value_module_MOD_parse_object` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                           |
|  1.6% |  794 KiB |  10,946 | `__json_value_module_MOD_parse_string` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                           |
|  1.5% |  743 KiB |  22,123 | `__json_value_module_MOD_parse_value` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                            |
|  1.3% |  653 KiB |  13,642 | `__json_value_module_MOD_parse_string` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_value` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                            |
|  1.0% |  497 KiB |   4,544 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `0x27743` (`usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817`                                 |
|  1.0% |  486 KiB |   4,441 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `0x27743` (`usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start`                                                               |
|  0.8% |  412 KiB |     101 | `0x1c1b3` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`) ← `0xfa6bf` ← `0x109623` ← `__json_string_utilities_MOD_string_to_integer` (`src/json-fortran/src/json_string_utilities.F90`) ← `__json_value_module_MOD_json_get_by_path_default` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_json_get_by_path` ← `__json_value_module_MOD_json_get_string_by_path` (`src/json-fortran/src/json_get_scalar_by_path.inc`) ← `__json_file_module_MOD_json_file_get_string` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `0x27743` (`usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0xaaab08154ba7` ← `0x4`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  0.8% |  412 KiB |     101 | `0x1c1b3` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`) ← `0xfa6bf` ← `0x109623` ← `__json_string_utilities_MOD_string_to_integer` (`src/json-fortran/src/json_string_utilities.F90`) ← `__json_value_module_MOD_json_get_by_path_default` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_json_get_by_path` ← `__json_value_module_MOD_json_get_string_by_path` (`src/json-fortran/src/json_get_scalar_by_path.inc`) ← `__json_file_module_MOD_json_file_get_string` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `0x27743` (`usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0xaaab0832014f` ← `0x4`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  0.8% |  407 KiB |   1,626 | `__json_value_module_MOD_parse_string` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `0x27743` (`usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `__json_value_module_MOD_parse_object` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object`                     |
|  0.8% |  392 KiB |      96 | `0x1c1b3` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`) ← `0xfa6bf` ← `0x109623` ← `__json_string_utilities_MOD_string_to_integer` (`src/json-fortran/src/json_string_utilities.F90`) ← `__json_value_module_MOD_string_to_int` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_number` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`  |
|  0.8% |  392 KiB |      96 | `0x1c1b3` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`) ← `0xfa6bf` ← `0x109623` ← `__json_string_utilities_MOD_string_to_integer` (`src/json-fortran/src/json_string_utilities.F90`) ← `__json_value_module_MOD_string_to_int` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_number` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`  |
|  0.8% |  383 KiB |   3,503 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `0x27743` (`usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0xffffffffffffffff`                                                                                 |
|  0.8% |  374 KiB |   3,416 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `0x27743` (`usr/lib/aarch64-linux-gnu/libc.so.6`)    |
|  0.7% |  356 KiB |   3,251 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `0x27743` (`usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0x228cf` (`tmp/nix-shell.eMJcEj/profiler-md-input-generation.40bx0a/fortran-base/binary`) ← `0xffffffffffffffff`                             |
|  0.6% |  315 KiB |   2,880 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                       |
|  0.6% |  296 KiB |     592 | `__json_value_module_MOD_parse_string` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_value` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `0x27743` (`usr/lib/aarch64-linux-gnu/libc.so.6`)          |

# Retained heap profile

Retained 894 KiB over 14,825 objects (61.8 B per object).

| Category |     % |    Size | Objects |
| -------- | ----: | ------: | ------: |
| Ours     | 85.5% | 765 KiB |  14,818 |
| Native   | 14.5% | 130 KiB |       7 |

## Hottest functions

### Self size

Functions ranked by bytes retained directly in the function body, excluding callees.

|     % |     Size | Objects | Function                                          | Location                                           |
| ----: | -------: | ------: | ------------------------------------------------- | -------------------------------------------------- |
| 68.3% |  611 KiB |   5,584 | `__json_value_module_MOD_json_value_create`       | `src/json-fortran/src/json_value_module.F90`       |
| 14.3% |  128 KiB |       1 | `0x1c1b3`                                         | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`   |
|  8.7% | 77.5 KiB |   1,865 | `__json_value_module_MOD_parse_value`             | `src/json-fortran/src/json_value_module.F90`       |
|  7.2% | 64.8 KiB |   5,342 | `__json_value_module_MOD_parse_object`            | `src/json-fortran/src/json_value_module.F90`       |
|  0.8% |  6.8 KiB |     871 | `__json_value_module_MOD_to_integer`              | `src/json-fortran/src/json_value_module.F90`       |
|  0.5% | 4.29 KiB |   1,098 | `__json_value_module_MOD_to_logical`              | `src/json-fortran/src/json_value_module.F90`       |
|  0.2% | 1.59 KiB |       4 | `0x1c24b`                                         | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`   |
| <0.1% |    269 B |       2 | `__json_value_module_MOD_json_initialize`         | `src/json-fortran/src/json_value_module.F90`       |
| <0.1% |    256 B |       1 | `__json_value_module_MOD_parse_string`            | `src/json-fortran/src/json_value_module.F90`       |
| <0.1% |     52 B |      52 | `__json_value_module_MOD_to_string`               | `src/json-fortran/src/json_value_module.F90`       |
| <0.1% |     18 B |       1 | `0x9980f`                                         | `usr/lib/aarch64-linux-gnu/libc.so.6`              |
| <0.1% |     17 B |       1 | `__json_value_module_MOD_json_parse_file`         | `src/json-fortran/src/json_value_module.F90`       |
| <0.1% |     17 B |       1 | `0x1c1f3`                                         | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`   |
| <0.1% |      3 B |       1 | `__json_value_module_MOD_json_prepare_parser`     | `src/json-fortran/src/json_value_module.F90`       |
| <0.1% |      1 B |       1 | `__json_value_module_MOD_json_get_string_by_path` | `src/json-fortran/src/json_get_scalar_by_path.inc` |

#### Categories

##### Ours

|     % |     Size | Objects | Function                                          | Location                                           |
| ----: | -------: | ------: | ------------------------------------------------- | -------------------------------------------------- |
| 68.3% |  611 KiB |   5,584 | `__json_value_module_MOD_json_value_create`       | `src/json-fortran/src/json_value_module.F90`       |
|  8.7% | 77.5 KiB |   1,865 | `__json_value_module_MOD_parse_value`             | `src/json-fortran/src/json_value_module.F90`       |
|  7.2% | 64.8 KiB |   5,342 | `__json_value_module_MOD_parse_object`            | `src/json-fortran/src/json_value_module.F90`       |
|  0.8% |  6.8 KiB |     871 | `__json_value_module_MOD_to_integer`              | `src/json-fortran/src/json_value_module.F90`       |
|  0.5% | 4.29 KiB |   1,098 | `__json_value_module_MOD_to_logical`              | `src/json-fortran/src/json_value_module.F90`       |
| <0.1% |    269 B |       2 | `__json_value_module_MOD_json_initialize`         | `src/json-fortran/src/json_value_module.F90`       |
| <0.1% |    256 B |       1 | `__json_value_module_MOD_parse_string`            | `src/json-fortran/src/json_value_module.F90`       |
| <0.1% |     52 B |      52 | `__json_value_module_MOD_to_string`               | `src/json-fortran/src/json_value_module.F90`       |
| <0.1% |     17 B |       1 | `__json_value_module_MOD_json_parse_file`         | `src/json-fortran/src/json_value_module.F90`       |
| <0.1% |      3 B |       1 | `__json_value_module_MOD_json_prepare_parser`     | `src/json-fortran/src/json_value_module.F90`       |
| <0.1% |      1 B |       1 | `__json_value_module_MOD_json_get_string_by_path` | `src/json-fortran/src/json_get_scalar_by_path.inc` |

##### Native

|     % |     Size | Objects | Function  | Location                                         |
| ----: | -------: | ------: | --------- | ------------------------------------------------ |
| 14.3% |  128 KiB |       1 | `0x1c1b3` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  0.2% | 1.59 KiB |       4 | `0x1c24b` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| <0.1% |     18 B |       1 | `0x9980f` | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| <0.1% |     17 B |       1 | `0x1c1f3` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

#### Lines

Lines ranked by contribution to each function's self size.

##### `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`)

|      % |    Size | Objects | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 611 KiB |   5,584 | `src/json-fortran/src/json_value_module.F90:2211` |

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

##### `__json_value_module_MOD_json_parse_file` (`src/json-fortran/src/json_value_module.F90`)

|      % | Size | Objects | Location                                          |
| -----: | ---: | ------: | ------------------------------------------------- |
| 100.0% | 17 B |       1 | `src/json-fortran/src/json_value_module.F90:9786` |

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

##### `0x1c1b3` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|      % |    Size | Objects | Caller     | Location                                         |
| -----: | ------: | ------: | ---------- | ------------------------------------------------ |
| 100.0% | 128 KiB |       1 | `0x10be83` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

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

##### `0x1c24b` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|     % |     Size | Objects | Caller     | Location                                         |
| ----: | -------: | ------: | ---------- | ------------------------------------------------ |
| 93.1% | 1.48 KiB |       2 | `0x10a85b` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  5.9% |     96 B |       1 | `0x10bd7b` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  1.0% |     16 B |       1 | `0x10b1fb` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

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

##### `0x9980f` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % | Size | Objects | Caller    | Location                                         |
| -----: | ---: | ------: | --------- | ------------------------------------------------ |
| 100.0% | 18 B |       1 | `0x1c3fb` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `__json_value_module_MOD_json_parse_file` (`src/json-fortran/src/json_value_module.F90`)

|      % | Size | Objects | Caller                                  | Location                                    |
| -----: | ---: | ------: | --------------------------------------- | ------------------------------------------- |
| 100.0% | 17 B |       1 | `__json_file_module_MOD_json_file_load` | `src/json-fortran/src/json_file_module.F90` |

##### `0x1c1f3` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|      % | Size | Objects | Caller     | Location                                         |
| -----: | ---: | ------: | ---------- | ------------------------------------------------ |
| 100.0% | 17 B |       1 | `0x118783` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

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

|     % |     Size | Objects | Function                                    | Location                                                                       |
| ----: | -------: | ------: | ------------------------------------------- | ------------------------------------------------------------------------------ |
| 85.6% |  766 KiB |  14,814 | `__json_value_module_MOD_parse_object`      | `src/json-fortran/src/json_value_module.F90`                                   |
| 68.3% |  611 KiB |   5,584 | `__json_value_module_MOD_json_value_create` | `src/json-fortran/src/json_value_module.F90`                                   |
| 51.6% |  462 KiB |   6,153 | `__json_value_module_MOD_json_parse_file`   | `src/json-fortran/src/json_value_module.F90`                                   |
| 50.0% |  447 KiB |   5,853 | `__json_file_module_MOD_json_file_load`     | `src/json-fortran/src/json_file_module.F90`                                    |
| 48.5% |  433 KiB |   5,580 | `MAIN__`                                    | `out/profile.f90`                                                              |
| 46.6% |  417 KiB |   5,258 | `main`                                      | `out/profile.f90`                                                              |
| 45.6% |  408 KiB |   7,612 | `__json_value_module_MOD_parse_array`       | `src/json-fortran/src/json_value_module.F90`                                   |
| 45.0% |  402 KiB |   4,979 | `0x27743`                                   | `usr/lib/aarch64-linux-gnu/libc.so.6`                                          |
| 42.8% |  382 KiB |   4,623 | `0x27817`                                   | `usr/lib/aarch64-linux-gnu/libc.so.6`                                          |
| 39.1% |  350 KiB |   4,220 | `_start`                                    | `<unknown>`                                                                    |
| 14.3% |  128 KiB |       3 | `0x10324b`                                  | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`                               |
| 14.3% |  128 KiB |       2 | `0x1029eb`                                  | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`                               |
| 14.3% |  128 KiB |       1 | `0x1c1b3`                                   | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`                               |
| 14.3% |  128 KiB |       1 | `0x10be83`                                  | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`                               |
|  9.5% | 84.8 KiB |   1,983 | `__json_value_module_MOD_parse_value`       | `src/json-fortran/src/json_value_module.F90`                                   |
|  4.3% | 38.8 KiB |     355 | `0x228cf`                                   | `tmp/nix-shell.eMJcEj/profiler-md-input-generation.40bx0a/fortran-base/binary` |
|  4.3% |   38 KiB |     584 | `0xffffffffffffffff`                        | `<unknown>`                                                                    |
|  3.3% | 29.6 KiB |     307 | `0x1ed2f`                                   | `[stack]`                                                                      |
|  2.8% | 25.2 KiB |     230 | `0x1eadf`                                   | `[stack]`                                                                      |
|  1.5% | 13.6 KiB |      99 | `0x1`                                       | `<unknown>`                                                                    |

#### Categories

##### Ours

|     % |     Size | Objects | Function                                    | Location                                                                       |
| ----: | -------: | ------: | ------------------------------------------- | ------------------------------------------------------------------------------ |
| 85.6% |  766 KiB |  14,814 | `__json_value_module_MOD_parse_object`      | `src/json-fortran/src/json_value_module.F90`                                   |
| 68.3% |  611 KiB |   5,584 | `__json_value_module_MOD_json_value_create` | `src/json-fortran/src/json_value_module.F90`                                   |
| 51.6% |  462 KiB |   6,153 | `__json_value_module_MOD_json_parse_file`   | `src/json-fortran/src/json_value_module.F90`                                   |
| 50.0% |  447 KiB |   5,853 | `__json_file_module_MOD_json_file_load`     | `src/json-fortran/src/json_file_module.F90`                                    |
| 48.5% |  433 KiB |   5,580 | `MAIN__`                                    | `out/profile.f90`                                                              |
| 46.6% |  417 KiB |   5,258 | `main`                                      | `out/profile.f90`                                                              |
| 45.6% |  408 KiB |   7,612 | `__json_value_module_MOD_parse_array`       | `src/json-fortran/src/json_value_module.F90`                                   |
|  9.5% | 84.8 KiB |   1,983 | `__json_value_module_MOD_parse_value`       | `src/json-fortran/src/json_value_module.F90`                                   |
|  4.3% | 38.8 KiB |     355 | `0x228cf`                                   | `tmp/nix-shell.eMJcEj/profiler-md-input-generation.40bx0a/fortran-base/binary` |
|  3.3% | 29.6 KiB |     307 | `0x1ed2f`                                   | `[stack]`                                                                      |
|  2.8% | 25.2 KiB |     230 | `0x1eadf`                                   | `[stack]`                                                                      |
|  1.1% | 9.78 KiB |     200 | `__json_value_module_MOD_parse_string`      | `src/json-fortran/src/json_value_module.F90`                                   |
|  1.0% | 8.53 KiB |      78 | `0x1e29f`                                   | `[stack]`                                                                      |
|  1.0% | 8.53 KiB |      78 | `0x1d86f`                                   | `[stack]`                                                                      |
|  1.0% | 8.53 KiB |      78 | `0x1d96f`                                   | `[stack]`                                                                      |
|  0.8% | 7.55 KiB |     872 | `__json_value_module_MOD_parse_number`      | `src/json-fortran/src/json_value_module.F90`                                   |
|  0.8% |  6.8 KiB |     871 | `__json_value_module_MOD_to_integer`        | `src/json-fortran/src/json_value_module.F90`                                   |
|  0.5% | 4.29 KiB |   1,098 | `__json_value_module_MOD_to_logical`        | `src/json-fortran/src/json_value_module.F90`                                   |
|  0.5% | 4.27 KiB |      39 | `0x1dbe7`                                   | `[stack]`                                                                      |
|  0.5% | 4.05 KiB |      37 | `0x1e07f`                                   | `[stack]`                                                                      |

##### Native

|     % |     Size | Objects | Function             | Location                                          |
| ----: | -------: | ------: | -------------------- | ------------------------------------------------- |
| 45.0% |  402 KiB |   4,979 | `0x27743`            | `usr/lib/aarch64-linux-gnu/libc.so.6`             |
| 42.8% |  382 KiB |   4,623 | `0x27817`            | `usr/lib/aarch64-linux-gnu/libc.so.6`             |
| 39.1% |  350 KiB |   4,220 | `_start`             | `<unknown>`                                       |
| 14.3% |  128 KiB |       3 | `0x10324b`           | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`  |
| 14.3% |  128 KiB |       2 | `0x1029eb`           | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`  |
| 14.3% |  128 KiB |       1 | `0x1c1b3`            | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`  |
| 14.3% |  128 KiB |       1 | `0x10be83`           | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`  |
|  4.3% |   38 KiB |     584 | `0xffffffffffffffff` | `<unknown>`                                       |
|  1.5% | 13.6 KiB |      99 | `0x1`                | `<unknown>`                                       |
|  1.1% | 10.3 KiB |      72 | `0x2b167`            | `usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10` |
|  0.9% | 8.31 KiB |      76 | `0xffffac67003f`     | `<unknown>`                                       |
|  0.9% | 7.77 KiB |      71 | `0x397ff`            | `usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10` |
|  0.6% | 5.63 KiB |     307 | `0xaaab080e27ff`     | `<unknown>`                                       |
|  0.5% | 4.27 KiB |      39 | `0x2f9e7`            | `usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10` |
|  0.5% | 4.27 KiB |      39 | `0x7c`               | `<unknown>`                                       |
|  0.4% | 3.94 KiB |      36 | `0x17`               | `<unknown>`                                       |
|  0.4% | 3.72 KiB |      34 | `0x18`               | `<unknown>`                                       |
|  0.4% | 3.19 KiB |     136 | `0xffffacf08fff`     | `<unknown>`                                       |
|  0.3% | 3.09 KiB |     148 | `0xffffacf09d67`     | `<unknown>`                                       |
|  0.3% | 2.35 KiB |     156 | `0x3131f`            | `usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10` |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `__json_value_module_MOD_parse_object` (`src/json-fortran/src/json_value_module.F90`)

|     % |     Size | Objects | Callee                                      | Location                                     |
| ----: | -------: | ------: | ------------------------------------------- | -------------------------------------------- |
| 98.7% |  756 KiB |  14,694 | `__json_value_module_MOD_parse_object`      | `src/json-fortran/src/json_value_module.F90` |
| 76.3% |  584 KiB |   5,343 | `__json_value_module_MOD_json_value_create` | `src/json-fortran/src/json_value_module.F90` |
| 52.2% |  400 KiB |   7,433 | `__json_value_module_MOD_parse_array`       | `src/json-fortran/src/json_value_module.F90` |
| 10.1% | 77.5 KiB |   1,917 | `__json_value_module_MOD_parse_value`       | `src/json-fortran/src/json_value_module.F90` |
|  2.7% | 20.9 KiB |   1,213 | `_start`                                    | `<unknown>`                                  |

##### `__json_value_module_MOD_json_parse_file` (`src/json-fortran/src/json_value_module.F90`)

|     % |     Size | Objects | Callee                                        | Location                                         |
| ----: | -------: | ------: | --------------------------------------------- | ------------------------------------------------ |
| 72.2% |  333 KiB |   6,147 | `__json_value_module_MOD_parse_object`        | `src/json-fortran/src/json_value_module.F90`     |
| 27.8% |  128 KiB |       3 | `0x10324b`                                    | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  1.8% | 8.27 KiB |      63 | `_start`                                      | `<unknown>`                                      |
| <0.1% |    112 B |       1 | `__json_value_module_MOD_json_value_create`   | `src/json-fortran/src/json_value_module.F90`     |
| <0.1% |      3 B |       1 | `__json_value_module_MOD_json_prepare_parser` | `src/json-fortran/src/json_value_module.F90`     |

##### `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`)

|      % |     Size | Objects | Callee                                    | Location                                     |
| -----: | -------: | ------: | ----------------------------------------- | -------------------------------------------- |
| 100.0% |  447 KiB |   5,853 | `__json_value_module_MOD_json_parse_file` | `src/json-fortran/src/json_value_module.F90` |
|   1.0% | 4.27 KiB |      39 | `_start`                                  | `<unknown>`                                  |

##### `MAIN__` (`out/profile.f90`)

|     % |    Size | Objects | Callee                                                | Location                                         |
| ----: | ------: | ------: | ----------------------------------------------------- | ------------------------------------------------ |
| 99.8% | 432 KiB |   5,574 | `__json_file_module_MOD_json_file_load`               | `src/json-fortran/src/json_file_module.F90`      |
|  0.2% |   776 B |       2 | `0x1093fb`                                            | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  0.1% |   269 B |       2 | `__json_file_module_MOD_initialize_json_core_in_file` | `src/json-fortran/src/json_file_module.F90`      |
| <0.1% |    96 B |       1 | `_start`                                              | `<unknown>`                                      |
| <0.1% |    17 B |       1 | `0x118783`                                            | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

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

##### `0x27743` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |    Size | Objects | Callee   | Location          |
| -----: | ------: | ------: | -------- | ----------------- |
| 100.0% | 402 KiB |   4,979 | `main`   | `out/profile.f90` |
|   0.1% |   224 B |       2 | `_start` | `<unknown>`       |

##### `0x27817` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |    Size | Objects | Callee    | Location                              |
| -----: | ------: | ------: | --------- | ------------------------------------- |
| 100.0% | 382 KiB |   4,623 | `0x27743` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  33.5% | 128 KiB |       1 | `_start`  | `<unknown>`                           |

##### `_start` (`<unknown>`)

|      % |    Size | Objects | Callee    | Location                              |
| -----: | ------: | ------: | --------- | ------------------------------------- |
| 100.0% | 350 KiB |   4,220 | `0x27817` | `usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x10324b` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|      % |    Size | Objects | Callee     | Location                                         |
| -----: | ------: | ------: | ---------- | ------------------------------------------------ |
| 100.0% | 128 KiB |       2 | `0x1029eb` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  <0.1% |    18 B |       1 | `0x102ac7` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x1029eb` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|     % |    Size | Objects | Callee     | Location                                         |
| ----: | ------: | ------: | ---------- | ------------------------------------------------ |
| 99.9% | 128 KiB |       1 | `0x10be83` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  0.1% |    96 B |       1 | `0x10bd7b` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x10be83` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|      % |    Size | Objects | Callee    | Location                                         |
| -----: | ------: | ------: | --------- | ------------------------------------------------ |
| 100.0% | 128 KiB |       1 | `0x1c1b3` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `__json_value_module_MOD_parse_value` (`src/json-fortran/src/json_value_module.F90`)

|    % |     Size | Objects | Callee                              | Location                                     |
| ---: | -------: | ------: | ----------------------------------- | -------------------------------------------- |
| 4.4% | 3.72 KiB |      34 | `_start`                            | `<unknown>`                                  |
| 4.1% |  3.5 KiB |      32 | `0x1dc4f`                           | `[stack]`                                    |
| 0.1% |     52 B |      52 | `__json_value_module_MOD_to_string` | `src/json-fortran/src/json_value_module.F90` |

##### `0x228cf` (`tmp/nix-shell.eMJcEj/profiler-md-input-generation.40bx0a/fortran-base/binary`)

|     % |     Size | Objects | Callee    | Location    |
| ----: | -------: | ------: | --------- | ----------- |
| 49.3% | 19.1 KiB |     175 | `_start`  | `<unknown>` |
| 30.1% | 11.7 KiB |     107 | `0x1eadf` | `[stack]`   |
| 11.0% | 4.27 KiB |      39 | `0x1dbe7` | `[stack]`   |
|  9.6% | 3.72 KiB |      34 | `0x1ed2f` | `[stack]`   |

##### `0xffffffffffffffff` (`<unknown>`)

|     % |     Size | Objects | Callee               | Location                                                                       |
| ----: | -------: | ------: | -------------------- | ------------------------------------------------------------------------------ |
| 57.6% | 21.9 KiB |     325 | `_start`             | `<unknown>`                                                                    |
| 39.4% |   15 KiB |     137 | `0x228cf`            | `tmp/nix-shell.eMJcEj/profiler-md-input-generation.40bx0a/fortran-base/binary` |
|  2.2% |    856 B |      82 | `0x4070`             | `<unknown>`                                                                    |
|  2.0% |    764 B |       2 | `0xffffffffffffffff` | `<unknown>`                                                                    |
|  0.8% |    304 B |      38 | `0xff`               | `<unknown>`                                                                    |

##### `0x1ed2f` (`[stack]`)

|     % |     Size | Objects | Callee                                    | Location                                     |
| ----: | -------: | ------: | ----------------------------------------- | -------------------------------------------- |
| 57.2% |   17 KiB |     155 | `_start`                                  | `<unknown>`                                  |
| 28.8% | 8.53 KiB |      78 | `__json_value_module_MOD_parse_object`    | `src/json-fortran/src/json_value_module.F90` |
| 12.6% | 3.72 KiB |      34 | `__json_value_module_MOD_parse_value`     | `src/json-fortran/src/json_value_module.F90` |
|  1.0% |    312 B |      39 | `0xaaab080e27ff`                          | `<unknown>`                                  |
|  0.4% |    112 B |       1 | `__json_value_module_MOD_pop_char.part.0` | `src/json-fortran/src/json_value_module.F90` |

##### `0x1eadf` (`[stack]`)

|     % |     Size | Objects | Callee    | Location    |
| ----: | -------: | ------: | --------- | ----------- |
| 52.6% | 13.2 KiB |     121 | `0x1ed2f` | `[stack]`   |
| 47.4% | 11.9 KiB |     109 | `_start`  | `<unknown>` |

##### `0x1` (`<unknown>`)

|     % |     Size | Objects | Callee               | Location                                          |
| ----: | -------: | ------: | -------------------- | ------------------------------------------------- |
| 68.5% | 9.33 KiB |      32 | `0x2b167`            | `usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10` |
| 29.9% | 4.07 KiB |      64 | `0xffffffffffffffff` | `<unknown>`                                       |
|  0.8% |    112 B |       1 | `0x27743`            | `usr/lib/aarch64-linux-gnu/libc.so.6`             |
|  0.8% |    112 B |       1 | `0xe3b383e3a983e391` | `<unknown>`                                       |
| <0.1% |      1 B |       1 | `_start`             | `<unknown>`                                       |

##### `0x2b167` (`usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10`)

|     % |     Size | Objects | Callee    | Location                                          |
| ----: | -------: | ------: | --------- | ------------------------------------------------- |
| 90.9% | 9.33 KiB |      32 | `_start`  | `<unknown>`                                       |
|  6.7% |    702 B |      39 | `0x1e14f` | `[stack]`                                         |
|  2.4% |    256 B |       1 | `0x313ef` | `usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10` |

##### `__json_value_module_MOD_parse_string` (`src/json-fortran/src/json_value_module.F90`)

|     % |     Size | Objects | Callee               | Location    |
| ----: | -------: | ------: | -------------------- | ----------- |
| 89.6% | 8.76 KiB |     117 | `_start`             | `<unknown>` |
|  7.8% |    784 B |      82 | `0xffffffffffffffff` | `<unknown>` |

##### `0x1e29f` (`[stack]`)

|      % |     Size | Objects | Callee                                 | Location                                     |
| -----: | -------: | ------: | -------------------------------------- | -------------------------------------------- |
| 100.0% | 8.53 KiB |      78 | `__json_value_module_MOD_parse_string` | `src/json-fortran/src/json_value_module.F90` |

##### `0x1d86f` (`[stack]`)

|      % |     Size | Objects | Callee   | Location    |
| -----: | -------: | ------: | -------- | ----------- |
| 100.0% | 8.53 KiB |      78 | `_start` | `<unknown>` |

##### `0x1d96f` (`[stack]`)

|     % |     Size | Objects | Callee    | Location                                                                       |
| ----: | -------: | ------: | --------- | ------------------------------------------------------------------------------ |
| 48.7% | 4.16 KiB |      38 | `0x228cf` | `tmp/nix-shell.eMJcEj/profiler-md-input-generation.40bx0a/fortran-base/binary` |
| 48.7% | 4.16 KiB |      38 | `main`    | `out/profile.f90`                                                              |
|  2.6% |    224 B |       2 | `0x1eadf` | `[stack]`                                                                      |

##### `0xffffac67003f` (`<unknown>`)

|     % |     Size | Objects | Callee    | Location                                          |
| ----: | -------: | ------: | --------- | ------------------------------------------------- |
| 50.0% | 4.16 KiB |      38 | `0x2f9e7` | `usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10` |
| 50.0% | 4.16 KiB |      38 | `_start`  | `<unknown>`                                       |

##### `0x397ff` (`usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10`)

|      % |     Size | Objects | Callee    | Location                                          |
| -----: | -------: | ------: | --------- | ------------------------------------------------- |
| 100.0% | 7.77 KiB |      71 | `_start`  | `<unknown>`                                       |
|  49.3% | 3.83 KiB |      35 | `0x397ff` | `usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10` |

##### `__json_value_module_MOD_parse_number` (`src/json-fortran/src/json_value_module.F90`)

|     % |    Size | Objects | Callee                                  | Location                                     |
| ----: | ------: | ------: | --------------------------------------- | -------------------------------------------- |
| 90.2% | 6.8 KiB |     871 | `__json_value_module_MOD_to_integer`    | `src/json-fortran/src/json_value_module.F90` |
|  9.8% |   760 B |       1 | `__json_value_module_MOD_string_to_int` | `src/json-fortran/src/json_value_module.F90` |

##### `0xaaab080e27ff` (`<unknown>`)

|     % |     Size | Objects | Callee           | Location    |
| ----: | -------: | ------: | ---------------- | ----------- |
| 41.1% | 2.31 KiB |     153 | `_start`         | `<unknown>` |
| 35.9% | 2.02 KiB |     103 | `0xffffacf09d67` | `<unknown>` |
| 23.0% | 1.29 KiB |      51 | `0xffffacf08fff` | `<unknown>` |

##### `0x1dbe7` (`[stack]`)

|      % |     Size | Objects | Callee   | Location    |
| -----: | -------: | ------: | -------- | ----------- |
| 100.0% | 4.27 KiB |      39 | `_start` | `<unknown>` |

##### `0x2f9e7` (`usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10`)

|      % |     Size | Objects | Callee   | Location    |
| -----: | -------: | ------: | -------- | ----------- |
| 100.0% | 4.27 KiB |      39 | `_start` | `<unknown>` |

##### `0x7c` (`<unknown>`)

|    % |  Size | Objects | Callee           | Location    |
| ---: | ----: | ------: | ---------------- | ----------- |
| 2.6% | 112 B |       1 | `0xaaab080dde67` | `<unknown>` |
| 2.6% | 112 B |       1 | `0xaaab0820f40f` | `<unknown>` |
| 2.6% | 112 B |       1 | `0xaaab081e0fdf` | `<unknown>` |
| 2.6% | 112 B |       1 | `0xaaab0820e177` | `<unknown>` |
| 2.6% | 112 B |       1 | `0xaaab0826c74f` | `<unknown>` |

##### `0x1e07f` (`[stack]`)

|      % |     Size | Objects | Callee   | Location    |
| -----: | -------: | ------: | -------- | ----------- |
| 100.0% | 4.05 KiB |      37 | `_start` | `<unknown>` |

##### `0x17` (`<unknown>`)

|      % |     Size | Objects | Callee    | Location                                          |
| -----: | -------: | ------: | --------- | ------------------------------------------------- |
| 100.0% | 3.94 KiB |      36 | `0x397ff` | `usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10` |

##### `0x18` (`<unknown>`)

|      % |     Size | Objects | Callee   | Location    |
| -----: | -------: | ------: | -------- | ----------- |
| 100.0% | 3.72 KiB |      34 | `_start` | `<unknown>` |

##### `0xffffacf08fff` (`<unknown>`)

|     % |     Size | Objects | Callee    | Location                                          |
| ----: | -------: | ------: | --------- | ------------------------------------------------- |
| 54.3% | 1.73 KiB |      55 | `_start`  | `<unknown>`                                       |
| 38.3% | 1.22 KiB |      78 | `0x3131f` | `usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10` |
|  6.9% |    224 B |       2 | `0x3143b` | `usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10` |
|  0.6% |     18 B |       1 | `0x3142b` | `usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10` |

##### `0xffffacf09d67` (`<unknown>`)

|     % |     Size | Objects | Callee           | Location    |
| ----: | -------: | ------: | ---------------- | ----------- |
| 65.2% | 2.02 KiB |     103 | `_start`         | `<unknown>` |
| 34.8% | 1.08 KiB |      45 | `0xaaab080e27ff` | `<unknown>` |

##### `0x3131f` (`usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10`)

|     % |     Size | Objects | Callee    | Location    |
| ----: | -------: | ------: | --------- | ----------- |
| 51.9% | 1.22 KiB |      78 | `_start`  | `<unknown>` |
| 33.5% |    808 B |      39 | `0x1d52f` | `[stack]`   |
| 14.6% |    351 B |      39 | `0x1df4f` | `[stack]`   |

## Hottest call stacks

Call stacks ranked by bytes retained in their leaf frame.

|     % |     Size | Objects | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ----: | -------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 31.5% |  282 KiB |   2,577 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                                                  |
| 14.3% |  128 KiB |       1 | `0x1c1b3` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`) ← `0x10be83` ← `0x1029eb` ← `0x10324b` ← `__json_value_module_MOD_json_parse_file` (`src/json-fortran/src/json_value_module.F90`) ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `0x27743` (`usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0x27817` (`usr/lib/aarch64-linux-gnu/libc.so.6`) ← `_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  4.2% | 37.6 KiB |   2,507 | `__json_value_module_MOD_parse_object` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                                                       |
|  3.5% | 31.6 KiB |     937 | `__json_value_module_MOD_parse_value` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                                                        |
|  2.3% | 20.6 KiB |     188 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `0x27743` (`usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817`                                                             |
|  2.3% | 20.1 KiB |     184 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `0x27743` (`usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start`                                                                                           |
|  1.8% |   16 KiB |     146 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `0x27743` (`usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0xffffffffffffffff`                                                                                                             |
|  1.7% | 15.3 KiB |     140 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `0x27743` (`usr/lib/aarch64-linux-gnu/libc.so.6`)                                |
|  1.7% |   15 KiB |     137 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `0x27743` (`usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0x228cf` (`tmp/nix-shell.eMJcEj/profiler-md-input-generation.40bx0a/fortran-base/binary`) ← `0xffffffffffffffff`                                                         |
|  1.3% | 11.7 KiB |     107 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `0x27743` (`usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0x1eadf` (`[stack]`) ← `0x228cf` (`tmp/nix-shell.eMJcEj/profiler-md-input-generation.40bx0a/fortran-base/binary`)                                                                                                 |
|  1.3% | 11.3 KiB |     103 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main`                                           |
|  1.2% | 10.5 KiB |      39 | `__json_value_module_MOD_parse_value` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `0x27743` (`usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817`                                                                   |
|  1.0% | 9.33 KiB |      32 | `__json_value_module_MOD_parse_value` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `0x27743` (`usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0x2b167` (`usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10`) ← `0x1`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  1.0% | 8.53 KiB |      78 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                                                    |
|  1.0% | 8.53 KiB |      78 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `0x27743` (`usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `__json_value_module_MOD_parse_string` (`src/json-fortran/src/json_value_module.F90`) ← `0x1e29f` (`[stack]`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  1.0% | 8.53 KiB |      78 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `0x27743` (`usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0x1ed2f` (`[stack]`) ← `0x1eadf`                                                                                                                                                                                                                           |
|  1.0% | 8.53 KiB |      78 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `0x27743` (`usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0x1d86f` (`[stack]`) ← `__json_value_module_MOD_parse_object` (`src/json-fortran/src/json_value_module.F90`)                                                                                                                                                                                                                                 |
|  1.0% | 8.53 KiB |      78 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `0x27743` (`usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `__json_value_module_MOD_parse_object` (`src/json-fortran/src/json_value_module.F90`) ← `0x1ed2f` (`[stack]`)                                                                                                                                                                                        |
|  0.9% | 7.88 KiB |      72 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`)           |
|  0.8% | 7.55 KiB |      69 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) |
