# Sampling profile

Collected 131 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Native           | 67.9% |      89 |
| Third-party      | 27.5% |      36 |
| Standard library |  2.3% |       3 |
| Unknown          |  2.3% |       3 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|     % | Samples | Function                       | Location                                                                                       |
| ----: | ------: | ------------------------------ | ---------------------------------------------------------------------------------------------- |
| 67.9% |      89 | `(unknown) [c function]`       | `<unknown>`                                                                                    |
|  3.1% |       4 | `advance`                      | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/lexer-F1.rb`                              |
|  1.5% |       2 | `emit`                         | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node_pattern/lexer.rb`            |
|  1.5% |       2 | `each_child_node`              | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node/mixin/descendence.rb`        |
|  0.8% |       1 | `arity`                        | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node_pattern/node.rb`             |
|  0.8% |       1 | `on_block`                     | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/lint/unreachable_loop.rb`             |
|  0.8% |       1 | `start_line_range`             | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/end_keyword_alignment.rb`       |
|  0.8% |       1 | `emit`                         | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/lexer-F1.rb`                              |
|  0.8% |       1 | `block in visit_descendants`   | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node/mixin/descendence.rb`        |
|  0.8% |       1 | `visit_descendants`            | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node/mixin/descendence.rb`        |
|  0.8% |       1 | `register`                     | `../../lib/ruby/3.1.0/psych/visitors/to_ruby.rb`                                               |
|  0.8% |       1 | `check_operator`               | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/layout/space_around_operators.rb`     |
|  0.8% |       1 | `line_index_for_position`      | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/source/buffer.rb`                         |
|  0.8% |       1 | `line`                         | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/token.rb`                         |
|  0.8% |       1 | `keyword`                      | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node/if_node.rb`                  |
|  0.8% |       1 | `<class:DNS>`                  | `../../lib/ruby/3.1.0/resolv.rb`                                                               |
|  0.8% |       1 | `detected_style`               | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/configurable_enforced_style.rb` |
|  0.8% |       1 | `block (2 levels) in traverse` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/yaml_duplication_checker.rb`              |
|  0.8% |       1 | `node_handler_method_name`     | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/variable_force.rb`                    |
|  0.8% |       1 | `last_argument`                | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node/mixin/parameterized_node.rb` |

#### Categories

##### Native

|     % | Samples | Function                 | Location    |
| ----: | ------: | ------------------------ | ----------- |
| 67.9% |      89 | `(unknown) [c function]` | `<unknown>` |

##### Third-party

|    % | Samples | Function                       | Location                                                                                         |
| ---: | ------: | ------------------------------ | ------------------------------------------------------------------------------------------------ |
| 3.1% |       4 | `advance`                      | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/lexer-F1.rb`                                |
| 1.5% |       2 | `emit`                         | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node_pattern/lexer.rb`              |
| 1.5% |       2 | `each_child_node`              | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node/mixin/descendence.rb`          |
| 0.8% |       1 | `arity`                        | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node_pattern/node.rb`               |
| 0.8% |       1 | `on_block`                     | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/lint/unreachable_loop.rb`               |
| 0.8% |       1 | `start_line_range`             | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/end_keyword_alignment.rb`         |
| 0.8% |       1 | `emit`                         | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/lexer-F1.rb`                                |
| 0.8% |       1 | `block in visit_descendants`   | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node/mixin/descendence.rb`          |
| 0.8% |       1 | `visit_descendants`            | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node/mixin/descendence.rb`          |
| 0.8% |       1 | `check_operator`               | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/layout/space_around_operators.rb`       |
| 0.8% |       1 | `line_index_for_position`      | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/source/buffer.rb`                           |
| 0.8% |       1 | `line`                         | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/token.rb`                           |
| 0.8% |       1 | `keyword`                      | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node/if_node.rb`                    |
| 0.8% |       1 | `detected_style`               | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/configurable_enforced_style.rb`   |
| 0.8% |       1 | `block (2 levels) in traverse` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/yaml_duplication_checker.rb`                |
| 0.8% |       1 | `node_handler_method_name`     | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/variable_force.rb`                      |
| 0.8% |       1 | `last_argument`                | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node/mixin/parameterized_node.rb`   |
| 0.8% |       1 | `each_node`                    | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node/mixin/descendence.rb`          |
| 0.8% |       1 | `unary_operation?`             | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node/mixin/method_dispatch_node.rb` |
| 0.8% |       1 | `initialize`                   | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node.rb`                            |

##### Standard library

|    % | Samples | Function      | Location                                         |
| ---: | ------: | ------------- | ------------------------------------------------ |
| 0.8% |       1 | `register`    | `../../lib/ruby/3.1.0/psych/visitors/to_ruby.rb` |
| 0.8% |       1 | `<class:DNS>` | `../../lib/ruby/3.1.0/resolv.rb`                 |
| 0.8% |       1 | `search`      | `../../lib/ruby/3.1.0/optparse.rb`               |

##### Unknown

|    % | Samples | Function                         | Location    |
| ---: | ------: | -------------------------------- | ----------- |
| 0.8% |       1 | `global_const?`                  | `<unknown>` |
| 0.8% |       1 | `block in private_class_methods` | `<unknown>` |
| 0.8% |       1 | `captures`                       | `<unknown>` |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `advance` (`/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/lexer-F1.rb`)

|      % | Samples | Location                                                                |
| -----: | ------: | ----------------------------------------------------------------------- |
| 100.0% |       4 | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/lexer-F1.rb:14654` |

##### `emit` (`/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node_pattern/lexer.rb`)

|      % | Samples | Location                                                                               |
| -----: | ------: | -------------------------------------------------------------------------------------- |
| 100.0% |       2 | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node_pattern/lexer.rb:46` |

##### `each_child_node` (`/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node/mixin/descendence.rb`)

|      % | Samples | Location                                                                                   |
| -----: | ------: | ------------------------------------------------------------------------------------------ |
| 100.0% |       2 | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node/mixin/descendence.rb:32` |

##### `arity` (`/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node_pattern/node.rb`)

|      % | Samples | Location                                                                               |
| -----: | ------: | -------------------------------------------------------------------------------------- |
| 100.0% |       1 | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node_pattern/node.rb:171` |

##### `on_block` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/lint/unreachable_loop.rb`)

|      % | Samples | Location                                                                               |
| -----: | ------: | -------------------------------------------------------------------------------------- |
| 100.0% |       1 | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/lint/unreachable_loop.rb:102` |

##### `start_line_range` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/end_keyword_alignment.rb`)

|      % | Samples | Location                                                                                    |
| -----: | ------: | ------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/end_keyword_alignment.rb:48` |

##### `emit` (`/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/lexer-F1.rb`)

|      % | Samples | Location                                                                |
| -----: | ------: | ----------------------------------------------------------------------- |
| 100.0% |       1 | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/lexer-F1.rb:14683` |

##### `block in visit_descendants` (`/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node/mixin/descendence.rb`)

|      % | Samples | Location                                                                                    |
| -----: | ------: | ------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node/mixin/descendence.rb:113` |

##### `visit_descendants` (`/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node/mixin/descendence.rb`)

|      % | Samples | Location                                                                                    |
| -----: | ------: | ------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node/mixin/descendence.rb:114` |

##### `register` (`../../lib/ruby/3.1.0/psych/visitors/to_ruby.rb`)

|      % | Samples | Location                                             |
| -----: | ------: | ---------------------------------------------------- |
| 100.0% |       1 | `../../lib/ruby/3.1.0/psych/visitors/to_ruby.rb:334` |

##### `check_operator` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/layout/space_around_operators.rb`)

|      % | Samples | Location                                                                                       |
| -----: | ------: | ---------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/layout/space_around_operators.rb:191` |

##### `line_index_for_position` (`/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/source/buffer.rb`)

|      % | Samples | Location                                                                   |
| -----: | ------: | -------------------------------------------------------------------------- |
| 100.0% |       1 | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/source/buffer.rb:350` |

##### `line` (`/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/token.rb`)

|      % | Samples | Location                                                                  |
| -----: | ------: | ------------------------------------------------------------------------- |
| 100.0% |       1 | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/token.rb:27` |

##### `keyword` (`/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node/if_node.rb`)

|      % | Samples | Location                                                                         |
| -----: | ------: | -------------------------------------------------------------------------------- |
| 100.0% |       1 | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node/if_node.rb:66` |

##### `<class:DNS>` (`../../lib/ruby/3.1.0/resolv.rb`)

|      % | Samples | Location                              |
| -----: | ------: | ------------------------------------- |
| 100.0% |       1 | `../../lib/ruby/3.1.0/resolv.rb:2344` |

##### `detected_style` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/configurable_enforced_style.rb`)

|      % | Samples | Location                                                                                          |
| -----: | ------: | ------------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/configurable_enforced_style.rb:66` |

##### `block (2 levels) in traverse` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/yaml_duplication_checker.rb`)

