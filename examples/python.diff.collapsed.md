# Sampling profile diff

6,627 samples → 13,009 samples (+6,382 samples, +96.3%).

| Category | Change |  Delta |      % |        Samples |
| -------- | -----: | -----: | -----: | -------------: |
| ours     | +96.3% | +6,382 | 100.0% | 6,627 → 13,009 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change |  Delta |             % |        Samples | Function | Location     |
| ------: | -----: | ------------: | -------------: | -------- | ------------ |
| +170.4% | +7,352 | 65.1% → 89.7% | 4,314 → 11,666 | `fib`    | script.py:4  |
|     new |     +1 |          0.0% |          0 → 1 | `work`   | script.py:17 |

#### Progressions

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

| Change | Delta |             % |       Samples | Function | Location     |
| -----: | ----: | ------------: | ------------: | -------- | ------------ |
| -42.0% |  -971 | 34.9% → 10.3% | 2,313 → 1,342 | `crunch` | script.py:10 |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|  Change |  Delta |             % |        Samples | Function              | Location           |
| ------: | -----: | ------------: | -------------: | --------------------- | ------------------ |
| +170.4% | +7,352 | 65.1% → 89.7% | 4,314 → 11,666 | `fib`                 | script.py:4        |
|  +96.3% | +6,382 |        100.0% | 6,627 → 13,009 | `work`                | script.py:17       |
|  +96.3% | +6,382 |        100.0% | 6,627 → 13,009 | `main`                | script.py:23       |
|  +96.3% | +6,382 |        100.0% | 6,627 → 13,009 | `<module>`            | script.py:27       |
|  +96.3% | +6,382 |        100.0% | 6,627 → 13,009 | `_run_code`           | <frozen runpy>:87  |
|  +96.3% | +6,382 |        100.0% | 6,627 → 13,009 | `_run_module_as_main` | <frozen runpy>:201 |

#### Progressions

Functions with the largest decrease in total samples taken in the function and all its callees.

| Change | Delta |             % |       Samples | Function | Location     |
| -----: | ----: | ------------: | ------------: | -------- | ------------ |
| -42.0% |  -971 | 34.9% → 10.3% | 2,313 → 1,342 | `crunch` | script.py:10 |
