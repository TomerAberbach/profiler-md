# Allocated heap profile diff

Allocated 120 MiB (-0 B, ~0%) over 1,998,001 objects (62.9 B per object).

| Category         | Change | Delta |      % |    Size |   Objects |
| ---------------- | -----: | ----: | -----: | ------: | --------: |
| Standard library |    ~0% |  -0 B | 100.0% | 120 MiB | 1,998,001 |

Paths starting with `./` or `../` are relative to `/src/fmt/include/fmt/`.

## Hottest functions

### Self size

#### Improvements

Functions with the largest decrease in bytes allocated within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

##### Standard library

| Change | Delta |      % |    Size |   Objects | Function                                   | Location                                    |
| -----: | ----: | -----: | ------: | --------: | ------------------------------------------ | ------------------------------------------- |
|    ~0% |  -0 B | 100.0% | 120 MiB | 1,998,000 | `std::__cxx11::basic_string::_M_construct` | `/usr/include/c++/12/bits/basic_string.tcc` |

#### Lines

Lines with the largest change in contribution to each function's self size.

##### `std::__cxx11::basic_string::_M_construct` (`/usr/include/c++/12/bits/basic_string.tcc`)

| Change | Delta |      % |    Size |   Objects | Location                                        |
| -----: | ----: | -----: | ------: | --------: | ----------------------------------------------- |
|    ~0% |  -0 B | 100.0% | 120 MiB | 1,998,000 | `/usr/include/c++/12/bits/basic_string.tcc:225` |

#### Callers

Callers with the largest change in contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `std::__cxx11::basic_string::_M_construct` (`/usr/include/c++/12/bits/basic_string.tcc`)

| Change | Delta |      % |    Size |   Objects | Caller                                     | Location                                  |
| -----: | ----: | -----: | ------: | --------: | ------------------------------------------ | ----------------------------------------- |
|    ~0% |  -0 B | 100.0% | 120 MiB | 1,998,000 | `std::__cxx11::basic_string::basic_string` | `/usr/include/c++/12/bits/basic_string.h` |

### Total size

#### Regressions

Functions with the largest increase in bytes allocated within the function and its callees.

| Change |        Delta |             % |          Size |       Objects | Function                       | Location                                                                       |
| -----: | -----------: | ------------: | ------------: | ------------: | ------------------------------ | ------------------------------------------------------------------------------ |
|    new | +119.814 MiB | 0.0% → 100.0% | 0 B → 120 MiB | 0 → 1,998,000 | `fmt::v12::to_string`          | `./format.h`                                                                   |
|    new | +119.814 MiB | 0.0% → 100.0% | 0 B → 120 MiB | 0 → 1,998,000 | `fmt::v12::vformat[abi:cxx11]` | `./format-inl.h`                                                               |
|    new | +119.814 MiB | 0.0% → 100.0% | 0 B → 120 MiB | 0 → 1,998,000 | `fmt::v12::format`             | `./format.h`                                                                   |
|    new | +119.813 MiB | 0.0% → 100.0% | 0 B → 120 MiB | 0 → 1,997,957 | `0x13cfb`                      | `/tmp/nix-shell.NcwiQ3/profiler-md-input-generation.6FxtDr/cpp-current/binary` |
|    new | +119.813 MiB | 0.0% → 100.0% | 0 B → 120 MiB | 0 → 1,997,957 | `0xfffffc2314bf`               | `<unknown>`                                                                    |
|    new |        +74 B |  0.0% → <0.1% |    0 B → 74 B |         0 → 1 | `0xaaaa00000000`               | `<unknown>`                                                                    |
|    new |        +68 B |  0.0% → <0.1% |    0 B → 68 B |         0 → 1 | `0xfffffc2312e7`               | `<unknown>`                                                                    |

#### Improvements

Functions with the largest decrease in bytes allocated within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