|      % | Samples | Location                                                                             |
| -----: | ------: | ------------------------------------------------------------------------------------ |
| 100.0% |       1 | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/yaml_duplication_checker.rb:25` |

##### `node_handler_method_name` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/variable_force.rb`)

|      % | Samples | Location                                                                        |
| -----: | ------: | ------------------------------------------------------------------------------- |
| 100.0% |       1 | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/variable_force.rb:132` |

##### `last_argument` (`/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node/mixin/parameterized_node.rb`)

|      % | Samples | Location                                                                                           |
| -----: | ------: | -------------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node/mixin/parameterized_node.rb:115` |

##### `each_node` (`/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node/mixin/descendence.rb`)

|      % | Samples | Location                                                                                    |
| -----: | ------: | ------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node/mixin/descendence.rb:103` |

##### `unary_operation?` (`/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node/mixin/method_dispatch_node.rb`)

|      % | Samples | Location                                                                                             |
| -----: | ------: | ---------------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node/mixin/method_dispatch_node.rb:238` |

##### `initialize` (`/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node.rb`)

|      % | Samples | Location                                                                  |
| -----: | ------: | ------------------------------------------------------------------------- |
| 100.0% |       1 | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node.rb:169` |

##### `search` (`../../lib/ruby/3.1.0/optparse.rb`)

|      % | Samples | Location                               |
| -----: | ------: | -------------------------------------- |
| 100.0% |       1 | `../../lib/ruby/3.1.0/optparse.rb:865` |

##### `global_const?` (`<unknown>`)

|      % | Samples | Location |
| -----: | ------: | -------- |
| 100.0% |       1 | 615      |

##### `block in private_class_methods` (`<unknown>`)

|      % | Samples | Location |
| -----: | ------: | -------- |
| 100.0% |       1 | 60       |

##### `captures` (`<unknown>`)

|      % | Samples | Location |
| -----: | ------: | -------- |
| 100.0% |       1 | 21       |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `(unknown) [c function]` (`<unknown>`)

|     % | Samples | Caller                                        | Location                                                                      |
| ----: | ------: | --------------------------------------------- | ----------------------------------------------------------------------------- |
| 11.2% |      10 | `<top (required)>`                            | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop.rb`                      |
|  9.0% |       8 | `require`                                     | `<unknown>`                                                                   |
|  5.6% |       5 | `slice`                                       | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/source/buffer.rb`        |
|  4.5% |       4 | `block (2 levels) in trigger_responding_cops` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`     |
|  4.5% |       4 | `move_pos`                                    | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/range_help.rb` |

##### `advance` (`/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/lexer-F1.rb`)

|      % | Samples | Caller       | Location                                                      |
| -----: | ------: | ------------ | ------------------------------------------------------------- |
| 100.0% |       4 | `next_token` | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/base.rb` |

##### `emit` (`/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node_pattern/lexer.rb`)

|      % | Samples | Caller                | Location                                                                                |
| -----: | ------: | --------------------- | --------------------------------------------------------------------------------------- |
| 100.0% |       2 | `block in next_token` | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node_pattern/lexer.rex.rb` |

##### `each_child_node` (`/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node/mixin/descendence.rb`)

|      % | Samples | Caller    | Location                                                          |
| -----: | ------: | --------- | ----------------------------------------------------------------- |
| 100.0% |       2 | `on_node` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/util.rb` |

##### `arity` (`/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node_pattern/node.rb`)

|      % | Samples | Caller        | Location                                                                           |
| -----: | ------: | ------------- | ---------------------------------------------------------------------------------- |
| 100.0% |       1 | `arity_range` | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node_pattern/node.rb` |

##### `on_block` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/lint/unreachable_loop.rb`)

|      % | Samples | Caller                   | Location    |
| -----: | ------: | ------------------------ | ----------- |
| 100.0% |       1 | `(unknown) [c function]` | `<unknown>` |

##### `start_line_range` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/end_keyword_alignment.rb`)

|      % | Samples | Caller                  | Location                                                                          |
| -----: | ------: | ----------------------- | --------------------------------------------------------------------------------- |
| 100.0% |       1 | `check_other_alignment` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/layout/end_alignment.rb` |

##### `emit` (`/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/lexer-F1.rb`)

|      % | Samples | Caller       | Location                                                          |
| -----: | ------: | ------------ | ----------------------------------------------------------------- |
| 100.0% |       1 | `emit_table` | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/lexer-F1.rb` |

##### `block in visit_descendants` (`/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node/mixin/descendence.rb`)

|      % | Samples | Caller                   | Location    |
| -----: | ------: | ------------------------ | ----------- |
| 100.0% |       1 | `(unknown) [c function]` | `<unknown>` |

##### `visit_descendants` (`/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node/mixin/descendence.rb`)

|      % | Samples | Caller                       | Location                                                                                |
| -----: | ------: | ---------------------------- | --------------------------------------------------------------------------------------- |
| 100.0% |       1 | `block in visit_descendants` | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node/mixin/descendence.rb` |

##### `register` (`../../lib/ruby/3.1.0/psych/visitors/to_ruby.rb`)

|      % | Samples | Caller                     | Location                                         |
| -----: | ------: | -------------------------- | ------------------------------------------------ |
| 100.0% |       1 | `visit_Psych_Nodes_Scalar` | `../../lib/ruby/3.1.0/psych/visitors/to_ruby.rb` |

##### `check_operator` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/layout/space_around_operators.rb`)

|      % | Samples | Caller     | Location                                                                                   |
| -----: | ------: | ---------- | ------------------------------------------------------------------------------------------ |
| 100.0% |       1 | `on_casgn` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/layout/space_around_operators.rb` |

##### `line_index_for_position` (`/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/source/buffer.rb`)

|      % | Samples | Caller              | Location                                                               |
| -----: | ------: | ------------------- | ---------------------------------------------------------------------- |
| 100.0% |       1 | `line_for_position` | `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/source/buffer.rb` |

##### `line` (`/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/token.rb`)

|      % | Samples | Caller                   | Location    |
| -----: | ------: | ------------------------ | ----------- |
| 100.0% |       1 | `(unknown) [c function]` | `<unknown>` |

##### `keyword` (`/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node/if_node.rb`)

|      % | Samples | Caller    | Location                                                                      |
| -----: | ------: | --------- | ----------------------------------------------------------------------------- |
| 100.0% |       1 | `unless?` | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node/if_node.rb` |

##### `<class:DNS>` (`../../lib/ruby/3.1.0/resolv.rb`)

|      % | Samples | Caller           | Location                         |
| -----: | ------: | ---------------- | -------------------------------- |
| 100.0% |       1 | `<class:Resolv>` | `../../lib/ruby/3.1.0/resolv.rb` |

##### `detected_style` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/configurable_enforced_style.rb`)

|      % | Samples | Caller           | Location                                                                                       |
| -----: | ------: | ---------------- | ---------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `style_detected` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/configurable_enforced_style.rb` |

##### `block (2 levels) in traverse` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/yaml_duplication_checker.rb`)

|      % | Samples | Caller                   | Location    |
| -----: | ------: | ------------------------ | ----------- |
| 100.0% |       1 | `(unknown) [c function]` | `<unknown>` |

##### `node_handler_method_name` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/variable_force.rb`)

|      % | Samples | Caller         | Location                                                                    |
| -----: | ------: | -------------- | --------------------------------------------------------------------------- |
| 100.0% |       1 | `process_node` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/variable_force.rb` |

##### `last_argument` (`/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node/mixin/parameterized_node.rb`)

|      % | Samples | Caller    | Location                                                                           |
| -----: | ------: | --------- | ---------------------------------------------------------------------------------- |
| 100.0% |       1 | `on_send` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/layout/hash_alignment.rb` |

##### `each_node` (`/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node/mixin/descendence.rb`)

|      % | Samples | Caller     | Location                                                                                 |
| -----: | ------: | ---------- | ---------------------------------------------------------------------------------------- |
| 100.0% |       1 | `on_block` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/style/multiline_block_chain.rb` |

##### `unary_operation?` (`/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node/mixin/method_dispatch_node.rb`)

|      % | Samples | Caller              | Location                                                                                   |
| -----: | ------: | ------------------- | ------------------------------------------------------------------------------------------ |
| 100.0% |       1 | `regular_operator?` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/layout/space_around_operators.rb` |

##### `initialize` (`/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node.rb`)

|      % | Samples | Caller                   | Location    |
| -----: | ------: | ------------------------ | ----------- |
| 100.0% |       1 | `(unknown) [c function]` | `<unknown>` |

##### `search` (`../../lib/ruby/3.1.0/optparse.rb`)

|      % | Samples | Caller           | Location                           |
| -----: | ------: | ---------------- | ---------------------------------- |
| 100.0% |       1 | `block in visit` | `../../lib/ruby/3.1.0/optparse.rb` |

##### `global_const?` (`<unknown>`)

