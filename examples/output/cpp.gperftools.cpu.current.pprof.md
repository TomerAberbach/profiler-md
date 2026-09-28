# CPU profile

Took 537.0ms over 537 samples (1.0ms per sample).

| Category         |     % |    Time | Samples |
| ---------------- | ----: | ------: | ------: |
| Ours             | 82.1% | 441.0ms |     441 |
| Native           | 16.8% |  90.0ms |      90 |
| Standard library |  1.1% |   6.0ms |       6 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|    % |   Time | Samples | Function                                                                                       | Location                                        |
| ---: | -----: | ------: | ---------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| 8.4% | 45.0ms |      45 | `fmt::v12::detail::buffer::append`                                                             | `src/fmt/include/fmt/base.h`                    |
| 7.8% | 42.0ms |      42 | `fmt::v12::detail::utf8_decode`                                                                | `src/fmt/include/fmt/format.h`                  |
| 5.8% | 31.0ms |      31 | `fmt::v12::detail::parse_format_specs`                                                         | `src/fmt/include/fmt/base.h`                    |
| 4.7% | 25.0ms |      25 | `fmt::v12::detail::copy_noinline`                                                              | `src/fmt/include/fmt/format.h`                  |
| 3.5% | 19.0ms |      19 | `fmt::v12::detail::parse_format_string`                                                        | `src/fmt/include/fmt/base.h`                    |
| 3.4% | 18.0ms |      18 | `fmt::v12::detail::write`                                                                      | `src/fmt/include/fmt/format.h`                  |
| 3.0% | 16.0ms |      16 | `fmt::v12::basic_format_arg::visit`                                                            | `src/fmt/include/fmt/base.h`                    |
| 2.6% | 14.0ms |      14 | `0x9d100`                                                                                      | `usr/lib/aarch64-linux-gnu/libc.so.6`           |
| 2.6% | 14.0ms |      14 | `fmt::v12::detail::parse_dynamic_spec`                                                         | `src/fmt/include/fmt/base.h`                    |
| 2.4% | 13.0ms |      13 | `fmt::v12::detail::parse_replacement_field`                                                    | `src/fmt/include/fmt/base.h`                    |
| 2.2% | 12.0ms |      12 | `fmt::v12::detail::write_int`                                                                  | `src/fmt/include/fmt/format.h`                  |
| 2.2% | 12.0ms |      12 | `fmt::v12::detail::format_float`                                                               | `src/fmt/include/fmt/format.h`                  |
| 2.2% | 12.0ms |      12 | `0x9e6c0`                                                                                      | `usr/lib/aarch64-linux-gnu/libc.so.6`           |
| 2.2% | 12.0ms |      12 | `fmt::v12::detail::parse_nonnegative_int`                                                      | `src/fmt/include/fmt/base.h`                    |
| 2.0% | 11.0ms |      11 | `fmt::v12::detail::write2digits`                                                               | `src/fmt/include/fmt/format.h`                  |
| 2.0% | 11.0ms |      11 | `fmt::v12::detail::write()::{lambda(unsigned int, fmt::v12::basic_string_view)#1}::operator()` | `src/fmt/include/fmt/format.h`                  |
| 1.9% | 10.0ms |      10 | `fmt::v12::detail::format_handler::on_format_specs`                                            | `src/fmt/include/fmt/format.h`                  |
| 1.9% | 10.0ms |      10 | `fmt::v12::detail::for_each_codepoint()::{lambda(char const*, char const*)#1}::operator()`     | `src/fmt/include/fmt/format.h`                  |
| 1.9% | 10.0ms |      10 | `0x137f80`                                                                                     | `usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
| 1.9% | 10.0ms |      10 | `0x137f20`                                                                                     | `usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |

#### Categories

##### Ours

|    % |   Time | Samples | Function                                                                                       | Location                       |
| ---: | -----: | ------: | ---------------------------------------------------------------------------------------------- | ------------------------------ |
| 8.4% | 45.0ms |      45 | `fmt::v12::detail::buffer::append`                                                             | `src/fmt/include/fmt/base.h`   |
| 7.8% | 42.0ms |      42 | `fmt::v12::detail::utf8_decode`                                                                | `src/fmt/include/fmt/format.h` |
| 5.8% | 31.0ms |      31 | `fmt::v12::detail::parse_format_specs`                                                         | `src/fmt/include/fmt/base.h`   |
| 4.7% | 25.0ms |      25 | `fmt::v12::detail::copy_noinline`                                                              | `src/fmt/include/fmt/format.h` |
| 3.5% | 19.0ms |      19 | `fmt::v12::detail::parse_format_string`                                                        | `src/fmt/include/fmt/base.h`   |
| 3.4% | 18.0ms |      18 | `fmt::v12::detail::write`                                                                      | `src/fmt/include/fmt/format.h` |
| 3.0% | 16.0ms |      16 | `fmt::v12::basic_format_arg::visit`                                                            | `src/fmt/include/fmt/base.h`   |
| 2.6% | 14.0ms |      14 | `fmt::v12::detail::parse_dynamic_spec`                                                         | `src/fmt/include/fmt/base.h`   |
| 2.4% | 13.0ms |      13 | `fmt::v12::detail::parse_replacement_field`                                                    | `src/fmt/include/fmt/base.h`   |
| 2.2% | 12.0ms |      12 | `fmt::v12::detail::write_int`                                                                  | `src/fmt/include/fmt/format.h` |
| 2.2% | 12.0ms |      12 | `fmt::v12::detail::format_float`                                                               | `src/fmt/include/fmt/format.h` |
| 2.2% | 12.0ms |      12 | `fmt::v12::detail::parse_nonnegative_int`                                                      | `src/fmt/include/fmt/base.h`   |
| 2.0% | 11.0ms |      11 | `fmt::v12::detail::write2digits`                                                               | `src/fmt/include/fmt/format.h` |
| 2.0% | 11.0ms |      11 | `fmt::v12::detail::write()::{lambda(unsigned int, fmt::v12::basic_string_view)#1}::operator()` | `src/fmt/include/fmt/format.h` |
| 1.9% | 10.0ms |      10 | `fmt::v12::detail::format_handler::on_format_specs`                                            | `src/fmt/include/fmt/format.h` |
| 1.9% | 10.0ms |      10 | `fmt::v12::detail::for_each_codepoint()::{lambda(char const*, char const*)#1}::operator()`     | `src/fmt/include/fmt/format.h` |
| 1.7% |  9.0ms |       9 | `fmt::v12::basic_format_args::get`                                                             | `src/fmt/include/fmt/base.h`   |
| 1.7% |  9.0ms |       9 | `fmt::v12::detail::write_fixed`                                                                | `src/fmt/include/fmt/format.h` |
| 1.5% |  8.0ms |       8 | `fmt::v12::detail::buffer::try_reserve`                                                        | `src/fmt/include/fmt/base.h`   |
| 1.5% |  8.0ms |       8 | `fmt::v12::detail::buffer::push_back`                                                          | `src/fmt/include/fmt/base.h`   |

##### Native

