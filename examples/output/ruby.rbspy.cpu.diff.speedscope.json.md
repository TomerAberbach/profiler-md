# Sampling profile diff

Took 1.33s → 1.31s (-20.04ms, -1.5%) over 133 samples → 131 samples (10.0ms per sample).

| Category         | Change |    Delta |             % |              Time | Samples |
| ---------------- | -----: | -------: | ------------: | ----------------: | ------: |
| Native           |  +4.7% | +39.95ms | 63.5% → 67.5% | 847.6ms → 887.6ms | 85 → 89 |
| Third-party      | -11.6% | -52.15ms | 33.6% → 30.2% | 448.9ms → 396.7ms | 44 → 39 |
| Standard library | -20.7% |  -7.84ms |   2.8% → 2.3% |   37.9ms → 30.1ms |   4 → 3 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time spent directly in the function body, excluding callees.

| Change |    Delta |             % |              Time | Samples | Function                                         | Location                                                                                              |
| -----: | -------: | ------------: | ----------------: | ------: | ------------------------------------------------ | ----------------------------------------------------------------------------------------------------- |
|  +4.7% | +39.95ms | 63.5% → 67.5% | 847.6ms → 887.6ms | 85 → 89 | `(unknown) [c function]`                         | `<unknown>`                                                                                           |
|    new | +21.97ms |   0.0% → 1.7% |      0ms → 22.0ms |   0 → 2 | `each_child_node`                                | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node/mixin/descendence.rb`               |
|    new | +20.59ms |   0.0% → 1.6% |      0ms → 20.6ms |   0 → 2 | `emit`                                           | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node_pattern/lexer.rb`                   |
|    new | +12.65ms |   0.0% → 1.0% |      0ms → 12.7ms |   0 → 1 | `node_handler_method_name`                       | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/variable_force.rb`                           |
|    new | +12.03ms |   0.0% → 0.9% |      0ms → 12.0ms |   0 → 1 | `block in code_length`                           | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/metrics/utils/code_length_calculator.rb`     |
|    new | +11.63ms |   0.0% → 0.9% |      0ms → 11.6ms |   0 → 1 | `start_line_range`                               | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/end_keyword_alignment.rb`              |
|    new | +11.35ms |   0.0% → 0.9% |      0ms → 11.3ms |   0 → 1 | `block (2 levels) in traverse`                   | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/yaml_duplication_checker.rb`                     |
|    new | +11.32ms |   0.0% → 0.9% |      0ms → 11.3ms |   0 → 1 | `captures`                                       | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/utilities/simple_forwardable.rb`         |
|    new | +10.90ms |   0.0% → 0.8% |      0ms → 10.9ms |   0 → 1 | `line`                                           | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/source/map.rb`                                   |
|    new | +10.83ms |   0.0% → 0.8% |      0ms → 10.8ms |   0 → 1 | `arity`                                          | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node_pattern/node.rb`                    |
|    new | +10.78ms |   0.0% → 0.8% |      0ms → 10.8ms |   0 → 1 | `detected_style`                                 | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/configurable_enforced_style.rb`        |
|    new | +10.75ms |   0.0% → 0.8% |      0ms → 10.7ms |   0 → 1 | `initialize`                                     | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node.rb`                                 |
|    new | +10.69ms |   0.0% → 0.8% |      0ms → 10.7ms |   0 → 1 | `register`                                       | `../../lib/ruby/3.1.0/psych/visitors/to_ruby.rb`                                                      |
|    new | +10.68ms |   0.0% → 0.8% |      0ms → 10.7ms |   0 → 1 | `block in add_scope`                             | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/style/redundant_self.rb`                     |
|    new | +10.58ms |   0.0% → 0.8% |      0ms → 10.6ms |   0 → 1 | `enforce_first_argument_with_fixed_indentation?` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/layout/first_array_element_indentation.rb`   |
|    new | +10.56ms |   0.0% → 0.8% |      0ms → 10.6ms |   0 → 1 | `each_node`                                      | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node/mixin/descendence.rb`               |
|    new | +10.38ms |   0.0% → 0.8% |      0ms → 10.4ms |   0 → 1 | `relevant_node?`                                 | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/layout/multiline_method_call_indentation.rb` |
|    new | +10.29ms |   0.0% → 0.8% |      0ms → 10.3ms |   0 → 1 | `on_block`                                       | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/lint/unreachable_loop.rb`                    |
|    new | +10.13ms |   0.0% → 0.8% |      0ms → 10.1ms |   0 → 1 | `search`                                         | `../../lib/ruby/3.1.0/optparse.rb`                                                                    |
|    new | +10.06ms |   0.0% → 0.8% |      0ms → 10.1ms |   0 → 1 | `visit_descendants`                              | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node/mixin/descendence.rb`               |

##### Native

| Change |    Delta |             % |              Time | Samples | Function                 | Location    |
| -----: | -------: | ------------: | ----------------: | ------: | ------------------------ | ----------- |
|  +4.7% | +39.95ms | 63.5% → 67.5% | 847.6ms → 887.6ms | 85 → 89 | `(unknown) [c function]` | `<unknown>` |

##### Third-party

| Change |    Delta |           % |         Time | Samples | Function                                         | Location                                                                                              |
| -----: | -------: | ----------: | -----------: | ------: | ------------------------------------------------ | ----------------------------------------------------------------------------------------------------- |
|    new | +21.97ms | 0.0% → 1.7% | 0ms → 22.0ms |   0 → 2 | `each_child_node`                                | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node/mixin/descendence.rb`               |
|    new | +20.59ms | 0.0% → 1.6% | 0ms → 20.6ms |   0 → 2 | `emit`                                           | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node_pattern/lexer.rb`                   |
|    new | +12.65ms | 0.0% → 1.0% | 0ms → 12.7ms |   0 → 1 | `node_handler_method_name`                       | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/variable_force.rb`                           |
|    new | +12.03ms | 0.0% → 0.9% | 0ms → 12.0ms |   0 → 1 | `block in code_length`                           | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/metrics/utils/code_length_calculator.rb`     |
|    new | +11.63ms | 0.0% → 0.9% | 0ms → 11.6ms |   0 → 1 | `start_line_range`                               | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/end_keyword_alignment.rb`              |
|    new | +11.35ms | 0.0% → 0.9% | 0ms → 11.3ms |   0 → 1 | `block (2 levels) in traverse`                   | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/yaml_duplication_checker.rb`                     |
|    new | +11.32ms | 0.0% → 0.9% | 0ms → 11.3ms |   0 → 1 | `captures`                                       | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/utilities/simple_forwardable.rb`         |
|    new | +10.90ms | 0.0% → 0.8% | 0ms → 10.9ms |   0 → 1 | `line`                                           | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/source/map.rb`                                   |
|    new | +10.83ms | 0.0% → 0.8% | 0ms → 10.8ms |   0 → 1 | `arity`                                          | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node_pattern/node.rb`                    |
|    new | +10.78ms | 0.0% → 0.8% | 0ms → 10.8ms |   0 → 1 | `detected_style`                                 | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/configurable_enforced_style.rb`        |
|    new | +10.75ms | 0.0% → 0.8% | 0ms → 10.7ms |   0 → 1 | `initialize`                                     | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node.rb`                                 |
|    new | +10.68ms | 0.0% → 0.8% | 0ms → 10.7ms |   0 → 1 | `block in add_scope`                             | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/style/redundant_self.rb`                     |
|    new | +10.58ms | 0.0% → 0.8% | 0ms → 10.6ms |   0 → 1 | `enforce_first_argument_with_fixed_indentation?` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/layout/first_array_element_indentation.rb`   |
|    new | +10.56ms | 0.0% → 0.8% | 0ms → 10.6ms |   0 → 1 | `each_node`                                      | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node/mixin/descendence.rb`               |
|    new | +10.38ms | 0.0% → 0.8% | 0ms → 10.4ms |   0 → 1 | `relevant_node?`                                 | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/layout/multiline_method_call_indentation.rb` |
|    new | +10.29ms | 0.0% → 0.8% | 0ms → 10.3ms |   0 → 1 | `on_block`                                       | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/lint/unreachable_loop.rb`                    |
|    new | +10.06ms | 0.0% → 0.8% | 0ms → 10.1ms |   0 → 1 | `visit_descendants`                              | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node/mixin/descendence.rb`               |
|    new |  +9.63ms | 0.0% → 0.7% |  0ms → 9.6ms |   0 → 1 | `relevant_file?`                                 | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/base.rb`                                     |
|    new |  +9.60ms | 0.0% → 0.7% |  0ms → 9.6ms |   0 → 1 | `unary_operation?`                               | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node/mixin/method_dispatch_node.rb`      |
|    new |  +9.37ms | 0.0% → 0.7% |  0ms → 9.4ms |   0 → 1 | `line_index_for_position`                        | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/source/buffer.rb`                                |

##### Standard library

| Change |    Delta |           % |         Time | Samples | Function      | Location                                         |
| -----: | -------: | ----------: | -----------: | ------: | ------------- | ------------------------------------------------ |
|    new | +10.69ms | 0.0% → 0.8% | 0ms → 10.7ms |   0 → 1 | `register`    | `../../lib/ruby/3.1.0/psych/visitors/to_ruby.rb` |
|    new | +10.13ms | 0.0% → 0.8% | 0ms → 10.1ms |   0 → 1 | `search`      | `../../lib/ruby/3.1.0/optparse.rb`               |
|    new |  +9.27ms | 0.0% → 0.7% |  0ms → 9.3ms |   0 → 1 | `<class:DNS>` | `../../lib/ruby/3.1.0/resolv.rb`                 |

#### Improvements

Functions with the largest decrease in time spent directly in the function body, excluding callees.

|  Change |    Delta |           % |            Time | Samples | Function                                        | Location                                                                                                  |
| ------: | -------: | ----------: | --------------: | ------: | ----------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
|  -66.2% | -22.90ms | 2.6% → 0.9% | 34.6ms → 11.7ms |   3 → 1 | `block in visit_descendants`                    | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node/mixin/descendence.rb`                   |
| removed | -19.52ms | 1.5% → 0.0% |    19.5ms → 0ms |   2 → 0 | `node_parts`                                    | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node/if_node.rb`                             |
|  -26.7% | -15.95ms | 4.5% → 3.3% | 59.7ms → 43.8ms |   6 → 4 | `advance`                                       | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/lexer-F1.rb`                                         |
| removed | -12.72ms | 1.0% → 0.0% |    12.7ms → 0ms |   1 → 0 | `regexp?`                                       | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/lexer/literal.rb`                                    |
| removed | -12.08ms | 0.9% → 0.0% |    12.1ms → 0ms |   1 → 0 | `check_for_breakable_node`                      | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/layout/line_length.rb`                           |
| removed | -11.61ms | 0.9% → 0.0% |    11.6ms → 0ms |   1 → 0 | `arg_list`                                      | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node_pattern/node.rb`                        |
| removed | -11.24ms | 0.8% → 0.0% |    11.2ms → 0ms |   1 → 0 | `block (2 levels) in trigger_responding_cops`   | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`                                 |
| removed | -11.21ms | 0.8% → 0.0% |    11.2ms → 0ms |   1 → 0 | `emit_node_search`                              | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node_pattern/method_definer.rb`              |
| removed | -11.11ms | 0.8% → 0.0% |    11.1ms → 0ms |   1 → 0 | `cop_config_patterns_values`                    | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/allowed_pattern.rb`                        |
| removed | -10.95ms | 0.8% → 0.0% |    10.9ms → 0ms |   1 → 0 | `slice`                                         | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/source/buffer.rb`                                    |
| removed | -10.78ms | 0.8% → 0.0% |    10.8ms → 0ms |   1 → 0 | `set_start_location`                            | `../../lib/ruby/3.1.0/psych/tree_builder.rb`                                                              |
| removed | -10.75ms | 0.8% → 0.0% |    10.7ms → 0ms |   1 → 0 | `extract_options`                               | `/var/lib/gems/3.1.0/gems/regexp_parser-2.12.0/lib/regexp_parser/parser.rb`                               |
| removed | -10.69ms | 0.8% → 0.0% |    10.7ms → 0ms |   1 → 0 | `block in initialize`                           | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node.rb`                                     |
| removed | -10.68ms | 0.8% → 0.0% |    10.7ms → 0ms |   1 → 0 | `source_range`                                  | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node.rb`                                     |
| removed | -10.67ms | 0.8% → 0.0% |    10.7ms → 0ms |   1 → 0 | `meta_assignment_node`                          | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/variable_force/assignment.rb`                    |
| removed | -10.66ms | 0.8% → 0.0% |    10.7ms → 0ms |   1 → 0 | `on_send`                                       | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/layout/empty_lines_around_attribute_accessor.rb` |
| removed | -10.62ms | 0.8% → 0.0% |    10.6ms → 0ms |   1 → 0 | `method_name`                                   | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node/mixin/method_dispatch_node.rb`          |
| removed | -10.58ms | 0.8% → 0.0% |    10.6ms → 0ms |   1 → 0 | `calculate`                                     | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/metrics/utils/abc_size_calculator.rb`            |
| removed | -10.44ms | 0.8% → 0.0% |    10.4ms → 0ms |   1 → 0 | `block in override_department_setting_for_cops` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/config_loader_resolver.rb`                           |
| removed | -10.22ms | 0.8% → 0.0% |    10.2ms → 0ms |   1 → 0 | `id_as_hash_key?`                               | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/lint/hash_compare_by_identity.rb`                |

##### Third-party

|  Change |    Delta |           % |            Time | Samples | Function                                        | Location                                                                                                  |
| ------: | -------: | ----------: | --------------: | ------: | ----------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
|  -66.2% | -22.90ms | 2.6% → 0.9% | 34.6ms → 11.7ms |   3 → 1 | `block in visit_descendants`                    | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node/mixin/descendence.rb`                   |
| removed | -19.52ms | 1.5% → 0.0% |    19.5ms → 0ms |   2 → 0 | `node_parts`                                    | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node/if_node.rb`                             |
|  -26.7% | -15.95ms | 4.5% → 3.3% | 59.7ms → 43.8ms |   6 → 4 | `advance`                                       | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/lexer-F1.rb`                                         |
| removed | -12.72ms | 1.0% → 0.0% |    12.7ms → 0ms |   1 → 0 | `regexp?`                                       | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/lexer/literal.rb`                                    |
| removed | -12.08ms | 0.9% → 0.0% |    12.1ms → 0ms |   1 → 0 | `check_for_breakable_node`                      | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/layout/line_length.rb`                           |
| removed | -11.61ms | 0.9% → 0.0% |    11.6ms → 0ms |   1 → 0 | `arg_list`                                      | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node_pattern/node.rb`                        |
| removed | -11.24ms | 0.8% → 0.0% |    11.2ms → 0ms |   1 → 0 | `block (2 levels) in trigger_responding_cops`   | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`                                 |
| removed | -11.21ms | 0.8% → 0.0% |    11.2ms → 0ms |   1 → 0 | `emit_node_search`                              | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node_pattern/method_definer.rb`              |
| removed | -11.11ms | 0.8% → 0.0% |    11.1ms → 0ms |   1 → 0 | `cop_config_patterns_values`                    | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/allowed_pattern.rb`                        |
| removed | -10.95ms | 0.8% → 0.0% |    10.9ms → 0ms |   1 → 0 | `slice`                                         | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/source/buffer.rb`                                    |
| removed | -10.75ms | 0.8% → 0.0% |    10.7ms → 0ms |   1 → 0 | `extract_options`                               | `/var/lib/gems/3.1.0/gems/regexp_parser-2.12.0/lib/regexp_parser/parser.rb`                               |
| removed | -10.69ms | 0.8% → 0.0% |    10.7ms → 0ms |   1 → 0 | `block in initialize`                           | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node.rb`                                     |
| removed | -10.68ms | 0.8% → 0.0% |    10.7ms → 0ms |   1 → 0 | `source_range`                                  | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node.rb`                                     |
| removed | -10.67ms | 0.8% → 0.0% |    10.7ms → 0ms |   1 → 0 | `meta_assignment_node`                          | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/variable_force/assignment.rb`                    |
| removed | -10.66ms | 0.8% → 0.0% |    10.7ms → 0ms |   1 → 0 | `on_send`                                       | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/layout/empty_lines_around_attribute_accessor.rb` |
| removed | -10.62ms | 0.8% → 0.0% |    10.6ms → 0ms |   1 → 0 | `method_name`                                   | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node/mixin/method_dispatch_node.rb`          |
| removed | -10.58ms | 0.8% → 0.0% |    10.6ms → 0ms |   1 → 0 | `calculate`                                     | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/metrics/utils/abc_size_calculator.rb`            |
| removed | -10.44ms | 0.8% → 0.0% |    10.4ms → 0ms |   1 → 0 | `block in override_department_setting_for_cops` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/config_loader_resolver.rb`                           |
| removed | -10.22ms | 0.8% → 0.0% |    10.2ms → 0ms |   1 → 0 | `id_as_hash_key?`                               | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/lint/hash_compare_by_identity.rb`                |
| removed | -10.07ms | 0.8% → 0.0% |    10.1ms → 0ms |   1 → 0 | `extend_string_slice_end`                       | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/lexer-strings.rb`                                    |

