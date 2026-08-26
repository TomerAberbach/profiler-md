# Sampling profile

Collected 1,473 samples.

| Category          |     % | Samples |
| ----------------- | ----: | ------: |
| Ours              | 86.5% |   1,274 |
| Garbage collector | 11.5% |     169 |
| Standard library  |  2.0% |      30 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|     % | Samples | Function                                                | Location             |
| ----: | ------: | ------------------------------------------------------- | -------------------- |
| 59.2% |     872 | `_get_code_position`                                    | `traceback.py`       |
| 11.5% |     169 | `(garbage collector)`                                   | `<unknown>`          |
|  5.2% |      76 | `StackSummary._extract_from_extended_frame_gen`         | `traceback.py`       |
|  1.8% |      26 | `checkcache`                                            | `<frozen linecache>` |
|  1.6% |      24 | `extract_tb`                                            | `traceback.py`       |
|  1.6% |      23 | `parse`                                                 | `ast.py`             |
|  1.5% |      22 | `FrameSummary.line`                                     | `traceback.py`       |
|  1.2% |      18 | `get_trimmed_traceback`                                 | `escalation.py`      |
|  1.2% |      18 | `StackSummary.format_frame_summary`                     | `traceback.py`       |
|  1.0% |      15 | `StateForActualGivenExecution._execute_once_for_engine` | `core.py`            |
|  1.0% |      14 | `_walk_tb_with_full_positions`                          | `traceback.py`       |
|  0.8% |      12 | `getsourcefile`                                         | `inspect.py`         |
|  0.7% |      11 | `get_seeder_and_restorer.<locals>.restore_all`          | `entropy.py`         |
|  0.6% |       9 | `Tracer.__exit__`                                       | `scrutineer.py`      |
|  0.6% |       9 | `ConjectureRunner.new_conjecture_data`                  | `engine.py`          |
|  0.5% |       8 | `_GeneratorContextManager.__exit__`                     | `contextlib.py`      |
|  0.5% |       7 | `IntList._array_or_list`                                | `junkdrawer.py`      |
|  0.5% |       7 | `getblock`                                              | `inspect.py`         |
|  0.5% |       7 | `FrameSummary._set_lines`                               | `traceback.py`       |
|  0.4% |       6 | `StackSummary.format`                                   | `traceback.py`       |

#### Categories

##### Ours

|     % | Samples | Function                                                | Location        |
| ----: | ------: | ------------------------------------------------------- | --------------- |
| 59.2% |     872 | `_get_code_position`                                    | `traceback.py`  |
|  5.2% |      76 | `StackSummary._extract_from_extended_frame_gen`         | `traceback.py`  |
|  1.6% |      24 | `extract_tb`                                            | `traceback.py`  |
|  1.6% |      23 | `parse`                                                 | `ast.py`        |
|  1.5% |      22 | `FrameSummary.line`                                     | `traceback.py`  |
|  1.2% |      18 | `get_trimmed_traceback`                                 | `escalation.py` |
|  1.2% |      18 | `StackSummary.format_frame_summary`                     | `traceback.py`  |
|  1.0% |      15 | `StateForActualGivenExecution._execute_once_for_engine` | `core.py`       |
|  1.0% |      14 | `_walk_tb_with_full_positions`                          | `traceback.py`  |
|  0.8% |      12 | `getsourcefile`                                         | `inspect.py`    |
|  0.7% |      11 | `get_seeder_and_restorer.<locals>.restore_all`          | `entropy.py`    |
|  0.6% |       9 | `Tracer.__exit__`                                       | `scrutineer.py` |
|  0.6% |       9 | `ConjectureRunner.new_conjecture_data`                  | `engine.py`     |
|  0.5% |       8 | `_GeneratorContextManager.__exit__`                     | `contextlib.py` |
|  0.5% |       7 | `IntList._array_or_list`                                | `junkdrawer.py` |
|  0.5% |       7 | `getblock`                                              | `inspect.py`    |
|  0.5% |       7 | `FrameSummary._set_lines`                               | `traceback.py`  |
|  0.4% |       6 | `StackSummary.format`                                   | `traceback.py`  |
|  0.4% |       6 | `TracebackException.format`                             | `traceback.py`  |
|  0.4% |       6 | `format_exception`                                      | `traceback.py`  |

##### Garbage collector

|     % | Samples | Function              | Location    |
| ----: | ------: | --------------------- | ----------- |
| 11.5% |     169 | `(garbage collector)` | `<unknown>` |

##### Standard library

|    % | Samples | Function            | Location                                 |
| ---: | ------: | ------------------- | ---------------------------------------- |
| 1.8% |      26 | `checkcache`        | `<frozen linecache>`                     |
| 0.1% |       2 | `lazycache`         | `<frozen linecache>`                     |
| 0.1% |       1 | `_compile_bytecode` | `<frozen importlib._bootstrap_external>` |
| 0.1% |       1 | `getline`           | `<frozen linecache>`                     |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `_get_code_position` (`traceback.py`)

|     % | Samples | Location           |
| ----: | ------: | ------------------ |
| 99.8% |     870 | `traceback.py:475` |
|  0.1% |       1 | `traceback.py:472` |
|  0.1% |       1 | `traceback.py:474` |

##### `StackSummary._extract_from_extended_frame_gen` (`traceback.py`)

|     % | Samples | Location           |
| ----: | ------: | ------------------ |
| 68.4% |      52 | `traceback.py:529` |
| 15.8% |      12 | `traceback.py:548` |
|  7.9% |       6 | `traceback.py:541` |
|  3.9% |       3 | `traceback.py:553` |
|  1.3% |       1 | `traceback.py:534` |

##### `checkcache` (`<frozen linecache>`)

|     % | Samples | Location                 |
| ----: | ------: | ------------------------ |
| 80.8% |      21 | `<frozen linecache>:98`  |
|  7.7% |       2 | `<frozen linecache>:84`  |
|  3.8% |       1 | `<frozen linecache>:102` |
|  3.8% |       1 | `<frozen linecache>:86`  |
|  3.8% |       1 | `<frozen linecache>:94`  |

##### `extract_tb` (`traceback.py`)

|      % | Samples | Location           |
| -----: | ------: | ------------------ |
| 100.0% |      24 | `traceback.py:123` |

##### `parse` (`ast.py`)

|      % | Samples | Location    |
| -----: | ------: | ----------- |
| 100.0% |      23 | `ast.py:46` |

##### `FrameSummary.line` (`traceback.py`)

|     % | Samples | Location           |
| ----: | ------: | ------------------ |
| 90.9% |      20 | `traceback.py:422` |
|  4.5% |       1 | `traceback.py:426` |
|  4.5% |       1 | `traceback.py:423` |

##### `get_trimmed_traceback` (`escalation.py`)

|     % | Samples | Location           |
| ----: | ------: | ------------------ |
| 50.0% |       9 | `escalation.py:85` |
| 33.3% |       6 | `escalation.py:76` |
| 11.1% |       2 | `escalation.py:78` |
|  5.6% |       1 | `escalation.py:75` |

##### `StackSummary.format_frame_summary` (`traceback.py`)

|     % | Samples | Location           |
| ----: | ------: | ------------------ |
| 44.4% |       8 | `traceback.py:644` |
| 16.7% |       3 | `traceback.py:634` |
|  5.6% |       1 | `traceback.py:618` |
|  5.6% |       1 | `traceback.py:603` |
|  5.6% |       1 | `traceback.py:615` |

##### `StateForActualGivenExecution._execute_once_for_engine` (`core.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 40.0% |       6 | `core.py:1284` |
| 13.3% |       2 | `core.py:1315` |
| 13.3% |       2 | `core.py:1311` |
| 13.3% |       2 | `core.py:1307` |
|  6.7% |       1 | `core.py:1264` |

