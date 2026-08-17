# Allocated heap profile

Allocated 236 MiB over 1,160,835 objects (213 B per object).

| Category |     % |     Size | Objects |
| -------- | ----: | -------: | ------: |
| Unknown  | 70.8% |  167 MiB | 174,357 |
| Ours     | 29.1% | 68.8 MiB | 947,666 |
| Native   |  0.1% |  194 KiB |  38,812 |

Paths starting with `./` or `../` are relative to `/src/json-fortran/src/`.

## Call tree

Call paths to the hottest functions.

```
├── 142 MiB (60.2%) __json_value_module_MOD_parse_object  ./json_value_module.F90:10882
│   ├── 86.9 MiB (36.8%) [[via 2–30 frames]] __json_value_module_MOD_parse_number  (self 0.8%; 2.0% in 39 call stacks)  ./json_value_module.F90:11192
│   │   └── 85 MiB (36.0%) __json_value_module_MOD_string_to_int  :8074
│   │       └── 85 MiB (36.0%) __json_string_utilities_MOD_string_to_integer  ./json_string_utilities.F90:116
│   │           └── 84.9 MiB (36.0%) (anonymous)  (self 35.9%; 70.8% in 118 call stacks)
│   ├── 22.6 MiB (9.6%) [[via 3–29 frames]] __json_value_module_MOD_parse_array  ./json_value_module.F90:10987
│   │   └── 21.2 MiB (9.0%) [[via 3 frames]] (anonymous)  (self 9.0%)
│   ├── 15.6 MiB (6.6%) [[via 2–30 frames]] __json_value_module_MOD_parse_string  (18.8% self in 133 call stacks)  ./json_value_module.F90:11052
│   ├── 8.88 MiB (3.8%) [[via 2–30 frames]] __json_value_module_MOD_parse_value  ./json_value_module.F90:10117
│   │   └── 8.09 MiB (3.4%) __json_value_module_MOD_parse_string  (self 3.3%)  :11052
│   └── 7.2 MiB (3.0%) [[via 2–30 frames]] __json_value_module_MOD_json_value_create  (6.2% self in 96 call stacks)  ./json_value_module.F90:2204
├── 46.7 MiB (19.8%) [[via 2 frames]] (anonymous)  (self 10.8%)
│   └── 21.3 MiB (9.0%) main  /out/profile.f90:6
│       └── 21.3 MiB (9.0%) MAIN__  :5
│           ├── 21 MiB (8.9%) __json_file_module_MOD_json_file_load  ./json_file_module.F90:842
│           │   └── 21 MiB (8.9%) __json_value_module_MOD_json_parse_file  ./json_value_module.F90:9714
│           │       └── 21 MiB (8.9%) __json_value_module_MOD_parse_object  :10882
│           │           ├── 8.68 MiB (3.7%) [[via 1–23 frames]] __json_value_module_MOD_parse_string  ./json_value_module.F90:11052
│           │           ├── 6.57 MiB (2.8%) [[via 3–23 frames]] __json_value_module_MOD_parse_value  ./json_value_module.F90:10117
│           │           │   └── 5.91 MiB (2.5%) __json_value_module_MOD_parse_string  (self 2.3%)  :11052
│           │           │       └── 567 KiB (0.2%) __json_string_utilities_MOD_unescape_string  ./json_string_utilities.F90:483
│           │           ├── 3.99 MiB (1.7%) [[via 1–23 frames]] __json_value_module_MOD_json_value_create  ./json_value_module.F90:2204
│           │           └── 1.2 MiB (0.5%) [[via 2–22 frames]] __json_value_module_MOD_parse_number  ./json_value_module.F90:11192
│           └── 281 KiB (0.1%) __json_file_module_MOD_json_file_get_string  ./json_file_module.F90:1837
│               └── 281 KiB (0.1%) __json_value_module_MOD_json_get_string_by_path  ./json_get_scalar_by_path.inc:9182
│                   └── 270 KiB (0.1%) __json_value_module_MOD_json_get_string  ./json_value_module.F90:9078
├── 10 MiB (4.2%) (anonymous)  (self 3.2%)
│   └── 2.49 MiB (1.1%) 2 more branches, largest main (1.1%)  /out/profile.f90:6
├── 9.53 MiB (4.0%) __json_value_module_MOD_parse_array  ./json_value_module.F90:10987
│   ├── 7.8 MiB (3.3%) [[via 26–31 frames]] (anonymous)  (self 3.3%)
│   └── 951 KiB (0.4%) [[via 3–5 frames]] __json_value_module_MOD_parse_number  ./json_value_module.F90:11192
├── 9.04 MiB (3.8%) __json_value_module_MOD_json_parse_file  ./json_value_module.F90:9714
│   └── 9.04 MiB (3.8%) __json_value_module_MOD_parse_object  :10882
│       ├── 7.61 MiB (3.2%) [[via 5–32 frames]] (anonymous)
│       └── 737 KiB (0.3%) [[via 2–29 frames]] __json_value_module_MOD_parse_string  ./json_value_module.F90:11052
├── 7.41 MiB (3.1%) [[via 4 frames]] __json_value_module_MOD_parse_object  ./json_value_module.F90:10882
│   └── 7.38 MiB (3.1%) 6 more branches, largest __json_value_module_MOD_parse_number (2.6%)  ./json_value_module.F90:11192
├── 5.87 MiB (2.5%) [[via 26–33 frames]] __json_string_utilities_MOD_string_to_integer  ./json_string_utilities.F90:116
│   └── 5.86 MiB (2.5%) (anonymous)  (self 2.5%)
└── 4.19 MiB (1.8%) 2 more branches, largest __libc_start_main (0.9%) and __json_file_module_MOD_json_file_load (0.8%)
```

## Hottest functions

### Self size

Functions with the most bytes allocated within the function body, excluding callees.

|     % |     Size | Objects | Function                                          | Location                             |
| ----: | -------: | ------: | ------------------------------------------------- | ------------------------------------ |
| 70.8% |  167 MiB | 174,357 | `(anonymous)`                                     | `<unknown>`                          |
| 18.8% | 44.3 MiB | 462,275 | `__json_value_module_MOD_parse_string`            | `./json_value_module.F90:11052`      |
|  6.2% | 14.6 MiB | 137,064 | `__json_value_module_MOD_json_value_create`       | `./json_value_module.F90:2204`       |
|  2.0% | 4.67 MiB |  19,126 | `__json_value_module_MOD_parse_number`            | `./json_value_module.F90:11192`      |
|  0.8% |  1.8 MiB |  43,355 | `__json_value_module_MOD_parse_value`             | `./json_value_module.F90:10117`      |
|  0.6% |  1.5 MiB | 125,402 | `__json_value_module_MOD_parse_object`            | `./json_value_module.F90:10882`      |
|  0.5% |  1.1 MiB |   8,165 | `__json_string_utilities_MOD_unescape_string`     | `./json_string_utilities.F90:483`    |
|  0.1% |  270 KiB |   1,800 | `__json_value_module_MOD_json_get_string`         | `./json_value_module.F90:9078`       |
|  0.1% |  194 KiB |  38,812 | `strndup`                                         | `<unknown>`                          |
|  0.1% |  181 KiB |  58,888 | `__json_string_utilities_MOD_string_to_integer`   | `./json_string_utilities.F90:116`    |
|  0.1% |  155 KiB |  19,834 | `__json_value_module_MOD_to_integer`              | `./json_value_module.F90:10690`      |
| <0.1% |  102 KiB |  26,217 | `__json_value_module_MOD_to_logical`              | `./json_value_module.F90:10659`      |
| <0.1% | 41.7 KiB |  42,722 | `__json_value_module_MOD_to_string`               | `./json_value_module.F90:10755`      |
| <0.1% | 24.7 KiB |   1,818 | `MAIN__`                                          | `/out/profile.f90:5`                 |
| <0.1% | 4.32 KiB |      27 | `__json_value_module_MOD_pop_char.part.0`         | `./json_value_module.F90:11318`      |
| <0.1% | 2.56 KiB |      17 | `__json_value_module_MOD_json_initialize`         | `./json_value_module.F90:1016`       |
| <0.1% | 1.56 KiB |     918 | `__json_value_module_MOD_json_get_string_by_path` | `./json_get_scalar_by_path.inc:9182` |
| <0.1% |  1.2 KiB |      18 | `__json_value_module_MOD_json_throw_exception`    | `./json_value_module.F90:2003`       |
| <0.1% |    170 B |      10 | `__json_value_module_MOD_json_parse_file`         | `./json_value_module.F90:9714`       |
| <0.1% |     72 B |       9 | `__json_value_module_MOD_to_real`                 | `./json_value_module.F90:10721`      |

#### Categories

Categories accounting for at least 1.0% of self size.

##### Unknown

|     % |    Size | Objects | Function      | Location    |
| ----: | ------: | ------: | ------------- | ----------- |
| 70.8% | 167 MiB | 174,357 | `(anonymous)` | `<unknown>` |

##### Ours

|     % |     Size | Objects | Function                                          | Location                             |
| ----: | -------: | ------: | ------------------------------------------------- | ------------------------------------ |
| 18.8% | 44.3 MiB | 462,275 | `__json_value_module_MOD_parse_string`            | `./json_value_module.F90:11052`      |
|  6.2% | 14.6 MiB | 137,064 | `__json_value_module_MOD_json_value_create`       | `./json_value_module.F90:2204`       |
|  2.0% | 4.67 MiB |  19,126 | `__json_value_module_MOD_parse_number`            | `./json_value_module.F90:11192`      |
|  0.8% |  1.8 MiB |  43,355 | `__json_value_module_MOD_parse_value`             | `./json_value_module.F90:10117`      |
|  0.6% |  1.5 MiB | 125,402 | `__json_value_module_MOD_parse_object`            | `./json_value_module.F90:10882`      |
|  0.5% |  1.1 MiB |   8,165 | `__json_string_utilities_MOD_unescape_string`     | `./json_string_utilities.F90:483`    |
|  0.1% |  270 KiB |   1,800 | `__json_value_module_MOD_json_get_string`         | `./json_value_module.F90:9078`       |
|  0.1% |  181 KiB |  58,888 | `__json_string_utilities_MOD_string_to_integer`   | `./json_string_utilities.F90:116`    |
|  0.1% |  155 KiB |  19,834 | `__json_value_module_MOD_to_integer`              | `./json_value_module.F90:10690`      |
| <0.1% |  102 KiB |  26,217 | `__json_value_module_MOD_to_logical`              | `./json_value_module.F90:10659`      |
| <0.1% | 41.7 KiB |  42,722 | `__json_value_module_MOD_to_string`               | `./json_value_module.F90:10755`      |
| <0.1% | 24.7 KiB |   1,818 | `MAIN__`                                          | `/out/profile.f90:5`                 |
| <0.1% | 4.32 KiB |      27 | `__json_value_module_MOD_pop_char.part.0`         | `./json_value_module.F90:11318`      |
| <0.1% | 2.56 KiB |      17 | `__json_value_module_MOD_json_initialize`         | `./json_value_module.F90:1016`       |
| <0.1% | 1.56 KiB |     918 | `__json_value_module_MOD_json_get_string_by_path` | `./json_get_scalar_by_path.inc:9182` |
| <0.1% |  1.2 KiB |      18 | `__json_value_module_MOD_json_throw_exception`    | `./json_value_module.F90:2003`       |
| <0.1% |    170 B |      10 | `__json_value_module_MOD_json_parse_file`         | `./json_value_module.F90:9714`       |
| <0.1% |     72 B |       9 | `__json_value_module_MOD_to_real`                 | `./json_value_module.F90:10721`      |
| <0.1% |      3 B |       1 | `__json_value_module_MOD_json_prepare_parser`     | `./json_value_module.F90:9671`       |

#### Lines

Lines with the largest contribution to each function's self size.

##### `__json_value_module_MOD_parse_string` (`./json_value_module.F90:11052`)

|     % |     Size | Objects | Location                        |
| ----: | -------: | ------: | ------------------------------- |
| 82.5% | 36.6 MiB | 149,718 | `./json_value_module.F90:11073` |
| 14.0% | 6.21 MiB | 308,688 | `./json_value_module.F90:11122` |
|  3.4% | 1.52 MiB |   3,112 | `./json_value_module.F90:11098` |
| <0.1% |    757 B |     757 | `./json_value_module.F90:11120` |

##### `__json_value_module_MOD_json_value_create` (`./json_value_module.F90:2204`)

|      % |     Size | Objects | Location                       |
| -----: | -------: | ------: | ------------------------------ |
| 100.0% | 14.6 MiB | 137,064 | `./json_value_module.F90:2211` |

##### `__json_value_module_MOD_parse_number` (`./json_value_module.F90:11192`)

|      % |     Size | Objects | Location                        |
| -----: | -------: | ------: | ------------------------------- |
| 100.0% | 4.67 MiB |  19,126 | `./json_value_module.F90:11216` |

