# Sampling profile diff

Collected 1,473 samples → 1,466 samples (-7 samples, -0.5%).

| Category          | Change | Delta |             % |       Samples |
| ----------------- | -----: | ----: | ------------: | ------------: |
| Ours              |  +0.2% |    +3 | 86.5% → 87.1% | 1,274 → 1,277 |
| Garbage collector | -14.8% |   -25 |  11.5% → 9.8% |     169 → 144 |
| Standard library  | +50.0% |   +15 |   2.0% → 3.1% |       30 → 45 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |           % | Samples | Function                                                | Location             |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------- | -------------------- |
|  +66.7% |   +12 | 1.2% → 2.0% | 18 → 30 | `get_trimmed_traceback`                                 | `escalation.py`      |
| +200.0% |   +12 | 0.4% → 1.2% |  6 → 18 | `format_exception`                                      | `traceback.py`       |
|  +42.3% |   +11 | 1.8% → 2.5% | 26 → 37 | `checkcache`                                            | `<frozen linecache>` |
|  +50.0% |    +7 | 1.0% → 1.4% | 14 → 21 | `_walk_tb_with_full_positions`                          | `traceback.py`       |
| +600.0% |    +6 | 0.1% → 0.5% |   1 → 7 | `recursive_property.<locals>.forced_or_cached_value`    | `strategies.py`      |
| +150.0% |    +6 | 0.3% → 0.7% |  4 → 10 | `format_exception`                                      | `escalation.py`      |
| +400.0% |    +4 | 0.1% → 0.3% |   1 → 5 | `TreeRecordingObserver.conclude_test`                   | `datatree.py`        |
| +150.0% |    +3 | 0.1% → 0.3% |   2 → 5 | `StateForActualGivenExecution.execute_once`             | `core.py`            |
|  +20.0% |    +3 | 1.0% → 1.2% | 15 → 18 | `StateForActualGivenExecution._execute_once_for_engine` | `core.py`            |
| +100.0% |    +3 | 0.2% → 0.4% |   3 → 6 | `_extract_caret_anchors_from_line_segment`              | `traceback.py`       |
|  +50.0% |    +3 | 0.4% → 0.6% |   6 → 9 | `StackSummary.format`                                   | `traceback.py`       |
| +150.0% |    +3 | 0.1% → 0.3% |   2 → 5 | `verbose_report`                                        | `reporting.py`       |
|  +75.0% |    +3 | 0.3% → 0.5% |   4 → 7 | `Untokenizer.untokenize`                                | `tokenize.py`        |
| +150.0% |    +3 | 0.1% → 0.3% |   2 → 5 | `lazycache`                                             | `<frozen linecache>` |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `_signature_from_callable`                              | `inspect.py`         |
| +100.0% |    +2 | 0.1% → 0.3% |   2 → 4 | `deterministic_PRNG`                                    | `entropy.py`         |
|  +28.6% |    +2 | 0.5% → 0.6% |   7 → 9 | `FrameSummary._set_lines`                               | `traceback.py`       |
|     new |    +2 | 0.0% → 0.1% |   0 → 2 | `many.more`                                             | `utils.py`           |
|     new |    +2 | 0.0% → 0.1% |   0 → 2 | `ConjectureData.draw_integer`                           | `data.py`            |
|     new |    +2 | 0.0% → 0.1% |   0 → 2 | `get_signature`                                         | `reflection.py`      |

##### Ours

