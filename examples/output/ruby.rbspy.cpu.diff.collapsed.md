# Sampling profile diff

Collected 133 samples → 131 samples (-2 samples, -1.5%).

| Category         | Change | Delta |             % | Samples |
| ---------------- | -----: | ----: | ------------: | ------: |
| Native           |  +4.7% |    +4 | 63.9% → 67.9% | 85 → 89 |
| Third-party      | -10.0% |    -4 | 30.1% → 27.5% | 40 → 36 |
| Standard library | -25.0% |    -1 |   3.0% → 2.3% |   4 → 3 |
| Unknown          | -25.0% |    -1 |   3.0% → 2.3% |   4 → 3 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

| Change | Delta |             % | Samples | Function                       | Location                                                                                       |
| -----: | ----: | ------------: | ------: | ------------------------------ | ---------------------------------------------------------------------------------------------- |
|  +4.7% |    +4 | 63.9% → 67.9% | 85 → 89 | `(unknown) [c function]`       | `<unknown>`                                                                                    |
|    new |    +2 |   0.0% → 1.5% |   0 → 2 | `each_child_node`              | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node/mixin/descendence.rb`        |
|    new |    +2 |   0.0% → 1.5% |   0 → 2 | `emit`                         | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node_pattern/lexer.rb`            |
|    new |    +1 |   0.0% → 0.8% |   0 → 1 | `keyword`                      | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node/if_node.rb`                  |
|    new |    +1 |   0.0% → 0.8% |   0 → 1 | `initialize`                   | `/var/lib/gems/3.1.0/gems/ast-2.4.3/lib/ast/node.rb`                                           |
|    new |    +1 |   0.0% → 0.8% |   0 → 1 | `initialize`                   | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node.rb`                          |
|    new |    +1 |   0.0% → 0.8% |   0 → 1 | `tok`                          | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/lexer-F1.rb`                              |
|    new |    +1 |   0.0% → 0.8% |   0 → 1 | `check_operator`               | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/layout/space_around_operators.rb`     |
|    new |    +1 |   0.0% → 0.8% |   0 → 1 | `visit_descendants`            | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node/mixin/descendence.rb`        |
|    new |    +1 |   0.0% → 0.8% |   0 → 1 | `each_node`                    | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node/mixin/descendence.rb`        |
|    new |    +1 |   0.0% → 0.8% |   0 → 1 | `line_index_for_position`      | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/source/buffer.rb`                         |
|    new |    +1 |   0.0% → 0.8% |   0 → 1 | `line`                         | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/token.rb`                         |
|    new |    +1 |   0.0% → 0.8% |   0 → 1 | `arity`                        | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node_pattern/node.rb`             |
|    new |    +1 |   0.0% → 0.8% |   0 → 1 | `on_block`                     | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/lint/unreachable_loop.rb`             |
|    new |    +1 |   0.0% → 0.8% |   0 → 1 | `start_line_range`             | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/end_keyword_alignment.rb`       |
|    new |    +1 |   0.0% → 0.8% |   0 → 1 | `emit`                         | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/lexer-F1.rb`                              |
|    new |    +1 |   0.0% → 0.8% |   0 → 1 | `register`                     | `../../lib/ruby/3.1.0/psych/visitors/to_ruby.rb`                                               |
|    new |    +1 |   0.0% → 0.8% |   0 → 1 | `<class:DNS>`                  | `../../lib/ruby/3.1.0/resolv.rb`                                                               |
|    new |    +1 |   0.0% → 0.8% |   0 → 1 | `detected_style`               | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/configurable_enforced_style.rb` |
|    new |    +1 |   0.0% → 0.8% |   0 → 1 | `block (2 levels) in traverse` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/yaml_duplication_checker.rb`              |

##### Native

| Change | Delta |             % | Samples | Function                 | Location    |
| -----: | ----: | ------------: | ------: | ------------------------ | ----------- |
|  +4.7% |    +4 | 63.9% → 67.9% | 85 → 89 | `(unknown) [c function]` | `<unknown>` |

##### Third-party

