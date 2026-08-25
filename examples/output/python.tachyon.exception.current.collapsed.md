# Sampling profile

Collected 1,466 samples.

| Category          |     % | Samples |
| ----------------- | ----: | ------: |
| Ours              | 87.1% |   1,277 |
| Garbage collector |  9.8% |     144 |
| Standard library  |  3.1% |      45 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|     % | Samples | Function                                                | Location             |
| ----: | ------: | ------------------------------------------------------- | -------------------- |
| 58.2% |     853 | `_get_code_position`                                    | `traceback.py`       |
|  9.8% |     144 | `(garbage collector)`                                   | `<unknown>`          |
|  4.9% |      72 | `StackSummary._extract_from_extended_frame_gen`         | `traceback.py`       |
|  2.5% |      37 | `checkcache`                                            | `<frozen linecache>` |
|  2.0% |      30 | `get_trimmed_traceback`                                 | `escalation.py`      |
|  1.5% |      22 | `parse`                                                 | `ast.py`             |
|  1.4% |      21 | `_walk_tb_with_full_positions`                          | `traceback.py`       |
|  1.3% |      19 | `FrameSummary.line`                                     | `traceback.py`       |
|  1.2% |      18 | `StateForActualGivenExecution._execute_once_for_engine` | `core.py`            |
|  1.2% |      18 | `extract_tb`                                            | `traceback.py`       |
|  1.2% |      18 | `format_exception`                                      | `traceback.py`       |
|  1.0% |      15 | `StackSummary.format_frame_summary`                     | `traceback.py`       |
|  0.8% |      12 | `getsourcefile`                                         | `inspect.py`         |
|  0.7% |      10 | `format_exception`                                      | `escalation.py`      |
|  0.7% |      10 | `Tracer.__exit__`                                       | `scrutineer.py`      |
|  0.6% |       9 | `StackSummary.format`                                   | `traceback.py`       |
|  0.6% |       9 | `FrameSummary._set_lines`                               | `traceback.py`       |
|  0.5% |       8 | `IntList._array_or_list`                                | `junkdrawer.py`      |
|  0.5% |       7 | `recursive_property.<locals>.forced_or_cached_value`    | `strategies.py`      |
|  0.5% |       7 | `_GeneratorContextManager.__exit__`                     | `contextlib.py`      |

#### Categories

##### Ours

|     % | Samples | Function                                                | Location        |
| ----: | ------: | ------------------------------------------------------- | --------------- |
| 58.2% |     853 | `_get_code_position`                                    | `traceback.py`  |
|  4.9% |      72 | `StackSummary._extract_from_extended_frame_gen`         | `traceback.py`  |
|  2.0% |      30 | `get_trimmed_traceback`                                 | `escalation.py` |
|  1.5% |      22 | `parse`                                                 | `ast.py`        |
|  1.4% |      21 | `_walk_tb_with_full_positions`                          | `traceback.py`  |
|  1.3% |      19 | `FrameSummary.line`                                     | `traceback.py`  |
|  1.2% |      18 | `StateForActualGivenExecution._execute_once_for_engine` | `core.py`       |
|  1.2% |      18 | `extract_tb`                                            | `traceback.py`  |
|  1.2% |      18 | `format_exception`                                      | `traceback.py`  |
|  1.0% |      15 | `StackSummary.format_frame_summary`                     | `traceback.py`  |
|  0.8% |      12 | `getsourcefile`                                         | `inspect.py`    |
|  0.7% |      10 | `format_exception`                                      | `escalation.py` |
|  0.7% |      10 | `Tracer.__exit__`                                       | `scrutineer.py` |
|  0.6% |       9 | `StackSummary.format`                                   | `traceback.py`  |
|  0.6% |       9 | `FrameSummary._set_lines`                               | `traceback.py`  |
|  0.5% |       8 | `IntList._array_or_list`                                | `junkdrawer.py` |
|  0.5% |       7 | `recursive_property.<locals>.forced_or_cached_value`    | `strategies.py` |
|  0.5% |       7 | `_GeneratorContextManager.__exit__`                     | `contextlib.py` |
|  0.5% |       7 | `Untokenizer.untokenize`                                | `tokenize.py`   |
|  0.5% |       7 | `get_seeder_and_restorer.<locals>.restore_all`          | `entropy.py`    |

##### Garbage collector

|    % | Samples | Function              | Location    |
| ---: | ------: | --------------------- | ----------- |
| 9.8% |     144 | `(garbage collector)` | `<unknown>` |

##### Standard library

|    % | Samples | Function            | Location                                 |
| ---: | ------: | ------------------- | ---------------------------------------- |
| 2.5% |      37 | `checkcache`        | `<frozen linecache>`                     |
| 0.3% |       5 | `lazycache`         | `<frozen linecache>`                     |
| 0.1% |       1 | `_compile_bytecode` | `<frozen importlib._bootstrap_external>` |
| 0.1% |       1 | `Sequence.__iter__` | `<frozen _collections_abc>`              |
| 0.1% |       1 | `getline`           | `<frozen linecache>`                     |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `_get_code_position` (`traceback.py`)

|     % | Samples | Location           |
| ----: | ------: | ------------------ |
| 99.6% |     850 | `traceback.py:475` |
|  0.2% |       2 | `traceback.py:474` |
|  0.1% |       1 | `traceback.py:472` |

##### `StackSummary._extract_from_extended_frame_gen` (`traceback.py`)

|     % | Samples | Location           |
| ----: | ------: | ------------------ |
| 69.4% |      50 | `traceback.py:529` |
| 12.5% |       9 | `traceback.py:553` |
|  9.7% |       7 | `traceback.py:548` |
|  4.2% |       3 | `traceback.py:541` |
|  1.4% |       1 | `traceback.py:534` |

##### `checkcache` (`<frozen linecache>`)

|     % | Samples | Location                 |
| ----: | ------: | ------------------------ |
| 73.0% |      27 | `<frozen linecache>:98`  |
| 10.8% |       4 | `<frozen linecache>:94`  |
|  5.4% |       2 | `<frozen linecache>:89`  |
|  2.7% |       1 | `<frozen linecache>:84`  |
|  2.7% |       1 | `<frozen linecache>:102` |

##### `get_trimmed_traceback` (`escalation.py`)

|     % | Samples | Location           |
| ----: | ------: | ------------------ |
| 33.3% |      10 | `escalation.py:85` |
| 30.0% |       9 | `escalation.py:78` |
| 26.7% |       8 | `escalation.py:76` |
|  6.7% |       2 | `escalation.py:75` |
|  3.3% |       1 | `escalation.py:90` |

##### `parse` (`ast.py`)

|      % | Samples | Location    |
| -----: | ------: | ----------- |
| 100.0% |      22 | `ast.py:46` |

##### `_walk_tb_with_full_positions` (`traceback.py`)

|     % | Samples | Location           |
| ----: | ------: | ------------------ |
| 95.2% |      20 | `traceback.py:461` |
|  4.8% |       1 | `traceback.py:457` |

##### `FrameSummary.line` (`traceback.py`)

|     % | Samples | Location           |
| ----: | ------: | ------------------ |
| 78.9% |      15 | `traceback.py:422` |
| 21.1% |       4 | `traceback.py:426` |

##### `StateForActualGivenExecution._execute_once_for_engine` (`core.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 27.8% |       5 | `core.py:1307` |
| 27.8% |       5 | `core.py:1284` |
| 11.1% |       2 | `core.py:1317` |
| 11.1% |       2 | `core.py:1315` |
| 11.1% |       2 | `core.py:1264` |

##### `extract_tb` (`traceback.py`)

|     % | Samples | Location           |
| ----: | ------: | ------------------ |
| 94.4% |      17 | `traceback.py:123` |
|  5.6% |       1 | `traceback.py:124` |

