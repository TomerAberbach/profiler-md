# Allocated heap profile diff

Allocated 120 MiB (-0 B, ~0%) over 1,998,001 objects (62.9 B per object).

| Category         | Change | Delta |      % |    Size |   Objects |
| ---------------- | -----: | ----: | -----: | ------: | --------: |
| Standard library |    ~0% |  -0 B | 100.0% | 120 MiB | 1,998,001 |

## Hottest functions

### Self size

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

##### Standard library

| Change | Delta |      % |    Size |   Objects | Function                                   | Location                                   |
| -----: | ----: | -----: | ------: | --------: | ------------------------------------------ | ------------------------------------------ |
|    ~0% |  -0 B | 100.0% | 120 MiB | 1,998,000 | `std::__cxx11::basic_string::_M_construct` | `usr/include/c++/12/bits/basic_string.tcc` |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

| Change |        Delta |             % |          Size |       Objects | Function                       | Location                                                                      |
| -----: | -----------: | ------------: | ------------: | ------------: | ------------------------------ | ----------------------------------------------------------------------------- |
|    new | +119.814 MiB | 0.0% → 100.0% | 0 B → 120 MiB | 0 → 1,998,000 | `fmt::v12::to_string`          | `src/fmt/include/fmt/format.h`                                                |
|    new | +119.814 MiB | 0.0% → 100.0% | 0 B → 120 MiB | 0 → 1,998,000 | `fmt::v12::vformat[abi:cxx11]` | `src/fmt/include/fmt/format-inl.h`                                            |
|    new | +119.814 MiB | 0.0% → 100.0% | 0 B → 120 MiB | 0 → 1,998,000 | `fmt::v12::format`             | `src/fmt/include/fmt/format.h`                                                |
|    new | +119.813 MiB | 0.0% → 100.0% | 0 B → 120 MiB | 0 → 1,997,957 | `0x13cfb`                      | `tmp/nix-shell.NcwiQ3/profiler-md-input-generation.6FxtDr/cpp-current/binary` |
|    new | +119.813 MiB | 0.0% → 100.0% | 0 B → 120 MiB | 0 → 1,997,957 | `0xfffffc2314bf`               | `<unknown>`                                                                   |
|    new |        +74 B |  0.0% → <0.1% |    0 B → 74 B |         0 → 1 | `0xaaaa00000000`               | `<unknown>`                                                                   |
|    new |        +68 B |  0.0% → <0.1% |    0 B → 68 B |         0 → 1 | `0xfffffc2312e7`               | `<unknown>`                                                                   |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

|  Change |        Delta |             % |               Size |        Objects | Function                                   | Location                                   |
| ------: | -----------: | ------------: | -----------------: | -------------: | ------------------------------------------ | ------------------------------------------ |
| removed | -119.814 MiB | 100.0% → 0.0% |      120 MiB → 0 B |  1,998,000 → 0 | `fmt::v11::to_string`                      | `src/fmt/include/fmt/format.h`             |
| removed | -119.814 MiB | 100.0% → 0.0% |      120 MiB → 0 B |  1,998,000 → 0 | `fmt::v11::vformat[abi:cxx11]`             | `src/fmt/include/fmt/format-inl.h`         |
| removed | -119.814 MiB | 100.0% → 0.0% |      120 MiB → 0 B |  1,998,000 → 0 | `fmt::v11::format`                         | `src/fmt/include/fmt/format.h`             |
| -100.0% | -118.749 MiB | 99.1% → <0.1% | 119 MiB → 8.85 KiB | 1,982,596 → 44 | `0xffffffffffffffff`                       | `<unknown>`                                |
| -100.0% | -117.796 MiB | 98.3% → <0.1% |    118 MiB → 727 B | 1,966,776 → 41 | `0x6400000009`                             | `<unknown>`                                |
| removed | -652.937 KiB |   0.5% → 0.0% |      653 KiB → 0 B |      9,881 → 0 | `0x6400000000`                             | `<unknown>`                                |
| removed | -397.534 KiB |   0.3% → 0.0% |      398 KiB → 0 B |      7,061 → 0 | `0xffffa3610027`                           | `<unknown>`                                |
| removed |       -137 B |  <0.1% → 0.0% |        137 B → 0 B |          2 → 0 | `0xffffc92ac017`                           | `<unknown>`                                |
|     ~0% |         -0 B |        100.0% |            120 MiB |      1,998,000 | `std::__cxx11::basic_string::_M_construct` | `usr/include/c++/12/bits/basic_string.tcc` |
|     ~0% |         -0 B |        100.0% |            120 MiB |      1,998,000 | `std::__cxx11::basic_string::basic_string` | `usr/include/c++/12/bits/basic_string.h`   |
|     ~0% |         -0 B |        100.0% |            120 MiB |      1,998,001 | `main`                                     | `out/profile.cpp`                          |
|     ~0% |         -0 B |        100.0% |            120 MiB |      1,998,001 | `0x27743`                                  | `usr/lib/aarch64-linux-gnu/libc.so.6`      |
|     ~0% |         -0 B |        100.0% |            120 MiB |      1,998,001 | `0x27817`                                  | `usr/lib/aarch64-linux-gnu/libc.so.6`      |
|     ~0% |         -0 B |        100.0% |            120 MiB |      1,998,001 | `_start`                                   | `<unknown>`                                |

##### Standard library

| Change | Delta |      % |    Size |   Objects | Function                                   | Location                                   |
| -----: | ----: | -----: | ------: | --------: | ------------------------------------------ | ------------------------------------------ |
|    ~0% |  -0 B | 100.0% | 120 MiB | 1,998,000 | `std::__cxx11::basic_string::_M_construct` | `usr/include/c++/12/bits/basic_string.tcc` |
|    ~0% |  -0 B | 100.0% | 120 MiB | 1,998,000 | `std::__cxx11::basic_string::basic_string` | `usr/include/c++/12/bits/basic_string.h`   |

# Retained heap profile diff

Retained 0 B over 0 objects.

No bytes retained in any object.
