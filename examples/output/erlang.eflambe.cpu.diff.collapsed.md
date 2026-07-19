# Sampling profile diff

19,789 samples.

| Category | Change | Delta |     % | Samples |
| -------- | -----: | ----: | ----: | ------: |
| stdlib   |   0.0% |     0 | 99.8% |  19,758 |
| ours     |   0.0% |     0 |  0.2% |      31 |

Hidden functions account for 93.0% of samples taken, so the hottest are also shown.

## Hottest functions

### Self samples

No function differed in samples taken directly in the function body, excluding callees.

### Total samples

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

| Change | Delta |     % |       Samples | Function                | Location |
| -----: | ----: | ----: | ------------: | ----------------------- | -------- |
|  -0.1% |    -2 | 10.3% | 2,035 → 2,033 | `escape_binary_ascii/5` | `json`   |
