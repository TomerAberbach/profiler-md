# Allocated heap profile

Allocated 70.5 MiB over 439,557 objects (168 B per object).

| Category |     % |     Size | Objects |
| -------- | ----: | -------: | ------: |
| Native   | 66.1% | 46.6 MiB |  25,721 |
| Ours     | 33.9% | 23.9 MiB | 413,836 |

## Hottest functions

### Self size

Functions ranked by bytes allocated directly in the function body, excluding callees.

|     % |     Size | Objects | Function                                          | Location                                           |
| ----: | -------: | ------: | ------------------------------------------------- | -------------------------------------------------- |
| 65.7% | 46.3 MiB |  17,633 | `0x1c1b3`                                         | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`   |
| 20.2% | 14.2 MiB | 133,380 | `__json_value_module_MOD_json_value_create`       | `src/json-fortran/src/json_value_module.F90`       |
|  7.4% | 5.23 MiB |  49,759 | `__json_value_module_MOD_parse_string`            | `src/json-fortran/src/json_value_module.F90`       |
|  2.5% | 1.76 MiB |  41,430 | `__json_value_module_MOD_parse_value`             | `src/json-fortran/src/json_value_module.F90`       |
|  2.0% | 1.44 MiB | 122,226 | `__json_value_module_MOD_parse_object`            | `src/json-fortran/src/json_value_module.F90`       |
|  0.9% |  680 KiB |   2,721 | `__json_value_module_MOD_parse_number`            | `src/json-fortran/src/json_value_module.F90`       |
|  0.4% |  309 KiB |   3,235 | `0x1c24b`                                         | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`   |
|  0.4% |  255 KiB |   2,071 | `__json_string_utilities_MOD_unescape_string`     | `src/json-fortran/src/json_string_utilities.F90`   |
|  0.2% |  150 KiB |  19,137 | `__json_value_module_MOD_to_integer`              | `src/json-fortran/src/json_value_module.F90`       |
|  0.1% |  102 KiB |  26,216 | `__json_value_module_MOD_to_logical`              | `src/json-fortran/src/json_value_module.F90`       |
|  0.1% | 40.1 KiB |  10,506 | `__json_string_utilities_MOD_string_to_integer`   | `src/json-fortran/src/json_string_utilities.F90`   |
| <0.1% | 18.6 KiB |   3,749 | `0x9980f`                                         | `usr/lib/aarch64-linux-gnu/libc.so.6`              |
| <0.1% |   15 KiB |     909 | `MAIN__`                                          | `out/profile.f90`                                  |
| <0.1% |  4.5 KiB |   4,603 | `__json_value_module_MOD_to_string`               | `src/json-fortran/src/json_value_module.F90`       |
| <0.1% | 2.14 KiB |   1,104 | `0x1c1f3`                                         | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`   |
| <0.1% | 2.02 KiB |      10 | `__json_value_module_MOD_json_initialize`         | `src/json-fortran/src/json_value_module.F90`       |
| <0.1% |    862 B |     862 | `__json_value_module_MOD_json_get_string_by_path` | `src/json-fortran/src/json_get_scalar_by_path.inc` |
| <0.1% |     85 B |       5 | `__json_value_module_MOD_json_parse_file`         | `src/json-fortran/src/json_value_module.F90`       |
| <0.1% |      3 B |       1 | `__json_value_module_MOD_json_prepare_parser`     | `src/json-fortran/src/json_value_module.F90`       |

#### Categories

##### Native

|     % |     Size | Objects | Function  | Location                                         |
| ----: | -------: | ------: | --------- | ------------------------------------------------ |
| 65.7% | 46.3 MiB |  17,633 | `0x1c1b3` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  0.4% |  309 KiB |   3,235 | `0x1c24b` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| <0.1% | 18.6 KiB |   3,749 | `0x9980f` | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| <0.1% | 2.14 KiB |   1,104 | `0x1c1f3` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### Ours

|     % |     Size | Objects | Function                                          | Location                                           |
| ----: | -------: | ------: | ------------------------------------------------- | -------------------------------------------------- |
| 20.2% | 14.2 MiB | 133,380 | `__json_value_module_MOD_json_value_create`       | `src/json-fortran/src/json_value_module.F90`       |
|  7.4% | 5.23 MiB |  49,759 | `__json_value_module_MOD_parse_string`            | `src/json-fortran/src/json_value_module.F90`       |
|  2.5% | 1.76 MiB |  41,430 | `__json_value_module_MOD_parse_value`             | `src/json-fortran/src/json_value_module.F90`       |
|  2.0% | 1.44 MiB | 122,226 | `__json_value_module_MOD_parse_object`            | `src/json-fortran/src/json_value_module.F90`       |
|  0.9% |  680 KiB |   2,721 | `__json_value_module_MOD_parse_number`            | `src/json-fortran/src/json_value_module.F90`       |
|  0.4% |  255 KiB |   2,071 | `__json_string_utilities_MOD_unescape_string`     | `src/json-fortran/src/json_string_utilities.F90`   |
|  0.2% |  150 KiB |  19,137 | `__json_value_module_MOD_to_integer`              | `src/json-fortran/src/json_value_module.F90`       |
|  0.1% |  102 KiB |  26,216 | `__json_value_module_MOD_to_logical`              | `src/json-fortran/src/json_value_module.F90`       |
|  0.1% | 40.1 KiB |  10,506 | `__json_string_utilities_MOD_string_to_integer`   | `src/json-fortran/src/json_string_utilities.F90`   |
| <0.1% |   15 KiB |     909 | `MAIN__`                                          | `out/profile.f90`                                  |
| <0.1% |  4.5 KiB |   4,603 | `__json_value_module_MOD_to_string`               | `src/json-fortran/src/json_value_module.F90`       |
| <0.1% | 2.02 KiB |      10 | `__json_value_module_MOD_json_initialize`         | `src/json-fortran/src/json_value_module.F90`       |
| <0.1% |    862 B |     862 | `__json_value_module_MOD_json_get_string_by_path` | `src/json-fortran/src/json_get_scalar_by_path.inc` |
| <0.1% |     85 B |       5 | `__json_value_module_MOD_json_parse_file`         | `src/json-fortran/src/json_value_module.F90`       |
| <0.1% |      3 B |       1 | `__json_value_module_MOD_json_prepare_parser`     | `src/json-fortran/src/json_value_module.F90`       |

#### Lines

Lines ranked by contribution to each function's self size.

##### `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`)

|      % |     Size | Objects | Location                                          |
| -----: | -------: | ------: | ------------------------------------------------- |
| 100.0% | 14.2 MiB | 133,380 | `src/json-fortran/src/json_value_module.F90:2218` |

##### `__json_value_module_MOD_parse_string` (`src/json-fortran/src/json_value_module.F90`)

|     % |     Size | Objects | Location                                           |
| ----: | -------: | ------: | -------------------------------------------------- |
| 88.9% | 4.65 MiB |  19,035 | `src/json-fortran/src/json_value_module.F90:11101` |
|  9.7% |  520 KiB |  30,498 | `src/json-fortran/src/json_value_module.F90:11150` |
|  1.4% |   74 KiB |     148 | `src/json-fortran/src/json_value_module.F90:11126` |
| <0.1% |     78 B |      78 | `src/json-fortran/src/json_value_module.F90:11148` |

##### `__json_value_module_MOD_parse_value` (`src/json-fortran/src/json_value_module.F90`)

|      % |     Size | Objects | Location                                           |
| -----: | -------: | ------: | -------------------------------------------------- |
| 100.0% | 1.76 MiB |  41,430 | `src/json-fortran/src/json_value_module.F90:10192` |

##### `__json_value_module_MOD_parse_object` (`src/json-fortran/src/json_value_module.F90`)

|      % |     Size | Objects | Location                                           |
| -----: | -------: | ------: | -------------------------------------------------- |
| 100.0% | 1.44 MiB | 122,226 | `src/json-fortran/src/json_value_module.F90:10937` |

##### `__json_value_module_MOD_parse_number` (`src/json-fortran/src/json_value_module.F90`)

|      % |    Size | Objects | Location                                           |
| -----: | ------: | ------: | -------------------------------------------------- |
| 100.0% | 680 KiB |   2,721 | `src/json-fortran/src/json_value_module.F90:11244` |

##### `__json_string_utilities_MOD_unescape_string` (`src/json-fortran/src/json_string_utilities.F90`)

|     % |     Size | Objects | Location                                             |
| ----: | -------: | ------: | ---------------------------------------------------- |
| 71.7% |  183 KiB |   1,316 | `src/json-fortran/src/json_string_utilities.F90:506` |
| 28.3% | 72.2 KiB |     755 | `src/json-fortran/src/json_string_utilities.F90:611` |

##### `__json_value_module_MOD_to_integer` (`src/json-fortran/src/json_value_module.F90`)

|      % |    Size | Objects | Location                                           |
| -----: | ------: | ------: | -------------------------------------------------- |
| 100.0% | 150 KiB |  19,137 | `src/json-fortran/src/json_value_module.F90:10710` |

##### `__json_value_module_MOD_to_logical` (`src/json-fortran/src/json_value_module.F90`)

|      % |    Size | Objects | Location                                           |
| -----: | ------: | ------: | -------------------------------------------------- |
| 100.0% | 102 KiB |  26,216 | `src/json-fortran/src/json_value_module.F90:10679` |

##### `__json_string_utilities_MOD_string_to_integer` (`src/json-fortran/src/json_string_utilities.F90`)

|     % |     Size | Objects | Location                                             |
| ----: | -------: | ------: | ---------------------------------------------------- |
| 93.6% | 37.6 KiB |   9,131 | `src/json-fortran/src/json_string_utilities.F90:134` |
|  6.4% | 2.57 KiB |   1,375 | `src/json-fortran/src/json_string_utilities.F90:131` |

##### `MAIN__` (`out/profile.f90`)

|      % |   Size | Objects | Location             |
| -----: | -----: | ------: | -------------------- |
| 100.0% | 15 KiB |     909 | `out/profile.f90:32` |

##### `__json_value_module_MOD_to_string` (`src/json-fortran/src/json_value_module.F90`)

|      % |    Size | Objects | Location                                           |
| -----: | ------: | ------: | -------------------------------------------------- |
| 100.0% | 4.5 KiB |   4,603 | `src/json-fortran/src/json_value_module.F90:10807` |

##### `__json_value_module_MOD_json_initialize` (`src/json-fortran/src/json_value_module.F90`)

|     % |  Size | Objects | Location                                          |
| ----: | ----: | ------: | ------------------------------------------------- |
| 99.0% | 2 KiB |       8 | `src/json-fortran/src/json_value_module.F90:1051` |
|  1.0% |  20 B |       2 | `src/json-fortran/src/json_value_module.F90:1203` |

##### `__json_value_module_MOD_json_get_string_by_path` (`src/json-fortran/src/json_get_scalar_by_path.inc`)

|      % |  Size | Objects | Location                                             |
| -----: | ----: | ------: | ---------------------------------------------------- |
| 100.0% | 862 B |     862 | `src/json-fortran/src/json_get_scalar_by_path.inc:6` |

##### `__json_value_module_MOD_json_parse_file` (`src/json-fortran/src/json_value_module.F90`)

|      % | Size | Objects | Location                                          |
| -----: | ---: | ------: | ------------------------------------------------- |
| 100.0% | 85 B |       5 | `src/json-fortran/src/json_value_module.F90:9793` |

##### `__json_value_module_MOD_json_prepare_parser` (`src/json-fortran/src/json_value_module.F90`)

|      % | Size | Objects | Location                                          |
| -----: | ---: | ------: | ------------------------------------------------- |
| 100.0% |  3 B |       1 | `src/json-fortran/src/json_value_module.F90:9687` |

#### Callers

Callers ranked by contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `0x1c1b3` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|     % |     Size | Objects | Caller     | Location                                         |
| ----: | -------: | ------: | ---------- | ------------------------------------------------ |
| 96.5% | 44.7 MiB |  11,216 | `0xfa6bf`  | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  2.7% | 1.25 MiB |      10 | `0x10be83` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  0.5% |  259 KiB |   2,074 | `0x112ecb` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  0.3% |  135 KiB |   4,333 | `0x112ebb` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`)

