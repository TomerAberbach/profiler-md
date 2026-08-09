# Allocated heap and retained heap profile diff

Allocated 1.67 GiB (-2.123 MiB, -0.1%) and retained 2.09 MiB → 1.59 MiB (-516.607 KiB, -24.1%) over 21,825,413 samples → 21,882,388 samples (82.4 B → 82.1 B and 0.101 B → 0.0761 B per sample).

| Category         | Change |      Delta |      % |         Allocated |            Retained |                 Samples |
| ---------------- | -----: | ---------: | -----: | ----------------: | ------------------: | ----------------------: |
| Standard library |  -0.1% | -2.115 MiB | 100.0% |          1.67 GiB | 2.09 MiB → 1.59 MiB | 21,824,644 → 21,882,132 |
| Ours             | -66.7% | -8.015 KiB |  <0.1% | 12 KiB → 4.01 KiB |                 0 B |               769 → 256 |

## Allocated heap

### Hottest functions

#### Self size

##### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

| Change |       Delta |     % |                Size |   Samples | Function                  | Location                                                                                         |
| -----: | ----------: | ----: | ------------------: | --------: | ------------------------- | ------------------------------------------------------------------------------------------------ |
| +18.8% | +12.212 KiB | <0.1% | 65.1 KiB → 77.3 KiB | 463 → 550 | `encoding/json.Unmarshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102` |

##### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

| Change |      Delta |     % |              Size |   Samples | Function              | Location        |
| -----: | ---------: | ----: | ----------------: | --------: | --------------------- | --------------- |
| -66.7% | -8.015 KiB | <0.1% | 12 KiB → 4.01 KiB | 769 → 256 | `main.workload.func1` | `profile.go:25` |

#### Total size

##### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

| Change |        Delta |             % |           Size |                 Samples | Function                        | Location                                                                                         |
| -----: | -----------: | ------------: | -------------: | ----------------------: | ------------------------------- | ------------------------------------------------------------------------------------------------ |
|  +0.1% | +528.409 KiB | 53.5% → 53.6% |        917 MiB | 11,200,763 → 11,225,798 | `encoding/json.Marshal`         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205` |
|    new |   +8.826 KiB |  0.0% → <0.1% | 0 B → 8.83 KiB |                  0 → 13 | `runtime.gcStart.func4`         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:947`          |
|    new |   +5.082 KiB |  0.0% → <0.1% | 0 B → 5.08 KiB |                   0 → 2 | `runtime.gcDrain`               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1239`     |
|    new |   +5.082 KiB |  0.0% → <0.1% | 0 B → 5.08 KiB |                   0 → 2 | `runtime.gcDrainMarkWorkerIdle` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1167`     |
|    new |   +5.082 KiB |  0.0% → <0.1% | 0 B → 5.08 KiB |                   0 → 2 | `runtime.gcBgMarkWorker.func2`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1847`         |

##### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

|  Change |       Delta |            % |                Size |                 Samples | Function                  | Location                                                                                         |
| ------: | ----------: | -----------: | ------------------: | ----------------------: | ------------------------- | ------------------------------------------------------------------------------------------------ |
|   -0.3% |  -2.072 MiB |        46.3% |   795 MiB → 793 MiB | 10,621,980 → 10,654,295 | `encoding/json.Unmarshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102` |
|   -0.1% |  -1.564 MiB |        99.8% |            1.67 GiB | 21,823,512 → 21,880,349 | `main.workload.func1`     | `profile.go:25`                                                                                  |
|  -35.1% |    -624 KiB |         0.1% | 1.74 MiB → 1.13 MiB |                 81 → 87 | `main.main`               | `profile.go:61`                                                                                  |
| removed |    -624 KiB | <0.1% → 0.0% |       624 KiB → 0 B |                   1 → 0 | `os.ReadFile`             | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/os/file.go:864`              |
|  -57.0% | -16.419 KiB |        <0.1% | 28.8 KiB → 12.4 KiB |                202 → 82 | `runtime.gcBgMarkWorker`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1750`         |
|  -60.0% | -12.165 KiB |        <0.1% | 20.3 KiB → 8.11 KiB |                185 → 74 | `runtime.gcMarkDone`      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1015`         |

## Retained heap

### Hottest functions

#### Total size

##### Regressions

Functions with the largest increase in total bytes retained in the function and all its callees.

| Change |      Delta |           % |           Size | Samples | Function                        | Location                                                                                     |
| -----: | ---------: | ----------: | -------------: | ------: | ------------------------------- | -------------------------------------------------------------------------------------------- |
|    new | +8.826 KiB | 0.0% → 0.5% | 0 B → 8.83 KiB |  0 → 13 | `runtime.gcStart.func4`         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:947`      |
|    new | +5.082 KiB | 0.0% → 0.3% | 0 B → 5.08 KiB |   0 → 2 | `runtime.gcDrain`               | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1239` |
|    new | +5.082 KiB | 0.0% → 0.3% | 0 B → 5.08 KiB |   0 → 2 | `runtime.gcDrainMarkWorkerIdle` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgcmark.go:1167` |
|    new | +5.082 KiB | 0.0% → 0.3% | 0 B → 5.08 KiB |   0 → 2 | `runtime.gcBgMarkWorker.func2`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1847`     |

##### Improvements

Functions with the largest decrease in total bytes retained in the function and all its callees.

|  Change |        Delta |             % |                Size |                 Samples | Function                  | Location                                                                                         |
| ------: | -----------: | ------------: | ------------------: | ----------------------: | ------------------------- | ------------------------------------------------------------------------------------------------ |
|  -24.6% | -503.898 KiB | 95.8% → 95.2% |    2 MiB → 1.51 MiB | 21,823,512 → 21,880,349 | `main.workload.func1`     | `profile.go:25`                                                                                  |
|  -24.4% | -499.843 KiB | 95.6% → 95.2% |    2 MiB → 1.51 MiB | 11,200,763 → 11,225,798 | `encoding/json.Marshal`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205` |
|  -57.0% |  -16.419 KiB |   1.3% → 0.8% | 28.8 KiB → 12.4 KiB |                202 → 82 | `runtime.gcBgMarkWorker`  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1750`         |
|  -60.0% |  -12.165 KiB |   0.9% → 0.5% | 20.3 KiB → 8.11 KiB |                185 → 74 | `runtime.gcMarkDone`      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/runtime/mgc.go:1015`         |
| removed |   -4.054 KiB |   0.2% → 0.0% |      4.05 KiB → 0 B | 10,621,980 → 10,654,295 | `encoding/json.Unmarshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102` |