|  Change |        Delta |             % |               Size |        Objects | Function                                   | Location                                    |
| ------: | -----------: | ------------: | -----------------: | -------------: | ------------------------------------------ | ------------------------------------------- |
| removed | -119.814 MiB | 100.0% → 0.0% |      120 MiB → 0 B |  1,998,000 → 0 | `fmt::v11::to_string`                      | `./format.h`                                |
| removed | -119.814 MiB | 100.0% → 0.0% |      120 MiB → 0 B |  1,998,000 → 0 | `fmt::v11::vformat[abi:cxx11]`             | `./format-inl.h`                            |
| removed | -119.814 MiB | 100.0% → 0.0% |      120 MiB → 0 B |  1,998,000 → 0 | `fmt::v11::format`                         | `./format.h`                                |
| -100.0% | -118.749 MiB | 99.1% → <0.1% | 119 MiB → 8.85 KiB | 1,982,596 → 44 | `0xffffffffffffffff`                       | `<unknown>`                                 |
| -100.0% | -117.796 MiB | 98.3% → <0.1% |    118 MiB → 727 B | 1,966,776 → 41 | `0x6400000009`                             | `<unknown>`                                 |
| removed | -652.937 KiB |   0.5% → 0.0% |      653 KiB → 0 B |      9,881 → 0 | `0x6400000000`                             | `<unknown>`                                 |
| removed | -397.534 KiB |   0.3% → 0.0% |      398 KiB → 0 B |      7,061 → 0 | `0xffffa3610027`                           | `<unknown>`                                 |
| removed |       -137 B |  <0.1% → 0.0% |        137 B → 0 B |          2 → 0 | `0xffffc92ac017`                           | `<unknown>`                                 |
|     ~0% |         -0 B |        100.0% |            120 MiB |      1,998,000 | `std::__cxx11::basic_string::_M_construct` | `/usr/include/c++/12/bits/basic_string.tcc` |
|     ~0% |         -0 B |        100.0% |            120 MiB |      1,998,000 | `std::__cxx11::basic_string::basic_string` | `/usr/include/c++/12/bits/basic_string.h`   |
|     ~0% |         -0 B |        100.0% |            120 MiB |      1,998,001 | `main`                                     | `/out/profile.cpp`                          |
|     ~0% |         -0 B |        100.0% |            120 MiB |      1,998,001 | `0x27743`                                  | `/usr/lib/aarch64-linux-gnu/libc.so.6`      |
|     ~0% |         -0 B |        100.0% |            120 MiB |      1,998,001 | `0x27817`                                  | `/usr/lib/aarch64-linux-gnu/libc.so.6`      |
|     ~0% |         -0 B |        100.0% |            120 MiB |      1,998,001 | `_start`                                   | `<unknown>`                                 |

##### Standard library

| Change | Delta |      % |    Size |   Objects | Function                                   | Location                                    |
| -----: | ----: | -----: | ------: | --------: | ------------------------------------------ | ------------------------------------------- |
|    ~0% |  -0 B | 100.0% | 120 MiB | 1,998,000 | `std::__cxx11::basic_string::_M_construct` | `/usr/include/c++/12/bits/basic_string.tcc` |
|    ~0% |  -0 B | 100.0% | 120 MiB | 1,998,000 | `std::__cxx11::basic_string::basic_string` | `/usr/include/c++/12/bits/basic_string.h`   |

#### Callers

Callers with the largest change in contribution to each function's total size. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `fmt::v12::to_string` (`./format.h`)

| Change |        Delta |             % |          Size |       Objects | Caller                         | Location         |
| -----: | -----------: | ------------: | ------------: | ------------: | ------------------------------ | ---------------- |
|    new | +119.814 MiB | 0.0% → 100.0% | 0 B → 120 MiB | 0 → 1,998,000 | `fmt::v12::vformat[abi:cxx11]` | `./format-inl.h` |

##### `fmt::v12::vformat[abi:cxx11]` (`./format-inl.h`)

| Change |        Delta |             % |          Size |       Objects | Caller             | Location     |
| -----: | -----------: | ------------: | ------------: | ------------: | ------------------ | ------------ |
|    new | +119.814 MiB | 0.0% → 100.0% | 0 B → 120 MiB | 0 → 1,998,000 | `fmt::v12::format` | `./format.h` |

##### `fmt::v12::format` (`./format.h`)

| Change |        Delta |             % |          Size |       Objects | Caller | Location           |
| -----: | -----------: | ------------: | ------------: | ------------: | ------ | ------------------ |
|    new | +119.814 MiB | 0.0% → 100.0% | 0 B → 120 MiB | 0 → 1,998,000 | `main` | `/out/profile.cpp` |

