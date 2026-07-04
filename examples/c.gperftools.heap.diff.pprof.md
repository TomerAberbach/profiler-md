# Allocated heap and retained heap profile diff

Allocated 139 MB and retained 912 B over 78 samples (1.78 MB and 11.7 B per sample).

| Category | Change | Delta |     % |    Size |  Size | Samples |
| -------- | -----: | ----: | ----: | ------: | ----: | ------: |
| ours     |   0.0% |   0 B | 51.3% | 71.1 MB |   0 B |      53 |
| stdlib   |   0.0% |   0 B | 48.7% | 67.4 MB | 912 B |      25 |

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
