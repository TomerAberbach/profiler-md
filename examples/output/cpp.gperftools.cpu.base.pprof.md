# CPU profile

Took 792.0ms over 792 samples (1.0ms per sample).

| Category         |     % |    Time | Samples |
| ---------------- | ----: | ------: | ------: |
| Ours             | 80.2% | 635.0ms |     635 |
| Native           |  8.8% |  70.0ms |      70 |
| Unknown          |  8.0% |  63.0ms |      63 |
| Standard library |  3.0% |  24.0ms |      24 |

Paths starting with `./` or `../` are relative to `/src/fmt/include/fmt/`.

## Call tree

Call paths to the hottest functions.

```
└── 792.0ms (100.0%) [[via 2 frames]] (anonymous)  (self 8.0%)
    ├── 715.0ms (90.3%) main  /out/profile.cpp:8
    │   ├── 696.0ms (87.9%) fmt::v11::format  ./format.h:4198
    │   │   └── 693.0ms (87.5%) fmt::v11::vformat[abi:cxx11]  ./format-inl.h:1442
    │   │       ├── 648.0ms (81.8%) fmt::v11::detail::vformat_to  :1452
    │   │       │   └── 647.0ms (81.7%) fmt::v11::detail::parse_format_string  (self 3.9%)  ./base.h:1630
    │   │       │       ├── 568.0ms (71.7%) fmt::v11::detail::parse_replacement_field  (self 3.0%)  :1583
    │   │       │       │   ├── 486.0ms (61.4%) fmt::v11::detail::format_handler::on_format_specs  (self 2.7%)  ./format.h:3613
    │   │       │       │   │   ├── 194.0ms (24.5%) fmt::v11::basic_format_arg::visit  (self 1.6%; 2.7% in 3 call stacks)  ./base.h:2516
    │   │       │       │   │   │   └── 181.0ms (22.9%) fmt::v11::detail::arg_formatter::operator()  (self 1.0%)  ./format.h:3498
    │   │       │       │   │   │       ├── 163.0ms (20.6%) fmt::v11::detail::write  :3357
    │   │       │       │   │   │       │   ├── 157.0ms (19.8%) fmt::v11::detail::write_float  (self 1.5%)  :3301
    │   │       │       │   │   │       │   │   ├── 62.0ms (7.8%) fmt::v11::detail::format_float  (self 3.3%)  :2994
    │   │       │       │   │   │       │   │   │   └── 36.0ms (4.5%) 8 more branches, largest fmt::v11::detail::format_float()::{lambda(unsigned int, char*)#1}::operator() (1.6%) and fmt::v11::detail::dragonbox::get_cached_power (1.3%)
    │   │       │       │   │   │       │   │   └── 83.0ms (10.5%) 3 more branches, largest fmt::v11::detail::write_float (10.1%)  :2452
    │   │       │       │   │   │       │   └── 5.0ms (0.6%) fmt::v11::basic_specs::localized  ./base.h:802
    │   │       │       │   │   │       └── 10.0ms (1.3%) 3 more branches, largest fmt::v11::detail::write (0.8%)  :2092
    │   │       │       │   │   ├── 103.0ms (13.0%) fmt::v11::detail::parse_format_specs  (self 6.6%)  ./base.h:1445
    │   │       │       │   │   │   ├── 21.0ms (2.7%) fmt::v11::detail::parse_width  :1417
    │   │       │       │   │   │   │   └── 21.0ms (2.7%) fmt::v11::detail::parse_dynamic_spec  (self 0.9%; 1.4% in 2 call stacks)  :1384
    │   │       │       │   │   │   │       └── 14.0ms (1.8%) fmt::v11::detail::parse_nonnegative_int  (2.4% self in 2 call stacks)  :1296
    │   │       │       │   │   │   └── 30.0ms (3.8%) 5 more branches, largest fmt::v11::detail::parse_format_specs()::{unnamed type#1}::operator() (1.1%)  :1460 and fmt::v11::detail::parse_align (0.9%)
    │   │       │       │   │   ├── 84.0ms (10.6%) fmt::v11::detail::write  :2114
    │   │       │       │   │   │   ├── 57.0ms (7.2%) [[via 2 frames]] fmt::v11::detail::for_each_codepoint()::{lambda(char const*, char const*)#1}::operator()  ./format.h
    │   │       │       │   │   │   │   ├── 38.0ms (4.8%) fmt::v11::detail::utf8_decode  :556
    │   │       │       │   │   │   │   └── 17.0ms (2.1%) fmt::v11::detail::compute_width()::count_code_points::operator()  :643
    │   │       │       │   │   │   └── 22.0ms (2.8%) fmt::v11::detail::write_padded  (2.0% self in 4 call stacks)  :1631
    │   │       │       │   │   │       ├── 5.0ms (0.6%) [[via 3 frames]] fmt::v11::detail::buffer::push_back  (self 0.5%; 2.1% in 7 call stacks)  ./base.h:1816
    │   │       │       │   │   │       └── 15.0ms (1.9%) 2 more branches, largest fmt::v11::detail::write()::{lambda(fmt::v11::basic_appender)#1}::operator() (1.8%)
    │   │       │       │   │   └── 84.0ms (10.6%) 7 more branches, largest fmt::v11::detail::write_int (7.8%)  :2017 and fmt::v11::detail::get_arg (1.1%)
    │   │       │       │   └── 58.0ms (7.3%) 4 more branches, largest fmt::v11::detail::format_handler::on_replacement_field (6.3%)  ./format.h:3609 and fmt::v11::detail::format_handler::on_arg_id (0.6%)
    │   │       │       └── 47.0ms (5.9%) fmt::v11::detail::format_handler::on_text  ./format.h:3593
    │   │       │           ├── 39.0ms (4.9%) fmt::v11::detail::copy_noinline  (self 1.5%; 2.8% in 5 call stacks)  :534
    │   │       │           │   └── 27.0ms (3.4%) fmt::v11::detail::copy  ./base.h:2041
    │   │       │           │       └── 27.0ms (3.4%) fmt::v11::detail::buffer::append  (self 2.5%; 9.7% in 6 call stacks)  :1829
    │   │       │           │           └── 7.0ms (0.9%) fmt::v11::detail::buffer::try_reserve  (2.1% self in 10 call stacks)  :1812
    │   │       │           └── 5.0ms (0.6%) fmt::v11::context::out  ./base.h:2690
    │   │       └── 42.0ms (5.3%) 4 more branches, largest fmt::v11::to_string (3.3%)  ./format.h:882 and std::__cxx11::basic_string::_M_create (1.6%)
    │   └── 18.0ms (2.3%) 1 more branch, std::__cxx11::basic_string::~basic_string  /usr/include/c++/12/bits/basic_string.h:794
    └── 12.0ms (1.5%) operator delete
```

## Hottest functions

### Self time

Functions with the most time spent within the function body, excluding callees.

|    % |   Time | Samples | Function                                                           | Location          |
| ---: | -----: | ------: | ------------------------------------------------------------------ | ----------------- |
| 9.7% | 77.0ms |      77 | `fmt::v11::detail::buffer::append`                                 | `./base.h:1829`   |
| 8.0% | 63.0ms |      63 | `(anonymous)`                                                      | `<unknown>`       |
| 6.6% | 52.0ms |      52 | `fmt::v11::detail::parse_format_specs`                             | `./base.h:1445`   |
| 4.8% | 38.0ms |      38 | `fmt::v11::detail::utf8_decode`                                    | `./format.h:556`  |
| 3.9% | 31.0ms |      31 | `fmt::v11::detail::parse_format_string`                            | `./base.h:1630`   |
| 3.3% | 26.0ms |      26 | `fmt::v11::detail::format_float`                                   | `./format.h:2994` |
| 3.0% | 24.0ms |      24 | `fmt::v11::detail::parse_replacement_field`                        | `./base.h:1583`   |
| 2.8% | 22.0ms |      22 | `fmt::v11::detail::copy_noinline`                                  | `./format.h:534`  |
| 2.7% | 21.0ms |      21 | `fmt::v11::basic_format_arg::visit`                                | `./base.h:2516`   |
| 2.7% | 21.0ms |      21 | `fmt::v11::detail::format_handler::on_format_specs`                | `./format.h:3613` |
| 2.4% | 19.0ms |      19 | `fmt::v11::detail::parse_nonnegative_int`                          | `./base.h:1296`   |
| 2.1% | 17.0ms |      17 | `fmt::v11::detail::buffer::try_reserve`                            | `./base.h:1812`   |
| 2.1% | 17.0ms |      17 | `fmt::v11::detail::buffer::push_back`                              | `./base.h:1816`   |
| 2.1% | 17.0ms |      17 | `fmt::v11::detail::compute_width()::count_code_points::operator()` | `./format.h:643`  |
| 2.0% | 16.0ms |      16 | `fmt::v11::detail::write_padded`                                   | `./format.h:1631` |
| 1.8% | 14.0ms |      14 | `fmt::v11::detail::write_float`                                    | `./format.h:3301` |
| 1.8% | 14.0ms |      14 | `cfree`                                                            | `<unknown>`       |
| 1.6% | 13.0ms |      13 | `std::__cxx11::basic_string::_M_create`                            | `<unknown>`       |
| 1.5% | 12.0ms |      12 | `std::__cxx11::basic_string::_M_dispose`                           | `<unknown>`       |
| 1.5% | 12.0ms |      12 | `operator delete`                                                  | `<unknown>`       |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Ours

|    % |   Time | Samples | Function                                                                        | Location          |
| ---: | -----: | ------: | ------------------------------------------------------------------------------- | ----------------- |
| 9.7% | 77.0ms |      77 | `fmt::v11::detail::buffer::append`                                              | `./base.h:1829`   |
| 6.6% | 52.0ms |      52 | `fmt::v11::detail::parse_format_specs`                                          | `./base.h:1445`   |
| 4.8% | 38.0ms |      38 | `fmt::v11::detail::utf8_decode`                                                 | `./format.h:556`  |
| 3.9% | 31.0ms |      31 | `fmt::v11::detail::parse_format_string`                                         | `./base.h:1630`   |
| 3.3% | 26.0ms |      26 | `fmt::v11::detail::format_float`                                                | `./format.h:2994` |
| 3.0% | 24.0ms |      24 | `fmt::v11::detail::parse_replacement_field`                                     | `./base.h:1583`   |
| 2.8% | 22.0ms |      22 | `fmt::v11::detail::copy_noinline`                                               | `./format.h:534`  |
| 2.7% | 21.0ms |      21 | `fmt::v11::basic_format_arg::visit`                                             | `./base.h:2516`   |
| 2.7% | 21.0ms |      21 | `fmt::v11::detail::format_handler::on_format_specs`                             | `./format.h:3613` |
| 2.4% | 19.0ms |      19 | `fmt::v11::detail::parse_nonnegative_int`                                       | `./base.h:1296`   |
| 2.1% | 17.0ms |      17 | `fmt::v11::detail::buffer::try_reserve`                                         | `./base.h:1812`   |
| 2.1% | 17.0ms |      17 | `fmt::v11::detail::buffer::push_back`                                           | `./base.h:1816`   |
| 2.1% | 17.0ms |      17 | `fmt::v11::detail::compute_width()::count_code_points::operator()`              | `./format.h:643`  |
| 2.0% | 16.0ms |      16 | `fmt::v11::detail::write_padded`                                                | `./format.h:1631` |
| 1.8% | 14.0ms |      14 | `fmt::v11::detail::write_float`                                                 | `./format.h:3301` |
| 1.4% | 11.0ms |      11 | `fmt::v11::basic_format_args::get`                                              | `./base.h:2618`   |
| 1.4% | 11.0ms |      11 | `fmt::v11::detail::format_float()::{lambda(unsigned int, char*)#1}::operator()` | `./format.h`      |
| 1.4% | 11.0ms |      11 | `fmt::v11::detail::parse_dynamic_spec`                                          | `./base.h:1384`   |
| 1.3% | 10.0ms |      10 | `fmt::v11::detail::do_write_float`                                              | `./format.h:2333` |
| 1.1% |  9.0ms |       9 | `fmt::v11::detail::to_unsigned`                                                 | `./base.h:437`    |

##### Native

|    % |   Time | Samples | Function                                 | Location    |
| ---: | -----: | ------: | ---------------------------------------- | ----------- |
| 1.8% | 14.0ms |      14 | `cfree`                                  | `<unknown>` |
| 1.6% | 13.0ms |      13 | `std::__cxx11::basic_string::_M_create`  | `<unknown>` |
| 1.5% | 12.0ms |      12 | `std::__cxx11::basic_string::_M_dispose` | `<unknown>` |
| 1.5% | 12.0ms |      12 | `operator delete`                        | `<unknown>` |
| 1.3% | 10.0ms |      10 | `__libc_malloc`                          | `<unknown>` |
| 0.9% |  7.0ms |       7 | `_init`                                  | `<unknown>` |
| 0.3% |  2.0ms |       2 | `operator new`                           | `<unknown>` |

##### Unknown

|    % |   Time | Samples | Function      | Location    |
| ---: | -----: | ------: | ------------- | ----------- |
| 8.0% | 63.0ms |      63 | `(anonymous)` | `<unknown>` |

