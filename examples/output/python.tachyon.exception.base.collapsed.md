# Sampling profile

Collected 1,434 samples.

| Category          |     % | Samples |
| ----------------- | ----: | ------: |
| Ours              | 86.2% |   1,236 |
| Garbage collector | 10.9% |     156 |
| Standard library  |  2.9% |      42 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|     % | Samples | Function                                                | Location             |
| ----: | ------: | ------------------------------------------------------- | -------------------- |
| 58.3% |     836 | `_get_code_position`                                    | `traceback.py`       |
| 10.9% |     156 | `(garbage collector)`                                   | `<unknown>`          |
|  5.6% |      80 | `StackSummary._extract_from_extended_frame_gen`         | `traceback.py`       |
|  2.4% |      34 | `checkcache`                                            | `<frozen linecache>` |
|  1.8% |      26 | `FrameSummary.line`                                     | `traceback.py`       |
|  1.5% |      22 | `format_exception`                                      | `traceback.py`       |
|  1.4% |      20 | `get_trimmed_traceback`                                 | `escalation.py`      |
|  1.2% |      17 | `extract_tb`                                            | `traceback.py`       |
|  1.1% |      16 | `parse`                                                 | `ast.py`             |
|  1.1% |      16 | `getsourcefile`                                         | `inspect.py`         |
|  1.0% |      14 | `get_seeder_and_restorer.<locals>.restore_all`          | `entropy.py`         |
|  0.9% |      13 | `StateForActualGivenExecution._execute_once_for_engine` | `core.py`            |
|  0.8% |      12 | `_walk_tb_with_full_positions`                          | `traceback.py`       |
|  0.8% |      12 | `TracebackException.format`                             | `traceback.py`       |
|  0.7% |      10 | `StackSummary.format_frame_summary`                     | `traceback.py`       |
|  0.6% |       9 | `_GeneratorContextManager.__exit__`                     | `contextlib.py`      |
|  0.5% |       7 | `StackSummary.format`                                   | `traceback.py`       |
|  0.5% |       7 | `FrameSummary._set_lines`                               | `traceback.py`       |
|  0.5% |       7 | `lazycache`                                             | `<frozen linecache>` |
|  0.4% |       6 | `IntList._array_or_list`                                | `junkdrawer.py`      |

#### Categories

##### Ours

|     % | Samples | Function                                                | Location        |
| ----: | ------: | ------------------------------------------------------- | --------------- |
| 58.3% |     836 | `_get_code_position`                                    | `traceback.py`  |
|  5.6% |      80 | `StackSummary._extract_from_extended_frame_gen`         | `traceback.py`  |
|  1.8% |      26 | `FrameSummary.line`                                     | `traceback.py`  |
|  1.5% |      22 | `format_exception`                                      | `traceback.py`  |
|  1.4% |      20 | `get_trimmed_traceback`                                 | `escalation.py` |
|  1.2% |      17 | `extract_tb`                                            | `traceback.py`  |
|  1.1% |      16 | `parse`                                                 | `ast.py`        |
|  1.1% |      16 | `getsourcefile`                                         | `inspect.py`    |
|  1.0% |      14 | `get_seeder_and_restorer.<locals>.restore_all`          | `entropy.py`    |
|  0.9% |      13 | `StateForActualGivenExecution._execute_once_for_engine` | `core.py`       |
|  0.8% |      12 | `_walk_tb_with_full_positions`                          | `traceback.py`  |
|  0.8% |      12 | `TracebackException.format`                             | `traceback.py`  |
|  0.7% |      10 | `StackSummary.format_frame_summary`                     | `traceback.py`  |
|  0.6% |       9 | `_GeneratorContextManager.__exit__`                     | `contextlib.py` |
|  0.5% |       7 | `StackSummary.format`                                   | `traceback.py`  |
|  0.5% |       7 | `FrameSummary._set_lines`                               | `traceback.py`  |
|  0.4% |       6 | `IntList._array_or_list`                                | `junkdrawer.py` |
|  0.4% |       6 | `ConjectureData.mark_interesting`                       | `data.py`       |
|  0.4% |       6 | `_generate_tokens_from_c_tokenizer`                     | `tokenize.py`   |
|  0.4% |       6 | `getblock`                                              | `inspect.py`    |

##### Garbage collector

|     % | Samples | Function              | Location    |
| ----: | ------: | --------------------- | ----------- |
| 10.9% |     156 | `(garbage collector)` | `<unknown>` |

##### Standard library

|    % | Samples | Function     | Location             |
| ---: | ------: | ------------ | -------------------- |
| 2.4% |      34 | `checkcache` | `<frozen linecache>` |
| 0.5% |       7 | `lazycache`  | `<frozen linecache>` |
| 0.1% |       1 | `getline`    | `<frozen linecache>` |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `_get_code_position` (`traceback.py`)

|     % | Samples | Location           |
| ----: | ------: | ------------------ |
| 99.8% |     834 | `traceback.py:475` |
|  0.2% |       2 | `traceback.py:474` |

##### `StackSummary._extract_from_extended_frame_gen` (`traceback.py`)

|     % | Samples | Location           |
| ----: | ------: | ------------------ |
| 68.8% |      55 | `traceback.py:529` |
| 17.5% |      14 | `traceback.py:548` |
|  7.5% |       6 | `traceback.py:553` |
|  5.0% |       4 | `traceback.py:541` |
|  1.3% |       1 | `traceback.py:534` |

##### `checkcache` (`<frozen linecache>`)

|     % | Samples | Location                |
| ----: | ------: | ----------------------- |
| 82.4% |      28 | `<frozen linecache>:98` |
|  8.8% |       3 | `<frozen linecache>:84` |
|  2.9% |       1 | `<frozen linecache>:85` |
|  2.9% |       1 | `<frozen linecache>:86` |
|  2.9% |       1 | `<frozen linecache>:94` |

##### `FrameSummary.line` (`traceback.py`)

|     % | Samples | Location           |
| ----: | ------: | ------------------ |
| 92.3% |      24 | `traceback.py:422` |
|  3.8% |       1 | `traceback.py:426` |
|  3.8% |       1 | `traceback.py:420` |

##### `format_exception` (`traceback.py`)

|     % | Samples | Location           |
| ----: | ------: | ------------------ |
| 86.4% |      19 | `traceback.py:200` |
| 13.6% |       3 | `traceback.py:201` |

##### `get_trimmed_traceback` (`escalation.py`)

|     % | Samples | Location           |
| ----: | ------: | ------------------ |
| 40.0% |       8 | `escalation.py:76` |
| 30.0% |       6 | `escalation.py:85` |
| 20.0% |       4 | `escalation.py:78` |
| 10.0% |       2 | `escalation.py:75` |

##### `extract_tb` (`traceback.py`)

|     % | Samples | Location           |
| ----: | ------: | ------------------ |
| 94.1% |      16 | `traceback.py:123` |
|  5.9% |       1 | `traceback.py:124` |

##### `parse` (`ast.py`)

|      % | Samples | Location    |
| -----: | ------: | ----------- |
| 100.0% |      16 | `ast.py:46` |

##### `getsourcefile` (`inspect.py`)

|     % | Samples | Location         |
| ----: | ------: | ---------------- |
| 56.3% |       9 | `inspect.py:895` |
| 18.8% |       3 | `inspect.py:892` |
| 12.5% |       2 | `inspect.py:890` |
|  6.3% |       1 | `inspect.py:904` |
|  6.3% |       1 | `inspect.py:903` |

##### `get_seeder_and_restorer.<locals>.restore_all` (`entropy.py`)

|     % | Samples | Location         |
| ----: | ------: | ---------------- |
| 71.4% |      10 | `entropy.py:236` |
| 21.4% |       3 | `entropy.py:238` |
|  7.1% |       1 | `entropy.py:235` |

