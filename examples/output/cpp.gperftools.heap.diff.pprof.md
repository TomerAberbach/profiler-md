# Allocated heap profile diff

Allocated 120 MiB over 1,998,001 objects (62.9 B per object).

| Category         | Change | Delta |      % |    Size |   Objects |
| ---------------- | -----: | ----: | -----: | ------: | --------: |
| Standard library |   0.0% |   0 B | 100.0% | 120 MiB | 1,998,001 |

## Hottest functions

### Self size

No function differed in bytes allocated directly in the function body, excluding callees.

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

| Change |        Delta |            % |          Size |   Objects | Function         | Location    |
| -----: | -----------: | -----------: | ------------: | --------: | ---------------- | ----------- |
|    new | +397.534 KiB |  0.0% → 0.3% | 0 B → 398 KiB | 0 → 7,061 | `0xffffacbd1027` | `<unknown>` |
|    new |       +137 B | 0.0% → <0.1% |   0 B → 137 B |     0 → 2 | `0xffffe0137ab7` | `<unknown>` |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

|  Change |        Delta |            % |          Size |   Objects | Function         | Location    |
| ------: | -----------: | -----------: | ------------: | --------: | ---------------- | ----------- |
| removed | -397.534 KiB |  0.3% → 0.0% | 398 KiB → 0 B | 7,061 → 0 | `0xffff9cba0027` | `<unknown>` |
| removed |       -137 B | <0.1% → 0.0% |   137 B → 0 B |     2 → 0 | `0xffffe5e97fd7` | `<unknown>` |

# Retained heap profile diff

Retained 0 B over 0 objects.

No bytes retained in any object.
