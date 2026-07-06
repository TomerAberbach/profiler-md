# CPU profile

Took 499.0ms over 499 samples (1.0ms per sample).

| Category |     % |    Time | Samples |
| -------- | ----: | ------: | ------: |
| ours     | 91.6% | 457.0ms |     457 |
| stdlib   |  8.4% |  42.0ms |      42 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|    % |   Time | Samples | Function                                                               | Location                         |
| ---: | -----: | ------: | ---------------------------------------------------------------------- | -------------------------------- |
| 8.4% | 42.0ms |      42 | `fmt::v11::detail::buffer::append`                                     | src/fmt/include/fmt/base.h       |
| 8.0% | 40.0ms |      40 | `fmt::v11::vformat[abi:cxx11]`                                         | src/fmt/include/fmt/format-inl.h |
| 8.0% | 40.0ms |      40 | `fmt::v11::detail::parse_format_specs`                                 | src/fmt/include/fmt/base.h       |
| 5.0% | 25.0ms |      25 | `fmt::v11::detail::format_handler::on_format_specs`                    | src/fmt/include/fmt/format.h     |
| 4.2% | 21.0ms |      21 | `fmt::v11::detail::utf8_decode`                                        | src/fmt/include/fmt/format.h     |
| 3.8% | 19.0ms |      19 | `fmt::v11::detail::parse_format_string`                                | src/fmt/include/fmt/base.h       |
| 3.0% | 15.0ms |      15 | `fmt::v11::detail::write_padded`                                       | src/fmt/include/fmt/format.h     |
| 2.8% | 14.0ms |      14 | `fmt::v11::detail::write_float`                                        | src/fmt/include/fmt/format.h     |
| 2.8% | 14.0ms |      14 | `fmt::v11::basic_format_arg::visit`                                    | src/fmt/include/fmt/base.h       |
| 2.6% | 13.0ms |      13 | `fmt::v11::detail::do_write_float`                                     | src/fmt/include/fmt/format.h     |
| 2.6% | 13.0ms |      13 | `fmt::v11::detail::format_float`                                       | src/fmt/include/fmt/format.h     |
| 2.6% | 13.0ms |      13 | `fmt::v11::detail::format_handler::on_replacement_field`               | src/fmt/include/fmt/format.h     |
| 2.4% | 12.0ms |      12 | `fmt::v11::detail::copy_noinline`                                      | src/fmt/include/fmt/format.h     |
| 2.4% | 12.0ms |      12 | `fmt::v11::detail::buffer::try_reserve`                                | src/fmt/include/fmt/base.h       |
| 2.4% | 12.0ms |      12 | `fmt::v11::detail::parse_nonnegative_int`                              | src/fmt/include/fmt/base.h       |
| 2.2% | 11.0ms |      11 | `fmt::v11::detail::parse_replacement_field`                            | src/fmt/include/fmt/base.h       |
| 1.8% |  9.0ms |       9 | `fmt::v11::detail::do_format_decimal`                                  | src/fmt/include/fmt/format.h     |
| 1.4% |  7.0ms |       7 | `fmt::v11::detail::buffer::push_back`                                  | src/fmt/include/fmt/base.h       |
| 1.4% |  7.0ms |       7 | `fmt::v11::detail::write_int`                                          | src/fmt/include/fmt/format.h     |
| 1.4% |  7.0ms |       7 | `fmt::v11::detail::parse_format_specs()::{unnamed type#1}::operator()` | src/fmt/include/fmt/base.h       |

#### Lines

Lines ranked by contribution to each function's self time.

##### `fmt::v11::detail::buffer::append` (src/fmt/include/fmt/base.h)

|     % |   Time | Samples | Location                        |
| ----: | -----: | ------: | ------------------------------- |
| 52.4% | 22.0ms |      22 | src/fmt/include/fmt/base.h:1837 |
| 23.8% | 10.0ms |      10 | src/fmt/include/fmt/base.h:1838 |
| 19.0% |  8.0ms |       8 | src/fmt/include/fmt/base.h:1836 |
|  4.8% |  2.0ms |       2 | src/fmt/include/fmt/base.h:1830 |

##### `fmt::v11::vformat[abi:cxx11]` (src/fmt/include/fmt/format-inl.h)

|     % |   Time | Samples | Location                              |
| ----: | -----: | ------: | ------------------------------------- |
| 92.5% | 37.0ms |      37 | src/fmt/include/fmt/format-inl.h:1447 |
|  7.5% |  3.0ms |       3 | src/fmt/include/fmt/format-inl.h:1448 |

##### `fmt::v11::detail::parse_format_specs` (src/fmt/include/fmt/base.h)

|     % |   Time | Samples | Location                        |
| ----: | -----: | ------: | ------------------------------- |
| 60.0% | 24.0ms |      24 | src/fmt/include/fmt/base.h:1482 |
| 15.0% |  6.0ms |       6 | src/fmt/include/fmt/base.h:1577 |
| 12.5% |  5.0ms |       5 | src/fmt/include/fmt/base.h:1445 |
| 10.0% |  4.0ms |       4 | src/fmt/include/fmt/base.h:1580 |
|  2.5% |  1.0ms |       1 | src/fmt/include/fmt/base.h:1496 |

##### `fmt::v11::detail::format_handler::on_format_specs` (src/fmt/include/fmt/format.h)

|     % |   Time | Samples | Location                          |
| ----: | -----: | ------: | --------------------------------- |
| 56.0% | 14.0ms |      14 | src/fmt/include/fmt/format.h:3628 |
| 24.0% |  6.0ms |       6 | src/fmt/include/fmt/format.h:3630 |
| 20.0% |  5.0ms |       5 | src/fmt/include/fmt/format.h:3619 |

##### `fmt::v11::detail::utf8_decode` (src/fmt/include/fmt/format.h)

|     % |  Time | Samples | Location                         |
| ----: | ----: | ------: | -------------------------------- |
| 33.3% | 7.0ms |       7 | src/fmt/include/fmt/format.h:561 |
| 23.8% | 5.0ms |       5 | src/fmt/include/fmt/format.h:560 |
|  9.5% | 2.0ms |       2 | src/fmt/include/fmt/format.h:564 |
|  9.5% | 2.0ms |       2 | src/fmt/include/fmt/format.h:559 |
|  9.5% | 2.0ms |       2 | src/fmt/include/fmt/format.h:558 |

##### `fmt::v11::detail::parse_format_string` (src/fmt/include/fmt/base.h)

