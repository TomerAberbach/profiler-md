# Allocated heap and retained heap profile diff

Allocated 1.8 GB (-2.23 MB, -0.1%) and retained 2.19 MB → 1.66 MB (-529 kB, -24.1%) over 21,825,387 samples → 21,882,356 samples (82.4 B → 82.1 B and 0.10052522780008437 B → 0.07608851624569128 B per sample).

| Category | Change |    Delta |      % |        Allocated |          Retained |                 Samples |
| -------- | -----: | -------: | -----: | ---------------: | ----------------: | ----------------------: |
| stdlib   |  -0.1% | -2.22 MB | 100.0% |           1.8 GB | 2.19 MB → 1.66 MB | 21,824,618 → 21,882,100 |
| ours     | -66.7% | -8.21 kB |  <0.1% | 12.3 kB → 4.1 kB |               0 B |               769 → 256 |

## Allocated heap

### Hottest functions

#### Self size

##### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

| Change |    Delta |     % |              Size |   Samples | Function                  | Location                                                                                        |
| -----: | -------: | ----: | ----------------: | --------: | ------------------------- | ----------------------------------------------------------------------------------------------- |
| +18.8% | +12.5 kB | <0.1% | 66.7 kB → 79.2 kB | 463 → 550 | `encoding/json.Unmarshal` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102` |

##### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

| Change |    Delta |     % |             Size |   Samples | Function              | Location                                                                               |
| -----: | -------: | ----: | ---------------: | --------: | --------------------- | -------------------------------------------------------------------------------------- |
| -66.7% | -8.21 kB | <0.1% | 12.3 kB → 4.1 kB | 769 → 256 | `main.workload.func1` | `Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:25` |

#### Total size

##### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

| Change |   Delta |             % |            Size |                 Samples | Function                | Location                                                                                        |
| -----: | ------: | ------------: | --------------: | ----------------------: | ----------------------- | ----------------------------------------------------------------------------------------------- |
|  +0.1% | +541 kB | 53.5% → 53.6% | 961 MB → 962 MB | 11,200,763 → 11,225,798 | `encoding/json.Marshal` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205` |

##### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

|  Change |    Delta |            % |              Size |                 Samples | Function                  | Location                                                                                        |
| ------: | -------: | -----------: | ----------------: | ----------------------: | ------------------------- | ----------------------------------------------------------------------------------------------- |
|   -0.3% | -2.17 MB |        46.3% |   833 MB → 831 MB | 10,621,980 → 10,654,295 | `encoding/json.Unmarshal` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102` |
|   -0.1% | -1.64 MB |        99.8% |           1.79 GB | 21,823,512 → 21,880,349 | `main.workload.func1`     | `Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:25`          |
|  -35.1% |  -639 kB |         0.1% | 1.82 MB → 1.18 MB |                      55 | `main.main`               | `Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:61`          |
| removed |  -639 kB | <0.1% → 0.0% |      639 kB → 0 B |                   1 → 0 | `os.ReadFile`             | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/os/file.go:864`              |

## Retained heap

### Hottest functions

#### Total size

##### Improvements

Functions with the largest decrease in total bytes retained in the function and all its callees.

|  Change |    Delta |             % |             Size |                 Samples | Function                  | Location                                                                                        |
| ------: | -------: | ------------: | ---------------: | ----------------------: | ------------------------- | ----------------------------------------------------------------------------------------------- |
|  -24.6% |  -516 kB | 95.8% → 95.2% | 2.1 MB → 1.59 MB | 21,823,512 → 21,880,349 | `main.workload.func1`     | `Users/tomer/Documents/work/code/profiler-md/scripts/fixtures/assets/go/profile.go:25`          |
|  -24.4% |  -512 kB | 95.6% → 95.2% | 2.1 MB → 1.59 MB | 11,200,763 → 11,225,798 | `encoding/json.Marshal`   | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205` |
| removed | -4.15 kB |   0.2% → 0.0% |    4.15 kB → 0 B | 10,621,980 → 10,654,295 | `encoding/json.Unmarshal` | `nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102` |