|     % |     Size | Objects | Caller                                    | Location                                     |
| ----: | -------: | ------: | ----------------------------------------- | -------------------------------------------- |
| 92.3% | 13.1 MiB | 123,078 | `__json_value_module_MOD_parse_object`    | `src/json-fortran/src/json_value_module.F90` |
|  7.7% |  1.1 MiB |  10,299 | `__json_value_module_MOD_parse_array`     | `src/json-fortran/src/json_value_module.F90` |
| <0.1% |    336 B |       3 | `__json_value_module_MOD_json_parse_file` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_parse_string` (`src/json-fortran/src/json_value_module.F90`)

|     % |     Size | Objects | Caller                                 | Location                                     |
| ----: | -------: | ------: | -------------------------------------- | -------------------------------------------- |
| 56.1% | 2.93 MiB |  17,140 | `__json_value_module_MOD_parse_value`  | `src/json-fortran/src/json_value_module.F90` |
| 43.9% |  2.3 MiB |  32,619 | `__json_value_module_MOD_parse_object` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_parse_value` (`src/json-fortran/src/json_value_module.F90`)

|      % |     Size | Objects | Caller                                 | Location                                     |
| -----: | -------: | ------: | -------------------------------------- | -------------------------------------------- |
| 100.0% | 1.76 MiB |  41,430 | `__json_value_module_MOD_parse_object` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_parse_object` (`src/json-fortran/src/json_value_module.F90`)

|     % |     Size | Objects | Caller                                    | Location                                     |
| ----: | -------: | ------: | ----------------------------------------- | -------------------------------------------- |
| 98.8% | 1.42 MiB | 119,895 | `__json_value_module_MOD_parse_object`    | `src/json-fortran/src/json_value_module.F90` |
|  1.2% | 18.1 KiB |   2,329 | `__json_value_module_MOD_parse_array`     | `src/json-fortran/src/json_value_module.F90` |
| <0.1% |     16 B |       2 | `__json_value_module_MOD_json_parse_file` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_parse_number` (`src/json-fortran/src/json_value_module.F90`)

|     % |    Size | Objects | Caller                                 | Location                                     |
| ----: | ------: | ------: | -------------------------------------- | -------------------------------------------- |
| 98.5% | 670 KiB |   2,681 | `__json_value_module_MOD_parse_object` | `src/json-fortran/src/json_value_module.F90` |
|  1.5% |  10 KiB |      40 | `__json_value_module_MOD_parse_array`  | `src/json-fortran/src/json_value_module.F90` |

##### `0x1c24b` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|     % |     Size | Objects | Caller     | Location                                         |
| ----: | -------: | ------: | ---------- | ------------------------------------------------ |
| 97.6% |  302 KiB |   3,216 | `0x10c847` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  2.2% | 6.68 KiB |       9 | `0x10a85b` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  0.3% |    864 B |       9 | `0x10bd7b` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| <0.1% |     16 B |       1 | `0x10b1fb` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `__json_string_utilities_MOD_unescape_string` (`src/json-fortran/src/json_string_utilities.F90`)

|      % |    Size | Objects | Caller                                 | Location                                     |
| -----: | ------: | ------: | -------------------------------------- | -------------------------------------------- |
| 100.0% | 255 KiB |   2,071 | `__json_value_module_MOD_parse_string` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_to_integer` (`src/json-fortran/src/json_value_module.F90`)

|      % |    Size | Objects | Caller                                 | Location                                     |
| -----: | ------: | ------: | -------------------------------------- | -------------------------------------------- |
| 100.0% | 150 KiB |  19,137 | `__json_value_module_MOD_parse_number` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_to_logical` (`src/json-fortran/src/json_value_module.F90`)

