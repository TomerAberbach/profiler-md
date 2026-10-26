# CPU profile diff

Took 792.0ms → 598.0ms (-194.00ms, -24.5%) over 792 → 598 samples (1.0ms per sample).

| Category         | Change |     Delta |             % |              Time |   Samples |
| ---------------- | -----: | --------: | ------------: | ----------------: | --------: |
| Ours             | -25.0% | -159.00ms | 80.2% → 79.6% | 635.0ms → 476.0ms | 635 → 476 |
| Unknown          |  -1.6% |   -1.00ms |  8.0% → 10.4% |   63.0ms → 62.0ms |   63 → 62 |
| Native           | -25.7% |  -18.00ms |   8.8% → 8.7% |   70.0ms → 52.0ms |   70 → 52 |
| Standard library | -66.7% |  -16.00ms |   3.0% → 1.3% |    24.0ms → 8.0ms |    24 → 8 |

Paths starting with `./` or `../` are relative to `/src/fmt/include/fmt/`.

`…` stands for omitted frames.

## Call tree

Call paths to the hottest and most changed functions.

```
└── … 792.0ms → 598.0ms (100.0%, self 8.0% → 10.4%) (anonymous)
    ├── 715.0ms → 523.0ms (90.3% → 87.5%) main at /out/profile.cpp:8
    │   ├── 696.0ms → 0ms (87.9% → 0.0%) fmt::v11::format at ./format.h:4198
    │   │   └── 693.0ms → 0ms (87.5% → 0.0%) fmt::v11::vformat[abi:cxx11] at ./format-inl.h:1442
    │   │       ├── 648.0ms → 0ms (81.8% → 0.0%) fmt::v11::detail::vformat_to at 1452
    │   │       │   └── 647.0ms → 0ms (81.7% → 0.0%, self 3.9% → 0.0%) fmt::v11::detail::parse_format_string at ./base.h:1630
    │   │       │       ├── 568.0ms → 0ms (71.7% → 0.0%, self 3.0% → 0.0%) fmt::v11::detail::parse_replacement_field at 1583
    │   │       │       │   ├── 486.0ms → 0ms (61.4% → 0.0%, self 2.7% → 0.0%) fmt::v11::detail::format_handler::on_format_specs at ./format.h:3613
    │   │       │       │   │   ├── 194.0ms → 0ms (24.5% → 0.0%, self 1.6% → 0.0%, self 2.7% → 0.0% globally) fmt::v11::basic_format_arg::visit at ./base.h:2516
    │   │       │       │   │   │   └── 181.0ms → 0ms (22.9% → 0.0%) fmt::v11::detail::arg_formatter::operator() at ./format.h:3498 …
    │   │       │       │   │   ├── 103.0ms → 0ms (13.0% → 0.0%, self 6.6% → 0.0%) fmt::v11::detail::parse_format_specs at ./base.h:1445
    │   │       │       │   │   │   └── 51.0ms → 0ms (6.4% → 0.0%) 6 more callees, led by (2.7% → 0.0%) fmt::v11::detail::parse_width at 1417
    │   │       │       │   │   └── 168.0ms → 0ms (21.2% → 0.0%) 8 more callees, led by (10.6% → 0.0%) fmt::v11::detail::write at 2114
    │   │       │       │   └── 58.0ms → 0ms (7.3% → 0.0%) 4 more callees, led by (6.3% → 0.0%) fmt::v11::detail::format_handler::on_replacement_field at ./format.h:3609
    │   │       │       └── 47.0ms → 0ms (5.9% → 0.0%) fmt::v11::detail::format_handler::on_text at ./format.h:3593
    │   │       │           ├── 39.0ms → 0ms (4.9% → 0.0%, self 1.5% → 0.0%, self 2.8% → 0.0% globally) fmt::v11::detail::copy_noinline at 534
    │   │       │           │   └── 27.0ms → 0ms (3.4% → 0.0%) fmt::v11::detail::copy at ./base.h:2041
    │   │       │           │       └── 27.0ms → 0ms (3.4% → 0.0%, self 2.5% → 0.0%, self 9.7% → 0.0% globally) fmt::v11::detail::buffer::append at 1829
    │   │       │           │           └── 7.0ms → 0ms (0.9% → 0.0%, self 2.1% → 0.0% globally) fmt::v11::detail::buffer::try_reserve at 1812
    │   │       │           └── 5.0ms → 0ms (0.6% → 0.0%) fmt::v11::context::out at ./base.h:2690
    │   │       └── 42.0ms → 0ms (5.3% → 0.0%) 4 more callees, led by (3.3% → 0.0%) fmt::v11::to_string at ./format.h:882
    │   ├── 0ms → 520.0ms (0.0% → 87.0%) fmt::v12::format at ./format.h:4335
    │   │   ├── 0ms → 517.0ms (0.0% → 86.5%) fmt::v12::vformat[abi:cxx11] at ./format-inl.h:1446
    │   │   │   ├── 0ms → 487.0ms (0.0% → 81.4%) fmt::v12::detail::vformat_to at 1456
    │   │   │   │   └── 0ms → 487.0ms (0.0% → 81.4%, self 0.0% → 4.2%) fmt::v12::detail::parse_format_string at ./base.h:1646
    │   │   │   │       ├── 0ms → 417.0ms (0.0% → 69.7%, self 0.0% → 2.5%) fmt::v12::detail::parse_replacement_field at 1599
    │   │   │   │       │   ├── 0ms → 368.0ms (0.0% → 61.5%, self 0.0% → 1.2%) fmt::v12::detail::format_handler::on_format_specs at ./format.h:3772
    │   │   │   │       │   │   ├── 0ms → 73.0ms (0.0% → 12.2%, self 0.0% → 6.9%) fmt::v12::detail::parse_format_specs at ./base.h:1461
    │   │   │   │       │   │   │   └── 0ms → 32.0ms (0.0% → 5.4%) 6 more callees, led by (0.0% → 2.0%) fmt::v12::detail::parse_width at 1433
    │   │   │   │       │   │   └── 0ms → 288.0ms (0.0% → 48.2%) 9 more callees, led by (0.0% → 18.6%) fmt::v12::detail::write at 3434
    │   │   │   │       │   └── 0ms → 34.0ms (0.0% → 5.7%) 2 more callees, led by (0.0% → 4.7%) fmt::v12::detail::format_handler::on_replacement_field at ./format.h:3768
    │   │   │   │       └── 0ms → 43.0ms (0.0% → 7.2%) fmt::v12::detail::format_handler::on_text at ./format.h:3752
    │   │   │   │           └── 0ms → 42.0ms (0.0% → 7.0%, self 0.0% → 3.3%, self 0.0% → 4.7% globally) fmt::v12::detail::copy_noinline at 568
    │   │   │   │               └── 0ms → 22.0ms (0.0% → 3.7%) fmt::v12::detail::copy at ./base.h:2068
    │   │   │   │                   └── 0ms → 22.0ms (0.0% → 3.7%, self 0.0% → 2.8%, self 0.0% → 8.2% globally) fmt::v12::detail::buffer::append at 1845
    │   │   │   │                       └── 0ms → 5.0ms (0.0% → 0.8%, self 0.0% → 2.3% globally) fmt::v12::detail::buffer::try_reserve at 1828
    │   │   │   └── 0ms → 28.0ms (0.0% → 4.7%) 4 more callees, led by (0.0% → 2.2%) fmt::v12::to_string at ./format.h:910
    │   │   └── 0ms → 2.0ms (0.0% → 0.3%) fmt::v12::detail::value::value at ./base.h:2220
    │   └── 18.0ms → 2.0ms (2.3% → 0.3%) std::__cxx11::basic_string::~basic_string at /usr/include/c++/12/bits/basic_string.h:794 …
    └── 12.0ms (1.5% → 2.0%) operator delete
```

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time spent within the function body, excluding callees. Categories account for at least 1.0% of self time on the base or the current side.

##### Ours

| Change |    Delta |           % |         Time | Samples | Function                                                                                       | Location             |
| -----: | -------: | ----------: | -----------: | ------: | ---------------------------------------------------------------------------------------------- | -------------------- |
|    new | +49.00ms | 0.0% → 8.2% | 0ms → 49.0ms |  0 → 49 | `fmt::v12::detail::buffer::append`                                                             | `./base.h:1845`      |
|    new | +41.00ms | 0.0% → 6.9% | 0ms → 41.0ms |  0 → 41 | `fmt::v12::detail::parse_format_specs`                                                         | `./base.h:1461`      |
|    new | +28.00ms | 0.0% → 4.7% | 0ms → 28.0ms |  0 → 28 | `fmt::v12::detail::utf8_decode`                                                                | `./format.h:590`     |
|    new | +28.00ms | 0.0% → 4.7% | 0ms → 28.0ms |  0 → 28 | `fmt::v12::detail::copy_noinline`                                                              | `./format.h:568`     |
|    new | +25.00ms | 0.0% → 4.2% | 0ms → 25.0ms |  0 → 25 | `fmt::v12::detail::parse_format_string`                                                        | `./base.h:1646`      |
|    new | +18.00ms | 0.0% → 3.0% | 0ms → 18.0ms |  0 → 18 | `fmt::v12::detail::format_float`                                                               | `./format.h:3134`    |
|    new | +15.00ms | 0.0% → 2.5% | 0ms → 15.0ms |  0 → 15 | `fmt::v12::detail::parse_replacement_field`                                                    | `./base.h:1599`      |
|    new | +15.00ms | 0.0% → 2.5% | 0ms → 15.0ms |  0 → 15 | `fmt::v12::detail::buffer::push_back`                                                          | `./base.h:1832`      |
|    new | +14.00ms | 0.0% → 2.3% | 0ms → 14.0ms |  0 → 14 | `fmt::v12::detail::buffer::try_reserve`                                                        | `./base.h:1828`      |
|    new | +12.00ms | 0.0% → 2.0% | 0ms → 12.0ms |  0 → 12 | `fmt::v12::detail::parse_dynamic_spec`                                                         | `./base.h:1400`      |
|    new | +11.00ms | 0.0% → 1.8% | 0ms → 11.0ms |  0 → 11 | `fmt::v12::detail::for_each_codepoint()::{lambda(char const*, char const*)#1}::operator()`     | `./format.h`         |
|    new | +11.00ms | 0.0% → 1.8% | 0ms → 11.0ms |  0 → 11 | `fmt::v12::detail::for_each_codepoint`                                                         | `./format.h:632`     |
|    new | +11.00ms | 0.0% → 1.8% | 0ms → 11.0ms |  0 → 11 | `fmt::v12::detail::do_format_decimal`                                                          | `./format.h:1207`    |
|    new | +11.00ms | 0.0% → 1.8% | 0ms → 11.0ms |  0 → 11 | `fmt::v12::detail::write()::{lambda(unsigned int, fmt::v12::basic_string_view)#1}::operator()` | `./format.h`         |
|    new | +10.00ms | 0.0% → 1.7% | 0ms → 10.0ms |  0 → 10 | `fmt::v12::detail::parse_nonnegative_int`                                                      | `./base.h:1312`      |
|    new |  +9.00ms | 0.0% → 1.5% |  0ms → 9.0ms |   0 → 9 | `fmt::v12::detail::write_int`                                                                  | `./format.h:2050`    |
|    new |  +8.00ms | 0.0% → 1.3% |  0ms → 8.0ms |   0 → 8 | `fmt::v12::detail::write_padded`                                                               | `./format.h:1675`    |
|    new |  +8.00ms | 0.0% → 1.3% |  0ms → 8.0ms |   0 → 8 | `fmt::v12::detail::parse_format_specs()::{unnamed type#1}::operator()`                         | `./base.h:1476`      |
|    new |  +8.00ms | 0.0% → 1.3% |  0ms → 8.0ms |   0 → 8 | `fmt::v12::detail::write_fixed`                                                                | `./format.h:2487`    |
|    new |  +8.00ms | 0.0% → 1.3% |  0ms → 8.0ms |   0 → 8 | `fmt::v12::detail::dragonbox::cache_accessor::get_cached_power`                                | `./format-inl.h:376` |

##### Native

| Change |   Delta |           % |            Time | Samples | Function                                 | Location    |
| -----: | ------: | ----------: | --------------: | ------: | ---------------------------------------- | ----------- |
| +33.3% | +4.00ms | 1.5% → 2.7% | 12.0ms → 16.0ms | 12 → 16 | `std::__cxx11::basic_string::_M_dispose` | `<unknown>` |

#### Improvements

Functions with the largest decrease in time spent within the function body, excluding callees. Categories account for at least 1.0% of self time on the base or the current side.

|  Change |    Delta |           % |           Time | Samples | Function                                                                        | Location          |
| ------: | -------: | ----------: | -------------: | ------: | ------------------------------------------------------------------------------- | ----------------- |
| removed | -77.00ms | 9.7% → 0.0% |   77.0ms → 0ms |  77 → 0 | `fmt::v11::detail::buffer::append`                                              | `./base.h:1829`   |
| removed | -52.00ms | 6.6% → 0.0% |   52.0ms → 0ms |  52 → 0 | `fmt::v11::detail::parse_format_specs`                                          | `./base.h:1445`   |
| removed | -38.00ms | 4.8% → 0.0% |   38.0ms → 0ms |  38 → 0 | `fmt::v11::detail::utf8_decode`                                                 | `./format.h:556`  |
| removed | -31.00ms | 3.9% → 0.0% |   31.0ms → 0ms |  31 → 0 | `fmt::v11::detail::parse_format_string`                                         | `./base.h:1630`   |
| removed | -26.00ms | 3.3% → 0.0% |   26.0ms → 0ms |  26 → 0 | `fmt::v11::detail::format_float`                                                | `./format.h:2994` |
| removed | -24.00ms | 3.0% → 0.0% |   24.0ms → 0ms |  24 → 0 | `fmt::v11::detail::parse_replacement_field`                                     | `./base.h:1583`   |
| removed | -22.00ms | 2.8% → 0.0% |   22.0ms → 0ms |  22 → 0 | `fmt::v11::detail::copy_noinline`                                               | `./format.h:534`  |
| removed | -21.00ms | 2.7% → 0.0% |   21.0ms → 0ms |  21 → 0 | `fmt::v11::basic_format_arg::visit`                                             | `./base.h:2516`   |
| removed | -21.00ms | 2.7% → 0.0% |   21.0ms → 0ms |  21 → 0 | `fmt::v11::detail::format_handler::on_format_specs`                             | `./format.h:3613` |
| removed | -19.00ms | 2.4% → 0.0% |   19.0ms → 0ms |  19 → 0 | `fmt::v11::detail::parse_nonnegative_int`                                       | `./base.h:1296`   |
| removed | -17.00ms | 2.1% → 0.0% |   17.0ms → 0ms |  17 → 0 | `fmt::v11::detail::buffer::try_reserve`                                         | `./base.h:1812`   |
| removed | -17.00ms | 2.1% → 0.0% |   17.0ms → 0ms |  17 → 0 | `fmt::v11::detail::buffer::push_back`                                           | `./base.h:1816`   |
| removed | -17.00ms | 2.1% → 0.0% |   17.0ms → 0ms |  17 → 0 | `fmt::v11::detail::compute_width()::count_code_points::operator()`              | `./format.h:643`  |
| removed | -16.00ms | 2.0% → 0.0% |   16.0ms → 0ms |  16 → 0 | `fmt::v11::detail::write_padded`                                                | `./format.h:1631` |
| removed | -14.00ms | 1.8% → 0.0% |   14.0ms → 0ms |  14 → 0 | `fmt::v11::detail::write_float`                                                 | `./format.h:3301` |
|  -92.9% | -13.00ms | 1.8% → 0.2% | 14.0ms → 1.0ms |  14 → 1 | `cfree`                                                                         | `<unknown>`       |
| removed | -11.00ms | 1.4% → 0.0% |   11.0ms → 0ms |  11 → 0 | `fmt::v11::basic_format_args::get`                                              | `./base.h:2618`   |
| removed | -11.00ms | 1.4% → 0.0% |   11.0ms → 0ms |  11 → 0 | `fmt::v11::detail::format_float()::{lambda(unsigned int, char*)#1}::operator()` | `./format.h`      |
| removed | -11.00ms | 1.4% → 0.0% |   11.0ms → 0ms |  11 → 0 | `fmt::v11::detail::parse_dynamic_spec`                                          | `./base.h:1384`   |
| removed | -10.00ms | 1.3% → 0.0% |   10.0ms → 0ms |  10 → 0 | `fmt::v11::detail::do_write_float`                                              | `./format.h:2333` |

##### Ours

|  Change |    Delta |           % |         Time | Samples | Function                                                                        | Location          |
| ------: | -------: | ----------: | -----------: | ------: | ------------------------------------------------------------------------------- | ----------------- |
| removed | -77.00ms | 9.7% → 0.0% | 77.0ms → 0ms |  77 → 0 | `fmt::v11::detail::buffer::append`                                              | `./base.h:1829`   |
| removed | -52.00ms | 6.6% → 0.0% | 52.0ms → 0ms |  52 → 0 | `fmt::v11::detail::parse_format_specs`                                          | `./base.h:1445`   |
| removed | -38.00ms | 4.8% → 0.0% | 38.0ms → 0ms |  38 → 0 | `fmt::v11::detail::utf8_decode`                                                 | `./format.h:556`  |
| removed | -31.00ms | 3.9% → 0.0% | 31.0ms → 0ms |  31 → 0 | `fmt::v11::detail::parse_format_string`                                         | `./base.h:1630`   |
| removed | -26.00ms | 3.3% → 0.0% | 26.0ms → 0ms |  26 → 0 | `fmt::v11::detail::format_float`                                                | `./format.h:2994` |
| removed | -24.00ms | 3.0% → 0.0% | 24.0ms → 0ms |  24 → 0 | `fmt::v11::detail::parse_replacement_field`                                     | `./base.h:1583`   |
| removed | -22.00ms | 2.8% → 0.0% | 22.0ms → 0ms |  22 → 0 | `fmt::v11::detail::copy_noinline`                                               | `./format.h:534`  |
| removed | -21.00ms | 2.7% → 0.0% | 21.0ms → 0ms |  21 → 0 | `fmt::v11::basic_format_arg::visit`                                             | `./base.h:2516`   |
| removed | -21.00ms | 2.7% → 0.0% | 21.0ms → 0ms |  21 → 0 | `fmt::v11::detail::format_handler::on_format_specs`                             | `./format.h:3613` |
| removed | -19.00ms | 2.4% → 0.0% | 19.0ms → 0ms |  19 → 0 | `fmt::v11::detail::parse_nonnegative_int`                                       | `./base.h:1296`   |
| removed | -17.00ms | 2.1% → 0.0% | 17.0ms → 0ms |  17 → 0 | `fmt::v11::detail::buffer::try_reserve`                                         | `./base.h:1812`   |
| removed | -17.00ms | 2.1% → 0.0% | 17.0ms → 0ms |  17 → 0 | `fmt::v11::detail::buffer::push_back`                                           | `./base.h:1816`   |
| removed | -17.00ms | 2.1% → 0.0% | 17.0ms → 0ms |  17 → 0 | `fmt::v11::detail::compute_width()::count_code_points::operator()`              | `./format.h:643`  |
| removed | -16.00ms | 2.0% → 0.0% | 16.0ms → 0ms |  16 → 0 | `fmt::v11::detail::write_padded`                                                | `./format.h:1631` |
| removed | -14.00ms | 1.8% → 0.0% | 14.0ms → 0ms |  14 → 0 | `fmt::v11::detail::write_float`                                                 | `./format.h:3301` |
| removed | -11.00ms | 1.4% → 0.0% | 11.0ms → 0ms |  11 → 0 | `fmt::v11::basic_format_args::get`                                              | `./base.h:2618`   |
| removed | -11.00ms | 1.4% → 0.0% | 11.0ms → 0ms |  11 → 0 | `fmt::v11::detail::format_float()::{lambda(unsigned int, char*)#1}::operator()` | `./format.h`      |
| removed | -11.00ms | 1.4% → 0.0% | 11.0ms → 0ms |  11 → 0 | `fmt::v11::detail::parse_dynamic_spec`                                          | `./base.h:1384`   |
| removed | -10.00ms | 1.3% → 0.0% | 10.0ms → 0ms |  10 → 0 | `fmt::v11::detail::do_write_float`                                              | `./format.h:2333` |
| removed |  -9.00ms | 1.1% → 0.0% |  9.0ms → 0ms |   9 → 0 | `fmt::v11::detail::to_unsigned`                                                 | `./base.h:437`    |

##### Unknown

| Change |   Delta |            % |            Time | Samples | Function      | Location    |
| -----: | ------: | -----------: | --------------: | ------: | ------------- | ----------- |
|  -1.6% | -1.00ms | 8.0% → 10.4% | 63.0ms → 62.0ms | 63 → 62 | `(anonymous)` | `<unknown>` |

##### Native

| Change |    Delta |           % |            Time | Samples | Function                                | Location    |
| -----: | -------: | ----------: | --------------: | ------: | --------------------------------------- | ----------- |
| -92.9% | -13.00ms | 1.8% → 0.2% |  14.0ms → 1.0ms |  14 → 1 | `cfree`                                 | `<unknown>` |
| -50.0% |  -5.00ms | 1.3% → 0.8% |  10.0ms → 5.0ms |  10 → 5 | `__libc_malloc`                         | `<unknown>` |
| -23.1% |  -3.00ms | 1.6% → 1.7% | 13.0ms → 10.0ms | 13 → 10 | `std::__cxx11::basic_string::_M_create` | `<unknown>` |
| -14.3% |  -1.00ms | 0.9% → 1.0% |   7.0ms → 6.0ms |   7 → 6 | `_init`                                 | `<unknown>` |

##### Standard library

|  Change |   Delta |           % |          Time | Samples | Function                                                 | Location                                        |
| ------: | ------: | ----------: | ------------: | ------: | -------------------------------------------------------- | ----------------------------------------------- |
|  -80.0% | -4.00ms | 0.6% → 0.2% | 5.0ms → 1.0ms |   5 → 1 | `std::__cxx11::basic_string::~basic_string`              | `/usr/include/c++/12/bits/basic_string.h:794`   |
| removed | -4.00ms | 0.5% → 0.0% |   4.0ms → 0ms |   4 → 0 | `std::__cxx11::basic_string::_M_data`                    | `/usr/include/c++/12/bits/basic_string.h:233`   |
| removed | -3.00ms | 0.4% → 0.0% |   3.0ms → 0ms |   3 → 0 | `std::__cxx11::basic_string::_M_construct`               | `/usr/include/c++/12/bits/basic_string.tcc:217` |
|  -33.3% | -1.00ms | 0.4% → 0.3% | 3.0ms → 2.0ms |   3 → 2 | `std::char_traits::copy`                                 | `/usr/include/c++/12/bits/char_traits.h:423`    |
|  -50.0% | -1.00ms | 0.3% → 0.2% | 2.0ms → 1.0ms |   2 → 1 | `std::__cxx11::basic_string::_Alloc_hider::_Alloc_hider` | `/usr/include/c++/12/bits/basic_string.h:199`   |
|  -50.0% | -1.00ms | 0.3% → 0.2% | 2.0ms → 1.0ms |   2 → 1 | `std::__cxx11::basic_string::_M_destroy`                 | `/usr/include/c++/12/bits/basic_string.h:291`   |
| removed | -1.00ms | 0.1% → 0.0% |   1.0ms → 0ms |   1 → 0 | `std::__cxx11::basic_string::_M_dispose`                 | `/usr/include/c++/12/bits/basic_string.h:283`   |
| removed | -1.00ms | 0.1% → 0.0% |   1.0ms → 0ms |   1 → 0 | `std::__cxx11::basic_string::_M_length`                  | `/usr/include/c++/12/bits/basic_string.h:228`   |

#### Lines

Lines with the largest change in contribution to each function's self time.

##### `fmt::v12::detail::buffer::append` (`./base.h:1845`)

| Change |    Delta |            % |         Time | Samples | Location        |
| -----: | -------: | -----------: | -----------: | ------: | --------------- |
|    new | +25.00ms | 0.0% → 51.0% | 0ms → 25.0ms |  0 → 25 | `./base.h:1853` |
|    new | +11.00ms | 0.0% → 22.4% | 0ms → 11.0ms |  0 → 11 | `./base.h:1854` |
|    new |  +5.00ms | 0.0% → 10.2% |  0ms → 5.0ms |   0 → 5 | `./base.h:1846` |
|    new |  +5.00ms | 0.0% → 10.2% |  0ms → 5.0ms |   0 → 5 | `./base.h:1852` |
|    new |  +2.00ms |  0.0% → 4.1% |  0ms → 2.0ms |   0 → 2 | `./base.h:1857` |

##### `fmt::v12::detail::parse_format_specs` (`./base.h:1461`)

| Change |    Delta |            % |         Time | Samples | Location        |
| -----: | -------: | -----------: | -----------: | ------: | --------------- |
|    new | +22.00ms | 0.0% → 53.7% | 0ms → 22.0ms |  0 → 22 | `./base.h:1498` |
|    new |  +6.00ms | 0.0% → 14.6% |  0ms → 6.0ms |   0 → 6 | `./base.h:1593` |
|    new |  +5.00ms | 0.0% → 12.2% |  0ms → 5.0ms |   0 → 5 | `./base.h:1461` |
|    new |  +4.00ms |  0.0% → 9.8% |  0ms → 4.0ms |   0 → 4 | `./base.h:1596` |
|    new |  +3.00ms |  0.0% → 7.3% |  0ms → 3.0ms |   0 → 3 | `./base.h:1471` |

##### `fmt::v12::detail::utf8_decode` (`./format.h:590`)