##### `__json_value_module_MOD_parse_value` (`./json_value_module.F90:10117`)

|      % |    Size | Objects | Location                        |
| -----: | ------: | ------: | ------------------------------- |
| 100.0% | 1.8 MiB |  43,355 | `./json_value_module.F90:10185` |

##### `__json_value_module_MOD_parse_object` (`./json_value_module.F90:10882`)

|      % |    Size | Objects | Location                        |
| -----: | ------: | ------: | ------------------------------- |
| 100.0% | 1.5 MiB | 125,402 | `./json_value_module.F90:10922` |

##### `__json_string_utilities_MOD_unescape_string` (`./json_string_utilities.F90:483`)

|     % |    Size | Objects | Location                          |
| ----: | ------: | ------: | --------------------------------- |
| 64.9% | 732 KiB |   5,304 | `./json_string_utilities.F90:506` |
| 35.1% | 395 KiB |   2,861 | `./json_string_utilities.F90:611` |

##### `__json_value_module_MOD_json_get_string` (`./json_value_module.F90:9078`)

|     % |    Size | Objects | Location                       |
| ----: | ------: | ------: | ------------------------------ |
| 99.7% | 269 KiB |     900 | `./json_value_module.F90:9094` |
|  0.3% |   900 B |     900 | `./json_value_module.F90:9086` |

##### `__json_string_utilities_MOD_string_to_integer` (`./json_string_utilities.F90:116`)

|     % |     Size | Objects | Location                          |
| ----: | -------: | ------: | --------------------------------- |
| 82.1% |  149 KiB |  40,737 | `./json_string_utilities.F90:134` |
| 17.9% | 32.5 KiB |  18,151 | `./json_string_utilities.F90:131` |

##### `__json_value_module_MOD_to_integer` (`./json_value_module.F90:10690`)

|      % |    Size | Objects | Location                        |
| -----: | ------: | ------: | ------------------------------- |
| 100.0% | 155 KiB |  19,834 | `./json_value_module.F90:10703` |

##### `__json_value_module_MOD_to_logical` (`./json_value_module.F90:10659`)

|      % |    Size | Objects | Location                        |
| -----: | ------: | ------: | ------------------------------- |
| 100.0% | 102 KiB |  26,217 | `./json_value_module.F90:10672` |

##### `__json_value_module_MOD_to_string` (`./json_value_module.F90:10755`)

|      % |     Size | Objects | Location                        |
| -----: | -------: | ------: | ------------------------------- |
| 100.0% | 41.7 KiB |  42,722 | `./json_value_module.F90:10800` |

##### `MAIN__` (`/out/profile.f90:5`)

|      % |     Size | Objects | Location              |
| -----: | -------: | ------: | --------------------- |
| 100.0% | 24.7 KiB |   1,818 | `/out/profile.f90:32` |

##### `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90:11318`)

|      % |     Size | Objects | Location                        |
| -----: | -------: | ------: | ------------------------------- |
| 100.0% | 4.32 KiB |      27 | `./json_value_module.F90:11383` |

##### `__json_value_module_MOD_json_initialize` (`./json_value_module.F90:1016`)

|     % |    Size | Objects | Location                       |
| ----: | ------: | ------: | ------------------------------ |
| 97.5% | 2.5 KiB |      10 | `./json_value_module.F90:1048` |
|  2.5% |    66 B |       7 | `./json_value_module.F90:1196` |

##### `__json_value_module_MOD_json_get_string_by_path` (`./json_get_scalar_by_path.inc:9182`)

|     % |  Size | Objects | Location                           |
| ----: | ----: | ------: | ---------------------------------- |
| 57.1% | 909 B |     909 | `./json_get_scalar_by_path.inc:6`  |
| 42.9% | 684 B |       9 | `./json_get_scalar_by_path.inc:19` |

##### `__json_value_module_MOD_json_throw_exception` (`./json_value_module.F90:2003`)

|      % |    Size | Objects | Location                       |
| -----: | ------: | ------: | ------------------------------ |
| 100.0% | 1.2 KiB |      18 | `./json_value_module.F90:2021` |

##### `__json_value_module_MOD_json_parse_file` (`./json_value_module.F90:9714`)

|      % |  Size | Objects | Location                       |
| -----: | ----: | ------: | ------------------------------ |
| 100.0% | 170 B |      10 | `./json_value_module.F90:9786` |

##### `__json_value_module_MOD_to_real` (`./json_value_module.F90:10721`)

|      % | Size | Objects | Location                        |
| -----: | ---: | ------: | ------------------------------- |
| 100.0% | 72 B |       9 | `./json_value_module.F90:10734` |

##### `__json_value_module_MOD_json_prepare_parser` (`./json_value_module.F90:9671`)

|      % | Size | Objects | Location                       |
| -----: | ---: | ------: | ------------------------------ |
| 100.0% |  3 B |       1 | `./json_value_module.F90:9680` |

#### Callers

Callers with the largest contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `(anonymous)` (`<unknown>`)

|      % |     Size | Objects | Caller                  | Location    |
| -----: | -------: | ------: | ----------------------- | ----------- |
| 100.0% |  167 MiB | 153,749 | `(anonymous)`           | `<unknown>` |
|  <0.1% | 26.2 KiB |  20,608 | `_gfortran_string_trim` | `<unknown>` |

##### `__json_value_module_MOD_parse_string` (`./json_value_module.F90:11052`)

|     % |     Size | Objects | Caller                                 | Location                        |
| ----: | -------: | ------: | -------------------------------------- | ------------------------------- |
| 65.1% | 28.8 MiB | 336,064 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90:10882` |
| 34.9% | 15.5 MiB | 126,211 | `__json_value_module_MOD_parse_value`  | `./json_value_module.F90:10117` |

##### `__json_value_module_MOD_json_value_create` (`./json_value_module.F90:2204`)

|     % |     Size | Objects | Caller                                    | Location                        |
| ----: | -------: | ------: | ----------------------------------------- | ------------------------------- |
| 91.5% | 13.4 MiB | 125,403 | `__json_value_module_MOD_parse_object`    | `./json_value_module.F90:10882` |
|  8.5% | 1.24 MiB |  11,651 | `__json_value_module_MOD_parse_array`     | `./json_value_module.F90:10987` |
| <0.1% | 1.09 KiB |      10 | `__json_value_module_MOD_json_parse_file` | `./json_value_module.F90:9714`  |

##### `__json_value_module_MOD_parse_number` (`./json_value_module.F90:11192`)

|     % |     Size | Objects | Caller                                 | Location                        |
| ----: | -------: | ------: | -------------------------------------- | ------------------------------- |
| 84.6% | 3.95 MiB |  16,184 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90:10882` |
| 15.4% |  736 KiB |   2,942 | `__json_value_module_MOD_parse_array`  | `./json_value_module.F90:10987` |

##### `__json_value_module_MOD_parse_value` (`./json_value_module.F90:10117`)

|      % |    Size | Objects | Caller                                 | Location                        |
| -----: | ------: | ------: | -------------------------------------- | ------------------------------- |
| 100.0% | 1.8 MiB |  43,355 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90:10882` |

##### `__json_value_module_MOD_parse_object` (`./json_value_module.F90:10882`)

|     % |     Size | Objects | Caller                                    | Location                        |
| ----: | -------: | ------: | ----------------------------------------- | ------------------------------- |
| 98.8% | 1.48 MiB | 122,982 | `__json_value_module_MOD_parse_object`    | `./json_value_module.F90:10882` |
|  1.2% | 18.3 KiB |   2,410 | `__json_value_module_MOD_parse_array`     | `./json_value_module.F90:10987` |
| <0.1% |     80 B |      10 | `__json_value_module_MOD_json_parse_file` | `./json_value_module.F90:9714`  |

##### `__json_string_utilities_MOD_unescape_string` (`./json_string_utilities.F90:483`)

|      % |    Size | Objects | Caller                                 | Location                        |
| -----: | ------: | ------: | -------------------------------------- | ------------------------------- |
| 100.0% | 1.1 MiB |   8,165 | `__json_value_module_MOD_parse_string` | `./json_value_module.F90:11052` |

##### `__json_value_module_MOD_json_get_string` (`./json_value_module.F90:9078`)

|      % |    Size | Objects | Caller                                            | Location                             |
| -----: | ------: | ------: | ------------------------------------------------- | ------------------------------------ |
| 100.0% | 270 KiB |   1,800 | `__json_value_module_MOD_json_get_string_by_path` | `./json_get_scalar_by_path.inc:9182` |

##### `strndup` (`<unknown>`)

|      % |    Size | Objects | Caller        | Location    |
| -----: | ------: | ------: | ------------- | ----------- |
| 100.0% | 194 KiB |  38,812 | `(anonymous)` | `<unknown>` |

##### `__json_string_utilities_MOD_string_to_integer` (`./json_string_utilities.F90:116`)

|     % |     Size | Objects | Caller                                             | Location                       |
| ----: | -------: | ------: | -------------------------------------------------- | ------------------------------ |
| 95.6% |  173 KiB |  56,161 | `__json_value_module_MOD_string_to_int`            | `./json_value_module.F90:8074` |
|  4.4% | 7.91 KiB |   2,727 | `__json_value_module_MOD_json_get_by_path_default` | `./json_value_module.F90:6787` |

##### `__json_value_module_MOD_to_integer` (`./json_value_module.F90:10690`)

|      % |    Size | Objects | Caller                                 | Location                        |
| -----: | ------: | ------: | -------------------------------------- | ------------------------------- |
| 100.0% | 155 KiB |  19,834 | `__json_value_module_MOD_parse_number` | `./json_value_module.F90:11192` |

##### `__json_value_module_MOD_to_logical` (`./json_value_module.F90:10659`)

|      % |    Size | Objects | Caller                                 | Location                        |
| -----: | ------: | ------: | -------------------------------------- | ------------------------------- |
| 100.0% | 102 KiB |  26,217 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90:10882` |

##### `__json_value_module_MOD_to_string` (`./json_value_module.F90:10755`)

|      % |     Size | Objects | Caller                                | Location                        |
| -----: | -------: | ------: | ------------------------------------- | ------------------------------- |
| 100.0% | 41.7 KiB |  42,722 | `__json_value_module_MOD_parse_value` | `./json_value_module.F90:10117` |

##### `MAIN__` (`/out/profile.f90:5`)

|      % |     Size | Objects | Caller | Location             |
| -----: | -------: | ------: | ------ | -------------------- |
| 100.0% | 24.7 KiB |   1,818 | `main` | `/out/profile.f90:6` |

##### `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90:11318`)

|     % |     Size | Objects | Caller                                   | Location                        |
| ----: | -------: | ------: | ---------------------------------------- | ------------------------------- |
| 99.8% | 4.31 KiB |      18 | `__json_value_module_MOD_parse_string`   | `./json_value_module.F90:11052` |
|  0.2% |      9 B |       9 | `__json_value_module_MOD_json_parse_end` | `./json_value_module.F90:9878`  |

##### `__json_value_module_MOD_json_initialize` (`./json_value_module.F90:1016`)

|      % |     Size | Objects | Caller                                                | Location                     |
| -----: | -------: | ------: | ----------------------------------------------------- | ---------------------------- |
| 100.0% | 2.56 KiB |      17 | `__json_file_module_MOD_initialize_json_core_in_file` | `./json_file_module.F90:504` |

##### `__json_value_module_MOD_json_get_string_by_path` (`./json_get_scalar_by_path.inc:9182`)

|      % |     Size | Objects | Caller                                        | Location                      |
| -----: | -------: | ------: | --------------------------------------------- | ----------------------------- |
| 100.0% | 1.56 KiB |     918 | `__json_file_module_MOD_json_file_get_string` | `./json_file_module.F90:1837` |

##### `__json_value_module_MOD_json_throw_exception` (`./json_value_module.F90:2003`)

|     % |  Size | Objects | Caller                                                  | Location                             |
| ----: | ----: | ------: | ------------------------------------------------------- | ------------------------------------ |
| 55.9% | 684 B |       9 | `__json_value_module_MOD_json_get_string_by_path`       | `./json_get_scalar_by_path.inc:9182` |
| 44.1% | 540 B |       9 | `__json_value_module_MOD_json_value_get_child_by_index` | `./json_value_module.F90:5439`       |

##### `__json_value_module_MOD_json_parse_file` (`./json_value_module.F90:9714`)

|      % |  Size | Objects | Caller                                  | Location                     |
| -----: | ----: | ------: | --------------------------------------- | ---------------------------- |
| 100.0% | 170 B |      10 | `__json_file_module_MOD_json_file_load` | `./json_file_module.F90:842` |

##### `__json_value_module_MOD_to_real` (`./json_value_module.F90:10721`)

|      % | Size | Objects | Caller                                 | Location                        |
| -----: | ---: | ------: | -------------------------------------- | ------------------------------- |
| 100.0% | 72 B |       9 | `__json_value_module_MOD_parse_number` | `./json_value_module.F90:11192` |