|  Change | Delta |           % | Samples | Function                                                | Location        |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------- | --------------- |
|  +66.7% |   +12 | 1.2% → 2.0% | 18 → 30 | `get_trimmed_traceback`                                 | `escalation.py` |
| +200.0% |   +12 | 0.4% → 1.2% |  6 → 18 | `format_exception`                                      | `traceback.py`  |
|  +50.0% |    +7 | 1.0% → 1.4% | 14 → 21 | `_walk_tb_with_full_positions`                          | `traceback.py`  |
| +600.0% |    +6 | 0.1% → 0.5% |   1 → 7 | `recursive_property.<locals>.forced_or_cached_value`    | `strategies.py` |
| +150.0% |    +6 | 0.3% → 0.7% |  4 → 10 | `format_exception`                                      | `escalation.py` |
| +400.0% |    +4 | 0.1% → 0.3% |   1 → 5 | `TreeRecordingObserver.conclude_test`                   | `datatree.py`   |
| +150.0% |    +3 | 0.1% → 0.3% |   2 → 5 | `StateForActualGivenExecution.execute_once`             | `core.py`       |
|  +20.0% |    +3 | 1.0% → 1.2% | 15 → 18 | `StateForActualGivenExecution._execute_once_for_engine` | `core.py`       |
| +100.0% |    +3 | 0.2% → 0.4% |   3 → 6 | `_extract_caret_anchors_from_line_segment`              | `traceback.py`  |
|  +50.0% |    +3 | 0.4% → 0.6% |   6 → 9 | `StackSummary.format`                                   | `traceback.py`  |
| +150.0% |    +3 | 0.1% → 0.3% |   2 → 5 | `verbose_report`                                        | `reporting.py`  |
|  +75.0% |    +3 | 0.3% → 0.5% |   4 → 7 | `Untokenizer.untokenize`                                | `tokenize.py`   |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `_signature_from_callable`                              | `inspect.py`    |
| +100.0% |    +2 | 0.1% → 0.3% |   2 → 4 | `deterministic_PRNG`                                    | `entropy.py`    |
|  +28.6% |    +2 | 0.5% → 0.6% |   7 → 9 | `FrameSummary._set_lines`                               | `traceback.py`  |
|     new |    +2 | 0.0% → 0.1% |   0 → 2 | `many.more`                                             | `utils.py`      |
|     new |    +2 | 0.0% → 0.1% |   0 → 2 | `ConjectureData.draw_integer`                           | `data.py`       |
|     new |    +2 | 0.0% → 0.1% |   0 → 2 | `get_signature`                                         | `reflection.py` |
|     new |    +2 | 0.0% → 0.1% |   0 → 2 | `ConjectureResult.choices`                              | `data.py`       |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `ConjectureRunner.test_function`                        | `engine.py`     |

##### Standard library

|  Change | Delta |           % | Samples | Function            | Location                    |
| ------: | ----: | ----------: | ------: | ------------------- | --------------------------- |
|  +42.3% |   +11 | 1.8% → 2.5% | 26 → 37 | `checkcache`        | `<frozen linecache>`        |
| +150.0% |    +3 | 0.1% → 0.3% |   2 → 5 | `lazycache`         | `<frozen linecache>`        |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `Sequence.__iter__` | `<frozen _collections_abc>` |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % |   Samples | Function                                        | Location        |
| ------: | ----: | ------------: | --------: | ----------------------------------------------- | --------------- |
|  -14.8% |   -25 |  11.5% → 9.8% | 169 → 144 | `(garbage collector)`                           | `<unknown>`     |
|   -2.2% |   -19 | 59.2% → 58.2% | 872 → 853 | `_get_code_position`                            | `traceback.py`  |
|  -25.0% |    -6 |   1.6% → 1.2% |   24 → 18 | `extract_tb`                                    | `traceback.py`  |
|  -55.6% |    -5 |   0.6% → 0.3% |     9 → 4 | `ConjectureRunner.new_conjecture_data`          | `engine.py`     |
|   -5.3% |    -4 |   5.2% → 4.9% |   76 → 72 | `StackSummary._extract_from_extended_frame_gen` | `traceback.py`  |
| removed |    -4 |   0.3% → 0.0% |     4 → 0 | `ExceptionInfo.getrepr`                         | `code.py`       |
|  -36.4% |    -4 |   0.7% → 0.5% |    11 → 7 | `get_seeder_and_restorer.<locals>.restore_all`  | `entropy.py`    |
|  -16.7% |    -3 |   1.2% → 1.0% |   18 → 15 | `StackSummary.format_frame_summary`             | `traceback.py`  |
|  -13.6% |    -3 |   1.5% → 1.3% |   22 → 19 | `FrameSummary.line`                             | `traceback.py`  |
| removed |    -3 |   0.2% → 0.0% |     3 → 0 | `Random.setstate`                               | `random.py`     |
|  -75.0% |    -3 |   0.3% → 0.1% |     4 → 1 | `_display_width`                                | `traceback.py`  |
|  -75.0% |    -3 |   0.3% → 0.1% |     4 → 1 | `ConjectureData.freeze`                         | `data.py`       |
|  -66.7% |    -2 |   0.2% → 0.1% |     3 → 1 | `ConjectureRunner.cached_test_function`         | `engine.py`     |
|  -50.0% |    -2 |   0.3% → 0.1% |     4 → 2 | `InterestingOrigin.from_exception`              | `escalation.py` |
|  -50.0% |    -2 |   0.3% → 0.1% |     4 → 2 | `Function.repr_failure`                         | `python.py`     |
|  -50.0% |    -2 |   0.3% → 0.1% |     4 → 2 | `ConjectureData.mark_interesting`               | `data.py`       |
| removed |    -2 |   0.1% → 0.0% |     2 → 0 | `function_digest`                               | `reflection.py` |
|  -66.7% |    -2 |   0.2% → 0.1% |     3 → 1 | `FrameSummary._dedented_lines`                  | `traceback.py`  |
| removed |    -2 |   0.1% → 0.0% |     2 → 0 | `Shrinker.derived_value.<locals>.accept`        | `shrinker.py`   |
|  -66.7% |    -2 |   0.2% → 0.1% |     3 → 1 | `unwrap_strategies`                             | `lazy.py`       |

