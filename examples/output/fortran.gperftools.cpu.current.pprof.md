# CPU profile

Took 3.86s over 3,855 samples (1.0ms per sample).

| Category |     % |  Time | Samples |
| -------- | ----: | ----: | ------: |
| Ours     | 58.2% | 2.24s |   2,242 |
| Native   | 41.8% | 1.61s |   1,613 |

Paths starting with `./` or `../` are relative to `/src/json-fortran/src/`.

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
└── … 3.86s (100.0%) MAIN__ at /out/profile.f90:5
    ├── 3.74s (97.1%) __json_file_module_MOD_json_file_load at ./json_file_module.F90:854
    │   └── 3.74s (97.1%) __json_value_module_MOD_json_parse_file at ./json_value_module.F90:9721
    │       ├── 3.66s (94.9%, self 0.7%) __json_value_module_MOD_parse_object at 10889
    │       │   ├── … 1.07s (27.9%, self 0.7%) __json_value_module_MOD_parse_value at ./json_value_module.F90:10124
    │       │   │   ├── 764.0ms (19.8%, self 1.6%) __json_value_module_MOD_parse_string at 11080
    │       │   │   │   ├── 574.0ms (14.9%, self 14.2%) __json_value_module_MOD_pop_char.part.0 at 11346
    │       │   │   │   │   └── … 13.0ms (0.3%) __read
    │       │   │   │   ├── 19.0ms (0.5%) __json_string_utilities_MOD_unescape_string at ./json_string_utilities.F90:483
    │       │   │   │   └── 108.0ms (2.8%) 7 more callees, led by (1.6%) _gfortran_string_scan
    │       │   │   ├── 124.0ms (3.2%, self 3.2%) __json_value_module_MOD_pop_char.part.0 at 11346
    │       │   │   └── 159.0ms (4.1%) 17 more callees, led by (1.3%) __json_value_module_MOD_parse_for_chars at 11173
    │       │   ├── … 923.0ms (23.9%, self 2.5%, self 4.1% globally) __json_value_module_MOD_parse_string at ./json_value_module.F90:11080
    │       │   │   ├── 616.0ms (16.0%, self 15.6%, self 50.2% globally) __json_value_module_MOD_pop_char.part.0 at 11346
    │       │   │   ├── 67.0ms (1.7%, self 0.7%, self 3.9% globally) __libc_malloc
    │       │   │   │   ├── 10.0ms (0.3%) 0x90dc0 at /usr/lib/aarch64-linux-gnu/libc.so.6
    │       │   │   │   └── 30.0ms (0.8%) 16 more callees, led by (0.2%) 0x91228 at /usr/lib/aarch64-linux-gnu/libc.so.6
    │       │   │   ├── 35.0ms (0.9%, self 0.8% globally) __libc_realloc
    │       │   │   │   └── 30.0ms (0.8%) 7 more callees, led by (0.5%) 0x91c5f at /usr/lib/aarch64-linux-gnu/libc.so.6
    │       │   │   └── 110.0ms (2.9%) 5 more callees, led by (2.2%) _gfortran_string_scan
    │       │   ├── … 559.0ms (14.5%, self 14.1%) __json_value_module_MOD_pop_char.part.0 at ./json_value_module.F90:11346
    │       │   ├── … 405.0ms (10.5%) __json_value_module_MOD_parse_number at ./json_value_module.F90:11220
    │       │   │   └── 396.0ms (10.3%) 4 more callees, led by (8.8%) __json_value_module_MOD_string_to_int at 8081
    │       │   ├── … 127.0ms (3.3%, self 7.7% globally) _gfortran_string_scan
    │       │   ├── … 89.0ms (2.3%, self 3.7% globally) _gfortran_string_len_trim
    │       │   ├── … 72.0ms (1.9%) __json_value_module_MOD_json_value_create at ./json_value_module.F90:2211
    │       │   │   └── 71.0ms (1.8%) __libc_malloc
    │       │   │       ├── 11.0ms (0.3%) 0x91228 at /usr/lib/aarch64-linux-gnu/libc.so.6
    │       │   │       └── 47.0ms (1.2%) 23 more callees, led by (0.2%) 0x90dc0 at /usr/lib/aarch64-linux-gnu/libc.so.6
    │       │   ├── … 56.0ms (1.5%, self 1.2%, self 3.2% globally) cfree
    │       │   ├── … 56.0ms (1.5%, self 2.0% globally) _init
    │       │   ├── … 16.0ms (0.4%) 0x9d100 at /usr/lib/aarch64-linux-gnu/libc.so.6
    │       │   └── 253.0ms (6.6%) 15 more callees, led by (3.6%) __json_value_module_MOD_parse_array at ./json_value_module.F90:11003
    │       └── 85.0ms (2.2%) 4 more callees, led by (1.8%) _gfortran_st_open
    ├── 78.0ms (2.0%) __json_file_module_MOD_json_file_destroy at ./json_file_module.F90:781
    │   └── 78.0ms (2.0%) __json_value_module_MOD_json_value_destroy at ./json_value_module.F90:2244
    │       ├── … 42.0ms (1.1%) cfree
    │       │   └── 7.0ms (0.2%, self 0.9% globally) 0x8faf4 at /usr/lib/aarch64-linux-gnu/libc.so.6
    │       └── … 23.0ms (0.6%) __json_value_module_MOD_destroy_json_data at ./json_value_module.F90:1394
    └── 35.0ms (0.9%) 7 more callees, led by (0.6%) __json_file_module_MOD_json_file_get_string at ./json_file_module.F90:1863
