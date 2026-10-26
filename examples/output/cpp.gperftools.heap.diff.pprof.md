# Allocated heap profile diff

Allocated 120 MiB over 1,998,001 objects (62.9 B per object).

| Category         | Change | Delta |      % |    Size |   Objects |
| ---------------- | -----: | ----: | -----: | ------: | --------: |
| Standard library |   0.0% |   0 B | 100.0% | 120 MiB | 1,998,001 |

Paths starting with `./` or `../` are relative to `/src/fmt/include/fmt/`.

## Call tree

Call paths to the hottest and most changed functions.

```
└── 120 MiB (100.0%) _start
    └── 120 MiB (100.0%) __libc_start_main
        └── 120 MiB (100.0%) (anonymous)
            └── 120 MiB (100.0%) main at /out/profile.cpp:8
                ├── 120 MiB → 0 B (100.0% → 0.0%) fmt::v11::format at ./format.h:4198
                │   └── 120 MiB → 0 B (100.0% → 0.0%) fmt::v11::vformat[abi:cxx11] at ./format-inl.h:1442
                │       └── 120 MiB → 0 B (100.0% → 0.0%) fmt::v11::to_string at ./format.h:882
                │           └── 120 MiB → 0 B (100.0% → 0.0%) std::__cxx11::basic_string::basic_string at /usr/include/c++/12/bits/basic_string.h:612
                │               └── 120 MiB → 0 B (100.0% → 0.0%) std::__cxx11::basic_string::_M_construct at /usr/include/c++/12/bits/basic_string.tcc:217
                └── 0 B → 120 MiB (0.0% → 100.0%) fmt::v12::format at ./format.h:4335
                    └── 0 B → 120 MiB (0.0% → 100.0%) fmt::v12::vformat[abi:cxx11] at ./format-inl.h:1446
                        └── 0 B → 120 MiB (0.0% → 100.0%) fmt::v12::to_string at ./format.h:910
                            └── 0 B → 120 MiB (0.0% → 100.0%) std::__cxx11::basic_string::basic_string at /usr/include/c++/12/bits/basic_string.h:612
                                └── 0 B → 120 MiB (0.0% → 100.0%, self 100.0% globally) std::__cxx11::basic_string::_M_construct at /usr/include/c++/12/bits/basic_string.tcc:217
```

## Hottest functions

### Self size

No function differed in bytes allocated within the function body, excluding callees.

### Total size

#### Regressions

Functions with the largest increase in bytes allocated within the function and its callees.

| Change |        Delta |             % |          Size |       Objects | Function                       | Location              |
| -----: | -----------: | ------------: | ------------: | ------------: | ------------------------------ | --------------------- |
|    new | +119.814 MiB | 0.0% → 100.0% | 0 B → 120 MiB | 0 → 1,998,000 | `fmt::v12::to_string`          | `./format.h:910`      |
|    new | +119.814 MiB | 0.0% → 100.0% | 0 B → 120 MiB | 0 → 1,998,000 | `fmt::v12::vformat[abi:cxx11]` | `./format-inl.h:1446` |
|    new | +119.814 MiB | 0.0% → 100.0% | 0 B → 120 MiB | 0 → 1,998,000 | `fmt::v12::format`             | `./format.h:4335`     |

#### Improvements

Functions with the largest decrease in bytes allocated within the function and its callees.

|  Change |        Delta |             % |          Size |       Objects | Function                       | Location              |
| ------: | -----------: | ------------: | ------------: | ------------: | ------------------------------ | --------------------- |
| removed | -119.814 MiB | 100.0% → 0.0% | 120 MiB → 0 B | 1,998,000 → 0 | `fmt::v11::to_string`          | `./format.h:882`      |
| removed | -119.814 MiB | 100.0% → 0.0% | 120 MiB → 0 B | 1,998,000 → 0 | `fmt::v11::vformat[abi:cxx11]` | `./format-inl.h:1442` |
| removed | -119.814 MiB | 100.0% → 0.0% | 120 MiB → 0 B | 1,998,000 → 0 | `fmt::v11::format`             | `./format.h:4198`     |

