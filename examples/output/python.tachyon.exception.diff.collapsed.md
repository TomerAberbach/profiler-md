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