| Change | Delta |           % | Samples | Function                       | Location                                                                                         |
| -----: | ----: | ----------: | ------: | ------------------------------ | ------------------------------------------------------------------------------------------------ |
|    new |    +2 | 0.0% → 1.5% |   0 → 2 | `each_child_node`              | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node/mixin/descendence.rb`          |
|    new |    +2 | 0.0% → 1.5% |   0 → 2 | `emit`                         | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node_pattern/lexer.rb`              |
|    new |    +1 | 0.0% → 0.8% |   0 → 1 | `keyword`                      | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node/if_node.rb`                    |
|    new |    +1 | 0.0% → 0.8% |   0 → 1 | `initialize`                   | `/var/lib/gems/3.1.0/gems/ast-2.4.3/lib/ast/node.rb`                                             |
|    new |    +1 | 0.0% → 0.8% |   0 → 1 | `initialize`                   | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node.rb`                            |
|    new |    +1 | 0.0% → 0.8% |   0 → 1 | `tok`                          | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/lexer-F1.rb`                                |
|    new |    +1 | 0.0% → 0.8% |   0 → 1 | `check_operator`               | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/layout/space_around_operators.rb`       |
|    new |    +1 | 0.0% → 0.8% |   0 → 1 | `visit_descendants`            | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node/mixin/descendence.rb`          |
|    new |    +1 | 0.0% → 0.8% |   0 → 1 | `each_node`                    | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node/mixin/descendence.rb`          |
|    new |    +1 | 0.0% → 0.8% |   0 → 1 | `line_index_for_position`      | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/source/buffer.rb`                           |
|    new |    +1 | 0.0% → 0.8% |   0 → 1 | `line`                         | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/token.rb`                           |
|    new |    +1 | 0.0% → 0.8% |   0 → 1 | `arity`                        | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node_pattern/node.rb`               |
|    new |    +1 | 0.0% → 0.8% |   0 → 1 | `on_block`                     | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/lint/unreachable_loop.rb`               |
|    new |    +1 | 0.0% → 0.8% |   0 → 1 | `start_line_range`             | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/end_keyword_alignment.rb`         |
|    new |    +1 | 0.0% → 0.8% |   0 → 1 | `emit`                         | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/lexer-F1.rb`                                |
|    new |    +1 | 0.0% → 0.8% |   0 → 1 | `detected_style`               | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/configurable_enforced_style.rb`   |
|    new |    +1 | 0.0% → 0.8% |   0 → 1 | `block (2 levels) in traverse` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/yaml_duplication_checker.rb`                |
|    new |    +1 | 0.0% → 0.8% |   0 → 1 | `node_handler_method_name`     | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/variable_force.rb`                      |
|    new |    +1 | 0.0% → 0.8% |   0 → 1 | `last_argument`                | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node/mixin/parameterized_node.rb`   |
|    new |    +1 | 0.0% → 0.8% |   0 → 1 | `unary_operation?`             | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node/mixin/method_dispatch_node.rb` |

##### Standard library

| Change | Delta |           % | Samples | Function      | Location                                         |
| -----: | ----: | ----------: | ------: | ------------- | ------------------------------------------------ |
|    new |    +1 | 0.0% → 0.8% |   0 → 1 | `register`    | `../../lib/ruby/3.1.0/psych/visitors/to_ruby.rb` |
|    new |    +1 | 0.0% → 0.8% |   0 → 1 | `<class:DNS>` | `../../lib/ruby/3.1.0/resolv.rb`                 |
|    new |    +1 | 0.0% → 0.8% |   0 → 1 | `search`      | `../../lib/ruby/3.1.0/optparse.rb`               |

##### Unknown

| Change | Delta |           % | Samples | Function        | Location    |
| -----: | ----: | ----------: | ------: | --------------- | ----------- |
|    new |    +1 | 0.0% → 0.8% |   0 → 1 | `global_const?` | `<unknown>` |
|    new |    +1 | 0.0% → 0.8% |   0 → 1 | `captures`      | `<unknown>` |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |           % | Samples | Function                                      | Location                                                                                                  |
| ------: | ----: | ----------: | ------: | --------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| removed |    -2 | 1.5% → 0.0% |   2 → 0 | `node_parts`                                  | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node/if_node.rb`                             |
|  -33.3% |    -2 | 4.5% → 3.1% |   6 → 4 | `advance`                                     | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/lexer-F1.rb`                                         |
|  -66.7% |    -2 | 2.3% → 0.8% |   3 → 1 | `block in visit_descendants`                  | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node/mixin/descendence.rb`                   |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `cop_config_patterns_values`                  | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/allowed_pattern.rb`                        |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `block (2 levels) in trigger_responding_cops` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`                                 |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `block in trigger_responding_cops`            | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`                                 |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `slice`                                       | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/source/buffer.rb`                                    |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `emit_atom`                                   | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node_pattern/builder.rb`                     |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `arg_list`                                    | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node_pattern/node.rb`                        |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `extract_options`                             | `/var/lib/gems/3.1.0/gems/regexp_parser-2.12.0/lib/regexp_parser/parser.rb`                               |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `initialize`                                  | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/token.rb`                                    |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `loc?`                                        | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node.rb`                                     |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `method_name`                                 | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node/mixin/method_dispatch_node.rb`          |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `==`                                          | `../../lib/ruby/vendor_ruby/rubygems/resolver/dependency_request.rb`                                      |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `initialize`                                  | `../../lib/ruby/3.1.0/psych/nodes/scalar.rb`                                                              |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `block_type?`                                 | `<unknown>`                                                                                               |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `on_send`                                     | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/lint/debugger.rb`                                |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `meta_assignment_node`                        | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/variable_force/assignment.rb`                    |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `[]`                                          | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/processed_source.rb`                         |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `on_send`                                     | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/layout/empty_lines_around_attribute_accessor.rb` |

##### Third-party

|  Change | Delta |           % | Samples | Function                                      | Location                                                                                                  |
| ------: | ----: | ----------: | ------: | --------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| removed |    -2 | 1.5% → 0.0% |   2 → 0 | `node_parts`                                  | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node/if_node.rb`                             |
|  -33.3% |    -2 | 4.5% → 3.1% |   6 → 4 | `advance`                                     | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/lexer-F1.rb`                                         |
|  -66.7% |    -2 | 2.3% → 0.8% |   3 → 1 | `block in visit_descendants`                  | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node/mixin/descendence.rb`                   |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `cop_config_patterns_values`                  | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/allowed_pattern.rb`                        |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `block (2 levels) in trigger_responding_cops` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`                                 |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `block in trigger_responding_cops`            | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`                                 |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `slice`                                       | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/source/buffer.rb`                                    |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `emit_atom`                                   | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node_pattern/builder.rb`                     |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `arg_list`                                    | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node_pattern/node.rb`                        |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `extract_options`                             | `/var/lib/gems/3.1.0/gems/regexp_parser-2.12.0/lib/regexp_parser/parser.rb`                               |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `initialize`                                  | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/token.rb`                                    |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `loc?`                                        | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node.rb`                                     |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `method_name`                                 | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node/mixin/method_dispatch_node.rb`          |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `on_send`                                     | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/lint/debugger.rb`                                |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `meta_assignment_node`                        | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/variable_force/assignment.rb`                    |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `[]`                                          | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/processed_source.rb`                         |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `on_send`                                     | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/layout/empty_lines_around_attribute_accessor.rb` |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `ancestor_node?`                              | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/variable_force/scope.rb`                         |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `emit_node_search`                            | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node_pattern/method_definer.rb`              |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `add_scope`                                   | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/style/redundant_self.rb`                         |