| Change |   Delta |            % |        Time | Samples | Location         |
| -----: | ------: | -----------: | ----------: | ------: | ---------------- |
|    new | +8.00ms | 0.0% → 28.6% | 0ms → 8.0ms |   0 → 8 | `./format.h:595` |
|    new | +6.00ms | 0.0% → 21.4% | 0ms → 6.0ms |   0 → 6 | `./format.h:622` |
|    new | +3.00ms | 0.0% → 10.7% | 0ms → 3.0ms |   0 → 3 | `./format.h:593` |
|    new | +3.00ms | 0.0% → 10.7% | 0ms → 3.0ms |   0 → 3 | `./format.h:621` |
|    new | +2.00ms |  0.0% → 7.1% | 0ms → 2.0ms |   0 → 2 | `./format.h:592` |

##### `fmt::v12::detail::copy_noinline` (`./format.h:568`)

| Change |    Delta |            % |         Time | Samples | Location         |
| -----: | -------: | -----------: | -----------: | ------: | ---------------- |
|    new | +17.00ms | 0.0% → 60.7% | 0ms → 17.0ms |  0 → 17 | `./format.h:571` |
|    new | +11.00ms | 0.0% → 39.3% | 0ms → 11.0ms |  0 → 11 | `./format.h:568` |

##### `fmt::v12::detail::parse_format_string` (`./base.h:1646`)

| Change |    Delta |            % |         Time | Samples | Location        |
| -----: | -------: | -----------: | -----------: | ------: | --------------- |
|    new | +11.00ms | 0.0% → 44.0% | 0ms → 11.0ms |  0 → 11 | `./base.h:1655` |
|    new |  +8.00ms | 0.0% → 32.0% |  0ms → 8.0ms |   0 → 8 | `./base.h:1651` |
|    new |  +3.00ms | 0.0% → 12.0% |  0ms → 3.0ms |   0 → 3 | `./base.h:1654` |
|    new |  +2.00ms |  0.0% → 8.0% |  0ms → 2.0ms |   0 → 2 | `./base.h:1650` |
|    new |  +1.00ms |  0.0% → 4.0% |  0ms → 1.0ms |   0 → 1 | `./base.h:1652` |

##### `fmt::v12::detail::format_float` (`./format.h:3134`)

| Change |   Delta |            % |        Time | Samples | Location          |
| -----: | ------: | -----------: | ----------: | ------: | ----------------- |
|    new | +3.00ms | 0.0% → 16.7% | 0ms → 3.0ms |   0 → 3 | `./format.h:3152` |
|    new | +3.00ms | 0.0% → 16.7% | 0ms → 3.0ms |   0 → 3 | `./format.h:3199` |
|    new | +3.00ms | 0.0% → 16.7% | 0ms → 3.0ms |   0 → 3 | `./format.h:3205` |
|    new | +1.00ms |  0.0% → 5.6% | 0ms → 1.0ms |   0 → 1 | `./format.h:3208` |
|    new | +1.00ms |  0.0% → 5.6% | 0ms → 1.0ms |   0 → 1 | `./format.h:3217` |

##### `fmt::v12::detail::parse_replacement_field` (`./base.h:1599`)

| Change |   Delta |            % |        Time | Samples | Location        |
| -----: | ------: | -----------: | ----------: | ------: | --------------- |
|    new | +7.00ms | 0.0% → 46.7% | 0ms → 7.0ms |   0 → 7 | `./base.h:1609` |
|    new | +5.00ms | 0.0% → 33.3% | 0ms → 5.0ms |   0 → 5 | `./base.h:1643` |
|    new | +3.00ms | 0.0% → 20.0% | 0ms → 3.0ms |   0 → 3 | `./base.h:1640` |

##### `fmt::v12::detail::buffer::push_back` (`./base.h:1832`)

| Change |    Delta |            % |         Time | Samples | Location        |
| -----: | -------: | -----------: | -----------: | ------: | --------------- |
|    new | +11.00ms | 0.0% → 73.3% | 0ms → 11.0ms |  0 → 11 | `./base.h:1834` |
|    new |  +3.00ms | 0.0% → 20.0% |  0ms → 3.0ms |   0 → 3 | `./base.h:1832` |
|    new |  +1.00ms |  0.0% → 6.7% |  0ms → 1.0ms |   0 → 1 | `./base.h:1835` |

##### `fmt::v12::detail::buffer::try_reserve` (`./base.h:1828`)

| Change |    Delta |             % |         Time | Samples | Location        |
| -----: | -------: | ------------: | -----------: | ------: | --------------- |
|    new | +14.00ms | 0.0% → 100.0% | 0ms → 14.0ms |  0 → 14 | `./base.h:1829` |

##### `fmt::v12::detail::parse_dynamic_spec` (`./base.h:1400`)

| Change |   Delta |            % |        Time | Samples | Location        |
| -----: | ------: | -----------: | ----------: | ------: | --------------- |
|    new | +5.00ms | 0.0% → 41.7% | 0ms → 5.0ms |   0 → 5 | `./base.h:1406` |
|    new | +4.00ms | 0.0% → 33.3% | 0ms → 4.0ms |   0 → 4 | `./base.h:1400` |
|    new | +3.00ms | 0.0% → 25.0% | 0ms → 3.0ms |   0 → 3 | `./base.h:1408` |

##### `fmt::v12::detail::for_each_codepoint()::{lambda(char const*, char const*)#1}::operator()` (`./format.h`)

| Change |    Delta |            % |         Time | Samples | Location         |
| -----: | -------: | -----------: | -----------: | ------: | ---------------- |
|    new | +10.00ms | 0.0% → 90.9% | 0ms → 10.0ms |  0 → 10 | `./format.h:637` |
|    new |  +1.00ms |  0.0% → 9.1% |  0ms → 1.0ms |   0 → 1 | `./format.h:639` |

##### `fmt::v12::detail::for_each_codepoint` (`./format.h:632`)

| Change |   Delta |            % |        Time | Samples | Location         |
| -----: | ------: | -----------: | ----------: | ------: | ---------------- |
|    new | +6.00ms | 0.0% → 54.5% | 0ms → 6.0ms |   0 → 6 | `./format.h:645` |
|    new | +2.00ms | 0.0% → 18.2% | 0ms → 2.0ms |   0 → 2 | `./format.h:633` |
|    new | +2.00ms | 0.0% → 18.2% | 0ms → 2.0ms |   0 → 2 | `./format.h:655` |
|    new | +1.00ms |  0.0% → 9.1% | 0ms → 1.0ms |   0 → 1 | `./format.h:663` |

##### `fmt::v12::detail::do_format_decimal` (`./format.h:1207`)

| Change |   Delta |            % |        Time | Samples | Location          |
| -----: | ------: | -----------: | ----------: | ------: | ----------------- |
|    new | +7.00ms | 0.0% → 63.6% | 0ms → 7.0ms |   0 → 7 | `./format.h:1219` |
|    new | +4.00ms | 0.0% → 36.4% | 0ms → 4.0ms |   0 → 4 | `./format.h:1223` |

##### `fmt::v12::detail::write()::{lambda(unsigned int, fmt::v12::basic_string_view)#1}::operator()` (`./format.h`)

| Change |   Delta |            % |        Time | Samples | Location          |
| -----: | ------: | -----------: | ----------: | ------: | ----------------- |
|    new | +5.00ms | 0.0% → 45.5% | 0ms → 5.0ms |   0 → 5 | `./format.h:2199` |
|    new | +3.00ms | 0.0% → 27.3% | 0ms → 3.0ms |   0 → 3 | `./format.h:2172` |
|    new | +2.00ms | 0.0% → 18.2% | 0ms → 2.0ms |   0 → 2 | `./format.h:2173` |
|    new | +1.00ms |  0.0% → 9.1% | 0ms → 1.0ms |   0 → 1 | `./format.h:2197` |

##### `fmt::v12::detail::parse_nonnegative_int` (`./base.h:1312`)

| Change |   Delta |            % |        Time | Samples | Location        |
| -----: | ------: | -----------: | ----------: | ------: | --------------- |
|    new | +8.00ms | 0.0% → 80.0% | 0ms → 8.0ms |   0 → 8 | `./base.h:1321` |
|    new | +2.00ms | 0.0% → 20.0% | 0ms → 2.0ms |   0 → 2 | `./base.h:1319` |

##### `fmt::v12::detail::write_int` (`./format.h:2050`)

| Change |   Delta |            % |        Time | Samples | Location          |
| -----: | ------: | -----------: | ----------: | ------: | ----------------- |
|    new | +3.00ms | 0.0% → 33.3% | 0ms → 3.0ms |   0 → 3 | `./format.h:2096` |
|    new | +2.00ms | 0.0% → 22.2% | 0ms → 2.0ms |   0 → 2 | `./format.h:2050` |
|    new | +2.00ms | 0.0% → 22.2% | 0ms → 2.0ms |   0 → 2 | `./format.h:2111` |
|    new | +1.00ms | 0.0% → 11.1% | 0ms → 1.0ms |   0 → 1 | `./format.h:2062` |
|    new | +1.00ms | 0.0% → 11.1% | 0ms → 1.0ms |   0 → 1 | `./format.h:2104` |

##### `fmt::v12::detail::write_padded` (`./format.h:1675`)

| Change |   Delta |            % |        Time | Samples | Location          |
| -----: | ------: | -----------: | ----------: | ------: | ----------------- |
|    new | +3.00ms | 0.0% → 37.5% | 0ms → 3.0ms |   0 → 3 | `./format.h:1685` |
|    new | +3.00ms | 0.0% → 37.5% | 0ms → 3.0ms |   0 → 3 | `./format.h:1688` |
|    new | +2.00ms | 0.0% → 25.0% | 0ms → 2.0ms |   0 → 2 | `./format.h:1692` |

##### `fmt::v12::detail::parse_format_specs()::{unnamed type#1}::operator()` (`./base.h:1476`)

| Change |   Delta |             % |        Time | Samples | Location        |
| -----: | ------: | ------------: | ----------: | ------: | --------------- |
|    new | +8.00ms | 0.0% → 100.0% | 0ms → 8.0ms |   0 → 8 | `./base.h:1477` |

##### `fmt::v12::detail::write_fixed` (`./format.h:2487`)

| Change |   Delta |            % |        Time | Samples | Location          |
| -----: | ------: | -----------: | ----------: | ------: | ----------------- |
|    new | +3.00ms | 0.0% → 37.5% | 0ms → 3.0ms |   0 → 3 | `./format.h:2487` |
|    new | +3.00ms | 0.0% → 37.5% | 0ms → 3.0ms |   0 → 3 | `./format.h:2549` |
|    new | +1.00ms | 0.0% → 12.5% | 0ms → 1.0ms |   0 → 1 | `./format.h:2522` |
|    new | +1.00ms | 0.0% → 12.5% | 0ms → 1.0ms |   0 → 1 | `./format.h:2539` |

##### `fmt::v12::detail::dragonbox::cache_accessor::get_cached_power` (`./format-inl.h:376`)

| Change |   Delta |            % |        Time | Samples | Location              |
| -----: | ------: | -----------: | ----------: | ------: | --------------------- |
|    new | +5.00ms | 0.0% → 62.5% | 0ms → 5.0ms |   0 → 5 | `./format-inl.h:1086` |
|    new | +2.00ms | 0.0% → 25.0% | 0ms → 2.0ms |   0 → 2 | `./format-inl.h:376`  |
|    new | +1.00ms | 0.0% → 12.5% | 0ms → 1.0ms |   0 → 1 | `./format-inl.h:1066` |

##### `fmt::v11::detail::buffer::append` (`./base.h:1829`)

|  Change |    Delta |            % |         Time | Samples | Location        |
| ------: | -------: | -----------: | -----------: | ------: | --------------- |
| removed | -48.00ms | 62.3% → 0.0% | 48.0ms → 0ms |  48 → 0 | `./base.h:1837` |
| removed | -13.00ms | 16.9% → 0.0% | 13.0ms → 0ms |  13 → 0 | `./base.h:1833` |
| removed |  -7.00ms |  9.1% → 0.0% |  7.0ms → 0ms |   7 → 0 | `./base.h:1830` |
| removed |  -7.00ms |  9.1% → 0.0% |  7.0ms → 0ms |   7 → 0 | `./base.h:1838` |
| removed |  -2.00ms |  2.6% → 0.0% |  2.0ms → 0ms |   2 → 0 | `./base.h:1836` |

##### `fmt::v11::detail::parse_format_specs` (`./base.h:1445`)

|  Change |    Delta |            % |         Time | Samples | Location        |
| ------: | -------: | -----------: | -----------: | ------: | --------------- |
| removed | -22.00ms | 42.3% → 0.0% | 22.0ms → 0ms |  22 → 0 | `./base.h:1482` |
| removed | -13.00ms | 25.0% → 0.0% | 13.0ms → 0ms |  13 → 0 | `./base.h:1580` |
| removed |  -8.00ms | 15.4% → 0.0% |  8.0ms → 0ms |   8 → 0 | `./base.h:1577` |
| removed |  -4.00ms |  7.7% → 0.0% |  4.0ms → 0ms |   4 → 0 | `./base.h:1455` |
| removed |  -3.00ms |  5.8% → 0.0% |  3.0ms → 0ms |   3 → 0 | `./base.h:1496` |

##### `fmt::v11::detail::utf8_decode` (`./format.h:556`)

|  Change |    Delta |            % |         Time | Samples | Location         |
| ------: | -------: | -----------: | -----------: | ------: | ---------------- |
| removed | -15.00ms | 39.5% → 0.0% | 15.0ms → 0ms |  15 → 0 | `./format.h:583` |
| removed |  -9.00ms | 23.7% → 0.0% |  9.0ms → 0ms |   9 → 0 | `./format.h:561` |
| removed |  -5.00ms | 13.2% → 0.0% |  5.0ms → 0ms |   5 → 0 | `./format.h:588` |
| removed |  -3.00ms |  7.9% → 0.0% |  3.0ms → 0ms |   3 → 0 | `./format.h:558` |
| removed |  -2.00ms |  5.3% → 0.0% |  2.0ms → 0ms |   2 → 0 | `./format.h:578` |

##### `fmt::v11::detail::parse_format_string` (`./base.h:1630`)

|  Change |    Delta |            % |         Time | Samples | Location        |
| ------: | -------: | -----------: | -----------: | ------: | --------------- |
| removed | -13.00ms | 41.9% → 0.0% | 13.0ms → 0ms |  13 → 0 | `./base.h:1638` |
| removed |  -9.00ms | 29.0% → 0.0% |  9.0ms → 0ms |   9 → 0 | `./base.h:1635` |
| removed |  -7.00ms | 22.6% → 0.0% |  7.0ms → 0ms |   7 → 0 | `./base.h:1639` |
| removed |  -2.00ms |  6.5% → 0.0% |  2.0ms → 0ms |   2 → 0 | `./base.h:1634` |

##### `fmt::v11::detail::format_float` (`./format.h:2994`)

|  Change |   Delta |            % |        Time | Samples | Location          |
| ------: | ------: | -----------: | ----------: | ------: | ----------------- |
| removed | -5.00ms | 19.2% → 0.0% | 5.0ms → 0ms |   5 → 0 | `./format.h:3082` |
| removed | -5.00ms | 19.2% → 0.0% | 5.0ms → 0ms |   5 → 0 | `./format.h:3171` |
| removed | -3.00ms | 11.5% → 0.0% | 3.0ms → 0ms |   3 → 0 | `./format.h:3185` |
| removed | -2.00ms |  7.7% → 0.0% | 2.0ms → 0ms |   2 → 0 | `./format.h:3071` |
| removed | -2.00ms |  7.7% → 0.0% | 2.0ms → 0ms |   2 → 0 | `./format.h:3231` |

##### `fmt::v11::detail::parse_replacement_field` (`./base.h:1583`)

|  Change |    Delta |            % |         Time | Samples | Location        |
| ------: | -------: | -----------: | -----------: | ------: | --------------- |
| removed | -10.00ms | 41.7% → 0.0% | 10.0ms → 0ms |  10 → 0 | `./base.h:1593` |
| removed |  -4.00ms | 16.7% → 0.0% |  4.0ms → 0ms |   4 → 0 | `./base.h:1624` |
| removed |  -4.00ms | 16.7% → 0.0% |  4.0ms → 0ms |   4 → 0 | `./base.h:1627` |
| removed |  -3.00ms | 12.5% → 0.0% |  3.0ms → 0ms |   3 → 0 | `./base.h:1583` |
| removed |  -3.00ms | 12.5% → 0.0% |  3.0ms → 0ms |   3 → 0 | `./base.h:1588` |

##### `fmt::v11::detail::copy_noinline` (`./format.h:534`)

|  Change |    Delta |            % |         Time | Samples | Location         |
| ------: | -------: | -----------: | -----------: | ------: | ---------------- |
| removed | -17.00ms | 77.3% → 0.0% | 17.0ms → 0ms |  17 → 0 | `./format.h:537` |
| removed |  -5.00ms | 22.7% → 0.0% |  5.0ms → 0ms |   5 → 0 | `./format.h:534` |

##### `fmt::v11::basic_format_arg::visit` (`./base.h:2516`)

|  Change |    Delta |            % |         Time | Samples | Location        |
| ------: | -------: | -----------: | -----------: | ------: | --------------- |
| removed | -16.00ms | 76.2% → 0.0% | 16.0ms → 0ms |  16 → 0 | `./base.h:2518` |
| removed |  -2.00ms |  9.5% → 0.0% |  2.0ms → 0ms |   2 → 0 | `./base.h:2516` |
| removed |  -2.00ms |  9.5% → 0.0% |  2.0ms → 0ms |   2 → 0 | `./base.h:2537` |
| removed |  -1.00ms |  4.8% → 0.0% |  1.0ms → 0ms |   1 → 0 | `./base.h:2531` |

##### `fmt::v11::detail::format_handler::on_format_specs` (`./format.h:3613`)

|  Change |    Delta |            % |         Time | Samples | Location          |
| ------: | -------: | -----------: | -----------: | ------: | ----------------- |
| removed | -12.00ms | 57.1% → 0.0% | 12.0ms → 0ms |  12 → 0 | `./format.h:3628` |
| removed |  -4.00ms | 19.0% → 0.0% |  4.0ms → 0ms |   4 → 0 | `./format.h:3619` |
| removed |  -3.00ms | 14.3% → 0.0% |  3.0ms → 0ms |   3 → 0 | `./format.h:3630` |
| removed |  -1.00ms |  4.8% → 0.0% |  1.0ms → 0ms |   1 → 0 | `./format.h:3613` |
| removed |  -1.00ms |  4.8% → 0.0% |  1.0ms → 0ms |   1 → 0 | `./format.h:3620` |

##### `fmt::v11::detail::parse_nonnegative_int` (`./base.h:1296`)

|  Change |    Delta |            % |         Time | Samples | Location        |
| ------: | -------: | -----------: | -----------: | ------: | --------------- |
| removed | -12.00ms | 63.2% → 0.0% | 12.0ms → 0ms |  12 → 0 | `./base.h:1305` |
| removed |  -4.00ms | 21.1% → 0.0% |  4.0ms → 0ms |   4 → 0 | `./base.h:1306` |
| removed |  -2.00ms | 10.5% → 0.0% |  2.0ms → 0ms |   2 → 0 | `./base.h:1303` |
| removed |  -1.00ms |  5.3% → 0.0% |  1.0ms → 0ms |   1 → 0 | `./base.h:1309` |

##### `fmt::v11::detail::buffer::try_reserve` (`./base.h:1812`)

|  Change |    Delta |             % |         Time | Samples | Location        |
| ------: | -------: | ------------: | -----------: | ------: | --------------- |
| removed | -17.00ms | 100.0% → 0.0% | 17.0ms → 0ms |  17 → 0 | `./base.h:1813` |

##### `fmt::v11::detail::buffer::push_back` (`./base.h:1816`)

|  Change |    Delta |            % |         Time | Samples | Location        |
| ------: | -------: | -----------: | -----------: | ------: | --------------- |
| removed | -16.00ms | 94.1% → 0.0% | 16.0ms → 0ms |  16 → 0 | `./base.h:1818` |
| removed |  -1.00ms |  5.9% → 0.0% |  1.0ms → 0ms |   1 → 0 | `./base.h:1817` |

##### `fmt::v11::detail::compute_width()::count_code_points::operator()` (`./format.h:643`)

|  Change |    Delta |            % |         Time | Samples | Location         |
| ------: | -------: | -----------: | -----------: | ------: | ---------------- |
| removed | -15.00ms | 88.2% → 0.0% | 15.0ms → 0ms |  15 → 0 | `./format.h:644` |
| removed |  -2.00ms | 11.8% → 0.0% |  2.0ms → 0ms |   2 → 0 | `./format.h:648` |

##### `fmt::v11::detail::write_padded` (`./format.h:1631`)

|  Change |   Delta |            % |        Time | Samples | Location          |
| ------: | ------: | -----------: | ----------: | ------: | ----------------- |
| removed | -5.00ms | 31.3% → 0.0% | 5.0ms → 0ms |   5 → 0 | `./format.h:1644` |
| removed | -3.00ms | 18.8% → 0.0% | 3.0ms → 0ms |   3 → 0 | `./format.h:1635` |
| removed | -2.00ms | 12.5% → 0.0% | 2.0ms → 0ms |   2 → 0 | `./format.h:1636` |
| removed | -2.00ms | 12.5% → 0.0% | 2.0ms → 0ms |   2 → 0 | `./format.h:1641` |
| removed | -2.00ms | 12.5% → 0.0% | 2.0ms → 0ms |   2 → 0 | `./format.h:1646` |

##### `fmt::v11::detail::write_float` (`./format.h:3301`)

|  Change |   Delta |            % |        Time | Samples | Location          |
| ------: | ------: | -----------: | ----------: | ------: | ----------------- |
| removed | -4.00ms | 28.6% → 0.0% | 4.0ms → 0ms |   4 → 0 | `./format.h:3316` |
| removed | -3.00ms | 21.4% → 0.0% | 3.0ms → 0ms |   3 → 0 | `./format.h:3301` |
| removed | -2.00ms | 14.3% → 0.0% | 2.0ms → 0ms |   2 → 0 | `./format.h:3336` |
| removed | -2.00ms | 14.3% → 0.0% | 2.0ms → 0ms |   2 → 0 | `./format.h:3351` |
| removed | -2.00ms | 14.3% → 0.0% | 2.0ms → 0ms |   2 → 0 | `./format.h:3353` |

##### `fmt::v11::basic_format_args::get` (`./base.h:2618`)

|  Change |   Delta |            % |        Time | Samples | Location        |
| ------: | ------: | -----------: | ----------: | ------: | --------------- |
| removed | -3.00ms | 27.3% → 0.0% | 3.0ms → 0ms |   3 → 0 | `./base.h:2624` |
| removed | -3.00ms | 27.3% → 0.0% | 3.0ms → 0ms |   3 → 0 | `./base.h:2625` |
| removed | -3.00ms | 27.3% → 0.0% | 3.0ms → 0ms |   3 → 0 | `./base.h:2626` |
| removed | -2.00ms | 18.2% → 0.0% | 2.0ms → 0ms |   2 → 0 | `./base.h:2620` |

##### `fmt::v11::detail::format_float()::{lambda(unsigned int, char*)#1}::operator()` (`./format.h`)

|  Change |   Delta |            % |        Time | Samples | Location          |
| ------: | ------: | -----------: | ----------: | ------: | ----------------- |
| removed | -6.00ms | 54.5% → 0.0% | 6.0ms → 0ms |   6 → 0 | `./format.h:3159` |
| removed | -3.00ms | 27.3% → 0.0% | 3.0ms → 0ms |   3 → 0 | `./format.h:3158` |
| removed | -1.00ms |  9.1% → 0.0% | 1.0ms → 0ms |   1 → 0 | `./format.h:3138` |
| removed | -1.00ms |  9.1% → 0.0% | 1.0ms → 0ms |   1 → 0 | `./format.h:3140` |

##### `fmt::v11::detail::parse_dynamic_spec` (`./base.h:1384`)

|  Change |   Delta |            % |        Time | Samples | Location        |
| ------: | ------: | -----------: | ----------: | ------: | --------------- |
| removed | -4.00ms | 36.4% → 0.0% | 4.0ms → 0ms |   4 → 0 | `./base.h:1384` |
| removed | -3.00ms | 27.3% → 0.0% | 3.0ms → 0ms |   3 → 0 | `./base.h:1414` |
| removed | -2.00ms | 18.2% → 0.0% | 2.0ms → 0ms |   2 → 0 | `./base.h:1390` |
| removed | -2.00ms | 18.2% → 0.0% | 2.0ms → 0ms |   2 → 0 | `./base.h:1392` |

##### `fmt::v11::detail::do_write_float` (`./format.h:2333`)

|  Change |   Delta |            % |        Time | Samples | Location          |
| ------: | ------: | -----------: | ----------: | ------: | ----------------- |
| removed | -3.00ms | 30.0% → 0.0% | 3.0ms → 0ms |   3 → 0 | `./format.h:2410` |
| removed | -2.00ms | 20.0% → 0.0% | 2.0ms → 0ms |   2 → 0 | `./format.h:2333` |
| removed | -1.00ms | 10.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `./format.h:2342` |
| removed | -1.00ms | 10.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `./format.h:2346` |
| removed | -1.00ms | 10.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `./format.h:2385` |

##### `fmt::v11::detail::to_unsigned` (`./base.h:437`)

|  Change |   Delta |             % |        Time | Samples | Location       |
| ------: | ------: | ------------: | ----------: | ------: | -------------- |
| removed | -9.00ms | 100.0% → 0.0% | 9.0ms → 0ms |   9 → 0 | `./base.h:438` |

##### `std::__cxx11::basic_string::~basic_string` (`/usr/include/c++/12/bits/basic_string.h:794`)

| Change |   Delta |      % |          Time | Samples | Location                                      |
| -----: | ------: | -----: | ------------: | ------: | --------------------------------------------- |
| -80.0% | -4.00ms | 100.0% | 5.0ms → 1.0ms |   5 → 1 | `/usr/include/c++/12/bits/basic_string.h:795` |