##### `_walk_tb_with_full_positions` (`traceback.py`)

|      % | Samples | Location           |
| -----: | ------: | ------------------ |
| 100.0% |      14 | `traceback.py:461` |

##### `getsourcefile` (`inspect.py`)

|     % | Samples | Location         |
| ----: | ------: | ---------------- |
| 50.0% |       6 | `inspect.py:895` |
| 25.0% |       3 | `inspect.py:890` |
|  8.3% |       1 | `inspect.py:892` |
|  8.3% |       1 | `inspect.py:891` |
|  8.3% |       1 | `inspect.py:903` |

##### `get_seeder_and_restorer.<locals>.restore_all` (`entropy.py`)

|     % | Samples | Location         |
| ----: | ------: | ---------------- |
| 90.9% |      10 | `entropy.py:236` |
|  9.1% |       1 | `entropy.py:235` |

##### `Tracer.__exit__` (`scrutineer.py`)

|      % | Samples | Location            |
| -----: | ------: | ------------------- |
| 100.0% |       9 | `scrutineer.py:146` |

##### `ConjectureRunner.new_conjecture_data` (`engine.py`)

|      % | Samples | Location         |
| -----: | ------: | ---------------- |
| 100.0% |       9 | `engine.py:1670` |

##### `_GeneratorContextManager.__exit__` (`contextlib.py`)

|     % | Samples | Location            |
| ----: | ------: | ------------------- |
| 50.0% |       4 | `contextlib.py:257` |
| 37.5% |       3 | `contextlib.py:224` |
| 12.5% |       1 | `contextlib.py:258` |

##### `IntList._array_or_list` (`junkdrawer.py`)

|      % | Samples | Location            |
| -----: | ------: | ------------------- |
| 100.0% |       7 | `junkdrawer.py:123` |

##### `getblock` (`inspect.py`)

|     % | Samples | Location          |
| ----: | ------: | ----------------- |
| 42.9% |       3 | `inspect.py:1148` |
| 42.9% |       3 | `inspect.py:1149` |
| 14.3% |       1 | `inspect.py:1150` |

##### `FrameSummary._set_lines` (`traceback.py`)

|     % | Samples | Location           |
| ----: | ------: | ------------------ |
| 71.4% |       5 | `traceback.py:400` |
| 14.3% |       1 | `traceback.py:397` |
| 14.3% |       1 | `traceback.py:398` |

##### `StackSummary.format` (`traceback.py`)

|     % | Samples | Location           |
| ----: | ------: | ------------------ |
| 83.3% |       5 | `traceback.py:811` |
| 16.7% |       1 | `traceback.py:792` |

##### `TracebackException.format` (`traceback.py`)

|     % | Samples | Location            |
| ----: | ------: | ------------------- |
| 66.7% |       4 | `traceback.py:1656` |
| 33.3% |       2 | `traceback.py:1614` |

##### `format_exception` (`traceback.py`)

|     % | Samples | Location           |
| ----: | ------: | ------------------ |
| 83.3% |       5 | `traceback.py:200` |
| 16.7% |       1 | `traceback.py:201` |

##### `lazycache` (`<frozen linecache>`)

|     % | Samples | Location                 |
| ----: | ------: | ------------------------ |
| 50.0% |       1 | `<frozen linecache>:213` |
| 50.0% |       1 | `<frozen linecache>:200` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Location                                     |
| -----: | ------: | -------------------------------------------- |
| 100.0% |       1 | `<frozen importlib._bootstrap_external>:500` |

##### `getline` (`<frozen linecache>`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |       1 | `<frozen linecache>:27` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `_get_code_position` (`traceback.py`)

|      % | Samples | Caller                         | Location       |
| -----: | ------: | ------------------------------ | -------------- |
| 100.0% |     872 | `_walk_tb_with_full_positions` | `traceback.py` |

##### `(garbage collector)` (`<unknown>`)

|     % | Samples | Caller                                               | Location        |
| ----: | ------: | ---------------------------------------------------- | --------------- |
| 70.4% |     119 | `recursive_property.<locals>.forced_or_cached_value` | `strategies.py` |
| 14.2% |      24 | `Tracer.trace_line`                                  | `scrutineer.py` |
|  6.5% |      11 | `SpanRecord.start_span`                              | `data.py`       |
|  4.7% |       8 | `StackSummary.format_frame_summary`                  | `traceback.py`  |
|  1.2% |       2 | `suppress.__exit__`                                  | `contextlib.py` |

##### `StackSummary._extract_from_extended_frame_gen` (`traceback.py`)

|      % | Samples | Caller       | Location       |
| -----: | ------: | ------------ | -------------- |
| 100.0% |      76 | `extract_tb` | `traceback.py` |

##### `checkcache` (`<frozen linecache>`)

|      % | Samples | Caller                                          | Location       |
| -----: | ------: | ----------------------------------------------- | -------------- |
| 100.0% |      26 | `StackSummary._extract_from_extended_frame_gen` | `traceback.py` |

##### `extract_tb` (`traceback.py`)

|     % | Samples | Caller                                                  | Location        |
| ----: | ------: | ------------------------------------------------------- | --------------- |
| 58.3% |      14 | `StateForActualGivenExecution._execute_once_for_engine` | `core.py`       |
| 33.3% |       8 | `get_trimmed_traceback`                                 | `escalation.py` |
|  8.3% |       2 | `InterestingOrigin.from_exception`                      | `escalation.py` |

##### `parse` (`ast.py`)

|     % | Samples | Caller                                     | Location        |
| ----: | ------: | ------------------------------------------ | --------------- |
| 91.3% |      21 | `_extract_caret_anchors_from_line_segment` | `traceback.py`  |
|  4.3% |       1 | `_clean_source`                            | `reflection.py` |
|  4.3% |       1 | `StackSummary._should_show_carets`         | `traceback.py`  |

##### `FrameSummary.line` (`traceback.py`)

|      % | Samples | Caller                                          | Location       |
| -----: | ------: | ----------------------------------------------- | -------------- |
| 100.0% |      22 | `StackSummary._extract_from_extended_frame_gen` | `traceback.py` |

##### `get_trimmed_traceback` (`escalation.py`)

|     % | Samples | Caller                                                  | Location        |
| ----: | ------: | ------------------------------------------------------- | --------------- |
| 61.1% |      11 | `StateForActualGivenExecution._execute_once_for_engine` | `core.py`       |
| 22.2% |       4 | `InterestingOrigin.from_exception`                      | `escalation.py` |
| 16.7% |       3 | `StateForActualGivenExecution.run_engine`               | `core.py`       |

##### `StackSummary.format_frame_summary` (`traceback.py`)

|      % | Samples | Caller                | Location       |
| -----: | ------: | --------------------- | -------------- |
| 100.0% |      18 | `StackSummary.format` | `traceback.py` |

##### `StateForActualGivenExecution._execute_once_for_engine` (`core.py`)

|      % | Samples | Caller                                       | Location    |
| -----: | ------: | -------------------------------------------- | ----------- |
| 100.0% |      15 | `ConjectureRunner.__stoppable_test_function` | `engine.py` |

##### `_walk_tb_with_full_positions` (`traceback.py`)

|      % | Samples | Caller                                          | Location       |
| -----: | ------: | ----------------------------------------------- | -------------- |
| 100.0% |      14 | `StackSummary._extract_from_extended_frame_gen` | `traceback.py` |

##### `getsourcefile` (`inspect.py`)

|     % | Samples | Caller                  | Location        |
| ----: | ------: | ----------------------- | --------------- |
| 91.7% |      11 | `get_trimmed_traceback` | `escalation.py` |
|  8.3% |       1 | `extract_tb`            | `traceback.py`  |

##### `get_seeder_and_restorer.<locals>.restore_all` (`entropy.py`)