##### Standard library

|  Change | Delta |           % | Samples | Function                 | Location                                                             |
| ------: | ----: | ----------: | ------: | ------------------------ | -------------------------------------------------------------------- |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `==`                     | `../../lib/ruby/vendor_ruby/rubygems/resolver/dependency_request.rb` |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `initialize`             | `../../lib/ruby/3.1.0/psych/nodes/scalar.rb`                         |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `required_ruby_version=` | `../../lib/ruby/vendor_ruby/rubygems/specification.rb`               |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `set_start_location`     | `../../lib/ruby/3.1.0/psych/tree_builder.rb`                         |

##### Unknown

|  Change | Delta |           % | Samples | Function          | Location    |
| ------: | ----: | ----------: | ------: | ----------------- | ----------- |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `block_type?`     | `<unknown>` |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `ensure_type?`    | `<unknown>` |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `id_as_hash_key?` | `<unknown>` |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|  Change | Delta |             % | Samples | Function                                      | Location                                                                                   |
| ------: | ----: | ------------: | ------: | --------------------------------------------- | ------------------------------------------------------------------------------------------ |
| +166.7% |    +5 |   2.3% → 6.1% |   3 → 8 | `on_block`                                    | `<unknown>`                                                                                |
|  +15.4% |    +4 | 19.5% → 22.9% | 26 → 30 | `on_def`                                      | `<unknown>`                                                                                |
|   +6.1% |    +3 | 36.8% → 39.7% | 49 → 52 | `with_cop_error_handling`                     | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`                  |
|   +8.8% |    +3 | 25.6% → 28.2% | 34 → 37 | `on_while`                                    | `<unknown>`                                                                                |
|   +8.6% |    +3 | 26.3% → 29.0% | 35 → 38 | `on_module`                                   | `<unknown>`                                                                                |
|   +5.9% |    +3 | 38.3% → 41.2% | 51 → 54 | `investigate`                                 | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/team.rb`                          |
|   +5.9% |    +3 | 38.3% → 41.2% | 51 → 54 | `block in inspect_file`                       | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`                            |
|   +5.9% |    +3 | 38.3% → 41.2% | 51 → 54 | `inspect_file`                                | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`                            |
|   +5.9% |    +3 | 38.3% → 41.2% | 51 → 54 | `block in do_inspection_loop`                 | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`                            |
|   +5.9% |    +3 | 38.3% → 41.2% | 51 → 54 | `block in iterate_until_no_changes`           | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`                            |
|   +5.9% |    +3 | 38.3% → 41.2% | 51 → 54 | `iterate_until_no_changes`                    | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`                            |
| +150.0% |    +3 |   1.5% → 3.8% |   2 → 5 | `check_operator`                              | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/layout/space_around_operators.rb` |
| +150.0% |    +3 |   1.5% → 3.8% |   2 → 5 | `each_node`                                   | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node/mixin/descendence.rb`    |
|  +75.0% |    +3 |   3.0% → 5.3% |   4 → 7 | `block in on_send`                            | `<unknown>`                                                                                |
| +100.0% |    +3 |   2.3% → 4.6% |   3 → 6 | `line`                                        | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/token.rb`                     |
| +300.0% |    +3 |   0.8% → 3.1% |   1 → 4 | `on_ensure`                                   | `<unknown>`                                                                                |
|     new |    +3 |   0.0% → 2.3% |   0 → 3 | `emit`                                        | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node_pattern/lexer.rb`        |
|     new |    +3 |   0.0% → 2.3% |   0 → 3 | `block in next_token`                         | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node_pattern/lexer.rex.rb`    |
|     new |    +3 |   0.0% → 2.3% |   0 → 3 | `action`                                      | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node_pattern/lexer.rex.rb`    |
|   +6.1% |    +2 | 24.8% → 26.7% | 33 → 35 | `block (2 levels) in trigger_responding_cops` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`                  |