##### `StateForActualGivenExecution._execute_once_for_engine` (`core.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 23.1% |       3 | `core.py:1284` |
| 15.4% |       2 | `core.py:1264` |
| 15.4% |       2 | `core.py:1311` |
|  7.7% |       1 | `core.py:1257` |
|  7.7% |       1 | `core.py:1322` |

##### `_walk_tb_with_full_positions` (`traceback.py`)

|      % | Samples | Location           |
| -----: | ------: | ------------------ |
| 100.0% |      12 | `traceback.py:461` |

##### `TracebackException.format` (`traceback.py`)

|     % | Samples | Location            |
| ----: | ------: | ------------------- |
| 66.7% |       8 | `traceback.py:1656` |
| 25.0% |       3 | `traceback.py:1614` |
|  8.3% |       1 | `traceback.py:1628` |

##### `StackSummary.format_frame_summary` (`traceback.py`)

|     % | Samples | Location           |
| ----: | ------: | ------------------ |
| 50.0% |       5 | `traceback.py:603` |
| 30.0% |       3 | `traceback.py:644` |
| 10.0% |       1 | `traceback.py:633` |
| 10.0% |       1 | `traceback.py:589` |

##### `_GeneratorContextManager.__exit__` (`contextlib.py`)

|     % | Samples | Location            |
| ----: | ------: | ------------------- |
| 55.6% |       5 | `contextlib.py:257` |
| 44.4% |       4 | `contextlib.py:224` |

##### `StackSummary.format` (`traceback.py`)

|      % | Samples | Location           |
| -----: | ------: | ------------------ |
| 100.0% |       7 | `traceback.py:811` |

##### `FrameSummary._set_lines` (`traceback.py`)

|     % | Samples | Location           |
| ----: | ------: | ------------------ |
| 42.9% |       3 | `traceback.py:398` |
| 28.6% |       2 | `traceback.py:400` |
| 14.3% |       1 | `traceback.py:403` |
| 14.3% |       1 | `traceback.py:394` |

##### `lazycache` (`<frozen linecache>`)

|     % | Samples | Location                 |
| ----: | ------: | ------------------------ |
| 42.9% |       3 | `<frozen linecache>:215` |
| 42.9% |       3 | `<frozen linecache>:213` |
| 14.3% |       1 | `<frozen linecache>:214` |

##### `IntList._array_or_list` (`junkdrawer.py`)

|      % | Samples | Location            |
| -----: | ------: | ------------------- |
| 100.0% |       6 | `junkdrawer.py:123` |

##### `ConjectureData.mark_interesting` (`data.py`)

|      % | Samples | Location       |
| -----: | ------: | -------------- |
| 100.0% |       6 | `data.py:1456` |

##### `_generate_tokens_from_c_tokenizer` (`tokenize.py`)

|     % | Samples | Location          |
| ----: | ------: | ----------------- |
| 50.0% |       3 | `tokenize.py:635` |
| 50.0% |       3 | `tokenize.py:634` |

##### `getblock` (`inspect.py`)

|     % | Samples | Location          |
| ----: | ------: | ----------------- |
| 50.0% |       3 | `inspect.py:1149` |
| 33.3% |       2 | `inspect.py:1148` |
| 16.7% |       1 | `inspect.py:1147` |

##### `getline` (`<frozen linecache>`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |       1 | `<frozen linecache>:28` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `_get_code_position` (`traceback.py`)

|      % | Samples | Caller                         | Location       |
| -----: | ------: | ------------------------------ | -------------- |
| 100.0% |     836 | `_walk_tb_with_full_positions` | `traceback.py` |

##### `(garbage collector)` (`<unknown>`)

|     % | Samples | Caller                                               | Location        |
| ----: | ------: | ---------------------------------------------------- | --------------- |
| 80.8% |     126 | `recursive_property.<locals>.forced_or_cached_value` | `strategies.py` |
|  9.6% |      15 | `SpanRecord.start_span`                              | `data.py`       |
|  3.2% |       5 | `StackSummary.format_frame_summary`                  | `traceback.py`  |
|  1.9% |       3 | `getsource`                                          | `inspect.py`    |
|  1.3% |       2 | `dedent`                                             | `textwrap.py`   |

##### `StackSummary._extract_from_extended_frame_gen` (`traceback.py`)

|      % | Samples | Caller       | Location       |
| -----: | ------: | ------------ | -------------- |
| 100.0% |      80 | `extract_tb` | `traceback.py` |

##### `checkcache` (`<frozen linecache>`)

|      % | Samples | Caller                                          | Location       |
| -----: | ------: | ----------------------------------------------- | -------------- |
| 100.0% |      34 | `StackSummary._extract_from_extended_frame_gen` | `traceback.py` |

##### `FrameSummary.line` (`traceback.py`)

|      % | Samples | Caller                                          | Location       |
| -----: | ------: | ----------------------------------------------- | -------------- |
| 100.0% |      26 | `StackSummary._extract_from_extended_frame_gen` | `traceback.py` |

##### `format_exception` (`traceback.py`)

|     % | Samples | Caller                  | Location        |
| ----: | ------: | ----------------------- | --------------- |
| 72.7% |      16 | `format_exception`      | `escalation.py` |
| 27.3% |       6 | `ExceptionInfo.getrepr` | `code.py`       |

##### `get_trimmed_traceback` (`escalation.py`)

|     % | Samples | Caller                                                  | Location        |
| ----: | ------: | ------------------------------------------------------- | --------------- |
| 75.0% |      15 | `StateForActualGivenExecution._execute_once_for_engine` | `core.py`       |
| 25.0% |       5 | `InterestingOrigin.from_exception`                      | `escalation.py` |

##### `extract_tb` (`traceback.py`)

|     % | Samples | Caller                                                  | Location        |
| ----: | ------: | ------------------------------------------------------- | --------------- |
| 64.7% |      11 | `StateForActualGivenExecution._execute_once_for_engine` | `core.py`       |
| 17.6% |       3 | `get_trimmed_traceback`                                 | `escalation.py` |
| 17.6% |       3 | `InterestingOrigin.from_exception`                      | `escalation.py` |

##### `parse` (`ast.py`)

|     % | Samples | Caller                                     | Location        |
| ----: | ------: | ------------------------------------------ | --------------- |
| 75.0% |      12 | `_extract_caret_anchors_from_line_segment` | `traceback.py`  |
| 12.5% |       2 | `StackSummary._should_show_carets`         | `traceback.py`  |
| 12.5% |       2 | `_clean_source`                            | `reflection.py` |

##### `getsourcefile` (`inspect.py`)

|      % | Samples | Caller                  | Location        |
| -----: | ------: | ----------------------- | --------------- |
| 100.0% |      16 | `get_trimmed_traceback` | `escalation.py` |

##### `get_seeder_and_restorer.<locals>.restore_all` (`entropy.py`)

|      % | Samples | Caller               | Location     |
| -----: | ------: | -------------------- | ------------ |
| 100.0% |      14 | `deterministic_PRNG` | `entropy.py` |

##### `StateForActualGivenExecution._execute_once_for_engine` (`core.py`)

|      % | Samples | Caller                                       | Location    |
| -----: | ------: | -------------------------------------------- | ----------- |
| 100.0% |      13 | `ConjectureRunner.__stoppable_test_function` | `engine.py` |

##### `_walk_tb_with_full_positions` (`traceback.py`)

|      % | Samples | Caller                                          | Location       |
| -----: | ------: | ----------------------------------------------- | -------------- |
| 100.0% |      12 | `StackSummary._extract_from_extended_frame_gen` | `traceback.py` |

##### `TracebackException.format` (`traceback.py`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |      12 | `format_exception` | `traceback.py` |

