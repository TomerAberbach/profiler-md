# CPU profile diff

Took 1.33s → 1.31s (-20.0ms, -1.5%) over 132 samples → 130 samples (10.1ms per sample).

| Category | Change |   Delta |      % |          Time |   Samples |
| -------- | -----: | ------: | -----: | ------------: | --------: |
| ours     |  -1.5% | -20.0ms | 100.0% | 1.33s → 1.31s | 132 → 130 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time spent directly in the function body, excluding callees.

| Change |   Delta |             % |              Time | Samples | Function                                         | Location                                                                                                                |
| -----: | ------: | ------------: | ----------------: | ------: | ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------- |
|  +4.7% | +40.0ms | 63.5% → 67.5% | 847.6ms → 887.6ms | 84 → 88 | `(unknown) [c function]`                         | (unknown)                                                                                                               |
|    new | +22.0ms |   0.0% → 1.7% |      0ms → 22.0ms |   0 → 2 | `each_child_node`                                | ../../../../../../var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node/mixin/descendence.rb:32               |
|    new | +20.6ms |   0.0% → 1.6% |      0ms → 20.6ms |   0 → 2 | `emit`                                           | ../../../../../../var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node_pattern/lexer.rb:46                   |
|    new | +12.7ms |   0.0% → 1.0% |      0ms → 12.7ms |   0 → 1 | `node_handler_method_name`                       | ../../../../../../var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/variable_force.rb:132                          |
|    new | +12.0ms |   0.0% → 0.9% |      0ms → 12.0ms |   0 → 1 | `block in code_length`                           | ../../../../../../var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/metrics/utils/code_length_calculator.rb:82     |
|    new | +11.6ms |   0.0% → 0.9% |      0ms → 11.6ms |   0 → 1 | `start_line_range`                               | ../../../../../../var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/end_keyword_alignment.rb:48              |
|    new | +11.3ms |   0.0% → 0.9% |      0ms → 11.3ms |   0 → 1 | `block (2 levels) in traverse`                   | ../../../../../../var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/yaml_duplication_checker.rb:25                     |
|    new | +11.3ms |   0.0% → 0.9% |      0ms → 11.3ms |   0 → 1 | `captures`                                       | ../../../../../../var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/utilities/simple_forwardable.rb:21         |
|    new | +10.9ms |   0.0% → 0.8% |      0ms → 10.9ms |   0 → 1 | `line`                                           | ../../../../../../var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/source/map.rb:101                                  |
|    new | +10.8ms |   0.0% → 0.8% |      0ms → 10.8ms |   0 → 1 | `arity`                                          | ../../../../../../var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node_pattern/node.rb:171                   |
|    new | +10.8ms |   0.0% → 0.8% |      0ms → 10.8ms |   0 → 1 | `detected_style`                                 | ../../../../../../var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/configurable_enforced_style.rb:66        |
|    new | +10.7ms |   0.0% → 0.8% |      0ms → 10.7ms |   0 → 1 | `initialize`                                     | ../../../../../../var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node.rb:169                                |
|    new | +10.7ms |   0.0% → 0.8% |      0ms → 10.7ms |   0 → 1 | `register`                                       | ../../../../../../usr/lib/ruby/3.1.0/psych/visitors/to_ruby.rb:334                                                      |
|    new | +10.7ms |   0.0% → 0.8% |      0ms → 10.7ms |   0 → 1 | `block in add_scope`                             | ../../../../../../var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/style/redundant_self.rb:147                    |
|    new | +10.6ms |   0.0% → 0.8% |      0ms → 10.6ms |   0 → 1 | `enforce_first_argument_with_fixed_indentation?` | ../../../../../../var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/layout/first_array_element_indentation.rb:189  |
|    new | +10.6ms |   0.0% → 0.8% |      0ms → 10.6ms |   0 → 1 | `each_node`                                      | ../../../../../../var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node/mixin/descendence.rb:103              |
|    new | +10.4ms |   0.0% → 0.8% |      0ms → 10.4ms |   0 → 1 | `relevant_node?`                                 | ../../../../../../var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/layout/multiline_method_call_indentation.rb:73 |
|    new | +10.3ms |   0.0% → 0.8% |      0ms → 10.3ms |   0 → 1 | `on_block`                                       | ../../../../../../var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/lint/unreachable_loop.rb:102                   |
|    new | +10.1ms |   0.0% → 0.8% |      0ms → 10.1ms |   0 → 1 | `visit_descendants`                              | ../../../../../../var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node/mixin/descendence.rb:114              |
|    new |  +9.6ms |   0.0% → 0.7% |       0ms → 9.6ms |   0 → 1 | `relevant_file?`                                 | ../../../../../../var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/base.rb:283                                    |