##### Third-party

|  Change | Delta |             % | Samples | Function                                      | Location                                                                                                    |
| ------: | ----: | ------------: | ------: | --------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
|   +6.1% |    +3 | 36.8% → 39.7% | 49 → 52 | `with_cop_error_handling`                     | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`                                   |
|   +5.9% |    +3 | 38.3% → 41.2% | 51 → 54 | `investigate`                                 | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/team.rb`                                           |
|   +5.9% |    +3 | 38.3% → 41.2% | 51 → 54 | `block in inspect_file`                       | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`                                             |
|   +5.9% |    +3 | 38.3% → 41.2% | 51 → 54 | `inspect_file`                                | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`                                             |
|   +5.9% |    +3 | 38.3% → 41.2% | 51 → 54 | `block in do_inspection_loop`                 | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`                                             |
|   +5.9% |    +3 | 38.3% → 41.2% | 51 → 54 | `block in iterate_until_no_changes`           | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`                                             |
|   +5.9% |    +3 | 38.3% → 41.2% | 51 → 54 | `iterate_until_no_changes`                    | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`                                             |
| +150.0% |    +3 |   1.5% → 3.8% |   2 → 5 | `check_operator`                              | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/layout/space_around_operators.rb`                  |
| +150.0% |    +3 |   1.5% → 3.8% |   2 → 5 | `each_node`                                   | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node/mixin/descendence.rb`                     |
| +100.0% |    +3 |   2.3% → 4.6% |   3 → 6 | `line`                                        | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/token.rb`                                      |
|     new |    +3 |   0.0% → 2.3% |   0 → 3 | `emit`                                        | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node_pattern/lexer.rb`                         |
|     new |    +3 |   0.0% → 2.3% |   0 → 3 | `block in next_token`                         | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node_pattern/lexer.rex.rb`                     |
|     new |    +3 |   0.0% → 2.3% |   0 → 3 | `action`                                      | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node_pattern/lexer.rex.rb`                     |
|   +6.1% |    +2 | 24.8% → 26.7% | 33 → 35 | `block (2 levels) in trigger_responding_cops` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`                                   |
|   +5.6% |    +2 | 27.1% → 29.0% | 36 → 38 | `walk`                                        | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/traversal.rb`                                  |
|   +4.0% |    +2 | 37.6% → 39.7% | 50 → 52 | `investigate`                                 | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`                                   |
|   +3.9% |    +2 | 38.3% → 40.5% | 51 → 53 | `investigate_partial`                         | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/team.rb`                                           |
| +100.0% |    +2 |   1.5% → 3.1% |   2 → 4 | `compile_terms`                               | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node_pattern/compiler/sequence_subcompiler.rb` |
| +100.0% |    +2 |   1.5% → 3.1% |   2 → 4 | `block in compile_sequence`                   | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node_pattern/compiler/sequence_subcompiler.rb` |
|  +66.7% |    +2 |   2.3% → 3.8% |   3 → 5 | `line_index_for_position`                     | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/source/buffer.rb`                                      |