##### `__json_value_module_MOD_json_prepare_parser` (`./json_value_module.F90:9671`)

|      % | Size | Objects | Caller                                    | Location                       |
| -----: | ---: | ------: | ----------------------------------------- | ------------------------------ |
| 100.0% |  3 B |       1 | `__json_value_module_MOD_json_parse_file` | `./json_value_module.F90:9714` |

### Total size

Functions with the most bytes allocated within the function and its callees.

|     % |     Size |   Objects | Function                                           | Location                             |
| ----: | -------: | --------: | -------------------------------------------------- | ------------------------------------ |
| 96.1% |  227 MiB | 1,140,696 | `__json_value_module_MOD_parse_object`             | `./json_value_module.F90:10882`      |
| 81.9% |  193 MiB |   540,250 | `(anonymous)`                                      | `<unknown>`                          |
| 69.2% |  163 MiB |   295,488 | `__json_value_module_MOD_parse_number`             | `./json_value_module.F90:11192`      |
| 68.8% |  162 MiB |   266,482 | `__json_string_utilities_MOD_string_to_integer`    | `./json_string_utilities.F90:116`    |
| 67.1% |  159 MiB |   256,483 | `__json_value_module_MOD_string_to_int`            | `./json_value_module.F90:8074`       |
| 56.3% |  133 MiB |   604,668 | `__json_value_module_MOD_parse_array`              | `./json_value_module.F90:10987`      |
| 32.4% | 76.4 MiB |   453,993 | `__json_value_module_MOD_json_parse_file`          | `./json_value_module.F90:9714`       |
| 31.1% | 73.4 MiB |   422,033 | `MAIN__`                                           | `/out/profile.f90:5`                 |
| 28.5% | 67.4 MiB |   430,681 | `__json_file_module_MOD_json_file_load`            | `./json_file_module.F90:842`         |
| 28.1% | 66.4 MiB |   396,202 | `main`                                             | `/out/profile.f90:6`                 |
| 20.7% |   49 MiB |   339,140 | `__libc_start_main`                                | `<unknown>`                          |
| 19.8% | 46.7 MiB |   309,575 | `_start`                                           | `<unknown>`                          |
| 19.2% | 45.4 MiB |   470,458 | `__json_value_module_MOD_parse_string`             | `./json_value_module.F90:11052`      |
|  7.8% | 18.4 MiB |   220,471 | `__json_value_module_MOD_parse_value`              | `./json_value_module.F90:10117`      |
|  6.2% | 14.6 MiB |   137,064 | `__json_value_module_MOD_json_value_create`        | `./json_value_module.F90:2204`       |
|  1.7% | 4.13 MiB |    12,744 | `__json_value_module_MOD_json_get_string_by_path`  | `./json_get_scalar_by_path.inc:9182` |
|  1.7% | 4.13 MiB |    12,744 | `__json_file_module_MOD_json_file_get_string`      | `./json_file_module.F90:1837`        |
|  1.6% | 3.86 MiB |    10,008 | `__json_value_module_MOD_json_get_by_path_default` | `./json_value_module.F90:6787`       |
|  1.6% | 3.86 MiB |    10,008 | `__json_value_module_MOD_json_get_by_path`         | `./json_value_module.F90:6495`       |
|  0.5% | 1.25 MiB |        40 | `_gfortran_st_open`                                | `<unknown>`                          |

#### Categories

Categories accounting for at least 1.0% of self size.

##### Unknown

|     % |    Size | Objects | Function      | Location    |
| ----: | ------: | ------: | ------------- | ----------- |
| 81.9% | 193 MiB | 540,250 | `(anonymous)` | `<unknown>` |

##### Ours

|     % |     Size |   Objects | Function                                           | Location                             |
| ----: | -------: | --------: | -------------------------------------------------- | ------------------------------------ |
| 96.1% |  227 MiB | 1,140,696 | `__json_value_module_MOD_parse_object`             | `./json_value_module.F90:10882`      |
| 69.2% |  163 MiB |   295,488 | `__json_value_module_MOD_parse_number`             | `./json_value_module.F90:11192`      |
| 68.8% |  162 MiB |   266,482 | `__json_string_utilities_MOD_string_to_integer`    | `./json_string_utilities.F90:116`    |
| 67.1% |  159 MiB |   256,483 | `__json_value_module_MOD_string_to_int`            | `./json_value_module.F90:8074`       |
| 56.3% |  133 MiB |   604,668 | `__json_value_module_MOD_parse_array`              | `./json_value_module.F90:10987`      |
| 32.4% | 76.4 MiB |   453,993 | `__json_value_module_MOD_json_parse_file`          | `./json_value_module.F90:9714`       |
| 31.1% | 73.4 MiB |   422,033 | `MAIN__`                                           | `/out/profile.f90:5`                 |
| 28.5% | 67.4 MiB |   430,681 | `__json_file_module_MOD_json_file_load`            | `./json_file_module.F90:842`         |
| 28.1% | 66.4 MiB |   396,202 | `main`                                             | `/out/profile.f90:6`                 |
| 19.2% | 45.4 MiB |   470,458 | `__json_value_module_MOD_parse_string`             | `./json_value_module.F90:11052`      |
|  7.8% | 18.4 MiB |   220,471 | `__json_value_module_MOD_parse_value`              | `./json_value_module.F90:10117`      |
|  6.2% | 14.6 MiB |   137,064 | `__json_value_module_MOD_json_value_create`        | `./json_value_module.F90:2204`       |
|  1.7% | 4.13 MiB |    12,744 | `__json_value_module_MOD_json_get_string_by_path`  | `./json_get_scalar_by_path.inc:9182` |
|  1.7% | 4.13 MiB |    12,744 | `__json_file_module_MOD_json_file_get_string`      | `./json_file_module.F90:1837`        |
|  1.6% | 3.86 MiB |    10,008 | `__json_value_module_MOD_json_get_by_path_default` | `./json_value_module.F90:6787`       |
|  1.6% | 3.86 MiB |    10,008 | `__json_value_module_MOD_json_get_by_path`         | `./json_value_module.F90:6495`       |
|  0.5% |  1.1 MiB |     8,165 | `__json_string_utilities_MOD_unescape_string`      | `./json_string_utilities.F90:483`    |
|  0.1% |  270 KiB |     1,800 | `__json_value_module_MOD_json_get_string`          | `./json_value_module.F90:9078`       |
|  0.1% |  155 KiB |    19,834 | `__json_value_module_MOD_to_integer`               | `./json_value_module.F90:10690`      |
| <0.1% |  102 KiB |    26,217 | `__json_value_module_MOD_to_logical`               | `./json_value_module.F90:10659`      |

#### Callers

Callers with the largest contribution to each function's total size. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `__json_value_module_MOD_parse_object` (`./json_value_module.F90:10882`)

|     % |     Size |   Objects | Caller                                    | Location                        |
| ----: | -------: | --------: | ----------------------------------------- | ------------------------------- |
| 99.9% |  227 MiB | 1,135,849 | `__json_value_module_MOD_parse_object`    | `./json_value_module.F90:10882` |
| 58.4% |  133 MiB |   600,163 | `__json_value_module_MOD_parse_array`     | `./json_value_module.F90:10987` |
| 33.1% | 75.2 MiB |   453,923 | `__json_value_module_MOD_json_parse_file` | `./json_value_module.F90:9714`  |

##### `(anonymous)` (`<unknown>`)

|     % |     Size | Objects | Caller                                          | Location                          |
| ----: | -------: | ------: | ----------------------------------------------- | --------------------------------- |
| 86.5% |  167 MiB | 192,561 | `(anonymous)`                                   | `<unknown>`                       |
| 83.9% |  162 MiB | 187,914 | `__json_string_utilities_MOD_string_to_integer` | `./json_string_utilities.F90:116` |
| 25.3% |   49 MiB | 339,140 | `__libc_start_main`                             | `<unknown>`                       |
|  2.0% | 3.85 MiB |   4,560 | `MAIN__`                                        | `/out/profile.f90:5`              |
|  0.6% | 1.25 MiB |      40 | `_gfortran_st_open`                             | `<unknown>`                       |

##### `__json_value_module_MOD_parse_number` (`./json_value_module.F90:11192`)

|     % |     Size | Objects | Caller                                 | Location                        |
| ----: | -------: | ------: | -------------------------------------- | ------------------------------- |
| 86.0% |  140 MiB | 250,760 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90:10882` |
| 14.0% | 22.9 MiB |  44,728 | `__json_value_module_MOD_parse_array`  | `./json_value_module.F90:10987` |

##### `__json_string_utilities_MOD_string_to_integer` (`./json_string_utilities.F90:116`)

|     % |     Size | Objects | Caller                                             | Location                       |
| ----: | -------: | ------: | -------------------------------------------------- | ------------------------------ |
| 97.6% |  159 MiB | 256,483 | `__json_value_module_MOD_string_to_int`            | `./json_value_module.F90:8074` |
|  2.4% | 3.86 MiB |   9,999 | `__json_value_module_MOD_json_get_by_path_default` | `./json_value_module.F90:6787` |

##### `__json_value_module_MOD_string_to_int` (`./json_value_module.F90:8074`)

|      % |    Size | Objects | Caller                                 | Location                        |
| -----: | ------: | ------: | -------------------------------------- | ------------------------------- |
| 100.0% | 159 MiB | 256,483 | `__json_value_module_MOD_parse_number` | `./json_value_module.F90:11192` |

##### `__json_value_module_MOD_parse_array` (`./json_value_module.F90:10987`)

|     % |    Size | Objects | Caller                                 | Location                        |
| ----: | ------: | ------: | -------------------------------------- | ------------------------------- |
| 93.8% | 125 MiB | 588,726 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90:10882` |

##### `__json_value_module_MOD_json_parse_file` (`./json_value_module.F90:9714`)

|     % |     Size | Objects | Caller                                  | Location                     |
| ----: | -------: | ------: | --------------------------------------- | ---------------------------- |
| 88.2% | 67.4 MiB | 430,681 | `__json_file_module_MOD_json_file_load` | `./json_file_module.F90:842` |

##### `MAIN__` (`/out/profile.f90:5`)

|     % |     Size | Objects | Caller | Location             |
| ----: | -------: | ------: | ------ | -------------------- |
| 90.4% | 66.4 MiB | 396,202 | `main` | `/out/profile.f90:6` |

##### `__json_file_module_MOD_json_file_load` (`./json_file_module.F90:842`)

|     % |     Size | Objects | Caller   | Location             |
| ----: | -------: | ------: | -------- | -------------------- |
| 97.1% | 65.4 MiB | 401,964 | `MAIN__` | `/out/profile.f90:5` |

##### `main` (`/out/profile.f90:6`)

|     % |   Size | Objects | Caller        | Location    |
| ----: | -----: | ------: | ------------- | ----------- |
| 88.8% | 59 MiB | 366,201 | `(anonymous)` | `<unknown>` |

##### `__libc_start_main` (`<unknown>`)

|     % |     Size | Objects | Caller   | Location    |
| ----: | -------: | ------: | -------- | ----------- |
| 95.4% | 46.7 MiB | 309,575 | `_start` | `<unknown>` |

##### `__json_value_module_MOD_parse_string` (`./json_value_module.F90:11052`)

|     % |     Size | Objects | Caller                                 | Location                        |
| ----: | -------: | ------: | -------------------------------------- | ------------------------------- |
| 63.5% | 28.8 MiB | 336,064 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90:10882` |
| 36.5% | 16.6 MiB | 134,394 | `__json_value_module_MOD_parse_value`  | `./json_value_module.F90:10117` |

##### `__json_value_module_MOD_parse_value` (`./json_value_module.F90:10117`)

|      % |     Size | Objects | Caller                                 | Location                        |
| -----: | -------: | ------: | -------------------------------------- | ------------------------------- |
| 100.0% | 18.4 MiB | 220,471 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90:10882` |

##### `__json_value_module_MOD_json_value_create` (`./json_value_module.F90:2204`)

|     % |     Size | Objects | Caller                                    | Location                        |
| ----: | -------: | ------: | ----------------------------------------- | ------------------------------- |
| 91.5% | 13.4 MiB | 125,403 | `__json_value_module_MOD_parse_object`    | `./json_value_module.F90:10882` |
|  8.5% | 1.24 MiB |  11,651 | `__json_value_module_MOD_parse_array`     | `./json_value_module.F90:10987` |
| <0.1% | 1.09 KiB |      10 | `__json_value_module_MOD_json_parse_file` | `./json_value_module.F90:9714`  |

##### `__json_value_module_MOD_json_get_string_by_path` (`./json_get_scalar_by_path.inc:9182`)

|      % |     Size | Objects | Caller                                        | Location                      |
| -----: | -------: | ------: | --------------------------------------------- | ----------------------------- |
| 100.0% | 4.13 MiB |  12,744 | `__json_file_module_MOD_json_file_get_string` | `./json_file_module.F90:1837` |

