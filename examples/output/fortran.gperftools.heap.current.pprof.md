# Allocated heap profile

Allocated 41.2 MiB over 434,604 objects (99.4 B per object).

| Category |     % |     Size | Objects |
| -------- | ----: | -------: | ------: |
| Ours     | 56.9% | 23.4 MiB | 410,084 |
| Native   | 43.1% | 17.8 MiB |  24,520 |

## Hottest functions

### Self size

Functions ranked by bytes allocated directly in the function body, excluding callees.

|     % |     Size | Objects | Function                                          | Location                                           |
| ----: | -------: | ------: | ------------------------------------------------- | -------------------------------------------------- |
| 41.7% | 17.2 MiB |  12,051 | `0x1c1b3`                                         | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`   |
| 34.6% | 14.3 MiB | 133,471 | `__json_value_module_MOD_json_value_create`       | `src/json-fortran/src/json_value_module.F90`       |
| 11.5% | 4.73 MiB |  52,270 | `__json_value_module_MOD_parse_string`            | `src/json-fortran/src/json_value_module.F90`       |
|  4.3% | 1.76 MiB |  41,310 | `__json_value_module_MOD_parse_value`             | `src/json-fortran/src/json_value_module.F90`       |
|  3.5% | 1.45 MiB | 122,682 | `__json_value_module_MOD_parse_object`            | `src/json-fortran/src/json_value_module.F90`       |
|  1.6% |  695 KiB |   2,780 | `__json_value_module_MOD_parse_number`            | `src/json-fortran/src/json_value_module.F90`       |
|  1.4% |  594 KiB |   6,277 | `0x1c24b`                                         | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`   |
|  0.7% |  299 KiB |   2,037 | `__json_string_utilities_MOD_unescape_string`     | `src/json-fortran/src/json_string_utilities.F90`   |
|  0.4% |  149 KiB |  19,124 | `__json_value_module_MOD_to_integer`              | `src/json-fortran/src/json_value_module.F90`       |
|  0.2% |  102 KiB |  26,216 | `__json_value_module_MOD_to_logical`              | `src/json-fortran/src/json_value_module.F90`       |
| <0.1% | 20.9 KiB |   4,116 | `0x9980f`                                         | `usr/lib/aarch64-linux-gnu/libc.so.6`              |
| <0.1% | 9.07 KiB |   3,637 | `__json_string_utilities_MOD_string_to_integer`   | `src/json-fortran/src/json_string_utilities.F90`   |
| <0.1% | 6.21 KiB |   6,354 | `__json_value_module_MOD_to_string`               | `src/json-fortran/src/json_value_module.F90`       |
| <0.1% | 2.19 KiB |   2,076 | `0x1c1f3`                                         | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`   |
| <0.1% | 2.06 KiB |     162 | `MAIN__`                                          | `out/profile.f90`                                  |
| <0.1% | 2.01 KiB |       9 | `__json_value_module_MOD_json_initialize`         | `src/json-fortran/src/json_value_module.F90`       |
| <0.1% |     85 B |       5 | `__json_value_module_MOD_json_parse_file`         | `src/json-fortran/src/json_value_module.F90`       |
| <0.1% |     18 B |      18 | `__json_value_module_MOD_json_get_string_by_path` | `src/json-fortran/src/json_get_scalar_by_path.inc` |
| <0.1% |      8 B |       8 | `__json_value_module_MOD_pop_char.part.0`         | `src/json-fortran/src/json_value_module.F90`       |
| <0.1% |      3 B |       1 | `__json_value_module_MOD_json_prepare_parser`     | `src/json-fortran/src/json_value_module.F90`       |

#### Categories

##### Ours

|     % |     Size | Objects | Function                                          | Location                                           |
| ----: | -------: | ------: | ------------------------------------------------- | -------------------------------------------------- |
| 34.6% | 14.3 MiB | 133,471 | `__json_value_module_MOD_json_value_create`       | `src/json-fortran/src/json_value_module.F90`       |
| 11.5% | 4.73 MiB |  52,270 | `__json_value_module_MOD_parse_string`            | `src/json-fortran/src/json_value_module.F90`       |
|  4.3% | 1.76 MiB |  41,310 | `__json_value_module_MOD_parse_value`             | `src/json-fortran/src/json_value_module.F90`       |
|  3.5% | 1.45 MiB | 122,682 | `__json_value_module_MOD_parse_object`            | `src/json-fortran/src/json_value_module.F90`       |
|  1.6% |  695 KiB |   2,780 | `__json_value_module_MOD_parse_number`            | `src/json-fortran/src/json_value_module.F90`       |
|  0.7% |  299 KiB |   2,037 | `__json_string_utilities_MOD_unescape_string`     | `src/json-fortran/src/json_string_utilities.F90`   |
|  0.4% |  149 KiB |  19,124 | `__json_value_module_MOD_to_integer`              | `src/json-fortran/src/json_value_module.F90`       |
|  0.2% |  102 KiB |  26,216 | `__json_value_module_MOD_to_logical`              | `src/json-fortran/src/json_value_module.F90`       |
| <0.1% | 9.07 KiB |   3,637 | `__json_string_utilities_MOD_string_to_integer`   | `src/json-fortran/src/json_string_utilities.F90`   |
| <0.1% | 6.21 KiB |   6,354 | `__json_value_module_MOD_to_string`               | `src/json-fortran/src/json_value_module.F90`       |
| <0.1% | 2.06 KiB |     162 | `MAIN__`                                          | `out/profile.f90`                                  |
| <0.1% | 2.01 KiB |       9 | `__json_value_module_MOD_json_initialize`         | `src/json-fortran/src/json_value_module.F90`       |
| <0.1% |     85 B |       5 | `__json_value_module_MOD_json_parse_file`         | `src/json-fortran/src/json_value_module.F90`       |
| <0.1% |     18 B |      18 | `__json_value_module_MOD_json_get_string_by_path` | `src/json-fortran/src/json_get_scalar_by_path.inc` |
| <0.1% |      8 B |       8 | `__json_value_module_MOD_pop_char.part.0`         | `src/json-fortran/src/json_value_module.F90`       |
| <0.1% |      3 B |       1 | `__json_value_module_MOD_json_prepare_parser`     | `src/json-fortran/src/json_value_module.F90`       |

##### Native

|     % |     Size | Objects | Function  | Location                                         |
| ----: | -------: | ------: | --------- | ------------------------------------------------ |
| 41.7% | 17.2 MiB |  12,051 | `0x1c1b3` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  1.4% |  594 KiB |   6,277 | `0x1c24b` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| <0.1% | 20.9 KiB |   4,116 | `0x9980f` | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| <0.1% | 2.19 KiB |   2,076 | `0x1c1f3` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

#### Lines

Lines ranked by contribution to each function's self size.

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

##### `__json_value_module_MOD_parse_number` (`src/json-fortran/src/json_value_module.F90`)

|      % |    Size | Objects | Location                                           |
| -----: | ------: | ------: | -------------------------------------------------- |
| 100.0% | 695 KiB |   2,780 | `src/json-fortran/src/json_value_module.F90:11216` |

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

##### `__json_string_utilities_MOD_string_to_integer` (`src/json-fortran/src/json_string_utilities.F90`)

|     % |     Size | Objects | Location                                             |
| ----: | -------: | ------: | ---------------------------------------------------- |
| 65.9% | 5.97 KiB |   1,670 | `src/json-fortran/src/json_string_utilities.F90:134` |
| 34.1% | 3.09 KiB |   1,967 | `src/json-fortran/src/json_string_utilities.F90:131` |

##### `__json_value_module_MOD_to_string` (`src/json-fortran/src/json_value_module.F90`)

|      % |     Size | Objects | Location                                           |
| -----: | -------: | ------: | -------------------------------------------------- |
| 100.0% | 6.21 KiB |   6,354 | `src/json-fortran/src/json_value_module.F90:10800` |

##### `MAIN__` (`out/profile.f90`)

|      % |     Size | Objects | Location             |
| -----: | -------: | ------: | -------------------- |
| 100.0% | 2.06 KiB |     162 | `out/profile.f90:32` |

##### `__json_value_module_MOD_json_initialize` (`src/json-fortran/src/json_value_module.F90`)

|     % |  Size | Objects | Location                                          |
| ----: | ----: | ------: | ------------------------------------------------- |
| 99.4% | 2 KiB |       8 | `src/json-fortran/src/json_value_module.F90:1048` |
|  0.6% |  13 B |       1 | `src/json-fortran/src/json_value_module.F90:1196` |

##### `__json_value_module_MOD_json_parse_file` (`src/json-fortran/src/json_value_module.F90`)

|      % | Size | Objects | Location                                          |
| -----: | ---: | ------: | ------------------------------------------------- |
| 100.0% | 85 B |       5 | `src/json-fortran/src/json_value_module.F90:9786` |

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

##### `0x1c1b3` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|     % |     Size | Objects | Caller     | Location                                         |
| ----: | -------: | ------: | ---------- | ------------------------------------------------ |
| 88.9% | 15.3 MiB |   3,832 | `0xfa6bf`  | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  7.3% | 1.25 MiB |      10 | `0x10be83` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  3.2% |  555 KiB |   4,441 | `0x112ecb` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  0.7% |  118 KiB |   3,768 | `0x112ebb` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

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

##### `__json_value_module_MOD_parse_number` (`src/json-fortran/src/json_value_module.F90`)

|     % |    Size | Objects | Caller                                 | Location                                     |
| ----: | ------: | ------: | -------------------------------------- | -------------------------------------------- |
| 71.6% | 498 KiB |   1,990 | `__json_value_module_MOD_parse_array`  | `src/json-fortran/src/json_value_module.F90` |
| 28.4% | 198 KiB |     790 | `__json_value_module_MOD_parse_object` | `src/json-fortran/src/json_value_module.F90` |

##### `0x1c24b` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|     % |     Size | Objects | Caller     | Location                                         |
| ----: | -------: | ------: | ---------- | ------------------------------------------------ |
| 98.7% |  587 KiB |   6,258 | `0x10c847` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  1.1% | 6.68 KiB |       9 | `0x10a85b` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  0.1% |    864 B |       9 | `0x10bd7b` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| <0.1% |     16 B |       1 | `0x10b1fb` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

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

##### `0x9980f` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |     Size | Objects | Caller    | Location                                         |
| ----: | -------: | ------: | --------- | ------------------------------------------------ |
| 99.2% | 20.7 KiB |   4,106 | `0x1c42b` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  0.8% |    180 B |      10 | `0x1c3fb` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `__json_string_utilities_MOD_string_to_integer` (`src/json-fortran/src/json_string_utilities.F90`)

|      % |     Size | Objects | Caller                                             | Location                                     |
| -----: | -------: | ------: | -------------------------------------------------- | -------------------------------------------- |
| 100.0% | 9.07 KiB |   3,636 | `__json_value_module_MOD_string_to_int`            | `src/json-fortran/src/json_value_module.F90` |
|  <0.1% |      1 B |       1 | `__json_value_module_MOD_json_get_by_path_default` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_to_string` (`src/json-fortran/src/json_value_module.F90`)