##### Standard library

|  Change |    Delta |           % |         Time | Samples | Function                 | Location                                                             |
| ------: | -------: | ----------: | -----------: | ------: | ------------------------ | -------------------------------------------------------------------- |
| removed | -10.78ms | 0.8% → 0.0% | 10.8ms → 0ms |   1 → 0 | `set_start_location`     | `../../lib/ruby/3.1.0/psych/tree_builder.rb`                         |
| removed |  -9.51ms | 0.7% → 0.0% |  9.5ms → 0ms |   1 → 0 | `==`                     | `../../lib/ruby/vendor_ruby/rubygems/resolver/dependency_request.rb` |
| removed |  -9.16ms | 0.7% → 0.0% |  9.2ms → 0ms |   1 → 0 | `initialize`             | `../../lib/ruby/3.1.0/psych/nodes/scalar.rb`                         |
| removed |  -8.49ms | 0.6% → 0.0% |  8.5ms → 0ms |   1 → 0 | `required_ruby_version=` | `../../lib/ruby/vendor_ruby/rubygems/specification.rb`               |

### Total time

#### Regressions

Functions with the largest increase in total time spent in the function and all its callees.

##### Third-party

|  Change |    Delta |             % |              Time | Samples | Function                            | Location                                                                                   |
| ------: | -------: | ------------: | ----------------: | ------: | ----------------------------------- | ------------------------------------------------------------------------------------------ |
|  +39.7% | +73.19ms | 13.8% → 19.6% | 184.5ms → 257.7ms | 18 → 26 | `on_def`                            | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/traversal.rb`                 |
| +162.7% | +47.49ms |   2.2% → 5.8% |   29.2ms → 76.7ms |   3 → 8 | `on_block`                          | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`                  |
|  +14.5% | +38.38ms | 19.8% → 23.0% | 264.5ms → 302.9ms | 26 → 30 | `on_def`                            | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`                  |
| +171.0% | +32.85ms |   1.4% → 4.0% |   19.2ms → 52.1ms |   2 → 5 | `check_operator`                    | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/layout/space_around_operators.rb` |
|   +9.5% | +32.29ms | 25.6% → 28.4% | 341.1ms → 373.4ms | 34 → 37 | `on_while`                          | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/traversal.rb`                 |
| +301.8% | +31.19ms |   0.8% → 3.2% |   10.3ms → 41.5ms |   1 → 4 | `on_ensure`                         | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`                  |
|   +8.8% | +30.96ms | 26.3% → 29.0% | 350.8ms → 381.7ms | 35 → 38 | `on_module`                         | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`                  |
|     new | +30.70ms |   0.0% → 2.3% |      0ms → 30.7ms |   0 → 3 | `emit`                              | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node_pattern/lexer.rb`        |
|     new | +30.70ms |   0.0% → 2.3% |      0ms → 30.7ms |   0 → 3 | `block in next_token`               | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node_pattern/lexer.rex.rb`    |
|     new | +30.70ms |   0.0% → 2.3% |      0ms → 30.7ms |   0 → 3 | `action`                            | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node_pattern/lexer.rex.rb`    |
|   +6.0% | +29.56ms | 37.2% → 40.0% | 495.8ms → 525.4ms | 49 → 52 | `with_cop_error_handling`           | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`                  |
|   +5.6% | +29.07ms | 38.6% → 41.4% | 515.1ms → 544.2ms | 51 → 54 | `investigate`                       | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/team.rb`                          |
|   +5.6% | +29.07ms | 38.6% → 41.4% | 515.1ms → 544.2ms | 51 → 54 | `block in inspect_file`             | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`                            |
|   +5.6% | +29.07ms | 38.6% → 41.4% | 515.1ms → 544.2ms | 51 → 54 | `inspect_file`                      | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`                            |
|   +5.6% | +29.07ms | 38.6% → 41.4% | 515.1ms → 544.2ms | 51 → 54 | `block in do_inspection_loop`       | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`                            |
|   +5.6% | +29.07ms | 38.6% → 41.4% | 515.1ms → 544.2ms | 51 → 54 | `block in iterate_until_no_changes` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`                            |
|   +5.6% | +29.07ms | 38.6% → 41.4% | 515.1ms → 544.2ms | 51 → 54 | `iterate_until_no_changes`          | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`                            |
|  +98.9% | +28.92ms |   2.2% → 4.4% |   29.2ms → 58.2ms |   3 → 6 | `line`                              | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/token.rb`                     |
| +120.0% | +28.35ms |   1.8% → 4.0% |   23.6ms → 52.0ms |   2 → 5 | `each_node`                         | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node/mixin/descendence.rb`    |
|  +56.6% | +23.80ms |   3.2% → 5.0% |   42.1ms → 65.9ms |   4 → 7 | `block in on_send`                  | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/traversal.rb`                 |

