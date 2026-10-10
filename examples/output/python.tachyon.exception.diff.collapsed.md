# Sampling profile diff

Collected 1,434 samples → 1,596 samples (+162 samples, +11.3%).

| Category          | Change | Delta |             % |       Samples |
| ----------------- | -----: | ----: | ------------: | ------------: |
| Ours              |  +6.4% |   +79 | 86.2% → 82.4% | 1,236 → 1,315 |
| Garbage collector | +48.1% |   +75 | 10.9% → 14.5% |     156 → 231 |
| Standard library  | +19.0% |    +8 |   2.9% → 3.1% |       42 → 50 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % |   Samples | Function                                                | Location             |
| ------: | ----: | ------------: | --------: | ------------------------------------------------------- | -------------------- |
|  +48.1% |   +75 | 10.9% → 14.5% | 156 → 231 | `(garbage collector)`                                   | `<unknown>`          |
|   +7.1% |   +59 | 58.3% → 56.1% | 836 → 895 | `_get_code_position`                                    | `traceback.py`       |
|  +32.4% |   +11 |   2.4% → 2.8% |   34 → 45 | `checkcache`                                            | `<frozen linecache>` |
|  +83.3% |   +10 |   0.8% → 1.4% |   12 → 22 | `_walk_tb_with_full_positions`                          | `traceback.py`       |
|  +41.2% |    +7 |   1.2% → 1.5% |   17 → 24 | `extract_tb`                                            | `traceback.py`       |
|  +43.8% |    +7 |   1.1% → 1.4% |   16 → 23 | `parse`                                                 | `ast.py`             |
|  +46.2% |    +6 |   0.9% → 1.2% |   13 → 19 | `StateForActualGivenExecution._execute_once_for_engine` | `core.py`            |
|     new |    +5 |   0.0% → 0.3% |     0 → 5 | `recursive_property.<locals>.forced_or_cached_value`    | `strategies.py`      |
| +166.7% |    +5 |   0.2% → 0.5% |     3 → 8 | `format_exception`                                      | `escalation.py`      |
| +100.0% |    +5 |   0.3% → 0.6% |    5 → 10 | `TreeRecordingObserver.conclude_test`                   | `datatree.py`        |
| +500.0% |    +5 |   0.1% → 0.4% |     1 → 6 | `Untokenizer.untokenize`                                | `tokenize.py`        |
|  +20.0% |    +4 |   1.4% → 1.5% |   20 → 24 | `get_trimmed_traceback`                                 | `escalation.py`      |
| +133.3% |    +4 |   0.2% → 0.4% |     3 → 7 | `Tracer.__exit__`                                       | `scrutineer.py`      |
|     new |    +4 |   0.0% → 0.3% |     0 → 4 | `GenericCache.__balance`                                | `cache.py`           |
| +300.0% |    +3 |   0.1% → 0.3% |     1 → 4 | `ConjectureData.conclude_test`                          | `data.py`            |
|     new |    +2 |   0.0% → 0.1% |     0 → 2 | `ConjectureData.draw`                                   | `data.py`            |
|     new |    +2 |   0.0% → 0.1% |     0 → 2 | `deterministic_PRNG`                                    | `entropy.py`         |
| +100.0% |    +2 |   0.1% → 0.3% |     2 → 4 | `Node._repr_failure_py`                                 | `nodes.py`           |
| +100.0% |    +2 |   0.1% → 0.3% |     2 → 4 | `ConjectureData.stop_span`                              | `data.py`            |
|     new |    +2 |   0.0% → 0.1% |     0 → 2 | `Verbosity._int_value`                                  | `_settings.py`       |

##### Ours

|  Change | Delta |             % |   Samples | Function                                                | Location        |
| ------: | ----: | ------------: | --------: | ------------------------------------------------------- | --------------- |
|   +7.1% |   +59 | 58.3% → 56.1% | 836 → 895 | `_get_code_position`                                    | `traceback.py`  |
|  +83.3% |   +10 |   0.8% → 1.4% |   12 → 22 | `_walk_tb_with_full_positions`                          | `traceback.py`  |
|  +41.2% |    +7 |   1.2% → 1.5% |   17 → 24 | `extract_tb`                                            | `traceback.py`  |
|  +43.8% |    +7 |   1.1% → 1.4% |   16 → 23 | `parse`                                                 | `ast.py`        |
|  +46.2% |    +6 |   0.9% → 1.2% |   13 → 19 | `StateForActualGivenExecution._execute_once_for_engine` | `core.py`       |
|     new |    +5 |   0.0% → 0.3% |     0 → 5 | `recursive_property.<locals>.forced_or_cached_value`    | `strategies.py` |
| +166.7% |    +5 |   0.2% → 0.5% |     3 → 8 | `format_exception`                                      | `escalation.py` |
| +100.0% |    +5 |   0.3% → 0.6% |    5 → 10 | `TreeRecordingObserver.conclude_test`                   | `datatree.py`   |
| +500.0% |    +5 |   0.1% → 0.4% |     1 → 6 | `Untokenizer.untokenize`                                | `tokenize.py`   |
|  +20.0% |    +4 |   1.4% → 1.5% |   20 → 24 | `get_trimmed_traceback`                                 | `escalation.py` |
| +133.3% |    +4 |   0.2% → 0.4% |     3 → 7 | `Tracer.__exit__`                                       | `scrutineer.py` |
|     new |    +4 |   0.0% → 0.3% |     0 → 4 | `GenericCache.__balance`                                | `cache.py`      |
| +300.0% |    +3 |   0.1% → 0.3% |     1 → 4 | `ConjectureData.conclude_test`                          | `data.py`       |
|     new |    +2 |   0.0% → 0.1% |     0 → 2 | `ConjectureData.draw`                                   | `data.py`       |
|     new |    +2 |   0.0% → 0.1% |     0 → 2 | `deterministic_PRNG`                                    | `entropy.py`    |
| +100.0% |    +2 |   0.1% → 0.3% |     2 → 4 | `Node._repr_failure_py`                                 | `nodes.py`      |
| +100.0% |    +2 |   0.1% → 0.3% |     2 → 4 | `ConjectureData.stop_span`                              | `data.py`       |
|     new |    +2 |   0.0% → 0.1% |     0 → 2 | `Verbosity._int_value`                                  | `_settings.py`  |
|     new |    +2 |   0.0% → 0.1% |     0 → 2 | `skip_exceptions_to_reraise`                            | `core.py`       |
|     new |    +2 |   0.0% → 0.1% |     0 → 2 | `many.more`                                             | `utils.py`      |

##### Garbage collector

| Change | Delta |             % |   Samples | Function              | Location    |
| -----: | ----: | ------------: | --------: | --------------------- | ----------- |
| +48.1% |   +75 | 10.9% → 14.5% | 156 → 231 | `(garbage collector)` | `<unknown>` |

##### Standard library

| Change | Delta |           % | Samples | Function      | Location                    |
| -----: | ----: | ----------: | ------: | ------------- | --------------------------- |
| +32.4% |   +11 | 2.4% → 2.8% | 34 → 45 | `checkcache`  | `<frozen linecache>`        |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `Mapping.get` | `<frozen _collections_abc>` |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |           % | Samples | Function                                        | Location             |
| ------: | ----: | ----------: | ------: | ----------------------------------------------- | -------------------- |
|  -45.5% |   -10 | 1.5% → 0.8% | 22 → 12 | `format_exception`                              | `traceback.py`       |
|  -75.0% |    -9 | 0.8% → 0.2% |  12 → 3 | `TracebackException.format`                     | `traceback.py`       |
|  -50.0% |    -7 | 1.0% → 0.4% |  14 → 7 | `get_seeder_and_restorer.<locals>.restore_all`  | `entropy.py`         |
|   -7.5% |    -6 | 5.6% → 4.6% | 80 → 74 | `StackSummary._extract_from_extended_frame_gen` | `traceback.py`       |
|  -80.0% |    -4 | 0.3% → 0.1% |   5 → 1 | `ConjectureRunner.cached_test_function`         | `engine.py`          |
|  -44.4% |    -4 | 0.6% → 0.3% |   9 → 5 | `_GeneratorContextManager.__exit__`             | `contextlib.py`      |
|  -25.0% |    -4 | 1.1% → 0.8% | 16 → 12 | `getsourcefile`                                 | `inspect.py`         |
|  -60.0% |    -3 | 0.3% → 0.1% |   5 → 2 | `_display_width`                                | `traceback.py`       |
|  -50.0% |    -3 | 0.4% → 0.2% |   6 → 3 | `_generate_tokens_from_c_tokenizer`             | `tokenize.py`        |
|  -42.9% |    -3 | 0.5% → 0.3% |   7 → 4 | `FrameSummary._set_lines`                       | `traceback.py`       |
|  -42.9% |    -3 | 0.5% → 0.3% |   7 → 4 | `lazycache`                                     | `<frozen linecache>` |
|  -20.0% |    -2 | 0.7% → 0.5% |  10 → 8 | `StackSummary.format_frame_summary`             | `traceback.py`       |
|  -33.3% |    -2 | 0.4% → 0.3% |   6 → 4 | `getblock`                                      | `inspect.py`         |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `sort_key.<locals>.<genexpr>`                   | `shrinker.py`        |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `ensure_free_stackframes.__exit__`              | `junkdrawer.py`      |
|  -33.3% |    -1 | 0.2% → 0.1% |   3 → 2 | `StateForActualGivenExecution.execute_once`     | `core.py`            |
|  -50.0% |    -1 |        0.1% |   2 → 1 | `ConjectureRunner.test_function`                | `engine.py`          |
|  -16.7% |    -1 | 0.4% → 0.3% |   6 → 5 | `IntList._array_or_list`                        | `junkdrawer.py`      |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `Span.start`                                    | `data.py`            |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `ConjectureData.start_span`                     | `data.py`            |