|     % |   Time | Samples | Location                        |
| ----: | -----: | ------: | ------------------------------- |
| 84.2% | 16.0ms |      16 | src/fmt/include/fmt/base.h:1635 |
|  5.3% |  1.0ms |       1 | src/fmt/include/fmt/base.h:1639 |
|  5.3% |  1.0ms |       1 | src/fmt/include/fmt/base.h:1636 |
|  5.3% |  1.0ms |       1 | src/fmt/include/fmt/base.h:1634 |

##### `fmt::v11::detail::write_padded` (src/fmt/include/fmt/format.h)

|     % |  Time | Samples | Location                          |
| ----: | ----: | ------: | --------------------------------- |
| 33.3% | 5.0ms |       5 | src/fmt/include/fmt/format.h:1641 |
| 26.7% | 4.0ms |       4 | src/fmt/include/fmt/format.h:1644 |
| 13.3% | 2.0ms |       2 | src/fmt/include/fmt/format.h:1635 |
| 13.3% | 2.0ms |       2 | src/fmt/include/fmt/format.h:1646 |
|  6.7% | 1.0ms |       1 | src/fmt/include/fmt/format.h:1643 |

##### `fmt::v11::detail::write_float` (src/fmt/include/fmt/format.h)

|     % |   Time | Samples | Location                          |
| ----: | -----: | ------: | --------------------------------- |
| 85.7% | 12.0ms |      12 | src/fmt/include/fmt/format.h:2460 |
|  7.1% |  1.0ms |       1 | src/fmt/include/fmt/format.h:3316 |
|  7.1% |  1.0ms |       1 | src/fmt/include/fmt/format.h:3336 |

##### `fmt::v11::basic_format_arg::visit` (src/fmt/include/fmt/base.h)

|      % |   Time | Samples | Location                        |
| -----: | -----: | ------: | ------------------------------- |
| 100.0% | 14.0ms |      14 | src/fmt/include/fmt/base.h:2518 |

##### `fmt::v11::detail::do_write_float` (src/fmt/include/fmt/format.h)

|     % |  Time | Samples | Location                          |
| ----: | ----: | ------: | --------------------------------- |
| 46.2% | 6.0ms |       6 | src/fmt/include/fmt/format.h:2435 |
| 23.1% | 3.0ms |       3 | src/fmt/include/fmt/format.h:2346 |
|  7.7% | 1.0ms |       1 | src/fmt/include/fmt/format.h:2333 |
|  7.7% | 1.0ms |       1 | src/fmt/include/fmt/format.h:2410 |
|  7.7% | 1.0ms |       1 | src/fmt/include/fmt/format.h:2339 |

##### `fmt::v11::detail::format_float` (src/fmt/include/fmt/format.h)

|     % |  Time | Samples | Location                          |
| ----: | ----: | ------: | --------------------------------- |
| 15.4% | 2.0ms |       2 | src/fmt/include/fmt/format.h:3290 |
| 15.4% | 2.0ms |       2 | src/fmt/include/fmt/format.h:3082 |
| 15.4% | 2.0ms |       2 | src/fmt/include/fmt/format.h:3189 |
| 15.4% | 2.0ms |       2 | src/fmt/include/fmt/format.h:3012 |
|  7.7% | 1.0ms |       1 | src/fmt/include/fmt/format.h:3072 |

##### `fmt::v11::detail::format_handler::on_replacement_field` (src/fmt/include/fmt/format.h)

|      % |   Time | Samples | Location                          |
| -----: | -----: | ------: | --------------------------------- |
| 100.0% | 13.0ms |      13 | src/fmt/include/fmt/format.h:3610 |

##### `fmt::v11::detail::copy_noinline` (src/fmt/include/fmt/format.h)

|     % |   Time | Samples | Location                         |
| ----: | -----: | ------: | -------------------------------- |
| 91.7% | 11.0ms |      11 | src/fmt/include/fmt/format.h:537 |
|  8.3% |  1.0ms |       1 | src/fmt/include/fmt/format.h:534 |

##### `fmt::v11::detail::buffer::try_reserve` (src/fmt/include/fmt/base.h)

|      % |   Time | Samples | Location                        |
| -----: | -----: | ------: | ------------------------------- |
| 100.0% | 12.0ms |      12 | src/fmt/include/fmt/base.h:1813 |

##### `fmt::v11::detail::parse_nonnegative_int` (src/fmt/include/fmt/base.h)

|     % |  Time | Samples | Location                        |
| ----: | ----: | ------: | ------------------------------- |
| 75.0% | 9.0ms |       9 | src/fmt/include/fmt/base.h:1305 |
| 16.7% | 2.0ms |       2 | src/fmt/include/fmt/base.h:1309 |
|  8.3% | 1.0ms |       1 | src/fmt/include/fmt/base.h:1303 |

##### `fmt::v11::detail::parse_replacement_field` (src/fmt/include/fmt/base.h)

|     % |  Time | Samples | Location                        |
| ----: | ----: | ------: | ------------------------------- |
| 36.4% | 4.0ms |       4 | src/fmt/include/fmt/base.h:1593 |
| 27.3% | 3.0ms |       3 | src/fmt/include/fmt/base.h:1627 |
| 27.3% | 3.0ms |       3 | src/fmt/include/fmt/base.h:1583 |
|  9.1% | 1.0ms |       1 | src/fmt/include/fmt/base.h:1624 |

##### `fmt::v11::detail::do_format_decimal` (src/fmt/include/fmt/format.h)

|     % |  Time | Samples | Location                          |
| ----: | ----: | ------: | --------------------------------- |
| 44.4% | 4.0ms |       4 | src/fmt/include/fmt/format.h:1191 |
| 22.2% | 2.0ms |       2 | src/fmt/include/fmt/format.h:1195 |
| 22.2% | 2.0ms |       2 | src/fmt/include/fmt/format.h:1198 |
| 11.1% | 1.0ms |       1 | src/fmt/include/fmt/format.h:1183 |

##### `fmt::v11::detail::buffer::push_back` (src/fmt/include/fmt/base.h)

|     % |  Time | Samples | Location                        |
| ----: | ----: | ------: | ------------------------------- |
| 42.9% | 3.0ms |       3 | src/fmt/include/fmt/base.h:1819 |
| 42.9% | 3.0ms |       3 | src/fmt/include/fmt/base.h:1818 |
| 14.3% | 1.0ms |       1 | src/fmt/include/fmt/base.h:1816 |

