# CPU profile

Took 517.0ms over 517 samples (1.0ms per sample).

| Category         |     % |    Time | Samples |
| ---------------- | ----: | ------: | ------: |
| Ours             | 92.6% | 479.0ms |     479 |
| Standard library |  4.1% |  21.0ms |      21 |
| Native           |  3.3% |  17.0ms |      17 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

#### Categories

##### Ours

|    % |   Time | Samples | Function                                                           | Location                           |
| ---: | -----: | ------: | ------------------------------------------------------------------ | ---------------------------------- |
| 7.9% | 41.0ms |      41 | `fmt::v11::detail::buffer::append`                                 | `src/fmt/include/fmt/base.h`       |
| 7.4% | 38.0ms |      38 | `fmt::v11::vformat[abi:cxx11]`                                     | `src/fmt/include/fmt/format-inl.h` |
| 6.4% | 33.0ms |      33 | `fmt::v11::detail::parse_format_specs`                             | `src/fmt/include/fmt/base.h`       |
| 5.4% | 28.0ms |      28 | `fmt::v11::detail::parse_replacement_field`                        | `src/fmt/include/fmt/base.h`       |
| 4.4% | 23.0ms |      23 | `fmt::v11::detail::format_handler::on_format_specs`                | `src/fmt/include/fmt/format.h`     |
| 4.3% | 22.0ms |      22 | `fmt::v11::detail::write_float`                                    | `src/fmt/include/fmt/format.h`     |
| 4.3% | 22.0ms |      22 | `fmt::v11::detail::utf8_decode`                                    | `src/fmt/include/fmt/format.h`     |
| 3.3% | 17.0ms |      17 | `fmt::v11::basic_format_arg::visit`                                | `src/fmt/include/fmt/base.h`       |
| 3.1% | 16.0ms |      16 | `fmt::v11::detail::write_padded`                                   | `src/fmt/include/fmt/format.h`     |
| 2.9% | 15.0ms |      15 | `fmt::v11::detail::copy_noinline`                                  | `src/fmt/include/fmt/format.h`     |
| 2.7% | 14.0ms |      14 | `fmt::v11::detail::parse_format_string`                            | `src/fmt/include/fmt/base.h`       |
| 2.3% | 12.0ms |      12 | `fmt::v11::detail::parse_dynamic_spec`                             | `src/fmt/include/fmt/base.h`       |
| 2.1% | 11.0ms |      11 | `fmt::v11::detail::compute_width()::count_code_points::operator()` | `src/fmt/include/fmt/format.h`     |
| 1.7% |  9.0ms |       9 | `fmt::v11::detail::format_float`                                   | `src/fmt/include/fmt/format.h`     |
| 1.7% |  9.0ms |       9 | `fmt::v11::detail::buffer::try_reserve`                            | `src/fmt/include/fmt/base.h`       |
| 1.7% |  9.0ms |       9 | `fmt::v11::detail::do_format_decimal`                              | `src/fmt/include/fmt/format.h`     |
| 1.7% |  9.0ms |       9 | `fmt::v11::detail::parse_nonnegative_int`                          | `src/fmt/include/fmt/base.h`       |
| 1.5% |  8.0ms |       8 | `fmt::v11::detail::do_write_float`                                 | `src/fmt/include/fmt/format.h`     |
| 1.5% |  8.0ms |       8 | `fmt::v11::detail::dragonbox::cache_accessor::get_cached_power`    | `src/fmt/include/fmt/format-inl.h` |
| 1.5% |  8.0ms |       8 | `fmt::v11::detail::buffer::push_back`                              | `src/fmt/include/fmt/base.h`       |

#### Lines

Lines ranked by contribution to each function's self time.

##### `fmt::v11::detail::buffer::append` (`src/fmt/include/fmt/base.h`)

|     % |   Time | Samples | Location                          |
| ----: | -----: | ------: | --------------------------------- |
| 65.9% | 27.0ms |      27 | `src/fmt/include/fmt/base.h:1837` |
| 12.2% |  5.0ms |       5 | `src/fmt/include/fmt/base.h:1830` |
| 12.2% |  5.0ms |       5 | `src/fmt/include/fmt/base.h:1836` |
|  9.8% |  4.0ms |       4 | `src/fmt/include/fmt/base.h:1838` |

##### `fmt::v11::vformat[abi:cxx11]` (`src/fmt/include/fmt/format-inl.h`)

|     % |   Time | Samples | Location                                |
| ----: | -----: | ------: | --------------------------------------- |
| 97.4% | 37.0ms |      37 | `src/fmt/include/fmt/format-inl.h:1447` |
|  2.6% |  1.0ms |       1 | `src/fmt/include/fmt/format-inl.h:1448` |

##### `fmt::v11::detail::parse_format_specs` (`src/fmt/include/fmt/base.h`)

|     % |   Time | Samples | Location                          |
| ----: | -----: | ------: | --------------------------------- |
| 54.5% | 18.0ms |      18 | `src/fmt/include/fmt/base.h:1482` |
| 21.2% |  7.0ms |       7 | `src/fmt/include/fmt/base.h:1580` |
| 12.1% |  4.0ms |       4 | `src/fmt/include/fmt/base.h:1445` |
| 12.1% |  4.0ms |       4 | `src/fmt/include/fmt/base.h:1577` |

##### `fmt::v11::detail::parse_replacement_field` (`src/fmt/include/fmt/base.h`)

|     % |   Time | Samples | Location                          |
| ----: | -----: | ------: | --------------------------------- |
| 35.7% | 10.0ms |      10 | `src/fmt/include/fmt/base.h:1627` |
| 32.1% |  9.0ms |       9 | `src/fmt/include/fmt/base.h:1593` |
| 28.6% |  8.0ms |       8 | `src/fmt/include/fmt/base.h:1583` |
|  3.6% |  1.0ms |       1 | `src/fmt/include/fmt/base.h:1624` |

##### `fmt::v11::detail::format_handler::on_format_specs` (`src/fmt/include/fmt/format.h`)

|     % |   Time | Samples | Location                            |
| ----: | -----: | ------: | ----------------------------------- |
| 52.2% | 12.0ms |      12 | `src/fmt/include/fmt/format.h:3628` |
| 26.1% |  6.0ms |       6 | `src/fmt/include/fmt/format.h:3630` |
| 21.7% |  5.0ms |       5 | `src/fmt/include/fmt/format.h:3619` |

##### `fmt::v11::detail::write_float` (`src/fmt/include/fmt/format.h`)

|     % |   Time | Samples | Location                            |
| ----: | -----: | ------: | ----------------------------------- |
| 72.7% | 16.0ms |      16 | `src/fmt/include/fmt/format.h:2460` |
|  9.1% |  2.0ms |       2 | `src/fmt/include/fmt/format.h:3301` |
|  9.1% |  2.0ms |       2 | `src/fmt/include/fmt/format.h:3306` |
|  4.5% |  1.0ms |       1 | `src/fmt/include/fmt/format.h:3343` |
|  4.5% |  1.0ms |       1 | `src/fmt/include/fmt/format.h:3336` |