##### Ours

|  Change | Delta |             % |   Samples | Function                                        | Location        |
| ------: | ----: | ------------: | --------: | ----------------------------------------------- | --------------- |
|   -2.2% |   -19 | 59.2% → 58.2% | 872 → 853 | `_get_code_position`                            | `traceback.py`  |
|  -25.0% |    -6 |   1.6% → 1.2% |   24 → 18 | `extract_tb`                                    | `traceback.py`  |
|  -55.6% |    -5 |   0.6% → 0.3% |     9 → 4 | `ConjectureRunner.new_conjecture_data`          | `engine.py`     |
|   -5.3% |    -4 |   5.2% → 4.9% |   76 → 72 | `StackSummary._extract_from_extended_frame_gen` | `traceback.py`  |
| removed |    -4 |   0.3% → 0.0% |     4 → 0 | `ExceptionInfo.getrepr`                         | `code.py`       |
|  -36.4% |    -4 |   0.7% → 0.5% |    11 → 7 | `get_seeder_and_restorer.<locals>.restore_all`  | `entropy.py`    |
|  -16.7% |    -3 |   1.2% → 1.0% |   18 → 15 | `StackSummary.format_frame_summary`             | `traceback.py`  |
|  -13.6% |    -3 |   1.5% → 1.3% |   22 → 19 | `FrameSummary.line`                             | `traceback.py`  |
| removed |    -3 |   0.2% → 0.0% |     3 → 0 | `Random.setstate`                               | `random.py`     |
|  -75.0% |    -3 |   0.3% → 0.1% |     4 → 1 | `_display_width`                                | `traceback.py`  |
|  -75.0% |    -3 |   0.3% → 0.1% |     4 → 1 | `ConjectureData.freeze`                         | `data.py`       |
|  -66.7% |    -2 |   0.2% → 0.1% |     3 → 1 | `ConjectureRunner.cached_test_function`         | `engine.py`     |
|  -50.0% |    -2 |   0.3% → 0.1% |     4 → 2 | `InterestingOrigin.from_exception`              | `escalation.py` |
|  -50.0% |    -2 |   0.3% → 0.1% |     4 → 2 | `Function.repr_failure`                         | `python.py`     |
|  -50.0% |    -2 |   0.3% → 0.1% |     4 → 2 | `ConjectureData.mark_interesting`               | `data.py`       |
| removed |    -2 |   0.1% → 0.0% |     2 → 0 | `function_digest`                               | `reflection.py` |
|  -66.7% |    -2 |   0.2% → 0.1% |     3 → 1 | `FrameSummary._dedented_lines`                  | `traceback.py`  |
| removed |    -2 |   0.1% → 0.0% |     2 → 0 | `Shrinker.derived_value.<locals>.accept`        | `shrinker.py`   |
|  -66.7% |    -2 |   0.2% → 0.1% |     3 → 1 | `unwrap_strategies`                             | `lazy.py`       |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `recursive_property`                            | `strategies.py` |

##### Garbage collector