|      % |     Size | Objects | Caller                                | Location                                     |
| -----: | -------: | ------: | ------------------------------------- | -------------------------------------------- |
| 100.0% | 6.21 KiB |   6,354 | `__json_value_module_MOD_parse_value` | `src/json-fortran/src/json_value_module.F90` |

##### `0x1c1f3` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|      % |     Size | Objects | Caller     | Location                                         |
| -----: | -------: | ------: | ---------- | ------------------------------------------------ |
| 100.0% | 2.19 KiB |   2,076 | `0x118783` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `MAIN__` (`out/profile.f90`)

|      % |     Size | Objects | Caller | Location          |
| -----: | -------: | ------: | ------ | ----------------- |
| 100.0% | 2.06 KiB |     162 | `main` | `out/profile.f90` |

##### `__json_value_module_MOD_json_initialize` (`src/json-fortran/src/json_value_module.F90`)

|      % |     Size | Objects | Caller                                                | Location                                    |
| -----: | -------: | ------: | ----------------------------------------------------- | ------------------------------------------- |
| 100.0% | 2.01 KiB |       9 | `__json_file_module_MOD_initialize_json_core_in_file` | `src/json-fortran/src/json_file_module.F90` |

##### `__json_value_module_MOD_json_parse_file` (`src/json-fortran/src/json_value_module.F90`)

|      % | Size | Objects | Caller                                  | Location                                    |
| -----: | ---: | ------: | --------------------------------------- | ------------------------------------------- |
| 100.0% | 85 B |       5 | `__json_file_module_MOD_json_file_load` | `src/json-fortran/src/json_file_module.F90` |

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

