# Sampling profile

Collected 1,596 samples.

| Category          |     % | Samples |
| ----------------- | ----: | ------: |
| Ours              | 82.4% |   1,315 |
| Garbage collector | 14.5% |     231 |
| Standard library  |  3.1% |      50 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|     % | Samples | Function                                                | Location             |
| ----: | ------: | ------------------------------------------------------- | -------------------- |
| 56.1% |     895 | `_get_code_position`                                    | `traceback.py`       |
| 14.5% |     231 | `(garbage collector)`                                   | `<unknown>`          |
|  4.6% |      74 | `StackSummary._extract_from_extended_frame_gen`         | `traceback.py`       |
|  2.8% |      45 | `checkcache`                                            | `<frozen linecache>` |
|  1.6% |      26 | `FrameSummary.line`                                     | `traceback.py`       |
|  1.5% |      24 | `extract_tb`                                            | `traceback.py`       |
|  1.5% |      24 | `get_trimmed_traceback`                                 | `escalation.py`      |
|  1.4% |      23 | `parse`                                                 | `ast.py`             |
|  1.4% |      22 | `_walk_tb_with_full_positions`                          | `traceback.py`       |
|  1.2% |      19 | `StateForActualGivenExecution._execute_once_for_engine` | `core.py`            |
|  0.8% |      12 | `format_exception`                                      | `traceback.py`       |
|  0.8% |      12 | `getsourcefile`                                         | `inspect.py`         |
|  0.6% |      10 | `TreeRecordingObserver.conclude_test`                   | `datatree.py`        |
|  0.5% |       8 | `StackSummary.format_frame_summary`                     | `traceback.py`       |
|  0.5% |       8 | `format_exception`                                      | `escalation.py`      |
|  0.4% |       7 | `Tracer.__exit__`                                       | `scrutineer.py`      |
|  0.4% |       7 | `ConjectureData.mark_interesting`                       | `data.py`            |
|  0.4% |       7 | `get_seeder_and_restorer.<locals>.restore_all`          | `entropy.py`         |
|  0.4% |       6 | `StackSummary.format`                                   | `traceback.py`       |
|  0.4% |       6 | `Untokenizer.untokenize`                                | `tokenize.py`        |

#### Categories

##### Ours

|     % | Samples | Function                                                | Location        |
| ----: | ------: | ------------------------------------------------------- | --------------- |
| 56.1% |     895 | `_get_code_position`                                    | `traceback.py`  |
|  4.6% |      74 | `StackSummary._extract_from_extended_frame_gen`         | `traceback.py`  |
|  1.6% |      26 | `FrameSummary.line`                                     | `traceback.py`  |
|  1.5% |      24 | `extract_tb`                                            | `traceback.py`  |
|  1.5% |      24 | `get_trimmed_traceback`                                 | `escalation.py` |
|  1.4% |      23 | `parse`                                                 | `ast.py`        |
|  1.4% |      22 | `_walk_tb_with_full_positions`                          | `traceback.py`  |
|  1.2% |      19 | `StateForActualGivenExecution._execute_once_for_engine` | `core.py`       |
|  0.8% |      12 | `format_exception`                                      | `traceback.py`  |
|  0.8% |      12 | `getsourcefile`                                         | `inspect.py`    |
|  0.6% |      10 | `TreeRecordingObserver.conclude_test`                   | `datatree.py`   |
|  0.5% |       8 | `StackSummary.format_frame_summary`                     | `traceback.py`  |
|  0.5% |       8 | `format_exception`                                      | `escalation.py` |
|  0.4% |       7 | `Tracer.__exit__`                                       | `scrutineer.py` |
|  0.4% |       7 | `ConjectureData.mark_interesting`                       | `data.py`       |
|  0.4% |       7 | `get_seeder_and_restorer.<locals>.restore_all`          | `entropy.py`    |
|  0.4% |       6 | `StackSummary.format`                                   | `traceback.py`  |
|  0.4% |       6 | `Untokenizer.untokenize`                                | `tokenize.py`   |
|  0.3% |       5 | `recursive_property.<locals>.forced_or_cached_value`    | `strategies.py` |
|  0.3% |       5 | `ConjectureRunner.new_conjecture_data`                  | `engine.py`     |

##### Garbage collector

|     % | Samples | Function              | Location    |
| ----: | ------: | --------------------- | ----------- |
| 14.5% |     231 | `(garbage collector)` | `<unknown>` |

##### Standard library

|    % | Samples | Function      | Location                    |
| ---: | ------: | ------------- | --------------------------- |
| 2.8% |      45 | `checkcache`  | `<frozen linecache>`        |
| 0.3% |       4 | `lazycache`   | `<frozen linecache>`        |
| 0.1% |       1 | `Mapping.get` | `<frozen _collections_abc>` |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `_get_code_position` (`traceback.py`)

|     % | Samples | Location           |
| ----: | ------: | ------------------ |
| 99.7% |     892 | `traceback.py:475` |
|  0.3% |       3 | `traceback.py:474` |

##### `StackSummary._extract_from_extended_frame_gen` (`traceback.py`)

|     % | Samples | Location           |
| ----: | ------: | ------------------ |
| 63.5% |      47 | `traceback.py:529` |
| 16.2% |      12 | `traceback.py:548` |
| 12.2% |       9 | `traceback.py:553` |
|  4.1% |       3 | `traceback.py:541` |
|  1.4% |       1 | `traceback.py:530` |

##### `checkcache` (`<frozen linecache>`)

|     % | Samples | Location                |
| ----: | ------: | ----------------------- |
| 80.0% |      36 | `<frozen linecache>:98` |
|  8.9% |       4 | `<frozen linecache>:94` |
|  6.7% |       3 | `<frozen linecache>:84` |
|  2.2% |       1 | `<frozen linecache>:82` |
|  2.2% |       1 | `<frozen linecache>:74` |

##### `FrameSummary.line` (`traceback.py`)

|     % | Samples | Location           |
| ----: | ------: | ------------------ |
| 92.3% |      24 | `traceback.py:422` |
|  7.7% |       2 | `traceback.py:426` |

##### `extract_tb` (`traceback.py`)

|     % | Samples | Location           |
| ----: | ------: | ------------------ |
| 95.8% |      23 | `traceback.py:123` |
|  4.2% |       1 | `traceback.py:110` |

##### `get_trimmed_traceback` (`escalation.py`)

|     % | Samples | Location           |
| ----: | ------: | ------------------ |
| 50.0% |      12 | `escalation.py:76` |
| 25.0% |       6 | `escalation.py:85` |
| 20.8% |       5 | `escalation.py:75` |
|  4.2% |       1 | `escalation.py:78` |

##### `parse` (`ast.py`)

|      % | Samples | Location    |
| -----: | ------: | ----------- |
| 100.0% |      23 | `ast.py:46` |

##### `_walk_tb_with_full_positions` (`traceback.py`)

|      % | Samples | Location           |
| -----: | ------: | ------------------ |
| 100.0% |      22 | `traceback.py:461` |

##### `StateForActualGivenExecution._execute_once_for_engine` (`core.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 42.1% |       8 | `core.py:1284` |
| 26.3% |       5 | `core.py:1315` |
| 10.5% |       2 | `core.py:1322` |
|  5.3% |       1 | `core.py:1307` |
|  5.3% |       1 | `core.py:1239` |

##### `format_exception` (`traceback.py`)

|     % | Samples | Location           |
| ----: | ------: | ------------------ |
| 91.7% |      11 | `traceback.py:200` |
|  8.3% |       1 | `traceback.py:201` |

##### `getsourcefile` (`inspect.py`)

|     % | Samples | Location         |
| ----: | ------: | ---------------- |
| 33.3% |       4 | `inspect.py:890` |
| 25.0% |       3 | `inspect.py:892` |
| 16.7% |       2 | `inspect.py:895` |
|  8.3% |       1 | `inspect.py:898` |
|  8.3% |       1 | `inspect.py:891` |