##### Standard library

|    % |  Time | Samples | Function                                                 | Location                                        |
| ---: | ----: | ------: | -------------------------------------------------------- | ----------------------------------------------- |
| 0.6% | 5.0ms |       5 | `std::__cxx11::basic_string::~basic_string`              | `/usr/include/c++/12/bits/basic_string.h:794`   |
| 0.5% | 4.0ms |       4 | `std::__cxx11::basic_string::_M_data`                    | `/usr/include/c++/12/bits/basic_string.h:233`   |
| 0.4% | 3.0ms |       3 | `std::char_traits::copy`                                 | `/usr/include/c++/12/bits/char_traits.h:423`    |
| 0.4% | 3.0ms |       3 | `std::__cxx11::basic_string::_M_construct`               | `/usr/include/c++/12/bits/basic_string.tcc:217` |
| 0.4% | 3.0ms |       3 | `std::char_traits::assign`                               | `/usr/include/c++/12/bits/char_traits.h:347`    |
| 0.3% | 2.0ms |       2 | `std::__cxx11::basic_string::_Alloc_hider::_Alloc_hider` | `/usr/include/c++/12/bits/basic_string.h:199`   |
| 0.3% | 2.0ms |       2 | `std::__cxx11::basic_string::_M_destroy`                 | `/usr/include/c++/12/bits/basic_string.h:291`   |
| 0.1% | 1.0ms |       1 | `std::__cxx11::basic_string::_M_dispose`                 | `/usr/include/c++/12/bits/basic_string.h:283`   |
| 0.1% | 1.0ms |       1 | `std::__cxx11::basic_string::_M_length`                  | `/usr/include/c++/12/bits/basic_string.h:228`   |

#### Lines

Lines with the largest contribution to each function's self time.

##### `fmt::v11::detail::buffer::append` (`./base.h:1829`)

|     % |   Time | Samples | Location        |
| ----: | -----: | ------: | --------------- |
| 62.3% | 48.0ms |      48 | `./base.h:1837` |
| 16.9% | 13.0ms |      13 | `./base.h:1833` |
|  9.1% |  7.0ms |       7 | `./base.h:1830` |
|  9.1% |  7.0ms |       7 | `./base.h:1838` |
|  2.6% |  2.0ms |       2 | `./base.h:1836` |

##### `fmt::v11::detail::parse_format_specs` (`./base.h:1445`)

|     % |   Time | Samples | Location        |
| ----: | -----: | ------: | --------------- |
| 42.3% | 22.0ms |      22 | `./base.h:1482` |
| 25.0% | 13.0ms |      13 | `./base.h:1580` |
| 15.4% |  8.0ms |       8 | `./base.h:1577` |
|  7.7% |  4.0ms |       4 | `./base.h:1455` |
|  5.8% |  3.0ms |       3 | `./base.h:1496` |

##### `fmt::v11::detail::utf8_decode` (`./format.h:556`)

|     % |   Time | Samples | Location         |
| ----: | -----: | ------: | ---------------- |
| 39.5% | 15.0ms |      15 | `./format.h:583` |
| 23.7% |  9.0ms |       9 | `./format.h:561` |
| 13.2% |  5.0ms |       5 | `./format.h:588` |
|  7.9% |  3.0ms |       3 | `./format.h:558` |
|  5.3% |  2.0ms |       2 | `./format.h:578` |

##### `fmt::v11::detail::parse_format_string` (`./base.h:1630`)

|     % |   Time | Samples | Location        |
| ----: | -----: | ------: | --------------- |
| 41.9% | 13.0ms |      13 | `./base.h:1638` |
| 29.0% |  9.0ms |       9 | `./base.h:1635` |
| 22.6% |  7.0ms |       7 | `./base.h:1639` |
|  6.5% |  2.0ms |       2 | `./base.h:1634` |

##### `fmt::v11::detail::format_float` (`./format.h:2994`)

|     % |  Time | Samples | Location          |
| ----: | ----: | ------: | ----------------- |
| 19.2% | 5.0ms |       5 | `./format.h:3082` |
| 19.2% | 5.0ms |       5 | `./format.h:3171` |
| 11.5% | 3.0ms |       3 | `./format.h:3185` |
|  7.7% | 2.0ms |       2 | `./format.h:3290` |
|  7.7% | 2.0ms |       2 | `./format.h:3071` |

##### `fmt::v11::detail::parse_replacement_field` (`./base.h:1583`)

|     % |   Time | Samples | Location        |
| ----: | -----: | ------: | --------------- |
| 41.7% | 10.0ms |      10 | `./base.h:1593` |
| 16.7% |  4.0ms |       4 | `./base.h:1627` |
| 16.7% |  4.0ms |       4 | `./base.h:1624` |
| 12.5% |  3.0ms |       3 | `./base.h:1588` |
| 12.5% |  3.0ms |       3 | `./base.h:1583` |

##### `fmt::v11::detail::copy_noinline` (`./format.h:534`)

|     % |   Time | Samples | Location         |
| ----: | -----: | ------: | ---------------- |
| 77.3% | 17.0ms |      17 | `./format.h:537` |
| 22.7% |  5.0ms |       5 | `./format.h:534` |

##### `fmt::v11::basic_format_arg::visit` (`./base.h:2516`)

|     % |   Time | Samples | Location        |
| ----: | -----: | ------: | --------------- |
| 76.2% | 16.0ms |      16 | `./base.h:2518` |
|  9.5% |  2.0ms |       2 | `./base.h:2537` |
|  9.5% |  2.0ms |       2 | `./base.h:2516` |
|  4.8% |  1.0ms |       1 | `./base.h:2531` |

##### `fmt::v11::detail::format_handler::on_format_specs` (`./format.h:3613`)

|     % |   Time | Samples | Location          |
| ----: | -----: | ------: | ----------------- |
| 57.1% | 12.0ms |      12 | `./format.h:3628` |
| 19.0% |  4.0ms |       4 | `./format.h:3619` |
| 14.3% |  3.0ms |       3 | `./format.h:3630` |
|  4.8% |  1.0ms |       1 | `./format.h:3620` |
|  4.8% |  1.0ms |       1 | `./format.h:3613` |

##### `fmt::v11::detail::parse_nonnegative_int` (`./base.h:1296`)

|     % |   Time | Samples | Location        |
| ----: | -----: | ------: | --------------- |
| 63.2% | 12.0ms |      12 | `./base.h:1305` |
| 21.1% |  4.0ms |       4 | `./base.h:1306` |
| 10.5% |  2.0ms |       2 | `./base.h:1303` |
|  5.3% |  1.0ms |       1 | `./base.h:1309` |

##### `fmt::v11::detail::buffer::try_reserve` (`./base.h:1812`)

|      % |   Time | Samples | Location        |
| -----: | -----: | ------: | --------------- |
| 100.0% | 17.0ms |      17 | `./base.h:1813` |

##### `fmt::v11::detail::buffer::push_back` (`./base.h:1816`)

|     % |   Time | Samples | Location        |
| ----: | -----: | ------: | --------------- |
| 94.1% | 16.0ms |      16 | `./base.h:1818` |
|  5.9% |  1.0ms |       1 | `./base.h:1817` |

##### `fmt::v11::detail::compute_width()::count_code_points::operator()` (`./format.h:643`)

|     % |   Time | Samples | Location         |
| ----: | -----: | ------: | ---------------- |
| 88.2% | 15.0ms |      15 | `./format.h:644` |
| 11.8% |  2.0ms |       2 | `./format.h:648` |

##### `fmt::v11::detail::write_padded` (`./format.h:1631`)

|     % |  Time | Samples | Location          |
| ----: | ----: | ------: | ----------------- |
| 31.3% | 5.0ms |       5 | `./format.h:1644` |
| 18.8% | 3.0ms |       3 | `./format.h:1635` |
| 12.5% | 2.0ms |       2 | `./format.h:1641` |
| 12.5% | 2.0ms |       2 | `./format.h:1646` |
| 12.5% | 2.0ms |       2 | `./format.h:1636` |

##### `fmt::v11::detail::write_float` (`./format.h:3301`)

|     % |  Time | Samples | Location          |
| ----: | ----: | ------: | ----------------- |
| 28.6% | 4.0ms |       4 | `./format.h:3316` |
| 21.4% | 3.0ms |       3 | `./format.h:3301` |
| 14.3% | 2.0ms |       2 | `./format.h:3351` |
| 14.3% | 2.0ms |       2 | `./format.h:3353` |
| 14.3% | 2.0ms |       2 | `./format.h:3336` |

##### `fmt::v11::basic_format_args::get` (`./base.h:2618`)

|     % |  Time | Samples | Location        |
| ----: | ----: | ------: | --------------- |
| 27.3% | 3.0ms |       3 | `./base.h:2625` |
| 27.3% | 3.0ms |       3 | `./base.h:2624` |
| 27.3% | 3.0ms |       3 | `./base.h:2626` |
| 18.2% | 2.0ms |       2 | `./base.h:2620` |

##### `fmt::v11::detail::format_float()::{lambda(unsigned int, char*)#1}::operator()` (`./format.h`)

|     % |  Time | Samples | Location          |
| ----: | ----: | ------: | ----------------- |
| 54.5% | 6.0ms |       6 | `./format.h:3159` |
| 27.3% | 3.0ms |       3 | `./format.h:3158` |
|  9.1% | 1.0ms |       1 | `./format.h:3140` |
|  9.1% | 1.0ms |       1 | `./format.h:3138` |

##### `fmt::v11::detail::parse_dynamic_spec` (`./base.h:1384`)

|     % |  Time | Samples | Location        |
| ----: | ----: | ------: | --------------- |
| 36.4% | 4.0ms |       4 | `./base.h:1384` |
| 27.3% | 3.0ms |       3 | `./base.h:1414` |
| 18.2% | 2.0ms |       2 | `./base.h:1390` |
| 18.2% | 2.0ms |       2 | `./base.h:1392` |

##### `fmt::v11::detail::do_write_float` (`./format.h:2333`)

|     % |  Time | Samples | Location          |
| ----: | ----: | ------: | ----------------- |
| 30.0% | 3.0ms |       3 | `./format.h:2410` |
| 20.0% | 2.0ms |       2 | `./format.h:2333` |
| 10.0% | 1.0ms |       1 | `./format.h:2427` |
| 10.0% | 1.0ms |       1 | `./format.h:2385` |
| 10.0% | 1.0ms |       1 | `./format.h:2346` |

##### `fmt::v11::detail::to_unsigned` (`./base.h:437`)

|      % |  Time | Samples | Location       |
| -----: | ----: | ------: | -------------- |
| 100.0% | 9.0ms |       9 | `./base.h:438` |

##### `std::__cxx11::basic_string::~basic_string` (`/usr/include/c++/12/bits/basic_string.h:794`)

|      % |  Time | Samples | Location                                      |
| -----: | ----: | ------: | --------------------------------------------- |
| 100.0% | 5.0ms |       5 | `/usr/include/c++/12/bits/basic_string.h:795` |

##### `std::__cxx11::basic_string::_M_data` (`/usr/include/c++/12/bits/basic_string.h:233`)

|      % |  Time | Samples | Location                                      |
| -----: | ----: | ------: | --------------------------------------------- |
| 100.0% | 4.0ms |       4 | `/usr/include/c++/12/bits/basic_string.h:234` |

##### `std::char_traits::copy` (`/usr/include/c++/12/bits/char_traits.h:423`)

|     % |  Time | Samples | Location                                     |
| ----: | ----: | ------: | -------------------------------------------- |
| 66.7% | 2.0ms |       2 | `/usr/include/c++/12/bits/char_traits.h:431` |
| 33.3% | 1.0ms |       1 | `/usr/include/c++/12/bits/char_traits.h:425` |

##### `std::__cxx11::basic_string::_M_construct` (`/usr/include/c++/12/bits/basic_string.tcc:217`)

|      % |  Time | Samples | Location                                        |
| -----: | ----: | ------: | ----------------------------------------------- |
| 100.0% | 3.0ms |       3 | `/usr/include/c++/12/bits/basic_string.tcc:221` |

##### `std::char_traits::assign` (`/usr/include/c++/12/bits/char_traits.h:347`)

|      % |  Time | Samples | Location                                     |
| -----: | ----: | ------: | -------------------------------------------- |
| 100.0% | 3.0ms |       3 | `/usr/include/c++/12/bits/char_traits.h:354` |

##### `std::__cxx11::basic_string::_Alloc_hider::_Alloc_hider` (`/usr/include/c++/12/bits/basic_string.h:199`)

|      % |  Time | Samples | Location                                      |
| -----: | ----: | ------: | --------------------------------------------- |
| 100.0% | 2.0ms |       2 | `/usr/include/c++/12/bits/basic_string.h:200` |

##### `std::__cxx11::basic_string::_M_destroy` (`/usr/include/c++/12/bits/basic_string.h:291`)

|      % |  Time | Samples | Location                                      |
| -----: | ----: | ------: | --------------------------------------------- |
| 100.0% | 2.0ms |       2 | `/usr/include/c++/12/bits/basic_string.h:292` |