##### `format_exception` (`traceback.py`)

|     % | Samples | Location           |
| ----: | ------: | ------------------ |
| 50.0% |       9 | `traceback.py:200` |
| 44.4% |       8 | `traceback.py:201` |
|  5.6% |       1 | `traceback.py:199` |

##### `StackSummary.format_frame_summary` (`traceback.py`)

|     % | Samples | Location           |
| ----: | ------: | ------------------ |
| 33.3% |       5 | `traceback.py:603` |
| 20.0% |       3 | `traceback.py:644` |
| 13.3% |       2 | `traceback.py:618` |
|  6.7% |       1 | `traceback.py:626` |
|  6.7% |       1 | `traceback.py:621` |

##### `getsourcefile` (`inspect.py`)

|     % | Samples | Location         |
| ----: | ------: | ---------------- |
| 33.3% |       4 | `inspect.py:895` |
| 25.0% |       3 | `inspect.py:890` |
| 25.0% |       3 | `inspect.py:892` |
|  8.3% |       1 | `inspect.py:896` |
|  8.3% |       1 | `inspect.py:903` |

##### `format_exception` (`escalation.py`)

|     % | Samples | Location            |
| ----: | ------: | ------------------- |
| 60.0% |       6 | `escalation.py:175` |
| 40.0% |       4 | `escalation.py:166` |

##### `Tracer.__exit__` (`scrutineer.py`)

|      % | Samples | Location            |
| -----: | ------: | ------------------- |
| 100.0% |      10 | `scrutineer.py:146` |

##### `StackSummary.format` (`traceback.py`)

|     % | Samples | Location           |
| ----: | ------: | ------------------ |
| 77.8% |       7 | `traceback.py:811` |
| 11.1% |       1 | `traceback.py:804` |
| 11.1% |       1 | `traceback.py:792` |

##### `FrameSummary._set_lines` (`traceback.py`)

|     % | Samples | Location           |
| ----: | ------: | ------------------ |
| 55.6% |       5 | `traceback.py:400` |
| 44.4% |       4 | `traceback.py:404` |

##### `IntList._array_or_list` (`junkdrawer.py`)

|      % | Samples | Location            |
| -----: | ------: | ------------------- |
| 100.0% |       8 | `junkdrawer.py:123` |

##### `recursive_property.<locals>.forced_or_cached_value` (`strategies.py`)

|     % | Samples | Location            |
| ----: | ------: | ------------------- |
| 85.7% |       6 | `strategies.py:121` |
| 14.3% |       1 | `strategies.py:119` |

##### `_GeneratorContextManager.__exit__` (`contextlib.py`)

|     % | Samples | Location            |
| ----: | ------: | ------------------- |
| 71.4% |       5 | `contextlib.py:257` |
| 14.3% |       1 | `contextlib.py:224` |
| 14.3% |       1 | `contextlib.py:230` |

##### `Untokenizer.untokenize` (`tokenize.py`)

|     % | Samples | Location          |
| ----: | ------: | ----------------- |
| 42.9% |       3 | `tokenize.py:230` |
| 14.3% |       1 | `tokenize.py:247` |
| 14.3% |       1 | `tokenize.py:263` |
| 14.3% |       1 | `tokenize.py:265` |
| 14.3% |       1 | `tokenize.py:271` |

##### `get_seeder_and_restorer.<locals>.restore_all` (`entropy.py`)

|     % | Samples | Location         |
| ----: | ------: | ---------------- |
| 57.1% |       4 | `entropy.py:236` |
| 42.9% |       3 | `entropy.py:238` |

##### `lazycache` (`<frozen linecache>`)

|     % | Samples | Location                 |
| ----: | ------: | ------------------------ |
| 60.0% |       3 | `<frozen linecache>:213` |
| 40.0% |       2 | `<frozen linecache>:215` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Location                                     |
| -----: | ------: | -------------------------------------------- |
| 100.0% |       1 | `<frozen importlib._bootstrap_external>:500` |

##### `Sequence.__iter__` (`<frozen _collections_abc>`)

|      % | Samples | Location                         |
| -----: | ------: | -------------------------------- |
| 100.0% |       1 | `<frozen _collections_abc>:1020` |

##### `getline` (`<frozen linecache>`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |       1 | `<frozen linecache>:27` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `_get_code_position` (`traceback.py`)

|      % | Samples | Caller                         | Location       |
| -----: | ------: | ------------------------------ | -------------- |
| 100.0% |     853 | `_walk_tb_with_full_positions` | `traceback.py` |

##### `(garbage collector)` (`<unknown>`)

|     % | Samples | Caller                                               | Location        |
| ----: | ------: | ---------------------------------------------------- | --------------- |
| 84.7% |     122 | `recursive_property.<locals>.forced_or_cached_value` | `strategies.py` |
|  9.0% |      13 | `SpanRecord.start_span`                              | `data.py`       |
|  2.1% |       3 | `StackSummary.format_frame_summary`                  | `traceback.py`  |
|  1.4% |       2 | `suppress.__exit__`                                  | `contextlib.py` |
|  1.4% |       2 | `_extract_caret_anchors_from_line_segment`           | `traceback.py`  |

##### `StackSummary._extract_from_extended_frame_gen` (`traceback.py`)

|     % | Samples | Caller                        | Location       |
| ----: | ------: | ----------------------------- | -------------- |
| 98.6% |      71 | `extract_tb`                  | `traceback.py` |
|  1.4% |       1 | `TracebackException.__init__` | `traceback.py` |

##### `checkcache` (`<frozen linecache>`)

|     % | Samples | Caller                                          | Location       |
| ----: | ------: | ----------------------------------------------- | -------------- |
| 97.3% |      36 | `StackSummary._extract_from_extended_frame_gen` | `traceback.py` |
|  2.7% |       1 | `findsource`                                    | `inspect.py`   |

##### `get_trimmed_traceback` (`escalation.py`)

|     % | Samples | Caller                                                   | Location        |
| ----: | ------: | -------------------------------------------------------- | --------------- |
| 60.0% |      18 | `StateForActualGivenExecution._execute_once_for_engine`  | `core.py`       |
| 23.3% |       7 | `InterestingOrigin.from_exception`                       | `escalation.py` |
| 10.0% |       3 | `given.<locals>.run_test_as_given.<locals>.wrapped_test` | `core.py`       |
|  6.7% |       2 | `StateForActualGivenExecution.run_engine`                | `core.py`       |

##### `parse` (`ast.py`)

|     % | Samples | Caller                                     | Location        |
| ----: | ------: | ------------------------------------------ | --------------- |
| 81.8% |      18 | `_extract_caret_anchors_from_line_segment` | `traceback.py`  |
|  9.1% |       2 | `StackSummary._should_show_carets`         | `traceback.py`  |
|  4.5% |       1 | `(garbage collector)`                      | `<unknown>`     |
|  4.5% |       1 | `_clean_source`                            | `reflection.py` |

##### `_walk_tb_with_full_positions` (`traceback.py`)

|     % | Samples | Caller                                          | Location       |
| ----: | ------: | ----------------------------------------------- | -------------- |
| 95.2% |      20 | `StackSummary._extract_from_extended_frame_gen` | `traceback.py` |
|  4.8% |       1 | `extract_tb`                                    | `traceback.py` |

##### `FrameSummary.line` (`traceback.py`)

|      % | Samples | Caller                                          | Location       |
| -----: | ------: | ----------------------------------------------- | -------------- |
| 100.0% |      19 | `StackSummary._extract_from_extended_frame_gen` | `traceback.py` |

##### `StateForActualGivenExecution._execute_once_for_engine` (`core.py`)