##### `std::__cxx11::basic_string::_M_data` (`/usr/include/c++/12/bits/basic_string.h:233`)

|  Change |   Delta |             % |        Time | Samples | Location                                      |
| ------: | ------: | ------------: | ----------: | ------: | --------------------------------------------- |
| removed | -4.00ms | 100.0% → 0.0% | 4.0ms → 0ms |   4 → 0 | `/usr/include/c++/12/bits/basic_string.h:234` |

##### `std::__cxx11::basic_string::_M_construct` (`/usr/include/c++/12/bits/basic_string.tcc:217`)

|  Change |   Delta |             % |        Time | Samples | Location                                        |
| ------: | ------: | ------------: | ----------: | ------: | ----------------------------------------------- |
| removed | -3.00ms | 100.0% → 0.0% | 3.0ms → 0ms |   3 → 0 | `/usr/include/c++/12/bits/basic_string.tcc:221` |

##### `std::char_traits::copy` (`/usr/include/c++/12/bits/char_traits.h:423`)

| Change |   Delta |             % |          Time | Samples | Location                                     |
| -----: | ------: | ------------: | ------------: | ------: | -------------------------------------------- |
| -50.0% | -1.00ms | 66.7% → 50.0% | 2.0ms → 1.0ms |   2 → 1 | `/usr/include/c++/12/bits/char_traits.h:431` |

##### `std::__cxx11::basic_string::_Alloc_hider::_Alloc_hider` (`/usr/include/c++/12/bits/basic_string.h:199`)

| Change |   Delta |      % |          Time | Samples | Location                                      |
| -----: | ------: | -----: | ------------: | ------: | --------------------------------------------- |
| -50.0% | -1.00ms | 100.0% | 2.0ms → 1.0ms |   2 → 1 | `/usr/include/c++/12/bits/basic_string.h:200` |

##### `std::__cxx11::basic_string::_M_destroy` (`/usr/include/c++/12/bits/basic_string.h:291`)

| Change |   Delta |      % |          Time | Samples | Location                                      |
| -----: | ------: | -----: | ------------: | ------: | --------------------------------------------- |
| -50.0% | -1.00ms | 100.0% | 2.0ms → 1.0ms |   2 → 1 | `/usr/include/c++/12/bits/basic_string.h:292` |

##### `std::__cxx11::basic_string::_M_dispose` (`/usr/include/c++/12/bits/basic_string.h:283`)

|  Change |   Delta |             % |        Time | Samples | Location                                      |
| ------: | ------: | ------------: | ----------: | ------: | --------------------------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `/usr/include/c++/12/bits/basic_string.h:285` |

##### `std::__cxx11::basic_string::_M_length` (`/usr/include/c++/12/bits/basic_string.h:228`)

|  Change |   Delta |             % |        Time | Samples | Location                                      |
| ------: | ------: | ------------: | ----------: | ------: | --------------------------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `/usr/include/c++/12/bits/basic_string.h:229` |

#### Callers

Callers with the largest change in contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `fmt::v12::detail::buffer::append` (`./base.h:1845`)

| Change |    Delta |             % |         Time | Samples | Caller                   | Location        |
| -----: | -------: | ------------: | -----------: | ------: | ------------------------ | --------------- |
|    new | +49.00ms | 0.0% → 100.0% | 0ms → 49.0ms |  0 → 49 | `fmt::v12::detail::copy` | `./base.h:2068` |

##### `fmt::v12::detail::parse_format_specs` (`./base.h:1461`)

| Change |    Delta |             % |         Time | Samples | Caller                                              | Location          |
| -----: | -------: | ------------: | -----------: | ------: | --------------------------------------------------- | ----------------- |
|    new | +41.00ms | 0.0% → 100.0% | 0ms → 41.0ms |  0 → 41 | `fmt::v12::detail::format_handler::on_format_specs` | `./format.h:3772` |

##### `fmt::v12::detail::utf8_decode` (`./format.h:590`)

| Change |    Delta |             % |         Time | Samples | Caller                                                                                     | Location     |
| -----: | -------: | ------------: | -----------: | ------: | ------------------------------------------------------------------------------------------ | ------------ |
|    new | +28.00ms | 0.0% → 100.0% | 0ms → 28.0ms |  0 → 28 | `fmt::v12::detail::for_each_codepoint()::{lambda(char const*, char const*)#1}::operator()` | `./format.h` |

##### `fmt::v12::detail::copy_noinline` (`./format.h:568`)

| Change |    Delta |            % |         Time | Samples | Caller                                                   | Location          |
| -----: | -------: | -----------: | -----------: | ------: | -------------------------------------------------------- | ----------------- |
|    new | +20.00ms | 0.0% → 71.4% | 0ms → 20.0ms |  0 → 20 | `fmt::v12::detail::format_handler::on_text`              | `./format.h:3752` |
|    new |  +6.00ms | 0.0% → 21.4% |  0ms → 6.0ms |   0 → 6 | `fmt::v12::detail::format_handler::on_replacement_field` | `./format.h:3768` |
|    new |  +2.00ms |  0.0% → 7.1% |  0ms → 2.0ms |   0 → 2 | `fmt::v12::detail::write_significand`                    | `./format.h:2428` |

##### `fmt::v12::detail::parse_format_string` (`./base.h:1646`)

| Change |    Delta |             % |         Time | Samples | Caller                         | Location              |
| -----: | -------: | ------------: | -----------: | ------: | ------------------------------ | --------------------- |
|    new | +25.00ms | 0.0% → 100.0% | 0ms → 25.0ms |  0 → 25 | `fmt::v12::detail::vformat_to` | `./format-inl.h:1456` |

##### `fmt::v12::detail::format_float` (`./format.h:3134`)

| Change |    Delta |             % |         Time | Samples | Caller                    | Location          |
| -----: | -------: | ------------: | -----------: | ------: | ------------------------- | ----------------- |
|    new | +18.00ms | 0.0% → 100.0% | 0ms → 18.0ms |  0 → 18 | `fmt::v12::detail::write` | `./format.h:3434` |

##### `fmt::v12::detail::parse_replacement_field` (`./base.h:1599`)

| Change |    Delta |             % |         Time | Samples | Caller                                  | Location        |
| -----: | -------: | ------------: | -----------: | ------: | --------------------------------------- | --------------- |
|    new | +15.00ms | 0.0% → 100.0% | 0ms → 15.0ms |  0 → 15 | `fmt::v12::detail::parse_format_string` | `./base.h:1646` |

##### `fmt::v12::detail::buffer::push_back` (`./base.h:1832`)

| Change |    Delta |             % |         Time | Samples | Caller                                | Location        |
| -----: | -------: | ------------: | -----------: | ------: | ------------------------------------- | --------------- |
|    new | +15.00ms | 0.0% → 100.0% | 0ms → 15.0ms |  0 → 15 | `fmt::v12::basic_appender::operator=` | `./base.h:2478` |

##### `fmt::v12::detail::buffer::try_reserve` (`./base.h:1828`)

| Change |   Delta |            % |        Time | Samples | Caller                                | Location         |
| -----: | ------: | -----------: | ----------: | ------: | ------------------------------------- | ---------------- |
|    new | +9.00ms | 0.0% → 64.3% | 0ms → 9.0ms |   0 → 9 | `fmt::v12::detail::buffer::append`    | `./base.h:1845`  |
|    new | +4.00ms | 0.0% → 28.6% | 0ms → 4.0ms |   0 → 4 | `fmt::v12::detail::buffer::push_back` | `./base.h:1832`  |
|    new | +1.00ms |  0.0% → 7.1% | 0ms → 1.0ms |   0 → 1 | `fmt::v12::detail::reserve`           | `./format.h:501` |

##### `fmt::v12::detail::parse_dynamic_spec` (`./base.h:1400`)

| Change |   Delta |            % |        Time | Samples | Caller                                              | Location          |
| -----: | ------: | -----------: | ----------: | ------: | --------------------------------------------------- | ----------------- |
|    new | +5.00ms | 0.0% → 41.7% | 0ms → 5.0ms |   0 → 5 | `fmt::v12::detail::parse_width`                     | `./base.h:1433`   |
|    new | +4.00ms | 0.0% → 33.3% | 0ms → 4.0ms |   0 → 4 | `fmt::v12::detail::format_handler::on_format_specs` | `./format.h:3772` |
|    new | +3.00ms | 0.0% → 25.0% | 0ms → 3.0ms |   0 → 3 | `fmt::v12::detail::parse_precision`                 | `./base.h:1442`   |

##### `fmt::v12::detail::for_each_codepoint()::{lambda(char const*, char const*)#1}::operator()` (`./format.h`)

| Change |    Delta |             % |         Time | Samples | Caller                                 | Location         |
| -----: | -------: | ------------: | -----------: | ------: | -------------------------------------- | ---------------- |
|    new | +11.00ms | 0.0% → 100.0% | 0ms → 11.0ms |  0 → 11 | `fmt::v12::detail::for_each_codepoint` | `./format.h:632` |

##### `fmt::v12::detail::for_each_codepoint` (`./format.h:632`)

| Change |    Delta |             % |         Time | Samples | Caller                    | Location          |
| -----: | -------: | ------------: | -----------: | ------: | ------------------------- | ----------------- |
|    new | +11.00ms | 0.0% → 100.0% | 0ms → 11.0ms |  0 → 11 | `fmt::v12::detail::write` | `./format.h:2159` |

##### `fmt::v12::detail::do_format_decimal` (`./format.h:1207`)

| Change |    Delta |             % |         Time | Samples | Caller                        | Location          |
| -----: | -------: | ------------: | -----------: | ------: | ----------------------------- | ----------------- |
|    new | +11.00ms | 0.0% → 100.0% | 0ms → 11.0ms |  0 → 11 | `fmt::v12::detail::write_int` | `./format.h:2050` |

##### `fmt::v12::detail::write()::{lambda(unsigned int, fmt::v12::basic_string_view)#1}::operator()` (`./format.h`)

| Change |    Delta |             % |         Time | Samples | Caller                                                                                     | Location     |
| -----: | -------: | ------------: | -----------: | ------: | ------------------------------------------------------------------------------------------ | ------------ |
|    new | +11.00ms | 0.0% → 100.0% | 0ms → 11.0ms |  0 → 11 | `fmt::v12::detail::for_each_codepoint()::{lambda(char const*, char const*)#1}::operator()` | `./format.h` |

##### `fmt::v12::detail::parse_nonnegative_int` (`./base.h:1312`)

| Change |    Delta |             % |         Time | Samples | Caller                                 | Location        |
| -----: | -------: | ------------: | -----------: | ------: | -------------------------------------- | --------------- |
|    new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |  0 → 10 | `fmt::v12::detail::parse_dynamic_spec` | `./base.h:1400` |

##### `fmt::v12::detail::write_int` (`./format.h:2050`)

| Change |   Delta |             % |        Time | Samples | Caller                                              | Location          |
| -----: | ------: | ------------: | ----------: | ------: | --------------------------------------------------- | ----------------- |
|    new | +9.00ms | 0.0% → 100.0% | 0ms → 9.0ms |   0 → 9 | `fmt::v12::detail::format_handler::on_format_specs` | `./format.h:3772` |

##### `fmt::v12::detail::write_padded` (`./format.h:1675`)

| Change |   Delta |            % |        Time | Samples | Caller                           | Location          |
| -----: | ------: | -----------: | ----------: | ------: | -------------------------------- | ----------------- |
|    new | +6.00ms | 0.0% → 75.0% | 0ms → 6.0ms |   0 → 6 | `fmt::v12::detail::write_padded` | `./format.h:1696` |
|    new | +2.00ms | 0.0% → 25.0% | 0ms → 2.0ms |   0 → 2 | `fmt::v12::detail::write`        | `./format.h:2159` |

##### `fmt::v12::detail::parse_format_specs()::{unnamed type#1}::operator()` (`./base.h:1476`)

| Change |   Delta |             % |        Time | Samples | Caller                                 | Location        |
| -----: | ------: | ------------: | ----------: | ------: | -------------------------------------- | --------------- |
|    new | +8.00ms | 0.0% → 100.0% | 0ms → 8.0ms |   0 → 8 | `fmt::v12::detail::parse_format_specs` | `./base.h:1461` |

##### `fmt::v12::detail::write_fixed` (`./format.h:2487`)

| Change |   Delta |            % |        Time | Samples | Caller                                              | Location          |
| -----: | ------: | -----------: | ----------: | ------: | --------------------------------------------------- | ----------------- |
|    new | +6.00ms | 0.0% → 75.0% | 0ms → 6.0ms |   0 → 6 | `fmt::v12::detail::write_float`                     | `./format.h:2592` |
|    new | +2.00ms | 0.0% → 25.0% | 0ms → 2.0ms |   0 → 2 | `fmt::v12::detail::format_handler::on_format_specs` | `./format.h:3772` |

##### `fmt::v12::detail::dragonbox::cache_accessor::get_cached_power` (`./format-inl.h:376`)

| Change |   Delta |            % |        Time | Samples | Caller                                          | Location              |
| -----: | ------: | -----------: | ----------: | ------: | ----------------------------------------------- | --------------------- |
|    new | +6.00ms | 0.0% → 75.0% | 0ms → 6.0ms |   0 → 6 | `fmt::v12::detail::dragonbox::get_cached_power` | `./format-inl.h:1146` |
|    new | +2.00ms | 0.0% → 25.0% | 0ms → 2.0ms |   0 → 2 | `fmt::v12::detail::write`                       | `./format.h:3434`     |

##### `std::__cxx11::basic_string::_M_dispose` (`<unknown>`)

|  Change |    Delta |             % |         Time | Samples | Caller                          | Location          |
| ------: | -------: | ------------: | -----------: | ------: | ------------------------------- | ----------------- |
|     new | +16.00ms | 0.0% → 100.0% | 0ms → 16.0ms |  0 → 16 | `fmt::v12::detail::write_float` | `./format.h:2592` |
| removed | -12.00ms | 100.0% → 0.0% | 12.0ms → 0ms |  12 → 0 | `fmt::v11::detail::write_float` | `./format.h:2452` |

##### `fmt::v11::detail::buffer::append` (`./base.h:1829`)

|  Change |    Delta |             % |         Time | Samples | Caller                   | Location        |
| ------: | -------: | ------------: | -----------: | ------: | ------------------------ | --------------- |
| removed | -77.00ms | 100.0% → 0.0% | 77.0ms → 0ms |  77 → 0 | `fmt::v11::detail::copy` | `./base.h:2041` |

##### `fmt::v11::detail::parse_format_specs` (`./base.h:1445`)

|  Change |    Delta |             % |         Time | Samples | Caller                                              | Location          |
| ------: | -------: | ------------: | -----------: | ------: | --------------------------------------------------- | ----------------- |
| removed | -52.00ms | 100.0% → 0.0% | 52.0ms → 0ms |  52 → 0 | `fmt::v11::detail::format_handler::on_format_specs` | `./format.h:3613` |

##### `fmt::v11::detail::utf8_decode` (`./format.h:556`)

|  Change |    Delta |             % |         Time | Samples | Caller                                                                                     | Location     |
| ------: | -------: | ------------: | -----------: | ------: | ------------------------------------------------------------------------------------------ | ------------ |
| removed | -38.00ms | 100.0% → 0.0% | 38.0ms → 0ms |  38 → 0 | `fmt::v11::detail::for_each_codepoint()::{lambda(char const*, char const*)#1}::operator()` | `./format.h` |

##### `fmt::v11::detail::parse_format_string` (`./base.h:1630`)

|  Change |    Delta |             % |         Time | Samples | Caller                         | Location              |
| ------: | -------: | ------------: | -----------: | ------: | ------------------------------ | --------------------- |
| removed | -31.00ms | 100.0% → 0.0% | 31.0ms → 0ms |  31 → 0 | `fmt::v11::detail::vformat_to` | `./format-inl.h:1452` |

##### `fmt::v11::detail::format_float` (`./format.h:2994`)

|  Change |    Delta |             % |         Time | Samples | Caller                          | Location          |
| ------: | -------: | ------------: | -----------: | ------: | ------------------------------- | ----------------- |
| removed | -26.00ms | 100.0% → 0.0% | 26.0ms → 0ms |  26 → 0 | `fmt::v11::detail::write_float` | `./format.h:3301` |

##### `fmt::v11::detail::parse_replacement_field` (`./base.h:1583`)

|  Change |    Delta |             % |         Time | Samples | Caller                                  | Location        |
| ------: | -------: | ------------: | -----------: | ------: | --------------------------------------- | --------------- |
| removed | -24.00ms | 100.0% → 0.0% | 24.0ms → 0ms |  24 → 0 | `fmt::v11::detail::parse_format_string` | `./base.h:1630` |

##### `fmt::v11::detail::copy_noinline` (`./format.h:534`)

|  Change |    Delta |            % |         Time | Samples | Caller                                                   | Location          |
| ------: | -------: | -----------: | -----------: | ------: | -------------------------------------------------------- | ----------------- |
| removed | -12.00ms | 54.5% → 0.0% | 12.0ms → 0ms |  12 → 0 | `fmt::v11::detail::format_handler::on_text`              | `./format.h:3593` |
| removed |  -5.00ms | 22.7% → 0.0% |  5.0ms → 0ms |   5 → 0 | `fmt::v11::detail::format_handler::on_replacement_field` | `./format.h:3609` |
| removed |  -2.00ms |  9.1% → 0.0% |  2.0ms → 0ms |   2 → 0 | `fmt::v11::detail::write_significand`                    | `./format.h:2302` |
| removed |  -2.00ms |  9.1% → 0.0% |  2.0ms → 0ms |   2 → 0 | `fmt::v11::format`                                       | `./format.h:4198` |
| removed |  -1.00ms |  4.5% → 0.0% |  1.0ms → 0ms |   1 → 0 | `fmt::v11::detail::parse_format_string`                  | `./base.h:1630`   |

##### `fmt::v11::basic_format_arg::visit` (`./base.h:2516`)

|  Change |    Delta |            % |         Time | Samples | Caller                                                   | Location          |
| ------: | -------: | -----------: | -----------: | ------: | -------------------------------------------------------- | ----------------- |
| removed | -13.00ms | 61.9% → 0.0% | 13.0ms → 0ms |  13 → 0 | `fmt::v11::detail::format_handler::on_format_specs`      | `./format.h:3613` |
| removed |  -6.00ms | 28.6% → 0.0% |  6.0ms → 0ms |   6 → 0 | `fmt::v11::detail::format_handler::on_replacement_field` | `./format.h:3609` |
| removed |  -2.00ms |  9.5% → 0.0% |  2.0ms → 0ms |   2 → 0 | `fmt::v11::detail::parse_replacement_field`              | `./base.h:1583`   |

##### `fmt::v11::detail::format_handler::on_format_specs` (`./format.h:3613`)

|  Change |    Delta |             % |         Time | Samples | Caller                                      | Location        |
| ------: | -------: | ------------: | -----------: | ------: | ------------------------------------------- | --------------- |
| removed | -21.00ms | 100.0% → 0.0% | 21.0ms → 0ms |  21 → 0 | `fmt::v11::detail::parse_replacement_field` | `./base.h:1583` |

##### `fmt::v11::detail::parse_nonnegative_int` (`./base.h:1296`)

|  Change |    Delta |             % |         Time | Samples | Caller                                 | Location        |
| ------: | -------: | ------------: | -----------: | ------: | -------------------------------------- | --------------- |
| removed | -19.00ms | 100.0% → 0.0% | 19.0ms → 0ms |  19 → 0 | `fmt::v11::detail::parse_dynamic_spec` | `./base.h:1384` |

##### `fmt::v11::detail::buffer::try_reserve` (`./base.h:1812`)

|  Change |    Delta |            % |         Time | Samples | Caller                                | Location         |
| ------: | -------: | -----------: | -----------: | ------: | ------------------------------------- | ---------------- |
| removed | -11.00ms | 64.7% → 0.0% | 11.0ms → 0ms |  11 → 0 | `fmt::v11::detail::buffer::append`    | `./base.h:1829`  |
| removed |  -4.00ms | 23.5% → 0.0% |  4.0ms → 0ms |   4 → 0 | `fmt::v11::detail::buffer::push_back` | `./base.h:1816`  |
| removed |  -2.00ms | 11.8% → 0.0% |  2.0ms → 0ms |   2 → 0 | `fmt::v11::detail::reserve`           | `./format.h:474` |

##### `fmt::v11::detail::buffer::push_back` (`./base.h:1816`)

|  Change |    Delta |             % |         Time | Samples | Caller                                | Location        |
| ------: | -------: | ------------: | -----------: | ------: | ------------------------------------- | --------------- |
| removed | -17.00ms | 100.0% → 0.0% | 17.0ms → 0ms |  17 → 0 | `fmt::v11::basic_appender::operator=` | `./base.h:2465` |

##### `fmt::v11::detail::compute_width()::count_code_points::operator()` (`./format.h:643`)

|  Change |    Delta |             % |         Time | Samples | Caller                                                                                     | Location     |
| ------: | -------: | ------------: | -----------: | ------: | ------------------------------------------------------------------------------------------ | ------------ |
| removed | -17.00ms | 100.0% → 0.0% | 17.0ms → 0ms |  17 → 0 | `fmt::v11::detail::for_each_codepoint()::{lambda(char const*, char const*)#1}::operator()` | `./format.h` |

##### `fmt::v11::detail::write_padded` (`./format.h:1631`)

|  Change |    Delta |            % |         Time | Samples | Caller                           | Location          |
| ------: | -------: | -----------: | -----------: | ------: | -------------------------------- | ----------------- |
| removed | -13.00ms | 81.3% → 0.0% | 13.0ms → 0ms |  13 → 0 | `fmt::v11::detail::write_padded` | `./format.h:1652` |
| removed |  -2.00ms | 12.5% → 0.0% |  2.0ms → 0ms |   2 → 0 | `fmt::v11::detail::write`        | `./format.h:2114` |
| removed |  -1.00ms |  6.3% → 0.0% |  1.0ms → 0ms |   1 → 0 | `fmt::v11::detail::write_float`  | `./format.h:2452` |

##### `fmt::v11::detail::write_float` (`./format.h:3301`)

|  Change |    Delta |            % |         Time | Samples | Caller                                              | Location          |
| ------: | -------: | -----------: | -----------: | ------: | --------------------------------------------------- | ----------------- |
| removed | -12.00ms | 85.7% → 0.0% | 12.0ms → 0ms |  12 → 0 | `fmt::v11::detail::write`                           | `./format.h:3357` |
| removed |  -2.00ms | 14.3% → 0.0% |  2.0ms → 0ms |   2 → 0 | `fmt::v11::detail::format_handler::on_format_specs` | `./format.h:3613` |

##### `cfree` (`<unknown>`)

| Change |    Delta |      % |           Time | Samples | Caller                             | Location                                       |
| -----: | -------: | -----: | -------------: | ------: | ---------------------------------- | ---------------------------------------------- |
| -92.9% | -13.00ms | 100.0% | 14.0ms → 1.0ms |  14 → 1 | `std::__new_allocator::deallocate` | `/usr/include/c++/12/bits/new_allocator.h:142` |

##### `fmt::v11::basic_format_args::get` (`./base.h:2618`)

|  Change |    Delta |             % |         Time | Samples | Caller                   | Location        |
| ------: | -------: | ------------: | -----------: | ------: | ------------------------ | --------------- |
| removed | -11.00ms | 100.0% → 0.0% | 11.0ms → 0ms |  11 → 0 | `fmt::v11::context::arg` | `./base.h:2680` |

##### `fmt::v11::detail::format_float()::{lambda(unsigned int, char*)#1}::operator()` (`./format.h`)

|  Change |    Delta |             % |         Time | Samples | Caller                           | Location          |
| ------: | -------: | ------------: | -----------: | ------: | -------------------------------- | ----------------- |
| removed | -11.00ms | 100.0% → 0.0% | 11.0ms → 0ms |  11 → 0 | `fmt::v11::detail::format_float` | `./format.h:2994` |

##### `fmt::v11::detail::parse_dynamic_spec` (`./base.h:1384`)

|  Change |   Delta |            % |        Time | Samples | Caller                                              | Location          |
| ------: | ------: | -----------: | ----------: | ------: | --------------------------------------------------- | ----------------- |
| removed | -7.00ms | 63.6% → 0.0% | 7.0ms → 0ms |   7 → 0 | `fmt::v11::detail::parse_width`                     | `./base.h:1417`   |
| removed | -4.00ms | 36.4% → 0.0% | 4.0ms → 0ms |   4 → 0 | `fmt::v11::detail::format_handler::on_format_specs` | `./format.h:3613` |

##### `fmt::v11::detail::do_write_float` (`./format.h:2333`)

|  Change |   Delta |            % |        Time | Samples | Caller                          | Location          |
| ------: | ------: | -----------: | ----------: | ------: | ------------------------------- | ----------------- |
| removed | -9.00ms | 90.0% → 0.0% | 9.0ms → 0ms |   9 → 0 | `fmt::v11::detail::write_float` | `./format.h:2452` |
| removed | -1.00ms | 10.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `fmt::v11::detail::write`       | `./format.h:3357` |

##### `fmt::v11::detail::to_unsigned` (`./base.h:437`)

|  Change |   Delta |            % |        Time | Samples | Caller                                         | Location          |
| ------: | ------: | -----------: | ----------: | ------: | ---------------------------------------------- | ----------------- |
| removed | -4.00ms | 44.4% → 0.0% | 4.0ms → 0ms |   4 → 0 | `fmt::v11::detail::buffer::append`             | `./base.h:1829`   |
| removed | -4.00ms | 44.4% → 0.0% | 4.0ms → 0ms |   4 → 0 | `fmt::v11::detail::do_format_decimal`          | `./format.h:1179` |
| removed | -1.00ms | 11.1% → 0.0% | 1.0ms → 0ms |   1 → 0 | `fmt::v11::detail::size_padding::size_padding` | `./format.h:2000` |