| Change | Delta |            % |   Samples | Function              | Location    |
| -----: | ----: | -----------: | --------: | --------------------- | ----------- |
| -14.8% |   -25 | 11.5% → 9.8% | 169 → 144 | `(garbage collector)` | `<unknown>` |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|  Change | Delta |             % |   Samples | Function                                                 | Location                 |
| ------: | ----: | ------------: | --------: | -------------------------------------------------------- | ------------------------ |
|  +10.6% |   +37 | 23.6% → 26.3% | 348 → 385 | `ConjectureRunner.generate_new_test_cases`               | `engine.py`              |
|  +16.0% |   +19 |   8.1% → 9.4% | 119 → 138 | `test_minimize_one_of`                                   | `test_shrink_quality.py` |
|   +2.0% |   +15 | 50.6% → 51.8% | 745 → 760 | `get_trimmed_traceback`                                  | `escalation.py`          |
|  +14.8% |   +12 |   5.5% → 6.3% |   81 → 93 | `ListStrategy.do_draw`                                   | `collections.py`         |
|  +18.2% |   +12 |   4.5% → 5.3% |   66 → 78 | `test_lowering_together_with_gap`                        | `test_shrink_quality.py` |
|  +18.2% |   +12 |   4.5% → 5.3% |   66 → 78 | `accept.<locals>.test_lowering_together_with_gap`        | `test_shrink_quality.py` |
|  +55.0% |   +11 |   1.4% → 2.1% |   20 → 31 | `test_perfectly_shrinks_integers`                        | `test_shrink_quality.py` |
|  +55.0% |   +11 |   1.4% → 2.1% |   20 → 31 | `accept.<locals>.test_perfectly_shrinks_integers`        | `test_shrink_quality.py` |
|  +42.3% |   +11 |   1.8% → 2.5% |   26 → 37 | `checkcache`                                             | `<frozen linecache>`     |
|   +7.5% |    +9 |   8.1% → 8.8% | 120 → 129 | `recursive_property.<locals>.forced_or_cached_value`     | `strategies.py`          |
| +150.0% |    +9 |   0.4% → 1.0% |    6 → 15 | `test_minimal_fractions_3`                               | `test_shrink_quality.py` |
|   +6.6% |    +8 |   8.3% → 8.9% | 122 → 130 | `recursive_property`                                     | `strategies.py`          |
|   +1.9% |    +8 | 28.0% → 28.7% | 413 → 421 | `StateForActualGivenExecution.execute_once.<locals>.run` | `core.py`                |
|   +1.9% |    +8 | 28.0% → 28.7% | 413 → 421 | `default_executor`                                       | `core.py`                |
|   +5.4% |    +7 |   8.8% → 9.3% | 129 → 136 | `ConjectureData.draw`                                    | `data.py`                |
|  +10.9% |    +7 |   4.3% → 4.8% |   64 → 71 | `test_lowering_together_negative`                        | `test_shrink_quality.py` |
|  +10.9% |    +7 |   4.3% → 4.8% |   64 → 71 | `accept.<locals>.test_lowering_together_negative`        | `test_shrink_quality.py` |
|   +4.6% |    +6 |   8.8% → 9.3% | 130 → 136 | `BuildContext.prep_args_kwargs_from_strategies`          | `control.py`             |
|  +16.2% |    +6 |   2.5% → 2.9% |   37 → 43 | `test_can_find_sets_unique_by_incomplete_data`           | `test_shrink_quality.py` |
|  +35.3% |    +6 |   1.2% → 1.6% |   17 → 23 | `Integer.shift_right.<locals>.<lambda>`                  | `integer.py`             |

##### Ours