```

## Hottest functions

### Self time

Functions with the most time spent within the function body, excluding callees.

|     % |    Time | Samples | Function                                      | Location                                          |
| ----: | ------: | ------: | --------------------------------------------- | ------------------------------------------------- |
| 50.2% |   1.94s |   1,937 | `__json_value_module_MOD_pop_char.part.0`     | `./json_value_module.F90:11346`                   |
|  7.7% | 298.0ms |     298 | `_gfortran_string_scan`                       | `<unknown>`                                       |
|  4.1% | 158.0ms |     158 | `__json_value_module_MOD_parse_string`        | `./json_value_module.F90:11080`                   |
|  3.9% | 151.0ms |     151 | `__libc_malloc`                               | `<unknown>`                                       |
|  3.7% | 144.0ms |     144 | `_gfortran_string_len_trim`                   | `<unknown>`                                       |
|  3.2% | 124.0ms |     124 | `cfree`                                       | `<unknown>`                                       |
|  2.0% |  76.0ms |      76 | `_init`                                       | `<unknown>`                                       |
|  0.9% |  35.0ms |      35 | `0x8faf4`                                     | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  0.8% |  30.0ms |      30 | `0x91228`                                     | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  0.8% |  30.0ms |      30 | `__libc_realloc`                              | `<unknown>`                                       |
|  0.8% |  30.0ms |      30 | `__read`                                      | `<unknown>`                                       |
|  0.7% |  28.0ms |      28 | `__json_value_module_MOD_parse_value`         | `./json_value_module.F90:10124`                   |
|  0.7% |  27.0ms |      27 | `__json_value_module_MOD_parse_object`        | `./json_value_module.F90:10889`                   |
|  0.7% |  26.0ms |      26 | `__json_string_utilities_MOD_unescape_string` | `./json_string_utilities.F90:483`                 |
|  0.6% |  24.0ms |      24 | `0x9d100`                                     | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  0.6% |  23.0ms |      23 | `0x90dc0`                                     | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  0.5% |  20.0ms |      20 | `0x9d240`                                     | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  0.5% |  18.0ms |      18 | `0x10c300`                                    | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  0.4% |  16.0ms |      16 | `0x9e658`                                     | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  0.4% |  16.0ms |      16 | `0x91234`                                     | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Ours

|     % |    Time | Samples | Function                                                | Location                          |
| ----: | ------: | ------: | ------------------------------------------------------- | --------------------------------- |
| 50.2% |   1.94s |   1,937 | `__json_value_module_MOD_pop_char.part.0`               | `./json_value_module.F90:11346`   |
|  4.1% | 158.0ms |     158 | `__json_value_module_MOD_parse_string`                  | `./json_value_module.F90:11080`   |
|  0.7% |  28.0ms |      28 | `__json_value_module_MOD_parse_value`                   | `./json_value_module.F90:10124`   |
|  0.7% |  27.0ms |      27 | `__json_value_module_MOD_parse_object`                  | `./json_value_module.F90:10889`   |
|  0.7% |  26.0ms |      26 | `__json_string_utilities_MOD_unescape_string`           | `./json_string_utilities.F90:483` |
|  0.3% |  11.0ms |      11 | `__json_value_module_MOD_parse_number`                  | `./json_value_module.F90:11220`   |
|  0.3% |  10.0ms |      10 | `__json_value_module_MOD_json_value_destroy`            | `./json_value_module.F90:2244`    |
|  0.2% |   9.0ms |       9 | `__json_value_module_MOD_destroy_json_data`             | `./json_value_module.F90:1394`    |
|  0.2% |   7.0ms |       7 | `__json_value_module_MOD_json_value_add_member`         | `./json_value_module.F90:3401`    |
|  0.2% |   7.0ms |       7 | `__json_value_module_MOD_parse_for_chars`               | `./json_value_module.F90:11173`   |
|  0.1% |   5.0ms |       5 | `__json_value_module_MOD_pop_char`                      | `./json_value_module.F90:11346`   |
|  0.1% |   4.0ms |       4 | `__json_string_utilities_MOD_string_to_integer`         | `./json_string_utilities.F90:116` |
|  0.1% |   3.0ms |       3 | `__json_value_module_MOD_parse_array`                   | `./json_value_module.F90:11003`   |
|  0.1% |   3.0ms |       3 | `__json_value_module_MOD_to_string`                     | `./json_value_module.F90:10762`   |
|  0.1% |   2.0ms |       2 | `__json_value_module_MOD_json_info`                     | `./json_value_module.F90:1416`    |
| <0.1% |   1.0ms |       1 | `__json_value_module_MOD_json_value_create`             | `./json_value_module.F90:2211`    |
| <0.1% |   1.0ms |       1 | `__json_value_module_MOD_json_get_by_path_default`      | `./json_value_module.F90:6794`    |
| <0.1% |   1.0ms |       1 | `__json_value_module_MOD_to_object`                     | `./json_value_module.F90:10844`   |
| <0.1% |   1.0ms |       1 | `__json_value_module_MOD_push_char`                     | `./json_value_module.F90:11510`   |
| <0.1% |   1.0ms |       1 | `__json_value_module_MOD_json_value_get_child_by_index` | `./json_value_module.F90:5446`    |

##### Native

|    % |    Time | Samples | Function                    | Location                                          |
| ---: | ------: | ------: | --------------------------- | ------------------------------------------------- |
| 7.7% | 298.0ms |     298 | `_gfortran_string_scan`     | `<unknown>`                                       |
| 3.9% | 151.0ms |     151 | `__libc_malloc`             | `<unknown>`                                       |
| 3.7% | 144.0ms |     144 | `_gfortran_string_len_trim` | `<unknown>`                                       |
| 3.2% | 124.0ms |     124 | `cfree`                     | `<unknown>`                                       |
| 2.0% |  76.0ms |      76 | `_init`                     | `<unknown>`                                       |
| 0.9% |  35.0ms |      35 | `0x8faf4`                   | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
| 0.8% |  30.0ms |      30 | `0x91228`                   | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
| 0.8% |  30.0ms |      30 | `__libc_realloc`            | `<unknown>`                                       |
| 0.8% |  30.0ms |      30 | `__read`                    | `<unknown>`                                       |
| 0.6% |  24.0ms |      24 | `0x9d100`                   | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
| 0.6% |  23.0ms |      23 | `0x90dc0`                   | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
| 0.5% |  20.0ms |      20 | `0x9d240`                   | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
| 0.5% |  18.0ms |      18 | `0x10c300`                  | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| 0.4% |  16.0ms |      16 | `0x9e658`                   | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
| 0.4% |  16.0ms |      16 | `0x91234`                   | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
| 0.3% |  13.0ms |      13 | `0x9123c`                   | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
| 0.3% |  11.0ms |      11 | `_gfortran_concat_string`   | `<unknown>`                                       |
| 0.3% |  11.0ms |      11 | `__pthread_mutex_lock`      | `<unknown>`                                       |
| 0.3% |  11.0ms |      11 | `0x8e96c`                   | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
| 0.3% |  10.0ms |      10 | `__open`                    | `<unknown>`                                       |

#### Lines

Lines with the largest contribution to each function's self time.

##### `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90:11346`)

|     % |   Time | Samples | Location                        |
| ----: | -----: | ------: | ------------------------------- |
| 74.6% |  1.45s |   1,445 | `./json_value_module.F90:11475` |
|  4.1% | 79.0ms |      79 | `./json_value_module.F90:11497` |
|  3.4% | 65.0ms |      65 | `./json_value_module.F90:11480` |
|  3.3% | 64.0ms |      64 | `./json_value_module.F90:11423` |
|  3.1% | 61.0ms |      61 | `./json_value_module.F90:11386` |

##### `__json_value_module_MOD_parse_string` (`./json_value_module.F90:11080`)

|     % |   Time | Samples | Location                        |
| ----: | -----: | ------: | ------------------------------- |
| 34.8% | 55.0ms |      55 | `./json_value_module.F90:11112` |
| 15.8% | 25.0ms |      25 | `./json_value_module.F90:11126` |
| 15.8% | 25.0ms |      25 | `./json_value_module.F90:11119` |
| 14.6% | 23.0ms |      23 | `./json_value_module.F90:11114` |
|  5.7% |  9.0ms |       9 | `./json_value_module.F90:11103` |

##### `__json_value_module_MOD_parse_value` (`./json_value_module.F90:10124`)

|     % |   Time | Samples | Location                        |
| ----: | -----: | ------: | ------------------------------- |
| 42.9% | 12.0ms |      12 | `./json_value_module.F90:10228` |
| 17.9% |  5.0ms |       5 | `./json_value_module.F90:10209` |
| 10.7% |  3.0ms |       3 | `./json_value_module.F90:10192` |
|  7.1% |  2.0ms |       2 | `./json_value_module.F90:10164` |
|  3.6% |  1.0ms |       1 | `./json_value_module.F90:10202` |

##### `__json_value_module_MOD_parse_object` (`./json_value_module.F90:10889`)

|     % |  Time | Samples | Location                        |
| ----: | ----: | ------: | ------------------------------- |
| 29.6% | 8.0ms |       8 | `./json_value_module.F90:10985` |
| 14.8% | 4.0ms |       4 | `./json_value_module.F90:10954` |
|  7.4% | 2.0ms |       2 | `./json_value_module.F90:10920` |
|  7.4% | 2.0ms |       2 | `./json_value_module.F90:10938` |
|  7.4% | 2.0ms |       2 | `./json_value_module.F90:10937` |

##### `__json_string_utilities_MOD_unescape_string` (`./json_string_utilities.F90:483`)

|     % |  Time | Samples | Location                          |
| ----: | ----: | ------: | --------------------------------- |
| 23.1% | 6.0ms |       6 | `./json_string_utilities.F90:605` |
| 19.2% | 5.0ms |       5 | `./json_string_utilities.F90:483` |
| 15.4% | 4.0ms |       4 | `./json_string_utilities.F90:615` |
| 11.5% | 3.0ms |       3 | `./json_string_utilities.F90:506` |
|  7.7% | 2.0ms |       2 | `./json_string_utilities.F90:514` |

##### `__json_value_module_MOD_parse_number` (`./json_value_module.F90:11220`)

|     % |  Time | Samples | Location                        |
| ----: | ----: | ------: | ------------------------------- |
| 63.6% | 7.0ms |       7 | `./json_value_module.F90:11320` |
|  9.1% | 1.0ms |       1 | `./json_value_module.F90:11244` |
|  9.1% | 1.0ms |       1 | `./json_value_module.F90:11287` |
|  9.1% | 1.0ms |       1 | `./json_value_module.F90:11280` |
|  9.1% | 1.0ms |       1 | `./json_value_module.F90:11253` |

##### `__json_value_module_MOD_json_value_destroy` (`./json_value_module.F90:2244`)

|     % |  Time | Samples | Location                       |
| ----: | ----: | ------: | ------------------------------ |
| 20.0% | 2.0ms |       2 | `./json_value_module.F90:2258` |
| 20.0% | 2.0ms |       2 | `./json_value_module.F90:2303` |
| 20.0% | 2.0ms |       2 | `./json_value_module.F90:2308` |
| 10.0% | 1.0ms |       1 | `./json_value_module.F90:2280` |
| 10.0% | 1.0ms |       1 | `./json_value_module.F90:2284` |

##### `__json_value_module_MOD_destroy_json_data` (`./json_value_module.F90:1394`)

|     % |  Time | Samples | Location                       |
| ----: | ----: | ------: | ------------------------------ |
| 33.3% | 3.0ms |       3 | `./json_value_module.F90:1403` |
| 33.3% | 3.0ms |       3 | `./json_value_module.F90:1407` |
| 22.2% | 2.0ms |       2 | `./json_value_module.F90:1400` |
| 11.1% | 1.0ms |       1 | `./json_value_module.F90:1404` |

##### `__json_value_module_MOD_json_value_add_member` (`./json_value_module.F90:3401`)

|     % |  Time | Samples | Location                       |
| ----: | ----: | ------: | ------------------------------ |
| 28.6% | 2.0ms |       2 | `./json_value_module.F90:3417` |
| 14.3% | 1.0ms |       1 | `./json_value_module.F90:3415` |
| 14.3% | 1.0ms |       1 | `./json_value_module.F90:3428` |
| 14.3% | 1.0ms |       1 | `./json_value_module.F90:3413` |
| 14.3% | 1.0ms |       1 | `./json_value_module.F90:3427` |

##### `__json_value_module_MOD_parse_for_chars` (`./json_value_module.F90:11173`)

|     % |  Time | Samples | Location                        |
| ----: | ----: | ------: | ------------------------------- |
| 28.6% | 2.0ms |       2 | `./json_value_module.F90:11192` |
| 28.6% | 2.0ms |       2 | `./json_value_module.F90:11191` |
| 28.6% | 2.0ms |       2 | `./json_value_module.F90:11189` |
| 14.3% | 1.0ms |       1 | `./json_value_module.F90:11187` |

##### `__json_value_module_MOD_pop_char` (`./json_value_module.F90:11346`)

|      % |  Time | Samples | Location                        |
| -----: | ----: | ------: | ------------------------------- |
| 100.0% | 5.0ms |       5 | `./json_value_module.F90:11369` |

##### `__json_string_utilities_MOD_string_to_integer` (`./json_string_utilities.F90:116`)

|     % |  Time | Samples | Location                          |
| ----: | ----: | ------: | --------------------------------- |
| 50.0% | 2.0ms |       2 | `./json_string_utilities.F90:128` |
| 25.0% | 1.0ms |       1 | `./json_string_utilities.F90:116` |
| 25.0% | 1.0ms |       1 | `./json_string_utilities.F90:134` |

##### `__json_value_module_MOD_parse_array` (`./json_value_module.F90:11003`)

|     % |  Time | Samples | Location                        |
| ----: | ----: | ------: | ------------------------------- |
| 66.7% | 2.0ms |       2 | `./json_value_module.F90:11003` |
| 33.3% | 1.0ms |       1 | `./json_value_module.F90:11067` |

##### `__json_value_module_MOD_to_string` (`./json_value_module.F90:10762`)

|     % |  Time | Samples | Location                        |
| ----: | ----: | ------: | ------------------------------- |
| 33.3% | 1.0ms |       1 | `./json_value_module.F90:10783` |
| 33.3% | 1.0ms |       1 | `./json_value_module.F90:10762` |
| 33.3% | 1.0ms |       1 | `./json_value_module.F90:10807` |

##### `__json_value_module_MOD_json_info` (`./json_value_module.F90:1416`)

|     % |  Time | Samples | Location                       |
| ----: | ----: | ------: | ------------------------------ |
| 50.0% | 1.0ms |       1 | `./json_value_module.F90:1426` |
| 50.0% | 1.0ms |       1 | `./json_value_module.F90:1428` |

##### `__json_value_module_MOD_json_value_create` (`./json_value_module.F90:2211`)

|      % |  Time | Samples | Location                       |
| -----: | ----: | ------: | ------------------------------ |
| 100.0% | 1.0ms |       1 | `./json_value_module.F90:2220` |

##### `__json_value_module_MOD_json_get_by_path_default` (`./json_value_module.F90:6794`)

|      % |  Time | Samples | Location                       |
| -----: | ----: | ------: | ------------------------------ |
| 100.0% | 1.0ms |       1 | `./json_value_module.F90:7097` |

##### `__json_value_module_MOD_to_object` (`./json_value_module.F90:10844`)

|      % |  Time | Samples | Location                        |
| -----: | ----: | ------: | ------------------------------- |
| 100.0% | 1.0ms |       1 | `./json_value_module.F90:10859` |

##### `__json_value_module_MOD_push_char` (`./json_value_module.F90:11510`)

|      % |  Time | Samples | Location                        |
| -----: | ----: | ------: | ------------------------------- |
| 100.0% | 1.0ms |       1 | `./json_value_module.F90:11526` |

##### `__json_value_module_MOD_json_value_get_child_by_index` (`./json_value_module.F90:5446`)

|      % |  Time | Samples | Location                       |
| -----: | ----: | ------: | ------------------------------ |
| 100.0% | 1.0ms |       1 | `./json_value_module.F90:5498` |

#### Callers

Callers with the largest contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90:11346`)