##### `std::__cxx11::basic_string::_M_dispose` (`/usr/include/c++/12/bits/basic_string.h:283`)

|      % |  Time | Samples | Location                                      |
| -----: | ----: | ------: | --------------------------------------------- |
| 100.0% | 1.0ms |       1 | `/usr/include/c++/12/bits/basic_string.h:285` |

##### `std::__cxx11::basic_string::_M_length` (`/usr/include/c++/12/bits/basic_string.h:228`)

|      % |  Time | Samples | Location                                      |
| -----: | ----: | ------: | --------------------------------------------- |
| 100.0% | 1.0ms |       1 | `/usr/include/c++/12/bits/basic_string.h:229` |

#### Callers

Callers with the largest contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `fmt::v11::detail::buffer::append` (`./base.h:1829`)

|      % |   Time | Samples | Caller                   | Location        |
| -----: | -----: | ------: | ------------------------ | --------------- |
| 100.0% | 77.0ms |      77 | `fmt::v11::detail::copy` | `./base.h:2041` |

##### `(anonymous)` (`<unknown>`)

|     % |   Time | Samples | Caller                                                   | Location              |
| ----: | -----: | ------: | -------------------------------------------------------- | --------------------- |
| 44.4% | 28.0ms |      28 | `fmt::v11::vformat[abi:cxx11]`                           | `./format-inl.h:1442` |
| 20.6% | 13.0ms |      13 | `fmt::v11::detail::format_handler::on_replacement_field` | `./format.h:3609`     |
| 17.5% | 11.0ms |      11 | `fmt::v11::detail::format_handler::on_format_specs`      | `./format.h:3613`     |
| 11.1% |  7.0ms |       7 | `cfree`                                                  | `<unknown>`           |
|  6.3% |  4.0ms |       4 | `(anonymous)`                                            | `<unknown>`           |

##### `fmt::v11::detail::parse_format_specs` (`./base.h:1445`)

|      % |   Time | Samples | Caller                                              | Location          |
| -----: | -----: | ------: | --------------------------------------------------- | ----------------- |
| 100.0% | 52.0ms |      52 | `fmt::v11::detail::format_handler::on_format_specs` | `./format.h:3613` |

##### `fmt::v11::detail::utf8_decode` (`./format.h:556`)

|      % |   Time | Samples | Caller                                                                                     | Location     |
| -----: | -----: | ------: | ------------------------------------------------------------------------------------------ | ------------ |
| 100.0% | 38.0ms |      38 | `fmt::v11::detail::for_each_codepoint()::{lambda(char const*, char const*)#1}::operator()` | `./format.h` |

##### `fmt::v11::detail::parse_format_string` (`./base.h:1630`)

|      % |   Time | Samples | Caller                         | Location              |
| -----: | -----: | ------: | ------------------------------ | --------------------- |
| 100.0% | 31.0ms |      31 | `fmt::v11::detail::vformat_to` | `./format-inl.h:1452` |

##### `fmt::v11::detail::format_float` (`./format.h:2994`)

|      % |   Time | Samples | Caller                          | Location          |
| -----: | -----: | ------: | ------------------------------- | ----------------- |
| 100.0% | 26.0ms |      26 | `fmt::v11::detail::write_float` | `./format.h:3301` |

##### `fmt::v11::detail::parse_replacement_field` (`./base.h:1583`)

|      % |   Time | Samples | Caller                                  | Location        |
| -----: | -----: | ------: | --------------------------------------- | --------------- |
| 100.0% | 24.0ms |      24 | `fmt::v11::detail::parse_format_string` | `./base.h:1630` |

##### `fmt::v11::detail::copy_noinline` (`./format.h:534`)

|     % |   Time | Samples | Caller                                                   | Location          |
| ----: | -----: | ------: | -------------------------------------------------------- | ----------------- |
| 54.5% | 12.0ms |      12 | `fmt::v11::detail::format_handler::on_text`              | `./format.h:3593` |
| 22.7% |  5.0ms |       5 | `fmt::v11::detail::format_handler::on_replacement_field` | `./format.h:3609` |
|  9.1% |  2.0ms |       2 | `fmt::v11::detail::write_significand`                    | `./format.h:2302` |
|  9.1% |  2.0ms |       2 | `fmt::v11::format`                                       | `./format.h:4198` |
|  4.5% |  1.0ms |       1 | `fmt::v11::detail::parse_format_string`                  | `./base.h:1630`   |

##### `fmt::v11::basic_format_arg::visit` (`./base.h:2516`)

|     % |   Time | Samples | Caller                                                   | Location          |
| ----: | -----: | ------: | -------------------------------------------------------- | ----------------- |
| 61.9% | 13.0ms |      13 | `fmt::v11::detail::format_handler::on_format_specs`      | `./format.h:3613` |
| 28.6% |  6.0ms |       6 | `fmt::v11::detail::format_handler::on_replacement_field` | `./format.h:3609` |
|  9.5% |  2.0ms |       2 | `fmt::v11::detail::parse_replacement_field`              | `./base.h:1583`   |

##### `fmt::v11::detail::format_handler::on_format_specs` (`./format.h:3613`)

|      % |   Time | Samples | Caller                                      | Location        |
| -----: | -----: | ------: | ------------------------------------------- | --------------- |
| 100.0% | 21.0ms |      21 | `fmt::v11::detail::parse_replacement_field` | `./base.h:1583` |

##### `fmt::v11::detail::parse_nonnegative_int` (`./base.h:1296`)

|      % |   Time | Samples | Caller                                 | Location        |
| -----: | -----: | ------: | -------------------------------------- | --------------- |
| 100.0% | 19.0ms |      19 | `fmt::v11::detail::parse_dynamic_spec` | `./base.h:1384` |

##### `fmt::v11::detail::buffer::try_reserve` (`./base.h:1812`)

|     % |   Time | Samples | Caller                                | Location         |
| ----: | -----: | ------: | ------------------------------------- | ---------------- |
| 64.7% | 11.0ms |      11 | `fmt::v11::detail::buffer::append`    | `./base.h:1829`  |
| 23.5% |  4.0ms |       4 | `fmt::v11::detail::buffer::push_back` | `./base.h:1816`  |
| 11.8% |  2.0ms |       2 | `fmt::v11::detail::reserve`           | `./format.h:474` |

##### `fmt::v11::detail::buffer::push_back` (`./base.h:1816`)

|      % |   Time | Samples | Caller                                | Location        |
| -----: | -----: | ------: | ------------------------------------- | --------------- |
| 100.0% | 17.0ms |      17 | `fmt::v11::basic_appender::operator=` | `./base.h:2465` |

##### `fmt::v11::detail::compute_width()::count_code_points::operator()` (`./format.h:643`)

|      % |   Time | Samples | Caller                                                                                     | Location     |
| -----: | -----: | ------: | ------------------------------------------------------------------------------------------ | ------------ |
| 100.0% | 17.0ms |      17 | `fmt::v11::detail::for_each_codepoint()::{lambda(char const*, char const*)#1}::operator()` | `./format.h` |

##### `fmt::v11::detail::write_padded` (`./format.h:1631`)

|     % |   Time | Samples | Caller                           | Location          |
| ----: | -----: | ------: | -------------------------------- | ----------------- |
| 81.3% | 13.0ms |      13 | `fmt::v11::detail::write_padded` | `./format.h:1652` |
| 12.5% |  2.0ms |       2 | `fmt::v11::detail::write`        | `./format.h:2114` |
|  6.3% |  1.0ms |       1 | `fmt::v11::detail::write_float`  | `./format.h:2452` |

##### `fmt::v11::detail::write_float` (`./format.h:3301`)

|     % |   Time | Samples | Caller                                              | Location          |
| ----: | -----: | ------: | --------------------------------------------------- | ----------------- |
| 85.7% | 12.0ms |      12 | `fmt::v11::detail::write`                           | `./format.h:3357` |
| 14.3% |  2.0ms |       2 | `fmt::v11::detail::format_handler::on_format_specs` | `./format.h:3613` |

##### `cfree` (`<unknown>`)

|      % |   Time | Samples | Caller                             | Location                                       |
| -----: | -----: | ------: | ---------------------------------- | ---------------------------------------------- |
| 100.0% | 14.0ms |      14 | `std::__new_allocator::deallocate` | `/usr/include/c++/12/bits/new_allocator.h:142` |

##### `std::__cxx11::basic_string::_M_create` (`<unknown>`)

|      % |   Time | Samples | Caller                         | Location              |
| -----: | -----: | ------: | ------------------------------ | --------------------- |
| 100.0% | 13.0ms |      13 | `fmt::v11::vformat[abi:cxx11]` | `./format-inl.h:1442` |

##### `std::__cxx11::basic_string::_M_dispose` (`<unknown>`)

|      % |   Time | Samples | Caller                          | Location          |
| -----: | -----: | ------: | ------------------------------- | ----------------- |
| 100.0% | 12.0ms |      12 | `fmt::v11::detail::write_float` | `./format.h:2452` |

##### `operator delete` (`<unknown>`)

|      % |   Time | Samples | Caller        | Location    |
| -----: | -----: | ------: | ------------- | ----------- |
| 100.0% | 12.0ms |      12 | `(anonymous)` | `<unknown>` |

##### `fmt::v11::basic_format_args::get` (`./base.h:2618`)

|      % |   Time | Samples | Caller                   | Location        |
| -----: | -----: | ------: | ------------------------ | --------------- |
| 100.0% | 11.0ms |      11 | `fmt::v11::context::arg` | `./base.h:2680` |

##### `fmt::v11::detail::format_float()::{lambda(unsigned int, char*)#1}::operator()` (`./format.h`)

|      % |   Time | Samples | Caller                           | Location          |
| -----: | -----: | ------: | -------------------------------- | ----------------- |
| 100.0% | 11.0ms |      11 | `fmt::v11::detail::format_float` | `./format.h:2994` |

##### `fmt::v11::detail::parse_dynamic_spec` (`./base.h:1384`)

|     % |  Time | Samples | Caller                                              | Location          |
| ----: | ----: | ------: | --------------------------------------------------- | ----------------- |
| 63.6% | 7.0ms |       7 | `fmt::v11::detail::parse_width`                     | `./base.h:1417`   |
| 36.4% | 4.0ms |       4 | `fmt::v11::detail::format_handler::on_format_specs` | `./format.h:3613` |

##### `fmt::v11::detail::do_write_float` (`./format.h:2333`)

|     % |  Time | Samples | Caller                          | Location          |
| ----: | ----: | ------: | ------------------------------- | ----------------- |
| 90.0% | 9.0ms |       9 | `fmt::v11::detail::write_float` | `./format.h:2452` |
| 10.0% | 1.0ms |       1 | `fmt::v11::detail::write`       | `./format.h:3357` |

##### `__libc_malloc` (`<unknown>`)

|     % |  Time | Samples | Caller                                     | Location                                        |
| ----: | ----: | ------: | ------------------------------------------ | ----------------------------------------------- |
| 90.0% | 9.0ms |       9 | `operator new`                             | `<unknown>`                                     |
| 10.0% | 1.0ms |       1 | `std::__cxx11::basic_string::_M_construct` | `/usr/include/c++/12/bits/basic_string.tcc:217` |

##### `fmt::v11::detail::to_unsigned` (`./base.h:437`)

|     % |  Time | Samples | Caller                                         | Location          |
| ----: | ----: | ------: | ---------------------------------------------- | ----------------- |
| 44.4% | 4.0ms |       4 | `fmt::v11::detail::buffer::append`             | `./base.h:1829`   |
| 44.4% | 4.0ms |       4 | `fmt::v11::detail::do_format_decimal`          | `./format.h:1179` |
| 11.1% | 1.0ms |       1 | `fmt::v11::detail::size_padding::size_padding` | `./format.h:2000` |

##### `_init` (`<unknown>`)

|     % |  Time | Samples | Caller                                                   | Location          |
| ----: | ----: | ------: | -------------------------------------------------------- | ----------------- |
| 57.1% | 4.0ms |       4 | `fmt::v11::detail::write_float`                          | `./format.h:2452` |
| 28.6% | 2.0ms |       2 | `fmt::v11::detail::format_handler::on_format_specs`      | `./format.h:3613` |
| 14.3% | 1.0ms |       1 | `fmt::v11::detail::format_handler::on_replacement_field` | `./format.h:3609` |

##### `std::__cxx11::basic_string::~basic_string` (`/usr/include/c++/12/bits/basic_string.h:794`)

|      % |  Time | Samples | Caller                                              | Location          |
| -----: | ----: | ------: | --------------------------------------------------- | ----------------- |
| 100.0% | 5.0ms |       5 | `fmt::v11::detail::digit_grouping::~digit_grouping` | `./format.h:1822` |

##### `std::__cxx11::basic_string::_M_data` (`/usr/include/c++/12/bits/basic_string.h:233`)

|     % |  Time | Samples | Caller                                      | Location                                      |
| ----: | ----: | ------: | ------------------------------------------- | --------------------------------------------- |
| 75.0% | 3.0ms |       3 | `std::__cxx11::basic_string::_M_set_length` | `/usr/include/c++/12/bits/basic_string.h:265` |
| 25.0% | 1.0ms |       1 | `std::__cxx11::basic_string::_M_is_local`   | `/usr/include/c++/12/bits/basic_string.h:273` |