##### `TreeRecordingObserver.conclude_test` (`datatree.py`)

|     % | Samples | Location           |
| ----: | ------: | ------------------ |
| 50.0% |       5 | `datatree.py:1194` |
| 20.0% |       2 | `datatree.py:1168` |
| 10.0% |       1 | `datatree.py:1157` |
| 10.0% |       1 | `datatree.py:1189` |
| 10.0% |       1 | `datatree.py:1190` |

##### `StackSummary.format_frame_summary` (`traceback.py`)

|     % | Samples | Location           |
| ----: | ------: | ------------------ |
| 37.5% |       3 | `traceback.py:618` |
| 25.0% |       2 | `traceback.py:634` |
| 25.0% |       2 | `traceback.py:644` |
| 12.5% |       1 | `traceback.py:603` |

##### `format_exception` (`escalation.py`)

|     % | Samples | Location            |
| ----: | ------: | ------------------- |
| 50.0% |       4 | `escalation.py:166` |
| 25.0% |       2 | `escalation.py:163` |
| 12.5% |       1 | `escalation.py:175` |
| 12.5% |       1 | `escalation.py:164` |

##### `Tracer.__exit__` (`scrutineer.py`)

|      % | Samples | Location            |
| -----: | ------: | ------------------- |
| 100.0% |       7 | `scrutineer.py:146` |

##### `ConjectureData.mark_interesting` (`data.py`)

|      % | Samples | Location       |
| -----: | ------: | -------------- |
| 100.0% |       7 | `data.py:1456` |

##### `get_seeder_and_restorer.<locals>.restore_all` (`entropy.py`)

|     % | Samples | Location         |
| ----: | ------: | ---------------- |
| 71.4% |       5 | `entropy.py:236` |
| 14.3% |       1 | `entropy.py:238` |
| 14.3% |       1 | `entropy.py:235` |

##### `StackSummary.format` (`traceback.py`)

|      % | Samples | Location           |
| -----: | ------: | ------------------ |
| 100.0% |       6 | `traceback.py:811` |

##### `Untokenizer.untokenize` (`tokenize.py`)

|     % | Samples | Location          |
| ----: | ------: | ----------------- |
| 33.3% |       2 | `tokenize.py:230` |
| 33.3% |       2 | `tokenize.py:264` |
| 16.7% |       1 | `tokenize.py:265` |
| 16.7% |       1 | `tokenize.py:263` |

##### `recursive_property.<locals>.forced_or_cached_value` (`strategies.py`)

|     % | Samples | Location            |
| ----: | ------: | ------------------- |
| 60.0% |       3 | `strategies.py:121` |
| 40.0% |       2 | `strategies.py:119` |

##### `ConjectureRunner.new_conjecture_data` (`engine.py`)

|      % | Samples | Location         |
| -----: | ------: | ---------------- |
| 100.0% |       5 | `engine.py:1670` |

##### `lazycache` (`<frozen linecache>`)

|     % | Samples | Location                 |
| ----: | ------: | ------------------------ |
| 75.0% |       3 | `<frozen linecache>:215` |
| 25.0% |       1 | `<frozen linecache>:214` |

##### `Mapping.get` (`<frozen _collections_abc>`)

|      % | Samples | Location                        |
| -----: | ------: | ------------------------------- |
| 100.0% |       1 | `<frozen _collections_abc>:795` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `_get_code_position` (`traceback.py`)

|      % | Samples | Caller                         | Location       |
| -----: | ------: | ------------------------------ | -------------- |
| 100.0% |     895 | `_walk_tb_with_full_positions` | `traceback.py` |

##### `(garbage collector)` (`<unknown>`)

|     % | Samples | Caller                                               | Location        |
| ----: | ------: | ---------------------------------------------------- | --------------- |
| 57.6% |     133 | `recursive_property.<locals>.forced_or_cached_value` | `strategies.py` |
| 26.4% |      61 | `namedtuple.<locals>._make`                          | `__init__.py`   |
|  6.9% |      16 | `SpanRecord.start_span`                              | `data.py`       |
|  2.2% |       5 | `StackSummary.format_frame_summary`                  | `traceback.py`  |
|  1.3% |       3 | `parse`                                              | `ast.py`        |

##### `StackSummary._extract_from_extended_frame_gen` (`traceback.py`)

|     % | Samples | Caller                        | Location       |
| ----: | ------: | ----------------------------- | -------------- |
| 97.3% |      72 | `extract_tb`                  | `traceback.py` |
|  1.4% |       1 | `TracebackException.__init__` | `traceback.py` |
|  1.4% |       1 | `__init__`                    | `__init__`     |

##### `checkcache` (`<frozen linecache>`)

|      % | Samples | Caller                                          | Location       |
| -----: | ------: | ----------------------------------------------- | -------------- |
| 100.0% |      45 | `StackSummary._extract_from_extended_frame_gen` | `traceback.py` |

##### `FrameSummary.line` (`traceback.py`)

|      % | Samples | Caller                                          | Location       |
| -----: | ------: | ----------------------------------------------- | -------------- |
| 100.0% |      26 | `StackSummary._extract_from_extended_frame_gen` | `traceback.py` |

##### `extract_tb` (`traceback.py`)

|     % | Samples | Caller                                                  | Location        |
| ----: | ------: | ------------------------------------------------------- | --------------- |
| 62.5% |      15 | `StateForActualGivenExecution._execute_once_for_engine` | `core.py`       |
| 29.2% |       7 | `get_trimmed_traceback`                                 | `escalation.py` |
|  8.3% |       2 | `InterestingOrigin.from_exception`                      | `escalation.py` |

##### `get_trimmed_traceback` (`escalation.py`)

|     % | Samples | Caller                                                   | Location        |
| ----: | ------: | -------------------------------------------------------- | --------------- |
| 70.8% |      17 | `StateForActualGivenExecution._execute_once_for_engine`  | `core.py`       |
| 16.7% |       4 | `InterestingOrigin.from_exception`                       | `escalation.py` |
|  8.3% |       2 | `StateForActualGivenExecution.run_engine`                | `core.py`       |
|  4.2% |       1 | `given.<locals>.run_test_as_given.<locals>.wrapped_test` | `core.py`       |

##### `parse` (`ast.py`)

|     % | Samples | Caller                                     | Location        |
| ----: | ------: | ------------------------------------------ | --------------- |
| 91.3% |      21 | `_extract_caret_anchors_from_line_segment` | `traceback.py`  |
|  4.3% |       1 | `StackSummary._should_show_carets`         | `traceback.py`  |
|  4.3% |       1 | `_clean_source`                            | `reflection.py` |

##### `_walk_tb_with_full_positions` (`traceback.py`)

|      % | Samples | Caller                                          | Location       |
| -----: | ------: | ----------------------------------------------- | -------------- |
| 100.0% |      22 | `StackSummary._extract_from_extended_frame_gen` | `traceback.py` |

##### `StateForActualGivenExecution._execute_once_for_engine` (`core.py`)

|      % | Samples | Caller                                       | Location    |
| -----: | ------: | -------------------------------------------- | ----------- |
| 100.0% |      19 | `ConjectureRunner.__stoppable_test_function` | `engine.py` |

##### `format_exception` (`traceback.py`)

|     % | Samples | Caller                  | Location        |
| ----: | ------: | ----------------------- | --------------- |
| 83.3% |      10 | `format_exception`      | `escalation.py` |
| 16.7% |       2 | `ExceptionInfo.getrepr` | `code.py`       |

##### `getsourcefile` (`inspect.py`)

|      % | Samples | Caller                  | Location        |
| -----: | ------: | ----------------------- | --------------- |
| 100.0% |      12 | `get_trimmed_traceback` | `escalation.py` |