##### `fmt::v11::detail::utf8_decode` (`src/fmt/include/fmt/format.h`)

|     % |  Time | Samples | Location                           |
| ----: | ----: | ------: | ---------------------------------- |
| 36.4% | 8.0ms |       8 | `src/fmt/include/fmt/format.h:561` |
| 13.6% | 3.0ms |       3 | `src/fmt/include/fmt/format.h:581` |
| 13.6% | 3.0ms |       3 | `src/fmt/include/fmt/format.h:564` |
| 13.6% | 3.0ms |       3 | `src/fmt/include/fmt/format.h:588` |
|  9.1% | 2.0ms |       2 | `src/fmt/include/fmt/format.h:560` |

##### `fmt::v11::basic_format_arg::visit` (`src/fmt/include/fmt/base.h`)

|     % |   Time | Samples | Location                          |
| ----: | -----: | ------: | --------------------------------- |
| 82.4% | 14.0ms |      14 | `src/fmt/include/fmt/base.h:2518` |
| 17.6% |  3.0ms |       3 | `src/fmt/include/fmt/base.h:2537` |

##### `fmt::v11::detail::write_padded` (`src/fmt/include/fmt/format.h`)

|     % |  Time | Samples | Location                            |
| ----: | ----: | ------: | ----------------------------------- |
| 31.3% | 5.0ms |       5 | `src/fmt/include/fmt/format.h:1636` |
| 25.0% | 4.0ms |       4 | `src/fmt/include/fmt/format.h:1641` |
| 18.8% | 3.0ms |       3 | `src/fmt/include/fmt/format.h:1635` |
| 12.5% | 2.0ms |       2 | `src/fmt/include/fmt/format.h:1644` |
| 12.5% | 2.0ms |       2 | `src/fmt/include/fmt/format.h:1646` |

##### `fmt::v11::detail::copy_noinline` (`src/fmt/include/fmt/format.h`)

|     % |   Time | Samples | Location                           |
| ----: | -----: | ------: | ---------------------------------- |
| 66.7% | 10.0ms |      10 | `src/fmt/include/fmt/format.h:537` |
| 33.3% |  5.0ms |       5 | `src/fmt/include/fmt/format.h:534` |

##### `fmt::v11::detail::parse_format_string` (`src/fmt/include/fmt/base.h`)

|     % |  Time | Samples | Location                          |
| ----: | ----: | ------: | --------------------------------- |
| 35.7% | 5.0ms |       5 | `src/fmt/include/fmt/base.h:1635` |
| 35.7% | 5.0ms |       5 | `src/fmt/include/fmt/base.h:1639` |
| 14.3% | 2.0ms |       2 | `src/fmt/include/fmt/base.h:1634` |
| 14.3% | 2.0ms |       2 | `src/fmt/include/fmt/base.h:1638` |

##### `fmt::v11::detail::parse_dynamic_spec` (`src/fmt/include/fmt/base.h`)

|     % |  Time | Samples | Location                          |
| ----: | ----: | ------: | --------------------------------- |
| 33.3% | 4.0ms |       4 | `src/fmt/include/fmt/base.h:1384` |
| 33.3% | 4.0ms |       4 | `src/fmt/include/fmt/base.h:1392` |
| 16.7% | 2.0ms |       2 | `src/fmt/include/fmt/base.h:1390` |
| 16.7% | 2.0ms |       2 | `src/fmt/include/fmt/base.h:1414` |

##### `fmt::v11::detail::compute_width()::count_code_points::operator()` (`src/fmt/include/fmt/format.h`)

|     % |  Time | Samples | Location                           |
| ----: | ----: | ------: | ---------------------------------- |
| 45.5% | 5.0ms |       5 | `src/fmt/include/fmt/format.h:648` |
| 45.5% | 5.0ms |       5 | `src/fmt/include/fmt/format.h:644` |
|  9.1% | 1.0ms |       1 | `src/fmt/include/fmt/format.h:646` |

##### `fmt::v11::detail::format_float` (`src/fmt/include/fmt/format.h`)

|     % |  Time | Samples | Location                            |
| ----: | ----: | ------: | ----------------------------------- |
| 11.1% | 1.0ms |       1 | `src/fmt/include/fmt/format.h:3280` |
| 11.1% | 1.0ms |       1 | `src/fmt/include/fmt/format.h:3185` |
| 11.1% | 1.0ms |       1 | `src/fmt/include/fmt/format.h:3068` |
| 11.1% | 1.0ms |       1 | `src/fmt/include/fmt/format.h:3058` |
| 11.1% | 1.0ms |       1 | `src/fmt/include/fmt/format.h:3189` |

##### `fmt::v11::detail::buffer::try_reserve` (`src/fmt/include/fmt/base.h`)

|      % |  Time | Samples | Location                          |
| -----: | ----: | ------: | --------------------------------- |
| 100.0% | 9.0ms |       9 | `src/fmt/include/fmt/base.h:1813` |

##### `fmt::v11::detail::do_format_decimal` (`src/fmt/include/fmt/format.h`)

|     % |  Time | Samples | Location                            |
| ----: | ----: | ------: | ----------------------------------- |
| 44.4% | 4.0ms |       4 | `src/fmt/include/fmt/format.h:1198` |
| 33.3% | 3.0ms |       3 | `src/fmt/include/fmt/format.h:1191` |
| 11.1% | 1.0ms |       1 | `src/fmt/include/fmt/format.h:1179` |
| 11.1% | 1.0ms |       1 | `src/fmt/include/fmt/format.h:1195` |

##### `fmt::v11::detail::parse_nonnegative_int` (`src/fmt/include/fmt/base.h`)

|     % |  Time | Samples | Location                          |
| ----: | ----: | ------: | --------------------------------- |
| 77.8% | 7.0ms |       7 | `src/fmt/include/fmt/base.h:1305` |
| 11.1% | 1.0ms |       1 | `src/fmt/include/fmt/base.h:1303` |
| 11.1% | 1.0ms |       1 | `src/fmt/include/fmt/base.h:1306` |

##### `fmt::v11::detail::do_write_float` (`src/fmt/include/fmt/format.h`)

|     % |  Time | Samples | Location                            |
| ----: | ----: | ------: | ----------------------------------- |
| 50.0% | 4.0ms |       4 | `src/fmt/include/fmt/format.h:2435` |
| 12.5% | 1.0ms |       1 | `src/fmt/include/fmt/format.h:2342` |
| 12.5% | 1.0ms |       1 | `src/fmt/include/fmt/format.h:2427` |
| 12.5% | 1.0ms |       1 | `src/fmt/include/fmt/format.h:2408` |
| 12.5% | 1.0ms |       1 | `src/fmt/include/fmt/format.h:2336` |