##### Ours

|  Change | Delta |           % | Samples | Function                                        | Location        |
| ------: | ----: | ----------: | ------: | ----------------------------------------------- | --------------- |
|  -45.5% |   -10 | 1.5% → 0.8% | 22 → 12 | `format_exception`                              | `traceback.py`  |
|  -75.0% |    -9 | 0.8% → 0.2% |  12 → 3 | `TracebackException.format`                     | `traceback.py`  |
|  -50.0% |    -7 | 1.0% → 0.4% |  14 → 7 | `get_seeder_and_restorer.<locals>.restore_all`  | `entropy.py`    |
|   -7.5% |    -6 | 5.6% → 4.6% | 80 → 74 | `StackSummary._extract_from_extended_frame_gen` | `traceback.py`  |
|  -80.0% |    -4 | 0.3% → 0.1% |   5 → 1 | `ConjectureRunner.cached_test_function`         | `engine.py`     |
|  -44.4% |    -4 | 0.6% → 0.3% |   9 → 5 | `_GeneratorContextManager.__exit__`             | `contextlib.py` |
|  -25.0% |    -4 | 1.1% → 0.8% | 16 → 12 | `getsourcefile`                                 | `inspect.py`    |
|  -60.0% |    -3 | 0.3% → 0.1% |   5 → 2 | `_display_width`                                | `traceback.py`  |
|  -50.0% |    -3 | 0.4% → 0.2% |   6 → 3 | `_generate_tokens_from_c_tokenizer`             | `tokenize.py`   |
|  -42.9% |    -3 | 0.5% → 0.3% |   7 → 4 | `FrameSummary._set_lines`                       | `traceback.py`  |
|  -20.0% |    -2 | 0.7% → 0.5% |  10 → 8 | `StackSummary.format_frame_summary`             | `traceback.py`  |
|  -33.3% |    -2 | 0.4% → 0.3% |   6 → 4 | `getblock`                                      | `inspect.py`    |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `sort_key.<locals>.<genexpr>`                   | `shrinker.py`   |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `ensure_free_stackframes.__exit__`              | `junkdrawer.py` |
|  -33.3% |    -1 | 0.2% → 0.1% |   3 → 2 | `StateForActualGivenExecution.execute_once`     | `core.py`       |
|  -50.0% |    -1 |        0.1% |   2 → 1 | `ConjectureRunner.test_function`                | `engine.py`     |
|  -16.7% |    -1 | 0.4% → 0.3% |   6 → 5 | `IntList._array_or_list`                        | `junkdrawer.py` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `Span.start`                                    | `data.py`       |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `ConjectureData.start_span`                     | `data.py`       |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `Shrinker._node_program`                        | `shrinker.py`   |

##### Standard library

