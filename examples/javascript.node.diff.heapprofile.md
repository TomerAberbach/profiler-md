# Heap profile diff

Allocated 34.6 MB → 33.1 MB (-1.47 MB, -4.3%) over 49 samples → 26 samples (706 kB → 1.27 MB per sample).

| Category    | Change |    Delta |             % |              Size | Samples |
| ----------- | -----: | -------: | ------------: | ----------------: | ------: |
| stdlib      | +32.1% | +5.35 MB | 48.2% → 66.5% |   16.7 MB → 22 MB |  15 → 5 |
| third-party | -38.1% | -6.82 MB | 51.8% → 33.5% | 17.9 MB → 11.1 MB | 34 → 21 |

## Hottest functions

### Total size

#### Progressions

Functions with the largest decrease in total bytes allocated in the function and all its callees.

| Change |   Delta |             % |            Size | Samples | Function           | Location                                                                                             |
| -----: | ------: | ------------: | --------------: | ------: | ------------------ | ---------------------------------------------------------------------------------------------------- |
|  -2.9% | -949 kB | 95.5% → 96.8% | 33 MB → 32.1 MB | 46 → 24 | `typeCheckProject` | ../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs:3:33 |
|  -2.9% | -949 kB | 95.5% → 96.8% | 33 MB → 32.1 MB | 46 → 24 | `(anonymous)`      | ../../../../../../private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-run.mjs:1:1       |