##### Standard library

| Change | Delta |             % | Samples | Function                     | Location                                         |
| -----: | ----: | ------------: | ------: | ---------------------------- | ------------------------------------------------ |
|  +1.3% |    +1 | 58.6% → 60.3% | 78 → 79 | `realtime`                   | `../../lib/ruby/3.1.0/benchmark.rb`              |
|    new |    +1 |   0.0% → 0.8% |   0 → 1 | `register`                   | `../../lib/ruby/3.1.0/psych/visitors/to_ruby.rb` |
|    new |    +1 |   0.0% → 0.8% |   0 → 1 | `visit_Psych_Nodes_Scalar`   | `../../lib/ruby/3.1.0/psych/visitors/to_ruby.rb` |
|    new |    +1 |   0.0% → 0.8% |   0 → 1 | `block in register_empty`    | `../../lib/ruby/3.1.0/psych/visitors/to_ruby.rb` |
|    new |    +1 |   0.0% → 0.8% |   0 → 1 | `register_empty`             | `../../lib/ruby/3.1.0/psych/visitors/to_ruby.rb` |
|    new |    +1 |   0.0% → 0.8% |   0 → 1 | `visit_Psych_Nodes_Sequence` | `../../lib/ruby/3.1.0/psych/visitors/to_ruby.rb` |
|    new |    +1 |   0.0% → 0.8% |   0 → 1 | `<class:DNS>`                | `../../lib/ruby/3.1.0/resolv.rb`                 |
|    new |    +1 |   0.0% → 0.8% |   0 → 1 | `<class:Resolv>`             | `../../lib/ruby/3.1.0/resolv.rb`                 |
|    new |    +1 |   0.0% → 0.8% |   0 → 1 | `default_lockfile`           | `../../lib/ruby/3.1.0/bundler.rb`                |
|    new |    +1 |   0.0% → 0.8% |   0 → 1 | `search`                     | `../../lib/ruby/3.1.0/optparse.rb`               |
|    new |    +1 |   0.0% → 0.8% |   0 → 1 | `block in visit`             | `../../lib/ruby/3.1.0/optparse.rb`               |
|    new |    +1 |   0.0% → 0.8% |   0 → 1 | `visit`                      | `../../lib/ruby/3.1.0/optparse.rb`               |
|    new |    +1 |   0.0% → 0.8% |   0 → 1 | `block in make_switch`       | `../../lib/ruby/3.1.0/optparse.rb`               |
|    new |    +1 |   0.0% → 0.8% |   0 → 1 | `make_switch`                | `../../lib/ruby/3.1.0/optparse.rb`               |
|    new |    +1 |   0.0% → 0.8% |   0 → 1 | `define`                     | `../../lib/ruby/3.1.0/optparse.rb`               |
|    new |    +1 |   0.0% → 0.8% |   0 → 1 | `on`                         | `../../lib/ruby/3.1.0/optparse.rb`               |
|    new |    +1 |   0.0% → 0.8% |   0 → 1 | `initialize`                 | `../../lib/ruby/3.1.0/optparse.rb`               |
|    new |    +1 |   0.0% → 0.8% |   0 → 1 | `<top (required)>`           | `../../lib/ruby/3.1.0/psych/nodes.rb`            |
|    new |    +1 |   0.0% → 0.8% |   0 → 1 | `<top (required)>`           | `../../lib/ruby/3.1.0/psych.rb`                  |
|    new |    +1 |   0.0% → 0.8% |   0 → 1 | `<top (required)>`           | `../../lib/ruby/3.1.0/yaml.rb`                   |

##### Unknown