##### `std::char_traits::copy` (`/usr/include/c++/12/bits/char_traits.h:423`)

|      % |  Time | Samples | Caller                                | Location                                      |
| -----: | ----: | ------: | ------------------------------------- | --------------------------------------------- |
| 100.0% | 3.0ms |       3 | `std::__cxx11::basic_string::_S_copy` | `/usr/include/c++/12/bits/basic_string.h:418` |

##### `std::__cxx11::basic_string::_M_construct` (`/usr/include/c++/12/bits/basic_string.tcc:217`)

|      % |  Time | Samples | Caller                                     | Location                                      |
| -----: | ----: | ------: | ------------------------------------------ | --------------------------------------------- |
| 100.0% | 3.0ms |       3 | `std::__cxx11::basic_string::basic_string` | `/usr/include/c++/12/bits/basic_string.h:612` |

##### `std::char_traits::assign` (`/usr/include/c++/12/bits/char_traits.h:347`)

|      % |  Time | Samples | Caller                                      | Location                                      |
| -----: | ----: | ------: | ------------------------------------------- | --------------------------------------------- |
| 100.0% | 3.0ms |       3 | `std::__cxx11::basic_string::_M_set_length` | `/usr/include/c++/12/bits/basic_string.h:265` |

##### `operator new` (`<unknown>`)

|     % |  Time | Samples | Caller                                     | Location                                        |
| ----: | ----: | ------: | ------------------------------------------ | ----------------------------------------------- |
| 50.0% | 1.0ms |       1 | `std::__cxx11::basic_string::_M_construct` | `/usr/include/c++/12/bits/basic_string.tcc:217` |
| 50.0% | 1.0ms |       1 | `fmt::v11::vformat[abi:cxx11]`             | `./format-inl.h:1442`                           |

##### `std::__cxx11::basic_string::_Alloc_hider::_Alloc_hider` (`/usr/include/c++/12/bits/basic_string.h:199`)

|      % |  Time | Samples | Caller                                     | Location                                      |
| -----: | ----: | ------: | ------------------------------------------ | --------------------------------------------- |
| 100.0% | 2.0ms |       2 | `std::__cxx11::basic_string::basic_string` | `/usr/include/c++/12/bits/basic_string.h:612` |

##### `std::__cxx11::basic_string::_M_destroy` (`/usr/include/c++/12/bits/basic_string.h:291`)

|      % |  Time | Samples | Caller                                   | Location                                      |
| -----: | ----: | ------: | ---------------------------------------- | --------------------------------------------- |
| 100.0% | 2.0ms |       2 | `std::__cxx11::basic_string::_M_dispose` | `/usr/include/c++/12/bits/basic_string.h:283` |

##### `std::__cxx11::basic_string::_M_dispose` (`/usr/include/c++/12/bits/basic_string.h:283`)

|      % |  Time | Samples | Caller                                      | Location                                      |
| -----: | ----: | ------: | ------------------------------------------- | --------------------------------------------- |
| 100.0% | 1.0ms |       1 | `std::__cxx11::basic_string::~basic_string` | `/usr/include/c++/12/bits/basic_string.h:794` |

##### `std::__cxx11::basic_string::_M_length` (`/usr/include/c++/12/bits/basic_string.h:228`)

|      % |  Time | Samples | Caller                                      | Location                                      |
| -----: | ----: | ------: | ------------------------------------------- | --------------------------------------------- |
| 100.0% | 1.0ms |       1 | `std::__cxx11::basic_string::_M_set_length` | `/usr/include/c++/12/bits/basic_string.h:265` |

### Total time

Functions with the most time spent within the function and its callees.

|      % |    Time | Samples | Function                                            | Location              |
| -----: | ------: | ------: | --------------------------------------------------- | --------------------- |
| 100.0% | 792.0ms |     792 | `(anonymous)`                                       | `<unknown>`           |
| 100.0% | 792.0ms |     792 | `__libc_start_main`                                 | `<unknown>`           |
| 100.0% | 792.0ms |     792 | `_start`                                            | `<unknown>`           |
|  97.7% | 774.0ms |     774 | `main`                                              | `/out/profile.cpp:8`  |
|  94.4% | 748.0ms |     748 | `fmt::v11::format`                                  | `./format.h:4198`     |
|  94.3% | 747.0ms |     747 | `fmt::v11::vformat[abi:cxx11]`                      | `./format-inl.h:1442` |
|  84.8% | 672.0ms |     672 | `fmt::v11::detail::vformat_to`                      | `./format-inl.h:1452` |
|  84.7% | 671.0ms |     671 | `fmt::v11::detail::parse_format_string`             | `./base.h:1630`       |
|  74.7% | 592.0ms |     592 | `fmt::v11::detail::parse_replacement_field`         | `./base.h:1583`       |
|  62.8% | 497.0ms |     497 | `fmt::v11::detail::format_handler::on_format_specs` | `./format.h:3613`     |
|  26.3% | 208.0ms |     208 | `fmt::v11::basic_format_arg::visit`                 | `./base.h:2516`       |
|  22.9% | 181.0ms |     181 | `fmt::v11::detail::arg_formatter::operator()`       | `./format.h:3498`     |
|  20.6% | 163.0ms |     163 | `fmt::v11::detail::write`                           | `./format.h:3357`     |
|  20.1% | 159.0ms |     159 | `fmt::v11::detail::write_float`                     | `./format.h:3301`     |
|  13.0% | 103.0ms |     103 | `fmt::v11::detail::parse_format_specs`              | `./base.h:1445`       |
|  12.8% | 101.0ms |     101 | `fmt::v11::detail::write_padded`                    | `./format.h:1631`     |
|  11.6% |  92.0ms |      92 | `fmt::v11::detail::buffer::append`                  | `./base.h:1829`       |
|  11.6% |  92.0ms |      92 | `fmt::v11::detail::copy`                            | `./base.h:2041`       |
|  11.0% |  87.0ms |      87 | `fmt::v11::detail::copy_noinline`                   | `./format.h:534`      |
|  10.7% |  85.0ms |      85 | `fmt::v11::detail::write`                           | `./format.h:2114`     |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Ours

|     % |    Time | Samples | Function                                            | Location              |
| ----: | ------: | ------: | --------------------------------------------------- | --------------------- |
| 97.7% | 774.0ms |     774 | `main`                                              | `/out/profile.cpp:8`  |
| 94.4% | 748.0ms |     748 | `fmt::v11::format`                                  | `./format.h:4198`     |
| 94.3% | 747.0ms |     747 | `fmt::v11::vformat[abi:cxx11]`                      | `./format-inl.h:1442` |
| 84.8% | 672.0ms |     672 | `fmt::v11::detail::vformat_to`                      | `./format-inl.h:1452` |
| 84.7% | 671.0ms |     671 | `fmt::v11::detail::parse_format_string`             | `./base.h:1630`       |
| 74.7% | 592.0ms |     592 | `fmt::v11::detail::parse_replacement_field`         | `./base.h:1583`       |
| 62.8% | 497.0ms |     497 | `fmt::v11::detail::format_handler::on_format_specs` | `./format.h:3613`     |
| 26.3% | 208.0ms |     208 | `fmt::v11::basic_format_arg::visit`                 | `./base.h:2516`       |
| 22.9% | 181.0ms |     181 | `fmt::v11::detail::arg_formatter::operator()`       | `./format.h:3498`     |
| 20.6% | 163.0ms |     163 | `fmt::v11::detail::write`                           | `./format.h:3357`     |
| 20.1% | 159.0ms |     159 | `fmt::v11::detail::write_float`                     | `./format.h:3301`     |
| 13.0% | 103.0ms |     103 | `fmt::v11::detail::parse_format_specs`              | `./base.h:1445`       |
| 12.8% | 101.0ms |     101 | `fmt::v11::detail::write_padded`                    | `./format.h:1631`     |
| 11.6% |  92.0ms |      92 | `fmt::v11::detail::buffer::append`                  | `./base.h:1829`       |
| 11.6% |  92.0ms |      92 | `fmt::v11::detail::copy`                            | `./base.h:2041`       |
| 11.0% |  87.0ms |      87 | `fmt::v11::detail::copy_noinline`                   | `./format.h:534`      |
| 10.7% |  85.0ms |      85 | `fmt::v11::detail::write`                           | `./format.h:2114`     |
| 10.1% |  80.0ms |      80 | `fmt::v11::detail::write_float`                     | `./format.h:2452`     |
| 10.0% |  79.0ms |      79 | `fmt::v11::detail::write_padded`                    | `./format.h:1652`     |
|  8.0% |  63.0ms |      63 | `fmt::v11::detail::do_write_float`                  | `./format.h:2333`     |

##### Native

|      % |    Time | Samples | Function                                 | Location    |
| -----: | ------: | ------: | ---------------------------------------- | ----------- |
| 100.0% | 792.0ms |     792 | `__libc_start_main`                      | `<unknown>` |
| 100.0% | 792.0ms |     792 | `_start`                                 | `<unknown>` |
|   2.7% |  21.0ms |      21 | `cfree`                                  | `<unknown>` |
|   1.6% |  13.0ms |      13 | `std::__cxx11::basic_string::_M_create`  | `<unknown>` |
|   1.5% |  12.0ms |      12 | `std::__cxx11::basic_string::_M_dispose` | `<unknown>` |
|   1.5% |  12.0ms |      12 | `operator delete`                        | `<unknown>` |
|   1.4% |  11.0ms |      11 | `operator new`                           | `<unknown>` |
|   1.3% |  10.0ms |      10 | `__libc_malloc`                          | `<unknown>` |
|   0.9% |   7.0ms |       7 | `_init`                                  | `<unknown>` |

##### Unknown

|      % |    Time | Samples | Function      | Location    |
| -----: | ------: | ------: | ------------- | ----------- |
| 100.0% | 792.0ms |     792 | `(anonymous)` | `<unknown>` |

##### Standard library

|    % |   Time | Samples | Function                                                 | Location                                        |
| ---: | -----: | ------: | -------------------------------------------------------- | ----------------------------------------------- |
| 3.8% | 30.0ms |      30 | `std::__cxx11::basic_string::~basic_string`              | `/usr/include/c++/12/bits/basic_string.h:794`   |
| 3.2% | 25.0ms |      25 | `std::__cxx11::basic_string::_M_dispose`                 | `/usr/include/c++/12/bits/basic_string.h:283`   |
| 3.0% | 24.0ms |      24 | `std::__cxx11::basic_string::basic_string`               | `/usr/include/c++/12/bits/basic_string.h:612`   |
| 2.9% | 23.0ms |      23 | `std::__cxx11::basic_string::_M_destroy`                 | `/usr/include/c++/12/bits/basic_string.h:291`   |
| 2.8% | 22.0ms |      22 | `std::__cxx11::basic_string::_M_construct`               | `/usr/include/c++/12/bits/basic_string.tcc:217` |
| 2.7% | 21.0ms |      21 | `std::__new_allocator::deallocate`                       | `/usr/include/c++/12/bits/new_allocator.h:142`  |
| 2.7% | 21.0ms |      21 | `std::allocator_traits::deallocate`                      | `/usr/include/c++/12/bits/alloc_traits.h:495`   |
| 0.9% |  7.0ms |       7 | `std::__cxx11::basic_string::_M_set_length`              | `/usr/include/c++/12/bits/basic_string.h:265`   |
| 0.5% |  4.0ms |       4 | `std::__cxx11::basic_string::_M_data`                    | `/usr/include/c++/12/bits/basic_string.h:233`   |
| 0.4% |  3.0ms |       3 | `std::char_traits::copy`                                 | `/usr/include/c++/12/bits/char_traits.h:423`    |
| 0.4% |  3.0ms |       3 | `std::__cxx11::basic_string::_S_copy`                    | `/usr/include/c++/12/bits/basic_string.h:418`   |
| 0.4% |  3.0ms |       3 | `std::__cxx11::basic_string::_S_copy_chars`              | `/usr/include/c++/12/bits/basic_string.h:475`   |
| 0.4% |  3.0ms |       3 | `std::char_traits::assign`                               | `/usr/include/c++/12/bits/char_traits.h:347`    |
| 0.3% |  2.0ms |       2 | `std::__cxx11::basic_string::_Alloc_hider::_Alloc_hider` | `/usr/include/c++/12/bits/basic_string.h:199`   |
| 0.3% |  2.0ms |       2 | `std::__cxx11::basic_string::basic_string`               | `/usr/include/c++/12/bits/basic_string.h:515`   |
| 0.1% |  1.0ms |       1 | `std::__cxx11::basic_string::_M_is_local`                | `/usr/include/c++/12/bits/basic_string.h:273`   |
| 0.1% |  1.0ms |       1 | `std::__cxx11::basic_string::_M_length`                  | `/usr/include/c++/12/bits/basic_string.h:228`   |

#### Callers

Callers with the largest contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `(anonymous)` (`<unknown>`)