##### `fmt::v11::detail::dragonbox::cache_accessor::get_cached_power` (`src/fmt/include/fmt/format-inl.h`)

|     % |  Time | Samples | Location                                |
| ----: | ----: | ------: | --------------------------------------- |
| 87.5% | 7.0ms |       7 | `src/fmt/include/fmt/format-inl.h:1059` |
| 12.5% | 1.0ms |       1 | `src/fmt/include/fmt/format-inl.h:1079` |

##### `fmt::v11::detail::buffer::push_back` (`src/fmt/include/fmt/base.h`)

|     % |  Time | Samples | Location                          |
| ----: | ----: | ------: | --------------------------------- |
| 87.5% | 7.0ms |       7 | `src/fmt/include/fmt/base.h:1818` |
| 12.5% | 1.0ms |       1 | `src/fmt/include/fmt/base.h:1816` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `fmt::v11::detail::buffer::append` (`src/fmt/include/fmt/base.h`)

|      % |   Time | Samples | Caller                   | Location                     |
| -----: | -----: | ------: | ------------------------ | ---------------------------- |
| 100.0% | 41.0ms |      41 | `fmt::v11::detail::copy` | `src/fmt/include/fmt/base.h` |

##### `fmt::v11::vformat[abi:cxx11]` (`src/fmt/include/fmt/format-inl.h`)

|     % |   Time | Samples | Caller             | Location                       |
| ----: | -----: | ------: | ------------------ | ------------------------------ |
| 97.4% | 37.0ms |      37 | `fmt::v11::format` | `src/fmt/include/fmt/format.h` |

##### `fmt::v11::detail::parse_format_specs` (`src/fmt/include/fmt/base.h`)

|     % |   Time | Samples | Caller                                              | Location                       |
| ----: | -----: | ------: | --------------------------------------------------- | ------------------------------ |
| 97.0% | 32.0ms |      32 | `fmt::v11::detail::format_handler::on_format_specs` | `src/fmt/include/fmt/format.h` |
|  3.0% |  1.0ms |       1 | `fmt::v11::detail::parse_replacement_field`         | `src/fmt/include/fmt/base.h`   |

##### `fmt::v11::detail::parse_replacement_field` (`src/fmt/include/fmt/base.h`)

|      % |   Time | Samples | Caller                                  | Location                     |
| -----: | -----: | ------: | --------------------------------------- | ---------------------------- |
| 100.0% | 28.0ms |      28 | `fmt::v11::detail::parse_format_string` | `src/fmt/include/fmt/base.h` |

##### `fmt::v11::detail::format_handler::on_format_specs` (`src/fmt/include/fmt/format.h`)

|      % |   Time | Samples | Caller                                      | Location                     |
| -----: | -----: | ------: | ------------------------------------------- | ---------------------------- |
| 100.0% | 23.0ms |      23 | `fmt::v11::detail::parse_replacement_field` | `src/fmt/include/fmt/base.h` |

##### `fmt::v11::detail::write_float` (`src/fmt/include/fmt/format.h`)

|     % |   Time | Samples | Caller                          | Location                       |
| ----: | -----: | ------: | ------------------------------- | ------------------------------ |
| 72.7% | 16.0ms |      16 | `fmt::v11::detail::write_float` | `src/fmt/include/fmt/format.h` |
| 27.3% |  6.0ms |       6 | `fmt::v11::detail::write`       | `src/fmt/include/fmt/format.h` |

##### `fmt::v11::detail::utf8_decode` (`src/fmt/include/fmt/format.h`)

|      % |   Time | Samples | Caller                                                                                     | Location                       |
| -----: | -----: | ------: | ------------------------------------------------------------------------------------------ | ------------------------------ |
| 100.0% | 22.0ms |      22 | `fmt::v11::detail::for_each_codepoint()::{lambda(char const*, char const*)#1}::operator()` | `src/fmt/include/fmt/format.h` |

##### `fmt::v11::basic_format_arg::visit` (`src/fmt/include/fmt/base.h`)

|     % |   Time | Samples | Caller                                                   | Location                       |
| ----: | -----: | ------: | -------------------------------------------------------- | ------------------------------ |
| 70.6% | 12.0ms |      12 | `fmt::v11::detail::format_handler::on_format_specs`      | `src/fmt/include/fmt/format.h` |
| 29.4% |  5.0ms |       5 | `fmt::v11::detail::format_handler::on_replacement_field` | `src/fmt/include/fmt/format.h` |

##### `fmt::v11::detail::write_padded` (`src/fmt/include/fmt/format.h`)

|     % |   Time | Samples | Caller                           | Location                       |
| ----: | -----: | ------: | -------------------------------- | ------------------------------ |
| 87.5% | 14.0ms |      14 | `fmt::v11::detail::write_padded` | `src/fmt/include/fmt/format.h` |
| 12.5% |  2.0ms |       2 | `fmt::v11::detail::write`        | `src/fmt/include/fmt/format.h` |

##### `fmt::v11::detail::copy_noinline` (`src/fmt/include/fmt/format.h`)

|     % |  Time | Samples | Caller                                                   | Location                       |
| ----: | ----: | ------: | -------------------------------------------------------- | ------------------------------ |
| 46.7% | 7.0ms |       7 | `fmt::v11::detail::format_handler::on_text`              | `src/fmt/include/fmt/format.h` |
| 26.7% | 4.0ms |       4 | `fmt::v11::detail::format_handler::on_replacement_field` | `src/fmt/include/fmt/format.h` |
| 20.0% | 3.0ms |       3 | `fmt::v11::detail::write_significand`                    | `src/fmt/include/fmt/format.h` |
|  6.7% | 1.0ms |       1 | `fmt::v11::detail::parse_format_string`                  | `src/fmt/include/fmt/base.h`   |

##### `fmt::v11::detail::parse_format_string` (`src/fmt/include/fmt/base.h`)

|      % |   Time | Samples | Caller                         | Location                           |
| -----: | -----: | ------: | ------------------------------ | ---------------------------------- |
| 100.0% | 14.0ms |      14 | `fmt::v11::detail::vformat_to` | `src/fmt/include/fmt/format-inl.h` |

##### `fmt::v11::detail::parse_dynamic_spec` (`src/fmt/include/fmt/base.h`)

|     % |  Time | Samples | Caller                                              | Location                       |
| ----: | ----: | ------: | --------------------------------------------------- | ------------------------------ |
| 50.0% | 6.0ms |       6 | `fmt::v11::detail::parse_width`                     | `src/fmt/include/fmt/base.h`   |
| 33.3% | 4.0ms |       4 | `fmt::v11::detail::format_handler::on_format_specs` | `src/fmt/include/fmt/format.h` |
| 16.7% | 2.0ms |       2 | `fmt::v11::detail::parse_precision`                 | `src/fmt/include/fmt/base.h`   |