##### `__json_file_module_MOD_json_file_get_string` (`./json_file_module.F90:1837`)

|      % |     Size | Objects | Caller   | Location             |
| -----: | -------: | ------: | -------- | -------------------- |
| 100.0% | 4.13 MiB |  12,744 | `MAIN__` | `/out/profile.f90:5` |

##### `__json_value_module_MOD_json_get_by_path_default` (`./json_value_module.F90:6787`)

|      % |     Size | Objects | Caller                                     | Location                       |
| -----: | -------: | ------: | ------------------------------------------ | ------------------------------ |
| 100.0% | 3.86 MiB |  10,008 | `__json_value_module_MOD_json_get_by_path` | `./json_value_module.F90:6495` |

##### `__json_value_module_MOD_json_get_by_path` (`./json_value_module.F90:6495`)

|      % |     Size | Objects | Caller                                            | Location                             |
| -----: | -------: | ------: | ------------------------------------------------- | ------------------------------------ |
| 100.0% | 3.86 MiB |  10,008 | `__json_value_module_MOD_json_get_string_by_path` | `./json_get_scalar_by_path.inc:9182` |

##### `_gfortran_st_open` (`<unknown>`)

|      % |     Size | Objects | Caller                                    | Location                       |
| -----: | -------: | ------: | ----------------------------------------- | ------------------------------ |
| 100.0% | 1.25 MiB |      40 | `__json_value_module_MOD_json_parse_file` | `./json_value_module.F90:9714` |

##### `__json_string_utilities_MOD_unescape_string` (`./json_string_utilities.F90:483`)

|      % |    Size | Objects | Caller                                 | Location                        |
| -----: | ------: | ------: | -------------------------------------- | ------------------------------- |
| 100.0% | 1.1 MiB |   8,165 | `__json_value_module_MOD_parse_string` | `./json_value_module.F90:11052` |

##### `__json_value_module_MOD_json_get_string` (`./json_value_module.F90:9078`)

|      % |    Size | Objects | Caller                                            | Location                             |
| -----: | ------: | ------: | ------------------------------------------------- | ------------------------------------ |
| 100.0% | 270 KiB |   1,800 | `__json_value_module_MOD_json_get_string_by_path` | `./json_get_scalar_by_path.inc:9182` |

##### `__json_value_module_MOD_to_integer` (`./json_value_module.F90:10690`)

|      % |    Size | Objects | Caller                                 | Location                        |
| -----: | ------: | ------: | -------------------------------------- | ------------------------------- |
| 100.0% | 155 KiB |  19,834 | `__json_value_module_MOD_parse_number` | `./json_value_module.F90:11192` |

##### `__json_value_module_MOD_to_logical` (`./json_value_module.F90:10659`)

|      % |    Size | Objects | Caller                                 | Location                        |
| -----: | ------: | ------: | -------------------------------------- | ------------------------------- |
| 100.0% | 102 KiB |  26,217 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90:10882` |

#### Callees

Callees with the largest contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `__json_value_module_MOD_parse_object` (`./json_value_module.F90:10882`)

|     % |     Size |   Objects | Callee                                 | Location                        |
| ----: | -------: | --------: | -------------------------------------- | ------------------------------- |
| 99.9% |  227 MiB | 1,135,849 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90:10882` |
| 61.9% |  140 MiB |   250,760 | `__json_value_module_MOD_parse_number` | `./json_value_module.F90:11192` |
| 55.0% |  125 MiB |   588,726 | `__json_value_module_MOD_parse_array`  | `./json_value_module.F90:10987` |
| 12.7% | 28.8 MiB |   336,064 | `__json_value_module_MOD_parse_string` | `./json_value_module.F90:11052` |
|  8.1% | 18.4 MiB |   220,471 | `__json_value_module_MOD_parse_value`  | `./json_value_module.F90:10117` |

##### `(anonymous)` (`<unknown>`)

|     % |    Size | Objects | Callee        | Location             |
| ----: | ------: | ------: | ------------- | -------------------- |
| 86.5% | 167 MiB | 192,561 | `(anonymous)` | `<unknown>`          |
| 30.5% |  59 MiB | 366,201 | `main`        | `/out/profile.f90:6` |
|  0.1% | 194 KiB |  38,812 | `strndup`     | `<unknown>`          |

##### `__json_value_module_MOD_parse_number` (`./json_value_module.F90:11192`)

|     % |     Size | Objects | Callee                                   | Location                        |
| ----: | -------: | ------: | ---------------------------------------- | ------------------------------- |
| 97.0% |  159 MiB | 256,483 | `__json_value_module_MOD_string_to_int`  | `./json_value_module.F90:8074`  |
|  0.1% |  155 KiB |  19,834 | `__json_value_module_MOD_to_integer`     | `./json_value_module.F90:10690` |
| <0.1% | 4.89 KiB |      36 | `__json_value_module_MOD_string_to_dble` | `./json_value_module.F90:8101`  |
| <0.1% |     72 B |       9 | `__json_value_module_MOD_to_real`        | `./json_value_module.F90:10721` |

##### `__json_string_utilities_MOD_string_to_integer` (`./json_string_utilities.F90:116`)

|     % |     Size | Objects | Callee                  | Location    |
| ----: | -------: | ------: | ----------------------- | ----------- |
| 99.9% |  162 MiB | 187,914 | `(anonymous)`           | `<unknown>` |
| <0.1% | 24.2 KiB |  19,680 | `_gfortran_string_trim` | `<unknown>` |

##### `__json_value_module_MOD_string_to_int` (`./json_value_module.F90:8074`)

|      % |    Size | Objects | Callee                                          | Location                          |
| -----: | ------: | ------: | ----------------------------------------------- | --------------------------------- |
| 100.0% | 159 MiB | 256,483 | `__json_string_utilities_MOD_string_to_integer` | `./json_string_utilities.F90:116` |

##### `__json_value_module_MOD_parse_array` (`./json_value_module.F90:10987`)

|     % |     Size | Objects | Callee                                      | Location                        |
| ----: | -------: | ------: | ------------------------------------------- | ------------------------------- |
| 99.6% |  133 MiB | 600,163 | `__json_value_module_MOD_parse_object`      | `./json_value_module.F90:10882` |
| 17.2% | 22.9 MiB |  44,728 | `__json_value_module_MOD_parse_number`      | `./json_value_module.F90:11192` |
|  0.9% | 1.24 MiB |  11,651 | `__json_value_module_MOD_json_value_create` | `./json_value_module.F90:2204`  |

##### `__json_value_module_MOD_json_parse_file` (`./json_value_module.F90:9714`)

|     % |     Size | Objects | Callee                                        | Location                        |
| ----: | -------: | ------: | --------------------------------------------- | ------------------------------- |
| 98.4% | 75.2 MiB | 453,923 | `__json_value_module_MOD_parse_object`        | `./json_value_module.F90:10882` |
|  1.6% | 1.25 MiB |      40 | `_gfortran_st_open`                           | `<unknown>`                     |
| <0.1% | 1.09 KiB |      10 | `__json_value_module_MOD_json_value_create`   | `./json_value_module.F90:2204`  |
| <0.1% |      9 B |       9 | `__json_value_module_MOD_json_parse_end`      | `./json_value_module.F90:9878`  |
| <0.1% |      3 B |       1 | `__json_value_module_MOD_json_prepare_parser` | `./json_value_module.F90:9671`  |

##### `MAIN__` (`/out/profile.f90:5`)

|     % |     Size | Objects | Callee                                                | Location                      |
| ----: | -------: | ------: | ----------------------------------------------------- | ----------------------------- |
| 89.1% | 65.4 MiB | 401,964 | `__json_file_module_MOD_json_file_load`               | `./json_file_module.F90:842`  |
|  5.6% | 4.13 MiB |  12,744 | `__json_file_module_MOD_json_file_get_string`         | `./json_file_module.F90:1837` |
|  5.2% | 3.85 MiB |   4,560 | `(anonymous)`                                         | `<unknown>`                   |
| <0.1% | 11.3 KiB |      28 | `__json_file_module_MOD_initialize_json_core_in_file` | `./json_file_module.F90:504`  |
| <0.1% | 1.88 KiB |     919 | `_gfortran_string_trim`                               | `<unknown>`                   |

##### `__json_file_module_MOD_json_file_load` (`./json_file_module.F90:842`)

|      % |     Size | Objects | Callee                                    | Location                       |
| -----: | -------: | ------: | ----------------------------------------- | ------------------------------ |
| 100.0% | 67.4 MiB | 430,681 | `__json_value_module_MOD_json_parse_file` | `./json_value_module.F90:9714` |

##### `main` (`/out/profile.f90:6`)

|      % |     Size | Objects | Callee   | Location             |
| -----: | -------: | ------: | -------- | -------------------- |
| 100.0% | 66.4 MiB | 396,202 | `MAIN__` | `/out/profile.f90:5` |

##### `__libc_start_main` (`<unknown>`)

|      % |   Size | Objects | Callee        | Location    |
| -----: | -----: | ------: | ------------- | ----------- |
| 100.0% | 49 MiB | 339,140 | `(anonymous)` | `<unknown>` |

##### `_start` (`<unknown>`)

|      % |     Size | Objects | Callee              | Location    |
| -----: | -------: | ------: | ------------------- | ----------- |
| 100.0% | 46.7 MiB | 309,575 | `__libc_start_main` | `<unknown>` |

##### `__json_value_module_MOD_parse_string` (`./json_value_module.F90:11052`)

|     % |     Size | Objects | Callee                                        | Location                          |
| ----: | -------: | ------: | --------------------------------------------- | --------------------------------- |
|  2.4% |  1.1 MiB |   8,165 | `__json_string_utilities_MOD_unescape_string` | `./json_string_utilities.F90:483` |
| <0.1% | 4.31 KiB |      18 | `__json_value_module_MOD_pop_char.part.0`     | `./json_value_module.F90:11318`   |

##### `__json_value_module_MOD_parse_value` (`./json_value_module.F90:10117`)

|     % |     Size | Objects | Callee                                 | Location                        |
| ----: | -------: | ------: | -------------------------------------- | ------------------------------- |
| 90.0% | 16.6 MiB | 134,394 | `__json_value_module_MOD_parse_string` | `./json_value_module.F90:11052` |
|  0.2% | 41.7 KiB |  42,722 | `__json_value_module_MOD_to_string`    | `./json_value_module.F90:10755` |

##### `__json_value_module_MOD_json_get_string_by_path` (`./json_get_scalar_by_path.inc:9182`)

|     % |     Size | Objects | Callee                                         | Location                       |
| ----: | -------: | ------: | ---------------------------------------------- | ------------------------------ |
| 93.6% | 3.86 MiB |  10,008 | `__json_value_module_MOD_json_get_by_path`     | `./json_value_module.F90:6495` |
|  6.4% |  270 KiB |   1,800 | `__json_value_module_MOD_json_get_string`      | `./json_value_module.F90:9078` |
| <0.1% |    684 B |       9 | `__json_value_module_MOD_json_throw_exception` | `./json_value_module.F90:2003` |
| <0.1% |    162 B |       9 | `_gfortran_string_trim`                        | `<unknown>`                    |

##### `__json_file_module_MOD_json_file_get_string` (`./json_file_module.F90:1837`)

|      % |     Size | Objects | Callee                                            | Location                             |
| -----: | -------: | ------: | ------------------------------------------------- | ------------------------------------ |
| 100.0% | 4.13 MiB |  12,744 | `__json_value_module_MOD_json_get_string_by_path` | `./json_get_scalar_by_path.inc:9182` |

##### `__json_value_module_MOD_json_get_by_path_default` (`./json_value_module.F90:6787`)

|      % |     Size | Objects | Callee                                                  | Location                          |
| -----: | -------: | ------: | ------------------------------------------------------- | --------------------------------- |
| 100.0% | 3.86 MiB |   9,999 | `__json_string_utilities_MOD_string_to_integer`         | `./json_string_utilities.F90:116` |
|  <0.1% |    540 B |       9 | `__json_value_module_MOD_json_value_get_child_by_index` | `./json_value_module.F90:5439`    |

##### `__json_value_module_MOD_json_get_by_path` (`./json_value_module.F90:6495`)

|      % |     Size | Objects | Callee                                             | Location                       |
| -----: | -------: | ------: | -------------------------------------------------- | ------------------------------ |
| 100.0% | 3.86 MiB |  10,008 | `__json_value_module_MOD_json_get_by_path_default` | `./json_value_module.F90:6787` |

##### `_gfortran_st_open` (`<unknown>`)

|      % |     Size | Objects | Callee        | Location    |
| -----: | -------: | ------: | ------------- | ----------- |
| 100.0% | 1.25 MiB |      40 | `(anonymous)` | `<unknown>` |

## Hottest call stacks

Call stacks with the most bytes allocated in their leaf frame.