|     % |    Time | Samples | Caller                                    | Location                        |
| ----: | ------: | ------: | ----------------------------------------- | ------------------------------- |
| 59.4% |   1.15s |   1,151 | `__json_value_module_MOD_parse_string`    | `./json_value_module.F90:11080` |
| 28.1% | 544.0ms |     544 | `__json_value_module_MOD_parse_object`    | `./json_value_module.F90:10889` |
|  7.6% | 148.0ms |     148 | `__json_value_module_MOD_parse_value`     | `./json_value_module.F90:10124` |
|  2.7% |  52.0ms |      52 | `__json_value_module_MOD_parse_number`    | `./json_value_module.F90:11220` |
|  2.0% |  38.0ms |      38 | `__json_value_module_MOD_parse_for_chars` | `./json_value_module.F90:11173` |

##### `_gfortran_string_scan` (`<unknown>`)

|     % |    Time | Samples | Caller                                 | Location                        |
| ----: | ------: | ------: | -------------------------------------- | ------------------------------- |
| 49.0% | 146.0ms |     146 | `__json_value_module_MOD_parse_string` | `./json_value_module.F90:11080` |
| 42.6% | 127.0ms |     127 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90:10889` |
|  7.0% |  21.0ms |      21 | `__json_value_module_MOD_parse_value`  | `./json_value_module.F90:10124` |
|  1.3% |   4.0ms |       4 | `__json_value_module_MOD_parse_array`  | `./json_value_module.F90:11003` |

##### `__json_value_module_MOD_parse_string` (`./json_value_module.F90:11080`)

|     % |   Time | Samples | Caller                                 | Location                        |
| ----: | -----: | ------: | -------------------------------------- | ------------------------------- |
| 60.1% | 95.0ms |      95 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90:10889` |
| 39.9% | 63.0ms |      63 | `__json_value_module_MOD_parse_value`  | `./json_value_module.F90:10124` |

##### `__libc_malloc` (`<unknown>`)

|     % |   Time | Samples | Caller                                      | Location                                          |
| ----: | -----: | ------: | ------------------------------------------- | ------------------------------------------------- |
| 27.8% | 42.0ms |      42 | `__json_value_module_MOD_parse_object`      | `./json_value_module.F90:10889`                   |
| 21.9% | 33.0ms |      33 | `__json_value_module_MOD_parse_string`      | `./json_value_module.F90:11080`                   |
| 11.9% | 18.0ms |      18 | `__json_value_module_MOD_json_value_create` | `./json_value_module.F90:2211`                    |
|  8.6% | 13.0ms |      13 | `0x1c1b3`                                   | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  6.0% |  9.0ms |       9 | `strndup`                                   | `<unknown>`                                       |

##### `_gfortran_string_len_trim` (`<unknown>`)

|     % |   Time | Samples | Caller                                  | Location                                          |
| ----: | -----: | ------: | --------------------------------------- | ------------------------------------------------- |
| 61.8% | 89.0ms |      89 | `__json_value_module_MOD_parse_object`  | `./json_value_module.F90:10889`                   |
| 19.4% | 28.0ms |      28 | `__json_value_module_MOD_parse_value`   | `./json_value_module.F90:10124`                   |
|  6.9% | 10.0ms |      10 | `0x10b283`                              | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  6.3% |  9.0ms |       9 | `__json_value_module_MOD_string_to_int` | `./json_value_module.F90:8081`                    |
|  3.5% |  5.0ms |       5 | `__json_value_module_MOD_parse_array`   | `./json_value_module.F90:11003`                   |

##### `cfree` (`<unknown>`)

|     % |   Time | Samples | Caller                                          | Location                          |
| ----: | -----: | ------: | ----------------------------------------------- | --------------------------------- |
| 37.1% | 46.0ms |      46 | `__json_value_module_MOD_parse_object`          | `./json_value_module.F90:10889`   |
| 13.7% | 17.0ms |      17 | `__json_value_module_MOD_json_value_destroy`    | `./json_value_module.F90:2244`    |
| 11.3% | 14.0ms |      14 | `__json_value_module_MOD_string_to_int`         | `./json_value_module.F90:8081`    |
|  7.3% |  9.0ms |       9 | `__json_string_utilities_MOD_string_to_integer` | `./json_string_utilities.F90:116` |
|  5.6% |  7.0ms |       7 | `__json_value_module_MOD_parse_value`           | `./json_value_module.F90:10124`   |

##### `_init` (`<unknown>`)

|     % |   Time | Samples | Caller                                       | Location                        |
| ----: | -----: | ------: | -------------------------------------------- | ------------------------------- |
| 73.7% | 56.0ms |      56 | `__json_value_module_MOD_parse_object`       | `./json_value_module.F90:10889` |
| 18.4% | 14.0ms |      14 | `__json_value_module_MOD_parse_value`        | `./json_value_module.F90:10124` |
|  2.6% |  2.0ms |       2 | `__json_value_module_MOD_json_value_destroy` | `./json_value_module.F90:2244`  |
|  2.6% |  2.0ms |       2 | `__json_value_module_MOD_parse_array`        | `./json_value_module.F90:11003` |
|  1.3% |  1.0ms |       1 | `__json_value_module_MOD_string_to_int`      | `./json_value_module.F90:8081`  |

##### `0x8faf4` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |   Time | Samples | Caller    | Location                               |
| ----: | -----: | ------: | --------- | -------------------------------------- |
| 85.7% | 30.0ms |      30 | `cfree`   | `<unknown>`                            |
| 14.3% |  5.0ms |       5 | `0x91c5f` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x91228` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |   Time | Samples | Caller          | Location    |
| -----: | -----: | ------: | --------------- | ----------- |
| 100.0% | 30.0ms |      30 | `__libc_malloc` | `<unknown>` |

##### `__libc_realloc` (`<unknown>`)

|     % |   Time | Samples | Caller                                 | Location                        |
| ----: | -----: | ------: | -------------------------------------- | ------------------------------- |
| 53.3% | 16.0ms |      16 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90:10889` |
| 23.3% |  7.0ms |       7 | `__json_value_module_MOD_parse_string` | `./json_value_module.F90:11080` |
| 23.3% |  7.0ms |       7 | `__json_value_module_MOD_parse_value`  | `./json_value_module.F90:10124` |

##### `__read` (`<unknown>`)

|      % |   Time | Samples | Caller     | Location                                          |
| -----: | -----: | ------: | ---------- | ------------------------------------------------- |
| 100.0% | 30.0ms |      30 | `0x10bd0b` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `__json_value_module_MOD_parse_value` (`./json_value_module.F90:10124`)

|     % |   Time | Samples | Caller                                 | Location                        |
| ----: | -----: | ------: | -------------------------------------- | ------------------------------- |
| 96.4% | 27.0ms |      27 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90:10889` |
|  3.6% |  1.0ms |       1 | `__json_value_module_MOD_parse_array`  | `./json_value_module.F90:11003` |

##### `__json_value_module_MOD_parse_object` (`./json_value_module.F90:10889`)

|      % |   Time | Samples | Caller                                 | Location                        |
| -----: | -----: | ------: | -------------------------------------- | ------------------------------- |
| 100.0% | 27.0ms |      27 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90:10889` |

##### `__json_string_utilities_MOD_unescape_string` (`./json_string_utilities.F90:483`)

|      % |   Time | Samples | Caller                                 | Location                        |
| -----: | -----: | ------: | -------------------------------------- | ------------------------------- |
| 100.0% | 26.0ms |      26 | `__json_value_module_MOD_parse_string` | `./json_value_module.F90:11080` |

##### `0x9d100` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |   Time | Samples | Caller                                 | Location                        |
| ----: | -----: | ------: | -------------------------------------- | ------------------------------- |
| 66.7% | 16.0ms |      16 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90:10889` |
| 33.3% |  8.0ms |       8 | `__json_value_module_MOD_parse_value`  | `./json_value_module.F90:10124` |

##### `0x90dc0` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |   Time | Samples | Caller          | Location    |
| -----: | -----: | ------: | --------------- | ----------- |
| 100.0% | 23.0ms |      23 | `__libc_malloc` | `<unknown>` |

##### `0x9d240` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |   Time | Samples | Caller                                 | Location                        |
| -----: | -----: | ------: | -------------------------------------- | ------------------------------- |
| 100.0% | 20.0ms |      20 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90:10889` |

##### `0x10c300` (`/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|      % |   Time | Samples | Caller     | Location                                          |
| -----: | -----: | ------: | ---------- | ------------------------------------------------- |
| 100.0% | 18.0ms |      18 | `0x10a47b` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x9e658` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |   Time | Samples | Caller     | Location                                          |
| -----: | -----: | ------: | ---------- | ------------------------------------------------- |
| 100.0% | 16.0ms |      16 | `0x109623` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x91234` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |   Time | Samples | Caller          | Location    |
| -----: | -----: | ------: | --------------- | ----------- |
| 100.0% | 16.0ms |      16 | `__libc_malloc` | `<unknown>` |

##### `0x9123c` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |   Time | Samples | Caller          | Location    |
| -----: | -----: | ------: | --------------- | ----------- |
| 100.0% | 13.0ms |      13 | `__libc_malloc` | `<unknown>` |

##### `__json_value_module_MOD_parse_number` (`./json_value_module.F90:11220`)