|      % |    Time | Samples | Caller                                                   | Location              |
| -----: | ------: | ------: | -------------------------------------------------------- | --------------------- |
| 100.0% | 792.0ms |     792 | `__libc_start_main`                                      | `<unknown>`           |
|   3.5% |  28.0ms |      28 | `fmt::v11::vformat[abi:cxx11]`                           | `./format-inl.h:1442` |
|   1.6% |  13.0ms |      13 | `fmt::v11::detail::format_handler::on_replacement_field` | `./format.h:3609`     |
|   1.4% |  11.0ms |      11 | `fmt::v11::detail::format_handler::on_format_specs`      | `./format.h:3613`     |
|   0.9% |   7.0ms |       7 | `cfree`                                                  | `<unknown>`           |

##### `__libc_start_main` (`<unknown>`)

|      % |    Time | Samples | Caller   | Location    |
| -----: | ------: | ------: | -------- | ----------- |
| 100.0% | 792.0ms |     792 | `_start` | `<unknown>` |

##### `main` (`/out/profile.cpp:8`)

|      % |    Time | Samples | Caller        | Location    |
| -----: | ------: | ------: | ------------- | ----------- |
| 100.0% | 774.0ms |     774 | `(anonymous)` | `<unknown>` |

##### `fmt::v11::format` (`./format.h:4198`)

|      % |    Time | Samples | Caller | Location             |
| -----: | ------: | ------: | ------ | -------------------- |
| 100.0% | 748.0ms |     748 | `main` | `/out/profile.cpp:8` |

##### `fmt::v11::vformat[abi:cxx11]` (`./format-inl.h:1442`)

|     % |    Time | Samples | Caller             | Location          |
| ----: | ------: | ------: | ------------------ | ----------------- |
| 99.7% | 745.0ms |     745 | `fmt::v11::format` | `./format.h:4198` |
|  0.3% |   2.0ms |       2 | `(anonymous)`      | `<unknown>`       |

##### `fmt::v11::detail::vformat_to` (`./format-inl.h:1452`)

|      % |    Time | Samples | Caller                         | Location              |
| -----: | ------: | ------: | ------------------------------ | --------------------- |
| 100.0% | 672.0ms |     672 | `fmt::v11::vformat[abi:cxx11]` | `./format-inl.h:1442` |

##### `fmt::v11::detail::parse_format_string` (`./base.h:1630`)

|      % |    Time | Samples | Caller                         | Location              |
| -----: | ------: | ------: | ------------------------------ | --------------------- |
| 100.0% | 671.0ms |     671 | `fmt::v11::detail::vformat_to` | `./format-inl.h:1452` |

##### `fmt::v11::detail::parse_replacement_field` (`./base.h:1583`)

|      % |    Time | Samples | Caller                                  | Location        |
| -----: | ------: | ------: | --------------------------------------- | --------------- |
| 100.0% | 592.0ms |     592 | `fmt::v11::detail::parse_format_string` | `./base.h:1630` |

##### `fmt::v11::detail::format_handler::on_format_specs` (`./format.h:3613`)

|      % |    Time | Samples | Caller                                      | Location        |
| -----: | ------: | ------: | ------------------------------------------- | --------------- |
| 100.0% | 497.0ms |     497 | `fmt::v11::detail::parse_replacement_field` | `./base.h:1583` |

##### `fmt::v11::basic_format_arg::visit` (`./base.h:2516`)

|     % |    Time | Samples | Caller                                                   | Location          |
| ----: | ------: | ------: | -------------------------------------------------------- | ----------------- |
| 93.3% | 194.0ms |     194 | `fmt::v11::detail::format_handler::on_format_specs`      | `./format.h:3613` |
|  5.8% |  12.0ms |      12 | `fmt::v11::detail::format_handler::on_replacement_field` | `./format.h:3609` |
|  1.0% |   2.0ms |       2 | `fmt::v11::detail::parse_replacement_field`              | `./base.h:1583`   |

##### `fmt::v11::detail::arg_formatter::operator()` (`./format.h:3498`)

|      % |    Time | Samples | Caller                              | Location        |
| -----: | ------: | ------: | ----------------------------------- | --------------- |
| 100.0% | 181.0ms |     181 | `fmt::v11::basic_format_arg::visit` | `./base.h:2516` |

##### `fmt::v11::detail::write` (`./format.h:3357`)

|      % |    Time | Samples | Caller                                        | Location          |
| -----: | ------: | ------: | --------------------------------------------- | ----------------- |
| 100.0% | 163.0ms |     163 | `fmt::v11::detail::arg_formatter::operator()` | `./format.h:3498` |

##### `fmt::v11::detail::write_float` (`./format.h:3301`)

|     % |    Time | Samples | Caller                                              | Location          |
| ----: | ------: | ------: | --------------------------------------------------- | ----------------- |
| 98.7% | 157.0ms |     157 | `fmt::v11::detail::write`                           | `./format.h:3357` |
|  1.3% |   2.0ms |       2 | `fmt::v11::detail::format_handler::on_format_specs` | `./format.h:3613` |

##### `fmt::v11::detail::parse_format_specs` (`./base.h:1445`)

|      % |    Time | Samples | Caller                                              | Location          |
| -----: | ------: | ------: | --------------------------------------------------- | ----------------- |
| 100.0% | 103.0ms |     103 | `fmt::v11::detail::format_handler::on_format_specs` | `./format.h:3613` |

##### `fmt::v11::detail::write_padded` (`./format.h:1631`)

|     % |   Time | Samples | Caller                           | Location          |
| ----: | -----: | ------: | -------------------------------- | ----------------- |
| 77.2% | 78.0ms |      78 | `fmt::v11::detail::write_padded` | `./format.h:1652` |
| 21.8% | 22.0ms |      22 | `fmt::v11::detail::write`        | `./format.h:2114` |
|  1.0% |  1.0ms |       1 | `fmt::v11::detail::write_float`  | `./format.h:2452` |

##### `fmt::v11::detail::buffer::append` (`./base.h:1829`)

|      % |   Time | Samples | Caller                   | Location        |
| -----: | -----: | ------: | ------------------------ | --------------- |
| 100.0% | 92.0ms |      92 | `fmt::v11::detail::copy` | `./base.h:2041` |

##### `fmt::v11::detail::copy` (`./base.h:2041`)

|     % |   Time | Samples | Caller                                                                            | Location          |
| ----: | -----: | ------: | --------------------------------------------------------------------------------- | ----------------- |
| 70.7% | 65.0ms |      65 | `fmt::v11::detail::copy_noinline`                                                 | `./format.h:534`  |
| 12.0% | 11.0ms |      11 | `fmt::v11::detail::write()::{lambda(fmt::v11::basic_appender)#1}::operator()`     | `./format.h`      |
| 12.0% | 11.0ms |      11 | `fmt::v11::detail::write_int()::{lambda(fmt::v11::basic_appender)#1}::operator()` | `./format.h`      |
|  5.4% |  5.0ms |       5 | `fmt::v11::detail::write_significand`                                             | `./format.h:2244` |

##### `fmt::v11::detail::copy_noinline` (`./format.h:534`)

|     % |   Time | Samples | Caller                                                   | Location          |
| ----: | -----: | ------: | -------------------------------------------------------- | ----------------- |
| 44.8% | 39.0ms |      39 | `fmt::v11::detail::format_handler::on_text`              | `./format.h:3593` |
| 31.0% | 27.0ms |      27 | `fmt::v11::detail::format_handler::on_replacement_field` | `./format.h:3609` |
| 20.7% | 18.0ms |      18 | `fmt::v11::detail::write_significand`                    | `./format.h:2302` |
|  2.3% |  2.0ms |       2 | `fmt::v11::format`                                       | `./format.h:4198` |
|  1.1% |  1.0ms |       1 | `fmt::v11::detail::parse_format_string`                  | `./base.h:1630`   |

##### `fmt::v11::detail::write` (`./format.h:2114`)

|     % |   Time | Samples | Caller                                              | Location          |
| ----: | -----: | ------: | --------------------------------------------------- | ----------------- |
| 98.8% | 84.0ms |      84 | `fmt::v11::detail::format_handler::on_format_specs` | `./format.h:3613` |
|  1.2% |  1.0ms |       1 | `fmt::v11::detail::parse_replacement_field`         | `./base.h:1583`   |

##### `fmt::v11::detail::write_float` (`./format.h:2452`)

|      % |   Time | Samples | Caller                          | Location          |
| -----: | -----: | ------: | ------------------------------- | ----------------- |
| 100.0% | 80.0ms |      80 | `fmt::v11::detail::write_float` | `./format.h:3301` |

##### `fmt::v11::detail::write_padded` (`./format.h:1652`)

|     % |   Time | Samples | Caller                             | Location          |
| ----: | -----: | ------: | ---------------------------------- | ----------------- |
| 57.0% | 45.0ms |      45 | `fmt::v11::detail::do_write_float` | `./format.h:2333` |
| 43.0% | 34.0ms |      34 | `fmt::v11::detail::write_int`      | `./format.h:2017` |

##### `fmt::v11::detail::do_write_float` (`./format.h:2333`)

|     % |   Time | Samples | Caller                          | Location          |
| ----: | -----: | ------: | ------------------------------- | ----------------- |
| 98.4% | 62.0ms |      62 | `fmt::v11::detail::write_float` | `./format.h:2452` |
|  1.6% |  1.0ms |       1 | `fmt::v11::detail::write`       | `./format.h:3357` |

##### `std::__cxx11::basic_string::~basic_string` (`/usr/include/c++/12/bits/basic_string.h:794`)

|     % |   Time | Samples | Caller                                              | Location             |
| ----: | -----: | ------: | --------------------------------------------------- | -------------------- |
| 83.3% | 25.0ms |      25 | `main`                                              | `/out/profile.cpp:8` |
| 16.7% |  5.0ms |       5 | `fmt::v11::detail::digit_grouping::~digit_grouping` | `./format.h:1822`    |

##### `std::__cxx11::basic_string::_M_dispose` (`/usr/include/c++/12/bits/basic_string.h:283`)

|      % |   Time | Samples | Caller                                      | Location                                      |
| -----: | -----: | ------: | ------------------------------------------- | --------------------------------------------- |
| 100.0% | 25.0ms |      25 | `std::__cxx11::basic_string::~basic_string` | `/usr/include/c++/12/bits/basic_string.h:794` |

##### `std::__cxx11::basic_string::basic_string` (`/usr/include/c++/12/bits/basic_string.h:612`)

|      % |   Time | Samples | Caller                | Location         |
| -----: | -----: | ------: | --------------------- | ---------------- |
| 100.0% | 24.0ms |      24 | `fmt::v11::to_string` | `./format.h:882` |

##### `std::__cxx11::basic_string::_M_destroy` (`/usr/include/c++/12/bits/basic_string.h:291`)

|      % |   Time | Samples | Caller                                   | Location                                      |
| -----: | -----: | ------: | ---------------------------------------- | --------------------------------------------- |
| 100.0% | 23.0ms |      23 | `std::__cxx11::basic_string::_M_dispose` | `/usr/include/c++/12/bits/basic_string.h:283` |

##### `std::__cxx11::basic_string::_M_construct` (`/usr/include/c++/12/bits/basic_string.tcc:217`)

|      % |   Time | Samples | Caller                                     | Location                                      |
| -----: | -----: | ------: | ------------------------------------------ | --------------------------------------------- |
| 100.0% | 22.0ms |      22 | `std::__cxx11::basic_string::basic_string` | `/usr/include/c++/12/bits/basic_string.h:612` |

##### `cfree` (`<unknown>`)

|      % |   Time | Samples | Caller                             | Location                                       |
| -----: | -----: | ------: | ---------------------------------- | ---------------------------------------------- |
| 100.0% | 21.0ms |      21 | `std::__new_allocator::deallocate` | `/usr/include/c++/12/bits/new_allocator.h:142` |

##### `std::__new_allocator::deallocate` (`/usr/include/c++/12/bits/new_allocator.h:142`)

|      % |   Time | Samples | Caller                              | Location                                      |
| -----: | -----: | ------: | ----------------------------------- | --------------------------------------------- |
| 100.0% | 21.0ms |      21 | `std::allocator_traits::deallocate` | `/usr/include/c++/12/bits/alloc_traits.h:495` |

##### `std::allocator_traits::deallocate` (`/usr/include/c++/12/bits/alloc_traits.h:495`)

|      % |   Time | Samples | Caller                                   | Location                                      |
| -----: | -----: | ------: | ---------------------------------------- | --------------------------------------------- |
| 100.0% | 21.0ms |      21 | `std::__cxx11::basic_string::_M_destroy` | `/usr/include/c++/12/bits/basic_string.h:291` |

##### `std::__cxx11::basic_string::_M_create` (`<unknown>`)

|      % |   Time | Samples | Caller                         | Location              |
| -----: | -----: | ------: | ------------------------------ | --------------------- |
| 100.0% | 13.0ms |      13 | `fmt::v11::vformat[abi:cxx11]` | `./format-inl.h:1442` |

##### `std::__cxx11::basic_string::_M_dispose` (`<unknown>`)

|      % |   Time | Samples | Caller                          | Location          |
| -----: | -----: | ------: | ------------------------------- | ----------------- |
| 100.0% | 12.0ms |      12 | `fmt::v11::detail::write_float` | `./format.h:2452` |