|    % |   Time | Samples | Function   | Location                                        |
| ---: | -----: | ------: | ---------- | ----------------------------------------------- |
| 2.6% | 14.0ms |      14 | `0x9d100`  | `usr/lib/aarch64-linux-gnu/libc.so.6`           |
| 2.2% | 12.0ms |      12 | `0x9e6c0`  | `usr/lib/aarch64-linux-gnu/libc.so.6`           |
| 1.9% | 10.0ms |      10 | `0x137f80` | `usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
| 1.9% | 10.0ms |      10 | `0x137f20` | `usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
| 1.7% |  9.0ms |       9 | `0xa0cb0`  | `usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
| 0.7% |  4.0ms |       4 | `0x8faf4`  | `usr/lib/aarch64-linux-gnu/libc.so.6`           |
| 0.6% |  3.0ms |       3 | `_init`    | `<unknown>`                                     |
| 0.6% |  3.0ms |       3 | `0x92284`  | `usr/lib/aarch64-linux-gnu/libc.so.6`           |
| 0.6% |  3.0ms |       3 | `0x929e0`  | `usr/lib/aarch64-linux-gnu/libc.so.6`           |
| 0.4% |  2.0ms |       2 | `0x9e6e8`  | `usr/lib/aarch64-linux-gnu/libc.so.6`           |
| 0.4% |  2.0ms |       2 | `0x137f84` | `usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
| 0.4% |  2.0ms |       2 | `0x9d11c`  | `usr/lib/aarch64-linux-gnu/libc.so.6`           |
| 0.4% |  2.0ms |       2 | `0x9a104`  | `usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
| 0.4% |  2.0ms |       2 | `0x92aa0`  | `usr/lib/aarch64-linux-gnu/libc.so.6`           |
| 0.2% |  1.0ms |       1 | `0x9d1b0`  | `usr/lib/aarch64-linux-gnu/libc.so.6`           |
| 0.2% |  1.0ms |       1 | `0x92274`  | `usr/lib/aarch64-linux-gnu/libc.so.6`           |
| 0.2% |  1.0ms |       1 | `0x923f0`  | `usr/lib/aarch64-linux-gnu/libc.so.6`           |
| 0.2% |  1.0ms |       1 | `0x8fbf0`  | `usr/lib/aarch64-linux-gnu/libc.so.6`           |
| 0.2% |  1.0ms |       1 | `0x9a8f4`  | `usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
| 0.2% |  1.0ms |       1 | `0x9d234`  | `usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |

##### Standard library

|    % |  Time | Samples | Function                                                 | Location                                   |
| ---: | ----: | ------: | -------------------------------------------------------- | ------------------------------------------ |
| 0.4% | 2.0ms |       2 | `std::__cxx11::basic_string::_M_construct`               | `usr/include/c++/12/bits/basic_string.tcc` |
| 0.2% | 1.0ms |       1 | `std::char_traits::copy`                                 | `usr/include/c++/12/bits/char_traits.h`    |
| 0.2% | 1.0ms |       1 | `std::__cxx11::basic_string::_Alloc_hider::_Alloc_hider` | `usr/include/c++/12/bits/basic_string.h`   |
| 0.2% | 1.0ms |       1 | `std::__cxx11::basic_string::~basic_string`              | `usr/include/c++/12/bits/basic_string.h`   |
| 0.2% | 1.0ms |       1 | `std::__cxx11::basic_string::size`                       | `usr/include/c++/12/bits/basic_string.h`   |

#### Lines

Lines ranked by contribution to each function's self time.

##### `fmt::v12::detail::buffer::append` (`src/fmt/include/fmt/base.h`)

|     % |   Time | Samples | Location                          |
| ----: | -----: | ------: | --------------------------------- |
| 53.3% | 24.0ms |      24 | `src/fmt/include/fmt/base.h:1853` |
| 22.2% | 10.0ms |      10 | `src/fmt/include/fmt/base.h:1854` |
| 13.3% |  6.0ms |       6 | `src/fmt/include/fmt/base.h:1852` |
|  8.9% |  4.0ms |       4 | `src/fmt/include/fmt/base.h:1846` |
|  2.2% |  1.0ms |       1 | `src/fmt/include/fmt/base.h:1845` |

##### `fmt::v12::detail::utf8_decode` (`src/fmt/include/fmt/format.h`)

|     % |   Time | Samples | Location                           |
| ----: | -----: | ------: | ---------------------------------- |
| 31.0% | 13.0ms |      13 | `src/fmt/include/fmt/format.h:595` |
| 16.7% |  7.0ms |       7 | `src/fmt/include/fmt/format.h:622` |
| 14.3% |  6.0ms |       6 | `src/fmt/include/fmt/format.h:598` |
|  9.5% |  4.0ms |       4 | `src/fmt/include/fmt/format.h:621` |
|  7.1% |  3.0ms |       3 | `src/fmt/include/fmt/format.h:592` |

##### `fmt::v12::detail::parse_format_specs` (`src/fmt/include/fmt/base.h`)

|     % |   Time | Samples | Location                          |
| ----: | -----: | ------: | --------------------------------- |
| 45.2% | 14.0ms |      14 | `src/fmt/include/fmt/base.h:1498` |
| 32.3% | 10.0ms |      10 | `src/fmt/include/fmt/base.h:1596` |
| 16.1% |  5.0ms |       5 | `src/fmt/include/fmt/base.h:1461` |
|  6.5% |  2.0ms |       2 | `src/fmt/include/fmt/base.h:1593` |

##### `fmt::v12::detail::copy_noinline` (`src/fmt/include/fmt/format.h`)

|     % |   Time | Samples | Location                           |
| ----: | -----: | ------: | ---------------------------------- |
| 68.0% | 17.0ms |      17 | `src/fmt/include/fmt/format.h:571` |
| 32.0% |  8.0ms |       8 | `src/fmt/include/fmt/format.h:568` |

##### `fmt::v12::detail::parse_format_string` (`src/fmt/include/fmt/base.h`)

|     % |  Time | Samples | Location                          |
| ----: | ----: | ------: | --------------------------------- |
| 47.4% | 9.0ms |       9 | `src/fmt/include/fmt/base.h:1651` |
| 31.6% | 6.0ms |       6 | `src/fmt/include/fmt/base.h:1655` |
| 21.1% | 4.0ms |       4 | `src/fmt/include/fmt/base.h:1650` |

##### `fmt::v12::detail::write` (`src/fmt/include/fmt/format.h`)

|     % |  Time | Samples | Location                            |
| ----: | ----: | ------: | ----------------------------------- |
| 22.2% | 4.0ms |       4 | `src/fmt/include/fmt/format.h:3434` |
| 11.1% | 2.0ms |       2 | `src/fmt/include/fmt/format.h:2239` |
| 11.1% | 2.0ms |       2 | `src/fmt/include/fmt/format.h:2284` |
|  5.6% | 1.0ms |       1 | `src/fmt/include/fmt/format.h:3487` |
|  5.6% | 1.0ms |       1 | `src/fmt/include/fmt/format.h:2167` |

##### `fmt::v12::basic_format_arg::visit` (`src/fmt/include/fmt/base.h`)

|     % |   Time | Samples | Location                          |
| ----: | -----: | ------: | --------------------------------- |
| 93.8% | 15.0ms |      15 | `src/fmt/include/fmt/base.h:2531` |
|  6.3% |  1.0ms |       1 | `src/fmt/include/fmt/base.h:2550` |

##### `fmt::v12::detail::parse_dynamic_spec` (`src/fmt/include/fmt/base.h`)

|     % |  Time | Samples | Location                          |
| ----: | ----: | ------: | --------------------------------- |
| 57.1% | 8.0ms |       8 | `src/fmt/include/fmt/base.h:1400` |
| 14.3% | 2.0ms |       2 | `src/fmt/include/fmt/base.h:1406` |
| 14.3% | 2.0ms |       2 | `src/fmt/include/fmt/base.h:1408` |
| 14.3% | 2.0ms |       2 | `src/fmt/include/fmt/base.h:1430` |

##### `fmt::v12::detail::parse_replacement_field` (`src/fmt/include/fmt/base.h`)

|     % |  Time | Samples | Location                          |
| ----: | ----: | ------: | --------------------------------- |
| 30.8% | 4.0ms |       4 | `src/fmt/include/fmt/base.h:1643` |
| 30.8% | 4.0ms |       4 | `src/fmt/include/fmt/base.h:1609` |
| 23.1% | 3.0ms |       3 | `src/fmt/include/fmt/base.h:1603` |
| 15.4% | 2.0ms |       2 | `src/fmt/include/fmt/base.h:1640` |

##### `fmt::v12::detail::write_int` (`src/fmt/include/fmt/format.h`)

|     % |  Time | Samples | Location                            |
| ----: | ----: | ------: | ----------------------------------- |
| 66.7% | 8.0ms |       8 | `src/fmt/include/fmt/format.h:2050` |
| 16.7% | 2.0ms |       2 | `src/fmt/include/fmt/format.h:2096` |
|  8.3% | 1.0ms |       1 | `src/fmt/include/fmt/format.h:2062` |
|  8.3% | 1.0ms |       1 | `src/fmt/include/fmt/format.h:2111` |

##### `fmt::v12::detail::format_float` (`src/fmt/include/fmt/format.h`)

|     % |  Time | Samples | Location                            |
| ----: | ----: | ------: | ----------------------------------- |
| 25.0% | 3.0ms |       3 | `src/fmt/include/fmt/format.h:3208` |
| 16.7% | 2.0ms |       2 | `src/fmt/include/fmt/format.h:3152` |
| 16.7% | 2.0ms |       2 | `src/fmt/include/fmt/format.h:3199` |
|  8.3% | 1.0ms |       1 | `src/fmt/include/fmt/format.h:3325` |
|  8.3% | 1.0ms |       1 | `src/fmt/include/fmt/format.h:3331` |

##### `fmt::v12::detail::parse_nonnegative_int` (`src/fmt/include/fmt/base.h`)

|     % |  Time | Samples | Location                          |
| ----: | ----: | ------: | --------------------------------- |
| 75.0% | 9.0ms |       9 | `src/fmt/include/fmt/base.h:1321` |
|  8.3% | 1.0ms |       1 | `src/fmt/include/fmt/base.h:1319` |
|  8.3% | 1.0ms |       1 | `src/fmt/include/fmt/base.h:1322` |
|  8.3% | 1.0ms |       1 | `src/fmt/include/fmt/base.h:1325` |

##### `fmt::v12::detail::write2digits` (`src/fmt/include/fmt/format.h`)

|      % |   Time | Samples | Location                            |
| -----: | -----: | ------: | ----------------------------------- |
| 100.0% | 11.0ms |      11 | `src/fmt/include/fmt/format.h:1197` |

##### `fmt::v12::detail::write()::{lambda(unsigned int, fmt::v12::basic_string_view)#1}::operator()` (`src/fmt/include/fmt/format.h`)

|     % |  Time | Samples | Location                            |
| ----: | ----: | ------: | ----------------------------------- |
| 36.4% | 4.0ms |       4 | `src/fmt/include/fmt/format.h:2197` |
| 27.3% | 3.0ms |       3 | `src/fmt/include/fmt/format.h:2172` |
| 18.2% | 2.0ms |       2 | `src/fmt/include/fmt/format.h:2173` |
| 18.2% | 2.0ms |       2 | `src/fmt/include/fmt/format.h:2199` |

##### `fmt::v12::detail::format_handler::on_format_specs` (`src/fmt/include/fmt/format.h`)

|     % |  Time | Samples | Location                            |
| ----: | ----: | ------: | ----------------------------------- |
| 60.0% | 6.0ms |       6 | `src/fmt/include/fmt/format.h:3779` |
| 40.0% | 4.0ms |       4 | `src/fmt/include/fmt/format.h:3788` |

##### `fmt::v12::detail::for_each_codepoint()::{lambda(char const*, char const*)#1}::operator()` (`src/fmt/include/fmt/format.h`)

|     % |  Time | Samples | Location                           |
| ----: | ----: | ------: | ---------------------------------- |
| 80.0% | 8.0ms |       8 | `src/fmt/include/fmt/format.h:637` |
| 20.0% | 2.0ms |       2 | `src/fmt/include/fmt/format.h:639` |

##### `fmt::v12::basic_format_args::get` (`src/fmt/include/fmt/base.h`)

|     % |  Time | Samples | Location                          |
| ----: | ----: | ------: | --------------------------------- |
| 44.4% | 4.0ms |       4 | `src/fmt/include/fmt/base.h:2639` |
| 22.2% | 2.0ms |       2 | `src/fmt/include/fmt/base.h:2637` |
| 22.2% | 2.0ms |       2 | `src/fmt/include/fmt/base.h:2633` |
| 11.1% | 1.0ms |       1 | `src/fmt/include/fmt/base.h:2638` |

##### `fmt::v12::detail::write_fixed` (`src/fmt/include/fmt/format.h`)

|     % |  Time | Samples | Location                            |
| ----: | ----: | ------: | ----------------------------------- |
| 44.4% | 4.0ms |       4 | `src/fmt/include/fmt/format.h:2487` |
| 22.2% | 2.0ms |       2 | `src/fmt/include/fmt/format.h:2522` |
| 22.2% | 2.0ms |       2 | `src/fmt/include/fmt/format.h:2549` |
| 11.1% | 1.0ms |       1 | `src/fmt/include/fmt/format.h:2539` |

##### `fmt::v12::detail::buffer::try_reserve` (`src/fmt/include/fmt/base.h`)

|      % |  Time | Samples | Location                          |
| -----: | ----: | ------: | --------------------------------- |
| 100.0% | 8.0ms |       8 | `src/fmt/include/fmt/base.h:1829` |

##### `fmt::v12::detail::buffer::push_back` (`src/fmt/include/fmt/base.h`)

|     % |  Time | Samples | Location                          |
| ----: | ----: | ------: | --------------------------------- |
| 50.0% | 4.0ms |       4 | `src/fmt/include/fmt/base.h:1834` |
| 37.5% | 3.0ms |       3 | `src/fmt/include/fmt/base.h:1835` |
| 12.5% | 1.0ms |       1 | `src/fmt/include/fmt/base.h:1832` |

##### `std::__cxx11::basic_string::_M_construct` (`usr/include/c++/12/bits/basic_string.tcc`)

|      % |  Time | Samples | Location                                       |
| -----: | ----: | ------: | ---------------------------------------------- |
| 100.0% | 2.0ms |       2 | `usr/include/c++/12/bits/basic_string.tcc:221` |

##### `std::char_traits::copy` (`usr/include/c++/12/bits/char_traits.h`)

|      % |  Time | Samples | Location                                    |
| -----: | ----: | ------: | ------------------------------------------- |
| 100.0% | 1.0ms |       1 | `usr/include/c++/12/bits/char_traits.h:431` |

##### `std::__cxx11::basic_string::_Alloc_hider::_Alloc_hider` (`usr/include/c++/12/bits/basic_string.h`)

|      % |  Time | Samples | Location                                     |
| -----: | ----: | ------: | -------------------------------------------- |
| 100.0% | 1.0ms |       1 | `usr/include/c++/12/bits/basic_string.h:200` |

##### `std::__cxx11::basic_string::~basic_string` (`usr/include/c++/12/bits/basic_string.h`)

|      % |  Time | Samples | Location                                     |
| -----: | ----: | ------: | -------------------------------------------- |
| 100.0% | 1.0ms |       1 | `usr/include/c++/12/bits/basic_string.h:795` |

##### `std::__cxx11::basic_string::size` (`usr/include/c++/12/bits/basic_string.h`)

|      % |  Time | Samples | Location                                      |
| -----: | ----: | ------: | --------------------------------------------- |
| 100.0% | 1.0ms |       1 | `usr/include/c++/12/bits/basic_string.h:1064` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `fmt::v12::detail::buffer::append` (`src/fmt/include/fmt/base.h`)

|      % |   Time | Samples | Caller                   | Location                     |
| -----: | -----: | ------: | ------------------------ | ---------------------------- |
| 100.0% | 45.0ms |      45 | `fmt::v12::detail::copy` | `src/fmt/include/fmt/base.h` |

##### `fmt::v12::detail::utf8_decode` (`src/fmt/include/fmt/format.h`)

|      % |   Time | Samples | Caller                                                                                     | Location                       |
| -----: | -----: | ------: | ------------------------------------------------------------------------------------------ | ------------------------------ |
| 100.0% | 42.0ms |      42 | `fmt::v12::detail::for_each_codepoint()::{lambda(char const*, char const*)#1}::operator()` | `src/fmt/include/fmt/format.h` |

##### `fmt::v12::detail::parse_format_specs` (`src/fmt/include/fmt/base.h`)

|      % |   Time | Samples | Caller                                              | Location                       |
| -----: | -----: | ------: | --------------------------------------------------- | ------------------------------ |
| 100.0% | 31.0ms |      31 | `fmt::v12::detail::format_handler::on_format_specs` | `src/fmt/include/fmt/format.h` |

##### `fmt::v12::detail::copy_noinline` (`src/fmt/include/fmt/format.h`)

|     % |   Time | Samples | Caller                                                   | Location                       |
| ----: | -----: | ------: | -------------------------------------------------------- | ------------------------------ |
| 60.0% | 15.0ms |      15 | `fmt::v12::detail::format_handler::on_text`              | `src/fmt/include/fmt/format.h` |
| 28.0% |  7.0ms |       7 | `fmt::v12::detail::format_handler::on_replacement_field` | `src/fmt/include/fmt/format.h` |
| 12.0% |  3.0ms |       3 | `fmt::v12::detail::write_significand`                    | `src/fmt/include/fmt/format.h` |

##### `fmt::v12::detail::parse_format_string` (`src/fmt/include/fmt/base.h`)

|      % |   Time | Samples | Caller                         | Location                           |
| -----: | -----: | ------: | ------------------------------ | ---------------------------------- |
| 100.0% | 19.0ms |      19 | `fmt::v12::detail::vformat_to` | `src/fmt/include/fmt/format-inl.h` |

##### `fmt::v12::detail::write` (`src/fmt/include/fmt/format.h`)

|     % |   Time | Samples | Caller                                                | Location                       |
| ----: | -----: | ------: | ----------------------------------------------------- | ------------------------------ |
| 66.7% | 12.0ms |      12 | `fmt::v12::detail::format_handler::on_format_specs`   | `src/fmt/include/fmt/format.h` |
| 22.2% |  4.0ms |       4 | `fmt::v12::detail::parse_format_string`               | `src/fmt/include/fmt/base.h`   |
| 11.1% |  2.0ms |       2 | `fmt::v12::detail::default_arg_formatter::operator()` | `src/fmt/include/fmt/format.h` |

##### `fmt::v12::basic_format_arg::visit` (`src/fmt/include/fmt/base.h`)

|     % |   Time | Samples | Caller                                                   | Location                       |
| ----: | -----: | ------: | -------------------------------------------------------- | ------------------------------ |
| 75.0% | 12.0ms |      12 | `fmt::v12::detail::format_handler::on_format_specs`      | `src/fmt/include/fmt/format.h` |
| 25.0% |  4.0ms |       4 | `fmt::v12::detail::format_handler::on_replacement_field` | `src/fmt/include/fmt/format.h` |

##### `0x9d100` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |   Time | Samples | Caller                         | Location                           |
| -----: | -----: | ------: | ------------------------------ | ---------------------------------- |
| 100.0% | 14.0ms |      14 | `fmt::v12::vformat[abi:cxx11]` | `src/fmt/include/fmt/format-inl.h` |

##### `fmt::v12::detail::parse_dynamic_spec` (`src/fmt/include/fmt/base.h`)

|     % |  Time | Samples | Caller                                              | Location                       |
| ----: | ----: | ------: | --------------------------------------------------- | ------------------------------ |
| 57.1% | 8.0ms |       8 | `fmt::v12::detail::format_handler::on_format_specs` | `src/fmt/include/fmt/format.h` |
| 21.4% | 3.0ms |       3 | `fmt::v12::detail::parse_precision`                 | `src/fmt/include/fmt/base.h`   |
| 21.4% | 3.0ms |       3 | `fmt::v12::detail::parse_width`                     | `src/fmt/include/fmt/base.h`   |

##### `fmt::v12::detail::parse_replacement_field` (`src/fmt/include/fmt/base.h`)

|      % |   Time | Samples | Caller                                  | Location                     |
| -----: | -----: | ------: | --------------------------------------- | ---------------------------- |
| 100.0% | 13.0ms |      13 | `fmt::v12::detail::parse_format_string` | `src/fmt/include/fmt/base.h` |

##### `fmt::v12::detail::write_int` (`src/fmt/include/fmt/format.h`)

|     % |  Time | Samples | Caller                                              | Location                       |
| ----: | ----: | ------: | --------------------------------------------------- | ------------------------------ |
| 66.7% | 8.0ms |       8 | `fmt::v12::detail::format_handler::on_format_specs` | `src/fmt/include/fmt/format.h` |
| 33.3% | 4.0ms |       4 | `fmt::v12::detail::parse_format_string`             | `src/fmt/include/fmt/base.h`   |

##### `fmt::v12::detail::format_float` (`src/fmt/include/fmt/format.h`)

|      % |   Time | Samples | Caller                    | Location                       |
| -----: | -----: | ------: | ------------------------- | ------------------------------ |
| 100.0% | 12.0ms |      12 | `fmt::v12::detail::write` | `src/fmt/include/fmt/format.h` |

##### `0x9e6c0` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |  Time | Samples | Caller                                                   | Location                       |
| ----: | ----: | ------: | -------------------------------------------------------- | ------------------------------ |
| 50.0% | 6.0ms |       6 | `fmt::v12::detail::format_handler::on_format_specs`      | `src/fmt/include/fmt/format.h` |
| 50.0% | 6.0ms |       6 | `fmt::v12::detail::format_handler::on_replacement_field` | `src/fmt/include/fmt/format.h` |

##### `fmt::v12::detail::parse_nonnegative_int` (`src/fmt/include/fmt/base.h`)

|      % |   Time | Samples | Caller                                 | Location                     |
| -----: | -----: | ------: | -------------------------------------- | ---------------------------- |
| 100.0% | 12.0ms |      12 | `fmt::v12::detail::parse_dynamic_spec` | `src/fmt/include/fmt/base.h` |

##### `fmt::v12::detail::write2digits` (`src/fmt/include/fmt/format.h`)

|     % |  Time | Samples | Caller                                                                          | Location                       |
| ----: | ----: | ------: | ------------------------------------------------------------------------------- | ------------------------------ |
| 72.7% | 8.0ms |       8 | `fmt::v12::detail::do_format_decimal`                                           | `src/fmt/include/fmt/format.h` |
| 27.3% | 3.0ms |       3 | `fmt::v12::detail::format_float()::{lambda(unsigned int, char*)#1}::operator()` | `src/fmt/include/fmt/format.h` |

##### `fmt::v12::detail::write()::{lambda(unsigned int, fmt::v12::basic_string_view)#1}::operator()` (`src/fmt/include/fmt/format.h`)

|      % |   Time | Samples | Caller                                                                                     | Location                       |
| -----: | -----: | ------: | ------------------------------------------------------------------------------------------ | ------------------------------ |
| 100.0% | 11.0ms |      11 | `fmt::v12::detail::for_each_codepoint()::{lambda(char const*, char const*)#1}::operator()` | `src/fmt/include/fmt/format.h` |

##### `fmt::v12::detail::format_handler::on_format_specs` (`src/fmt/include/fmt/format.h`)

|      % |   Time | Samples | Caller                                      | Location                     |
| -----: | -----: | ------: | ------------------------------------------- | ---------------------------- |
| 100.0% | 10.0ms |      10 | `fmt::v12::detail::parse_replacement_field` | `src/fmt/include/fmt/base.h` |

##### `fmt::v12::detail::for_each_codepoint()::{lambda(char const*, char const*)#1}::operator()` (`src/fmt/include/fmt/format.h`)

|      % |   Time | Samples | Caller                                 | Location                       |
| -----: | -----: | ------: | -------------------------------------- | ------------------------------ |
| 100.0% | 10.0ms |      10 | `fmt::v12::detail::for_each_codepoint` | `src/fmt/include/fmt/format.h` |

##### `0x137f80` (`usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30`)

|      % |   Time | Samples | Caller                          | Location                       |
| -----: | -----: | ------: | ------------------------------- | ------------------------------ |
| 100.0% | 10.0ms |      10 | `fmt::v12::detail::write_float` | `src/fmt/include/fmt/format.h` |

##### `0x137f20` (`usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30`)

|      % |   Time | Samples | Caller                         | Location                           |
| -----: | -----: | ------: | ------------------------------ | ---------------------------------- |
| 100.0% | 10.0ms |      10 | `fmt::v12::vformat[abi:cxx11]` | `src/fmt/include/fmt/format-inl.h` |

##### `fmt::v12::basic_format_args::get` (`src/fmt/include/fmt/base.h`)

|      % |  Time | Samples | Caller                   | Location                     |
| -----: | ----: | ------: | ------------------------ | ---------------------------- |
| 100.0% | 9.0ms |       9 | `fmt::v12::context::arg` | `src/fmt/include/fmt/base.h` |

##### `fmt::v12::detail::write_fixed` (`src/fmt/include/fmt/format.h`)

|     % |  Time | Samples | Caller                                              | Location                       |
| ----: | ----: | ------: | --------------------------------------------------- | ------------------------------ |
| 66.7% | 6.0ms |       6 | `fmt::v12::detail::write_float`                     | `src/fmt/include/fmt/format.h` |
| 33.3% | 3.0ms |       3 | `fmt::v12::detail::format_handler::on_format_specs` | `src/fmt/include/fmt/format.h` |

##### `0xa0cb0` (`usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30`)

|      % |  Time | Samples | Caller    | Location                              |
| -----: | ----: | ------: | --------- | ------------------------------------- |
| 100.0% | 9.0ms |       9 | `0x27743` | `usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `fmt::v12::detail::buffer::try_reserve` (`src/fmt/include/fmt/base.h`)

|     % |  Time | Samples | Caller                                 | Location                     |
| ----: | ----: | ------: | -------------------------------------- | ---------------------------- |
| 62.5% | 5.0ms |       5 | `fmt::v12::detail::buffer::append`     | `src/fmt/include/fmt/base.h` |
| 25.0% | 2.0ms |       2 | `fmt::v12::detail::buffer::push_back`  | `src/fmt/include/fmt/base.h` |
| 12.5% | 1.0ms |       1 | `fmt::v12::detail::buffer::try_resize` | `src/fmt/include/fmt/base.h` |

##### `fmt::v12::detail::buffer::push_back` (`src/fmt/include/fmt/base.h`)

|      % |  Time | Samples | Caller                                | Location                     |
| -----: | ----: | ------: | ------------------------------------- | ---------------------------- |
| 100.0% | 8.0ms |       8 | `fmt::v12::basic_appender::operator=` | `src/fmt/include/fmt/base.h` |

##### `0x8faf4` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Caller    | Location                              |
| -----: | ----: | ------: | --------- | ------------------------------------- |
| 100.0% | 4.0ms |       4 | `0x92a9b` | `usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `_init` (`<unknown>`)

|     % |  Time | Samples | Caller                                              | Location                           |
| ----: | ----: | ------: | --------------------------------------------------- | ---------------------------------- |
| 66.7% | 2.0ms |       2 | `fmt::v12::detail::format_handler::on_format_specs` | `src/fmt/include/fmt/format.h`     |
| 33.3% | 1.0ms |       1 | `fmt::v12::vformat[abi:cxx11]`                      | `src/fmt/include/fmt/format-inl.h` |

##### `0x92284` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Caller    | Location                                        |
| -----: | ----: | ------: | --------- | ----------------------------------------------- |
| 100.0% | 3.0ms |       3 | `0xa2cab` | `usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |

##### `0x929e0` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Caller                             | Location                                  |
| -----: | ----: | ------: | ---------------------------------- | ----------------------------------------- |
| 100.0% | 3.0ms |       3 | `std::__new_allocator::deallocate` | `usr/include/c++/12/bits/new_allocator.h` |

##### `0x9e6e8` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |  Time | Samples | Caller                                                   | Location                       |
| ----: | ----: | ------: | -------------------------------------------------------- | ------------------------------ |
| 50.0% | 1.0ms |       1 | `fmt::v12::detail::format_handler::on_replacement_field` | `src/fmt/include/fmt/format.h` |
| 50.0% | 1.0ms |       1 | `fmt::v12::detail::format_handler::on_format_specs`      | `src/fmt/include/fmt/format.h` |

##### `0x137f84` (`usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30`)

|      % |  Time | Samples | Caller                          | Location                       |
| -----: | ----: | ------: | ------------------------------- | ------------------------------ |
| 100.0% | 2.0ms |       2 | `fmt::v12::detail::write_float` | `src/fmt/include/fmt/format.h` |

##### `0x9d11c` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |  Time | Samples | Caller                                              | Location                           |
| ----: | ----: | ------: | --------------------------------------------------- | ---------------------------------- |
| 50.0% | 1.0ms |       1 | `fmt::v12::detail::format_handler::on_format_specs` | `src/fmt/include/fmt/format.h`     |
| 50.0% | 1.0ms |       1 | `fmt::v12::vformat[abi:cxx11]`                      | `src/fmt/include/fmt/format-inl.h` |

##### `0x9a104` (`usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30`)

|      % |  Time | Samples | Caller                         | Location                           |
| -----: | ----: | ------: | ------------------------------ | ---------------------------------- |
| 100.0% | 2.0ms |       2 | `fmt::v12::vformat[abi:cxx11]` | `src/fmt/include/fmt/format-inl.h` |

##### `0x92aa0` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Caller                             | Location                                  |
| -----: | ----: | ------: | ---------------------------------- | ----------------------------------------- |
| 100.0% | 2.0ms |       2 | `std::__new_allocator::deallocate` | `usr/include/c++/12/bits/new_allocator.h` |

##### `std::__cxx11::basic_string::_M_construct` (`usr/include/c++/12/bits/basic_string.tcc`)

|      % |  Time | Samples | Caller                                     | Location                                 |
| -----: | ----: | ------: | ------------------------------------------ | ---------------------------------------- |
| 100.0% | 2.0ms |       2 | `std::__cxx11::basic_string::basic_string` | `usr/include/c++/12/bits/basic_string.h` |

##### `0x9d1b0` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Caller                         | Location                           |
| -----: | ----: | ------: | ------------------------------ | ---------------------------------- |
| 100.0% | 1.0ms |       1 | `fmt::v12::vformat[abi:cxx11]` | `src/fmt/include/fmt/format-inl.h` |

##### `0x92274` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Caller    | Location                                        |
| -----: | ----: | ------: | --------- | ----------------------------------------------- |
| 100.0% | 1.0ms |       1 | `0xa2cab` | `usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |

##### `0x923f0` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Caller    | Location                                        |
| -----: | ----: | ------: | --------- | ----------------------------------------------- |
| 100.0% | 1.0ms |       1 | `0xa2cab` | `usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |

##### `0x8fbf0` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Caller    | Location                              |
| -----: | ----: | ------: | --------- | ------------------------------------- |
| 100.0% | 1.0ms |       1 | `0x92a9b` | `usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x9a8f4` (`usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30`)

|      % |  Time | Samples | Caller    | Location                              |
| -----: | ----: | ------: | --------- | ------------------------------------- |
| 100.0% | 1.0ms |       1 | `0x27743` | `usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x9d234` (`usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30`)

|      % |  Time | Samples | Caller    | Location                              |
| -----: | ----: | ------: | --------- | ------------------------------------- |
| 100.0% | 1.0ms |       1 | `0x27743` | `usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `std::char_traits::copy` (`usr/include/c++/12/bits/char_traits.h`)

|      % |  Time | Samples | Caller                                | Location                                 |
| -----: | ----: | ------: | ------------------------------------- | ---------------------------------------- |
| 100.0% | 1.0ms |       1 | `std::__cxx11::basic_string::_S_copy` | `usr/include/c++/12/bits/basic_string.h` |

##### `std::__cxx11::basic_string::_Alloc_hider::_Alloc_hider` (`usr/include/c++/12/bits/basic_string.h`)

|      % |  Time | Samples | Caller                                     | Location                                 |
| -----: | ----: | ------: | ------------------------------------------ | ---------------------------------------- |
| 100.0% | 1.0ms |       1 | `std::__cxx11::basic_string::basic_string` | `usr/include/c++/12/bits/basic_string.h` |

##### `std::__cxx11::basic_string::~basic_string` (`usr/include/c++/12/bits/basic_string.h`)

|      % |  Time | Samples | Caller                                              | Location                       |
| -----: | ----: | ------: | --------------------------------------------------- | ------------------------------ |
| 100.0% | 1.0ms |       1 | `fmt::v12::detail::digit_grouping::~digit_grouping` | `src/fmt/include/fmt/format.h` |

##### `std::__cxx11::basic_string::size` (`usr/include/c++/12/bits/basic_string.h`)

|      % |  Time | Samples | Caller | Location          |
| -----: | ----: | ------: | ------ | ----------------- |
| 100.0% | 1.0ms |       1 | `main` | `out/profile.cpp` |

### Total time

Functions ranked by total time spent in the function and all its callees.

|      % |    Time | Samples | Function                                                                                   | Location                              |
| -----: | ------: | ------: | ------------------------------------------------------------------------------------------ | ------------------------------------- |
| 100.0% | 537.0ms |     537 | `0x27743`                                                                                  | `usr/lib/aarch64-linux-gnu/libc.so.6` |
| 100.0% | 537.0ms |     537 | `0x27817`                                                                                  | `usr/lib/aarch64-linux-gnu/libc.so.6` |
| 100.0% | 537.0ms |     537 | `_start`                                                                                   | `<unknown>`                           |
|  97.4% | 523.0ms |     523 | `main`                                                                                     | `out/profile.cpp`                     |
|  95.9% | 515.0ms |     515 | `fmt::v12::vformat[abi:cxx11]`                                                             | `src/fmt/include/fmt/format-inl.h`    |
|  95.3% | 512.0ms |     512 | `fmt::v12::format`                                                                         | `src/fmt/include/fmt/format.h`        |
|  87.5% | 470.0ms |     470 | `fmt::v12::detail::vformat_to`                                                             | `src/fmt/include/fmt/format-inl.h`    |
|  87.2% | 468.0ms |     468 | `fmt::v12::detail::parse_format_string`                                                    | `src/fmt/include/fmt/base.h`          |
|  75.4% | 405.0ms |     405 | `fmt::v12::detail::parse_replacement_field`                                                | `src/fmt/include/fmt/base.h`          |
|  63.3% | 340.0ms |     340 | `fmt::v12::detail::format_handler::on_format_specs`                                        | `src/fmt/include/fmt/format.h`        |
|  35.2% | 189.0ms |     189 | `fmt::v12::detail::write`                                                                  | `src/fmt/include/fmt/format.h`        |
|  13.2% |  71.0ms |      71 | `fmt::v12::detail::for_each_codepoint`                                                     | `src/fmt/include/fmt/format.h`        |
|  12.3% |  66.0ms |      66 | `fmt::v12::detail::for_each_codepoint()::{lambda(char const*, char const*)#1}::operator()` | `src/fmt/include/fmt/format.h`        |
|  11.9% |  64.0ms |      64 | `fmt::v12::detail::copy_noinline`                                                          | `src/fmt/include/fmt/format.h`        |
|  11.9% |  64.0ms |      64 | `fmt::v12::detail::write_padded`                                                           | `src/fmt/include/fmt/format.h`        |
|  10.6% |  57.0ms |      57 | `fmt::v12::detail::parse_format_specs`                                                     | `src/fmt/include/fmt/base.h`          |
|   9.9% |  53.0ms |      53 | `fmt::v12::detail::copy`                                                                   | `src/fmt/include/fmt/base.h`          |
|   9.7% |  52.0ms |      52 | `fmt::v12::detail::buffer::append`                                                         | `src/fmt/include/fmt/base.h`          |
|   8.8% |  47.0ms |      47 | `fmt::v12::detail::write_int`                                                              | `src/fmt/include/fmt/format.h`        |
|   8.8% |  47.0ms |      47 | `fmt::v12::detail::format_handler::on_replacement_field`                                   | `src/fmt/include/fmt/format.h`        |

#### Categories

##### Ours

|     % |    Time | Samples | Function                                                                                   | Location                           |
| ----: | ------: | ------: | ------------------------------------------------------------------------------------------ | ---------------------------------- |
| 97.4% | 523.0ms |     523 | `main`                                                                                     | `out/profile.cpp`                  |
| 95.9% | 515.0ms |     515 | `fmt::v12::vformat[abi:cxx11]`                                                             | `src/fmt/include/fmt/format-inl.h` |
| 95.3% | 512.0ms |     512 | `fmt::v12::format`                                                                         | `src/fmt/include/fmt/format.h`     |
| 87.5% | 470.0ms |     470 | `fmt::v12::detail::vformat_to`                                                             | `src/fmt/include/fmt/format-inl.h` |
| 87.2% | 468.0ms |     468 | `fmt::v12::detail::parse_format_string`                                                    | `src/fmt/include/fmt/base.h`       |
| 75.4% | 405.0ms |     405 | `fmt::v12::detail::parse_replacement_field`                                                | `src/fmt/include/fmt/base.h`       |
| 63.3% | 340.0ms |     340 | `fmt::v12::detail::format_handler::on_format_specs`                                        | `src/fmt/include/fmt/format.h`     |
| 35.2% | 189.0ms |     189 | `fmt::v12::detail::write`                                                                  | `src/fmt/include/fmt/format.h`     |
| 13.2% |  71.0ms |      71 | `fmt::v12::detail::for_each_codepoint`                                                     | `src/fmt/include/fmt/format.h`     |
| 12.3% |  66.0ms |      66 | `fmt::v12::detail::for_each_codepoint()::{lambda(char const*, char const*)#1}::operator()` | `src/fmt/include/fmt/format.h`     |
| 11.9% |  64.0ms |      64 | `fmt::v12::detail::copy_noinline`                                                          | `src/fmt/include/fmt/format.h`     |
| 11.9% |  64.0ms |      64 | `fmt::v12::detail::write_padded`                                                           | `src/fmt/include/fmt/format.h`     |
| 10.6% |  57.0ms |      57 | `fmt::v12::detail::parse_format_specs`                                                     | `src/fmt/include/fmt/base.h`       |
|  9.9% |  53.0ms |      53 | `fmt::v12::detail::copy`                                                                   | `src/fmt/include/fmt/base.h`       |
|  9.7% |  52.0ms |      52 | `fmt::v12::detail::buffer::append`                                                         | `src/fmt/include/fmt/base.h`       |
|  8.8% |  47.0ms |      47 | `fmt::v12::detail::write_int`                                                              | `src/fmt/include/fmt/format.h`     |
|  8.8% |  47.0ms |      47 | `fmt::v12::detail::format_handler::on_replacement_field`                                   | `src/fmt/include/fmt/format.h`     |
|  8.8% |  47.0ms |      47 | `fmt::v12::detail::write_float`                                                            | `src/fmt/include/fmt/format.h`     |
|  7.8% |  42.0ms |      42 | `fmt::v12::detail::utf8_decode`                                                            | `src/fmt/include/fmt/format.h`     |
|  6.7% |  36.0ms |      36 | `fmt::v12::detail::format_handler::on_text`                                                | `src/fmt/include/fmt/format.h`     |

##### Native

|      % |    Time | Samples | Function   | Location                                        |
| -----: | ------: | ------: | ---------- | ----------------------------------------------- |
| 100.0% | 537.0ms |     537 | `0x27743`  | `usr/lib/aarch64-linux-gnu/libc.so.6`           |
| 100.0% | 537.0ms |     537 | `0x27817`  | `usr/lib/aarch64-linux-gnu/libc.so.6`           |
| 100.0% | 537.0ms |     537 | `_start`   | `<unknown>`                                     |
|   2.6% |  14.0ms |      14 | `0x9d100`  | `usr/lib/aarch64-linux-gnu/libc.so.6`           |
|   2.2% |  12.0ms |      12 | `0x9e6c0`  | `usr/lib/aarch64-linux-gnu/libc.so.6`           |
|   1.9% |  10.0ms |      10 | `0x137f80` | `usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|   1.9% |  10.0ms |      10 | `0x137f20` | `usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|   1.7% |   9.0ms |       9 | `0xa0cb0`  | `usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|   0.9% |   5.0ms |       5 | `0xa2cab`  | `usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|   0.9% |   5.0ms |       5 | `0x92a9b`  | `usr/lib/aarch64-linux-gnu/libc.so.6`           |
|   0.7% |   4.0ms |       4 | `0x8faf4`  | `usr/lib/aarch64-linux-gnu/libc.so.6`           |
|   0.6% |   3.0ms |       3 | `_init`    | `<unknown>`                                     |
|   0.6% |   3.0ms |       3 | `0x92284`  | `usr/lib/aarch64-linux-gnu/libc.so.6`           |
|   0.6% |   3.0ms |       3 | `0x929e0`  | `usr/lib/aarch64-linux-gnu/libc.so.6`           |
|   0.4% |   2.0ms |       2 | `0x9e6e8`  | `usr/lib/aarch64-linux-gnu/libc.so.6`           |
|   0.4% |   2.0ms |       2 | `0x137f84` | `usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|   0.4% |   2.0ms |       2 | `0x9d11c`  | `usr/lib/aarch64-linux-gnu/libc.so.6`           |
|   0.4% |   2.0ms |       2 | `0x9a104`  | `usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|   0.4% |   2.0ms |       2 | `0x92aa0`  | `usr/lib/aarch64-linux-gnu/libc.so.6`           |
|   0.2% |   1.0ms |       1 | `0x9d1b0`  | `usr/lib/aarch64-linux-gnu/libc.so.6`           |

##### Standard library

|    % |   Time | Samples | Function                                                 | Location                                   |
| ---: | -----: | ------: | -------------------------------------------------------- | ------------------------------------------ |
| 2.0% | 11.0ms |      11 | `std::__cxx11::basic_string::~basic_string`              | `usr/include/c++/12/bits/basic_string.h`   |
| 1.9% | 10.0ms |      10 | `std::__cxx11::basic_string::basic_string`               | `usr/include/c++/12/bits/basic_string.h`   |
| 1.9% | 10.0ms |      10 | `std::__new_allocator::deallocate`                       | `usr/include/c++/12/bits/new_allocator.h`  |
| 1.9% | 10.0ms |      10 | `std::allocator_traits::deallocate`                      | `usr/include/c++/12/bits/alloc_traits.h`   |
| 1.9% | 10.0ms |      10 | `std::__cxx11::basic_string::_M_destroy`                 | `usr/include/c++/12/bits/basic_string.h`   |
| 1.9% | 10.0ms |      10 | `std::__cxx11::basic_string::_M_dispose`                 | `usr/include/c++/12/bits/basic_string.h`   |
| 1.7% |  9.0ms |       9 | `std::__cxx11::basic_string::_M_construct`               | `usr/include/c++/12/bits/basic_string.tcc` |
| 0.2% |  1.0ms |       1 | `std::char_traits::copy`                                 | `usr/include/c++/12/bits/char_traits.h`    |
| 0.2% |  1.0ms |       1 | `std::__cxx11::basic_string::_S_copy`                    | `usr/include/c++/12/bits/basic_string.h`   |
| 0.2% |  1.0ms |       1 | `std::__cxx11::basic_string::_S_copy_chars`              | `usr/include/c++/12/bits/basic_string.h`   |
| 0.2% |  1.0ms |       1 | `std::__cxx11::basic_string::_Alloc_hider::_Alloc_hider` | `usr/include/c++/12/bits/basic_string.h`   |
| 0.2% |  1.0ms |       1 | `std::__cxx11::basic_string::size`                       | `usr/include/c++/12/bits/basic_string.h`   |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `0x27743` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |    Time | Samples | Callee                         | Location                                        |
| ----: | ------: | ------: | ------------------------------ | ----------------------------------------------- |
| 97.4% | 523.0ms |     523 | `main`                         | `out/profile.cpp`                               |
|  1.7% |   9.0ms |       9 | `0xa0cb0`                      | `usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|  0.6% |   3.0ms |       3 | `fmt::v12::vformat[abi:cxx11]` | `src/fmt/include/fmt/format-inl.h`              |
|  0.2% |   1.0ms |       1 | `0x9a8f4`                      | `usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|  0.2% |   1.0ms |       1 | `0x9d234`                      | `usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |

##### `0x27817` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |    Time | Samples | Callee    | Location                              |
| -----: | ------: | ------: | --------- | ------------------------------------- |
| 100.0% | 537.0ms |     537 | `0x27743` | `usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `_start` (`<unknown>`)

|      % |    Time | Samples | Callee    | Location                              |
| -----: | ------: | ------: | --------- | ------------------------------------- |
| 100.0% | 537.0ms |     537 | `0x27817` | `usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `main` (`out/profile.cpp`)

|     % |    Time | Samples | Callee                                      | Location                                 |
| ----: | ------: | ------: | ------------------------------------------- | ---------------------------------------- |
| 97.9% | 512.0ms |     512 | `fmt::v12::format`                          | `src/fmt/include/fmt/format.h`           |
|  1.9% |  10.0ms |      10 | `std::__cxx11::basic_string::~basic_string` | `usr/include/c++/12/bits/basic_string.h` |
|  0.2% |   1.0ms |       1 | `std::__cxx11::basic_string::size`          | `usr/include/c++/12/bits/basic_string.h` |

##### `fmt::v12::vformat[abi:cxx11]` (`src/fmt/include/fmt/format-inl.h`)

|     % |    Time | Samples | Callee                         | Location                                        |
| ----: | ------: | ------: | ------------------------------ | ----------------------------------------------- |
| 91.3% | 470.0ms |     470 | `fmt::v12::detail::vformat_to` | `src/fmt/include/fmt/format-inl.h`              |
|  2.7% |  14.0ms |      14 | `0x9d100`                      | `usr/lib/aarch64-linux-gnu/libc.so.6`           |
|  2.1% |  11.0ms |      11 | `fmt::v12::to_string`          | `src/fmt/include/fmt/format.h`                  |
|  1.9% |  10.0ms |      10 | `0x137f20`                     | `usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|  0.4% |   2.0ms |       2 | `0x9a104`                      | `usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |

##### `fmt::v12::format` (`src/fmt/include/fmt/format.h`)

|      % |    Time | Samples | Callee                         | Location                           |
| -----: | ------: | ------: | ------------------------------ | ---------------------------------- |
| 100.0% | 512.0ms |     512 | `fmt::v12::vformat[abi:cxx11]` | `src/fmt/include/fmt/format-inl.h` |

##### `fmt::v12::detail::vformat_to` (`src/fmt/include/fmt/format-inl.h`)

|     % |    Time | Samples | Callee                                  | Location                     |
| ----: | ------: | ------: | --------------------------------------- | ---------------------------- |
| 99.6% | 468.0ms |     468 | `fmt::v12::detail::parse_format_string` | `src/fmt/include/fmt/base.h` |
|  0.4% |   2.0ms |       2 | `fmt::v12::context::context`            | `src/fmt/include/fmt/base.h` |

##### `fmt::v12::detail::parse_format_string` (`src/fmt/include/fmt/base.h`)

|     % |    Time | Samples | Callee                                      | Location                       |
| ----: | ------: | ------: | ------------------------------------------- | ------------------------------ |
| 86.5% | 405.0ms |     405 | `fmt::v12::detail::parse_replacement_field` | `src/fmt/include/fmt/base.h`   |
|  7.7% |  36.0ms |      36 | `fmt::v12::detail::format_handler::on_text` | `src/fmt/include/fmt/format.h` |
|  0.9% |   4.0ms |       4 | `fmt::v12::detail::write`                   | `src/fmt/include/fmt/format.h` |
|  0.9% |   4.0ms |       4 | `fmt::v12::detail::write_int`               | `src/fmt/include/fmt/format.h` |

##### `fmt::v12::detail::parse_replacement_field` (`src/fmt/include/fmt/base.h`)

|     % |    Time | Samples | Callee                                                   | Location                       |
| ----: | ------: | ------: | -------------------------------------------------------- | ------------------------------ |
| 84.0% | 340.0ms |     340 | `fmt::v12::detail::format_handler::on_format_specs`      | `src/fmt/include/fmt/format.h` |
| 11.6% |  47.0ms |      47 | `fmt::v12::detail::format_handler::on_replacement_field` | `src/fmt/include/fmt/format.h` |
|  1.2% |   5.0ms |       5 | `fmt::v12::detail::format_handler::on_arg_id`            | `src/fmt/include/fmt/format.h` |

##### `fmt::v12::detail::format_handler::on_format_specs` (`src/fmt/include/fmt/format.h`)

|     % |    Time | Samples | Callee                                 | Location                       |
| ----: | ------: | ------: | -------------------------------------- | ------------------------------ |
| 52.4% | 178.0ms |     178 | `fmt::v12::detail::write`              | `src/fmt/include/fmt/format.h` |
| 16.8% |  57.0ms |      57 | `fmt::v12::detail::parse_format_specs` | `src/fmt/include/fmt/base.h`   |
| 12.6% |  43.0ms |      43 | `fmt::v12::detail::write_int`          | `src/fmt/include/fmt/format.h` |
|  5.9% |  20.0ms |      20 | `fmt::v12::basic_format_arg::visit`    | `src/fmt/include/fmt/base.h`   |
|  2.4% |   8.0ms |       8 | `fmt::v12::detail::parse_dynamic_spec` | `src/fmt/include/fmt/base.h`   |

##### `fmt::v12::detail::write` (`src/fmt/include/fmt/format.h`)

|     % |   Time | Samples | Callee                                 | Location                       |
| ----: | -----: | ------: | -------------------------------------- | ------------------------------ |
| 37.6% | 71.0ms |      71 | `fmt::v12::detail::for_each_codepoint` | `src/fmt/include/fmt/format.h` |
| 24.9% | 47.0ms |      47 | `fmt::v12::detail::write_float`        | `src/fmt/include/fmt/format.h` |
| 13.8% | 26.0ms |      26 | `fmt::v12::detail::format_float`       | `src/fmt/include/fmt/format.h` |
|  7.9% | 15.0ms |      15 | `fmt::v12::detail::write_padded`       | `src/fmt/include/fmt/format.h` |
|  1.1% |  2.0ms |       2 | `fmt::v12::basic_specs::align`         | `src/fmt/include/fmt/base.h`   |

##### `fmt::v12::detail::for_each_codepoint` (`src/fmt/include/fmt/format.h`)

|     % |   Time | Samples | Callee                                                                                     | Location                       |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------------ | ------------------------------ |
| 93.0% | 66.0ms |      66 | `fmt::v12::detail::for_each_codepoint()::{lambda(char const*, char const*)#1}::operator()` | `src/fmt/include/fmt/format.h` |
|  1.4% |  1.0ms |       1 | `fmt::v12::detail::copy`                                                                   | `src/fmt/include/fmt/base.h`   |

##### `fmt::v12::detail::for_each_codepoint()::{lambda(char const*, char const*)#1}::operator()` (`src/fmt/include/fmt/format.h`)

|     % |   Time | Samples | Callee                                                                                         | Location                       |
| ----: | -----: | ------: | ---------------------------------------------------------------------------------------------- | ------------------------------ |
| 63.6% | 42.0ms |      42 | `fmt::v12::detail::utf8_decode`                                                                | `src/fmt/include/fmt/format.h` |
| 21.2% | 14.0ms |      14 | `fmt::v12::detail::write()::{lambda(unsigned int, fmt::v12::basic_string_view)#1}::operator()` | `src/fmt/include/fmt/format.h` |

##### `fmt::v12::detail::copy_noinline` (`src/fmt/include/fmt/format.h`)

|     % |   Time | Samples | Callee                   | Location                     |
| ----: | -----: | ------: | ------------------------ | ---------------------------- |
| 60.9% | 39.0ms |      39 | `fmt::v12::detail::copy` | `src/fmt/include/fmt/base.h` |

##### `fmt::v12::detail::write_padded` (`src/fmt/include/fmt/format.h`)

|     % |   Time | Samples | Callee                                                                              | Location                       |
| ----: | -----: | ------: | ----------------------------------------------------------------------------------- | ------------------------------ |
| 76.6% | 49.0ms |      49 | `fmt::v12::detail::write_padded`                                                    | `src/fmt/include/fmt/format.h` |
| 34.4% | 22.0ms |      22 | `fmt::v12::detail::write_fixed()::{lambda(fmt::v12::basic_appender)#2}::operator()` | `src/fmt/include/fmt/format.h` |
| 17.2% | 11.0ms |      11 | `fmt::v12::detail::write_int()::{lambda(fmt::v12::basic_appender)#1}::operator()`   | `src/fmt/include/fmt/format.h` |
| 15.6% | 10.0ms |      10 | `fmt::v12::detail::fill`                                                            | `src/fmt/include/fmt/format.h` |
|  7.8% |  5.0ms |       5 | `fmt::v12::detail::write()::{lambda(fmt::v12::basic_appender)#2}::operator()`       | `src/fmt/include/fmt/format.h` |

##### `fmt::v12::detail::parse_format_specs` (`src/fmt/include/fmt/base.h`)

|     % |   Time | Samples | Callee                                                                 | Location                     |
| ----: | -----: | ------: | ---------------------------------------------------------------------- | ---------------------------- |
| 19.3% | 11.0ms |      11 | `fmt::v12::detail::parse_width`                                        | `src/fmt/include/fmt/base.h` |
| 12.3% |  7.0ms |       7 | `fmt::v12::detail::parse_precision`                                    | `src/fmt/include/fmt/base.h` |
|  7.0% |  4.0ms |       4 | `fmt::v12::detail::parse_format_specs()::{unnamed type#1}::operator()` | `src/fmt/include/fmt/base.h` |
|  3.5% |  2.0ms |       2 | `fmt::v12::detail::parse_format_specs()::{unnamed type#2}::operator()` | `src/fmt/include/fmt/base.h` |
|  1.8% |  1.0ms |       1 | `fmt::v12::basic_specs::set_sign`                                      | `src/fmt/include/fmt/base.h` |

##### `fmt::v12::detail::copy` (`src/fmt/include/fmt/base.h`)

|     % |   Time | Samples | Callee                             | Location                     |
| ----: | -----: | ------: | ---------------------------------- | ---------------------------- |
| 98.1% | 52.0ms |      52 | `fmt::v12::detail::buffer::append` | `src/fmt/include/fmt/base.h` |

##### `fmt::v12::detail::buffer::append` (`src/fmt/include/fmt/base.h`)

|    % |  Time | Samples | Callee                                  | Location                     |
| ---: | ----: | ------: | --------------------------------------- | ---------------------------- |
| 9.6% | 5.0ms |       5 | `fmt::v12::detail::buffer::try_reserve` | `src/fmt/include/fmt/base.h` |
| 3.8% | 2.0ms |       2 | `fmt::v12::detail::to_unsigned`         | `src/fmt/include/fmt/base.h` |

##### `fmt::v12::detail::write_int` (`src/fmt/include/fmt/format.h`)

|     % |   Time | Samples | Callee                                         | Location                       |
| ----: | -----: | ------: | ---------------------------------------------- | ------------------------------ |
| 48.9% | 23.0ms |      23 | `fmt::v12::detail::write_padded`               | `src/fmt/include/fmt/format.h` |
| 14.9% |  7.0ms |       7 | `fmt::v12::detail::do_format_decimal`          | `src/fmt/include/fmt/format.h` |
|  6.4% |  3.0ms |       3 | `fmt::v12::detail::do_format_base2e`           | `src/fmt/include/fmt/format.h` |
|  4.3% |  2.0ms |       2 | `fmt::v12::detail::size_padding::size_padding` | `src/fmt/include/fmt/format.h` |

##### `fmt::v12::detail::format_handler::on_replacement_field` (`src/fmt/include/fmt/format.h`)

|     % |   Time | Samples | Callee                                | Location                              |
| ----: | -----: | ------: | ------------------------------------- | ------------------------------------- |
| 38.3% | 18.0ms |      18 | `fmt::v12::detail::copy_noinline`     | `src/fmt/include/fmt/format.h`        |
| 14.9% |  7.0ms |       7 | `fmt::v12::detail::do_format_decimal` | `src/fmt/include/fmt/format.h`        |
| 14.9% |  7.0ms |       7 | `fmt::v12::basic_format_arg::visit`   | `src/fmt/include/fmt/base.h`          |
| 12.8% |  6.0ms |       6 | `0x9e6c0`                             | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  6.4% |  3.0ms |       3 | `fmt::v12::context::arg`              | `src/fmt/include/fmt/base.h`          |

##### `fmt::v12::detail::write_float` (`src/fmt/include/fmt/format.h`)

|     % |   Time | Samples | Callee                             | Location                                        |
| ----: | -----: | ------: | ---------------------------------- | ----------------------------------------------- |
| 70.2% | 33.0ms |      33 | `fmt::v12::detail::write_fixed`    | `src/fmt/include/fmt/format.h`                  |
| 21.3% | 10.0ms |      10 | `0x137f80`                         | `usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|  4.3% |  2.0ms |       2 | `0x137f84`                         | `usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|  2.1% |  1.0ms |       1 | `fmt::v12::detail::do_write_float` | `src/fmt/include/fmt/format.h`                  |

##### `fmt::v12::detail::format_handler::on_text` (`src/fmt/include/fmt/format.h`)

|     % |   Time | Samples | Callee                            | Location                       |
| ----: | -----: | ------: | --------------------------------- | ------------------------------ |
| 86.1% | 31.0ms |      31 | `fmt::v12::detail::copy_noinline` | `src/fmt/include/fmt/format.h` |
|  8.3% |  3.0ms |       3 | `fmt::v12::context::out`          | `src/fmt/include/fmt/base.h`   |

##### `std::__cxx11::basic_string::~basic_string` (`usr/include/c++/12/bits/basic_string.h`)

|     % |   Time | Samples | Callee                                   | Location                                 |
| ----: | -----: | ------: | ---------------------------------------- | ---------------------------------------- |
| 90.9% | 10.0ms |      10 | `std::__cxx11::basic_string::_M_dispose` | `usr/include/c++/12/bits/basic_string.h` |

##### `std::__cxx11::basic_string::basic_string` (`usr/include/c++/12/bits/basic_string.h`)

|     % |  Time | Samples | Callee                                                   | Location                                   |
| ----: | ----: | ------: | -------------------------------------------------------- | ------------------------------------------ |
| 90.0% | 9.0ms |       9 | `std::__cxx11::basic_string::_M_construct`               | `usr/include/c++/12/bits/basic_string.tcc` |
| 10.0% | 1.0ms |       1 | `std::__cxx11::basic_string::_Alloc_hider::_Alloc_hider` | `usr/include/c++/12/bits/basic_string.h`   |

##### `std::__new_allocator::deallocate` (`usr/include/c++/12/bits/new_allocator.h`)

|     % |  Time | Samples | Callee    | Location                              |
| ----: | ----: | ------: | --------- | ------------------------------------- |
| 50.0% | 5.0ms |       5 | `0x92a9b` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
| 30.0% | 3.0ms |       3 | `0x929e0` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
| 20.0% | 2.0ms |       2 | `0x92aa0` | `usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `std::allocator_traits::deallocate` (`usr/include/c++/12/bits/alloc_traits.h`)

|      % |   Time | Samples | Callee                             | Location                                  |
| -----: | -----: | ------: | ---------------------------------- | ----------------------------------------- |
| 100.0% | 10.0ms |      10 | `std::__new_allocator::deallocate` | `usr/include/c++/12/bits/new_allocator.h` |

##### `std::__cxx11::basic_string::_M_destroy` (`usr/include/c++/12/bits/basic_string.h`)

|      % |   Time | Samples | Callee                              | Location                                 |
| -----: | -----: | ------: | ----------------------------------- | ---------------------------------------- |
| 100.0% | 10.0ms |      10 | `std::allocator_traits::deallocate` | `usr/include/c++/12/bits/alloc_traits.h` |

##### `std::__cxx11::basic_string::_M_dispose` (`usr/include/c++/12/bits/basic_string.h`)

|      % |   Time | Samples | Callee                                   | Location                                 |
| -----: | -----: | ------: | ---------------------------------------- | ---------------------------------------- |
| 100.0% | 10.0ms |      10 | `std::__cxx11::basic_string::_M_destroy` | `usr/include/c++/12/bits/basic_string.h` |

##### `std::__cxx11::basic_string::_M_construct` (`usr/include/c++/12/bits/basic_string.tcc`)

|     % |  Time | Samples | Callee                                      | Location                                        |
| ----: | ----: | ------: | ------------------------------------------- | ----------------------------------------------- |
| 55.6% | 5.0ms |       5 | `0xa2cab`                                   | `usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
| 11.1% | 1.0ms |       1 | `std::__cxx11::basic_string::_S_copy_chars` | `usr/include/c++/12/bits/basic_string.h`        |
| 11.1% | 1.0ms |       1 | `0x9c2e4`                                   | `usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |

##### `0xa2cab` (`usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30`)

|     % |  Time | Samples | Callee    | Location                              |
| ----: | ----: | ------: | --------- | ------------------------------------- |
| 60.0% | 3.0ms |       3 | `0x92284` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
| 20.0% | 1.0ms |       1 | `0x92274` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
| 20.0% | 1.0ms |       1 | `0x923f0` | `usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x92a9b` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |  Time | Samples | Callee    | Location                              |
| ----: | ----: | ------: | --------- | ------------------------------------- |
| 80.0% | 4.0ms |       4 | `0x8faf4` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
| 20.0% | 1.0ms |       1 | `0x8fbf0` | `usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `std::__cxx11::basic_string::_S_copy` (`usr/include/c++/12/bits/basic_string.h`)

|      % |  Time | Samples | Callee                                | Location                                 |
| -----: | ----: | ------: | ------------------------------------- | ---------------------------------------- |
| 100.0% | 1.0ms |       1 | `std::char_traits::copy`              | `usr/include/c++/12/bits/char_traits.h`  |
| 100.0% | 1.0ms |       1 | `std::__cxx11::basic_string::_S_copy` | `usr/include/c++/12/bits/basic_string.h` |

##### `std::__cxx11::basic_string::_S_copy_chars` (`usr/include/c++/12/bits/basic_string.h`)

|      % |  Time | Samples | Callee                                | Location                                 |
| -----: | ----: | ------: | ------------------------------------- | ---------------------------------------- |
| 100.0% | 1.0ms |       1 | `std::__cxx11::basic_string::_S_copy` | `usr/include/c++/12/bits/basic_string.h` |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

Common call stack: `0x27743` (`usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start`

|    % |   Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ---: | -----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 7.8% | 42.0ms |      42 | `fmt::v12::detail::utf8_decode` (`src/fmt/include/fmt/format.h`) ← `fmt::v12::detail::for_each_codepoint()::{lambda(char const*, char const*)#1}::operator()` ← `fmt::v12::detail::for_each_codepoint` ← `fmt::v12::detail::write` ← `fmt::v12::detail::format_handler::on_format_specs` ← `fmt::v12::detail::parse_replacement_field` (`src/fmt/include/fmt/base.h`) ← `fmt::v12::detail::parse_format_string` ← `fmt::v12::detail::vformat_to` (`src/fmt/include/fmt/format-inl.h`) ← `fmt::v12::vformat[abi:cxx11]` ← `fmt::v12::format` (`src/fmt/include/fmt/format.h`) ← `main` (`out/profile.cpp`)                                                                                                                                                                                                                                                                            |
| 5.8% | 31.0ms |      31 | `fmt::v12::detail::parse_format_specs` (`src/fmt/include/fmt/base.h`) ← `fmt::v12::detail::format_handler::on_format_specs` (`src/fmt/include/fmt/format.h`) ← `fmt::v12::detail::parse_replacement_field` (`src/fmt/include/fmt/base.h`) ← `fmt::v12::detail::parse_format_string` ← `fmt::v12::detail::vformat_to` (`src/fmt/include/fmt/format-inl.h`) ← `fmt::v12::vformat[abi:cxx11]` ← `fmt::v12::format` (`src/fmt/include/fmt/format.h`) ← `main` (`out/profile.cpp`)                                                                                                                                                                                                                                                                                                                                                                                                        |
| 3.5% | 19.0ms |      19 | `fmt::v12::detail::parse_format_string` (`src/fmt/include/fmt/base.h`) ← `fmt::v12::detail::vformat_to` (`src/fmt/include/fmt/format-inl.h`) ← `fmt::v12::vformat[abi:cxx11]` ← `fmt::v12::format` (`src/fmt/include/fmt/format.h`) ← `main` (`out/profile.cpp`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 2.8% | 15.0ms |      15 | `fmt::v12::detail::copy_noinline` (`src/fmt/include/fmt/format.h`) ← `fmt::v12::detail::format_handler::on_text` ← `fmt::v12::detail::parse_format_string` (`src/fmt/include/fmt/base.h`) ← `fmt::v12::detail::vformat_to` (`src/fmt/include/fmt/format-inl.h`) ← `fmt::v12::vformat[abi:cxx11]` ← `fmt::v12::format` (`src/fmt/include/fmt/format.h`) ← `main` (`out/profile.cpp`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 2.6% | 14.0ms |      14 | `0x9d100` (`usr/lib/aarch64-linux-gnu/libc.so.6`) ← `fmt::v12::vformat[abi:cxx11]` (`src/fmt/include/fmt/format-inl.h`) ← `fmt::v12::format` (`src/fmt/include/fmt/format.h`) ← `main` (`out/profile.cpp`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 2.4% | 13.0ms |      13 | `fmt::v12::detail::buffer::append` (`src/fmt/include/fmt/base.h`) ← `fmt::v12::detail::copy` ← `fmt::v12::detail::copy_noinline` (`src/fmt/include/fmt/format.h`) ← `fmt::v12::detail::format_handler::on_text` ← `fmt::v12::detail::parse_format_string` (`src/fmt/include/fmt/base.h`) ← `fmt::v12::detail::vformat_to` (`src/fmt/include/fmt/format-inl.h`) ← `fmt::v12::vformat[abi:cxx11]` ← `fmt::v12::format` (`src/fmt/include/fmt/format.h`) ← `main` (`out/profile.cpp`)                                                                                                                                                                                                                                                                                                                                                                                                   |
| 2.4% | 13.0ms |      13 | `fmt::v12::detail::parse_replacement_field` (`src/fmt/include/fmt/base.h`) ← `fmt::v12::detail::parse_format_string` ← `fmt::v12::detail::vformat_to` (`src/fmt/include/fmt/format-inl.h`) ← `fmt::v12::vformat[abi:cxx11]` ← `fmt::v12::format` (`src/fmt/include/fmt/format.h`) ← `main` (`out/profile.cpp`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 2.2% | 12.0ms |      12 | `fmt::v12::detail::write` (`src/fmt/include/fmt/format.h`) ← `fmt::v12::detail::format_handler::on_format_specs` ← `fmt::v12::detail::parse_replacement_field` (`src/fmt/include/fmt/base.h`) ← `fmt::v12::detail::parse_format_string` ← `fmt::v12::detail::vformat_to` (`src/fmt/include/fmt/format-inl.h`) ← `fmt::v12::vformat[abi:cxx11]` ← `fmt::v12::format` (`src/fmt/include/fmt/format.h`) ← `main` (`out/profile.cpp`)                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 2.2% | 12.0ms |      12 | `fmt::v12::basic_format_arg::visit` (`src/fmt/include/fmt/base.h`) ← `fmt::v12::detail::format_handler::on_format_specs` (`src/fmt/include/fmt/format.h`) ← `fmt::v12::detail::parse_replacement_field` (`src/fmt/include/fmt/base.h`) ← `fmt::v12::detail::parse_format_string` ← `fmt::v12::detail::vformat_to` (`src/fmt/include/fmt/format-inl.h`) ← `fmt::v12::vformat[abi:cxx11]` ← `fmt::v12::format` (`src/fmt/include/fmt/format.h`) ← `main` (`out/profile.cpp`)                                                                                                                                                                                                                                                                                                                                                                                                           |
| 2.2% | 12.0ms |      12 | `fmt::v12::detail::format_float` (`src/fmt/include/fmt/format.h`) ← `fmt::v12::detail::write` ← `fmt::v12::detail::format_handler::on_format_specs` ← `fmt::v12::detail::parse_replacement_field` (`src/fmt/include/fmt/base.h`) ← `fmt::v12::detail::parse_format_string` ← `fmt::v12::detail::vformat_to` (`src/fmt/include/fmt/format-inl.h`) ← `fmt::v12::vformat[abi:cxx11]` ← `fmt::v12::format` (`src/fmt/include/fmt/format.h`) ← `main` (`out/profile.cpp`)                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 2.0% | 11.0ms |      11 | `fmt::v12::detail::buffer::append` (`src/fmt/include/fmt/base.h`) ← `fmt::v12::detail::copy` ← `fmt::v12::detail::copy_noinline` (`src/fmt/include/fmt/format.h`) ← `fmt::v12::detail::format_handler::on_replacement_field` ← `fmt::v12::detail::parse_replacement_field` (`src/fmt/include/fmt/base.h`) ← `fmt::v12::detail::parse_format_string` ← `fmt::v12::detail::vformat_to` (`src/fmt/include/fmt/format-inl.h`) ← `fmt::v12::vformat[abi:cxx11]` ← `fmt::v12::format` (`src/fmt/include/fmt/format.h`) ← `main` (`out/profile.cpp`)                                                                                                                                                                                                                                                                                                                                        |
| 2.0% | 11.0ms |      11 | `fmt::v12::detail::write()::{lambda(unsigned int, fmt::v12::basic_string_view)#1}::operator()` (`src/fmt/include/fmt/format.h`) ← `fmt::v12::detail::for_each_codepoint()::{lambda(char const*, char const*)#1}::operator()` ← `fmt::v12::detail::for_each_codepoint` ← `fmt::v12::detail::write` ← `fmt::v12::detail::format_handler::on_format_specs` ← `fmt::v12::detail::parse_replacement_field` (`src/fmt/include/fmt/base.h`) ← `fmt::v12::detail::parse_format_string` ← `fmt::v12::detail::vformat_to` (`src/fmt/include/fmt/format-inl.h`) ← `fmt::v12::vformat[abi:cxx11]` ← `fmt::v12::format` (`src/fmt/include/fmt/format.h`) ← `main` (`out/profile.cpp`)                                                                                                                                                                                                             |
| 1.9% | 10.0ms |      10 | `fmt::v12::detail::format_handler::on_format_specs` (`src/fmt/include/fmt/format.h`) ← `fmt::v12::detail::parse_replacement_field` (`src/fmt/include/fmt/base.h`) ← `fmt::v12::detail::parse_format_string` ← `fmt::v12::detail::vformat_to` (`src/fmt/include/fmt/format-inl.h`) ← `fmt::v12::vformat[abi:cxx11]` ← `fmt::v12::format` (`src/fmt/include/fmt/format.h`) ← `main` (`out/profile.cpp`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 1.9% | 10.0ms |      10 | `fmt::v12::detail::for_each_codepoint()::{lambda(char const*, char const*)#1}::operator()` (`src/fmt/include/fmt/format.h`) ← `fmt::v12::detail::for_each_codepoint` ← `fmt::v12::detail::write` ← `fmt::v12::detail::format_handler::on_format_specs` ← `fmt::v12::detail::parse_replacement_field` (`src/fmt/include/fmt/base.h`) ← `fmt::v12::detail::parse_format_string` ← `fmt::v12::detail::vformat_to` (`src/fmt/include/fmt/format-inl.h`) ← `fmt::v12::vformat[abi:cxx11]` ← `fmt::v12::format` (`src/fmt/include/fmt/format.h`) ← `main` (`out/profile.cpp`)                                                                                                                                                                                                                                                                                                              |
| 1.9% | 10.0ms |      10 | `0x137f80` (`usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30`) ← `fmt::v12::detail::write_float` (`src/fmt/include/fmt/format.h`) ← `fmt::v12::detail::write` ← `fmt::v12::detail::format_handler::on_format_specs` ← `fmt::v12::detail::parse_replacement_field` (`src/fmt/include/fmt/base.h`) ← `fmt::v12::detail::parse_format_string` ← `fmt::v12::detail::vformat_to` (`src/fmt/include/fmt/format-inl.h`) ← `fmt::v12::vformat[abi:cxx11]` ← `fmt::v12::format` (`src/fmt/include/fmt/format.h`) ← `main` (`out/profile.cpp`)                                                                                                                                                                                                                                                                                                                                                   |
| 1.9% | 10.0ms |      10 | `fmt::v12::detail::buffer::append` (`src/fmt/include/fmt/base.h`) ← `fmt::v12::detail::copy` ← `fmt::v12::detail::copy_noinline` (`src/fmt/include/fmt/format.h`) ← `fmt::v12::detail::write_significand` ← `fmt::v12::detail::write_significand` ← `fmt::v12::detail::write_fixed()::{lambda(fmt::v12::basic_appender)#2}::operator()` ← `fmt::v12::detail::write_padded` ← `fmt::v12::detail::write_padded` ← `fmt::v12::detail::write_fixed` ← `fmt::v12::detail::write_float` ← `fmt::v12::detail::write` ← `fmt::v12::detail::format_handler::on_format_specs` ← `fmt::v12::detail::parse_replacement_field` (`src/fmt/include/fmt/base.h`) ← `fmt::v12::detail::parse_format_string` ← `fmt::v12::detail::vformat_to` (`src/fmt/include/fmt/format-inl.h`) ← `fmt::v12::vformat[abi:cxx11]` ← `fmt::v12::format` (`src/fmt/include/fmt/format.h`) ← `main` (`out/profile.cpp`) |
| 1.9% | 10.0ms |      10 | `0x137f20` (`usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30`) ← `fmt::v12::vformat[abi:cxx11]` (`src/fmt/include/fmt/format-inl.h`) ← `fmt::v12::format` (`src/fmt/include/fmt/format.h`) ← `main` (`out/profile.cpp`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 1.7% |  9.0ms |       9 | `0xa0cb0` (`usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 1.5% |  8.0ms |       8 | `fmt::v12::detail::write_int` (`src/fmt/include/fmt/format.h`) ← `fmt::v12::detail::format_handler::on_format_specs` ← `fmt::v12::detail::parse_replacement_field` (`src/fmt/include/fmt/base.h`) ← `fmt::v12::detail::parse_format_string` ← `fmt::v12::detail::vformat_to` (`src/fmt/include/fmt/format-inl.h`) ← `fmt::v12::vformat[abi:cxx11]` ← `fmt::v12::format` (`src/fmt/include/fmt/format.h`) ← `main` (`out/profile.cpp`)                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 1.5% |  8.0ms |       8 | `fmt::v12::detail::parse_nonnegative_int` (`src/fmt/include/fmt/base.h`) ← `fmt::v12::detail::parse_dynamic_spec` ← `fmt::v12::detail::parse_width` ← `fmt::v12::detail::parse_format_specs` ← `fmt::v12::detail::format_handler::on_format_specs` (`src/fmt/include/fmt/format.h`) ← `fmt::v12::detail::parse_replacement_field` (`src/fmt/include/fmt/base.h`) ← `fmt::v12::detail::parse_format_string` ← `fmt::v12::detail::vformat_to` (`src/fmt/include/fmt/format-inl.h`) ← `fmt::v12::vformat[abi:cxx11]` ← `fmt::v12::format` (`src/fmt/include/fmt/format.h`) ← `main` (`out/profile.cpp`)                                                                                                                                                                                                                                                                                 |