|      % | Samples | Caller                                       | Location    |
| -----: | ------: | -------------------------------------------- | ----------- |
| 100.0% |      18 | `ConjectureRunner.__stoppable_test_function` | `engine.py` |

##### `extract_tb` (`traceback.py`)

|     % | Samples | Caller                                                  | Location        |
| ----: | ------: | ------------------------------------------------------- | --------------- |
| 72.2% |      13 | `StateForActualGivenExecution._execute_once_for_engine` | `core.py`       |
| 16.7% |       3 | `get_trimmed_traceback`                                 | `escalation.py` |
| 11.1% |       2 | `InterestingOrigin.from_exception`                      | `escalation.py` |

##### `format_exception` (`traceback.py`)

|     % | Samples | Caller                  | Location        |
| ----: | ------: | ----------------------- | --------------- |
| 88.9% |      16 | `format_exception`      | `escalation.py` |
| 11.1% |       2 | `ExceptionInfo.getrepr` | `code.py`       |

##### `StackSummary.format_frame_summary` (`traceback.py`)

|      % | Samples | Caller                | Location       |
| -----: | ------: | --------------------- | -------------- |
| 100.0% |      15 | `StackSummary.format` | `traceback.py` |

##### `getsourcefile` (`inspect.py`)

|      % | Samples | Caller                  | Location        |
| -----: | ------: | ----------------------- | --------------- |
| 100.0% |      12 | `get_trimmed_traceback` | `escalation.py` |

##### `format_exception` (`escalation.py`)

|      % | Samples | Caller                                                  | Location  |
| -----: | ------: | ------------------------------------------------------- | --------- |
| 100.0% |      10 | `StateForActualGivenExecution._execute_once_for_engine` | `core.py` |

##### `Tracer.__exit__` (`scrutineer.py`)

|      % | Samples | Caller                                                  | Location  |
| -----: | ------: | ------------------------------------------------------- | --------- |
| 100.0% |      10 | `StateForActualGivenExecution._execute_once_for_engine` | `core.py` |

##### `StackSummary.format` (`traceback.py`)

|      % | Samples | Caller                      | Location       |
| -----: | ------: | --------------------------- | -------------- |
| 100.0% |       9 | `TracebackException.format` | `traceback.py` |

##### `FrameSummary._set_lines` (`traceback.py`)

|      % | Samples | Caller              | Location       |
| -----: | ------: | ------------------- | -------------- |
| 100.0% |       9 | `FrameSummary.line` | `traceback.py` |

##### `IntList._array_or_list` (`junkdrawer.py`)

|      % | Samples | Caller              | Location        |
| -----: | ------: | ------------------- | --------------- |
| 100.0% |       8 | `IntList.__upgrade` | `junkdrawer.py` |

##### `recursive_property.<locals>.forced_or_cached_value` (`strategies.py`)

|      % | Samples | Caller               | Location        |
| -----: | ------: | -------------------- | --------------- |
| 100.0% |       7 | `recursive_property` | `strategies.py` |

##### `_GeneratorContextManager.__exit__` (`contextlib.py`)

|     % | Samples | Caller                                                  | Location  |
| ----: | ------: | ------------------------------------------------------- | --------- |
| 85.7% |       6 | `StateForActualGivenExecution.execute_once`             | `core.py` |
| 14.3% |       1 | `StateForActualGivenExecution._execute_once_for_engine` | `core.py` |

##### `Untokenizer.untokenize` (`tokenize.py`)

|      % | Samples | Caller       | Location      |
| -----: | ------: | ------------ | ------------- |
| 100.0% |       7 | `untokenize` | `tokenize.py` |

##### `get_seeder_and_restorer.<locals>.restore_all` (`entropy.py`)

|      % | Samples | Caller               | Location     |
| -----: | ------: | -------------------- | ------------ |
| 100.0% |       7 | `deterministic_PRNG` | `entropy.py` |

##### `lazycache` (`<frozen linecache>`)

|      % | Samples | Caller                                          | Location       |
| -----: | ------: | ----------------------------------------------- | -------------- |
| 100.0% |       5 | `StackSummary._extract_from_extended_frame_gen` | `traceback.py` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Caller                  | Location                                 |
| -----: | ------: | ----------------------- | ---------------------------------------- |
| 100.0% |       1 | `SourceLoader.get_code` | `<frozen importlib._bootstrap_external>` |

##### `Sequence.__iter__` (`<frozen _collections_abc>`)

|      % | Samples | Caller                  | Location                    |
| -----: | ------: | ----------------------- | --------------------------- |
| 100.0% |       1 | `Sequence.__contains__` | `<frozen _collections_abc>` |

##### `getline` (`<frozen linecache>`)

|      % | Samples | Caller                    | Location       |
| -----: | ------: | ------------------------- | -------------- |
| 100.0% |       1 | `FrameSummary._set_lines` | `traceback.py` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|      % | Samples | Function                                                 | Location         |
| -----: | ------: | -------------------------------------------------------- | ---------------- |
| 100.0% |   1,466 | `_run_code`                                              | `<frozen runpy>` |
| 100.0% |   1,466 | `run_module`                                             | `<frozen runpy>` |
| 100.0% |   1,466 | `_run_module_as_main`                                    | `<frozen runpy>` |
|  99.9% |   1,464 | `_multicall`                                             | `_callers.py`    |
|  99.9% |   1,464 | `PluginManager._hookexec`                                | `_manager.py`    |
|  99.9% |   1,464 | `HookCaller.__call__`                                    | `_hooks.py`      |
|  99.9% |   1,464 | `_main`                                                  | `main.py`        |
|  99.9% |   1,464 | `wrap_session`                                           | `main.py`        |
|  99.9% |   1,464 | `pytest_cmdline_main`                                    | `main.py`        |
|  99.9% |   1,464 | `_main`                                                  | `__init__.py`    |
|  99.9% |   1,464 | `_console_main`                                          | `__init__.py`    |
|  99.9% |   1,464 | `<module>`                                               | `__main__.py`    |
|  99.9% |   1,464 | `_run_module_code`                                       | `<frozen runpy>` |
|  99.8% |   1,463 | `given.<locals>.run_test_as_given.<locals>.wrapped_test` | `core.py`        |
|  99.8% |   1,463 | `pytest_pyfunc_call`                                     | `python.py`      |
|  99.8% |   1,463 | `Function.runtest`                                       | `python.py`      |
|  99.8% |   1,463 | `pytest_runtest_call`                                    | `runner.py`      |
|  99.8% |   1,463 | `call_and_report.<locals>.<lambda>`                      | `runner.py`      |
|  99.8% |   1,463 | `CallInfo.from_call`                                     | `runner.py`      |
|  99.8% |   1,463 | `call_and_report`                                        | `runner.py`      |

#### Categories

##### Ours

|     % | Samples | Function                                                 | Location      |
| ----: | ------: | -------------------------------------------------------- | ------------- |
| 99.9% |   1,464 | `_multicall`                                             | `_callers.py` |
| 99.9% |   1,464 | `PluginManager._hookexec`                                | `_manager.py` |
| 99.9% |   1,464 | `HookCaller.__call__`                                    | `_hooks.py`   |
| 99.9% |   1,464 | `_main`                                                  | `main.py`     |
| 99.9% |   1,464 | `wrap_session`                                           | `main.py`     |
| 99.9% |   1,464 | `pytest_cmdline_main`                                    | `main.py`     |
| 99.9% |   1,464 | `_main`                                                  | `__init__.py` |
| 99.9% |   1,464 | `_console_main`                                          | `__init__.py` |
| 99.9% |   1,464 | `<module>`                                               | `__main__.py` |
| 99.8% |   1,463 | `given.<locals>.run_test_as_given.<locals>.wrapped_test` | `core.py`     |
| 99.8% |   1,463 | `pytest_pyfunc_call`                                     | `python.py`   |
| 99.8% |   1,463 | `Function.runtest`                                       | `python.py`   |
| 99.8% |   1,463 | `pytest_runtest_call`                                    | `runner.py`   |
| 99.8% |   1,463 | `call_and_report.<locals>.<lambda>`                      | `runner.py`   |
| 99.8% |   1,463 | `CallInfo.from_call`                                     | `runner.py`   |
| 99.8% |   1,463 | `call_and_report`                                        | `runner.py`   |
| 99.8% |   1,463 | `runtestprotocol`                                        | `runner.py`   |
| 99.8% |   1,463 | `pytest_runtest_protocol`                                | `runner.py`   |
| 99.8% |   1,463 | `pytest_runtestloop`                                     | `main.py`     |
| 99.7% |   1,462 | `accept.<locals>.inner`                                  | `debug.py`    |