##### `0x13cfb` (`/tmp/nix-shell.NcwiQ3/profiler-md-input-generation.6FxtDr/cpp-current/binary`)

| Change |        Delta |             % |          Size |       Objects | Caller           | Location    |
| -----: | -----------: | ------------: | ------------: | ------------: | ---------------- | ----------- |
|    new | +119.813 MiB | 0.0% → 100.0% | 0 B → 120 MiB | 0 → 1,997,957 | `0xfffffc2314bf` | `<unknown>` |

##### `0xaaaa00000000` (`<unknown>`)

| Change | Delta |             % |       Size | Objects | Caller               | Location    |
| -----: | ----: | ------------: | ---------: | ------: | -------------------- | ----------- |
|    new | +74 B | 0.0% → 100.0% | 0 B → 74 B |   0 → 1 | `0xffffffffffffffff` | `<unknown>` |

##### `0xfffffc2312e7` (`<unknown>`)

| Change | Delta |             % |       Size | Objects | Caller               | Location    |
| -----: | ----: | ------------: | ---------: | ------: | -------------------- | ----------- |
|    new | +68 B | 0.0% → 100.0% | 0 B → 68 B |   0 → 1 | `0xffffffffffffffff` | `<unknown>` |

##### `fmt::v11::to_string` (`./format.h`)

|  Change |        Delta |             % |          Size |       Objects | Caller                         | Location         |
| ------: | -----------: | ------------: | ------------: | ------------: | ------------------------------ | ---------------- |
| removed | -119.814 MiB | 100.0% → 0.0% | 120 MiB → 0 B | 1,998,000 → 0 | `fmt::v11::vformat[abi:cxx11]` | `./format-inl.h` |

##### `fmt::v11::vformat[abi:cxx11]` (`./format-inl.h`)

|  Change |        Delta |             % |          Size |       Objects | Caller             | Location     |
| ------: | -----------: | ------------: | ------------: | ------------: | ------------------ | ------------ |
| removed | -119.814 MiB | 100.0% → 0.0% | 120 MiB → 0 B | 1,998,000 → 0 | `fmt::v11::format` | `./format.h` |

##### `fmt::v11::format` (`./format.h`)

|  Change |        Delta |             % |          Size |       Objects | Caller | Location           |
| ------: | -----------: | ------------: | ------------: | ------------: | ------ | ------------------ |
| removed | -119.814 MiB | 100.0% → 0.0% | 120 MiB → 0 B | 1,998,000 → 0 | `main` | `/out/profile.cpp` |

##### `0x6400000009` (`<unknown>`)

|  Change |        Delta |      % |            Size |        Objects | Caller               | Location    |
| ------: | -----------: | -----: | --------------: | -------------: | -------------------- | ----------- |
| -100.0% | -117.796 MiB | 100.0% | 118 MiB → 727 B | 1,966,776 → 41 | `0xffffffffffffffff` | `<unknown>` |

##### `0x6400000000` (`<unknown>`)

|  Change |        Delta |             % |          Size |   Objects | Caller               | Location    |
| ------: | -----------: | ------------: | ------------: | --------: | -------------------- | ----------- |
| removed | -652.937 KiB | 100.0% → 0.0% | 653 KiB → 0 B | 9,881 → 0 | `0xffffffffffffffff` | `<unknown>` |

##### `0xffffa3610027` (`<unknown>`)

|  Change |        Delta |            % |           Size |   Objects | Caller               | Location    |
| ------: | -----------: | -----------: | -------------: | --------: | -------------------- | ----------- |
| removed | -323.175 KiB | 81.3% → 0.0% |  323 KiB → 0 B | 5,936 → 0 | `0xffffffffffffffff` | `<unknown>` |
| removed |  -74.358 KiB | 18.7% → 0.0% | 74.4 KiB → 0 B | 1,125 → 0 | `0xffffa3610027`     | `<unknown>` |

##### `0xffffc92ac017` (`<unknown>`)