##### Standard library

| Change |    Delta |             % |              Time | Samples | Function                     | Location                                                                   |
| -----: | -------: | ------------: | ----------------: | ------: | ---------------------------- | -------------------------------------------------------------------------- |
|    new | +20.05ms |   0.0% → 1.5% |      0ms → 20.1ms |   0 → 2 | `tap`                        | `<internal:kernel>`                                                        |
|  +2.4% | +12.09ms | 37.8% → 39.3% | 504.6ms → 516.6ms | 50 → 51 | `require`                    | `<internal:/usr/lib/ruby/vendor_ruby/rubygems/core_ext/kernel_require.rb>` |
|    new | +11.67ms |   0.0% → 0.9% |      0ms → 11.7ms |   0 → 1 | `<top (required)>`           | `../../lib/ruby/3.1.0/cgi.rb`                                              |
|    new | +11.64ms |   0.0% → 0.9% |      0ms → 11.6ms |   0 → 1 | `open_file`                  | `../../lib/ruby/vendor_ruby/rubygems.rb`                                   |
|    new | +10.69ms |   0.0% → 0.8% |      0ms → 10.7ms |   0 → 1 | `register`                   | `../../lib/ruby/3.1.0/psych/visitors/to_ruby.rb`                           |
|    new | +10.69ms |   0.0% → 0.8% |      0ms → 10.7ms |   0 → 1 | `visit_Psych_Nodes_Scalar`   | `../../lib/ruby/3.1.0/psych/visitors/to_ruby.rb`                           |
|    new | +10.69ms |   0.0% → 0.8% |      0ms → 10.7ms |   0 → 1 | `block in register_empty`    | `../../lib/ruby/3.1.0/psych/visitors/to_ruby.rb`                           |
|    new | +10.69ms |   0.0% → 0.8% |      0ms → 10.7ms |   0 → 1 | `register_empty`             | `../../lib/ruby/3.1.0/psych/visitors/to_ruby.rb`                           |
|    new | +10.69ms |   0.0% → 0.8% |      0ms → 10.7ms |   0 → 1 | `visit_Psych_Nodes_Sequence` | `../../lib/ruby/3.1.0/psych/visitors/to_ruby.rb`                           |
|    new | +10.34ms |   0.0% → 0.8% |      0ms → 10.3ms |   0 → 1 | `mkpath`                     | `../../lib/ruby/3.1.0/pathname.rb`                                         |
|    new | +10.13ms |   0.0% → 0.8% |      0ms → 10.1ms |   0 → 1 | `search`                     | `../../lib/ruby/3.1.0/optparse.rb`                                         |
|    new | +10.13ms |   0.0% → 0.8% |      0ms → 10.1ms |   0 → 1 | `block in visit`             | `../../lib/ruby/3.1.0/optparse.rb`                                         |
|    new | +10.13ms |   0.0% → 0.8% |      0ms → 10.1ms |   0 → 1 | `visit`                      | `../../lib/ruby/3.1.0/optparse.rb`                                         |
|    new | +10.13ms |   0.0% → 0.8% |      0ms → 10.1ms |   0 → 1 | `block in make_switch`       | `../../lib/ruby/3.1.0/optparse.rb`                                         |
|    new | +10.13ms |   0.0% → 0.8% |      0ms → 10.1ms |   0 → 1 | `make_switch`                | `../../lib/ruby/3.1.0/optparse.rb`                                         |
|    new | +10.13ms |   0.0% → 0.8% |      0ms → 10.1ms |   0 → 1 | `define`                     | `../../lib/ruby/3.1.0/optparse.rb`                                         |
|    new | +10.13ms |   0.0% → 0.8% |      0ms → 10.1ms |   0 → 1 | `on`                         | `../../lib/ruby/3.1.0/optparse.rb`                                         |
|    new | +10.13ms |   0.0% → 0.8% |      0ms → 10.1ms |   0 → 1 | `initialize`                 | `../../lib/ruby/3.1.0/optparse.rb`                                         |
|    new |  +9.88ms |   0.0% → 0.8% |       0ms → 9.9ms |   0 → 1 | `<top (required)>`           | `../../lib/ruby/3.1.0/uri.rb`                                              |
|    new |  +9.87ms |   0.0% → 0.8% |       0ms → 9.9ms |   0 → 1 | `<top (required)>`           | `../../lib/ruby/3.1.0/psych/nodes.rb`                                      |