##### Garbage collector

|    % | Samples | Function              | Location    |
| ---: | ------: | --------------------- | ----------- |
| 9.9% |     145 | `(garbage collector)` | `<unknown>` |

##### Standard library

|      % | Samples | Function                    | Location                                 |
| -----: | ------: | --------------------------- | ---------------------------------------- |
| 100.0% |   1,466 | `_run_code`                 | `<frozen runpy>`                         |
| 100.0% |   1,466 | `run_module`                | `<frozen runpy>`                         |
| 100.0% |   1,466 | `_run_module_as_main`       | `<frozen runpy>`                         |
|  99.9% |   1,464 | `_run_module_code`          | `<frozen runpy>`                         |
|   2.5% |      37 | `checkcache`                | `<frozen linecache>`                     |
|   0.3% |       5 | `lazycache`                 | `<frozen linecache>`                     |
|   0.1% |       2 | `_LoaderBasics.exec_module` | `<frozen importlib._bootstrap_external>` |
|   0.1% |       2 | `_load_unlocked`            | `<frozen importlib._bootstrap>`          |
|   0.1% |       2 | `_find_and_load_unlocked`   | `<frozen importlib._bootstrap>`          |
|   0.1% |       2 | `_find_and_load`            | `<frozen importlib._bootstrap>`          |
|   0.1% |       2 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>`          |
|   0.1% |       2 | `_get_module_details`       | `<frozen runpy>`                         |
|   0.1% |       1 | `_compile_bytecode`         | `<frozen importlib._bootstrap_external>` |
|   0.1% |       1 | `SourceLoader.get_code`     | `<frozen importlib._bootstrap_external>` |
|   0.1% |       1 | `Sequence.__iter__`         | `<frozen _collections_abc>`              |
|   0.1% |       1 | `Sequence.__contains__`     | `<frozen _collections_abc>`              |
|   0.1% |       1 | `getline`                   | `<frozen linecache>`                     |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `_run_code` (`<frozen runpy>`)

|      % | Samples | Callee       | Location         |
| -----: | ------: | ------------ | ---------------- |
| 100.0% |   1,466 | `run_module` | `<frozen runpy>` |
|  99.9% |   1,464 | `<module>`   | `__main__.py`    |

##### `run_module` (`<frozen runpy>`)

|     % | Samples | Callee                | Location         |
| ----: | ------: | --------------------- | ---------------- |
| 99.9% |   1,464 | `_run_module_code`    | `<frozen runpy>` |
|  0.1% |       2 | `_get_module_details` | `<frozen runpy>` |

##### `_run_module_as_main` (`<frozen runpy>`)

|      % | Samples | Callee      | Location         |
| -----: | ------: | ----------- | ---------------- |
| 100.0% |   1,466 | `_run_code` | `<frozen runpy>` |

##### `_multicall` (`_callers.py`)

|      % | Samples | Callee                    | Location    |
| -----: | ------: | ------------------------- | ----------- |
| 100.0% |   1,464 | `pytest_cmdline_main`     | `main.py`   |
|  99.9% |   1,463 | `pytest_pyfunc_call`      | `python.py` |
|  99.9% |   1,463 | `pytest_runtest_call`     | `runner.py` |
|  99.9% |   1,463 | `pytest_runtest_protocol` | `runner.py` |
|  99.9% |   1,463 | `pytest_runtestloop`      | `main.py`   |

##### `PluginManager._hookexec` (`_manager.py`)

|      % | Samples | Callee       | Location      |
| -----: | ------: | ------------ | ------------- |
| 100.0% |   1,464 | `_multicall` | `_callers.py` |

##### `HookCaller.__call__` (`_hooks.py`)

|      % | Samples | Callee                    | Location      |
| -----: | ------: | ------------------------- | ------------- |
| 100.0% |   1,464 | `PluginManager._hookexec` | `_manager.py` |

##### `_main` (`main.py`)

|      % | Samples | Callee                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |   1,464 | `HookCaller.__call__` | `_hooks.py` |

##### `wrap_session` (`main.py`)

|      % | Samples | Callee  | Location  |
| -----: | ------: | ------- | --------- |
| 100.0% |   1,464 | `_main` | `main.py` |

##### `pytest_cmdline_main` (`main.py`)

|      % | Samples | Callee         | Location  |
| -----: | ------: | -------------- | --------- |
| 100.0% |   1,464 | `wrap_session` | `main.py` |

##### `_main` (`__init__.py`)

|      % | Samples | Callee                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |   1,464 | `HookCaller.__call__` | `_hooks.py` |

##### `_console_main` (`__init__.py`)

|      % | Samples | Callee  | Location      |
| -----: | ------: | ------- | ------------- |
| 100.0% |   1,464 | `_main` | `__init__.py` |

##### `<module>` (`__main__.py`)

|      % | Samples | Callee          | Location      |
| -----: | ------: | --------------- | ------------- |
| 100.0% |   1,464 | `_console_main` | `__init__.py` |

##### `_run_module_code` (`<frozen runpy>`)

|      % | Samples | Callee      | Location         |
| -----: | ------: | ----------- | ---------------- |
| 100.0% |   1,464 | `_run_code` | `<frozen runpy>` |

##### `given.<locals>.run_test_as_given.<locals>.wrapped_test` (`core.py`)

|     % | Samples | Callee                                    | Location        |
| ----: | ------: | ----------------------------------------- | --------------- |
| 94.9% |   1,388 | `StateForActualGivenExecution.run_engine` | `core.py`       |
|  6.6% |      97 | `get_trimmed_traceback`                   | `escalation.py` |

##### `pytest_pyfunc_call` (`python.py`)

|     % | Samples | Callee                                                                     | Location                 |
| ----: | ------: | -------------------------------------------------------------------------- | ------------------------ |
| 12.9% |     188 | `test_find_large_union_list`                                               | `test_shrink_quality.py` |
|  9.4% |     138 | `test_minimize_one_of`                                                     | `test_shrink_quality.py` |
|  8.1% |     118 | `test_minimize_sets_of_sets`                                               | `test_shrink_quality.py` |
|  6.9% |     101 | `accept.<locals>.test_dictionary`                                          | `test_shrink_quality.py` |
|  6.8% |     100 | `test_minimize_multiple_elements_in_silly_large_int_range_min_is_not_dupe` | `test_shrink_quality.py` |

##### `Function.runtest` (`python.py`)

|      % | Samples | Callee                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |   1,463 | `HookCaller.__call__` | `_hooks.py` |

##### `pytest_runtest_call` (`runner.py`)

|      % | Samples | Callee             | Location    |
| -----: | ------: | ------------------ | ----------- |
| 100.0% |   1,463 | `Function.runtest` | `python.py` |

##### `call_and_report.<locals>.<lambda>` (`runner.py`)

|      % | Samples | Callee                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |   1,463 | `HookCaller.__call__` | `_hooks.py` |

##### `CallInfo.from_call` (`runner.py`)

|      % | Samples | Callee                              | Location    |
| -----: | ------: | ----------------------------------- | ----------- |
| 100.0% |   1,463 | `call_and_report.<locals>.<lambda>` | `runner.py` |

##### `call_and_report` (`runner.py`)

|      % | Samples | Callee               | Location    |
| -----: | ------: | -------------------- | ----------- |
| 100.0% |   1,463 | `CallInfo.from_call` | `runner.py` |

##### `runtestprotocol` (`runner.py`)

|      % | Samples | Callee            | Location    |
| -----: | ------: | ----------------- | ----------- |
| 100.0% |   1,463 | `call_and_report` | `runner.py` |

##### `pytest_runtest_protocol` (`runner.py`)

|      % | Samples | Callee            | Location    |
| -----: | ------: | ----------------- | ----------- |
| 100.0% |   1,463 | `runtestprotocol` | `runner.py` |

##### `pytest_runtestloop` (`main.py`)

|      % | Samples | Callee                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |   1,463 | `HookCaller.__call__` | `_hooks.py` |

##### `accept.<locals>.inner` (`debug.py`)

|      % | Samples | Callee                                                    | Location  |
| -----: | ------: | --------------------------------------------------------- | --------- |
| 100.0% |   1,462 | `given.<locals>.run_test_as_given.<locals>.wrapped_test`  | `core.py` |
|   0.1% |       2 | `StateForActualGivenExecution.execute_once.<locals>.test` | `core.py` |

##### `(garbage collector)` (`<unknown>`)

|    % | Samples | Callee  | Location |
| ---: | ------: | ------- | -------- |
| 0.7% |       1 | `parse` | `ast.py` |

##### `_LoaderBasics.exec_module` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Callee                      | Location                                 |
| -----: | ------: | --------------------------- | ---------------------------------------- |
| 100.0% |       2 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>`          |
|  50.0% |       1 | `SourceLoader.get_code`     | `<frozen importlib._bootstrap_external>` |