|     % |  Time | Samples | Caller                                 | Location                        |
| ----: | ----: | ------: | -------------------------------------- | ------------------------------- |
| 81.8% | 9.0ms |       9 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90:10889` |
| 18.2% | 2.0ms |       2 | `__json_value_module_MOD_parse_array`  | `./json_value_module.F90:11003` |

##### `_gfortran_concat_string` (`<unknown>`)

|     % |   Time | Samples | Caller                                             | Location                       |
| ----: | -----: | ------: | -------------------------------------------------- | ------------------------------ |
| 90.9% | 10.0ms |      10 | `__json_value_module_MOD_string_to_int`            | `./json_value_module.F90:8081` |
|  9.1% |  1.0ms |       1 | `__json_value_module_MOD_json_get_by_path_default` | `./json_value_module.F90:6794` |

##### `__pthread_mutex_lock` (`<unknown>`)

|     % |  Time | Samples | Caller     | Location                                          |
| ----: | ----: | ------: | ---------- | ------------------------------------------------- |
| 54.5% | 6.0ms |       6 | `0x10a92b` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| 18.2% | 2.0ms |       2 | `0x10a183` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| 18.2% | 2.0ms |       2 | `0x10b10b` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  9.1% | 1.0ms |       1 | `0x109f7b` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x8e96c` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |   Time | Samples | Caller    | Location                               |
| ----: | -----: | ------: | --------- | -------------------------------------- |
| 90.9% | 10.0ms |      10 | `0x8eb7f` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  9.1% |  1.0ms |       1 | `0x8eb3f` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `__json_value_module_MOD_json_value_destroy` (`./json_value_module.F90:2244`)

|      % |   Time | Samples | Caller                                       | Location                       |
| -----: | -----: | ------: | -------------------------------------------- | ------------------------------ |
| 100.0% | 10.0ms |      10 | `__json_value_module_MOD_json_value_destroy` | `./json_value_module.F90:2244` |

##### `__open` (`<unknown>`)

|      % |   Time | Samples | Caller     | Location                                          |
| -----: | -----: | ------: | ---------- | ------------------------------------------------- |
| 100.0% | 10.0ms |      10 | `0x10c997` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `__json_value_module_MOD_destroy_json_data` (`./json_value_module.F90:1394`)

|     % |  Time | Samples | Caller                                       | Location                        |
| ----: | ----: | ------: | -------------------------------------------- | ------------------------------- |
| 77.8% | 7.0ms |       7 | `__json_value_module_MOD_json_value_destroy` | `./json_value_module.F90:2244`  |
| 11.1% | 1.0ms |       1 | `__json_value_module_MOD_to_array`           | `./json_value_module.F90:10867` |
| 11.1% | 1.0ms |       1 | `__json_value_module_MOD_to_logical`         | `./json_value_module.F90:10666` |

##### `__json_value_module_MOD_json_value_add_member` (`./json_value_module.F90:3401`)

|     % |  Time | Samples | Caller                                          | Location                        |
| ----: | ----: | ------: | ----------------------------------------------- | ------------------------------- |
| 85.7% | 6.0ms |       6 | `__json_value_module_MOD_json_value_add_member` | `./json_value_module.F90:3401`  |
| 14.3% | 1.0ms |       1 | `__json_value_module_MOD_parse_object`          | `./json_value_module.F90:10889` |

##### `__json_value_module_MOD_parse_for_chars` (`./json_value_module.F90:11173`)

|      % |  Time | Samples | Caller                                | Location                        |
| -----: | ----: | ------: | ------------------------------------- | ------------------------------- |
| 100.0% | 7.0ms |       7 | `__json_value_module_MOD_parse_value` | `./json_value_module.F90:10124` |

##### `__json_value_module_MOD_pop_char` (`./json_value_module.F90:11346`)

|     % |  Time | Samples | Caller                                 | Location                        |
| ----: | ----: | ------: | -------------------------------------- | ------------------------------- |
| 80.0% | 4.0ms |       4 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90:10889` |
| 20.0% | 1.0ms |       1 | `__json_value_module_MOD_parse_value`  | `./json_value_module.F90:10124` |

##### `__json_string_utilities_MOD_string_to_integer` (`./json_string_utilities.F90:116`)

|      % |  Time | Samples | Caller                                  | Location                       |
| -----: | ----: | ------: | --------------------------------------- | ------------------------------ |
| 100.0% | 4.0ms |       4 | `__json_value_module_MOD_string_to_int` | `./json_value_module.F90:8081` |

##### `__json_value_module_MOD_parse_array` (`./json_value_module.F90:11003`)

|      % |  Time | Samples | Caller                                 | Location                        |
| -----: | ----: | ------: | -------------------------------------- | ------------------------------- |
| 100.0% | 3.0ms |       3 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90:10889` |

##### `__json_value_module_MOD_to_string` (`./json_value_module.F90:10762`)

|      % |  Time | Samples | Caller                                | Location                        |
| -----: | ----: | ------: | ------------------------------------- | ------------------------------- |
| 100.0% | 3.0ms |       3 | `__json_value_module_MOD_parse_value` | `./json_value_module.F90:10124` |

##### `__json_value_module_MOD_json_info` (`./json_value_module.F90:1416`)

|      % |  Time | Samples | Caller                                          | Location                       |
| -----: | ----: | ------: | ----------------------------------------------- | ------------------------------ |
| 100.0% | 2.0ms |       2 | `__json_value_module_MOD_json_value_add_member` | `./json_value_module.F90:3401` |

##### `__json_value_module_MOD_json_value_create` (`./json_value_module.F90:2211`)