#### Progressions

Functions with the largest decrease in time spent directly in the function body, excluding callees.

|  Change |   Delta |           % |            Time | Samples | Function                                        | Location                                                                                                                    |
| ------: | ------: | ----------: | --------------: | ------: | ----------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
|  -66.2% | -22.9ms | 2.6% → 0.9% | 34.6ms → 11.7ms |   3 → 1 | `block in visit_descendants`                    | ../../../../../../var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node/mixin/descendence.rb:113                  |
| removed | -19.5ms | 1.5% → 0.0% |    19.5ms → 0ms |   2 → 0 | `node_parts`                                    | ../../../../../../var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node/if_node.rb:149                            |
|  -26.7% | -15.9ms | 4.5% → 3.3% | 59.7ms → 43.8ms |   6 → 4 | `advance`                                       | ../../../../../../var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/lexer-F1.rb:14654                                      |
| removed | -12.7ms | 1.0% → 0.0% |    12.7ms → 0ms |   1 → 0 | `regexp?`                                       | ../../../../../../var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/lexer/literal.rb:102                                   |
| removed | -12.1ms | 0.9% → 0.0% |    12.1ms → 0ms |   1 → 0 | `check_for_breakable_node`                      | ../../../../../../var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/layout/line_length.rb:115                          |
| removed | -11.6ms | 0.9% → 0.0% |    11.6ms → 0ms |   1 → 0 | `arg_list`                                      | ../../../../../../var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node_pattern/node.rb:137                       |
| removed | -11.2ms | 0.8% → 0.0% |    11.2ms → 0ms |   1 → 0 | `block (2 levels) in trigger_responding_cops`   | ../../../../../../var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb:108                                |
| removed | -11.2ms | 0.8% → 0.0% |    11.2ms → 0ms |   1 → 0 | `emit_node_search`                              | ../../../../../../var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node_pattern/method_definer.rb:72              |
| removed | -11.1ms | 0.8% → 0.0% |    11.1ms → 0ms |   1 → 0 | `cop_config_patterns_values`                    | ../../../../../../var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/allowed_pattern.rb:56                        |
| removed | -10.9ms | 0.8% → 0.0% |    10.9ms → 0ms |   1 → 0 | `slice`                                         | ../../../../../../var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/source/buffer.rb:214                                   |
| removed | -10.8ms | 0.8% → 0.0% |    10.8ms → 0ms |   1 → 0 | `set_start_location`                            | ../../../../../../usr/lib/ruby/3.1.0/psych/tree_builder.rb:130                                                              |
| removed | -10.7ms | 0.8% → 0.0% |    10.7ms → 0ms |   1 → 0 | `extract_options`                               | ../../../../../../var/lib/gems/3.1.0/gems/regexp_parser-2.12.0/lib/regexp_parser/parser.rb:76                               |
| removed | -10.7ms | 0.8% → 0.0% |    10.7ms → 0ms |   1 → 0 | `block in initialize`                           | ../../../../../../var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node.rb:168                                    |
| removed | -10.7ms | 0.8% → 0.0% |    10.7ms → 0ms |   1 → 0 | `source_range`                                  | ../../../../../../var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node.rb:332                                    |
| removed | -10.7ms | 0.8% → 0.0% |    10.7ms → 0ms |   1 → 0 | `meta_assignment_node`                          | ../../../../../../var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/variable_force/assignment.rb:92                    |
| removed | -10.7ms | 0.8% → 0.0% |    10.7ms → 0ms |   1 → 0 | `on_send`                                       | ../../../../../../var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/layout/empty_lines_around_attribute_accessor.rb:79 |
| removed | -10.6ms | 0.8% → 0.0% |    10.6ms → 0ms |   1 → 0 | `method_name`                                   | ../../../../../../var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node/mixin/method_dispatch_node.rb:29          |
| removed | -10.4ms | 0.8% → 0.0% |    10.4ms → 0ms |   1 → 0 | `block in override_department_setting_for_cops` | ../../../../../../var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/config_loader_resolver.rb:131                          |
| removed | -10.2ms | 0.8% → 0.0% |    10.2ms → 0ms |   1 → 0 | `id_as_hash_key?`                               | ../../../../../../var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/lint/hash_compare_by_identity.rb:51                |
| removed | -10.1ms | 0.8% → 0.0% |    10.1ms → 0ms |   1 → 0 | `extend_string_slice_end`                       | ../../../../../../var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/lexer-strings.rb:5285                                  |