|  Change | Delta |             % | Samples | Function                | Location    |
| ------: | ----: | ------------: | ------: | ----------------------- | ----------- |
| +166.7% |    +5 |   2.3% → 6.1% |   3 → 8 | `on_block`              | `<unknown>` |
|  +15.4% |    +4 | 19.5% → 22.9% | 26 → 30 | `on_def`                | `<unknown>` |
|   +8.8% |    +3 | 25.6% → 28.2% | 34 → 37 | `on_while`              | `<unknown>` |
|   +8.6% |    +3 | 26.3% → 29.0% | 35 → 38 | `on_module`             | `<unknown>` |
|  +75.0% |    +3 |   3.0% → 5.3% |   4 → 7 | `block in on_send`      | `<unknown>` |
| +300.0% |    +3 |   0.8% → 3.1% |   1 → 4 | `on_ensure`             | `<unknown>` |
|   +5.6% |    +2 | 27.1% → 29.0% | 36 → 38 | `block in on_dstr`      | `<unknown>` |
|   +5.6% |    +2 | 27.1% → 29.0% | 36 → 38 | `on_dstr`               | `<unknown>` |
|   +5.6% |    +2 | 27.1% → 29.0% | 36 → 38 | `on_begin`              | `<unknown>` |
|   +8.3% |    +2 | 18.0% → 19.8% | 24 → 26 | `on_class`              | `<unknown>` |
|  +13.3% |    +2 | 11.3% → 13.0% | 15 → 17 | `on_if`                 | `<unknown>` |
|  +14.3% |    +2 | 10.5% → 12.2% | 14 → 16 | `on_send`               | `<unknown>` |
| +200.0% |    +2 |   0.8% → 2.3% |   1 → 3 | `next_token`            | `<unknown>` |
|     new |    +2 |   0.0% → 1.5% |   0 → 2 | `tap`                   | `<unknown>` |
|   +2.0% |    +1 | 37.6% → 38.9% | 50 → 51 | `require`               | `<unknown>` |
|  +10.0% |    +1 |   7.5% → 8.4% | 10 → 11 | `on_sclass`             | `<unknown>` |
| +100.0% |    +1 |   0.8% → 1.5% |   1 → 2 | `private_class_methods` | `<unknown>` |
| +100.0% |    +1 |   0.8% → 1.5% |   1 → 2 | `on_or`                 | `<unknown>` |
|  +25.0% |    +1 |   3.0% → 3.8% |   4 → 5 | `block in on_case`      | `<unknown>` |
|  +25.0% |    +1 |   3.0% → 3.8% |   4 → 5 | `on_case`               | `<unknown>` |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