|      % |  Time | Samples | Caller                                 | Location                        |
| -----: | ----: | ------: | -------------------------------------- | ------------------------------- |
| 100.0% | 1.0ms |       1 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90:10889` |

##### `__json_value_module_MOD_json_get_by_path_default` (`./json_value_module.F90:6794`)

|      % |  Time | Samples | Caller                                     | Location                       |
| -----: | ----: | ------: | ------------------------------------------ | ------------------------------ |
| 100.0% | 1.0ms |       1 | `__json_value_module_MOD_json_get_by_path` | `./json_value_module.F90:6502` |

##### `__json_value_module_MOD_to_object` (`./json_value_module.F90:10844`)

|      % |  Time | Samples | Caller                                | Location                        |
| -----: | ----: | ------: | ------------------------------------- | ------------------------------- |
| 100.0% | 1.0ms |       1 | `__json_value_module_MOD_parse_value` | `./json_value_module.F90:10124` |

##### `__json_value_module_MOD_push_char` (`./json_value_module.F90:11510`)

|      % |  Time | Samples | Caller                                | Location                        |
| -----: | ----: | ------: | ------------------------------------- | ------------------------------- |
| 100.0% | 1.0ms |       1 | `__json_value_module_MOD_parse_array` | `./json_value_module.F90:11003` |

##### `__json_value_module_MOD_json_value_get_child_by_index` (`./json_value_module.F90:5446`)

|      % |  Time | Samples | Caller                                                  | Location                       |
| -----: | ----: | ------: | ------------------------------------------------------- | ------------------------------ |
| 100.0% | 1.0ms |       1 | `__json_value_module_MOD_json_value_get_child_by_index` | `./json_value_module.F90:5446` |

### Total time

Functions with the most time spent within the function and its callees.

|      % |    Time | Samples | Function                                        | Location                                          |
| -----: | ------: | ------: | ----------------------------------------------- | ------------------------------------------------- |
| 100.0% |   3.86s |   3,855 | `MAIN__`                                        | `/out/profile.f90:5`                              |
| 100.0% |   3.86s |   3,855 | `main`                                          | `/out/profile.f90:6`                              |
| 100.0% |   3.86s |   3,855 | `0x27743`                                       | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
| 100.0% |   3.86s |   3,855 | `__libc_start_main`                             | `<unknown>`                                       |
| 100.0% |   3.86s |   3,855 | `_start`                                        | `<unknown>`                                       |
|  97.1% |   3.74s |   3,742 | `__json_value_module_MOD_json_parse_file`       | `./json_value_module.F90:9721`                    |
|  97.1% |   3.74s |   3,742 | `__json_file_module_MOD_json_file_load`         | `./json_file_module.F90:854`                      |
|  94.9% |   3.66s |   3,657 | `__json_value_module_MOD_parse_object`          | `./json_value_module.F90:10889`                   |
|  94.8% |   3.65s |   3,654 | `__json_value_module_MOD_parse_array`           | `./json_value_module.F90:11003`                   |
|  52.2% |   2.01s |   2,013 | `__json_value_module_MOD_pop_char.part.0`       | `./json_value_module.F90:11346`                   |
|  43.8% |   1.69s |   1,687 | `__json_value_module_MOD_parse_string`          | `./json_value_module.F90:11080`                   |
|  29.1% |   1.12s |   1,121 | `__json_value_module_MOD_parse_value`           | `./json_value_module.F90:10124`                   |
|  12.2% | 470.0ms |     470 | `__json_value_module_MOD_parse_number`          | `./json_value_module.F90:11220`                   |
|  10.0% | 385.0ms |     385 | `__json_value_module_MOD_string_to_int`         | `./json_value_module.F90:8081`                    |
|   9.9% | 381.0ms |     381 | `__libc_malloc`                                 | `<unknown>`                                       |
|   8.9% | 342.0ms |     342 | `__json_string_utilities_MOD_string_to_integer` | `./json_string_utilities.F90:116`                 |
|   7.7% | 298.0ms |     298 | `_gfortran_string_scan`                         | `<unknown>`                                       |
|   5.6% | 214.0ms |     214 | `cfree`                                         | `<unknown>`                                       |
|   3.7% | 144.0ms |     144 | `_gfortran_string_len_trim`                     | `<unknown>`                                       |
|   3.0% | 114.0ms |     114 | `0x109623`                                      | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Ours

|      % |    Time | Samples | Function                                          | Location                             |
| -----: | ------: | ------: | ------------------------------------------------- | ------------------------------------ |
| 100.0% |   3.86s |   3,855 | `MAIN__`                                          | `/out/profile.f90:5`                 |
| 100.0% |   3.86s |   3,855 | `main`                                            | `/out/profile.f90:6`                 |
|  97.1% |   3.74s |   3,742 | `__json_value_module_MOD_json_parse_file`         | `./json_value_module.F90:9721`       |
|  97.1% |   3.74s |   3,742 | `__json_file_module_MOD_json_file_load`           | `./json_file_module.F90:854`         |
|  94.9% |   3.66s |   3,657 | `__json_value_module_MOD_parse_object`            | `./json_value_module.F90:10889`      |
|  94.8% |   3.65s |   3,654 | `__json_value_module_MOD_parse_array`             | `./json_value_module.F90:11003`      |
|  52.2% |   2.01s |   2,013 | `__json_value_module_MOD_pop_char.part.0`         | `./json_value_module.F90:11346`      |
|  43.8% |   1.69s |   1,687 | `__json_value_module_MOD_parse_string`            | `./json_value_module.F90:11080`      |
|  29.1% |   1.12s |   1,121 | `__json_value_module_MOD_parse_value`             | `./json_value_module.F90:10124`      |
|  12.2% | 470.0ms |     470 | `__json_value_module_MOD_parse_number`            | `./json_value_module.F90:11220`      |
|  10.0% | 385.0ms |     385 | `__json_value_module_MOD_string_to_int`           | `./json_value_module.F90:8081`       |
|   8.9% | 342.0ms |     342 | `__json_string_utilities_MOD_string_to_integer`   | `./json_string_utilities.F90:116`    |
|   2.2% |  85.0ms |      85 | `__json_value_module_MOD_json_value_create`       | `./json_value_module.F90:2211`       |
|   2.0% |  78.0ms |      78 | `__json_value_module_MOD_json_value_destroy`      | `./json_value_module.F90:2244`       |
|   2.0% |  78.0ms |      78 | `__json_file_module_MOD_json_file_destroy`        | `./json_file_module.F90:781`         |
|   1.3% |  51.0ms |      51 | `__json_value_module_MOD_parse_for_chars`         | `./json_value_module.F90:11173`      |
|   0.7% |  26.0ms |      26 | `__json_string_utilities_MOD_unescape_string`     | `./json_string_utilities.F90:483`    |
|   0.6% |  25.0ms |      25 | `__json_file_module_MOD_json_file_get_string`     | `./json_file_module.F90:1863`        |
|   0.6% |  25.0ms |      25 | `__json_value_module_MOD_destroy_json_data`       | `./json_value_module.F90:1394`       |
|   0.6% |  24.0ms |      24 | `__json_value_module_MOD_json_get_string_by_path` | `./json_get_scalar_by_path.inc:9189` |

##### Native

|      % |    Time | Samples | Function                    | Location                                          |
| -----: | ------: | ------: | --------------------------- | ------------------------------------------------- |
| 100.0% |   3.86s |   3,855 | `0x27743`                   | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
| 100.0% |   3.86s |   3,855 | `__libc_start_main`         | `<unknown>`                                       |
| 100.0% |   3.86s |   3,855 | `_start`                    | `<unknown>`                                       |
|   9.9% | 381.0ms |     381 | `__libc_malloc`             | `<unknown>`                                       |
|   7.7% | 298.0ms |     298 | `_gfortran_string_scan`     | `<unknown>`                                       |
|   5.6% | 214.0ms |     214 | `cfree`                     | `<unknown>`                                       |
|   3.7% | 144.0ms |     144 | `_gfortran_string_len_trim` | `<unknown>`                                       |
|   3.0% | 114.0ms |     114 | `0x109623`                  | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|   2.6% | 100.0ms |     100 | `0x1c1b3`                   | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|   2.0% |  77.0ms |      77 | `__libc_realloc`            | `<unknown>`                                       |
|   2.0% |  76.0ms |      76 | `_init`                     | `<unknown>`                                       |
|   1.8% |  70.0ms |      70 | `0x1093fb`                  | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|   1.8% |  68.0ms |      68 | `0x1029eb`                  | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|   1.8% |  68.0ms |      68 | `_gfortran_st_open`         | `<unknown>`                                       |
|   1.6% |  63.0ms |      63 | `0x9102b`                   | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
|   1.5% |  58.0ms |      58 | `0x10be83`                  | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|   1.4% |  53.0ms |      53 | `0x10a47b`                  | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|   0.9% |  36.0ms |      36 | `0xfa6bf`                   | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|   0.9% |  35.0ms |      35 | `0x8faf4`                   | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
|   0.8% |  32.0ms |      32 | `0x91c5f`                   | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |

#### Callers

Callers with the largest contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `MAIN__` (`/out/profile.f90:5`)

|      % |  Time | Samples | Caller | Location             |
| -----: | ----: | ------: | ------ | -------------------- |
| 100.0% | 3.86s |   3,855 | `main` | `/out/profile.f90:6` |

##### `main` (`/out/profile.f90:6`)

|      % |  Time | Samples | Caller    | Location                               |
| -----: | ----: | ------: | --------- | -------------------------------------- |
| 100.0% | 3.86s |   3,855 | `0x27743` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Caller              | Location    |
| -----: | ----: | ------: | ------------------- | ----------- |
| 100.0% | 3.86s |   3,855 | `__libc_start_main` | `<unknown>` |

##### `__libc_start_main` (`<unknown>`)

|      % |  Time | Samples | Caller   | Location    |
| -----: | ----: | ------: | -------- | ----------- |
| 100.0% | 3.86s |   3,855 | `_start` | `<unknown>` |

##### `__json_value_module_MOD_json_parse_file` (`./json_value_module.F90:9721`)

|      % |  Time | Samples | Caller                                  | Location                     |
| -----: | ----: | ------: | --------------------------------------- | ---------------------------- |
| 100.0% | 3.74s |   3,742 | `__json_file_module_MOD_json_file_load` | `./json_file_module.F90:854` |

##### `__json_file_module_MOD_json_file_load` (`./json_file_module.F90:854`)

|      % |  Time | Samples | Caller   | Location             |
| -----: | ----: | ------: | -------- | -------------------- |
| 100.0% | 3.74s |   3,742 | `MAIN__` | `/out/profile.f90:5` |

##### `__json_value_module_MOD_parse_object` (`./json_value_module.F90:10889`)

|      % |  Time | Samples | Caller                                    | Location                        |
| -----: | ----: | ------: | ----------------------------------------- | ------------------------------- |
| 100.0% | 3.66s |   3,657 | `__json_value_module_MOD_json_parse_file` | `./json_value_module.F90:9721`  |
|  99.9% | 3.65s |   3,652 | `__json_value_module_MOD_parse_array`     | `./json_value_module.F90:11003` |
|  99.5% | 3.64s |   3,640 | `__json_value_module_MOD_parse_object`    | `./json_value_module.F90:10889` |

##### `__json_value_module_MOD_parse_array` (`./json_value_module.F90:11003`)

|      % |  Time | Samples | Caller                                 | Location                        |
| -----: | ----: | ------: | -------------------------------------- | ------------------------------- |
| 100.0% | 3.65s |   3,654 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90:10889` |

##### `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90:11346`)

|     % |    Time | Samples | Caller                                    | Location                        |
| ----: | ------: | ------: | ----------------------------------------- | ------------------------------- |
| 59.1% |   1.19s |   1,190 | `__json_value_module_MOD_parse_string`    | `./json_value_module.F90:11080` |
| 27.8% | 559.0ms |     559 | `__json_value_module_MOD_parse_object`    | `./json_value_module.F90:10889` |
|  8.1% | 163.0ms |     163 | `__json_value_module_MOD_parse_value`     | `./json_value_module.F90:10124` |
|  2.6% |  52.0ms |      52 | `__json_value_module_MOD_parse_number`    | `./json_value_module.F90:11220` |
|  2.2% |  44.0ms |      44 | `__json_value_module_MOD_parse_for_chars` | `./json_value_module.F90:11173` |

##### `__json_value_module_MOD_parse_string` (`./json_value_module.F90:11080`)

|     % |    Time | Samples | Caller                                 | Location                        |
| ----: | ------: | ------: | -------------------------------------- | ------------------------------- |
| 54.7% | 923.0ms |     923 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90:10889` |
| 45.3% | 764.0ms |     764 | `__json_value_module_MOD_parse_value`  | `./json_value_module.F90:10124` |

##### `__json_value_module_MOD_parse_value` (`./json_value_module.F90:10124`)

|     % |   Time | Samples | Caller                                    | Location                        |
| ----: | -----: | ------: | ----------------------------------------- | ------------------------------- |
| 95.8% |  1.07s |   1,074 | `__json_value_module_MOD_parse_object`    | `./json_value_module.F90:10889` |
|  3.0% | 34.0ms |      34 | `__json_value_module_MOD_parse_array`     | `./json_value_module.F90:11003` |
|  1.2% | 13.0ms |      13 | `__json_value_module_MOD_json_parse_file` | `./json_value_module.F90:9721`  |

##### `__json_value_module_MOD_parse_number` (`./json_value_module.F90:11220`)

|     % |    Time | Samples | Caller                                 | Location                        |
| ----: | ------: | ------: | -------------------------------------- | ------------------------------- |
| 86.2% | 405.0ms |     405 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90:10889` |
| 13.8% |  65.0ms |      65 | `__json_value_module_MOD_parse_array`  | `./json_value_module.F90:11003` |

##### `__json_value_module_MOD_string_to_int` (`./json_value_module.F90:8081`)

|      % |    Time | Samples | Caller                                 | Location                        |
| -----: | ------: | ------: | -------------------------------------- | ------------------------------- |
| 100.0% | 385.0ms |     385 | `__json_value_module_MOD_parse_number` | `./json_value_module.F90:11220` |

##### `__libc_malloc` (`<unknown>`)

|     % |    Time | Samples | Caller                                      | Location                                          |
| ----: | ------: | ------: | ------------------------------------------- | ------------------------------------------------- |
| 26.2% | 100.0ms |     100 | `0x1c1b3`                                   | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| 24.7% |  94.0ms |      94 | `__json_value_module_MOD_parse_string`      | `./json_value_module.F90:11080`                   |
| 22.0% |  84.0ms |      84 | `__json_value_module_MOD_json_value_create` | `./json_value_module.F90:2211`                    |
| 11.0% |  42.0ms |      42 | `__json_value_module_MOD_parse_object`      | `./json_value_module.F90:10889`                   |
|  4.7% |  18.0ms |      18 | `__json_value_module_MOD_parse_number`      | `./json_value_module.F90:11220`                   |

##### `__json_string_utilities_MOD_string_to_integer` (`./json_string_utilities.F90:116`)

|     % |    Time | Samples | Caller                                             | Location                       |
| ----: | ------: | ------: | -------------------------------------------------- | ------------------------------ |
| 95.0% | 325.0ms |     325 | `__json_value_module_MOD_string_to_int`            | `./json_value_module.F90:8081` |
|  5.0% |  17.0ms |      17 | `__json_value_module_MOD_json_get_by_path_default` | `./json_value_module.F90:6794` |