##### `(anonymous)` (`<unknown>`)

|  Change |    Delta |            % |         Time | Samples | Caller                                                   | Location              |
| ------: | -------: | -----------: | -----------: | ------: | -------------------------------------------------------- | --------------------- |
| removed | -28.00ms | 44.4% → 0.0% | 28.0ms → 0ms |  28 → 0 | `fmt::v11::vformat[abi:cxx11]`                           | `./format-inl.h:1442` |
|     new | +23.00ms | 0.0% → 37.1% | 0ms → 23.0ms |  0 → 23 | `fmt::v12::vformat[abi:cxx11]`                           | `./format-inl.h:1446` |
|     new | +14.00ms | 0.0% → 22.6% | 0ms → 14.0ms |  0 → 14 | `fmt::v12::detail::format_handler::on_format_specs`      | `./format.h:3772`     |
| removed | -13.00ms | 20.6% → 0.0% | 13.0ms → 0ms |  13 → 0 | `fmt::v11::detail::format_handler::on_replacement_field` | `./format.h:3609`     |
|     new | +13.00ms | 0.0% → 21.0% | 0ms → 13.0ms |  0 → 13 | `fmt::v12::detail::format_handler::on_replacement_field` | `./format.h:3768`     |

##### `__libc_malloc` (`<unknown>`)

|  Change |   Delta |              % |          Time | Samples | Caller                                     | Location                                        |
| ------: | ------: | -------------: | ------------: | ------: | ------------------------------------------ | ----------------------------------------------- |
|  -44.4% | -4.00ms | 90.0% → 100.0% | 9.0ms → 5.0ms |   9 → 5 | `operator new`                             | `<unknown>`                                     |
| removed | -1.00ms |   10.0% → 0.0% |   1.0ms → 0ms |   1 → 0 | `std::__cxx11::basic_string::_M_construct` | `/usr/include/c++/12/bits/basic_string.tcc:217` |

##### `std::__cxx11::basic_string::_M_create` (`<unknown>`)

|  Change |    Delta |             % |         Time | Samples | Caller                         | Location              |
| ------: | -------: | ------------: | -----------: | ------: | ------------------------------ | --------------------- |
| removed | -13.00ms | 100.0% → 0.0% | 13.0ms → 0ms |  13 → 0 | `fmt::v11::vformat[abi:cxx11]` | `./format-inl.h:1442` |
|     new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |  0 → 10 | `fmt::v12::vformat[abi:cxx11]` | `./format-inl.h:1446` |

##### `_init` (`<unknown>`)

|  Change |   Delta |            % |        Time | Samples | Caller                                                   | Location              |
| ------: | ------: | -----------: | ----------: | ------: | -------------------------------------------------------- | --------------------- |
| removed | -4.00ms | 57.1% → 0.0% | 4.0ms → 0ms |   4 → 0 | `fmt::v11::detail::write_float`                          | `./format.h:2452`     |
| removed | -2.00ms | 28.6% → 0.0% | 2.0ms → 0ms |   2 → 0 | `fmt::v11::detail::format_handler::on_format_specs`      | `./format.h:3613`     |
|     new | +2.00ms | 0.0% → 33.3% | 0ms → 2.0ms |   0 → 2 | `fmt::v12::detail::write_float`                          | `./format.h:2592`     |
| removed | -1.00ms | 14.3% → 0.0% | 1.0ms → 0ms |   1 → 0 | `fmt::v11::detail::format_handler::on_replacement_field` | `./format.h:3609`     |
|     new | +1.00ms | 0.0% → 16.7% | 0ms → 1.0ms |   0 → 1 | `fmt::v12::vformat[abi:cxx11]`                           | `./format-inl.h:1446` |

##### `std::__cxx11::basic_string::~basic_string` (`/usr/include/c++/12/bits/basic_string.h:794`)

|  Change |   Delta |             % |        Time | Samples | Caller                                              | Location          |
| ------: | ------: | ------------: | ----------: | ------: | --------------------------------------------------- | ----------------- |
| removed | -5.00ms | 100.0% → 0.0% | 5.0ms → 0ms |   5 → 0 | `fmt::v11::detail::digit_grouping::~digit_grouping` | `./format.h:1822` |
|     new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `fmt::v12::detail::digit_grouping::~digit_grouping` | `./format.h:1856` |

##### `std::__cxx11::basic_string::_M_data` (`/usr/include/c++/12/bits/basic_string.h:233`)

|  Change |   Delta |            % |        Time | Samples | Caller                                      | Location                                      |
| ------: | ------: | -----------: | ----------: | ------: | ------------------------------------------- | --------------------------------------------- |
| removed | -3.00ms | 75.0% → 0.0% | 3.0ms → 0ms |   3 → 0 | `std::__cxx11::basic_string::_M_set_length` | `/usr/include/c++/12/bits/basic_string.h:265` |
| removed | -1.00ms | 25.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `std::__cxx11::basic_string::_M_is_local`   | `/usr/include/c++/12/bits/basic_string.h:273` |

##### `std::__cxx11::basic_string::_M_construct` (`/usr/include/c++/12/bits/basic_string.tcc:217`)

|  Change |   Delta |             % |        Time | Samples | Caller                                     | Location                                      |
| ------: | ------: | ------------: | ----------: | ------: | ------------------------------------------ | --------------------------------------------- |
| removed | -3.00ms | 100.0% → 0.0% | 3.0ms → 0ms |   3 → 0 | `std::__cxx11::basic_string::basic_string` | `/usr/include/c++/12/bits/basic_string.h:612` |

##### `std::char_traits::copy` (`/usr/include/c++/12/bits/char_traits.h:423`)

| Change |   Delta |      % |          Time | Samples | Caller                                | Location                                      |
| -----: | ------: | -----: | ------------: | ------: | ------------------------------------- | --------------------------------------------- |
| -33.3% | -1.00ms | 100.0% | 3.0ms → 2.0ms |   3 → 2 | `std::__cxx11::basic_string::_S_copy` | `/usr/include/c++/12/bits/basic_string.h:418` |

##### `std::__cxx11::basic_string::_Alloc_hider::_Alloc_hider` (`/usr/include/c++/12/bits/basic_string.h:199`)

| Change |   Delta |      % |          Time | Samples | Caller                                     | Location                                      |
| -----: | ------: | -----: | ------------: | ------: | ------------------------------------------ | --------------------------------------------- |
| -50.0% | -1.00ms | 100.0% | 2.0ms → 1.0ms |   2 → 1 | `std::__cxx11::basic_string::basic_string` | `/usr/include/c++/12/bits/basic_string.h:612` |

##### `std::__cxx11::basic_string::_M_destroy` (`/usr/include/c++/12/bits/basic_string.h:291`)

| Change |   Delta |      % |          Time | Samples | Caller                                   | Location                                      |
| -----: | ------: | -----: | ------------: | ------: | ---------------------------------------- | --------------------------------------------- |
| -50.0% | -1.00ms | 100.0% | 2.0ms → 1.0ms |   2 → 1 | `std::__cxx11::basic_string::_M_dispose` | `/usr/include/c++/12/bits/basic_string.h:283` |

##### `std::__cxx11::basic_string::_M_dispose` (`/usr/include/c++/12/bits/basic_string.h:283`)

|  Change |   Delta |             % |        Time | Samples | Caller                                      | Location                                      |
| ------: | ------: | ------------: | ----------: | ------: | ------------------------------------------- | --------------------------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `std::__cxx11::basic_string::~basic_string` | `/usr/include/c++/12/bits/basic_string.h:794` |

##### `std::__cxx11::basic_string::_M_length` (`/usr/include/c++/12/bits/basic_string.h:228`)

|  Change |   Delta |             % |        Time | Samples | Caller                                      | Location                                      |
| ------: | ------: | ------------: | ----------: | ------: | ------------------------------------------- | --------------------------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `std::__cxx11::basic_string::_M_set_length` | `/usr/include/c++/12/bits/basic_string.h:265` |

### Total time

#### Regressions

Functions with the largest increase in time spent within the function and its callees. Categories account for at least 1.0% of self time on the base or the current side.

##### Ours

| Change |     Delta |            % |          Time | Samples | Function                                                                                   | Location              |
| -----: | --------: | -----------: | ------------: | ------: | ------------------------------------------------------------------------------------------ | --------------------- |
|    new | +570.00ms | 0.0% → 95.3% | 0ms → 570.0ms | 0 → 570 | `fmt::v12::format`                                                                         | `./format.h:4335`     |
|    new | +567.00ms | 0.0% → 94.8% | 0ms → 567.0ms | 0 → 567 | `fmt::v12::vformat[abi:cxx11]`                                                             | `./format-inl.h:1446` |
|    new | +514.00ms | 0.0% → 86.0% | 0ms → 514.0ms | 0 → 514 | `fmt::v12::detail::parse_format_string`                                                    | `./base.h:1646`       |
|    new | +514.00ms | 0.0% → 86.0% | 0ms → 514.0ms | 0 → 514 | `fmt::v12::detail::vformat_to`                                                             | `./format-inl.h:1456` |
|    new | +444.00ms | 0.0% → 74.2% | 0ms → 444.0ms | 0 → 444 | `fmt::v12::detail::parse_replacement_field`                                                | `./base.h:1599`       |
|    new | +382.00ms | 0.0% → 63.9% | 0ms → 382.0ms | 0 → 382 | `fmt::v12::detail::format_handler::on_format_specs`                                        | `./format.h:3772`     |
|    new | +113.00ms | 0.0% → 18.9% | 0ms → 113.0ms | 0 → 113 | `fmt::v12::detail::write`                                                                  | `./format.h:3434`     |
|    new |  +90.00ms | 0.0% → 15.1% |  0ms → 90.0ms |  0 → 90 | `fmt::v12::detail::write`                                                                  | `./format.h:2159`     |
|    new |  +79.00ms | 0.0% → 13.2% |  0ms → 79.0ms |  0 → 79 | `fmt::v12::detail::write_padded`                                                           | `./format.h:1675`     |
|    new |  +73.00ms | 0.0% → 12.2% |  0ms → 73.0ms |  0 → 73 | `fmt::v12::detail::parse_format_specs`                                                     | `./base.h:1461`       |
|    new |  +71.00ms | 0.0% → 11.9% |  0ms → 71.0ms |  0 → 71 | `fmt::v12::detail::copy_noinline`                                                          | `./format.h:568`      |
|    new |  +66.00ms | 0.0% → 11.0% |  0ms → 66.0ms |  0 → 66 | `fmt::v12::detail::write_float`                                                            | `./format.h:2592`     |
|    new |  +65.00ms | 0.0% → 10.9% |  0ms → 65.0ms |  0 → 65 | `fmt::v12::detail::for_each_codepoint`                                                     | `./format.h:632`      |
|    new |  +62.00ms | 0.0% → 10.4% |  0ms → 62.0ms |  0 → 62 | `fmt::v12::detail::copy`                                                                   | `./base.h:2068`       |
|    new |  +60.00ms | 0.0% → 10.0% |  0ms → 60.0ms |  0 → 60 | `fmt::v12::detail::buffer::append`                                                         | `./base.h:1845`       |
|    new |  +59.00ms |  0.0% → 9.9% |  0ms → 59.0ms |  0 → 59 | `fmt::v12::detail::write_padded`                                                           | `./format.h:1696`     |
|    new |  +55.00ms |  0.0% → 9.2% |  0ms → 55.0ms |  0 → 55 | `fmt::v12::detail::write_int`                                                              | `./format.h:2050`     |
|    new |  +53.00ms |  0.0% → 8.9% |  0ms → 53.0ms |  0 → 53 | `fmt::v12::detail::for_each_codepoint()::{lambda(char const*, char const*)#1}::operator()` | `./format.h`          |
|    new |  +45.00ms |  0.0% → 7.5% |  0ms → 45.0ms |  0 → 45 | `fmt::v12::detail::write_fixed`                                                            | `./format.h:2487`     |
|    new |  +43.00ms |  0.0% → 7.2% |  0ms → 43.0ms |  0 → 43 | `fmt::v12::detail::format_handler::on_text`                                                | `./format.h:3752`     |

##### Native

| Change |   Delta |           % |            Time | Samples | Function                                 | Location    |
| -----: | ------: | ----------: | --------------: | ------: | ---------------------------------------- | ----------- |
| +33.3% | +4.00ms | 1.5% → 2.7% | 12.0ms → 16.0ms | 12 → 16 | `std::__cxx11::basic_string::_M_dispose` | `<unknown>` |

#### Improvements

Functions with the largest decrease in time spent within the function and its callees. Categories account for at least 1.0% of self time on the base or the current side.

|  Change |     Delta |             % |              Time |   Samples | Function                                            | Location              |
| ------: | --------: | ------------: | ----------------: | --------: | --------------------------------------------------- | --------------------- |
| removed | -748.00ms |  94.4% → 0.0% |     748.0ms → 0ms |   748 → 0 | `fmt::v11::format`                                  | `./format.h:4198`     |
| removed | -747.00ms |  94.3% → 0.0% |     747.0ms → 0ms |   747 → 0 | `fmt::v11::vformat[abi:cxx11]`                      | `./format-inl.h:1442` |
| removed | -672.00ms |  84.8% → 0.0% |     672.0ms → 0ms |   672 → 0 | `fmt::v11::detail::vformat_to`                      | `./format-inl.h:1452` |
| removed | -671.00ms |  84.7% → 0.0% |     671.0ms → 0ms |   671 → 0 | `fmt::v11::detail::parse_format_string`             | `./base.h:1630`       |
| removed | -592.00ms |  74.7% → 0.0% |     592.0ms → 0ms |   592 → 0 | `fmt::v11::detail::parse_replacement_field`         | `./base.h:1583`       |
| removed | -497.00ms |  62.8% → 0.0% |     497.0ms → 0ms |   497 → 0 | `fmt::v11::detail::format_handler::on_format_specs` | `./format.h:3613`     |
| removed | -208.00ms |  26.3% → 0.0% |     208.0ms → 0ms |   208 → 0 | `fmt::v11::basic_format_arg::visit`                 | `./base.h:2516`       |
|  -25.2% | -195.00ms | 97.7% → 96.8% | 774.0ms → 579.0ms | 774 → 579 | `main`                                              | `/out/profile.cpp:8`  |
|  -24.5% | -194.00ms |        100.0% | 792.0ms → 598.0ms | 792 → 598 | `(anonymous)`                                       | `<unknown>`           |
|  -24.5% | -194.00ms |        100.0% | 792.0ms → 598.0ms | 792 → 598 | `__libc_start_main`                                 | `<unknown>`           |
|  -24.5% | -194.00ms |        100.0% | 792.0ms → 598.0ms | 792 → 598 | `_start`                                            | `<unknown>`           |
| removed | -181.00ms |  22.9% → 0.0% |     181.0ms → 0ms |   181 → 0 | `fmt::v11::detail::arg_formatter::operator()`       | `./format.h:3498`     |
| removed | -163.00ms |  20.6% → 0.0% |     163.0ms → 0ms |   163 → 0 | `fmt::v11::detail::write`                           | `./format.h:3357`     |
| removed | -159.00ms |  20.1% → 0.0% |     159.0ms → 0ms |   159 → 0 | `fmt::v11::detail::write_float`                     | `./format.h:3301`     |
| removed | -103.00ms |  13.0% → 0.0% |     103.0ms → 0ms |   103 → 0 | `fmt::v11::detail::parse_format_specs`              | `./base.h:1445`       |
| removed | -101.00ms |  12.8% → 0.0% |     101.0ms → 0ms |   101 → 0 | `fmt::v11::detail::write_padded`                    | `./format.h:1631`     |
| removed |  -92.00ms |  11.6% → 0.0% |      92.0ms → 0ms |    92 → 0 | `fmt::v11::detail::buffer::append`                  | `./base.h:1829`       |
| removed |  -92.00ms |  11.6% → 0.0% |      92.0ms → 0ms |    92 → 0 | `fmt::v11::detail::copy`                            | `./base.h:2041`       |
| removed |  -87.00ms |  11.0% → 0.0% |      87.0ms → 0ms |    87 → 0 | `fmt::v11::detail::copy_noinline`                   | `./format.h:534`      |
| removed |  -85.00ms |  10.7% → 0.0% |      85.0ms → 0ms |    85 → 0 | `fmt::v11::detail::write`                           | `./format.h:2114`     |

##### Ours

|  Change |     Delta |             % |              Time |   Samples | Function                                            | Location              |
| ------: | --------: | ------------: | ----------------: | --------: | --------------------------------------------------- | --------------------- |
| removed | -748.00ms |  94.4% → 0.0% |     748.0ms → 0ms |   748 → 0 | `fmt::v11::format`                                  | `./format.h:4198`     |
| removed | -747.00ms |  94.3% → 0.0% |     747.0ms → 0ms |   747 → 0 | `fmt::v11::vformat[abi:cxx11]`                      | `./format-inl.h:1442` |
| removed | -672.00ms |  84.8% → 0.0% |     672.0ms → 0ms |   672 → 0 | `fmt::v11::detail::vformat_to`                      | `./format-inl.h:1452` |
| removed | -671.00ms |  84.7% → 0.0% |     671.0ms → 0ms |   671 → 0 | `fmt::v11::detail::parse_format_string`             | `./base.h:1630`       |
| removed | -592.00ms |  74.7% → 0.0% |     592.0ms → 0ms |   592 → 0 | `fmt::v11::detail::parse_replacement_field`         | `./base.h:1583`       |
| removed | -497.00ms |  62.8% → 0.0% |     497.0ms → 0ms |   497 → 0 | `fmt::v11::detail::format_handler::on_format_specs` | `./format.h:3613`     |
| removed | -208.00ms |  26.3% → 0.0% |     208.0ms → 0ms |   208 → 0 | `fmt::v11::basic_format_arg::visit`                 | `./base.h:2516`       |
|  -25.2% | -195.00ms | 97.7% → 96.8% | 774.0ms → 579.0ms | 774 → 579 | `main`                                              | `/out/profile.cpp:8`  |
| removed | -181.00ms |  22.9% → 0.0% |     181.0ms → 0ms |   181 → 0 | `fmt::v11::detail::arg_formatter::operator()`       | `./format.h:3498`     |
| removed | -163.00ms |  20.6% → 0.0% |     163.0ms → 0ms |   163 → 0 | `fmt::v11::detail::write`                           | `./format.h:3357`     |
| removed | -159.00ms |  20.1% → 0.0% |     159.0ms → 0ms |   159 → 0 | `fmt::v11::detail::write_float`                     | `./format.h:3301`     |
| removed | -103.00ms |  13.0% → 0.0% |     103.0ms → 0ms |   103 → 0 | `fmt::v11::detail::parse_format_specs`              | `./base.h:1445`       |
| removed | -101.00ms |  12.8% → 0.0% |     101.0ms → 0ms |   101 → 0 | `fmt::v11::detail::write_padded`                    | `./format.h:1631`     |
| removed |  -92.00ms |  11.6% → 0.0% |      92.0ms → 0ms |    92 → 0 | `fmt::v11::detail::buffer::append`                  | `./base.h:1829`       |
| removed |  -92.00ms |  11.6% → 0.0% |      92.0ms → 0ms |    92 → 0 | `fmt::v11::detail::copy`                            | `./base.h:2041`       |
| removed |  -87.00ms |  11.0% → 0.0% |      87.0ms → 0ms |    87 → 0 | `fmt::v11::detail::copy_noinline`                   | `./format.h:534`      |
| removed |  -85.00ms |  10.7% → 0.0% |      85.0ms → 0ms |    85 → 0 | `fmt::v11::detail::write`                           | `./format.h:2114`     |
| removed |  -80.00ms |  10.1% → 0.0% |      80.0ms → 0ms |    80 → 0 | `fmt::v11::detail::write_float`                     | `./format.h:2452`     |
| removed |  -79.00ms |  10.0% → 0.0% |      79.0ms → 0ms |    79 → 0 | `fmt::v11::detail::write_padded`                    | `./format.h:1652`     |
| removed |  -63.00ms |   8.0% → 0.0% |      63.0ms → 0ms |    63 → 0 | `fmt::v11::detail::do_write_float`                  | `./format.h:2333`     |

##### Unknown

| Change |     Delta |      % |              Time |   Samples | Function      | Location    |
| -----: | --------: | -----: | ----------------: | --------: | ------------- | ----------- |
| -24.5% | -194.00ms | 100.0% | 792.0ms → 598.0ms | 792 → 598 | `(anonymous)` | `<unknown>` |

##### Native

| Change |     Delta |           % |              Time |   Samples | Function                                | Location    |
| -----: | --------: | ----------: | ----------------: | --------: | --------------------------------------- | ----------- |
| -24.5% | -194.00ms |      100.0% | 792.0ms → 598.0ms | 792 → 598 | `__libc_start_main`                     | `<unknown>` |
| -24.5% | -194.00ms |      100.0% | 792.0ms → 598.0ms | 792 → 598 | `_start`                                | `<unknown>` |
| -66.7% |  -14.00ms | 2.7% → 1.2% |    21.0ms → 7.0ms |    21 → 7 | `cfree`                                 | `<unknown>` |
| -50.0% |   -5.00ms | 1.3% → 0.8% |    10.0ms → 5.0ms |    10 → 5 | `__libc_malloc`                         | `<unknown>` |
| -36.4% |   -4.00ms | 1.4% → 1.2% |    11.0ms → 7.0ms |    11 → 7 | `operator new`                          | `<unknown>` |
| -23.1% |   -3.00ms | 1.6% → 1.7% |   13.0ms → 10.0ms |   13 → 10 | `std::__cxx11::basic_string::_M_create` | `<unknown>` |
| -14.3% |   -1.00ms | 0.9% → 1.0% |     7.0ms → 6.0ms |     7 → 6 | `_init`                                 | `<unknown>` |

##### Standard library

|  Change |    Delta |           % |            Time | Samples | Function                                                 | Location                                        |
| ------: | -------: | ----------: | --------------: | ------: | -------------------------------------------------------- | ----------------------------------------------- |
|  -70.0% | -21.00ms | 3.8% → 1.5% |  30.0ms → 9.0ms |  30 → 9 | `std::__cxx11::basic_string::~basic_string`              | `/usr/include/c++/12/bits/basic_string.h:794`   |
|  -68.0% | -17.00ms | 3.2% → 1.3% |  25.0ms → 8.0ms |  25 → 8 | `std::__cxx11::basic_string::_M_dispose`                 | `/usr/include/c++/12/bits/basic_string.h:283`   |
|  -65.2% | -15.00ms | 2.9% → 1.3% |  23.0ms → 8.0ms |  23 → 8 | `std::__cxx11::basic_string::_M_destroy`                 | `/usr/include/c++/12/bits/basic_string.h:291`   |
|  -66.7% | -14.00ms | 2.7% → 1.2% |  21.0ms → 7.0ms |  21 → 7 | `std::__new_allocator::deallocate`                       | `/usr/include/c++/12/bits/new_allocator.h:142`  |
|  -66.7% | -14.00ms | 2.7% → 1.2% |  21.0ms → 7.0ms |  21 → 7 | `std::allocator_traits::deallocate`                      | `/usr/include/c++/12/bits/alloc_traits.h:495`   |
|  -54.2% | -13.00ms | 3.0% → 1.8% | 24.0ms → 11.0ms | 24 → 11 | `std::__cxx11::basic_string::basic_string`               | `/usr/include/c++/12/bits/basic_string.h:612`   |
|  -54.5% | -12.00ms | 2.8% → 1.7% | 22.0ms → 10.0ms | 22 → 10 | `std::__cxx11::basic_string::_M_construct`               | `/usr/include/c++/12/bits/basic_string.tcc:217` |
| removed |  -4.00ms | 0.5% → 0.0% |     4.0ms → 0ms |   4 → 0 | `std::__cxx11::basic_string::_M_data`                    | `/usr/include/c++/12/bits/basic_string.h:233`   |
|  -57.1% |  -4.00ms | 0.9% → 0.5% |   7.0ms → 3.0ms |   7 → 3 | `std::__cxx11::basic_string::_M_set_length`              | `/usr/include/c++/12/bits/basic_string.h:265`   |
|  -33.3% |  -1.00ms | 0.4% → 0.3% |   3.0ms → 2.0ms |   3 → 2 | `std::char_traits::copy`                                 | `/usr/include/c++/12/bits/char_traits.h:423`    |
|  -33.3% |  -1.00ms | 0.4% → 0.3% |   3.0ms → 2.0ms |   3 → 2 | `std::__cxx11::basic_string::_S_copy`                    | `/usr/include/c++/12/bits/basic_string.h:418`   |
|  -33.3% |  -1.00ms | 0.4% → 0.3% |   3.0ms → 2.0ms |   3 → 2 | `std::__cxx11::basic_string::_S_copy_chars`              | `/usr/include/c++/12/bits/basic_string.h:475`   |
|  -50.0% |  -1.00ms | 0.3% → 0.2% |   2.0ms → 1.0ms |   2 → 1 | `std::__cxx11::basic_string::_Alloc_hider::_Alloc_hider` | `/usr/include/c++/12/bits/basic_string.h:199`   |
| removed |  -1.00ms | 0.1% → 0.0% |     1.0ms → 0ms |   1 → 0 | `std::__cxx11::basic_string::_M_is_local`                | `/usr/include/c++/12/bits/basic_string.h:273`   |
| removed |  -1.00ms | 0.1% → 0.0% |     1.0ms → 0ms |   1 → 0 | `std::__cxx11::basic_string::_M_length`                  | `/usr/include/c++/12/bits/basic_string.h:228`   |

#### Callers

