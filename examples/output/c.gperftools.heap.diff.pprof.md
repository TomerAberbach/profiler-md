# Allocated heap and retained heap profile diff

Allocated 132 MiB and retained 912 B over 78 samples (1.69 MiB and 11.7 B per sample).

| Category | Change | Delta |     % | Allocated | Retained | Samples |
| -------- | -----: | ----: | ----: | --------: | -------: | ------: |
| Ours     |   0.0% |   0 B | 51.3% |  67.8 MiB |      0 B |      53 |
| Native   |   0.0% |   0 B | 48.7% |  64.3 MiB |    912 B |      25 |

## Allocated heap

### Hottest functions

#### Self size

No function differed in bytes allocated directly in the function body, excluding callees.

#### Total size

No function differed in total bytes allocated in the function and all its callees.

## Retained heap

### Hottest functions

#### Total size

No function differed in total bytes retained in the function and all its callees.