##### `_gfortran_string_scan` (`<unknown>`)

|     % |    Time | Samples | Caller                                 | Location                        |
| ----: | ------: | ------: | -------------------------------------- | ------------------------------- |
| 49.0% | 146.0ms |     146 | `__json_value_module_MOD_parse_string` | `./json_value_module.F90:11080` |
| 42.6% | 127.0ms |     127 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90:10889` |
|  7.0% |  21.0ms |      21 | `__json_value_module_MOD_parse_value`  | `./json_value_module.F90:10124` |
|  1.3% |   4.0ms |       4 | `__json_value_module_MOD_parse_array`  | `./json_value_module.F90:11003` |

##### `cfree` (`<unknown>`)

|     % |   Time | Samples | Caller                                       | Location                        |
| ----: | -----: | ------: | -------------------------------------------- | ------------------------------- |
| 26.2% | 56.0ms |      56 | `__json_value_module_MOD_parse_object`       | `./json_value_module.F90:10889` |
| 19.6% | 42.0ms |      42 | `__json_value_module_MOD_json_value_destroy` | `./json_value_module.F90:2244`  |
|  8.4% | 18.0ms |      18 | `__json_value_module_MOD_parse_string`       | `./json_value_module.F90:11080` |
|  7.5% | 16.0ms |      16 | `__json_value_module_MOD_string_to_int`      | `./json_value_module.F90:8081`  |
|  7.5% | 16.0ms |      16 | `__json_value_module_MOD_destroy_json_data`  | `./json_value_module.F90:1394`  |

##### `_gfortran_string_len_trim` (`<unknown>`)

|     % |   Time | Samples | Caller                                  | Location                                          |
| ----: | -----: | ------: | --------------------------------------- | ------------------------------------------------- |
| 61.8% | 89.0ms |      89 | `__json_value_module_MOD_parse_object`  | `./json_value_module.F90:10889`                   |
| 19.4% | 28.0ms |      28 | `__json_value_module_MOD_parse_value`   | `./json_value_module.F90:10124`                   |
|  6.9% | 10.0ms |      10 | `0x10b283`                              | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  6.3% |  9.0ms |       9 | `__json_value_module_MOD_string_to_int` | `./json_value_module.F90:8081`                    |
|  3.5% |  5.0ms |       5 | `__json_value_module_MOD_parse_array`   | `./json_value_module.F90:11003`                   |

##### `0x109623` (`/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|     % |    Time | Samples | Caller                                          | Location                          |
| ----: | ------: | ------: | ----------------------------------------------- | --------------------------------- |
| 96.5% | 110.0ms |     110 | `__json_string_utilities_MOD_string_to_integer` | `./json_string_utilities.F90:116` |
|  3.5% |   4.0ms |       4 | `MAIN__`                                        | `/out/profile.f90:5`              |

##### `0x1c1b3` (`/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|     % |   Time | Samples | Caller     | Location                                          |
| ----: | -----: | ------: | ---------- | ------------------------------------------------- |
| 58.0% | 58.0ms |      58 | `0x10be83` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| 33.0% | 33.0ms |      33 | `0xfa6bf`  | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  7.0% |  7.0ms |       7 | `0x112ebb` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  2.0% |  2.0ms |       2 | `0x112ecb` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `__json_value_module_MOD_json_value_create` (`./json_value_module.F90:2211`)

|     % |   Time | Samples | Caller                                 | Location                        |
| ----: | -----: | ------: | -------------------------------------- | ------------------------------- |
| 84.7% | 72.0ms |      72 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90:10889` |
| 15.3% | 13.0ms |      13 | `__json_value_module_MOD_parse_array`  | `./json_value_module.F90:11003` |

##### `__json_value_module_MOD_json_value_destroy` (`./json_value_module.F90:2244`)

|      % |   Time | Samples | Caller                                       | Location                       |
| -----: | -----: | ------: | -------------------------------------------- | ------------------------------ |
| 100.0% | 78.0ms |      78 | `__json_value_module_MOD_json_value_destroy` | `./json_value_module.F90:2244` |
| 100.0% | 78.0ms |      78 | `__json_file_module_MOD_json_file_destroy`   | `./json_file_module.F90:781`   |

##### `__json_file_module_MOD_json_file_destroy` (`./json_file_module.F90:781`)

|      % |   Time | Samples | Caller   | Location             |
| -----: | -----: | ------: | -------- | -------------------- |
| 100.0% | 78.0ms |      78 | `MAIN__` | `/out/profile.f90:5` |

##### `__libc_realloc` (`<unknown>`)

|     % |   Time | Samples | Caller                                 | Location                        |
| ----: | -----: | ------: | -------------------------------------- | ------------------------------- |
| 62.3% | 48.0ms |      48 | `__json_value_module_MOD_parse_string` | `./json_value_module.F90:11080` |
| 20.8% | 16.0ms |      16 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90:10889` |
| 16.9% | 13.0ms |      13 | `__json_value_module_MOD_parse_value`  | `./json_value_module.F90:10124` |

##### `_init` (`<unknown>`)

|     % |   Time | Samples | Caller                                       | Location                        |
| ----: | -----: | ------: | -------------------------------------------- | ------------------------------- |
| 73.7% | 56.0ms |      56 | `__json_value_module_MOD_parse_object`       | `./json_value_module.F90:10889` |
| 18.4% | 14.0ms |      14 | `__json_value_module_MOD_parse_value`        | `./json_value_module.F90:10124` |
|  2.6% |  2.0ms |       2 | `__json_value_module_MOD_json_value_destroy` | `./json_value_module.F90:2244`  |
|  2.6% |  2.0ms |       2 | `__json_value_module_MOD_parse_array`        | `./json_value_module.F90:11003` |
|  1.3% |  1.0ms |       1 | `__json_value_module_MOD_string_to_int`      | `./json_value_module.F90:8081`  |

##### `0x1093fb` (`/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|     % |   Time | Samples | Caller                                          | Location                          |
| ----: | -----: | ------: | ----------------------------------------------- | --------------------------------- |
| 82.9% | 58.0ms |      58 | `__json_string_utilities_MOD_string_to_integer` | `./json_string_utilities.F90:116` |
| 14.3% | 10.0ms |      10 | `__json_value_module_MOD_pop_char.part.0`       | `./json_value_module.F90:11346`   |
|  2.9% |  2.0ms |       2 | `MAIN__`                                        | `/out/profile.f90:5`              |

##### `0x1029eb` (`/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|      % |   Time | Samples | Caller              | Location    |
| -----: | -----: | ------: | ------------------- | ----------- |
| 100.0% | 68.0ms |      68 | `_gfortran_st_open` | `<unknown>` |

##### `_gfortran_st_open` (`<unknown>`)

|      % |   Time | Samples | Caller                                    | Location                       |
| -----: | -----: | ------: | ----------------------------------------- | ------------------------------ |
| 100.0% | 68.0ms |      68 | `__json_value_module_MOD_json_parse_file` | `./json_value_module.F90:9721` |

##### `0x9102b` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |   Time | Samples | Caller          | Location    |
| -----: | -----: | ------: | --------------- | ----------- |
| 100.0% | 63.0ms |      63 | `__libc_malloc` | `<unknown>` |

##### `0x10be83` (`/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|      % |   Time | Samples | Caller     | Location                                          |
| -----: | -----: | ------: | ---------- | ------------------------------------------------- |
| 100.0% | 58.0ms |      58 | `0x1029eb` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x10a47b` (`/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|      % |   Time | Samples | Caller                                    | Location                        |
| -----: | -----: | ------: | ----------------------------------------- | ------------------------------- |
| 100.0% | 53.0ms |      53 | `__json_value_module_MOD_pop_char.part.0` | `./json_value_module.F90:11346` |

##### `__json_value_module_MOD_parse_for_chars` (`./json_value_module.F90:11173`)

|      % |   Time | Samples | Caller                                | Location                        |
| -----: | -----: | ------: | ------------------------------------- | ------------------------------- |
| 100.0% | 51.0ms |      51 | `__json_value_module_MOD_parse_value` | `./json_value_module.F90:10124` |

##### `0xfa6bf` (`/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|      % |   Time | Samples | Caller     | Location                                          |
| -----: | -----: | ------: | ---------- | ------------------------------------------------- |
| 100.0% | 36.0ms |      36 | `0x109623` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x8faf4` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |   Time | Samples | Caller    | Location                               |
| ----: | -----: | ------: | --------- | -------------------------------------- |
| 85.7% | 30.0ms |      30 | `cfree`   | `<unknown>`                            |
| 14.3% |  5.0ms |       5 | `0x91c5f` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x91c5f` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |   Time | Samples | Caller           | Location    |
| -----: | -----: | ------: | ---------------- | ----------- |
| 100.0% | 32.0ms |      32 | `__libc_realloc` | `<unknown>` |

##### `__json_string_utilities_MOD_unescape_string` (`./json_string_utilities.F90:483`)

|      % |   Time | Samples | Caller                                 | Location                        |
| -----: | -----: | ------: | -------------------------------------- | ------------------------------- |
| 100.0% | 26.0ms |      26 | `__json_value_module_MOD_parse_string` | `./json_value_module.F90:11080` |

##### `__json_file_module_MOD_json_file_get_string` (`./json_file_module.F90:1863`)

|      % |   Time | Samples | Caller   | Location             |
| -----: | -----: | ------: | -------- | -------------------- |
| 100.0% | 25.0ms |      25 | `MAIN__` | `/out/profile.f90:5` |

##### `__json_value_module_MOD_destroy_json_data` (`./json_value_module.F90:1394`)

|     % |   Time | Samples | Caller                                       | Location                        |
| ----: | -----: | ------: | -------------------------------------------- | ------------------------------- |
| 92.0% | 23.0ms |      23 | `__json_value_module_MOD_json_value_destroy` | `./json_value_module.F90:2244`  |
|  4.0% |  1.0ms |       1 | `__json_value_module_MOD_to_array`           | `./json_value_module.F90:10867` |
|  4.0% |  1.0ms |       1 | `__json_value_module_MOD_to_logical`         | `./json_value_module.F90:10666` |

##### `__json_value_module_MOD_json_get_string_by_path` (`./json_get_scalar_by_path.inc:9189`)

|      % |   Time | Samples | Caller                                        | Location                      |
| -----: | -----: | ------: | --------------------------------------------- | ----------------------------- |
| 100.0% | 24.0ms |      24 | `__json_file_module_MOD_json_file_get_string` | `./json_file_module.F90:1863` |