##### `fmt::v11::detail::write_int` (src/fmt/include/fmt/format.h)

|     % |  Time | Samples | Location                          |
| ----: | ----: | ------: | --------------------------------- |
| 42.9% | 3.0ms |       3 | src/fmt/include/fmt/format.h:2078 |
| 42.9% | 3.0ms |       3 | src/fmt/include/fmt/format.h:2017 |
| 14.3% | 1.0ms |       1 | src/fmt/include/fmt/format.h:2029 |

##### `fmt::v11::detail::parse_format_specs()::{unnamed type#1}::operator()` (src/fmt/include/fmt/base.h)

|      % |  Time | Samples | Location                        |
| -----: | ----: | ------: | ------------------------------- |
| 100.0% | 7.0ms |       7 | src/fmt/include/fmt/base.h:1461 |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `fmt::v11::detail::buffer::append` (src/fmt/include/fmt/base.h)

|      % |   Time | Samples | Caller                   | Location                   |
| -----: | -----: | ------: | ------------------------ | -------------------------- |
| 100.0% | 42.0ms |      42 | `fmt::v11::detail::copy` | src/fmt/include/fmt/base.h |

##### `fmt::v11::vformat[abi:cxx11]` (src/fmt/include/fmt/format-inl.h)

|     % |   Time | Samples | Caller             | Location                     |
| ----: | -----: | ------: | ------------------ | ---------------------------- |
| 92.5% | 37.0ms |      37 | `fmt::v11::format` | src/fmt/include/fmt/format.h |

##### `fmt::v11::detail::parse_format_specs` (src/fmt/include/fmt/base.h)

|      % |   Time | Samples | Caller                                              | Location                     |
| -----: | -----: | ------: | --------------------------------------------------- | ---------------------------- |
| 100.0% | 40.0ms |      40 | `fmt::v11::detail::format_handler::on_format_specs` | src/fmt/include/fmt/format.h |

##### `fmt::v11::detail::format_handler::on_format_specs` (src/fmt/include/fmt/format.h)

|      % |   Time | Samples | Caller                                      | Location                   |
| -----: | -----: | ------: | ------------------------------------------- | -------------------------- |
| 100.0% | 25.0ms |      25 | `fmt::v11::detail::parse_replacement_field` | src/fmt/include/fmt/base.h |

##### `fmt::v11::detail::utf8_decode` (src/fmt/include/fmt/format.h)

|      % |   Time | Samples | Caller                                                                                     | Location                     |
| -----: | -----: | ------: | ------------------------------------------------------------------------------------------ | ---------------------------- |
| 100.0% | 21.0ms |      21 | `fmt::v11::detail::for_each_codepoint()::{lambda(char const*, char const*)#1}::operator()` | src/fmt/include/fmt/format.h |

##### `fmt::v11::detail::parse_format_string` (src/fmt/include/fmt/base.h)

|      % |   Time | Samples | Caller                         | Location                         |
| -----: | -----: | ------: | ------------------------------ | -------------------------------- |
| 100.0% | 19.0ms |      19 | `fmt::v11::detail::vformat_to` | src/fmt/include/fmt/format-inl.h |

##### `fmt::v11::detail::write_padded` (src/fmt/include/fmt/format.h)

|     % |   Time | Samples | Caller                           | Location                     |
| ----: | -----: | ------: | -------------------------------- | ---------------------------- |
| 86.7% | 13.0ms |      13 | `fmt::v11::detail::write_padded` | src/fmt/include/fmt/format.h |
| 13.3% |  2.0ms |       2 | `fmt::v11::detail::write`        | src/fmt/include/fmt/format.h |

##### `fmt::v11::detail::write_float` (src/fmt/include/fmt/format.h)

|     % |   Time | Samples | Caller                          | Location                     |
| ----: | -----: | ------: | ------------------------------- | ---------------------------- |
| 85.7% | 12.0ms |      12 | `fmt::v11::detail::write_float` | src/fmt/include/fmt/format.h |
| 14.3% |  2.0ms |       2 | `fmt::v11::detail::write`       | src/fmt/include/fmt/format.h |

##### `fmt::v11::basic_format_arg::visit` (src/fmt/include/fmt/base.h)

|     % |  Time | Samples | Caller                                                   | Location                     |
| ----: | ----: | ------: | -------------------------------------------------------- | ---------------------------- |
| 57.1% | 8.0ms |       8 | `fmt::v11::detail::format_handler::on_format_specs`      | src/fmt/include/fmt/format.h |
| 42.9% | 6.0ms |       6 | `fmt::v11::detail::format_handler::on_replacement_field` | src/fmt/include/fmt/format.h |

##### `fmt::v11::detail::do_write_float` (src/fmt/include/fmt/format.h)

|     % |  Time | Samples | Caller                          | Location                     |
| ----: | ----: | ------: | ------------------------------- | ---------------------------- |
| 53.8% | 7.0ms |       7 | `fmt::v11::detail::write_float` | src/fmt/include/fmt/format.h |
| 46.2% | 6.0ms |       6 | `fmt::v11::detail::write`       | src/fmt/include/fmt/format.h |

##### `fmt::v11::detail::format_float` (src/fmt/include/fmt/format.h)

|      % |   Time | Samples | Caller                          | Location                     |
| -----: | -----: | ------: | ------------------------------- | ---------------------------- |
| 100.0% | 13.0ms |      13 | `fmt::v11::detail::write_float` | src/fmt/include/fmt/format.h |

##### `fmt::v11::detail::format_handler::on_replacement_field` (src/fmt/include/fmt/format.h)

|      % |   Time | Samples | Caller                                      | Location                   |
| -----: | -----: | ------: | ------------------------------------------- | -------------------------- |
| 100.0% | 13.0ms |      13 | `fmt::v11::detail::parse_replacement_field` | src/fmt/include/fmt/base.h |

##### `fmt::v11::detail::copy_noinline` (src/fmt/include/fmt/format.h)

|     % |  Time | Samples | Caller                                                   | Location                     |
| ----: | ----: | ------: | -------------------------------------------------------- | ---------------------------- |
| 58.3% | 7.0ms |       7 | `fmt::v11::detail::format_handler::on_text`              | src/fmt/include/fmt/format.h |
| 25.0% | 3.0ms |       3 | `fmt::v11::detail::format_handler::on_replacement_field` | src/fmt/include/fmt/format.h |
|  8.3% | 1.0ms |       1 | `fmt::v11::detail::write_significand`                    | src/fmt/include/fmt/format.h |
|  8.3% | 1.0ms |       1 | `fmt::v11::format`                                       | src/fmt/include/fmt/format.h |