##### `operator delete` (`<unknown>`)

|      % |   Time | Samples | Caller        | Location    |
| -----: | -----: | ------: | ------------- | ----------- |
| 100.0% | 12.0ms |      12 | `(anonymous)` | `<unknown>` |

##### `operator new` (`<unknown>`)

|     % |   Time | Samples | Caller                                     | Location                                        |
| ----: | -----: | ------: | ------------------------------------------ | ----------------------------------------------- |
| 90.9% | 10.0ms |      10 | `std::__cxx11::basic_string::_M_construct` | `/usr/include/c++/12/bits/basic_string.tcc:217` |
|  9.1% |  1.0ms |       1 | `fmt::v11::vformat[abi:cxx11]`             | `./format-inl.h:1442`                           |

##### `__libc_malloc` (`<unknown>`)

|     % |  Time | Samples | Caller                                     | Location                                        |
| ----: | ----: | ------: | ------------------------------------------ | ----------------------------------------------- |
| 90.0% | 9.0ms |       9 | `operator new`                             | `<unknown>`                                     |
| 10.0% | 1.0ms |       1 | `std::__cxx11::basic_string::_M_construct` | `/usr/include/c++/12/bits/basic_string.tcc:217` |

##### `_init` (`<unknown>`)

|     % |  Time | Samples | Caller                                                   | Location          |
| ----: | ----: | ------: | -------------------------------------------------------- | ----------------- |
| 57.1% | 4.0ms |       4 | `fmt::v11::detail::write_float`                          | `./format.h:2452` |
| 28.6% | 2.0ms |       2 | `fmt::v11::detail::format_handler::on_format_specs`      | `./format.h:3613` |
| 14.3% | 1.0ms |       1 | `fmt::v11::detail::format_handler::on_replacement_field` | `./format.h:3609` |

##### `std::__cxx11::basic_string::_M_set_length` (`/usr/include/c++/12/bits/basic_string.h:265`)

|     % |  Time | Samples | Caller                                     | Location                                        |
| ----: | ----: | ------: | ------------------------------------------ | ----------------------------------------------- |
| 71.4% | 5.0ms |       5 | `std::__cxx11::basic_string::_M_construct` | `/usr/include/c++/12/bits/basic_string.tcc:217` |
| 28.6% | 2.0ms |       2 | `std::__cxx11::basic_string::basic_string` | `/usr/include/c++/12/bits/basic_string.h:515`   |

##### `std::__cxx11::basic_string::_M_data` (`/usr/include/c++/12/bits/basic_string.h:233`)

|     % |  Time | Samples | Caller                                      | Location                                      |
| ----: | ----: | ------: | ------------------------------------------- | --------------------------------------------- |
| 75.0% | 3.0ms |       3 | `std::__cxx11::basic_string::_M_set_length` | `/usr/include/c++/12/bits/basic_string.h:265` |
| 25.0% | 1.0ms |       1 | `std::__cxx11::basic_string::_M_is_local`   | `/usr/include/c++/12/bits/basic_string.h:273` |

##### `std::char_traits::copy` (`/usr/include/c++/12/bits/char_traits.h:423`)

|      % |  Time | Samples | Caller                                | Location                                      |
| -----: | ----: | ------: | ------------------------------------- | --------------------------------------------- |
| 100.0% | 3.0ms |       3 | `std::__cxx11::basic_string::_S_copy` | `/usr/include/c++/12/bits/basic_string.h:418` |

##### `std::__cxx11::basic_string::_S_copy` (`/usr/include/c++/12/bits/basic_string.h:418`)

|      % |  Time | Samples | Caller                                      | Location                                      |
| -----: | ----: | ------: | ------------------------------------------- | --------------------------------------------- |
| 100.0% | 3.0ms |       3 | `std::__cxx11::basic_string::_S_copy`       | `/usr/include/c++/12/bits/basic_string.h:418` |
| 100.0% | 3.0ms |       3 | `std::__cxx11::basic_string::_S_copy_chars` | `/usr/include/c++/12/bits/basic_string.h:475` |

##### `std::__cxx11::basic_string::_S_copy_chars` (`/usr/include/c++/12/bits/basic_string.h:475`)

|      % |  Time | Samples | Caller                                     | Location                                        |
| -----: | ----: | ------: | ------------------------------------------ | ----------------------------------------------- |
| 100.0% | 3.0ms |       3 | `std::__cxx11::basic_string::_M_construct` | `/usr/include/c++/12/bits/basic_string.tcc:217` |

##### `std::char_traits::assign` (`/usr/include/c++/12/bits/char_traits.h:347`)

|      % |  Time | Samples | Caller                                      | Location                                      |
| -----: | ----: | ------: | ------------------------------------------- | --------------------------------------------- |
| 100.0% | 3.0ms |       3 | `std::__cxx11::basic_string::_M_set_length` | `/usr/include/c++/12/bits/basic_string.h:265` |

##### `std::__cxx11::basic_string::_Alloc_hider::_Alloc_hider` (`/usr/include/c++/12/bits/basic_string.h:199`)

|      % |  Time | Samples | Caller                                     | Location                                      |
| -----: | ----: | ------: | ------------------------------------------ | --------------------------------------------- |
| 100.0% | 2.0ms |       2 | `std::__cxx11::basic_string::basic_string` | `/usr/include/c++/12/bits/basic_string.h:612` |

##### `std::__cxx11::basic_string::basic_string` (`/usr/include/c++/12/bits/basic_string.h:515`)

|      % |  Time | Samples | Caller                                             | Location          |
| -----: | ----: | ------: | -------------------------------------------------- | ----------------- |
| 100.0% | 2.0ms |       2 | `fmt::v11::detail::digit_grouping::digit_grouping` | `./format.h:1846` |

##### `std::__cxx11::basic_string::_M_is_local` (`/usr/include/c++/12/bits/basic_string.h:273`)

|      % |  Time | Samples | Caller                                   | Location                                      |
| -----: | ----: | ------: | ---------------------------------------- | --------------------------------------------- |
| 100.0% | 1.0ms |       1 | `std::__cxx11::basic_string::_M_dispose` | `/usr/include/c++/12/bits/basic_string.h:283` |

##### `std::__cxx11::basic_string::_M_length` (`/usr/include/c++/12/bits/basic_string.h:228`)

|      % |  Time | Samples | Caller                                      | Location                                      |
| -----: | ----: | ------: | ------------------------------------------- | --------------------------------------------- |
| 100.0% | 1.0ms |       1 | `std::__cxx11::basic_string::_M_set_length` | `/usr/include/c++/12/bits/basic_string.h:265` |

#### Callees

Callees with the largest contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `(anonymous)` (`<unknown>`)

|     % |    Time | Samples | Callee                         | Location              |
| ----: | ------: | ------: | ------------------------------ | --------------------- |
| 97.7% | 774.0ms |     774 | `main`                         | `/out/profile.cpp:8`  |
|  1.5% |  12.0ms |      12 | `operator delete`              | `<unknown>`           |
|  0.5% |   4.0ms |       4 | `(anonymous)`                  | `<unknown>`           |
|  0.3% |   2.0ms |       2 | `fmt::v11::vformat[abi:cxx11]` | `./format-inl.h:1442` |

##### `__libc_start_main` (`<unknown>`)

|      % |    Time | Samples | Callee        | Location    |
| -----: | ------: | ------: | ------------- | ----------- |
| 100.0% | 792.0ms |     792 | `(anonymous)` | `<unknown>` |

##### `_start` (`<unknown>`)

|      % |    Time | Samples | Callee              | Location    |
| -----: | ------: | ------: | ------------------- | ----------- |
| 100.0% | 792.0ms |     792 | `__libc_start_main` | `<unknown>` |

##### `main` (`/out/profile.cpp:8`)

|     % |    Time | Samples | Callee                                      | Location                                      |
| ----: | ------: | ------: | ------------------------------------------- | --------------------------------------------- |
| 96.6% | 748.0ms |     748 | `fmt::v11::format`                          | `./format.h:4198`                             |
|  3.2% |  25.0ms |      25 | `std::__cxx11::basic_string::~basic_string` | `/usr/include/c++/12/bits/basic_string.h:794` |

##### `fmt::v11::format` (`./format.h:4198`)

|     % |    Time | Samples | Callee                            | Location              |
| ----: | ------: | ------: | --------------------------------- | --------------------- |
| 99.6% | 745.0ms |     745 | `fmt::v11::vformat[abi:cxx11]`    | `./format-inl.h:1442` |
|  0.3% |   2.0ms |       2 | `fmt::v11::detail::copy_noinline` | `./format.h:534`      |
|  0.1% |   1.0ms |       1 | `fmt::v11::detail::value::value`  | `./base.h:2158`       |

##### `fmt::v11::vformat[abi:cxx11]` (`./format-inl.h:1442`)

|     % |    Time | Samples | Callee                                               | Location              |
| ----: | ------: | ------: | ---------------------------------------------------- | --------------------- |
| 90.0% | 672.0ms |     672 | `fmt::v11::detail::vformat_to`                       | `./format-inl.h:1452` |
|  3.7% |  28.0ms |      28 | `(anonymous)`                                        | `<unknown>`           |
|  3.5% |  26.0ms |      26 | `fmt::v11::to_string`                                | `./format.h:882`      |
|  1.7% |  13.0ms |      13 | `std::__cxx11::basic_string::_M_create`              | `<unknown>`           |
|  0.3% |   2.0ms |       2 | `fmt::v11::basic_memory_buffer::basic_memory_buffer` | `./format.h:819`      |

##### `fmt::v11::detail::vformat_to` (`./format-inl.h:1452`)

|     % |    Time | Samples | Callee                                  | Location        |
| ----: | ------: | ------: | --------------------------------------- | --------------- |
| 99.9% | 671.0ms |     671 | `fmt::v11::detail::parse_format_string` | `./base.h:1630` |
|  0.1% |   1.0ms |       1 | `fmt::v11::context::context`            | `./base.h:2673` |

##### `fmt::v11::detail::parse_format_string` (`./base.h:1630`)

|     % |    Time | Samples | Callee                                      | Location          |
| ----: | ------: | ------: | ------------------------------------------- | ----------------- |
| 88.2% | 592.0ms |     592 | `fmt::v11::detail::parse_replacement_field` | `./base.h:1583`   |
|  7.0% |  47.0ms |      47 | `fmt::v11::detail::format_handler::on_text` | `./format.h:3593` |
|  0.1% |   1.0ms |       1 | `fmt::v11::detail::copy_noinline`           | `./format.h:534`  |

##### `fmt::v11::detail::parse_replacement_field` (`./base.h:1583`)

|     % |    Time | Samples | Callee                                                   | Location          |
| ----: | ------: | ------: | -------------------------------------------------------- | ----------------- |
| 84.0% | 497.0ms |     497 | `fmt::v11::detail::format_handler::on_format_specs`      | `./format.h:3613` |
| 10.6% |  63.0ms |      63 | `fmt::v11::detail::format_handler::on_replacement_field` | `./format.h:3609` |
|  0.8% |   5.0ms |       5 | `fmt::v11::detail::format_handler::on_arg_id`            | `./format.h:3597` |
|  0.3% |   2.0ms |       2 | `fmt::v11::basic_format_arg::visit`                      | `./base.h:2516`   |
|  0.2% |   1.0ms |       1 | `fmt::v11::detail::write`                                | `./format.h:2114` |

##### `fmt::v11::detail::format_handler::on_format_specs` (`./format.h:3613`)

|     % |    Time | Samples | Callee                                 | Location          |
| ----: | ------: | ------: | -------------------------------------- | ----------------- |
| 39.0% | 194.0ms |     194 | `fmt::v11::basic_format_arg::visit`    | `./base.h:2516`   |
| 20.7% | 103.0ms |     103 | `fmt::v11::detail::parse_format_specs` | `./base.h:1445`   |
| 16.9% |  84.0ms |      84 | `fmt::v11::detail::write`              | `./format.h:2114` |
| 12.5% |  62.0ms |      62 | `fmt::v11::detail::write_int`          | `./format.h:2017` |
|  2.2% |  11.0ms |      11 | `(anonymous)`                          | `<unknown>`       |

##### `fmt::v11::basic_format_arg::visit` (`./base.h:2516`)

|     % |    Time | Samples | Callee                                                | Location          |
| ----: | ------: | ------: | ----------------------------------------------------- | ----------------- |
| 87.0% | 181.0ms |     181 | `fmt::v11::detail::arg_formatter::operator()`         | `./format.h:3498` |
|  1.4% |   3.0ms |       3 | `fmt::v11::detail::default_arg_formatter::operator()` | `./format.h:3475` |
|  1.4% |   3.0ms |       3 | `fmt::v11::detail::string_value::str`                 | `./base.h:2107`   |

##### `fmt::v11::detail::arg_formatter::operator()` (`./format.h:3498`)