|  Change | Delta |           % | Samples | Function    | Location             |
| ------: | ----: | ----------: | ------: | ----------- | -------------------- |
|  -42.9% |    -3 | 0.5% → 0.3% |   7 → 4 | `lazycache` | `<frozen linecache>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `getline`   | `<frozen linecache>` |

#### Lines

Lines with the largest change in contribution to each function's self samples.

##### `_get_code_position` (`traceback.py`)

| Change | Delta |             % |   Samples | Location           |
| -----: | ----: | ------------: | --------: | ------------------ |
|  +7.0% |   +58 | 99.8% → 99.7% | 834 → 892 | `traceback.py:475` |
| +50.0% |    +1 |   0.2% → 0.3% |     2 → 3 | `traceback.py:474` |

##### `checkcache` (`<frozen linecache>`)

|  Change | Delta |             % | Samples | Location                |
| ------: | ----: | ------------: | ------: | ----------------------- |
|  +28.6% |    +8 | 82.4% → 80.0% | 28 → 36 | `<frozen linecache>:98` |
| +300.0% |    +3 |   2.9% → 8.9% |   1 → 4 | `<frozen linecache>:94` |
| removed |    -1 |   2.9% → 0.0% |   1 → 0 | `<frozen linecache>:85` |
| removed |    -1 |   2.9% → 0.0% |   1 → 0 | `<frozen linecache>:86` |
|     new |    +1 |   0.0% → 2.2% |   0 → 1 | `<frozen linecache>:74` |

##### `_walk_tb_with_full_positions` (`traceback.py`)

| Change | Delta |      % | Samples | Location           |
| -----: | ----: | -----: | ------: | ------------------ |
| +83.3% |   +10 | 100.0% | 12 → 22 | `traceback.py:461` |

##### `extract_tb` (`traceback.py`)

|  Change | Delta |             % | Samples | Location           |
| ------: | ----: | ------------: | ------: | ------------------ |
|  +43.8% |    +7 | 94.1% → 95.8% | 16 → 23 | `traceback.py:123` |
| removed |    -1 |   5.9% → 0.0% |   1 → 0 | `traceback.py:124` |
|     new |    +1 |   0.0% → 4.2% |   0 → 1 | `traceback.py:110` |

##### `parse` (`ast.py`)

| Change | Delta |      % | Samples | Location    |
| -----: | ----: | -----: | ------: | ----------- |
| +43.8% |    +7 | 100.0% | 16 → 23 | `ast.py:46` |

##### `StateForActualGivenExecution._execute_once_for_engine` (`core.py`)

|  Change | Delta |             % | Samples | Location       |
| ------: | ----: | ------------: | ------: | -------------- |
| +166.7% |    +5 | 23.1% → 42.1% |   3 → 8 | `core.py:1284` |
| +400.0% |    +4 |  7.7% → 26.3% |   1 → 5 | `core.py:1315` |
| removed |    -2 |  15.4% → 0.0% |   2 → 0 | `core.py:1264` |
| removed |    -1 |   7.7% → 0.0% |   1 → 0 | `core.py:1257` |
| removed |    -1 |   7.7% → 0.0% |   1 → 0 | `core.py:1283` |

##### `recursive_property.<locals>.forced_or_cached_value` (`strategies.py`)

| Change | Delta |            % | Samples | Location            |
| -----: | ----: | -----------: | ------: | ------------------- |
|    new |    +3 | 0.0% → 60.0% |   0 → 3 | `strategies.py:121` |
|    new |    +2 | 0.0% → 40.0% |   0 → 2 | `strategies.py:119` |

##### `format_exception` (`escalation.py`)

|  Change | Delta |             % | Samples | Location            |
| ------: | ----: | ------------: | ------: | ------------------- |
|     new |    +4 |  0.0% → 50.0% |   0 → 4 | `escalation.py:166` |
|     new |    +2 |  0.0% → 25.0% |   0 → 2 | `escalation.py:163` |
|  -50.0% |    -1 | 66.7% → 12.5% |   2 → 1 | `escalation.py:164` |
| removed |    -1 |  33.3% → 0.0% |   1 → 0 | `escalation.py:169` |
|     new |    +1 |  0.0% → 12.5% |   0 → 1 | `escalation.py:175` |

##### `TreeRecordingObserver.conclude_test` (`datatree.py`)

|  Change | Delta |             % | Samples | Location           |
| ------: | ----: | ------------: | ------: | ------------------ |
| +150.0% |    +3 | 40.0% → 50.0% |   2 → 5 | `datatree.py:1194` |
| removed |    -1 |  20.0% → 0.0% |   1 → 0 | `datatree.py:1162` |
| +100.0% |    +1 |         20.0% |   1 → 2 | `datatree.py:1168` |
|     new |    +1 |  0.0% → 10.0% |   0 → 1 | `datatree.py:1157` |
|     new |    +1 |  0.0% → 10.0% |   0 → 1 | `datatree.py:1189` |

##### `Untokenizer.untokenize` (`tokenize.py`)

|  Change | Delta |              % | Samples | Location          |
| ------: | ----: | -------------: | ------: | ----------------- |
|     new |    +2 |   0.0% → 33.3% |   0 → 2 | `tokenize.py:264` |
| +100.0% |    +1 | 100.0% → 33.3% |   1 → 2 | `tokenize.py:230` |
|     new |    +1 |   0.0% → 16.7% |   0 → 1 | `tokenize.py:263` |
|     new |    +1 |   0.0% → 16.7% |   0 → 1 | `tokenize.py:265` |

##### `get_trimmed_traceback` (`escalation.py`)

|  Change | Delta |             % | Samples | Location           |
| ------: | ----: | ------------: | ------: | ------------------ |
|  +50.0% |    +4 | 40.0% → 50.0% |  8 → 12 | `escalation.py:76` |
| +150.0% |    +3 | 10.0% → 20.8% |   2 → 5 | `escalation.py:75` |
|  -75.0% |    -3 |  20.0% → 4.2% |   4 → 1 | `escalation.py:78` |

##### `Tracer.__exit__` (`scrutineer.py`)

|  Change | Delta |      % | Samples | Location            |
| ------: | ----: | -----: | ------: | ------------------- |
| +133.3% |    +4 | 100.0% |   3 → 7 | `scrutineer.py:146` |

##### `GenericCache.__balance` (`cache.py`)

| Change | Delta |             % | Samples | Location       |
| -----: | ----: | ------------: | ------: | -------------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `cache.py:235` |

##### `ConjectureData.conclude_test` (`data.py`)

|  Change | Delta |      % | Samples | Location       |
| ------: | ----: | -----: | ------: | -------------- |
| +300.0% |    +3 | 100.0% |   1 → 4 | `data.py:1452` |

##### `ConjectureData.draw` (`data.py`)

| Change | Delta |            % | Samples | Location       |
| -----: | ----: | -----------: | ------: | -------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `data.py:1306` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `data.py:1338` |

##### `deterministic_PRNG` (`entropy.py`)

| Change | Delta |             % | Samples | Location         |
| -----: | ----: | ------------: | ------: | ---------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `entropy.py:261` |

##### `Node._repr_failure_py` (`nodes.py`)

|  Change | Delta |             % | Samples | Location       |
| ------: | ----: | ------------: | ------: | -------------- |
|     new |    +3 |  0.0% → 75.0% |   0 → 3 | `nodes.py:444` |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `nodes.py:420` |
|     new |    +1 |  0.0% → 25.0% |   0 → 1 | `nodes.py:448` |

##### `ConjectureData.stop_span` (`data.py`)

|  Change | Delta |      % | Samples | Location       |
| ------: | ----: | -----: | ------: | -------------- |
| +100.0% |    +2 | 100.0% |   2 → 4 | `data.py:1377` |

##### `Verbosity._int_value` (`_settings.py`)

| Change | Delta |             % | Samples | Location           |
| -----: | ----: | ------------: | ------: | ------------------ |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `_settings.py:127` |

##### `skip_exceptions_to_reraise` (`core.py`)

| Change | Delta |            % | Samples | Location      |
| -----: | ----: | -----------: | ------: | ------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `core.py:792` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `core.py:793` |

##### `many.more` (`utils.py`)

| Change | Delta |            % | Samples | Location       |
| -----: | ----: | -----------: | ------: | -------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `utils.py:332` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `utils.py:339` |

##### `Mapping.get` (`<frozen _collections_abc>`)

| Change | Delta |             % | Samples | Location                        |
| -----: | ----: | ------------: | ------: | ------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `<frozen _collections_abc>:795` |

##### `format_exception` (`traceback.py`)

| Change | Delta |             % | Samples | Location           |
| -----: | ----: | ------------: | ------: | ------------------ |
| -42.1% |    -8 | 86.4% → 91.7% | 19 → 11 | `traceback.py:200` |
| -66.7% |    -2 |  13.6% → 8.3% |   3 → 1 | `traceback.py:201` |

##### `TracebackException.format` (`traceback.py`)

|  Change | Delta |              % | Samples | Location            |
| ------: | ----: | -------------: | ------: | ------------------- |
|  -62.5% |    -5 | 66.7% → 100.0% |   8 → 3 | `traceback.py:1656` |
| removed |    -3 |   25.0% → 0.0% |   3 → 0 | `traceback.py:1614` |
| removed |    -1 |    8.3% → 0.0% |   1 → 0 | `traceback.py:1628` |

##### `get_seeder_and_restorer.<locals>.restore_all` (`entropy.py`)

| Change | Delta |             % | Samples | Location         |
| -----: | ----: | ------------: | ------: | ---------------- |
| -50.0% |    -5 |         71.4% |  10 → 5 | `entropy.py:236` |
| -66.7% |    -2 | 21.4% → 14.3% |   3 → 1 | `entropy.py:238` |

##### `StackSummary._extract_from_extended_frame_gen` (`traceback.py`)

| Change | Delta |             % | Samples | Location           |
| -----: | ----: | ------------: | ------: | ------------------ |
| -14.5% |    -8 | 68.8% → 63.5% | 55 → 47 | `traceback.py:529` |
| +50.0% |    +3 |  7.5% → 12.2% |   6 → 9 | `traceback.py:553` |
| -14.3% |    -2 | 17.5% → 16.2% | 14 → 12 | `traceback.py:548` |
| -25.0% |    -1 |   5.0% → 4.1% |   4 → 3 | `traceback.py:541` |
|    new |    +1 |   0.0% → 1.4% |   0 → 1 | `traceback.py:530` |

##### `ConjectureRunner.cached_test_function` (`engine.py`)

|  Change | Delta |             % | Samples | Location        |
| ------: | ----: | ------------: | ------: | --------------- |
| removed |    -3 |  60.0% → 0.0% |   3 → 0 | `engine.py:504` |
| removed |    -2 |  40.0% → 0.0% |   2 → 0 | `engine.py:550` |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `engine.py:525` |

##### `_GeneratorContextManager.__exit__` (`contextlib.py`)

| Change | Delta |             % | Samples | Location            |
| -----: | ----: | ------------: | ------: | ------------------- |
| -60.0% |    -3 | 55.6% → 40.0% |   5 → 2 | `contextlib.py:257` |
| -50.0% |    -2 | 44.4% → 40.0% |   4 → 2 | `contextlib.py:224` |

##### `getsourcefile` (`inspect.py`)

|  Change | Delta |             % | Samples | Location         |
| ------: | ----: | ------------: | ------: | ---------------- |
|  -77.8% |    -7 | 56.3% → 16.7% |   9 → 2 | `inspect.py:895` |
| +100.0% |    +2 | 12.5% → 33.3% |   2 → 4 | `inspect.py:890` |
| removed |    -1 |   6.3% → 0.0% |   1 → 0 | `inspect.py:903` |
| removed |    -1 |   6.3% → 0.0% |   1 → 0 | `inspect.py:904` |
|     new |    +1 |   0.0% → 8.3% |   0 → 1 | `inspect.py:891` |

##### `_display_width` (`traceback.py`)

| Change | Delta |      % | Samples | Location            |
| -----: | ----: | -----: | ------: | ------------------- |
| -60.0% |    -3 | 100.0% |   5 → 2 | `traceback.py:1062` |

##### `_generate_tokens_from_c_tokenizer` (`tokenize.py`)

| Change | Delta |             % | Samples | Location          |
| -----: | ----: | ------------: | ------: | ----------------- |
| -66.7% |    -2 | 50.0% → 33.3% |   3 → 1 | `tokenize.py:634` |
| -33.3% |    -1 | 50.0% → 66.7% |   3 → 2 | `tokenize.py:635` |

##### `FrameSummary._set_lines` (`traceback.py`)

|  Change | Delta |             % | Samples | Location           |
| ------: | ----: | ------------: | ------: | ------------------ |
| removed |    -1 |  14.3% → 0.0% |   1 → 0 | `traceback.py:394` |
|  -33.3% |    -1 | 42.9% → 50.0% |   3 → 2 | `traceback.py:398` |
|  -50.0% |    -1 | 28.6% → 25.0% |   2 → 1 | `traceback.py:400` |
| removed |    -1 |  14.3% → 0.0% |   1 → 0 | `traceback.py:403` |
|     new |    +1 |  0.0% → 25.0% |   0 → 1 | `traceback.py:404` |

##### `lazycache` (`<frozen linecache>`)

|  Change | Delta |            % | Samples | Location                 |
| ------: | ----: | -----------: | ------: | ------------------------ |
| removed |    -3 | 42.9% → 0.0% |   3 → 0 | `<frozen linecache>:213` |

##### `StackSummary.format_frame_summary` (`traceback.py`)

|  Change | Delta |             % | Samples | Location           |
| ------: | ----: | ------------: | ------: | ------------------ |
|  -80.0% |    -4 | 50.0% → 12.5% |   5 → 1 | `traceback.py:603` |
|     new |    +3 |  0.0% → 37.5% |   0 → 3 | `traceback.py:618` |
|     new |    +2 |  0.0% → 25.0% |   0 → 2 | `traceback.py:634` |
| removed |    -1 |  10.0% → 0.0% |   1 → 0 | `traceback.py:589` |
| removed |    -1 |  10.0% → 0.0% |   1 → 0 | `traceback.py:633` |

##### `getblock` (`inspect.py`)

|  Change | Delta |            % | Samples | Location          |
| ------: | ----: | -----------: | ------: | ----------------- |
| removed |    -1 | 16.7% → 0.0% |   1 → 0 | `inspect.py:1147` |
|  -33.3% |    -1 |        50.0% |   3 → 2 | `inspect.py:1149` |

##### `sort_key.<locals>.<genexpr>` (`shrinker.py`)

|  Change | Delta |             % | Samples | Location         |
| ------: | ----: | ------------: | ------: | ---------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `shrinker.py:93` |

##### `ensure_free_stackframes.__exit__` (`junkdrawer.py`)

|  Change | Delta |             % | Samples | Location            |
| ------: | ----: | ------------: | ------: | ------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `junkdrawer.py:432` |

##### `StateForActualGivenExecution.execute_once` (`core.py`)

| Change | Delta |      % | Samples | Location       |
| -----: | ----: | -----: | ------: | -------------- |
| -33.3% |    -1 | 100.0% |   3 → 2 | `core.py:1150` |

##### `ConjectureRunner.test_function` (`engine.py`)

|  Change | Delta |             % | Samples | Location        |
| ------: | ----: | ------------: | ------: | --------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `engine.py:599` |

##### `IntList._array_or_list` (`junkdrawer.py`)

| Change | Delta |      % | Samples | Location            |
| -----: | ----: | -----: | ------: | ------------------- |
| -16.7% |    -1 | 100.0% |   6 → 5 | `junkdrawer.py:123` |

##### `Span.start` (`data.py`)

|  Change | Delta |             % | Samples | Location      |
| ------: | ----: | ------------: | ------: | ------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `data.py:236` |

##### `ConjectureData.start_span` (`data.py`)

|  Change | Delta |             % | Samples | Location       |
| ------: | ----: | ------------: | ------: | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `data.py:1359` |

##### `Shrinker._node_program` (`shrinker.py`)

|  Change | Delta |             % | Samples | Location           |
| ------: | ----: | ------------: | ------: | ------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `shrinker.py:1373` |

##### `getline` (`<frozen linecache>`)

|  Change | Delta |             % | Samples | Location                |
| ------: | ----: | ------------: | ------: | ----------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `<frozen linecache>:28` |

#### Callers

Callers with the largest change in contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `(garbage collector)` (`<unknown>`)

|   Change | Delta |             % |   Samples | Caller                                               | Location        |
| -------: | ----: | ------------: | --------: | ---------------------------------------------------- | --------------- |
| +6000.0% |   +60 |  0.6% → 26.4% |    1 → 61 | `namedtuple.<locals>._make`                          | `__init__.py`   |
|    +5.6% |    +7 | 80.8% → 57.6% | 126 → 133 | `recursive_property.<locals>.forced_or_cached_value` | `strategies.py` |
|  removed |    -3 |   1.9% → 0.0% |     3 → 0 | `getsource`                                          | `inspect.py`    |
|      new |    +3 |   0.0% → 1.3% |     0 → 3 | `suppress.__exit__`                                  | `contextlib.py` |
|  removed |    -2 |   1.3% → 0.0% |     2 → 0 | `dedent`                                             | `textwrap.py`   |

##### `_get_code_position` (`traceback.py`)

| Change | Delta |      % |   Samples | Caller                         | Location       |
| -----: | ----: | -----: | --------: | ------------------------------ | -------------- |
|  +7.1% |   +59 | 100.0% | 836 → 895 | `_walk_tb_with_full_positions` | `traceback.py` |

##### `checkcache` (`<frozen linecache>`)

| Change | Delta |      % | Samples | Caller                                          | Location       |
| -----: | ----: | -----: | ------: | ----------------------------------------------- | -------------- |
| +32.4% |   +11 | 100.0% | 34 → 45 | `StackSummary._extract_from_extended_frame_gen` | `traceback.py` |

##### `_walk_tb_with_full_positions` (`traceback.py`)

| Change | Delta |      % | Samples | Caller                                          | Location       |
| -----: | ----: | -----: | ------: | ----------------------------------------------- | -------------- |
| +83.3% |   +10 | 100.0% | 12 → 22 | `StackSummary._extract_from_extended_frame_gen` | `traceback.py` |

##### `extract_tb` (`traceback.py`)

|  Change | Delta |             % | Samples | Caller                                                  | Location        |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------- | --------------- |
|  +36.4% |    +4 | 64.7% → 62.5% | 11 → 15 | `StateForActualGivenExecution._execute_once_for_engine` | `core.py`       |
| +133.3% |    +4 | 17.6% → 29.2% |   3 → 7 | `get_trimmed_traceback`                                 | `escalation.py` |
|  -33.3% |    -1 |  17.6% → 8.3% |   3 → 2 | `InterestingOrigin.from_exception`                      | `escalation.py` |

##### `parse` (`ast.py`)

| Change | Delta |             % | Samples | Caller                                     | Location        |
| -----: | ----: | ------------: | ------: | ------------------------------------------ | --------------- |
| +75.0% |    +9 | 75.0% → 91.3% | 12 → 21 | `_extract_caret_anchors_from_line_segment` | `traceback.py`  |
| -50.0% |    -1 |  12.5% → 4.3% |   2 → 1 | `StackSummary._should_show_carets`         | `traceback.py`  |
| -50.0% |    -1 |  12.5% → 4.3% |   2 → 1 | `_clean_source`                            | `reflection.py` |

##### `StateForActualGivenExecution._execute_once_for_engine` (`core.py`)

| Change | Delta |      % | Samples | Caller                                       | Location    |
| -----: | ----: | -----: | ------: | -------------------------------------------- | ----------- |
| +46.2% |    +6 | 100.0% | 13 → 19 | `ConjectureRunner.__stoppable_test_function` | `engine.py` |

##### `recursive_property.<locals>.forced_or_cached_value` (`strategies.py`)

| Change | Delta |            % | Samples | Caller                              | Location        |
| -----: | ----: | -----------: | ------: | ----------------------------------- | --------------- |
|    new |    +3 | 0.0% → 60.0% |   0 → 3 | `recursive_property`                | `strategies.py` |
|    new |    +2 | 0.0% → 40.0% |   0 → 2 | `recursive_property.<locals>.recur` | `strategies.py` |

##### `format_exception` (`escalation.py`)

|  Change | Delta |              % | Samples | Caller                                                  | Location  |
| ------: | ----: | -------------: | ------: | ------------------------------------------------------- | --------- |
| +133.3% |    +4 | 100.0% → 87.5% |   3 → 7 | `StateForActualGivenExecution._execute_once_for_engine` | `core.py` |
|     new |    +1 |   0.0% → 12.5% |   0 → 1 | `StateForActualGivenExecution.run_engine`               | `core.py` |

##### `TreeRecordingObserver.conclude_test` (`datatree.py`)

|  Change | Delta |              % | Samples | Caller                        | Location    |
| ------: | ----: | -------------: | ------: | ----------------------------- | ----------- |
| +150.0% |    +6 | 80.0% → 100.0% |  4 → 10 | `ConjectureData.freeze`       | `data.py`   |
| removed |    -1 |   20.0% → 0.0% |   1 → 0 | `ConjectureRunner._cache_key` | `engine.py` |

##### `Untokenizer.untokenize` (`tokenize.py`)

|  Change | Delta |      % | Samples | Caller       | Location      |
| ------: | ----: | -----: | ------: | ------------ | ------------- |
| +500.0% |    +5 | 100.0% |   1 → 6 | `untokenize` | `tokenize.py` |

##### `get_trimmed_traceback` (`escalation.py`)

| Change | Delta |             % | Samples | Caller                                                   | Location        |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------- | --------------- |
| +13.3% |    +2 | 75.0% → 70.8% | 15 → 17 | `StateForActualGivenExecution._execute_once_for_engine`  | `core.py`       |
|    new |    +2 |   0.0% → 8.3% |   0 → 2 | `StateForActualGivenExecution.run_engine`                | `core.py`       |
| -20.0% |    -1 | 25.0% → 16.7% |   5 → 4 | `InterestingOrigin.from_exception`                       | `escalation.py` |
|    new |    +1 |   0.0% → 4.2% |   0 → 1 | `given.<locals>.run_test_as_given.<locals>.wrapped_test` | `core.py`       |

##### `Tracer.__exit__` (`scrutineer.py`)

|  Change | Delta |      % | Samples | Caller                                                  | Location  |
| ------: | ----: | -----: | ------: | ------------------------------------------------------- | --------- |
| +133.3% |    +4 | 100.0% |   3 → 7 | `StateForActualGivenExecution._execute_once_for_engine` | `core.py` |

##### `GenericCache.__balance` (`cache.py`)

| Change | Delta |             % | Samples | Caller                     | Location   |
| -----: | ----: | ------------: | ------: | -------------------------- | ---------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `GenericCache.__setitem__` | `cache.py` |

##### `ConjectureData.conclude_test` (`data.py`)

|  Change | Delta |      % | Samples | Caller                            | Location  |
| ------: | ----: | -----: | ------: | --------------------------------- | --------- |
| +300.0% |    +3 | 100.0% |   1 → 4 | `ConjectureData.mark_interesting` | `data.py` |

##### `ConjectureData.draw` (`data.py`)

| Change | Delta |             % | Samples | Caller                  | Location         |
| -----: | ----: | ------------: | ------: | ----------------------- | ---------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `TupleStrategy.do_draw` | `collections.py` |

##### `deterministic_PRNG` (`entropy.py`)

| Change | Delta |             % | Samples | Caller                              | Location        |
| -----: | ----: | ------------: | ------: | ----------------------------------- | --------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `_GeneratorContextManager.__exit__` | `contextlib.py` |

##### `Node._repr_failure_py` (`nodes.py`)

|  Change | Delta |      % | Samples | Caller                  | Location    |
| ------: | ----: | -----: | ------: | ----------------------- | ----------- |
| +100.0% |    +2 | 100.0% |   2 → 4 | `Function.repr_failure` | `python.py` |

##### `ConjectureData.stop_span` (`data.py`)

|  Change | Delta |      % | Samples | Caller                  | Location  |
| ------: | ----: | -----: | ------: | ----------------------- | --------- |
| +100.0% |    +2 | 100.0% |   2 → 4 | `ConjectureData.freeze` | `data.py` |

##### `Verbosity._int_value` (`_settings.py`)

| Change | Delta |             % | Samples | Caller                                          | Location       |
| -----: | ----: | ------------: | ------: | ----------------------------------------------- | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `StackSummary._extract_from_extended_frame_gen` | `traceback.py` |

##### `skip_exceptions_to_reraise` (`core.py`)

| Change | Delta |             % | Samples | Caller                                                  | Location  |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------- | --------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `StateForActualGivenExecution._execute_once_for_engine` | `core.py` |

##### `many.more` (`utils.py`)

| Change | Delta |             % | Samples | Caller                              | Location         |
| -----: | ----: | ------------: | ------: | ----------------------------------- | ---------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `UniqueSampledListStrategy.do_draw` | `collections.py` |

##### `Mapping.get` (`<frozen _collections_abc>`)

| Change | Delta |             % | Samples | Caller                  | Location        |
| -----: | ----: | ------------: | ------: | ----------------------- | --------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `get_trimmed_traceback` | `escalation.py` |

##### `format_exception` (`traceback.py`)

| Change | Delta |             % | Samples | Caller                  | Location        |
| -----: | ----: | ------------: | ------: | ----------------------- | --------------- |
| -37.5% |    -6 | 72.7% → 83.3% | 16 → 10 | `format_exception`      | `escalation.py` |
| -66.7% |    -4 | 27.3% → 16.7% |   6 → 2 | `ExceptionInfo.getrepr` | `code.py`       |

##### `TracebackException.format` (`traceback.py`)

| Change | Delta |      % | Samples | Caller             | Location       |
| -----: | ----: | -----: | ------: | ------------------ | -------------- |
| -75.0% |    -9 | 100.0% |  12 → 3 | `format_exception` | `traceback.py` |

##### `get_seeder_and_restorer.<locals>.restore_all` (`entropy.py`)

| Change | Delta |      % | Samples | Caller               | Location     |
| -----: | ----: | -----: | ------: | -------------------- | ------------ |
| -50.0% |    -7 | 100.0% |  14 → 7 | `deterministic_PRNG` | `entropy.py` |

##### `StackSummary._extract_from_extended_frame_gen` (`traceback.py`)

| Change | Delta |              % | Samples | Caller                        | Location       |
| -----: | ----: | -------------: | ------: | ----------------------------- | -------------- |
| -10.0% |    -8 | 100.0% → 97.3% | 80 → 72 | `extract_tb`                  | `traceback.py` |
|    new |    +1 |    0.0% → 1.4% |   0 → 1 | `TracebackException.__init__` | `traceback.py` |
|    new |    +1 |    0.0% → 1.4% |   0 → 1 | `__init__`                    | `__init__`     |

##### `ConjectureRunner.cached_test_function` (`engine.py`)

|  Change | Delta |              % | Samples | Caller                                     | Location      |
| ------: | ----: | -------------: | ------: | ------------------------------------------ | ------------- |
|  -66.7% |    -2 | 60.0% → 100.0% |   3 → 1 | `Shrinker.cached_test_function`            | `shrinker.py` |
| removed |    -1 |   20.0% → 0.0% |   1 → 0 | `ConjectureRunner.generate_new_test_cases` | `engine.py`   |
| removed |    -1 |   20.0% → 0.0% |   1 → 0 | `ConjectureRunner.generate_mutations_from` | `engine.py`   |

##### `_GeneratorContextManager.__exit__` (`contextlib.py`)

| Change | Delta |      % | Samples | Caller                                      | Location  |
| -----: | ----: | -----: | ------: | ------------------------------------------- | --------- |
| -44.4% |    -4 | 100.0% |   9 → 5 | `StateForActualGivenExecution.execute_once` | `core.py` |

##### `getsourcefile` (`inspect.py`)

| Change | Delta |      % | Samples | Caller                  | Location        |
| -----: | ----: | -----: | ------: | ----------------------- | --------------- |
| -25.0% |    -4 | 100.0% | 16 → 12 | `get_trimmed_traceback` | `escalation.py` |

##### `_display_width` (`traceback.py`)

| Change | Delta |      % | Samples | Caller                              | Location       |
| -----: | ----: | -----: | ------: | ----------------------------------- | -------------- |
| -60.0% |    -3 | 100.0% |   5 → 2 | `StackSummary.format_frame_summary` | `traceback.py` |

##### `_generate_tokens_from_c_tokenizer` (`tokenize.py`)

| Change | Delta |             % | Samples | Caller                             | Location        |
| -----: | ----: | ------------: | ------: | ---------------------------------- | --------------- |
| -66.7% |    -2 | 50.0% → 33.3% |   3 → 1 | `_clean_source.<locals>.<genexpr>` | `reflection.py` |
| -33.3% |    -1 | 50.0% → 66.7% |   3 → 2 | `getblock`                         | `inspect.py`    |

##### `FrameSummary._set_lines` (`traceback.py`)

| Change | Delta |      % | Samples | Caller              | Location       |
| -----: | ----: | -----: | ------: | ------------------- | -------------- |
| -42.9% |    -3 | 100.0% |   7 → 4 | `FrameSummary.line` | `traceback.py` |

##### `lazycache` (`<frozen linecache>`)

| Change | Delta |      % | Samples | Caller                                          | Location       |
| -----: | ----: | -----: | ------: | ----------------------------------------------- | -------------- |
| -42.9% |    -3 | 100.0% |   7 → 4 | `StackSummary._extract_from_extended_frame_gen` | `traceback.py` |

##### `StackSummary.format_frame_summary` (`traceback.py`)

| Change | Delta |      % | Samples | Caller                | Location       |
| -----: | ----: | -----: | ------: | --------------------- | -------------- |
| -20.0% |    -2 | 100.0% |  10 → 8 | `StackSummary.format` | `traceback.py` |

##### `getblock` (`inspect.py`)

| Change | Delta |      % | Samples | Caller           | Location     |
| -----: | ----: | -----: | ------: | ---------------- | ------------ |
| -33.3% |    -2 | 100.0% |   6 → 4 | `getsourcelines` | `inspect.py` |

##### `sort_key.<locals>.<genexpr>` (`shrinker.py`)

|  Change | Delta |             % | Samples | Caller     | Location      |
| ------: | ----: | ------------: | ------: | ---------- | ------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `sort_key` | `shrinker.py` |

##### `ensure_free_stackframes.__exit__` (`junkdrawer.py`)

|  Change | Delta |             % | Samples | Caller                                       | Location    |
| ------: | ----: | ------------: | ------: | -------------------------------------------- | ----------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `ConjectureRunner.__stoppable_test_function` | `engine.py` |

##### `StateForActualGivenExecution.execute_once` (`core.py`)

| Change | Delta |      % | Samples | Caller                                                  | Location  |
| -----: | ----: | -----: | ------: | ------------------------------------------------------- | --------- |
| -33.3% |    -1 | 100.0% |   3 → 2 | `StateForActualGivenExecution._execute_once_for_engine` | `core.py` |

##### `ConjectureRunner.test_function` (`engine.py`)

|  Change | Delta |            % | Samples | Caller                                     | Location    |
| ------: | ----: | -----------: | ------: | ------------------------------------------ | ----------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `ConjectureRunner.generate_new_test_cases` | `engine.py` |

##### `IntList._array_or_list` (`junkdrawer.py`)

| Change | Delta |      % | Samples | Caller              | Location        |
| -----: | ----: | -----: | ------: | ------------------- | --------------- |
| -16.7% |    -1 | 100.0% |   6 → 5 | `IntList.__upgrade` | `junkdrawer.py` |

##### `Span.start` (`data.py`)

|  Change | Delta |             % | Samples | Caller                       | Location      |
| ------: | ----: | ------------: | ------: | ---------------------------- | ------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `Shrinker.try_trivial_spans` | `shrinker.py` |

##### `ConjectureData.start_span` (`data.py`)

|  Change | Delta |             % | Samples | Caller                | Location  |
| ------: | ----: | ------------: | ------: | --------------------- | --------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `ConjectureData.draw` | `data.py` |

##### `Shrinker._node_program` (`shrinker.py`)

|  Change | Delta |             % | Samples | Caller                                    | Location      |
| ------: | ----: | ------------: | ------: | ----------------------------------------- | ------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `Shrinker.node_program.<locals>.<lambda>` | `shrinker.py` |

##### `getline` (`<frozen linecache>`)

|  Change | Delta |             % | Samples | Caller                    | Location       |
| ------: | ----: | ------------: | ------: | ------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `FrameSummary._set_lines` | `traceback.py` |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

| Change | Delta |      % |       Samples | Function                                                 | Location         |
| -----: | ----: | -----: | ------------: | -------------------------------------------------------- | ---------------- |
| +11.3% |  +162 |  99.8% | 1,431 → 1,593 | `accept.<locals>.inner`                                  | `debug.py`       |
| +11.3% |  +162 |  99.8% | 1,431 → 1,593 | `minimal`                                                | `debug.py`       |
| +11.3% |  +162 |  99.9% | 1,433 → 1,595 | `_multicall`                                             | `_callers.py`    |
| +11.3% |  +162 |  99.9% | 1,433 → 1,595 | `PluginManager._hookexec`                                | `_manager.py`    |
| +11.3% |  +162 |  99.9% | 1,433 → 1,595 | `HookCaller.__call__`                                    | `_hooks.py`      |
| +11.3% |  +162 |  99.9% | 1,433 → 1,595 | `_main`                                                  | `__init__.py`    |
| +11.3% |  +162 |  99.9% | 1,433 → 1,595 | `_console_main`                                          | `__init__.py`    |
| +11.3% |  +162 |  99.9% | 1,433 → 1,595 | `<module>`                                               | `__main__.py`    |
| +11.3% |  +162 | 100.0% | 1,434 → 1,596 | `_run_code`                                              | `<frozen runpy>` |
| +11.3% |  +162 |  99.9% | 1,433 → 1,595 | `_run_module_code`                                       | `<frozen runpy>` |
| +11.3% |  +162 | 100.0% | 1,434 → 1,596 | `run_module`                                             | `<frozen runpy>` |
| +11.3% |  +162 | 100.0% | 1,434 → 1,596 | `_run_module_as_main`                                    | `<frozen runpy>` |
| +11.2% |  +161 |  99.9% | 1,433 → 1,594 | `given.<locals>.run_test_as_given.<locals>.wrapped_test` | `core.py`        |
| +11.2% |  +161 |  99.9% | 1,433 → 1,594 | `pytest_pyfunc_call`                                     | `python.py`      |
| +11.2% |  +161 |  99.9% | 1,433 → 1,594 | `Function.runtest`                                       | `python.py`      |
| +11.2% |  +161 |  99.9% | 1,433 → 1,594 | `pytest_runtest_call`                                    | `runner.py`      |
| +11.2% |  +161 |  99.9% | 1,433 → 1,594 | `call_and_report.<locals>.<lambda>`                      | `runner.py`      |
| +11.2% |  +161 |  99.9% | 1,433 → 1,594 | `CallInfo.from_call`                                     | `runner.py`      |
| +11.2% |  +161 |  99.9% | 1,433 → 1,594 | `call_and_report`                                        | `runner.py`      |
| +11.2% |  +161 |  99.9% | 1,433 → 1,594 | `runtestprotocol`                                        | `runner.py`      |

##### Ours

| Change | Delta |     % |       Samples | Function                                                 | Location      |
| -----: | ----: | ----: | ------------: | -------------------------------------------------------- | ------------- |
| +11.3% |  +162 | 99.8% | 1,431 → 1,593 | `accept.<locals>.inner`                                  | `debug.py`    |
| +11.3% |  +162 | 99.8% | 1,431 → 1,593 | `minimal`                                                | `debug.py`    |
| +11.3% |  +162 | 99.9% | 1,433 → 1,595 | `_multicall`                                             | `_callers.py` |
| +11.3% |  +162 | 99.9% | 1,433 → 1,595 | `PluginManager._hookexec`                                | `_manager.py` |
| +11.3% |  +162 | 99.9% | 1,433 → 1,595 | `HookCaller.__call__`                                    | `_hooks.py`   |
| +11.3% |  +162 | 99.9% | 1,433 → 1,595 | `_main`                                                  | `__init__.py` |
| +11.3% |  +162 | 99.9% | 1,433 → 1,595 | `_console_main`                                          | `__init__.py` |
| +11.3% |  +162 | 99.9% | 1,433 → 1,595 | `<module>`                                               | `__main__.py` |
| +11.2% |  +161 | 99.9% | 1,433 → 1,594 | `given.<locals>.run_test_as_given.<locals>.wrapped_test` | `core.py`     |
| +11.2% |  +161 | 99.9% | 1,433 → 1,594 | `pytest_pyfunc_call`                                     | `python.py`   |
| +11.2% |  +161 | 99.9% | 1,433 → 1,594 | `Function.runtest`                                       | `python.py`   |
| +11.2% |  +161 | 99.9% | 1,433 → 1,594 | `pytest_runtest_call`                                    | `runner.py`   |
| +11.2% |  +161 | 99.9% | 1,433 → 1,594 | `call_and_report.<locals>.<lambda>`                      | `runner.py`   |
| +11.2% |  +161 | 99.9% | 1,433 → 1,594 | `CallInfo.from_call`                                     | `runner.py`   |
| +11.2% |  +161 | 99.9% | 1,433 → 1,594 | `call_and_report`                                        | `runner.py`   |
| +11.2% |  +161 | 99.9% | 1,433 → 1,594 | `runtestprotocol`                                        | `runner.py`   |
| +11.2% |  +161 | 99.9% | 1,433 → 1,594 | `pytest_runtest_protocol`                                | `runner.py`   |
| +11.2% |  +161 | 99.9% | 1,433 → 1,594 | `pytest_runtestloop`                                     | `main.py`     |
| +11.2% |  +161 | 99.9% | 1,433 → 1,594 | `_main`                                                  | `main.py`     |
| +11.2% |  +161 | 99.9% | 1,433 → 1,594 | `wrap_session`                                           | `main.py`     |

##### Garbage collector

| Change | Delta |             % |   Samples | Function              | Location    |
| -----: | ----: | ------------: | --------: | --------------------- | ----------- |
| +48.1% |   +75 | 10.9% → 14.5% | 156 → 231 | `(garbage collector)` | `<unknown>` |

##### Standard library

|  Change | Delta |           % |       Samples | Function                    | Location                        |
| ------: | ----: | ----------: | ------------: | --------------------------- | ------------------------------- |
|  +11.3% |  +162 |      100.0% | 1,434 → 1,596 | `_run_code`                 | `<frozen runpy>`                |
|  +11.3% |  +162 |       99.9% | 1,433 → 1,595 | `_run_module_code`          | `<frozen runpy>`                |
|  +11.3% |  +162 |      100.0% | 1,434 → 1,596 | `run_module`                | `<frozen runpy>`                |
|  +11.3% |  +162 |      100.0% | 1,434 → 1,596 | `_run_module_as_main`       | `<frozen runpy>`                |
|  +32.4% |   +11 | 2.4% → 2.8% |       34 → 45 | `checkcache`                | `<frozen linecache>`            |
| +100.0% |    +1 |        0.1% |         1 → 2 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |
| +100.0% |    +1 |        0.1% |         1 → 2 | `_load_unlocked`            | `<frozen importlib._bootstrap>` |
| +100.0% |    +1 |        0.1% |         1 → 2 | `_find_and_load_unlocked`   | `<frozen importlib._bootstrap>` |
| +100.0% |    +1 |        0.1% |         1 → 2 | `_find_and_load`            | `<frozen importlib._bootstrap>` |
|     new |    +1 | 0.0% → 0.1% |         0 → 1 | `_handle_fromlist`          | `<frozen importlib._bootstrap>` |
|     new |    +1 | 0.0% → 0.1% |         0 → 1 | `_gcd_import`               | `<frozen importlib._bootstrap>` |
|     new |    +1 | 0.0% → 0.1% |         0 → 1 | `Mapping.get`               | `<frozen _collections_abc>`     |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

##### Ours

| Change | Delta |             % |   Samples | Function                                              | Location                 |
| -----: | ----: | ------------: | --------: | ----------------------------------------------------- | ------------------------ |
| -32.8% |   -38 |   8.1% → 4.9% |  116 → 78 | `test_dictionary`                                     | `test_shrink_quality.py` |
| -32.8% |   -38 |   8.1% → 4.9% |  116 → 78 | `accept.<locals>.test_dictionary`                     | `test_shrink_quality.py` |
| -15.1% |   -23 |  10.6% → 8.1% | 152 → 129 | `flaky.<locals>.accept.<locals>.inner`                | `utils.py`               |
|  -5.1% |   -14 | 19.0% → 16.2% | 273 → 259 | `Integer.short_circuit`                               | `integer.py`             |
| -15.6% |   -14 |   6.3% → 4.8% |   90 → 76 | `format_exception`                                    | `traceback.py`           |
| -20.5% |    -9 |   3.1% → 2.2% |   44 → 35 | `test_lists_forced_near_top`                          | `test_shrink_quality.py` |
|  -8.0% |    -8 |   7.0% → 5.8% |  100 → 92 | `format_exception`                                    | `escalation.py`          |
| -53.3% |    -8 |   1.0% → 0.4% |    15 → 7 | `get_seeder_and_restorer.<locals>.restore_all`        | `entropy.py`             |
| -33.3% |    -8 |   1.7% → 1.0% |   24 → 16 | `_GeneratorContextManager.__exit__`                   | `contextlib.py`          |
| -14.9% |    -7 |   3.3% → 2.5% |   47 → 40 | `Shrinker.redistribute_numeric_pairs.<locals>.boost`  | `shrinker.py`            |
| -14.9% |    -7 |   3.3% → 2.5% |   47 → 40 | `Shrinker.redistribute_numeric_pairs`                 | `shrinker.py`            |
| -40.0% |    -6 |   1.0% → 0.6% |    15 → 9 | `deterministic_PRNG`                                  | `entropy.py`             |
| -57.1% |    -4 |   0.5% → 0.2% |     7 → 3 | `test_shrink_text_differs_from_upper_to_ascii`        | `test_shrink_quality.py` |
|  -6.1% |    -4 |   4.6% → 3.9% |   66 → 62 | `TracebackException.format`                           | `traceback.py`           |
| -36.4% |    -4 |   0.8% → 0.4% |    11 → 7 | `test_minimize_duplicated_characters_within_a_choice` | `test_shrink_quality.py` |
| -11.8% |    -4 |   2.4% → 1.9% |   34 → 30 | `FrameSummary.line`                                   | `traceback.py`           |
| -50.0% |    -4 |   0.6% → 0.3% |     8 → 4 | `FrameSummary._set_lines`                             | `traceback.py`           |
| -80.0% |    -4 |   0.3% → 0.1% |     5 → 1 | `test_minimize_list_of_fairly_non_unique_ints`        | `test_shrink_quality.py` |
|  -4.4% |    -3 |   4.7% → 4.1% |   68 → 65 | `test_containment`                                    | `test_shrink_quality.py` |
| -60.0% |    -3 |   0.3% → 0.1% |     5 → 2 | `SpanProperty.__pop`                                  | `data.py`                |

##### Standard library

|  Change | Delta |           % | Samples | Function    | Location             |
| ------: | ----: | ----------: | ------: | ----------- | -------------------- |
|  -42.9% |    -3 | 0.5% → 0.3% |   7 → 4 | `lazycache` | `<frozen linecache>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `getline`   | `<frozen linecache>` |