##### `fmt::v11::detail::compute_width()::count_code_points::operator()` (`src/fmt/include/fmt/format.h`)

|      % |   Time | Samples | Caller                                                                                     | Location                       |
| -----: | -----: | ------: | ------------------------------------------------------------------------------------------ | ------------------------------ |
| 100.0% | 11.0ms |      11 | `fmt::v11::detail::for_each_codepoint()::{lambda(char const*, char const*)#1}::operator()` | `src/fmt/include/fmt/format.h` |

##### `fmt::v11::detail::format_float` (`src/fmt/include/fmt/format.h`)

|      % |  Time | Samples | Caller                          | Location                       |
| -----: | ----: | ------: | ------------------------------- | ------------------------------ |
| 100.0% | 9.0ms |       9 | `fmt::v11::detail::write_float` | `src/fmt/include/fmt/format.h` |

##### `fmt::v11::detail::buffer::try_reserve` (`src/fmt/include/fmt/base.h`)

|     % |  Time | Samples | Caller                                 | Location                     |
| ----: | ----: | ------: | -------------------------------------- | ---------------------------- |
| 55.6% | 5.0ms |       5 | `fmt::v11::detail::buffer::append`     | `src/fmt/include/fmt/base.h` |
| 33.3% | 3.0ms |       3 | `fmt::v11::detail::buffer::push_back`  | `src/fmt/include/fmt/base.h` |
| 11.1% | 1.0ms |       1 | `fmt::v11::detail::buffer::try_resize` | `src/fmt/include/fmt/base.h` |

##### `fmt::v11::detail::do_format_decimal` (`src/fmt/include/fmt/format.h`)

|     % |  Time | Samples | Caller                                  | Location                       |
| ----: | ----: | ------: | --------------------------------------- | ------------------------------ |
| 88.9% | 8.0ms |       8 | `fmt::v11::detail::write_int`           | `src/fmt/include/fmt/format.h` |
| 11.1% | 1.0ms |       1 | `fmt::v11::detail::parse_format_string` | `src/fmt/include/fmt/base.h`   |

##### `fmt::v11::detail::parse_nonnegative_int` (`src/fmt/include/fmt/base.h`)

|      % |  Time | Samples | Caller                                 | Location                     |
| -----: | ----: | ------: | -------------------------------------- | ---------------------------- |
| 100.0% | 9.0ms |       9 | `fmt::v11::detail::parse_dynamic_spec` | `src/fmt/include/fmt/base.h` |

##### `fmt::v11::detail::do_write_float` (`src/fmt/include/fmt/format.h`)

|     % |  Time | Samples | Caller                          | Location                       |
| ----: | ----: | ------: | ------------------------------- | ------------------------------ |
| 50.0% | 4.0ms |       4 | `fmt::v11::detail::write_float` | `src/fmt/include/fmt/format.h` |
| 50.0% | 4.0ms |       4 | `fmt::v11::detail::write`       | `src/fmt/include/fmt/format.h` |

##### `fmt::v11::detail::dragonbox::cache_accessor::get_cached_power` (`src/fmt/include/fmt/format-inl.h`)

|      % |  Time | Samples | Caller                                          | Location                           |
| -----: | ----: | ------: | ----------------------------------------------- | ---------------------------------- |
| 100.0% | 8.0ms |       8 | `fmt::v11::detail::dragonbox::get_cached_power` | `src/fmt/include/fmt/format-inl.h` |

##### `fmt::v11::detail::buffer::push_back` (`src/fmt/include/fmt/base.h`)

|      % |  Time | Samples | Caller                                | Location                     |
| -----: | ----: | ------: | ------------------------------------- | ---------------------------- |
| 100.0% | 8.0ms |       8 | `fmt::v11::basic_appender::operator=` | `src/fmt/include/fmt/base.h` |

### Total time

Functions ranked by total time spent in the function and all its callees.

#### Categories

##### Ours

|     % |    Time | Samples | Function                                                 | Location                           |
| ----: | ------: | ------: | -------------------------------------------------------- | ---------------------------------- |
| 96.7% | 500.0ms |     500 | `main`                                                   | `out/profile.cpp`                  |
| 95.6% | 494.0ms |     494 | `fmt::v11::format`                                       | `src/fmt/include/fmt/format.h`     |
| 95.4% | 493.0ms |     493 | `fmt::v11::vformat[abi:cxx11]`                           | `src/fmt/include/fmt/format-inl.h` |
| 84.9% | 439.0ms |     439 | `fmt::v11::detail::vformat_to`                           | `src/fmt/include/fmt/format-inl.h` |
| 84.7% | 438.0ms |     438 | `fmt::v11::detail::parse_format_string`                  | `src/fmt/include/fmt/base.h`       |
| 77.4% | 400.0ms |     400 | `fmt::v11::detail::parse_replacement_field`              | `src/fmt/include/fmt/base.h`       |
| 62.7% | 324.0ms |     324 | `fmt::v11::detail::format_handler::on_format_specs`      | `src/fmt/include/fmt/format.h`     |
| 31.3% | 162.0ms |     162 | `fmt::v11::detail::write`                                | `src/fmt/include/fmt/format.h`     |
| 25.3% | 131.0ms |     131 | `fmt::v11::basic_format_arg::visit`                      | `src/fmt/include/fmt/base.h`       |
| 20.7% | 107.0ms |     107 | `fmt::v11::detail::arg_formatter::operator()`            | `src/fmt/include/fmt/format.h`     |
| 17.6% |  91.0ms |      91 | `fmt::v11::detail::write_float`                          | `src/fmt/include/fmt/format.h`     |
| 13.0% |  67.0ms |      67 | `fmt::v11::detail::parse_format_specs`                   | `src/fmt/include/fmt/base.h`       |
| 12.4% |  64.0ms |      64 | `fmt::v11::detail::write_padded`                         | `src/fmt/include/fmt/format.h`     |
|  9.7% |  50.0ms |      50 | `fmt::v11::detail::copy_noinline`                        | `src/fmt/include/fmt/format.h`     |
|  9.3% |  48.0ms |      48 | `fmt::v11::detail::copy`                                 | `src/fmt/include/fmt/base.h`       |
|  9.1% |  47.0ms |      47 | `fmt::v11::detail::buffer::append`                       | `src/fmt/include/fmt/base.h`       |
|  9.1% |  47.0ms |      47 | `fmt::v11::detail::write_int`                            | `src/fmt/include/fmt/format.h`     |
|  8.9% |  46.0ms |      46 | `fmt::v11::detail::do_write_float`                       | `src/fmt/include/fmt/format.h`     |
|  8.5% |  44.0ms |      44 | `fmt::v11::detail::format_handler::on_replacement_field` | `src/fmt/include/fmt/format.h`     |
|  7.5% |  39.0ms |      39 | `fmt::v11::detail::for_each_codepoint`                   | `src/fmt/include/fmt/format.h`     |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `main` (`out/profile.cpp`)