|  Change |  Delta |             % |        Size | Objects | Caller               | Location    |
| ------: | -----: | ------------: | ----------: | ------: | -------------------- | ----------- |
| removed | -137 B | 100.0% → 0.0% | 137 B → 0 B |   2 → 0 | `0xffffffffffffffff` | `<unknown>` |

##### `std::__cxx11::basic_string::_M_construct` (`/usr/include/c++/12/bits/basic_string.tcc`)

| Change | Delta |      % |    Size |   Objects | Caller                                     | Location                                  |
| -----: | ----: | -----: | ------: | --------: | ------------------------------------------ | ----------------------------------------- |
|    ~0% |  -0 B | 100.0% | 120 MiB | 1,998,000 | `std::__cxx11::basic_string::basic_string` | `/usr/include/c++/12/bits/basic_string.h` |

##### `std::__cxx11::basic_string::basic_string` (`/usr/include/c++/12/bits/basic_string.h`)

|  Change |        Delta |             % |          Size |       Objects | Caller                | Location     |
| ------: | -----------: | ------------: | ------------: | ------------: | --------------------- | ------------ |
| removed | -119.814 MiB | 100.0% → 0.0% | 120 MiB → 0 B | 1,998,000 → 0 | `fmt::v11::to_string` | `./format.h` |
|     new | +119.814 MiB | 0.0% → 100.0% | 0 B → 120 MiB | 0 → 1,998,000 | `fmt::v12::to_string` | `./format.h` |

##### `main` (`/out/profile.cpp`)