#### Callees

Callees with the largest change in contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `accept.<locals>.inner` (`debug.py`)

|  Change | Delta |           % |       Samples | Callee                                                    | Location  |
| ------: | ----: | ----------: | ------------: | --------------------------------------------------------- | --------- |
|  +11.3% |  +162 |      100.0% | 1,431 → 1,593 | `given.<locals>.run_test_as_given.<locals>.wrapped_test`  | `core.py` |
| +100.0% |    +2 | 0.1% → 0.3% |         2 → 4 | `StateForActualGivenExecution.execute_once.<locals>.test` | `core.py` |

##### `minimal` (`debug.py`)

| Change | Delta |      % |       Samples | Callee                  | Location   |
| -----: | ----: | -----: | ------------: | ----------------------- | ---------- |
| +11.3% |  +162 | 100.0% | 1,431 → 1,593 | `accept.<locals>.inner` | `debug.py` |

##### `_multicall` (`_callers.py`)

| Change | Delta |              % |       Samples | Callee                    | Location    |
| -----: | ----: | -------------: | ------------: | ------------------------- | ----------- |
| +11.2% |  +161 | 100.0% → 99.9% | 1,433 → 1,594 | `pytest_pyfunc_call`      | `python.py` |
| +11.2% |  +161 | 100.0% → 99.9% | 1,433 → 1,594 | `pytest_runtest_call`     | `runner.py` |
| +11.2% |  +161 | 100.0% → 99.9% | 1,433 → 1,594 | `pytest_runtest_protocol` | `runner.py` |
| +11.2% |  +161 | 100.0% → 99.9% | 1,433 → 1,594 | `pytest_runtestloop`      | `main.py`   |
| +11.2% |  +161 | 100.0% → 99.9% | 1,433 → 1,594 | `pytest_cmdline_main`     | `main.py`   |