#### Callers

Callers with the largest change in contribution to each function's total size. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `fmt::v12::to_string` (`./format.h:910`)

| Change |        Delta |             % |          Size |       Objects | Caller                         | Location              |
| -----: | -----------: | ------------: | ------------: | ------------: | ------------------------------ | --------------------- |
|    new | +119.814 MiB | 0.0% → 100.0% | 0 B → 120 MiB | 0 → 1,998,000 | `fmt::v12::vformat[abi:cxx11]` | `./format-inl.h:1446` |

##### `fmt::v12::vformat[abi:cxx11]` (`./format-inl.h:1446`)

| Change |        Delta |             % |          Size |       Objects | Caller             | Location          |
| -----: | -----------: | ------------: | ------------: | ------------: | ------------------ | ----------------- |
|    new | +119.814 MiB | 0.0% → 100.0% | 0 B → 120 MiB | 0 → 1,998,000 | `fmt::v12::format` | `./format.h:4335` |

##### `fmt::v12::format` (`./format.h:4335`)

| Change |        Delta |             % |          Size |       Objects | Caller | Location             |
| -----: | -----------: | ------------: | ------------: | ------------: | ------ | -------------------- |
|    new | +119.814 MiB | 0.0% → 100.0% | 0 B → 120 MiB | 0 → 1,998,000 | `main` | `/out/profile.cpp:8` |

##### `fmt::v11::to_string` (`./format.h:882`)

|  Change |        Delta |             % |          Size |       Objects | Caller                         | Location              |
| ------: | -----------: | ------------: | ------------: | ------------: | ------------------------------ | --------------------- |
| removed | -119.814 MiB | 100.0% → 0.0% | 120 MiB → 0 B | 1,998,000 → 0 | `fmt::v11::vformat[abi:cxx11]` | `./format-inl.h:1442` |

##### `fmt::v11::vformat[abi:cxx11]` (`./format-inl.h:1442`)

|  Change |        Delta |             % |          Size |       Objects | Caller             | Location          |
| ------: | -----------: | ------------: | ------------: | ------------: | ------------------ | ----------------- |
| removed | -119.814 MiB | 100.0% → 0.0% | 120 MiB → 0 B | 1,998,000 → 0 | `fmt::v11::format` | `./format.h:4198` |

##### `fmt::v11::format` (`./format.h:4198`)

|  Change |        Delta |             % |          Size |       Objects | Caller | Location             |
| ------: | -----------: | ------------: | ------------: | ------------: | ------ | -------------------- |
| removed | -119.814 MiB | 100.0% → 0.0% | 120 MiB → 0 B | 1,998,000 → 0 | `main` | `/out/profile.cpp:8` |

#### Callees

Callees with the largest change in contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `fmt::v12::to_string` (`./format.h:910`)

| Change |        Delta |             % |          Size |       Objects | Callee                                     | Location                                      |
| -----: | -----------: | ------------: | ------------: | ------------: | ------------------------------------------ | --------------------------------------------- |
|    new | +119.814 MiB | 0.0% → 100.0% | 0 B → 120 MiB | 0 → 1,998,000 | `std::__cxx11::basic_string::basic_string` | `/usr/include/c++/12/bits/basic_string.h:612` |

##### `fmt::v12::vformat[abi:cxx11]` (`./format-inl.h:1446`)

| Change |        Delta |             % |          Size |       Objects | Callee                | Location         |
| -----: | -----------: | ------------: | ------------: | ------------: | --------------------- | ---------------- |
|    new | +119.814 MiB | 0.0% → 100.0% | 0 B → 120 MiB | 0 → 1,998,000 | `fmt::v12::to_string` | `./format.h:910` |

##### `fmt::v12::format` (`./format.h:4335`)