Callers with the largest change in contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `fmt::v12::format` (`./format.h:4335`)

| Change |     Delta |             % |          Time | Samples | Caller | Location             |
| -----: | --------: | ------------: | ------------: | ------: | ------ | -------------------- |
|    new | +570.00ms | 0.0% → 100.0% | 0ms → 570.0ms | 0 → 570 | `main` | `/out/profile.cpp:8` |

##### `fmt::v12::vformat[abi:cxx11]` (`./format-inl.h:1446`)

| Change |     Delta |             % |          Time | Samples | Caller             | Location          |
| -----: | --------: | ------------: | ------------: | ------: | ------------------ | ----------------- |
|    new | +567.00ms | 0.0% → 100.0% | 0ms → 567.0ms | 0 → 567 | `fmt::v12::format` | `./format.h:4335` |

##### `fmt::v12::detail::parse_format_string` (`./base.h:1646`)

| Change |     Delta |             % |          Time | Samples | Caller                         | Location              |
| -----: | --------: | ------------: | ------------: | ------: | ------------------------------ | --------------------- |
|    new | +514.00ms | 0.0% → 100.0% | 0ms → 514.0ms | 0 → 514 | `fmt::v12::detail::vformat_to` | `./format-inl.h:1456` |

##### `fmt::v12::detail::vformat_to` (`./format-inl.h:1456`)

| Change |     Delta |             % |          Time | Samples | Caller                         | Location              |
| -----: | --------: | ------------: | ------------: | ------: | ------------------------------ | --------------------- |
|    new | +514.00ms | 0.0% → 100.0% | 0ms → 514.0ms | 0 → 514 | `fmt::v12::vformat[abi:cxx11]` | `./format-inl.h:1446` |

##### `fmt::v12::detail::parse_replacement_field` (`./base.h:1599`)

| Change |     Delta |             % |          Time | Samples | Caller                                  | Location        |
| -----: | --------: | ------------: | ------------: | ------: | --------------------------------------- | --------------- |
|    new | +444.00ms | 0.0% → 100.0% | 0ms → 444.0ms | 0 → 444 | `fmt::v12::detail::parse_format_string` | `./base.h:1646` |

##### `fmt::v12::detail::format_handler::on_format_specs` (`./format.h:3772`)

| Change |     Delta |             % |          Time | Samples | Caller                                      | Location        |
| -----: | --------: | ------------: | ------------: | ------: | ------------------------------------------- | --------------- |
|    new | +382.00ms | 0.0% → 100.0% | 0ms → 382.0ms | 0 → 382 | `fmt::v12::detail::parse_replacement_field` | `./base.h:1599` |

##### `fmt::v12::detail::write` (`./format.h:3434`)

| Change |     Delta |            % |          Time | Samples | Caller                                              | Location          |
| -----: | --------: | -----------: | ------------: | ------: | --------------------------------------------------- | ----------------- |
|    new | +111.00ms | 0.0% → 98.2% | 0ms → 111.0ms | 0 → 111 | `fmt::v12::detail::format_handler::on_format_specs` | `./format.h:3772` |
|    new |   +2.00ms |  0.0% → 1.8% |   0ms → 2.0ms |   0 → 2 | `fmt::v12::detail::parse_format_string`             | `./base.h:1646`   |

##### `fmt::v12::detail::write` (`./format.h:2159`)

| Change |    Delta |             % |         Time | Samples | Caller                                              | Location          |
| -----: | -------: | ------------: | -----------: | ------: | --------------------------------------------------- | ----------------- |
|    new | +90.00ms | 0.0% → 100.0% | 0ms → 90.0ms |  0 → 90 | `fmt::v12::detail::format_handler::on_format_specs` | `./format.h:3772` |

##### `fmt::v12::detail::write_padded` (`./format.h:1675`)

| Change |    Delta |            % |         Time | Samples | Caller                           | Location          |
| -----: | -------: | -----------: | -----------: | ------: | -------------------------------- | ----------------- |
|    new | +59.00ms | 0.0% → 74.7% | 0ms → 59.0ms |  0 → 59 | `fmt::v12::detail::write_padded` | `./format.h:1696` |
|    new | +20.00ms | 0.0% → 25.3% | 0ms → 20.0ms |  0 → 20 | `fmt::v12::detail::write`        | `./format.h:2159` |

##### `fmt::v12::detail::parse_format_specs` (`./base.h:1461`)

| Change |    Delta |             % |         Time | Samples | Caller                                              | Location          |
| -----: | -------: | ------------: | -----------: | ------: | --------------------------------------------------- | ----------------- |
|    new | +73.00ms | 0.0% → 100.0% | 0ms → 73.0ms |  0 → 73 | `fmt::v12::detail::format_handler::on_format_specs` | `./format.h:3772` |

##### `fmt::v12::detail::copy_noinline` (`./format.h:568`)

| Change |    Delta |            % |         Time | Samples | Caller                                                   | Location          |
| -----: | -------: | -----------: | -----------: | ------: | -------------------------------------------------------- | ----------------- |
|    new | +42.00ms | 0.0% → 59.2% | 0ms → 42.0ms |  0 → 42 | `fmt::v12::detail::format_handler::on_text`              | `./format.h:3752` |
|    new | +20.00ms | 0.0% → 28.2% | 0ms → 20.0ms |  0 → 20 | `fmt::v12::detail::format_handler::on_replacement_field` | `./format.h:3768` |
|    new |  +9.00ms | 0.0% → 12.7% |  0ms → 9.0ms |   0 → 9 | `fmt::v12::detail::write_significand`                    | `./format.h:2428` |

##### `fmt::v12::detail::write_float` (`./format.h:2592`)

| Change |    Delta |             % |         Time | Samples | Caller                    | Location          |
| -----: | -------: | ------------: | -----------: | ------: | ------------------------- | ----------------- |
|    new | +66.00ms | 0.0% → 100.0% | 0ms → 66.0ms |  0 → 66 | `fmt::v12::detail::write` | `./format.h:3434` |

##### `fmt::v12::detail::for_each_codepoint` (`./format.h:632`)

| Change |    Delta |             % |         Time | Samples | Caller                    | Location          |
| -----: | -------: | ------------: | -----------: | ------: | ------------------------- | ----------------- |
|    new | +65.00ms | 0.0% → 100.0% | 0ms → 65.0ms |  0 → 65 | `fmt::v12::detail::write` | `./format.h:2159` |

##### `fmt::v12::detail::copy` (`./base.h:2068`)

| Change |    Delta |            % |         Time | Samples | Caller                                                                            | Location          |
| -----: | -------: | -----------: | -----------: | ------: | --------------------------------------------------------------------------------- | ----------------- |
|    new | +43.00ms | 0.0% → 69.4% | 0ms → 43.0ms |  0 → 43 | `fmt::v12::detail::copy_noinline`                                                 | `./format.h:568`  |
|    new |  +9.00ms | 0.0% → 14.5% |  0ms → 9.0ms |   0 → 9 | `fmt::v12::detail::write()::{lambda(fmt::v12::basic_appender)#2}::operator()`     | `./format.h`      |
|    new |  +9.00ms | 0.0% → 14.5% |  0ms → 9.0ms |   0 → 9 | `fmt::v12::detail::write_int()::{lambda(fmt::v12::basic_appender)#1}::operator()` | `./format.h`      |
|    new |  +1.00ms |  0.0% → 1.6% |  0ms → 1.0ms |   0 → 1 | `fmt::v12::detail::write_significand`                                             | `./format.h:2370` |

##### `fmt::v12::detail::buffer::append` (`./base.h:1845`)

| Change |    Delta |             % |         Time | Samples | Caller                   | Location        |
| -----: | -------: | ------------: | -----------: | ------: | ------------------------ | --------------- |
|    new | +60.00ms | 0.0% → 100.0% | 0ms → 60.0ms |  0 → 60 | `fmt::v12::detail::copy` | `./base.h:2068` |

##### `fmt::v12::detail::write_padded` (`./format.h:1696`)

| Change |    Delta |            % |         Time | Samples | Caller                          | Location          |
| -----: | -------: | -----------: | -----------: | ------: | ------------------------------- | ----------------- |
|    new | +33.00ms | 0.0% → 55.9% | 0ms → 33.0ms |  0 → 33 | `fmt::v12::detail::write_fixed` | `./format.h:2487` |
|    new | +26.00ms | 0.0% → 44.1% | 0ms → 26.0ms |  0 → 26 | `fmt::v12::detail::write_int`   | `./format.h:2050` |

##### `fmt::v12::detail::write_int` (`./format.h:2050`)

| Change |    Delta |             % |         Time | Samples | Caller                                              | Location          |
| -----: | -------: | ------------: | -----------: | ------: | --------------------------------------------------- | ----------------- |
|    new | +55.00ms | 0.0% → 100.0% | 0ms → 55.0ms |  0 → 55 | `fmt::v12::detail::format_handler::on_format_specs` | `./format.h:3772` |

##### `fmt::v12::detail::for_each_codepoint()::{lambda(char const*, char const*)#1}::operator()` (`./format.h`)

| Change |    Delta |             % |         Time | Samples | Caller                                 | Location         |
| -----: | -------: | ------------: | -----------: | ------: | -------------------------------------- | ---------------- |
|    new | +53.00ms | 0.0% → 100.0% | 0ms → 53.0ms |  0 → 53 | `fmt::v12::detail::for_each_codepoint` | `./format.h:632` |

##### `fmt::v12::detail::write_fixed` (`./format.h:2487`)

| Change |    Delta |            % |         Time | Samples | Caller                                              | Location          |
| -----: | -------: | -----------: | -----------: | ------: | --------------------------------------------------- | ----------------- |
|    new | +43.00ms | 0.0% → 95.6% | 0ms → 43.0ms |  0 → 43 | `fmt::v12::detail::write_float`                     | `./format.h:2592` |
|    new |  +2.00ms |  0.0% → 4.4% |  0ms → 2.0ms |   0 → 2 | `fmt::v12::detail::format_handler::on_format_specs` | `./format.h:3772` |

##### `fmt::v12::detail::format_handler::on_text` (`./format.h:3752`)

| Change |    Delta |             % |         Time | Samples | Caller                                  | Location        |
| -----: | -------: | ------------: | -----------: | ------: | --------------------------------------- | --------------- |
|    new | +43.00ms | 0.0% → 100.0% | 0ms → 43.0ms |  0 → 43 | `fmt::v12::detail::parse_format_string` | `./base.h:1646` |

##### `std::__cxx11::basic_string::_M_dispose` (`<unknown>`)

|  Change |    Delta |             % |         Time | Samples | Caller                          | Location          |
| ------: | -------: | ------------: | -----------: | ------: | ------------------------------- | ----------------- |
|     new | +16.00ms | 0.0% → 100.0% | 0ms → 16.0ms |  0 → 16 | `fmt::v12::detail::write_float` | `./format.h:2592` |
| removed | -12.00ms | 100.0% → 0.0% | 12.0ms → 0ms |  12 → 0 | `fmt::v11::detail::write_float` | `./format.h:2452` |

##### `fmt::v11::format` (`./format.h:4198`)

|  Change |     Delta |             % |          Time | Samples | Caller | Location             |
| ------: | --------: | ------------: | ------------: | ------: | ------ | -------------------- |
| removed | -748.00ms | 100.0% → 0.0% | 748.0ms → 0ms | 748 → 0 | `main` | `/out/profile.cpp:8` |

##### `fmt::v11::vformat[abi:cxx11]` (`./format-inl.h:1442`)

|  Change |     Delta |            % |          Time | Samples | Caller             | Location          |
| ------: | --------: | -----------: | ------------: | ------: | ------------------ | ----------------- |
| removed | -745.00ms | 99.7% → 0.0% | 745.0ms → 0ms | 745 → 0 | `fmt::v11::format` | `./format.h:4198` |
| removed |   -2.00ms |  0.3% → 0.0% |   2.0ms → 0ms |   2 → 0 | `(anonymous)`      | `<unknown>`       |

##### `fmt::v11::detail::vformat_to` (`./format-inl.h:1452`)

|  Change |     Delta |             % |          Time | Samples | Caller                         | Location              |
| ------: | --------: | ------------: | ------------: | ------: | ------------------------------ | --------------------- |
| removed | -672.00ms | 100.0% → 0.0% | 672.0ms → 0ms | 672 → 0 | `fmt::v11::vformat[abi:cxx11]` | `./format-inl.h:1442` |

##### `fmt::v11::detail::parse_format_string` (`./base.h:1630`)

|  Change |     Delta |             % |          Time | Samples | Caller                         | Location              |
| ------: | --------: | ------------: | ------------: | ------: | ------------------------------ | --------------------- |
| removed | -671.00ms | 100.0% → 0.0% | 671.0ms → 0ms | 671 → 0 | `fmt::v11::detail::vformat_to` | `./format-inl.h:1452` |

##### `fmt::v11::detail::parse_replacement_field` (`./base.h:1583`)

|  Change |     Delta |             % |          Time | Samples | Caller                                  | Location        |
| ------: | --------: | ------------: | ------------: | ------: | --------------------------------------- | --------------- |
| removed | -592.00ms | 100.0% → 0.0% | 592.0ms → 0ms | 592 → 0 | `fmt::v11::detail::parse_format_string` | `./base.h:1630` |

##### `fmt::v11::detail::format_handler::on_format_specs` (`./format.h:3613`)

|  Change |     Delta |             % |          Time | Samples | Caller                                      | Location        |
| ------: | --------: | ------------: | ------------: | ------: | ------------------------------------------- | --------------- |
| removed | -497.00ms | 100.0% → 0.0% | 497.0ms → 0ms | 497 → 0 | `fmt::v11::detail::parse_replacement_field` | `./base.h:1583` |

##### `fmt::v11::basic_format_arg::visit` (`./base.h:2516`)

|  Change |     Delta |            % |          Time | Samples | Caller                                                   | Location          |
| ------: | --------: | -----------: | ------------: | ------: | -------------------------------------------------------- | ----------------- |
| removed | -194.00ms | 93.3% → 0.0% | 194.0ms → 0ms | 194 → 0 | `fmt::v11::detail::format_handler::on_format_specs`      | `./format.h:3613` |
| removed |  -12.00ms |  5.8% → 0.0% |  12.0ms → 0ms |  12 → 0 | `fmt::v11::detail::format_handler::on_replacement_field` | `./format.h:3609` |
| removed |   -2.00ms |  1.0% → 0.0% |   2.0ms → 0ms |   2 → 0 | `fmt::v11::detail::parse_replacement_field`              | `./base.h:1583`   |

##### `main` (`/out/profile.cpp:8`)

| Change |     Delta |      % |              Time |   Samples | Caller        | Location    |
| -----: | --------: | -----: | ----------------: | --------: | ------------- | ----------- |
| -25.2% | -195.00ms | 100.0% | 774.0ms → 579.0ms | 774 → 579 | `(anonymous)` | `<unknown>` |

##### `(anonymous)` (`<unknown>`)

|  Change |     Delta |           % |              Time |   Samples | Caller                                                   | Location              |
| ------: | --------: | ----------: | ----------------: | --------: | -------------------------------------------------------- | --------------------- |
|  -24.5% | -194.00ms |      100.0% | 792.0ms → 598.0ms | 792 → 598 | `__libc_start_main`                                      | `<unknown>`           |
| removed |  -28.00ms | 3.5% → 0.0% |      28.0ms → 0ms |    28 → 0 | `fmt::v11::vformat[abi:cxx11]`                           | `./format-inl.h:1442` |
|     new |  +23.00ms | 0.0% → 3.8% |      0ms → 23.0ms |    0 → 23 | `fmt::v12::vformat[abi:cxx11]`                           | `./format-inl.h:1446` |
|     new |  +14.00ms | 0.0% → 2.3% |      0ms → 14.0ms |    0 → 14 | `fmt::v12::detail::format_handler::on_format_specs`      | `./format.h:3772`     |
| removed |  -13.00ms | 1.6% → 0.0% |      13.0ms → 0ms |    13 → 0 | `fmt::v11::detail::format_handler::on_replacement_field` | `./format.h:3609`     |

##### `__libc_start_main` (`<unknown>`)

| Change |     Delta |      % |              Time |   Samples | Caller   | Location    |
| -----: | --------: | -----: | ----------------: | --------: | -------- | ----------- |
| -24.5% | -194.00ms | 100.0% | 792.0ms → 598.0ms | 792 → 598 | `_start` | `<unknown>` |

##### `fmt::v11::detail::arg_formatter::operator()` (`./format.h:3498`)

|  Change |     Delta |             % |          Time | Samples | Caller                              | Location        |
| ------: | --------: | ------------: | ------------: | ------: | ----------------------------------- | --------------- |
| removed | -181.00ms | 100.0% → 0.0% | 181.0ms → 0ms | 181 → 0 | `fmt::v11::basic_format_arg::visit` | `./base.h:2516` |

##### `fmt::v11::detail::write` (`./format.h:3357`)

|  Change |     Delta |             % |          Time | Samples | Caller                                        | Location          |
| ------: | --------: | ------------: | ------------: | ------: | --------------------------------------------- | ----------------- |
| removed | -163.00ms | 100.0% → 0.0% | 163.0ms → 0ms | 163 → 0 | `fmt::v11::detail::arg_formatter::operator()` | `./format.h:3498` |

##### `fmt::v11::detail::write_float` (`./format.h:3301`)

|  Change |     Delta |            % |          Time | Samples | Caller                                              | Location          |
| ------: | --------: | -----------: | ------------: | ------: | --------------------------------------------------- | ----------------- |
| removed | -157.00ms | 98.7% → 0.0% | 157.0ms → 0ms | 157 → 0 | `fmt::v11::detail::write`                           | `./format.h:3357` |
| removed |   -2.00ms |  1.3% → 0.0% |   2.0ms → 0ms |   2 → 0 | `fmt::v11::detail::format_handler::on_format_specs` | `./format.h:3613` |

##### `fmt::v11::detail::parse_format_specs` (`./base.h:1445`)

|  Change |     Delta |             % |          Time | Samples | Caller                                              | Location          |
| ------: | --------: | ------------: | ------------: | ------: | --------------------------------------------------- | ----------------- |
| removed | -103.00ms | 100.0% → 0.0% | 103.0ms → 0ms | 103 → 0 | `fmt::v11::detail::format_handler::on_format_specs` | `./format.h:3613` |

##### `fmt::v11::detail::write_padded` (`./format.h:1631`)

|  Change |    Delta |            % |         Time | Samples | Caller                           | Location          |
| ------: | -------: | -----------: | -----------: | ------: | -------------------------------- | ----------------- |
| removed | -78.00ms | 77.2% → 0.0% | 78.0ms → 0ms |  78 → 0 | `fmt::v11::detail::write_padded` | `./format.h:1652` |
| removed | -22.00ms | 21.8% → 0.0% | 22.0ms → 0ms |  22 → 0 | `fmt::v11::detail::write`        | `./format.h:2114` |
| removed |  -1.00ms |  1.0% → 0.0% |  1.0ms → 0ms |   1 → 0 | `fmt::v11::detail::write_float`  | `./format.h:2452` |

##### `fmt::v11::detail::buffer::append` (`./base.h:1829`)

|  Change |    Delta |             % |         Time | Samples | Caller                   | Location        |
| ------: | -------: | ------------: | -----------: | ------: | ------------------------ | --------------- |
| removed | -92.00ms | 100.0% → 0.0% | 92.0ms → 0ms |  92 → 0 | `fmt::v11::detail::copy` | `./base.h:2041` |

##### `fmt::v11::detail::copy` (`./base.h:2041`)

|  Change |    Delta |            % |         Time | Samples | Caller                                                                            | Location          |
| ------: | -------: | -----------: | -----------: | ------: | --------------------------------------------------------------------------------- | ----------------- |
| removed | -65.00ms | 70.7% → 0.0% | 65.0ms → 0ms |  65 → 0 | `fmt::v11::detail::copy_noinline`                                                 | `./format.h:534`  |
| removed | -11.00ms | 12.0% → 0.0% | 11.0ms → 0ms |  11 → 0 | `fmt::v11::detail::write()::{lambda(fmt::v11::basic_appender)#1}::operator()`     | `./format.h`      |
| removed | -11.00ms | 12.0% → 0.0% | 11.0ms → 0ms |  11 → 0 | `fmt::v11::detail::write_int()::{lambda(fmt::v11::basic_appender)#1}::operator()` | `./format.h`      |
| removed |  -5.00ms |  5.4% → 0.0% |  5.0ms → 0ms |   5 → 0 | `fmt::v11::detail::write_significand`                                             | `./format.h:2244` |

##### `fmt::v11::detail::copy_noinline` (`./format.h:534`)

|  Change |    Delta |            % |         Time | Samples | Caller                                                   | Location          |
| ------: | -------: | -----------: | -----------: | ------: | -------------------------------------------------------- | ----------------- |
| removed | -39.00ms | 44.8% → 0.0% | 39.0ms → 0ms |  39 → 0 | `fmt::v11::detail::format_handler::on_text`              | `./format.h:3593` |
| removed | -27.00ms | 31.0% → 0.0% | 27.0ms → 0ms |  27 → 0 | `fmt::v11::detail::format_handler::on_replacement_field` | `./format.h:3609` |
| removed | -18.00ms | 20.7% → 0.0% | 18.0ms → 0ms |  18 → 0 | `fmt::v11::detail::write_significand`                    | `./format.h:2302` |
| removed |  -2.00ms |  2.3% → 0.0% |  2.0ms → 0ms |   2 → 0 | `fmt::v11::format`                                       | `./format.h:4198` |
| removed |  -1.00ms |  1.1% → 0.0% |  1.0ms → 0ms |   1 → 0 | `fmt::v11::detail::parse_format_string`                  | `./base.h:1630`   |

##### `fmt::v11::detail::write` (`./format.h:2114`)

|  Change |    Delta |            % |         Time | Samples | Caller                                              | Location          |
| ------: | -------: | -----------: | -----------: | ------: | --------------------------------------------------- | ----------------- |
| removed | -84.00ms | 98.8% → 0.0% | 84.0ms → 0ms |  84 → 0 | `fmt::v11::detail::format_handler::on_format_specs` | `./format.h:3613` |
| removed |  -1.00ms |  1.2% → 0.0% |  1.0ms → 0ms |   1 → 0 | `fmt::v11::detail::parse_replacement_field`         | `./base.h:1583`   |

##### `fmt::v11::detail::write_float` (`./format.h:2452`)

|  Change |    Delta |             % |         Time | Samples | Caller                          | Location          |
| ------: | -------: | ------------: | -----------: | ------: | ------------------------------- | ----------------- |
| removed | -80.00ms | 100.0% → 0.0% | 80.0ms → 0ms |  80 → 0 | `fmt::v11::detail::write_float` | `./format.h:3301` |

##### `fmt::v11::detail::write_padded` (`./format.h:1652`)

|  Change |    Delta |            % |         Time | Samples | Caller                             | Location          |
| ------: | -------: | -----------: | -----------: | ------: | ---------------------------------- | ----------------- |
| removed | -45.00ms | 57.0% → 0.0% | 45.0ms → 0ms |  45 → 0 | `fmt::v11::detail::do_write_float` | `./format.h:2333` |
| removed | -34.00ms | 43.0% → 0.0% | 34.0ms → 0ms |  34 → 0 | `fmt::v11::detail::write_int`      | `./format.h:2017` |

##### `fmt::v11::detail::do_write_float` (`./format.h:2333`)

|  Change |    Delta |            % |         Time | Samples | Caller                          | Location          |
| ------: | -------: | -----------: | -----------: | ------: | ------------------------------- | ----------------- |
| removed | -62.00ms | 98.4% → 0.0% | 62.0ms → 0ms |  62 → 0 | `fmt::v11::detail::write_float` | `./format.h:2452` |
| removed |  -1.00ms |  1.6% → 0.0% |  1.0ms → 0ms |   1 → 0 | `fmt::v11::detail::write`       | `./format.h:3357` |

##### `cfree` (`<unknown>`)

| Change |    Delta |      % |           Time | Samples | Caller                             | Location                                       |
| -----: | -------: | -----: | -------------: | ------: | ---------------------------------- | ---------------------------------------------- |
| -66.7% | -14.00ms | 100.0% | 21.0ms → 7.0ms |  21 → 7 | `std::__new_allocator::deallocate` | `/usr/include/c++/12/bits/new_allocator.h:142` |

##### `__libc_malloc` (`<unknown>`)

|  Change |   Delta |              % |          Time | Samples | Caller                                     | Location                                        |
| ------: | ------: | -------------: | ------------: | ------: | ------------------------------------------ | ----------------------------------------------- |
|  -44.4% | -4.00ms | 90.0% → 100.0% | 9.0ms → 5.0ms |   9 → 5 | `operator new`                             | `<unknown>`                                     |
| removed | -1.00ms |   10.0% → 0.0% |   1.0ms → 0ms |   1 → 0 | `std::__cxx11::basic_string::_M_construct` | `/usr/include/c++/12/bits/basic_string.tcc:217` |

##### `operator new` (`<unknown>`)

|  Change |   Delta |              % |           Time | Samples | Caller                                     | Location                                        |
| ------: | ------: | -------------: | -------------: | ------: | ------------------------------------------ | ----------------------------------------------- |
|  -30.0% | -3.00ms | 90.9% → 100.0% | 10.0ms → 7.0ms |  10 → 7 | `std::__cxx11::basic_string::_M_construct` | `/usr/include/c++/12/bits/basic_string.tcc:217` |
| removed | -1.00ms |    9.1% → 0.0% |    1.0ms → 0ms |   1 → 0 | `fmt::v11::vformat[abi:cxx11]`             | `./format-inl.h:1442`                           |

##### `std::__cxx11::basic_string::_M_create` (`<unknown>`)