#### Callees

Callees with the largest contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `MAIN__` (`/out/profile.f90:5`)

|     % |   Time | Samples | Callee                                        | Location                                          |
| ----: | -----: | ------: | --------------------------------------------- | ------------------------------------------------- |
| 97.1% |  3.74s |   3,742 | `__json_file_module_MOD_json_file_load`       | `./json_file_module.F90:854`                      |
|  2.0% | 78.0ms |      78 | `__json_file_module_MOD_json_file_destroy`    | `./json_file_module.F90:781`                      |
|  0.6% | 25.0ms |      25 | `__json_file_module_MOD_json_file_get_string` | `./json_file_module.F90:1863`                     |
|  0.1% |  4.0ms |       4 | `0x109623`                                    | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  0.1% |  2.0ms |       2 | `0x1093fb`                                    | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `main` (`/out/profile.f90:6`)

|      % |  Time | Samples | Callee   | Location             |
| -----: | ----: | ------: | -------- | -------------------- |
| 100.0% | 3.86s |   3,855 | `MAIN__` | `/out/profile.f90:5` |

##### `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Callee | Location             |
| -----: | ----: | ------: | ------ | -------------------- |
| 100.0% | 3.86s |   3,855 | `main` | `/out/profile.f90:6` |

##### `__libc_start_main` (`<unknown>`)

|      % |  Time | Samples | Callee    | Location                               |
| -----: | ----: | ------: | --------- | -------------------------------------- |
| 100.0% | 3.86s |   3,855 | `0x27743` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `_start` (`<unknown>`)

|      % |  Time | Samples | Callee              | Location    |
| -----: | ----: | ------: | ------------------- | ----------- |
| 100.0% | 3.86s |   3,855 | `__libc_start_main` | `<unknown>` |

##### `__json_value_module_MOD_json_parse_file` (`./json_value_module.F90:9721`)