#### Improvements

Functions with the largest decrease in total time spent in the function and all its callees.

|  Change |    Delta |             % |              Time |   Samples | Function                 | Location                                                                                                  |
| ------: | -------: | ------------: | ----------------: | --------: | ------------------------ | --------------------------------------------------------------------------------------------------------- |
|  -30.6% | -34.96ms |   8.6% → 6.0% |  114.2ms → 79.2ms |    11 → 8 | `advance`                | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/lexer-F1.rb`                                         |
|  -30.6% | -34.96ms |   8.6% → 6.0% |  114.2ms → 79.2ms |    11 → 8 | `next_token`             | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/base.rb`                                             |
| removed | -33.64ms |   2.5% → 0.0% |      33.6ms → 0ms |     3 → 0 | `advance`                | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/lexer-strings.rb`                                    |
|  -70.7% | -23.51ms |   2.5% → 0.7% |    33.3ms → 9.7ms |     3 → 1 | `result`                 | `../../lib/ruby/3.1.0/erb.rb`                                                                             |
| removed | -20.66ms |   1.5% → 0.0% |      20.7ms → 0ms |     2 → 0 | `def_node_search`        | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node_pattern/method_definer.rb`              |
| removed | -20.66ms |   1.5% → 0.0% |      20.7ms → 0ms |     2 → 0 | `def_node_search`        | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node_pattern.rb`                             |
|  -65.9% | -20.61ms |   2.3% → 0.8% |   31.3ms → 10.7ms |     3 → 1 | `add_scope`              | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/style/redundant_self.rb`                         |
|  -65.9% | -20.61ms |   2.3% → 0.8% |   31.3ms → 10.7ms |     3 → 1 | `on_def`                 | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/style/redundant_self.rb`                         |
|   -4.4% | -20.33ms | 34.8% → 33.8% | 464.9ms → 444.6ms |   46 → 44 | `<top (required)>`       | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop.rb`                                                  |
| removed | -20.13ms |   1.5% → 0.0% |      20.1ms → 0ms |     2 → 0 | `on_if`                  | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/lint/assignment_in_condition.rb`                 |
|   -1.5% | -20.04ms |        100.0% |     1.33s → 1.31s | 133 → 131 | `(unknown) [c function]` | `<unknown>`                                                                                               |
| removed | -19.98ms |   1.5% → 0.0% |      20.0ms → 0ms |     2 → 0 | `on_send`                | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/layout/empty_lines_around_attribute_accessor.rb` |
|  -11.5% | -19.74ms | 12.9% → 11.6% | 171.9ms → 152.1ms |   17 → 15 | `tokenize`               | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/processed_source.rb`                         |
| removed | -19.21ms |   1.4% → 0.0% |      19.2ms → 0ms |     2 → 0 | `indentation_to_check?`  | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/layout/indentation_width.rb`                     |
| removed | -19.21ms |   1.4% → 0.0% |      19.2ms → 0ms |     2 → 0 | `check_indentation`      | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/layout/indentation_width.rb`                     |
| removed | -19.21ms |   1.4% → 0.0% |      19.2ms → 0ms |     2 → 0 | `on_def`                 | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/layout/indentation_width.rb`                     |
|   -9.8% | -18.90ms | 14.4% → 13.2% | 192.2ms → 173.3ms |   19 → 17 | `parse`                  | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/processed_source.rb`                         |
|   -9.8% | -18.90ms | 14.4% → 13.2% | 192.2ms → 173.3ms |   19 → 17 | `initialize`             | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/processed_source.rb`                         |
|   -9.8% | -18.90ms | 14.4% → 13.2% | 192.2ms → 173.3ms |   19 → 17 | `from_file`              | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/processed_source.rb`                         |
|   -9.8% | -18.90ms | 14.4% → 13.2% | 192.2ms → 173.3ms |   19 → 17 | `get_processed_source`   | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`                                           |

