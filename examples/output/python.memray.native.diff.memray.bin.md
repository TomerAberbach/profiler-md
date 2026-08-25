# Peak memory profile diff

Held 78.6 MiB over 22,684 allocations (3.55 KiB per allocation).

| Category         | Change | Delta |     % |     Size | Allocations |
| ---------------- | -----: | ----: | ----: | -------: | ----------: |
| Ours             |   0.0% |   0 B | 82.9% | 65.2 MiB |      21,440 |
| Standard library |   0.0% |   0 B | 15.5% | 12.2 MiB |       1,010 |
| Third-party      |   0.0% |   0 B |  1.6% | 1.27 MiB |         234 |

## Hottest functions

### Self size

No function differed in bytes held at peak memory directly in the function body, excluding callees.

### Total size

No function differed in total bytes held at peak memory in the function and all its callees.

# Leaked memory profile diff

Leaked 60.9 MiB over 22,489 allocations (2.77 KiB per allocation).

| Category         | Change | Delta |     % |     Size | Allocations |
| ---------------- | -----: | ----: | ----: | -------: | ----------: |
| Ours             |   0.0% |   0 B | 88.4% | 53.8 MiB |      21,384 |
| Standard library |   0.0% |   0 B |  9.6% | 5.83 MiB |         875 |
| Third-party      |   0.0% |   0 B |  2.0% | 1.23 MiB |         230 |

## Hottest functions

### Self size

No function differed in bytes never freed directly in the function body, excluding callees.

### Total size

No function differed in total bytes never freed in the function and all its callees.