##### `TreeRecordingObserver.conclude_test` (`datatree.py`)

|      % | Samples | Caller                  | Location  |
| -----: | ------: | ----------------------- | --------- |
| 100.0% |      10 | `ConjectureData.freeze` | `data.py` |

##### `StackSummary.format_frame_summary` (`traceback.py`)

|      % | Samples | Caller                | Location       |
| -----: | ------: | --------------------- | -------------- |
| 100.0% |       8 | `StackSummary.format` | `traceback.py` |

##### `format_exception` (`escalation.py`)

|     % | Samples | Caller                                                  | Location  |
| ----: | ------: | ------------------------------------------------------- | --------- |
| 87.5% |       7 | `StateForActualGivenExecution._execute_once_for_engine` | `core.py` |
| 12.5% |       1 | `StateForActualGivenExecution.run_engine`               | `core.py` |

##### `Tracer.__exit__` (`scrutineer.py`)

|      % | Samples | Caller                                                  | Location  |
| -----: | ------: | ------------------------------------------------------- | --------- |
| 100.0% |       7 | `StateForActualGivenExecution._execute_once_for_engine` | `core.py` |

##### `ConjectureData.mark_interesting` (`data.py`)

|      % | Samples | Caller                                                  | Location  |
| -----: | ------: | ------------------------------------------------------- | --------- |
| 100.0% |       7 | `StateForActualGivenExecution._execute_once_for_engine` | `core.py` |

##### `get_seeder_and_restorer.<locals>.restore_all` (`entropy.py`)

|      % | Samples | Caller               | Location     |
| -----: | ------: | -------------------- | ------------ |
| 100.0% |       7 | `deterministic_PRNG` | `entropy.py` |

##### `StackSummary.format` (`traceback.py`)

|      % | Samples | Caller                      | Location       |
| -----: | ------: | --------------------------- | -------------- |
| 100.0% |       6 | `TracebackException.format` | `traceback.py` |

##### `Untokenizer.untokenize` (`tokenize.py`)

|      % | Samples | Caller       | Location      |
| -----: | ------: | ------------ | ------------- |
| 100.0% |       6 | `untokenize` | `tokenize.py` |

##### `recursive_property.<locals>.forced_or_cached_value` (`strategies.py`)

|     % | Samples | Caller                              | Location        |
| ----: | ------: | ----------------------------------- | --------------- |
| 60.0% |       3 | `recursive_property`                | `strategies.py` |
| 40.0% |       2 | `recursive_property.<locals>.recur` | `strategies.py` |

##### `ConjectureRunner.new_conjecture_data` (`engine.py`)

|     % | Samples | Caller                                     | Location    |
| ----: | ------: | ------------------------------------------ | ----------- |
| 80.0% |       4 | `ConjectureRunner.cached_test_function`    | `engine.py` |
| 20.0% |       1 | `ConjectureRunner.generate_new_test_cases` | `engine.py` |

##### `lazycache` (`<frozen linecache>`)

|      % | Samples | Caller                                          | Location       |
| -----: | ------: | ----------------------------------------------- | -------------- |
| 100.0% |       4 | `StackSummary._extract_from_extended_frame_gen` | `traceback.py` |

##### `Mapping.get` (`<frozen _collections_abc>`)

|      % | Samples | Caller                  | Location        |
| -----: | ------: | ----------------------- | --------------- |
| 100.0% |       1 | `get_trimmed_traceback` | `escalation.py` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|      % | Samples | Function                                                 | Location         |
| -----: | ------: | -------------------------------------------------------- | ---------------- |
| 100.0% |   1,596 | `_run_code`                                              | `<frozen runpy>` |
| 100.0% |   1,596 | `run_module`                                             | `<frozen runpy>` |
| 100.0% |   1,596 | `_run_module_as_main`                                    | `<frozen runpy>` |
|  99.9% |   1,595 | `_multicall`                                             | `_callers.py`    |
|  99.9% |   1,595 | `PluginManager._hookexec`                                | `_manager.py`    |
|  99.9% |   1,595 | `HookCaller.__call__`                                    | `_hooks.py`      |
|  99.9% |   1,595 | `_main`                                                  | `__init__.py`    |
|  99.9% |   1,595 | `_console_main`                                          | `__init__.py`    |
|  99.9% |   1,595 | `<module>`                                               | `__main__.py`    |
|  99.9% |   1,595 | `_run_module_code`                                       | `<frozen runpy>` |
|  99.9% |   1,594 | `given.<locals>.run_test_as_given.<locals>.wrapped_test` | `core.py`        |
|  99.9% |   1,594 | `pytest_pyfunc_call`                                     | `python.py`      |
|  99.9% |   1,594 | `Function.runtest`                                       | `python.py`      |
|  99.9% |   1,594 | `pytest_runtest_call`                                    | `runner.py`      |
|  99.9% |   1,594 | `call_and_report.<locals>.<lambda>`                      | `runner.py`      |
|  99.9% |   1,594 | `CallInfo.from_call`                                     | `runner.py`      |
|  99.9% |   1,594 | `call_and_report`                                        | `runner.py`      |
|  99.9% |   1,594 | `runtestprotocol`                                        | `runner.py`      |
|  99.9% |   1,594 | `pytest_runtest_protocol`                                | `runner.py`      |
|  99.9% |   1,594 | `pytest_runtestloop`                                     | `main.py`        |

#### Categories

##### Ours

|     % | Samples | Function                                                 | Location      |
| ----: | ------: | -------------------------------------------------------- | ------------- |
| 99.9% |   1,595 | `_multicall`                                             | `_callers.py` |
| 99.9% |   1,595 | `PluginManager._hookexec`                                | `_manager.py` |
| 99.9% |   1,595 | `HookCaller.__call__`                                    | `_hooks.py`   |
| 99.9% |   1,595 | `_main`                                                  | `__init__.py` |
| 99.9% |   1,595 | `_console_main`                                          | `__init__.py` |
| 99.9% |   1,595 | `<module>`                                               | `__main__.py` |
| 99.9% |   1,594 | `given.<locals>.run_test_as_given.<locals>.wrapped_test` | `core.py`     |
| 99.9% |   1,594 | `pytest_pyfunc_call`                                     | `python.py`   |
| 99.9% |   1,594 | `Function.runtest`                                       | `python.py`   |
| 99.9% |   1,594 | `pytest_runtest_call`                                    | `runner.py`   |
| 99.9% |   1,594 | `call_and_report.<locals>.<lambda>`                      | `runner.py`   |
| 99.9% |   1,594 | `CallInfo.from_call`                                     | `runner.py`   |
| 99.9% |   1,594 | `call_and_report`                                        | `runner.py`   |
| 99.9% |   1,594 | `runtestprotocol`                                        | `runner.py`   |
| 99.9% |   1,594 | `pytest_runtest_protocol`                                | `runner.py`   |
| 99.9% |   1,594 | `pytest_runtestloop`                                     | `main.py`     |
| 99.9% |   1,594 | `_main`                                                  | `main.py`     |
| 99.9% |   1,594 | `wrap_session`                                           | `main.py`     |
| 99.9% |   1,594 | `pytest_cmdline_main`                                    | `main.py`     |
| 99.8% |   1,593 | `accept.<locals>.inner`                                  | `debug.py`    |

##### Garbage collector

|     % | Samples | Function              | Location    |
| ----: | ------: | --------------------- | ----------- |
| 14.5% |     231 | `(garbage collector)` | `<unknown>` |

##### Standard library