### Total time

#### Regressions

Functions with the largest increase in total time spent in the function and all its callees.

|  Change |   Delta |             % |              Time | Samples | Function                            | Location                                                                                                      |
| ------: | ------: | ------------: | ----------------: | ------: | ----------------------------------- | ------------------------------------------------------------------------------------------------------------- |
|  +39.7% | +73.2ms | 13.8% → 19.6% | 184.5ms → 257.7ms | 18 → 26 | `on_def`                            | ../../../../../../var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/traversal.rb:167                 |
| +162.7% | +47.5ms |   2.2% → 5.8% |   29.2ms → 76.7ms |   3 → 8 | `on_block`                          | ../../../../../../var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb:74                   |
|  +14.5% | +38.4ms | 19.8% → 23.0% | 264.5ms → 302.9ms | 26 → 30 | `on_def`                            | ../../../../../../var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb:74                   |
| +171.0% | +32.9ms |   1.4% → 4.0% |   19.2ms → 52.1ms |   2 → 5 | `check_operator`                    | ../../../../../../var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/layout/space_around_operators.rb:191 |
|   +9.5% | +32.3ms | 25.6% → 28.4% | 341.1ms → 373.4ms | 34 → 37 | `on_while`                          | ../../../../../../var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/traversal.rb:151                 |
| +301.8% | +31.2ms |   0.8% → 3.2% |   10.3ms → 41.5ms |   1 → 4 | `on_ensure`                         | ../../../../../../var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb:74                   |
|   +8.8% | +31.0ms | 26.3% → 29.0% | 350.8ms → 381.7ms | 35 → 38 | `on_module`                         | ../../../../../../var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb:74                   |
|     new | +30.7ms |   0.0% → 2.3% |      0ms → 30.7ms |   0 → 3 | `emit`                              | ../../../../../../var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node_pattern/lexer.rb:46         |
|     new | +30.7ms |   0.0% → 2.3% |      0ms → 30.7ms |   0 → 3 | `block in next_token`               | ../../../../../../var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node_pattern/lexer.rex.rb:134    |
|     new | +30.7ms |   0.0% → 2.3% |      0ms → 30.7ms |   0 → 3 | `action`                            | ../../../../../../var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node_pattern/lexer.rex.rb:71     |
|   +6.0% | +29.6ms | 37.2% → 40.0% | 495.8ms → 525.4ms | 49 → 52 | `with_cop_error_handling`           | ../../../../../../var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb:179                  |
|   +5.6% | +29.1ms | 38.6% → 41.4% | 515.1ms → 544.2ms | 51 → 54 | `investigate`                       | ../../../../../../var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/team.rb:111                          |
|   +5.6% | +29.1ms | 38.6% → 41.4% | 515.1ms → 544.2ms | 51 → 54 | `block in inspect_file`             | ../../../../../../var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb:357                            |
|   +5.6% | +29.1ms | 38.6% → 41.4% | 515.1ms → 544.2ms | 51 → 54 | `inspect_file`                      | ../../../../../../var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb:359                            |
|   +5.6% | +29.1ms | 38.6% → 41.4% | 515.1ms → 544.2ms | 51 → 54 | `block in do_inspection_loop`       | ../../../../../../var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb:300                            |
|   +5.6% | +29.1ms | 38.6% → 41.4% | 515.1ms → 544.2ms | 51 → 54 | `block in iterate_until_no_changes` | ../../../../../../var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb:327                            |
|   +5.6% | +29.1ms | 38.6% → 41.4% | 515.1ms → 544.2ms | 51 → 54 | `iterate_until_no_changes`          | ../../../../../../var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb:328                            |
|  +98.9% | +28.9ms |   2.2% → 4.4% |   29.2ms → 58.2ms |   3 → 6 | `line`                              | ../../../../../../var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/token.rb:27                      |
| +120.0% | +28.4ms |   1.8% → 4.0% |   23.6ms → 52.0ms |   2 → 5 | `each_node`                         | ../../../../../../var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node/mixin/descendence.rb:103    |
|  +56.6% | +23.8ms |   3.2% → 5.0% |   42.1ms → 65.9ms |   4 → 7 | `block in on_send`                  | ../../../../../../var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/traversal.rb:171                 |