|      % | Samples | Caller               | Location     |
| -----: | ------: | -------------------- | ------------ |
| 100.0% |      11 | `deterministic_PRNG` | `entropy.py` |

##### `Tracer.__exit__` (`scrutineer.py`)

|      % | Samples | Caller                                                  | Location  |
| -----: | ------: | ------------------------------------------------------- | --------- |
| 100.0% |       9 | `StateForActualGivenExecution._execute_once_for_engine` | `core.py` |

##### `ConjectureRunner.new_conjecture_data` (`engine.py`)

|      % | Samples | Caller                                  | Location    |
| -----: | ------: | --------------------------------------- | ----------- |
| 100.0% |       9 | `ConjectureRunner.cached_test_function` | `engine.py` |

##### `_GeneratorContextManager.__exit__` (`contextlib.py`)

|     % | Samples | Caller                                                    | Location  |
| ----: | ------: | --------------------------------------------------------- | --------- |
| 87.5% |       7 | `StateForActualGivenExecution.execute_once`               | `core.py` |
| 12.5% |       1 | `StateForActualGivenExecution.execute_once.<locals>.test` | `core.py` |

##### `IntList._array_or_list` (`junkdrawer.py`)

|      % | Samples | Caller              | Location        |
| -----: | ------: | ------------------- | --------------- |
| 100.0% |       7 | `IntList.__upgrade` | `junkdrawer.py` |

##### `getblock` (`inspect.py`)

|      % | Samples | Caller           | Location     |
| -----: | ------: | ---------------- | ------------ |
| 100.0% |       7 | `getsourcelines` | `inspect.py` |

##### `FrameSummary._set_lines` (`traceback.py`)

|      % | Samples | Caller              | Location       |
| -----: | ------: | ------------------- | -------------- |
| 100.0% |       7 | `FrameSummary.line` | `traceback.py` |

##### `StackSummary.format` (`traceback.py`)

|      % | Samples | Caller                      | Location       |
| -----: | ------: | --------------------------- | -------------- |
| 100.0% |       6 | `TracebackException.format` | `traceback.py` |

##### `TracebackException.format` (`traceback.py`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |       6 | `format_exception` | `traceback.py` |

##### `format_exception` (`traceback.py`)

|      % | Samples | Caller             | Location        |
| -----: | ------: | ------------------ | --------------- |
| 100.0% |       6 | `format_exception` | `escalation.py` |

##### `lazycache` (`<frozen linecache>`)

|      % | Samples | Caller                                          | Location       |
| -----: | ------: | ----------------------------------------------- | -------------- |
| 100.0% |       2 | `StackSummary._extract_from_extended_frame_gen` | `traceback.py` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Caller                  | Location                                 |
| -----: | ------: | ----------------------- | ---------------------------------------- |
| 100.0% |       1 | `SourceLoader.get_code` | `<frozen importlib._bootstrap_external>` |

##### `getline` (`<frozen linecache>`)

|      % | Samples | Caller                    | Location       |
| -----: | ------: | ------------------------- | -------------- |
| 100.0% |       1 | `FrameSummary._set_lines` | `traceback.py` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|      % | Samples | Function                                                 | Location         |
| -----: | ------: | -------------------------------------------------------- | ---------------- |
| 100.0% |   1,473 | `_run_code`                                              | `<frozen runpy>` |
| 100.0% |   1,473 | `run_module`                                             | `<frozen runpy>` |
| 100.0% |   1,473 | `_run_module_as_main`                                    | `<frozen runpy>` |
|  99.9% |   1,472 | `given.<locals>.run_test_as_given.<locals>.wrapped_test` | `core.py`        |
|  99.9% |   1,472 | `pytest_pyfunc_call`                                     | `python.py`      |
|  99.9% |   1,472 | `_multicall`                                             | `_callers.py`    |
|  99.9% |   1,472 | `PluginManager._hookexec`                                | `_manager.py`    |
|  99.9% |   1,472 | `HookCaller.__call__`                                    | `_hooks.py`      |
|  99.9% |   1,472 | `Function.runtest`                                       | `python.py`      |
|  99.9% |   1,472 | `pytest_runtest_call`                                    | `runner.py`      |
|  99.9% |   1,472 | `call_and_report.<locals>.<lambda>`                      | `runner.py`      |
|  99.9% |   1,472 | `CallInfo.from_call`                                     | `runner.py`      |
|  99.9% |   1,472 | `call_and_report`                                        | `runner.py`      |
|  99.9% |   1,472 | `runtestprotocol`                                        | `runner.py`      |
|  99.9% |   1,472 | `pytest_runtest_protocol`                                | `runner.py`      |
|  99.9% |   1,472 | `pytest_runtestloop`                                     | `main.py`        |
|  99.9% |   1,472 | `_main`                                                  | `main.py`        |
|  99.9% |   1,472 | `wrap_session`                                           | `main.py`        |
|  99.9% |   1,472 | `pytest_cmdline_main`                                    | `main.py`        |
|  99.9% |   1,472 | `_main`                                                  | `__init__.py`    |

#### Categories

##### Ours

|     % | Samples | Function                                                 | Location      |
| ----: | ------: | -------------------------------------------------------- | ------------- |
| 99.9% |   1,472 | `given.<locals>.run_test_as_given.<locals>.wrapped_test` | `core.py`     |
| 99.9% |   1,472 | `pytest_pyfunc_call`                                     | `python.py`   |
| 99.9% |   1,472 | `_multicall`                                             | `_callers.py` |
| 99.9% |   1,472 | `PluginManager._hookexec`                                | `_manager.py` |
| 99.9% |   1,472 | `HookCaller.__call__`                                    | `_hooks.py`   |
| 99.9% |   1,472 | `Function.runtest`                                       | `python.py`   |
| 99.9% |   1,472 | `pytest_runtest_call`                                    | `runner.py`   |
| 99.9% |   1,472 | `call_and_report.<locals>.<lambda>`                      | `runner.py`   |
| 99.9% |   1,472 | `CallInfo.from_call`                                     | `runner.py`   |
| 99.9% |   1,472 | `call_and_report`                                        | `runner.py`   |
| 99.9% |   1,472 | `runtestprotocol`                                        | `runner.py`   |
| 99.9% |   1,472 | `pytest_runtest_protocol`                                | `runner.py`   |
| 99.9% |   1,472 | `pytest_runtestloop`                                     | `main.py`     |
| 99.9% |   1,472 | `_main`                                                  | `main.py`     |
| 99.9% |   1,472 | `wrap_session`                                           | `main.py`     |
| 99.9% |   1,472 | `pytest_cmdline_main`                                    | `main.py`     |
| 99.9% |   1,472 | `_main`                                                  | `__init__.py` |
| 99.9% |   1,472 | `_console_main`                                          | `__init__.py` |
| 99.9% |   1,472 | `<module>`                                               | `__main__.py` |
| 99.9% |   1,471 | `accept.<locals>.inner`                                  | `debug.py`    |

##### Garbage collector

|     % | Samples | Function              | Location    |
| ----: | ------: | --------------------- | ----------- |
| 11.5% |     169 | `(garbage collector)` | `<unknown>` |

##### Standard library