|     % |     Size | Objects | Function                                        | Location                                         |
| ----: | -------: | ------: | ----------------------------------------------- | ------------------------------------------------ |
| 95.0% | 39.1 MiB | 433,143 | `__json_value_module_MOD_parse_object`          | `src/json-fortran/src/json_value_module.F90`     |
| 54.6% | 22.5 MiB | 231,808 | `__json_value_module_MOD_parse_array`           | `src/json-fortran/src/json_value_module.F90`     |
| 41.7% | 17.2 MiB |  12,051 | `0x1c1b3`                                       | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| 40.2% | 16.5 MiB |  48,798 | `__json_value_module_MOD_parse_number`          | `src/json-fortran/src/json_value_module.F90`     |
| 39.1% | 16.1 MiB |  28,063 | `__json_string_utilities_MOD_string_to_integer` | `src/json-fortran/src/json_string_utilities.F90` |
| 38.2% | 15.7 MiB |  26,893 | `__json_value_module_MOD_string_to_int`         | `src/json-fortran/src/json_value_module.F90`     |
| 37.1% | 15.3 MiB |   7,938 | `0x109623`                                      | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| 37.0% | 15.3 MiB |   3,832 | `0xfa6bf`                                       | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| 34.6% | 14.3 MiB | 133,471 | `__json_value_module_MOD_json_value_create`     | `src/json-fortran/src/json_value_module.F90`     |
| 33.5% | 13.8 MiB | 168,318 | `MAIN__`                                        | `out/profile.f90`                                |
| 33.3% | 13.7 MiB | 185,235 | `__json_value_module_MOD_json_parse_file`       | `src/json-fortran/src/json_value_module.F90`     |
| 32.4% | 13.4 MiB | 175,450 | `__json_file_module_MOD_json_file_load`         | `src/json-fortran/src/json_file_module.F90`      |
| 31.6% |   13 MiB | 156,448 | `main`                                          | `out/profile.f90`                                |
| 30.4% | 12.5 MiB | 146,846 | `0x27743`                                       | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| 28.9% | 11.9 MiB | 135,682 | `0x27817`                                       | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| 24.0% | 9.88 MiB | 124,287 | `_start`                                        | `<unknown>`                                      |
| 12.7% | 5.24 MiB |  59,085 | `__json_value_module_MOD_parse_string`          | `src/json-fortran/src/json_value_module.F90`     |
|  8.8% | 3.63 MiB |  62,332 | `__json_value_module_MOD_parse_value`           | `src/json-fortran/src/json_value_module.F90`     |
|  3.0% | 1.25 MiB |      29 | `0x10324b`                                      | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  3.0% | 1.25 MiB |      19 | `0x1029eb`                                      | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

#### Categories

##### Ours

|     % |     Size | Objects | Function                                           | Location                                                                          |
| ----: | -------: | ------: | -------------------------------------------------- | --------------------------------------------------------------------------------- |
| 95.0% | 39.1 MiB | 433,143 | `__json_value_module_MOD_parse_object`             | `src/json-fortran/src/json_value_module.F90`                                      |
| 54.6% | 22.5 MiB | 231,808 | `__json_value_module_MOD_parse_array`              | `src/json-fortran/src/json_value_module.F90`                                      |
| 40.2% | 16.5 MiB |  48,798 | `__json_value_module_MOD_parse_number`             | `src/json-fortran/src/json_value_module.F90`                                      |
| 39.1% | 16.1 MiB |  28,063 | `__json_string_utilities_MOD_string_to_integer`    | `src/json-fortran/src/json_string_utilities.F90`                                  |
| 38.2% | 15.7 MiB |  26,893 | `__json_value_module_MOD_string_to_int`            | `src/json-fortran/src/json_value_module.F90`                                      |
| 34.6% | 14.3 MiB | 133,471 | `__json_value_module_MOD_json_value_create`        | `src/json-fortran/src/json_value_module.F90`                                      |
| 33.5% | 13.8 MiB | 168,318 | `MAIN__`                                           | `out/profile.f90`                                                                 |
| 33.3% | 13.7 MiB | 185,235 | `__json_value_module_MOD_json_parse_file`          | `src/json-fortran/src/json_value_module.F90`                                      |
| 32.4% | 13.4 MiB | 175,450 | `__json_file_module_MOD_json_file_load`            | `src/json-fortran/src/json_file_module.F90`                                       |
| 31.6% |   13 MiB | 156,448 | `main`                                             | `out/profile.f90`                                                                 |
| 12.7% | 5.24 MiB |  59,085 | `__json_value_module_MOD_parse_string`             | `src/json-fortran/src/json_value_module.F90`                                      |
|  8.8% | 3.63 MiB |  62,332 | `__json_value_module_MOD_parse_value`              | `src/json-fortran/src/json_value_module.F90`                                      |
|  2.2% |  932 KiB |   8,760 | `0x228cf`                                          | `tmp/nix-shell.eMJcEj/profiler-md-input-generation.40bx0a/fortran-current/binary` |
|  1.7% |  730 KiB |   7,938 | `0x1eddf`                                          | `[stack]`                                                                         |
|  1.4% |  606 KiB |   5,684 | `0x1eb8f`                                          | `[stack]`                                                                         |
|  1.0% |  416 KiB |   1,132 | `__json_value_module_MOD_json_get_string_by_path`  | `src/json-fortran/src/json_get_scalar_by_path.inc`                                |
|  1.0% |  416 KiB |   1,132 | `__json_file_module_MOD_json_file_get_string`      | `src/json-fortran/src/json_file_module.F90`                                       |
|  1.0% |  416 KiB |   1,114 | `__json_value_module_MOD_json_get_by_path_default` | `src/json-fortran/src/json_value_module.F90`                                      |
|  1.0% |  416 KiB |   1,114 | `__json_value_module_MOD_json_get_by_path`         | `src/json-fortran/src/json_value_module.F90`                                      |
|  0.7% |  299 KiB |   2,037 | `__json_string_utilities_MOD_unescape_string`      | `src/json-fortran/src/json_string_utilities.F90`                                  |

##### Native

|     % |     Size | Objects | Function             | Location                                         |
| ----: | -------: | ------: | -------------------- | ------------------------------------------------ |
| 41.7% | 17.2 MiB |  12,051 | `0x1c1b3`            | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| 37.1% | 15.3 MiB |   7,938 | `0x109623`           | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| 37.0% | 15.3 MiB |   3,832 | `0xfa6bf`            | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| 30.4% | 12.5 MiB | 146,846 | `0x27743`            | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| 28.9% | 11.9 MiB | 135,682 | `0x27817`            | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| 24.0% | 9.88 MiB | 124,287 | `_start`             | `<unknown>`                                      |
|  3.0% | 1.25 MiB |      29 | `0x10324b`           | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  3.0% | 1.25 MiB |      19 | `0x1029eb`           | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  3.0% | 1.25 MiB |      10 | `0x10be83`           | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  3.0% | 1.24 MiB |  14,477 | `0x1093fb`           | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  2.2% |  934 KiB |     235 | `0x4`                | `<unknown>`                                      |
|  2.1% |  905 KiB |  16,065 | `0xffffffffffffffff` | `<unknown>`                                      |
|  1.6% |  673 KiB |   8,209 | `0x10b28f`           | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  1.4% |  594 KiB |   6,277 | `0x1c24b`            | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  1.4% |  587 KiB |   6,258 | `0x10c847`           | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  1.4% |  587 KiB |   6,258 | `0x10ab63`           | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  1.4% |  587 KiB |   6,258 | `0x10b283`           | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  1.3% |  555 KiB |   4,441 | `0x112ecb`           | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  1.2% |  506 KiB |     129 | `0x5`                | `<unknown>`                                      |
|  1.2% |  487 KiB |   3,133 | `0xffffbbc48fff`     | `<unknown>`                                      |

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
| <0.1% |   11 KiB |     904 | `0xffffbbc49d67`                            | `<unknown>`                                  |
| <0.1% | 4.57 KiB |   1,171 | `_start`                                    | `<unknown>`                                  |

##### `__json_value_module_MOD_parse_number` (`src/json-fortran/src/json_value_module.F90`)