##### `PluginManager._hookexec` (`_manager.py`)

| Change | Delta |      % |       Samples | Callee       | Location      |
| -----: | ----: | -----: | ------------: | ------------ | ------------- |
| +11.3% |  +162 | 100.0% | 1,433 → 1,595 | `_multicall` | `_callers.py` |

##### `HookCaller.__call__` (`_hooks.py`)

| Change | Delta |      % |       Samples | Callee                    | Location      |
| -----: | ----: | -----: | ------------: | ------------------------- | ------------- |
| +11.3% |  +162 | 100.0% | 1,433 → 1,595 | `PluginManager._hookexec` | `_manager.py` |

##### `_main` (`__init__.py`)

| Change | Delta |              % |       Samples | Callee                | Location      |
| -----: | ----: | -------------: | ------------: | --------------------- | ------------- |
| +11.2% |  +161 | 100.0% → 99.9% | 1,433 → 1,594 | `HookCaller.__call__` | `_hooks.py`   |
|    new |    +1 |    0.0% → 0.1% |         0 → 1 | `_prepareconfig`      | `__init__.py` |

##### `_console_main` (`__init__.py`)

| Change | Delta |      % |       Samples | Callee  | Location      |
| -----: | ----: | -----: | ------------: | ------- | ------------- |
| +11.3% |  +162 | 100.0% | 1,433 → 1,595 | `_main` | `__init__.py` |