|  Change |    Delta |             % |         Time | Samples | Caller                         | Location              |
| ------: | -------: | ------------: | -----------: | ------: | ------------------------------ | --------------------- |
| removed | -13.00ms | 100.0% → 0.0% | 13.0ms → 0ms |  13 → 0 | `fmt::v11::vformat[abi:cxx11]` | `./format-inl.h:1442` |
|     new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |  0 → 10 | `fmt::v12::vformat[abi:cxx11]` | `./format-inl.h:1446` |

##### `_init` (`<unknown>`)

|  Change |   Delta |            % |        Time | Samples | Caller                                                   | Location              |
| ------: | ------: | -----------: | ----------: | ------: | -------------------------------------------------------- | --------------------- |
| removed | -4.00ms | 57.1% → 0.0% | 4.0ms → 0ms |   4 → 0 | `fmt::v11::detail::write_float`                          | `./format.h:2452`     |
| removed | -2.00ms | 28.6% → 0.0% | 2.0ms → 0ms |   2 → 0 | `fmt::v11::detail::format_handler::on_format_specs`      | `./format.h:3613`     |
|     new | +2.00ms | 0.0% → 33.3% | 0ms → 2.0ms |   0 → 2 | `fmt::v12::detail::write_float`                          | `./format.h:2592`     |
| removed | -1.00ms | 14.3% → 0.0% | 1.0ms → 0ms |   1 → 0 | `fmt::v11::detail::format_handler::on_replacement_field` | `./format.h:3609`     |
|     new | +1.00ms | 0.0% → 16.7% | 0ms → 1.0ms |   0 → 1 | `fmt::v12::vformat[abi:cxx11]`                           | `./format-inl.h:1446` |

##### `std::__cxx11::basic_string::~basic_string` (`/usr/include/c++/12/bits/basic_string.h:794`)

|  Change |    Delta |             % |           Time | Samples | Caller                                              | Location             |
| ------: | -------: | ------------: | -------------: | ------: | --------------------------------------------------- | -------------------- |
|  -68.0% | -17.00ms | 83.3% → 88.9% | 25.0ms → 8.0ms |  25 → 8 | `main`                                              | `/out/profile.cpp:8` |
| removed |  -5.00ms |  16.7% → 0.0% |    5.0ms → 0ms |   5 → 0 | `fmt::v11::detail::digit_grouping::~digit_grouping` | `./format.h:1822`    |
|     new |  +1.00ms |  0.0% → 11.1% |    0ms → 1.0ms |   0 → 1 | `fmt::v12::detail::digit_grouping::~digit_grouping` | `./format.h:1856`    |

##### `std::__cxx11::basic_string::_M_dispose` (`/usr/include/c++/12/bits/basic_string.h:283`)

| Change |    Delta |      % |           Time | Samples | Caller                                      | Location                                      |
| -----: | -------: | -----: | -------------: | ------: | ------------------------------------------- | --------------------------------------------- |
| -68.0% | -17.00ms | 100.0% | 25.0ms → 8.0ms |  25 → 8 | `std::__cxx11::basic_string::~basic_string` | `/usr/include/c++/12/bits/basic_string.h:794` |

##### `std::__cxx11::basic_string::_M_destroy` (`/usr/include/c++/12/bits/basic_string.h:291`)

| Change |    Delta |      % |           Time | Samples | Caller                                   | Location                                      |
| -----: | -------: | -----: | -------------: | ------: | ---------------------------------------- | --------------------------------------------- |
| -65.2% | -15.00ms | 100.0% | 23.0ms → 8.0ms |  23 → 8 | `std::__cxx11::basic_string::_M_dispose` | `/usr/include/c++/12/bits/basic_string.h:283` |

##### `std::__new_allocator::deallocate` (`/usr/include/c++/12/bits/new_allocator.h:142`)

| Change |    Delta |      % |           Time | Samples | Caller                              | Location                                      |
| -----: | -------: | -----: | -------------: | ------: | ----------------------------------- | --------------------------------------------- |
| -66.7% | -14.00ms | 100.0% | 21.0ms → 7.0ms |  21 → 7 | `std::allocator_traits::deallocate` | `/usr/include/c++/12/bits/alloc_traits.h:495` |

##### `std::allocator_traits::deallocate` (`/usr/include/c++/12/bits/alloc_traits.h:495`)

| Change |    Delta |      % |           Time | Samples | Caller                                   | Location                                      |
| -----: | -------: | -----: | -------------: | ------: | ---------------------------------------- | --------------------------------------------- |
| -66.7% | -14.00ms | 100.0% | 21.0ms → 7.0ms |  21 → 7 | `std::__cxx11::basic_string::_M_destroy` | `/usr/include/c++/12/bits/basic_string.h:291` |

##### `std::__cxx11::basic_string::basic_string` (`/usr/include/c++/12/bits/basic_string.h:612`)

|  Change |    Delta |             % |         Time | Samples | Caller                | Location         |
| ------: | -------: | ------------: | -----------: | ------: | --------------------- | ---------------- |
| removed | -24.00ms | 100.0% → 0.0% | 24.0ms → 0ms |  24 → 0 | `fmt::v11::to_string` | `./format.h:882` |
|     new | +11.00ms | 0.0% → 100.0% | 0ms → 11.0ms |  0 → 11 | `fmt::v12::to_string` | `./format.h:910` |

##### `std::__cxx11::basic_string::_M_construct` (`/usr/include/c++/12/bits/basic_string.tcc:217`)

| Change |    Delta |      % |            Time | Samples | Caller                                     | Location                                      |
| -----: | -------: | -----: | --------------: | ------: | ------------------------------------------ | --------------------------------------------- |
| -54.5% | -12.00ms | 100.0% | 22.0ms → 10.0ms | 22 → 10 | `std::__cxx11::basic_string::basic_string` | `/usr/include/c++/12/bits/basic_string.h:612` |

##### `std::__cxx11::basic_string::_M_data` (`/usr/include/c++/12/bits/basic_string.h:233`)

|  Change |   Delta |            % |        Time | Samples | Caller                                      | Location                                      |
| ------: | ------: | -----------: | ----------: | ------: | ------------------------------------------- | --------------------------------------------- |
| removed | -3.00ms | 75.0% → 0.0% | 3.0ms → 0ms |   3 → 0 | `std::__cxx11::basic_string::_M_set_length` | `/usr/include/c++/12/bits/basic_string.h:265` |
| removed | -1.00ms | 25.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `std::__cxx11::basic_string::_M_is_local`   | `/usr/include/c++/12/bits/basic_string.h:273` |

##### `std::__cxx11::basic_string::_M_set_length` (`/usr/include/c++/12/bits/basic_string.h:265`)

| Change |   Delta |             % |          Time | Samples | Caller                                     | Location                                        |
| -----: | ------: | ------------: | ------------: | ------: | ------------------------------------------ | ----------------------------------------------- |
| -80.0% | -4.00ms | 71.4% → 33.3% | 5.0ms → 1.0ms |   5 → 1 | `std::__cxx11::basic_string::_M_construct` | `/usr/include/c++/12/bits/basic_string.tcc:217` |

##### `std::char_traits::copy` (`/usr/include/c++/12/bits/char_traits.h:423`)

| Change |   Delta |      % |          Time | Samples | Caller                                | Location                                      |
| -----: | ------: | -----: | ------------: | ------: | ------------------------------------- | --------------------------------------------- |
| -33.3% | -1.00ms | 100.0% | 3.0ms → 2.0ms |   3 → 2 | `std::__cxx11::basic_string::_S_copy` | `/usr/include/c++/12/bits/basic_string.h:418` |

##### `std::__cxx11::basic_string::_S_copy` (`/usr/include/c++/12/bits/basic_string.h:418`)

| Change |   Delta |      % |          Time | Samples | Caller                                      | Location                                      |
| -----: | ------: | -----: | ------------: | ------: | ------------------------------------------- | --------------------------------------------- |
| -33.3% | -1.00ms | 100.0% | 3.0ms → 2.0ms |   3 → 2 | `std::__cxx11::basic_string::_S_copy`       | `/usr/include/c++/12/bits/basic_string.h:418` |
| -33.3% | -1.00ms | 100.0% | 3.0ms → 2.0ms |   3 → 2 | `std::__cxx11::basic_string::_S_copy_chars` | `/usr/include/c++/12/bits/basic_string.h:475` |

##### `std::__cxx11::basic_string::_S_copy_chars` (`/usr/include/c++/12/bits/basic_string.h:475`)

| Change |   Delta |      % |          Time | Samples | Caller                                     | Location                                        |
| -----: | ------: | -----: | ------------: | ------: | ------------------------------------------ | ----------------------------------------------- |
| -33.3% | -1.00ms | 100.0% | 3.0ms → 2.0ms |   3 → 2 | `std::__cxx11::basic_string::_M_construct` | `/usr/include/c++/12/bits/basic_string.tcc:217` |

##### `std::__cxx11::basic_string::_Alloc_hider::_Alloc_hider` (`/usr/include/c++/12/bits/basic_string.h:199`)

| Change |   Delta |      % |          Time | Samples | Caller                                     | Location                                      |
| -----: | ------: | -----: | ------------: | ------: | ------------------------------------------ | --------------------------------------------- |
| -50.0% | -1.00ms | 100.0% | 2.0ms → 1.0ms |   2 → 1 | `std::__cxx11::basic_string::basic_string` | `/usr/include/c++/12/bits/basic_string.h:612` |

##### `std::__cxx11::basic_string::_M_is_local` (`/usr/include/c++/12/bits/basic_string.h:273`)

|  Change |   Delta |             % |        Time | Samples | Caller                                   | Location                                      |
| ------: | ------: | ------------: | ----------: | ------: | ---------------------------------------- | --------------------------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `std::__cxx11::basic_string::_M_dispose` | `/usr/include/c++/12/bits/basic_string.h:283` |

##### `std::__cxx11::basic_string::_M_length` (`/usr/include/c++/12/bits/basic_string.h:228`)

|  Change |   Delta |             % |        Time | Samples | Caller                                      | Location                                      |
| ------: | ------: | ------------: | ----------: | ------: | ------------------------------------------- | --------------------------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `std::__cxx11::basic_string::_M_set_length` | `/usr/include/c++/12/bits/basic_string.h:265` |

#### Callees

Callees with the largest change in contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `fmt::v12::format` (`./format.h:4335`)

| Change |     Delta |            % |          Time | Samples | Callee                           | Location              |
| -----: | --------: | -----------: | ------------: | ------: | -------------------------------- | --------------------- |
|    new | +567.00ms | 0.0% → 99.5% | 0ms → 567.0ms | 0 → 567 | `fmt::v12::vformat[abi:cxx11]`   | `./format-inl.h:1446` |
|    new |   +2.00ms |  0.0% → 0.4% |   0ms → 2.0ms |   0 → 2 | `fmt::v12::detail::value::value` | `./base.h:2220`       |
|    new |   +1.00ms |  0.0% → 0.2% |   0ms → 1.0ms |   0 → 1 | `fmt::v12::detail::value::value` | `./base.h:2233`       |

##### `fmt::v12::vformat[abi:cxx11]` (`./format-inl.h:1446`)

| Change |     Delta |            % |          Time | Samples | Callee                                               | Location              |
| -----: | --------: | -----------: | ------------: | ------: | ---------------------------------------------------- | --------------------- |
|    new | +514.00ms | 0.0% → 90.7% | 0ms → 514.0ms | 0 → 514 | `fmt::v12::detail::vformat_to`                       | `./format-inl.h:1456` |
|    new |  +23.00ms |  0.0% → 4.1% |  0ms → 23.0ms |  0 → 23 | `(anonymous)`                                        | `<unknown>`           |
|    new |  +13.00ms |  0.0% → 2.3% |  0ms → 13.0ms |  0 → 13 | `fmt::v12::to_string`                                | `./format.h:910`      |
|    new |  +10.00ms |  0.0% → 1.8% |  0ms → 10.0ms |  0 → 10 | `std::__cxx11::basic_string::_M_create`              | `<unknown>`           |
|    new |   +4.00ms |  0.0% → 0.7% |   0ms → 4.0ms |   0 → 4 | `fmt::v12::basic_memory_buffer::basic_memory_buffer` | `./format.h:826`      |

##### `fmt::v12::detail::parse_format_string` (`./base.h:1646`)

| Change |     Delta |            % |          Time | Samples | Callee                                      | Location          |
| -----: | --------: | -----------: | ------------: | ------: | ------------------------------------------- | ----------------- |
|    new | +444.00ms | 0.0% → 86.4% | 0ms → 444.0ms | 0 → 444 | `fmt::v12::detail::parse_replacement_field` | `./base.h:1599`   |
|    new |  +43.00ms |  0.0% → 8.4% |  0ms → 43.0ms |  0 → 43 | `fmt::v12::detail::format_handler::on_text` | `./format.h:3752` |
|    new |   +2.00ms |  0.0% → 0.4% |   0ms → 2.0ms |   0 → 2 | `fmt::v12::detail::write`                   | `./format.h:3434` |

##### `fmt::v12::detail::vformat_to` (`./format-inl.h:1456`)

| Change |     Delta |             % |          Time | Samples | Callee                                  | Location        |
| -----: | --------: | ------------: | ------------: | ------: | --------------------------------------- | --------------- |
|    new | +514.00ms | 0.0% → 100.0% | 0ms → 514.0ms | 0 → 514 | `fmt::v12::detail::parse_format_string` | `./base.h:1646` |

##### `fmt::v12::detail::parse_replacement_field` (`./base.h:1599`)

| Change |     Delta |            % |          Time | Samples | Callee                                                   | Location          |
| -----: | --------: | -----------: | ------------: | ------: | -------------------------------------------------------- | ----------------- |
|    new | +382.00ms | 0.0% → 86.0% | 0ms → 382.0ms | 0 → 382 | `fmt::v12::detail::format_handler::on_format_specs`      | `./format.h:3772` |
|    new |  +41.00ms |  0.0% → 9.2% |  0ms → 41.0ms |  0 → 41 | `fmt::v12::detail::format_handler::on_replacement_field` | `./format.h:3768` |
|    new |   +6.00ms |  0.0% → 1.4% |   0ms → 6.0ms |   0 → 6 | `fmt::v12::detail::format_handler::on_arg_id`            | `./format.h:3756` |

##### `fmt::v12::detail::format_handler::on_format_specs` (`./format.h:3772`)

| Change |     Delta |            % |          Time | Samples | Callee                                 | Location          |
| -----: | --------: | -----------: | ------------: | ------: | -------------------------------------- | ----------------- |
|    new | +111.00ms | 0.0% → 29.1% | 0ms → 111.0ms | 0 → 111 | `fmt::v12::detail::write`              | `./format.h:3434` |
|    new |  +90.00ms | 0.0% → 23.6% |  0ms → 90.0ms |  0 → 90 | `fmt::v12::detail::write`              | `./format.h:2159` |
|    new |  +73.00ms | 0.0% → 19.1% |  0ms → 73.0ms |  0 → 73 | `fmt::v12::detail::parse_format_specs` | `./base.h:1461`   |
|    new |  +55.00ms | 0.0% → 14.4% |  0ms → 55.0ms |  0 → 55 | `fmt::v12::detail::write_int`          | `./format.h:2050` |
|    new |  +20.00ms |  0.0% → 5.2% |  0ms → 20.0ms |  0 → 20 | `fmt::v12::basic_format_arg::visit`    | `./base.h:2529`   |

##### `fmt::v12::detail::write` (`./format.h:3434`)

| Change |    Delta |            % |         Time | Samples | Callee                                                          | Location             |
| -----: | -------: | -----------: | -----------: | ------: | --------------------------------------------------------------- | -------------------- |
|    new | +66.00ms | 0.0% → 58.4% | 0ms → 66.0ms |  0 → 66 | `fmt::v12::detail::write_float`                                 | `./format.h:2592`    |
|    new | +34.00ms | 0.0% → 30.1% | 0ms → 34.0ms |  0 → 34 | `fmt::v12::detail::format_float`                                | `./format.h:3134`    |
|    new |  +2.00ms |  0.0% → 1.8% |  0ms → 2.0ms |   0 → 2 | `fmt::v12::basic_memory_buffer::basic_memory_buffer`            | `./format.h:826`     |
|    new |  +2.00ms |  0.0% → 1.8% |  0ms → 2.0ms |   0 → 2 | `fmt::v12::detail::dragonbox::cache_accessor::get_cached_power` | `./format-inl.h:376` |
|    new |  +1.00ms |  0.0% → 0.9% |  0ms → 1.0ms |   0 → 1 | `fmt::v12::basic_specs::align`                                  | `./base.h:744`       |

##### `fmt::v12::detail::write` (`./format.h:2159`)

| Change |    Delta |            % |         Time | Samples | Callee                                 | Location          |
| -----: | -------: | -----------: | -----------: | ------: | -------------------------------------- | ----------------- |
|    new | +65.00ms | 0.0% → 72.2% | 0ms → 65.0ms |  0 → 65 | `fmt::v12::detail::for_each_codepoint` | `./format.h:632`  |
|    new | +20.00ms | 0.0% → 22.2% | 0ms → 20.0ms |  0 → 20 | `fmt::v12::detail::write_padded`       | `./format.h:1675` |

##### `fmt::v12::detail::write_padded` (`./format.h:1675`)

| Change |    Delta |            % |         Time | Samples | Callee                                                                              | Location          |
| -----: | -------: | -----------: | -----------: | ------: | ----------------------------------------------------------------------------------- | ----------------- |
|    new | +19.00ms | 0.0% → 24.1% | 0ms → 19.0ms |  0 → 19 | `fmt::v12::detail::write_fixed()::{lambda(fmt::v12::basic_appender)#2}::operator()` | `./format.h`      |
|    new | +15.00ms | 0.0% → 19.0% | 0ms → 15.0ms |  0 → 15 | `fmt::v12::detail::fill`                                                            | `./format.h:1660` |
|    new | +14.00ms | 0.0% → 17.7% | 0ms → 14.0ms |  0 → 14 | `fmt::v12::detail::write_int()::{lambda(fmt::v12::basic_appender)#1}::operator()`   | `./format.h`      |
|    new |  +9.00ms | 0.0% → 11.4% |  0ms → 9.0ms |   0 → 9 | `fmt::v12::detail::write()::{lambda(fmt::v12::basic_appender)#2}::operator()`       | `./format.h`      |
|    new |  +7.00ms |  0.0% → 8.9% |  0ms → 7.0ms |   0 → 7 | `fmt::v12::detail::reserve`                                                         | `./format.h:501`  |

##### `fmt::v12::detail::parse_format_specs` (`./base.h:1461`)

| Change |    Delta |            % |         Time | Samples | Callee                                                                 | Location        |
| -----: | -------: | -----------: | -----------: | ------: | ---------------------------------------------------------------------- | --------------- |
|    new | +12.00ms | 0.0% → 16.4% | 0ms → 12.0ms |  0 → 12 | `fmt::v12::detail::parse_width`                                        | `./base.h:1433` |
|    new |  +8.00ms | 0.0% → 11.0% |  0ms → 8.0ms |   0 → 8 | `fmt::v12::detail::parse_format_specs()::{unnamed type#1}::operator()` | `./base.h:1476` |
|    new |  +7.00ms |  0.0% → 9.6% |  0ms → 7.0ms |   0 → 7 | `fmt::v12::detail::parse_precision`                                    | `./base.h:1442` |
|    new |  +3.00ms |  0.0% → 4.1% |  0ms → 3.0ms |   0 → 3 | `fmt::v12::detail::parse_align`                                        | `./base.h:1334` |
|    new |  +1.00ms |  0.0% → 1.4% |  0ms → 1.0ms |   0 → 1 | `fmt::v12::basic_specs::set_sign`                                      | `./base.h:774`  |

##### `fmt::v12::detail::copy_noinline` (`./format.h:568`)

| Change |    Delta |            % |         Time | Samples | Callee                   | Location        |
| -----: | -------: | -----------: | -----------: | ------: | ------------------------ | --------------- |
|    new | +43.00ms | 0.0% → 60.6% | 0ms → 43.0ms |  0 → 43 | `fmt::v12::detail::copy` | `./base.h:2068` |

##### `fmt::v12::detail::write_float` (`./format.h:2592`)

| Change |    Delta |            % |         Time | Samples | Callee                                   | Location          |
| -----: | -------: | -----------: | -----------: | ------: | ---------------------------------------- | ----------------- |
|    new | +43.00ms | 0.0% → 65.2% | 0ms → 43.0ms |  0 → 43 | `fmt::v12::detail::write_fixed`          | `./format.h:2487` |
|    new | +16.00ms | 0.0% → 24.2% | 0ms → 16.0ms |  0 → 16 | `std::__cxx11::basic_string::_M_dispose` | `<unknown>`       |
|    new |  +4.00ms |  0.0% → 6.1% |  0ms → 4.0ms |   0 → 4 | `fmt::v12::detail::do_write_float`       | `./format.h:2553` |
|    new |  +2.00ms |  0.0% → 3.0% |  0ms → 2.0ms |   0 → 2 | `_init`                                  | `<unknown>`       |
|    new |  +1.00ms |  0.0% → 1.5% |  0ms → 1.0ms |   0 → 1 | `fmt::v12::detail::reserve`              | `./format.h:501`  |

##### `fmt::v12::detail::for_each_codepoint` (`./format.h:632`)

| Change |    Delta |            % |         Time | Samples | Callee                                                                                     | Location        |
| -----: | -------: | -----------: | -----------: | ------: | ------------------------------------------------------------------------------------------ | --------------- |
|    new | +53.00ms | 0.0% → 81.5% | 0ms → 53.0ms |  0 → 53 | `fmt::v12::detail::for_each_codepoint()::{lambda(char const*, char const*)#1}::operator()` | `./format.h`    |
|    new |  +1.00ms |  0.0% → 1.5% |  0ms → 1.0ms |   0 → 1 | `fmt::v12::detail::copy`                                                                   | `./base.h:2093` |

##### `fmt::v12::detail::copy` (`./base.h:2068`)

| Change |    Delta |            % |         Time | Samples | Callee                             | Location        |
| -----: | -------: | -----------: | -----------: | ------: | ---------------------------------- | --------------- |
|    new | +60.00ms | 0.0% → 96.8% | 0ms → 60.0ms |  0 → 60 | `fmt::v12::detail::buffer::append` | `./base.h:1845` |

##### `fmt::v12::detail::buffer::append` (`./base.h:1845`)

| Change |   Delta |            % |        Time | Samples | Callee                                  | Location        |
| -----: | ------: | -----------: | ----------: | ------: | --------------------------------------- | --------------- |
|    new | +9.00ms | 0.0% → 15.0% | 0ms → 9.0ms |   0 → 9 | `fmt::v12::detail::buffer::try_reserve` | `./base.h:1828` |
|    new | +2.00ms |  0.0% → 3.3% | 0ms → 2.0ms |   0 → 2 | `fmt::v12::detail::to_unsigned`         | `./base.h:432`  |

##### `fmt::v12::detail::write_padded` (`./format.h:1696`)

| Change |    Delta |             % |         Time | Samples | Callee                           | Location          |
| -----: | -------: | ------------: | -----------: | ------: | -------------------------------- | ----------------- |
|    new | +59.00ms | 0.0% → 100.0% | 0ms → 59.0ms |  0 → 59 | `fmt::v12::detail::write_padded` | `./format.h:1675` |

##### `fmt::v12::detail::write_int` (`./format.h:2050`)

| Change |    Delta |            % |         Time | Samples | Callee                                         | Location          |
| -----: | -------: | -----------: | -----------: | ------: | ---------------------------------------------- | ----------------- |
|    new | +26.00ms | 0.0% → 47.3% | 0ms → 26.0ms |  0 → 26 | `fmt::v12::detail::write_padded`               | `./format.h:1696` |
|    new | +15.00ms | 0.0% → 27.3% | 0ms → 15.0ms |  0 → 15 | `fmt::v12::detail::do_format_decimal`          | `./format.h:1207` |
|    new |  +3.00ms |  0.0% → 5.5% |  0ms → 3.0ms |   0 → 3 | `fmt::v12::detail::size_padding::size_padding` | `./format.h:2033` |
|    new |  +2.00ms |  0.0% → 3.6% |  0ms → 2.0ms |   0 → 2 | `fmt::v12::detail::do_format_base2e`           | `./format.h:1251` |

##### `fmt::v12::detail::for_each_codepoint()::{lambda(char const*, char const*)#1}::operator()` (`./format.h`)

| Change |    Delta |            % |         Time | Samples | Callee                                                                                         | Location         |
| -----: | -------: | -----------: | -----------: | ------: | ---------------------------------------------------------------------------------------------- | ---------------- |
|    new | +28.00ms | 0.0% → 52.8% | 0ms → 28.0ms |  0 → 28 | `fmt::v12::detail::utf8_decode`                                                                | `./format.h:590` |
|    new | +14.00ms | 0.0% → 26.4% | 0ms → 14.0ms |  0 → 14 | `fmt::v12::detail::write()::{lambda(unsigned int, fmt::v12::basic_string_view)#1}::operator()` | `./format.h`     |

##### `fmt::v12::detail::write_fixed` (`./format.h:2487`)

| Change |    Delta |            % |         Time | Samples | Callee                                              | Location          |
| -----: | -------: | -----------: | -----------: | ------: | --------------------------------------------------- | ----------------- |
|    new | +33.00ms | 0.0% → 73.3% | 0ms → 33.0ms |  0 → 33 | `fmt::v12::detail::write_padded`                    | `./format.h:1696` |
|    new |  +2.00ms |  0.0% → 4.4% |  0ms → 2.0ms |   0 → 2 | `fmt::v12::detail::digit_grouping::digit_grouping`  | `./format.h:1878` |
|    new |  +1.00ms |  0.0% → 2.2% |  0ms → 1.0ms |   0 → 1 | `fmt::v12::detail::to_unsigned`                     | `./base.h:432`    |
|    new |  +1.00ms |  0.0% → 2.2% |  0ms → 1.0ms |   0 → 1 | `fmt::v12::detail::digit_grouping::~digit_grouping` | `./format.h:1856` |