|     % |     Size | Objects | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ----: | -------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 24.8% | 58.6 MiB |  14,721 | `(anonymous)` ← `(anonymous)` ← `(anonymous)` ← `__json_string_utilities_MOD_string_to_integer` (`./json_string_utilities.F90:116`) ← `__json_value_module_MOD_string_to_int` (`./json_value_module.F90:8074`) ← `__json_value_module_MOD_parse_number` (11192) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882)                                                                   |
|  5.9% |   14 MiB | 165,952 | `__json_value_module_MOD_parse_string` (`./json_value_module.F90:11052`) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882)     |
|  5.8% | 13.7 MiB |   3,432 | `(anonymous)` ← `(anonymous)` ← `(anonymous)` ← `__json_string_utilities_MOD_string_to_integer` (`./json_string_utilities.F90:116`) ← `__json_value_module_MOD_string_to_int` (`./json_value_module.F90:8074`) ← `__json_value_module_MOD_parse_number` (11192) ← `__json_value_module_MOD_parse_array` (10987) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_array` (10987) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882)                                                                     |
|  3.2% | 7.48 MiB |   1,878 | `(anonymous)` ← `(anonymous)` ← `(anonymous)` ← `__json_string_utilities_MOD_string_to_integer` (`./json_string_utilities.F90:116`) ← `__json_value_module_MOD_string_to_int` (`./json_value_module.F90:8074`) ← `__json_value_module_MOD_parse_number` (11192) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_array` (10987) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_json_parse_file` (9714)                                                                  |
|  3.2% | 7.48 MiB |   1,878 | `(anonymous)` ← `(anonymous)` ← `(anonymous)` ← `__json_string_utilities_MOD_string_to_integer` (`./json_string_utilities.F90:116`) ← `__json_value_module_MOD_string_to_int` (`./json_value_module.F90:8074`) ← `__json_value_module_MOD_parse_number` (11192) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_array` (10987) ← `__json_value_module_MOD_parse_object` (10882)                                                                    |
|  3.2% | 7.48 MiB |   1,878 | `(anonymous)` ← `(anonymous)` ← `(anonymous)` ← `__json_string_utilities_MOD_string_to_integer` (`./json_string_utilities.F90:116`) ← `__json_value_module_MOD_string_to_int` (`./json_value_module.F90:8074`) ← `__json_value_module_MOD_parse_number` (11192) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_array` (10987)                                                                    |
|  3.2% | 7.48 MiB |   1,878 | `(anonymous)` ← `(anonymous)` ← `(anonymous)` ← `__json_string_utilities_MOD_string_to_integer` (`./json_string_utilities.F90:116`) ← `__json_value_module_MOD_string_to_int` (`./json_value_module.F90:8074`) ← `__json_value_module_MOD_parse_number` (11192) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_array` (10987) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_json_parse_file` (9714) ← `__json_file_module_MOD_json_file_load` (`./json_file_module.F90:842`) ← `MAIN__` (`/out/profile.f90:5`) ← `main` (6) ← `(anonymous)` ← `__libc_start_main` ← `_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  3.2% | 7.48 MiB |   1,878 | `(anonymous)` ← `(anonymous)` ← `(anonymous)` ← `__json_string_utilities_MOD_string_to_integer` (`./json_string_utilities.F90:116`) ← `__json_value_module_MOD_string_to_int` (`./json_value_module.F90:8074`) ← `__json_value_module_MOD_parse_number` (11192) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_array` (10987) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_json_parse_file` (9714) ← `__json_file_module_MOD_json_file_load` (`./json_file_module.F90:842`) ← `MAIN__` (`/out/profile.f90:5`) ← `main` (6) ← `(anonymous)` ← `__libc_start_main` ← `_start`                                                                                                                                                                                                                                                                                                                                                  |
|  3.2% | 7.47 MiB |   1,876 | `(anonymous)` ← `(anonymous)` ← `(anonymous)` ← `__json_string_utilities_MOD_string_to_integer` (`./json_string_utilities.F90:116`) ← `__json_value_module_MOD_string_to_int` (`./json_value_module.F90:8074`) ← `__json_value_module_MOD_parse_number` (11192) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_array` (10987) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_json_parse_file` (9714) ← `__json_file_module_MOD_json_file_load` (`./json_file_module.F90:842`) ← `MAIN__` (`/out/profile.f90:5`) ← `main` (6) ← `(anonymous)`                                                                                                                              |
|  2.9% | 6.88 MiB |  64,204 | `__json_value_module_MOD_parse_string` (`./json_value_module.F90:11052`) ← `__json_value_module_MOD_parse_value` (10117) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882)      |
|  2.9% | 6.83 MiB |   1,716 | `(anonymous)` ← `(anonymous)` ← `(anonymous)` ← `__json_string_utilities_MOD_string_to_integer` (`./json_string_utilities.F90:116`) ← `__json_value_module_MOD_string_to_int` (`./json_value_module.F90:8074`) ← `__json_value_module_MOD_parse_number` (11192) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_array` (10987) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882)                                                                    |
|  2.8% |  6.5 MiB |  60,816 | `__json_value_module_MOD_json_value_create` (`./json_value_module.F90:2204`) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) |
|  2.3% | 5.47 MiB |   1,374 | `(anonymous)` ← `(anonymous)` ← `(anonymous)` ← `__json_string_utilities_MOD_string_to_integer` (`./json_string_utilities.F90:116`) ← `__json_value_module_MOD_string_to_int` (`./json_value_module.F90:8074`) ← `__json_value_module_MOD_parse_number` (11192) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_array` (10987) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_json_parse_file` (9714) ← `__json_file_module_MOD_json_file_load` (`./json_file_module.F90:842`) ← `MAIN__` (`/out/profile.f90:5`)                                                         |
|  2.3% | 5.46 MiB |   1,372 | `(anonymous)` ← `(anonymous)` ← `(anonymous)` ← `__json_string_utilities_MOD_string_to_integer` (`./json_string_utilities.F90:116`) ← `__json_value_module_MOD_string_to_int` (`./json_value_module.F90:8074`) ← `__json_value_module_MOD_parse_number` (11192) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_array` (10987) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_json_parse_file` (9714) ← `__json_file_module_MOD_json_file_load` (`./json_file_module.F90:842`) ← `MAIN__` (`/out/profile.f90:5`) ← `main` (6)                                                                                             |
|  2.0% | 4.76 MiB |   1,194 | `(anonymous)` ← `(anonymous)` ← `(anonymous)` ← `__json_string_utilities_MOD_string_to_integer` (`./json_string_utilities.F90:116`) ← `__json_value_module_MOD_string_to_int` (`./json_value_module.F90:8074`) ← `__json_value_module_MOD_parse_number` (11192) ← `__json_value_module_MOD_parse_array` (10987) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_array` (10987) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882)                                                                     |
|  1.5% | 3.62 MiB |     909 | `(anonymous)` ← `(anonymous)` ← `(anonymous)` ← `MAIN__` (`/out/profile.f90:5`) ← `main` (6) ← `(anonymous)` ← `__libc_start_main` ← `_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  1.5% | 3.62 MiB |     909 | `(anonymous)` ← `(anonymous)` ← `(anonymous)` ← `__json_string_utilities_MOD_string_to_integer` (`./json_string_utilities.F90:116`) ← `__json_value_module_MOD_json_get_by_path_default` (`./json_value_module.F90:6787`) ← `__json_value_module_MOD_json_get_by_path` (6495) ← `__json_value_module_MOD_json_get_string_by_path` (`./json_get_scalar_by_path.inc:9182`) ← `__json_file_module_MOD_json_file_get_string` (`./json_file_module.F90:1837`) ← `MAIN__` (`/out/profile.f90:5`) ← `main` (6) ← `(anonymous)` ← `__libc_start_main` ← `_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  0.9% | 2.17 MiB |  28,988 | `(anonymous)` ← `(anonymous)` ← `(anonymous)` ← `(anonymous)` ← `__json_string_utilities_MOD_string_to_integer` (`./json_string_utilities.F90:116`) ← `__json_value_module_MOD_string_to_int` (`./json_value_module.F90:8074`) ← `__json_value_module_MOD_parse_number` (11192) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882)                                                                                                    |
|  0.8% | 1.81 MiB |   4,923 | `__json_value_module_MOD_parse_string` (`./json_value_module.F90:11052`) ← `__json_value_module_MOD_parse_value` (10117) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_array` (10987) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_json_parse_file` (9714) ← `__json_file_module_MOD_json_file_load` (`./json_file_module.F90:842`) ← `MAIN__` (`/out/profile.f90:5`) ← `main` (6) ← `(anonymous)` ← `__libc_start_main` ← `_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  0.7% | 1.75 MiB |  19,135 | `(anonymous)` ← `(anonymous)` ← `(anonymous)` ← `(anonymous)` ← `(anonymous)` ← `__json_string_utilities_MOD_string_to_integer` (`./json_string_utilities.F90:116`) ← `__json_value_module_MOD_string_to_int` (`./json_value_module.F90:8074`) ← `__json_value_module_MOD_parse_number` (11192) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882)                                                                                                                                     |

# Retained heap profile

Retained 894 KiB over 14,825 objects (61.8 B per object).

| Category |     % |    Size | Objects |
| -------- | ----: | ------: | ------: |
| Ours     | 85.5% | 765 KiB |  14,818 |
| Unknown  | 14.5% | 130 KiB |       6 |
| Native   | <0.1% |    18 B |       1 |

Paths starting with `./` or `../` are relative to `/src/json-fortran/src/`.

## Call tree

Call paths to the hottest functions.

```
├── 418 KiB (46.7%) __json_value_module_MOD_parse_object  (self 4.5%; 7.2% in 72 call stacks)  ./json_value_module.F90:10882
│   ├── 321 KiB (35.9%) [[via 2–30 frames]] __json_value_module_MOD_json_value_create  (68.3% self in 86 call stacks)  ./json_value_module.F90:2204
│   ├── 34.1 KiB (3.8%) [[via 2–30 frames]] __json_value_module_MOD_parse_value  (self 3.8%; 8.7% in 51 call stacks)  ./json_value_module.F90:10117
│   ├── 16.3 KiB (1.8%) [[via 3–29 frames]] __json_value_module_MOD_parse_array  ./json_value_module.F90:10987
│   │   └── 15.3 KiB (1.7%) __json_value_module_MOD_json_value_create  :2204
│   ├── 3.4 KiB (0.4%) [[via 30 frames]] __json_value_module_MOD_to_logical  ./json_value_module.F90:10659
│   └── 2.8 KiB (0.3%) [[via 2–29 frames]] __json_value_module_MOD_parse_number  ./json_value_module.F90:11192
│       └── 2.8 KiB (0.3%) __json_value_module_MOD_to_integer  :10690
├── 350 KiB (39.1%) [[via 2 frames]] (anonymous)  (self 14.5%)
│   └── 220 KiB (24.6%) [[via 3 frames]] __json_value_module_MOD_json_parse_file  ./json_value_module.F90:9714
│       └── 220 KiB (24.6%) __json_value_module_MOD_parse_object  (self 1.9%)  :10882
│           ├── 169 KiB (18.9%) [[via 2–23 frames]] __json_value_module_MOD_json_value_create  ./json_value_module.F90:2204
│           ├── 27.3 KiB (3.1%) [[via 3–23 frames]] __json_value_module_MOD_parse_value  (self 3.0%)  ./json_value_module.F90:10117
│           └── 4.27 KiB (0.5%) __json_value_module_MOD_parse_array  :10987
├── 32.6 KiB (3.6%) [[via 6 frames]] __json_value_module_MOD_parse_object  ./json_value_module.F90:10882
│   ├── 20.7 KiB (2.3%) [[via 2–24 frames]] __json_value_module_MOD_json_value_create  ./json_value_module.F90:2204
│   └── 10.5 KiB (1.2%) [[via 2–24 frames]] __json_value_module_MOD_parse_value  ./json_value_module.F90:10117
├── 16.5 KiB (1.8%) [[via 3 frames]] __json_value_module_MOD_parse_object  ./json_value_module.F90:10882
│   ├── 9.08 KiB (1.0%) [[via 2–27 frames]] __json_value_module_MOD_json_value_create  ./json_value_module.F90:2204
│   └── 3.95 KiB (0.4%) [[via 3–26 frames]] __json_value_module_MOD_parse_array  ./json_value_module.F90:10987
├── 15.6 KiB (1.7%) [[via 8–31 frames]] __json_value_module_MOD_json_value_create  ./json_value_module.F90:2204
├── 13.9 KiB (1.6%) __json_value_module_MOD_parse_array  ./json_value_module.F90:10987
│   ├── 8.14 KiB (0.9%) __json_value_module_MOD_parse_object  :10882
│   │   └── 7.55 KiB (0.8%) [[via 29 frames]] __json_value_module_MOD_json_value_create  ./json_value_module.F90:2204
│   └── 5.06 KiB (0.6%) [[via 25–27 frames]] __json_value_module_MOD_parse_object  ./json_value_module.F90:10882
│       └── 4.27 KiB (0.5%) [[via 2–4 frames]] __json_value_module_MOD_json_value_create  ./json_value_module.F90:2204
├── 12.6 KiB (1.4%) [[via 4–31 frames]] __json_value_module_MOD_json_value_create  ./json_value_module.F90:2204
├── 12.3 KiB (1.4%) [[via 5–31 frames]] __json_value_module_MOD_json_value_create  ./json_value_module.F90:2204
└── 11.9 KiB (1.3%) [[via 7–31 frames]] __json_value_module_MOD_json_value_create  ./json_value_module.F90:2204
```

## Hottest functions

### Self size

Functions with the most bytes retained within the function body, excluding callees.

|     % |     Size | Objects | Function                                          | Location                             |
| ----: | -------: | ------: | ------------------------------------------------- | ------------------------------------ |
| 68.3% |  611 KiB |   5,584 | `__json_value_module_MOD_json_value_create`       | `./json_value_module.F90:2204`       |
| 14.5% |  130 KiB |       6 | `(anonymous)`                                     | `<unknown>`                          |
|  8.7% | 77.5 KiB |   1,865 | `__json_value_module_MOD_parse_value`             | `./json_value_module.F90:10117`      |
|  7.2% | 64.8 KiB |   5,342 | `__json_value_module_MOD_parse_object`            | `./json_value_module.F90:10882`      |
|  0.8% |  6.8 KiB |     871 | `__json_value_module_MOD_to_integer`              | `./json_value_module.F90:10690`      |
|  0.5% | 4.29 KiB |   1,098 | `__json_value_module_MOD_to_logical`              | `./json_value_module.F90:10659`      |
| <0.1% |    269 B |       2 | `__json_value_module_MOD_json_initialize`         | `./json_value_module.F90:1016`       |
| <0.1% |    256 B |       1 | `__json_value_module_MOD_parse_string`            | `./json_value_module.F90:11052`      |
| <0.1% |     52 B |      52 | `__json_value_module_MOD_to_string`               | `./json_value_module.F90:10755`      |
| <0.1% |     18 B |       1 | `strndup`                                         | `<unknown>`                          |
| <0.1% |     17 B |       1 | `__json_value_module_MOD_json_parse_file`         | `./json_value_module.F90:9714`       |
| <0.1% |      3 B |       1 | `__json_value_module_MOD_json_prepare_parser`     | `./json_value_module.F90:9671`       |
| <0.1% |      1 B |       1 | `__json_value_module_MOD_json_get_string_by_path` | `./json_get_scalar_by_path.inc:9182` |

#### Categories

Categories accounting for at least 1.0% of self size.

##### Ours

|     % |     Size | Objects | Function                                          | Location                             |
| ----: | -------: | ------: | ------------------------------------------------- | ------------------------------------ |
| 68.3% |  611 KiB |   5,584 | `__json_value_module_MOD_json_value_create`       | `./json_value_module.F90:2204`       |
|  8.7% | 77.5 KiB |   1,865 | `__json_value_module_MOD_parse_value`             | `./json_value_module.F90:10117`      |
|  7.2% | 64.8 KiB |   5,342 | `__json_value_module_MOD_parse_object`            | `./json_value_module.F90:10882`      |
|  0.8% |  6.8 KiB |     871 | `__json_value_module_MOD_to_integer`              | `./json_value_module.F90:10690`      |
|  0.5% | 4.29 KiB |   1,098 | `__json_value_module_MOD_to_logical`              | `./json_value_module.F90:10659`      |
| <0.1% |    269 B |       2 | `__json_value_module_MOD_json_initialize`         | `./json_value_module.F90:1016`       |
| <0.1% |    256 B |       1 | `__json_value_module_MOD_parse_string`            | `./json_value_module.F90:11052`      |
| <0.1% |     52 B |      52 | `__json_value_module_MOD_to_string`               | `./json_value_module.F90:10755`      |
| <0.1% |     17 B |       1 | `__json_value_module_MOD_json_parse_file`         | `./json_value_module.F90:9714`       |
| <0.1% |      3 B |       1 | `__json_value_module_MOD_json_prepare_parser`     | `./json_value_module.F90:9671`       |
| <0.1% |      1 B |       1 | `__json_value_module_MOD_json_get_string_by_path` | `./json_get_scalar_by_path.inc:9182` |

##### Unknown

|     % |    Size | Objects | Function      | Location    |
| ----: | ------: | ------: | ------------- | ----------- |
| 14.5% | 130 KiB |       6 | `(anonymous)` | `<unknown>` |

#### Lines

Lines with the largest contribution to each function's self size.

##### `__json_value_module_MOD_json_value_create` (`./json_value_module.F90:2204`)

|      % |    Size | Objects | Location                       |
| -----: | ------: | ------: | ------------------------------ |
| 100.0% | 611 KiB |   5,584 | `./json_value_module.F90:2211` |

##### `__json_value_module_MOD_parse_value` (`./json_value_module.F90:10117`)

|      % |     Size | Objects | Location                        |
| -----: | -------: | ------: | ------------------------------- |
| 100.0% | 77.5 KiB |   1,865 | `./json_value_module.F90:10185` |

##### `__json_value_module_MOD_parse_object` (`./json_value_module.F90:10882`)

|      % |     Size | Objects | Location                        |
| -----: | -------: | ------: | ------------------------------- |
| 100.0% | 64.8 KiB |   5,342 | `./json_value_module.F90:10922` |

##### `__json_value_module_MOD_to_integer` (`./json_value_module.F90:10690`)

|      % |    Size | Objects | Location                        |
| -----: | ------: | ------: | ------------------------------- |
| 100.0% | 6.8 KiB |     871 | `./json_value_module.F90:10703` |

##### `__json_value_module_MOD_to_logical` (`./json_value_module.F90:10659`)

|      % |     Size | Objects | Location                        |
| -----: | -------: | ------: | ------------------------------- |
| 100.0% | 4.29 KiB |   1,098 | `./json_value_module.F90:10672` |

##### `__json_value_module_MOD_json_initialize` (`./json_value_module.F90:1016`)

|     % |  Size | Objects | Location                       |
| ----: | ----: | ------: | ------------------------------ |
| 95.2% | 256 B |       1 | `./json_value_module.F90:1048` |
|  4.8% |  13 B |       1 | `./json_value_module.F90:1196` |

##### `__json_value_module_MOD_parse_string` (`./json_value_module.F90:11052`)

|      % |  Size | Objects | Location                        |
| -----: | ----: | ------: | ------------------------------- |
| 100.0% | 256 B |       1 | `./json_value_module.F90:11073` |

##### `__json_value_module_MOD_to_string` (`./json_value_module.F90:10755`)

|      % | Size | Objects | Location                        |
| -----: | ---: | ------: | ------------------------------- |
| 100.0% | 52 B |      52 | `./json_value_module.F90:10800` |

##### `__json_value_module_MOD_json_parse_file` (`./json_value_module.F90:9714`)

|      % | Size | Objects | Location                       |
| -----: | ---: | ------: | ------------------------------ |
| 100.0% | 17 B |       1 | `./json_value_module.F90:9786` |

##### `__json_value_module_MOD_json_prepare_parser` (`./json_value_module.F90:9671`)

|      % | Size | Objects | Location                       |
| -----: | ---: | ------: | ------------------------------ |
| 100.0% |  3 B |       1 | `./json_value_module.F90:9680` |

##### `__json_value_module_MOD_json_get_string_by_path` (`./json_get_scalar_by_path.inc:9182`)

|      % | Size | Objects | Location                          |
| -----: | ---: | ------: | --------------------------------- |
| 100.0% |  1 B |       1 | `./json_get_scalar_by_path.inc:6` |

#### Callers

Callers with the largest contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `__json_value_module_MOD_json_value_create` (`./json_value_module.F90:2204`)

|     % |     Size | Objects | Caller                                    | Location                        |
| ----: | -------: | ------: | ----------------------------------------- | ------------------------------- |
| 95.7% |  584 KiB |   5,343 | `__json_value_module_MOD_parse_object`    | `./json_value_module.F90:10882` |
|  4.3% | 26.3 KiB |     240 | `__json_value_module_MOD_parse_array`     | `./json_value_module.F90:10987` |
| <0.1% |    112 B |       1 | `__json_value_module_MOD_json_parse_file` | `./json_value_module.F90:9714`  |

##### `(anonymous)` (`<unknown>`)

|      % |    Size | Objects | Caller                  | Location    |
| -----: | ------: | ------: | ----------------------- | ----------- |
| 100.0% | 130 KiB |       5 | `(anonymous)`           | `<unknown>` |
|  <0.1% |    17 B |       1 | `_gfortran_string_trim` | `<unknown>` |

##### `__json_value_module_MOD_parse_value` (`./json_value_module.F90:10117`)

|      % |     Size | Objects | Caller                                 | Location                        |
| -----: | -------: | ------: | -------------------------------------- | ------------------------------- |
| 100.0% | 77.5 KiB |   1,865 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90:10882` |