##### `StackSummary.format_frame_summary` (`traceback.py`)

|      % | Samples | Caller                | Location       |
| -----: | ------: | --------------------- | -------------- |
| 100.0% |      10 | `StackSummary.format` | `traceback.py` |

##### `_GeneratorContextManager.__exit__` (`contextlib.py`)

|      % | Samples | Caller                                      | Location  |
| -----: | ------: | ------------------------------------------- | --------- |
| 100.0% |       9 | `StateForActualGivenExecution.execute_once` | `core.py` |

##### `StackSummary.format` (`traceback.py`)

|      % | Samples | Caller                      | Location       |
| -----: | ------: | --------------------------- | -------------- |
| 100.0% |       7 | `TracebackException.format` | `traceback.py` |

##### `FrameSummary._set_lines` (`traceback.py`)

|      % | Samples | Caller              | Location       |
| -----: | ------: | ------------------- | -------------- |
| 100.0% |       7 | `FrameSummary.line` | `traceback.py` |

##### `lazycache` (`<frozen linecache>`)

|      % | Samples | Caller                                          | Location       |
| -----: | ------: | ----------------------------------------------- | -------------- |
| 100.0% |       7 | `StackSummary._extract_from_extended_frame_gen` | `traceback.py` |

##### `IntList._array_or_list` (`junkdrawer.py`)

|      % | Samples | Caller              | Location        |
| -----: | ------: | ------------------- | --------------- |
| 100.0% |       6 | `IntList.__upgrade` | `junkdrawer.py` |

##### `ConjectureData.mark_interesting` (`data.py`)

|      % | Samples | Caller                                                  | Location  |
| -----: | ------: | ------------------------------------------------------- | --------- |
| 100.0% |       6 | `StateForActualGivenExecution._execute_once_for_engine` | `core.py` |

##### `_generate_tokens_from_c_tokenizer` (`tokenize.py`)

|     % | Samples | Caller                             | Location        |
| ----: | ------: | ---------------------------------- | --------------- |
| 50.0% |       3 | `getblock`                         | `inspect.py`    |
| 50.0% |       3 | `_clean_source.<locals>.<genexpr>` | `reflection.py` |

##### `getblock` (`inspect.py`)

|      % | Samples | Caller           | Location     |
| -----: | ------: | ---------------- | ------------ |
| 100.0% |       6 | `getsourcelines` | `inspect.py` |

##### `getline` (`<frozen linecache>`)

|      % | Samples | Caller                    | Location       |
| -----: | ------: | ------------------------- | -------------- |
| 100.0% |       1 | `FrameSummary._set_lines` | `traceback.py` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|      % | Samples | Function                                                 | Location         |
| -----: | ------: | -------------------------------------------------------- | ---------------- |
| 100.0% |   1,434 | `_run_code`                                              | `<frozen runpy>` |
| 100.0% |   1,434 | `run_module`                                             | `<frozen runpy>` |
| 100.0% |   1,434 | `_run_module_as_main`                                    | `<frozen runpy>` |
|  99.9% |   1,433 | `given.<locals>.run_test_as_given.<locals>.wrapped_test` | `core.py`        |
|  99.9% |   1,433 | `pytest_pyfunc_call`                                     | `python.py`      |
|  99.9% |   1,433 | `_multicall`                                             | `_callers.py`    |
|  99.9% |   1,433 | `PluginManager._hookexec`                                | `_manager.py`    |
|  99.9% |   1,433 | `HookCaller.__call__`                                    | `_hooks.py`      |
|  99.9% |   1,433 | `Function.runtest`                                       | `python.py`      |
|  99.9% |   1,433 | `pytest_runtest_call`                                    | `runner.py`      |
|  99.9% |   1,433 | `call_and_report.<locals>.<lambda>`                      | `runner.py`      |
|  99.9% |   1,433 | `CallInfo.from_call`                                     | `runner.py`      |
|  99.9% |   1,433 | `call_and_report`                                        | `runner.py`      |
|  99.9% |   1,433 | `runtestprotocol`                                        | `runner.py`      |
|  99.9% |   1,433 | `pytest_runtest_protocol`                                | `runner.py`      |
|  99.9% |   1,433 | `pytest_runtestloop`                                     | `main.py`        |
|  99.9% |   1,433 | `_main`                                                  | `main.py`        |
|  99.9% |   1,433 | `wrap_session`                                           | `main.py`        |
|  99.9% |   1,433 | `pytest_cmdline_main`                                    | `main.py`        |
|  99.9% |   1,433 | `_main`                                                  | `__init__.py`    |

#### Categories

##### Ours

|     % | Samples | Function                                                 | Location      |
| ----: | ------: | -------------------------------------------------------- | ------------- |
| 99.9% |   1,433 | `given.<locals>.run_test_as_given.<locals>.wrapped_test` | `core.py`     |
| 99.9% |   1,433 | `pytest_pyfunc_call`                                     | `python.py`   |
| 99.9% |   1,433 | `_multicall`                                             | `_callers.py` |
| 99.9% |   1,433 | `PluginManager._hookexec`                                | `_manager.py` |
| 99.9% |   1,433 | `HookCaller.__call__`                                    | `_hooks.py`   |
| 99.9% |   1,433 | `Function.runtest`                                       | `python.py`   |
| 99.9% |   1,433 | `pytest_runtest_call`                                    | `runner.py`   |
| 99.9% |   1,433 | `call_and_report.<locals>.<lambda>`                      | `runner.py`   |
| 99.9% |   1,433 | `CallInfo.from_call`                                     | `runner.py`   |
| 99.9% |   1,433 | `call_and_report`                                        | `runner.py`   |
| 99.9% |   1,433 | `runtestprotocol`                                        | `runner.py`   |
| 99.9% |   1,433 | `pytest_runtest_protocol`                                | `runner.py`   |
| 99.9% |   1,433 | `pytest_runtestloop`                                     | `main.py`     |
| 99.9% |   1,433 | `_main`                                                  | `main.py`     |
| 99.9% |   1,433 | `wrap_session`                                           | `main.py`     |
| 99.9% |   1,433 | `pytest_cmdline_main`                                    | `main.py`     |
| 99.9% |   1,433 | `_main`                                                  | `__init__.py` |
| 99.9% |   1,433 | `_console_main`                                          | `__init__.py` |
| 99.9% |   1,433 | `<module>`                                               | `__main__.py` |
| 99.8% |   1,431 | `accept.<locals>.inner`                                  | `debug.py`    |

##### Garbage collector

|     % | Samples | Function              | Location    |
| ----: | ------: | --------------------- | ----------- |
| 10.9% |     156 | `(garbage collector)` | `<unknown>` |

##### Standard library