##### `_load_unlocked` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee                      | Location                                 |
| -----: | ------: | --------------------------- | ---------------------------------------- |
| 100.0% |       2 | `_LoaderBasics.exec_module` | `<frozen importlib._bootstrap_external>` |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee           | Location                        |
| -----: | ------: | ---------------- | ------------------------------- |
| 100.0% |       2 | `_load_unlocked` | `<frozen importlib._bootstrap>` |

##### `_find_and_load` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee                    | Location                        |
| -----: | ------: | ------------------------- | ------------------------------- |
| 100.0% |       2 | `_find_and_load_unlocked` | `<frozen importlib._bootstrap>` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee     | Location        |
| -----: | ------: | ---------- | --------------- |
| 100.0% |       2 | `<module>` | `decimal.py`    |
| 100.0% |       2 | `<module>` | `python_api.py` |
| 100.0% |       2 | `<module>` | `doctest.py`    |
| 100.0% |       2 | `<module>` | `__init__.py`   |
|  50.0% |       1 | `<module>` | `_pydecimal.py` |

##### `_get_module_details` (`<frozen runpy>`)

|      % | Samples | Callee                | Location                        |
| -----: | ------: | --------------------- | ------------------------------- |
| 100.0% |       2 | `_find_and_load`      | `<frozen importlib._bootstrap>` |
| 100.0% |       2 | `_get_module_details` | `<frozen runpy>`                |

##### `SourceLoader.get_code` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Callee              | Location                                 |
| -----: | ------: | ------------------- | ---------------------------------------- |
| 100.0% |       1 | `_compile_bytecode` | `<frozen importlib._bootstrap_external>` |

##### `Sequence.__contains__` (`<frozen _collections_abc>`)

|      % | Samples | Callee              | Location                    |
| -----: | ------: | ------------------- | --------------------------- |
| 100.0% |       1 | `Sequence.__iter__` | `<frozen _collections_abc>` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