|     % |   Time | Samples | Callee                                 | Location                                          |
| ----: | -----: | ------: | -------------------------------------- | ------------------------------------------------- |
| 97.7% |  3.66s |   3,657 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90:10889`                   |
|  1.8% | 68.0ms |      68 | `_gfortran_st_open`                    | `<unknown>`                                       |
|  0.3% | 13.0ms |      13 | `__json_value_module_MOD_parse_value`  | `./json_value_module.F90:10124`                   |
|  0.1% |  3.0ms |       3 | `0x10b3c3`                             | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| <0.1% |  1.0ms |       1 | `_gfortran_st_inquire`                 | `<unknown>`                                       |

##### `__json_file_module_MOD_json_file_load` (`./json_file_module.F90:854`)

|      % |  Time | Samples | Callee                                    | Location                       |
| -----: | ----: | ------: | ----------------------------------------- | ------------------------------ |
| 100.0% | 3.74s |   3,742 | `__json_value_module_MOD_json_parse_file` | `./json_value_module.F90:9721` |

##### `__json_value_module_MOD_parse_object` (`./json_value_module.F90:10889`)

|     % |    Time | Samples | Callee                                    | Location                        |
| ----: | ------: | ------: | ----------------------------------------- | ------------------------------- |
| 99.9% |   3.65s |   3,654 | `__json_value_module_MOD_parse_array`     | `./json_value_module.F90:11003` |
| 99.5% |   3.64s |   3,640 | `__json_value_module_MOD_parse_object`    | `./json_value_module.F90:10889` |
| 29.4% |   1.07s |   1,074 | `__json_value_module_MOD_parse_value`     | `./json_value_module.F90:10124` |
| 25.2% | 923.0ms |     923 | `__json_value_module_MOD_parse_string`    | `./json_value_module.F90:11080` |
| 15.3% | 559.0ms |     559 | `__json_value_module_MOD_pop_char.part.0` | `./json_value_module.F90:11346` |

##### `__json_value_module_MOD_parse_array` (`./json_value_module.F90:11003`)

|     % |   Time | Samples | Callee                                      | Location                        |
| ----: | -----: | ------: | ------------------------------------------- | ------------------------------- |
| 99.9% |  3.65s |   3,652 | `__json_value_module_MOD_parse_object`      | `./json_value_module.F90:10889` |
|  1.8% | 65.0ms |      65 | `__json_value_module_MOD_parse_number`      | `./json_value_module.F90:11220` |
|  0.9% | 34.0ms |      34 | `__json_value_module_MOD_parse_value`       | `./json_value_module.F90:10124` |
|  0.4% | 13.0ms |      13 | `__json_value_module_MOD_json_value_create` | `./json_value_module.F90:2211`  |
|  0.1% |  5.0ms |       5 | `_gfortran_string_len_trim`                 | `<unknown>`                     |

##### `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90:11346`)

|    % |   Time | Samples | Callee     | Location                                          |
| ---: | -----: | ------: | ---------- | ------------------------------------------------- |
| 2.6% | 53.0ms |      53 | `0x10a47b` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| 0.5% | 10.0ms |      10 | `0x1093fb` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| 0.1% |  2.0ms |       2 | `0x1098bf` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| 0.1% |  2.0ms |       2 | `0x109f17` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| 0.1% |  2.0ms |       2 | `0x10a4bc` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `__json_value_module_MOD_parse_string` (`./json_value_module.F90:11080`)

|     % |    Time | Samples | Callee                                        | Location                          |
| ----: | ------: | ------: | --------------------------------------------- | --------------------------------- |
| 70.5% |   1.19s |   1,190 | `__json_value_module_MOD_pop_char.part.0`     | `./json_value_module.F90:11346`   |
|  8.7% | 146.0ms |     146 | `_gfortran_string_scan`                       | `<unknown>`                       |
|  5.6% |  94.0ms |      94 | `__libc_malloc`                               | `<unknown>`                       |
|  2.8% |  48.0ms |      48 | `__libc_realloc`                              | `<unknown>`                       |
|  1.5% |  26.0ms |      26 | `__json_string_utilities_MOD_unescape_string` | `./json_string_utilities.F90:483` |

##### `__json_value_module_MOD_parse_value` (`./json_value_module.F90:10124`)

|     % |    Time | Samples | Callee                                    | Location                        |
| ----: | ------: | ------: | ----------------------------------------- | ------------------------------- |
| 68.2% | 764.0ms |     764 | `__json_value_module_MOD_parse_string`    | `./json_value_module.F90:11080` |
| 14.5% | 163.0ms |     163 | `__json_value_module_MOD_pop_char.part.0` | `./json_value_module.F90:11346` |
|  4.5% |  51.0ms |      51 | `__json_value_module_MOD_parse_for_chars` | `./json_value_module.F90:11173` |
|  2.5% |  28.0ms |      28 | `_gfortran_string_len_trim`               | `<unknown>`                     |
|  1.9% |  21.0ms |      21 | `_gfortran_string_scan`                   | `<unknown>`                     |

##### `__json_value_module_MOD_parse_number` (`./json_value_module.F90:11220`)

|     % |    Time | Samples | Callee                                    | Location                        |
| ----: | ------: | ------: | ----------------------------------------- | ------------------------------- |
| 81.9% | 385.0ms |     385 | `__json_value_module_MOD_string_to_int`   | `./json_value_module.F90:8081`  |
| 11.1% |  52.0ms |      52 | `__json_value_module_MOD_pop_char.part.0` | `./json_value_module.F90:11346` |
|  3.8% |  18.0ms |      18 | `__libc_malloc`                           | `<unknown>`                     |
|  0.6% |   3.0ms |       3 | `_gfortran_string_len_trim`               | `<unknown>`                     |
|  0.2% |   1.0ms |       1 | `_gfortran_st_read_done`                  | `<unknown>`                     |

##### `__json_value_module_MOD_string_to_int` (`./json_value_module.F90:8081`)

|     % |    Time | Samples | Callee                                          | Location                          |
| ----: | ------: | ------: | ----------------------------------------------- | --------------------------------- |
| 84.4% | 325.0ms |     325 | `__json_string_utilities_MOD_string_to_integer` | `./json_string_utilities.F90:116` |
|  4.2% |  16.0ms |      16 | `cfree`                                         | `<unknown>`                       |
|  2.6% |  10.0ms |      10 | `_gfortran_concat_string`                       | `<unknown>`                       |
|  2.3% |   9.0ms |       9 | `_gfortran_string_len_trim`                     | `<unknown>`                       |
|  1.3% |   5.0ms |       5 | `__libc_malloc`                                 | `<unknown>`                       |

##### `__libc_malloc` (`<unknown>`)

|     % |   Time | Samples | Callee    | Location                               |
| ----: | -----: | ------: | --------- | -------------------------------------- |
| 16.5% | 63.0ms |      63 | `0x9102b` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  7.9% | 30.0ms |      30 | `0x91228` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  6.0% | 23.0ms |      23 | `0x90dc0` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  4.2% | 16.0ms |      16 | `0x91234` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  3.4% | 13.0ms |      13 | `0x9123c` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `__json_string_utilities_MOD_string_to_integer` (`./json_string_utilities.F90:116`)

|     % |    Time | Samples | Callee     | Location                                          |
| ----: | ------: | ------: | ---------- | ------------------------------------------------- |
| 32.2% | 110.0ms |     110 | `0x109623` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| 17.0% |  58.0ms |      58 | `0x1093fb` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  6.7% |  23.0ms |      23 | `0x108f53` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  6.1% |  21.0ms |      21 | `0x1098bf` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  5.3% |  18.0ms |      18 | `0x108efb` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `cfree` (`<unknown>`)

|     % |   Time | Samples | Callee    | Location                               |
| ----: | -----: | ------: | --------- | -------------------------------------- |
| 14.0% | 30.0ms |      30 | `0x8faf4` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  2.8% |  6.0ms |       6 | `0x8fbf0` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  2.8% |  6.0ms |       6 | `0x8fb44` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  2.3% |  5.0ms |       5 | `0x8fbc8` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  2.3% |  5.0ms |       5 | `0x8faa0` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x109623` (`/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|     % |   Time | Samples | Callee    | Location                                          |
| ----: | -----: | ------: | --------- | ------------------------------------------------- |
| 31.6% | 36.0ms |      36 | `0xfa6bf` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| 26.3% | 30.0ms |      30 | `0xfa7fb` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| 14.9% | 17.0ms |      17 | `0xfa6b3` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| 14.0% | 16.0ms |      16 | `0x9e658` | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  5.3% |  6.0ms |       6 | `0xfa727` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x1c1b3` (`/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|      % |    Time | Samples | Callee          | Location    |
| -----: | ------: | ------: | --------------- | ----------- |
| 100.0% | 100.0ms |     100 | `__libc_malloc` | `<unknown>` |

##### `__json_value_module_MOD_json_value_create` (`./json_value_module.F90:2211`)

|     % |   Time | Samples | Callee          | Location    |
| ----: | -----: | ------: | --------------- | ----------- |
| 98.8% | 84.0ms |      84 | `__libc_malloc` | `<unknown>` |

##### `__json_value_module_MOD_json_value_destroy` (`./json_value_module.F90:2244`)

|      % |   Time | Samples | Callee                                       | Location                               |
| -----: | -----: | ------: | -------------------------------------------- | -------------------------------------- |
| 100.0% | 78.0ms |      78 | `__json_value_module_MOD_json_value_destroy` | `./json_value_module.F90:2244`         |
|  53.8% | 42.0ms |      42 | `cfree`                                      | `<unknown>`                            |
|  29.5% | 23.0ms |      23 | `__json_value_module_MOD_destroy_json_data`  | `./json_value_module.F90:1394`         |
|   2.6% |  2.0ms |       2 | `_init`                                      | `<unknown>`                            |
|   1.3% |  1.0ms |       1 | `0x8fc14`                                    | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `__json_file_module_MOD_json_file_destroy` (`./json_file_module.F90:781`)

|      % |   Time | Samples | Callee                                       | Location                       |
| -----: | -----: | ------: | -------------------------------------------- | ------------------------------ |
| 100.0% | 78.0ms |      78 | `__json_value_module_MOD_json_value_destroy` | `./json_value_module.F90:2244` |

##### `__libc_realloc` (`<unknown>`)

|     % |   Time | Samples | Callee    | Location                               |
| ----: | -----: | ------: | --------- | -------------------------------------- |
| 41.6% | 32.0ms |      32 | `0x91c5f` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  3.9% |  3.0ms |       3 | `0x91b10` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  3.9% |  3.0ms |       3 | `0x91b93` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  2.6% |  2.0ms |       2 | `0x91b68` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  2.6% |  2.0ms |       2 | `0x8fc14` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x1093fb` (`/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|     % |   Time | Samples | Callee     | Location                                          |
| ----: | -----: | ------: | ---------- | ------------------------------------------------- |
| 42.9% | 30.0ms |      30 | `0x10b283` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| 20.0% | 14.0ms |      14 | `0x10b26f` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| 15.7% | 11.0ms |      11 | `0x10b28f` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  5.7% |  4.0ms |       4 | `0x10b263` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  4.3% |  3.0ms |       3 | `0x10a92b` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x1029eb` (`/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|     % |   Time | Samples | Callee     | Location                                          |
| ----: | -----: | ------: | ---------- | ------------------------------------------------- |
| 85.3% | 58.0ms |      58 | `0x10be83` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| 14.7% | 10.0ms |      10 | `0x10c997` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `_gfortran_st_open` (`<unknown>`)

|      % |   Time | Samples | Callee     | Location                                          |
| -----: | -----: | ------: | ---------- | ------------------------------------------------- |
| 100.0% | 68.0ms |      68 | `0x1029eb` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x9102b` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |   Time | Samples | Callee    | Location                               |
| ----: | -----: | ------: | --------- | -------------------------------------- |
| 31.7% | 20.0ms |      20 | `0x8eb7f` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| 12.7% |  8.0ms |       8 | `0x8eb3f` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  7.9% |  5.0ms |       5 | `0x8ea9c` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  6.3% |  4.0ms |       4 | `0x8eaa4` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  4.8% |  3.0ms |       3 | `0x8eb44` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x10be83` (`/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|      % |   Time | Samples | Callee    | Location                                          |
| -----: | -----: | ------: | --------- | ------------------------------------------------- |
| 100.0% | 58.0ms |      58 | `0x1c1b3` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x10a47b` (`/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|     % |   Time | Samples | Callee     | Location                                          |
| ----: | -----: | ------: | ---------- | ------------------------------------------------- |
| 56.6% | 30.0ms |      30 | `0x10c353` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| 34.0% | 18.0ms |      18 | `0x10c300` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  1.9% |  1.0ms |       1 | `0x10c2c4` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  1.9% |  1.0ms |       1 | `0x19fd4`  | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  1.9% |  1.0ms |       1 | `0x9d1d8`  | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |

##### `__json_value_module_MOD_parse_for_chars` (`./json_value_module.F90:11173`)

|     % |   Time | Samples | Callee                                    | Location                        |
| ----: | -----: | ------: | ----------------------------------------- | ------------------------------- |
| 86.3% | 44.0ms |      44 | `__json_value_module_MOD_pop_char.part.0` | `./json_value_module.F90:11346` |

##### `0xfa6bf` (`/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|     % |   Time | Samples | Callee    | Location                                          |
| ----: | -----: | ------: | --------- | ------------------------------------------------- |
| 91.7% | 33.0ms |      33 | `0x1c1b3` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  2.8% |  1.0ms |       1 | `0x1ac94` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  2.8% |  1.0ms |       1 | `0x1c1b8` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  2.8% |  1.0ms |       1 | `0x1c1b4` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x91c5f` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |  Time | Samples | Callee    | Location                               |
| ----: | ----: | ------: | --------- | -------------------------------------- |
| 15.6% | 5.0ms |       5 | `0x8faf4` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| 12.5% | 4.0ms |       4 | `0x8ffd0` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  9.4% | 3.0ms |       3 | `0x8fccc` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  9.4% | 3.0ms |       3 | `0x8fce0` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  9.4% | 3.0ms |       3 | `0x8fcc4` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `__json_file_module_MOD_json_file_get_string` (`./json_file_module.F90:1863`)

|     % |   Time | Samples | Callee                                            | Location                             |
| ----: | -----: | ------: | ------------------------------------------------- | ------------------------------------ |
| 96.0% | 24.0ms |      24 | `__json_value_module_MOD_json_get_string_by_path` | `./json_get_scalar_by_path.inc:9189` |
|  4.0% |  1.0ms |       1 | `__libc_malloc`                                   | `<unknown>`                          |

##### `__json_value_module_MOD_destroy_json_data` (`./json_value_module.F90:1394`)

|     % |   Time | Samples | Callee  | Location    |
| ----: | -----: | ------: | ------- | ----------- |
| 64.0% | 16.0ms |      16 | `cfree` | `<unknown>` |

##### `__json_value_module_MOD_json_get_string_by_path` (`./json_get_scalar_by_path.inc:9189`)

|     % |   Time | Samples | Callee                                     | Location                       |
| ----: | -----: | ------: | ------------------------------------------ | ------------------------------ |
| 95.8% | 23.0ms |      23 | `__json_value_module_MOD_json_get_by_path` | `./json_value_module.F90:6502` |
|  4.2% |  1.0ms |       1 | `__libc_malloc`                            | `<unknown>`                    |

## Hottest call stacks

Call stacks with the most time spent in their leaf frame.

Common call stack: `__json_value_module_MOD_parse_object` (`./json_value_module.F90:10889`) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_array` (11003) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_json_parse_file` (9721) ← `__json_file_module_MOD_json_file_load` (`./json_file_module.F90:854`) ← `MAIN__` (`/out/profile.f90:5`) ← `main` (6) ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `__libc_start_main` ← `_start`

|    % |   Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ---: | -----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2.0% | 78.0ms |      78 | `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90:11346`) ← `__json_value_module_MOD_parse_string` (11080) ← `__json_value_module_MOD_parse_value` (10124) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 1.9% | 75.0ms |      75 | `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90:11346`) ← `__json_value_module_MOD_parse_string` (11080) ← `__json_value_module_MOD_parse_value` (10124)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 1.3% | 49.0ms |      49 | `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90:11346`) ← `__json_value_module_MOD_parse_string` (11080) ← `__json_value_module_MOD_parse_value` (10124) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889)                                                                                                                                                                                                                                                      |
| 1.2% | 47.0ms |      47 | `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90:11346`) ← `__json_value_module_MOD_parse_string` (11080) ← `__json_value_module_MOD_parse_value` (10124) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 0.7% | 28.0ms |      28 | `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90:11346`) ← `__json_value_module_MOD_parse_string` (11080) ← `__json_value_module_MOD_parse_value` (10124) ← `__json_value_module_MOD_parse_object` (10889)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 0.7% | 27.0ms |      27 | `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90:11346`) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889)                                                                                                                                                   |
| 0.6% | 24.0ms |      24 | `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90:11346`) ← `__json_value_module_MOD_parse_string` (11080) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 0.6% | 23.0ms |      23 | `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90:11346`) ← `__json_value_module_MOD_parse_string` (11080) ← `__json_value_module_MOD_parse_value` (10124) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) |
| 0.5% | 21.0ms |      21 | `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90:11346`) ← `__json_value_module_MOD_parse_string` (11080) ← `__json_value_module_MOD_parse_value` (10124) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889)                                                  |
| 0.5% | 21.0ms |      21 | `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90:11346`) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889)                                                                                                                                                                                                    |
| 0.5% | 21.0ms |      21 | `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90:11346`) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 0.5% | 19.0ms |      19 | `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90:11346`) ← `__json_value_module_MOD_parse_string` (11080) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 0.5% | 19.0ms |      19 | `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90:11346`) ← `__json_value_module_MOD_parse_string` (11080) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889)                                                                                                                                                                                                    |
| 0.5% | 19.0ms |      19 | `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90:11346`) ← `__json_value_module_MOD_parse_string` (11080) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 0.5% | 18.0ms |      18 | `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90:11346`) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 0.5% | 18.0ms |      18 | `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90:11346`) ← `__json_value_module_MOD_parse_string` (11080) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889)                                                                                                                                                                                                                                                                                                      |
| 0.5% | 18.0ms |      18 | `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90:11346`) ← `__json_value_module_MOD_parse_string` (11080) ← `__json_value_module_MOD_parse_value` (10124) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889)                                                                                                                                                                                                     |
| 0.4% | 17.0ms |      17 | `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90:11346`) ← `__json_value_module_MOD_parse_string` (11080) ← `__json_value_module_MOD_parse_value` (10124) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 0.4% | 17.0ms |      17 | `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90:11346`) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 0.4% | 16.0ms |      16 | `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90:11346`) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