|  Change | Delta |             % |   Samples | Function                                                 | Location                 |
| ------: | ----: | ------------: | --------: | -------------------------------------------------------- | ------------------------ |
|  +10.6% |   +37 | 23.6% → 26.3% | 348 → 385 | `ConjectureRunner.generate_new_test_cases`               | `engine.py`              |
|  +16.0% |   +19 |   8.1% → 9.4% | 119 → 138 | `test_minimize_one_of`                                   | `test_shrink_quality.py` |
|   +2.0% |   +15 | 50.6% → 51.8% | 745 → 760 | `get_trimmed_traceback`                                  | `escalation.py`          |
|  +14.8% |   +12 |   5.5% → 6.3% |   81 → 93 | `ListStrategy.do_draw`                                   | `collections.py`         |
|  +18.2% |   +12 |   4.5% → 5.3% |   66 → 78 | `test_lowering_together_with_gap`                        | `test_shrink_quality.py` |
|  +18.2% |   +12 |   4.5% → 5.3% |   66 → 78 | `accept.<locals>.test_lowering_together_with_gap`        | `test_shrink_quality.py` |
|  +55.0% |   +11 |   1.4% → 2.1% |   20 → 31 | `test_perfectly_shrinks_integers`                        | `test_shrink_quality.py` |
|  +55.0% |   +11 |   1.4% → 2.1% |   20 → 31 | `accept.<locals>.test_perfectly_shrinks_integers`        | `test_shrink_quality.py` |
|   +7.5% |    +9 |   8.1% → 8.8% | 120 → 129 | `recursive_property.<locals>.forced_or_cached_value`     | `strategies.py`          |
| +150.0% |    +9 |   0.4% → 1.0% |    6 → 15 | `test_minimal_fractions_3`                               | `test_shrink_quality.py` |
|   +6.6% |    +8 |   8.3% → 8.9% | 122 → 130 | `recursive_property`                                     | `strategies.py`          |
|   +1.9% |    +8 | 28.0% → 28.7% | 413 → 421 | `StateForActualGivenExecution.execute_once.<locals>.run` | `core.py`                |
|   +1.9% |    +8 | 28.0% → 28.7% | 413 → 421 | `default_executor`                                       | `core.py`                |
|   +5.4% |    +7 |   8.8% → 9.3% | 129 → 136 | `ConjectureData.draw`                                    | `data.py`                |
|  +10.9% |    +7 |   4.3% → 4.8% |   64 → 71 | `test_lowering_together_negative`                        | `test_shrink_quality.py` |
|  +10.9% |    +7 |   4.3% → 4.8% |   64 → 71 | `accept.<locals>.test_lowering_together_negative`        | `test_shrink_quality.py` |
|   +4.6% |    +6 |   8.8% → 9.3% | 130 → 136 | `BuildContext.prep_args_kwargs_from_strategies`          | `control.py`             |
|  +16.2% |    +6 |   2.5% → 2.9% |   37 → 43 | `test_can_find_sets_unique_by_incomplete_data`           | `test_shrink_quality.py` |
|  +35.3% |    +6 |   1.2% → 1.6% |   17 → 23 | `Integer.shift_right.<locals>.<lambda>`                  | `integer.py`             |
|  +35.3% |    +6 |   1.2% → 1.6% |   17 → 23 | `Integer.shift_right`                                    | `integer.py`             |

##### Standard library