|      % | Samples | Caller               | Location    |
| -----: | ------: | -------------------- | ----------- |
| 100.0% |       1 | `class_constructor?` | `<unknown>` |

##### `block in private_class_methods` (`<unknown>`)

|      % | Samples | Caller                       | Location                                                                                |
| -----: | ------: | ---------------------------- | --------------------------------------------------------------------------------------- |
| 100.0% |       1 | `block in visit_descendants` | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node/mixin/descendence.rb` |

##### `captures` (`<unknown>`)

|      % | Samples | Caller        | Location                                                                                     |
| -----: | ------: | ------------- | -------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `emit_retval` | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node_pattern/method_definer.rb` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|      % | Samples | Function                       | Location                                                                 |
| -----: | ------: | ------------------------------ | ------------------------------------------------------------------------ |
| 100.0% |     131 | `(unknown) [c function]`       | `<unknown>`                                                              |
|  98.5% |     129 | `<main>`                       | `rubocop`                                                                |
|  96.9% |     127 | `<top (required)>`             | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/exe/rubocop`                    |
|  60.3% |      79 | `run`                          | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli.rb`             |
|  60.3% |      79 | `block in <top (required)>`    | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/exe/rubocop`                    |
|  60.3% |      79 | `realtime`                     | `../../lib/ruby/3.1.0/benchmark.rb`                                      |
|  59.5% |      78 | `block in run`                 | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli.rb`             |
|  59.5% |      78 | `profile_if_needed`            | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli.rb`             |
|  55.0% |      72 | `run`                          | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/command.rb`     |
|  55.0% |      72 | `run`                          | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/environment.rb` |
|  55.0% |      72 | `run_command`                  | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli.rb`             |
|  55.0% |      72 | `execute_runners`              | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli.rb`             |
|  54.2% |      71 | `do_inspection_loop`           | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`          |
|  54.2% |      71 | `block in file_offenses`       | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`          |
|  54.2% |      71 | `file_offense_cache`           | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`          |
|  54.2% |      71 | `file_offenses`                | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`          |
|  54.2% |      71 | `process_file`                 | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`          |
|  54.2% |      71 | `block in each_inspected_file` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`          |
|  54.2% |      71 | `each_inspected_file`          | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`          |
|  54.2% |      71 | `inspect_files`                | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`          |

#### Categories

##### Native

|      % | Samples | Function                 | Location    |
| -----: | ------: | ------------------------ | ----------- |
| 100.0% |     131 | `(unknown) [c function]` | `<unknown>` |

##### Third-party

|     % | Samples | Function                       | Location                                                                            |
| ----: | ------: | ------------------------------ | ----------------------------------------------------------------------------------- |
| 96.9% |     127 | `<top (required)>`             | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/exe/rubocop`                               |
| 60.3% |      79 | `run`                          | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli.rb`                        |
| 60.3% |      79 | `block in <top (required)>`    | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/exe/rubocop`                               |
| 59.5% |      78 | `block in run`                 | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli.rb`                        |
| 59.5% |      78 | `profile_if_needed`            | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli.rb`                        |
| 55.0% |      72 | `run`                          | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/command.rb`                |
| 55.0% |      72 | `run`                          | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/environment.rb`            |
| 55.0% |      72 | `run_command`                  | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli.rb`                        |
| 55.0% |      72 | `execute_runners`              | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli.rb`                        |
| 54.2% |      71 | `do_inspection_loop`           | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`                     |
| 54.2% |      71 | `block in file_offenses`       | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`                     |
| 54.2% |      71 | `file_offense_cache`           | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`                     |
| 54.2% |      71 | `file_offenses`                | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`                     |
| 54.2% |      71 | `process_file`                 | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`                     |
| 54.2% |      71 | `block in each_inspected_file` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`                     |
| 54.2% |      71 | `each_inspected_file`          | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`                     |
| 54.2% |      71 | `inspect_files`                | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`                     |
| 54.2% |      71 | `run`                          | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`                     |
| 54.2% |      71 | `block in execute_runner`      | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb` |
| 54.2% |      71 | `with_redirect`                | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb` |

##### Standard library

|     % | Samples | Function                     | Location                                               |
| ----: | ------: | ---------------------------- | ------------------------------------------------------ |
| 60.3% |      79 | `realtime`                   | `../../lib/ruby/3.1.0/benchmark.rb`                    |
|  2.3% |       3 | `safe_load`                  | `../../lib/ruby/3.1.0/psych.rb`                        |
|  2.3% |       3 | `parse_stream`               | `../../lib/ruby/3.1.0/psych.rb`                        |
|  2.3% |       3 | `parse`                      | `../../lib/ruby/3.1.0/psych.rb`                        |
|  1.5% |       2 | `scalar`                     | `../../lib/ruby/3.1.0/psych/tree_builder.rb`           |
|  1.5% |       2 | `<top (required)>`           | `../../lib/ruby/vendor_ruby/rubygems.rb`               |
|  1.5% |       2 | `block in activate_bin_path` | `../../lib/ruby/vendor_ruby/rubygems.rb`               |
|  1.5% |       2 | `activate_bin_path`          | `../../lib/ruby/vendor_ruby/rubygems.rb`               |
|  1.5% |       2 | `load`                       | `../../lib/ruby/vendor_ruby/rubygems/specification.rb` |
|  0.8% |       1 | `register`                   | `../../lib/ruby/3.1.0/psych/visitors/to_ruby.rb`       |
|  0.8% |       1 | `visit_Psych_Nodes_Scalar`   | `../../lib/ruby/3.1.0/psych/visitors/to_ruby.rb`       |
|  0.8% |       1 | `visit`                      | `../../lib/ruby/3.1.0/psych/visitors/visitor.rb`       |
|  0.8% |       1 | `accept`                     | `../../lib/ruby/3.1.0/psych/visitors/visitor.rb`       |
|  0.8% |       1 | `accept`                     | `../../lib/ruby/3.1.0/psych/visitors/to_ruby.rb`       |
|  0.8% |       1 | `block in register_empty`    | `../../lib/ruby/3.1.0/psych/visitors/to_ruby.rb`       |
|  0.8% |       1 | `register_empty`             | `../../lib/ruby/3.1.0/psych/visitors/to_ruby.rb`       |
|  0.8% |       1 | `visit_Psych_Nodes_Sequence` | `../../lib/ruby/3.1.0/psych/visitors/to_ruby.rb`       |
|  0.8% |       1 | `block in revive_hash`       | `../../lib/ruby/3.1.0/psych/visitors/to_ruby.rb`       |
|  0.8% |       1 | `revive_hash`                | `../../lib/ruby/3.1.0/psych/visitors/to_ruby.rb`       |
|  0.8% |       1 | `visit_Psych_Nodes_Mapping`  | `../../lib/ruby/3.1.0/psych/visitors/to_ruby.rb`       |

##### Unknown

|     % | Samples | Function           | Location    |
| ----: | ------: | ------------------ | ----------- |
| 38.9% |      51 | `require`          | `<unknown>` |
| 29.0% |      38 | `block in on_dstr` | `<unknown>` |
| 29.0% |      38 | `on_dstr`          | `<unknown>` |
| 29.0% |      38 | `on_begin`         | `<unknown>` |
| 29.0% |      38 | `on_module`        | `<unknown>` |
| 28.2% |      37 | `on_while`         | `<unknown>` |
| 22.9% |      30 | `on_def`           | `<unknown>` |
| 19.8% |      26 | `on_class`         | `<unknown>` |
| 13.7% |      18 | `do_parse`         | `<unknown>` |
| 13.0% |      17 | `on_if`            | `<unknown>` |
| 12.2% |      16 | `on_send`          | `<unknown>` |
|  8.4% |      11 | `on_sclass`        | `<unknown>` |
|  6.1% |       8 | `on_block`         | `<unknown>` |
|  5.3% |       7 | `block in on_send` | `<unknown>` |
|  3.8% |       5 | `block in on_case` | `<unknown>` |
|  3.8% |       5 | `on_case`          | `<unknown>` |
|  3.1% |       4 | `on_rescue`        | `<unknown>` |
|  3.1% |       4 | `on_ensure`        | `<unknown>` |
|  2.3% |       3 | `next_token`       | `<unknown>` |
|  1.5% |       2 | `tap`              | `<unknown>` |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `(unknown) [c function]` (`<unknown>`)

|     % | Samples | Callee                              | Location                                                        |
| ----: | ------: | ----------------------------------- | --------------------------------------------------------------- |
| 96.9% |     127 | `<top (required)>`                  | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/exe/rubocop`           |
| 59.5% |      78 | `(unknown) [c function]`            | `<unknown>`                                                     |
| 54.2% |      71 | `block in each_inspected_file`      | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb` |
| 41.2% |      54 | `block in inspect_file`             | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb` |
| 41.2% |      54 | `block in iterate_until_no_changes` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb` |

##### `<main>` (`rubocop`)

|     % | Samples | Callee                   | Location                                 |
| ----: | ------: | ------------------------ | ---------------------------------------- |
| 98.4% |     127 | `(unknown) [c function]` | `<unknown>`                              |
|  1.6% |       2 | `activate_bin_path`      | `../../lib/ruby/vendor_ruby/rubygems.rb` |

##### `<top (required)>` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/exe/rubocop`)