##### `fmt::v11::detail::buffer::try_reserve` (src/fmt/include/fmt/base.h)

|     % |  Time | Samples | Caller                                | Location                   |
| ----: | ----: | ------: | ------------------------------------- | -------------------------- |
| 66.7% | 8.0ms |       8 | `fmt::v11::detail::buffer::append`    | src/fmt/include/fmt/base.h |
| 33.3% | 4.0ms |       4 | `fmt::v11::detail::buffer::push_back` | src/fmt/include/fmt/base.h |

##### `fmt::v11::detail::parse_nonnegative_int` (src/fmt/include/fmt/base.h)

|      % |   Time | Samples | Caller                                 | Location                   |
| -----: | -----: | ------: | -------------------------------------- | -------------------------- |
| 100.0% | 12.0ms |      12 | `fmt::v11::detail::parse_dynamic_spec` | src/fmt/include/fmt/base.h |

##### `fmt::v11::detail::parse_replacement_field` (src/fmt/include/fmt/base.h)

|      % |   Time | Samples | Caller                                  | Location                   |
| -----: | -----: | ------: | --------------------------------------- | -------------------------- |
| 100.0% | 11.0ms |      11 | `fmt::v11::detail::parse_format_string` | src/fmt/include/fmt/base.h |

##### `fmt::v11::detail::do_format_decimal` (src/fmt/include/fmt/format.h)

|     % |  Time | Samples | Caller                                                   | Location                     |
| ----: | ----: | ------: | -------------------------------------------------------- | ---------------------------- |
| 66.7% | 6.0ms |       6 | `fmt::v11::detail::write_int`                            | src/fmt/include/fmt/format.h |
| 33.3% | 3.0ms |       3 | `fmt::v11::detail::format_handler::on_replacement_field` | src/fmt/include/fmt/format.h |

##### `fmt::v11::detail::buffer::push_back` (src/fmt/include/fmt/base.h)

|      % |  Time | Samples | Caller                                | Location                   |
| -----: | ----: | ------: | ------------------------------------- | -------------------------- |
| 100.0% | 7.0ms |       7 | `fmt::v11::basic_appender::operator=` | src/fmt/include/fmt/base.h |

##### `fmt::v11::detail::write_int` (src/fmt/include/fmt/format.h)

|      % |  Time | Samples | Caller                                              | Location                     |
| -----: | ----: | ------: | --------------------------------------------------- | ---------------------------- |
| 100.0% | 7.0ms |       7 | `fmt::v11::detail::format_handler::on_format_specs` | src/fmt/include/fmt/format.h |

##### `fmt::v11::detail::parse_format_specs()::{unnamed type#1}::operator()` (src/fmt/include/fmt/base.h)

|      % |  Time | Samples | Caller                                 | Location                   |
| -----: | ----: | ------: | -------------------------------------- | -------------------------- |
| 100.0% | 7.0ms |       7 | `fmt::v11::detail::parse_format_specs` | src/fmt/include/fmt/base.h |

### Total time

Functions ranked by total time spent in the function and all its callees.

|     % |    Time | Samples | Function                                                 | Location                         |
| ----: | ------: | ------: | -------------------------------------------------------- | -------------------------------- |
| 97.0% | 484.0ms |     484 | `main`                                                   | out/profile.cpp                  |
| 94.6% | 472.0ms |     472 | `fmt::v11::vformat[abi:cxx11]`                           | src/fmt/include/fmt/format-inl.h |
| 94.6% | 472.0ms |     472 | `fmt::v11::format`                                       | src/fmt/include/fmt/format.h     |
| 81.8% | 408.0ms |     408 | `fmt::v11::detail::vformat_to`                           | src/fmt/include/fmt/format-inl.h |
| 81.4% | 406.0ms |     406 | `fmt::v11::detail::parse_format_string`                  | src/fmt/include/fmt/base.h       |
| 72.7% | 363.0ms |     363 | `fmt::v11::detail::parse_replacement_field`              | src/fmt/include/fmt/base.h       |
| 60.1% | 300.0ms |     300 | `fmt::v11::detail::format_handler::on_format_specs`      | src/fmt/include/fmt/format.h     |
| 27.9% | 139.0ms |     139 | `fmt::v11::detail::write`                                | src/fmt/include/fmt/format.h     |
| 21.8% | 109.0ms |     109 | `fmt::v11::basic_format_arg::visit`                      | src/fmt/include/fmt/base.h       |
| 18.8% |  94.0ms |      94 | `fmt::v11::detail::arg_formatter::operator()`            | src/fmt/include/fmt/format.h     |
| 15.2% |  76.0ms |      76 | `fmt::v11::detail::write_float`                          | src/fmt/include/fmt/format.h     |
| 13.8% |  69.0ms |      69 | `fmt::v11::detail::parse_format_specs`                   | src/fmt/include/fmt/base.h       |
| 11.0% |  55.0ms |      55 | `fmt::v11::detail::write_padded`                         | src/fmt/include/fmt/format.h     |
| 10.4% |  52.0ms |      52 | `fmt::v11::detail::copy`                                 | src/fmt/include/fmt/base.h       |
| 10.0% |  50.0ms |      50 | `fmt::v11::detail::copy_noinline`                        | src/fmt/include/fmt/format.h     |
| 10.0% |  50.0ms |      50 | `fmt::v11::detail::buffer::append`                       | src/fmt/include/fmt/base.h       |
| 10.0% |  50.0ms |      50 | `fmt::v11::detail::format_handler::on_replacement_field` | src/fmt/include/fmt/format.h     |
|  8.6% |  43.0ms |      43 | `fmt::v11::detail::write_int`                            | src/fmt/include/fmt/format.h     |
|  7.8% |  39.0ms |      39 | `fmt::v11::detail::do_write_float`                       | src/fmt/include/fmt/format.h     |
|  7.6% |  38.0ms |      38 | `fmt::v11::detail::for_each_codepoint`                   | src/fmt/include/fmt/format.h     |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `main` (out/profile.cpp)