##### `<module>` (`__main__.py`)

| Change | Delta |      % |       Samples | Callee          | Location      |
| -----: | ----: | -----: | ------------: | --------------- | ------------- |
| +11.3% |  +162 | 100.0% | 1,433 → 1,595 | `_console_main` | `__init__.py` |

##### `_run_code` (`<frozen runpy>`)

| Change | Delta |      % |       Samples | Callee       | Location         |
| -----: | ----: | -----: | ------------: | ------------ | ---------------- |
| +11.3% |  +162 |  99.9% | 1,433 → 1,595 | `<module>`   | `__main__.py`    |
| +11.3% |  +162 | 100.0% | 1,434 → 1,596 | `run_module` | `<frozen runpy>` |

##### `_run_module_code` (`<frozen runpy>`)

| Change | Delta |      % |       Samples | Callee      | Location         |
| -----: | ----: | -----: | ------------: | ----------- | ---------------- |
| +11.3% |  +162 | 100.0% | 1,433 → 1,595 | `_run_code` | `<frozen runpy>` |

##### `run_module` (`<frozen runpy>`)

| Change | Delta |     % |       Samples | Callee             | Location         |
| -----: | ----: | ----: | ------------: | ------------------ | ---------------- |
| +11.3% |  +162 | 99.9% | 1,433 → 1,595 | `_run_module_code` | `<frozen runpy>` |