|  Change | Delta |           % | Samples | Function                    | Location                                 |
| ------: | ----: | ----------: | ------: | --------------------------- | ---------------------------------------- |
|  +42.3% |   +11 | 1.8% → 2.5% | 26 → 37 | `checkcache`                | `<frozen linecache>`                     |
| +150.0% |    +3 | 0.1% → 0.3% |   2 → 5 | `lazycache`                 | `<frozen linecache>`                     |
| +100.0% |    +1 |        0.1% |   1 → 2 | `_LoaderBasics.exec_module` | `<frozen importlib._bootstrap_external>` |
| +100.0% |    +1 |        0.1% |   1 → 2 | `_load_unlocked`            | `<frozen importlib._bootstrap>`          |
| +100.0% |    +1 |        0.1% |   1 → 2 | `_find_and_load_unlocked`   | `<frozen importlib._bootstrap>`          |
| +100.0% |    +1 |        0.1% |   1 → 2 | `_find_and_load`            | `<frozen importlib._bootstrap>`          |
| +100.0% |    +1 |        0.1% |   1 → 2 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>`          |
| +100.0% |    +1 |        0.1% |   1 → 2 | `_get_module_details`       | `<frozen runpy>`                         |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `Sequence.__iter__`         | `<frozen _collections_abc>`              |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `Sequence.__contains__`     | `<frozen _collections_abc>`              |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

##### Ours

| Change | Delta |             % |       Samples | Function                                         | Location        |
| -----: | ----: | ------------: | ------------: | ------------------------------------------------ | --------------- |
|  -6.1% |   -65 | 72.4% → 68.3% | 1,066 → 1,001 | `Shrinker.step.<locals>.<lambda>`                | `shrinker.py`   |
|  -6.1% |   -65 | 72.4% → 68.3% | 1,066 → 1,001 | `ChoiceTree.step`                                | `choicetree.py` |
|  -5.9% |   -63 | 72.4% → 68.4% | 1,066 → 1,003 | `Shrinker.step`                                  | `shrinker.py`   |
|  -5.8% |   -62 | 72.4% → 68.5% | 1,066 → 1,004 | `Shrinker.fixate_shrink_passes`                  | `shrinker.py`   |
|  -5.8% |   -62 | 72.4% → 68.5% | 1,066 → 1,004 | `Shrinker.greedy_shrink`                         | `shrinker.py`   |
|  -5.6% |   -60 | 73.3% → 69.5% | 1,079 → 1,019 | `Shrinker.shrink`                                | `shrinker.py`   |
|  -5.6% |   -60 | 73.3% → 69.5% | 1,079 → 1,019 | `ConjectureRunner.shrink`                        | `engine.py`     |
|  -5.8% |   -55 | 64.8% → 61.4% |     955 → 900 | `Shrinker.cached_test_function`                  | `shrinker.py`   |
| -12.5% |   -53 | 28.9% → 25.4% |     425 → 372 | `Shrinker.consider`                              | `common.py`     |
| -12.5% |   -53 | 28.9% → 25.4% |     425 → 372 | `Shrinker.run`                                   | `common.py`     |
| -12.5% |   -53 | 28.9% → 25.4% |     425 → 372 | `Shrinker.shrink`                                | `common.py`     |
|  -4.2% |   -50 | 81.3% → 78.2% | 1,197 → 1,147 | `ConjectureRunner.cached_test_function`          | `engine.py`     |
| -10.6% |   -50 | 32.0% → 28.8% |     472 → 422 | `find_integer`                                   | `junkdrawer.py` |
|  -4.2% |   -50 | 80.2% → 77.1% | 1,181 → 1,131 | `ConjectureRunner.shrink_interesting_test_cases` | `engine.py`     |
| -12.3% |   -49 | 27.2% → 23.9% |     400 → 351 | `Shrinker.minimize_nodes.<locals>.<lambda>`      | `shrinker.py`   |
| -11.5% |   -47 | 27.8% → 24.8% |     410 → 363 | `Shrinker.try_shrinking_nodes`                   | `shrinker.py`   |
| -11.5% |   -47 | 27.8% → 24.8% |     410 → 363 | `Shrinker.minimize_nodes`                        | `shrinker.py`   |
| -11.9% |   -44 | 25.2% → 22.3% |     371 → 327 | `Shrinker.minimize_individual_choices`           | `shrinker.py`   |
| -69.8% |   -37 |   3.6% → 1.1% |       53 → 16 | `String.__init__.<locals>.<lambda>`              | `string.py`     |
| -69.8% |   -37 |   3.6% → 1.1% |       53 → 16 | `Collection.run_step`                            | `collection.py` |

##### Garbage collector

| Change | Delta |            % |   Samples | Function              | Location    |
| -----: | ----: | -----------: | --------: | --------------------- | ----------- |
| -14.2% |   -24 | 11.5% → 9.9% | 169 → 145 | `(garbage collector)` | `<unknown>` |

##### Standard library

|  Change | Delta |           % |       Samples | Function               | Location                    |
| ------: | ----: | ----------: | ------------: | ---------------------- | --------------------------- |
|   -0.5% |    -8 |       99.9% | 1,472 → 1,464 | `_run_module_code`     | `<frozen runpy>`            |
|   -0.5% |    -7 |      100.0% | 1,473 → 1,466 | `_run_code`            | `<frozen runpy>`            |
|   -0.5% |    -7 |      100.0% | 1,473 → 1,466 | `run_module`           | `<frozen runpy>`            |
|   -0.5% |    -7 |      100.0% | 1,473 → 1,466 | `_run_module_as_main`  | `<frozen runpy>`            |
| removed |    -1 | 0.1% → 0.0% |         1 → 0 | `_Environ.__getitem__` | `<frozen os>`               |
| removed |    -1 | 0.1% → 0.0% |         1 → 0 | `Mapping.get`          | `<frozen _collections_abc>` |