|     % |    Time | Samples | Callee                    | Location          |
| ----: | ------: | ------: | ------------------------- | ----------------- |
| 90.1% | 163.0ms |     163 | `fmt::v11::detail::write` | `./format.h:3357` |
|  3.3% |   6.0ms |       6 | `fmt::v11::detail::write` | `./format.h:2092` |
|  1.7% |   3.0ms |       3 | `fmt::v11::detail::write` | `./format.h:2145` |
|  0.6% |   1.0ms |       1 | `fmt::v11::detail::write` | `./format.h:3390` |

##### `fmt::v11::detail::write` (`./format.h:3357`)

|     % |    Time | Samples | Callee                             | Location          |
| ----: | ------: | ------: | ---------------------------------- | ----------------- |
| 96.3% | 157.0ms |     157 | `fmt::v11::detail::write_float`    | `./format.h:3301` |
|  3.1% |   5.0ms |       5 | `fmt::v11::basic_specs::localized` | `./base.h:802`    |
|  0.6% |   1.0ms |       1 | `fmt::v11::detail::do_write_float` | `./format.h:2333` |

##### `fmt::v11::detail::write_float` (`./format.h:3301`)

|     % |   Time | Samples | Callee                                                | Location          |
| ----: | -----: | ------: | ----------------------------------------------------- | ----------------- |
| 50.3% | 80.0ms |      80 | `fmt::v11::detail::write_float`                       | `./format.h:2452` |
| 39.0% | 62.0ms |      62 | `fmt::v11::detail::format_float`                      | `./format.h:2994` |
|  1.3% |  2.0ms |       2 | `fmt::v11::basic_memory_buffer::basic_memory_buffer`  | `./format.h:819`  |
|  0.6% |  1.0ms |       1 | `fmt::v11::basic_memory_buffer::~basic_memory_buffer` | `./format.h:825`  |

##### `fmt::v11::detail::parse_format_specs` (`./base.h:1445`)

|     % |   Time | Samples | Callee                                                                 | Location        |
| ----: | -----: | ------: | ---------------------------------------------------------------------- | --------------- |
| 20.4% | 21.0ms |      21 | `fmt::v11::detail::parse_width`                                        | `./base.h:1417` |
|  8.7% |  9.0ms |       9 | `fmt::v11::detail::parse_format_specs()::{unnamed type#1}::operator()` | `./base.h:1460` |
|  6.8% |  7.0ms |       7 | `fmt::v11::detail::parse_align`                                        | `./base.h:1318` |
|  5.8% |  6.0ms |       6 | `fmt::v11::detail::parse_precision`                                    | `./base.h:1426` |
|  3.9% |  4.0ms |       4 | `fmt::v11::detail::parse_format_specs()::{unnamed type#2}::operator()` | `./base.h:1474` |

##### `fmt::v11::detail::write_padded` (`./format.h:1631`)

|     % |   Time | Samples | Callee                                                                                 | Location          |
| ----: | -----: | ------: | -------------------------------------------------------------------------------------- | ----------------- |
| 26.7% | 27.0ms |      27 | `fmt::v11::detail::do_write_float()::{lambda(fmt::v11::basic_appender)#4}::operator()` | `./format.h`      |
| 20.8% | 21.0ms |      21 | `fmt::v11::detail::write_int()::{lambda(fmt::v11::basic_appender)#1}::operator()`      | `./format.h`      |
| 13.9% | 14.0ms |      14 | `fmt::v11::detail::write()::{lambda(fmt::v11::basic_appender)#1}::operator()`          | `./format.h`      |
| 10.9% | 11.0ms |      11 | `fmt::v11::detail::fill`                                                               | `./format.h:1616` |
|  7.9% |  8.0ms |       8 | `fmt::v11::detail::do_write_float()::{lambda(fmt::v11::basic_appender)#5}::operator()` | `./format.h`      |

##### `fmt::v11::detail::buffer::append` (`./base.h:1829`)

|     % |   Time | Samples | Callee                                  | Location        |
| ----: | -----: | ------: | --------------------------------------- | --------------- |
| 12.0% | 11.0ms |      11 | `fmt::v11::detail::buffer::try_reserve` | `./base.h:1812` |
|  4.3% |  4.0ms |       4 | `fmt::v11::detail::to_unsigned`         | `./base.h:437`  |

##### `fmt::v11::detail::copy` (`./base.h:2041`)

|      % |   Time | Samples | Callee                             | Location        |
| -----: | -----: | ------: | ---------------------------------- | --------------- |
| 100.0% | 92.0ms |      92 | `fmt::v11::detail::buffer::append` | `./base.h:1829` |

##### `fmt::v11::detail::copy_noinline` (`./format.h:534`)

|     % |   Time | Samples | Callee                   | Location        |
| ----: | -----: | ------: | ------------------------ | --------------- |
| 74.7% | 65.0ms |      65 | `fmt::v11::detail::copy` | `./base.h:2041` |

##### `fmt::v11::detail::write` (`./format.h:2114`)

|     % |   Time | Samples | Callee                            | Location          |
| ----: | -----: | ------: | --------------------------------- | ----------------- |
| 70.6% | 60.0ms |      60 | `fmt::v11::detail::compute_width` | `./format.h:638`  |
| 25.9% | 22.0ms |      22 | `fmt::v11::detail::write_padded`  | `./format.h:1631` |
|  1.2% |  1.0ms |       1 | `fmt::v11::basic_specs::type`     | `./base.h:754`    |

##### `fmt::v11::detail::write_float` (`./format.h:2452`)

|     % |   Time | Samples | Callee                                   | Location          |
| ----: | -----: | ------: | ---------------------------------------- | ----------------- |
| 77.5% | 62.0ms |      62 | `fmt::v11::detail::do_write_float`       | `./format.h:2333` |
| 15.0% | 12.0ms |      12 | `std::__cxx11::basic_string::_M_dispose` | `<unknown>`       |
|  5.0% |  4.0ms |       4 | `_init`                                  | `<unknown>`       |
|  1.3% |  1.0ms |       1 | `fmt::v11::detail::reserve`              | `./format.h:474`  |
|  1.3% |  1.0ms |       1 | `fmt::v11::detail::write_padded`         | `./format.h:1631` |

##### `fmt::v11::detail::write_padded` (`./format.h:1652`)

|     % |   Time | Samples | Callee                           | Location          |
| ----: | -----: | ------: | -------------------------------- | ----------------- |
| 98.7% | 78.0ms |      78 | `fmt::v11::detail::write_padded` | `./format.h:1631` |

##### `fmt::v11::detail::do_write_float` (`./format.h:2333`)

|     % |   Time | Samples | Callee                                              | Location          |
| ----: | -----: | ------: | --------------------------------------------------- | ----------------- |
| 71.4% | 45.0ms |      45 | `fmt::v11::detail::write_padded`                    | `./format.h:1652` |
|  7.9% |  5.0ms |       5 | `fmt::v11::detail::digit_grouping::~digit_grouping` | `./format.h:1822` |
|  4.8% |  3.0ms |       3 | `fmt::v11::detail::digit_grouping::digit_grouping`  | `./format.h:1846` |

##### `std::__cxx11::basic_string::~basic_string` (`/usr/include/c++/12/bits/basic_string.h:794`)

|     % |   Time | Samples | Callee                                   | Location                                      |
| ----: | -----: | ------: | ---------------------------------------- | --------------------------------------------- |
| 83.3% | 25.0ms |      25 | `std::__cxx11::basic_string::_M_dispose` | `/usr/include/c++/12/bits/basic_string.h:283` |

##### `std::__cxx11::basic_string::_M_dispose` (`/usr/include/c++/12/bits/basic_string.h:283`)

|     % |   Time | Samples | Callee                                    | Location                                      |
| ----: | -----: | ------: | ----------------------------------------- | --------------------------------------------- |
| 92.0% | 23.0ms |      23 | `std::__cxx11::basic_string::_M_destroy`  | `/usr/include/c++/12/bits/basic_string.h:291` |
|  4.0% |  1.0ms |       1 | `std::__cxx11::basic_string::_M_is_local` | `/usr/include/c++/12/bits/basic_string.h:273` |

##### `std::__cxx11::basic_string::basic_string` (`/usr/include/c++/12/bits/basic_string.h:612`)

|     % |   Time | Samples | Callee                                                   | Location                                        |
| ----: | -----: | ------: | -------------------------------------------------------- | ----------------------------------------------- |
| 91.7% | 22.0ms |      22 | `std::__cxx11::basic_string::_M_construct`               | `/usr/include/c++/12/bits/basic_string.tcc:217` |
|  8.3% |  2.0ms |       2 | `std::__cxx11::basic_string::_Alloc_hider::_Alloc_hider` | `/usr/include/c++/12/bits/basic_string.h:199`   |

##### `std::__cxx11::basic_string::_M_destroy` (`/usr/include/c++/12/bits/basic_string.h:291`)

|     % |   Time | Samples | Callee                              | Location                                      |
| ----: | -----: | ------: | ----------------------------------- | --------------------------------------------- |
| 91.3% | 21.0ms |      21 | `std::allocator_traits::deallocate` | `/usr/include/c++/12/bits/alloc_traits.h:495` |

##### `std::__cxx11::basic_string::_M_construct` (`/usr/include/c++/12/bits/basic_string.tcc:217`)

|     % |   Time | Samples | Callee                                      | Location                                      |
| ----: | -----: | ------: | ------------------------------------------- | --------------------------------------------- |
| 45.5% | 10.0ms |      10 | `operator new`                              | `<unknown>`                                   |
| 22.7% |  5.0ms |       5 | `std::__cxx11::basic_string::_M_set_length` | `/usr/include/c++/12/bits/basic_string.h:265` |
| 13.6% |  3.0ms |       3 | `std::__cxx11::basic_string::_S_copy_chars` | `/usr/include/c++/12/bits/basic_string.h:475` |
|  4.5% |  1.0ms |       1 | `__libc_malloc`                             | `<unknown>`                                   |

##### `cfree` (`<unknown>`)

|     % |  Time | Samples | Callee        | Location    |
| ----: | ----: | ------: | ------------- | ----------- |
| 33.3% | 7.0ms |       7 | `(anonymous)` | `<unknown>` |

##### `std::__new_allocator::deallocate` (`/usr/include/c++/12/bits/new_allocator.h:142`)

|      % |   Time | Samples | Callee  | Location    |
| -----: | -----: | ------: | ------- | ----------- |
| 100.0% | 21.0ms |      21 | `cfree` | `<unknown>` |

##### `std::allocator_traits::deallocate` (`/usr/include/c++/12/bits/alloc_traits.h:495`)

|      % |   Time | Samples | Callee                             | Location                                       |
| -----: | -----: | ------: | ---------------------------------- | ---------------------------------------------- |
| 100.0% | 21.0ms |      21 | `std::__new_allocator::deallocate` | `/usr/include/c++/12/bits/new_allocator.h:142` |

##### `operator new` (`<unknown>`)

|     % |  Time | Samples | Callee          | Location    |
| ----: | ----: | ------: | --------------- | ----------- |
| 81.8% | 9.0ms |       9 | `__libc_malloc` | `<unknown>` |

##### `std::__cxx11::basic_string::_M_set_length` (`/usr/include/c++/12/bits/basic_string.h:265`)

|     % |  Time | Samples | Callee                                  | Location                                      |
| ----: | ----: | ------: | --------------------------------------- | --------------------------------------------- |
| 42.9% | 3.0ms |       3 | `std::__cxx11::basic_string::_M_data`   | `/usr/include/c++/12/bits/basic_string.h:233` |
| 42.9% | 3.0ms |       3 | `std::char_traits::assign`              | `/usr/include/c++/12/bits/char_traits.h:347`  |
| 14.3% | 1.0ms |       1 | `std::__cxx11::basic_string::_M_length` | `/usr/include/c++/12/bits/basic_string.h:228` |

##### `std::__cxx11::basic_string::_S_copy` (`/usr/include/c++/12/bits/basic_string.h:418`)

|      % |  Time | Samples | Callee                                | Location                                      |
| -----: | ----: | ------: | ------------------------------------- | --------------------------------------------- |
| 100.0% | 3.0ms |       3 | `std::char_traits::copy`              | `/usr/include/c++/12/bits/char_traits.h:423`  |
| 100.0% | 3.0ms |       3 | `std::__cxx11::basic_string::_S_copy` | `/usr/include/c++/12/bits/basic_string.h:418` |

##### `std::__cxx11::basic_string::_S_copy_chars` (`/usr/include/c++/12/bits/basic_string.h:475`)

|      % |  Time | Samples | Callee                                | Location                                      |
| -----: | ----: | ------: | ------------------------------------- | --------------------------------------------- |
| 100.0% | 3.0ms |       3 | `std::__cxx11::basic_string::_S_copy` | `/usr/include/c++/12/bits/basic_string.h:418` |

##### `std::__cxx11::basic_string::basic_string` (`/usr/include/c++/12/bits/basic_string.h:515`)

|      % |  Time | Samples | Callee                                      | Location                                      |
| -----: | ----: | ------: | ------------------------------------------- | --------------------------------------------- |
| 100.0% | 2.0ms |       2 | `std::__cxx11::basic_string::_M_set_length` | `/usr/include/c++/12/bits/basic_string.h:265` |

##### `std::__cxx11::basic_string::_M_is_local` (`/usr/include/c++/12/bits/basic_string.h:273`)