|      % | Samples | Function                    | Location                                 |
| -----: | ------: | --------------------------- | ---------------------------------------- |
| 100.0% |   1,596 | `_run_code`                 | `<frozen runpy>`                         |
| 100.0% |   1,596 | `run_module`                | `<frozen runpy>`                         |
| 100.0% |   1,596 | `_run_module_as_main`       | `<frozen runpy>`                         |
|  99.9% |   1,595 | `_run_module_code`          | `<frozen runpy>`                         |
|   2.8% |      45 | `checkcache`                | `<frozen linecache>`                     |
|   0.3% |       4 | `lazycache`                 | `<frozen linecache>`                     |
|   0.1% |       2 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>`          |
|   0.1% |       2 | `_load_unlocked`            | `<frozen importlib._bootstrap>`          |
|   0.1% |       2 | `_find_and_load_unlocked`   | `<frozen importlib._bootstrap>`          |
|   0.1% |       2 | `_find_and_load`            | `<frozen importlib._bootstrap>`          |
|   0.1% |       1 | `_LoaderBasics.exec_module` | `<frozen importlib._bootstrap_external>` |
|   0.1% |       1 | `_get_module_details`       | `<frozen runpy>`                         |
|   0.1% |       1 | `_handle_fromlist`          | `<frozen importlib._bootstrap>`          |
|   0.1% |       1 | `_gcd_import`               | `<frozen importlib._bootstrap>`          |
|   0.1% |       1 | `Mapping.get`               | `<frozen _collections_abc>`              |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `_run_code` (`<frozen runpy>`)

|      % | Samples | Callee       | Location         |
| -----: | ------: | ------------ | ---------------- |
| 100.0% |   1,596 | `run_module` | `<frozen runpy>` |
|  99.9% |   1,595 | `<module>`   | `__main__.py`    |

##### `run_module` (`<frozen runpy>`)

|     % | Samples | Callee                | Location         |
| ----: | ------: | --------------------- | ---------------- |
| 99.9% |   1,595 | `_run_module_code`    | `<frozen runpy>` |
|  0.1% |       1 | `_get_module_details` | `<frozen runpy>` |

##### `_run_module_as_main` (`<frozen runpy>`)

|      % | Samples | Callee      | Location         |
| -----: | ------: | ----------- | ---------------- |
| 100.0% |   1,596 | `_run_code` | `<frozen runpy>` |

##### `_multicall` (`_callers.py`)

|     % | Samples | Callee                    | Location    |
| ----: | ------: | ------------------------- | ----------- |
| 99.9% |   1,594 | `pytest_pyfunc_call`      | `python.py` |
| 99.9% |   1,594 | `pytest_runtest_call`     | `runner.py` |
| 99.9% |   1,594 | `pytest_runtest_protocol` | `runner.py` |
| 99.9% |   1,594 | `pytest_runtestloop`      | `main.py`   |
| 99.9% |   1,594 | `pytest_cmdline_main`     | `main.py`   |

##### `PluginManager._hookexec` (`_manager.py`)

|      % | Samples | Callee       | Location      |
| -----: | ------: | ------------ | ------------- |
| 100.0% |   1,595 | `_multicall` | `_callers.py` |

##### `HookCaller.__call__` (`_hooks.py`)

|      % | Samples | Callee                    | Location      |
| -----: | ------: | ------------------------- | ------------- |
| 100.0% |   1,595 | `PluginManager._hookexec` | `_manager.py` |

##### `_main` (`__init__.py`)

|     % | Samples | Callee                | Location      |
| ----: | ------: | --------------------- | ------------- |
| 99.9% |   1,594 | `HookCaller.__call__` | `_hooks.py`   |
|  0.1% |       1 | `_prepareconfig`      | `__init__.py` |

##### `_console_main` (`__init__.py`)

|      % | Samples | Callee  | Location      |
| -----: | ------: | ------- | ------------- |
| 100.0% |   1,595 | `_main` | `__init__.py` |

##### `<module>` (`__main__.py`)

|      % | Samples | Callee          | Location      |
| -----: | ------: | --------------- | ------------- |
| 100.0% |   1,595 | `_console_main` | `__init__.py` |

##### `_run_module_code` (`<frozen runpy>`)

|      % | Samples | Callee      | Location         |
| -----: | ------: | ----------- | ---------------- |
| 100.0% |   1,595 | `_run_code` | `<frozen runpy>` |

##### `given.<locals>.run_test_as_given.<locals>.wrapped_test` (`core.py`)

|     % | Samples | Callee                                    | Location        |
| ----: | ------: | ----------------------------------------- | --------------- |
| 96.2% |   1,533 | `StateForActualGivenExecution.run_engine` | `core.py`       |
|  5.5% |      88 | `get_trimmed_traceback`                   | `escalation.py` |
|  0.1% |       1 | `get_random_for_wrapped_test`             | `core.py`       |

##### `pytest_pyfunc_call` (`python.py`)

|     % | Samples | Callee                                                                     | Location                 |
| ----: | ------: | -------------------------------------------------------------------------- | ------------------------ |
| 12.8% |     204 | `test_find_large_union_list`                                               | `test_shrink_quality.py` |
|  9.3% |     148 | `test_minimize_one_of`                                                     | `test_shrink_quality.py` |
|  8.1% |     129 | `test_minimize_sets_of_sets`                                               | `test_shrink_quality.py` |
|  8.0% |     128 | `accept.<locals>.test_lowering_together_negative`                          | `test_shrink_quality.py` |
|  7.1% |     113 | `test_minimize_multiple_elements_in_silly_large_int_range_min_is_not_dupe` | `test_shrink_quality.py` |

##### `Function.runtest` (`python.py`)

|      % | Samples | Callee                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |   1,594 | `HookCaller.__call__` | `_hooks.py` |

##### `pytest_runtest_call` (`runner.py`)

|      % | Samples | Callee             | Location    |
| -----: | ------: | ------------------ | ----------- |
| 100.0% |   1,594 | `Function.runtest` | `python.py` |

##### `call_and_report.<locals>.<lambda>` (`runner.py`)

|      % | Samples | Callee                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |   1,594 | `HookCaller.__call__` | `_hooks.py` |

##### `CallInfo.from_call` (`runner.py`)

|      % | Samples | Callee                              | Location    |
| -----: | ------: | ----------------------------------- | ----------- |
| 100.0% |   1,594 | `call_and_report.<locals>.<lambda>` | `runner.py` |

##### `call_and_report` (`runner.py`)

|      % | Samples | Callee               | Location    |
| -----: | ------: | -------------------- | ----------- |
| 100.0% |   1,594 | `CallInfo.from_call` | `runner.py` |

##### `runtestprotocol` (`runner.py`)

|      % | Samples | Callee            | Location    |
| -----: | ------: | ----------------- | ----------- |
| 100.0% |   1,594 | `call_and_report` | `runner.py` |

##### `pytest_runtest_protocol` (`runner.py`)

|      % | Samples | Callee            | Location    |
| -----: | ------: | ----------------- | ----------- |
| 100.0% |   1,594 | `runtestprotocol` | `runner.py` |

##### `pytest_runtestloop` (`main.py`)

|      % | Samples | Callee                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |   1,594 | `HookCaller.__call__` | `_hooks.py` |

##### `_main` (`main.py`)

|      % | Samples | Callee                | Location    |
| -----: | ------: | --------------------- | ----------- |
| 100.0% |   1,594 | `HookCaller.__call__` | `_hooks.py` |

##### `wrap_session` (`main.py`)

|      % | Samples | Callee  | Location  |
| -----: | ------: | ------- | --------- |
| 100.0% |   1,594 | `_main` | `main.py` |

##### `pytest_cmdline_main` (`main.py`)

|      % | Samples | Callee         | Location  |
| -----: | ------: | -------------- | --------- |
| 100.0% |   1,594 | `wrap_session` | `main.py` |

##### `accept.<locals>.inner` (`debug.py`)

|      % | Samples | Callee                                                    | Location  |
| -----: | ------: | --------------------------------------------------------- | --------- |
| 100.0% |   1,593 | `given.<locals>.run_test_as_given.<locals>.wrapped_test`  | `core.py` |
|   0.3% |       4 | `StateForActualGivenExecution.execute_once.<locals>.test` | `core.py` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>`)