|     % |    Time | Samples | Callee                                      | Location                               |
| ----: | ------: | ------: | ------------------------------------------- | -------------------------------------- |
| 97.5% | 472.0ms |     472 | `fmt::v11::format`                          | src/fmt/include/fmt/format.h           |
|  2.3% |  11.0ms |      11 | `std::__cxx11::basic_string::~basic_string` | usr/include/c++/12/bits/basic_string.h |
|  0.2% |   1.0ms |       1 | `std::__cxx11::basic_string::size`          | usr/include/c++/12/bits/basic_string.h |

##### `fmt::v11::vformat[abi:cxx11]` (src/fmt/include/fmt/format-inl.h)

|     % |    Time | Samples | Callee                                                | Location                         |
| ----: | ------: | ------: | ----------------------------------------------------- | -------------------------------- |
| 86.4% | 408.0ms |     408 | `fmt::v11::detail::vformat_to`                        | src/fmt/include/fmt/format-inl.h |
|  3.8% |  18.0ms |      18 | `fmt::v11::to_string`                                 | src/fmt/include/fmt/format.h     |
|  0.6% |   3.0ms |       3 | `fmt::v11::basic_memory_buffer::basic_memory_buffer`  | src/fmt/include/fmt/format.h     |
|  0.4% |   2.0ms |       2 | `fmt::v11::basic_memory_buffer::~basic_memory_buffer` | src/fmt/include/fmt/format.h     |
|  0.2% |   1.0ms |       1 | `_init`                                               | `<unknown>`                      |

##### `fmt::v11::format` (src/fmt/include/fmt/format.h)

|     % |    Time | Samples | Callee                            | Location                         |
| ----: | ------: | ------: | --------------------------------- | -------------------------------- |
| 99.4% | 469.0ms |     469 | `fmt::v11::vformat[abi:cxx11]`    | src/fmt/include/fmt/format-inl.h |
|  0.4% |   2.0ms |       2 | `fmt::v11::detail::value::value`  | src/fmt/include/fmt/base.h       |
|  0.2% |   1.0ms |       1 | `fmt::v11::detail::copy_noinline` | src/fmt/include/fmt/format.h     |

##### `fmt::v11::detail::vformat_to` (src/fmt/include/fmt/format-inl.h)

|     % |    Time | Samples | Callee                                  | Location                   |
| ----: | ------: | ------: | --------------------------------------- | -------------------------- |
| 99.5% | 406.0ms |     406 | `fmt::v11::detail::parse_format_string` | src/fmt/include/fmt/base.h |
|  0.5% |   2.0ms |       2 | `fmt::v11::context::context`            | src/fmt/include/fmt/base.h |

##### `fmt::v11::detail::parse_format_string` (src/fmt/include/fmt/base.h)

|     % |    Time | Samples | Callee                                      | Location                     |
| ----: | ------: | ------: | ------------------------------------------- | ---------------------------- |
| 89.4% | 363.0ms |     363 | `fmt::v11::detail::parse_replacement_field` | src/fmt/include/fmt/base.h   |
|  5.9% |  24.0ms |      24 | `fmt::v11::detail::format_handler::on_text` | src/fmt/include/fmt/format.h |

##### `fmt::v11::detail::parse_replacement_field` (src/fmt/include/fmt/base.h)

|     % |    Time | Samples | Callee                                                   | Location                     |
| ----: | ------: | ------: | -------------------------------------------------------- | ---------------------------- |
| 82.6% | 300.0ms |     300 | `fmt::v11::detail::format_handler::on_format_specs`      | src/fmt/include/fmt/format.h |
| 13.8% |  50.0ms |      50 | `fmt::v11::detail::format_handler::on_replacement_field` | src/fmt/include/fmt/format.h |
|  0.6% |   2.0ms |       2 | `fmt::v11::detail::format_handler::on_arg_id`            | src/fmt/include/fmt/format.h |

##### `fmt::v11::detail::format_handler::on_format_specs` (src/fmt/include/fmt/format.h)

|     % |    Time | Samples | Callee                                 | Location                     |
| ----: | ------: | ------: | -------------------------------------- | ---------------------------- |
| 34.0% | 102.0ms |     102 | `fmt::v11::basic_format_arg::visit`    | src/fmt/include/fmt/base.h   |
| 23.0% |  69.0ms |      69 | `fmt::v11::detail::parse_format_specs` | src/fmt/include/fmt/base.h   |
| 15.7% |  47.0ms |      47 | `fmt::v11::detail::write`              | src/fmt/include/fmt/format.h |
| 14.3% |  43.0ms |      43 | `fmt::v11::detail::write_int`          | src/fmt/include/fmt/format.h |
|  2.3% |   7.0ms |       7 | `fmt::v11::detail::get_arg`            | src/fmt/include/fmt/format.h |

##### `fmt::v11::detail::write` (src/fmt/include/fmt/format.h)

|     % |   Time | Samples | Callee                             | Location                     |
| ----: | -----: | ------: | ---------------------------------- | ---------------------------- |
| 54.7% | 76.0ms |      76 | `fmt::v11::detail::write_float`    | src/fmt/include/fmt/format.h |
| 27.3% | 38.0ms |      38 | `fmt::v11::detail::compute_width`  | src/fmt/include/fmt/format.h |
|  5.8% |  8.0ms |       8 | `fmt::v11::detail::write_padded`   | src/fmt/include/fmt/format.h |
|  5.0% |  7.0ms |       7 | `fmt::v11::basic_specs::localized` | src/fmt/include/fmt/base.h   |
|  4.3% |  6.0ms |       6 | `fmt::v11::detail::do_write_float` | src/fmt/include/fmt/format.h |

##### `fmt::v11::basic_format_arg::visit` (src/fmt/include/fmt/base.h)

|     % |   Time | Samples | Callee                                                | Location                     |
| ----: | -----: | ------: | ----------------------------------------------------- | ---------------------------- |
| 86.2% | 94.0ms |      94 | `fmt::v11::detail::arg_formatter::operator()`         | src/fmt/include/fmt/format.h |
|  0.9% |  1.0ms |       1 | `fmt::v11::detail::default_arg_formatter::operator()` | src/fmt/include/fmt/format.h |

##### `fmt::v11::detail::arg_formatter::operator()` (src/fmt/include/fmt/format.h)

|     % |   Time | Samples | Callee                    | Location                     |
| ----: | -----: | ------: | ------------------------- | ---------------------------- |
| 96.8% | 91.0ms |      91 | `fmt::v11::detail::write` | src/fmt/include/fmt/format.h |

##### `fmt::v11::detail::write_float` (src/fmt/include/fmt/format.h)