|     % | Samples | Callee     | Location                                                        |
| ----: | ------: | ---------- | --------------------------------------------------------------- |
| 62.2% |      79 | `realtime` | `../../lib/ruby/3.1.0/benchmark.rb`                             |
| 34.6% |      44 | `require`  | `<unknown>`                                                     |
|  3.1% |       4 | `running?` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/server.rb` |

##### `run` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli.rb`)

|     % | Samples | Callee              | Location                                                         |
| ----: | ------: | ------------------- | ---------------------------------------------------------------- |
| 98.7% |      78 | `profile_if_needed` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli.rb`     |
|  1.3% |       1 | `parse`             | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/options.rb` |

##### `block in <top (required)>` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/exe/rubocop`)

|      % | Samples | Callee | Location                                                     |
| -----: | ------: | ------ | ------------------------------------------------------------ |
| 100.0% |      79 | `run`  | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli.rb` |

##### `realtime` (`../../lib/ruby/3.1.0/benchmark.rb`)

|      % | Samples | Callee                      | Location                                              |
| -----: | ------: | --------------------------- | ----------------------------------------------------- |
| 100.0% |      79 | `block in <top (required)>` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/exe/rubocop` |

##### `block in run` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli.rb`)

|     % | Samples | Callee            | Location                                                     |
| ----: | ------: | ----------------- | ------------------------------------------------------------ |
| 92.3% |      72 | `execute_runners` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli.rb` |
|  7.7% |       6 | `act_on_options`  | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli.rb` |

##### `profile_if_needed` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli.rb`)

|      % | Samples | Callee         | Location                                                     |
| -----: | ------: | -------------- | ------------------------------------------------------------ |
| 100.0% |      78 | `block in run` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli.rb` |

##### `run` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/command.rb`)

|     % | Samples | Callee | Location                                                                                |
| ----: | ------: | ------ | --------------------------------------------------------------------------------------- |
| 98.6% |      71 | `run`  | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb`     |
|  1.4% |       1 | `run`  | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/command/suggest_extensions.rb` |

##### `run` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/environment.rb`)

|      % | Samples | Callee | Location                                                             |
| -----: | ------: | ------ | -------------------------------------------------------------------- |
| 100.0% |      72 | `run`  | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/command.rb` |

##### `run_command` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli.rb`)

|      % | Samples | Callee | Location                                                                 |
| -----: | ------: | ------ | ------------------------------------------------------------------------ |
| 100.0% |      72 | `run`  | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/environment.rb` |

##### `execute_runners` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli.rb`)

|     % | Samples | Callee        | Location                                                     |
| ----: | ------: | ------------- | ------------------------------------------------------------ |
| 98.6% |      71 | `run_command` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli.rb` |
|  1.4% |       1 | `tap`         | `<unknown>`                                                  |

##### `do_inspection_loop` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`)

|     % | Samples | Callee                     | Location                                                        |
| ----: | ------: | -------------------------- | --------------------------------------------------------------- |
| 76.1% |      54 | `iterate_until_no_changes` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb` |
| 23.9% |      17 | `get_processed_source`     | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb` |

##### `block in file_offenses` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`)

|      % | Samples | Callee               | Location                                                        |
| -----: | ------: | -------------------- | --------------------------------------------------------------- |
| 100.0% |      71 | `do_inspection_loop` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb` |

##### `file_offense_cache` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`)

|      % | Samples | Callee                   | Location                                                        |
| -----: | ------: | ------------------------ | --------------------------------------------------------------- |
| 100.0% |      71 | `block in file_offenses` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb` |

##### `file_offenses` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`)

|      % | Samples | Callee               | Location                                                        |
| -----: | ------: | -------------------- | --------------------------------------------------------------- |
| 100.0% |      71 | `file_offense_cache` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb` |

##### `process_file` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`)

|      % | Samples | Callee          | Location                                                        |
| -----: | ------: | --------------- | --------------------------------------------------------------- |
| 100.0% |      71 | `file_offenses` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb` |

##### `block in each_inspected_file` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`)

|      % | Samples | Callee         | Location                                                        |
| -----: | ------: | -------------- | --------------------------------------------------------------- |
| 100.0% |      71 | `process_file` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb` |

##### `each_inspected_file` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`)

|      % | Samples | Callee                   | Location    |
| -----: | ------: | ------------------------ | ----------- |
| 100.0% |      71 | `(unknown) [c function]` | `<unknown>` |

##### `inspect_files` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`)

|      % | Samples | Callee                | Location                                                        |
| -----: | ------: | --------------------- | --------------------------------------------------------------- |
| 100.0% |      71 | `each_inspected_file` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb` |

##### `run` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`)

|      % | Samples | Callee          | Location                                                        |
| -----: | ------: | --------------- | --------------------------------------------------------------- |
| 100.0% |      71 | `inspect_files` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb` |

##### `block in execute_runner` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb`)

|      % | Samples | Callee | Location                                                        |
| -----: | ------: | ------ | --------------------------------------------------------------- |
| 100.0% |      71 | `run`  | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb` |

##### `with_redirect` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb`)

|      % | Samples | Callee                    | Location                                                                            |
| -----: | ------: | ------------------------- | ----------------------------------------------------------------------------------- |
| 100.0% |      71 | `block in execute_runner` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb` |

##### `require` (`<unknown>`)

|      % | Samples | Callee                   | Location    |
| -----: | ------: | ------------------------ | ----------- |
| 100.0% |      51 | `(unknown) [c function]` | `<unknown>` |

##### `block in on_dstr` (`<unknown>`)

|      % | Samples | Callee      | Location    |
| -----: | ------: | ----------- | ----------- |
| 100.0% |      38 | `on_module` | `<unknown>` |
|  78.9% |      30 | `on_def`    | `<unknown>` |
|  68.4% |      26 | `on_class`  | `<unknown>` |
|  44.7% |      17 | `on_if`     | `<unknown>` |
|  28.9% |      11 | `on_sclass` | `<unknown>` |

##### `on_dstr` (`<unknown>`)

|      % | Samples | Callee                   | Location    |
| -----: | ------: | ------------------------ | ----------- |
| 100.0% |      38 | `(unknown) [c function]` | `<unknown>` |
|   5.3% |       2 | `on_dstr`                | `<unknown>` |

##### `on_begin` (`<unknown>`)

|      % | Samples | Callee                    | Location                                                                  |
| -----: | ------: | ------------------------- | ------------------------------------------------------------------------- |
| 100.0% |      38 | `on_dstr`                 | `<unknown>`                                                               |
|   2.6% |       1 | `trigger_responding_cops` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb` |

##### `on_module` (`<unknown>`)

|     % | Samples | Callee                    | Location                                                                  |
| ----: | ------: | ------------------------- | ------------------------------------------------------------------------- |
| 97.4% |      37 | `on_while`                | `<unknown>`                                                               |
|  2.6% |       1 | `trigger_responding_cops` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb` |

##### `on_while` (`<unknown>`)

|      % | Samples | Callee     | Location    |
| -----: | ------: | ---------- | ----------- |
| 100.0% |      37 | `on_begin` | `<unknown>` |
|   2.7% |       1 | `on_send`  | `<unknown>` |
|   2.7% |       1 | `on_while` | `<unknown>` |

##### `on_def` (`<unknown>`)

|     % | Samples | Callee                    | Location                                                                  |
| ----: | ------: | ------------------------- | ------------------------------------------------------------------------- |
| 86.7% |      26 | `on_def`                  | `<unknown>`                                                               |
| 56.7% |      17 | `on_begin`                | `<unknown>`                                                               |
| 13.3% |       4 | `trigger_responding_cops` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb` |
| 10.0% |       3 | `on_ensure`               | `<unknown>`                                                               |
|  6.7% |       2 | `on_rescue`               | `<unknown>`                                                               |

##### `on_class` (`<unknown>`)

|     % | Samples | Callee                    | Location                                                                  |
| ----: | ------: | ------------------------- | ------------------------------------------------------------------------- |
| 96.2% |      25 | `on_begin`                | `<unknown>`                                                               |
| 96.2% |      25 | `on_class`                | `<unknown>`                                                               |
|  3.8% |       1 | `trigger_responding_cops` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb` |

##### `do_parse` (`<unknown>`)

|      % | Samples | Callee                   | Location    |
| -----: | ------: | ------------------------ | ----------- |
| 100.0% |      18 | `(unknown) [c function]` | `<unknown>` |

##### `on_if` (`<unknown>`)

|     % | Samples | Callee                    | Location                                                                  |
| ----: | ------: | ------------------------- | ------------------------------------------------------------------------- |
| 76.5% |      13 | `on_if`                   | `<unknown>`                                                               |
| 29.4% |       5 | `trigger_responding_cops` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb` |
| 29.4% |       5 | `on_send`                 | `<unknown>`                                                               |
| 23.5% |       4 | `on_begin`                | `<unknown>`                                                               |
| 11.8% |       2 | `on_or`                   | `<unknown>`                                                               |