##### `fmt::v12::detail::format_handler::on_text` (`./format.h:3752`)

| Change |    Delta |            % |         Time | Samples | Callee                            | Location         |
| -----: | -------: | -----------: | -----------: | ------: | --------------------------------- | ---------------- |
|    new | +42.00ms | 0.0% → 97.7% | 0ms → 42.0ms |  0 → 42 | `fmt::v12::detail::copy_noinline` | `./format.h:568` |
|    new |  +1.00ms |  0.0% → 2.3% |  0ms → 1.0ms |   0 → 1 | `fmt::v12::context::out`          | `./base.h:2698`  |

##### `fmt::v11::format` (`./format.h:4198`)

|  Change |     Delta |            % |          Time | Samples | Callee                            | Location              |
| ------: | --------: | -----------: | ------------: | ------: | --------------------------------- | --------------------- |
| removed | -745.00ms | 99.6% → 0.0% | 745.0ms → 0ms | 745 → 0 | `fmt::v11::vformat[abi:cxx11]`    | `./format-inl.h:1442` |
| removed |   -2.00ms |  0.3% → 0.0% |   2.0ms → 0ms |   2 → 0 | `fmt::v11::detail::copy_noinline` | `./format.h:534`      |
| removed |   -1.00ms |  0.1% → 0.0% |   1.0ms → 0ms |   1 → 0 | `fmt::v11::detail::value::value`  | `./base.h:2158`       |

##### `fmt::v11::vformat[abi:cxx11]` (`./format-inl.h:1442`)

|  Change |     Delta |            % |          Time | Samples | Callee                                               | Location              |
| ------: | --------: | -----------: | ------------: | ------: | ---------------------------------------------------- | --------------------- |
| removed | -672.00ms | 90.0% → 0.0% | 672.0ms → 0ms | 672 → 0 | `fmt::v11::detail::vformat_to`                       | `./format-inl.h:1452` |
| removed |  -28.00ms |  3.7% → 0.0% |  28.0ms → 0ms |  28 → 0 | `(anonymous)`                                        | `<unknown>`           |
| removed |  -26.00ms |  3.5% → 0.0% |  26.0ms → 0ms |  26 → 0 | `fmt::v11::to_string`                                | `./format.h:882`      |
| removed |  -13.00ms |  1.7% → 0.0% |  13.0ms → 0ms |  13 → 0 | `std::__cxx11::basic_string::_M_create`              | `<unknown>`           |
| removed |   -2.00ms |  0.3% → 0.0% |   2.0ms → 0ms |   2 → 0 | `fmt::v11::basic_memory_buffer::basic_memory_buffer` | `./format.h:819`      |

##### `fmt::v11::detail::vformat_to` (`./format-inl.h:1452`)

|  Change |     Delta |            % |          Time | Samples | Callee                                  | Location        |
| ------: | --------: | -----------: | ------------: | ------: | --------------------------------------- | --------------- |
| removed | -671.00ms | 99.9% → 0.0% | 671.0ms → 0ms | 671 → 0 | `fmt::v11::detail::parse_format_string` | `./base.h:1630` |
| removed |   -1.00ms |  0.1% → 0.0% |   1.0ms → 0ms |   1 → 0 | `fmt::v11::context::context`            | `./base.h:2673` |

##### `fmt::v11::detail::parse_format_string` (`./base.h:1630`)

|  Change |     Delta |            % |          Time | Samples | Callee                                      | Location          |
| ------: | --------: | -----------: | ------------: | ------: | ------------------------------------------- | ----------------- |
| removed | -592.00ms | 88.2% → 0.0% | 592.0ms → 0ms | 592 → 0 | `fmt::v11::detail::parse_replacement_field` | `./base.h:1583`   |
| removed |  -47.00ms |  7.0% → 0.0% |  47.0ms → 0ms |  47 → 0 | `fmt::v11::detail::format_handler::on_text` | `./format.h:3593` |
| removed |   -1.00ms |  0.1% → 0.0% |   1.0ms → 0ms |   1 → 0 | `fmt::v11::detail::copy_noinline`           | `./format.h:534`  |

##### `fmt::v11::detail::parse_replacement_field` (`./base.h:1583`)

|  Change |     Delta |            % |          Time | Samples | Callee                                                   | Location          |
| ------: | --------: | -----------: | ------------: | ------: | -------------------------------------------------------- | ----------------- |
| removed | -497.00ms | 84.0% → 0.0% | 497.0ms → 0ms | 497 → 0 | `fmt::v11::detail::format_handler::on_format_specs`      | `./format.h:3613` |
| removed |  -63.00ms | 10.6% → 0.0% |  63.0ms → 0ms |  63 → 0 | `fmt::v11::detail::format_handler::on_replacement_field` | `./format.h:3609` |
| removed |   -5.00ms |  0.8% → 0.0% |   5.0ms → 0ms |   5 → 0 | `fmt::v11::detail::format_handler::on_arg_id`            | `./format.h:3597` |
| removed |   -2.00ms |  0.3% → 0.0% |   2.0ms → 0ms |   2 → 0 | `fmt::v11::basic_format_arg::visit`                      | `./base.h:2516`   |
| removed |   -1.00ms |  0.2% → 0.0% |   1.0ms → 0ms |   1 → 0 | `fmt::v11::detail::write`                                | `./format.h:2114` |

##### `fmt::v11::detail::format_handler::on_format_specs` (`./format.h:3613`)

|  Change |     Delta |            % |          Time | Samples | Callee                                 | Location          |
| ------: | --------: | -----------: | ------------: | ------: | -------------------------------------- | ----------------- |
| removed | -194.00ms | 39.0% → 0.0% | 194.0ms → 0ms | 194 → 0 | `fmt::v11::basic_format_arg::visit`    | `./base.h:2516`   |
| removed | -103.00ms | 20.7% → 0.0% | 103.0ms → 0ms | 103 → 0 | `fmt::v11::detail::parse_format_specs` | `./base.h:1445`   |
| removed |  -84.00ms | 16.9% → 0.0% |  84.0ms → 0ms |  84 → 0 | `fmt::v11::detail::write`              | `./format.h:2114` |
| removed |  -62.00ms | 12.5% → 0.0% |  62.0ms → 0ms |  62 → 0 | `fmt::v11::detail::write_int`          | `./format.h:2017` |
| removed |  -11.00ms |  2.2% → 0.0% |  11.0ms → 0ms |  11 → 0 | `(anonymous)`                          | `<unknown>`       |

##### `fmt::v11::basic_format_arg::visit` (`./base.h:2516`)

|  Change |     Delta |            % |          Time | Samples | Callee                                                | Location          |
| ------: | --------: | -----------: | ------------: | ------: | ----------------------------------------------------- | ----------------- |
| removed | -181.00ms | 87.0% → 0.0% | 181.0ms → 0ms | 181 → 0 | `fmt::v11::detail::arg_formatter::operator()`         | `./format.h:3498` |
| removed |   -3.00ms |  1.4% → 0.0% |   3.0ms → 0ms |   3 → 0 | `fmt::v11::detail::default_arg_formatter::operator()` | `./format.h:3475` |
| removed |   -3.00ms |  1.4% → 0.0% |   3.0ms → 0ms |   3 → 0 | `fmt::v11::detail::string_value::str`                 | `./base.h:2107`   |

##### `main` (`/out/profile.cpp:8`)

|  Change |     Delta |            % |           Time | Samples | Callee                                      | Location                                      |
| ------: | --------: | -----------: | -------------: | ------: | ------------------------------------------- | --------------------------------------------- |
| removed | -748.00ms | 96.6% → 0.0% |  748.0ms → 0ms | 748 → 0 | `fmt::v11::format`                          | `./format.h:4198`                             |
|     new | +570.00ms | 0.0% → 98.4% |  0ms → 570.0ms | 0 → 570 | `fmt::v12::format`                          | `./format.h:4335`                             |
|  -68.0% |  -17.00ms |  3.2% → 1.4% | 25.0ms → 8.0ms |  25 → 8 | `std::__cxx11::basic_string::~basic_string` | `/usr/include/c++/12/bits/basic_string.h:794` |

##### `(anonymous)` (`<unknown>`)

|  Change |     Delta |             % |              Time |   Samples | Callee                         | Location              |
| ------: | --------: | ------------: | ----------------: | --------: | ------------------------------ | --------------------- |
|  -25.2% | -195.00ms | 97.7% → 96.8% | 774.0ms → 579.0ms | 774 → 579 | `main`                         | `/out/profile.cpp:8`  |
|  +50.0% |   +2.00ms |   0.5% → 1.0% |     4.0ms → 6.0ms |     4 → 6 | `(anonymous)`                  | `<unknown>`           |
| removed |   -2.00ms |   0.3% → 0.0% |       2.0ms → 0ms |     2 → 0 | `fmt::v11::vformat[abi:cxx11]` | `./format-inl.h:1442` |
|     new |   +1.00ms |   0.0% → 0.2% |       0ms → 1.0ms |     0 → 1 | `_init`                        | `<unknown>`           |

##### `__libc_start_main` (`<unknown>`)

| Change |     Delta |      % |              Time |   Samples | Callee        | Location    |
| -----: | --------: | -----: | ----------------: | --------: | ------------- | ----------- |
| -24.5% | -194.00ms | 100.0% | 792.0ms → 598.0ms | 792 → 598 | `(anonymous)` | `<unknown>` |

##### `_start` (`<unknown>`)

| Change |     Delta |      % |              Time |   Samples | Callee              | Location    |
| -----: | --------: | -----: | ----------------: | --------: | ------------------- | ----------- |
| -24.5% | -194.00ms | 100.0% | 792.0ms → 598.0ms | 792 → 598 | `__libc_start_main` | `<unknown>` |

##### `fmt::v11::detail::arg_formatter::operator()` (`./format.h:3498`)

|  Change |     Delta |            % |          Time | Samples | Callee                    | Location          |
| ------: | --------: | -----------: | ------------: | ------: | ------------------------- | ----------------- |
| removed | -163.00ms | 90.1% → 0.0% | 163.0ms → 0ms | 163 → 0 | `fmt::v11::detail::write` | `./format.h:3357` |
| removed |   -6.00ms |  3.3% → 0.0% |   6.0ms → 0ms |   6 → 0 | `fmt::v11::detail::write` | `./format.h:2092` |
| removed |   -3.00ms |  1.7% → 0.0% |   3.0ms → 0ms |   3 → 0 | `fmt::v11::detail::write` | `./format.h:2145` |
| removed |   -1.00ms |  0.6% → 0.0% |   1.0ms → 0ms |   1 → 0 | `fmt::v11::detail::write` | `./format.h:3390` |

##### `fmt::v11::detail::write` (`./format.h:3357`)

|  Change |     Delta |            % |          Time | Samples | Callee                             | Location          |
| ------: | --------: | -----------: | ------------: | ------: | ---------------------------------- | ----------------- |
| removed | -157.00ms | 96.3% → 0.0% | 157.0ms → 0ms | 157 → 0 | `fmt::v11::detail::write_float`    | `./format.h:3301` |
| removed |   -5.00ms |  3.1% → 0.0% |   5.0ms → 0ms |   5 → 0 | `fmt::v11::basic_specs::localized` | `./base.h:802`    |
| removed |   -1.00ms |  0.6% → 0.0% |   1.0ms → 0ms |   1 → 0 | `fmt::v11::detail::do_write_float` | `./format.h:2333` |

##### `fmt::v11::detail::write_float` (`./format.h:3301`)

|  Change |    Delta |            % |         Time | Samples | Callee                                                | Location          |
| ------: | -------: | -----------: | -----------: | ------: | ----------------------------------------------------- | ----------------- |
| removed | -80.00ms | 50.3% → 0.0% | 80.0ms → 0ms |  80 → 0 | `fmt::v11::detail::write_float`                       | `./format.h:2452` |
| removed | -62.00ms | 39.0% → 0.0% | 62.0ms → 0ms |  62 → 0 | `fmt::v11::detail::format_float`                      | `./format.h:2994` |
| removed |  -2.00ms |  1.3% → 0.0% |  2.0ms → 0ms |   2 → 0 | `fmt::v11::basic_memory_buffer::basic_memory_buffer`  | `./format.h:819`  |
| removed |  -1.00ms |  0.6% → 0.0% |  1.0ms → 0ms |   1 → 0 | `fmt::v11::basic_memory_buffer::~basic_memory_buffer` | `./format.h:825`  |

##### `fmt::v11::detail::parse_format_specs` (`./base.h:1445`)

|  Change |    Delta |            % |         Time | Samples | Callee                                                                 | Location        |
| ------: | -------: | -----------: | -----------: | ------: | ---------------------------------------------------------------------- | --------------- |
| removed | -21.00ms | 20.4% → 0.0% | 21.0ms → 0ms |  21 → 0 | `fmt::v11::detail::parse_width`                                        | `./base.h:1417` |
| removed |  -9.00ms |  8.7% → 0.0% |  9.0ms → 0ms |   9 → 0 | `fmt::v11::detail::parse_format_specs()::{unnamed type#1}::operator()` | `./base.h:1460` |
| removed |  -7.00ms |  6.8% → 0.0% |  7.0ms → 0ms |   7 → 0 | `fmt::v11::detail::parse_align`                                        | `./base.h:1318` |
| removed |  -6.00ms |  5.8% → 0.0% |  6.0ms → 0ms |   6 → 0 | `fmt::v11::detail::parse_precision`                                    | `./base.h:1426` |
| removed |  -4.00ms |  3.9% → 0.0% |  4.0ms → 0ms |   4 → 0 | `fmt::v11::detail::parse_format_specs()::{unnamed type#2}::operator()` | `./base.h:1474` |

##### `fmt::v11::detail::write_padded` (`./format.h:1631`)

|  Change |    Delta |            % |         Time | Samples | Callee                                                                                 | Location          |
| ------: | -------: | -----------: | -----------: | ------: | -------------------------------------------------------------------------------------- | ----------------- |
| removed | -27.00ms | 26.7% → 0.0% | 27.0ms → 0ms |  27 → 0 | `fmt::v11::detail::do_write_float()::{lambda(fmt::v11::basic_appender)#4}::operator()` | `./format.h`      |
| removed | -21.00ms | 20.8% → 0.0% | 21.0ms → 0ms |  21 → 0 | `fmt::v11::detail::write_int()::{lambda(fmt::v11::basic_appender)#1}::operator()`      | `./format.h`      |
| removed | -14.00ms | 13.9% → 0.0% | 14.0ms → 0ms |  14 → 0 | `fmt::v11::detail::write()::{lambda(fmt::v11::basic_appender)#1}::operator()`          | `./format.h`      |
| removed | -11.00ms | 10.9% → 0.0% | 11.0ms → 0ms |  11 → 0 | `fmt::v11::detail::fill`                                                               | `./format.h:1616` |
| removed |  -8.00ms |  7.9% → 0.0% |  8.0ms → 0ms |   8 → 0 | `fmt::v11::detail::do_write_float()::{lambda(fmt::v11::basic_appender)#5}::operator()` | `./format.h`      |

##### `fmt::v11::detail::buffer::append` (`./base.h:1829`)

|  Change |    Delta |            % |         Time | Samples | Callee                                  | Location        |
| ------: | -------: | -----------: | -----------: | ------: | --------------------------------------- | --------------- |
| removed | -11.00ms | 12.0% → 0.0% | 11.0ms → 0ms |  11 → 0 | `fmt::v11::detail::buffer::try_reserve` | `./base.h:1812` |
| removed |  -4.00ms |  4.3% → 0.0% |  4.0ms → 0ms |   4 → 0 | `fmt::v11::detail::to_unsigned`         | `./base.h:437`  |

##### `fmt::v11::detail::copy` (`./base.h:2041`)

|  Change |    Delta |             % |         Time | Samples | Callee                             | Location        |
| ------: | -------: | ------------: | -----------: | ------: | ---------------------------------- | --------------- |
| removed | -92.00ms | 100.0% → 0.0% | 92.0ms → 0ms |  92 → 0 | `fmt::v11::detail::buffer::append` | `./base.h:1829` |

##### `fmt::v11::detail::copy_noinline` (`./format.h:534`)

|  Change |    Delta |            % |         Time | Samples | Callee                   | Location        |
| ------: | -------: | -----------: | -----------: | ------: | ------------------------ | --------------- |
| removed | -65.00ms | 74.7% → 0.0% | 65.0ms → 0ms |  65 → 0 | `fmt::v11::detail::copy` | `./base.h:2041` |

##### `fmt::v11::detail::write` (`./format.h:2114`)

|  Change |    Delta |            % |         Time | Samples | Callee                            | Location          |
| ------: | -------: | -----------: | -----------: | ------: | --------------------------------- | ----------------- |
| removed | -60.00ms | 70.6% → 0.0% | 60.0ms → 0ms |  60 → 0 | `fmt::v11::detail::compute_width` | `./format.h:638`  |
| removed | -22.00ms | 25.9% → 0.0% | 22.0ms → 0ms |  22 → 0 | `fmt::v11::detail::write_padded`  | `./format.h:1631` |
| removed |  -1.00ms |  1.2% → 0.0% |  1.0ms → 0ms |   1 → 0 | `fmt::v11::basic_specs::type`     | `./base.h:754`    |

##### `fmt::v11::detail::write_float` (`./format.h:2452`)

|  Change |    Delta |            % |         Time | Samples | Callee                                   | Location          |
| ------: | -------: | -----------: | -----------: | ------: | ---------------------------------------- | ----------------- |
| removed | -62.00ms | 77.5% → 0.0% | 62.0ms → 0ms |  62 → 0 | `fmt::v11::detail::do_write_float`       | `./format.h:2333` |
| removed | -12.00ms | 15.0% → 0.0% | 12.0ms → 0ms |  12 → 0 | `std::__cxx11::basic_string::_M_dispose` | `<unknown>`       |
| removed |  -4.00ms |  5.0% → 0.0% |  4.0ms → 0ms |   4 → 0 | `_init`                                  | `<unknown>`       |
| removed |  -1.00ms |  1.3% → 0.0% |  1.0ms → 0ms |   1 → 0 | `fmt::v11::detail::reserve`              | `./format.h:474`  |
| removed |  -1.00ms |  1.3% → 0.0% |  1.0ms → 0ms |   1 → 0 | `fmt::v11::detail::write_padded`         | `./format.h:1631` |

##### `fmt::v11::detail::write_padded` (`./format.h:1652`)

|  Change |    Delta |            % |         Time | Samples | Callee                           | Location          |
| ------: | -------: | -----------: | -----------: | ------: | -------------------------------- | ----------------- |
| removed | -78.00ms | 98.7% → 0.0% | 78.0ms → 0ms |  78 → 0 | `fmt::v11::detail::write_padded` | `./format.h:1631` |

##### `fmt::v11::detail::do_write_float` (`./format.h:2333`)

|  Change |    Delta |            % |         Time | Samples | Callee                                              | Location          |
| ------: | -------: | -----------: | -----------: | ------: | --------------------------------------------------- | ----------------- |
| removed | -45.00ms | 71.4% → 0.0% | 45.0ms → 0ms |  45 → 0 | `fmt::v11::detail::write_padded`                    | `./format.h:1652` |
| removed |  -5.00ms |  7.9% → 0.0% |  5.0ms → 0ms |   5 → 0 | `fmt::v11::detail::digit_grouping::~digit_grouping` | `./format.h:1822` |
| removed |  -3.00ms |  4.8% → 0.0% |  3.0ms → 0ms |   3 → 0 | `fmt::v11::detail::digit_grouping::digit_grouping`  | `./format.h:1846` |

##### `cfree` (`<unknown>`)

| Change |   Delta |             % |          Time | Samples | Callee        | Location    |
| -----: | ------: | ------------: | ------------: | ------: | ------------- | ----------- |
| -14.3% | -1.00ms | 33.3% → 85.7% | 7.0ms → 6.0ms |   7 → 6 | `(anonymous)` | `<unknown>` |

##### `operator new` (`<unknown>`)

| Change |   Delta |             % |          Time | Samples | Callee          | Location    |
| -----: | ------: | ------------: | ------------: | ------: | --------------- | ----------- |
| -44.4% | -4.00ms | 81.8% → 71.4% | 9.0ms → 5.0ms |   9 → 5 | `__libc_malloc` | `<unknown>` |

##### `std::__cxx11::basic_string::~basic_string` (`/usr/include/c++/12/bits/basic_string.h:794`)

| Change |    Delta |             % |           Time | Samples | Callee                                   | Location                                      |
| -----: | -------: | ------------: | -------------: | ------: | ---------------------------------------- | --------------------------------------------- |
| -68.0% | -17.00ms | 83.3% → 88.9% | 25.0ms → 8.0ms |  25 → 8 | `std::__cxx11::basic_string::_M_dispose` | `/usr/include/c++/12/bits/basic_string.h:283` |

##### `std::__cxx11::basic_string::_M_dispose` (`/usr/include/c++/12/bits/basic_string.h:283`)

|  Change |    Delta |              % |           Time | Samples | Callee                                    | Location                                      |
| ------: | -------: | -------------: | -------------: | ------: | ----------------------------------------- | --------------------------------------------- |
|  -65.2% | -15.00ms | 92.0% → 100.0% | 23.0ms → 8.0ms |  23 → 8 | `std::__cxx11::basic_string::_M_destroy`  | `/usr/include/c++/12/bits/basic_string.h:291` |
| removed |  -1.00ms |    4.0% → 0.0% |    1.0ms → 0ms |   1 → 0 | `std::__cxx11::basic_string::_M_is_local` | `/usr/include/c++/12/bits/basic_string.h:273` |

##### `std::__cxx11::basic_string::_M_destroy` (`/usr/include/c++/12/bits/basic_string.h:291`)

| Change |    Delta |             % |           Time | Samples | Callee                              | Location                                      |
| -----: | -------: | ------------: | -------------: | ------: | ----------------------------------- | --------------------------------------------- |
| -66.7% | -14.00ms | 91.3% → 87.5% | 21.0ms → 7.0ms |  21 → 7 | `std::allocator_traits::deallocate` | `/usr/include/c++/12/bits/alloc_traits.h:495` |

##### `std::__new_allocator::deallocate` (`/usr/include/c++/12/bits/new_allocator.h:142`)

| Change |    Delta |      % |           Time | Samples | Callee  | Location    |
| -----: | -------: | -----: | -------------: | ------: | ------- | ----------- |
| -66.7% | -14.00ms | 100.0% | 21.0ms → 7.0ms |  21 → 7 | `cfree` | `<unknown>` |

##### `std::allocator_traits::deallocate` (`/usr/include/c++/12/bits/alloc_traits.h:495`)

| Change |    Delta |      % |           Time | Samples | Callee                             | Location                                       |
| -----: | -------: | -----: | -------------: | ------: | ---------------------------------- | ---------------------------------------------- |
| -66.7% | -14.00ms | 100.0% | 21.0ms → 7.0ms |  21 → 7 | `std::__new_allocator::deallocate` | `/usr/include/c++/12/bits/new_allocator.h:142` |

##### `std::__cxx11::basic_string::basic_string` (`/usr/include/c++/12/bits/basic_string.h:612`)

| Change |    Delta |             % |            Time | Samples | Callee                                                   | Location                                        |
| -----: | -------: | ------------: | --------------: | ------: | -------------------------------------------------------- | ----------------------------------------------- |
| -54.5% | -12.00ms | 91.7% → 90.9% | 22.0ms → 10.0ms | 22 → 10 | `std::__cxx11::basic_string::_M_construct`               | `/usr/include/c++/12/bits/basic_string.tcc:217` |
| -50.0% |  -1.00ms |   8.3% → 9.1% |   2.0ms → 1.0ms |   2 → 1 | `std::__cxx11::basic_string::_Alloc_hider::_Alloc_hider` | `/usr/include/c++/12/bits/basic_string.h:199`   |

##### `std::__cxx11::basic_string::_M_construct` (`/usr/include/c++/12/bits/basic_string.tcc:217`)

|  Change |   Delta |             % |           Time | Samples | Callee                                      | Location                                      |
| ------: | ------: | ------------: | -------------: | ------: | ------------------------------------------- | --------------------------------------------- |
|  -80.0% | -4.00ms | 22.7% → 10.0% |  5.0ms → 1.0ms |   5 → 1 | `std::__cxx11::basic_string::_M_set_length` | `/usr/include/c++/12/bits/basic_string.h:265` |
|  -30.0% | -3.00ms | 45.5% → 70.0% | 10.0ms → 7.0ms |  10 → 7 | `operator new`                              | `<unknown>`                                   |
|  -33.3% | -1.00ms | 13.6% → 20.0% |  3.0ms → 2.0ms |   3 → 2 | `std::__cxx11::basic_string::_S_copy_chars` | `/usr/include/c++/12/bits/basic_string.h:475` |
| removed | -1.00ms |   4.5% → 0.0% |    1.0ms → 0ms |   1 → 0 | `__libc_malloc`                             | `<unknown>`                                   |

##### `std::__cxx11::basic_string::_M_set_length` (`/usr/include/c++/12/bits/basic_string.h:265`)

|  Change |   Delta |            % |        Time | Samples | Callee                                  | Location                                      |
| ------: | ------: | -----------: | ----------: | ------: | --------------------------------------- | --------------------------------------------- |
| removed | -3.00ms | 42.9% → 0.0% | 3.0ms → 0ms |   3 → 0 | `std::__cxx11::basic_string::_M_data`   | `/usr/include/c++/12/bits/basic_string.h:233` |
| removed | -1.00ms | 14.3% → 0.0% | 1.0ms → 0ms |   1 → 0 | `std::__cxx11::basic_string::_M_length` | `/usr/include/c++/12/bits/basic_string.h:228` |