##### `_run_module_as_main` (`<frozen runpy>`)

| Change | Delta |      % |       Samples | Callee      | Location         |
| -----: | ----: | -----: | ------------: | ----------- | ---------------- |
| +11.3% |  +162 | 100.0% | 1,434 → 1,596 | `_run_code` | `<frozen runpy>` |

##### `given.<locals>.run_test_as_given.<locals>.wrapped_test` (`core.py`)

| Change | Delta |             % |       Samples | Callee                                    | Location        |
| -----: | ----: | ------------: | ------------: | ----------------------------------------- | --------------- |
| +10.3% |  +143 | 97.0% → 96.2% | 1,390 → 1,533 | `StateForActualGivenExecution.run_engine` | `core.py`       |
| +29.4% |   +20 |   4.7% → 5.5% |       68 → 88 | `get_trimmed_traceback`                   | `escalation.py` |

##### `pytest_pyfunc_call` (`python.py`)

|  Change | Delta |             % |   Samples | Callee                                                      | Location                 |
| ------: | ----: | ------------: | --------: | ----------------------------------------------------------- | ------------------------ |
| +132.7% |   +73 |   3.8% → 8.0% |  55 → 128 | `accept.<locals>.test_lowering_together_negative`           | `test_shrink_quality.py` |
|  +39.6% |   +42 |   7.4% → 9.3% | 106 → 148 | `test_minimize_one_of`                                      | `test_shrink_quality.py` |
|  -32.8% |   -38 |   8.1% → 4.9% |  116 → 78 | `accept.<locals>.test_dictionary`                           | `test_shrink_quality.py` |
|  +12.1% |   +22 | 12.7% → 12.8% | 182 → 204 | `test_find_large_union_list`                                | `test_shrink_quality.py` |
|  +41.7% |   +15 |   2.5% → 3.2% |   36 → 51 | `accept.<locals>.test_can_ignore_left_hand_side_of_flatmap` | `test_shrink_quality.py` |

##### `Function.runtest` (`python.py`)

| Change | Delta |      % |       Samples | Callee                | Location    |
| -----: | ----: | -----: | ------------: | --------------------- | ----------- |
| +11.2% |  +161 | 100.0% | 1,433 → 1,594 | `HookCaller.__call__` | `_hooks.py` |

##### `pytest_runtest_call` (`runner.py`)

| Change | Delta |      % |       Samples | Callee             | Location    |
| -----: | ----: | -----: | ------------: | ------------------ | ----------- |
| +11.2% |  +161 | 100.0% | 1,433 → 1,594 | `Function.runtest` | `python.py` |

##### `call_and_report.<locals>.<lambda>` (`runner.py`)

| Change | Delta |      % |       Samples | Callee                | Location    |
| -----: | ----: | -----: | ------------: | --------------------- | ----------- |
| +11.2% |  +161 | 100.0% | 1,433 → 1,594 | `HookCaller.__call__` | `_hooks.py` |

##### `CallInfo.from_call` (`runner.py`)

| Change | Delta |      % |       Samples | Callee                              | Location    |
| -----: | ----: | -----: | ------------: | ----------------------------------- | ----------- |
| +11.2% |  +161 | 100.0% | 1,433 → 1,594 | `call_and_report.<locals>.<lambda>` | `runner.py` |

##### `call_and_report` (`runner.py`)

| Change | Delta |      % |       Samples | Callee               | Location    |
| -----: | ----: | -----: | ------------: | -------------------- | ----------- |
| +11.2% |  +161 | 100.0% | 1,433 → 1,594 | `CallInfo.from_call` | `runner.py` |

##### `runtestprotocol` (`runner.py`)

| Change | Delta |      % |       Samples | Callee            | Location    |
| -----: | ----: | -----: | ------------: | ----------------- | ----------- |
| +11.2% |  +161 | 100.0% | 1,433 → 1,594 | `call_and_report` | `runner.py` |

##### `pytest_runtest_protocol` (`runner.py`)

| Change | Delta |      % |       Samples | Callee            | Location    |
| -----: | ----: | -----: | ------------: | ----------------- | ----------- |
| +11.2% |  +161 | 100.0% | 1,433 → 1,594 | `runtestprotocol` | `runner.py` |

##### `pytest_runtestloop` (`main.py`)

| Change | Delta |      % |       Samples | Callee                | Location    |
| -----: | ----: | -----: | ------------: | --------------------- | ----------- |
| +11.2% |  +161 | 100.0% | 1,433 → 1,594 | `HookCaller.__call__` | `_hooks.py` |

##### `_main` (`main.py`)

| Change | Delta |      % |       Samples | Callee                | Location    |
| -----: | ----: | -----: | ------------: | --------------------- | ----------- |
| +11.2% |  +161 | 100.0% | 1,433 → 1,594 | `HookCaller.__call__` | `_hooks.py` |

##### `wrap_session` (`main.py`)