##### `on_send` (`<unknown>`)

|     % | Samples | Callee                    | Location                                                                  |
| ----: | ------: | ------------------------- | ------------------------------------------------------------------------- |
| 56.3% |       9 | `trigger_responding_cops` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb` |
| 43.8% |       7 | `(unknown) [c function]`  | `<unknown>`                                                               |
| 43.8% |       7 | `on_send`                 | `<unknown>`                                                               |
| 18.8% |       3 | `trigger_restricted_cops` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb` |

##### `on_sclass` (`<unknown>`)

|     % | Samples | Callee                    | Location                                                                  |
| ----: | ------: | ------------------------- | ------------------------------------------------------------------------- |
| 90.9% |      10 | `on_while`                | `<unknown>`                                                               |
|  9.1% |       1 | `trigger_responding_cops` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb` |

##### `on_block` (`<unknown>`)

|     % | Samples | Callee                    | Location                                                                  |
| ----: | ------: | ------------------------- | ------------------------------------------------------------------------- |
| 50.0% |       4 | `trigger_responding_cops` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb` |
| 50.0% |       4 | `on_block`                | `<unknown>`                                                               |
| 37.5% |       3 | `on_begin`                | `<unknown>`                                                               |
| 12.5% |       1 | `on_send`                 | `<unknown>`                                                               |

##### `block in on_send` (`<unknown>`)

|     % | Samples | Callee      | Location    |
| ----: | ------: | ----------- | ----------- |
| 42.9% |       3 | `on_send`   | `<unknown>` |
| 28.6% |       2 | `on_dstr`   | `<unknown>` |
| 14.3% |       1 | `on_str`    | `<unknown>` |
| 14.3% |       1 | `on_regexp` | `<unknown>` |
| 14.3% |       1 | `on_block`  | `<unknown>` |

##### `block in on_case` (`<unknown>`)

|     % | Samples | Callee       | Location    |
| ----: | ------: | ------------ | ----------- |
| 80.0% |       4 | `on_begin`   | `<unknown>` |
| 40.0% |       2 | `on_rescue`  | `<unknown>` |
| 20.0% |       1 | `on_send`    | `<unknown>` |
| 20.0% |       1 | `on_resbody` | `<unknown>` |

##### `on_case` (`<unknown>`)

|      % | Samples | Callee                   | Location    |
| -----: | ------: | ------------------------ | ----------- |
| 100.0% |       5 | `(unknown) [c function]` | `<unknown>` |

##### `on_rescue` (`<unknown>`)

|      % | Samples | Callee    | Location    |
| -----: | ------: | --------- | ----------- |
| 100.0% |       4 | `on_case` | `<unknown>` |

##### `on_ensure` (`<unknown>`)

|     % | Samples | Callee                    | Location                                                                  |
| ----: | ------: | ------------------------- | ------------------------------------------------------------------------- |
| 75.0% |       3 | `on_case`                 | `<unknown>`                                                               |
| 25.0% |       1 | `trigger_responding_cops` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb` |

##### `safe_load` (`../../lib/ruby/3.1.0/psych.rb`)

|     % | Samples | Callee   | Location                                         |
| ----: | ------: | -------- | ------------------------------------------------ |
| 66.7% |       2 | `parse`  | `../../lib/ruby/3.1.0/psych.rb`                  |
| 33.3% |       1 | `accept` | `../../lib/ruby/3.1.0/psych/visitors/to_ruby.rb` |

##### `parse_stream` (`../../lib/ruby/3.1.0/psych.rb`)

|      % | Samples | Callee                   | Location    |
| -----: | ------: | ------------------------ | ----------- |
| 100.0% |       3 | `(unknown) [c function]` | `<unknown>` |

##### `parse` (`../../lib/ruby/3.1.0/psych.rb`)

|      % | Samples | Callee         | Location                        |
| -----: | ------: | -------------- | ------------------------------- |
| 100.0% |       3 | `parse_stream` | `../../lib/ruby/3.1.0/psych.rb` |

##### `next_token` (`<unknown>`)

|      % | Samples | Callee       | Location                                                                                |
| -----: | ------: | ------------ | --------------------------------------------------------------------------------------- |
| 100.0% |       3 | `next_token` | `/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node_pattern/lexer.rex.rb` |

##### `scalar` (`../../lib/ruby/3.1.0/psych/tree_builder.rb`)

|      % | Samples | Callee                   | Location    |
| -----: | ------: | ------------------------ | ----------- |
| 100.0% |       2 | `(unknown) [c function]` | `<unknown>` |

##### `<top (required)>` (`../../lib/ruby/vendor_ruby/rubygems.rb`)

|     % | Samples | Callee                   | Location                                               |
| ----: | ------: | ------------------------ | ------------------------------------------------------ |
| 50.0% |       1 | `(unknown) [c function]` | `<unknown>`                                            |
| 50.0% |       1 | `load_defaults`          | `../../lib/ruby/vendor_ruby/rubygems/specification.rb` |

##### `block in activate_bin_path` (`../../lib/ruby/vendor_ruby/rubygems.rb`)

|     % | Samples | Callee           | Location                                               |
| ----: | ------: | ---------------- | ------------------------------------------------------ |
| 50.0% |       1 | `finish_resolve` | `../../lib/ruby/vendor_ruby/rubygems.rb`               |
| 50.0% |       1 | `activate`       | `../../lib/ruby/vendor_ruby/rubygems/specification.rb` |

##### `activate_bin_path` (`../../lib/ruby/vendor_ruby/rubygems.rb`)

|      % | Samples | Callee                   | Location    |
| -----: | ------: | ------------------------ | ----------- |
| 100.0% |       2 | `(unknown) [c function]` | `<unknown>` |

##### `load` (`../../lib/ruby/vendor_ruby/rubygems/specification.rb`)

|     % | Samples | Callee                   | Location                                 |
| ----: | ------: | ------------------------ | ---------------------------------------- |
| 50.0% |       1 | `(unknown) [c function]` | `<unknown>`                              |
| 50.0% |       1 | `open_file`              | `../../lib/ruby/vendor_ruby/rubygems.rb` |

##### `tap` (`<unknown>`)

|     % | Samples | Callee                     | Location                                                              |
| ----: | ------: | -------------------------- | --------------------------------------------------------------------- |
| 50.0% |       1 | `block in execute_runners` | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli.rb`          |
| 50.0% |       1 | `block in dir`             | `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/server/cache.rb` |

##### `visit_Psych_Nodes_Scalar` (`../../lib/ruby/3.1.0/psych/visitors/to_ruby.rb`)

|      % | Samples | Callee     | Location                                         |
| -----: | ------: | ---------- | ------------------------------------------------ |
| 100.0% |       1 | `register` | `../../lib/ruby/3.1.0/psych/visitors/to_ruby.rb` |

##### `visit` (`../../lib/ruby/3.1.0/psych/visitors/visitor.rb`)

|      % | Samples | Callee                       | Location                                         |
| -----: | ------: | ---------------------------- | ------------------------------------------------ |
| 100.0% |       1 | `visit_Psych_Nodes_Scalar`   | `../../lib/ruby/3.1.0/psych/visitors/to_ruby.rb` |
| 100.0% |       1 | `visit_Psych_Nodes_Sequence` | `../../lib/ruby/3.1.0/psych/visitors/to_ruby.rb` |
| 100.0% |       1 | `visit_Psych_Nodes_Mapping`  | `../../lib/ruby/3.1.0/psych/visitors/to_ruby.rb` |
| 100.0% |       1 | `visit_Psych_Nodes_Document` | `../../lib/ruby/3.1.0/psych/visitors/to_ruby.rb` |

##### `accept` (`../../lib/ruby/3.1.0/psych/visitors/visitor.rb`)

|      % | Samples | Callee  | Location                                         |
| -----: | ------: | ------- | ------------------------------------------------ |
| 100.0% |       1 | `visit` | `../../lib/ruby/3.1.0/psych/visitors/visitor.rb` |

##### `accept` (`../../lib/ruby/3.1.0/psych/visitors/to_ruby.rb`)

|      % | Samples | Callee   | Location                                         |
| -----: | ------: | -------- | ------------------------------------------------ |
| 100.0% |       1 | `accept` | `../../lib/ruby/3.1.0/psych/visitors/visitor.rb` |

##### `block in register_empty` (`../../lib/ruby/3.1.0/psych/visitors/to_ruby.rb`)

|      % | Samples | Callee   | Location                                         |
| -----: | ------: | -------- | ------------------------------------------------ |
| 100.0% |       1 | `accept` | `../../lib/ruby/3.1.0/psych/visitors/to_ruby.rb` |