##### `std::__cxx11::basic_string::_S_copy` (`/usr/include/c++/12/bits/basic_string.h:418`)

| Change |   Delta |      % |          Time | Samples | Callee                                | Location                                      |
| -----: | ------: | -----: | ------------: | ------: | ------------------------------------- | --------------------------------------------- |
| -33.3% | -1.00ms | 100.0% | 3.0ms → 2.0ms |   3 → 2 | `std::char_traits::copy`              | `/usr/include/c++/12/bits/char_traits.h:423`  |
| -33.3% | -1.00ms | 100.0% | 3.0ms → 2.0ms |   3 → 2 | `std::__cxx11::basic_string::_S_copy` | `/usr/include/c++/12/bits/basic_string.h:418` |

##### `std::__cxx11::basic_string::_S_copy_chars` (`/usr/include/c++/12/bits/basic_string.h:475`)

| Change |   Delta |      % |          Time | Samples | Callee                                | Location                                      |
| -----: | ------: | -----: | ------------: | ------: | ------------------------------------- | --------------------------------------------- |
| -33.3% | -1.00ms | 100.0% | 3.0ms → 2.0ms |   3 → 2 | `std::__cxx11::basic_string::_S_copy` | `/usr/include/c++/12/bits/basic_string.h:418` |

##### `std::__cxx11::basic_string::_M_is_local` (`/usr/include/c++/12/bits/basic_string.h:273`)

|  Change |   Delta |             % |        Time | Samples | Callee                                | Location                                      |
| ------: | ------: | ------------: | ----------: | ------: | ------------------------------------- | --------------------------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `std::__cxx11::basic_string::_M_data` | `/usr/include/c++/12/bits/basic_string.h:233` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in time spent in their leaf frame.

Common call stack: `fmt::v12::vformat[abi:cxx11]` (`./format-inl.h:1446`) ← `fmt::v12::format` (`./format.h:4335`) ← `main` (`/out/profile.cpp:8`) ← `(anonymous)` ← `__libc_start_main` ← `_start`

| Change |    Delta |           % |         Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| -----: | -------: | ----------: | -----------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|    new | +41.00ms | 0.0% → 6.9% | 0ms → 41.0ms |  0 → 41 | `fmt::v12::detail::parse_format_specs` (`./base.h:1461`) ← `fmt::v12::detail::format_handler::on_format_specs` (`./format.h:3772`) ← `fmt::v12::detail::parse_replacement_field` (`./base.h:1599`) ← `fmt::v12::detail::parse_format_string` (1646) ← `fmt::v12::detail::vformat_to` (`./format-inl.h:1456`)                                                                                                                                                                                                                        |
|    new | +28.00ms | 0.0% → 4.7% | 0ms → 28.0ms |  0 → 28 | `fmt::v12::detail::utf8_decode` (`./format.h:590`) ← `fmt::v12::detail::for_each_codepoint()::{lambda(char const*, char const*)#1}::operator()` ← `fmt::v12::detail::for_each_codepoint` (632) ← `fmt::v12::detail::write` (2159) ← `fmt::v12::detail::format_handler::on_format_specs` (3772) ← `fmt::v12::detail::parse_replacement_field` (`./base.h:1599`) ← `fmt::v12::detail::parse_format_string` (1646) ← `fmt::v12::detail::vformat_to` (`./format-inl.h:1456`)                                                            |
|    new | +25.00ms | 0.0% → 4.2% | 0ms → 25.0ms |  0 → 25 | `fmt::v12::detail::parse_format_string` (`./base.h:1646`) ← `fmt::v12::detail::vformat_to` (`./format-inl.h:1456`)                                                                                                                                                                                                                                                                                                                                                                                                                  |
|    new | +23.00ms | 0.0% → 3.8% | 0ms → 23.0ms |  0 → 23 | `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|    new | +20.00ms | 0.0% → 3.3% | 0ms → 20.0ms |  0 → 20 | `fmt::v12::detail::copy_noinline` (`./format.h:568`) ← `fmt::v12::detail::format_handler::on_text` (3752) ← `fmt::v12::detail::parse_format_string` (`./base.h:1646`) ← `fmt::v12::detail::vformat_to` (`./format-inl.h:1456`)                                                                                                                                                                                                                                                                                                      |
|    new | +18.00ms | 0.0% → 3.0% | 0ms → 18.0ms |  0 → 18 | `fmt::v12::detail::format_float` (`./format.h:3134`) ← `fmt::v12::detail::write` (3434) ← `fmt::v12::detail::format_handler::on_format_specs` (3772) ← `fmt::v12::detail::parse_replacement_field` (`./base.h:1599`) ← `fmt::v12::detail::parse_format_string` (1646) ← `fmt::v12::detail::vformat_to` (`./format-inl.h:1456`)                                                                                                                                                                                                      |
|    new | +17.00ms | 0.0% → 2.8% | 0ms → 17.0ms |  0 → 17 | `fmt::v12::detail::buffer::append` (`./base.h:1845`) ← `fmt::v12::detail::copy` (2068) ← `fmt::v12::detail::copy_noinline` (`./format.h:568`) ← `fmt::v12::detail::format_handler::on_text` (3752) ← `fmt::v12::detail::parse_format_string` (`./base.h:1646`) ← `fmt::v12::detail::vformat_to` (`./format-inl.h:1456`)                                                                                                                                                                                                             |
|    new | +16.00ms | 0.0% → 2.7% | 0ms → 16.0ms |  0 → 16 | `std::__cxx11::basic_string::_M_dispose` ← `fmt::v12::detail::write_float` (`./format.h:2592`) ← `fmt::v12::detail::write` (3434) ← `fmt::v12::detail::format_handler::on_format_specs` (3772) ← `fmt::v12::detail::parse_replacement_field` (`./base.h:1599`) ← `fmt::v12::detail::parse_format_string` (1646) ← `fmt::v12::detail::vformat_to` (`./format-inl.h:1456`)                                                                                                                                                            |
|    new | +15.00ms | 0.0% → 2.5% | 0ms → 15.0ms |  0 → 15 | `fmt::v12::detail::parse_replacement_field` (`./base.h:1599`) ← `fmt::v12::detail::parse_format_string` (1646) ← `fmt::v12::detail::vformat_to` (`./format-inl.h:1456`)                                                                                                                                                                                                                                                                                                                                                             |
|    new | +14.00ms | 0.0% → 2.3% | 0ms → 14.0ms |  0 → 14 | `(anonymous)` ← `fmt::v12::detail::format_handler::on_format_specs` (`./format.h:3772`) ← `fmt::v12::detail::parse_replacement_field` (`./base.h:1599`) ← `fmt::v12::detail::parse_format_string` (1646) ← `fmt::v12::detail::vformat_to` (`./format-inl.h:1456`)                                                                                                                                                                                                                                                                   |
|    new | +13.00ms | 0.0% → 2.2% | 0ms → 13.0ms |  0 → 13 | `fmt::v12::detail::buffer::append` (`./base.h:1845`) ← `fmt::v12::detail::copy` (2068) ← `fmt::v12::detail::copy_noinline` (`./format.h:568`) ← `fmt::v12::detail::format_handler::on_replacement_field` (3768) ← `fmt::v12::detail::parse_replacement_field` (`./base.h:1599`) ← `fmt::v12::detail::parse_format_string` (1646) ← `fmt::v12::detail::vformat_to` (`./format-inl.h:1456`)                                                                                                                                           |
|    new | +13.00ms | 0.0% → 2.2% | 0ms → 13.0ms |  0 → 13 | `(anonymous)` ← `fmt::v12::detail::format_handler::on_replacement_field` (`./format.h:3768`) ← `fmt::v12::detail::parse_replacement_field` (`./base.h:1599`) ← `fmt::v12::detail::parse_format_string` (1646) ← `fmt::v12::detail::vformat_to` (`./format-inl.h:1456`)                                                                                                                                                                                                                                                              |
|    new | +11.00ms | 0.0% → 1.8% | 0ms → 11.0ms |  0 → 11 | `fmt::v12::detail::for_each_codepoint` (`./format.h:632`) ← `fmt::v12::detail::write` (2159) ← `fmt::v12::detail::format_handler::on_format_specs` (3772) ← `fmt::v12::detail::parse_replacement_field` (`./base.h:1599`) ← `fmt::v12::detail::parse_format_string` (1646) ← `fmt::v12::detail::vformat_to` (`./format-inl.h:1456`)                                                                                                                                                                                                 |
|    new | +11.00ms | 0.0% → 1.8% | 0ms → 11.0ms |  0 → 11 | `fmt::v12::detail::for_each_codepoint()::{lambda(char const*, char const*)#1}::operator()` (`./format.h`) ← `fmt::v12::detail::for_each_codepoint` (632) ← `fmt::v12::detail::write` (2159) ← `fmt::v12::detail::format_handler::on_format_specs` (3772) ← `fmt::v12::detail::parse_replacement_field` (`./base.h:1599`) ← `fmt::v12::detail::parse_format_string` (1646) ← `fmt::v12::detail::vformat_to` (`./format-inl.h:1456`)                                                                                                  |
|    new | +11.00ms | 0.0% → 1.8% | 0ms → 11.0ms |  0 → 11 | `fmt::v12::detail::do_format_decimal` (`./format.h:1207`) ← `fmt::v12::detail::write_int` (2050) ← `fmt::v12::detail::format_handler::on_format_specs` (3772) ← `fmt::v12::detail::parse_replacement_field` (`./base.h:1599`) ← `fmt::v12::detail::parse_format_string` (1646) ← `fmt::v12::detail::vformat_to` (`./format-inl.h:1456`)                                                                                                                                                                                             |
|    new | +11.00ms | 0.0% → 1.8% | 0ms → 11.0ms |  0 → 11 | `fmt::v12::detail::write()::{lambda(unsigned int, fmt::v12::basic_string_view)#1}::operator()` (`./format.h`) ← `fmt::v12::detail::for_each_codepoint()::{lambda(char const*, char const*)#1}::operator()` ← `fmt::v12::detail::for_each_codepoint` (632) ← `fmt::v12::detail::write` (2159) ← `fmt::v12::detail::format_handler::on_format_specs` (3772) ← `fmt::v12::detail::parse_replacement_field` (`./base.h:1599`) ← `fmt::v12::detail::parse_format_string` (1646) ← `fmt::v12::detail::vformat_to` (`./format-inl.h:1456`) |
|    new | +10.00ms | 0.0% → 1.7% | 0ms → 10.0ms |  0 → 10 | `std::__cxx11::basic_string::_M_create`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|    new |  +9.00ms | 0.0% → 1.5% |  0ms → 9.0ms |   0 → 9 | `fmt::v12::detail::write_int` (`./format.h:2050`) ← `fmt::v12::detail::format_handler::on_format_specs` (3772) ← `fmt::v12::detail::parse_replacement_field` (`./base.h:1599`) ← `fmt::v12::detail::parse_format_string` (1646) ← `fmt::v12::detail::vformat_to` (`./format-inl.h:1456`)                                                                                                                                                                                                                                            |
|    new |  +8.00ms | 0.0% → 1.3% |  0ms → 8.0ms |   0 → 8 | `fmt::v12::detail::parse_format_specs()::{unnamed type#1}::operator()` (`./base.h:1476`) ← `fmt::v12::detail::parse_format_specs` (1461) ← `fmt::v12::detail::format_handler::on_format_specs` (`./format.h:3772`) ← `fmt::v12::detail::parse_replacement_field` (`./base.h:1599`) ← `fmt::v12::detail::parse_format_string` (1646) ← `fmt::v12::detail::vformat_to` (`./format-inl.h:1456`)                                                                                                                                        |
|    new |  +7.00ms | 0.0% → 1.2% |  0ms → 7.0ms |   0 → 7 | `fmt::v12::detail::buffer::append` (`./base.h:1845`) ← `fmt::v12::detail::copy` (2068) ← `fmt::v12::detail::write()::{lambda(fmt::v12::basic_appender)#2}::operator()` (`./format.h`) ← `fmt::v12::detail::write_padded` (1675) ← `fmt::v12::detail::write` (2159) ← `fmt::v12::detail::format_handler::on_format_specs` (3772) ← `fmt::v12::detail::parse_replacement_field` (`./base.h:1599`) ← `fmt::v12::detail::parse_format_string` (1646) ← `fmt::v12::detail::vformat_to` (`./format-inl.h:1456`)                           |

### Improvements

Call stacks with the largest decrease in time spent in their leaf frame.

Common call stack: `main` (`/out/profile.cpp:8`) ← `(anonymous)` ← `__libc_start_main` ← `_start`

|  Change |    Delta |           % |           Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ------: | -------: | ----------: | -------------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| removed | -52.00ms | 6.6% → 0.0% |   52.0ms → 0ms |  52 → 0 | `fmt::v11::detail::parse_format_specs` (`./base.h:1445`) ← `fmt::v11::detail::format_handler::on_format_specs` (`./format.h:3613`) ← `fmt::v11::detail::parse_replacement_field` (`./base.h:1583`) ← `fmt::v11::detail::parse_format_string` (1630) ← `fmt::v11::detail::vformat_to` (`./format-inl.h:1452`) ← `fmt::v11::vformat[abi:cxx11]` (1442) ← `fmt::v11::format` (`./format.h:4198`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| removed | -38.00ms | 4.8% → 0.0% |   38.0ms → 0ms |  38 → 0 | `fmt::v11::detail::utf8_decode` (`./format.h:556`) ← `fmt::v11::detail::for_each_codepoint()::{lambda(char const*, char const*)#1}::operator()` ← `fmt::v11::detail::for_each_codepoint` (598) ← `fmt::v11::detail::compute_width` (638) ← `fmt::v11::detail::write` (2114) ← `fmt::v11::detail::format_handler::on_format_specs` (3613) ← `fmt::v11::detail::parse_replacement_field` (`./base.h:1583`) ← `fmt::v11::detail::parse_format_string` (1630) ← `fmt::v11::detail::vformat_to` (`./format-inl.h:1452`) ← `fmt::v11::vformat[abi:cxx11]` (1442) ← `fmt::v11::format` (`./format.h:4198`)                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| removed | -31.00ms | 3.9% → 0.0% |   31.0ms → 0ms |  31 → 0 | `fmt::v11::detail::parse_format_string` (`./base.h:1630`) ← `fmt::v11::detail::vformat_to` (`./format-inl.h:1452`) ← `fmt::v11::vformat[abi:cxx11]` (1442) ← `fmt::v11::format` (`./format.h:4198`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| removed | -28.00ms | 3.5% → 0.0% |   28.0ms → 0ms |  28 → 0 | `(anonymous)` ← `fmt::v11::vformat[abi:cxx11]` (`./format-inl.h:1442`) ← `fmt::v11::format` (`./format.h:4198`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| removed | -26.00ms | 3.3% → 0.0% |   26.0ms → 0ms |  26 → 0 | `fmt::v11::detail::format_float` (`./format.h:2994`) ← `fmt::v11::detail::write_float` (3301) ← `fmt::v11::detail::write` (3357) ← `fmt::v11::detail::arg_formatter::operator()` (3498) ← `fmt::v11::basic_format_arg::visit` (`./base.h:2516`) ← `fmt::v11::detail::format_handler::on_format_specs` (`./format.h:3613`) ← `fmt::v11::detail::parse_replacement_field` (`./base.h:1583`) ← `fmt::v11::detail::parse_format_string` (1630) ← `fmt::v11::detail::vformat_to` (`./format-inl.h:1452`) ← `fmt::v11::vformat[abi:cxx11]` (1442) ← `fmt::v11::format` (`./format.h:4198`)                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| removed | -24.00ms | 3.0% → 0.0% |   24.0ms → 0ms |  24 → 0 | `fmt::v11::detail::parse_replacement_field` (`./base.h:1583`) ← `fmt::v11::detail::parse_format_string` (1630) ← `fmt::v11::detail::vformat_to` (`./format-inl.h:1452`) ← `fmt::v11::vformat[abi:cxx11]` (1442) ← `fmt::v11::format` (`./format.h:4198`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| removed | -21.00ms | 2.7% → 0.0% |   21.0ms → 0ms |  21 → 0 | `fmt::v11::detail::format_handler::on_format_specs` (`./format.h:3613`) ← `fmt::v11::detail::parse_replacement_field` (`./base.h:1583`) ← `fmt::v11::detail::parse_format_string` (1630) ← `fmt::v11::detail::vformat_to` (`./format-inl.h:1452`) ← `fmt::v11::vformat[abi:cxx11]` (1442) ← `fmt::v11::format` (`./format.h:4198`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| removed | -20.00ms | 2.5% → 0.0% |   20.0ms → 0ms |  20 → 0 | `fmt::v11::detail::buffer::append` (`./base.h:1829`) ← `fmt::v11::detail::copy` (2041) ← `fmt::v11::detail::copy_noinline` (`./format.h:534`) ← `fmt::v11::detail::format_handler::on_text` (3593) ← `fmt::v11::detail::parse_format_string` (`./base.h:1630`) ← `fmt::v11::detail::vformat_to` (`./format-inl.h:1452`) ← `fmt::v11::vformat[abi:cxx11]` (1442) ← `fmt::v11::format` (`./format.h:4198`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| removed | -20.00ms | 2.5% → 0.0% |   20.0ms → 0ms |  20 → 0 | `fmt::v11::detail::buffer::append` (`./base.h:1829`) ← `fmt::v11::detail::copy` (2041) ← `fmt::v11::detail::copy_noinline` (`./format.h:534`) ← `fmt::v11::detail::format_handler::on_replacement_field` (3609) ← `fmt::v11::detail::parse_replacement_field` (`./base.h:1583`) ← `fmt::v11::detail::parse_format_string` (1630) ← `fmt::v11::detail::vformat_to` (`./format-inl.h:1452`) ← `fmt::v11::vformat[abi:cxx11]` (1442) ← `fmt::v11::format` (`./format.h:4198`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| removed | -17.00ms | 2.1% → 0.0% |   17.0ms → 0ms |  17 → 0 | `fmt::v11::detail::compute_width()::count_code_points::operator()` (`./format.h:643`) ← `fmt::v11::detail::for_each_codepoint()::{lambda(char const*, char const*)#1}::operator()` ← `fmt::v11::detail::for_each_codepoint` (598) ← `fmt::v11::detail::compute_width` (638) ← `fmt::v11::detail::write` (2114) ← `fmt::v11::detail::format_handler::on_format_specs` (3613) ← `fmt::v11::detail::parse_replacement_field` (`./base.h:1583`) ← `fmt::v11::detail::parse_format_string` (1630) ← `fmt::v11::detail::vformat_to` (`./format-inl.h:1452`) ← `fmt::v11::vformat[abi:cxx11]` (1442) ← `fmt::v11::format` (`./format.h:4198`)                                                                                                                                                                                                                                                                                                                                                                                                        |
| removed | -15.00ms | 1.9% → 0.0% |   15.0ms → 0ms |  15 → 0 | `fmt::v11::detail::buffer::append` (`./base.h:1829`) ← `fmt::v11::detail::copy` (2041) ← `fmt::v11::detail::copy_noinline` (`./format.h:534`) ← `fmt::v11::detail::write_significand` (2302) ← `fmt::v11::detail::write_significand` (2314) ← `fmt::v11::detail::do_write_float()::{lambda(fmt::v11::basic_appender)#4}::operator()` ← `fmt::v11::detail::write_padded` (1631) ← `fmt::v11::detail::write_padded` (1652) ← `fmt::v11::detail::do_write_float` (2333) ← `fmt::v11::detail::write_float` (2452) ← `fmt::v11::detail::write_float` (3301) ← `fmt::v11::detail::write` (3357) ← `fmt::v11::detail::arg_formatter::operator()` (3498) ← `fmt::v11::basic_format_arg::visit` (`./base.h:2516`) ← `fmt::v11::detail::format_handler::on_format_specs` (`./format.h:3613`) ← `fmt::v11::detail::parse_replacement_field` (`./base.h:1583`) ← `fmt::v11::detail::parse_format_string` (1630) ← `fmt::v11::detail::vformat_to` (`./format-inl.h:1452`) ← `fmt::v11::vformat[abi:cxx11]` (1442) ← `fmt::v11::format` (`./format.h:4198`) |
| removed | -14.00ms | 1.8% → 0.0% |   14.0ms → 0ms |  14 → 0 | `fmt::v11::detail::parse_nonnegative_int` (`./base.h:1296`) ← `fmt::v11::detail::parse_dynamic_spec` (1384) ← `fmt::v11::detail::parse_width` (1417) ← `fmt::v11::detail::parse_format_specs` (1445) ← `fmt::v11::detail::format_handler::on_format_specs` (`./format.h:3613`) ← `fmt::v11::detail::parse_replacement_field` (`./base.h:1583`) ← `fmt::v11::detail::parse_format_string` (1630) ← `fmt::v11::detail::vformat_to` (`./format-inl.h:1452`) ← `fmt::v11::vformat[abi:cxx11]` (1442) ← `fmt::v11::format` (`./format.h:4198`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  -92.9% | -13.00ms | 1.8% → 0.2% | 14.0ms → 1.0ms |  14 → 1 | `cfree` ← `std::__new_allocator::deallocate` (`/usr/include/c++/12/bits/new_allocator.h:142`) ← `std::allocator_traits::deallocate` (`/usr/include/c++/12/bits/alloc_traits.h:495`) ← `std::__cxx11::basic_string::_M_destroy` (`/usr/include/c++/12/bits/basic_string.h:291`) ← `std::__cxx11::basic_string::_M_dispose` (283) ← `std::__cxx11::basic_string::~basic_string` (794)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| removed | -13.00ms | 1.6% → 0.0% |   13.0ms → 0ms |  13 → 0 | `fmt::v11::basic_format_arg::visit` (`./base.h:2516`) ← `fmt::v11::detail::format_handler::on_format_specs` (`./format.h:3613`) ← `fmt::v11::detail::parse_replacement_field` (`./base.h:1583`) ← `fmt::v11::detail::parse_format_string` (1630) ← `fmt::v11::detail::vformat_to` (`./format-inl.h:1452`) ← `fmt::v11::vformat[abi:cxx11]` (1442) ← `fmt::v11::format` (`./format.h:4198`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| removed | -13.00ms | 1.6% → 0.0% |   13.0ms → 0ms |  13 → 0 | `(anonymous)` ← `fmt::v11::detail::format_handler::on_replacement_field` (`./format.h:3609`) ← `fmt::v11::detail::parse_replacement_field` (`./base.h:1583`) ← `fmt::v11::detail::parse_format_string` (1630) ← `fmt::v11::detail::vformat_to` (`./format-inl.h:1452`) ← `fmt::v11::vformat[abi:cxx11]` (1442) ← `fmt::v11::format` (`./format.h:4198`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| removed | -13.00ms | 1.6% → 0.0% |   13.0ms → 0ms |  13 → 0 | `std::__cxx11::basic_string::_M_create` ← `fmt::v11::vformat[abi:cxx11]` (`./format-inl.h:1442`) ← `fmt::v11::format` (`./format.h:4198`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| removed | -12.00ms | 1.5% → 0.0% |   12.0ms → 0ms |  12 → 0 | `fmt::v11::detail::copy_noinline` (`./format.h:534`) ← `fmt::v11::detail::format_handler::on_text` (3593) ← `fmt::v11::detail::parse_format_string` (`./base.h:1630`) ← `fmt::v11::detail::vformat_to` (`./format-inl.h:1452`) ← `fmt::v11::vformat[abi:cxx11]` (1442) ← `fmt::v11::format` (`./format.h:4198`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| removed | -12.00ms | 1.5% → 0.0% |   12.0ms → 0ms |  12 → 0 | `std::__cxx11::basic_string::_M_dispose` ← `fmt::v11::detail::write_float` (`./format.h:2452`) ← `fmt::v11::detail::write_float` (3301) ← `fmt::v11::detail::write` (3357) ← `fmt::v11::detail::arg_formatter::operator()` (3498) ← `fmt::v11::basic_format_arg::visit` (`./base.h:2516`) ← `fmt::v11::detail::format_handler::on_format_specs` (`./format.h:3613`) ← `fmt::v11::detail::parse_replacement_field` (`./base.h:1583`) ← `fmt::v11::detail::parse_format_string` (1630) ← `fmt::v11::detail::vformat_to` (`./format-inl.h:1452`) ← `fmt::v11::vformat[abi:cxx11]` (1442) ← `fmt::v11::format` (`./format.h:4198`)                                                                                                                                                                                                                                                                                                                                                                                                                |
| removed | -12.00ms | 1.5% → 0.0% |   12.0ms → 0ms |  12 → 0 | `fmt::v11::detail::write_float` (`./format.h:3301`) ← `fmt::v11::detail::write` (3357) ← `fmt::v11::detail::arg_formatter::operator()` (3498) ← `fmt::v11::basic_format_arg::visit` (`./base.h:2516`) ← `fmt::v11::detail::format_handler::on_format_specs` (`./format.h:3613`) ← `fmt::v11::detail::parse_replacement_field` (`./base.h:1583`) ← `fmt::v11::detail::parse_format_string` (1630) ← `fmt::v11::detail::vformat_to` (`./format-inl.h:1452`) ← `fmt::v11::vformat[abi:cxx11]` (1442) ← `fmt::v11::format` (`./format.h:4198`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| removed | -11.00ms | 1.4% → 0.0% |   11.0ms → 0ms |  11 → 0 | `(anonymous)` ← `fmt::v11::detail::format_handler::on_format_specs` (`./format.h:3613`) ← `fmt::v11::detail::parse_replacement_field` (`./base.h:1583`) ← `fmt::v11::detail::parse_format_string` (1630) ← `fmt::v11::detail::vformat_to` (`./format-inl.h:1452`) ← `fmt::v11::vformat[abi:cxx11]` (1442) ← `fmt::v11::format` (`./format.h:4198`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
