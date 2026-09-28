# Allocated heap profile

Allocated 120 MiB over 1,998,001 objects (62.9 B per object).

| Category         |      % |    Size |   Objects |
| ---------------- | -----: | ------: | --------: |
| Standard library | 100.0% | 120 MiB | 1,998,001 |

## Hottest functions

### Self size

Functions ranked by bytes allocated directly in the function body, excluding callees.

#### Categories

##### Standard library

|      % |    Size |   Objects | Function                                   | Location                                   |
| -----: | ------: | --------: | ------------------------------------------ | ------------------------------------------ |
| 100.0% | 120 MiB | 1,998,000 | `std::__cxx11::basic_string::_M_construct` | `usr/include/c++/12/bits/basic_string.tcc` |
|  <0.1% |   8 KiB |         1 | `std::__new_allocator::allocate`           | `usr/include/c++/12/bits/new_allocator.h`  |

#### Lines

Lines ranked by contribution to each function's self size.

##### `std::__cxx11::basic_string::_M_construct` (`usr/include/c++/12/bits/basic_string.tcc`)

|      % |    Size |   Objects | Location                                       |
| -----: | ------: | --------: | ---------------------------------------------- |
| 100.0% | 120 MiB | 1,998,000 | `usr/include/c++/12/bits/basic_string.tcc:225` |

##### `std::__new_allocator::allocate` (`usr/include/c++/12/bits/new_allocator.h`)

|      % |  Size | Objects | Location                                      |
| -----: | ----: | ------: | --------------------------------------------- |
| 100.0% | 8 KiB |       1 | `usr/include/c++/12/bits/new_allocator.h:137` |

#### Callers

Callers ranked by contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `std::__cxx11::basic_string::_M_construct` (`usr/include/c++/12/bits/basic_string.tcc`)

|      % |    Size |   Objects | Caller                                     | Location                                 |
| -----: | ------: | --------: | ------------------------------------------ | ---------------------------------------- |
| 100.0% | 120 MiB | 1,998,000 | `std::__cxx11::basic_string::basic_string` | `usr/include/c++/12/bits/basic_string.h` |

##### `std::__new_allocator::allocate` (`usr/include/c++/12/bits/new_allocator.h`)

|      % |  Size | Objects | Caller                            | Location                                 |
| -----: | ----: | ------: | --------------------------------- | ---------------------------------------- |
| 100.0% | 8 KiB |       1 | `std::allocator_traits::allocate` | `usr/include/c++/12/bits/alloc_traits.h` |

### Total size

Functions ranked by total bytes allocated in the function and all its callees.

|      % |     Size |   Objects | Function                                   | Location                                                                      |
| -----: | -------: | --------: | ------------------------------------------ | ----------------------------------------------------------------------------- |
| 100.0% |  120 MiB | 1,998,001 | `main`                                     | `out/profile.cpp`                                                             |
| 100.0% |  120 MiB | 1,998,001 | `0x27743`                                  | `usr/lib/aarch64-linux-gnu/libc.so.6`                                         |
| 100.0% |  120 MiB | 1,998,001 | `0x27817`                                  | `usr/lib/aarch64-linux-gnu/libc.so.6`                                         |
| 100.0% |  120 MiB | 1,998,001 | `_start`                                   | `<unknown>`                                                                   |
| 100.0% |  120 MiB | 1,998,000 | `std::__cxx11::basic_string::_M_construct` | `usr/include/c++/12/bits/basic_string.tcc`                                    |
| 100.0% |  120 MiB | 1,998,000 | `std::__cxx11::basic_string::basic_string` | `usr/include/c++/12/bits/basic_string.h`                                      |
| 100.0% |  120 MiB | 1,998,000 | `fmt::v12::to_string`                      | `src/fmt/include/fmt/format.h`                                                |
| 100.0% |  120 MiB | 1,998,000 | `fmt::v12::vformat[abi:cxx11]`             | `src/fmt/include/fmt/format-inl.h`                                            |
| 100.0% |  120 MiB | 1,998,000 | `fmt::v12::format`                         | `src/fmt/include/fmt/format.h`                                                |
| 100.0% |  120 MiB | 1,997,957 | `0x13cfb`                                  | `tmp/nix-shell.NcwiQ3/profiler-md-input-generation.6FxtDr/cpp-current/binary` |
| 100.0% |  120 MiB | 1,997,957 | `0xfffffc2314bf`                           | `<unknown>`                                                                   |
|  <0.1% | 8.85 KiB |        44 | `0xffffffffffffffff`                       | `<unknown>`                                                                   |
|  <0.1% |    8 KiB |         1 | `std::__new_allocator::allocate`           | `usr/include/c++/12/bits/new_allocator.h`                                     |
|  <0.1% |    8 KiB |         1 | `std::allocator_traits::allocate`          | `usr/include/c++/12/bits/alloc_traits.h`                                      |
|  <0.1% |    8 KiB |         1 | `std::_Vector_base::_M_allocate`           | `usr/include/c++/12/bits/stl_vector.h`                                        |
|  <0.1% |    8 KiB |         1 | `std::vector::reserve`                     | `usr/include/c++/12/bits/vector.tcc`                                          |
|  <0.1% |    8 KiB |         1 | `0xffff00000000`                           | `<unknown>`                                                                   |
|  <0.1% |    727 B |        41 | `0x6400000009`                             | `<unknown>`                                                                   |
|  <0.1% |     74 B |         1 | `0xaaaa00000000`                           | `<unknown>`                                                                   |
|  <0.1% |     68 B |         1 | `0xfffffc2312e7`                           | `<unknown>`                                                                   |