##### `register_empty` (`../../lib/ruby/3.1.0/psych/visitors/to_ruby.rb`)

|      % | Samples | Callee                   | Location    |
| -----: | ------: | ------------------------ | ----------- |
| 100.0% |       1 | `(unknown) [c function]` | `<unknown>` |

##### `visit_Psych_Nodes_Sequence` (`../../lib/ruby/3.1.0/psych/visitors/to_ruby.rb`)

|      % | Samples | Callee           | Location                                         |
| -----: | ------: | ---------------- | ------------------------------------------------ |
| 100.0% |       1 | `register_empty` | `../../lib/ruby/3.1.0/psych/visitors/to_ruby.rb` |

##### `block in revive_hash` (`../../lib/ruby/3.1.0/psych/visitors/to_ruby.rb`)

|      % | Samples | Callee   | Location                                         |
| -----: | ------: | -------- | ------------------------------------------------ |
| 100.0% |       1 | `accept` | `../../lib/ruby/3.1.0/psych/visitors/to_ruby.rb` |

##### `revive_hash` (`../../lib/ruby/3.1.0/psych/visitors/to_ruby.rb`)

|      % | Samples | Callee                   | Location    |
| -----: | ------: | ------------------------ | ----------- |
| 100.0% |       1 | `(unknown) [c function]` | `<unknown>` |

##### `visit_Psych_Nodes_Mapping` (`../../lib/ruby/3.1.0/psych/visitors/to_ruby.rb`)

|      % | Samples | Callee        | Location                                         |
| -----: | ------: | ------------- | ------------------------------------------------ |
| 100.0% |       1 | `revive_hash` | `../../lib/ruby/3.1.0/psych/visitors/to_ruby.rb` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