##### `__json_value_module_MOD_parse_object` (`./json_value_module.F90:10882`)

|     % |   Size | Objects | Caller                                    | Location                        |
| ----: | -----: | ------: | ----------------------------------------- | ------------------------------- |
| 98.7% | 64 KiB |   5,235 | `__json_value_module_MOD_parse_object`    | `./json_value_module.F90:10882` |
|  1.2% |  824 B |     106 | `__json_value_module_MOD_parse_array`     | `./json_value_module.F90:10987` |
| <0.1% |    8 B |       1 | `__json_value_module_MOD_json_parse_file` | `./json_value_module.F90:9714`  |

##### `__json_value_module_MOD_to_integer` (`./json_value_module.F90:10690`)

|      % |    Size | Objects | Caller                                 | Location                        |
| -----: | ------: | ------: | -------------------------------------- | ------------------------------- |
| 100.0% | 6.8 KiB |     871 | `__json_value_module_MOD_parse_number` | `./json_value_module.F90:11192` |

##### `__json_value_module_MOD_to_logical` (`./json_value_module.F90:10659`)

|      % |     Size | Objects | Caller                                 | Location                        |
| -----: | -------: | ------: | -------------------------------------- | ------------------------------- |
| 100.0% | 4.29 KiB |   1,098 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90:10882` |

##### `__json_value_module_MOD_json_initialize` (`./json_value_module.F90:1016`)

|      % |  Size | Objects | Caller                                                | Location                     |
| -----: | ----: | ------: | ----------------------------------------------------- | ---------------------------- |
| 100.0% | 269 B |       2 | `__json_file_module_MOD_initialize_json_core_in_file` | `./json_file_module.F90:504` |

##### `__json_value_module_MOD_parse_string` (`./json_value_module.F90:11052`)

|      % |  Size | Objects | Caller                                 | Location                        |
| -----: | ----: | ------: | -------------------------------------- | ------------------------------- |
| 100.0% | 256 B |       1 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90:10882` |

##### `__json_value_module_MOD_to_string` (`./json_value_module.F90:10755`)

|      % | Size | Objects | Caller                                | Location                        |
| -----: | ---: | ------: | ------------------------------------- | ------------------------------- |
| 100.0% | 52 B |      52 | `__json_value_module_MOD_parse_value` | `./json_value_module.F90:10117` |

##### `strndup` (`<unknown>`)

|      % | Size | Objects | Caller        | Location    |
| -----: | ---: | ------: | ------------- | ----------- |
| 100.0% | 18 B |       1 | `(anonymous)` | `<unknown>` |

##### `__json_value_module_MOD_json_parse_file` (`./json_value_module.F90:9714`)

|      % | Size | Objects | Caller                                  | Location                     |
| -----: | ---: | ------: | --------------------------------------- | ---------------------------- |
| 100.0% | 17 B |       1 | `__json_file_module_MOD_json_file_load` | `./json_file_module.F90:842` |

##### `__json_value_module_MOD_json_prepare_parser` (`./json_value_module.F90:9671`)

|      % | Size | Objects | Caller                                    | Location                       |
| -----: | ---: | ------: | ----------------------------------------- | ------------------------------ |
| 100.0% |  3 B |       1 | `__json_value_module_MOD_json_parse_file` | `./json_value_module.F90:9714` |

##### `__json_value_module_MOD_json_get_string_by_path` (`./json_get_scalar_by_path.inc:9182`)

|      % | Size | Objects | Caller                                        | Location                      |
| -----: | ---: | ------: | --------------------------------------------- | ----------------------------- |
| 100.0% |  1 B |       1 | `__json_file_module_MOD_json_file_get_string` | `./json_file_module.F90:1837` |

### Total size

Functions with the most bytes retained within the function and its callees.