| Change | Delta |      % |    Size |   Objects | Caller    | Location                               |
| -----: | ----: | -----: | ------: | --------: | --------- | -------------------------------------- |
|    ~0% |  -0 B | 100.0% | 120 MiB | 1,998,001 | `0x27743` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change | Delta |      % |    Size |   Objects | Caller    | Location                               |
| -----: | ----: | -----: | ------: | --------: | --------- | -------------------------------------- |
|    ~0% |  -0 B | 100.0% | 120 MiB | 1,998,001 | `0x27817` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x27817` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change | Delta |      % |    Size |   Objects | Caller   | Location    |
| -----: | ----: | -----: | ------: | --------: | -------- | ----------- |
|    ~0% |  -0 B | 100.0% | 120 MiB | 1,998,001 | `_start` | `<unknown>` |

##### `_start` (`<unknown>`)

|  Change |          Delta |             % |            Size |        Objects | Caller                                     | Location                                                                       |
| ------: | -------------: | ------------: | --------------: | -------------: | ------------------------------------------ | ------------------------------------------------------------------------------ |
|     new |   +119.813 MiB | 0.0% → 100.0% |   0 B → 120 MiB |  0 → 1,997,957 | `0x13cfb`                                  | `/tmp/nix-shell.NcwiQ3/profiler-md-input-generation.6FxtDr/cpp-current/binary` |
| -100.0% |   -117.796 MiB | 98.3% → <0.1% | 118 MiB → 727 B | 1,966,776 → 41 | `0x6400000009`                             | `<unknown>`                                                                    |
| removed | -1,015.879 KiB |   0.8% → 0.0% | 1,016 KiB → 0 B |     14,280 → 0 | `std::__cxx11::basic_string::_M_construct` | `/usr/include/c++/12/bits/basic_string.tcc`                                    |
| removed |   -652.937 KiB |   0.5% → 0.0% |   653 KiB → 0 B |      9,881 → 0 | `0x6400000000`                             | `<unknown>`                                                                    |
| removed |   -397.534 KiB |   0.3% → 0.0% |   398 KiB → 0 B |      7,061 → 0 | `0xffffa3610027`                           | `<unknown>`                                                                    |

#### Callees

Callees with the largest change in contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `fmt::v12::to_string` (`./format.h`)

| Change |        Delta |             % |          Size |       Objects | Callee                                     | Location                                  |
| -----: | -----------: | ------------: | ------------: | ------------: | ------------------------------------------ | ----------------------------------------- |
|    new | +119.814 MiB | 0.0% → 100.0% | 0 B → 120 MiB | 0 → 1,998,000 | `std::__cxx11::basic_string::basic_string` | `/usr/include/c++/12/bits/basic_string.h` |

##### `fmt::v12::vformat[abi:cxx11]` (`./format-inl.h`)

| Change |        Delta |             % |          Size |       Objects | Callee                | Location     |
| -----: | -----------: | ------------: | ------------: | ------------: | --------------------- | ------------ |
|    new | +119.814 MiB | 0.0% → 100.0% | 0 B → 120 MiB | 0 → 1,998,000 | `fmt::v12::to_string` | `./format.h` |

##### `fmt::v12::format` (`./format.h`)

| Change |        Delta |             % |          Size |       Objects | Callee                         | Location         |
| -----: | -----------: | ------------: | ------------: | ------------: | ------------------------------ | ---------------- |
|    new | +119.814 MiB | 0.0% → 100.0% | 0 B → 120 MiB | 0 → 1,998,000 | `fmt::v12::vformat[abi:cxx11]` | `./format-inl.h` |

##### `0x13cfb` (`/tmp/nix-shell.NcwiQ3/profiler-md-input-generation.6FxtDr/cpp-current/binary`)

| Change |        Delta |             % |          Size |       Objects | Callee   | Location    |
| -----: | -----------: | ------------: | ------------: | ------------: | -------- | ----------- |
|    new | +119.813 MiB | 0.0% → 100.0% | 0 B → 120 MiB | 0 → 1,997,957 | `_start` | `<unknown>` |

##### `0xfffffc2314bf` (`<unknown>`)

| Change |        Delta |             % |          Size |       Objects | Callee    | Location                                                                       |
| -----: | -----------: | ------------: | ------------: | ------------: | --------- | ------------------------------------------------------------------------------ |
|    new | +119.813 MiB | 0.0% → 100.0% | 0 B → 120 MiB | 0 → 1,997,957 | `0x13cfb` | `/tmp/nix-shell.NcwiQ3/profiler-md-input-generation.6FxtDr/cpp-current/binary` |

##### `0xaaaa00000000` (`<unknown>`)

| Change | Delta |             % |       Size | Objects | Callee   | Location    |
| -----: | ----: | ------------: | ---------: | ------: | -------- | ----------- |
|    new | +74 B | 0.0% → 100.0% | 0 B → 74 B |   0 → 1 | `_start` | `<unknown>` |

##### `0xfffffc2312e7` (`<unknown>`)

| Change | Delta |             % |       Size | Objects | Callee   | Location    |
| -----: | ----: | ------------: | ---------: | ------: | -------- | ----------- |
|    new | +68 B | 0.0% → 100.0% | 0 B → 68 B |   0 → 1 | `_start` | `<unknown>` |

##### `fmt::v11::to_string` (`./format.h`)

|  Change |        Delta |             % |          Size |       Objects | Callee                                     | Location                                  |
| ------: | -----------: | ------------: | ------------: | ------------: | ------------------------------------------ | ----------------------------------------- |
| removed | -119.814 MiB | 100.0% → 0.0% | 120 MiB → 0 B | 1,998,000 → 0 | `std::__cxx11::basic_string::basic_string` | `/usr/include/c++/12/bits/basic_string.h` |

##### `fmt::v11::vformat[abi:cxx11]` (`./format-inl.h`)

|  Change |        Delta |             % |          Size |       Objects | Callee                | Location     |
| ------: | -----------: | ------------: | ------------: | ------------: | --------------------- | ------------ |
| removed | -119.814 MiB | 100.0% → 0.0% | 120 MiB → 0 B | 1,998,000 → 0 | `fmt::v11::to_string` | `./format.h` |

##### `fmt::v11::format` (`./format.h`)

|  Change |        Delta |             % |          Size |       Objects | Callee                         | Location         |
| ------: | -----------: | ------------: | ------------: | ------------: | ------------------------------ | ---------------- |
| removed | -119.814 MiB | 100.0% → 0.0% | 120 MiB → 0 B | 1,998,000 → 0 | `fmt::v11::vformat[abi:cxx11]` | `./format-inl.h` |

##### `0xffffffffffffffff` (`<unknown>`)

|  Change |        Delta |            % |            Size |        Objects | Callee           | Location    |
| ------: | -----------: | -----------: | --------------: | -------------: | ---------------- | ----------- |
| -100.0% | -117.796 MiB | 99.2% → 8.0% | 118 MiB → 727 B | 1,966,776 → 41 | `0x6400000009`   | `<unknown>` |
| removed | -652.937 KiB |  0.5% → 0.0% |   653 KiB → 0 B |      9,881 → 0 | `0x6400000000`   | `<unknown>` |
| removed | -323.175 KiB |  0.3% → 0.0% |   323 KiB → 0 B |      5,936 → 0 | `0xffffa3610027` | `<unknown>` |
| removed |       -137 B | <0.1% → 0.0% |     137 B → 0 B |          2 → 0 | `0xffffc92ac017` | `<unknown>` |
|     new |        +74 B |  0.0% → 0.8% |      0 B → 74 B |          0 → 1 | `0xaaaa00000000` | `<unknown>` |

##### `0x6400000009` (`<unknown>`)

|  Change |        Delta |      % |            Size |        Objects | Callee   | Location    |
| ------: | -----------: | -----: | --------------: | -------------: | -------- | ----------- |
| -100.0% | -117.796 MiB | 100.0% | 118 MiB → 727 B | 1,966,776 → 41 | `_start` | `<unknown>` |

##### `0x6400000000` (`<unknown>`)

|  Change |        Delta |             % |          Size |   Objects | Callee   | Location    |
| ------: | -----------: | ------------: | ------------: | --------: | -------- | ----------- |
| removed | -652.937 KiB | 100.0% → 0.0% | 653 KiB → 0 B | 9,881 → 0 | `_start` | `<unknown>` |

##### `0xffffa3610027` (`<unknown>`)

|  Change |        Delta |             % |           Size |   Objects | Callee           | Location    |
| ------: | -----------: | ------------: | -------------: | --------: | ---------------- | ----------- |
| removed | -397.534 KiB | 100.0% → 0.0% |  398 KiB → 0 B | 7,061 → 0 | `_start`         | `<unknown>` |
| removed |  -74.358 KiB |  18.7% → 0.0% | 74.4 KiB → 0 B | 1,125 → 0 | `0xffffa3610027` | `<unknown>` |

##### `0xffffc92ac017` (`<unknown>`)

|  Change |  Delta |             % |        Size | Objects | Callee   | Location    |
| ------: | -----: | ------------: | ----------: | ------: | -------- | ----------- |
| removed | -137 B | 100.0% → 0.0% | 137 B → 0 B |   2 → 0 | `_start` | `<unknown>` |

##### `std::__cxx11::basic_string::_M_construct` (`/usr/include/c++/12/bits/basic_string.tcc`)

|  Change |          Delta |           % |            Size |    Objects | Callee   | Location    |
| ------: | -------------: | ----------: | --------------: | ---------: | -------- | ----------- |
| removed | -1,015.879 KiB | 0.8% → 0.0% | 1,016 KiB → 0 B | 14,280 → 0 | `_start` | `<unknown>` |

##### `std::__cxx11::basic_string::basic_string` (`/usr/include/c++/12/bits/basic_string.h`)

| Change | Delta |      % |    Size |   Objects | Callee                                     | Location                                    |
| -----: | ----: | -----: | ------: | --------: | ------------------------------------------ | ------------------------------------------- |
|    ~0% |  -0 B | 100.0% | 120 MiB | 1,998,000 | `std::__cxx11::basic_string::_M_construct` | `/usr/include/c++/12/bits/basic_string.tcc` |

##### `main` (`/out/profile.cpp`)

|  Change |        Delta |             % |          Size |       Objects | Callee             | Location     |
| ------: | -----------: | ------------: | ------------: | ------------: | ------------------ | ------------ |
| removed | -119.814 MiB | 100.0% → 0.0% | 120 MiB → 0 B | 1,998,000 → 0 | `fmt::v11::format` | `./format.h` |
|     new | +119.814 MiB | 0.0% → 100.0% | 0 B → 120 MiB | 0 → 1,998,000 | `fmt::v12::format` | `./format.h` |

##### `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change | Delta |      % |    Size |   Objects | Callee | Location           |
| -----: | ----: | -----: | ------: | --------: | ------ | ------------------ |
|    ~0% |  -0 B | 100.0% | 120 MiB | 1,998,001 | `main` | `/out/profile.cpp` |