|     % |    Time | Samples | Callee                                      | Location                                 |
| ----: | ------: | ------: | ------------------------------------------- | ---------------------------------------- |
| 98.8% | 494.0ms |     494 | `fmt::v11::format`                          | `src/fmt/include/fmt/format.h`           |
|  1.2% |   6.0ms |       6 | `std::__cxx11::basic_string::~basic_string` | `usr/include/c++/12/bits/basic_string.h` |

##### `fmt::v11::format` (`src/fmt/include/fmt/format.h`)

|     % |    Time | Samples | Callee                           | Location                           |
| ----: | ------: | ------: | -------------------------------- | ---------------------------------- |
| 99.6% | 492.0ms |     492 | `fmt::v11::vformat[abi:cxx11]`   | `src/fmt/include/fmt/format-inl.h` |
|  0.4% |   2.0ms |       2 | `fmt::v11::detail::value::value` | `src/fmt/include/fmt/base.h`       |

##### `fmt::v11::vformat[abi:cxx11]` (`src/fmt/include/fmt/format-inl.h`)

|     % |    Time | Samples | Callee                                                | Location                           |
| ----: | ------: | ------: | ----------------------------------------------------- | ---------------------------------- |
| 89.0% | 439.0ms |     439 | `fmt::v11::detail::vformat_to`                        | `src/fmt/include/fmt/format-inl.h` |
|  2.4% |  12.0ms |      12 | `fmt::v11::to_string`                                 | `src/fmt/include/fmt/format.h`     |
|  0.4% |   2.0ms |       2 | `fmt::v11::basic_memory_buffer::~basic_memory_buffer` | `src/fmt/include/fmt/format.h`     |
|  0.2% |   1.0ms |       1 | `_init`                                               | `<unknown>`                        |
|  0.2% |   1.0ms |       1 | `fmt::v11::basic_memory_buffer::basic_memory_buffer`  | `src/fmt/include/fmt/format.h`     |

##### `fmt::v11::detail::vformat_to` (`src/fmt/include/fmt/format-inl.h`)

|     % |    Time | Samples | Callee                                  | Location                     |
| ----: | ------: | ------: | --------------------------------------- | ---------------------------- |
| 99.8% | 438.0ms |     438 | `fmt::v11::detail::parse_format_string` | `src/fmt/include/fmt/base.h` |
|  0.2% |   1.0ms |       1 | `fmt::v11::context::context`            | `src/fmt/include/fmt/base.h` |

##### `fmt::v11::detail::parse_format_string` (`src/fmt/include/fmt/base.h`)

|     % |    Time | Samples | Callee                                      | Location                       |
| ----: | ------: | ------: | ------------------------------------------- | ------------------------------ |
| 91.3% | 400.0ms |     400 | `fmt::v11::detail::parse_replacement_field` | `src/fmt/include/fmt/base.h`   |
|  5.0% |  22.0ms |      22 | `fmt::v11::detail::format_handler::on_text` | `src/fmt/include/fmt/format.h` |
|  0.2% |   1.0ms |       1 | `fmt::v11::detail::do_format_decimal`       | `src/fmt/include/fmt/format.h` |
|  0.2% |   1.0ms |       1 | `fmt::v11::detail::copy_noinline`           | `src/fmt/include/fmt/format.h` |

##### `fmt::v11::detail::parse_replacement_field` (`src/fmt/include/fmt/base.h`)

|     % |    Time | Samples | Callee                                                   | Location                       |
| ----: | ------: | ------: | -------------------------------------------------------- | ------------------------------ |
| 81.0% | 324.0ms |     324 | `fmt::v11::detail::format_handler::on_format_specs`      | `src/fmt/include/fmt/format.h` |
| 11.0% |  44.0ms |      44 | `fmt::v11::detail::format_handler::on_replacement_field` | `src/fmt/include/fmt/format.h` |
|  0.5% |   2.0ms |       2 | `fmt::v11::detail::format_handler::on_arg_id`            | `src/fmt/include/fmt/format.h` |
|  0.3% |   1.0ms |       1 | `fmt::v11::detail::parse_format_specs`                   | `src/fmt/include/fmt/base.h`   |
|  0.3% |   1.0ms |       1 | `fmt::v11::detail::write`                                | `src/fmt/include/fmt/format.h` |

##### `fmt::v11::detail::format_handler::on_format_specs` (`src/fmt/include/fmt/format.h`)

|     % |    Time | Samples | Callee                                 | Location                       |
| ----: | ------: | ------: | -------------------------------------- | ------------------------------ |
| 36.7% | 119.0ms |     119 | `fmt::v11::basic_format_arg::visit`    | `src/fmt/include/fmt/base.h`   |
| 20.4% |  66.0ms |      66 | `fmt::v11::detail::parse_format_specs` | `src/fmt/include/fmt/base.h`   |
| 16.0% |  52.0ms |      52 | `fmt::v11::detail::write`              | `src/fmt/include/fmt/format.h` |
| 14.5% |  47.0ms |      47 | `fmt::v11::detail::write_int`          | `src/fmt/include/fmt/format.h` |
|  2.5% |   8.0ms |       8 | `fmt::v11::detail::get_arg`            | `src/fmt/include/fmt/format.h` |

##### `fmt::v11::detail::write` (`src/fmt/include/fmt/format.h`)

|     % |   Time | Samples | Callee                             | Location                       |
| ----: | -----: | ------: | ---------------------------------- | ------------------------------ |
| 56.2% | 91.0ms |      91 | `fmt::v11::detail::write_float`    | `src/fmt/include/fmt/format.h` |
| 24.1% | 39.0ms |      39 | `fmt::v11::detail::compute_width`  | `src/fmt/include/fmt/format.h` |
|  8.0% | 13.0ms |      13 | `fmt::v11::detail::write_padded`   | `src/fmt/include/fmt/format.h` |
|  3.1% |  5.0ms |       5 | `fmt::v11::basic_specs::localized` | `src/fmt/include/fmt/base.h`   |
|  2.5% |  4.0ms |       4 | `fmt::v11::detail::do_write_float` | `src/fmt/include/fmt/format.h` |

##### `fmt::v11::basic_format_arg::visit` (`src/fmt/include/fmt/base.h`)

|     % |    Time | Samples | Callee                                                | Location                       |
| ----: | ------: | ------: | ----------------------------------------------------- | ------------------------------ |
| 81.7% | 107.0ms |     107 | `fmt::v11::detail::arg_formatter::operator()`         | `src/fmt/include/fmt/format.h` |
|  4.6% |   6.0ms |       6 | `fmt::v11::detail::default_arg_formatter::operator()` | `src/fmt/include/fmt/format.h` |
|  0.8% |   1.0ms |       1 | `fmt::v11::detail::string_value::str`                 | `src/fmt/include/fmt/base.h`   |