| Change |        Delta |             % |          Size |       Objects | Callee                         | Location              |
| -----: | -----------: | ------------: | ------------: | ------------: | ------------------------------ | --------------------- |
|    new | +119.814 MiB | 0.0% → 100.0% | 0 B → 120 MiB | 0 → 1,998,000 | `fmt::v12::vformat[abi:cxx11]` | `./format-inl.h:1446` |

##### `fmt::v11::to_string` (`./format.h:882`)

|  Change |        Delta |             % |          Size |       Objects | Callee                                     | Location                                      |
| ------: | -----------: | ------------: | ------------: | ------------: | ------------------------------------------ | --------------------------------------------- |
| removed | -119.814 MiB | 100.0% → 0.0% | 120 MiB → 0 B | 1,998,000 → 0 | `std::__cxx11::basic_string::basic_string` | `/usr/include/c++/12/bits/basic_string.h:612` |

##### `fmt::v11::vformat[abi:cxx11]` (`./format-inl.h:1442`)

|  Change |        Delta |             % |          Size |       Objects | Callee                | Location         |
| ------: | -----------: | ------------: | ------------: | ------------: | --------------------- | ---------------- |
| removed | -119.814 MiB | 100.0% → 0.0% | 120 MiB → 0 B | 1,998,000 → 0 | `fmt::v11::to_string` | `./format.h:882` |

##### `fmt::v11::format` (`./format.h:4198`)

|  Change |        Delta |             % |          Size |       Objects | Callee                         | Location              |
| ------: | -----------: | ------------: | ------------: | ------------: | ------------------------------ | --------------------- |
| removed | -119.814 MiB | 100.0% → 0.0% | 120 MiB → 0 B | 1,998,000 → 0 | `fmt::v11::vformat[abi:cxx11]` | `./format-inl.h:1442` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in bytes allocated in their leaf frame.

| Change |        Delta |             % |          Size |       Objects | Call stack                                                                                                                                                                                                                                                                                                                                                                                                              |
| -----: | -----------: | ------------: | ------------: | ------------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|    new | +119.814 MiB | 0.0% → 100.0% | 0 B → 120 MiB | 0 → 1,998,000 | `std::__cxx11::basic_string::_M_construct` (`/usr/include/c++/12/bits/basic_string.tcc:217`) ← `std::__cxx11::basic_string::basic_string` (`/usr/include/c++/12/bits/basic_string.h:612`) ← `fmt::v12::to_string` (`./format.h:910`) ← `fmt::v12::vformat[abi:cxx11]` (`./format-inl.h:1446`) ← `fmt::v12::format` (`./format.h:4335`) ← `main` (`/out/profile.cpp:8`) ← `(anonymous)` ← `__libc_start_main` ← `_start` |

### Improvements

Call stacks with the largest decrease in bytes allocated in their leaf frame.

|  Change |        Delta |             % |          Size |       Objects | Call stack                                                                                                                                                                                                                                                                                                                                                                                                              |
| ------: | -----------: | ------------: | ------------: | ------------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| removed | -119.814 MiB | 100.0% → 0.0% | 120 MiB → 0 B | 1,998,000 → 0 | `std::__cxx11::basic_string::_M_construct` (`/usr/include/c++/12/bits/basic_string.tcc:217`) ← `std::__cxx11::basic_string::basic_string` (`/usr/include/c++/12/bits/basic_string.h:612`) ← `fmt::v11::to_string` (`./format.h:882`) ← `fmt::v11::vformat[abi:cxx11]` (`./format-inl.h:1442`) ← `fmt::v11::format` (`./format.h:4198`) ← `main` (`/out/profile.cpp:8`) ← `(anonymous)` ← `__libc_start_main` ← `_start` |

# Retained heap profile diff

Retained 0 B over 0 objects.

Paths starting with `./` or `../` are relative to `/src/fmt/include/fmt/`.

No bytes retained in any object.