|      % | Samples | Function                    | Location                                 |
| -----: | ------: | --------------------------- | ---------------------------------------- |
| 100.0% |   1,473 | `_run_code`                 | `<frozen runpy>`                         |
| 100.0% |   1,473 | `run_module`                | `<frozen runpy>`                         |
| 100.0% |   1,473 | `_run_module_as_main`       | `<frozen runpy>`                         |
|  99.9% |   1,472 | `_run_module_code`          | `<frozen runpy>`                         |
|   1.8% |      26 | `checkcache`                | `<frozen linecache>`                     |
|   0.1% |       2 | `lazycache`                 | `<frozen linecache>`                     |
|   0.1% |       1 | `_compile_bytecode`         | `<frozen importlib._bootstrap_external>` |
|   0.1% |       1 | `SourceLoader.get_code`     | `<frozen importlib._bootstrap_external>` |
|   0.1% |       1 | `_LoaderBasics.exec_module` | `<frozen importlib._bootstrap_external>` |
|   0.1% |       1 | `_load_unlocked`            | `<frozen importlib._bootstrap>`          |
|   0.1% |       1 | `_find_and_load_unlocked`   | `<frozen importlib._bootstrap>`          |
|   0.1% |       1 | `_find_and_load`            | `<frozen importlib._bootstrap>`          |
|   0.1% |       1 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>`          |
|   0.1% |       1 | `_get_module_details`       | `<frozen runpy>`                         |
|   0.1% |       1 | `_Environ.__getitem__`      | `<frozen os>`                            |
|   0.1% |       1 | `Mapping.get`               | `<frozen _collections_abc>`              |
|   0.1% |       1 | `getline`                   | `<frozen linecache>`                     |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `_run_code` (`<frozen runpy>`)

|      % | Samples | Callee       | Location         |
| -----: | ------: | ------------ | ---------------- |
| 100.0% |   1,473 | `run_module` | `<frozen runpy>` |
|  99.9% |   1,472 | `<module>`   | `__main__.py`    |

##### `run_module` (`<frozen runpy>`)

|     % | Samples | Callee                | Location         |
| ----: | ------: | --------------------- | ---------------- |
| 99.9% |   1,472 | `_run_module_code`    | `<frozen runpy>` |
|  0.1% |       1 | `_get_module_details` | `<frozen runpy>` |

##### `_run_module_as_main` (`<frozen runpy>`)

|      % | Samples | Callee      | Location         |
| -----: | ------: | ----------- | ---------------- |
| 100.0% |   1,473 | `_run_code` | `<frozen runpy>` |

##### `given.<locals>.run_test_as_given.<locals>.wrapped_test` (`core.py`)

|     % | Samples | Callee                                    | Location        |
| ----: | ------: | ----------------------------------------- | --------------- |
| 96.3% |   1,418 | `StateForActualGivenExecution.run_engine` | `core.py`       |
|  5.4% |      79 | `get_trimmed_traceback`                   | `escalation.py` |

##### `pytest_pyfunc_call` (`python.py`)

|     % | Samples | Callee                                                                     | Location                 |
| ----: | ------: | -------------------------------------------------------------------------- | ------------------------ |
| 12.8% |     188 | `test_find_large_union_list`                                               | `test_shrink_quality.py` |
|  9.5% |     140 | `test_minimize_sets_of_sets`                                               | `test_shrink_quality.py` |
|  8.1% |     119 | `test_minimize_one_of`                                                     | `test_shrink_quality.py` |
|  7.5% |     110 | `accept.<locals>.test_dictionary`                                          | `test_shrink_quality.py` |
|  6.9% |     102 | `test_minimize_multiple_elements_in_silly_large_int_range_min_is_not_dupe` | `test_shrink_quality.py` |

##### `_multicall` (`_callers.py`)

|      % | Samples | Callee                    | Location    |
| -----: | ------: | ------------------------- | ----------- |
| 100.0% |   1,472 | `pytest_pyfunc_call`      | `python.py` |
| 100.0% |   1,472 | `pytest_runtest_call`     | `runner.py` |
| 100.0% |   1,472 | `pytest_runtest_protocol` | `runner.py` |
| 100.0% |   1,472 | `pytest_runtestloop`      | `main.py`   |
| 100.0% |   1,472 | `pytest_cmdline_main`     | `main.py`   |

##### `PluginManager._hookexec` (`_manager.py`)

|      % | Samples | Callee       | Location      |
| -----: | ------: | ------------ | ------------- |
| 100.0% |   1,472 | `_multicall` | `_callers.py` |

##### `HookCaller.__call__` (`_hooks.py`)

|      % | Samples | Callee                    | Location      |
| -----: | ------: | ------------------------- | ------------- |
| 100.0% |   1,472 | `PluginManager._hookexec` | `_manager.py` |

##### `Function.runtest` (`python.py`)

|      % | Samples | Callee                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |   1,472 | `HookCaller.__call__` | `_hooks.py` |

##### `pytest_runtest_call` (`runner.py`)

|      % | Samples | Callee             | Location    |
| -----: | ------: | ------------------ | ----------- |
| 100.0% |   1,472 | `Function.runtest` | `python.py` |

##### `call_and_report.<locals>.<lambda>` (`runner.py`)

|      % | Samples | Callee                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |   1,472 | `HookCaller.__call__` | `_hooks.py` |

##### `CallInfo.from_call` (`runner.py`)

|      % | Samples | Callee                              | Location    |
| -----: | ------: | ----------------------------------- | ----------- |
| 100.0% |   1,472 | `call_and_report.<locals>.<lambda>` | `runner.py` |

##### `call_and_report` (`runner.py`)

|      % | Samples | Callee               | Location    |
| -----: | ------: | -------------------- | ----------- |
| 100.0% |   1,472 | `CallInfo.from_call` | `runner.py` |

##### `runtestprotocol` (`runner.py`)

|      % | Samples | Callee            | Location    |
| -----: | ------: | ----------------- | ----------- |
| 100.0% |   1,472 | `call_and_report` | `runner.py` |

##### `pytest_runtest_protocol` (`runner.py`)

|      % | Samples | Callee            | Location    |
| -----: | ------: | ----------------- | ----------- |
| 100.0% |   1,472 | `runtestprotocol` | `runner.py` |

##### `pytest_runtestloop` (`main.py`)

|      % | Samples | Callee                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |   1,472 | `HookCaller.__call__` | `_hooks.py` |

##### `_main` (`main.py`)

|      % | Samples | Callee                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |   1,472 | `HookCaller.__call__` | `_hooks.py` |

##### `wrap_session` (`main.py`)

|      % | Samples | Callee  | Location  |
| -----: | ------: | ------- | --------- |
| 100.0% |   1,472 | `_main` | `main.py` |

##### `pytest_cmdline_main` (`main.py`)

|      % | Samples | Callee         | Location  |
| -----: | ------: | -------------- | --------- |
| 100.0% |   1,472 | `wrap_session` | `main.py` |

##### `_main` (`__init__.py`)

|      % | Samples | Callee                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |   1,472 | `HookCaller.__call__` | `_hooks.py` |

##### `_console_main` (`__init__.py`)

|      % | Samples | Callee  | Location      |
| -----: | ------: | ------- | ------------- |
| 100.0% |   1,472 | `_main` | `__init__.py` |

##### `<module>` (`__main__.py`)

|      % | Samples | Callee          | Location      |
| -----: | ------: | --------------- | ------------- |
| 100.0% |   1,472 | `_console_main` | `__init__.py` |

##### `_run_module_code` (`<frozen runpy>`)

|      % | Samples | Callee      | Location         |
| -----: | ------: | ----------- | ---------------- |
| 100.0% |   1,472 | `_run_code` | `<frozen runpy>` |

##### `accept.<locals>.inner` (`debug.py`)

|      % | Samples | Callee                                                    | Location  |
| -----: | ------: | --------------------------------------------------------- | --------- |
| 100.0% |   1,471 | `given.<locals>.run_test_as_given.<locals>.wrapped_test`  | `core.py` |
|   1.8% |      27 | `StateForActualGivenExecution.execute_once.<locals>.test` | `core.py` |

##### `SourceLoader.get_code` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Callee              | Location                                 |
| -----: | ------: | ------------------- | ---------------------------------------- |
| 100.0% |       1 | `_compile_bytecode` | `<frozen importlib._bootstrap_external>` |

##### `_LoaderBasics.exec_module` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Callee                      | Location                                 |
| -----: | ------: | --------------------------- | ---------------------------------------- |
| 100.0% |       1 | `SourceLoader.get_code`     | `<frozen importlib._bootstrap_external>` |
| 100.0% |       1 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>`          |

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

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee     | Location        |
| -----: | ------: | ---------- | --------------- |
| 100.0% |       1 | `<module>` | `_pydecimal.py` |
| 100.0% |       1 | `<module>` | `decimal.py`    |
| 100.0% |       1 | `<module>` | `python_api.py` |
| 100.0% |       1 | `<module>` | `doctest.py`    |
| 100.0% |       1 | `<module>` | `__init__.py`   |