##### `fmt::v11::detail::arg_formatter::operator()` (`src/fmt/include/fmt/format.h`)

|     % |    Time | Samples | Callee                    | Location                       |
| ----: | ------: | ------: | ------------------------- | ------------------------------ |
| 96.3% | 103.0ms |     103 | `fmt::v11::detail::write` | `src/fmt/include/fmt/format.h` |

##### `fmt::v11::detail::write_float` (`src/fmt/include/fmt/format.h`)

|     % |   Time | Samples | Callee                                                | Location                       |
| ----: | -----: | ------: | ----------------------------------------------------- | ------------------------------ |
| 63.7% | 58.0ms |      58 | `fmt::v11::detail::write_float`                       | `src/fmt/include/fmt/format.h` |
| 46.2% | 42.0ms |      42 | `fmt::v11::detail::do_write_float`                    | `src/fmt/include/fmt/format.h` |
| 27.5% | 25.0ms |      25 | `fmt::v11::detail::format_float`                      | `src/fmt/include/fmt/format.h` |
|  2.2% |  2.0ms |       2 | `fmt::v11::basic_memory_buffer::~basic_memory_buffer` | `src/fmt/include/fmt/format.h` |

##### `fmt::v11::detail::parse_format_specs` (`src/fmt/include/fmt/base.h`)

|     % |   Time | Samples | Callee                                                                 | Location                     |
| ----: | -----: | ------: | ---------------------------------------------------------------------- | ---------------------------- |
| 19.4% | 13.0ms |      13 | `fmt::v11::detail::parse_width`                                        | `src/fmt/include/fmt/base.h` |
| 10.4% |  7.0ms |       7 | `fmt::v11::detail::parse_format_specs()::{unnamed type#1}::operator()` | `src/fmt/include/fmt/base.h` |
|  7.5% |  5.0ms |       5 | `fmt::v11::detail::parse_align`                                        | `src/fmt/include/fmt/base.h` |
|  7.5% |  5.0ms |       5 | `fmt::v11::detail::parse_precision`                                    | `src/fmt/include/fmt/base.h` |
|  6.0% |  4.0ms |       4 | `fmt::v11::detail::parse_format_specs()::{unnamed type#2}::operator()` | `src/fmt/include/fmt/base.h` |

##### `fmt::v11::detail::write_padded` (`src/fmt/include/fmt/format.h`)

|     % |   Time | Samples | Callee                                                                                 | Location                       |
| ----: | -----: | ------: | -------------------------------------------------------------------------------------- | ------------------------------ |
| 79.7% | 51.0ms |      51 | `fmt::v11::detail::write_padded`                                                       | `src/fmt/include/fmt/format.h` |
| 23.4% | 15.0ms |      15 | `fmt::v11::detail::do_write_float()::{lambda(fmt::v11::basic_appender)#4}::operator()` | `src/fmt/include/fmt/format.h` |
| 15.6% | 10.0ms |      10 | `fmt::v11::detail::write_int()::{lambda(fmt::v11::basic_appender)#1}::operator()`      | `src/fmt/include/fmt/format.h` |
| 12.5% |  8.0ms |       8 | `fmt::v11::detail::write()::{lambda(fmt::v11::basic_appender)#1}::operator()`          | `src/fmt/include/fmt/format.h` |
| 10.9% |  7.0ms |       7 | `fmt::v11::detail::fill`                                                               | `src/fmt/include/fmt/format.h` |

##### `fmt::v11::detail::copy_noinline` (`src/fmt/include/fmt/format.h`)

|     % |   Time | Samples | Callee                   | Location                     |
| ----: | -----: | ------: | ------------------------ | ---------------------------- |
| 70.0% | 35.0ms |      35 | `fmt::v11::detail::copy` | `src/fmt/include/fmt/base.h` |

##### `fmt::v11::detail::copy` (`src/fmt/include/fmt/base.h`)

|     % |   Time | Samples | Callee                             | Location                     |
| ----: | -----: | ------: | ---------------------------------- | ---------------------------- |
| 97.9% | 47.0ms |      47 | `fmt::v11::detail::buffer::append` | `src/fmt/include/fmt/base.h` |

##### `fmt::v11::detail::buffer::append` (`src/fmt/include/fmt/base.h`)

|     % |  Time | Samples | Callee                                  | Location                     |
| ----: | ----: | ------: | --------------------------------------- | ---------------------------- |
| 10.6% | 5.0ms |       5 | `fmt::v11::detail::buffer::try_reserve` | `src/fmt/include/fmt/base.h` |
|  2.1% | 1.0ms |       1 | `fmt::v11::detail::to_unsigned`         | `src/fmt/include/fmt/base.h` |

##### `fmt::v11::detail::write_int` (`src/fmt/include/fmt/format.h`)

|     % |   Time | Samples | Callee                                         | Location                       |
| ----: | -----: | ------: | ---------------------------------------------- | ------------------------------ |
| 38.3% | 18.0ms |      18 | `fmt::v11::detail::write_padded`               | `src/fmt/include/fmt/format.h` |
| 25.5% | 12.0ms |      12 | `fmt::v11::detail::do_format_decimal`          | `src/fmt/include/fmt/format.h` |
| 14.9% |  7.0ms |       7 | `fmt::v11::detail::do_format_base2e`           | `src/fmt/include/fmt/format.h` |
|  4.3% |  2.0ms |       2 | `fmt::v11::detail::size_padding::size_padding` | `src/fmt/include/fmt/format.h` |

##### `fmt::v11::detail::do_write_float` (`src/fmt/include/fmt/format.h`)

|     % |   Time | Samples | Callee                                              | Location                       |
| ----: | -----: | ------: | --------------------------------------------------- | ------------------------------ |
| 71.7% | 33.0ms |      33 | `fmt::v11::detail::write_padded`                    | `src/fmt/include/fmt/format.h` |
|  6.5% |  3.0ms |       3 | `fmt::v11::detail::digit_grouping::digit_grouping`  | `src/fmt/include/fmt/format.h` |
|  2.2% |  1.0ms |       1 | `fmt::v11::detail::to_unsigned`                     | `src/fmt/include/fmt/base.h`   |
|  2.2% |  1.0ms |       1 | `fmt::v11::detail::digit_grouping::~digit_grouping` | `src/fmt/include/fmt/format.h` |

##### `fmt::v11::detail::format_handler::on_replacement_field` (`src/fmt/include/fmt/format.h`)