|     % |     Size | Objects | Callee                                   | Location                                     |
| ----: | -------: | ------: | ---------------------------------------- | -------------------------------------------- |
| 95.0% | 15.7 MiB |  26,893 | `__json_value_module_MOD_string_to_int`  | `src/json-fortran/src/json_value_module.F90` |
|  0.9% |  149 KiB |  19,124 | `__json_value_module_MOD_to_integer`     | `src/json-fortran/src/json_value_module.F90` |
| <0.1% |    128 B |       1 | `__json_value_module_MOD_string_to_dble` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_string_utilities_MOD_string_to_integer` (`src/json-fortran/src/json_string_utilities.F90`)

|     % |     Size | Objects | Callee     | Location                                         |
| ----: | -------: | ------: | ---------- | ------------------------------------------------ |
| 92.3% | 14.9 MiB |   7,838 | `0x109623` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  7.6% | 1.23 MiB |  14,464 | `0x1093fb` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| <0.1% | 2.06 KiB |   2,068 | `0x118783` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| <0.1% |    448 B |      56 | `_start`   | `<unknown>`                                      |

##### `__json_value_module_MOD_string_to_int` (`src/json-fortran/src/json_value_module.F90`)

|      % |     Size | Objects | Callee                                          | Location                                         |
| -----: | -------: | ------: | ----------------------------------------------- | ------------------------------------------------ |
| 100.0% | 15.7 MiB |  26,893 | `__json_string_utilities_MOD_string_to_integer` | `src/json-fortran/src/json_string_utilities.F90` |

##### `0x109623` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|     % |     Size | Objects | Callee    | Location                                         |
| ----: | -------: | ------: | --------- | ------------------------------------------------ |
| 99.9% | 15.3 MiB |   3,832 | `0xfa6bf` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  0.1% | 20.7 KiB |   4,106 | `0xfa6b3` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0xfa6bf` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|      % |     Size | Objects | Callee    | Location                                         |
| -----: | -------: | ------: | --------- | ------------------------------------------------ |
| 100.0% | 15.3 MiB |   3,832 | `0x1c1b3` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `MAIN__` (`out/profile.f90`)

|     % |     Size | Objects | Callee                                                | Location                                          |
| ----: | -------: | ------: | ----------------------------------------------------- | ------------------------------------------------- |
| 94.1% |   13 MiB | 166,895 | `__json_file_module_MOD_json_file_load`               | `src/json-fortran/src/json_file_module.F90`       |
|  2.9% |  416 KiB |   1,132 | `__json_file_module_MOD_json_file_get_string`         | `src/json-fortran/src/json_file_module.F90`       |
|  2.9% |  404 KiB |      99 | `0x109623`                                            | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`  |
|  0.1% |  7.5 KiB |      80 | `0x2be03`                                             | `usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10` |
| <0.1% | 6.18 KiB |      11 | `__json_file_module_MOD_initialize_json_core_in_file` | `src/json-fortran/src/json_file_module.F90`       |

##### `__json_value_module_MOD_json_parse_file` (`src/json-fortran/src/json_value_module.F90`)

|     % |     Size | Objects | Callee                                      | Location                                         |
| ----: | -------: | ------: | ------------------------------------------- | ------------------------------------------------ |
| 90.9% | 12.5 MiB | 185,189 | `__json_value_module_MOD_parse_object`      | `src/json-fortran/src/json_value_module.F90`     |
|  9.1% | 1.25 MiB |      29 | `0x10324b`                                  | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  2.2% |  315 KiB |   2,096 | `_start`                                    | `<unknown>`                                      |
| <0.1% |    336 B |       3 | `__json_value_module_MOD_json_value_create` | `src/json-fortran/src/json_value_module.F90`     |
| <0.1% |      8 B |       8 | `__json_value_module_MOD_json_parse_end`    | `src/json-fortran/src/json_value_module.F90`     |

##### `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`)

|      % |     Size | Objects | Callee                                    | Location                                     |
| -----: | -------: | ------: | ----------------------------------------- | -------------------------------------------- |
| 100.0% | 13.4 MiB | 175,450 | `__json_value_module_MOD_json_parse_file` | `src/json-fortran/src/json_value_module.F90` |
|   1.4% |  189 KiB |   1,866 | `_start`                                  | `<unknown>`                                  |

##### `main` (`out/profile.f90`)

|      % |    Size | Objects | Callee    | Location                              |
| -----: | ------: | ------: | --------- | ------------------------------------- |
| 100.0% |  13 MiB | 156,448 | `MAIN__`  | `out/profile.f90`                     |
|   1.5% | 203 KiB |   1,856 | `_start`  | `<unknown>`                           |
|  <0.1% |    84 B |      84 | `0x27743` | `usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x27743` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |     Size | Objects | Callee   | Location          |
| -----: | -------: | ------: | -------- | ----------------- |
| 100.0% | 12.5 MiB | 146,846 | `main`   | `out/profile.f90` |
|  <0.1% | 2.05 KiB |     102 | `_start` | `<unknown>`       |

##### `0x27817` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |     Size | Objects | Callee    | Location                              |
| -----: | -------: | ------: | --------- | ------------------------------------- |
| 100.0% | 11.9 MiB | 135,682 | `0x27743` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  10.5% | 1.25 MiB |      72 | `_start`  | `<unknown>`                           |

##### `_start` (`<unknown>`)

|      % |     Size | Objects | Callee    | Location                              |
| -----: | -------: | ------: | --------- | ------------------------------------- |
| 100.0% | 9.88 MiB | 124,287 | `0x27817` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  <0.1% | 3.16 KiB |     101 | `_start`  | `<unknown>`                           |

##### `__json_value_module_MOD_parse_string` (`src/json-fortran/src/json_value_module.F90`)

|     % |     Size | Objects | Callee                                        | Location                                          |
| ----: | -------: | ------: | --------------------------------------------- | ------------------------------------------------- |
|  5.6% |  299 KiB |   2,037 | `__json_string_utilities_MOD_unescape_string` | `src/json-fortran/src/json_string_utilities.F90`  |
|  3.9% |  211 KiB |   2,815 | `_start`                                      | `<unknown>`                                       |
|  0.3% | 18.3 KiB |   1,963 | `0xffffffffffffffff`                          | `<unknown>`                                       |
| <0.1% |     72 B |       9 | `0x39387`                                     | `usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10` |

##### `__json_value_module_MOD_parse_value` (`src/json-fortran/src/json_value_module.F90`)

|     % |     Size | Objects | Callee                                 | Location                                     |
| ----: | -------: | ------: | -------------------------------------- | -------------------------------------------- |
| 46.3% | 1.68 MiB |  13,000 | `__json_value_module_MOD_parse_string` | `src/json-fortran/src/json_value_module.F90` |
|  2.5% | 92.3 KiB |     844 | `_start`                               | `<unknown>`                                  |
|  2.4% | 90.1 KiB |     824 | `0x1dcff`                              | `[stack]`                                    |
|  0.2% | 6.21 KiB |   6,354 | `__json_value_module_MOD_to_string`    | `src/json-fortran/src/json_value_module.F90` |

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

##### `0x1093fb` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|     % |     Size | Objects | Callee     | Location                                         |
| ----: | -------: | ------: | ---------- | ------------------------------------------------ |
| 53.1% |  673 KiB |   8,209 | `0x10b28f` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| 46.3% |  587 KiB |   6,258 | `0x10b283` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  0.5% | 6.68 KiB |       9 | `0x10b26f` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| <0.1% |     16 B |       1 | `0x10b263` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x4` (`<unknown>`)