|     % |     Size | Objects | Function                                              | Location                          |
| ----: | -------: | ------: | ----------------------------------------------------- | --------------------------------- |
| 85.5% |  765 KiB |  14,813 | `__json_value_module_MOD_parse_object`                | `./json_value_module.F90:10882`   |
| 68.3% |  611 KiB |   5,584 | `__json_value_module_MOD_json_value_create`           | `./json_value_module.F90:2204`    |
| 51.6% |  462 KiB |   6,153 | `__json_value_module_MOD_json_parse_file`             | `./json_value_module.F90:9714`    |
| 50.0% |  447 KiB |   5,853 | `__json_file_module_MOD_json_file_load`               | `./json_file_module.F90:842`      |
| 48.5% |  433 KiB |   5,580 | `MAIN__`                                              | `/out/profile.f90:5`              |
| 46.6% |  417 KiB |   5,258 | `main`                                                | `/out/profile.f90:6`              |
| 45.6% |  408 KiB |   7,612 | `__json_value_module_MOD_parse_array`                 | `./json_value_module.F90:10987`   |
| 45.0% |  402 KiB |   4,979 | `(anonymous)`                                         | `<unknown>`                       |
| 42.8% |  382 KiB |   4,623 | `__libc_start_main`                                   | `<unknown>`                       |
| 39.1% |  350 KiB |   4,220 | `_start`                                              | `<unknown>`                       |
| 14.3% |  128 KiB |       3 | `_gfortran_st_open`                                   | `<unknown>`                       |
|  8.7% | 77.5 KiB |   1,917 | `__json_value_module_MOD_parse_value`                 | `./json_value_module.F90:10117`   |
|  0.8% | 7.55 KiB |     872 | `__json_value_module_MOD_parse_number`                | `./json_value_module.F90:11192`   |
|  0.8% |  6.8 KiB |     871 | `__json_value_module_MOD_to_integer`                  | `./json_value_module.F90:10690`   |
|  0.5% | 4.29 KiB |   1,098 | `__json_value_module_MOD_to_logical`                  | `./json_value_module.F90:10659`   |
|  0.1% |    760 B |       1 | `__json_string_utilities_MOD_string_to_integer`       | `./json_string_utilities.F90:116` |
|  0.1% |    760 B |       1 | `__json_value_module_MOD_string_to_int`               | `./json_value_module.F90:8074`    |
| <0.1% |    269 B |       2 | `__json_value_module_MOD_json_initialize`             | `./json_value_module.F90:1016`    |
| <0.1% |    269 B |       2 | `__json_file_module_MOD_initialize_json_core_in_file` | `./json_file_module.F90:504`      |
| <0.1% |    256 B |       1 | `__json_value_module_MOD_parse_string`                | `./json_value_module.F90:11052`   |

#### Categories

Categories accounting for at least 1.0% of self size.

##### Ours

|     % |     Size | Objects | Function                                              | Location                             |
| ----: | -------: | ------: | ----------------------------------------------------- | ------------------------------------ |
| 85.5% |  765 KiB |  14,813 | `__json_value_module_MOD_parse_object`                | `./json_value_module.F90:10882`      |
| 68.3% |  611 KiB |   5,584 | `__json_value_module_MOD_json_value_create`           | `./json_value_module.F90:2204`       |
| 51.6% |  462 KiB |   6,153 | `__json_value_module_MOD_json_parse_file`             | `./json_value_module.F90:9714`       |
| 50.0% |  447 KiB |   5,853 | `__json_file_module_MOD_json_file_load`               | `./json_file_module.F90:842`         |
| 48.5% |  433 KiB |   5,580 | `MAIN__`                                              | `/out/profile.f90:5`                 |
| 46.6% |  417 KiB |   5,258 | `main`                                                | `/out/profile.f90:6`                 |
| 45.6% |  408 KiB |   7,612 | `__json_value_module_MOD_parse_array`                 | `./json_value_module.F90:10987`      |
|  8.7% | 77.5 KiB |   1,917 | `__json_value_module_MOD_parse_value`                 | `./json_value_module.F90:10117`      |
|  0.8% | 7.55 KiB |     872 | `__json_value_module_MOD_parse_number`                | `./json_value_module.F90:11192`      |
|  0.8% |  6.8 KiB |     871 | `__json_value_module_MOD_to_integer`                  | `./json_value_module.F90:10690`      |
|  0.5% | 4.29 KiB |   1,098 | `__json_value_module_MOD_to_logical`                  | `./json_value_module.F90:10659`      |
|  0.1% |    760 B |       1 | `__json_string_utilities_MOD_string_to_integer`       | `./json_string_utilities.F90:116`    |
|  0.1% |    760 B |       1 | `__json_value_module_MOD_string_to_int`               | `./json_value_module.F90:8074`       |
| <0.1% |    269 B |       2 | `__json_value_module_MOD_json_initialize`             | `./json_value_module.F90:1016`       |
| <0.1% |    269 B |       2 | `__json_file_module_MOD_initialize_json_core_in_file` | `./json_file_module.F90:504`         |
| <0.1% |    256 B |       1 | `__json_value_module_MOD_parse_string`                | `./json_value_module.F90:11052`      |
| <0.1% |     52 B |      52 | `__json_value_module_MOD_to_string`                   | `./json_value_module.F90:10755`      |
| <0.1% |      3 B |       1 | `__json_value_module_MOD_json_prepare_parser`         | `./json_value_module.F90:9671`       |
| <0.1% |      1 B |       1 | `__json_value_module_MOD_json_get_string_by_path`     | `./json_get_scalar_by_path.inc:9182` |
| <0.1% |      1 B |       1 | `__json_file_module_MOD_json_file_get_string`         | `./json_file_module.F90:1837`        |

##### Unknown

|     % |    Size | Objects | Function      | Location    |
| ----: | ------: | ------: | ------------- | ----------- |
| 45.0% | 402 KiB |   4,979 | `(anonymous)` | `<unknown>` |

#### Callers

Callers with the largest contribution to each function's total size. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `__json_value_module_MOD_parse_object` (`./json_value_module.F90:10882`)

|     % |    Size | Objects | Caller                                    | Location                        |
| ----: | ------: | ------: | ----------------------------------------- | ------------------------------- |
| 98.8% | 756 KiB |  14,694 | `__json_value_module_MOD_parse_object`    | `./json_value_module.F90:10882` |
| 52.5% | 402 KiB |   7,555 | `__json_value_module_MOD_parse_array`     | `./json_value_module.F90:10987` |
| 43.6% | 333 KiB |   6,147 | `__json_value_module_MOD_json_parse_file` | `./json_value_module.F90:9714`  |

##### `__json_value_module_MOD_json_value_create` (`./json_value_module.F90:2204`)

|     % |     Size | Objects | Caller                                    | Location                        |
| ----: | -------: | ------: | ----------------------------------------- | ------------------------------- |
| 95.7% |  584 KiB |   5,343 | `__json_value_module_MOD_parse_object`    | `./json_value_module.F90:10882` |
|  4.3% | 26.3 KiB |     240 | `__json_value_module_MOD_parse_array`     | `./json_value_module.F90:10987` |
| <0.1% |    112 B |       1 | `__json_value_module_MOD_json_parse_file` | `./json_value_module.F90:9714`  |

##### `__json_value_module_MOD_json_parse_file` (`./json_value_module.F90:9714`)

|     % |    Size | Objects | Caller                                  | Location                     |
| ----: | ------: | ------: | --------------------------------------- | ---------------------------- |
| 96.8% | 447 KiB |   5,853 | `__json_file_module_MOD_json_file_load` | `./json_file_module.F90:842` |

##### `__json_file_module_MOD_json_file_load` (`./json_file_module.F90:842`)

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

##### `__json_value_module_MOD_parse_array` (`./json_value_module.F90:10987`)

|     % |    Size | Objects | Caller                                 | Location                        |
| ----: | ------: | ------: | -------------------------------------- | ------------------------------- |
| 98.0% | 400 KiB |   7,433 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90:10882` |

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
| 100.0% | 128 KiB |       3 | `__json_value_module_MOD_json_parse_file` | `./json_value_module.F90:9714` |

##### `__json_value_module_MOD_parse_value` (`./json_value_module.F90:10117`)

|      % |     Size | Objects | Caller                                 | Location                        |
| -----: | -------: | ------: | -------------------------------------- | ------------------------------- |
| 100.0% | 77.5 KiB |   1,917 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90:10882` |

##### `__json_value_module_MOD_parse_number` (`./json_value_module.F90:11192`)

|     % |     Size | Objects | Caller                                 | Location                        |
| ----: | -------: | ------: | -------------------------------------- | ------------------------------- |
| 86.1% |  6.5 KiB |     738 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90:10882` |
| 13.9% | 1.05 KiB |     134 | `__json_value_module_MOD_parse_array`  | `./json_value_module.F90:10987` |

##### `__json_value_module_MOD_to_integer` (`./json_value_module.F90:10690`)

|      % |    Size | Objects | Caller                                 | Location                        |
| -----: | ------: | ------: | -------------------------------------- | ------------------------------- |
| 100.0% | 6.8 KiB |     871 | `__json_value_module_MOD_parse_number` | `./json_value_module.F90:11192` |

##### `__json_value_module_MOD_to_logical` (`./json_value_module.F90:10659`)

|      % |     Size | Objects | Caller                                 | Location                        |
| -----: | -------: | ------: | -------------------------------------- | ------------------------------- |
| 100.0% | 4.29 KiB |   1,098 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90:10882` |

##### `__json_string_utilities_MOD_string_to_integer` (`./json_string_utilities.F90:116`)

|      % |  Size | Objects | Caller                                  | Location                       |
| -----: | ----: | ------: | --------------------------------------- | ------------------------------ |
| 100.0% | 760 B |       1 | `__json_value_module_MOD_string_to_int` | `./json_value_module.F90:8074` |

##### `__json_value_module_MOD_string_to_int` (`./json_value_module.F90:8074`)

|      % |  Size | Objects | Caller                                 | Location                        |
| -----: | ----: | ------: | -------------------------------------- | ------------------------------- |
| 100.0% | 760 B |       1 | `__json_value_module_MOD_parse_number` | `./json_value_module.F90:11192` |

##### `__json_value_module_MOD_json_initialize` (`./json_value_module.F90:1016`)

|      % |  Size | Objects | Caller                                                | Location                     |
| -----: | ----: | ------: | ----------------------------------------------------- | ---------------------------- |
| 100.0% | 269 B |       2 | `__json_file_module_MOD_initialize_json_core_in_file` | `./json_file_module.F90:504` |

##### `__json_file_module_MOD_initialize_json_core_in_file` (`./json_file_module.F90:504`)

|      % |  Size | Objects | Caller   | Location             |
| -----: | ----: | ------: | -------- | -------------------- |
| 100.0% | 269 B |       2 | `MAIN__` | `/out/profile.f90:5` |

##### `__json_value_module_MOD_parse_string` (`./json_value_module.F90:11052`)