|      % |    Size | Objects | Caller                                 | Location                                     |
| -----: | ------: | ------: | -------------------------------------- | -------------------------------------------- |
| 100.0% | 102 KiB |  26,216 | `__json_value_module_MOD_parse_object` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_string_utilities_MOD_string_to_integer` (`src/json-fortran/src/json_string_utilities.F90`)

|      % |     Size | Objects | Caller                                  | Location                                     |
| -----: | -------: | ------: | --------------------------------------- | -------------------------------------------- |
| 100.0% | 40.1 KiB |  10,506 | `__json_value_module_MOD_string_to_int` | `src/json-fortran/src/json_value_module.F90` |

##### `0x9980f` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |     Size | Objects | Caller    | Location                                         |
| ----: | -------: | ------: | --------- | ------------------------------------------------ |
| 99.1% | 18.5 KiB |   3,739 | `0x1c42b` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  0.9% |    180 B |      10 | `0x1c3fb` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `MAIN__` (`out/profile.f90`)

|      % |   Size | Objects | Caller | Location          |
| -----: | -----: | ------: | ------ | ----------------- |
| 100.0% | 15 KiB |     909 | `main` | `out/profile.f90` |

##### `__json_value_module_MOD_to_string` (`src/json-fortran/src/json_value_module.F90`)

|      % |    Size | Objects | Caller                                | Location                                     |
| -----: | ------: | ------: | ------------------------------------- | -------------------------------------------- |
| 100.0% | 4.5 KiB |   4,603 | `__json_value_module_MOD_parse_value` | `src/json-fortran/src/json_value_module.F90` |

##### `0x1c1f3` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|      % |     Size | Objects | Caller     | Location                                         |
| -----: | -------: | ------: | ---------- | ------------------------------------------------ |
| 100.0% | 2.14 KiB |   1,104 | `0x118783` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `__json_value_module_MOD_json_initialize` (`src/json-fortran/src/json_value_module.F90`)

|      % |     Size | Objects | Caller                                                | Location                                    |
| -----: | -------: | ------: | ----------------------------------------------------- | ------------------------------------------- |
| 100.0% | 2.02 KiB |      10 | `__json_file_module_MOD_initialize_json_core_in_file` | `src/json-fortran/src/json_file_module.F90` |

##### `__json_value_module_MOD_json_get_string_by_path` (`src/json-fortran/src/json_get_scalar_by_path.inc`)

|      % |  Size | Objects | Caller                                        | Location                                    |
| -----: | ----: | ------: | --------------------------------------------- | ------------------------------------------- |
| 100.0% | 862 B |     862 | `__json_file_module_MOD_json_file_get_string` | `src/json-fortran/src/json_file_module.F90` |

##### `__json_value_module_MOD_json_parse_file` (`src/json-fortran/src/json_value_module.F90`)

|      % | Size | Objects | Caller                                  | Location                                    |
| -----: | ---: | ------: | --------------------------------------- | ------------------------------------------- |
| 100.0% | 85 B |       5 | `__json_file_module_MOD_json_file_load` | `src/json-fortran/src/json_file_module.F90` |

##### `__json_value_module_MOD_json_prepare_parser` (`src/json-fortran/src/json_value_module.F90`)

|      % | Size | Objects | Caller                                    | Location                                     |
| -----: | ---: | ------: | ----------------------------------------- | -------------------------------------------- |
| 100.0% |  3 B |       1 | `__json_value_module_MOD_json_parse_file` | `src/json-fortran/src/json_value_module.F90` |

### Total size

Functions ranked by total bytes allocated in the function and all its callees.

|     % |     Size | Objects | Function                                        | Location                                         |
| ----: | -------: | ------: | ----------------------------------------------- | ------------------------------------------------ |
| 97.5% | 68.7 MiB | 436,620 | `__json_value_module_MOD_parse_object`          | `src/json-fortran/src/json_value_module.F90`     |
| 65.7% | 46.3 MiB |  17,633 | `0x1c1b3`                                       | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| 64.8% | 45.7 MiB |  56,930 | `__json_value_module_MOD_parse_number`          | `src/json-fortran/src/json_value_module.F90`     |
| 64.2% | 45.3 MiB |  35,323 | `__json_string_utilities_MOD_string_to_integer` | `src/json-fortran/src/json_string_utilities.F90` |
| 63.7% | 44.9 MiB |  35,064 | `__json_value_module_MOD_string_to_int`         | `src/json-fortran/src/json_value_module.F90`     |
| 63.4% | 44.7 MiB |  14,955 | `0x109623`                                      | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| 63.3% | 44.7 MiB |  11,216 | `0xfa6bf`                                       | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| 41.7% | 29.4 MiB | 220,300 | `__json_value_module_MOD_parse_array`           | `src/json-fortran/src/json_value_module.F90`     |
| 22.5% | 15.9 MiB | 172,869 | `__json_value_module_MOD_json_parse_file`       | `src/json-fortran/src/json_value_module.F90`     |
| 22.2% | 15.7 MiB | 160,528 | `MAIN__`                                        | `out/profile.f90`                                |
| 22.0% | 15.5 MiB | 165,407 | `__json_file_module_MOD_json_file_load`         | `src/json-fortran/src/json_file_module.F90`      |
| 21.3% |   15 MiB | 149,886 | `main`                                          | `out/profile.f90`                                |
| 20.2% | 14.2 MiB | 133,380 | `__json_value_module_MOD_json_value_create`     | `src/json-fortran/src/json_value_module.F90`     |
| 16.4% | 11.6 MiB | 140,613 | `0x27743`                                       | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| 15.4% | 10.8 MiB | 129,594 | `0x27817`                                       | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| 14.1% | 9.95 MiB | 118,144 | `_start`                                        | `<unknown>`                                      |
|  8.1% |  5.7 MiB |  56,608 | `__json_value_module_MOD_parse_string`          | `src/json-fortran/src/json_value_module.F90`     |
|  7.3% | 5.13 MiB |  66,912 | `__json_value_module_MOD_parse_value`           | `src/json-fortran/src/json_value_module.F90`     |
|  1.8% | 1.25 MiB |      29 | `0x10324b`                                      | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  1.8% | 1.25 MiB |      19 | `0x1029eb`                                      | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

#### Categories

##### Native

|     % |     Size | Objects | Function             | Location                                         |
| ----: | -------: | ------: | -------------------- | ------------------------------------------------ |
| 65.7% | 46.3 MiB |  17,633 | `0x1c1b3`            | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| 63.4% | 44.7 MiB |  14,955 | `0x109623`           | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| 63.3% | 44.7 MiB |  11,216 | `0xfa6bf`            | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| 16.4% | 11.6 MiB | 140,613 | `0x27743`            | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| 15.4% | 10.8 MiB | 129,594 | `0x27817`            | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| 14.1% | 9.95 MiB | 118,144 | `_start`             | `<unknown>`                                      |
|  1.8% | 1.25 MiB |      29 | `0x10324b`           | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  1.8% | 1.25 MiB |      19 | `0x1029eb`           | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  1.8% | 1.25 MiB |      10 | `0x10be83`           | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  1.2% |  899 KiB |  14,253 | `0xffffffffffffffff` | `<unknown>`                                      |
|  1.2% |  885 KiB |     219 | `0x4`                | `<unknown>`                                      |
|  1.1% |  773 KiB |   3,556 | `0xffff8a179d67`     | `<unknown>`                                      |
|  1.0% |  703 KiB |   9,633 | `0x1093fb`           | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  0.7% |  526 KiB |     135 | `0x5`                | `<unknown>`                                      |
|  0.6% |  416 KiB |     102 | `0xaaaad7bfa0df`     | `<unknown>`                                      |
|  0.5% |  395 KiB |   6,407 | `0x10b28f`           | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  0.5% |  351 KiB |   4,330 | `0x1`                | `<unknown>`                                      |
|  0.4% |  309 KiB |   3,235 | `0x1c24b`            | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  0.4% |  302 KiB |   3,216 | `0x10c847`           | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  0.4% |  302 KiB |   3,216 | `0x10ab63`           | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### Ours

|     % |     Size | Objects | Function                                           | Location                                                                          |
| ----: | -------: | ------: | -------------------------------------------------- | --------------------------------------------------------------------------------- |
| 97.5% | 68.7 MiB | 436,620 | `__json_value_module_MOD_parse_object`             | `src/json-fortran/src/json_value_module.F90`                                      |
| 64.8% | 45.7 MiB |  56,930 | `__json_value_module_MOD_parse_number`             | `src/json-fortran/src/json_value_module.F90`                                      |
| 64.2% | 45.3 MiB |  35,323 | `__json_string_utilities_MOD_string_to_integer`    | `src/json-fortran/src/json_string_utilities.F90`                                  |
| 63.7% | 44.9 MiB |  35,064 | `__json_value_module_MOD_string_to_int`            | `src/json-fortran/src/json_value_module.F90`                                      |
| 41.7% | 29.4 MiB | 220,300 | `__json_value_module_MOD_parse_array`              | `src/json-fortran/src/json_value_module.F90`                                      |
| 22.5% | 15.9 MiB | 172,869 | `__json_value_module_MOD_json_parse_file`          | `src/json-fortran/src/json_value_module.F90`                                      |
| 22.2% | 15.7 MiB | 160,528 | `MAIN__`                                           | `out/profile.f90`                                                                 |
| 22.0% | 15.5 MiB | 165,407 | `__json_file_module_MOD_json_file_load`            | `src/json-fortran/src/json_file_module.F90`                                       |
| 21.3% |   15 MiB | 149,886 | `main`                                             | `out/profile.f90`                                                                 |
| 20.2% | 14.2 MiB | 133,380 | `__json_value_module_MOD_json_value_create`        | `src/json-fortran/src/json_value_module.F90`                                      |
|  8.1% |  5.7 MiB |  56,608 | `__json_value_module_MOD_parse_string`             | `src/json-fortran/src/json_value_module.F90`                                      |
|  7.3% | 5.13 MiB |  66,912 | `__json_value_module_MOD_parse_value`              | `src/json-fortran/src/json_value_module.F90`                                      |
|  1.2% |  838 KiB |   7,614 | `0x22aaf`                                          | `tmp/nix-shell.NcwiQ3/profiler-md-input-generation.fqUYfr/fortran-current/binary` |
|  1.0% |  712 KiB |   6,826 | `0x1e85f`                                          | `[stack]`                                                                         |
|  1.0% |  693 KiB |     170 | `0x1d11f`                                          | `[stack]`                                                                         |
|  0.8% |  600 KiB |   5,487 | `0x1e5ef`                                          | `[stack]`                                                                         |
|  0.6% |  416 KiB |   1,065 | `__json_value_module_MOD_json_get_string_by_path`  | `src/json-fortran/src/json_get_scalar_by_path.inc`                                |
|  0.6% |  416 KiB |   1,065 | `__json_file_module_MOD_json_file_get_string`      | `src/json-fortran/src/json_file_module.F90`                                       |
|  0.6% |  415 KiB |     203 | `__json_value_module_MOD_json_get_by_path_default` | `src/json-fortran/src/json_value_module.F90`                                      |
|  0.6% |  415 KiB |     203 | `__json_value_module_MOD_json_get_by_path`         | `src/json-fortran/src/json_value_module.F90`                                      |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `__json_value_module_MOD_parse_object` (`src/json-fortran/src/json_value_module.F90`)

|     % |     Size | Objects | Callee                                      | Location                                     |
| ----: | -------: | ------: | ------------------------------------------- | -------------------------------------------- |
| 99.7% | 68.5 MiB | 433,577 | `__json_value_module_MOD_parse_object`      | `src/json-fortran/src/json_value_module.F90` |
| 55.0% | 37.8 MiB |  47,652 | `__json_value_module_MOD_parse_number`      | `src/json-fortran/src/json_value_module.F90` |
| 42.5% | 29.2 MiB | 214,962 | `__json_value_module_MOD_parse_array`       | `src/json-fortran/src/json_value_module.F90` |
| 19.1% | 13.1 MiB | 123,078 | `__json_value_module_MOD_json_value_create` | `src/json-fortran/src/json_value_module.F90` |
|  7.2% | 4.95 MiB |  65,244 | `__json_value_module_MOD_parse_value`       | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_parse_number` (`src/json-fortran/src/json_value_module.F90`)