|     % |   Time | Samples | Callee                             | Location                     |
| ----: | -----: | ------: | ---------------------------------- | ---------------------------- |
| 60.5% | 46.0ms |      46 | `fmt::v11::detail::write_float`    | src/fmt/include/fmt/format.h |
| 43.4% | 33.0ms |      33 | `fmt::v11::detail::do_write_float` | src/fmt/include/fmt/format.h |
| 36.8% | 28.0ms |      28 | `fmt::v11::detail::format_float`   | src/fmt/include/fmt/format.h |
|  1.3% |  1.0ms |       1 | `_init`                            | `<unknown>`                  |

##### `fmt::v11::detail::parse_format_specs` (src/fmt/include/fmt/base.h)

|     % |   Time | Samples | Callee                                                                 | Location                   |
| ----: | -----: | ------: | ---------------------------------------------------------------------- | -------------------------- |
| 21.7% | 15.0ms |      15 | `fmt::v11::detail::parse_width`                                        | src/fmt/include/fmt/base.h |
| 10.1% |  7.0ms |       7 | `fmt::v11::detail::parse_format_specs()::{unnamed type#1}::operator()` | src/fmt/include/fmt/base.h |
|  4.3% |  3.0ms |       3 | `fmt::v11::detail::parse_precision`                                    | src/fmt/include/fmt/base.h |
|  2.9% |  2.0ms |       2 | `fmt::v11::detail::parse_format_specs()::{unnamed type#2}::operator()` | src/fmt/include/fmt/base.h |
|  1.4% |  1.0ms |       1 | `fmt::v11::basic_specs::set_sign`                                      | src/fmt/include/fmt/base.h |

##### `fmt::v11::detail::write_padded` (src/fmt/include/fmt/format.h)

|     % |   Time | Samples | Callee                                                                                 | Location                     |
| ----: | -----: | ------: | -------------------------------------------------------------------------------------- | ---------------------------- |
| 85.5% | 47.0ms |      47 | `fmt::v11::detail::write_padded`                                                       | src/fmt/include/fmt/format.h |
| 25.5% | 14.0ms |      14 | `fmt::v11::detail::do_write_float()::{lambda(fmt::v11::basic_appender)#4}::operator()` | src/fmt/include/fmt/format.h |
| 18.2% | 10.0ms |      10 | `fmt::v11::detail::write_int()::{lambda(fmt::v11::basic_appender)#1}::operator()`      | src/fmt/include/fmt/format.h |
| 16.4% |  9.0ms |       9 | `fmt::v11::detail::fill`                                                               | src/fmt/include/fmt/format.h |
|  7.3% |  4.0ms |       4 | `fmt::v11::detail::write()::{lambda(fmt::v11::basic_appender)#1}::operator()`          | src/fmt/include/fmt/format.h |

##### `fmt::v11::detail::copy` (src/fmt/include/fmt/base.h)

|     % |   Time | Samples | Callee                             | Location                   |
| ----: | -----: | ------: | ---------------------------------- | -------------------------- |
| 96.2% | 50.0ms |      50 | `fmt::v11::detail::buffer::append` | src/fmt/include/fmt/base.h |

##### `fmt::v11::detail::copy_noinline` (src/fmt/include/fmt/format.h)

|     % |   Time | Samples | Callee                   | Location                   |
| ----: | -----: | ------: | ------------------------ | -------------------------- |
| 76.0% | 38.0ms |      38 | `fmt::v11::detail::copy` | src/fmt/include/fmt/base.h |

##### `fmt::v11::detail::buffer::append` (src/fmt/include/fmt/base.h)

|     % |  Time | Samples | Callee                                  | Location                   |
| ----: | ----: | ------: | --------------------------------------- | -------------------------- |
| 16.0% | 8.0ms |       8 | `fmt::v11::detail::buffer::try_reserve` | src/fmt/include/fmt/base.h |

##### `fmt::v11::detail::format_handler::on_replacement_field` (src/fmt/include/fmt/format.h)

|     % |   Time | Samples | Callee                                | Location                     |
| ----: | -----: | ------: | ------------------------------------- | ---------------------------- |
| 46.0% | 23.0ms |      23 | `fmt::v11::detail::copy_noinline`     | src/fmt/include/fmt/format.h |
| 14.0% |  7.0ms |       7 | `fmt::v11::basic_format_arg::visit`   | src/fmt/include/fmt/base.h   |
| 14.0% |  7.0ms |       7 | `fmt::v11::detail::do_format_decimal` | src/fmt/include/fmt/format.h |

##### `fmt::v11::detail::write_int` (src/fmt/include/fmt/format.h)

|     % |   Time | Samples | Callee                                         | Location                     |
| ----: | -----: | ------: | ---------------------------------------------- | ---------------------------- |
| 51.2% | 22.0ms |      22 | `fmt::v11::detail::write_padded`               | src/fmt/include/fmt/format.h |
| 18.6% |  8.0ms |       8 | `fmt::v11::detail::do_format_decimal`          | src/fmt/include/fmt/format.h |
| 11.6% |  5.0ms |       5 | `fmt::v11::detail::size_padding::size_padding` | src/fmt/include/fmt/format.h |
|  2.3% |  1.0ms |       1 | `fmt::v11::detail::do_format_base2e`           | src/fmt/include/fmt/format.h |

##### `fmt::v11::detail::do_write_float` (src/fmt/include/fmt/format.h)

|     % |   Time | Samples | Callee                                              | Location                     |
| ----: | -----: | ------: | --------------------------------------------------- | ---------------------------- |
| 64.1% | 25.0ms |      25 | `fmt::v11::detail::write_padded`                    | src/fmt/include/fmt/format.h |
|  2.6% |  1.0ms |       1 | `fmt::v11::detail::digit_grouping::~digit_grouping` | src/fmt/include/fmt/format.h |

##### `fmt::v11::detail::for_each_codepoint` (src/fmt/include/fmt/format.h)

|     % |   Time | Samples | Callee                                                                                     | Location                     |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------------ | ---------------------------- |
| 84.2% | 32.0ms |      32 | `fmt::v11::detail::for_each_codepoint()::{lambda(char const*, char const*)#1}::operator()` | src/fmt/include/fmt/format.h |
|  5.3% |  2.0ms |       2 | `fmt::v11::detail::copy`                                                                   | src/fmt/include/fmt/base.h   |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

Common call stack: `main` (out/profile.cpp)