##### Native

| Change |    Delta |      % |          Time |   Samples | Function                 | Location    |
| -----: | -------: | -----: | ------------: | --------: | ------------------------ | ----------- |
|  -1.5% | -20.04ms | 100.0% | 1.33s → 1.31s | 133 → 131 | `(unknown) [c function]` | `<unknown>` |

##### Third-party

|  Change |    Delta |             % |              Time | Samples | Function                | Location                                                                                                  |
| ------: | -------: | ------------: | ----------------: | ------: | ----------------------- | --------------------------------------------------------------------------------------------------------- |
|  -30.6% | -34.96ms |   8.6% → 6.0% |  114.2ms → 79.2ms |  11 → 8 | `advance`               | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/lexer-F1.rb`                                         |
|  -30.6% | -34.96ms |   8.6% → 6.0% |  114.2ms → 79.2ms |  11 → 8 | `next_token`            | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/base.rb`                                             |
| removed | -33.64ms |   2.5% → 0.0% |      33.6ms → 0ms |   3 → 0 | `advance`               | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/lexer-strings.rb`                                    |
| removed | -20.66ms |   1.5% → 0.0% |      20.7ms → 0ms |   2 → 0 | `def_node_search`       | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node_pattern/method_definer.rb`              |
| removed | -20.66ms |   1.5% → 0.0% |      20.7ms → 0ms |   2 → 0 | `def_node_search`       | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node_pattern.rb`                             |
|  -65.9% | -20.61ms |   2.3% → 0.8% |   31.3ms → 10.7ms |   3 → 1 | `add_scope`             | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/style/redundant_self.rb`                         |
|  -65.9% | -20.61ms |   2.3% → 0.8% |   31.3ms → 10.7ms |   3 → 1 | `on_def`                | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/style/redundant_self.rb`                         |
|   -4.4% | -20.33ms | 34.8% → 33.8% | 464.9ms → 444.6ms | 46 → 44 | `<top (required)>`      | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop.rb`                                                  |
| removed | -20.13ms |   1.5% → 0.0% |      20.1ms → 0ms |   2 → 0 | `on_if`                 | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/lint/assignment_in_condition.rb`                 |
| removed | -19.98ms |   1.5% → 0.0% |      20.0ms → 0ms |   2 → 0 | `on_send`               | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/layout/empty_lines_around_attribute_accessor.rb` |
|  -11.5% | -19.74ms | 12.9% → 11.6% | 171.9ms → 152.1ms | 17 → 15 | `tokenize`              | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/processed_source.rb`                         |
| removed | -19.21ms |   1.4% → 0.0% |      19.2ms → 0ms |   2 → 0 | `indentation_to_check?` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/layout/indentation_width.rb`                     |
| removed | -19.21ms |   1.4% → 0.0% |      19.2ms → 0ms |   2 → 0 | `check_indentation`     | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/layout/indentation_width.rb`                     |
| removed | -19.21ms |   1.4% → 0.0% |      19.2ms → 0ms |   2 → 0 | `on_def`                | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/layout/indentation_width.rb`                     |
|   -9.8% | -18.90ms | 14.4% → 13.2% | 192.2ms → 173.3ms | 19 → 17 | `parse`                 | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/processed_source.rb`                         |
|   -9.8% | -18.90ms | 14.4% → 13.2% | 192.2ms → 173.3ms | 19 → 17 | `initialize`            | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/processed_source.rb`                         |
|   -9.8% | -18.90ms | 14.4% → 13.2% | 192.2ms → 173.3ms | 19 → 17 | `from_file`             | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/processed_source.rb`                         |
|   -9.8% | -18.90ms | 14.4% → 13.2% | 192.2ms → 173.3ms | 19 → 17 | `get_processed_source`  | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`                                           |
|  -45.4% | -18.60ms |   3.1% → 1.7% |   41.0ms → 22.3ms |   4 → 2 | `each_descendant`       | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node/mixin/descendence.rb`                   |
|  -45.1% | -13.74ms |   2.3% → 1.3% |   30.5ms → 16.7ms |   3 → 2 | `node_parts`            | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node/if_node.rb`                             |