|     % |     Size | Objects | Callee           | Location    |
| ----: | -------: | ------: | ---------------- | ----------- |
| 44.1% |  412 KiB |     101 | `0xaaab03f7a177` | `<unknown>` |
|  2.2% | 20.4 KiB |       5 | `_start`         | `<unknown>` |
|  0.9% | 8.16 KiB |       2 | `0xaaab03e3bb67` | `<unknown>` |
|  0.9% | 8.16 KiB |       2 | `0xaaab03e69bd7` | `<unknown>` |
|  0.9% | 8.16 KiB |       2 | `0xaaab03e99b2f` | `<unknown>` |

##### `0x228cf` (`tmp/nix-shell.eMJcEj/profiler-md-input-generation.40bx0a/fortran-current/binary`)

|     % |     Size | Objects | Callee    | Location    |
| ----: | -------: | ------: | --------- | ----------- |
| 48.9% |  455 KiB |   4,413 | `_start`  | `<unknown>` |
| 30.1% |  280 KiB |   2,564 | `0x1eb8f` | `[stack]`   |
| 10.6% | 98.5 KiB |     889 | `0x1eddf` | `[stack]`   |
| 10.5% | 97.8 KiB |     894 | `0x1dc97` | `[stack]`   |

##### `0xffffffffffffffff` (`<unknown>`)

|     % |     Size | Objects | Callee               | Location                                                                          |
| ----: | -------: | ------: | -------------------- | --------------------------------------------------------------------------------- |
| 57.5% |  520 KiB |   8,906 | `_start`             | `<unknown>`                                                                       |
| 39.3% |  356 KiB |   3,251 | `0x228cf`            | `tmp/nix-shell.eMJcEj/profiler-md-input-generation.40bx0a/fortran-current/binary` |
|  2.2% | 20.1 KiB |   1,972 | `0x1e9d`             | `<unknown>`                                                                       |
|  0.8% | 7.33 KiB |     938 | `0xff`               | `<unknown>`                                                                       |
|  0.1% |    920 B |     920 | `0x3fe62e42fefa39ee` | `<unknown>`                                                                       |

##### `0x1eddf` (`[stack]`)

|     % |     Size | Objects | Callee                                    | Location                                     |
| ----: | -------: | ------: | ----------------------------------------- | -------------------------------------------- |
| 57.1% |  417 KiB |   3,800 | `_start`                                  | `<unknown>`                                  |
| 28.1% |  205 KiB |   1,878 | `__json_value_module_MOD_parse_object`    | `src/json-fortran/src/json_value_module.F90` |
| 12.6% | 92.3 KiB |     844 | `__json_value_module_MOD_parse_value`     | `src/json-fortran/src/json_value_module.F90` |
|  1.4% | 10.1 KiB |     939 | `0xb`                                     | `<unknown>`                                  |
|  0.3% | 2.08 KiB |      19 | `__json_value_module_MOD_pop_char.part.0` | `src/json-fortran/src/json_value_module.F90` |