|      % |  Time | Samples | Callee                                | Location                                      |
| -----: | ----: | ------: | ------------------------------------- | --------------------------------------------- |
| 100.0% | 1.0ms |       1 | `std::__cxx11::basic_string::_M_data` | `/usr/include/c++/12/bits/basic_string.h:233` |

## Hottest call stacks

Call stacks with the most time spent in their leaf frame.

Common call stack: `(anonymous)` ← `__libc_start_main` ← `_start`

|    % |   Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ---: | -----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 6.6% | 52.0ms |      52 | `fmt::v11::detail::parse_format_specs` (`./base.h:1445`) ← `fmt::v11::detail::format_handler::on_format_specs` (`./format.h:3613`) ← `fmt::v11::detail::parse_replacement_field` (`./base.h:1583`) ← `fmt::v11::detail::parse_format_string` (1630) ← `fmt::v11::detail::vformat_to` (`./format-inl.h:1452`) ← `fmt::v11::vformat[abi:cxx11]` (1442) ← `fmt::v11::format` (`./format.h:4198`) ← `main` (`/out/profile.cpp:8`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 4.8% | 38.0ms |      38 | `fmt::v11::detail::utf8_decode` (`./format.h:556`) ← `fmt::v11::detail::for_each_codepoint()::{lambda(char const*, char const*)#1}::operator()` ← `fmt::v11::detail::for_each_codepoint` (598) ← `fmt::v11::detail::compute_width` (638) ← `fmt::v11::detail::write` (2114) ← `fmt::v11::detail::format_handler::on_format_specs` (3613) ← `fmt::v11::detail::parse_replacement_field` (`./base.h:1583`) ← `fmt::v11::detail::parse_format_string` (1630) ← `fmt::v11::detail::vformat_to` (`./format-inl.h:1452`) ← `fmt::v11::vformat[abi:cxx11]` (1442) ← `fmt::v11::format` (`./format.h:4198`) ← `main` (`/out/profile.cpp:8`)                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 3.9% | 31.0ms |      31 | `fmt::v11::detail::parse_format_string` (`./base.h:1630`) ← `fmt::v11::detail::vformat_to` (`./format-inl.h:1452`) ← `fmt::v11::vformat[abi:cxx11]` (1442) ← `fmt::v11::format` (`./format.h:4198`) ← `main` (`/out/profile.cpp:8`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 3.5% | 28.0ms |      28 | `(anonymous)` ← `fmt::v11::vformat[abi:cxx11]` (`./format-inl.h:1442`) ← `fmt::v11::format` (`./format.h:4198`) ← `main` (`/out/profile.cpp:8`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 3.3% | 26.0ms |      26 | `fmt::v11::detail::format_float` (`./format.h:2994`) ← `fmt::v11::detail::write_float` (3301) ← `fmt::v11::detail::write` (3357) ← `fmt::v11::detail::arg_formatter::operator()` (3498) ← `fmt::v11::basic_format_arg::visit` (`./base.h:2516`) ← `fmt::v11::detail::format_handler::on_format_specs` (`./format.h:3613`) ← `fmt::v11::detail::parse_replacement_field` (`./base.h:1583`) ← `fmt::v11::detail::parse_format_string` (1630) ← `fmt::v11::detail::vformat_to` (`./format-inl.h:1452`) ← `fmt::v11::vformat[abi:cxx11]` (1442) ← `fmt::v11::format` (`./format.h:4198`) ← `main` (`/out/profile.cpp:8`)                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 3.0% | 24.0ms |      24 | `fmt::v11::detail::parse_replacement_field` (`./base.h:1583`) ← `fmt::v11::detail::parse_format_string` (1630) ← `fmt::v11::detail::vformat_to` (`./format-inl.h:1452`) ← `fmt::v11::vformat[abi:cxx11]` (1442) ← `fmt::v11::format` (`./format.h:4198`) ← `main` (`/out/profile.cpp:8`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 2.7% | 21.0ms |      21 | `fmt::v11::detail::format_handler::on_format_specs` (`./format.h:3613`) ← `fmt::v11::detail::parse_replacement_field` (`./base.h:1583`) ← `fmt::v11::detail::parse_format_string` (1630) ← `fmt::v11::detail::vformat_to` (`./format-inl.h:1452`) ← `fmt::v11::vformat[abi:cxx11]` (1442) ← `fmt::v11::format` (`./format.h:4198`) ← `main` (`/out/profile.cpp:8`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 2.5% | 20.0ms |      20 | `fmt::v11::detail::buffer::append` (`./base.h:1829`) ← `fmt::v11::detail::copy` (2041) ← `fmt::v11::detail::copy_noinline` (`./format.h:534`) ← `fmt::v11::detail::format_handler::on_text` (3593) ← `fmt::v11::detail::parse_format_string` (`./base.h:1630`) ← `fmt::v11::detail::vformat_to` (`./format-inl.h:1452`) ← `fmt::v11::vformat[abi:cxx11]` (1442) ← `fmt::v11::format` (`./format.h:4198`) ← `main` (`/out/profile.cpp:8`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 2.5% | 20.0ms |      20 | `fmt::v11::detail::buffer::append` (`./base.h:1829`) ← `fmt::v11::detail::copy` (2041) ← `fmt::v11::detail::copy_noinline` (`./format.h:534`) ← `fmt::v11::detail::format_handler::on_replacement_field` (3609) ← `fmt::v11::detail::parse_replacement_field` (`./base.h:1583`) ← `fmt::v11::detail::parse_format_string` (1630) ← `fmt::v11::detail::vformat_to` (`./format-inl.h:1452`) ← `fmt::v11::vformat[abi:cxx11]` (1442) ← `fmt::v11::format` (`./format.h:4198`) ← `main` (`/out/profile.cpp:8`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 2.1% | 17.0ms |      17 | `fmt::v11::detail::compute_width()::count_code_points::operator()` (`./format.h:643`) ← `fmt::v11::detail::for_each_codepoint()::{lambda(char const*, char const*)#1}::operator()` ← `fmt::v11::detail::for_each_codepoint` (598) ← `fmt::v11::detail::compute_width` (638) ← `fmt::v11::detail::write` (2114) ← `fmt::v11::detail::format_handler::on_format_specs` (3613) ← `fmt::v11::detail::parse_replacement_field` (`./base.h:1583`) ← `fmt::v11::detail::parse_format_string` (1630) ← `fmt::v11::detail::vformat_to` (`./format-inl.h:1452`) ← `fmt::v11::vformat[abi:cxx11]` (1442) ← `fmt::v11::format` (`./format.h:4198`) ← `main` (`/out/profile.cpp:8`)                                                                                                                                                                                                                                                                                                                                                                                                        |
| 1.9% | 15.0ms |      15 | `fmt::v11::detail::buffer::append` (`./base.h:1829`) ← `fmt::v11::detail::copy` (2041) ← `fmt::v11::detail::copy_noinline` (`./format.h:534`) ← `fmt::v11::detail::write_significand` (2302) ← `fmt::v11::detail::write_significand` (2314) ← `fmt::v11::detail::do_write_float()::{lambda(fmt::v11::basic_appender)#4}::operator()` ← `fmt::v11::detail::write_padded` (1631) ← `fmt::v11::detail::write_padded` (1652) ← `fmt::v11::detail::do_write_float` (2333) ← `fmt::v11::detail::write_float` (2452) ← `fmt::v11::detail::write_float` (3301) ← `fmt::v11::detail::write` (3357) ← `fmt::v11::detail::arg_formatter::operator()` (3498) ← `fmt::v11::basic_format_arg::visit` (`./base.h:2516`) ← `fmt::v11::detail::format_handler::on_format_specs` (`./format.h:3613`) ← `fmt::v11::detail::parse_replacement_field` (`./base.h:1583`) ← `fmt::v11::detail::parse_format_string` (1630) ← `fmt::v11::detail::vformat_to` (`./format-inl.h:1452`) ← `fmt::v11::vformat[abi:cxx11]` (1442) ← `fmt::v11::format` (`./format.h:4198`) ← `main` (`/out/profile.cpp:8`) |
| 1.8% | 14.0ms |      14 | `cfree` ← `std::__new_allocator::deallocate` (`/usr/include/c++/12/bits/new_allocator.h:142`) ← `std::allocator_traits::deallocate` (`/usr/include/c++/12/bits/alloc_traits.h:495`) ← `std::__cxx11::basic_string::_M_destroy` (`/usr/include/c++/12/bits/basic_string.h:291`) ← `std::__cxx11::basic_string::_M_dispose` (283) ← `std::__cxx11::basic_string::~basic_string` (794) ← `main` (`/out/profile.cpp:8`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 1.8% | 14.0ms |      14 | `fmt::v11::detail::parse_nonnegative_int` (`./base.h:1296`) ← `fmt::v11::detail::parse_dynamic_spec` (1384) ← `fmt::v11::detail::parse_width` (1417) ← `fmt::v11::detail::parse_format_specs` (1445) ← `fmt::v11::detail::format_handler::on_format_specs` (`./format.h:3613`) ← `fmt::v11::detail::parse_replacement_field` (`./base.h:1583`) ← `fmt::v11::detail::parse_format_string` (1630) ← `fmt::v11::detail::vformat_to` (`./format-inl.h:1452`) ← `fmt::v11::vformat[abi:cxx11]` (1442) ← `fmt::v11::format` (`./format.h:4198`) ← `main` (`/out/profile.cpp:8`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 1.6% | 13.0ms |      13 | `fmt::v11::basic_format_arg::visit` (`./base.h:2516`) ← `fmt::v11::detail::format_handler::on_format_specs` (`./format.h:3613`) ← `fmt::v11::detail::parse_replacement_field` (`./base.h:1583`) ← `fmt::v11::detail::parse_format_string` (1630) ← `fmt::v11::detail::vformat_to` (`./format-inl.h:1452`) ← `fmt::v11::vformat[abi:cxx11]` (1442) ← `fmt::v11::format` (`./format.h:4198`) ← `main` (`/out/profile.cpp:8`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 1.6% | 13.0ms |      13 | `(anonymous)` ← `fmt::v11::detail::format_handler::on_replacement_field` (`./format.h:3609`) ← `fmt::v11::detail::parse_replacement_field` (`./base.h:1583`) ← `fmt::v11::detail::parse_format_string` (1630) ← `fmt::v11::detail::vformat_to` (`./format-inl.h:1452`) ← `fmt::v11::vformat[abi:cxx11]` (1442) ← `fmt::v11::format` (`./format.h:4198`) ← `main` (`/out/profile.cpp:8`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 1.6% | 13.0ms |      13 | `std::__cxx11::basic_string::_M_create` ← `fmt::v11::vformat[abi:cxx11]` (`./format-inl.h:1442`) ← `fmt::v11::format` (`./format.h:4198`) ← `main` (`/out/profile.cpp:8`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 1.5% | 12.0ms |      12 | `fmt::v11::detail::copy_noinline` (`./format.h:534`) ← `fmt::v11::detail::format_handler::on_text` (3593) ← `fmt::v11::detail::parse_format_string` (`./base.h:1630`) ← `fmt::v11::detail::vformat_to` (`./format-inl.h:1452`) ← `fmt::v11::vformat[abi:cxx11]` (1442) ← `fmt::v11::format` (`./format.h:4198`) ← `main` (`/out/profile.cpp:8`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 1.5% | 12.0ms |      12 | `std::__cxx11::basic_string::_M_dispose` ← `fmt::v11::detail::write_float` (`./format.h:2452`) ← `fmt::v11::detail::write_float` (3301) ← `fmt::v11::detail::write` (3357) ← `fmt::v11::detail::arg_formatter::operator()` (3498) ← `fmt::v11::basic_format_arg::visit` (`./base.h:2516`) ← `fmt::v11::detail::format_handler::on_format_specs` (`./format.h:3613`) ← `fmt::v11::detail::parse_replacement_field` (`./base.h:1583`) ← `fmt::v11::detail::parse_format_string` (1630) ← `fmt::v11::detail::vformat_to` (`./format-inl.h:1452`) ← `fmt::v11::vformat[abi:cxx11]` (1442) ← `fmt::v11::format` (`./format.h:4198`) ← `main` (`/out/profile.cpp:8`)                                                                                                                                                                                                                                                                                                                                                                                                                |
| 1.5% | 12.0ms |      12 | `fmt::v11::detail::write_float` (`./format.h:3301`) ← `fmt::v11::detail::write` (3357) ← `fmt::v11::detail::arg_formatter::operator()` (3498) ← `fmt::v11::basic_format_arg::visit` (`./base.h:2516`) ← `fmt::v11::detail::format_handler::on_format_specs` (`./format.h:3613`) ← `fmt::v11::detail::parse_replacement_field` (`./base.h:1583`) ← `fmt::v11::detail::parse_format_string` (1630) ← `fmt::v11::detail::vformat_to` (`./format-inl.h:1452`) ← `fmt::v11::vformat[abi:cxx11]` (1442) ← `fmt::v11::format` (`./format.h:4198`) ← `main` (`/out/profile.cpp:8`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 1.5% | 12.0ms |      12 | `operator delete`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