|     % | Samples | Callee     | Location        |
| ----: | ------: | ---------- | --------------- |
| 50.0% |       1 | `<module>` | `_pydecimal.py` |
| 50.0% |       1 | `<module>` | `decimal.py`    |
| 50.0% |       1 | `<module>` | `python_api.py` |
| 50.0% |       1 | `<module>` | `doctest.py`    |
| 50.0% |       1 | `<module>` | `__init__.py`   |

##### `_load_unlocked` (`<frozen importlib._bootstrap>`)

|     % | Samples | Callee                               | Location                                 |
| ----: | ------: | ------------------------------------ | ---------------------------------------- |
| 50.0% |       1 | `_LoaderBasics.exec_module`          | `<frozen importlib._bootstrap_external>` |
| 50.0% |       1 | `AssertionRewritingHook.exec_module` | `rewrite.py`                             |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee           | Location                        |
| -----: | ------: | ---------------- | ------------------------------- |
| 100.0% |       2 | `_load_unlocked` | `<frozen importlib._bootstrap>` |

##### `_find_and_load` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee                    | Location                        |
| -----: | ------: | ------------------------- | ------------------------------- |
| 100.0% |       2 | `_find_and_load_unlocked` | `<frozen importlib._bootstrap>` |

##### `_LoaderBasics.exec_module` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Callee                      | Location                        |
| -----: | ------: | --------------------------- | ------------------------------- |
| 100.0% |       1 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `_get_module_details` (`<frozen runpy>`)

|      % | Samples | Callee                | Location                        |
| -----: | ------: | --------------------- | ------------------------------- |
| 100.0% |       1 | `_find_and_load`      | `<frozen importlib._bootstrap>` |
| 100.0% |       1 | `_get_module_details` | `<frozen runpy>`                |

##### `_handle_fromlist` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee                      | Location                        |
| -----: | ------: | --------------------------- | ------------------------------- |
| 100.0% |       1 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `_gcd_import` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee           | Location                        |
| -----: | ------: | ---------------- | ------------------------------- |
| 100.0% |       1 | `_find_and_load` | `<frozen importlib._bootstrap>` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