#### Categories

##### Standard library

|      % |    Size |   Objects | Function                                   | Location                                   |
| -----: | ------: | --------: | ------------------------------------------ | ------------------------------------------ |
| 100.0% | 120 MiB | 1,998,000 | `std::__cxx11::basic_string::_M_construct` | `usr/include/c++/12/bits/basic_string.tcc` |
| 100.0% | 120 MiB | 1,998,000 | `std::__cxx11::basic_string::basic_string` | `usr/include/c++/12/bits/basic_string.h`   |
|  <0.1% |   8 KiB |         1 | `std::__new_allocator::allocate`           | `usr/include/c++/12/bits/new_allocator.h`  |
|  <0.1% |   8 KiB |         1 | `std::allocator_traits::allocate`          | `usr/include/c++/12/bits/alloc_traits.h`   |
|  <0.1% |   8 KiB |         1 | `std::_Vector_base::_M_allocate`           | `usr/include/c++/12/bits/stl_vector.h`     |
|  <0.1% |   8 KiB |         1 | `std::vector::reserve`                     | `usr/include/c++/12/bits/vector.tcc`       |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `main` (`out/profile.cpp`)

|      % |    Size |   Objects | Callee                 | Location                             |
| -----: | ------: | --------: | ---------------------- | ------------------------------------ |
| 100.0% | 120 MiB | 1,998,000 | `fmt::v12::format`     | `src/fmt/include/fmt/format.h`       |
|  <0.1% |   8 KiB |         1 | `std::vector::reserve` | `usr/include/c++/12/bits/vector.tcc` |

##### `0x27743` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |    Size |   Objects | Callee | Location          |
| -----: | ------: | --------: | ------ | ----------------- |
| 100.0% | 120 MiB | 1,998,001 | `main` | `out/profile.cpp` |

##### `0x27817` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |    Size |   Objects | Callee    | Location                              |
| -----: | ------: | --------: | --------- | ------------------------------------- |
| 100.0% | 120 MiB | 1,998,001 | `0x27743` | `usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `_start` (`<unknown>`)

|      % |    Size |   Objects | Callee    | Location                              |
| -----: | ------: | --------: | --------- | ------------------------------------- |
| 100.0% | 120 MiB | 1,998,001 | `0x27817` | `usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `std::__cxx11::basic_string::basic_string` (`usr/include/c++/12/bits/basic_string.h`)

|      % |    Size |   Objects | Callee                                     | Location                                   |
| -----: | ------: | --------: | ------------------------------------------ | ------------------------------------------ |
| 100.0% | 120 MiB | 1,998,000 | `std::__cxx11::basic_string::_M_construct` | `usr/include/c++/12/bits/basic_string.tcc` |