Common call stack: `pytest_pyfunc_call` (`python.py`) ← `_multicall` (`_callers.py`) ← `PluginManager._hookexec` (`_manager.py`) ← `HookCaller.__call__` (`_hooks.py`) ← `Function.runtest` (`python.py`) ← `pytest_runtest_call` (`runner.py`) ← `_multicall` (`_callers.py`) ← `PluginManager._hookexec` (`_manager.py`) ← `HookCaller.__call__` (`_hooks.py`) ← `call_and_report.<locals>.<lambda>` (`runner.py`) ← `CallInfo.from_call` ← `call_and_report` ← `runtestprotocol` ← `pytest_runtest_protocol` ← `_multicall` (`_callers.py`) ← `PluginManager._hookexec` (`_manager.py`) ← `HookCaller.__call__` (`_hooks.py`) ← `pytest_runtestloop` (`main.py`) ← `_multicall` (`_callers.py`) ← `PluginManager._hookexec` (`_manager.py`) ← `HookCaller.__call__` (`_hooks.py`) ← `_main` (`main.py`) ← `wrap_session` ← `pytest_cmdline_main` ← `_multicall` (`_callers.py`) ← `PluginManager._hookexec` (`_manager.py`) ← `HookCaller.__call__` (`_hooks.py`) ← `_main` (`__init__.py`) ← `_console_main` ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code` ← `run_module` ← `_run_code` ← `_run_module_as_main`

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ---: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 3.0% |      44 | `(garbage collector)` ← `recursive_property.<locals>.forced_or_cached_value` (`strategies.py`) ← `recursive_property` ← `SearchStrategy.is_empty` ← `ConjectureData.draw` (`data.py`) ← `ListStrategy.do_draw` (`collections.py`) ← `ConjectureData.draw` (`data.py`) ← `BuildContext.prep_args_kwargs_from_strategies` (`control.py`) ← `StateForActualGivenExecution.execute_once.<locals>.run` (`core.py`) ← `default_executor` ← `StateForActualGivenExecution.execute_once` ← `StateForActualGivenExecution._execute_once_for_engine` ← `ConjectureRunner.__stoppable_test_function` (`engine.py`) ← `ConjectureRunner.test_function` ← `ConjectureRunner.cached_test_function` ← `Shrinker.cached_test_function` (`shrinker.py`) ← `Shrinker.try_shrinking_nodes` ← `Shrinker.minimize_nodes.<locals>.<lambda>` ← `Shrinker.consider` (`common.py`) ← `Integer.mask_high_bits.<locals>.try_mask` (`integer.py`) ← `find_integer` (`junkdrawer.py`) ← `Integer.mask_high_bits` (`integer.py`) ← `Integer.short_circuit` ← `Shrinker.run` (`common.py`) ← `Shrinker.shrink` ← `Shrinker.minimize_nodes` (`shrinker.py`) ← `Shrinker.minimize_individual_choices` ← `Shrinker.step.<locals>.<lambda>` ← `ChoiceTree.step` (`choicetree.py`) ← `Shrinker.step` (`shrinker.py`) ← `Shrinker.fixate_shrink_passes` ← `Shrinker.greedy_shrink` ← `Shrinker.shrink` ← `ConjectureRunner.shrink` (`engine.py`) ← `ConjectureRunner.shrink_interesting_test_cases` ← `ConjectureRunner._run` ← `ConjectureRunner.run` ← `StateForActualGivenExecution.run_engine` (`core.py`) ← `given.<locals>.run_test_as_given.<locals>.wrapped_test` ← `accept.<locals>.inner` (`debug.py`) ← `minimal` ← `test_minimize_multiple_elements_in_silly_large_int_range_min_is_not_dupe` (`test_shrink_quality.py`) |
| 2.2% |      32 | `_get_code_position` (`traceback.py`) ← `_walk_tb_with_full_positions` ← `StackSummary._extract_from_extended_frame_gen` ← `extract_tb` ← `get_trimmed_traceback` (`escalation.py`) ← `given.<locals>.run_test_as_given.<locals>.wrapped_test` (`core.py`) ← `accept.<locals>.inner` (`debug.py`) ← `minimal` ← `test_minimize_one_of` (`test_shrink_quality.py`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 1.8% |      27 | `_get_code_position` (`traceback.py`) ← `_walk_tb_with_full_positions` ← `StackSummary._extract_from_extended_frame_gen` ← `extract_tb` ← `StateForActualGivenExecution._execute_once_for_engine` (`core.py`) ← `ConjectureRunner.__stoppable_test_function` (`engine.py`) ← `ConjectureRunner.test_function` ← `ConjectureRunner.cached_test_function` ← `Shrinker.cached_test_function` (`shrinker.py`) ← `Shrinker.try_trivial_spans` ← `Shrinker.step.<locals>.<lambda>` ← `ChoiceTree.step` (`choicetree.py`) ← `Shrinker.step` (`shrinker.py`) ← `Shrinker.fixate_shrink_passes` ← `Shrinker.greedy_shrink` ← `Shrinker.shrink` ← `ConjectureRunner.shrink` (`engine.py`) ← `ConjectureRunner.shrink_interesting_test_cases` ← `ConjectureRunner._run` ← `ConjectureRunner.run` ← `StateForActualGivenExecution.run_engine` (`core.py`) ← `given.<locals>.run_test_as_given.<locals>.wrapped_test` ← `accept.<locals>.inner` (`debug.py`) ← `minimal` ← `test_find_large_union_list` (`test_shrink_quality.py`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 1.6% |      24 | `_get_code_position` (`traceback.py`) ← `_walk_tb_with_full_positions` ← `StackSummary._extract_from_extended_frame_gen` ← `extract_tb` ← `get_trimmed_traceback` (`escalation.py`) ← `InterestingOrigin.from_exception` ← `StateForActualGivenExecution._execute_once_for_engine` (`core.py`) ← `ConjectureRunner.__stoppable_test_function` (`engine.py`) ← `ConjectureRunner.test_function` ← `ConjectureRunner.cached_test_function` ← `Shrinker.cached_test_function` (`shrinker.py`) ← `Shrinker.try_trivial_spans` ← `Shrinker.step.<locals>.<lambda>` ← `ChoiceTree.step` (`choicetree.py`) ← `Shrinker.step` (`shrinker.py`) ← `Shrinker.fixate_shrink_passes` ← `Shrinker.greedy_shrink` ← `Shrinker.shrink` ← `ConjectureRunner.shrink` (`engine.py`) ← `ConjectureRunner.shrink_interesting_test_cases` ← `ConjectureRunner._run` ← `ConjectureRunner.run` ← `StateForActualGivenExecution.run_engine` (`core.py`) ← `given.<locals>.run_test_as_given.<locals>.wrapped_test` ← `accept.<locals>.inner` (`debug.py`) ← `minimal` ← `test_find_large_union_list` (`test_shrink_quality.py`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 1.6% |      23 | `_get_code_position` (`traceback.py`) ← `_walk_tb_with_full_positions` ← `StackSummary._extract_from_extended_frame_gen` ← `extract_tb` ← `get_trimmed_traceback` (`escalation.py`) ← `StateForActualGivenExecution._execute_once_for_engine` (`core.py`) ← `ConjectureRunner.__stoppable_test_function` (`engine.py`) ← `ConjectureRunner.test_function` ← `ConjectureRunner.cached_test_function` ← `Shrinker.cached_test_function` (`shrinker.py`) ← `Shrinker.try_trivial_spans` ← `Shrinker.step.<locals>.<lambda>` ← `ChoiceTree.step` (`choicetree.py`) ← `Shrinker.step` (`shrinker.py`) ← `Shrinker.fixate_shrink_passes` ← `Shrinker.greedy_shrink` ← `Shrinker.shrink` ← `ConjectureRunner.shrink` (`engine.py`) ← `ConjectureRunner.shrink_interesting_test_cases` ← `ConjectureRunner._run` ← `ConjectureRunner.run` ← `StateForActualGivenExecution.run_engine` (`core.py`) ← `given.<locals>.run_test_as_given.<locals>.wrapped_test` ← `accept.<locals>.inner` (`debug.py`) ← `minimal` ← `test_find_large_union_list` (`test_shrink_quality.py`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 1.4% |      20 | `_get_code_position` (`traceback.py`) ← `_walk_tb_with_full_positions` ← `StackSummary._extract_from_extended_frame_gen` ← `extract_tb` ← `get_trimmed_traceback` (`escalation.py`) ← `InterestingOrigin.from_exception` ← `StateForActualGivenExecution._execute_once_for_engine` (`core.py`) ← `ConjectureRunner.__stoppable_test_function` (`engine.py`) ← `ConjectureRunner.test_function` ← `ConjectureRunner.cached_test_function` ← `Shrinker.cached_test_function` (`shrinker.py`) ← `Shrinker.try_trivial_spans` ← `Shrinker.step.<locals>.<lambda>` ← `ChoiceTree.step` (`choicetree.py`) ← `Shrinker.step` (`shrinker.py`) ← `Shrinker.fixate_shrink_passes` ← `Shrinker.greedy_shrink` ← `Shrinker.shrink` ← `ConjectureRunner.shrink` (`engine.py`) ← `ConjectureRunner.shrink_interesting_test_cases` ← `ConjectureRunner._run` ← `ConjectureRunner.run` ← `StateForActualGivenExecution.run_engine` (`core.py`) ← `given.<locals>.run_test_as_given.<locals>.wrapped_test` ← `accept.<locals>.inner` (`debug.py`) ← `minimal` ← `test_minimize_list_of_lists` (`test_shrink_quality.py`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 1.2% |      17 | `_get_code_position` (`traceback.py`) ← `_walk_tb_with_full_positions` ← `StackSummary._extract_from_extended_frame_gen` ← `extract_tb` ← `get_trimmed_traceback` (`escalation.py`) ← `StateForActualGivenExecution.run_engine` (`core.py`) ← `given.<locals>.run_test_as_given.<locals>.wrapped_test` ← `accept.<locals>.inner` (`debug.py`) ← `minimal` ← `test_minimize_one_of` (`test_shrink_quality.py`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 1.1% |      16 | `_get_code_position` (`traceback.py`) ← `_walk_tb_with_full_positions` ← `StackSummary._extract_from_extended_frame_gen` ← `extract_tb` ← `StateForActualGivenExecution._execute_once_for_engine` (`core.py`) ← `ConjectureRunner.__stoppable_test_function` (`engine.py`) ← `ConjectureRunner.test_function` ← `ConjectureRunner.cached_test_function` ← `Shrinker.cached_test_function` (`shrinker.py`) ← `Shrinker.try_trivial_spans` ← `Shrinker.step.<locals>.<lambda>` ← `ChoiceTree.step` (`choicetree.py`) ← `Shrinker.step` (`shrinker.py`) ← `Shrinker.fixate_shrink_passes` ← `Shrinker.greedy_shrink` ← `Shrinker.shrink` ← `ConjectureRunner.shrink` (`engine.py`) ← `ConjectureRunner.shrink_interesting_test_cases` ← `ConjectureRunner._run` ← `ConjectureRunner.run` ← `StateForActualGivenExecution.run_engine` (`core.py`) ← `given.<locals>.run_test_as_given.<locals>.wrapped_test` ← `accept.<locals>.inner` (`debug.py`) ← `minimal` ← `test_minimize_list_of_lists` (`test_shrink_quality.py`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 1.0% |      15 | `(garbage collector)` ← `recursive_property.<locals>.forced_or_cached_value` (`strategies.py`) ← `recursive_property` ← `SearchStrategy.is_empty` ← `ConjectureData.draw` (`data.py`) ← `FilteredStrategy.do_filtered_draw` (`strategies.py`) ← `UniqueListStrategy.do_draw` (`collections.py`) ← `ConjectureData.draw` (`data.py`) ← `MappedStrategy.do_draw` (`strategies.py`) ← `ConjectureData.draw` (`data.py`) ← `ListStrategy.do_draw` (`collections.py`) ← `ConjectureData.draw` (`data.py`) ← `BuildContext.prep_args_kwargs_from_strategies` (`control.py`) ← `StateForActualGivenExecution.execute_once.<locals>.run` (`core.py`) ← `default_executor` ← `StateForActualGivenExecution.execute_once` ← `StateForActualGivenExecution._execute_once_for_engine` ← `ConjectureRunner.__stoppable_test_function` (`engine.py`) ← `ConjectureRunner.test_function` ← `ConjectureRunner.cached_test_function` ← `Shrinker.cached_test_function` (`shrinker.py`) ← `Shrinker.try_trivial_spans` ← `Shrinker.step.<locals>.<lambda>` ← `ChoiceTree.step` (`choicetree.py`) ← `Shrinker.step` (`shrinker.py`) ← `Shrinker.fixate_shrink_passes` ← `Shrinker.greedy_shrink` ← `Shrinker.shrink` ← `ConjectureRunner.shrink` (`engine.py`) ← `ConjectureRunner.shrink_interesting_test_cases` ← `ConjectureRunner._run` ← `ConjectureRunner.run` ← `StateForActualGivenExecution.run_engine` (`core.py`) ← `given.<locals>.run_test_as_given.<locals>.wrapped_test` ← `accept.<locals>.inner` (`debug.py`) ← `minimal` ← `test_find_large_union_list` (`test_shrink_quality.py`)                                                                                                                                                                                                               |
| 1.0% |      14 | `_get_code_position` (`traceback.py`) ← `_walk_tb_with_full_positions` ← `StackSummary._extract_from_extended_frame_gen` ← `extract_tb` ← `get_trimmed_traceback` (`escalation.py`) ← `StateForActualGivenExecution._execute_once_for_engine` (`core.py`) ← `ConjectureRunner.__stoppable_test_function` (`engine.py`) ← `ConjectureRunner.test_function` ← `ConjectureRunner.cached_test_function` ← `Shrinker.cached_test_function` (`shrinker.py`) ← `Shrinker.try_trivial_spans` ← `Shrinker.step.<locals>.<lambda>` ← `ChoiceTree.step` (`choicetree.py`) ← `Shrinker.step` (`shrinker.py`) ← `Shrinker.fixate_shrink_passes` ← `Shrinker.greedy_shrink` ← `Shrinker.shrink` ← `ConjectureRunner.shrink` (`engine.py`) ← `ConjectureRunner.shrink_interesting_test_cases` ← `ConjectureRunner._run` ← `ConjectureRunner.run` ← `StateForActualGivenExecution.run_engine` (`core.py`) ← `given.<locals>.run_test_as_given.<locals>.wrapped_test` ← `accept.<locals>.inner` (`debug.py`) ← `minimal` ← `test_minimize_sets_of_sets` (`test_shrink_quality.py`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 0.8% |      11 | `_get_code_position` (`traceback.py`) ← `_walk_tb_with_full_positions` ← `StackSummary._extract_from_extended_frame_gen` ← `extract_tb` ← `get_trimmed_traceback` (`escalation.py`) ← `StateForActualGivenExecution._execute_once_for_engine` (`core.py`) ← `ConjectureRunner.__stoppable_test_function` (`engine.py`) ← `ConjectureRunner.test_function` ← `ConjectureRunner.shrink_interesting_test_cases` ← `ConjectureRunner._run` ← `ConjectureRunner.run` ← `StateForActualGivenExecution.run_engine` (`core.py`) ← `given.<locals>.run_test_as_given.<locals>.wrapped_test` ← `accept.<locals>.inner` (`debug.py`) ← `minimal` ← `test_minimize_one_of` (`test_shrink_quality.py`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 0.7% |      10 | `_get_code_position` (`traceback.py`) ← `_walk_tb_with_full_positions` ← `StackSummary._extract_from_extended_frame_gen` ← `extract_tb` ← `get_trimmed_traceback` (`escalation.py`) ← `InterestingOrigin.from_exception` ← `StateForActualGivenExecution._execute_once_for_engine` (`core.py`) ← `ConjectureRunner.__stoppable_test_function` (`engine.py`) ← `ConjectureRunner.test_function` ← `ConjectureRunner.cached_test_function` ← `Shrinker.cached_test_function` (`shrinker.py`) ← `Shrinker.try_trivial_spans` ← `Shrinker.step.<locals>.<lambda>` ← `ChoiceTree.step` (`choicetree.py`) ← `Shrinker.step` (`shrinker.py`) ← `Shrinker.fixate_shrink_passes` ← `Shrinker.greedy_shrink` ← `Shrinker.shrink` ← `ConjectureRunner.shrink` (`engine.py`) ← `ConjectureRunner.shrink_interesting_test_cases` ← `ConjectureRunner._run` ← `ConjectureRunner.run` ← `StateForActualGivenExecution.run_engine` (`core.py`) ← `given.<locals>.run_test_as_given.<locals>.wrapped_test` ← `accept.<locals>.inner` (`debug.py`) ← `minimal` ← `test_can_ignore_left_hand_side_of_flatmap` (`test_shrink_quality.py`) ← `flaky.<locals>.accept.<locals>.inner` (`utils.py`) ← `accept.<locals>.test_can_ignore_left_hand_side_of_flatmap` (`test_shrink_quality.py`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 0.6% |       9 | `_get_code_position` (`traceback.py`) ← `_walk_tb_with_full_positions` ← `StackSummary._extract_from_extended_frame_gen` ← `extract_tb` ← `get_trimmed_traceback` (`escalation.py`) ← `InterestingOrigin.from_exception` ← `StateForActualGivenExecution._execute_once_for_engine` (`core.py`) ← `ConjectureRunner.__stoppable_test_function` (`engine.py`) ← `ConjectureRunner.test_function` ← `ConjectureRunner.cached_test_function` ← `Shrinker.cached_test_function` (`shrinker.py`) ← `Shrinker.try_trivial_spans` ← `Shrinker.step.<locals>.<lambda>` ← `ChoiceTree.step` (`choicetree.py`) ← `Shrinker.step` (`shrinker.py`) ← `Shrinker.fixate_shrink_passes` ← `Shrinker.greedy_shrink` ← `Shrinker.shrink` ← `ConjectureRunner.shrink` (`engine.py`) ← `ConjectureRunner.shrink_interesting_test_cases` ← `ConjectureRunner._run` ← `ConjectureRunner.run` ← `StateForActualGivenExecution.run_engine` (`core.py`) ← `given.<locals>.run_test_as_given.<locals>.wrapped_test` ← `accept.<locals>.inner` (`debug.py`) ← `minimal` ← `test_minimize_sets_of_sets` (`test_shrink_quality.py`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 0.5% |       8 | `_get_code_position` (`traceback.py`) ← `_walk_tb_with_full_positions` ← `StackSummary._extract_from_extended_frame_gen` ← `extract_tb` ← `get_trimmed_traceback` (`escalation.py`) ← `StateForActualGivenExecution._execute_once_for_engine` (`core.py`) ← `ConjectureRunner.__stoppable_test_function` (`engine.py`) ← `ConjectureRunner.test_function` ← `ConjectureRunner.cached_test_function` ← `Shrinker.cached_test_function` (`shrinker.py`) ← `Shrinker.try_trivial_spans` ← `Shrinker.step.<locals>.<lambda>` ← `ChoiceTree.step` (`choicetree.py`) ← `Shrinker.step` (`shrinker.py`) ← `Shrinker.fixate_shrink_passes` ← `Shrinker.greedy_shrink` ← `Shrinker.shrink` ← `ConjectureRunner.shrink` (`engine.py`) ← `ConjectureRunner.shrink_interesting_test_cases` ← `ConjectureRunner._run` ← `ConjectureRunner.run` ← `StateForActualGivenExecution.run_engine` (`core.py`) ← `given.<locals>.run_test_as_given.<locals>.wrapped_test` ← `accept.<locals>.inner` (`debug.py`) ← `minimal` ← `test_minimize_list_of_lists` (`test_shrink_quality.py`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 0.5% |       7 | `parse` (`ast.py`) ← `_extract_caret_anchors_from_line_segment` (`traceback.py`) ← `StackSummary.format_frame_summary` ← `StackSummary.format` ← `TracebackException.format` ← `format_exception` ← `format_exception` (`escalation.py`) ← `StateForActualGivenExecution._execute_once_for_engine` (`core.py`) ← `ConjectureRunner.__stoppable_test_function` (`engine.py`) ← `ConjectureRunner.test_function` ← `ConjectureRunner.cached_test_function` ← `Shrinker.cached_test_function` (`shrinker.py`) ← `Shrinker.try_trivial_spans` ← `Shrinker.step.<locals>.<lambda>` ← `ChoiceTree.step` (`choicetree.py`) ← `Shrinker.step` (`shrinker.py`) ← `Shrinker.fixate_shrink_passes` ← `Shrinker.greedy_shrink` ← `Shrinker.shrink` ← `ConjectureRunner.shrink` (`engine.py`) ← `ConjectureRunner.shrink_interesting_test_cases` ← `ConjectureRunner._run` ← `ConjectureRunner.run` ← `StateForActualGivenExecution.run_engine` (`core.py`) ← `given.<locals>.run_test_as_given.<locals>.wrapped_test` ← `accept.<locals>.inner` (`debug.py`) ← `minimal` ← `test_find_large_union_list` (`test_shrink_quality.py`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 0.5% |       7 | `Tracer.__exit__` (`scrutineer.py`) ← `StateForActualGivenExecution._execute_once_for_engine` (`core.py`) ← `ConjectureRunner.__stoppable_test_function` (`engine.py`) ← `ConjectureRunner.test_function` ← `ConjectureRunner.cached_test_function` ← `Shrinker.cached_test_function` (`shrinker.py`) ← `Shrinker.try_trivial_spans` ← `Shrinker.step.<locals>.<lambda>` ← `ChoiceTree.step` (`choicetree.py`) ← `Shrinker.step` (`shrinker.py`) ← `Shrinker.fixate_shrink_passes` ← `Shrinker.greedy_shrink` ← `Shrinker.shrink` ← `ConjectureRunner.shrink` (`engine.py`) ← `ConjectureRunner.shrink_interesting_test_cases` ← `ConjectureRunner._run` ← `ConjectureRunner.run` ← `StateForActualGivenExecution.run_engine` (`core.py`) ← `given.<locals>.run_test_as_given.<locals>.wrapped_test` ← `accept.<locals>.inner` (`debug.py`) ← `minimal` ← `test_minimize_multiple_elements_in_silly_large_int_range` (`test_shrink_quality.py`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 0.5% |       7 | `_get_code_position` (`traceback.py`) ← `_walk_tb_with_full_positions` ← `StackSummary._extract_from_extended_frame_gen` ← `extract_tb` ← `StateForActualGivenExecution._execute_once_for_engine` (`core.py`) ← `ConjectureRunner.__stoppable_test_function` (`engine.py`) ← `ConjectureRunner.test_function` ← `ConjectureRunner.cached_test_function` ← `ConjectureRunner.generate_new_test_cases` ← `ConjectureRunner._run` ← `ConjectureRunner.run` ← `StateForActualGivenExecution.run_engine` (`core.py`) ← `given.<locals>.run_test_as_given.<locals>.wrapped_test` ← `accept.<locals>.inner` (`debug.py`) ← `minimal` ← `test_minimize_one_of` (`test_shrink_quality.py`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 0.5% |       7 | `_get_code_position` (`traceback.py`) ← `_walk_tb_with_full_positions` ← `StackSummary._extract_from_extended_frame_gen` ← `extract_tb` ← `StateForActualGivenExecution._execute_once_for_engine` (`core.py`) ← `ConjectureRunner.__stoppable_test_function` (`engine.py`) ← `ConjectureRunner.test_function` ← `ConjectureRunner.shrink_interesting_test_cases` ← `ConjectureRunner._run` ← `ConjectureRunner.run` ← `StateForActualGivenExecution.run_engine` (`core.py`) ← `given.<locals>.run_test_as_given.<locals>.wrapped_test` ← `accept.<locals>.inner` (`debug.py`) ← `minimal` ← `test_minimize_one_of` (`test_shrink_quality.py`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 0.5% |       7 | `_get_code_position` (`traceback.py`) ← `_walk_tb_with_full_positions` ← `StackSummary._extract_from_extended_frame_gen` ← `extract_tb` ← `get_trimmed_traceback` (`escalation.py`) ← `StateForActualGivenExecution._execute_once_for_engine` (`core.py`) ← `ConjectureRunner.__stoppable_test_function` (`engine.py`) ← `ConjectureRunner.test_function` ← `ConjectureRunner.cached_test_function` ← `Shrinker.cached_test_function` (`shrinker.py`) ← `Shrinker.try_shrinking_nodes` ← `Shrinker.minimize_nodes.<locals>.<lambda>` ← `Shrinker.consider` (`common.py`) ← `Integer.mask_high_bits.<locals>.try_mask` (`integer.py`) ← `find_integer` (`junkdrawer.py`) ← `Integer.mask_high_bits` (`integer.py`) ← `Integer.short_circuit` ← `Shrinker.run` (`common.py`) ← `Shrinker.shrink` ← `Shrinker.minimize_nodes` (`shrinker.py`) ← `Shrinker.minimize_individual_choices` ← `Shrinker.step.<locals>.<lambda>` ← `ChoiceTree.step` (`choicetree.py`) ← `Shrinker.step` (`shrinker.py`) ← `Shrinker.fixate_shrink_passes` ← `Shrinker.greedy_shrink` ← `Shrinker.shrink` ← `ConjectureRunner.shrink` (`engine.py`) ← `ConjectureRunner.shrink_interesting_test_cases` ← `ConjectureRunner._run` ← `ConjectureRunner.run` ← `StateForActualGivenExecution.run_engine` (`core.py`) ← `given.<locals>.run_test_as_given.<locals>.wrapped_test` ← `accept.<locals>.inner` (`debug.py`) ← `minimal` ← `test_minimize_multiple_elements_in_silly_large_int_range_min_is_not_dupe` (`test_shrink_quality.py`)                                                                                                                                                                                                                                                                                  |
| 0.5% |       7 | `_get_code_position` (`traceback.py`) ← `_walk_tb_with_full_positions` ← `StackSummary._extract_from_extended_frame_gen` ← `extract_tb` ← `get_trimmed_traceback` (`escalation.py`) ← `given.<locals>.run_test_as_given.<locals>.wrapped_test` (`core.py`) ← `accept.<locals>.inner` (`debug.py`) ← `minimal` ← `test_dictionary` (`test_shrink_quality.py`) ← `flaky.<locals>.accept.<locals>.inner` (`utils.py`) ← `accept.<locals>.test_dictionary` (`test_shrink_quality.py`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