|      % |  Size | Objects | Caller                                 | Location                        |
| -----: | ----: | ------: | -------------------------------------- | ------------------------------- |
| 100.0% | 256 B |       1 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90:10882` |

##### `__json_value_module_MOD_to_string` (`./json_value_module.F90:10755`)

|      % | Size | Objects | Caller                                | Location                        |
| -----: | ---: | ------: | ------------------------------------- | ------------------------------- |
| 100.0% | 52 B |      52 | `__json_value_module_MOD_parse_value` | `./json_value_module.F90:10117` |

##### `__json_value_module_MOD_json_prepare_parser` (`./json_value_module.F90:9671`)

|      % | Size | Objects | Caller                                    | Location                       |
| -----: | ---: | ------: | ----------------------------------------- | ------------------------------ |
| 100.0% |  3 B |       1 | `__json_value_module_MOD_json_parse_file` | `./json_value_module.F90:9714` |

##### `__json_value_module_MOD_json_get_string_by_path` (`./json_get_scalar_by_path.inc:9182`)

|      % | Size | Objects | Caller                                        | Location                      |
| -----: | ---: | ------: | --------------------------------------------- | ----------------------------- |
| 100.0% |  1 B |       1 | `__json_file_module_MOD_json_file_get_string` | `./json_file_module.F90:1837` |

##### `__json_file_module_MOD_json_file_get_string` (`./json_file_module.F90:1837`)

|      % | Size | Objects | Caller   | Location             |
| -----: | ---: | ------: | -------- | -------------------- |
| 100.0% |  1 B |       1 | `MAIN__` | `/out/profile.f90:5` |

#### Callees

Callees with the largest contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `__json_value_module_MOD_parse_object` (`./json_value_module.F90:10882`)

|     % |     Size | Objects | Callee                                      | Location                        |
| ----: | -------: | ------: | ------------------------------------------- | ------------------------------- |
| 98.8% |  756 KiB |  14,694 | `__json_value_module_MOD_parse_object`      | `./json_value_module.F90:10882` |
| 76.4% |  584 KiB |   5,343 | `__json_value_module_MOD_json_value_create` | `./json_value_module.F90:2204`  |
| 52.3% |  400 KiB |   7,433 | `__json_value_module_MOD_parse_array`       | `./json_value_module.F90:10987` |
| 10.1% | 77.5 KiB |   1,917 | `__json_value_module_MOD_parse_value`       | `./json_value_module.F90:10117` |
|  0.8% |  6.5 KiB |     738 | `__json_value_module_MOD_parse_number`      | `./json_value_module.F90:11192` |

##### `__json_value_module_MOD_json_parse_file` (`./json_value_module.F90:9714`)

|     % |    Size | Objects | Callee                                        | Location                        |
| ----: | ------: | ------: | --------------------------------------------- | ------------------------------- |
| 72.2% | 333 KiB |   6,147 | `__json_value_module_MOD_parse_object`        | `./json_value_module.F90:10882` |
| 27.8% | 128 KiB |       3 | `_gfortran_st_open`                           | `<unknown>`                     |
| <0.1% |   112 B |       1 | `__json_value_module_MOD_json_value_create`   | `./json_value_module.F90:2204`  |
| <0.1% |     3 B |       1 | `__json_value_module_MOD_json_prepare_parser` | `./json_value_module.F90:9671`  |

##### `__json_file_module_MOD_json_file_load` (`./json_file_module.F90:842`)

|      % |    Size | Objects | Callee                                    | Location                       |
| -----: | ------: | ------: | ----------------------------------------- | ------------------------------ |
| 100.0% | 447 KiB |   5,853 | `__json_value_module_MOD_json_parse_file` | `./json_value_module.F90:9714` |

##### `MAIN__` (`/out/profile.f90:5`)

|     % |    Size | Objects | Callee                                                | Location                      |
| ----: | ------: | ------: | ----------------------------------------------------- | ----------------------------- |
| 99.8% | 432 KiB |   5,574 | `__json_file_module_MOD_json_file_load`               | `./json_file_module.F90:842`  |
|  0.2% |   776 B |       2 | `(anonymous)`                                         | `<unknown>`                   |
|  0.1% |   269 B |       2 | `__json_file_module_MOD_initialize_json_core_in_file` | `./json_file_module.F90:504`  |
| <0.1% |    17 B |       1 | `_gfortran_string_trim`                               | `<unknown>`                   |
| <0.1% |     1 B |       1 | `__json_file_module_MOD_json_file_get_string`         | `./json_file_module.F90:1837` |

##### `main` (`/out/profile.f90:6`)

|      % |    Size | Objects | Callee   | Location             |
| -----: | ------: | ------: | -------- | -------------------- |
| 100.0% | 417 KiB |   5,258 | `MAIN__` | `/out/profile.f90:5` |

##### `__json_value_module_MOD_parse_array` (`./json_value_module.F90:10987`)

|     % |     Size | Objects | Callee                                      | Location                        |
| ----: | -------: | ------: | ------------------------------------------- | ------------------------------- |
| 98.5% |  402 KiB |   7,555 | `__json_value_module_MOD_parse_object`      | `./json_value_module.F90:10882` |
|  6.4% | 26.3 KiB |     240 | `__json_value_module_MOD_json_value_create` | `./json_value_module.F90:2204`  |
|  0.3% | 1.05 KiB |     134 | `__json_value_module_MOD_parse_number`      | `./json_value_module.F90:11192` |

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

##### `__json_value_module_MOD_parse_value` (`./json_value_module.F90:10117`)

|    % | Size | Objects | Callee                              | Location                        |
| ---: | ---: | ------: | ----------------------------------- | ------------------------------- |
| 0.1% | 52 B |      52 | `__json_value_module_MOD_to_string` | `./json_value_module.F90:10755` |

##### `__json_value_module_MOD_parse_number` (`./json_value_module.F90:11192`)

|     % |    Size | Objects | Callee                                  | Location                        |
| ----: | ------: | ------: | --------------------------------------- | ------------------------------- |
| 90.2% | 6.8 KiB |     871 | `__json_value_module_MOD_to_integer`    | `./json_value_module.F90:10690` |
|  9.8% |   760 B |       1 | `__json_value_module_MOD_string_to_int` | `./json_value_module.F90:8074`  |

##### `__json_string_utilities_MOD_string_to_integer` (`./json_string_utilities.F90:116`)

|      % |  Size | Objects | Callee        | Location    |
| -----: | ----: | ------: | ------------- | ----------- |
| 100.0% | 760 B |       1 | `(anonymous)` | `<unknown>` |

##### `__json_value_module_MOD_string_to_int` (`./json_value_module.F90:8074`)

|      % |  Size | Objects | Callee                                          | Location                          |
| -----: | ----: | ------: | ----------------------------------------------- | --------------------------------- |
| 100.0% | 760 B |       1 | `__json_string_utilities_MOD_string_to_integer` | `./json_string_utilities.F90:116` |

##### `__json_file_module_MOD_initialize_json_core_in_file` (`./json_file_module.F90:504`)

|      % |  Size | Objects | Callee                                    | Location                       |
| -----: | ----: | ------: | ----------------------------------------- | ------------------------------ |
| 100.0% | 269 B |       2 | `__json_value_module_MOD_json_initialize` | `./json_value_module.F90:1016` |

##### `__json_file_module_MOD_json_file_get_string` (`./json_file_module.F90:1837`)

|      % | Size | Objects | Callee                                            | Location                             |
| -----: | ---: | ------: | ------------------------------------------------- | ------------------------------------ |
| 100.0% |  1 B |       1 | `__json_value_module_MOD_json_get_string_by_path` | `./json_get_scalar_by_path.inc:9182` |

## Hottest call stacks

Call stacks with the most bytes retained in their leaf frame.

|     % |     Size | Objects | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ----: | -------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 31.5% |  282 KiB |   2,577 | `__json_value_module_MOD_json_value_create` (`./json_value_module.F90:2204`) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) |
| 14.3% |  128 KiB |       2 | `(anonymous)` ← `(anonymous)` ← `(anonymous)` ← `_gfortran_st_open` ← `__json_value_module_MOD_json_parse_file` (`./json_value_module.F90:9714`) ← `__json_file_module_MOD_json_file_load` (`./json_file_module.F90:842`) ← `MAIN__` (`/out/profile.f90:5`) ← `main` (6) ← `(anonymous)` ← `__libc_start_main` ← `_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  4.2% | 37.6 KiB |   2,507 | `__json_value_module_MOD_parse_object` (`./json_value_module.F90:10882`) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882)     |
|  3.5% | 31.6 KiB |     937 | `__json_value_module_MOD_parse_value` (`./json_value_module.F90:10117`) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882)      |
|  2.3% | 20.6 KiB |     188 | `__json_value_module_MOD_json_value_create` (`./json_value_module.F90:2204`) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_array` (10987) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_json_parse_file` (9714) ← `__json_file_module_MOD_json_file_load` (`./json_file_module.F90:842`) ← `MAIN__` (`/out/profile.f90:5`) ← `main` (6) ← `(anonymous)` ← `__libc_start_main`                                                                                       |
|  2.3% | 20.1 KiB |     184 | `__json_value_module_MOD_json_value_create` (`./json_value_module.F90:2204`) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_array` (10987) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_json_parse_file` (9714) ← `__json_file_module_MOD_json_file_load` (`./json_file_module.F90:842`) ← `MAIN__` (`/out/profile.f90:5`) ← `main` (6) ← `(anonymous)` ← `__libc_start_main` ← `_start`                                                                                                                             |
|  1.8% |   16 KiB |     146 | `__json_value_module_MOD_json_value_create` (`./json_value_module.F90:2204`) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_array` (10987) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_json_parse_file` (9714) ← `__json_file_module_MOD_json_file_load` (`./json_file_module.F90:842`) ← `MAIN__` (`/out/profile.f90:5`) ← `main` (6) ← `(anonymous)` ← `__libc_start_main` ← `_start`                                                                                                                                                                              |
|  1.7% | 15.3 KiB |     140 | `__json_value_module_MOD_json_value_create` (`./json_value_module.F90:2204`) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_array` (10987) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_json_parse_file` (9714) ← `__json_file_module_MOD_json_file_load` (`./json_file_module.F90:842`) ← `MAIN__` (`/out/profile.f90:5`) ← `main` (6) ← `(anonymous)`                                                            |
|  1.7% |   15 KiB |     137 | `__json_value_module_MOD_json_value_create` (`./json_value_module.F90:2204`) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_array` (10987) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_json_parse_file` (9714) ← `__json_file_module_MOD_json_file_load` (`./json_file_module.F90:842`) ← `MAIN__` (`/out/profile.f90:5`) ← `main` (6) ← `(anonymous)` ← `__libc_start_main` ← `_start`                                                                                                                                                                                                                               |
|  1.3% | 11.7 KiB |     107 | `__json_value_module_MOD_json_value_create` (`./json_value_module.F90:2204`) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_array` (10987) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_json_parse_file` (9714) ← `__json_file_module_MOD_json_file_load` (`./json_file_module.F90:842`) ← `MAIN__` (`/out/profile.f90:5`) ← `main` (6) ← `(anonymous)` ← `__libc_start_main` ← `_start`                                                                                                                                                                                                                                                                                |
|  1.3% | 11.3 KiB |     103 | `__json_value_module_MOD_json_value_create` (`./json_value_module.F90:2204`) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_array` (10987) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_json_parse_file` (9714) ← `__json_file_module_MOD_json_file_load` (`./json_file_module.F90:842`) ← `MAIN__` (`/out/profile.f90:5`) ← `main` (6)                           |
|  1.2% | 11.1 KiB |      39 | `__json_value_module_MOD_parse_value` (`./json_value_module.F90:10117`) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_array` (10987) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_json_parse_file` (9714) ← `__json_file_module_MOD_json_file_load` (`./json_file_module.F90:842`) ← `MAIN__` (`/out/profile.f90:5`) ← `main` (6) ← `(anonymous)` ← `__libc_start_main` ← `_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  1.2% | 10.5 KiB |      39 | `__json_value_module_MOD_parse_value` (`./json_value_module.F90:10117`) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_array` (10987) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_json_parse_file` (9714) ← `__json_file_module_MOD_json_file_load` (`./json_file_module.F90:842`) ← `MAIN__` (`/out/profile.f90:5`) ← `main` (6) ← `(anonymous)` ← `__libc_start_main`                                                                                            |
|  1.0% | 8.53 KiB |      78 | `__json_value_module_MOD_json_value_create` (`./json_value_module.F90:2204`) ← `__json_value_module_MOD_parse_array` (10987) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_array` (10987) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882)   |
|  1.0% | 8.53 KiB |      78 | `__json_value_module_MOD_json_value_create` (`./json_value_module.F90:2204`) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_array` (10987) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_json_parse_file` (9714) ← `__json_file_module_MOD_json_file_load` (`./json_file_module.F90:842`) ← `MAIN__` (`/out/profile.f90:5`) ← `main` (6) ← `(anonymous)` ← `__libc_start_main` ← `_start`                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  1.0% | 8.53 KiB |      78 | `__json_value_module_MOD_json_value_create` (`./json_value_module.F90:2204`) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_array` (10987) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_json_parse_file` (9714) ← `__json_file_module_MOD_json_file_load` (`./json_file_module.F90:842`) ← `MAIN__` (`/out/profile.f90:5`) ← `main` (6) ← `(anonymous)` ← `__libc_start_main` ← `_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  1.0% | 8.53 KiB |      78 | `__json_value_module_MOD_json_value_create` (`./json_value_module.F90:2204`) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_array` (10987) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_json_parse_file` (9714) ← `__json_file_module_MOD_json_file_load` (`./json_file_module.F90:842`) ← `MAIN__` (`/out/profile.f90:5`) ← `main` (6) ← `(anonymous)` ← `__libc_start_main` ← `_start`                                                                                                                                                                                                                                                                                                                                 |
|  1.0% | 8.53 KiB |      78 | `__json_value_module_MOD_json_value_create` (`./json_value_module.F90:2204`) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_array` (10987) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_json_parse_file` (9714) ← `__json_file_module_MOD_json_file_load` (`./json_file_module.F90:842`) ← `MAIN__` (`/out/profile.f90:5`) ← `main` (6) ← `(anonymous)` ← `__libc_start_main` ← `_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  1.0% | 8.53 KiB |      78 | `__json_value_module_MOD_json_value_create` (`./json_value_module.F90:2204`) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_array` (10987) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_json_parse_file` (9714) ← `__json_file_module_MOD_json_file_load` (`./json_file_module.F90:842`) ← `MAIN__` (`/out/profile.f90:5`) ← `main` (6) ← `(anonymous)` ← `__libc_start_main` ← `_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  1.0% | 8.53 KiB |      78 | `__json_value_module_MOD_json_value_create` (`./json_value_module.F90:2204`) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_array` (10987) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_json_parse_file` (9714) ← `__json_file_module_MOD_json_file_load` (`./json_file_module.F90:842`) ← `MAIN__` (`/out/profile.f90:5`) ← `main` (6) ← `(anonymous)` ← `__libc_start_main` ← `_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