##### `0x10b28f` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|     % |    Size | Objects | Callee     | Location                                         |
| ----: | ------: | ------: | ---------- | ------------------------------------------------ |
| 82.5% | 555 KiB |   4,441 | `0x112ecb` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| 17.5% | 118 KiB |   3,768 | `0x112ebb` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x1eb8f` (`[stack]`)

|     % |     Size | Objects | Callee    | Location    |
| ----: | -------: | ------: | --------- | ----------- |
| 52.5% |  318 KiB |   2,911 | `0x1eddf` | `[stack]`   |
| 47.1% |  286 KiB |   2,611 | `_start`  | `<unknown>` |
|  0.3% | 2.06 KiB |     162 | `0x0`     | `<unknown>` |

##### `0x10c847` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|      % |    Size | Objects | Callee    | Location                                         |
| -----: | ------: | ------: | --------- | ------------------------------------------------ |
| 100.0% | 587 KiB |   6,258 | `0x1c24b` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x10ab63` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|      % |    Size | Objects | Callee     | Location                                         |
| -----: | ------: | ------: | ---------- | ------------------------------------------------ |
| 100.0% | 587 KiB |   6,258 | `0x10c847` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x10b283` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|      % |    Size | Objects | Callee     | Location                                         |
| -----: | ------: | ------: | ---------- | ------------------------------------------------ |
| 100.0% | 587 KiB |   6,258 | `0x10ab63` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x112ecb` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|      % |    Size | Objects | Callee    | Location                                         |
| -----: | ------: | ------: | --------- | ------------------------------------------------ |
| 100.0% | 555 KiB |   4,441 | `0x1c1b3` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x5` (`<unknown>`)

|    % |     Size | Objects | Callee           | Location    |
| ---: | -------: | ------: | ---------------- | ----------- |
| 7.3% | 36.7 KiB |       9 | `_start`         | `<unknown>` |
| 2.4% | 12.2 KiB |       3 | `0xaaab03dae2f7` | `<unknown>` |
| 1.6% | 8.16 KiB |       2 | `0xaaab03f51417` | `<unknown>` |
| 1.6% | 8.16 KiB |       2 | `0xaaab03e3b3ef` | `<unknown>` |
| 1.6% | 8.16 KiB |       2 | `0xaaab03e0becf` | `<unknown>` |

##### `0xffffbbc48fff` (`<unknown>`)

|     % |     Size | Objects | Callee    | Location                                          |
| ----: | -------: | ------: | --------- | ------------------------------------------------- |
| 92.6% |  450 KiB |   1,180 | `_start`  | `<unknown>`                                       |
|  6.1% | 29.9 KiB |   1,887 | `0x3131f` | `usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10` |
|  1.3% | 6.13 KiB |      56 | `0x3143b` | `usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10` |
| <0.1% |    180 B |      10 | `0x3142b` | `usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10` |

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

|     % |     Size | Objects | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ----: | -------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 15.8% |  6.5 MiB |  60,816 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                      |
| 13.3% | 5.47 MiB |   1,374 | `0x1c1b3` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`) ← `0xfa6bf` ← `0x109623` ← `__json_string_utilities_MOD_string_to_integer` (`src/json-fortran/src/json_string_utilities.F90`) ← `__json_value_module_MOD_string_to_int` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_number` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` |
|  8.3% | 3.42 MiB |     858 | `0x1c1b3` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`) ← `0xfa6bf` ← `0x109623` ← `__json_string_utilities_MOD_string_to_integer` (`src/json-fortran/src/json_string_utilities.F90`) ← `__json_value_module_MOD_string_to_int` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_number` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`  |
|  7.7% | 3.17 MiB |     796 | `0x1c1b3` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`) ← `0xfa6bf` ← `0x109623` ← `__json_string_utilities_MOD_string_to_integer` (`src/json-fortran/src/json_string_utilities.F90`) ← `__json_value_module_MOD_string_to_int` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_number` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`   |
|  3.1% |  1.3 MiB |  13,114 | `__json_value_module_MOD_parse_string` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                           |
|  3.0% | 1.25 MiB |      10 | `0x1c1b3` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`) ← `0x10be83` ← `0x1029eb` ← `0x10324b` ← `__json_value_module_MOD_json_parse_file` (`src/json-fortran/src/json_value_module.F90`) ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `0x27743` (`usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0x27817` (`usr/lib/aarch64-linux-gnu/libc.so.6`) ← `_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  2.5% | 1.04 MiB |   7,186 | `__json_value_module_MOD_parse_string` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_value` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                            |
|  2.4% |    1 MiB |     252 | `0x1c1b3` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`) ← `0xfa6bf` ← `0x109623` ← `__json_string_utilities_MOD_string_to_integer` (`src/json-fortran/src/json_string_utilities.F90`) ← `__json_value_module_MOD_string_to_int` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_number` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `0x27743` (`usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817`            |
|  2.1% |  891 KiB |  59,189 | `__json_value_module_MOD_parse_object` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                           |
|  1.8% |  743 KiB |  22,123 | `__json_value_module_MOD_parse_value` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                            |
|  1.2% |  497 KiB |   4,544 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `0x27743` (`usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817`                                 |
|  1.2% |  486 KiB |   4,441 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `0x27743` (`usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start`                                                               |
|  1.0% |  429 KiB |   1,716 | `__json_value_module_MOD_parse_number` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                             |
|  1.0% |  412 KiB |     101 | `0x1c1b3` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`) ← `0xfa6bf` ← `0x109623` ← `__json_string_utilities_MOD_string_to_integer` (`src/json-fortran/src/json_string_utilities.F90`) ← `__json_value_module_MOD_json_get_by_path_default` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_json_get_by_path` ← `__json_value_module_MOD_json_get_string_by_path` (`src/json-fortran/src/json_get_scalar_by_path.inc`) ← `__json_file_module_MOD_json_file_get_string` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `0x27743` (`usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0xaaab03f7a177` ← `0x4`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  1.0% |  404 KiB |      99 | `0x1c1b3` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`) ← `0xfa6bf` ← `0x109623` ← `MAIN__` (`out/profile.f90`) ← `main` ← `0x27743` (`usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0xffffbbc48fff` ← `0xaaab03e6de5f`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  0.9% |  392 KiB |      96 | `0x1c1b3` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`) ← `0xfa6bf` ← `0x109623` ← `__json_string_utilities_MOD_string_to_integer` (`src/json-fortran/src/json_string_utilities.F90`) ← `__json_value_module_MOD_string_to_int` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_number` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`  |
|  0.9% |  383 KiB |   3,503 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `0x27743` (`usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0xffffffffffffffff`                                                                                 |
|  0.9% |  374 KiB |   3,416 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `0x27743` (`usr/lib/aarch64-linux-gnu/libc.so.6`)    |
|  0.8% |  356 KiB |   3,251 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `0x27743` (`usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0x228cf` (`tmp/nix-shell.eMJcEj/profiler-md-input-generation.40bx0a/fortran-current/binary`) ← `0xffffffffffffffff`                          |
|  0.7% |  315 KiB |   2,880 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                       |

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

|     % |     Size | Objects | Function                                    | Location                                                                          |
| ----: | -------: | ------: | ------------------------------------------- | --------------------------------------------------------------------------------- |
| 85.6% |  766 KiB |  14,814 | `__json_value_module_MOD_parse_object`      | `src/json-fortran/src/json_value_module.F90`                                      |
| 68.3% |  611 KiB |   5,584 | `__json_value_module_MOD_json_value_create` | `src/json-fortran/src/json_value_module.F90`                                      |
| 51.6% |  462 KiB |   6,153 | `__json_value_module_MOD_json_parse_file`   | `src/json-fortran/src/json_value_module.F90`                                      |
| 50.0% |  447 KiB |   5,853 | `__json_file_module_MOD_json_file_load`     | `src/json-fortran/src/json_file_module.F90`                                       |
| 48.5% |  433 KiB |   5,580 | `MAIN__`                                    | `out/profile.f90`                                                                 |
| 46.6% |  417 KiB |   5,258 | `main`                                      | `out/profile.f90`                                                                 |
| 45.6% |  408 KiB |   7,612 | `__json_value_module_MOD_parse_array`       | `src/json-fortran/src/json_value_module.F90`                                      |
| 45.0% |  402 KiB |   4,979 | `0x27743`                                   | `usr/lib/aarch64-linux-gnu/libc.so.6`                                             |
| 42.8% |  382 KiB |   4,623 | `0x27817`                                   | `usr/lib/aarch64-linux-gnu/libc.so.6`                                             |
| 39.1% |  350 KiB |   4,220 | `_start`                                    | `<unknown>`                                                                       |
| 14.3% |  128 KiB |       3 | `0x10324b`                                  | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`                                  |
| 14.3% |  128 KiB |       2 | `0x1029eb`                                  | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`                                  |
| 14.3% |  128 KiB |       1 | `0x1c1b3`                                   | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`                                  |
| 14.3% |  128 KiB |       1 | `0x10be83`                                  | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`                                  |
|  9.5% | 84.8 KiB |   1,983 | `__json_value_module_MOD_parse_value`       | `src/json-fortran/src/json_value_module.F90`                                      |
|  4.3% | 38.8 KiB |     355 | `0x228cf`                                   | `tmp/nix-shell.eMJcEj/profiler-md-input-generation.40bx0a/fortran-current/binary` |
|  4.3% |   38 KiB |     584 | `0xffffffffffffffff`                        | `<unknown>`                                                                       |
|  3.3% | 29.6 KiB |     307 | `0x1eddf`                                   | `[stack]`                                                                         |
|  2.8% | 25.2 KiB |     230 | `0x1eb8f`                                   | `[stack]`                                                                         |
|  1.5% | 13.6 KiB |      99 | `0x1`                                       | `<unknown>`                                                                       |

#### Categories

##### Ours

|     % |     Size | Objects | Function                                    | Location                                                                          |
| ----: | -------: | ------: | ------------------------------------------- | --------------------------------------------------------------------------------- |
| 85.6% |  766 KiB |  14,814 | `__json_value_module_MOD_parse_object`      | `src/json-fortran/src/json_value_module.F90`                                      |
| 68.3% |  611 KiB |   5,584 | `__json_value_module_MOD_json_value_create` | `src/json-fortran/src/json_value_module.F90`                                      |
| 51.6% |  462 KiB |   6,153 | `__json_value_module_MOD_json_parse_file`   | `src/json-fortran/src/json_value_module.F90`                                      |
| 50.0% |  447 KiB |   5,853 | `__json_file_module_MOD_json_file_load`     | `src/json-fortran/src/json_file_module.F90`                                       |
| 48.5% |  433 KiB |   5,580 | `MAIN__`                                    | `out/profile.f90`                                                                 |
| 46.6% |  417 KiB |   5,258 | `main`                                      | `out/profile.f90`                                                                 |
| 45.6% |  408 KiB |   7,612 | `__json_value_module_MOD_parse_array`       | `src/json-fortran/src/json_value_module.F90`                                      |
|  9.5% | 84.8 KiB |   1,983 | `__json_value_module_MOD_parse_value`       | `src/json-fortran/src/json_value_module.F90`                                      |
|  4.3% | 38.8 KiB |     355 | `0x228cf`                                   | `tmp/nix-shell.eMJcEj/profiler-md-input-generation.40bx0a/fortran-current/binary` |
|  3.3% | 29.6 KiB |     307 | `0x1eddf`                                   | `[stack]`                                                                         |
|  2.8% | 25.2 KiB |     230 | `0x1eb8f`                                   | `[stack]`                                                                         |
|  1.1% | 9.78 KiB |     200 | `__json_value_module_MOD_parse_string`      | `src/json-fortran/src/json_value_module.F90`                                      |
|  1.0% | 8.53 KiB |      78 | `0x1e34f`                                   | `[stack]`                                                                         |
|  1.0% | 8.53 KiB |      78 | `0x1d91f`                                   | `[stack]`                                                                         |
|  1.0% | 8.53 KiB |      78 | `0x1da1f`                                   | `[stack]`                                                                         |
|  0.8% | 7.55 KiB |     872 | `__json_value_module_MOD_parse_number`      | `src/json-fortran/src/json_value_module.F90`                                      |
|  0.8% |  6.8 KiB |     871 | `__json_value_module_MOD_to_integer`        | `src/json-fortran/src/json_value_module.F90`                                      |
|  0.5% | 4.29 KiB |   1,098 | `__json_value_module_MOD_to_logical`        | `src/json-fortran/src/json_value_module.F90`                                      |
|  0.5% | 4.27 KiB |      39 | `0x1dc97`                                   | `[stack]`                                                                         |
|  0.5% | 4.05 KiB |      37 | `0x1e12f`                                   | `[stack]`                                                                         |

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
|  0.9% | 8.31 KiB |      76 | `0xffffbb3b003f`     | `<unknown>`                                       |
|  0.9% | 7.77 KiB |      71 | `0x397ff`            | `usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10` |
|  0.6% | 5.63 KiB |     307 | `0xaaab03d3c7ff`     | `<unknown>`                                       |
|  0.5% | 4.27 KiB |      39 | `0x2f9e7`            | `usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10` |
|  0.5% | 4.27 KiB |      39 | `0x7c`               | `<unknown>`                                       |
|  0.4% | 3.94 KiB |      36 | `0x17`               | `<unknown>`                                       |
|  0.4% | 3.72 KiB |      34 | `0x18`               | `<unknown>`                                       |
|  0.4% | 3.19 KiB |     136 | `0xffffbbc48fff`     | `<unknown>`                                       |
|  0.3% | 3.09 KiB |     148 | `0xffffbbc49d67`     | `<unknown>`                                       |
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
| 4.1% |  3.5 KiB |      32 | `0x1dcff`                           | `[stack]`                                    |
| 0.1% |     52 B |      52 | `__json_value_module_MOD_to_string` | `src/json-fortran/src/json_value_module.F90` |

##### `0x228cf` (`tmp/nix-shell.eMJcEj/profiler-md-input-generation.40bx0a/fortran-current/binary`)

|     % |     Size | Objects | Callee    | Location    |
| ----: | -------: | ------: | --------- | ----------- |
| 49.3% | 19.1 KiB |     175 | `_start`  | `<unknown>` |
| 30.1% | 11.7 KiB |     107 | `0x1eb8f` | `[stack]`   |
| 11.0% | 4.27 KiB |      39 | `0x1dc97` | `[stack]`   |
|  9.6% | 3.72 KiB |      34 | `0x1eddf` | `[stack]`   |

##### `0xffffffffffffffff` (`<unknown>`)

|     % |     Size | Objects | Callee               | Location                                                                          |
| ----: | -------: | ------: | -------------------- | --------------------------------------------------------------------------------- |
| 57.6% | 21.9 KiB |     325 | `_start`             | `<unknown>`                                                                       |
| 39.4% |   15 KiB |     137 | `0x228cf`            | `tmp/nix-shell.eMJcEj/profiler-md-input-generation.40bx0a/fortran-current/binary` |
|  2.2% |    856 B |      82 | `0x1e9d`             | `<unknown>`                                                                       |
|  2.0% |    764 B |       2 | `0xffffffffffffffff` | `<unknown>`                                                                       |
|  0.8% |    304 B |      38 | `0xff`               | `<unknown>`                                                                       |

##### `0x1eddf` (`[stack]`)

|     % |     Size | Objects | Callee                                    | Location                                     |
| ----: | -------: | ------: | ----------------------------------------- | -------------------------------------------- |
| 57.2% |   17 KiB |     155 | `_start`                                  | `<unknown>`                                  |
| 28.8% | 8.53 KiB |      78 | `__json_value_module_MOD_parse_object`    | `src/json-fortran/src/json_value_module.F90` |
| 12.6% | 3.72 KiB |      34 | `__json_value_module_MOD_parse_value`     | `src/json-fortran/src/json_value_module.F90` |
|  1.0% |    312 B |      39 | `0xaaab03d3c7ff`                          | `<unknown>`                                  |
|  0.4% |    112 B |       1 | `__json_value_module_MOD_pop_char.part.0` | `src/json-fortran/src/json_value_module.F90` |

##### `0x1eb8f` (`[stack]`)

|     % |     Size | Objects | Callee    | Location    |
| ----: | -------: | ------: | --------- | ----------- |
| 52.6% | 13.2 KiB |     121 | `0x1eddf` | `[stack]`   |
| 47.4% | 11.9 KiB |     109 | `_start`  | `<unknown>` |

##### `0x1` (`<unknown>`)

|     % |     Size | Objects | Callee               | Location                                          |
| ----: | -------: | ------: | -------------------- | ------------------------------------------------- |
| 68.5% | 9.33 KiB |      32 | `0x2b167`            | `usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10` |
| 29.9% | 4.07 KiB |      64 | `0xffffffffffffffff` | `<unknown>`                                       |
|  0.8% |    112 B |       1 | `0xe3b383e3a983e391` | `<unknown>`                                       |
|  0.8% |    112 B |       1 | `0x27743`            | `usr/lib/aarch64-linux-gnu/libc.so.6`             |
| <0.1% |      1 B |       1 | `_start`             | `<unknown>`                                       |

##### `0x2b167` (`usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10`)

|     % |     Size | Objects | Callee    | Location                                          |
| ----: | -------: | ------: | --------- | ------------------------------------------------- |
| 90.9% | 9.33 KiB |      32 | `_start`  | `<unknown>`                                       |
|  6.7% |    702 B |      39 | `0x1e1ff` | `[stack]`                                         |
|  2.4% |    256 B |       1 | `0x313ef` | `usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10` |

##### `__json_value_module_MOD_parse_string` (`src/json-fortran/src/json_value_module.F90`)

|     % |     Size | Objects | Callee               | Location    |
| ----: | -------: | ------: | -------------------- | ----------- |
| 89.6% | 8.76 KiB |     117 | `_start`             | `<unknown>` |
|  7.8% |    784 B |      82 | `0xffffffffffffffff` | `<unknown>` |

##### `0x1e34f` (`[stack]`)

|      % |     Size | Objects | Callee                                 | Location                                     |
| -----: | -------: | ------: | -------------------------------------- | -------------------------------------------- |
| 100.0% | 8.53 KiB |      78 | `__json_value_module_MOD_parse_string` | `src/json-fortran/src/json_value_module.F90` |

##### `0x1d91f` (`[stack]`)

|      % |     Size | Objects | Callee   | Location    |
| -----: | -------: | ------: | -------- | ----------- |
| 100.0% | 8.53 KiB |      78 | `_start` | `<unknown>` |

##### `0x1da1f` (`[stack]`)

|     % |     Size | Objects | Callee    | Location                                                                          |
| ----: | -------: | ------: | --------- | --------------------------------------------------------------------------------- |
| 48.7% | 4.16 KiB |      38 | `main`    | `out/profile.f90`                                                                 |
| 48.7% | 4.16 KiB |      38 | `0x228cf` | `tmp/nix-shell.eMJcEj/profiler-md-input-generation.40bx0a/fortran-current/binary` |
|  2.6% |    224 B |       2 | `0x1eb8f` | `[stack]`                                                                         |

##### `0xffffbb3b003f` (`<unknown>`)

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

##### `0xaaab03d3c7ff` (`<unknown>`)

|     % |     Size | Objects | Callee           | Location    |
| ----: | -------: | ------: | ---------------- | ----------- |
| 41.1% | 2.31 KiB |     153 | `_start`         | `<unknown>` |
| 35.9% | 2.02 KiB |     103 | `0xffffbbc49d67` | `<unknown>` |
| 23.0% | 1.29 KiB |      51 | `0xffffbbc48fff` | `<unknown>` |

##### `0x1dc97` (`[stack]`)

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
| 2.6% | 112 B |       1 | `0xaaab03f50c9f` | `<unknown>` |
| 2.6% | 112 B |       1 | `0xaaab03e3b39f` | `<unknown>` |
| 2.6% | 112 B |       1 | `0xaaab03f7a15f` | `<unknown>` |
| 2.6% | 112 B |       1 | `0xaaab03e3bb2f` | `<unknown>` |
| 2.6% | 112 B |       1 | `0xaaab03e69f3f` | `<unknown>` |

##### `0x1e12f` (`[stack]`)

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

##### `0xffffbbc48fff` (`<unknown>`)

|     % |     Size | Objects | Callee    | Location                                          |
| ----: | -------: | ------: | --------- | ------------------------------------------------- |
| 54.3% | 1.73 KiB |      55 | `_start`  | `<unknown>`                                       |
| 38.3% | 1.22 KiB |      78 | `0x3131f` | `usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10` |
|  6.9% |    224 B |       2 | `0x3143b` | `usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10` |
|  0.6% |     18 B |       1 | `0x3142b` | `usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10` |

##### `0xffffbbc49d67` (`<unknown>`)

|     % |     Size | Objects | Callee           | Location    |
| ----: | -------: | ------: | ---------------- | ----------- |
| 65.2% | 2.02 KiB |     103 | `_start`         | `<unknown>` |
| 34.8% | 1.08 KiB |      45 | `0xaaab03d3c7ff` | `<unknown>` |

##### `0x3131f` (`usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10`)

|     % |     Size | Objects | Callee    | Location    |
| ----: | -------: | ------: | --------- | ----------- |
| 51.9% | 1.22 KiB |      78 | `_start`  | `<unknown>` |
| 33.5% |    808 B |      39 | `0x1d5df` | `[stack]`   |
| 14.6% |    351 B |      39 | `0x1dfff` | `[stack]`   |

## Hottest call stacks

Call stacks ranked by bytes retained in their leaf frame.

|     % |     Size | Objects | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ----: | -------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 31.5% |  282 KiB |   2,577 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                                        |
| 14.3% |  128 KiB |       1 | `0x1c1b3` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`) ← `0x10be83` ← `0x1029eb` ← `0x10324b` ← `__json_value_module_MOD_json_parse_file` (`src/json-fortran/src/json_value_module.F90`) ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `0x27743` (`usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0x27817` (`usr/lib/aarch64-linux-gnu/libc.so.6`) ← `_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  4.2% | 37.6 KiB |   2,507 | `__json_value_module_MOD_parse_object` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                                             |
|  3.5% | 31.6 KiB |     937 | `__json_value_module_MOD_parse_value` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                                              |
|  2.3% | 20.6 KiB |     188 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `0x27743` (`usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817`                                                   |
|  2.3% | 20.1 KiB |     184 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `0x27743` (`usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start`                                                                                 |
|  1.8% |   16 KiB |     146 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `0x27743` (`usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0xffffffffffffffff`                                                                                                   |
|  1.7% | 15.3 KiB |     140 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `0x27743` (`usr/lib/aarch64-linux-gnu/libc.so.6`)                      |
|  1.7% |   15 KiB |     137 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `0x27743` (`usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0x228cf` (`tmp/nix-shell.eMJcEj/profiler-md-input-generation.40bx0a/fortran-current/binary`) ← `0xffffffffffffffff`                                            |
|  1.3% | 11.7 KiB |     107 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `0x27743` (`usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0x1eb8f` (`[stack]`) ← `0x228cf` (`tmp/nix-shell.eMJcEj/profiler-md-input-generation.40bx0a/fortran-current/binary`)                                                                                    |
|  1.3% | 11.3 KiB |     103 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main`                                 |
|  1.2% | 10.5 KiB |      39 | `__json_value_module_MOD_parse_value` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `0x27743` (`usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817`                                                         |
|  1.0% | 9.33 KiB |      32 | `__json_value_module_MOD_parse_value` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `0x27743` (`usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0x2b167` (`usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10`) ← `0x1`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  1.0% | 8.53 KiB |      78 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                                          |
|  1.0% | 8.53 KiB |      78 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `0x27743` (`usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `__json_value_module_MOD_parse_string` (`src/json-fortran/src/json_value_module.F90`) ← `0x1e34f` (`[stack]`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  1.0% | 8.53 KiB |      78 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `0x27743` (`usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0x1d91f` (`[stack]`) ← `__json_value_module_MOD_parse_object` (`src/json-fortran/src/json_value_module.F90`)                                                                                                                                                                                                                       |
|  1.0% | 8.53 KiB |      78 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `0x27743` (`usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `__json_value_module_MOD_parse_object` (`src/json-fortran/src/json_value_module.F90`) ← `0x1eddf` (`[stack]`)                                                                                                                                                                              |
|  1.0% | 8.53 KiB |      78 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `0x27743` (`usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0x1eddf` (`[stack]`) ← `0x1eb8f`                                                                                                                                                                                                                 |
|  0.9% | 7.88 KiB |      72 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) |
|  0.8% | 7.55 KiB |      69 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file`                                      |