|      % | Samples | Function                    | Location                                 |
| -----: | ------: | --------------------------- | ---------------------------------------- |
| 100.0% |   1,434 | `_run_code`                 | `<frozen runpy>`                         |
| 100.0% |   1,434 | `run_module`                | `<frozen runpy>`                         |
| 100.0% |   1,434 | `_run_module_as_main`       | `<frozen runpy>`                         |
|  99.9% |   1,433 | `_run_module_code`          | `<frozen runpy>`                         |
|   2.4% |      34 | `checkcache`                | `<frozen linecache>`                     |
|   0.5% |       7 | `lazycache`                 | `<frozen linecache>`                     |
|   0.1% |       1 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>`          |
|   0.1% |       1 | `_LoaderBasics.exec_module` | `<frozen importlib._bootstrap_external>` |
|   0.1% |       1 | `_load_unlocked`            | `<frozen importlib._bootstrap>`          |
|   0.1% |       1 | `_find_and_load_unlocked`   | `<frozen importlib._bootstrap>`          |
|   0.1% |       1 | `_find_and_load`            | `<frozen importlib._bootstrap>`          |
|   0.1% |       1 | `_get_module_details`       | `<frozen runpy>`                         |
|   0.1% |       1 | `getline`                   | `<frozen linecache>`                     |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `_run_code` (`<frozen runpy>`)

|      % | Samples | Callee       | Location         |
| -----: | ------: | ------------ | ---------------- |
| 100.0% |   1,434 | `run_module` | `<frozen runpy>` |
|  99.9% |   1,433 | `<module>`   | `__main__.py`    |

##### `run_module` (`<frozen runpy>`)

|     % | Samples | Callee                | Location         |
| ----: | ------: | --------------------- | ---------------- |
| 99.9% |   1,433 | `_run_module_code`    | `<frozen runpy>` |
|  0.1% |       1 | `_get_module_details` | `<frozen runpy>` |

##### `_run_module_as_main` (`<frozen runpy>`)

|      % | Samples | Callee      | Location         |
| -----: | ------: | ----------- | ---------------- |
| 100.0% |   1,434 | `_run_code` | `<frozen runpy>` |

##### `given.<locals>.run_test_as_given.<locals>.wrapped_test` (`core.py`)

|     % | Samples | Callee                                    | Location        |
| ----: | ------: | ----------------------------------------- | --------------- |
| 97.0% |   1,390 | `StateForActualGivenExecution.run_engine` | `core.py`       |
|  4.7% |      68 | `get_trimmed_traceback`                   | `escalation.py` |
|  0.1% |       1 | `get_random_for_wrapped_test`             | `core.py`       |

##### `pytest_pyfunc_call` (`python.py`)

|     % | Samples | Callee                                                                     | Location                 |
| ----: | ------: | -------------------------------------------------------------------------- | ------------------------ |
| 12.7% |     182 | `test_find_large_union_list`                                               | `test_shrink_quality.py` |
|  8.9% |     128 | `test_minimize_sets_of_sets`                                               | `test_shrink_quality.py` |
|  8.1% |     116 | `accept.<locals>.test_dictionary`                                          | `test_shrink_quality.py` |
|  7.4% |     106 | `test_minimize_one_of`                                                     | `test_shrink_quality.py` |
|  7.3% |     104 | `test_minimize_multiple_elements_in_silly_large_int_range_min_is_not_dupe` | `test_shrink_quality.py` |

##### `_multicall` (`_callers.py`)

|      % | Samples | Callee                    | Location    |
| -----: | ------: | ------------------------- | ----------- |
| 100.0% |   1,433 | `pytest_pyfunc_call`      | `python.py` |
| 100.0% |   1,433 | `pytest_runtest_call`     | `runner.py` |
| 100.0% |   1,433 | `pytest_runtest_protocol` | `runner.py` |
| 100.0% |   1,433 | `pytest_runtestloop`      | `main.py`   |
| 100.0% |   1,433 | `pytest_cmdline_main`     | `main.py`   |

##### `PluginManager._hookexec` (`_manager.py`)

|      % | Samples | Callee       | Location      |
| -----: | ------: | ------------ | ------------- |
| 100.0% |   1,433 | `_multicall` | `_callers.py` |

##### `HookCaller.__call__` (`_hooks.py`)

|      % | Samples | Callee                    | Location      |
| -----: | ------: | ------------------------- | ------------- |
| 100.0% |   1,433 | `PluginManager._hookexec` | `_manager.py` |

##### `Function.runtest` (`python.py`)

|      % | Samples | Callee                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |   1,433 | `HookCaller.__call__` | `_hooks.py` |

##### `pytest_runtest_call` (`runner.py`)

|      % | Samples | Callee             | Location    |
| -----: | ------: | ------------------ | ----------- |
| 100.0% |   1,433 | `Function.runtest` | `python.py` |

##### `call_and_report.<locals>.<lambda>` (`runner.py`)

|      % | Samples | Callee                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |   1,433 | `HookCaller.__call__` | `_hooks.py` |

##### `CallInfo.from_call` (`runner.py`)

|      % | Samples | Callee                              | Location    |
| -----: | ------: | ----------------------------------- | ----------- |
| 100.0% |   1,433 | `call_and_report.<locals>.<lambda>` | `runner.py` |

##### `call_and_report` (`runner.py`)

|      % | Samples | Callee               | Location    |
| -----: | ------: | -------------------- | ----------- |
| 100.0% |   1,433 | `CallInfo.from_call` | `runner.py` |

##### `runtestprotocol` (`runner.py`)

|      % | Samples | Callee            | Location    |
| -----: | ------: | ----------------- | ----------- |
| 100.0% |   1,433 | `call_and_report` | `runner.py` |

##### `pytest_runtest_protocol` (`runner.py`)

|      % | Samples | Callee            | Location    |
| -----: | ------: | ----------------- | ----------- |
| 100.0% |   1,433 | `runtestprotocol` | `runner.py` |

##### `pytest_runtestloop` (`main.py`)

|      % | Samples | Callee                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |   1,433 | `HookCaller.__call__` | `_hooks.py` |

##### `_main` (`main.py`)

|      % | Samples | Callee                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |   1,433 | `HookCaller.__call__` | `_hooks.py` |

##### `wrap_session` (`main.py`)

|      % | Samples | Callee  | Location  |
| -----: | ------: | ------- | --------- |
| 100.0% |   1,433 | `_main` | `main.py` |

##### `pytest_cmdline_main` (`main.py`)

|      % | Samples | Callee         | Location  |
| -----: | ------: | -------------- | --------- |
| 100.0% |   1,433 | `wrap_session` | `main.py` |

##### `_main` (`__init__.py`)

|      % | Samples | Callee                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |   1,433 | `HookCaller.__call__` | `_hooks.py` |

##### `_console_main` (`__init__.py`)

|      % | Samples | Callee  | Location      |
| -----: | ------: | ------- | ------------- |
| 100.0% |   1,433 | `_main` | `__init__.py` |

##### `<module>` (`__main__.py`)

|      % | Samples | Callee          | Location      |
| -----: | ------: | --------------- | ------------- |
| 100.0% |   1,433 | `_console_main` | `__init__.py` |

##### `_run_module_code` (`<frozen runpy>`)

|      % | Samples | Callee      | Location         |
| -----: | ------: | ----------- | ---------------- |
| 100.0% |   1,433 | `_run_code` | `<frozen runpy>` |

##### `accept.<locals>.inner` (`debug.py`)

|      % | Samples | Callee                                                    | Location  |
| -----: | ------: | --------------------------------------------------------- | --------- |
| 100.0% |   1,431 | `given.<locals>.run_test_as_given.<locals>.wrapped_test`  | `core.py` |
|   0.1% |       2 | `StateForActualGivenExecution.execute_once.<locals>.test` | `core.py` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee     | Location        |
| -----: | ------: | ---------- | --------------- |
| 100.0% |       1 | `<module>` | `_pydecimal.py` |
| 100.0% |       1 | `<module>` | `decimal.py`    |
| 100.0% |       1 | `<module>` | `python_api.py` |
| 100.0% |       1 | `<module>` | `doctest.py`    |
| 100.0% |       1 | `<module>` | `__init__.py`   |

##### `_LoaderBasics.exec_module` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Callee                      | Location                        |
| -----: | ------: | --------------------------- | ------------------------------- |
| 100.0% |       1 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `_load_unlocked` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee                      | Location                                 |
| -----: | ------: | --------------------------- | ---------------------------------------- |
| 100.0% |       1 | `_LoaderBasics.exec_module` | `<frozen importlib._bootstrap_external>` |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee           | Location                        |
| -----: | ------: | ---------------- | ------------------------------- |
| 100.0% |       1 | `_load_unlocked` | `<frozen importlib._bootstrap>` |

##### `_find_and_load` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee                    | Location                        |
| -----: | ------: | ------------------------- | ------------------------------- |
| 100.0% |       1 | `_find_and_load_unlocked` | `<frozen importlib._bootstrap>` |

##### `_get_module_details` (`<frozen runpy>`)

|      % | Samples | Callee                | Location                        |
| -----: | ------: | --------------------- | ------------------------------- |
| 100.0% |       1 | `_find_and_load`      | `<frozen importlib._bootstrap>` |
| 100.0% |       1 | `_get_module_details` | `<frozen runpy>`                |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

Common call stack: `pytest_pyfunc_call` (`python.py`) ← `_multicall` (`_callers.py`) ← `PluginManager._hookexec` (`_manager.py`) ← `HookCaller.__call__` (`_hooks.py`) ← `Function.runtest` (`python.py`) ← `pytest_runtest_call` (`runner.py`) ← `_multicall` (`_callers.py`) ← `PluginManager._hookexec` (`_manager.py`) ← `HookCaller.__call__` (`_hooks.py`) ← `call_and_report.<locals>.<lambda>` (`runner.py`) ← `CallInfo.from_call` ← `call_and_report` ← `runtestprotocol` ← `pytest_runtest_protocol` ← `_multicall` (`_callers.py`) ← `PluginManager._hookexec` (`_manager.py`) ← `HookCaller.__call__` (`_hooks.py`) ← `pytest_runtestloop` (`main.py`) ← `_multicall` (`_callers.py`) ← `PluginManager._hookexec` (`_manager.py`) ← `HookCaller.__call__` (`_hooks.py`) ← `_main` (`main.py`) ← `wrap_session` ← `pytest_cmdline_main` ← `_multicall` (`_callers.py`) ← `PluginManager._hookexec` (`_manager.py`) ← `HookCaller.__call__` (`_hooks.py`) ← `_main` (`__init__.py`) ← `_console_main` ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code` ← `run_module` ← `_run_code` ← `_run_module_as_main`

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ---: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2.6% |      38 | `(garbage collector)` ← `recursive_property.<locals>.forced_or_cached_value` (`strategies.py`) ← `recursive_property` ← `SearchStrategy.is_empty` ← `ConjectureData.draw` (`data.py`) ← `ListStrategy.do_draw` (`collections.py`) ← `ConjectureData.draw` (`data.py`) ← `BuildContext.prep_args_kwargs_from_strategies` (`control.py`) ← `StateForActualGivenExecution.execute_once.<locals>.run` (`core.py`) ← `default_executor` ← `StateForActualGivenExecution.execute_once` ← `StateForActualGivenExecution._execute_once_for_engine` ← `ConjectureRunner.__stoppable_test_function` (`engine.py`) ← `ConjectureRunner.test_function` ← `ConjectureRunner.cached_test_function` ← `Shrinker.cached_test_function` (`shrinker.py`) ← `Shrinker.try_shrinking_nodes` ← `Shrinker.minimize_nodes.<locals>.<lambda>` ← `Shrinker.consider` (`common.py`) ← `Integer.mask_high_bits.<locals>.try_mask` (`integer.py`) ← `find_integer` (`junkdrawer.py`) ← `Integer.mask_high_bits` (`integer.py`) ← `Integer.short_circuit` ← `Shrinker.run` (`common.py`) ← `Shrinker.shrink` ← `Shrinker.minimize_nodes` (`shrinker.py`) ← `Shrinker.minimize_individual_choices` ← `Shrinker.step.<locals>.<lambda>` ← `ChoiceTree.step` (`choicetree.py`) ← `Shrinker.step` (`shrinker.py`) ← `Shrinker.fixate_shrink_passes` ← `Shrinker.greedy_shrink` ← `Shrinker.shrink` ← `ConjectureRunner.shrink` (`engine.py`) ← `ConjectureRunner.shrink_interesting_test_cases` ← `ConjectureRunner._run` ← `ConjectureRunner.run` ← `StateForActualGivenExecution.run_engine` (`core.py`) ← `given.<locals>.run_test_as_given.<locals>.wrapped_test` ← `accept.<locals>.inner` (`debug.py`) ← `minimal` ← `test_minimize_multiple_elements_in_silly_large_int_range_min_is_not_dupe` (`test_shrink_quality.py`) |
| 2.2% |      32 | `_get_code_position` (`traceback.py`) ← `_walk_tb_with_full_positions` ← `StackSummary._extract_from_extended_frame_gen` ← `extract_tb` ← `StateForActualGivenExecution._execute_once_for_engine` (`core.py`) ← `ConjectureRunner.__stoppable_test_function` (`engine.py`) ← `ConjectureRunner.test_function` ← `ConjectureRunner.cached_test_function` ← `Shrinker.cached_test_function` (`shrinker.py`) ← `Shrinker.try_trivial_spans` ← `Shrinker.step.<locals>.<lambda>` ← `ChoiceTree.step` (`choicetree.py`) ← `Shrinker.step` (`shrinker.py`) ← `Shrinker.fixate_shrink_passes` ← `Shrinker.greedy_shrink` ← `Shrinker.shrink` ← `ConjectureRunner.shrink` (`engine.py`) ← `ConjectureRunner.shrink_interesting_test_cases` ← `ConjectureRunner._run` ← `ConjectureRunner.run` ← `StateForActualGivenExecution.run_engine` (`core.py`) ← `given.<locals>.run_test_as_given.<locals>.wrapped_test` ← `accept.<locals>.inner` (`debug.py`) ← `minimal` ← `test_find_large_union_list` (`test_shrink_quality.py`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 1.8% |      26 | `_get_code_position` (`traceback.py`) ← `_walk_tb_with_full_positions` ← `StackSummary._extract_from_extended_frame_gen` ← `extract_tb` ← `get_trimmed_traceback` (`escalation.py`) ← `InterestingOrigin.from_exception` ← `StateForActualGivenExecution._execute_once_for_engine` (`core.py`) ← `ConjectureRunner.__stoppable_test_function` (`engine.py`) ← `ConjectureRunner.test_function` ← `ConjectureRunner.cached_test_function` ← `Shrinker.cached_test_function` (`shrinker.py`) ← `Shrinker.try_trivial_spans` ← `Shrinker.step.<locals>.<lambda>` ← `ChoiceTree.step` (`choicetree.py`) ← `Shrinker.step` (`shrinker.py`) ← `Shrinker.fixate_shrink_passes` ← `Shrinker.greedy_shrink` ← `Shrinker.shrink` ← `ConjectureRunner.shrink` (`engine.py`) ← `ConjectureRunner.shrink_interesting_test_cases` ← `ConjectureRunner._run` ← `ConjectureRunner.run` ← `StateForActualGivenExecution.run_engine` (`core.py`) ← `given.<locals>.run_test_as_given.<locals>.wrapped_test` ← `accept.<locals>.inner` (`debug.py`) ← `minimal` ← `test_find_large_union_list` (`test_shrink_quality.py`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 1.5% |      21 | `_get_code_position` (`traceback.py`) ← `_walk_tb_with_full_positions` ← `StackSummary._extract_from_extended_frame_gen` ← `extract_tb` ← `get_trimmed_traceback` (`escalation.py`) ← `given.<locals>.run_test_as_given.<locals>.wrapped_test` (`core.py`) ← `accept.<locals>.inner` (`debug.py`) ← `minimal` ← `test_minimize_one_of` (`test_shrink_quality.py`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 1.3% |      19 | `_get_code_position` (`traceback.py`) ← `_walk_tb_with_full_positions` ← `StackSummary._extract_from_extended_frame_gen` ← `extract_tb` ← `get_trimmed_traceback` (`escalation.py`) ← `StateForActualGivenExecution._execute_once_for_engine` (`core.py`) ← `ConjectureRunner.__stoppable_test_function` (`engine.py`) ← `ConjectureRunner.test_function` ← `ConjectureRunner.cached_test_function` ← `Shrinker.cached_test_function` (`shrinker.py`) ← `Shrinker.try_trivial_spans` ← `Shrinker.step.<locals>.<lambda>` ← `ChoiceTree.step` (`choicetree.py`) ← `Shrinker.step` (`shrinker.py`) ← `Shrinker.fixate_shrink_passes` ← `Shrinker.greedy_shrink` ← `Shrinker.shrink` ← `ConjectureRunner.shrink` (`engine.py`) ← `ConjectureRunner.shrink_interesting_test_cases` ← `ConjectureRunner._run` ← `ConjectureRunner.run` ← `StateForActualGivenExecution.run_engine` (`core.py`) ← `given.<locals>.run_test_as_given.<locals>.wrapped_test` ← `accept.<locals>.inner` (`debug.py`) ← `minimal` ← `test_find_large_union_list` (`test_shrink_quality.py`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 1.3% |      18 | `_get_code_position` (`traceback.py`) ← `_walk_tb_with_full_positions` ← `StackSummary._extract_from_extended_frame_gen` ← `extract_tb` ← `get_trimmed_traceback` (`escalation.py`) ← `StateForActualGivenExecution.run_engine` (`core.py`) ← `given.<locals>.run_test_as_given.<locals>.wrapped_test` ← `accept.<locals>.inner` (`debug.py`) ← `minimal` ← `test_minimize_one_of` (`test_shrink_quality.py`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 1.1% |      16 | `_get_code_position` (`traceback.py`) ← `_walk_tb_with_full_positions` ← `StackSummary._extract_from_extended_frame_gen` ← `extract_tb` ← `get_trimmed_traceback` (`escalation.py`) ← `StateForActualGivenExecution._execute_once_for_engine` (`core.py`) ← `ConjectureRunner.__stoppable_test_function` (`engine.py`) ← `ConjectureRunner.test_function` ← `ConjectureRunner.cached_test_function` ← `Shrinker.cached_test_function` (`shrinker.py`) ← `Shrinker.try_trivial_spans` ← `Shrinker.step.<locals>.<lambda>` ← `ChoiceTree.step` (`choicetree.py`) ← `Shrinker.step` (`shrinker.py`) ← `Shrinker.fixate_shrink_passes` ← `Shrinker.greedy_shrink` ← `Shrinker.shrink` ← `ConjectureRunner.shrink` (`engine.py`) ← `ConjectureRunner.shrink_interesting_test_cases` ← `ConjectureRunner._run` ← `ConjectureRunner.run` ← `StateForActualGivenExecution.run_engine` (`core.py`) ← `given.<locals>.run_test_as_given.<locals>.wrapped_test` ← `accept.<locals>.inner` (`debug.py`) ← `minimal` ← `test_minimize_sets_of_sets` (`test_shrink_quality.py`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 1.0% |      15 | `(garbage collector)` ← `recursive_property.<locals>.forced_or_cached_value` (`strategies.py`) ← `recursive_property` ← `SearchStrategy.is_empty` ← `ConjectureData.draw` (`data.py`) ← `FilteredStrategy.do_filtered_draw` (`strategies.py`) ← `UniqueListStrategy.do_draw` (`collections.py`) ← `ConjectureData.draw` (`data.py`) ← `MappedStrategy.do_draw` (`strategies.py`) ← `ConjectureData.draw` (`data.py`) ← `ListStrategy.do_draw` (`collections.py`) ← `ConjectureData.draw` (`data.py`) ← `BuildContext.prep_args_kwargs_from_strategies` (`control.py`) ← `StateForActualGivenExecution.execute_once.<locals>.run` (`core.py`) ← `default_executor` ← `StateForActualGivenExecution.execute_once` ← `StateForActualGivenExecution._execute_once_for_engine` ← `ConjectureRunner.__stoppable_test_function` (`engine.py`) ← `ConjectureRunner.test_function` ← `ConjectureRunner.cached_test_function` ← `Shrinker.cached_test_function` (`shrinker.py`) ← `Shrinker.try_trivial_spans` ← `Shrinker.step.<locals>.<lambda>` ← `ChoiceTree.step` (`choicetree.py`) ← `Shrinker.step` (`shrinker.py`) ← `Shrinker.fixate_shrink_passes` ← `Shrinker.greedy_shrink` ← `Shrinker.shrink` ← `ConjectureRunner.shrink` (`engine.py`) ← `ConjectureRunner.shrink_interesting_test_cases` ← `ConjectureRunner._run` ← `ConjectureRunner.run` ← `StateForActualGivenExecution.run_engine` (`core.py`) ← `given.<locals>.run_test_as_given.<locals>.wrapped_test` ← `accept.<locals>.inner` (`debug.py`) ← `minimal` ← `test_find_large_union_list` (`test_shrink_quality.py`)                                                                                                                                                                                                               |
| 1.0% |      14 | `_get_code_position` (`traceback.py`) ← `_walk_tb_with_full_positions` ← `StackSummary._extract_from_extended_frame_gen` ← `extract_tb` ← `get_trimmed_traceback` (`escalation.py`) ← `InterestingOrigin.from_exception` ← `StateForActualGivenExecution._execute_once_for_engine` (`core.py`) ← `ConjectureRunner.__stoppable_test_function` (`engine.py`) ← `ConjectureRunner.test_function` ← `ConjectureRunner.cached_test_function` ← `Shrinker.cached_test_function` (`shrinker.py`) ← `Shrinker.try_trivial_spans` ← `Shrinker.step.<locals>.<lambda>` ← `ChoiceTree.step` (`choicetree.py`) ← `Shrinker.step` (`shrinker.py`) ← `Shrinker.fixate_shrink_passes` ← `Shrinker.greedy_shrink` ← `Shrinker.shrink` ← `ConjectureRunner.shrink` (`engine.py`) ← `ConjectureRunner.shrink_interesting_test_cases` ← `ConjectureRunner._run` ← `ConjectureRunner.run` ← `StateForActualGivenExecution.run_engine` (`core.py`) ← `given.<locals>.run_test_as_given.<locals>.wrapped_test` ← `accept.<locals>.inner` (`debug.py`) ← `minimal` ← `test_minimize_sets_of_sets` (`test_shrink_quality.py`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 1.0% |      14 | `_get_code_position` (`traceback.py`) ← `_walk_tb_with_full_positions` ← `StackSummary._extract_from_extended_frame_gen` ← `extract_tb` ← `get_trimmed_traceback` (`escalation.py`) ← `InterestingOrigin.from_exception` ← `StateForActualGivenExecution._execute_once_for_engine` (`core.py`) ← `ConjectureRunner.__stoppable_test_function` (`engine.py`) ← `ConjectureRunner.test_function` ← `ConjectureRunner.cached_test_function` ← `Shrinker.cached_test_function` (`shrinker.py`) ← `Shrinker.try_shrinking_nodes` ← `Shrinker.minimize_nodes.<locals>.<lambda>` ← `Shrinker.consider` (`common.py`) ← `Integer.mask_high_bits.<locals>.try_mask` (`integer.py`) ← `find_integer` (`junkdrawer.py`) ← `Integer.mask_high_bits` (`integer.py`) ← `Integer.short_circuit` ← `Shrinker.run` (`common.py`) ← `Shrinker.shrink` ← `Shrinker.minimize_nodes` (`shrinker.py`) ← `Shrinker.minimize_individual_choices` ← `Shrinker.step.<locals>.<lambda>` ← `ChoiceTree.step` (`choicetree.py`) ← `Shrinker.step` (`shrinker.py`) ← `Shrinker.fixate_shrink_passes` ← `Shrinker.greedy_shrink` ← `Shrinker.shrink` ← `ConjectureRunner.shrink` (`engine.py`) ← `ConjectureRunner.shrink_interesting_test_cases` ← `ConjectureRunner._run` ← `ConjectureRunner.run` ← `StateForActualGivenExecution.run_engine` (`core.py`) ← `given.<locals>.run_test_as_given.<locals>.wrapped_test` ← `accept.<locals>.inner` (`debug.py`) ← `minimal` ← `test_minimize_multiple_elements_in_silly_large_int_range_min_is_not_dupe` (`test_shrink_quality.py`)                                                                                                                                                                                                                                             |
| 0.9% |      13 | `_get_code_position` (`traceback.py`) ← `_walk_tb_with_full_positions` ← `StackSummary._extract_from_extended_frame_gen` ← `extract_tb` ← `StateForActualGivenExecution._execute_once_for_engine` (`core.py`) ← `ConjectureRunner.__stoppable_test_function` (`engine.py`) ← `ConjectureRunner.test_function` ← `ConjectureRunner.cached_test_function` ← `Shrinker.cached_test_function` (`shrinker.py`) ← `Shrinker.try_trivial_spans` ← `Shrinker.step.<locals>.<lambda>` ← `ChoiceTree.step` (`choicetree.py`) ← `Shrinker.step` (`shrinker.py`) ← `Shrinker.fixate_shrink_passes` ← `Shrinker.greedy_shrink` ← `Shrinker.shrink` ← `ConjectureRunner.shrink` (`engine.py`) ← `ConjectureRunner.shrink_interesting_test_cases` ← `ConjectureRunner._run` ← `ConjectureRunner.run` ← `StateForActualGivenExecution.run_engine` (`core.py`) ← `given.<locals>.run_test_as_given.<locals>.wrapped_test` ← `accept.<locals>.inner` (`debug.py`) ← `minimal` ← `test_minimize_list_of_lists` (`test_shrink_quality.py`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 0.8% |      12 | `_get_code_position` (`traceback.py`) ← `_walk_tb_with_full_positions` ← `StackSummary._extract_from_extended_frame_gen` ← `extract_tb` ← `get_trimmed_traceback` (`escalation.py`) ← `StateForActualGivenExecution._execute_once_for_engine` (`core.py`) ← `ConjectureRunner.__stoppable_test_function` (`engine.py`) ← `ConjectureRunner.test_function` ← `ConjectureRunner.cached_test_function` ← `Shrinker.cached_test_function` (`shrinker.py`) ← `Shrinker.try_trivial_spans` ← `Shrinker.step.<locals>.<lambda>` ← `ChoiceTree.step` (`choicetree.py`) ← `Shrinker.step` (`shrinker.py`) ← `Shrinker.fixate_shrink_passes` ← `Shrinker.greedy_shrink` ← `Shrinker.shrink` ← `ConjectureRunner.shrink` (`engine.py`) ← `ConjectureRunner.shrink_interesting_test_cases` ← `ConjectureRunner._run` ← `ConjectureRunner.run` ← `StateForActualGivenExecution.run_engine` (`core.py`) ← `given.<locals>.run_test_as_given.<locals>.wrapped_test` ← `accept.<locals>.inner` (`debug.py`) ← `minimal` ← `test_minimize_list_of_lists` (`test_shrink_quality.py`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 0.8% |      12 | `_get_code_position` (`traceback.py`) ← `_walk_tb_with_full_positions` ← `StackSummary._extract_from_extended_frame_gen` ← `extract_tb` ← `get_trimmed_traceback` (`escalation.py`) ← `InterestingOrigin.from_exception` ← `StateForActualGivenExecution._execute_once_for_engine` (`core.py`) ← `ConjectureRunner.__stoppable_test_function` (`engine.py`) ← `ConjectureRunner.test_function` ← `ConjectureRunner.cached_test_function` ← `ConjectureRunner.generate_new_test_cases` ← `ConjectureRunner._run` ← `ConjectureRunner.run` ← `StateForActualGivenExecution.run_engine` (`core.py`) ← `given.<locals>.run_test_as_given.<locals>.wrapped_test` ← `accept.<locals>.inner` (`debug.py`) ← `minimal` ← `test_minimize_one_of` (`test_shrink_quality.py`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 0.8% |      11 | `_get_code_position` (`traceback.py`) ← `_walk_tb_with_full_positions` ← `StackSummary._extract_from_extended_frame_gen` ← `extract_tb` ← `StateForActualGivenExecution._execute_once_for_engine` (`core.py`) ← `ConjectureRunner.__stoppable_test_function` (`engine.py`) ← `ConjectureRunner.test_function` ← `ConjectureRunner.cached_test_function` ← `Shrinker.cached_test_function` (`shrinker.py`) ← `Shrinker.try_trivial_spans` ← `Shrinker.step.<locals>.<lambda>` ← `ChoiceTree.step` (`choicetree.py`) ← `Shrinker.step` (`shrinker.py`) ← `Shrinker.fixate_shrink_passes` ← `Shrinker.greedy_shrink` ← `Shrinker.shrink` ← `ConjectureRunner.shrink` (`engine.py`) ← `ConjectureRunner.shrink_interesting_test_cases` ← `ConjectureRunner._run` ← `ConjectureRunner.run` ← `StateForActualGivenExecution.run_engine` (`core.py`) ← `given.<locals>.run_test_as_given.<locals>.wrapped_test` ← `accept.<locals>.inner` (`debug.py`) ← `minimal` ← `test_minimize_sets_of_sets` (`test_shrink_quality.py`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 0.6% |       9 | `_get_code_position` (`traceback.py`) ← `_walk_tb_with_full_positions` ← `StackSummary._extract_from_extended_frame_gen` ← `extract_tb` ← `get_trimmed_traceback` (`escalation.py`) ← `InterestingOrigin.from_exception` ← `StateForActualGivenExecution._execute_once_for_engine` (`core.py`) ← `ConjectureRunner.__stoppable_test_function` (`engine.py`) ← `ConjectureRunner.test_function` ← `ConjectureRunner.cached_test_function` ← `Shrinker.cached_test_function` (`shrinker.py`) ← `Shrinker.try_trivial_spans` ← `Shrinker.step.<locals>.<lambda>` ← `ChoiceTree.step` (`choicetree.py`) ← `Shrinker.step` (`shrinker.py`) ← `Shrinker.fixate_shrink_passes` ← `Shrinker.greedy_shrink` ← `Shrinker.shrink` ← `ConjectureRunner.shrink` (`engine.py`) ← `ConjectureRunner.shrink_interesting_test_cases` ← `ConjectureRunner._run` ← `ConjectureRunner.run` ← `StateForActualGivenExecution.run_engine` (`core.py`) ← `given.<locals>.run_test_as_given.<locals>.wrapped_test` ← `accept.<locals>.inner` (`debug.py`) ← `minimal` ← `test_minimize_list_of_lists` (`test_shrink_quality.py`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 0.6% |       9 | `_get_code_position` (`traceback.py`) ← `_walk_tb_with_full_positions` ← `StackSummary._extract_from_extended_frame_gen` ← `extract_tb` ← `get_trimmed_traceback` (`escalation.py`) ← `StateForActualGivenExecution._execute_once_for_engine` (`core.py`) ← `ConjectureRunner.__stoppable_test_function` (`engine.py`) ← `ConjectureRunner.test_function` ← `ConjectureRunner.shrink_interesting_test_cases` ← `ConjectureRunner._run` ← `ConjectureRunner.run` ← `StateForActualGivenExecution.run_engine` (`core.py`) ← `given.<locals>.run_test_as_given.<locals>.wrapped_test` ← `accept.<locals>.inner` (`debug.py`) ← `minimal` ← `test_minimize_one_of` (`test_shrink_quality.py`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 0.6% |       9 | `_get_code_position` (`traceback.py`) ← `_walk_tb_with_full_positions` ← `StackSummary._extract_from_extended_frame_gen` ← `extract_tb` ← `get_trimmed_traceback` (`escalation.py`) ← `StateForActualGivenExecution._execute_once_for_engine` (`core.py`) ← `ConjectureRunner.__stoppable_test_function` (`engine.py`) ← `ConjectureRunner.test_function` ← `ConjectureRunner.cached_test_function` ← `Shrinker.try_shrinking_nodes` (`shrinker.py`) ← `Shrinker.minimize_nodes.<locals>.<lambda>` ← `Shrinker.consider` (`common.py`) ← `Integer.short_circuit` (`integer.py`) ← `Shrinker.run` (`common.py`) ← `Shrinker.shrink` ← `Shrinker.minimize_nodes` (`shrinker.py`) ← `Shrinker.minimize_individual_choices` ← `Shrinker.step.<locals>.<lambda>` ← `ChoiceTree.step` (`choicetree.py`) ← `Shrinker.step` (`shrinker.py`) ← `Shrinker.fixate_shrink_passes` ← `Shrinker.greedy_shrink` ← `Shrinker.shrink` ← `ConjectureRunner.shrink` (`engine.py`) ← `ConjectureRunner.shrink_interesting_test_cases` ← `ConjectureRunner._run` ← `ConjectureRunner.run` ← `StateForActualGivenExecution.run_engine` (`core.py`) ← `given.<locals>.run_test_as_given.<locals>.wrapped_test` ← `accept.<locals>.inner` (`debug.py`) ← `minimal` ← `test_minimize_sets_of_sets` (`test_shrink_quality.py`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 0.6% |       9 | `_get_code_position` (`traceback.py`) ← `_walk_tb_with_full_positions` ← `StackSummary._extract_from_extended_frame_gen` ← `extract_tb` ← `StateForActualGivenExecution._execute_once_for_engine` (`core.py`) ← `ConjectureRunner.__stoppable_test_function` (`engine.py`) ← `ConjectureRunner.test_function` ← `ConjectureRunner.cached_test_function` ← `Shrinker.cached_test_function` (`shrinker.py`) ← `Shrinker.try_shrinking_nodes` ← `Shrinker.minimize_nodes.<locals>.<lambda>` ← `Shrinker.consider` (`common.py`) ← `Integer.mask_high_bits.<locals>.try_mask` (`integer.py`) ← `find_integer` (`junkdrawer.py`) ← `Integer.mask_high_bits` (`integer.py`) ← `Integer.short_circuit` ← `Shrinker.run` (`common.py`) ← `Shrinker.shrink` ← `Shrinker.minimize_nodes` (`shrinker.py`) ← `Shrinker.minimize_individual_choices` ← `Shrinker.step.<locals>.<lambda>` ← `ChoiceTree.step` (`choicetree.py`) ← `Shrinker.step` (`shrinker.py`) ← `Shrinker.fixate_shrink_passes` ← `Shrinker.greedy_shrink` ← `Shrinker.shrink` ← `ConjectureRunner.shrink` (`engine.py`) ← `ConjectureRunner.shrink_interesting_test_cases` ← `ConjectureRunner._run` ← `ConjectureRunner.run` ← `StateForActualGivenExecution.run_engine` (`core.py`) ← `given.<locals>.run_test_as_given.<locals>.wrapped_test` ← `accept.<locals>.inner` (`debug.py`) ← `minimal` ← `test_minimize_multiple_elements_in_silly_large_int_range_min_is_not_dupe` (`test_shrink_quality.py`)                                                                                                                                                                                                                                                                                                                              |
| 0.6% |       8 | `_get_code_position` (`traceback.py`) ← `_walk_tb_with_full_positions` ← `StackSummary._extract_from_extended_frame_gen` ← `extract_tb` ← `get_trimmed_traceback` (`escalation.py`) ← `InterestingOrigin.from_exception` ← `StateForActualGivenExecution._execute_once_for_engine` (`core.py`) ← `ConjectureRunner.__stoppable_test_function` (`engine.py`) ← `ConjectureRunner.test_function` ← `ConjectureRunner.cached_test_function` ← `Shrinker.try_shrinking_nodes` (`shrinker.py`) ← `Shrinker.minimize_nodes.<locals>.<lambda>` ← `Shrinker.consider` (`common.py`) ← `Integer.short_circuit` (`integer.py`) ← `Shrinker.run` (`common.py`) ← `Shrinker.shrink` ← `Shrinker.minimize_nodes` (`shrinker.py`) ← `Shrinker.minimize_individual_choices` ← `Shrinker.step.<locals>.<lambda>` ← `ChoiceTree.step` (`choicetree.py`) ← `Shrinker.step` (`shrinker.py`) ← `Shrinker.fixate_shrink_passes` ← `Shrinker.greedy_shrink` ← `Shrinker.shrink` ← `ConjectureRunner.shrink` (`engine.py`) ← `ConjectureRunner.shrink_interesting_test_cases` ← `ConjectureRunner._run` ← `ConjectureRunner.run` ← `StateForActualGivenExecution.run_engine` (`core.py`) ← `given.<locals>.run_test_as_given.<locals>.wrapped_test` ← `accept.<locals>.inner` (`debug.py`) ← `minimal` ← `test_dictionary` (`test_shrink_quality.py`) ← `flaky.<locals>.accept.<locals>.inner` (`utils.py`) ← `accept.<locals>.test_dictionary` (`test_shrink_quality.py`)                                                                                                                                                                                                                                                                                                                                             |
| 0.6% |       8 | `_get_code_position` (`traceback.py`) ← `_walk_tb_with_full_positions` ← `StackSummary._extract_from_extended_frame_gen` ← `extract_tb` ← `get_trimmed_traceback` (`escalation.py`) ← `StateForActualGivenExecution._execute_once_for_engine` (`core.py`) ← `ConjectureRunner.__stoppable_test_function` (`engine.py`) ← `ConjectureRunner.test_function` ← `ConjectureRunner.cached_test_function` ← `Shrinker.try_shrinking_nodes` (`shrinker.py`) ← `Shrinker.minimize_nodes.<locals>.<lambda>` ← `Shrinker.consider` (`common.py`) ← `Integer.short_circuit` (`integer.py`) ← `Shrinker.run` (`common.py`) ← `Shrinker.shrink` ← `Shrinker.minimize_nodes` (`shrinker.py`) ← `Shrinker.minimize_individual_choices` ← `Shrinker.step.<locals>.<lambda>` ← `ChoiceTree.step` (`choicetree.py`) ← `Shrinker.step` (`shrinker.py`) ← `Shrinker.fixate_shrink_passes` ← `Shrinker.greedy_shrink` ← `Shrinker.shrink` ← `ConjectureRunner.shrink` (`engine.py`) ← `ConjectureRunner.shrink_interesting_test_cases` ← `ConjectureRunner._run` ← `ConjectureRunner.run` ← `StateForActualGivenExecution.run_engine` (`core.py`) ← `given.<locals>.run_test_as_given.<locals>.wrapped_test` ← `accept.<locals>.inner` (`debug.py`) ← `minimal` ← `test_dictionary` (`test_shrink_quality.py`) ← `flaky.<locals>.accept.<locals>.inner` (`utils.py`) ← `accept.<locals>.test_dictionary` (`test_shrink_quality.py`)                                                                                                                                                                                                                                                                                                                                                                                  |