##### `fmt::v12::to_string` (`src/fmt/include/fmt/format.h`)

|      % |    Size |   Objects | Callee                                     | Location                                 |
| -----: | ------: | --------: | ------------------------------------------ | ---------------------------------------- |
| 100.0% | 120 MiB | 1,998,000 | `std::__cxx11::basic_string::basic_string` | `usr/include/c++/12/bits/basic_string.h` |

##### `fmt::v12::vformat[abi:cxx11]` (`src/fmt/include/fmt/format-inl.h`)

|      % |    Size |   Objects | Callee                | Location                       |
| -----: | ------: | --------: | --------------------- | ------------------------------ |
| 100.0% | 120 MiB | 1,998,000 | `fmt::v12::to_string` | `src/fmt/include/fmt/format.h` |

##### `fmt::v12::format` (`src/fmt/include/fmt/format.h`)

|      % |    Size |   Objects | Callee                         | Location                           |
| -----: | ------: | --------: | ------------------------------ | ---------------------------------- |
| 100.0% | 120 MiB | 1,998,000 | `fmt::v12::vformat[abi:cxx11]` | `src/fmt/include/fmt/format-inl.h` |

##### `0x13cfb` (`tmp/nix-shell.NcwiQ3/profiler-md-input-generation.6FxtDr/cpp-current/binary`)

|      % |    Size |   Objects | Callee   | Location    |
| -----: | ------: | --------: | -------- | ----------- |
| 100.0% | 120 MiB | 1,997,957 | `_start` | `<unknown>` |

##### `0xfffffc2314bf` (`<unknown>`)

|      % |    Size |   Objects | Callee    | Location                                                                      |
| -----: | ------: | --------: | --------- | ----------------------------------------------------------------------------- |
| 100.0% | 120 MiB | 1,997,957 | `0x13cfb` | `tmp/nix-shell.NcwiQ3/profiler-md-input-generation.6FxtDr/cpp-current/binary` |

##### `0xffffffffffffffff` (`<unknown>`)

|     % |  Size | Objects | Callee           | Location    |
| ----: | ----: | ------: | ---------------- | ----------- |
| 90.4% | 8 KiB |       1 | `0xffff00000000` | `<unknown>` |
|  8.0% | 727 B |      41 | `0x6400000009`   | `<unknown>` |
|  0.8% |  74 B |       1 | `0xaaaa00000000` | `<unknown>` |
|  0.8% |  68 B |       1 | `0xfffffc2312e7` | `<unknown>` |

##### `std::allocator_traits::allocate` (`usr/include/c++/12/bits/alloc_traits.h`)

|      % |  Size | Objects | Callee                           | Location                                  |
| -----: | ----: | ------: | -------------------------------- | ----------------------------------------- |
| 100.0% | 8 KiB |       1 | `std::__new_allocator::allocate` | `usr/include/c++/12/bits/new_allocator.h` |

##### `std::_Vector_base::_M_allocate` (`usr/include/c++/12/bits/stl_vector.h`)

|      % |  Size | Objects | Callee                            | Location                                 |
| -----: | ----: | ------: | --------------------------------- | ---------------------------------------- |
| 100.0% | 8 KiB |       1 | `std::allocator_traits::allocate` | `usr/include/c++/12/bits/alloc_traits.h` |

##### `std::vector::reserve` (`usr/include/c++/12/bits/vector.tcc`)

|      % |  Size | Objects | Callee                           | Location                               |
| -----: | ----: | ------: | -------------------------------- | -------------------------------------- |
| 100.0% | 8 KiB |       1 | `std::_Vector_base::_M_allocate` | `usr/include/c++/12/bits/stl_vector.h` |

##### `0xffff00000000` (`<unknown>`)

|      % |  Size | Objects | Callee   | Location    |
| -----: | ----: | ------: | -------- | ----------- |
| 100.0% | 8 KiB |       1 | `_start` | `<unknown>` |

##### `0x6400000009` (`<unknown>`)

|      % |  Size | Objects | Callee   | Location    |
| -----: | ----: | ------: | -------- | ----------- |
| 100.0% | 727 B |      41 | `_start` | `<unknown>` |