|     % |     Size | Objects | Callee                                   | Location                                     |
| ----: | -------: | ------: | ---------------------------------------- | -------------------------------------------- |
| 98.2% | 44.9 MiB |  35,064 | `__json_value_module_MOD_string_to_int`  | `src/json-fortran/src/json_value_module.F90` |
|  0.3% |  150 KiB |  19,137 | `__json_value_module_MOD_to_integer`     | `src/json-fortran/src/json_value_module.F90` |
| <0.1% |    256 B |       8 | `__json_value_module_MOD_string_to_dble` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_string_utilities_MOD_string_to_integer` (`src/json-fortran/src/json_string_utilities.F90`)

|     % |     Size | Objects | Callee     | Location                                         |
| ----: | -------: | ------: | ---------- | ------------------------------------------------ |
| 98.7% | 44.7 MiB |  14,955 | `0x109623` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  1.3% |  583 KiB |   8,707 | `0x1093fb` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| <0.1% | 2.05 KiB |   1,099 | `0x118783` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| <0.1% |    448 B |      56 | `_start`   | `<unknown>`                                      |

##### `__json_value_module_MOD_string_to_int` (`src/json-fortran/src/json_value_module.F90`)

|      % |     Size | Objects | Callee                                          | Location                                         |
| -----: | -------: | ------: | ----------------------------------------------- | ------------------------------------------------ |
| 100.0% | 44.9 MiB |  35,064 | `__json_string_utilities_MOD_string_to_integer` | `src/json-fortran/src/json_string_utilities.F90` |

##### `0x109623` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|      % |     Size | Objects | Callee    | Location                                         |
| -----: | -------: | ------: | --------- | ------------------------------------------------ |
| 100.0% | 44.7 MiB |  11,216 | `0xfa6bf` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  <0.1% | 18.5 KiB |   3,739 | `0xfa6b3` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0xfa6bf` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|      % |     Size | Objects | Callee    | Location                                         |
| -----: | -------: | ------: | --------- | ------------------------------------------------ |
| 100.0% | 44.7 MiB |  11,216 | `0x1c1b3` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `__json_value_module_MOD_parse_array` (`src/json-fortran/src/json_value_module.F90`)

|     % |     Size | Objects | Callee                                      | Location                                     |
| ----: | -------: | ------: | ------------------------------------------- | -------------------------------------------- |
| 98.6% |   29 MiB | 216,481 | `__json_value_module_MOD_parse_object`      | `src/json-fortran/src/json_value_module.F90` |
| 26.8% | 7.87 MiB |   9,278 | `__json_value_module_MOD_parse_number`      | `src/json-fortran/src/json_value_module.F90` |
|  3.7% |  1.1 MiB |  10,299 | `__json_value_module_MOD_json_value_create` | `src/json-fortran/src/json_value_module.F90` |
| <0.1% | 12.2 KiB |   1,015 | `0xffff8a179d67`                            | `<unknown>`                                  |
| <0.1% | 4.57 KiB |   1,171 | `_start`                                    | `<unknown>`                                  |

##### `__json_value_module_MOD_json_parse_file` (`src/json-fortran/src/json_value_module.F90`)

|     % |     Size | Objects | Callee                                        | Location                                         |
| ----: | -------: | ------: | --------------------------------------------- | ------------------------------------------------ |
| 92.1% | 14.6 MiB | 172,831 | `__json_value_module_MOD_parse_object`        | `src/json-fortran/src/json_value_module.F90`     |
|  7.9% | 1.25 MiB |      29 | `0x10324b`                                    | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  1.3% |  218 KiB |   1,614 | `_start`                                      | `<unknown>`                                      |
| <0.1% |    336 B |       3 | `__json_value_module_MOD_json_value_create`   | `src/json-fortran/src/json_value_module.F90`     |
| <0.1% |      3 B |       1 | `__json_value_module_MOD_json_prepare_parser` | `src/json-fortran/src/json_value_module.F90`     |

##### `MAIN__` (`out/profile.f90`)

|     % |     Size | Objects | Callee                                                | Location                                         |
| ----: | -------: | ------: | ----------------------------------------------------- | ------------------------------------------------ |
| 96.6% | 15.1 MiB | 157,621 | `__json_file_module_MOD_json_file_load`               | `src/json-fortran/src/json_file_module.F90`      |
|  2.6% |  416 KiB |   1,065 | `__json_file_module_MOD_json_file_get_string`         | `src/json-fortran/src/json_file_module.F90`      |
|  0.7% |  120 KiB |     918 | `0x1093fb`                                            | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| <0.1% | 2.02 KiB |      11 | `__json_file_module_MOD_initialize_json_core_in_file` | `src/json-fortran/src/json_file_module.F90`      |
| <0.1% |  1.7 KiB |     881 | `_start`                                              | `<unknown>`                                      |

##### `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`)

|      % |     Size | Objects | Callee                                    | Location                                     |
| -----: | -------: | ------: | ----------------------------------------- | -------------------------------------------- |
| 100.0% | 15.5 MiB | 165,407 | `__json_value_module_MOD_json_parse_file` | `src/json-fortran/src/json_value_module.F90` |
|   0.6% |  102 KiB |     936 | `_start`                                  | `<unknown>`                                  |