|     % |   Time | Samples | Callee                                | Location                       |
| ----: | -----: | ------: | ------------------------------------- | ------------------------------ |
| 47.7% | 21.0ms |      21 | `fmt::v11::detail::copy_noinline`     | `src/fmt/include/fmt/format.h` |
| 27.3% | 12.0ms |      12 | `fmt::v11::basic_format_arg::visit`   | `src/fmt/include/fmt/base.h`   |
|  9.1% |  4.0ms |       4 | `fmt::v11::detail::do_format_decimal` | `src/fmt/include/fmt/format.h` |
|  2.3% |  1.0ms |       1 | `fmt::v11::context::arg`              | `src/fmt/include/fmt/base.h`   |

##### `fmt::v11::detail::for_each_codepoint` (`src/fmt/include/fmt/format.h`)

|     % |   Time | Samples | Callee                                                                                     | Location                       |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------------ | ------------------------------ |
| 87.2% | 34.0ms |      34 | `fmt::v11::detail::for_each_codepoint()::{lambda(char const*, char const*)#1}::operator()` | `src/fmt/include/fmt/format.h` |
|  2.6% |  1.0ms |       1 | `fmt::v11::detail::copy`                                                                   | `src/fmt/include/fmt/base.h`   |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

Common call stack: `fmt::v11::format` (`src/fmt/include/fmt/format.h`) ← `main` (`out/profile.cpp`)