#### Progressions

Functions with the largest decrease in total time spent in the function and all its callees.

|  Change |   Delta |             % |              Time |   Samples | Function                 | Location                                                                                                                    |
| ------: | ------: | ------------: | ----------------: | --------: | ------------------------ | --------------------------------------------------------------------------------------------------------------------------- |
|  -30.6% | -35.0ms |   8.6% → 6.0% |  114.2ms → 79.2ms |    11 → 8 | `advance`                | ../../../../../../var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/lexer-F1.rb:14654                                      |
|  -30.6% | -35.0ms |   8.6% → 6.0% |  114.2ms → 79.2ms |    11 → 8 | `next_token`             | ../../../../../../var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/base.rb:258                                            |
| removed | -33.6ms |   2.5% → 0.0% |      33.6ms → 0ms |     3 → 0 | `advance`                | ../../../../../../var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/lexer-strings.rb:4997                                  |
|  -70.7% | -23.5ms |   2.5% → 0.7% |    33.3ms → 9.7ms |     3 → 1 | `result`                 | ../../../../../../usr/lib/ruby/3.1.0/erb.rb:906                                                                             |
| removed | -20.7ms |   1.5% → 0.0% |      20.7ms → 0ms |     2 → 0 | `def_node_search`        | ../../../../../../var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node_pattern/method_definer.rb:25              |
| removed | -20.7ms |   1.5% → 0.0% |      20.7ms → 0ms |     2 → 0 | `def_node_search`        | ../../../../../../var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node_pattern.rb:50                             |
|  -65.9% | -20.6ms |   2.3% → 0.8% |   31.3ms → 10.7ms |     3 → 1 | `add_scope`              | ../../../../../../var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/style/redundant_self.rb:148                        |
|  -65.9% | -20.6ms |   2.3% → 0.8% |   31.3ms → 10.7ms |     3 → 1 | `on_def`                 | ../../../../../../var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/style/redundant_self.rb:83                         |
|   -4.4% | -20.3ms | 34.8% → 33.8% | 464.9ms → 444.6ms |   46 → 44 | `<top (required)>`       | ../../../../../../var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop.rb:780                                                 |
| removed | -20.1ms |   1.5% → 0.0% |      20.1ms → 0ms |     2 → 0 | `on_if`                  | ../../../../../../var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/lint/assignment_in_condition.rb:68                 |
|   -1.5% | -20.0ms |        100.0% |     1.33s → 1.31s | 132 → 130 | `(unknown) [c function]` | (unknown)                                                                                                                   |
| removed | -20.0ms |   1.5% → 0.0% |      20.0ms → 0ms |     2 → 0 | `on_send`                | ../../../../../../var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/layout/empty_lines_around_attribute_accessor.rb:79 |
|  -11.5% | -19.7ms | 12.9% → 11.6% | 171.9ms → 152.1ms |   17 → 15 | `tokenize`               | ../../../../../../var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/processed_source.rb:257                        |
| removed | -19.2ms |   1.4% → 0.0% |      19.2ms → 0ms |     2 → 0 | `indentation_to_check?`  | ../../../../../../var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/layout/indentation_width.rb:339                    |
| removed | -19.2ms |   1.4% → 0.0% |      19.2ms → 0ms |     2 → 0 | `check_indentation`      | ../../../../../../var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/layout/indentation_width.rb:276                    |
| removed | -19.2ms |   1.4% → 0.0% |      19.2ms → 0ms |     2 → 0 | `on_def`                 | ../../../../../../var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/layout/indentation_width.rb:125                    |
|   -9.8% | -18.9ms | 14.4% → 13.2% | 192.2ms → 173.3ms |   19 → 17 | `parse`                  | ../../../../../../var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/processed_source.rb:241                        |
|   -9.8% | -18.9ms | 14.4% → 13.2% | 192.2ms → 173.3ms |   19 → 17 | `initialize`             | ../../../../../../var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/processed_source.rb:67                         |
|   -9.8% | -18.9ms | 14.4% → 13.2% | 192.2ms → 173.3ms |   19 → 17 | `from_file`              | ../../../../../../var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/processed_source.rb:47                         |
|   -9.8% | -18.9ms | 14.4% → 13.2% | 192.2ms → 173.3ms |   19 → 17 | `get_processed_source`   | ../../../../../../var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb:496                                          |