##### `main` (`out/profile.f90`)

|      % |    Size | Objects | Callee   | Location          |
| -----: | ------: | ------: | -------- | ----------------- |
| 100.0% |  15 MiB | 149,886 | `MAIN__` | `out/profile.f90` |
|   1.3% | 203 KiB |   1,857 | `_start` | `<unknown>`       |

##### `0x27743` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |     Size | Objects | Callee   | Location          |
| -----: | -------: | ------: | -------- | ----------------- |
| 100.0% | 11.6 MiB | 140,613 | `main`   | `out/profile.f90` |
|  <0.1% | 1.97 KiB |      18 | `_start` | `<unknown>`       |

##### `0x27817` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |     Size | Objects | Callee    | Location                              |
| -----: | -------: | ------: | --------- | ------------------------------------- |
| 100.0% | 10.8 MiB | 129,594 | `0x27743` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  11.5% | 1.25 MiB |      65 | `_start`  | `<unknown>`                           |

##### `_start` (`<unknown>`)

|      % |     Size | Objects | Callee    | Location                              |
| -----: | -------: | ------: | --------- | ------------------------------------- |
| 100.0% | 9.95 MiB | 118,144 | `0x27817` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  <0.1% | 3.16 KiB |     101 | `_start`  | `<unknown>`                           |

##### `__json_value_module_MOD_parse_string` (`src/json-fortran/src/json_value_module.F90`)

|     % |     Size | Objects | Callee                                        | Location                                          |
| ----: | -------: | ------: | --------------------------------------------- | ------------------------------------------------- |
|  4.4% |  255 KiB |   2,071 | `__json_string_utilities_MOD_unescape_string` | `src/json-fortran/src/json_string_utilities.F90`  |
|  3.6% |  211 KiB |   2,815 | `_start`                                      | `<unknown>`                                       |
|  0.3% | 18.3 KiB |   1,963 | `0xffffffffffffffff`                          | `<unknown>`                                       |
| <0.1% |     72 B |       9 | `0x39387`                                     | `usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10` |

##### `__json_value_module_MOD_parse_value` (`src/json-fortran/src/json_value_module.F90`)

|     % |     Size | Objects | Callee                                 | Location                                     |
| ----: | -------: | ------: | -------------------------------------- | -------------------------------------------- |
| 62.0% | 3.18 MiB |  19,211 | `__json_value_module_MOD_parse_string` | `src/json-fortran/src/json_value_module.F90` |
|  1.8% | 92.3 KiB |     844 | `_start`                               | `<unknown>`                                  |
|  1.7% | 90.1 KiB |     824 | `0x1d74f`                              | `[stack]`                                    |
|  0.1% |  4.5 KiB |   4,603 | `__json_value_module_MOD_to_string`    | `src/json-fortran/src/json_value_module.F90` |

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

##### `0xffffffffffffffff` (`<unknown>`)

|     % |     Size | Objects | Callee    | Location                                                                          |
| ----: | -------: | ------: | --------- | --------------------------------------------------------------------------------- |
| 57.2% |  514 KiB |   8,025 | `_start`  | `<unknown>`                                                                       |
| 39.5% |  356 KiB |   3,251 | `0x22aaf` | `tmp/nix-shell.NcwiQ3/profiler-md-input-generation.fqUYfr/fortran-current/binary` |
|  2.2% |   20 KiB |   1,963 | `0xbd4e`  | `<unknown>`                                                                       |
|  0.8% | 7.33 KiB |     938 | `0xff`    | `<unknown>`                                                                       |
|  0.1% | 1.09 KiB |      10 | `0x1e5ef` | `[stack]`                                                                         |

##### `0x4` (`<unknown>`)

|     % |     Size | Objects | Callee           | Location    |
| ----: | -------: | ------: | ---------------- | ----------- |
| 46.5% |  412 KiB |     101 | `0xaaaad7bfa0df` | `<unknown>` |
|  4.6% | 40.8 KiB |      10 | `_start`         | `<unknown>` |
|  0.9% | 8.16 KiB |       2 | `0xaaaad7c56267` | `<unknown>` |
|  0.9% | 8.16 KiB |       2 | `0xaaaad7b9ddd7` | `<unknown>` |
|  0.9% | 8.16 KiB |       2 | `0xaaaad7b6de6f` | `<unknown>` |

##### `0x22aaf` (`tmp/nix-shell.NcwiQ3/profiler-md-input-generation.fqUYfr/fortran-current/binary`)

|     % |     Size | Objects | Callee    | Location    |
| ----: | -------: | ------: | --------- | ----------- |
| 55.0% |  461 KiB |   4,170 | `_start`  | `<unknown>` |
| 33.5% |  280 KiB |   2,564 | `0x1e5ef` | `[stack]`   |
| 11.5% | 96.3 KiB |     880 | `0x1e85f` | `[stack]`   |

##### `0xffff8a179d67` (`<unknown>`)

|     % |     Size | Objects | Callee           | Location    |
| ----: | -------: | ------: | ---------------- | ----------- |
| 98.2% |  759 KiB |   2,827 | `_start`         | `<unknown>` |
|  0.8% | 6.21 KiB |     273 | `0xaaaad7a9e7ff` | `<unknown>` |
|  0.5% | 3.49 KiB |      38 | `0x5d`           | `<unknown>` |
|  0.1% | 1.12 KiB |      82 | `0xd`            | `<unknown>` |
|  0.1% |    870 B |      10 | `0x56`           | `<unknown>` |

##### `0x1e85f` (`[stack]`)

|     % |     Size | Objects | Callee                                    | Location                                     |
| ----: | -------: | ------: | ----------------------------------------- | -------------------------------------------- |
| 57.5% |  410 KiB |   3,746 | `_start`                                  | `<unknown>`                                  |
| 28.8% |  205 KiB |   1,878 | `__json_value_module_MOD_parse_object`    | `src/json-fortran/src/json_value_module.F90` |
| 13.0% | 92.3 KiB |     844 | `__json_value_module_MOD_parse_value`     | `src/json-fortran/src/json_value_module.F90` |
|  0.3% | 2.08 KiB |      19 | `__json_value_module_MOD_pop_char.part.0` | `src/json-fortran/src/json_value_module.F90` |
|  0.3% | 1.87 KiB |     239 | `0xaaaad7a9e7ff`                          | `<unknown>`                                  |

##### `0x1093fb` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|     % |     Size | Objects | Callee     | Location                                         |
| ----: | -------: | ------: | ---------- | ------------------------------------------------ |
| 56.2% |  395 KiB |   6,407 | `0x10b28f` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| 42.9% |  302 KiB |   3,216 | `0x10b283` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  1.0% | 6.68 KiB |       9 | `0x10b26f` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| <0.1% |     16 B |       1 | `0x10b263` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x1d11f` (`[stack]`)

|      % |    Size | Objects | Callee           | Location    |
| -----: | ------: | ------: | ---------------- | ----------- |
| 100.0% | 693 KiB |     170 | `0xffff8a179d67` | `<unknown>` |

##### `0x1e5ef` (`[stack]`)

|     % |    Size | Objects | Callee    | Location    |
| ----: | ------: | ------: | --------- | ----------- |
| 52.2% | 313 KiB |   2,866 | `0x1e85f` | `[stack]`   |
| 47.8% | 287 KiB |   2,621 | `_start`  | `<unknown>` |

##### `0x5` (`<unknown>`)

|    % |     Size | Objects | Callee           | Location    |
| ---: | -------: | ------: | ---------------- | ----------- |
| 7.8% | 40.8 KiB |      10 | `_start`         | `<unknown>` |
| 1.6% | 8.16 KiB |       2 | `0xaaaad7bfbbbf` | `<unknown>` |
| 1.6% | 8.16 KiB |       2 | `0xaaaad7c288ff` | `<unknown>` |
| 1.6% | 8.16 KiB |       2 | `0xaaaad7c814bf` | `<unknown>` |
| 1.6% | 8.16 KiB |       2 | `0xaaaad7c576ff` | `<unknown>` |

##### `0xaaaad7bfa0df` (`<unknown>`)

|      % |    Size | Objects | Callee   | Location    |
| -----: | ------: | ------: | -------- | ----------- |
| 100.0% | 416 KiB |     102 | `_start` | `<unknown>` |

##### `__json_value_module_MOD_json_get_string_by_path` (`src/json-fortran/src/json_get_scalar_by_path.inc`)

|     % |    Size | Objects | Callee                                     | Location                                     |
| ----: | ------: | ------: | ------------------------------------------ | -------------------------------------------- |
| 99.8% | 415 KiB |     203 | `__json_value_module_MOD_json_get_by_path` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_file_module_MOD_json_file_get_string` (`src/json-fortran/src/json_file_module.F90`)