|    % |   Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ---: | -----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 7.2% | 37.0ms |      37 | `fmt::v11::vformat[abi:cxx11]` (`src/fmt/include/fmt/format-inl.h`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 6.2% | 32.0ms |      32 | `fmt::v11::detail::parse_format_specs` (`src/fmt/include/fmt/base.h`) ← `fmt::v11::detail::format_handler::on_format_specs` (`src/fmt/include/fmt/format.h`) ← `fmt::v11::detail::parse_replacement_field` (`src/fmt/include/fmt/base.h`) ← `fmt::v11::detail::parse_format_string` ← `fmt::v11::detail::vformat_to` (`src/fmt/include/fmt/format-inl.h`) ← `fmt::v11::vformat[abi:cxx11]`                                                                                                                                                                                                                                                                                                                                         |
| 5.4% | 28.0ms |      28 | `fmt::v11::detail::parse_replacement_field` (`src/fmt/include/fmt/base.h`) ← `fmt::v11::detail::parse_format_string` ← `fmt::v11::detail::vformat_to` (`src/fmt/include/fmt/format-inl.h`) ← `fmt::v11::vformat[abi:cxx11]`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 4.4% | 23.0ms |      23 | `fmt::v11::detail::format_handler::on_format_specs` (`src/fmt/include/fmt/format.h`) ← `fmt::v11::detail::parse_replacement_field` (`src/fmt/include/fmt/base.h`) ← `fmt::v11::detail::parse_format_string` ← `fmt::v11::detail::vformat_to` (`src/fmt/include/fmt/format-inl.h`) ← `fmt::v11::vformat[abi:cxx11]`                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 4.3% | 22.0ms |      22 | `fmt::v11::detail::utf8_decode` (`src/fmt/include/fmt/format.h`) ← `fmt::v11::detail::for_each_codepoint()::{lambda(char const*, char const*)#1}::operator()` ← `fmt::v11::detail::for_each_codepoint` ← `fmt::v11::detail::compute_width` ← `fmt::v11::detail::write` ← `fmt::v11::detail::format_handler::on_format_specs` ← `fmt::v11::detail::parse_replacement_field` (`src/fmt/include/fmt/base.h`) ← `fmt::v11::detail::parse_format_string` ← `fmt::v11::detail::vformat_to` (`src/fmt/include/fmt/format-inl.h`) ← `fmt::v11::vformat[abi:cxx11]`                                                                                                                                                                         |
| 3.3% | 17.0ms |      17 | `fmt::v11::detail::buffer::append` (`src/fmt/include/fmt/base.h`) ← `fmt::v11::detail::copy` ← `fmt::v11::detail::copy_noinline` (`src/fmt/include/fmt/format.h`) ← `fmt::v11::detail::format_handler::on_replacement_field` ← `fmt::v11::detail::parse_replacement_field` (`src/fmt/include/fmt/base.h`) ← `fmt::v11::detail::parse_format_string` ← `fmt::v11::detail::vformat_to` (`src/fmt/include/fmt/format-inl.h`) ← `fmt::v11::vformat[abi:cxx11]`                                                                                                                                                                                                                                                                         |
| 3.1% | 16.0ms |      16 | `fmt::v11::detail::write_float` (`src/fmt/include/fmt/format.h`) ← `fmt::v11::detail::write_float` ← `fmt::v11::detail::write` ← `fmt::v11::detail::arg_formatter::operator()` ← `fmt::v11::basic_format_arg::visit` (`src/fmt/include/fmt/base.h`) ← `fmt::v11::detail::format_handler::on_format_specs` (`src/fmt/include/fmt/format.h`) ← `fmt::v11::detail::parse_replacement_field` (`src/fmt/include/fmt/base.h`) ← `fmt::v11::detail::parse_format_string` ← `fmt::v11::detail::vformat_to` (`src/fmt/include/fmt/format-inl.h`) ← `fmt::v11::vformat[abi:cxx11]`                                                                                                                                                           |
| 2.7% | 14.0ms |      14 | `fmt::v11::detail::parse_format_string` (`src/fmt/include/fmt/base.h`) ← `fmt::v11::detail::vformat_to` (`src/fmt/include/fmt/format-inl.h`) ← `fmt::v11::vformat[abi:cxx11]`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 2.3% | 12.0ms |      12 | `std::__cxx11::basic_string::basic_string` (`usr/include/c++/12/bits/basic_string.h`) ← `fmt::v11::to_string` (`src/fmt/include/fmt/format.h`) ← `fmt::v11::vformat[abi:cxx11]` (`src/fmt/include/fmt/format-inl.h`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 2.3% | 12.0ms |      12 | `fmt::v11::basic_format_arg::visit` (`src/fmt/include/fmt/base.h`) ← `fmt::v11::detail::format_handler::on_format_specs` (`src/fmt/include/fmt/format.h`) ← `fmt::v11::detail::parse_replacement_field` (`src/fmt/include/fmt/base.h`) ← `fmt::v11::detail::parse_format_string` ← `fmt::v11::detail::vformat_to` (`src/fmt/include/fmt/format-inl.h`) ← `fmt::v11::vformat[abi:cxx11]`                                                                                                                                                                                                                                                                                                                                            |
| 2.1% | 11.0ms |      11 | `fmt::v11::detail::compute_width()::count_code_points::operator()` (`src/fmt/include/fmt/format.h`) ← `fmt::v11::detail::for_each_codepoint()::{lambda(char const*, char const*)#1}::operator()` ← `fmt::v11::detail::for_each_codepoint` ← `fmt::v11::detail::compute_width` ← `fmt::v11::detail::write` ← `fmt::v11::detail::format_handler::on_format_specs` ← `fmt::v11::detail::parse_replacement_field` (`src/fmt/include/fmt/base.h`) ← `fmt::v11::detail::parse_format_string` ← `fmt::v11::detail::vformat_to` (`src/fmt/include/fmt/format-inl.h`) ← `fmt::v11::vformat[abi:cxx11]`                                                                                                                                      |
| 1.9% | 10.0ms |      10 | `fmt::v11::detail::write_padded` (`src/fmt/include/fmt/format.h`) ← `fmt::v11::detail::write_padded` ← `fmt::v11::detail::do_write_float` ← `fmt::v11::detail::write_float` ← `fmt::v11::detail::write_float` ← `fmt::v11::detail::write` ← `fmt::v11::detail::arg_formatter::operator()` ← `fmt::v11::basic_format_arg::visit` (`src/fmt/include/fmt/base.h`) ← `fmt::v11::detail::format_handler::on_format_specs` (`src/fmt/include/fmt/format.h`) ← `fmt::v11::detail::parse_replacement_field` (`src/fmt/include/fmt/base.h`) ← `fmt::v11::detail::parse_format_string` ← `fmt::v11::detail::vformat_to` (`src/fmt/include/fmt/format-inl.h`) ← `fmt::v11::vformat[abi:cxx11]`                                                |
| 1.7% |  9.0ms |       9 | `fmt::v11::detail::format_float` (`src/fmt/include/fmt/format.h`) ← `fmt::v11::detail::write_float` ← `fmt::v11::detail::write` ← `fmt::v11::detail::arg_formatter::operator()` ← `fmt::v11::basic_format_arg::visit` (`src/fmt/include/fmt/base.h`) ← `fmt::v11::detail::format_handler::on_format_specs` (`src/fmt/include/fmt/format.h`) ← `fmt::v11::detail::parse_replacement_field` (`src/fmt/include/fmt/base.h`) ← `fmt::v11::detail::parse_format_string` ← `fmt::v11::detail::vformat_to` (`src/fmt/include/fmt/format-inl.h`) ← `fmt::v11::vformat[abi:cxx11]`                                                                                                                                                          |
| 1.5% |  8.0ms |       8 | `fmt::v11::detail::buffer::append` (`src/fmt/include/fmt/base.h`) ← `fmt::v11::detail::copy` ← `fmt::v11::detail::copy_noinline` (`src/fmt/include/fmt/format.h`) ← `fmt::v11::detail::format_handler::on_text` ← `fmt::v11::detail::parse_format_string` (`src/fmt/include/fmt/base.h`) ← `fmt::v11::detail::vformat_to` (`src/fmt/include/fmt/format-inl.h`) ← `fmt::v11::vformat[abi:cxx11]`                                                                                                                                                                                                                                                                                                                                    |
| 1.5% |  8.0ms |       8 | `fmt::v11::detail::dragonbox::cache_accessor::get_cached_power` (`src/fmt/include/fmt/format-inl.h`) ← `fmt::v11::detail::dragonbox::get_cached_power` ← `fmt::v11::detail::format_float` (`src/fmt/include/fmt/format.h`) ← `fmt::v11::detail::write_float` ← `fmt::v11::detail::write` ← `fmt::v11::detail::arg_formatter::operator()` ← `fmt::v11::basic_format_arg::visit` (`src/fmt/include/fmt/base.h`) ← `fmt::v11::detail::format_handler::on_format_specs` (`src/fmt/include/fmt/format.h`) ← `fmt::v11::detail::parse_replacement_field` (`src/fmt/include/fmt/base.h`) ← `fmt::v11::detail::parse_format_string` ← `fmt::v11::detail::vformat_to` (`src/fmt/include/fmt/format-inl.h`) ← `fmt::v11::vformat[abi:cxx11]` |
| 1.5% |  8.0ms |       8 | `fmt::v11::detail::do_format_decimal` (`src/fmt/include/fmt/format.h`) ← `fmt::v11::detail::write_int` ← `fmt::v11::detail::format_handler::on_format_specs` ← `fmt::v11::detail::parse_replacement_field` (`src/fmt/include/fmt/base.h`) ← `fmt::v11::detail::parse_format_string` ← `fmt::v11::detail::vformat_to` (`src/fmt/include/fmt/format-inl.h`) ← `fmt::v11::vformat[abi:cxx11]`                                                                                                                                                                                                                                                                                                                                         |
| 1.5% |  8.0ms |       8 | `fmt::v11::detail::write_int` (`src/fmt/include/fmt/format.h`) ← `fmt::v11::detail::format_handler::on_format_specs` ← `fmt::v11::detail::parse_replacement_field` (`src/fmt/include/fmt/base.h`) ← `fmt::v11::detail::parse_format_string` ← `fmt::v11::detail::vformat_to` (`src/fmt/include/fmt/format-inl.h`) ← `fmt::v11::vformat[abi:cxx11]`                                                                                                                                                                                                                                                                                                                                                                                 |
| 1.4% |  7.0ms |       7 | `fmt::v11::detail::copy_noinline` (`src/fmt/include/fmt/format.h`) ← `fmt::v11::detail::format_handler::on_text` ← `fmt::v11::detail::parse_format_string` (`src/fmt/include/fmt/base.h`) ← `fmt::v11::detail::vformat_to` (`src/fmt/include/fmt/format-inl.h`) ← `fmt::v11::vformat[abi:cxx11]`                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 1.4% |  7.0ms |       7 | `fmt::v11::detail::parse_nonnegative_int` (`src/fmt/include/fmt/base.h`) ← `fmt::v11::detail::parse_dynamic_spec` ← `fmt::v11::detail::parse_width` ← `fmt::v11::detail::parse_format_specs` ← `fmt::v11::detail::format_handler::on_format_specs` (`src/fmt/include/fmt/format.h`) ← `fmt::v11::detail::parse_replacement_field` (`src/fmt/include/fmt/base.h`) ← `fmt::v11::detail::parse_format_string` ← `fmt::v11::detail::vformat_to` (`src/fmt/include/fmt/format-inl.h`) ← `fmt::v11::vformat[abi:cxx11]`                                                                                                                                                                                                                  |
| 1.4% |  7.0ms |       7 | `fmt::v11::detail::buffer::append` (`src/fmt/include/fmt/base.h`) ← `fmt::v11::detail::copy` ← `fmt::v11::detail::write()::{lambda(fmt::v11::basic_appender)#1}::operator()` (`src/fmt/include/fmt/format.h`) ← `fmt::v11::detail::write_padded` ← `fmt::v11::detail::write` ← `fmt::v11::detail::format_handler::on_format_specs` ← `fmt::v11::detail::parse_replacement_field` (`src/fmt/include/fmt/base.h`) ← `fmt::v11::detail::parse_format_string` ← `fmt::v11::detail::vformat_to` (`src/fmt/include/fmt/format-inl.h`) ← `fmt::v11::vformat[abi:cxx11]`                                                                                                                                                                   |