##### `0x27817` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change | Delta |      % |    Size |   Objects | Callee    | Location                               |
| -----: | ----: | -----: | ------: | --------: | --------- | -------------------------------------- |
|    ~0% |  -0 B | 100.0% | 120 MiB | 1,998,001 | `0x27743` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `_start` (`<unknown>`)

| Change | Delta |      % |    Size |   Objects | Callee    | Location                               |
| -----: | ----: | -----: | ------: | --------: | --------- | -------------------------------------- |
|    ~0% |  -0 B | 100.0% | 120 MiB | 1,998,001 | `0x27817` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in bytes allocated in their leaf frame.

| Change |        Delta |             % |          Size |       Objects | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| -----: | -----------: | ------------: | ------------: | ------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|    new | +119.813 MiB | 0.0% → 100.0% | 0 B → 120 MiB | 0 → 1,997,957 | `std::__cxx11::basic_string::_M_construct` (`/usr/include/c++/12/bits/basic_string.tcc`) ← `std::__cxx11::basic_string::basic_string` (`/usr/include/c++/12/bits/basic_string.h`) ← `fmt::v12::to_string` (`./format.h`) ← `fmt::v12::vformat[abi:cxx11]` (`./format-inl.h`) ← `fmt::v12::format` (`./format.h`) ← `main` (`/out/profile.cpp`) ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0x13cfb` (`/tmp/nix-shell.NcwiQ3/profiler-md-input-generation.6FxtDr/cpp-current/binary`) ← `0xfffffc2314bf` |
|    new |       +727 B |  0.0% → <0.1% |   0 B → 727 B |        0 → 41 | `std::__cxx11::basic_string::_M_construct` (`/usr/include/c++/12/bits/basic_string.tcc`) ← `std::__cxx11::basic_string::basic_string` (`/usr/include/c++/12/bits/basic_string.h`) ← `fmt::v12::to_string` (`./format.h`) ← `fmt::v12::vformat[abi:cxx11]` (`./format-inl.h`) ← `fmt::v12::format` (`./format.h`) ← `main` (`/out/profile.cpp`) ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0x6400000009` ← `0xffffffffffffffff`                                                                         |
|    new |        +74 B |  0.0% → <0.1% |    0 B → 74 B |         0 → 1 | `std::__cxx11::basic_string::_M_construct` (`/usr/include/c++/12/bits/basic_string.tcc`) ← `std::__cxx11::basic_string::basic_string` (`/usr/include/c++/12/bits/basic_string.h`) ← `fmt::v12::to_string` (`./format.h`) ← `fmt::v12::vformat[abi:cxx11]` (`./format-inl.h`) ← `fmt::v12::format` (`./format.h`) ← `main` (`/out/profile.cpp`) ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0xaaaa00000000` ← `0xffffffffffffffff`                                                                       |
|    new |        +68 B |  0.0% → <0.1% |    0 B → 68 B |         0 → 1 | `std::__cxx11::basic_string::_M_construct` (`/usr/include/c++/12/bits/basic_string.tcc`) ← `std::__cxx11::basic_string::basic_string` (`/usr/include/c++/12/bits/basic_string.h`) ← `fmt::v12::to_string` (`./format.h`) ← `fmt::v12::vformat[abi:cxx11]` (`./format-inl.h`) ← `fmt::v12::format` (`./format.h`) ← `main` (`/out/profile.cpp`) ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0xfffffc2312e7` ← `0xffffffffffffffff`                                                                       |