##### Standard library

|  Change |    Delta |           % |           Time | Samples | Function                                          | Location                                                                                       |
| ------: | -------: | ----------: | -------------: | ------: | ------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
|  -70.7% | -23.51ms | 2.5% → 0.7% | 33.3ms → 9.7ms |   3 → 1 | `result`                                          | `../../lib/ruby/3.1.0/erb.rb`                                                                  |
| removed | -11.65ms | 0.9% → 0.0% |   11.7ms → 0ms |   1 → 0 | `<top (required)>`                                | `../../lib/ruby/3.1.0/json.rb`                                                                 |
| removed | -10.78ms | 0.8% → 0.0% |   10.8ms → 0ms |   1 → 0 | `set_start_location`                              | `../../lib/ruby/3.1.0/psych/tree_builder.rb`                                                   |
| removed | -10.78ms | 0.8% → 0.0% |   10.8ms → 0ms |   1 → 0 | `set_location`                                    | `../../lib/ruby/3.1.0/psych/tree_builder.rb`                                                   |
| removed | -10.39ms | 0.8% → 0.0% |   10.4ms → 0ms |   1 → 0 | `each`                                            | `../../lib/ruby/3.1.0/set.rb`                                                                  |
| removed | -10.11ms | 0.8% → 0.0% |   10.1ms → 0ms |   1 → 0 | `<top (required)>`                                | `../../lib/ruby/vendor_ruby/rubygems/resolver/molinillo/lib/molinillo/dependency_graph/log.rb` |
| removed | -10.11ms | 0.8% → 0.0% |   10.1ms → 0ms |   1 → 0 | `<top (required)>`                                | `../../lib/ruby/vendor_ruby/rubygems/resolver/molinillo/lib/molinillo/dependency_graph.rb`     |
| removed | -10.11ms | 0.8% → 0.0% |   10.1ms → 0ms |   1 → 0 | `<top (required)>`                                | `../../lib/ruby/vendor_ruby/rubygems/resolver/molinillo/lib/molinillo/resolver.rb`             |
| removed | -10.11ms | 0.8% → 0.0% |   10.1ms → 0ms |   1 → 0 | `<top (required)>`                                | `../../lib/ruby/vendor_ruby/rubygems/resolver/molinillo/lib/molinillo.rb`                      |
| removed | -10.11ms | 0.8% → 0.0% |   10.1ms → 0ms |   1 → 0 | `<top (required)>`                                | `../../lib/ruby/vendor_ruby/rubygems/resolver/molinillo.rb`                                    |
| removed | -10.11ms | 0.8% → 0.0% |   10.1ms → 0ms |   1 → 0 | `<class:Resolver>`                                | `../../lib/ruby/vendor_ruby/rubygems/resolver.rb`                                              |
| removed |  -9.51ms | 0.7% → 0.0% |    9.5ms → 0ms |   1 → 0 | `==`                                              | `../../lib/ruby/vendor_ruby/rubygems/resolver/dependency_request.rb`                           |
| removed |  -9.51ms | 0.7% → 0.0% |    9.5ms → 0ms |   1 → 0 | `block (2 levels) in push_state_for_requirements` | `../../lib/ruby/vendor_ruby/rubygems/resolver/molinillo/lib/molinillo/resolution.rb`           |
| removed |  -9.51ms | 0.7% → 0.0% |    9.5ms → 0ms |   1 → 0 | `block in push_state_for_requirements`            | `../../lib/ruby/vendor_ruby/rubygems/resolver/molinillo/lib/molinillo/resolution.rb`           |
| removed |  -9.51ms | 0.7% → 0.0% |    9.5ms → 0ms |   1 → 0 | `push_state_for_requirements`                     | `../../lib/ruby/vendor_ruby/rubygems/resolver/molinillo/lib/molinillo/resolution.rb`           |
| removed |  -9.51ms | 0.7% → 0.0% |    9.5ms → 0ms |   1 → 0 | `require_nested_dependencies_for`                 | `../../lib/ruby/vendor_ruby/rubygems/resolver/molinillo/lib/molinillo/resolution.rb`           |
| removed |  -9.51ms | 0.7% → 0.0% |    9.5ms → 0ms |   1 → 0 | `activate_new_spec`                               | `../../lib/ruby/vendor_ruby/rubygems/resolver/molinillo/lib/molinillo/resolution.rb`           |
| removed |  -9.51ms | 0.7% → 0.0% |    9.5ms → 0ms |   1 → 0 | `attempt_to_activate`                             | `../../lib/ruby/vendor_ruby/rubygems/resolver/molinillo/lib/molinillo/resolution.rb`           |
| removed |  -9.51ms | 0.7% → 0.0% |    9.5ms → 0ms |   1 → 0 | `process_topmost_state`                           | `../../lib/ruby/vendor_ruby/rubygems/resolver/molinillo/lib/molinillo/resolution.rb`           |
| removed |  -9.51ms | 0.7% → 0.0% |    9.5ms → 0ms |   1 → 0 | `resolve`                                         | `../../lib/ruby/vendor_ruby/rubygems/resolver/molinillo/lib/molinillo/resolution.rb`           |