| Change | Delta |      % |       Samples | Callee  | Location  |
| -----: | ----: | -----: | ------------: | ------- | --------- |
| +11.2% |  +161 | 100.0% | 1,433 → 1,594 | `_main` | `main.py` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>`)

| Change | Delta |            % | Samples | Callee           | Location                        |
| -----: | ----: | -----------: | ------: | ---------------- | ------------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `_find_and_load` | `<frozen importlib._bootstrap>` |

##### `_load_unlocked` (`<frozen importlib._bootstrap>`)

| Change | Delta |            % | Samples | Callee                               | Location     |
| -----: | ----: | -----------: | ------: | ------------------------------------ | ------------ |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `AssertionRewritingHook.exec_module` | `rewrite.py` |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>`)

|  Change | Delta |      % | Samples | Callee           | Location                        |
| ------: | ----: | -----: | ------: | ---------------- | ------------------------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `_load_unlocked` | `<frozen importlib._bootstrap>` |

##### `_find_and_load` (`<frozen importlib._bootstrap>`)

|  Change | Delta |      % | Samples | Callee                    | Location                        |
| ------: | ----: | -----: | ------: | ------------------------- | ------------------------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `_find_and_load_unlocked` | `<frozen importlib._bootstrap>` |

##### `_handle_fromlist` (`<frozen importlib._bootstrap>`)

| Change | Delta |             % | Samples | Callee                      | Location                        |
| -----: | ----: | ------------: | ------: | --------------------------- | ------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `_gcd_import` (`<frozen importlib._bootstrap>`)

| Change | Delta |             % | Samples | Callee           | Location                        |
| -----: | ----: | ------------: | ------: | ---------------- | ------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `_find_and_load` | `<frozen importlib._bootstrap>` |

##### `test_dictionary` (`test_shrink_quality.py`)

| Change | Delta |      % |  Samples | Callee    | Location   |
| -----: | ----: | -----: | -------: | --------- | ---------- |
| -32.8% |   -38 | 100.0% | 116 → 78 | `minimal` | `debug.py` |

##### `accept.<locals>.test_dictionary` (`test_shrink_quality.py`)

| Change | Delta |      % |  Samples | Callee                                 | Location   |
| -----: | ----: | -----: | -------: | -------------------------------------- | ---------- |
| -32.8% |   -38 | 100.0% | 116 → 78 | `flaky.<locals>.accept.<locals>.inner` | `utils.py` |

##### `flaky.<locals>.accept.<locals>.inner` (`utils.py`)

| Change | Delta |             % |  Samples | Callee                                      | Location                 |
| -----: | ----: | ------------: | -------: | ------------------------------------------- | ------------------------ |
| -32.8% |   -38 | 76.3% → 60.5% | 116 → 78 | `test_dictionary`                           | `test_shrink_quality.py` |
| +41.7% |   +15 | 23.7% → 39.5% |  36 → 51 | `test_can_ignore_left_hand_side_of_flatmap` | `test_shrink_quality.py` |

##### `Integer.short_circuit` (`integer.py`)

| Change | Delta |             % |   Samples | Callee              | Location    |
| -----: | ----: | ------------: | --------: | ------------------- | ----------- |
| -12.8% |   -15 | 42.9% → 39.4% | 117 → 102 | `Shrinker.consider` | `common.py` |

##### `format_exception` (`traceback.py`)

| Change | Delta |             % | Samples | Callee                        | Location       |
| -----: | ----: | ------------: | ------: | ----------------------------- | -------------- |
|  -6.1% |    -4 | 73.3% → 81.6% | 66 → 62 | `TracebackException.format`   | `traceback.py` |
| -50.0% |    -1 |   2.2% → 1.3% |   2 → 1 | `TracebackException.__init__` | `traceback.py` |
|    new |    +1 |   0.0% → 1.3% |   0 → 1 | `FrameSummary.__init__`       | `traceback.py` |

##### `test_lists_forced_near_top` (`test_shrink_quality.py`)

| Change | Delta |      % | Samples | Callee    | Location   |
| -----: | ----: | -----: | ------: | --------- | ---------- |
| -20.5% |    -9 | 100.0% | 44 → 35 | `minimal` | `debug.py` |

##### `format_exception` (`escalation.py`)

| Change | Delta |             % | Samples | Callee                  | Location       |
| -----: | ----: | ------------: | ------: | ----------------------- | -------------- |
| -16.4% |   -12 | 73.0% → 66.3% | 73 → 61 | `format_exception`      | `traceback.py` |
|  -4.2% |    -1 | 24.0% → 25.0% | 24 → 23 | `Function.repr_failure` | `python.py`    |

##### `get_seeder_and_restorer.<locals>.restore_all` (`entropy.py`)

|  Change | Delta |           % | Samples | Callee            | Location    |
| ------: | ----: | ----------: | ------: | ----------------- | ----------- |
| removed |    -1 | 6.7% → 0.0% |   1 → 0 | `Random.setstate` | `random.py` |

##### `_GeneratorContextManager.__exit__` (`contextlib.py`)

| Change | Delta |             % | Samples | Callee                  | Location         |
| -----: | ----: | ------------: | ------: | ----------------------- | ---------------- |
| -40.0% |    -6 | 62.5% → 56.3% |  15 → 9 | `deterministic_PRNG`    | `entropy.py`     |
|    new |    +1 |   0.0% → 6.3% |   0 → 1 | `TupleStrategy.do_draw` | `collections.py` |
|    new |    +1 |   0.0% → 6.3% |   0 → 1 | `(garbage collector)`   | `<unknown>`      |

##### `Shrinker.redistribute_numeric_pairs.<locals>.boost` (`shrinker.py`)

| Change | Delta |      % | Samples | Callee                        | Location      |
| -----: | ----: | -----: | ------: | ----------------------------- | ------------- |
| -14.9% |    -7 | 100.0% | 47 → 40 | `Shrinker.consider_new_nodes` | `shrinker.py` |

##### `Shrinker.redistribute_numeric_pairs` (`shrinker.py`)

| Change | Delta |      % | Samples | Callee         | Location        |
| -----: | ----: | -----: | ------: | -------------- | --------------- |
| -14.9% |    -7 | 100.0% | 47 → 40 | `find_integer` | `junkdrawer.py` |

##### `deterministic_PRNG` (`entropy.py`)

| Change | Delta |              % | Samples | Callee                                         | Location     |
| -----: | ----: | -------------: | ------: | ---------------------------------------------- | ------------ |
| -53.3% |    -8 | 100.0% → 77.8% |  15 → 7 | `get_seeder_and_restorer.<locals>.restore_all` | `entropy.py` |

##### `test_shrink_text_differs_from_upper_to_ascii` (`test_shrink_quality.py`)

| Change | Delta |      % | Samples | Callee    | Location   |
| -----: | ----: | -----: | ------: | --------- | ---------- |
| -57.1% |    -4 | 100.0% |   7 → 3 | `minimal` | `debug.py` |

##### `TracebackException.format` (`traceback.py`)

|  Change | Delta |             % | Samples | Callee                        | Location       |
| ------: | ----: | ------------: | ------: | ----------------------------- | -------------- |
|   +9.4% |    +5 | 80.3% → 93.5% | 53 → 58 | `StackSummary.format`         | `traceback.py` |
| removed |    -1 |   1.5% → 0.0% |   1 → 0 | `__init__`                    | `__init__`     |
|     new |    +1 |   0.0% → 1.6% |   0 → 1 | `_ExceptionPrintContext.emit` | `traceback.py` |

##### `test_minimize_duplicated_characters_within_a_choice` (`test_shrink_quality.py`)

| Change | Delta |      % | Samples | Callee    | Location   |
| -----: | ----: | -----: | ------: | --------- | ---------- |
| -36.4% |    -4 | 100.0% |  11 → 7 | `minimal` | `debug.py` |

##### `FrameSummary.line` (`traceback.py`)

| Change | Delta |             % | Samples | Callee                    | Location       |
| -----: | ----: | ------------: | ------: | ------------------------- | -------------- |
| -50.0% |    -4 | 23.5% → 13.3% |   8 → 4 | `FrameSummary._set_lines` | `traceback.py` |

##### `FrameSummary._set_lines` (`traceback.py`)

|  Change | Delta |            % | Samples | Callee    | Location             |
| ------: | ----: | -----------: | ------: | --------- | -------------------- |
| removed |    -1 | 12.5% → 0.0% |   1 → 0 | `getline` | `<frozen linecache>` |

##### `test_minimize_list_of_fairly_non_unique_ints` (`test_shrink_quality.py`)

| Change | Delta |      % | Samples | Callee    | Location   |
| -----: | ----: | -----: | ------: | --------- | ---------- |
| -80.0% |    -4 | 100.0% |   5 → 1 | `minimal` | `debug.py` |

##### `test_containment` (`test_shrink_quality.py`)

| Change | Delta |      % | Samples | Callee    | Location   |
| -----: | ----: | -----: | ------: | --------- | ---------- |
|  -4.4% |    -3 | 100.0% | 68 → 65 | `minimal` | `debug.py` |

##### `SpanProperty.__pop` (`data.py`)

|  Change | Delta |              % | Samples | Callee                       | Location        |
| ------: | ----: | -------------: | ------: | ---------------------------- | --------------- |
|  -50.0% |    -2 | 80.0% → 100.0% |   4 → 2 | `_starts_and_ends.stop_span` | `data.py`       |
| removed |    -1 |   20.0% → 0.0% |   1 → 0 | `IntList.__setitem__`        | `junkdrawer.py` |