##### `_get_module_details` (`<frozen runpy>`)

|      % | Samples | Callee                | Location                        |
| -----: | ------: | --------------------- | ------------------------------- |
| 100.0% |       1 | `_find_and_load`      | `<frozen importlib._bootstrap>` |
| 100.0% |       1 | `_get_module_details` | `<frozen runpy>`                |

##### `_Environ.__getitem__` (`<frozen os>`)

|      % | Samples | Callee                 | Location       |
| -----: | ------: | ---------------------- | -------------- |
| 100.0% |       1 | `Verbosity._int_value` | `_settings.py` |

##### `Mapping.get` (`<frozen _collections_abc>`)

|      % | Samples | Callee                 | Location      |
| -----: | ------: | ---------------------- | ------------- |
| 100.0% |       1 | `_Environ.__getitem__` | `<frozen os>` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

Common call stack: `pytest_pyfunc_call` (`python.py`) ← `_multicall` (`_callers.py`) ← `PluginManager._hookexec` (`_manager.py`) ← `HookCaller.__call__` (`_hooks.py`) ← `Function.runtest` (`python.py`) ← `pytest_runtest_call` (`runner.py`) ← `_multicall` (`_callers.py`) ← `PluginManager._hookexec` (`_manager.py`) ← `HookCaller.__call__` (`_hooks.py`) ← `call_and_report.<locals>.<lambda>` (`runner.py`) ← `CallInfo.from_call` ← `call_and_report` ← `runtestprotocol` ← `pytest_runtest_protocol` ← `_multicall` (`_callers.py`) ← `PluginManager._hookexec` (`_manager.py`) ← `HookCaller.__call__` (`_hooks.py`) ← `pytest_runtestloop` (`main.py`) ← `_multicall` (`_callers.py`) ← `PluginManager._hookexec` (`_manager.py`) ← `HookCaller.__call__` (`_hooks.py`) ← `_main` (`main.py`) ← `wrap_session` ← `pytest_cmdline_main` ← `_multicall` (`_callers.py`) ← `PluginManager._hookexec` (`_manager.py`) ← `HookCaller.__call__` (`_hooks.py`) ← `_main` (`__init__.py`) ← `_console_main` ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code` ← `run_module` ← `_run_code` ← `_run_module_as_main`

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ---: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2.9% |      43 | `(garbage collector)` ← `recursive_property.<locals>.forced_or_cached_value` (`strategies.py`) ← `recursive_property` ← `SearchStrategy.is_empty` ← `ConjectureData.draw` (`data.py`) ← `ListStrategy.do_draw` (`collections.py`) ← `ConjectureData.draw` (`data.py`) ← `BuildContext.prep_args_kwargs_from_strategies` (`control.py`) ← `StateForActualGivenExecution.execute_once.<locals>.run` (`core.py`) ← `default_executor` ← `StateForActualGivenExecution.execute_once` ← `StateForActualGivenExecution._execute_once_for_engine` ← `ConjectureRunner.__stoppable_test_function` (`engine.py`) ← `ConjectureRunner.test_function` ← `ConjectureRunner.cached_test_function` ← `Shrinker.cached_test_function` (`shrinker.py`) ← `Shrinker.try_shrinking_nodes` ← `Shrinker.minimize_nodes.<locals>.<lambda>` ← `Shrinker.consider` (`common.py`) ← `Integer.mask_high_bits.<locals>.try_mask` (`integer.py`) ← `find_integer` (`junkdrawer.py`) ← `Integer.mask_high_bits` (`integer.py`) ← `Integer.short_circuit` ← `Shrinker.run` (`common.py`) ← `Shrinker.shrink` ← `Shrinker.minimize_nodes` (`shrinker.py`) ← `Shrinker.minimize_individual_choices` ← `Shrinker.step.<locals>.<lambda>` ← `ChoiceTree.step` (`choicetree.py`) ← `Shrinker.step` (`shrinker.py`) ← `Shrinker.fixate_shrink_passes` ← `Shrinker.greedy_shrink` ← `Shrinker.shrink` ← `ConjectureRunner.shrink` (`engine.py`) ← `ConjectureRunner.shrink_interesting_test_cases` ← `ConjectureRunner._run` ← `ConjectureRunner.run` ← `StateForActualGivenExecution.run_engine` (`core.py`) ← `given.<locals>.run_test_as_given.<locals>.wrapped_test` ← `accept.<locals>.inner` (`debug.py`) ← `minimal` ← `test_minimize_multiple_elements_in_silly_large_int_range_min_is_not_dupe` (`test_shrink_quality.py`) |
| 1.9% |      28 | `_get_code_position` (`traceback.py`) ← `_walk_tb_with_full_positions` ← `StackSummary._extract_from_extended_frame_gen` ← `extract_tb` ← `get_trimmed_traceback` (`escalation.py`) ← `InterestingOrigin.from_exception` ← `StateForActualGivenExecution._execute_once_for_engine` (`core.py`) ← `ConjectureRunner.__stoppable_test_function` (`engine.py`) ← `ConjectureRunner.test_function` ← `ConjectureRunner.cached_test_function` ← `Shrinker.cached_test_function` (`shrinker.py`) ← `Shrinker.try_trivial_spans` ← `Shrinker.step.<locals>.<lambda>` ← `ChoiceTree.step` (`choicetree.py`) ← `Shrinker.step` (`shrinker.py`) ← `Shrinker.fixate_shrink_passes` ← `Shrinker.greedy_shrink` ← `Shrinker.shrink` ← `ConjectureRunner.shrink` (`engine.py`) ← `ConjectureRunner.shrink_interesting_test_cases` ← `ConjectureRunner._run` ← `ConjectureRunner.run` ← `StateForActualGivenExecution.run_engine` (`core.py`) ← `given.<locals>.run_test_as_given.<locals>.wrapped_test` ← `accept.<locals>.inner` (`debug.py`) ← `minimal` ← `test_find_large_union_list` (`test_shrink_quality.py`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 1.7% |      25 | `_get_code_position` (`traceback.py`) ← `_walk_tb_with_full_positions` ← `StackSummary._extract_from_extended_frame_gen` ← `extract_tb` ← `get_trimmed_traceback` (`escalation.py`) ← `given.<locals>.run_test_as_given.<locals>.wrapped_test` (`core.py`) ← `accept.<locals>.inner` (`debug.py`) ← `minimal` ← `test_minimize_one_of` (`test_shrink_quality.py`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 1.6% |      24 | `_get_code_position` (`traceback.py`) ← `_walk_tb_with_full_positions` ← `StackSummary._extract_from_extended_frame_gen` ← `extract_tb` ← `StateForActualGivenExecution._execute_once_for_engine` (`core.py`) ← `ConjectureRunner.__stoppable_test_function` (`engine.py`) ← `ConjectureRunner.test_function` ← `ConjectureRunner.cached_test_function` ← `Shrinker.cached_test_function` (`shrinker.py`) ← `Shrinker.try_trivial_spans` ← `Shrinker.step.<locals>.<lambda>` ← `ChoiceTree.step` (`choicetree.py`) ← `Shrinker.step` (`shrinker.py`) ← `Shrinker.fixate_shrink_passes` ← `Shrinker.greedy_shrink` ← `Shrinker.shrink` ← `ConjectureRunner.shrink` (`engine.py`) ← `ConjectureRunner.shrink_interesting_test_cases` ← `ConjectureRunner._run` ← `ConjectureRunner.run` ← `StateForActualGivenExecution.run_engine` (`core.py`) ← `given.<locals>.run_test_as_given.<locals>.wrapped_test` ← `accept.<locals>.inner` (`debug.py`) ← `minimal` ← `test_find_large_union_list` (`test_shrink_quality.py`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 1.6% |      24 | `(garbage collector)` ← `Tracer.trace_line` (`scrutineer.py`) ← `_GeneratorContextManager.__exit__` (`contextlib.py`) ← `StateForActualGivenExecution.execute_once.<locals>.test` (`core.py`) ← `accept.<locals>.inner` (`debug.py`) ← `StateForActualGivenExecution.execute_once.<locals>.run` (`core.py`) ← `default_executor` ← `StateForActualGivenExecution.execute_once` ← `StateForActualGivenExecution._execute_once_for_engine` ← `ConjectureRunner.__stoppable_test_function` (`engine.py`) ← `ConjectureRunner.test_function` ← `ConjectureRunner.cached_test_function` ← `Shrinker.cached_test_function` (`shrinker.py`) ← `Shrinker.try_shrinking_nodes` ← `Shrinker.minimize_nodes.<locals>.<lambda>` ← `String.__init__.<locals>.<lambda>` (`string.py`) ← `Shrinker.consider` (`common.py`) ← `Collection.run_step.<locals>.delete_k` (`collection.py`) ← `find_integer` (`junkdrawer.py`) ← `Collection.run_step` (`collection.py`) ← `Shrinker.run` (`common.py`) ← `Shrinker.shrink` ← `Shrinker.minimize_nodes` (`shrinker.py`) ← `Shrinker.minimize_individual_choices` ← `Shrinker.step.<locals>.<lambda>` ← `ChoiceTree.step` (`choicetree.py`) ← `Shrinker.step` (`shrinker.py`) ← `Shrinker.fixate_shrink_passes` ← `Shrinker.greedy_shrink` ← `Shrinker.shrink` ← `ConjectureRunner.shrink` (`engine.py`) ← `ConjectureRunner.shrink_interesting_test_cases` ← `ConjectureRunner._run` ← `ConjectureRunner.run` ← `StateForActualGivenExecution.run_engine` (`core.py`) ← `given.<locals>.run_test_as_given.<locals>.wrapped_test` ← `accept.<locals>.inner` (`debug.py`) ← `minimal` ← `test_nasty_string_shrinks` (`test_shrink_quality.py`)                                                                                                                        |
| 1.4% |      21 | `_get_code_position` (`traceback.py`) ← `_walk_tb_with_full_positions` ← `StackSummary._extract_from_extended_frame_gen` ← `extract_tb` ← `get_trimmed_traceback` (`escalation.py`) ← `StateForActualGivenExecution._execute_once_for_engine` (`core.py`) ← `ConjectureRunner.__stoppable_test_function` (`engine.py`) ← `ConjectureRunner.test_function` ← `ConjectureRunner.cached_test_function` ← `Shrinker.cached_test_function` (`shrinker.py`) ← `Shrinker.try_trivial_spans` ← `Shrinker.step.<locals>.<lambda>` ← `ChoiceTree.step` (`choicetree.py`) ← `Shrinker.step` (`shrinker.py`) ← `Shrinker.fixate_shrink_passes` ← `Shrinker.greedy_shrink` ← `Shrinker.shrink` ← `ConjectureRunner.shrink` (`engine.py`) ← `ConjectureRunner.shrink_interesting_test_cases` ← `ConjectureRunner._run` ← `ConjectureRunner.run` ← `StateForActualGivenExecution.run_engine` (`core.py`) ← `given.<locals>.run_test_as_given.<locals>.wrapped_test` ← `accept.<locals>.inner` (`debug.py`) ← `minimal` ← `test_find_large_union_list` (`test_shrink_quality.py`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 1.4% |      20 | `_get_code_position` (`traceback.py`) ← `_walk_tb_with_full_positions` ← `StackSummary._extract_from_extended_frame_gen` ← `extract_tb` ← `StateForActualGivenExecution._execute_once_for_engine` (`core.py`) ← `ConjectureRunner.__stoppable_test_function` (`engine.py`) ← `ConjectureRunner.test_function` ← `ConjectureRunner.cached_test_function` ← `Shrinker.cached_test_function` (`shrinker.py`) ← `Shrinker.try_trivial_spans` ← `Shrinker.step.<locals>.<lambda>` ← `ChoiceTree.step` (`choicetree.py`) ← `Shrinker.step` (`shrinker.py`) ← `Shrinker.fixate_shrink_passes` ← `Shrinker.greedy_shrink` ← `Shrinker.shrink` ← `ConjectureRunner.shrink` (`engine.py`) ← `ConjectureRunner.shrink_interesting_test_cases` ← `ConjectureRunner._run` ← `ConjectureRunner.run` ← `StateForActualGivenExecution.run_engine` (`core.py`) ← `given.<locals>.run_test_as_given.<locals>.wrapped_test` ← `accept.<locals>.inner` (`debug.py`) ← `minimal` ← `test_minimize_sets_of_sets` (`test_shrink_quality.py`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 1.2% |      18 | `_get_code_position` (`traceback.py`) ← `_walk_tb_with_full_positions` ← `StackSummary._extract_from_extended_frame_gen` ← `extract_tb` ← `get_trimmed_traceback` (`escalation.py`) ← `InterestingOrigin.from_exception` ← `StateForActualGivenExecution._execute_once_for_engine` (`core.py`) ← `ConjectureRunner.__stoppable_test_function` (`engine.py`) ← `ConjectureRunner.test_function` ← `ConjectureRunner.cached_test_function` ← `Shrinker.cached_test_function` (`shrinker.py`) ← `Shrinker.try_trivial_spans` ← `Shrinker.step.<locals>.<lambda>` ← `ChoiceTree.step` (`choicetree.py`) ← `Shrinker.step` (`shrinker.py`) ← `Shrinker.fixate_shrink_passes` ← `Shrinker.greedy_shrink` ← `Shrinker.shrink` ← `ConjectureRunner.shrink` (`engine.py`) ← `ConjectureRunner.shrink_interesting_test_cases` ← `ConjectureRunner._run` ← `ConjectureRunner.run` ← `StateForActualGivenExecution.run_engine` (`core.py`) ← `given.<locals>.run_test_as_given.<locals>.wrapped_test` ← `accept.<locals>.inner` (`debug.py`) ← `minimal` ← `test_minimize_list_of_lists` (`test_shrink_quality.py`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 1.2% |      18 | `_get_code_position` (`traceback.py`) ← `_walk_tb_with_full_positions` ← `StackSummary._extract_from_extended_frame_gen` ← `extract_tb` ← `get_trimmed_traceback` (`escalation.py`) ← `StateForActualGivenExecution.run_engine` (`core.py`) ← `given.<locals>.run_test_as_given.<locals>.wrapped_test` ← `accept.<locals>.inner` (`debug.py`) ← `minimal` ← `test_minimize_one_of` (`test_shrink_quality.py`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 1.1% |      16 | `_get_code_position` (`traceback.py`) ← `_walk_tb_with_full_positions` ← `StackSummary._extract_from_extended_frame_gen` ← `extract_tb` ← `get_trimmed_traceback` (`escalation.py`) ← `StateForActualGivenExecution._execute_once_for_engine` (`core.py`) ← `ConjectureRunner.__stoppable_test_function` (`engine.py`) ← `ConjectureRunner.test_function` ← `ConjectureRunner.cached_test_function` ← `Shrinker.cached_test_function` (`shrinker.py`) ← `Shrinker.try_trivial_spans` ← `Shrinker.step.<locals>.<lambda>` ← `ChoiceTree.step` (`choicetree.py`) ← `Shrinker.step` (`shrinker.py`) ← `Shrinker.fixate_shrink_passes` ← `Shrinker.greedy_shrink` ← `Shrinker.shrink` ← `ConjectureRunner.shrink` (`engine.py`) ← `ConjectureRunner.shrink_interesting_test_cases` ← `ConjectureRunner._run` ← `ConjectureRunner.run` ← `StateForActualGivenExecution.run_engine` (`core.py`) ← `given.<locals>.run_test_as_given.<locals>.wrapped_test` ← `accept.<locals>.inner` (`debug.py`) ← `minimal` ← `test_minimize_list_of_lists` (`test_shrink_quality.py`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 1.1% |      16 | `_get_code_position` (`traceback.py`) ← `_walk_tb_with_full_positions` ← `StackSummary._extract_from_extended_frame_gen` ← `extract_tb` ← `StateForActualGivenExecution._execute_once_for_engine` (`core.py`) ← `ConjectureRunner.__stoppable_test_function` (`engine.py`) ← `ConjectureRunner.test_function` ← `ConjectureRunner.cached_test_function` ← `Shrinker.cached_test_function` (`shrinker.py`) ← `Shrinker.try_trivial_spans` ← `Shrinker.step.<locals>.<lambda>` ← `ChoiceTree.step` (`choicetree.py`) ← `Shrinker.step` (`shrinker.py`) ← `Shrinker.fixate_shrink_passes` ← `Shrinker.greedy_shrink` ← `Shrinker.shrink` ← `ConjectureRunner.shrink` (`engine.py`) ← `ConjectureRunner.shrink_interesting_test_cases` ← `ConjectureRunner._run` ← `ConjectureRunner.run` ← `StateForActualGivenExecution.run_engine` (`core.py`) ← `given.<locals>.run_test_as_given.<locals>.wrapped_test` ← `accept.<locals>.inner` (`debug.py`) ← `minimal` ← `test_minimize_list_of_lists` (`test_shrink_quality.py`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 1.0% |      14 | `(garbage collector)` ← `recursive_property.<locals>.forced_or_cached_value` (`strategies.py`) ← `recursive_property` ← `SearchStrategy.is_empty` ← `ConjectureData.draw` (`data.py`) ← `FilteredStrategy.do_filtered_draw` (`strategies.py`) ← `UniqueListStrategy.do_draw` (`collections.py`) ← `ConjectureData.draw` (`data.py`) ← `MappedStrategy.do_draw` (`strategies.py`) ← `ConjectureData.draw` (`data.py`) ← `ListStrategy.do_draw` (`collections.py`) ← `ConjectureData.draw` (`data.py`) ← `BuildContext.prep_args_kwargs_from_strategies` (`control.py`) ← `StateForActualGivenExecution.execute_once.<locals>.run` (`core.py`) ← `default_executor` ← `StateForActualGivenExecution.execute_once` ← `StateForActualGivenExecution._execute_once_for_engine` ← `ConjectureRunner.__stoppable_test_function` (`engine.py`) ← `ConjectureRunner.test_function` ← `ConjectureRunner.cached_test_function` ← `Shrinker.cached_test_function` (`shrinker.py`) ← `Shrinker.try_trivial_spans` ← `Shrinker.step.<locals>.<lambda>` ← `ChoiceTree.step` (`choicetree.py`) ← `Shrinker.step` (`shrinker.py`) ← `Shrinker.fixate_shrink_passes` ← `Shrinker.greedy_shrink` ← `Shrinker.shrink` ← `ConjectureRunner.shrink` (`engine.py`) ← `ConjectureRunner.shrink_interesting_test_cases` ← `ConjectureRunner._run` ← `ConjectureRunner.run` ← `StateForActualGivenExecution.run_engine` (`core.py`) ← `given.<locals>.run_test_as_given.<locals>.wrapped_test` ← `accept.<locals>.inner` (`debug.py`) ← `minimal` ← `test_find_large_union_list` (`test_shrink_quality.py`)                                                                                                                                                                                                               |
| 1.0% |      14 | `_get_code_position` (`traceback.py`) ← `_walk_tb_with_full_positions` ← `StackSummary._extract_from_extended_frame_gen` ← `extract_tb` ← `get_trimmed_traceback` (`escalation.py`) ← `StateForActualGivenExecution._execute_once_for_engine` (`core.py`) ← `ConjectureRunner.__stoppable_test_function` (`engine.py`) ← `ConjectureRunner.test_function` ← `ConjectureRunner.cached_test_function` ← `Shrinker.cached_test_function` (`shrinker.py`) ← `Shrinker.try_trivial_spans` ← `Shrinker.step.<locals>.<lambda>` ← `ChoiceTree.step` (`choicetree.py`) ← `Shrinker.step` (`shrinker.py`) ← `Shrinker.fixate_shrink_passes` ← `Shrinker.greedy_shrink` ← `Shrinker.shrink` ← `ConjectureRunner.shrink` (`engine.py`) ← `ConjectureRunner.shrink_interesting_test_cases` ← `ConjectureRunner._run` ← `ConjectureRunner.run` ← `StateForActualGivenExecution.run_engine` (`core.py`) ← `given.<locals>.run_test_as_given.<locals>.wrapped_test` ← `accept.<locals>.inner` (`debug.py`) ← `minimal` ← `test_minimize_sets_of_sets` (`test_shrink_quality.py`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 0.7% |      11 | `_get_code_position` (`traceback.py`) ← `_walk_tb_with_full_positions` ← `StackSummary._extract_from_extended_frame_gen` ← `extract_tb` ← `get_trimmed_traceback` (`escalation.py`) ← `InterestingOrigin.from_exception` ← `StateForActualGivenExecution._execute_once_for_engine` (`core.py`) ← `ConjectureRunner.__stoppable_test_function` (`engine.py`) ← `ConjectureRunner.test_function` ← `ConjectureRunner.cached_test_function` ← `Shrinker.cached_test_function` (`shrinker.py`) ← `Shrinker.try_trivial_spans` ← `Shrinker.step.<locals>.<lambda>` ← `ChoiceTree.step` (`choicetree.py`) ← `Shrinker.step` (`shrinker.py`) ← `Shrinker.fixate_shrink_passes` ← `Shrinker.greedy_shrink` ← `Shrinker.shrink` ← `ConjectureRunner.shrink` (`engine.py`) ← `ConjectureRunner.shrink_interesting_test_cases` ← `ConjectureRunner._run` ← `ConjectureRunner.run` ← `StateForActualGivenExecution.run_engine` (`core.py`) ← `given.<locals>.run_test_as_given.<locals>.wrapped_test` ← `accept.<locals>.inner` (`debug.py`) ← `minimal` ← `test_can_ignore_left_hand_side_of_flatmap` (`test_shrink_quality.py`) ← `flaky.<locals>.accept.<locals>.inner` (`utils.py`) ← `accept.<locals>.test_can_ignore_left_hand_side_of_flatmap` (`test_shrink_quality.py`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 0.7% |      11 | `_get_code_position` (`traceback.py`) ← `_walk_tb_with_full_positions` ← `StackSummary._extract_from_extended_frame_gen` ← `extract_tb` ← `get_trimmed_traceback` (`escalation.py`) ← `InterestingOrigin.from_exception` ← `StateForActualGivenExecution._execute_once_for_engine` (`core.py`) ← `ConjectureRunner.__stoppable_test_function` (`engine.py`) ← `ConjectureRunner.test_function` ← `ConjectureRunner.cached_test_function` ← `Shrinker.cached_test_function` (`shrinker.py`) ← `Shrinker.try_trivial_spans` ← `Shrinker.step.<locals>.<lambda>` ← `ChoiceTree.step` (`choicetree.py`) ← `Shrinker.step` (`shrinker.py`) ← `Shrinker.fixate_shrink_passes` ← `Shrinker.greedy_shrink` ← `Shrinker.shrink` ← `ConjectureRunner.shrink` (`engine.py`) ← `ConjectureRunner.shrink_interesting_test_cases` ← `ConjectureRunner._run` ← `ConjectureRunner.run` ← `StateForActualGivenExecution.run_engine` (`core.py`) ← `given.<locals>.run_test_as_given.<locals>.wrapped_test` ← `accept.<locals>.inner` (`debug.py`) ← `minimal` ← `test_minimize_sets_of_sets` (`test_shrink_quality.py`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 0.7% |      10 | `_get_code_position` (`traceback.py`) ← `_walk_tb_with_full_positions` ← `StackSummary._extract_from_extended_frame_gen` ← `extract_tb` ← `get_trimmed_traceback` (`escalation.py`) ← `StateForActualGivenExecution._execute_once_for_engine` (`core.py`) ← `ConjectureRunner.__stoppable_test_function` (`engine.py`) ← `ConjectureRunner.test_function` ← `ConjectureRunner.shrink_interesting_test_cases` ← `ConjectureRunner._run` ← `ConjectureRunner.run` ← `StateForActualGivenExecution.run_engine` (`core.py`) ← `given.<locals>.run_test_as_given.<locals>.wrapped_test` ← `accept.<locals>.inner` (`debug.py`) ← `minimal` ← `test_minimize_one_of` (`test_shrink_quality.py`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 0.6% |       9 | `_get_code_position` (`traceback.py`) ← `_walk_tb_with_full_positions` ← `StackSummary._extract_from_extended_frame_gen` ← `extract_tb` ← `get_trimmed_traceback` (`escalation.py`) ← `StateForActualGivenExecution._execute_once_for_engine` (`core.py`) ← `ConjectureRunner.__stoppable_test_function` (`engine.py`) ← `ConjectureRunner.test_function` ← `ConjectureRunner.cached_test_function` ← `Shrinker.cached_test_function` (`shrinker.py`) ← `Shrinker.try_shrinking_nodes` ← `Shrinker.minimize_nodes.<locals>.<lambda>` ← `Shrinker.consider` (`common.py`) ← `Integer.mask_high_bits.<locals>.try_mask` (`integer.py`) ← `find_integer` (`junkdrawer.py`) ← `Integer.mask_high_bits` (`integer.py`) ← `Integer.short_circuit` ← `Shrinker.run` (`common.py`) ← `Shrinker.shrink` ← `Shrinker.minimize_nodes` (`shrinker.py`) ← `Shrinker.minimize_individual_choices` ← `Shrinker.step.<locals>.<lambda>` ← `ChoiceTree.step` (`choicetree.py`) ← `Shrinker.step` (`shrinker.py`) ← `Shrinker.fixate_shrink_passes` ← `Shrinker.greedy_shrink` ← `Shrinker.shrink` ← `ConjectureRunner.shrink` (`engine.py`) ← `ConjectureRunner.shrink_interesting_test_cases` ← `ConjectureRunner._run` ← `ConjectureRunner.run` ← `StateForActualGivenExecution.run_engine` (`core.py`) ← `given.<locals>.run_test_as_given.<locals>.wrapped_test` ← `accept.<locals>.inner` (`debug.py`) ← `minimal` ← `test_minimize_multiple_elements_in_silly_large_int_range_min_is_not_dupe` (`test_shrink_quality.py`)                                                                                                                                                                                                                                                                                  |
| 0.5% |       8 | `_get_code_position` (`traceback.py`) ← `_walk_tb_with_full_positions` ← `StackSummary._extract_from_extended_frame_gen` ← `extract_tb` ← `StateForActualGivenExecution._execute_once_for_engine` (`core.py`) ← `ConjectureRunner.__stoppable_test_function` (`engine.py`) ← `ConjectureRunner.test_function` ← `ConjectureRunner.cached_test_function` ← `Shrinker.cached_test_function` (`shrinker.py`) ← `Shrinker.try_trivial_spans` ← `Shrinker.step.<locals>.<lambda>` ← `ChoiceTree.step` (`choicetree.py`) ← `Shrinker.step` (`shrinker.py`) ← `Shrinker.fixate_shrink_passes` ← `Shrinker.greedy_shrink` ← `Shrinker.shrink` ← `ConjectureRunner.shrink` (`engine.py`) ← `ConjectureRunner.shrink_interesting_test_cases` ← `ConjectureRunner._run` ← `ConjectureRunner.run` ← `StateForActualGivenExecution.run_engine` (`core.py`) ← `given.<locals>.run_test_as_given.<locals>.wrapped_test` ← `accept.<locals>.inner` (`debug.py`) ← `minimal` ← `test_can_ignore_left_hand_side_of_flatmap` (`test_shrink_quality.py`) ← `flaky.<locals>.accept.<locals>.inner` (`utils.py`) ← `accept.<locals>.test_can_ignore_left_hand_side_of_flatmap` (`test_shrink_quality.py`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 0.5% |       8 | `_get_code_position` (`traceback.py`) ← `_walk_tb_with_full_positions` ← `StackSummary._extract_from_extended_frame_gen` ← `extract_tb` ← `get_trimmed_traceback` (`escalation.py`) ← `StateForActualGivenExecution._execute_once_for_engine` (`core.py`) ← `ConjectureRunner.__stoppable_test_function` (`engine.py`) ← `ConjectureRunner.test_function` ← `ConjectureRunner.cached_test_function` ← `Shrinker.cached_test_function` (`shrinker.py`) ← `Shrinker.try_trivial_spans` ← `Shrinker.step.<locals>.<lambda>` ← `ChoiceTree.step` (`choicetree.py`) ← `Shrinker.step` (`shrinker.py`) ← `Shrinker.fixate_shrink_passes` ← `Shrinker.greedy_shrink` ← `Shrinker.shrink` ← `ConjectureRunner.shrink` (`engine.py`) ← `ConjectureRunner.shrink_interesting_test_cases` ← `ConjectureRunner._run` ← `ConjectureRunner.run` ← `StateForActualGivenExecution.run_engine` (`core.py`) ← `given.<locals>.run_test_as_given.<locals>.wrapped_test` ← `accept.<locals>.inner` (`debug.py`) ← `minimal` ← `test_can_ignore_left_hand_side_of_flatmap` (`test_shrink_quality.py`) ← `flaky.<locals>.accept.<locals>.inner` (`utils.py`) ← `accept.<locals>.test_can_ignore_left_hand_side_of_flatmap` (`test_shrink_quality.py`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 0.5% |       8 | `_get_code_position` (`traceback.py`) ← `_walk_tb_with_full_positions` ← `StackSummary._extract_from_extended_frame_gen` ← `extract_tb` ← `StateForActualGivenExecution._execute_once_for_engine` (`core.py`) ← `ConjectureRunner.__stoppable_test_function` (`engine.py`) ← `ConjectureRunner.test_function` ← `ConjectureRunner.shrink_interesting_test_cases` ← `ConjectureRunner._run` ← `ConjectureRunner.run` ← `StateForActualGivenExecution.run_engine` (`core.py`) ← `given.<locals>.run_test_as_given.<locals>.wrapped_test` ← `accept.<locals>.inner` (`debug.py`) ← `minimal` ← `test_minimize_one_of` (`test_shrink_quality.py`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