Common call stack: `<top (required)>` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/exe/rubocop`) ← `(unknown) [c function]` ← `<main>` (`rubocop`)

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ---: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 7.6% |      10 | `(unknown) [c function]` ← `<top (required)>` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop.rb`) ← `(unknown) [c function]` ← `require`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 3.1% |       4 | `advance` (`/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/lexer-F1.rb`) ← `next_token` (`/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/base.rb`) ← `(unknown) [c function]` ← `do_parse` ← `parse` (`/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/base.rb`) ← `tokenize` ← `tokenize` (`/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/processed_source.rb`) ← `parse` ← `initialize` ← `(unknown) [c function]` ← `from_file` (`/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/processed_source.rb`) ← `get_processed_source` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `do_inspection_loop` ← `block in file_offenses` ← `file_offense_cache` ← `file_offenses` ← `process_file` ← `block in each_inspected_file` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `each_inspected_file` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `inspect_files` ← `run` ← `block in execute_runner` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb`) ← `with_redirect` ← `execute_runner` ← `run` ← `run` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/command.rb`) ← `run` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/environment.rb`) ← `run_command` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli.rb`) ← `execute_runners` ← `block in run` ← `profile_if_needed` ← `run` ← `block in <top (required)>` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/exe/rubocop`) ← `realtime` (`../../lib/ruby/3.1.0/benchmark.rb`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 3.1% |       4 | `(unknown) [c function]` ← `<module:Interface>` (`/var/lib/gems/3.1.0/gems/language_server-protocol-3.17.0.5/lib/language_server/protocol/interface.rb`) ← `<module:Protocol>` ← `<module:LanguageServer>` ← `<top (required)>` ← `(unknown) [c function]` ← `<top (required)>` (`/var/lib/gems/3.1.0/gems/language_server-protocol-3.17.0.5/lib/language_server/protocol.rb`) ← `(unknown) [c function]` ← `<top (required)>` (`/var/lib/gems/3.1.0/gems/language_server-protocol-3.17.0.5/lib/language_server-protocol.rb`) ← `(unknown) [c function]` ← `require` ← `<top (required)>` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/lsp/server.rb`) ← `(unknown) [c function]` ← `<top (required)>` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/command/lsp.rb`) ← `(unknown) [c function]` ← `<top (required)>` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop.rb`) ← `(unknown) [c function]` ← `require`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 2.3% |       3 | `(unknown) [c function]` ← `line_begins` (`/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/source/buffer.rb`) ← `line_index_for_position` ← `line_for_position` ← `line` (`/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/source/range.rb`) ← `line` (`/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/token.rb`) ← `lines` (`/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/processed_source.rb`) ← `own_line_comment?` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/layout/comment_indentation.rb`) ← `check` ← `block in on_new_investigation` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `on_new_investigation` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/layout/comment_indentation.rb`) ← `block (2 levels) in invoke` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`) ← `with_cop_error_handling` ← `block in invoke` ← `(unknown) [c function]` ← `invoke` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`) ← `investigate` ← `investigate_partial` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/team.rb`) ← `investigate` ← `block in inspect_file` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `inspect_file` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `block in do_inspection_loop` ← `block in iterate_until_no_changes` ← `(unknown) [c function]` ← `iterate_until_no_changes` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `do_inspection_loop` ← `block in file_offenses` ← `file_offense_cache` ← `file_offenses` ← `process_file` ← `block in each_inspected_file` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `each_inspected_file` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `inspect_files` ← `run` ← `block in execute_runner` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb`) ← `with_redirect` ← `execute_runner` ← `run` ← `run` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/command.rb`) ← `run` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/environment.rb`) ← `run_command` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli.rb`) ← `execute_runners` ← `block in run` ← `profile_if_needed` ← `run` ← `block in <top (required)>` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/exe/rubocop`) ← `realtime` (`../../lib/ruby/3.1.0/benchmark.rb`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 2.3% |       3 | `(unknown) [c function]` ← `<top (required)>` (`/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast.rb`) ← `(unknown) [c function]` ← `<top (required)>` (`/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop-ast.rb`) ← `(unknown) [c function]` ← `require` ← `<top (required)>` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop.rb`) ← `(unknown) [c function]` ← `require`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 2.3% |       3 | `(unknown) [c function]` ← `<module:Parser>` (`/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser.rb`) ← `<top (required)>` ← `(unknown) [c function]` ← `require` ← `<top (required)>` (`/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast.rb`) ← `(unknown) [c function]` ← `<top (required)>` (`/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop-ast.rb`) ← `(unknown) [c function]` ← `require` ← `<top (required)>` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop.rb`) ← `(unknown) [c function]` ← `require`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 2.3% |       3 | `(unknown) [c function]` ← `before_semicolon?` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/layout/space_after_comma.rb`) ← `kind` ← `block in each_missing_space` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/space_after_punctuation.rb`) ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `each_missing_space` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/space_after_punctuation.rb`) ← `on_new_investigation` ← `block (2 levels) in invoke` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`) ← `with_cop_error_handling` ← `block in invoke` ← `(unknown) [c function]` ← `invoke` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`) ← `investigate` ← `investigate_partial` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/team.rb`) ← `investigate` ← `block in inspect_file` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `inspect_file` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `block in do_inspection_loop` ← `block in iterate_until_no_changes` ← `(unknown) [c function]` ← `iterate_until_no_changes` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `do_inspection_loop` ← `block in file_offenses` ← `file_offense_cache` ← `file_offenses` ← `process_file` ← `block in each_inspected_file` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `each_inspected_file` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `inspect_files` ← `run` ← `block in execute_runner` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb`) ← `with_redirect` ← `execute_runner` ← `run` ← `run` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/command.rb`) ← `run` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/environment.rb`) ← `run_command` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli.rb`) ← `execute_runners` ← `block in run` ← `profile_if_needed` ← `run` ← `block in <top (required)>` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/exe/rubocop`) ← `realtime` (`../../lib/ruby/3.1.0/benchmark.rb`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 1.5% |       2 | `(unknown) [c function]` ← `require` ← `parser_class` (`/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/processed_source.rb`) ← `create_parser` ← `parse` ← `initialize` ← `(unknown) [c function]` ← `from_file` (`/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/processed_source.rb`) ← `get_processed_source` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `do_inspection_loop` ← `block in file_offenses` ← `file_offense_cache` ← `file_offenses` ← `process_file` ← `block in each_inspected_file` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `each_inspected_file` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `inspect_files` ← `run` ← `block in execute_runner` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb`) ← `with_redirect` ← `execute_runner` ← `run` ← `run` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/command.rb`) ← `run` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/environment.rb`) ← `run_command` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli.rb`) ← `execute_runners` ← `block in run` ← `profile_if_needed` ← `run` ← `block in <top (required)>` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/exe/rubocop`) ← `realtime` (`../../lib/ruby/3.1.0/benchmark.rb`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 1.5% |       2 | `(unknown) [c function]` ← `<top (required)>` (`../../lib/ruby/gems/3.1.0/gems/rexml-3.2.5/lib/rexml/document.rb`) ← `(unknown) [c function]` ← `require` ← `<top (required)>` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/formatter/junit_formatter.rb`) ← `(unknown) [c function]` ← `<module:Formatter>` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/formatter.rb`) ← `<module:RuboCop>` ← `<top (required)>` ← `(unknown) [c function]` ← `<top (required)>` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop.rb`) ← `(unknown) [c function]` ← `require`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 1.5% |       2 | `(unknown) [c function]` ← `slice` (`/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/source/buffer.rb`) ← `tok` (`/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/lexer-F1.rb`) ← `advance` ← `next_token` (`/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/base.rb`) ← `(unknown) [c function]` ← `do_parse` ← `parse` (`/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/base.rb`) ← `tokenize` ← `tokenize` (`/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/processed_source.rb`) ← `parse` ← `initialize` ← `(unknown) [c function]` ← `from_file` (`/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/processed_source.rb`) ← `get_processed_source` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `do_inspection_loop` ← `block in file_offenses` ← `file_offense_cache` ← `file_offenses` ← `process_file` ← `block in each_inspected_file` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `each_inspected_file` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `inspect_files` ← `run` ← `block in execute_runner` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb`) ← `with_redirect` ← `execute_runner` ← `run` ← `run` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/command.rb`) ← `run` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/environment.rb`) ← `run_command` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli.rb`) ← `execute_runners` ← `block in run` ← `profile_if_needed` ← `run` ← `block in <top (required)>` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/exe/rubocop`) ← `realtime` (`../../lib/ruby/3.1.0/benchmark.rb`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 1.5% |       2 | `(unknown) [c function]` ← `<top (required)>` (`/var/lib/gems/3.1.0/gems/prism-1.9.0/lib/prism.rb`) ← `(unknown) [c function]` ← `require` ← `<top (required)>` (`/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast.rb`) ← `(unknown) [c function]` ← `<top (required)>` (`/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop-ast.rb`) ← `(unknown) [c function]` ← `require` ← `<top (required)>` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop.rb`) ← `(unknown) [c function]` ← `require`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 1.5% |       2 | `(unknown) [c function]` ← `singleton class` (`/var/lib/gems/3.1.0/gems/regexp_parser-2.12.0/lib/regexp_parser/scanner.rb`) ← `scan` ← `scan` ← `lex` (`/var/lib/gems/3.1.0/gems/regexp_parser-2.12.0/lib/regexp_parser/lexer.rb`) ← `lex` ← `parse` (`/var/lib/gems/3.1.0/gems/regexp_parser-2.12.0/lib/regexp_parser/parser.rb`) ← `parse` ← `assign_properties` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/ext/regexp_node.rb`) ← `initialize` (`/var/lib/gems/3.1.0/gems/ast-2.4.3/lib/ast/node.rb`) ← `initialize` (`/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node.rb`) ← `(unknown) [c function]` ← `n` (`/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/builder.rb`) ← `regexp_compose` (`/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/builders/default.rb`) ← `_reduce_549` (`/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/ruby27.rb`) ← `(unknown) [c function]` ← `do_parse` ← `parse` (`/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/base.rb`) ← `tokenize` ← `tokenize` (`/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/processed_source.rb`) ← `parse` ← `initialize` ← `(unknown) [c function]` ← `from_file` (`/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/processed_source.rb`) ← `get_processed_source` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `do_inspection_loop` ← `block in file_offenses` ← `file_offense_cache` ← `file_offenses` ← `process_file` ← `block in each_inspected_file` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `each_inspected_file` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `inspect_files` ← `run` ← `block in execute_runner` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb`) ← `with_redirect` ← `execute_runner` ← `run` ← `run` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/command.rb`) ← `run` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/environment.rb`) ← `run_command` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli.rb`) ← `execute_runners` ← `block in run` ← `profile_if_needed` ← `run` ← `block in <top (required)>` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/exe/rubocop`) ← `realtime` (`../../lib/ruby/3.1.0/benchmark.rb`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 0.8% |       1 | `arity` (`/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node_pattern/node.rb`) ← `arity_range` ← `(unknown) [c function]` ← `remaining_arities` (`/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node_pattern/compiler/sequence_subcompiler.rb`) ← `compile_terms` ← `block in compile_sequence` ← `with_temp_variables` (`/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node_pattern/compiler.rb`) ← `compile_sequence` (`/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node_pattern/compiler/sequence_subcompiler.rb`) ← `compile_sequence` (`/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node_pattern/compiler.rb`) ← `block in visit_sequence` (`/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node_pattern/compiler/node_pattern_subcompiler.rb`) ← `multiple_access` ← `visit_sequence` ← `do_compile` (`/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node_pattern/compiler/subcompiler.rb`) ← `compile` ← `compile_as_node_pattern` (`/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node_pattern/compiler.rb`) ← `initialize` (`/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node_pattern.rb`) ← `(unknown) [c function]` ← `def_node_matcher` (`/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node_pattern.rb`) ← `<module:GemDeclaration>` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/gem_declaration.rb`) ← `<module:Cop>` ← `<module:RuboCop>` ← `<top (required)>` ← `(unknown) [c function]` ← `<top (required)>` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop.rb`) ← `(unknown) [c function]` ← `require`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 0.8% |       1 | `on_block` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/lint/unreachable_loop.rb`) ← `(unknown) [c function]` ← `block (2 levels) in trigger_responding_cops` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`) ← `with_cop_error_handling` ← `block in trigger_responding_cops` ← `(unknown) [c function]` ← `trigger_responding_cops` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`) ← `on_block` ← `block in on_dstr` ← `(unknown) [c function]` ← `on_dstr` ← `on_begin` ← `block in on_case` ← `(unknown) [c function]` ← `on_case` ← `on_rescue` ← `block in on_case` ← `(unknown) [c function]` ← `on_case` ← `on_ensure` ← `on_def` ← `on_def` ← `block in on_dstr` ← `(unknown) [c function]` ← `on_dstr` ← `on_begin` ← `on_class` ← `on_class` ← `block in on_dstr` ← `(unknown) [c function]` ← `on_dstr` ← `on_begin` ← `on_while` ← `on_module` ← `block in on_dstr` ← `(unknown) [c function]` ← `on_dstr` ← `on_begin` ← `walk` (`/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/traversal.rb`) ← `investigate` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`) ← `investigate_partial` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/team.rb`) ← `investigate` ← `block in inspect_file` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `inspect_file` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `block in do_inspection_loop` ← `block in iterate_until_no_changes` ← `(unknown) [c function]` ← `iterate_until_no_changes` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `do_inspection_loop` ← `block in file_offenses` ← `file_offense_cache` ← `file_offenses` ← `process_file` ← `block in each_inspected_file` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `each_inspected_file` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `inspect_files` ← `run` ← `block in execute_runner` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb`) ← `with_redirect` ← `execute_runner` ← `run` ← `run` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/command.rb`) ← `run` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/environment.rb`) ← `run_command` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli.rb`) ← `execute_runners` ← `block in run` ← `profile_if_needed` ← `run` ← `block in <top (required)>` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/exe/rubocop`) ← `realtime` (`../../lib/ruby/3.1.0/benchmark.rb`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 0.8% |       1 | `start_line_range` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/end_keyword_alignment.rb`) ← `check_other_alignment` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/layout/end_alignment.rb`) ← `on_if` ← `(unknown) [c function]` ← `block (2 levels) in trigger_responding_cops` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`) ← `with_cop_error_handling` ← `block in trigger_responding_cops` ← `(unknown) [c function]` ← `trigger_responding_cops` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`) ← `on_if` ← `block in on_dstr` ← `(unknown) [c function]` ← `on_dstr` ← `on_begin` ← `on_def` ← `on_def` ← `block in on_dstr` ← `(unknown) [c function]` ← `on_dstr` ← `on_begin` ← `on_while` ← `on_sclass` ← `block in on_dstr` ← `(unknown) [c function]` ← `on_dstr` ← `on_begin` ← `on_class` ← `on_class` ← `block in on_dstr` ← `(unknown) [c function]` ← `on_dstr` ← `on_begin` ← `on_while` ← `on_module` ← `block in on_dstr` ← `(unknown) [c function]` ← `on_dstr` ← `on_begin` ← `walk` (`/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/traversal.rb`) ← `investigate` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`) ← `investigate_partial` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/team.rb`) ← `investigate` ← `block in inspect_file` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `inspect_file` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `block in do_inspection_loop` ← `block in iterate_until_no_changes` ← `(unknown) [c function]` ← `iterate_until_no_changes` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `do_inspection_loop` ← `block in file_offenses` ← `file_offense_cache` ← `file_offenses` ← `process_file` ← `block in each_inspected_file` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `each_inspected_file` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `inspect_files` ← `run` ← `block in execute_runner` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb`) ← `with_redirect` ← `execute_runner` ← `run` ← `run` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/command.rb`) ← `run` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/environment.rb`) ← `run_command` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli.rb`) ← `execute_runners` ← `block in run` ← `profile_if_needed` ← `run` ← `block in <top (required)>` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/exe/rubocop`) ← `realtime` (`../../lib/ruby/3.1.0/benchmark.rb`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 0.8% |       1 | `emit` (`/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/lexer-F1.rb`) ← `emit_table` ← `advance` ← `next_token` (`/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/base.rb`) ← `(unknown) [c function]` ← `do_parse` ← `parse` (`/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser/base.rb`) ← `tokenize` ← `tokenize` (`/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/processed_source.rb`) ← `parse` ← `initialize` ← `(unknown) [c function]` ← `from_file` (`/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/processed_source.rb`) ← `get_processed_source` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `do_inspection_loop` ← `block in file_offenses` ← `file_offense_cache` ← `file_offenses` ← `process_file` ← `block in each_inspected_file` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `each_inspected_file` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `inspect_files` ← `run` ← `block in execute_runner` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb`) ← `with_redirect` ← `execute_runner` ← `run` ← `run` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/command.rb`) ← `run` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/environment.rb`) ← `run_command` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli.rb`) ← `execute_runners` ← `block in run` ← `profile_if_needed` ← `run` ← `block in <top (required)>` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/exe/rubocop`) ← `realtime` (`../../lib/ruby/3.1.0/benchmark.rb`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 0.8% |       1 | `block in visit_descendants` (`/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node/mixin/descendence.rb`) ← `(unknown) [c function]` ← `visit_descendants` (`/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node/mixin/descendence.rb`) ← `block in visit_descendants` ← `(unknown) [c function]` ← `visit_descendants` (`/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node/mixin/descendence.rb`) ← `block in visit_descendants` ← `(unknown) [c function]` ← `visit_descendants` (`/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node/mixin/descendence.rb`) ← `block in visit_descendants` ← `(unknown) [c function]` ← `visit_descendants` (`/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/node/mixin/descendence.rb`) ← `each_descendant` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `node_with_heredoc?` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/metrics/utils/code_length_calculator.rb`) ← `code_length` ← `calculate` ← `check_code_length` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/code_length.rb`) ← `on_def` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/metrics/method_length.rb`) ← `(unknown) [c function]` ← `block (2 levels) in trigger_responding_cops` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`) ← `with_cop_error_handling` ← `block in trigger_responding_cops` ← `(unknown) [c function]` ← `trigger_responding_cops` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`) ← `on_def` ← `block in on_dstr` ← `(unknown) [c function]` ← `on_dstr` ← `on_begin` ← `on_while` ← `on_module` ← `block in on_dstr` ← `(unknown) [c function]` ← `on_dstr` ← `on_begin` ← `on_while` ← `on_module` ← `block in on_dstr` ← `(unknown) [c function]` ← `on_dstr` ← `on_begin` ← `walk` (`/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/traversal.rb`) ← `investigate` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`) ← `investigate_partial` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/team.rb`) ← `investigate` ← `block in inspect_file` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `inspect_file` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `block in do_inspection_loop` ← `block in iterate_until_no_changes` ← `(unknown) [c function]` ← `iterate_until_no_changes` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `do_inspection_loop` ← `block in file_offenses` ← `file_offense_cache` ← `file_offenses` ← `process_file` ← `block in each_inspected_file` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `each_inspected_file` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `inspect_files` ← `run` ← `block in execute_runner` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb`) ← `with_redirect` ← `execute_runner` ← `run` ← `run` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/command.rb`) ← `run` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/environment.rb`) ← `run_command` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli.rb`) ← `execute_runners` ← `block in run` ← `profile_if_needed` ← `run` ← `block in <top (required)>` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/exe/rubocop`) ← `realtime` (`../../lib/ruby/3.1.0/benchmark.rb`) |
| 0.8% |       1 | `(unknown) [c function]` ← `require` ← `block in cache_root_dir_from_config` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/server/cache.rb`) ← `root_dir` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cache_config.rb`) ← `cache_root_dir_from_config` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/server/cache.rb`) ← `cache_path` ← `dir` ← `pid_path` ← `pid_running?` ← `running?` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/server.rb`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 0.8% |       1 | `register` (`../../lib/ruby/3.1.0/psych/visitors/to_ruby.rb`) ← `visit_Psych_Nodes_Scalar` ← `visit` (`../../lib/ruby/3.1.0/psych/visitors/visitor.rb`) ← `accept` ← `accept` (`../../lib/ruby/3.1.0/psych/visitors/to_ruby.rb`) ← `block in register_empty` ← `(unknown) [c function]` ← `register_empty` (`../../lib/ruby/3.1.0/psych/visitors/to_ruby.rb`) ← `visit_Psych_Nodes_Sequence` ← `visit` (`../../lib/ruby/3.1.0/psych/visitors/visitor.rb`) ← `accept` ← `accept` (`../../lib/ruby/3.1.0/psych/visitors/to_ruby.rb`) ← `block in revive_hash` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `revive_hash` (`../../lib/ruby/3.1.0/psych/visitors/to_ruby.rb`) ← `visit_Psych_Nodes_Mapping` ← `visit` (`../../lib/ruby/3.1.0/psych/visitors/visitor.rb`) ← `accept` ← `accept` (`../../lib/ruby/3.1.0/psych/visitors/to_ruby.rb`) ← `block in revive_hash` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `revive_hash` (`../../lib/ruby/3.1.0/psych/visitors/to_ruby.rb`) ← `visit_Psych_Nodes_Mapping` ← `visit` (`../../lib/ruby/3.1.0/psych/visitors/visitor.rb`) ← `accept` ← `accept` (`../../lib/ruby/3.1.0/psych/visitors/to_ruby.rb`) ← `visit_Psych_Nodes_Document` ← `visit` (`../../lib/ruby/3.1.0/psych/visitors/visitor.rb`) ← `accept` ← `accept` (`../../lib/ruby/3.1.0/psych/visitors/to_ruby.rb`) ← `safe_load` (`../../lib/ruby/3.1.0/psych.rb`) ← `yaml_safe_load!` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/config_loader.rb`) ← `yaml_safe_load` ← `load_yaml_configuration` ← `load_file` ← `default_configuration` ← `force_default_config!` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/config_store.rb`) ← `act_on_options` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli.rb`) ← `block in run` ← `profile_if_needed` ← `run` ← `block in <top (required)>` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/exe/rubocop`) ← `realtime` (`../../lib/ruby/3.1.0/benchmark.rb`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 0.8% |       1 | `(unknown) [c function]` ← `move_pos` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/range_help.rb`) ← `final_pos` ← `range_with_surrounding_space` ← `check_operator` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/layout/space_around_operators.rb`) ← `on_special_asgn` ← `on_send` ← `(unknown) [c function]` ← `block (2 levels) in trigger_responding_cops` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`) ← `with_cop_error_handling` ← `block in trigger_responding_cops` ← `(unknown) [c function]` ← `trigger_responding_cops` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`) ← `on_send` ← `block in on_dstr` ← `(unknown) [c function]` ← `on_dstr` ← `on_begin` ← `on_if` ← `on_if` ← `block in on_dstr` ← `(unknown) [c function]` ← `on_dstr` ← `on_begin` ← `on_block` ← `on_block` ← `block in on_dstr` ← `(unknown) [c function]` ← `on_dstr` ← `on_begin` ← `on_def` ← `on_def` ← `block in on_dstr` ← `(unknown) [c function]` ← `on_dstr` ← `on_begin` ← `on_while` ← `on_sclass` ← `block in on_dstr` ← `(unknown) [c function]` ← `on_dstr` ← `on_begin` ← `on_class` ← `on_class` ← `block in on_dstr` ← `(unknown) [c function]` ← `on_dstr` ← `on_begin` ← `on_while` ← `on_module` ← `block in on_dstr` ← `(unknown) [c function]` ← `on_dstr` ← `on_begin` ← `walk` (`/var/lib/gems/3.1.0/gems/rubocop-ast-1.49.1/lib/rubocop/ast/traversal.rb`) ← `investigate` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`) ← `investigate_partial` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cop/team.rb`) ← `investigate` ← `block in inspect_file` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `inspect_file` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `block in do_inspection_loop` ← `block in iterate_until_no_changes` ← `(unknown) [c function]` ← `iterate_until_no_changes` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `do_inspection_loop` ← `block in file_offenses` ← `file_offense_cache` ← `file_offenses` ← `process_file` ← `block in each_inspected_file` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `(unknown) [c function]` ← `each_inspected_file` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `inspect_files` ← `run` ← `block in execute_runner` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb`) ← `with_redirect` ← `execute_runner` ← `run` ← `run` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/command.rb`) ← `run` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli/environment.rb`) ← `run_command` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli.rb`) ← `execute_runners` ← `block in run` ← `profile_if_needed` ← `run` ← `block in <top (required)>` (`/var/lib/gems/3.1.0/gems/rubocop-1.65.1/exe/rubocop`) ← `realtime` (`../../lib/ruby/3.1.0/benchmark.rb`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