|      % |    Size | Objects | Callee                                            | Location                                           |
| -----: | ------: | ------: | ------------------------------------------------- | -------------------------------------------------- |
| 100.0% | 416 KiB |   1,065 | `__json_value_module_MOD_json_get_string_by_path` | `src/json-fortran/src/json_get_scalar_by_path.inc` |

##### `__json_value_module_MOD_json_get_by_path_default` (`src/json-fortran/src/json_value_module.F90`)

|      % |    Size | Objects | Callee                                          | Location                                         |
| -----: | ------: | ------: | ----------------------------------------------- | ------------------------------------------------ |
| 100.0% | 415 KiB |     203 | `__json_string_utilities_MOD_string_to_integer` | `src/json-fortran/src/json_string_utilities.F90` |

##### `__json_value_module_MOD_json_get_by_path` (`src/json-fortran/src/json_value_module.F90`)

|      % |    Size | Objects | Callee                                             | Location                                     |
| -----: | ------: | ------: | -------------------------------------------------- | -------------------------------------------- |
| 100.0% | 415 KiB |     203 | `__json_value_module_MOD_json_get_by_path_default` | `src/json-fortran/src/json_value_module.F90` |

##### `0x10b28f` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|     % |    Size | Objects | Callee     | Location                                         |
| ----: | ------: | ------: | ---------- | ------------------------------------------------ |
| 65.7% | 259 KiB |   2,074 | `0x112ecb` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| 34.3% | 135 KiB |   4,333 | `0x112ebb` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x1` (`<unknown>`)

|     % |     Size | Objects | Callee               | Location                                          |
| ----: | -------: | ------: | -------------------- | ------------------------------------------------- |
| 67.0% |  235 KiB |     752 | `0x2b167`            | `usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10` |
| 28.0% | 98.4 KiB |   1,811 | `0xffffffffffffffff` | `<unknown>`                                       |
|  4.1% | 14.4 KiB |   1,739 | `_start`             | `<unknown>`                                       |
|  0.3% | 1.09 KiB |      10 | `0xe3b383e3a983e391` | `<unknown>`                                       |
|  0.3% |  1,008 B |       9 | `0x27743`            | `usr/lib/aarch64-linux-gnu/libc.so.6`             |

##### `0x10c847` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|      % |    Size | Objects | Callee    | Location                                         |
| -----: | ------: | ------: | --------- | ------------------------------------------------ |
| 100.0% | 302 KiB |   3,216 | `0x1c24b` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x10ab63` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|      % |    Size | Objects | Callee     | Location                                         |
| -----: | ------: | ------: | ---------- | ------------------------------------------------ |
| 100.0% | 302 KiB |   3,216 | `0x10c847` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

## Hottest call stacks

Call stacks ranked by bytes allocated in their leaf frame.