### Improvements

Call stacks with the largest decrease in bytes allocated in their leaf frame.

|  Change |          Delta |            % |            Size |       Objects | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ------: | -------------: | -----------: | --------------: | ------------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| removed |   -117.796 MiB | 98.3% → 0.0% |   118 MiB → 0 B | 1,966,776 → 0 | `std::__cxx11::basic_string::_M_construct` (`/usr/include/c++/12/bits/basic_string.tcc`) ← `std::__cxx11::basic_string::basic_string` (`/usr/include/c++/12/bits/basic_string.h`) ← `fmt::v11::to_string` (`./format.h`) ← `fmt::v11::vformat[abi:cxx11]` (`./format-inl.h`) ← `fmt::v11::format` (`./format.h`) ← `main` (`/out/profile.cpp`) ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0x6400000009` ← `0xffffffffffffffff`                                                                                                                                                                                                                                        |
| removed | -1,015.879 KiB |  0.8% → 0.0% | 1,016 KiB → 0 B |    14,280 → 0 | `std::__cxx11::basic_string::_M_construct` (`/usr/include/c++/12/bits/basic_string.tcc`) ← `std::__cxx11::basic_string::basic_string` (`/usr/include/c++/12/bits/basic_string.h`) ← `fmt::v11::to_string` (`./format.h`) ← `fmt::v11::vformat[abi:cxx11]` (`./format-inl.h`) ← `fmt::v11::format` (`./format.h`) ← `main` (`/out/profile.cpp`) ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `std::__cxx11::basic_string::_M_construct` (`/usr/include/c++/12/bits/basic_string.tcc`) ← `std::__cxx11::basic_string::basic_string` (`/usr/include/c++/12/bits/basic_string.h`) ← `fmt::v11::to_string` (`./format.h`) ← `fmt::v11::vformat[abi:cxx11]` (`./format-inl.h`) |
| removed |   -652.937 KiB |  0.5% → 0.0% |   653 KiB → 0 B |     9,881 → 0 | `std::__cxx11::basic_string::_M_construct` (`/usr/include/c++/12/bits/basic_string.tcc`) ← `std::__cxx11::basic_string::basic_string` (`/usr/include/c++/12/bits/basic_string.h`) ← `fmt::v11::to_string` (`./format.h`) ← `fmt::v11::vformat[abi:cxx11]` (`./format-inl.h`) ← `fmt::v11::format` (`./format.h`) ← `main` (`/out/profile.cpp`) ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0x6400000000` ← `0xffffffffffffffff`                                                                                                                                                                                                                                        |
| removed |   -323.175 KiB |  0.3% → 0.0% |   323 KiB → 0 B |     5,936 → 0 | `std::__cxx11::basic_string::_M_construct` (`/usr/include/c++/12/bits/basic_string.tcc`) ← `std::__cxx11::basic_string::basic_string` (`/usr/include/c++/12/bits/basic_string.h`) ← `fmt::v11::to_string` (`./format.h`) ← `fmt::v11::vformat[abi:cxx11]` (`./format-inl.h`) ← `fmt::v11::format` (`./format.h`) ← `main` (`/out/profile.cpp`) ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0xffffa3610027` ← `0xffffffffffffffff`                                                                                                                                                                                                                                      |
| removed |    -74.358 KiB |  0.1% → 0.0% |  74.4 KiB → 0 B |     1,125 → 0 | `std::__cxx11::basic_string::_M_construct` (`/usr/include/c++/12/bits/basic_string.tcc`) ← `std::__cxx11::basic_string::basic_string` (`/usr/include/c++/12/bits/basic_string.h`) ← `fmt::v11::to_string` (`./format.h`) ← `fmt::v11::vformat[abi:cxx11]` (`./format-inl.h`) ← `fmt::v11::format` (`./format.h`) ← `main` (`/out/profile.cpp`) ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0xffffa3610027` ← `0xffffa3610027`                                                                                                                                                                                                                                          |
| removed |         -137 B | <0.1% → 0.0% |     137 B → 0 B |         2 → 0 | `std::__cxx11::basic_string::_M_construct` (`/usr/include/c++/12/bits/basic_string.tcc`) ← `std::__cxx11::basic_string::basic_string` (`/usr/include/c++/12/bits/basic_string.h`) ← `fmt::v11::to_string` (`./format.h`) ← `fmt::v11::vformat[abi:cxx11]` (`./format-inl.h`) ← `fmt::v11::format` (`./format.h`) ← `main` (`/out/profile.cpp`) ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0xffffc92ac017` ← `0xffffffffffffffff`                                                                                                                                                                                                                                      |

# Retained heap profile diff

Retained 0 B over 0 objects.

Paths starting with `./` or `../` are relative to `/src/fmt/include/fmt/`.

No bytes retained in any object.
