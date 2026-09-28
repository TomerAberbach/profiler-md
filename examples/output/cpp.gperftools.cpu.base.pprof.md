# CPU profile

Took 508.0ms over 508 samples (1.0ms per sample).

| Category         |     % |    Time | Samples |
| ---------------- | ----: | ------: | ------: |
| Ours             | 80.5% | 409.0ms |     409 |
| Native           | 18.7% |  95.0ms |      95 |
| Standard library |  0.8% |   4.0ms |       4 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|    % |   Time | Samples | Function                                                               | Location                                        |
| ---: | -----: | ------: | ---------------------------------------------------------------------- | ----------------------------------------------- |
| 9.3% | 47.0ms |      47 | `fmt::v11::detail::buffer::append`                                     | `src/fmt/include/fmt/base.h`                    |
| 6.1% | 31.0ms |      31 | `fmt::v11::detail::utf8_decode`                                        | `src/fmt/include/fmt/format.h`                  |
| 5.5% | 28.0ms |      28 | `fmt::v11::detail::parse_format_string`                                | `src/fmt/include/fmt/base.h`                    |
| 5.1% | 26.0ms |      26 | `fmt::v11::detail::parse_format_specs`                                 | `src/fmt/include/fmt/base.h`                    |
| 4.1% | 21.0ms |      21 | `fmt::v11::detail::copy_noinline`                                      | `src/fmt/include/fmt/format.h`                  |
| 3.7% | 19.0ms |      19 | `fmt::v11::detail::parse_replacement_field`                            | `src/fmt/include/fmt/base.h`                    |
| 3.1% | 16.0ms |      16 | `fmt::v11::detail::parse_dynamic_spec`                                 | `src/fmt/include/fmt/base.h`                    |
| 3.0% | 15.0ms |      15 | `0x137f20`                                                             | `usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
| 2.6% | 13.0ms |      13 | `fmt::v11::detail::write_float`                                        | `src/fmt/include/fmt/format.h`                  |
| 2.4% | 12.0ms |      12 | `fmt::v11::detail::do_format_decimal`                                  | `src/fmt/include/fmt/format.h`                  |
| 2.4% | 12.0ms |      12 | `fmt::v11::basic_format_arg::visit`                                    | `src/fmt/include/fmt/base.h`                    |
| 2.4% | 12.0ms |      12 | `0x9d100`                                                              | `usr/lib/aarch64-linux-gnu/libc.so.6`           |
| 2.2% | 11.0ms |      11 | `fmt::v11::detail::parse_format_specs()::{unnamed type#1}::operator()` | `src/fmt/include/fmt/base.h`                    |
| 2.0% | 10.0ms |      10 | `fmt::v11::detail::format_handler::on_format_specs`                    | `src/fmt/include/fmt/format.h`                  |
| 2.0% | 10.0ms |      10 | `0x137f80`                                                             | `usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
| 2.0% | 10.0ms |      10 | `fmt::v11::detail::parse_nonnegative_int`                              | `src/fmt/include/fmt/base.h`                    |
| 1.6% |  8.0ms |       8 | `fmt::v11::detail::write_int`                                          | `src/fmt/include/fmt/format.h`                  |
| 1.6% |  8.0ms |       8 | `fmt::v11::detail::compute_width()::count_code_points::operator()`     | `src/fmt/include/fmt/format.h`                  |
| 1.4% |  7.0ms |       7 | `fmt::v11::parse_context::next_arg_id`                                 | `src/fmt/include/fmt/base.h`                    |
| 1.4% |  7.0ms |       7 | `fmt::v11::detail::format_float`                                       | `src/fmt/include/fmt/format.h`                  |

#### Categories

##### Ours

|    % |   Time | Samples | Function                                                               | Location                           |
| ---: | -----: | ------: | ---------------------------------------------------------------------- | ---------------------------------- |
| 9.3% | 47.0ms |      47 | `fmt::v11::detail::buffer::append`                                     | `src/fmt/include/fmt/base.h`       |
| 6.1% | 31.0ms |      31 | `fmt::v11::detail::utf8_decode`                                        | `src/fmt/include/fmt/format.h`     |
| 5.5% | 28.0ms |      28 | `fmt::v11::detail::parse_format_string`                                | `src/fmt/include/fmt/base.h`       |
| 5.1% | 26.0ms |      26 | `fmt::v11::detail::parse_format_specs`                                 | `src/fmt/include/fmt/base.h`       |
| 4.1% | 21.0ms |      21 | `fmt::v11::detail::copy_noinline`                                      | `src/fmt/include/fmt/format.h`     |
| 3.7% | 19.0ms |      19 | `fmt::v11::detail::parse_replacement_field`                            | `src/fmt/include/fmt/base.h`       |
| 3.1% | 16.0ms |      16 | `fmt::v11::detail::parse_dynamic_spec`                                 | `src/fmt/include/fmt/base.h`       |
| 2.6% | 13.0ms |      13 | `fmt::v11::detail::write_float`                                        | `src/fmt/include/fmt/format.h`     |
| 2.4% | 12.0ms |      12 | `fmt::v11::detail::do_format_decimal`                                  | `src/fmt/include/fmt/format.h`     |
| 2.4% | 12.0ms |      12 | `fmt::v11::basic_format_arg::visit`                                    | `src/fmt/include/fmt/base.h`       |
| 2.2% | 11.0ms |      11 | `fmt::v11::detail::parse_format_specs()::{unnamed type#1}::operator()` | `src/fmt/include/fmt/base.h`       |
| 2.0% | 10.0ms |      10 | `fmt::v11::detail::format_handler::on_format_specs`                    | `src/fmt/include/fmt/format.h`     |
| 2.0% | 10.0ms |      10 | `fmt::v11::detail::parse_nonnegative_int`                              | `src/fmt/include/fmt/base.h`       |
| 1.6% |  8.0ms |       8 | `fmt::v11::detail::write_int`                                          | `src/fmt/include/fmt/format.h`     |
| 1.6% |  8.0ms |       8 | `fmt::v11::detail::compute_width()::count_code_points::operator()`     | `src/fmt/include/fmt/format.h`     |
| 1.4% |  7.0ms |       7 | `fmt::v11::parse_context::next_arg_id`                                 | `src/fmt/include/fmt/base.h`       |
| 1.4% |  7.0ms |       7 | `fmt::v11::detail::format_float`                                       | `src/fmt/include/fmt/format.h`     |
| 1.4% |  7.0ms |       7 | `fmt::v11::detail::write_padded`                                       | `src/fmt/include/fmt/format.h`     |
| 1.4% |  7.0ms |       7 | `fmt::v11::detail::buffer::push_back`                                  | `src/fmt/include/fmt/base.h`       |
| 1.0% |  5.0ms |       5 | `fmt::v11::detail::dragonbox::cache_accessor::get_cached_power`        | `src/fmt/include/fmt/format-inl.h` |

##### Native

|    % |   Time | Samples | Function   | Location                                        |
| ---: | -----: | ------: | ---------- | ----------------------------------------------- |
| 3.0% | 15.0ms |      15 | `0x137f20` | `usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
| 2.4% | 12.0ms |      12 | `0x9d100`  | `usr/lib/aarch64-linux-gnu/libc.so.6`           |
| 2.0% | 10.0ms |      10 | `0x137f80` | `usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
| 1.2% |  6.0ms |       6 | `0x9e6c0`  | `usr/lib/aarch64-linux-gnu/libc.so.6`           |
| 1.2% |  6.0ms |       6 | `0x92284`  | `usr/lib/aarch64-linux-gnu/libc.so.6`           |
| 1.0% |  5.0ms |       5 | `0x137f84` | `usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
| 0.8% |  4.0ms |       4 | `0xa0cb0`  | `usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
| 0.6% |  3.0ms |       3 | `_init`    | `<unknown>`                                     |
| 0.6% |  3.0ms |       3 | `0x8faf4`  | `usr/lib/aarch64-linux-gnu/libc.so.6`           |
| 0.6% |  3.0ms |       3 | `0x929e0`  | `usr/lib/aarch64-linux-gnu/libc.so.6`           |
| 0.4% |  2.0ms |       2 | `0x137f94` | `usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
| 0.4% |  2.0ms |       2 | `0x9d138`  | `usr/lib/aarch64-linux-gnu/libc.so.6`           |
| 0.4% |  2.0ms |       2 | `0x8fae0`  | `usr/lib/aarch64-linux-gnu/libc.so.6`           |
| 0.4% |  2.0ms |       2 | `0x9e6e8`  | `usr/lib/aarch64-linux-gnu/libc.so.6`           |
| 0.4% |  2.0ms |       2 | `0x9c2e4`  | `usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
| 0.4% |  2.0ms |       2 | `0x9a104`  | `usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
| 0.2% |  1.0ms |       1 | `0x8faa0`  | `usr/lib/aarch64-linux-gnu/libc.so.6`           |
| 0.2% |  1.0ms |       1 | `0x92aa4`  | `usr/lib/aarch64-linux-gnu/libc.so.6`           |
| 0.2% |  1.0ms |       1 | `0x9a8f4`  | `usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
| 0.2% |  1.0ms |       1 | `0x9e6f8`  | `usr/lib/aarch64-linux-gnu/libc.so.6`           |

#### Lines

Lines ranked by contribution to each function's self time.

##### `fmt::v11::detail::buffer::append` (`src/fmt/include/fmt/base.h`)

|     % |   Time | Samples | Location                          |
| ----: | -----: | ------: | --------------------------------- |
| 66.0% | 31.0ms |      31 | `src/fmt/include/fmt/base.h:1837` |
| 14.9% |  7.0ms |       7 | `src/fmt/include/fmt/base.h:1836` |
| 12.8% |  6.0ms |       6 | `src/fmt/include/fmt/base.h:1838` |
|  6.4% |  3.0ms |       3 | `src/fmt/include/fmt/base.h:1830` |

##### `fmt::v11::detail::utf8_decode` (`src/fmt/include/fmt/format.h`)

|     % |   Time | Samples | Location                           |
| ----: | -----: | ------: | ---------------------------------- |
| 45.2% | 14.0ms |      14 | `src/fmt/include/fmt/format.h:561` |
| 19.4% |  6.0ms |       6 | `src/fmt/include/fmt/format.h:560` |
|  6.5% |  2.0ms |       2 | `src/fmt/include/fmt/format.h:564` |
|  6.5% |  2.0ms |       2 | `src/fmt/include/fmt/format.h:581` |
|  6.5% |  2.0ms |       2 | `src/fmt/include/fmt/format.h:588` |

##### `fmt::v11::detail::parse_format_string` (`src/fmt/include/fmt/base.h`)

|     % |   Time | Samples | Location                          |
| ----: | -----: | ------: | --------------------------------- |
| 67.9% | 19.0ms |      19 | `src/fmt/include/fmt/base.h:1635` |
| 17.9% |  5.0ms |       5 | `src/fmt/include/fmt/base.h:1639` |
| 14.3% |  4.0ms |       4 | `src/fmt/include/fmt/base.h:1634` |

##### `fmt::v11::detail::parse_format_specs` (`src/fmt/include/fmt/base.h`)

|     % |   Time | Samples | Location                          |
| ----: | -----: | ------: | --------------------------------- |
| 61.5% | 16.0ms |      16 | `src/fmt/include/fmt/base.h:1482` |
| 15.4% |  4.0ms |       4 | `src/fmt/include/fmt/base.h:1445` |
| 15.4% |  4.0ms |       4 | `src/fmt/include/fmt/base.h:1580` |
|  7.7% |  2.0ms |       2 | `src/fmt/include/fmt/base.h:1577` |

##### `fmt::v11::detail::copy_noinline` (`src/fmt/include/fmt/format.h`)

|     % |   Time | Samples | Location                           |
| ----: | -----: | ------: | ---------------------------------- |
| 76.2% | 16.0ms |      16 | `src/fmt/include/fmt/format.h:537` |
| 23.8% |  5.0ms |       5 | `src/fmt/include/fmt/format.h:534` |

##### `fmt::v11::detail::parse_replacement_field` (`src/fmt/include/fmt/base.h`)

|     % |  Time | Samples | Location                          |
| ----: | ----: | ------: | --------------------------------- |
| 31.6% | 6.0ms |       6 | `src/fmt/include/fmt/base.h:1593` |
| 26.3% | 5.0ms |       5 | `src/fmt/include/fmt/base.h:1624` |
| 26.3% | 5.0ms |       5 | `src/fmt/include/fmt/base.h:1627` |
| 15.8% | 3.0ms |       3 | `src/fmt/include/fmt/base.h:1583` |

##### `fmt::v11::detail::parse_dynamic_spec` (`src/fmt/include/fmt/base.h`)

|     % |  Time | Samples | Location                          |
| ----: | ----: | ------: | --------------------------------- |
| 43.8% | 7.0ms |       7 | `src/fmt/include/fmt/base.h:1384` |
| 25.0% | 4.0ms |       4 | `src/fmt/include/fmt/base.h:1392` |
| 18.8% | 3.0ms |       3 | `src/fmt/include/fmt/base.h:1390` |
| 12.5% | 2.0ms |       2 | `src/fmt/include/fmt/base.h:1414` |

##### `fmt::v11::detail::write_float` (`src/fmt/include/fmt/format.h`)

|     % |  Time | Samples | Location                            |
| ----: | ----: | ------: | ----------------------------------- |
| 53.8% | 7.0ms |       7 | `src/fmt/include/fmt/format.h:3301` |
| 15.4% | 2.0ms |       2 | `src/fmt/include/fmt/format.h:3353` |
|  7.7% | 1.0ms |       1 | `src/fmt/include/fmt/format.h:3306` |
|  7.7% | 1.0ms |       1 | `src/fmt/include/fmt/format.h:3316` |
|  7.7% | 1.0ms |       1 | `src/fmt/include/fmt/format.h:3336` |

##### `fmt::v11::detail::do_format_decimal` (`src/fmt/include/fmt/format.h`)

|     % |  Time | Samples | Location                            |
| ----: | ----: | ------: | ----------------------------------- |
| 75.0% | 9.0ms |       9 | `src/fmt/include/fmt/format.h:1191` |
| 16.7% | 2.0ms |       2 | `src/fmt/include/fmt/format.h:1198` |
|  8.3% | 1.0ms |       1 | `src/fmt/include/fmt/format.h:1195` |

##### `fmt::v11::basic_format_arg::visit` (`src/fmt/include/fmt/base.h`)

|     % |   Time | Samples | Location                          |
| ----: | -----: | ------: | --------------------------------- |
| 91.7% | 11.0ms |      11 | `src/fmt/include/fmt/base.h:2518` |
|  8.3% |  1.0ms |       1 | `src/fmt/include/fmt/base.h:2537` |

##### `fmt::v11::detail::parse_format_specs()::{unnamed type#1}::operator()` (`src/fmt/include/fmt/base.h`)

|      % |   Time | Samples | Location                          |
| -----: | -----: | ------: | --------------------------------- |
| 100.0% | 11.0ms |      11 | `src/fmt/include/fmt/base.h:1461` |

##### `fmt::v11::detail::format_handler::on_format_specs` (`src/fmt/include/fmt/format.h`)

|     % |  Time | Samples | Location                            |
| ----: | ----: | ------: | ----------------------------------- |
| 40.0% | 4.0ms |       4 | `src/fmt/include/fmt/format.h:3630` |
| 20.0% | 2.0ms |       2 | `src/fmt/include/fmt/format.h:3620` |
| 20.0% | 2.0ms |       2 | `src/fmt/include/fmt/format.h:3628` |
| 20.0% | 2.0ms |       2 | `src/fmt/include/fmt/format.h:3619` |

##### `fmt::v11::detail::parse_nonnegative_int` (`src/fmt/include/fmt/base.h`)

|     % |  Time | Samples | Location                          |
| ----: | ----: | ------: | --------------------------------- |
| 70.0% | 7.0ms |       7 | `src/fmt/include/fmt/base.h:1305` |
| 20.0% | 2.0ms |       2 | `src/fmt/include/fmt/base.h:1303` |
| 10.0% | 1.0ms |       1 | `src/fmt/include/fmt/base.h:1306` |

##### `fmt::v11::detail::write_int` (`src/fmt/include/fmt/format.h`)

|     % |  Time | Samples | Location                            |
| ----: | ----: | ------: | ----------------------------------- |
| 37.5% | 3.0ms |       3 | `src/fmt/include/fmt/format.h:2017` |
| 37.5% | 3.0ms |       3 | `src/fmt/include/fmt/format.h:2063` |
| 12.5% | 1.0ms |       1 | `src/fmt/include/fmt/format.h:2029` |
| 12.5% | 1.0ms |       1 | `src/fmt/include/fmt/format.h:2078` |

##### `fmt::v11::detail::compute_width()::count_code_points::operator()` (`src/fmt/include/fmt/format.h`)

|     % |  Time | Samples | Location                           |
| ----: | ----: | ------: | ---------------------------------- |
| 75.0% | 6.0ms |       6 | `src/fmt/include/fmt/format.h:644` |
| 25.0% | 2.0ms |       2 | `src/fmt/include/fmt/format.h:648` |

##### `fmt::v11::parse_context::next_arg_id` (`src/fmt/include/fmt/base.h`)

|     % |  Time | Samples | Location                         |
| ----: | ----: | ------: | -------------------------------- |
| 71.4% | 5.0ms |       5 | `src/fmt/include/fmt/base.h:899` |
| 28.6% | 2.0ms |       2 | `src/fmt/include/fmt/base.h:903` |

##### `fmt::v11::detail::format_float` (`src/fmt/include/fmt/format.h`)

|     % |  Time | Samples | Location                            |
| ----: | ----: | ------: | ----------------------------------- |
| 28.6% | 2.0ms |       2 | `src/fmt/include/fmt/format.h:3189` |
| 14.3% | 1.0ms |       1 | `src/fmt/include/fmt/format.h:3072` |
| 14.3% | 1.0ms |       1 | `src/fmt/include/fmt/format.h:3231` |
| 14.3% | 1.0ms |       1 | `src/fmt/include/fmt/format.h:3280` |
| 14.3% | 1.0ms |       1 | `src/fmt/include/fmt/format.h:3071` |

##### `fmt::v11::detail::write_padded` (`src/fmt/include/fmt/format.h`)

|     % |  Time | Samples | Location                            |
| ----: | ----: | ------: | ----------------------------------- |
| 42.9% | 3.0ms |       3 | `src/fmt/include/fmt/format.h:1641` |
| 14.3% | 1.0ms |       1 | `src/fmt/include/fmt/format.h:1646` |
| 14.3% | 1.0ms |       1 | `src/fmt/include/fmt/format.h:1648` |
| 14.3% | 1.0ms |       1 | `src/fmt/include/fmt/format.h:1643` |
| 14.3% | 1.0ms |       1 | `src/fmt/include/fmt/format.h:1636` |

##### `fmt::v11::detail::buffer::push_back` (`src/fmt/include/fmt/base.h`)

|     % |  Time | Samples | Location                          |
| ----: | ----: | ------: | --------------------------------- |
| 85.7% | 6.0ms |       6 | `src/fmt/include/fmt/base.h:1818` |
| 14.3% | 1.0ms |       1 | `src/fmt/include/fmt/base.h:1816` |

##### `fmt::v11::detail::dragonbox::cache_accessor::get_cached_power` (`src/fmt/include/fmt/format-inl.h`)

|     % |  Time | Samples | Location                                |
| ----: | ----: | ------: | --------------------------------------- |
| 60.0% | 3.0ms |       3 | `src/fmt/include/fmt/format-inl.h:1059` |
| 20.0% | 1.0ms |       1 | `src/fmt/include/fmt/format-inl.h:1055` |
| 20.0% | 1.0ms |       1 | `src/fmt/include/fmt/format-inl.h:1054` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `fmt::v11::detail::buffer::append` (`src/fmt/include/fmt/base.h`)

|      % |   Time | Samples | Caller                   | Location                     |
| -----: | -----: | ------: | ------------------------ | ---------------------------- |
| 100.0% | 47.0ms |      47 | `fmt::v11::detail::copy` | `src/fmt/include/fmt/base.h` |

##### `fmt::v11::detail::utf8_decode` (`src/fmt/include/fmt/format.h`)

|      % |   Time | Samples | Caller                                                                                     | Location                       |
| -----: | -----: | ------: | ------------------------------------------------------------------------------------------ | ------------------------------ |
| 100.0% | 31.0ms |      31 | `fmt::v11::detail::for_each_codepoint()::{lambda(char const*, char const*)#1}::operator()` | `src/fmt/include/fmt/format.h` |

##### `fmt::v11::detail::parse_format_string` (`src/fmt/include/fmt/base.h`)

|      % |   Time | Samples | Caller                         | Location                           |
| -----: | -----: | ------: | ------------------------------ | ---------------------------------- |
| 100.0% | 28.0ms |      28 | `fmt::v11::detail::vformat_to` | `src/fmt/include/fmt/format-inl.h` |

##### `fmt::v11::detail::parse_format_specs` (`src/fmt/include/fmt/base.h`)

|      % |   Time | Samples | Caller                                              | Location                       |
| -----: | -----: | ------: | --------------------------------------------------- | ------------------------------ |
| 100.0% | 26.0ms |      26 | `fmt::v11::detail::format_handler::on_format_specs` | `src/fmt/include/fmt/format.h` |

##### `fmt::v11::detail::copy_noinline` (`src/fmt/include/fmt/format.h`)

|     % |   Time | Samples | Caller                                                   | Location                       |
| ----: | -----: | ------: | -------------------------------------------------------- | ------------------------------ |
| 66.7% | 14.0ms |      14 | `fmt::v11::detail::format_handler::on_text`              | `src/fmt/include/fmt/format.h` |
| 23.8% |  5.0ms |       5 | `fmt::v11::detail::format_handler::on_replacement_field` | `src/fmt/include/fmt/format.h` |
|  4.8% |  1.0ms |       1 | `fmt::v11::detail::write_significand`                    | `src/fmt/include/fmt/format.h` |
|  4.8% |  1.0ms |       1 | `fmt::v11::format`                                       | `src/fmt/include/fmt/format.h` |

##### `fmt::v11::detail::parse_replacement_field` (`src/fmt/include/fmt/base.h`)

|      % |   Time | Samples | Caller                                  | Location                     |
| -----: | -----: | ------: | --------------------------------------- | ---------------------------- |
| 100.0% | 19.0ms |      19 | `fmt::v11::detail::parse_format_string` | `src/fmt/include/fmt/base.h` |

##### `fmt::v11::detail::parse_dynamic_spec` (`src/fmt/include/fmt/base.h`)

|     % |  Time | Samples | Caller                                              | Location                       |
| ----: | ----: | ------: | --------------------------------------------------- | ------------------------------ |
| 43.8% | 7.0ms |       7 | `fmt::v11::detail::parse_width`                     | `src/fmt/include/fmt/base.h`   |
| 43.8% | 7.0ms |       7 | `fmt::v11::detail::format_handler::on_format_specs` | `src/fmt/include/fmt/format.h` |
| 12.5% | 2.0ms |       2 | `fmt::v11::detail::parse_precision`                 | `src/fmt/include/fmt/base.h`   |

##### `0x137f20` (`usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30`)

|      % |   Time | Samples | Caller                         | Location                           |
| -----: | -----: | ------: | ------------------------------ | ---------------------------------- |
| 100.0% | 15.0ms |      15 | `fmt::v11::vformat[abi:cxx11]` | `src/fmt/include/fmt/format-inl.h` |

##### `fmt::v11::detail::write_float` (`src/fmt/include/fmt/format.h`)

|     % |   Time | Samples | Caller                                              | Location                       |
| ----: | -----: | ------: | --------------------------------------------------- | ------------------------------ |
| 84.6% | 11.0ms |      11 | `fmt::v11::detail::write`                           | `src/fmt/include/fmt/format.h` |
| 15.4% |  2.0ms |       2 | `fmt::v11::detail::format_handler::on_format_specs` | `src/fmt/include/fmt/format.h` |

##### `fmt::v11::detail::do_format_decimal` (`src/fmt/include/fmt/format.h`)

|     % |   Time | Samples | Caller                                                   | Location                       |
| ----: | -----: | ------: | -------------------------------------------------------- | ------------------------------ |
| 91.7% | 11.0ms |      11 | `fmt::v11::detail::write_int`                            | `src/fmt/include/fmt/format.h` |
|  8.3% |  1.0ms |       1 | `fmt::v11::detail::format_handler::on_replacement_field` | `src/fmt/include/fmt/format.h` |

##### `fmt::v11::basic_format_arg::visit` (`src/fmt/include/fmt/base.h`)

|     % |   Time | Samples | Caller                                                   | Location                       |
| ----: | -----: | ------: | -------------------------------------------------------- | ------------------------------ |
| 83.3% | 10.0ms |      10 | `fmt::v11::detail::format_handler::on_format_specs`      | `src/fmt/include/fmt/format.h` |
| 16.7% |  2.0ms |       2 | `fmt::v11::detail::format_handler::on_replacement_field` | `src/fmt/include/fmt/format.h` |

##### `0x9d100` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |   Time | Samples | Caller                         | Location                           |
| -----: | -----: | ------: | ------------------------------ | ---------------------------------- |
| 100.0% | 12.0ms |      12 | `fmt::v11::vformat[abi:cxx11]` | `src/fmt/include/fmt/format-inl.h` |

##### `fmt::v11::detail::parse_format_specs()::{unnamed type#1}::operator()` (`src/fmt/include/fmt/base.h`)

|      % |   Time | Samples | Caller                                 | Location                     |
| -----: | -----: | ------: | -------------------------------------- | ---------------------------- |
| 100.0% | 11.0ms |      11 | `fmt::v11::detail::parse_format_specs` | `src/fmt/include/fmt/base.h` |

##### `fmt::v11::detail::format_handler::on_format_specs` (`src/fmt/include/fmt/format.h`)

|     % |  Time | Samples | Caller                                      | Location                     |
| ----: | ----: | ------: | ------------------------------------------- | ---------------------------- |
| 90.0% | 9.0ms |       9 | `fmt::v11::detail::parse_replacement_field` | `src/fmt/include/fmt/base.h` |
| 10.0% | 1.0ms |       1 | `fmt::v11::detail::parse_format_string`     | `src/fmt/include/fmt/base.h` |

##### `0x137f80` (`usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30`)

|      % |   Time | Samples | Caller                          | Location                       |
| -----: | -----: | ------: | ------------------------------- | ------------------------------ |
| 100.0% | 10.0ms |      10 | `fmt::v11::detail::write_float` | `src/fmt/include/fmt/format.h` |

##### `fmt::v11::detail::parse_nonnegative_int` (`src/fmt/include/fmt/base.h`)

|      % |   Time | Samples | Caller                                 | Location                     |
| -----: | -----: | ------: | -------------------------------------- | ---------------------------- |
| 100.0% | 10.0ms |      10 | `fmt::v11::detail::parse_dynamic_spec` | `src/fmt/include/fmt/base.h` |

##### `fmt::v11::detail::write_int` (`src/fmt/include/fmt/format.h`)

|     % |  Time | Samples | Caller                                              | Location                       |
| ----: | ----: | ------: | --------------------------------------------------- | ------------------------------ |
| 87.5% | 7.0ms |       7 | `fmt::v11::detail::format_handler::on_format_specs` | `src/fmt/include/fmt/format.h` |
| 12.5% | 1.0ms |       1 | `fmt::v11::detail::parse_replacement_field`         | `src/fmt/include/fmt/base.h`   |

##### `fmt::v11::detail::compute_width()::count_code_points::operator()` (`src/fmt/include/fmt/format.h`)

|      % |  Time | Samples | Caller                                                                                     | Location                       |
| -----: | ----: | ------: | ------------------------------------------------------------------------------------------ | ------------------------------ |
| 100.0% | 8.0ms |       8 | `fmt::v11::detail::for_each_codepoint()::{lambda(char const*, char const*)#1}::operator()` | `src/fmt/include/fmt/format.h` |

##### `fmt::v11::parse_context::next_arg_id` (`src/fmt/include/fmt/base.h`)

|      % |  Time | Samples | Caller                                        | Location                       |
| -----: | ----: | ------: | --------------------------------------------- | ------------------------------ |
| 100.0% | 7.0ms |       7 | `fmt::v11::detail::format_handler::on_arg_id` | `src/fmt/include/fmt/format.h` |

##### `fmt::v11::detail::format_float` (`src/fmt/include/fmt/format.h`)

|      % |  Time | Samples | Caller                          | Location                       |
| -----: | ----: | ------: | ------------------------------- | ------------------------------ |
| 100.0% | 7.0ms |       7 | `fmt::v11::detail::write_float` | `src/fmt/include/fmt/format.h` |

##### `fmt::v11::detail::write_padded` (`src/fmt/include/fmt/format.h`)

|     % |  Time | Samples | Caller                           | Location                       |
| ----: | ----: | ------: | -------------------------------- | ------------------------------ |
| 71.4% | 5.0ms |       5 | `fmt::v11::detail::write_padded` | `src/fmt/include/fmt/format.h` |
| 28.6% | 2.0ms |       2 | `fmt::v11::detail::write`        | `src/fmt/include/fmt/format.h` |

##### `fmt::v11::detail::buffer::push_back` (`src/fmt/include/fmt/base.h`)

|      % |  Time | Samples | Caller                                | Location                     |
| -----: | ----: | ------: | ------------------------------------- | ---------------------------- |
| 100.0% | 7.0ms |       7 | `fmt::v11::basic_appender::operator=` | `src/fmt/include/fmt/base.h` |

##### `0x9e6c0` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |  Time | Samples | Caller                                                   | Location                       |
| ----: | ----: | ------: | -------------------------------------------------------- | ------------------------------ |
| 66.7% | 4.0ms |       4 | `fmt::v11::detail::format_handler::on_replacement_field` | `src/fmt/include/fmt/format.h` |
| 33.3% | 2.0ms |       2 | `fmt::v11::detail::format_handler::on_format_specs`      | `src/fmt/include/fmt/format.h` |

##### `0x92284` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Caller    | Location                                        |
| -----: | ----: | ------: | --------- | ----------------------------------------------- |
| 100.0% | 6.0ms |       6 | `0xa2cab` | `usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |

##### `fmt::v11::detail::dragonbox::cache_accessor::get_cached_power` (`src/fmt/include/fmt/format-inl.h`)

|      % |  Time | Samples | Caller                                          | Location                           |
| -----: | ----: | ------: | ----------------------------------------------- | ---------------------------------- |
| 100.0% | 5.0ms |       5 | `fmt::v11::detail::dragonbox::get_cached_power` | `src/fmt/include/fmt/format-inl.h` |

##### `0x137f84` (`usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30`)

|      % |  Time | Samples | Caller                          | Location                       |
| -----: | ----: | ------: | ------------------------------- | ------------------------------ |
| 100.0% | 5.0ms |       5 | `fmt::v11::detail::write_float` | `src/fmt/include/fmt/format.h` |

##### `0xa0cb0` (`usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30`)

|      % |  Time | Samples | Caller    | Location                              |
| -----: | ----: | ------: | --------- | ------------------------------------- |
| 100.0% | 4.0ms |       4 | `0x27743` | `usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `_init` (`<unknown>`)

|     % |  Time | Samples | Caller                          | Location                           |
| ----: | ----: | ------: | ------------------------------- | ---------------------------------- |
| 66.7% | 2.0ms |       2 | `fmt::v11::detail::write_float` | `src/fmt/include/fmt/format.h`     |
| 33.3% | 1.0ms |       1 | `fmt::v11::vformat[abi:cxx11]`  | `src/fmt/include/fmt/format-inl.h` |

##### `0x8faf4` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Caller    | Location                              |
| -----: | ----: | ------: | --------- | ------------------------------------- |
| 100.0% | 3.0ms |       3 | `0x92a9b` | `usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x929e0` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Caller                             | Location                                  |
| -----: | ----: | ------: | ---------------------------------- | ----------------------------------------- |
| 100.0% | 3.0ms |       3 | `std::__new_allocator::deallocate` | `usr/include/c++/12/bits/new_allocator.h` |

##### `0x137f94` (`usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30`)

|      % |  Time | Samples | Caller                          | Location                       |
| -----: | ----: | ------: | ------------------------------- | ------------------------------ |
| 100.0% | 2.0ms |       2 | `fmt::v11::detail::write_float` | `src/fmt/include/fmt/format.h` |

##### `0x9d138` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Caller                                              | Location                       |
| -----: | ----: | ------: | --------------------------------------------------- | ------------------------------ |
| 100.0% | 2.0ms |       2 | `fmt::v11::detail::format_handler::on_format_specs` | `src/fmt/include/fmt/format.h` |

##### `0x8fae0` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Caller    | Location                              |
| -----: | ----: | ------: | --------- | ------------------------------------- |
| 100.0% | 2.0ms |       2 | `0x92a9b` | `usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x9e6e8` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Caller                                                   | Location                       |
| -----: | ----: | ------: | -------------------------------------------------------- | ------------------------------ |
| 100.0% | 2.0ms |       2 | `fmt::v11::detail::format_handler::on_replacement_field` | `src/fmt/include/fmt/format.h` |

##### `0x9c2e4` (`usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30`)

|      % |  Time | Samples | Caller                                     | Location                                   |
| -----: | ----: | ------: | ------------------------------------------ | ------------------------------------------ |
| 100.0% | 2.0ms |       2 | `std::__cxx11::basic_string::_M_construct` | `usr/include/c++/12/bits/basic_string.tcc` |

##### `0x9a104` (`usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30`)

|      % |  Time | Samples | Caller                         | Location                           |
| -----: | ----: | ------: | ------------------------------ | ---------------------------------- |
| 100.0% | 2.0ms |       2 | `fmt::v11::vformat[abi:cxx11]` | `src/fmt/include/fmt/format-inl.h` |

##### `0x8faa0` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Caller    | Location                              |
| -----: | ----: | ------: | --------- | ------------------------------------- |
| 100.0% | 1.0ms |       1 | `0x92a9b` | `usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x92aa4` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Caller                             | Location                                  |
| -----: | ----: | ------: | ---------------------------------- | ----------------------------------------- |
| 100.0% | 1.0ms |       1 | `std::__new_allocator::deallocate` | `usr/include/c++/12/bits/new_allocator.h` |

##### `0x9a8f4` (`usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30`)

|      % |  Time | Samples | Caller    | Location                              |
| -----: | ----: | ------: | --------- | ------------------------------------- |
| 100.0% | 1.0ms |       1 | `0x27743` | `usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x9e6f8` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Time | Samples | Caller                                              | Location                       |
| -----: | ----: | ------: | --------------------------------------------------- | ------------------------------ |
| 100.0% | 1.0ms |       1 | `fmt::v11::detail::format_handler::on_format_specs` | `src/fmt/include/fmt/format.h` |

### Total time

Functions ranked by total time spent in the function and all its callees.

|      % |    Time | Samples | Function                                                 | Location                              |
| -----: | ------: | ------: | -------------------------------------------------------- | ------------------------------------- |
| 100.0% | 508.0ms |     508 | `0x27743`                                                | `usr/lib/aarch64-linux-gnu/libc.so.6` |
| 100.0% | 508.0ms |     508 | `0x27817`                                                | `usr/lib/aarch64-linux-gnu/libc.so.6` |
| 100.0% | 508.0ms |     508 | `_start`                                                 | `<unknown>`                           |
|  98.0% | 498.0ms |     498 | `main`                                                   | `out/profile.cpp`                     |
|  95.3% | 484.0ms |     484 | `fmt::v11::vformat[abi:cxx11]`                           | `src/fmt/include/fmt/format-inl.h`    |
|  95.3% | 484.0ms |     484 | `fmt::v11::format`                                       | `src/fmt/include/fmt/format.h`        |
|  84.6% | 430.0ms |     430 | `fmt::v11::detail::vformat_to`                           | `src/fmt/include/fmt/format-inl.h`    |
|  84.4% | 429.0ms |     429 | `fmt::v11::detail::parse_format_string`                  | `src/fmt/include/fmt/base.h`          |
|  72.8% | 370.0ms |     370 | `fmt::v11::detail::parse_replacement_field`              | `src/fmt/include/fmt/base.h`          |
|  59.3% | 301.0ms |     301 | `fmt::v11::detail::format_handler::on_format_specs`      | `src/fmt/include/fmt/format.h`        |
|  29.3% | 149.0ms |     149 | `fmt::v11::detail::write`                                | `src/fmt/include/fmt/format.h`        |
|  23.4% | 119.0ms |     119 | `fmt::v11::basic_format_arg::visit`                      | `src/fmt/include/fmt/base.h`          |
|  20.3% | 103.0ms |     103 | `fmt::v11::detail::arg_formatter::operator()`            | `src/fmt/include/fmt/format.h`        |
|  18.9% |  96.0ms |      96 | `fmt::v11::detail::write_float`                          | `src/fmt/include/fmt/format.h`        |
|  12.8% |  65.0ms |      65 | `fmt::v11::detail::parse_format_specs`                   | `src/fmt/include/fmt/base.h`          |
|  11.8% |  60.0ms |      60 | `fmt::v11::detail::copy_noinline`                        | `src/fmt/include/fmt/format.h`        |
|  10.8% |  55.0ms |      55 | `fmt::v11::detail::write_padded`                         | `src/fmt/include/fmt/format.h`        |
|   9.6% |  49.0ms |      49 | `fmt::v11::detail::buffer::append`                       | `src/fmt/include/fmt/base.h`          |
|   9.6% |  49.0ms |      49 | `fmt::v11::detail::copy`                                 | `src/fmt/include/fmt/base.h`          |
|   8.5% |  43.0ms |      43 | `fmt::v11::detail::format_handler::on_replacement_field` | `src/fmt/include/fmt/format.h`        |

#### Categories

##### Ours

|     % |    Time | Samples | Function                                                 | Location                           |
| ----: | ------: | ------: | -------------------------------------------------------- | ---------------------------------- |
| 98.0% | 498.0ms |     498 | `main`                                                   | `out/profile.cpp`                  |
| 95.3% | 484.0ms |     484 | `fmt::v11::vformat[abi:cxx11]`                           | `src/fmt/include/fmt/format-inl.h` |
| 95.3% | 484.0ms |     484 | `fmt::v11::format`                                       | `src/fmt/include/fmt/format.h`     |
| 84.6% | 430.0ms |     430 | `fmt::v11::detail::vformat_to`                           | `src/fmt/include/fmt/format-inl.h` |
| 84.4% | 429.0ms |     429 | `fmt::v11::detail::parse_format_string`                  | `src/fmt/include/fmt/base.h`       |
| 72.8% | 370.0ms |     370 | `fmt::v11::detail::parse_replacement_field`              | `src/fmt/include/fmt/base.h`       |
| 59.3% | 301.0ms |     301 | `fmt::v11::detail::format_handler::on_format_specs`      | `src/fmt/include/fmt/format.h`     |
| 29.3% | 149.0ms |     149 | `fmt::v11::detail::write`                                | `src/fmt/include/fmt/format.h`     |
| 23.4% | 119.0ms |     119 | `fmt::v11::basic_format_arg::visit`                      | `src/fmt/include/fmt/base.h`       |
| 20.3% | 103.0ms |     103 | `fmt::v11::detail::arg_formatter::operator()`            | `src/fmt/include/fmt/format.h`     |
| 18.9% |  96.0ms |      96 | `fmt::v11::detail::write_float`                          | `src/fmt/include/fmt/format.h`     |
| 12.8% |  65.0ms |      65 | `fmt::v11::detail::parse_format_specs`                   | `src/fmt/include/fmt/base.h`       |
| 11.8% |  60.0ms |      60 | `fmt::v11::detail::copy_noinline`                        | `src/fmt/include/fmt/format.h`     |
| 10.8% |  55.0ms |      55 | `fmt::v11::detail::write_padded`                         | `src/fmt/include/fmt/format.h`     |
|  9.6% |  49.0ms |      49 | `fmt::v11::detail::buffer::append`                       | `src/fmt/include/fmt/base.h`       |
|  9.6% |  49.0ms |      49 | `fmt::v11::detail::copy`                                 | `src/fmt/include/fmt/base.h`       |
|  8.5% |  43.0ms |      43 | `fmt::v11::detail::format_handler::on_replacement_field` | `src/fmt/include/fmt/format.h`     |
|  8.3% |  42.0ms |      42 | `fmt::v11::detail::write_int`                            | `src/fmt/include/fmt/format.h`     |
|  7.9% |  40.0ms |      40 | `fmt::v11::detail::for_each_codepoint`                   | `src/fmt/include/fmt/format.h`     |
|  7.9% |  40.0ms |      40 | `fmt::v11::detail::compute_width`                        | `src/fmt/include/fmt/format.h`     |

##### Native

|      % |    Time | Samples | Function   | Location                                        |
| -----: | ------: | ------: | ---------- | ----------------------------------------------- |
| 100.0% | 508.0ms |     508 | `0x27743`  | `usr/lib/aarch64-linux-gnu/libc.so.6`           |
| 100.0% | 508.0ms |     508 | `0x27817`  | `usr/lib/aarch64-linux-gnu/libc.so.6`           |
| 100.0% | 508.0ms |     508 | `_start`   | `<unknown>`                                     |
|   3.0% |  15.0ms |      15 | `0x137f20` | `usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|   2.4% |  12.0ms |      12 | `0x9d100`  | `usr/lib/aarch64-linux-gnu/libc.so.6`           |
|   2.0% |  10.0ms |      10 | `0x137f80` | `usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|   1.8% |   9.0ms |       9 | `0xa2cab`  | `usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|   1.6% |   8.0ms |       8 | `0x92a9b`  | `usr/lib/aarch64-linux-gnu/libc.so.6`           |
|   1.2% |   6.0ms |       6 | `0x9e6c0`  | `usr/lib/aarch64-linux-gnu/libc.so.6`           |
|   1.2% |   6.0ms |       6 | `0x92284`  | `usr/lib/aarch64-linux-gnu/libc.so.6`           |
|   1.0% |   5.0ms |       5 | `0x137f84` | `usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|   0.8% |   4.0ms |       4 | `0xa0cb0`  | `usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|   0.6% |   3.0ms |       3 | `_init`    | `<unknown>`                                     |
|   0.6% |   3.0ms |       3 | `0x8faf4`  | `usr/lib/aarch64-linux-gnu/libc.so.6`           |
|   0.6% |   3.0ms |       3 | `0x929e0`  | `usr/lib/aarch64-linux-gnu/libc.so.6`           |
|   0.4% |   2.0ms |       2 | `0x137f94` | `usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|   0.4% |   2.0ms |       2 | `0x9d138`  | `usr/lib/aarch64-linux-gnu/libc.so.6`           |
|   0.4% |   2.0ms |       2 | `0x8fae0`  | `usr/lib/aarch64-linux-gnu/libc.so.6`           |
|   0.4% |   2.0ms |       2 | `0x9e6e8`  | `usr/lib/aarch64-linux-gnu/libc.so.6`           |
|   0.4% |   2.0ms |       2 | `0x9c2e4`  | `usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `0x27743` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |    Time | Samples | Callee                         | Location                                        |
| ----: | ------: | ------: | ------------------------------ | ----------------------------------------------- |
| 98.0% | 498.0ms |     498 | `main`                         | `out/profile.cpp`                               |
|  0.8% |   4.0ms |       4 | `0xa0cb0`                      | `usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|  0.4% |   2.0ms |       2 | `fmt::v11::vformat[abi:cxx11]` | `src/fmt/include/fmt/format-inl.h`              |
|  0.2% |   1.0ms |       1 | `0x9a8f4`                      | `usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|  0.2% |   1.0ms |       1 | `0x9a8f0`                      | `usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |

##### `0x27817` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |    Time | Samples | Callee    | Location                              |
| -----: | ------: | ------: | --------- | ------------------------------------- |
| 100.0% | 508.0ms |     508 | `0x27743` | `usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `_start` (`<unknown>`)

|      % |    Time | Samples | Callee    | Location                              |
| -----: | ------: | ------: | --------- | ------------------------------------- |
| 100.0% | 508.0ms |     508 | `0x27817` | `usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `main` (`out/profile.cpp`)

|     % |    Time | Samples | Callee                                      | Location                                 |
| ----: | ------: | ------: | ------------------------------------------- | ---------------------------------------- |
| 97.2% | 484.0ms |     484 | `fmt::v11::format`                          | `src/fmt/include/fmt/format.h`           |
|  2.8% |  14.0ms |      14 | `std::__cxx11::basic_string::~basic_string` | `usr/include/c++/12/bits/basic_string.h` |

##### `fmt::v11::vformat[abi:cxx11]` (`src/fmt/include/fmt/format-inl.h`)

|     % |    Time | Samples | Callee                                               | Location                                        |
| ----: | ------: | ------: | ---------------------------------------------------- | ----------------------------------------------- |
| 88.8% | 430.0ms |     430 | `fmt::v11::detail::vformat_to`                       | `src/fmt/include/fmt/format-inl.h`              |
|  3.7% |  18.0ms |      18 | `fmt::v11::to_string`                                | `src/fmt/include/fmt/format.h`                  |
|  3.1% |  15.0ms |      15 | `0x137f20`                                           | `usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|  2.5% |  12.0ms |      12 | `0x9d100`                                            | `usr/lib/aarch64-linux-gnu/libc.so.6`           |
|  0.4% |   2.0ms |       2 | `fmt::v11::basic_memory_buffer::basic_memory_buffer` | `src/fmt/include/fmt/format.h`                  |

##### `fmt::v11::format` (`src/fmt/include/fmt/format.h`)

|     % |    Time | Samples | Callee                            | Location                           |
| ----: | ------: | ------: | --------------------------------- | ---------------------------------- |
| 99.6% | 482.0ms |     482 | `fmt::v11::vformat[abi:cxx11]`    | `src/fmt/include/fmt/format-inl.h` |
|  0.2% |   1.0ms |       1 | `fmt::v11::detail::copy_noinline` | `src/fmt/include/fmt/format.h`     |
|  0.2% |   1.0ms |       1 | `fmt::v11::detail::value::value`  | `src/fmt/include/fmt/base.h`       |

##### `fmt::v11::detail::vformat_to` (`src/fmt/include/fmt/format-inl.h`)

|     % |    Time | Samples | Callee                                  | Location                     |
| ----: | ------: | ------: | --------------------------------------- | ---------------------------- |
| 99.8% | 429.0ms |     429 | `fmt::v11::detail::parse_format_string` | `src/fmt/include/fmt/base.h` |
|  0.2% |   1.0ms |       1 | `fmt::v11::context::context`            | `src/fmt/include/fmt/base.h` |

##### `fmt::v11::detail::parse_format_string` (`src/fmt/include/fmt/base.h`)

|     % |    Time | Samples | Callee                                              | Location                       |
| ----: | ------: | ------: | --------------------------------------------------- | ------------------------------ |
| 86.2% | 370.0ms |     370 | `fmt::v11::detail::parse_replacement_field`         | `src/fmt/include/fmt/base.h`   |
|  7.0% |  30.0ms |      30 | `fmt::v11::detail::format_handler::on_text`         | `src/fmt/include/fmt/format.h` |
|  0.2% |   1.0ms |       1 | `fmt::v11::detail::format_handler::on_format_specs` | `src/fmt/include/fmt/format.h` |

##### `fmt::v11::detail::parse_replacement_field` (`src/fmt/include/fmt/base.h`)

|     % |    Time | Samples | Callee                                                   | Location                       |
| ----: | ------: | ------: | -------------------------------------------------------- | ------------------------------ |
| 81.1% | 300.0ms |     300 | `fmt::v11::detail::format_handler::on_format_specs`      | `src/fmt/include/fmt/format.h` |
| 11.6% |  43.0ms |      43 | `fmt::v11::detail::format_handler::on_replacement_field` | `src/fmt/include/fmt/format.h` |
|  1.9% |   7.0ms |       7 | `fmt::v11::detail::format_handler::on_arg_id`            | `src/fmt/include/fmt/format.h` |
|  0.3% |   1.0ms |       1 | `fmt::v11::detail::write_int`                            | `src/fmt/include/fmt/format.h` |

##### `fmt::v11::detail::format_handler::on_format_specs` (`src/fmt/include/fmt/format.h`)

|     % |    Time | Samples | Callee                                 | Location                       |
| ----: | ------: | ------: | -------------------------------------- | ------------------------------ |
| 37.5% | 113.0ms |     113 | `fmt::v11::basic_format_arg::visit`    | `src/fmt/include/fmt/base.h`   |
| 21.6% |  65.0ms |      65 | `fmt::v11::detail::parse_format_specs` | `src/fmt/include/fmt/base.h`   |
| 15.9% |  48.0ms |      48 | `fmt::v11::detail::write`              | `src/fmt/include/fmt/format.h` |
| 13.6% |  41.0ms |      41 | `fmt::v11::detail::write_int`          | `src/fmt/include/fmt/format.h` |
|  2.3% |   7.0ms |       7 | `fmt::v11::detail::parse_dynamic_spec` | `src/fmt/include/fmt/base.h`   |

##### `fmt::v11::detail::write` (`src/fmt/include/fmt/format.h`)

|     % |   Time | Samples | Callee                             | Location                       |
| ----: | -----: | ------: | ---------------------------------- | ------------------------------ |
| 63.1% | 94.0ms |      94 | `fmt::v11::detail::write_float`    | `src/fmt/include/fmt/format.h` |
| 26.8% | 40.0ms |      40 | `fmt::v11::detail::compute_width`  | `src/fmt/include/fmt/format.h` |
|  5.4% |  8.0ms |       8 | `fmt::v11::detail::write_padded`   | `src/fmt/include/fmt/format.h` |
|  1.3% |  2.0ms |       2 | `fmt::v11::detail::do_write_float` | `src/fmt/include/fmt/format.h` |
|  0.7% |  1.0ms |       1 | `fmt::v11::detail::count_digits`   | `src/fmt/include/fmt/format.h` |

##### `fmt::v11::basic_format_arg::visit` (`src/fmt/include/fmt/base.h`)

|     % |    Time | Samples | Callee                                                | Location                       |
| ----: | ------: | ------: | ----------------------------------------------------- | ------------------------------ |
| 86.6% | 103.0ms |     103 | `fmt::v11::detail::arg_formatter::operator()`         | `src/fmt/include/fmt/format.h` |
|  3.4% |   4.0ms |       4 | `fmt::v11::detail::default_arg_formatter::operator()` | `src/fmt/include/fmt/format.h` |

##### `fmt::v11::detail::arg_formatter::operator()` (`src/fmt/include/fmt/format.h`)

|     % |   Time | Samples | Callee                    | Location                       |
| ----: | -----: | ------: | ------------------------- | ------------------------------ |
| 95.1% | 98.0ms |      98 | `fmt::v11::detail::write` | `src/fmt/include/fmt/format.h` |

##### `fmt::v11::detail::write_float` (`src/fmt/include/fmt/format.h`)

|     % |   Time | Samples | Callee                             | Location                                        |
| ----: | -----: | ------: | ---------------------------------- | ----------------------------------------------- |
| 58.3% | 56.0ms |      56 | `fmt::v11::detail::write_float`    | `src/fmt/include/fmt/format.h`                  |
| 38.5% | 37.0ms |      37 | `fmt::v11::detail::do_write_float` | `src/fmt/include/fmt/format.h`                  |
| 26.0% | 25.0ms |      25 | `fmt::v11::detail::format_float`   | `src/fmt/include/fmt/format.h`                  |
| 10.4% | 10.0ms |      10 | `0x137f80`                         | `usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|  5.2% |  5.0ms |       5 | `0x137f84`                         | `usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |

##### `fmt::v11::detail::parse_format_specs` (`src/fmt/include/fmt/base.h`)

|     % |   Time | Samples | Callee                                                                 | Location                     |
| ----: | -----: | ------: | ---------------------------------------------------------------------- | ---------------------------- |
| 20.0% | 13.0ms |      13 | `fmt::v11::detail::parse_width`                                        | `src/fmt/include/fmt/base.h` |
| 16.9% | 11.0ms |      11 | `fmt::v11::detail::parse_format_specs()::{unnamed type#1}::operator()` | `src/fmt/include/fmt/base.h` |
| 10.8% |  7.0ms |       7 | `fmt::v11::detail::parse_precision`                                    | `src/fmt/include/fmt/base.h` |
|  7.7% |  5.0ms |       5 | `fmt::v11::detail::parse_align`                                        | `src/fmt/include/fmt/base.h` |
|  1.5% |  1.0ms |       1 | `fmt::v11::basic_specs::set_sign`                                      | `src/fmt/include/fmt/base.h` |

##### `fmt::v11::detail::copy_noinline` (`src/fmt/include/fmt/format.h`)

|     % |   Time | Samples | Callee                   | Location                     |
| ----: | -----: | ------: | ------------------------ | ---------------------------- |
| 65.0% | 39.0ms |      39 | `fmt::v11::detail::copy` | `src/fmt/include/fmt/base.h` |

##### `fmt::v11::detail::write_padded` (`src/fmt/include/fmt/format.h`)

|     % |   Time | Samples | Callee                                                                                 | Location                       |
| ----: | -----: | ------: | -------------------------------------------------------------------------------------- | ------------------------------ |
| 85.5% | 47.0ms |      47 | `fmt::v11::detail::write_padded`                                                       | `src/fmt/include/fmt/format.h` |
| 38.2% | 21.0ms |      21 | `fmt::v11::detail::do_write_float()::{lambda(fmt::v11::basic_appender)#4}::operator()` | `src/fmt/include/fmt/format.h` |
| 20.0% | 11.0ms |      11 | `fmt::v11::detail::fill`                                                               | `src/fmt/include/fmt/format.h` |
| 16.4% |  9.0ms |       9 | `fmt::v11::detail::write_int()::{lambda(fmt::v11::basic_appender)#1}::operator()`      | `src/fmt/include/fmt/format.h` |
|  7.3% |  4.0ms |       4 | `fmt::v11::detail::write()::{lambda(fmt::v11::basic_appender)#1}::operator()`          | `src/fmt/include/fmt/format.h` |

##### `fmt::v11::detail::buffer::append` (`src/fmt/include/fmt/base.h`)

|    % |  Time | Samples | Callee                                  | Location                     |
| ---: | ----: | ------: | --------------------------------------- | ---------------------------- |
| 4.1% | 2.0ms |       2 | `fmt::v11::detail::buffer::try_reserve` | `src/fmt/include/fmt/base.h` |

##### `fmt::v11::detail::copy` (`src/fmt/include/fmt/base.h`)

|      % |   Time | Samples | Callee                             | Location                     |
| -----: | -----: | ------: | ---------------------------------- | ---------------------------- |
| 100.0% | 49.0ms |      49 | `fmt::v11::detail::buffer::append` | `src/fmt/include/fmt/base.h` |

##### `fmt::v11::detail::format_handler::on_replacement_field` (`src/fmt/include/fmt/format.h`)

|     % |   Time | Samples | Callee                                | Location                              |
| ----: | -----: | ------: | ------------------------------------- | ------------------------------------- |
| 51.2% | 22.0ms |      22 | `fmt::v11::detail::copy_noinline`     | `src/fmt/include/fmt/format.h`        |
| 14.0% |  6.0ms |       6 | `fmt::v11::detail::do_format_decimal` | `src/fmt/include/fmt/format.h`        |
| 14.0% |  6.0ms |       6 | `fmt::v11::basic_format_arg::visit`   | `src/fmt/include/fmt/base.h`          |
|  9.3% |  4.0ms |       4 | `0x9e6c0`                             | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  4.7% |  2.0ms |       2 | `0x9e6e8`                             | `usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `fmt::v11::detail::write_int` (`src/fmt/include/fmt/format.h`)

|     % |   Time | Samples | Callee                                | Location                       |
| ----: | -----: | ------: | ------------------------------------- | ------------------------------ |
| 40.5% | 17.0ms |      17 | `fmt::v11::detail::write_padded`      | `src/fmt/include/fmt/format.h` |
| 28.6% | 12.0ms |      12 | `fmt::v11::detail::do_format_decimal` | `src/fmt/include/fmt/format.h` |
| 11.9% |  5.0ms |       5 | `fmt::v11::detail::do_format_base2e`  | `src/fmt/include/fmt/format.h` |

##### `fmt::v11::detail::for_each_codepoint` (`src/fmt/include/fmt/format.h`)

|     % |   Time | Samples | Callee                                                                                     | Location                       |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------------ | ------------------------------ |
| 97.5% | 39.0ms |      39 | `fmt::v11::detail::for_each_codepoint()::{lambda(char const*, char const*)#1}::operator()` | `src/fmt/include/fmt/format.h` |

##### `fmt::v11::detail::compute_width` (`src/fmt/include/fmt/format.h`)

|      % |   Time | Samples | Callee                                 | Location                       |
| -----: | -----: | ------: | -------------------------------------- | ------------------------------ |
| 100.0% | 40.0ms |      40 | `fmt::v11::detail::for_each_codepoint` | `src/fmt/include/fmt/format.h` |

##### `0xa2cab` (`usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30`)

|     % |  Time | Samples | Callee    | Location                              |
| ----: | ----: | ------: | --------- | ------------------------------------- |
| 66.7% | 6.0ms |       6 | `0x92284` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
| 11.1% | 1.0ms |       1 | `0x92260` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
| 11.1% | 1.0ms |       1 | `0x92274` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
| 11.1% | 1.0ms |       1 | `0x923f0` | `usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x92a9b` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |  Time | Samples | Callee    | Location                              |
| ----: | ----: | ------: | --------- | ------------------------------------- |
| 37.5% | 3.0ms |       3 | `0x8faf4` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
| 25.0% | 2.0ms |       2 | `0x8fae0` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
| 12.5% | 1.0ms |       1 | `0x8faa0` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
| 12.5% | 1.0ms |       1 | `0x8fb44` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
| 12.5% | 1.0ms |       1 | `0x8fbf0` | `usr/lib/aarch64-linux-gnu/libc.so.6` |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

Common call stack: `fmt::v11::vformat[abi:cxx11]` (`src/fmt/include/fmt/format-inl.h`) ← `fmt::v11::format` (`src/fmt/include/fmt/format.h`) ← `main` (`out/profile.cpp`) ← `0x27743` (`usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start`

|    % |   Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ---: | -----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 6.1% | 31.0ms |      31 | `fmt::v11::detail::utf8_decode` (`src/fmt/include/fmt/format.h`) ← `fmt::v11::detail::for_each_codepoint()::{lambda(char const*, char const*)#1}::operator()` ← `fmt::v11::detail::for_each_codepoint` ← `fmt::v11::detail::compute_width` ← `fmt::v11::detail::write` ← `fmt::v11::detail::format_handler::on_format_specs` ← `fmt::v11::detail::parse_replacement_field` (`src/fmt/include/fmt/base.h`) ← `fmt::v11::detail::parse_format_string` ← `fmt::v11::detail::vformat_to` (`src/fmt/include/fmt/format-inl.h`)                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 5.5% | 28.0ms |      28 | `fmt::v11::detail::parse_format_string` (`src/fmt/include/fmt/base.h`) ← `fmt::v11::detail::vformat_to` (`src/fmt/include/fmt/format-inl.h`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 5.1% | 26.0ms |      26 | `fmt::v11::detail::parse_format_specs` (`src/fmt/include/fmt/base.h`) ← `fmt::v11::detail::format_handler::on_format_specs` (`src/fmt/include/fmt/format.h`) ← `fmt::v11::detail::parse_replacement_field` (`src/fmt/include/fmt/base.h`) ← `fmt::v11::detail::parse_format_string` ← `fmt::v11::detail::vformat_to` (`src/fmt/include/fmt/format-inl.h`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 3.7% | 19.0ms |      19 | `fmt::v11::detail::parse_replacement_field` (`src/fmt/include/fmt/base.h`) ← `fmt::v11::detail::parse_format_string` ← `fmt::v11::detail::vformat_to` (`src/fmt/include/fmt/format-inl.h`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 3.1% | 16.0ms |      16 | `fmt::v11::detail::buffer::append` (`src/fmt/include/fmt/base.h`) ← `fmt::v11::detail::copy` ← `fmt::v11::detail::copy_noinline` (`src/fmt/include/fmt/format.h`) ← `fmt::v11::detail::format_handler::on_replacement_field` ← `fmt::v11::detail::parse_replacement_field` (`src/fmt/include/fmt/base.h`) ← `fmt::v11::detail::parse_format_string` ← `fmt::v11::detail::vformat_to` (`src/fmt/include/fmt/format-inl.h`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 3.0% | 15.0ms |      15 | `0x137f20` (`usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 2.8% | 14.0ms |      14 | `fmt::v11::detail::copy_noinline` (`src/fmt/include/fmt/format.h`) ← `fmt::v11::detail::format_handler::on_text` ← `fmt::v11::detail::parse_format_string` (`src/fmt/include/fmt/base.h`) ← `fmt::v11::detail::vformat_to` (`src/fmt/include/fmt/format-inl.h`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 2.6% | 13.0ms |      13 | `fmt::v11::detail::buffer::append` (`src/fmt/include/fmt/base.h`) ← `fmt::v11::detail::copy` ← `fmt::v11::detail::copy_noinline` (`src/fmt/include/fmt/format.h`) ← `fmt::v11::detail::write_significand` ← `fmt::v11::detail::write_significand` ← `fmt::v11::detail::do_write_float()::{lambda(fmt::v11::basic_appender)#4}::operator()` ← `fmt::v11::detail::write_padded` ← `fmt::v11::detail::write_padded` ← `fmt::v11::detail::do_write_float` ← `fmt::v11::detail::write_float` ← `fmt::v11::detail::write_float` ← `fmt::v11::detail::write` ← `fmt::v11::detail::arg_formatter::operator()` ← `fmt::v11::basic_format_arg::visit` (`src/fmt/include/fmt/base.h`) ← `fmt::v11::detail::format_handler::on_format_specs` (`src/fmt/include/fmt/format.h`) ← `fmt::v11::detail::parse_replacement_field` (`src/fmt/include/fmt/base.h`) ← `fmt::v11::detail::parse_format_string` ← `fmt::v11::detail::vformat_to` (`src/fmt/include/fmt/format-inl.h`) |
| 2.4% | 12.0ms |      12 | `0x9d100` (`usr/lib/aarch64-linux-gnu/libc.so.6`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 2.2% | 11.0ms |      11 | `fmt::v11::detail::do_format_decimal` (`src/fmt/include/fmt/format.h`) ← `fmt::v11::detail::write_int` ← `fmt::v11::detail::format_handler::on_format_specs` ← `fmt::v11::detail::parse_replacement_field` (`src/fmt/include/fmt/base.h`) ← `fmt::v11::detail::parse_format_string` ← `fmt::v11::detail::vformat_to` (`src/fmt/include/fmt/format-inl.h`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 2.2% | 11.0ms |      11 | `fmt::v11::detail::write_float` (`src/fmt/include/fmt/format.h`) ← `fmt::v11::detail::write` ← `fmt::v11::detail::arg_formatter::operator()` ← `fmt::v11::basic_format_arg::visit` (`src/fmt/include/fmt/base.h`) ← `fmt::v11::detail::format_handler::on_format_specs` (`src/fmt/include/fmt/format.h`) ← `fmt::v11::detail::parse_replacement_field` (`src/fmt/include/fmt/base.h`) ← `fmt::v11::detail::parse_format_string` ← `fmt::v11::detail::vformat_to` (`src/fmt/include/fmt/format-inl.h`)                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 2.2% | 11.0ms |      11 | `fmt::v11::detail::parse_format_specs()::{unnamed type#1}::operator()` (`src/fmt/include/fmt/base.h`) ← `fmt::v11::detail::parse_format_specs` ← `fmt::v11::detail::format_handler::on_format_specs` (`src/fmt/include/fmt/format.h`) ← `fmt::v11::detail::parse_replacement_field` (`src/fmt/include/fmt/base.h`) ← `fmt::v11::detail::parse_format_string` ← `fmt::v11::detail::vformat_to` (`src/fmt/include/fmt/format-inl.h`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 2.0% | 10.0ms |      10 | `0x137f80` (`usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30`) ← `fmt::v11::detail::write_float` (`src/fmt/include/fmt/format.h`) ← `fmt::v11::detail::write_float` ← `fmt::v11::detail::write` ← `fmt::v11::detail::arg_formatter::operator()` ← `fmt::v11::basic_format_arg::visit` (`src/fmt/include/fmt/base.h`) ← `fmt::v11::detail::format_handler::on_format_specs` (`src/fmt/include/fmt/format.h`) ← `fmt::v11::detail::parse_replacement_field` (`src/fmt/include/fmt/base.h`) ← `fmt::v11::detail::parse_format_string` ← `fmt::v11::detail::vformat_to` (`src/fmt/include/fmt/format-inl.h`)                                                                                                                                                                                                                                                                                                                                                         |
| 2.0% | 10.0ms |      10 | `fmt::v11::basic_format_arg::visit` (`src/fmt/include/fmt/base.h`) ← `fmt::v11::detail::format_handler::on_format_specs` (`src/fmt/include/fmt/format.h`) ← `fmt::v11::detail::parse_replacement_field` (`src/fmt/include/fmt/base.h`) ← `fmt::v11::detail::parse_format_string` ← `fmt::v11::detail::vformat_to` (`src/fmt/include/fmt/format-inl.h`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 1.8% |  9.0ms |       9 | `fmt::v11::detail::buffer::append` (`src/fmt/include/fmt/base.h`) ← `fmt::v11::detail::copy` ← `fmt::v11::detail::copy_noinline` (`src/fmt/include/fmt/format.h`) ← `fmt::v11::detail::format_handler::on_text` ← `fmt::v11::detail::parse_format_string` (`src/fmt/include/fmt/base.h`) ← `fmt::v11::detail::vformat_to` (`src/fmt/include/fmt/format-inl.h`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 1.8% |  9.0ms |       9 | `fmt::v11::detail::format_handler::on_format_specs` (`src/fmt/include/fmt/format.h`) ← `fmt::v11::detail::parse_replacement_field` (`src/fmt/include/fmt/base.h`) ← `fmt::v11::detail::parse_format_string` ← `fmt::v11::detail::vformat_to` (`src/fmt/include/fmt/format-inl.h`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 1.6% |  8.0ms |       8 | `fmt::v11::detail::compute_width()::count_code_points::operator()` (`src/fmt/include/fmt/format.h`) ← `fmt::v11::detail::for_each_codepoint()::{lambda(char const*, char const*)#1}::operator()` ← `fmt::v11::detail::for_each_codepoint` ← `fmt::v11::detail::compute_width` ← `fmt::v11::detail::write` ← `fmt::v11::detail::format_handler::on_format_specs` ← `fmt::v11::detail::parse_replacement_field` (`src/fmt/include/fmt/base.h`) ← `fmt::v11::detail::parse_format_string` ← `fmt::v11::detail::vformat_to` (`src/fmt/include/fmt/format-inl.h`)                                                                                                                                                                                                                                                                                                                                                                                                   |
| 1.4% |  7.0ms |       7 | `fmt::v11::parse_context::next_arg_id` (`src/fmt/include/fmt/base.h`) ← `fmt::v11::detail::format_handler::on_arg_id` (`src/fmt/include/fmt/format.h`) ← `fmt::v11::detail::parse_replacement_field` (`src/fmt/include/fmt/base.h`) ← `fmt::v11::detail::parse_format_string` ← `fmt::v11::detail::vformat_to` (`src/fmt/include/fmt/format-inl.h`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 1.4% |  7.0ms |       7 | `fmt::v11::detail::format_float` (`src/fmt/include/fmt/format.h`) ← `fmt::v11::detail::write_float` ← `fmt::v11::detail::write` ← `fmt::v11::detail::arg_formatter::operator()` ← `fmt::v11::basic_format_arg::visit` (`src/fmt/include/fmt/base.h`) ← `fmt::v11::detail::format_handler::on_format_specs` (`src/fmt/include/fmt/format.h`) ← `fmt::v11::detail::parse_replacement_field` (`src/fmt/include/fmt/base.h`) ← `fmt::v11::detail::parse_format_string` ← `fmt::v11::detail::vformat_to` (`src/fmt/include/fmt/format-inl.h`)                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 1.4% |  7.0ms |       7 | `fmt::v11::detail::parse_dynamic_spec` (`src/fmt/include/fmt/base.h`) ← `fmt::v11::detail::parse_width` ← `fmt::v11::detail::parse_format_specs` ← `fmt::v11::detail::format_handler::on_format_specs` (`src/fmt/include/fmt/format.h`) ← `fmt::v11::detail::parse_replacement_field` (`src/fmt/include/fmt/base.h`) ← `fmt::v11::detail::parse_format_string` ← `fmt::v11::detail::vformat_to` (`src/fmt/include/fmt/format-inl.h`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