|     % |     Size | Objects | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ----: | -------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 39.2% | 27.6 MiB |   6,936 | `0x1c1b3` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`) ← `0xfa6bf` ← `0x109623` ← `__json_string_utilities_MOD_string_to_integer` (`src/json-fortran/src/json_string_utilities.F90`) ← `__json_value_module_MOD_string_to_int` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_number` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`        |
|  9.7% | 6.83 MiB |   1,716 | `0x1c1b3` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`) ← `0xfa6bf` ← `0x109623` ← `__json_string_utilities_MOD_string_to_integer` (`src/json-fortran/src/json_string_utilities.F90`) ← `__json_value_module_MOD_string_to_int` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_number` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`          |
|  9.2% |  6.5 MiB |  60,816 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                             |
|  5.3% | 3.74 MiB |     939 | `0x1c1b3` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`) ← `0xfa6bf` ← `0x109623` ← `__json_string_utilities_MOD_string_to_integer` (`src/json-fortran/src/json_string_utilities.F90`) ← `__json_value_module_MOD_string_to_int` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_number` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object`         |
|  3.9% | 2.73 MiB |     686 | `0x1c1b3` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`) ← `0xfa6bf` ← `0x109623` ← `__json_string_utilities_MOD_string_to_integer` (`src/json-fortran/src/json_string_utilities.F90`) ← `__json_value_module_MOD_string_to_int` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_number` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` |
|  3.2% | 2.27 MiB |  10,740 | `__json_value_module_MOD_parse_string` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_value` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                                   |
|  1.8% | 1.25 MiB |      10 | `0x1c1b3` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`) ← `0x10be83` ← `0x1029eb` ← `0x10324b` ← `__json_value_module_MOD_json_parse_file` (`src/json-fortran/src/json_value_module.F90`) ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `0x27743` (`usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0x27817` (`usr/lib/aarch64-linux-gnu/libc.so.6`) ← `_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  1.2% |  891 KiB |  59,189 | `__json_value_module_MOD_parse_object` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                                  |
|  1.2% |  869 KiB |  16,515 | `__json_value_module_MOD_parse_string` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                                  |
|  1.0% |  743 KiB |  22,123 | `__json_value_module_MOD_parse_value` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                                   |
|  1.0% |  693 KiB |     170 | `0x1c1b3` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`) ← `0xfa6bf` ← `0x109623` ← `__json_string_utilities_MOD_string_to_integer` (`src/json-fortran/src/json_string_utilities.F90`) ← `__json_value_module_MOD_string_to_int` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_number` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `0x27743` (`usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0xffff8a179d67` ← `0x1d11f` (`[stack]`)                                                                                                                                                                                                                                                                                                     |
|  0.7% |  497 KiB |   4,544 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `0x27743` (`usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817`                                        |
|  0.7% |  489 KiB |     120 | `0x1c1b3` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`) ← `0xfa6bf` ← `0x109623` ← `__json_string_utilities_MOD_string_to_integer` (`src/json-fortran/src/json_string_utilities.F90`) ← `__json_value_module_MOD_string_to_int` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_number` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`          |
|  0.7% |  486 KiB |   4,441 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `0x27743` (`usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start`                                                                      |
|  0.6% |  449 KiB |     110 | `0x1c1b3` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`) ← `0xfa6bf` ← `0x109623` ← `__json_string_utilities_MOD_string_to_integer` (`src/json-fortran/src/json_string_utilities.F90`) ← `__json_value_module_MOD_string_to_int` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_number` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array`           |
|  0.6% |  412 KiB |     101 | `0x1c1b3` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`) ← `0xfa6bf` ← `0x109623` ← `__json_string_utilities_MOD_string_to_integer` (`src/json-fortran/src/json_string_utilities.F90`) ← `__json_value_module_MOD_json_get_by_path_default` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_json_get_by_path` ← `__json_value_module_MOD_json_get_string_by_path` (`src/json-fortran/src/json_get_scalar_by_path.inc`) ← `__json_file_module_MOD_json_file_get_string` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `0x27743` (`usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0xaaaad7bfa0df` ← `0x4`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  0.5% |  392 KiB |      96 | `0x1c1b3` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`) ← `0xfa6bf` ← `0x109623` ← `__json_string_utilities_MOD_string_to_integer` (`src/json-fortran/src/json_string_utilities.F90`) ← `__json_value_module_MOD_string_to_int` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_number` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`         |
|  0.5% |  392 KiB |      96 | `0x1c1b3` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`) ← `0xfa6bf` ← `0x109623` ← `__json_string_utilities_MOD_string_to_integer` (`src/json-fortran/src/json_string_utilities.F90`) ← `__json_value_module_MOD_string_to_int` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_number` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`         |
|  0.5% |  383 KiB |   3,503 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `0x27743` (`usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0xffffffffffffffff`                                                                                        |
|  0.5% |  374 KiB |   3,416 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `0x27743` (`usr/lib/aarch64-linux-gnu/libc.so.6`)           |

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
| 100.0% | 611 KiB |   5,584 | `src/json-fortran/src/json_value_module.F90:2218` |

##### `__json_value_module_MOD_parse_value` (`src/json-fortran/src/json_value_module.F90`)

|      % |     Size | Objects | Location                                           |
| -----: | -------: | ------: | -------------------------------------------------- |
| 100.0% | 77.5 KiB |   1,865 | `src/json-fortran/src/json_value_module.F90:10192` |

##### `__json_value_module_MOD_parse_object` (`src/json-fortran/src/json_value_module.F90`)

|      % |     Size | Objects | Location                                           |
| -----: | -------: | ------: | -------------------------------------------------- |
| 100.0% | 64.8 KiB |   5,342 | `src/json-fortran/src/json_value_module.F90:10937` |

##### `__json_value_module_MOD_to_integer` (`src/json-fortran/src/json_value_module.F90`)

|      % |    Size | Objects | Location                                           |
| -----: | ------: | ------: | -------------------------------------------------- |
| 100.0% | 6.8 KiB |     871 | `src/json-fortran/src/json_value_module.F90:10710` |

##### `__json_value_module_MOD_to_logical` (`src/json-fortran/src/json_value_module.F90`)

|      % |     Size | Objects | Location                                           |
| -----: | -------: | ------: | -------------------------------------------------- |
| 100.0% | 4.29 KiB |   1,098 | `src/json-fortran/src/json_value_module.F90:10679` |

##### `__json_value_module_MOD_json_initialize` (`src/json-fortran/src/json_value_module.F90`)

|     % |  Size | Objects | Location                                          |
| ----: | ----: | ------: | ------------------------------------------------- |
| 95.2% | 256 B |       1 | `src/json-fortran/src/json_value_module.F90:1051` |
|  4.8% |  13 B |       1 | `src/json-fortran/src/json_value_module.F90:1203` |

##### `__json_value_module_MOD_parse_string` (`src/json-fortran/src/json_value_module.F90`)

|      % |  Size | Objects | Location                                           |
| -----: | ----: | ------: | -------------------------------------------------- |
| 100.0% | 256 B |       1 | `src/json-fortran/src/json_value_module.F90:11101` |

##### `__json_value_module_MOD_to_string` (`src/json-fortran/src/json_value_module.F90`)

|      % | Size | Objects | Location                                           |
| -----: | ---: | ------: | -------------------------------------------------- |
| 100.0% | 52 B |      52 | `src/json-fortran/src/json_value_module.F90:10807` |

##### `__json_value_module_MOD_json_parse_file` (`src/json-fortran/src/json_value_module.F90`)

|      % | Size | Objects | Location                                          |
| -----: | ---: | ------: | ------------------------------------------------- |
| 100.0% | 17 B |       1 | `src/json-fortran/src/json_value_module.F90:9793` |

##### `__json_value_module_MOD_json_prepare_parser` (`src/json-fortran/src/json_value_module.F90`)

|      % | Size | Objects | Location                                          |
| -----: | ---: | ------: | ------------------------------------------------- |
| 100.0% |  3 B |       1 | `src/json-fortran/src/json_value_module.F90:9687` |

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
|  4.3% | 38.1 KiB |     585 | `0xffffffffffffffff`                        | `<unknown>`                                                                       |
|  3.9% | 35.3 KiB |     317 | `0x22aaf`                                   | `tmp/nix-shell.NcwiQ3/profiler-md-input-generation.fqUYfr/fortran-current/binary` |
|  3.3% | 29.6 KiB |     307 | `0x1e85f`                                   | `[stack]`                                                                         |
|  2.8% | 25.3 KiB |     231 | `0x1e5ef`                                   | `[stack]`                                                                         |
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
|  3.9% | 35.3 KiB |     317 | `0x22aaf`                                   | `tmp/nix-shell.NcwiQ3/profiler-md-input-generation.fqUYfr/fortran-current/binary` |
|  3.3% | 29.6 KiB |     307 | `0x1e85f`                                   | `[stack]`                                                                         |
|  2.8% | 25.3 KiB |     231 | `0x1e5ef`                                   | `[stack]`                                                                         |
|  1.1% | 9.78 KiB |     200 | `__json_value_module_MOD_parse_string`      | `src/json-fortran/src/json_value_module.F90`                                      |
|  1.0% | 8.53 KiB |      78 | `0x1dd9f`                                   | `[stack]`                                                                         |
|  1.0% | 8.53 KiB |      78 | `0x1d36f`                                   | `[stack]`                                                                         |
|  1.0% | 8.53 KiB |      78 | `0x1d46f`                                   | `[stack]`                                                                         |
|  0.8% | 7.55 KiB |     872 | `__json_value_module_MOD_parse_number`      | `src/json-fortran/src/json_value_module.F90`                                      |
|  0.8% |  6.8 KiB |     871 | `__json_value_module_MOD_to_integer`        | `src/json-fortran/src/json_value_module.F90`                                      |
|  0.5% | 4.29 KiB |   1,098 | `__json_value_module_MOD_to_logical`        | `src/json-fortran/src/json_value_module.F90`                                      |
|  0.5% | 4.27 KiB |      39 | `0x1d6e7`                                   | `[stack]`                                                                         |
|  0.5% | 4.27 KiB |      39 | `0x1d3e7`                                   | `[stack]`                                                                         |

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
|  4.3% | 38.1 KiB |     585 | `0xffffffffffffffff` | `<unknown>`                                       |
|  1.5% | 13.6 KiB |      99 | `0x1`                | `<unknown>`                                       |
|  1.1% | 10.3 KiB |      72 | `0x2b167`            | `usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10` |
|  0.9% | 8.31 KiB |      76 | `0xffff898e003f`     | `<unknown>`                                       |
|  0.9% | 7.77 KiB |      71 | `0x397ff`            | `usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10` |
|  0.6% | 5.63 KiB |     307 | `0xaaaad7a9e7ff`     | `<unknown>`                                       |
|  0.5% | 4.27 KiB |      39 | `0x2f9e7`            | `usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10` |
|  0.5% | 4.27 KiB |      39 | `0x7c`               | `<unknown>`                                       |
|  0.4% | 3.94 KiB |      36 | `0x17`               | `<unknown>`                                       |
|  0.4% | 3.72 KiB |      34 | `0x18`               | `<unknown>`                                       |
|  0.4% | 3.19 KiB |     136 | `0xffff8a178fff`     | `<unknown>`                                       |
|  0.3% | 3.09 KiB |     148 | `0xffff8a179d67`     | `<unknown>`                                       |
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
|  0.1% |   272 B |       3 | `__json_file_module_MOD_initialize_json_core_in_file` | `src/json-fortran/src/json_file_module.F90`      |
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
| 4.1% |  3.5 KiB |      32 | `0x1d74f`                           | `[stack]`                                    |
| 0.1% |     52 B |      52 | `__json_value_module_MOD_to_string` | `src/json-fortran/src/json_value_module.F90` |

##### `0xffffffffffffffff` (`<unknown>`)

|     % |     Size | Objects | Callee               | Location                                                                          |
| ----: | -------: | ------: | -------------------- | --------------------------------------------------------------------------------- |
| 57.4% | 21.9 KiB |     325 | `_start`             | `<unknown>`                                                                       |
| 39.3% |   15 KiB |     137 | `0x22aaf`            | `tmp/nix-shell.NcwiQ3/profiler-md-input-generation.fqUYfr/fortran-current/binary` |
|  2.2% |    856 B |      82 | `0xbd4e`             | `<unknown>`                                                                       |
|  2.0% |    764 B |       2 | `0xffffffffffffffff` | `<unknown>`                                                                       |
|  0.8% |    304 B |      38 | `0xff`               | `<unknown>`                                                                       |

##### `0x22aaf` (`tmp/nix-shell.NcwiQ3/profiler-md-input-generation.fqUYfr/fortran-current/binary`)

|     % |     Size | Objects | Callee    | Location    |
| ----: | -------: | ------: | --------- | ----------- |
| 56.3% | 19.9 KiB |     176 | `_start`  | `<unknown>` |
| 33.1% | 11.7 KiB |     107 | `0x1e5ef` | `[stack]`   |
| 10.5% | 3.72 KiB |      34 | `0x1e85f` | `[stack]`   |

##### `0x1e85f` (`[stack]`)

|     % |     Size | Objects | Callee                                    | Location                                     |
| ----: | -------: | ------: | ----------------------------------------- | -------------------------------------------- |
| 57.2% |   17 KiB |     155 | `_start`                                  | `<unknown>`                                  |
| 28.8% | 8.53 KiB |      78 | `__json_value_module_MOD_parse_object`    | `src/json-fortran/src/json_value_module.F90` |
| 12.6% | 3.72 KiB |      34 | `__json_value_module_MOD_parse_value`     | `src/json-fortran/src/json_value_module.F90` |
|  1.0% |    312 B |      39 | `0xaaaad7a9e7ff`                          | `<unknown>`                                  |
|  0.4% |    112 B |       1 | `__json_value_module_MOD_pop_char.part.0` | `src/json-fortran/src/json_value_module.F90` |

##### `0x1e5ef` (`[stack]`)

|     % |     Size | Objects | Callee    | Location    |
| ----: | -------: | ------: | --------- | ----------- |
| 52.4% | 13.2 KiB |     121 | `0x1e85f` | `[stack]`   |
| 47.6% |   12 KiB |     110 | `_start`  | `<unknown>` |

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
|  6.7% |    702 B |      39 | `0x1dc4f` | `[stack]`                                         |
|  2.4% |    256 B |       1 | `0x313ef` | `usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10` |

##### `__json_value_module_MOD_parse_string` (`src/json-fortran/src/json_value_module.F90`)

|     % |     Size | Objects | Callee               | Location    |
| ----: | -------: | ------: | -------------------- | ----------- |
| 89.6% | 8.76 KiB |     117 | `_start`             | `<unknown>` |
|  7.8% |    784 B |      82 | `0xffffffffffffffff` | `<unknown>` |

##### `0x1dd9f` (`[stack]`)

|      % |     Size | Objects | Callee                                 | Location                                     |
| -----: | -------: | ------: | -------------------------------------- | -------------------------------------------- |
| 100.0% | 8.53 KiB |      78 | `__json_value_module_MOD_parse_string` | `src/json-fortran/src/json_value_module.F90` |

##### `0x1d36f` (`[stack]`)

|      % |     Size | Objects | Callee   | Location    |
| -----: | -------: | ------: | -------- | ----------- |
| 100.0% | 8.53 KiB |      78 | `_start` | `<unknown>` |

##### `0x1d46f` (`[stack]`)

|     % |     Size | Objects | Callee    | Location                                                                          |
| ----: | -------: | ------: | --------- | --------------------------------------------------------------------------------- |
| 48.7% | 4.16 KiB |      38 | `0x22aaf` | `tmp/nix-shell.NcwiQ3/profiler-md-input-generation.fqUYfr/fortran-current/binary` |
| 48.7% | 4.16 KiB |      38 | `main`    | `out/profile.f90`                                                                 |
|  2.6% |    224 B |       2 | `0x1e5ef` | `[stack]`                                                                         |

##### `0xffff898e003f` (`<unknown>`)

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

##### `0xaaaad7a9e7ff` (`<unknown>`)

|     % |     Size | Objects | Callee           | Location    |
| ----: | -------: | ------: | ---------------- | ----------- |
| 41.1% | 2.31 KiB |     153 | `_start`         | `<unknown>` |
| 35.9% | 2.02 KiB |     103 | `0xffff8a179d67` | `<unknown>` |
| 23.0% | 1.29 KiB |      51 | `0xffff8a178fff` | `<unknown>` |

##### `0x1d6e7` (`[stack]`)

|      % |     Size | Objects | Callee   | Location    |
| -----: | -------: | ------: | -------- | ----------- |
| 100.0% | 4.27 KiB |      39 | `_start` | `<unknown>` |

##### `0x1d3e7` (`[stack]`)

|      % |     Size | Objects | Callee    | Location  |
| -----: | -------: | ------: | --------- | --------- |
| 100.0% | 4.27 KiB |      39 | `0x1d6e7` | `[stack]` |

##### `0x2f9e7` (`usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10`)

|      % |     Size | Objects | Callee   | Location    |
| -----: | -------: | ------: | -------- | ----------- |
| 100.0% | 4.27 KiB |      39 | `_start` | `<unknown>` |

##### `0x7c` (`<unknown>`)

|    % |  Size | Objects | Callee           | Location    |
| ---: | ----: | ------: | ---------------- | ----------- |
| 2.6% | 112 B |       1 | `0xaaaad7b417cf` | `<unknown>` |
| 2.6% | 112 B |       1 | `0xaaaad7b6d7a7` | `<unknown>` |
| 2.6% | 112 B |       1 | `0xaaaad7cb381f` | `<unknown>` |
| 2.6% | 112 B |       1 | `0xaaaad7b1008f` | `<unknown>` |
| 2.6% | 112 B |       1 | `0xaaaad7b104bf` | `<unknown>` |

##### `0x17` (`<unknown>`)

|      % |     Size | Objects | Callee    | Location                                          |
| -----: | -------: | ------: | --------- | ------------------------------------------------- |
| 100.0% | 3.94 KiB |      36 | `0x397ff` | `usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10` |

##### `0x18` (`<unknown>`)

|      % |     Size | Objects | Callee   | Location    |
| -----: | -------: | ------: | -------- | ----------- |
| 100.0% | 3.72 KiB |      34 | `_start` | `<unknown>` |

##### `0xffff8a178fff` (`<unknown>`)

|     % |     Size | Objects | Callee    | Location                                          |
| ----: | -------: | ------: | --------- | ------------------------------------------------- |
| 54.3% | 1.73 KiB |      55 | `_start`  | `<unknown>`                                       |
| 38.3% | 1.22 KiB |      78 | `0x3131f` | `usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10` |
|  6.9% |    224 B |       2 | `0x3143b` | `usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10` |
|  0.6% |     18 B |       1 | `0x3142b` | `usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10` |

##### `0xffff8a179d67` (`<unknown>`)

|     % |     Size | Objects | Callee           | Location    |
| ----: | -------: | ------: | ---------------- | ----------- |
| 65.2% | 2.02 KiB |     103 | `_start`         | `<unknown>` |
| 34.8% | 1.08 KiB |      45 | `0xaaaad7a9e7ff` | `<unknown>` |

##### `0x3131f` (`usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10`)

|     % |     Size | Objects | Callee    | Location    |
| ----: | -------: | ------: | --------- | ----------- |
| 51.9% | 1.22 KiB |      78 | `_start`  | `<unknown>` |
| 33.5% |    808 B |      39 | `0x1d02f` | `[stack]`   |
| 14.6% |    351 B |      39 | `0x1da4f` | `[stack]`   |

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
|  1.7% |   15 KiB |     137 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `0x27743` (`usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0x22aaf` (`tmp/nix-shell.NcwiQ3/profiler-md-input-generation.fqUYfr/fortran-current/binary`) ← `0xffffffffffffffff`                                            |
|  1.3% | 11.7 KiB |     107 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `0x27743` (`usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0x1e5ef` (`[stack]`) ← `0x22aaf` (`tmp/nix-shell.NcwiQ3/profiler-md-input-generation.fqUYfr/fortran-current/binary`)                                                                                    |
|  1.3% | 11.3 KiB |     103 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main`                                 |
|  1.2% | 10.5 KiB |      39 | `__json_value_module_MOD_parse_value` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `0x27743` (`usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817`                                                         |
|  1.0% | 9.33 KiB |      32 | `__json_value_module_MOD_parse_value` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `0x27743` (`usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0x2b167` (`usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10`) ← `0x1`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  1.0% | 8.53 KiB |      78 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                                          |
|  1.0% | 8.53 KiB |      78 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `0x27743` (`usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `__json_value_module_MOD_parse_string` (`src/json-fortran/src/json_value_module.F90`) ← `0x1dd9f` (`[stack]`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  1.0% | 8.53 KiB |      78 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `0x27743` (`usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0x1e85f` (`[stack]`) ← `0x1e5ef`                                                                                                                                                                                                                 |
|  1.0% | 8.53 KiB |      78 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `0x27743` (`usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0x1d36f` (`[stack]`) ← `__json_value_module_MOD_parse_object` (`src/json-fortran/src/json_value_module.F90`)                                                                                                                                                                                                                       |
|  1.0% | 8.53 KiB |      78 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `0x27743` (`usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `__json_value_module_MOD_parse_object` (`src/json-fortran/src/json_value_module.F90`) ← `0x1e85f` (`[stack]`)                                                                                                                                                                              |
|  0.9% | 7.88 KiB |      72 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) |
|  0.8% | 7.55 KiB |      69 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file`                                      |