##### `0xaaaa00000000` (`<unknown>`)

|      % | Size | Objects | Callee   | Location    |
| -----: | ---: | ------: | -------- | ----------- |
| 100.0% | 74 B |       1 | `_start` | `<unknown>` |

##### `0xfffffc2312e7` (`<unknown>`)

|      % | Size | Objects | Callee   | Location    |
| -----: | ---: | ------: | -------- | ----------- |
| 100.0% | 68 B |       1 | `_start` | `<unknown>` |

## Hottest call stacks

Call stacks ranked by bytes allocated in their leaf frame.

|      % |    Size |   Objects | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| -----: | ------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 120 MiB | 1,997,957 | `std::__cxx11::basic_string::_M_construct` (`usr/include/c++/12/bits/basic_string.tcc`) ← `std::__cxx11::basic_string::basic_string` (`usr/include/c++/12/bits/basic_string.h`) ← `fmt::v12::to_string` (`src/fmt/include/fmt/format.h`) ← `fmt::v12::vformat[abi:cxx11]` (`src/fmt/include/fmt/format-inl.h`) ← `fmt::v12::format` (`src/fmt/include/fmt/format.h`) ← `main` (`out/profile.cpp`) ← `0x27743` (`usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0x13cfb` (`tmp/nix-shell.NcwiQ3/profiler-md-input-generation.6FxtDr/cpp-current/binary`) ← `0xfffffc2314bf` |
|  <0.1% |   8 KiB |         1 | `std::__new_allocator::allocate` (`usr/include/c++/12/bits/new_allocator.h`) ← `std::allocator_traits::allocate` (`usr/include/c++/12/bits/alloc_traits.h`) ← `std::_Vector_base::_M_allocate` (`usr/include/c++/12/bits/stl_vector.h`) ← `std::vector::reserve` (`usr/include/c++/12/bits/vector.tcc`) ← `main` (`out/profile.cpp`) ← `0x27743` (`usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0xffff00000000` ← `0xffffffffffffffff`                                                                                                                                   |
|  <0.1% |   727 B |        41 | `std::__cxx11::basic_string::_M_construct` (`usr/include/c++/12/bits/basic_string.tcc`) ← `std::__cxx11::basic_string::basic_string` (`usr/include/c++/12/bits/basic_string.h`) ← `fmt::v12::to_string` (`src/fmt/include/fmt/format.h`) ← `fmt::v12::vformat[abi:cxx11]` (`src/fmt/include/fmt/format-inl.h`) ← `fmt::v12::format` (`src/fmt/include/fmt/format.h`) ← `main` (`out/profile.cpp`) ← `0x27743` (`usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0x6400000009` ← `0xffffffffffffffff`                                                                        |
|  <0.1% |    74 B |         1 | `std::__cxx11::basic_string::_M_construct` (`usr/include/c++/12/bits/basic_string.tcc`) ← `std::__cxx11::basic_string::basic_string` (`usr/include/c++/12/bits/basic_string.h`) ← `fmt::v12::to_string` (`src/fmt/include/fmt/format.h`) ← `fmt::v12::vformat[abi:cxx11]` (`src/fmt/include/fmt/format-inl.h`) ← `fmt::v12::format` (`src/fmt/include/fmt/format.h`) ← `main` (`out/profile.cpp`) ← `0x27743` (`usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0xaaaa00000000` ← `0xffffffffffffffff`                                                                      |
|  <0.1% |    68 B |         1 | `std::__cxx11::basic_string::_M_construct` (`usr/include/c++/12/bits/basic_string.tcc`) ← `std::__cxx11::basic_string::basic_string` (`usr/include/c++/12/bits/basic_string.h`) ← `fmt::v12::to_string` (`src/fmt/include/fmt/format.h`) ← `fmt::v12::vformat[abi:cxx11]` (`src/fmt/include/fmt/format-inl.h`) ← `fmt::v12::format` (`src/fmt/include/fmt/format.h`) ← `main` (`out/profile.cpp`) ← `0x27743` (`usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0xfffffc2312e7` ← `0xffffffffffffffff`                                                                      |

# Retained heap profile

Retained 0 B over 0 objects.

No bytes retained in any object.