Common call stack: `pytest_pyfunc_call` (`python.py`) ← `_multicall` (`_callers.py`) ← `PluginManager._hookexec` (`_manager.py`) ← `HookCaller.__call__` (`_hooks.py`) ← `Function.runtest` (`python.py`) ← `pytest_runtest_call` (`runner.py`) ← `_multicall` (`_callers.py`) ← `PluginManager._hookexec` (`_manager.py`) ← `HookCaller.__call__` (`_hooks.py`) ← `call_and_report.<locals>.<lambda>` (`runner.py`) ← `CallInfo.from_call` ← `call_and_report` ← `runtestprotocol` ← `pytest_runtest_protocol` ← `_multicall` (`_callers.py`) ← `PluginManager._hookexec` (`_manager.py`) ← `HookCaller.__call__` (`_hooks.py`) ← `pytest_runtestloop` (`main.py`) ← `_multicall` (`_callers.py`) ← `PluginManager._hookexec` (`_manager.py`) ← `HookCaller.__call__` (`_hooks.py`) ← `_main` (`main.py`) ← `wrap_session` ← `pytest_cmdline_main` ← `_multicall` (`_callers.py`) ← `PluginManager._hookexec` (`_manager.py`) ← `HookCaller.__call__` (`_hooks.py`) ← `_main` (`__init__.py`) ← `_console_main` ← `<module>` (`__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_code` ← `run_module` ← `_run_code` ← `_run_module_as_main`

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ---: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 3.8% |      61 | `(garbage collector)` ← `namedtuple.<locals>._make` (`__init__.py`) ← `_generate_tokens_from_c_tokenizer` (`tokenize.py`) ← `getblock` (`inspect.py`) ← `getsourcelines` ← `getsource` ← `function_digest` (`reflection.py`) ← `StateForActualGivenExecution.run_engine` (`core.py`) ← `given.<locals>.run_test_as_given.<locals>.wrapped_test` ← `accept.<locals>.inner` (`debug.py`) ← `minimal` ← `test_lowering_together_negative` (`test_shrink_quality.py`) ← `StateForActualGivenExecution.execute_once.<locals>.test` (`core.py`) ← `accept.<locals>.test_lowering_together_negative` (`test_shrink_quality.py`) ← `StateForActualGivenExecution.execute_once.<locals>.run` (`core.py`) ← `default_executor` ← `StateForActualGivenExecution.execute_once` ← `StateForActualGivenExecution._execute_once_for_engine` ← `ConjectureRunner.__stoppable_test_function` (`engine.py`) ← `ConjectureRunner.test_function` ← `ConjectureRunner.generate_new_test_cases` ← `ConjectureRunner._run` ← `ConjectureRunner.run` ← `StateForActualGivenExecution.run_engine` (`core.py`) ← `given.<locals>.run_test_as_given.<locals>.wrapped_test` ← `accept.<locals>.test_lowering_together_negative` (`test_shrink_quality.py`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 2.8% |      45 | `(garbage collector)` ← `recursive_property.<locals>.forced_or_cached_value` (`strategies.py`) ← `recursive_property` ← `SearchStrategy.is_empty` ← `ConjectureData.draw` (`data.py`) ← `ListStrategy.do_draw` (`collections.py`) ← `ConjectureData.draw` (`data.py`) ← `BuildContext.prep_args_kwargs_from_strategies` (`control.py`) ← `StateForActualGivenExecution.execute_once.<locals>.run` (`core.py`) ← `default_executor` ← `StateForActualGivenExecution.execute_once` ← `StateForActualGivenExecution._execute_once_for_engine` ← `ConjectureRunner.__stoppable_test_function` (`engine.py`) ← `ConjectureRunner.test_function` ← `ConjectureRunner.cached_test_function` ← `Shrinker.cached_test_function` (`shrinker.py`) ← `Shrinker.try_shrinking_nodes` ← `Shrinker.minimize_nodes.<locals>.<lambda>` ← `Shrinker.consider` (`common.py`) ← `Integer.mask_high_bits.<locals>.try_mask` (`integer.py`) ← `find_integer` (`junkdrawer.py`) ← `Integer.mask_high_bits` (`integer.py`) ← `Integer.short_circuit` ← `Shrinker.run` (`common.py`) ← `Shrinker.shrink` ← `Shrinker.minimize_nodes` (`shrinker.py`) ← `Shrinker.minimize_individual_choices` ← `Shrinker.step.<locals>.<lambda>` ← `ChoiceTree.step` (`choicetree.py`) ← `Shrinker.step` (`shrinker.py`) ← `Shrinker.fixate_shrink_passes` ← `Shrinker.greedy_shrink` ← `Shrinker.shrink` ← `ConjectureRunner.shrink` (`engine.py`) ← `ConjectureRunner.shrink_interesting_test_cases` ← `ConjectureRunner._run` ← `ConjectureRunner.run` ← `StateForActualGivenExecution.run_engine` (`core.py`) ← `given.<locals>.run_test_as_given.<locals>.wrapped_test` ← `accept.<locals>.inner` (`debug.py`) ← `minimal` ← `test_minimize_multiple_elements_in_silly_large_int_range_min_is_not_dupe` (`test_shrink_quality.py`) |
| 2.4% |      39 | `_get_code_position` (`traceback.py`) ← `_walk_tb_with_full_positions` ← `StackSummary._extract_from_extended_frame_gen` ← `extract_tb` ← `get_trimmed_traceback` (`escalation.py`) ← `StateForActualGivenExecution._execute_once_for_engine` (`core.py`) ← `ConjectureRunner.__stoppable_test_function` (`engine.py`) ← `ConjectureRunner.test_function` ← `ConjectureRunner.cached_test_function` ← `Shrinker.cached_test_function` (`shrinker.py`) ← `Shrinker.try_trivial_spans` ← `Shrinker.step.<locals>.<lambda>` ← `ChoiceTree.step` (`choicetree.py`) ← `Shrinker.step` (`shrinker.py`) ← `Shrinker.fixate_shrink_passes` ← `Shrinker.greedy_shrink` ← `Shrinker.shrink` ← `ConjectureRunner.shrink` (`engine.py`) ← `ConjectureRunner.shrink_interesting_test_cases` ← `ConjectureRunner._run` ← `ConjectureRunner.run` ← `StateForActualGivenExecution.run_engine` (`core.py`) ← `given.<locals>.run_test_as_given.<locals>.wrapped_test` ← `accept.<locals>.inner` (`debug.py`) ← `minimal` ← `test_find_large_union_list` (`test_shrink_quality.py`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 2.4% |      38 | `_get_code_position` (`traceback.py`) ← `_walk_tb_with_full_positions` ← `StackSummary._extract_from_extended_frame_gen` ← `extract_tb` ← `get_trimmed_traceback` (`escalation.py`) ← `InterestingOrigin.from_exception` ← `StateForActualGivenExecution._execute_once_for_engine` (`core.py`) ← `ConjectureRunner.__stoppable_test_function` (`engine.py`) ← `ConjectureRunner.test_function` ← `ConjectureRunner.cached_test_function` ← `Shrinker.cached_test_function` (`shrinker.py`) ← `Shrinker.try_trivial_spans` ← `Shrinker.step.<locals>.<lambda>` ← `ChoiceTree.step` (`choicetree.py`) ← `Shrinker.step` (`shrinker.py`) ← `Shrinker.fixate_shrink_passes` ← `Shrinker.greedy_shrink` ← `Shrinker.shrink` ← `ConjectureRunner.shrink` (`engine.py`) ← `ConjectureRunner.shrink_interesting_test_cases` ← `ConjectureRunner._run` ← `ConjectureRunner.run` ← `StateForActualGivenExecution.run_engine` (`core.py`) ← `given.<locals>.run_test_as_given.<locals>.wrapped_test` ← `accept.<locals>.inner` (`debug.py`) ← `minimal` ← `test_find_large_union_list` (`test_shrink_quality.py`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 1.8% |      28 | `_get_code_position` (`traceback.py`) ← `_walk_tb_with_full_positions` ← `StackSummary._extract_from_extended_frame_gen` ← `extract_tb` ← `get_trimmed_traceback` (`escalation.py`) ← `given.<locals>.run_test_as_given.<locals>.wrapped_test` (`core.py`) ← `accept.<locals>.inner` (`debug.py`) ← `minimal` ← `test_minimize_one_of` (`test_shrink_quality.py`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 1.6% |      25 | `_get_code_position` (`traceback.py`) ← `_walk_tb_with_full_positions` ← `StackSummary._extract_from_extended_frame_gen` ← `extract_tb` ← `get_trimmed_traceback` (`escalation.py`) ← `StateForActualGivenExecution.run_engine` (`core.py`) ← `given.<locals>.run_test_as_given.<locals>.wrapped_test` ← `accept.<locals>.inner` (`debug.py`) ← `minimal` ← `test_minimize_one_of` (`test_shrink_quality.py`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 1.6% |      25 | `_get_code_position` (`traceback.py`) ← `_walk_tb_with_full_positions` ← `StackSummary._extract_from_extended_frame_gen` ← `extract_tb` ← `StateForActualGivenExecution._execute_once_for_engine` (`core.py`) ← `ConjectureRunner.__stoppable_test_function` (`engine.py`) ← `ConjectureRunner.test_function` ← `ConjectureRunner.cached_test_function` ← `Shrinker.cached_test_function` (`shrinker.py`) ← `Shrinker.try_trivial_spans` ← `Shrinker.step.<locals>.<lambda>` ← `ChoiceTree.step` (`choicetree.py`) ← `Shrinker.step` (`shrinker.py`) ← `Shrinker.fixate_shrink_passes` ← `Shrinker.greedy_shrink` ← `Shrinker.shrink` ← `ConjectureRunner.shrink` (`engine.py`) ← `ConjectureRunner.shrink_interesting_test_cases` ← `ConjectureRunner._run` ← `ConjectureRunner.run` ← `StateForActualGivenExecution.run_engine` (`core.py`) ← `given.<locals>.run_test_as_given.<locals>.wrapped_test` ← `accept.<locals>.inner` (`debug.py`) ← `minimal` ← `test_find_large_union_list` (`test_shrink_quality.py`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 1.1% |      17 | `_get_code_position` (`traceback.py`) ← `_walk_tb_with_full_positions` ← `StackSummary._extract_from_extended_frame_gen` ← `extract_tb` ← `get_trimmed_traceback` (`escalation.py`) ← `InterestingOrigin.from_exception` ← `StateForActualGivenExecution._execute_once_for_engine` (`core.py`) ← `ConjectureRunner.__stoppable_test_function` (`engine.py`) ← `ConjectureRunner.test_function` ← `ConjectureRunner.cached_test_function` ← `Shrinker.cached_test_function` (`shrinker.py`) ← `Shrinker.try_trivial_spans` ← `Shrinker.step.<locals>.<lambda>` ← `ChoiceTree.step` (`choicetree.py`) ← `Shrinker.step` (`shrinker.py`) ← `Shrinker.fixate_shrink_passes` ← `Shrinker.greedy_shrink` ← `Shrinker.shrink` ← `ConjectureRunner.shrink` (`engine.py`) ← `ConjectureRunner.shrink_interesting_test_cases` ← `ConjectureRunner._run` ← `ConjectureRunner.run` ← `StateForActualGivenExecution.run_engine` (`core.py`) ← `given.<locals>.run_test_as_given.<locals>.wrapped_test` ← `accept.<locals>.inner` (`debug.py`) ← `minimal` ← `test_minimize_list_of_lists` (`test_shrink_quality.py`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 1.0% |      16 | `(garbage collector)` ← `recursive_property.<locals>.forced_or_cached_value` (`strategies.py`) ← `recursive_property` ← `SearchStrategy.is_empty` ← `ConjectureData.draw` (`data.py`) ← `FilteredStrategy.do_filtered_draw` (`strategies.py`) ← `UniqueListStrategy.do_draw` (`collections.py`) ← `ConjectureData.draw` (`data.py`) ← `MappedStrategy.do_draw` (`strategies.py`) ← `ConjectureData.draw` (`data.py`) ← `ListStrategy.do_draw` (`collections.py`) ← `ConjectureData.draw` (`data.py`) ← `BuildContext.prep_args_kwargs_from_strategies` (`control.py`) ← `StateForActualGivenExecution.execute_once.<locals>.run` (`core.py`) ← `default_executor` ← `StateForActualGivenExecution.execute_once` ← `StateForActualGivenExecution._execute_once_for_engine` ← `ConjectureRunner.__stoppable_test_function` (`engine.py`) ← `ConjectureRunner.test_function` ← `ConjectureRunner.cached_test_function` ← `Shrinker.cached_test_function` (`shrinker.py`) ← `Shrinker.try_trivial_spans` ← `Shrinker.step.<locals>.<lambda>` ← `ChoiceTree.step` (`choicetree.py`) ← `Shrinker.step` (`shrinker.py`) ← `Shrinker.fixate_shrink_passes` ← `Shrinker.greedy_shrink` ← `Shrinker.shrink` ← `ConjectureRunner.shrink` (`engine.py`) ← `ConjectureRunner.shrink_interesting_test_cases` ← `ConjectureRunner._run` ← `ConjectureRunner.run` ← `StateForActualGivenExecution.run_engine` (`core.py`) ← `given.<locals>.run_test_as_given.<locals>.wrapped_test` ← `accept.<locals>.inner` (`debug.py`) ← `minimal` ← `test_find_large_union_list` (`test_shrink_quality.py`)                                                                                                                                                                                                               |
| 0.9% |      15 | `_get_code_position` (`traceback.py`) ← `_walk_tb_with_full_positions` ← `StackSummary._extract_from_extended_frame_gen` ← `extract_tb` ← `StateForActualGivenExecution._execute_once_for_engine` (`core.py`) ← `ConjectureRunner.__stoppable_test_function` (`engine.py`) ← `ConjectureRunner.test_function` ← `ConjectureRunner.cached_test_function` ← `Shrinker.cached_test_function` (`shrinker.py`) ← `Shrinker.try_trivial_spans` ← `Shrinker.step.<locals>.<lambda>` ← `ChoiceTree.step` (`choicetree.py`) ← `Shrinker.step` (`shrinker.py`) ← `Shrinker.fixate_shrink_passes` ← `Shrinker.greedy_shrink` ← `Shrinker.shrink` ← `ConjectureRunner.shrink` (`engine.py`) ← `ConjectureRunner.shrink_interesting_test_cases` ← `ConjectureRunner._run` ← `ConjectureRunner.run` ← `StateForActualGivenExecution.run_engine` (`core.py`) ← `given.<locals>.run_test_as_given.<locals>.wrapped_test` ← `accept.<locals>.inner` (`debug.py`) ← `minimal` ← `test_minimize_sets_of_sets` (`test_shrink_quality.py`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 0.8% |      13 | `_get_code_position` (`traceback.py`) ← `_walk_tb_with_full_positions` ← `StackSummary._extract_from_extended_frame_gen` ← `extract_tb` ← `StateForActualGivenExecution._execute_once_for_engine` (`core.py`) ← `ConjectureRunner.__stoppable_test_function` (`engine.py`) ← `ConjectureRunner.test_function` ← `ConjectureRunner.cached_test_function` ← `Shrinker.cached_test_function` (`shrinker.py`) ← `Shrinker.try_trivial_spans` ← `Shrinker.step.<locals>.<lambda>` ← `ChoiceTree.step` (`choicetree.py`) ← `Shrinker.step` (`shrinker.py`) ← `Shrinker.fixate_shrink_passes` ← `Shrinker.greedy_shrink` ← `Shrinker.shrink` ← `ConjectureRunner.shrink` (`engine.py`) ← `ConjectureRunner.shrink_interesting_test_cases` ← `ConjectureRunner._run` ← `ConjectureRunner.run` ← `StateForActualGivenExecution.run_engine` (`core.py`) ← `given.<locals>.run_test_as_given.<locals>.wrapped_test` ← `accept.<locals>.inner` (`debug.py`) ← `minimal` ← `test_minimize_list_of_lists` (`test_shrink_quality.py`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 0.8% |      12 | `_get_code_position` (`traceback.py`) ← `_walk_tb_with_full_positions` ← `StackSummary._extract_from_extended_frame_gen` ← `extract_tb` ← `get_trimmed_traceback` (`escalation.py`) ← `StateForActualGivenExecution._execute_once_for_engine` (`core.py`) ← `ConjectureRunner.__stoppable_test_function` (`engine.py`) ← `ConjectureRunner.test_function` ← `ConjectureRunner.cached_test_function` ← `ConjectureRunner.generate_new_test_cases` ← `ConjectureRunner._run` ← `ConjectureRunner.run` ← `StateForActualGivenExecution.run_engine` (`core.py`) ← `given.<locals>.run_test_as_given.<locals>.wrapped_test` ← `accept.<locals>.inner` (`debug.py`) ← `minimal` ← `test_minimize_one_of` (`test_shrink_quality.py`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 0.8% |      12 | `_get_code_position` (`traceback.py`) ← `_walk_tb_with_full_positions` ← `StackSummary._extract_from_extended_frame_gen` ← `extract_tb` ← `get_trimmed_traceback` (`escalation.py`) ← `InterestingOrigin.from_exception` ← `StateForActualGivenExecution._execute_once_for_engine` (`core.py`) ← `ConjectureRunner.__stoppable_test_function` (`engine.py`) ← `ConjectureRunner.test_function` ← `ConjectureRunner.shrink_interesting_test_cases` ← `ConjectureRunner._run` ← `ConjectureRunner.run` ← `StateForActualGivenExecution.run_engine` (`core.py`) ← `given.<locals>.run_test_as_given.<locals>.wrapped_test` ← `accept.<locals>.inner` (`debug.py`) ← `minimal` ← `test_minimize_one_of` (`test_shrink_quality.py`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 0.8% |      12 | `_get_code_position` (`traceback.py`) ← `_walk_tb_with_full_positions` ← `StackSummary._extract_from_extended_frame_gen` ← `extract_tb` ← `get_trimmed_traceback` (`escalation.py`) ← `InterestingOrigin.from_exception` ← `StateForActualGivenExecution._execute_once_for_engine` (`core.py`) ← `ConjectureRunner.__stoppable_test_function` (`engine.py`) ← `ConjectureRunner.test_function` ← `ConjectureRunner.cached_test_function` ← `Shrinker.cached_test_function` (`shrinker.py`) ← `Shrinker.try_trivial_spans` ← `Shrinker.step.<locals>.<lambda>` ← `ChoiceTree.step` (`choicetree.py`) ← `Shrinker.step` (`shrinker.py`) ← `Shrinker.fixate_shrink_passes` ← `Shrinker.greedy_shrink` ← `Shrinker.shrink` ← `ConjectureRunner.shrink` (`engine.py`) ← `ConjectureRunner.shrink_interesting_test_cases` ← `ConjectureRunner._run` ← `ConjectureRunner.run` ← `StateForActualGivenExecution.run_engine` (`core.py`) ← `given.<locals>.run_test_as_given.<locals>.wrapped_test` ← `accept.<locals>.inner` (`debug.py`) ← `minimal` ← `test_minimize_sets_of_sets` (`test_shrink_quality.py`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 0.7% |      11 | `_get_code_position` (`traceback.py`) ← `_walk_tb_with_full_positions` ← `StackSummary._extract_from_extended_frame_gen` ← `extract_tb` ← `get_trimmed_traceback` (`escalation.py`) ← `StateForActualGivenExecution._execute_once_for_engine` (`core.py`) ← `ConjectureRunner.__stoppable_test_function` (`engine.py`) ← `ConjectureRunner.test_function` ← `ConjectureRunner.cached_test_function` ← `Shrinker.cached_test_function` (`shrinker.py`) ← `Shrinker.try_trivial_spans` ← `Shrinker.step.<locals>.<lambda>` ← `ChoiceTree.step` (`choicetree.py`) ← `Shrinker.step` (`shrinker.py`) ← `Shrinker.fixate_shrink_passes` ← `Shrinker.greedy_shrink` ← `Shrinker.shrink` ← `ConjectureRunner.shrink` (`engine.py`) ← `ConjectureRunner.shrink_interesting_test_cases` ← `ConjectureRunner._run` ← `ConjectureRunner.run` ← `StateForActualGivenExecution.run_engine` (`core.py`) ← `given.<locals>.run_test_as_given.<locals>.wrapped_test` ← `accept.<locals>.inner` (`debug.py`) ← `minimal` ← `test_minimize_sets_of_sets` (`test_shrink_quality.py`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 0.6% |      10 | `_get_code_position` (`traceback.py`) ← `_walk_tb_with_full_positions` ← `StackSummary._extract_from_extended_frame_gen` ← `extract_tb` ← `StateForActualGivenExecution._execute_once_for_engine` (`core.py`) ← `ConjectureRunner.__stoppable_test_function` (`engine.py`) ← `ConjectureRunner.test_function` ← `ConjectureRunner.cached_test_function` ← `Shrinker.cached_test_function` (`shrinker.py`) ← `Shrinker.try_trivial_spans` ← `Shrinker.step.<locals>.<lambda>` ← `ChoiceTree.step` (`choicetree.py`) ← `Shrinker.step` (`shrinker.py`) ← `Shrinker.fixate_shrink_passes` ← `Shrinker.greedy_shrink` ← `Shrinker.shrink` ← `ConjectureRunner.shrink` (`engine.py`) ← `ConjectureRunner.shrink_interesting_test_cases` ← `ConjectureRunner._run` ← `ConjectureRunner.run` ← `StateForActualGivenExecution.run_engine` (`core.py`) ← `given.<locals>.run_test_as_given.<locals>.wrapped_test` ← `accept.<locals>.inner` (`debug.py`) ← `minimal` ← `test_can_ignore_left_hand_side_of_flatmap` (`test_shrink_quality.py`) ← `flaky.<locals>.accept.<locals>.inner` (`utils.py`) ← `accept.<locals>.test_can_ignore_left_hand_side_of_flatmap` (`test_shrink_quality.py`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 0.6% |      10 | `_get_code_position` (`traceback.py`) ← `_walk_tb_with_full_positions` ← `StackSummary._extract_from_extended_frame_gen` ← `extract_tb` ← `get_trimmed_traceback` (`escalation.py`) ← `InterestingOrigin.from_exception` ← `StateForActualGivenExecution._execute_once_for_engine` (`core.py`) ← `ConjectureRunner.__stoppable_test_function` (`engine.py`) ← `ConjectureRunner.test_function` ← `ConjectureRunner.cached_test_function` ← `ConjectureRunner.generate_new_test_cases` ← `ConjectureRunner._run` ← `ConjectureRunner.run` ← `StateForActualGivenExecution.run_engine` (`core.py`) ← `given.<locals>.run_test_as_given.<locals>.wrapped_test` ← `accept.<locals>.inner` (`debug.py`) ← `minimal` ← `test_minimize_one_of` (`test_shrink_quality.py`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 0.6% |      10 | `_get_code_position` (`traceback.py`) ← `_walk_tb_with_full_positions` ← `StackSummary._extract_from_extended_frame_gen` ← `extract_tb` ← `get_trimmed_traceback` (`escalation.py`) ← `InterestingOrigin.from_exception` ← `StateForActualGivenExecution._execute_once_for_engine` (`core.py`) ← `ConjectureRunner.__stoppable_test_function` (`engine.py`) ← `ConjectureRunner.test_function` ← `ConjectureRunner.cached_test_function` ← `Shrinker.cached_test_function` (`shrinker.py`) ← `Shrinker.try_shrinking_nodes` ← `Shrinker.minimize_nodes.<locals>.<lambda>` ← `Shrinker.consider` (`common.py`) ← `Integer.mask_high_bits.<locals>.try_mask` (`integer.py`) ← `find_integer` (`junkdrawer.py`) ← `Integer.mask_high_bits` (`integer.py`) ← `Integer.short_circuit` ← `Shrinker.run` (`common.py`) ← `Shrinker.shrink` ← `Shrinker.minimize_nodes` (`shrinker.py`) ← `Shrinker.minimize_individual_choices` ← `Shrinker.step.<locals>.<lambda>` ← `ChoiceTree.step` (`choicetree.py`) ← `Shrinker.step` (`shrinker.py`) ← `Shrinker.fixate_shrink_passes` ← `Shrinker.greedy_shrink` ← `Shrinker.shrink` ← `ConjectureRunner.shrink` (`engine.py`) ← `ConjectureRunner.shrink_interesting_test_cases` ← `ConjectureRunner._run` ← `ConjectureRunner.run` ← `StateForActualGivenExecution.run_engine` (`core.py`) ← `given.<locals>.run_test_as_given.<locals>.wrapped_test` ← `accept.<locals>.inner` (`debug.py`) ← `minimal` ← `test_minimize_multiple_elements_in_silly_large_int_range_min_is_not_dupe` (`test_shrink_quality.py`)                                                                                                                                                                                                                                             |
| 0.6% |       9 | `_get_code_position` (`traceback.py`) ← `_walk_tb_with_full_positions` ← `StackSummary._extract_from_extended_frame_gen` ← `extract_tb` ← `get_trimmed_traceback` (`escalation.py`) ← `StateForActualGivenExecution._execute_once_for_engine` (`core.py`) ← `ConjectureRunner.__stoppable_test_function` (`engine.py`) ← `ConjectureRunner.test_function` ← `ConjectureRunner.cached_test_function` ← `Shrinker.cached_test_function` (`shrinker.py`) ← `Shrinker.try_trivial_spans` ← `Shrinker.step.<locals>.<lambda>` ← `ChoiceTree.step` (`choicetree.py`) ← `Shrinker.step` (`shrinker.py`) ← `Shrinker.fixate_shrink_passes` ← `Shrinker.greedy_shrink` ← `Shrinker.shrink` ← `ConjectureRunner.shrink` (`engine.py`) ← `ConjectureRunner.shrink_interesting_test_cases` ← `ConjectureRunner._run` ← `ConjectureRunner.run` ← `StateForActualGivenExecution.run_engine` (`core.py`) ← `given.<locals>.run_test_as_given.<locals>.wrapped_test` ← `accept.<locals>.inner` (`debug.py`) ← `minimal` ← `test_can_ignore_left_hand_side_of_flatmap` (`test_shrink_quality.py`) ← `flaky.<locals>.accept.<locals>.inner` (`utils.py`) ← `accept.<locals>.test_can_ignore_left_hand_side_of_flatmap` (`test_shrink_quality.py`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 0.6% |       9 | `_get_code_position` (`traceback.py`) ← `_walk_tb_with_full_positions` ← `StackSummary._extract_from_extended_frame_gen` ← `extract_tb` ← `get_trimmed_traceback` (`escalation.py`) ← `StateForActualGivenExecution._execute_once_for_engine` (`core.py`) ← `ConjectureRunner.__stoppable_test_function` (`engine.py`) ← `ConjectureRunner.test_function` ← `ConjectureRunner.cached_test_function` ← `Shrinker.cached_test_function` (`shrinker.py`) ← `Shrinker.try_shrinking_nodes` ← `Shrinker.minimize_nodes.<locals>.<lambda>` ← `Shrinker.consider` (`common.py`) ← `Integer.mask_high_bits.<locals>.try_mask` (`integer.py`) ← `find_integer` (`junkdrawer.py`) ← `Integer.mask_high_bits` (`integer.py`) ← `Integer.short_circuit` ← `Shrinker.run` (`common.py`) ← `Shrinker.shrink` ← `Shrinker.minimize_nodes` (`shrinker.py`) ← `Shrinker.minimize_individual_choices` ← `Shrinker.step.<locals>.<lambda>` ← `ChoiceTree.step` (`choicetree.py`) ← `Shrinker.step` (`shrinker.py`) ← `Shrinker.fixate_shrink_passes` ← `Shrinker.greedy_shrink` ← `Shrinker.shrink` ← `ConjectureRunner.shrink` (`engine.py`) ← `ConjectureRunner.shrink_interesting_test_cases` ← `ConjectureRunner._run` ← `ConjectureRunner.run` ← `StateForActualGivenExecution.run_engine` (`core.py`) ← `given.<locals>.run_test_as_given.<locals>.wrapped_test` ← `accept.<locals>.inner` (`debug.py`) ← `minimal` ← `test_minimize_multiple_elements_in_silly_large_int_range_min_is_not_dupe` (`test_shrink_quality.py`)                                                                                                                                                                                                                                                                                  |