|  Change | Delta |             % |   Samples | Function                 | Location                                                                                                  |
| ------: | ----: | ------------: | --------: | ------------------------ | --------------------------------------------------------------------------------------------------------- |
| removed |    -3 |   2.3% → 0.0% |     3 → 0 | `advance`                | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/lexer-strings.rb`                                    |
|  -27.3% |    -3 |   8.3% → 6.1% |    11 → 8 | `advance`                | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/lexer-F1.rb`                                         |
|  -27.3% |    -3 |   8.3% → 6.1% |    11 → 8 | `next_token`             | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/base.rb`                                             |
| removed |    -2 |   1.5% → 0.0% |     2 → 0 | `indentation_to_check?`  | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/layout/indentation_width.rb`                     |
| removed |    -2 |   1.5% → 0.0% |     2 → 0 | `check_indentation`      | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/layout/indentation_width.rb`                     |
| removed |    -2 |   1.5% → 0.0% |     2 → 0 | `on_def`                 | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/layout/indentation_width.rb`                     |
|   -1.5% |    -2 |        100.0% | 133 → 131 | `(unknown) [c function]` | `<unknown>`                                                                                               |
|   -1.5% |    -2 |         98.5% | 131 → 129 | `<main>`                 | `rubocop`                                                                                                 |
|   -4.3% |    -2 | 34.6% → 33.6% |   46 → 44 | `<top (required)>`       | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop.rb`                                                  |
|  -11.8% |    -2 | 12.8% → 11.5% |   17 → 15 | `tokenize`               | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/processed_source.rb`                         |
|  -10.5% |    -2 | 14.3% → 13.0% |   19 → 17 | `parse`                  | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/processed_source.rb`                         |
|  -10.5% |    -2 | 14.3% → 13.0% |   19 → 17 | `initialize`             | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/processed_source.rb`                         |
|  -10.5% |    -2 | 14.3% → 13.0% |   19 → 17 | `from_file`              | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/processed_source.rb`                         |
|  -10.5% |    -2 | 14.3% → 13.0% |   19 → 17 | `get_processed_source`   | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`                                           |
| removed |    -2 |   1.5% → 0.0% |     2 → 0 | `on_if`                  | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/lint/assignment_in_condition.rb`                 |
| removed |    -2 |   1.5% → 0.0% |     2 → 0 | `on_send`                | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/layout/empty_lines_around_attribute_accessor.rb` |
|  -66.7% |    -2 |   2.3% → 0.8% |     3 → 1 | `result`                 | `../../lib/ruby/3.1.0/erb.rb`                                                                             |
| removed |    -2 |   1.5% → 0.0% |     2 → 0 | `def_node_search`        | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node_pattern/method_definer.rb`              |
| removed |    -2 |   1.5% → 0.0% |     2 → 0 | `def_node_search`        | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node_pattern.rb`                             |
|  -66.7% |    -2 |   2.3% → 0.8% |     3 → 1 | `add_scope`              | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/style/redundant_self.rb`                         |

##### Native

| Change | Delta |      % |   Samples | Function                 | Location    |
| -----: | ----: | -----: | --------: | ------------------------ | ----------- |
|  -1.5% |    -2 | 100.0% | 133 → 131 | `(unknown) [c function]` | `<unknown>` |

##### Third-party

|  Change | Delta |             % | Samples | Function                     | Location                                                                                                  |
| ------: | ----: | ------------: | ------: | ---------------------------- | --------------------------------------------------------------------------------------------------------- |
| removed |    -3 |   2.3% → 0.0% |   3 → 0 | `advance`                    | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/lexer-strings.rb`                                    |
|  -27.3% |    -3 |   8.3% → 6.1% |  11 → 8 | `advance`                    | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/lexer-F1.rb`                                         |
|  -27.3% |    -3 |   8.3% → 6.1% |  11 → 8 | `next_token`                 | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/base.rb`                                             |
| removed |    -2 |   1.5% → 0.0% |   2 → 0 | `indentation_to_check?`      | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/layout/indentation_width.rb`                     |
| removed |    -2 |   1.5% → 0.0% |   2 → 0 | `check_indentation`          | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/layout/indentation_width.rb`                     |
| removed |    -2 |   1.5% → 0.0% |   2 → 0 | `on_def`                     | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/layout/indentation_width.rb`                     |
|   -4.3% |    -2 | 34.6% → 33.6% | 46 → 44 | `<top (required)>`           | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop.rb`                                                  |
|  -11.8% |    -2 | 12.8% → 11.5% | 17 → 15 | `tokenize`                   | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/processed_source.rb`                         |
|  -10.5% |    -2 | 14.3% → 13.0% | 19 → 17 | `parse`                      | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/processed_source.rb`                         |
|  -10.5% |    -2 | 14.3% → 13.0% | 19 → 17 | `initialize`                 | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/processed_source.rb`                         |
|  -10.5% |    -2 | 14.3% → 13.0% | 19 → 17 | `from_file`                  | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/processed_source.rb`                         |
|  -10.5% |    -2 | 14.3% → 13.0% | 19 → 17 | `get_processed_source`       | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`                                           |
| removed |    -2 |   1.5% → 0.0% |   2 → 0 | `on_if`                      | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/lint/assignment_in_condition.rb`                 |
| removed |    -2 |   1.5% → 0.0% |   2 → 0 | `on_send`                    | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/layout/empty_lines_around_attribute_accessor.rb` |
| removed |    -2 |   1.5% → 0.0% |   2 → 0 | `def_node_search`            | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node_pattern/method_definer.rb`              |
| removed |    -2 |   1.5% → 0.0% |   2 → 0 | `def_node_search`            | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node_pattern.rb`                             |
|  -66.7% |    -2 |   2.3% → 0.8% |   3 → 1 | `add_scope`                  | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/style/redundant_self.rb`                         |
|  -66.7% |    -2 |   2.3% → 0.8% |   3 → 1 | `on_def`                     | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/style/redundant_self.rb`                         |
|  -50.0% |    -2 |   3.0% → 1.5% |   4 → 2 | `each_descendant`            | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node/mixin/descendence.rb`                   |
| removed |    -1 |   0.8% → 0.0% |   1 → 0 | `cop_config_patterns_values` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/allowed_pattern.rb`                        |

##### Standard library

|  Change | Delta |           % | Samples | Function                                          | Location                                                                                       |
| ------: | ----: | ----------: | ------: | ------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
|  -66.7% |    -2 | 2.3% → 0.8% |   3 → 1 | `result`                                          | `../../lib/ruby/3.1.0/erb.rb`                                                                  |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `<top (required)>`                                | `../../lib/ruby/vendor_ruby/rubygems/resolver/molinillo/lib/molinillo/dependency_graph/log.rb` |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `<top (required)>`                                | `../../lib/ruby/vendor_ruby/rubygems/resolver/molinillo/lib/molinillo/dependency_graph.rb`     |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `<top (required)>`                                | `../../lib/ruby/vendor_ruby/rubygems/resolver/molinillo/lib/molinillo/resolver.rb`             |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `<top (required)>`                                | `../../lib/ruby/vendor_ruby/rubygems/resolver/molinillo/lib/molinillo.rb`                      |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `<top (required)>`                                | `../../lib/ruby/vendor_ruby/rubygems/resolver/molinillo.rb`                                    |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `<class:Resolver>`                                | `../../lib/ruby/vendor_ruby/rubygems/resolver.rb`                                              |
|  -50.0% |    -1 | 1.5% → 0.8% |   2 → 1 | `resolve_current`                                 | `../../lib/ruby/vendor_ruby/rubygems/request_set.rb`                                           |
|  -50.0% |    -1 | 1.5% → 0.8% |   2 → 1 | `finish_resolve`                                  | `../../lib/ruby/vendor_ruby/rubygems.rb`                                                       |
|  -33.3% |    -1 | 2.3% → 1.5% |   3 → 2 | `activate_bin_path`                               | `../../lib/ruby/vendor_ruby/rubygems.rb`                                                       |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `==`                                              | `../../lib/ruby/vendor_ruby/rubygems/resolver/dependency_request.rb`                           |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `block (2 levels) in push_state_for_requirements` | `../../lib/ruby/vendor_ruby/rubygems/resolver/molinillo/lib/molinillo/resolution.rb`           |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `block in push_state_for_requirements`            | `../../lib/ruby/vendor_ruby/rubygems/resolver/molinillo/lib/molinillo/resolution.rb`           |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `push_state_for_requirements`                     | `../../lib/ruby/vendor_ruby/rubygems/resolver/molinillo/lib/molinillo/resolution.rb`           |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `require_nested_dependencies_for`                 | `../../lib/ruby/vendor_ruby/rubygems/resolver/molinillo/lib/molinillo/resolution.rb`           |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `activate_new_spec`                               | `../../lib/ruby/vendor_ruby/rubygems/resolver/molinillo/lib/molinillo/resolution.rb`           |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `attempt_to_activate`                             | `../../lib/ruby/vendor_ruby/rubygems/resolver/molinillo/lib/molinillo/resolution.rb`           |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `process_topmost_state`                           | `../../lib/ruby/vendor_ruby/rubygems/resolver/molinillo/lib/molinillo/resolution.rb`           |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `resolve`                                         | `../../lib/ruby/vendor_ruby/rubygems/resolver/molinillo/lib/molinillo/resolution.rb`           |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `resolve`                                         | `../../lib/ruby/vendor_ruby/rubygems/resolver/molinillo/lib/molinillo/resolver.rb`             |

##### Unknown

|  Change | Delta |             % | Samples | Function          | Location    |
| ------: | ----: | ------------: | ------: | ----------------- | ----------- |
| removed |    -1 |   0.8% → 0.0% |   1 → 0 | `emit_atom`       | `<unknown>` |
|   -5.3% |    -1 | 14.3% → 13.7% | 19 → 18 | `do_parse`        | `<unknown>` |
| removed |    -1 |   0.8% → 0.0% |   1 → 0 | `on_array`        | `<unknown>` |
|  -33.3% |    -1 |   2.3% → 1.5% |   3 → 2 | `on_lvasgn`       | `<unknown>` |
| removed |    -1 |   0.8% → 0.0% |   1 → 0 | `block_type?`     | `<unknown>` |
| removed |    -1 |   0.8% → 0.0% |   1 → 0 | `ensure_type?`    | `<unknown>` |
| removed |    -1 |   0.8% → 0.0% |   1 → 0 | `on_when`         | `<unknown>` |
| removed |    -1 |   0.8% → 0.0% |   1 → 0 | `block in load`   | `<unknown>` |
| removed |    -1 |   0.8% → 0.0% |   1 → 0 | `load`            | `<unknown>` |
| removed |    -1 |   0.8% → 0.0% |   1 → 0 | `on_return`       | `<unknown>` |
| removed |    -1 |   0.8% → 0.0% |   1 → 0 | `id_as_hash_key?` | `<unknown>` |
| removed |    -1 |   0.8% → 0.0% |   1 → 0 | `emit_list`       | `<unknown>` |