|    % |   Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ---: | -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 8.0% | 40.0ms |      40 | `fmt::v11::detail::parse_format_specs` (src/fmt/include/fmt/base.h) ← `fmt::v11::detail::format_handler::on_format_specs` (src/fmt/include/fmt/format.h) ← `fmt::v11::detail::parse_replacement_field` (src/fmt/include/fmt/base.h) ← `fmt::v11::detail::parse_format_string` ← `fmt::v11::detail::vformat_to` (src/fmt/include/fmt/format-inl.h) ← `fmt::v11::vformat[abi:cxx11]` ← `fmt::v11::format` (src/fmt/include/fmt/format.h)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 7.4% | 37.0ms |      37 | `fmt::v11::vformat[abi:cxx11]` (src/fmt/include/fmt/format-inl.h) ← `fmt::v11::format` (src/fmt/include/fmt/format.h)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 5.0% | 25.0ms |      25 | `fmt::v11::detail::format_handler::on_format_specs` (src/fmt/include/fmt/format.h) ← `fmt::v11::detail::parse_replacement_field` (src/fmt/include/fmt/base.h) ← `fmt::v11::detail::parse_format_string` ← `fmt::v11::detail::vformat_to` (src/fmt/include/fmt/format-inl.h) ← `fmt::v11::vformat[abi:cxx11]` ← `fmt::v11::format` (src/fmt/include/fmt/format.h)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 4.2% | 21.0ms |      21 | `fmt::v11::detail::utf8_decode` (src/fmt/include/fmt/format.h) ← `fmt::v11::detail::for_each_codepoint()::{lambda(char const*, char const*)#1}::operator()` ← `fmt::v11::detail::for_each_codepoint` ← `fmt::v11::detail::compute_width` ← `fmt::v11::detail::write` ← `fmt::v11::detail::format_handler::on_format_specs` ← `fmt::v11::detail::parse_replacement_field` (src/fmt/include/fmt/base.h) ← `fmt::v11::detail::parse_format_string` ← `fmt::v11::detail::vformat_to` (src/fmt/include/fmt/format-inl.h) ← `fmt::v11::vformat[abi:cxx11]` ← `fmt::v11::format` (src/fmt/include/fmt/format.h)                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 3.8% | 19.0ms |      19 | `fmt::v11::detail::parse_format_string` (src/fmt/include/fmt/base.h) ← `fmt::v11::detail::vformat_to` (src/fmt/include/fmt/format-inl.h) ← `fmt::v11::vformat[abi:cxx11]` ← `fmt::v11::format` (src/fmt/include/fmt/format.h)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 3.2% | 16.0ms |      16 | `fmt::v11::detail::buffer::append` (src/fmt/include/fmt/base.h) ← `fmt::v11::detail::copy` ← `fmt::v11::detail::copy_noinline` (src/fmt/include/fmt/format.h) ← `fmt::v11::detail::format_handler::on_replacement_field` ← `fmt::v11::detail::parse_replacement_field` (src/fmt/include/fmt/base.h) ← `fmt::v11::detail::parse_format_string` ← `fmt::v11::detail::vformat_to` (src/fmt/include/fmt/format-inl.h) ← `fmt::v11::vformat[abi:cxx11]` ← `fmt::v11::format` (src/fmt/include/fmt/format.h)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 2.8% | 14.0ms |      14 | `std::__cxx11::basic_string::basic_string` (usr/include/c++/12/bits/basic_string.h) ← `fmt::v11::to_string` (src/fmt/include/fmt/format.h) ← `fmt::v11::vformat[abi:cxx11]` (src/fmt/include/fmt/format-inl.h) ← `fmt::v11::format` (src/fmt/include/fmt/format.h)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 2.6% | 13.0ms |      13 | `fmt::v11::detail::format_float` (src/fmt/include/fmt/format.h) ← `fmt::v11::detail::write_float` ← `fmt::v11::detail::write` ← `fmt::v11::detail::arg_formatter::operator()` ← `fmt::v11::basic_format_arg::visit` (src/fmt/include/fmt/base.h) ← `fmt::v11::detail::format_handler::on_format_specs` (src/fmt/include/fmt/format.h) ← `fmt::v11::detail::parse_replacement_field` (src/fmt/include/fmt/base.h) ← `fmt::v11::detail::parse_format_string` ← `fmt::v11::detail::vformat_to` (src/fmt/include/fmt/format-inl.h) ← `fmt::v11::vformat[abi:cxx11]` ← `fmt::v11::format` (src/fmt/include/fmt/format.h)                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 2.6% | 13.0ms |      13 | `fmt::v11::detail::format_handler::on_replacement_field` (src/fmt/include/fmt/format.h) ← `fmt::v11::detail::parse_replacement_field` (src/fmt/include/fmt/base.h) ← `fmt::v11::detail::parse_format_string` ← `fmt::v11::detail::vformat_to` (src/fmt/include/fmt/format-inl.h) ← `fmt::v11::vformat[abi:cxx11]` ← `fmt::v11::format` (src/fmt/include/fmt/format.h)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 2.4% | 12.0ms |      12 | `fmt::v11::detail::write_float` (src/fmt/include/fmt/format.h) ← `fmt::v11::detail::write_float` ← `fmt::v11::detail::write` ← `fmt::v11::detail::arg_formatter::operator()` ← `fmt::v11::basic_format_arg::visit` (src/fmt/include/fmt/base.h) ← `fmt::v11::detail::format_handler::on_format_specs` (src/fmt/include/fmt/format.h) ← `fmt::v11::detail::parse_replacement_field` (src/fmt/include/fmt/base.h) ← `fmt::v11::detail::parse_format_string` ← `fmt::v11::detail::vformat_to` (src/fmt/include/fmt/format-inl.h) ← `fmt::v11::vformat[abi:cxx11]` ← `fmt::v11::format` (src/fmt/include/fmt/format.h)                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 2.2% | 11.0ms |      11 | `fmt::v11::detail::parse_replacement_field` (src/fmt/include/fmt/base.h) ← `fmt::v11::detail::parse_format_string` ← `fmt::v11::detail::vformat_to` (src/fmt/include/fmt/format-inl.h) ← `fmt::v11::vformat[abi:cxx11]` ← `fmt::v11::format` (src/fmt/include/fmt/format.h)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 2.2% | 11.0ms |      11 | `std::__cxx11::basic_string::~basic_string` (usr/include/c++/12/bits/basic_string.h)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 2.0% | 10.0ms |      10 | `fmt::v11::detail::parse_nonnegative_int` (src/fmt/include/fmt/base.h) ← `fmt::v11::detail::parse_dynamic_spec` ← `fmt::v11::detail::parse_width` ← `fmt::v11::detail::parse_format_specs` ← `fmt::v11::detail::format_handler::on_format_specs` (src/fmt/include/fmt/format.h) ← `fmt::v11::detail::parse_replacement_field` (src/fmt/include/fmt/base.h) ← `fmt::v11::detail::parse_format_string` ← `fmt::v11::detail::vformat_to` (src/fmt/include/fmt/format-inl.h) ← `fmt::v11::vformat[abi:cxx11]` ← `fmt::v11::format` (src/fmt/include/fmt/format.h)                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 1.8% |  9.0ms |       9 | `fmt::v11::detail::buffer::append` (src/fmt/include/fmt/base.h) ← `fmt::v11::detail::copy` ← `fmt::v11::detail::copy_noinline` (src/fmt/include/fmt/format.h) ← `fmt::v11::detail::format_handler::on_text` ← `fmt::v11::detail::parse_format_string` (src/fmt/include/fmt/base.h) ← `fmt::v11::detail::vformat_to` (src/fmt/include/fmt/format-inl.h) ← `fmt::v11::vformat[abi:cxx11]` ← `fmt::v11::format` (src/fmt/include/fmt/format.h)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 1.6% |  8.0ms |       8 | `fmt::v11::basic_format_arg::visit` (src/fmt/include/fmt/base.h) ← `fmt::v11::detail::format_handler::on_format_specs` (src/fmt/include/fmt/format.h) ← `fmt::v11::detail::parse_replacement_field` (src/fmt/include/fmt/base.h) ← `fmt::v11::detail::parse_format_string` ← `fmt::v11::detail::vformat_to` (src/fmt/include/fmt/format-inl.h) ← `fmt::v11::vformat[abi:cxx11]` ← `fmt::v11::format` (src/fmt/include/fmt/format.h)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 1.4% |  7.0ms |       7 | `fmt::v11::detail::copy_noinline` (src/fmt/include/fmt/format.h) ← `fmt::v11::detail::format_handler::on_text` ← `fmt::v11::detail::parse_format_string` (src/fmt/include/fmt/base.h) ← `fmt::v11::detail::vformat_to` (src/fmt/include/fmt/format-inl.h) ← `fmt::v11::vformat[abi:cxx11]` ← `fmt::v11::format` (src/fmt/include/fmt/format.h)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 1.4% |  7.0ms |       7 | `fmt::v11::detail::do_write_float` (src/fmt/include/fmt/format.h) ← `fmt::v11::detail::write_float` ← `fmt::v11::detail::write_float` ← `fmt::v11::detail::write` ← `fmt::v11::detail::arg_formatter::operator()` ← `fmt::v11::basic_format_arg::visit` (src/fmt/include/fmt/base.h) ← `fmt::v11::detail::format_handler::on_format_specs` (src/fmt/include/fmt/format.h) ← `fmt::v11::detail::parse_replacement_field` (src/fmt/include/fmt/base.h) ← `fmt::v11::detail::parse_format_string` ← `fmt::v11::detail::vformat_to` (src/fmt/include/fmt/format-inl.h) ← `fmt::v11::vformat[abi:cxx11]` ← `fmt::v11::format` (src/fmt/include/fmt/format.h)                                                                                                                                                                                                                                                                                                                                                                                 |
| 1.4% |  7.0ms |       7 | `fmt::v11::detail::buffer::append` (src/fmt/include/fmt/base.h) ← `fmt::v11::detail::copy` ← `fmt::v11::detail::copy_noinline` (src/fmt/include/fmt/format.h) ← `fmt::v11::detail::write_significand` ← `fmt::v11::detail::write_significand` ← `fmt::v11::detail::do_write_float()::{lambda(fmt::v11::basic_appender)#4}::operator()` ← `fmt::v11::detail::write_padded` ← `fmt::v11::detail::write_padded` ← `fmt::v11::detail::do_write_float` ← `fmt::v11::detail::write_float` ← `fmt::v11::detail::write_float` ← `fmt::v11::detail::write` ← `fmt::v11::detail::arg_formatter::operator()` ← `fmt::v11::basic_format_arg::visit` (src/fmt/include/fmt/base.h) ← `fmt::v11::detail::format_handler::on_format_specs` (src/fmt/include/fmt/format.h) ← `fmt::v11::detail::parse_replacement_field` (src/fmt/include/fmt/base.h) ← `fmt::v11::detail::parse_format_string` ← `fmt::v11::detail::vformat_to` (src/fmt/include/fmt/format-inl.h) ← `fmt::v11::vformat[abi:cxx11]` ← `fmt::v11::format` (src/fmt/include/fmt/format.h) |
| 1.4% |  7.0ms |       7 | `fmt::v11::detail::buffer::append` (src/fmt/include/fmt/base.h) ← `fmt::v11::detail::copy` ← `fmt::v11::detail::write_int()::{lambda(fmt::v11::basic_appender)#1}::operator()` (src/fmt/include/fmt/format.h) ← `fmt::v11::detail::write_padded` ← `fmt::v11::detail::write_padded` ← `fmt::v11::detail::write_int` ← `fmt::v11::detail::format_handler::on_format_specs` ← `fmt::v11::detail::parse_replacement_field` (src/fmt/include/fmt/base.h) ← `fmt::v11::detail::parse_format_string` ← `fmt::v11::detail::vformat_to` (src/fmt/include/fmt/format-inl.h) ← `fmt::v11::vformat[abi:cxx11]` ← `fmt::v11::format` (src/fmt/include/fmt/format.h)                                                                                                                                                                                                                                                                                                                                                                                 |
| 1.4% |  7.0ms |       7 | `fmt::v11::detail::write_padded` (src/fmt/include/fmt/format.h) ← `fmt::v11::detail::write_padded` ← `fmt::v11::detail::write_int` ← `fmt::v11::detail::format_handler::on_format_specs` ← `fmt::v11::detail::parse_replacement_field` (src/fmt/include/fmt/base.h) ← `fmt::v11::detail::parse_format_string` ← `fmt::v11::detail::vformat_to` (src/fmt/include/fmt/format-inl.h) ← `fmt::v11::vformat[abi:cxx11]` ← `fmt::v11::format` (src/fmt/include/fmt/format.h)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
