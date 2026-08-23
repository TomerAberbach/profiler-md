# Sampling profile

Collected 136 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Native           | 54.4% |      74 |
| Third-party      | 33.8% |      46 |
| Unknown          |  6.6% |       9 |
| Standard library |  5.1% |       7 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|     % | Samples | Function                                                      | Location                                                                      |
| ----: | ------: | ------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| 16.9% |      23 | `Kernel#require_relative [c function]`                        | `<unknown>`                                                                   |
|  5.1% |       7 | `Kernel#require [c function]`                                 | `<unknown>`                                                                   |
|  3.7% |       5 | `String#[] [c function]`                                      | `<unknown>`                                                                   |
|  2.9% |       4 | `Module#class_eval [c function]`                              | `<unknown>`                                                                   |
|  2.9% |       4 | `String#encode [c function]`                                  | `<unknown>`                                                                   |
|  2.9% |       4 | `Parser::Lexer#advance`                                       | `../bundle/gems/parser-3.3.12.0/lib/parser/lexer-F1.rb`                       |
|  2.2% |       3 | `Array#index [c function]`                                    | `<unknown>`                                                                   |
|  2.2% |       3 | `Parser::Source::Buffer#line_index_for_position`              | `../bundle/gems/parser-3.3.12.0/lib/parser/source/buffer.rb`                  |
|  1.5% |       2 | `Array#each [c function]`                                     | `<unknown>`                                                                   |
|  1.5% |       2 | `block (2 levels) in traverse`                                | `../bundle/gems/rubocop-1.65.1/lib/rubocop/yaml_duplication_checker.rb`       |
|  1.5% |       2 | `block in on_send`                                            | `<unknown>`                                                                   |
|  1.5% |       2 | `Enumerable#map [c function]`                                 | `<unknown>`                                                                   |
|  1.5% |       2 | `Kernel#public_send [c function]`                             | `<unknown>`                                                                   |
|  1.5% |       2 | `Module#append_features [c function]`                         | `<unknown>`                                                                   |
|  1.5% |       2 | `String#index [c function]`                                   | `<unknown>`                                                                   |
|  1.5% |       2 | `StringScanner#skip [c function]`                             | `<unknown>`                                                                   |
|  1.5% |       2 | `Symbol#start_with? [c function]`                             | `<unknown>`                                                                   |
|  1.5% |       2 | `RuboCop::Cop::Style::ConditionalAssignment#assignment_type?` | `<unknown>`                                                                   |
|  1.5% |       2 | `RuboCop::AST::Descendence#visit_descendants_of_types`        | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb` |
|  0.7% |       1 | `Array#<=> [c function]`                                      | `<unknown>`                                                                   |

#### Categories

##### Native

|     % | Samples | Function                               | Location    |
| ----: | ------: | -------------------------------------- | ----------- |
| 16.9% |      23 | `Kernel#require_relative [c function]` | `<unknown>` |
|  5.1% |       7 | `Kernel#require [c function]`          | `<unknown>` |
|  3.7% |       5 | `String#[] [c function]`               | `<unknown>` |
|  2.9% |       4 | `Module#class_eval [c function]`       | `<unknown>` |
|  2.9% |       4 | `String#encode [c function]`           | `<unknown>` |
|  2.2% |       3 | `Array#index [c function]`             | `<unknown>` |
|  1.5% |       2 | `Array#each [c function]`              | `<unknown>` |
|  1.5% |       2 | `Enumerable#map [c function]`          | `<unknown>` |
|  1.5% |       2 | `Kernel#public_send [c function]`      | `<unknown>` |
|  1.5% |       2 | `Module#append_features [c function]`  | `<unknown>` |
|  1.5% |       2 | `String#index [c function]`            | `<unknown>` |
|  1.5% |       2 | `StringScanner#skip [c function]`      | `<unknown>` |
|  1.5% |       2 | `Symbol#start_with? [c function]`      | `<unknown>` |
|  0.7% |       1 | `Array#<=> [c function]`               | `<unknown>` |
|  0.7% |       1 | `Array#== [c function]`                | `<unknown>` |
|  0.7% |       1 | `Array#include? [c function]`          | `<unknown>` |
|  0.7% |       1 | `Array#select [c function]`            | `<unknown>` |
|  0.7% |       1 | `Enumerator#each [c function]`         | `<unknown>` |
|  0.7% |       1 | `Enumerable#to_a [c function]`         | `<unknown>` |
|  0.7% |       1 | `File#initialize [c function]`         | `<unknown>` |

##### Third-party

|    % | Samples | Function                                               | Location                                                                                  |
| ---: | ------: | ------------------------------------------------------ | ----------------------------------------------------------------------------------------- |
| 2.9% |       4 | `Parser::Lexer#advance`                                | `../bundle/gems/parser-3.3.12.0/lib/parser/lexer-F1.rb`                                   |
| 2.2% |       3 | `Parser::Source::Buffer#line_index_for_position`       | `../bundle/gems/parser-3.3.12.0/lib/parser/source/buffer.rb`                              |
| 1.5% |       2 | `block (2 levels) in traverse`                         | `../bundle/gems/rubocop-1.65.1/lib/rubocop/yaml_duplication_checker.rb`                   |
| 1.5% |       2 | `RuboCop::AST::Descendence#visit_descendants_of_types` | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb`             |
| 0.7% |       1 | `block in each_argument_node`                          | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/multiline_element_indentation.rb`    |
| 0.7% |       1 | `block in on_if`                                       | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/style/redundant_self.rb`                   |
| 0.7% |       1 | `RuboCop::AST::Node#first_line`                        | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node.rb`                               |
| 0.7% |       1 | `block in find_variable`                               | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/variable_force/variable_table.rb`          |
| 0.7% |       1 | `RuboCop::Cop::MultilineExpressionIndentation#on_send` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/multiline_expression_indentation.rb` |
| 0.7% |       1 | `RuboCop::Cop::Style::RedundantRegexpEscape#on_regexp` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/style/redundant_regexp_escape.rb`          |
| 0.7% |       1 | `AST::Node#initialize`                                 | `../bundle/gems/ast-2.4.3/lib/ast/node.rb`                                                |
| 0.7% |       1 | `RuboCop::AST::Node#updated`                           | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node.rb`                               |
| 0.7% |       1 | `Parser::Builders::Default#prefix_string_map`          | `../bundle/gems/parser-3.3.12.0/lib/parser/builders/default.rb`                           |
| 0.7% |       1 | `Parser::Lexer#emit`                                   | `../bundle/gems/parser-3.3.12.0/lib/parser/lexer-F1.rb`                                   |
| 0.7% |       1 | `Parser::Lexer#emit_instance_var`                      | `../bundle/gems/parser-3.3.12.0/lib/parser/lexer-F1.rb`                                   |
| 0.7% |       1 | `Parser::Lexer::StackState#pop`                        | `../bundle/gems/parser-3.3.12.0/lib/parser/lexer/stack_state.rb`                          |
| 0.7% |       1 | `Parser::Source::Buffer#slice`                         | `../bundle/gems/parser-3.3.12.0/lib/parser/source/buffer.rb`                              |
| 0.7% |       1 | `Parser::Source::Buffer#column_for_position`           | `../bundle/gems/parser-3.3.12.0/lib/parser/source/buffer.rb`                              |
| 0.7% |       1 | `RuboCop::Cop::Base.cop_name`                          | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/base.rb`                                   |
| 0.7% |       1 | `RuboCop::Cop::Base.department`                        | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/base.rb`                                   |

##### Unknown

|    % | Samples | Function                                                      | Location    |
| ---: | ------: | ------------------------------------------------------------- | ----------- |
| 1.5% |       2 | `block in on_send`                                            | `<unknown>` |
| 1.5% |       2 | `RuboCop::Cop::Style::ConditionalAssignment#assignment_type?` | `<unknown>` |
| 0.7% |       1 | `String#unpack`                                               | `<unknown>` |
| 0.7% |       1 | `RuboCop::Cop::Style::NumericPredicate#comparison`            | `<unknown>` |
| 0.7% |       1 | `block in private_class_methods`                              | `<unknown>` |
| 0.7% |       1 | `RuboCop::AST::Node#proc?`                                    | `<unknown>` |
| 0.7% |       1 | `RuboCop::Cop::Commissioner#on_send`                          | `<unknown>` |

##### Standard library

|    % | Samples | Function                                | Location                                      |
| ---: | ------: | --------------------------------------- | --------------------------------------------- |
| 0.7% |       1 | `block in merge`                        | `../lib/ruby/3.4.0/set.rb`                    |
| 0.7% |       1 | `block in parse_in_order`               | `../lib/ruby/3.4.0/optparse.rb`               |
| 0.7% |       1 | `ERB::Compiler::Buffer#close`           | `../lib/ruby/3.4.0/erb/compiler.rb`           |
| 0.7% |       1 | `Psych::Visitors::ToRuby#accept`        | `../lib/ruby/3.4.0/psych/visitors/to_ruby.rb` |
| 0.7% |       1 | `Psych::Nodes::Node#initialize`         | `../lib/ruby/3.4.0/psych/nodes/node.rb`       |
| 0.7% |       1 | `Psych::TreeBuilder#set_start_location` | `../lib/ruby/3.4.0/psych/tree_builder.rb`     |
| 0.7% |       1 | `Psych::Visitors::ToRuby#resolve_class` | `../lib/ruby/3.4.0/psych/visitors/to_ruby.rb` |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `Parser::Lexer#advance` (`../bundle/gems/parser-3.3.12.0/lib/parser/lexer-F1.rb`)

|      % | Samples | Location                                                      |
| -----: | ------: | ------------------------------------------------------------- |
| 100.0% |       4 | `../bundle/gems/parser-3.3.12.0/lib/parser/lexer-F1.rb:14654` |

##### `Parser::Source::Buffer#line_index_for_position` (`../bundle/gems/parser-3.3.12.0/lib/parser/source/buffer.rb`)

|      % | Samples | Location                                                         |
| -----: | ------: | ---------------------------------------------------------------- |
| 100.0% |       3 | `../bundle/gems/parser-3.3.12.0/lib/parser/source/buffer.rb:350` |

##### `block (2 levels) in traverse` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/yaml_duplication_checker.rb`)

|      % | Samples | Location                                                                   |
| -----: | ------: | -------------------------------------------------------------------------- |
| 100.0% |       2 | `../bundle/gems/rubocop-1.65.1/lib/rubocop/yaml_duplication_checker.rb:25` |

##### `block in on_send` (`<unknown>`)

|      % | Samples | Location |
| -----: | ------: | -------- |
| 100.0% |       2 | 171      |

##### `RuboCop::Cop::Style::ConditionalAssignment#assignment_type?` (`<unknown>`)

|      % | Samples | Location |
| -----: | ------: | -------- |
| 100.0% |       2 | 238      |

##### `RuboCop::AST::Descendence#visit_descendants_of_types` (`../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb`)

|      % | Samples | Location                                                                          |
| -----: | ------: | --------------------------------------------------------------------------------- |
| 100.0% |       2 | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb:131` |

##### `block in each_argument_node` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/multiline_element_indentation.rb`)

|      % | Samples | Location                                                                                  |
| -----: | ------: | ----------------------------------------------------------------------------------------- |
| 100.0% |       1 | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/multiline_element_indentation.rb:23` |

##### `block in on_if` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/style/redundant_self.rb`)

|      % | Samples | Location                                                                    |
| -----: | ------: | --------------------------------------------------------------------------- |
| 100.0% |       1 | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/style/redundant_self.rb:137` |

##### `RuboCop::AST::Node#first_line` (`../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node.rb`)

|      % | Samples | Location                                                        |
| -----: | ------: | --------------------------------------------------------------- |
| 100.0% |       1 | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node.rb:350` |

##### `block in find_variable` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/variable_force/variable_table.rb`)

|      % | Samples | Location                                                                             |
| -----: | ------: | ------------------------------------------------------------------------------------ |
| 100.0% |       1 | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/variable_force/variable_table.rb:104` |

##### `RuboCop::Cop::MultilineExpressionIndentation#on_send` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/multiline_expression_indentation.rb`)

|      % | Samples | Location                                                                                     |
| -----: | ------: | -------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/multiline_expression_indentation.rb:22` |

##### `RuboCop::Cop::Style::RedundantRegexpEscape#on_regexp` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/style/redundant_regexp_escape.rb`)

|      % | Samples | Location                                                                            |
| -----: | ------: | ----------------------------------------------------------------------------------- |
| 100.0% |       1 | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/style/redundant_regexp_escape.rb:56` |

##### `AST::Node#initialize` (`../bundle/gems/ast-2.4.3/lib/ast/node.rb`)

|      % | Samples | Location                                      |
| -----: | ------: | --------------------------------------------- |
| 100.0% |       1 | `../bundle/gems/ast-2.4.3/lib/ast/node.rb:80` |

##### `RuboCop::AST::Node#updated` (`../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node.rb`)

|      % | Samples | Location                                                        |
| -----: | ------: | --------------------------------------------------------------- |
| 100.0% |       1 | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node.rb:251` |

##### `Parser::Builders::Default#prefix_string_map` (`../bundle/gems/parser-3.3.12.0/lib/parser/builders/default.rb`)

|      % | Samples | Location                                                             |
| -----: | ------: | -------------------------------------------------------------------- |
| 100.0% |       1 | `../bundle/gems/parser-3.3.12.0/lib/parser/builders/default.rb:1909` |

##### `Parser::Lexer#emit` (`../bundle/gems/parser-3.3.12.0/lib/parser/lexer-F1.rb`)

|      % | Samples | Location                                                      |
| -----: | ------: | ------------------------------------------------------------- |
| 100.0% |       1 | `../bundle/gems/parser-3.3.12.0/lib/parser/lexer-F1.rb:14683` |

##### `Parser::Lexer#emit_instance_var` (`../bundle/gems/parser-3.3.12.0/lib/parser/lexer-F1.rb`)

|      % | Samples | Location                                                      |
| -----: | ------: | ------------------------------------------------------------- |
| 100.0% |       1 | `../bundle/gems/parser-3.3.12.0/lib/parser/lexer-F1.rb:14798` |

##### `Parser::Lexer::StackState#pop` (`../bundle/gems/parser-3.3.12.0/lib/parser/lexer/stack_state.rb`)

|      % | Samples | Location                                                            |
| -----: | ------: | ------------------------------------------------------------------- |
| 100.0% |       1 | `../bundle/gems/parser-3.3.12.0/lib/parser/lexer/stack_state.rb:27` |

##### `Parser::Source::Buffer#slice` (`../bundle/gems/parser-3.3.12.0/lib/parser/source/buffer.rb`)

|      % | Samples | Location                                                         |
| -----: | ------: | ---------------------------------------------------------------- |
| 100.0% |       1 | `../bundle/gems/parser-3.3.12.0/lib/parser/source/buffer.rb:214` |

##### `Parser::Source::Buffer#column_for_position` (`../bundle/gems/parser-3.3.12.0/lib/parser/source/buffer.rb`)

|      % | Samples | Location                                                         |
| -----: | ------: | ---------------------------------------------------------------- |
| 100.0% |       1 | `../bundle/gems/parser-3.3.12.0/lib/parser/source/buffer.rb:250` |

##### `RuboCop::Cop::Base.cop_name` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/base.rb`)

|      % | Samples | Location                                                   |
| -----: | ------: | ---------------------------------------------------------- |
| 100.0% |       1 | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/base.rb:99` |

##### `RuboCop::Cop::Base.department` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/base.rb`)

|      % | Samples | Location                                                    |
| -----: | ------: | ----------------------------------------------------------- |
| 100.0% |       1 | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/base.rb:103` |

##### `String#unpack` (`<unknown>`)

|      % | Samples | Location |
| -----: | ------: | -------- |
| 100.0% |       1 | 26       |

##### `RuboCop::Cop::Style::NumericPredicate#comparison` (`<unknown>`)

|      % | Samples | Location |
| -----: | ------: | -------- |
| 100.0% |       1 | 188      |

##### `block in private_class_methods` (`<unknown>`)

|      % | Samples | Location |
| -----: | ------: | -------- |
| 100.0% |       1 | 60       |

##### `RuboCop::AST::Node#proc?` (`<unknown>`)

|      % | Samples | Location |
| -----: | ------: | -------- |
| 100.0% |       1 | 630      |

##### `RuboCop::Cop::Commissioner#on_send` (`<unknown>`)

|      % | Samples | Location |
| -----: | ------: | -------- |
| 100.0% |       1 | 74       |

##### `block in merge` (`../lib/ruby/3.4.0/set.rb`)

|      % | Samples | Location                       |
| -----: | ------: | ------------------------------ |
| 100.0% |       1 | `../lib/ruby/3.4.0/set.rb:605` |

##### `block in parse_in_order` (`../lib/ruby/3.4.0/optparse.rb`)

|      % | Samples | Location                             |
| -----: | ------: | ------------------------------------ |
| 100.0% |       1 | `../lib/ruby/3.4.0/optparse.rb:1791` |

##### `ERB::Compiler::Buffer#close` (`../lib/ruby/3.4.0/erb/compiler.rb`)

|      % | Samples | Location                                |
| -----: | ------: | --------------------------------------- |
| 100.0% |       1 | `../lib/ruby/3.4.0/erb/compiler.rb:302` |

##### `Psych::Visitors::ToRuby#accept` (`../lib/ruby/3.4.0/psych/visitors/to_ruby.rb`)

|      % | Samples | Location                                         |
| -----: | ------: | ------------------------------------------------ |
| 100.0% |       1 | `../lib/ruby/3.4.0/psych/visitors/to_ruby.rb:49` |

##### `Psych::Nodes::Node#initialize` (`../lib/ruby/3.4.0/psych/nodes/node.rb`)

|      % | Samples | Location                                   |
| -----: | ------: | ------------------------------------------ |
| 100.0% |       1 | `../lib/ruby/3.4.0/psych/nodes/node.rb:34` |

##### `Psych::TreeBuilder#set_start_location` (`../lib/ruby/3.4.0/psych/tree_builder.rb`)

|      % | Samples | Location                                      |
| -----: | ------: | --------------------------------------------- |
| 100.0% |       1 | `../lib/ruby/3.4.0/psych/tree_builder.rb:130` |

##### `Psych::Visitors::ToRuby#resolve_class` (`../lib/ruby/3.4.0/psych/visitors/to_ruby.rb`)

|      % | Samples | Location                                          |
| -----: | ------: | ------------------------------------------------- |
| 100.0% |       1 | `../lib/ruby/3.4.0/psych/visitors/to_ruby.rb:426` |

### Total samples

Functions ranked by total samples taken in the function and all its callees. Calls within a recursion cycle are excluded from totals, since they re-count the same work.

|     % | Samples | Function                                              | Location                                                                  |
| ----: | ------: | ----------------------------------------------------- | ------------------------------------------------------------------------- |
| 99.3% |     135 | `<main>`                                              | `rubocop`                                                                 |
| 97.1% |     132 | `Kernel#load [c function]`                            | `<unknown>`                                                               |
| 63.2% |      86 | `Benchmark.realtime`                                  | `../lib/ruby/3.4.0/benchmark.rb`                                          |
| 63.2% |      86 | `block in <top (required)>`                           | `../bundle/gems/rubocop-1.65.1/exe/rubocop`                               |
| 63.2% |      86 | `RuboCop::CLI#run`                                    | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`                        |
| 62.5% |      85 | `RuboCop::CLI#profile_if_needed`                      | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`                        |
| 62.5% |      85 | `block in run`                                        | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`                        |
| 58.8% |      80 | `RuboCop::CLI#execute_runners`                        | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`                        |
| 58.8% |      80 | `RuboCop::CLI#run_command`                            | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`                        |
| 58.8% |      80 | `RuboCop::CLI::Environment#run`                       | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/environment.rb`            |
| 58.8% |      80 | `RuboCop::CLI::Command.run`                           | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command.rb`                |
| 58.1% |      79 | `Enumerable#reduce [c function]`                      | `<unknown>`                                                               |
| 58.1% |      79 | `RuboCop::CLI::Command::ExecuteRunner#run`            | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb` |
| 58.1% |      79 | `RuboCop::CLI::Command::ExecuteRunner#execute_runner` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb` |
| 58.1% |      79 | `RuboCop::CLI::Command::ExecuteRunner#with_redirect`  | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb` |
| 58.1% |      79 | `block in execute_runner`                             | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb` |
| 58.1% |      79 | `RuboCop::Runner#run`                                 | `../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`                     |
| 58.1% |      79 | `RuboCop::Runner#each_inspected_file`                 | `../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`                     |
| 58.1% |      79 | `RuboCop::Runner#inspect_files`                       | `../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`                     |
| 19.1% |      26 | `Kernel#require_relative [c function]`                | `<unknown>`                                                               |

#### Categories

##### Native

|     % | Samples | Function                                     | Location    |
| ----: | ------: | -------------------------------------------- | ----------- |
| 97.1% |     132 | `Kernel#load [c function]`                   | `<unknown>` |
| 58.1% |      79 | `Enumerable#reduce [c function]`             | `<unknown>` |
| 19.1% |      26 | `Kernel#require_relative [c function]`       | `<unknown>` |
| 17.6% |      24 | `Array#each [c function]`                    | `<unknown>` |
| 14.7% |      20 | `Kernel#public_send [c function]`            | `<unknown>` |
| 12.5% |      17 | `Racc::Parser#_racc_do_parse_c [c function]` | `<unknown>` |
|  5.1% |       7 | `Kernel#require [c function]`                | `<unknown>` |
|  3.7% |       5 | `Array#select [c function]`                  | `<unknown>` |
|  3.7% |       5 | `Class#new [c function]`                     | `<unknown>` |
|  3.7% |       5 | `String#[] [c function]`                     | `<unknown>` |
|  2.9% |       4 | `Module#class_eval [c function]`             | `<unknown>` |
|  2.9% |       4 | `String#encode [c function]`                 | `<unknown>` |
|  2.2% |       3 | `Array#index [c function]`                   | `<unknown>` |
|  2.2% |       3 | `Enumerator#each [c function]`               | `<unknown>` |
|  2.2% |       3 | `Thread::Mutex#synchronize [c function]`     | `<unknown>` |
|  1.5% |       2 | `Enumerable#map [c function]`                | `<unknown>` |
|  1.5% |       2 | `Module#include [c function]`                | `<unknown>` |
|  1.5% |       2 | `Module#append_features [c function]`        | `<unknown>` |
|  1.5% |       2 | `Psych::Parser#_native_parse [c function]`   | `<unknown>` |
|  1.5% |       2 | `String#index [c function]`                  | `<unknown>` |

##### Third-party

|     % | Samples | Function                                              | Location                                                                  |
| ----: | ------: | ----------------------------------------------------- | ------------------------------------------------------------------------- |
| 63.2% |      86 | `block in <top (required)>`                           | `../bundle/gems/rubocop-1.65.1/exe/rubocop`                               |
| 63.2% |      86 | `RuboCop::CLI#run`                                    | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`                        |
| 62.5% |      85 | `RuboCop::CLI#profile_if_needed`                      | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`                        |
| 62.5% |      85 | `block in run`                                        | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`                        |
| 58.8% |      80 | `RuboCop::CLI#execute_runners`                        | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`                        |
| 58.8% |      80 | `RuboCop::CLI#run_command`                            | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`                        |
| 58.8% |      80 | `RuboCop::CLI::Environment#run`                       | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/environment.rb`            |
| 58.8% |      80 | `RuboCop::CLI::Command.run`                           | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command.rb`                |
| 58.1% |      79 | `RuboCop::CLI::Command::ExecuteRunner#run`            | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb` |
| 58.1% |      79 | `RuboCop::CLI::Command::ExecuteRunner#execute_runner` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb` |
| 58.1% |      79 | `RuboCop::CLI::Command::ExecuteRunner#with_redirect`  | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb` |
| 58.1% |      79 | `block in execute_runner`                             | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb` |
| 58.1% |      79 | `RuboCop::Runner#run`                                 | `../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`                     |
| 58.1% |      79 | `RuboCop::Runner#each_inspected_file`                 | `../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`                     |
| 58.1% |      79 | `RuboCop::Runner#inspect_files`                       | `../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`                     |
|  8.1% |      11 | `Parser::Base#next_token`                             | `../bundle/gems/parser-3.3.12.0/lib/parser/base.rb`                       |
|  7.4% |      10 | `Parser::Lexer#advance`                               | `../bundle/gems/parser-3.3.12.0/lib/parser/lexer-F1.rb`                   |
|  5.1% |       7 | `Parser::Source::Buffer#slice`                        | `../bundle/gems/parser-3.3.12.0/lib/parser/source/buffer.rb`              |
|  3.7% |       5 | `Parser::Source::Buffer#line_for_position`            | `../bundle/gems/parser-3.3.12.0/lib/parser/source/buffer.rb`              |
|  3.7% |       5 | `Parser::Source::Buffer#line_index_for_position`      | `../bundle/gems/parser-3.3.12.0/lib/parser/source/buffer.rb`              |

##### Unknown

|    % | Samples | Function                                                      | Location    |
| ---: | ------: | ------------------------------------------------------------- | ----------- |
| 2.2% |       3 | `RuboCop::AST::NodePattern::Parser#next_token`                | `<unknown>` |
| 1.5% |       2 | `block in on_send`                                            | `<unknown>` |
| 1.5% |       2 | `RuboCop::Cop::Style::ConditionalAssignment#assignment_type?` | `<unknown>` |
| 0.7% |       1 | `Psych::TreeBuilder#start_mapping`                            | `<unknown>` |
| 0.7% |       1 | `Psych::TreeBuilder#start_sequence`                           | `<unknown>` |
| 0.7% |       1 | `String#unpack`                                               | `<unknown>` |
| 0.7% |       1 | `Kernel#tap`                                                  | `<unknown>` |
| 0.7% |       1 | `RuboCop::AST::Node#lambda_or_proc?`                          | `<unknown>` |
| 0.7% |       1 | `RuboCop::Cop::Style::NumericPredicate#comparison`            | `<unknown>` |
| 0.7% |       1 | `block in private_class_methods`                              | `<unknown>` |
| 0.7% |       1 | `RuboCop::AST::NodePattern::Parser#emit_list`                 | `<unknown>` |
| 0.7% |       1 | `RuboCop::AST::Node#proc?`                                    | `<unknown>` |
| 0.7% |       1 | `RuboCop::Cop::Commissioner#on_send`                          | `<unknown>` |

##### Standard library

|     % | Samples | Function                           | Location                                             |
| ----: | ------: | ---------------------------------- | ---------------------------------------------------- |
| 63.2% |      86 | `Benchmark.realtime`               | `../lib/ruby/3.4.0/benchmark.rb`                     |
|  2.2% |       3 | `block in activate_bin_path`       | `../lib/ruby/3.4.0/rubygems.rb`                      |
|  2.2% |       3 | `Gem.activate_bin_path`            | `../lib/ruby/3.4.0/rubygems.rb`                      |
|  2.2% |       3 | `Psych.safe_load`                  | `../lib/ruby/3.4.0/psych.rb`                         |
|  1.5% |       2 | `Psych.parse`                      | `../lib/ruby/3.4.0/psych.rb`                         |
|  1.5% |       2 | `Psych.parse_stream`               | `../lib/ruby/3.4.0/psych.rb`                         |
|  1.5% |       2 | `Psych::Parser#parse`              | `../lib/ruby/3.4.0/psych/parser.rb`                  |
|  1.5% |       2 | `Gem.finish_resolve`               | `../lib/ruby/3.4.0/rubygems.rb`                      |
|  1.5% |       2 | `Gem::RequestSet#resolve_current`  | `../lib/ruby/3.4.0/rubygems/request_set.rb`          |
|  0.7% |       1 | `block (2 levels) in each_gemspec` | `../lib/ruby/3.4.0/rubygems/specification.rb`        |
|  0.7% |       1 | `block in map_stubs`               | `../lib/ruby/3.4.0/rubygems/specification_record.rb` |
|  0.7% |       1 | `block in merge`                   | `../lib/ruby/3.4.0/set.rb`                           |
|  0.7% |       1 | `Gem::StubSpecification#valid?`    | `../lib/ruby/3.4.0/rubygems/stub_specification.rb`   |
|  0.7% |       1 | `ERB#initialize`                   | `../lib/ruby/3.4.0/erb.rb`                           |
|  0.7% |       1 | `Psych::Nodes::Mapping#initialize` | `../lib/ruby/3.4.0/psych/nodes/mapping.rb`           |
|  0.7% |       1 | `block in parse_in_order`          | `../lib/ruby/3.4.0/optparse.rb`                      |
|  0.7% |       1 | `OptionParser#parse!`              | `../lib/ruby/3.4.0/optparse.rb`                      |
|  0.7% |       1 | `ERB::Compiler#compile`            | `../lib/ruby/3.4.0/erb/compiler.rb`                  |
|  0.7% |       1 | `ERB::Compiler::Buffer#close`      | `../lib/ruby/3.4.0/erb/compiler.rb`                  |
|  0.7% |       1 | `OptionParser#order!`              | `../lib/ruby/3.4.0/optparse.rb`                      |

#### Callers

Callers ranked by the samples taken in each function and its callees during calls from that caller. Percentages are of the function's total and can exceed 100% for calls within a recursion cycle.

##### `Kernel#load [c function]` (`<unknown>`)

|      % | Samples | Calls | Caller   | Location  |
| -----: | ------: | ----: | -------- | --------- |
| 100.0% |     132 |     1 | `<main>` | `rubocop` |

##### `Benchmark.realtime` (`../lib/ruby/3.4.0/benchmark.rb`)

|      % | Samples | Calls | Caller                     | Location    |
| -----: | ------: | ----: | -------------------------- | ----------- |
| 100.0% |      86 |     1 | `Kernel#load [c function]` | `<unknown>` |

##### `block in <top (required)>` (`../bundle/gems/rubocop-1.65.1/exe/rubocop`)

|      % | Samples | Calls | Caller               | Location                         |
| -----: | ------: | ----: | -------------------- | -------------------------------- |
| 100.0% |      86 |     1 | `Benchmark.realtime` | `../lib/ruby/3.4.0/benchmark.rb` |

##### `RuboCop::CLI#run` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`)

|      % | Samples | Calls | Caller                      | Location                                    |
| -----: | ------: | ----: | --------------------------- | ------------------------------------------- |
| 100.0% |      86 |     1 | `block in <top (required)>` | `../bundle/gems/rubocop-1.65.1/exe/rubocop` |

##### `RuboCop::CLI#profile_if_needed` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`)

|      % | Samples | Calls | Caller             | Location                                           |
| -----: | ------: | ----: | ------------------ | -------------------------------------------------- |
| 100.0% |      85 |     1 | `RuboCop::CLI#run` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb` |

##### `block in run` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`)

|      % | Samples | Calls | Caller                           | Location                                           |
| -----: | ------: | ----: | -------------------------------- | -------------------------------------------------- |
| 100.0% |      85 |     1 | `RuboCop::CLI#profile_if_needed` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb` |

##### `RuboCop::CLI#execute_runners` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`)

|      % | Samples | Calls | Caller         | Location                                           |
| -----: | ------: | ----: | -------------- | -------------------------------------------------- |
| 100.0% |      80 |     1 | `block in run` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb` |

##### `RuboCop::CLI#run_command` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`)

|     % | Samples | Calls | Caller                            | Location                                           |
| ----: | ------: | ----: | --------------------------------- | -------------------------------------------------- |
| 98.8% |      79 |     1 | `RuboCop::CLI#execute_runners`    | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb` |
|  1.3% |       1 |     1 | `RuboCop::CLI#suggest_extensions` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb` |

##### `RuboCop::CLI::Environment#run` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/environment.rb`)

|      % | Samples | Calls | Caller                     | Location                                           |
| -----: | ------: | ----: | -------------------------- | -------------------------------------------------- |
| 100.0% |      80 |     2 | `RuboCop::CLI#run_command` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb` |

##### `RuboCop::CLI::Command.run` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command.rb`)

|      % | Samples | Calls | Caller                          | Location                                                       |
| -----: | ------: | ----: | ------------------------------- | -------------------------------------------------------------- |
| 100.0% |      80 |     2 | `RuboCop::CLI::Environment#run` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/environment.rb` |

##### `Enumerable#reduce [c function]` (`<unknown>`)

|      % | Samples | Calls | Caller                                | Location                                              |
| -----: | ------: | ----: | ------------------------------------- | ----------------------------------------------------- |
| 100.0% |      79 |     1 | `RuboCop::Runner#each_inspected_file` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb` |

##### `RuboCop::CLI::Command::ExecuteRunner#run` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb`)

|      % | Samples | Calls | Caller                      | Location                                                   |
| -----: | ------: | ----: | --------------------------- | ---------------------------------------------------------- |
| 100.0% |      79 |     1 | `RuboCop::CLI::Command.run` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command.rb` |

##### `RuboCop::CLI::Command::ExecuteRunner#execute_runner` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb`)

|      % | Samples | Calls | Caller                                     | Location                                                                  |
| -----: | ------: | ----: | ------------------------------------------ | ------------------------------------------------------------------------- |
| 100.0% |      79 |     1 | `RuboCop::CLI::Command::ExecuteRunner#run` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb` |

##### `RuboCop::CLI::Command::ExecuteRunner#with_redirect` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb`)

|      % | Samples | Calls | Caller                                                | Location                                                                  |
| -----: | ------: | ----: | ----------------------------------------------------- | ------------------------------------------------------------------------- |
| 100.0% |      79 |     1 | `RuboCop::CLI::Command::ExecuteRunner#execute_runner` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb` |

##### `block in execute_runner` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb`)

|      % | Samples | Calls | Caller                                               | Location                                                                  |
| -----: | ------: | ----: | ---------------------------------------------------- | ------------------------------------------------------------------------- |
| 100.0% |      79 |     1 | `RuboCop::CLI::Command::ExecuteRunner#with_redirect` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb` |

##### `RuboCop::Runner#run` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`)

|      % | Samples | Calls | Caller                    | Location                                                                  |
| -----: | ------: | ----: | ------------------------- | ------------------------------------------------------------------------- |
| 100.0% |      79 |     1 | `block in execute_runner` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb` |

##### `RuboCop::Runner#each_inspected_file` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`)

|      % | Samples | Calls | Caller                          | Location                                              |
| -----: | ------: | ----: | ------------------------------- | ----------------------------------------------------- |
| 100.0% |      79 |     1 | `RuboCop::Runner#inspect_files` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb` |

##### `RuboCop::Runner#inspect_files` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`)

|      % | Samples | Calls | Caller                | Location                                              |
| -----: | ------: | ----: | --------------------- | ----------------------------------------------------- |
| 100.0% |      79 |     1 | `RuboCop::Runner#run` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb` |

##### `Kernel#require_relative [c function]` (`<unknown>`)

|      % | Samples | Calls | Caller                        | Location    |
| -----: | ------: | ----: | ----------------------------- | ----------- |
| 215.4% |      56 |     9 | `Kernel#require [c function]` | `<unknown>` |

##### `Array#each [c function]` (`<unknown>`)

|      % | Samples | Calls | Caller                                               | Location                                                                      |
| -----: | ------: | ----: | ---------------------------------------------------- | ----------------------------------------------------------------------------- |
| 725.0% |     174 |    40 | `RuboCop::AST::Traversal#on_dstr`                    | `<unknown>`                                                                   |
| 329.2% |      79 |     1 | `Enumerable#reduce [c function]`                     | `<unknown>`                                                                   |
| 250.0% |      60 |     2 | `Enumerable#flat_map [c function]`                   | `<unknown>`                                                                   |
| 154.2% |      37 |    36 | `RuboCop::Cop::Commissioner#trigger_responding_cops` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`               |
| 141.7% |      34 |    25 | `RuboCop::AST::Descendence#each_child_node`          | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb` |

##### `Kernel#public_send [c function]` (`<unknown>`)

|      % | Samples | Calls | Caller                                        | Location                                                        |
| -----: | ------: | ----: | --------------------------------------------- | --------------------------------------------------------------- |
| 185.0% |      37 |    36 | `block (2 levels) in trigger_responding_cops` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb` |
|   5.0% |       1 |     1 | `block in run_hook`                           | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/force.rb`        |
|   5.0% |       1 |     1 | `block in <=>`                                | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/offense.rb`      |
|   5.0% |       1 |     1 | `block (2 levels) in trigger_restricted_cops` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb` |

##### `Racc::Parser#_racc_do_parse_c [c function]` (`<unknown>`)

|      % | Samples | Calls | Caller                  | Location    |
| -----: | ------: | ----: | ----------------------- | ----------- |
| 117.6% |      20 |     4 | `Racc::Parser#do_parse` | `<unknown>` |

##### `Parser::Base#next_token` (`../bundle/gems/parser-3.3.12.0/lib/parser/base.rb`)

|      % | Samples | Calls | Caller                                       | Location    |
| -----: | ------: | ----: | -------------------------------------------- | ----------- |
| 100.0% |      11 |     5 | `Racc::Parser#_racc_do_parse_c [c function]` | `<unknown>` |

##### `Parser::Lexer#advance` (`../bundle/gems/parser-3.3.12.0/lib/parser/lexer-F1.rb`)

|      % | Samples | Calls | Caller                    | Location                                            |
| -----: | ------: | ----: | ------------------------- | --------------------------------------------------- |
| 100.0% |      10 |     5 | `Parser::Base#next_token` | `../bundle/gems/parser-3.3.12.0/lib/parser/base.rb` |

##### `Kernel#require [c function]` (`<unknown>`)

|       % | Samples | Calls | Caller           | Location    |
| ------: | ------: | ----: | ---------------- | ----------- |
| 1057.1% |      74 |    17 | `Kernel#require` | `<unknown>` |

##### `Parser::Source::Buffer#slice` (`../bundle/gems/parser-3.3.12.0/lib/parser/source/buffer.rb`)

|     % | Samples | Calls | Caller                                         | Location                                                     |
| ----: | ------: | ----: | ---------------------------------------------- | ------------------------------------------------------------ |
| 42.9% |       3 |     3 | `Parser::Source::Range#source`                 | `../bundle/gems/parser-3.3.12.0/lib/parser/source/range.rb`  |
| 28.6% |       2 |     2 | `Parser::Lexer#tok`                            | `../bundle/gems/parser-3.3.12.0/lib/parser/lexer-F1.rb`      |
| 28.6% |       2 |     2 | `Parser::LexerStrings#extend_string_slice_end` | `../bundle/gems/parser-3.3.12.0/lib/parser/lexer-strings.rb` |

##### `Array#select [c function]` (`<unknown>`)

|     % | Samples | Calls | Caller                                     | Location                                                |
| ----: | ------: | ----: | ------------------------------------------ | ------------------------------------------------------- |
| 60.0% |       3 |     1 | `RuboCop::Cop::Base#callbacks_needed`      | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/base.rb` |
| 20.0% |       1 |     1 | `RuboCop::Cop::Team#roundup_relevant_cops` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/team.rb` |
| 20.0% |       1 |     1 | `Gem::Specification.gemspec_stubs_in`      | `../lib/ruby/3.4.0/rubygems/specification.rb`           |

##### `Class#new [c function]` (`<unknown>`)

|      % | Samples | Calls | Caller                                               | Location                                                                |
| -----: | ------: | ----: | ---------------------------------------------------- | ----------------------------------------------------------------------- |
| 360.0% |      18 |     1 | `RuboCop::AST::ProcessedSource.from_file`            | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/processed_source.rb` |
| 140.0% |       7 |     4 | `RuboCop::AST::NodePattern::Macros#def_node_matcher` | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern.rb`     |
|  60.0% |       3 |     3 | `RuboCop::AST::BuilderExtensions#n`                  | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/builder.rb`          |
|  60.0% |       3 |     1 | `RuboCop::Cop::Team#investigate_partial`             | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/team.rb`                 |
|  20.0% |       1 |     1 | `RuboCop::AST::NodePattern#initialize`               | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern.rb`     |

##### `String#[] [c function]` (`<unknown>`)

|     % | Samples | Calls | Caller                             | Location                                                            |
| ----: | ------: | ----: | ---------------------------------- | ------------------------------------------------------------------- |
| 60.0% |       3 |     3 | `RuboCop::Cop::RangeHelp#move_pos` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/range_help.rb` |
| 40.0% |       2 |     2 | `Parser::Source::Buffer#slice`     | `../bundle/gems/parser-3.3.12.0/lib/parser/source/buffer.rb`        |

##### `Parser::Source::Buffer#line_for_position` (`../bundle/gems/parser-3.3.12.0/lib/parser/source/buffer.rb`)

|      % | Samples | Calls | Caller                       | Location                                                    |
| -----: | ------: | ----: | ---------------------------- | ----------------------------------------------------------- |
| 100.0% |       5 |     4 | `Parser::Source::Range#line` | `../bundle/gems/parser-3.3.12.0/lib/parser/source/range.rb` |

##### `Parser::Source::Buffer#line_index_for_position` (`../bundle/gems/parser-3.3.12.0/lib/parser/source/buffer.rb`)

|      % | Samples | Calls | Caller                                     | Location                                                     |
| -----: | ------: | ----: | ------------------------------------------ | ------------------------------------------------------------ |
| 100.0% |       5 |     4 | `Parser::Source::Buffer#line_for_position` | `../bundle/gems/parser-3.3.12.0/lib/parser/source/buffer.rb` |

##### `Module#class_eval [c function]` (`<unknown>`)

|      % | Samples | Calls | Caller                                                | Location                                                                           |
| -----: | ------: | ----: | ----------------------------------------------------- | ---------------------------------------------------------------------------------- |
| 100.0% |       4 |     4 | `RuboCop::AST::NodePattern::MethodDefiner#def_helper` | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern/method_definer.rb` |

##### `String#encode [c function]` (`<unknown>`)

|      % | Samples | Calls | Caller                         | Location                                                     |
| -----: | ------: | ----: | ------------------------------ | ------------------------------------------------------------ |
| 100.0% |       4 |     4 | `Parser::Source::Buffer#slice` | `../bundle/gems/parser-3.3.12.0/lib/parser/source/buffer.rb` |

##### `Array#index [c function]` (`<unknown>`)

|      % | Samples | Calls | Caller                                                    | Location                                                                    |
| -----: | ------: | ----: | --------------------------------------------------------- | --------------------------------------------------------------------------- |
| 100.0% |       3 |     1 | `RuboCop::Cop::Layout::SpaceAfterComma#before_semicolon?` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/layout/space_after_comma.rb` |

##### `Enumerator#each [c function]` (`<unknown>`)

|     % | Samples | Calls | Caller                                                      | Location                                                                     |
| ----: | ------: | ----: | ----------------------------------------------------------- | ---------------------------------------------------------------------------- |
| 66.7% |       2 |     2 | `Enumerable#find [c function]`                              | `<unknown>`                                                                  |
| 66.7% |       2 |     2 | `Enumerable#map [c function]`                               | `<unknown>`                                                                  |
| 66.7% |       2 |     2 | `Enumerable#to_a [c function]`                              | `<unknown>`                                                                  |
| 66.7% |       2 |     2 | `RuboCop::AST::NodePattern::Compiler#enforce_same_captures` | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern/compiler.rb` |
| 33.3% |       1 |     1 | `Enumerable#each_entry [c function]`                        | `<unknown>`                                                                  |

##### `Thread::Mutex#synchronize [c function]` (`<unknown>`)

|      % | Samples | Calls | Caller                  | Location                        |
| -----: | ------: | ----: | ----------------------- | ------------------------------- |
| 100.0% |       3 |     1 | `Gem.activate_bin_path` | `../lib/ruby/3.4.0/rubygems.rb` |

##### `RuboCop::AST::NodePattern::Parser#next_token` (`<unknown>`)

|      % | Samples | Calls | Caller                                       | Location    |
| -----: | ------: | ----: | -------------------------------------------- | ----------- |
| 100.0% |       3 |     3 | `Racc::Parser#_racc_do_parse_c [c function]` | `<unknown>` |

##### `block in activate_bin_path` (`../lib/ruby/3.4.0/rubygems.rb`)

|      % | Samples | Calls | Caller                                   | Location    |
| -----: | ------: | ----: | ---------------------------------------- | ----------- |
| 100.0% |       3 |     1 | `Thread::Mutex#synchronize [c function]` | `<unknown>` |

##### `Gem.activate_bin_path` (`../lib/ruby/3.4.0/rubygems.rb`)

|      % | Samples | Calls | Caller   | Location  |
| -----: | ------: | ----: | -------- | --------- |
| 100.0% |       3 |     1 | `<main>` | `rubocop` |

##### `Psych.safe_load` (`../lib/ruby/3.4.0/psych.rb`)

|     % | Samples | Calls | Caller                                  | Location                                                     |
| ----: | ------: | ----: | --------------------------------------- | ------------------------------------------------------------ |
| 66.7% |       2 |     1 | `block in cache_root_dir_from_config`   | `../bundle/gems/rubocop-1.65.1/lib/rubocop/server/cache.rb`  |
| 33.3% |       1 |     1 | `RuboCop::ConfigLoader.yaml_safe_load!` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/config_loader.rb` |

##### `Enumerable#map [c function]` (`<unknown>`)

|      % | Samples | Calls | Caller                                                       | Location                                                                                              |
| -----: | ------: | ----: | ------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------- |
| 150.0% |       3 |     3 | `block in visit_union`                                       | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern/compiler/node_pattern_subcompiler.rb` |
|  50.0% |       1 |     1 | `RuboCop::AST::NodePattern::MethodDefiner#emit_keyword_list` | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern/method_definer.rb`                    |

##### `Module#include [c function]` (`<unknown>`)

|      % | Samples | Calls | Caller                                 | Location    |
| -----: | ------: | ----: | -------------------------------------- | ----------- |
| 100.0% |       2 |     2 | `Kernel#require_relative [c function]` | `<unknown>` |

##### `Module#append_features [c function]` (`<unknown>`)

|      % | Samples | Calls | Caller                        | Location    |
| -----: | ------: | ----: | ----------------------------- | ----------- |
| 100.0% |       2 |     2 | `Module#include [c function]` | `<unknown>` |

##### `Psych::Parser#_native_parse [c function]` (`<unknown>`)

|      % | Samples | Calls | Caller                | Location                            |
| -----: | ------: | ----: | --------------------- | ----------------------------------- |
| 100.0% |       2 |     2 | `Psych::Parser#parse` | `../lib/ruby/3.4.0/psych/parser.rb` |

##### `String#index [c function]` (`<unknown>`)

|      % | Samples | Calls | Caller                               | Location                                                     |
| -----: | ------: | ----: | ------------------------------------ | ------------------------------------------------------------ |
| 100.0% |       2 |     1 | `Parser::Source::Buffer#line_begins` | `../bundle/gems/parser-3.3.12.0/lib/parser/source/buffer.rb` |

##### `block in on_send` (`<unknown>`)

|      % | Samples | Calls | Caller                    | Location    |
| -----: | ------: | ----: | ------------------------- | ----------- |
| 750.0% |      15 |    14 | `Array#each [c function]` | `<unknown>` |

##### `RuboCop::Cop::Style::ConditionalAssignment#assignment_type?` (`<unknown>`)

|      % | Samples | Calls | Caller                                               | Location                                                                        |
| -----: | ------: | ----: | ---------------------------------------------------- | ------------------------------------------------------------------------------- |
| 100.0% |       2 |     2 | `RuboCop::Cop::Style::ConditionalAssignment#on_send` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/style/conditional_assignment.rb` |

##### `Psych.parse` (`../lib/ruby/3.4.0/psych.rb`)

|     % | Samples | Calls | Caller                                  | Location                                                                |
| ----: | ------: | ----: | --------------------------------------- | ----------------------------------------------------------------------- |
| 50.0% |       1 |     1 | `RuboCop::YAMLDuplicationChecker.check` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/yaml_duplication_checker.rb` |
| 50.0% |       1 |     1 | `Psych.safe_load`                       | `../lib/ruby/3.4.0/psych.rb`                                            |

##### `Psych.parse_stream` (`../lib/ruby/3.4.0/psych.rb`)

|      % | Samples | Calls | Caller        | Location                     |
| -----: | ------: | ----: | ------------- | ---------------------------- |
| 100.0% |       2 |     2 | `Psych.parse` | `../lib/ruby/3.4.0/psych.rb` |

##### `Psych::Parser#parse` (`../lib/ruby/3.4.0/psych/parser.rb`)

|      % | Samples | Calls | Caller               | Location                     |
| -----: | ------: | ----: | -------------------- | ---------------------------- |
| 100.0% |       2 |     2 | `Psych.parse_stream` | `../lib/ruby/3.4.0/psych.rb` |

##### `Gem.finish_resolve` (`../lib/ruby/3.4.0/rubygems.rb`)

|      % | Samples | Calls | Caller                       | Location                        |
| -----: | ------: | ----: | ---------------------------- | ------------------------------- |
| 100.0% |       2 |     1 | `block in activate_bin_path` | `../lib/ruby/3.4.0/rubygems.rb` |

##### `Gem::RequestSet#resolve_current` (`../lib/ruby/3.4.0/rubygems/request_set.rb`)

|      % | Samples | Calls | Caller               | Location                        |
| -----: | ------: | ----: | -------------------- | ------------------------------- |
| 100.0% |       2 |     1 | `Gem.finish_resolve` | `../lib/ruby/3.4.0/rubygems.rb` |

##### `Psych::TreeBuilder#start_mapping` (`<unknown>`)

|      % | Samples | Calls | Caller                                     | Location    |
| -----: | ------: | ----: | ------------------------------------------ | ----------- |
| 100.0% |       1 |     1 | `Psych::Parser#_native_parse [c function]` | `<unknown>` |

##### `Psych::TreeBuilder#start_sequence` (`<unknown>`)

|      % | Samples | Calls | Caller                                     | Location    |
| -----: | ------: | ----: | ------------------------------------------ | ----------- |
| 100.0% |       1 |     1 | `Psych::Parser#_native_parse [c function]` | `<unknown>` |

##### `String#unpack` (`<unknown>`)

|      % | Samples | Calls | Caller                         | Location                                                |
| -----: | ------: | ----: | ------------------------------ | ------------------------------------------------------- |
| 100.0% |       1 |     1 | `Parser::Lexer#source_buffer=` | `../bundle/gems/parser-3.3.12.0/lib/parser/lexer-F1.rb` |

##### `Kernel#tap` (`<unknown>`)

|      % | Samples | Calls | Caller                         | Location                                           |
| -----: | ------: | ----: | ------------------------------ | -------------------------------------------------- |
| 100.0% |       1 |     1 | `RuboCop::CLI#execute_runners` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb` |

##### `RuboCop::AST::Node#lambda_or_proc?` (`<unknown>`)

|      % | Samples | Calls | Caller                            | Location                                                         |
| -----: | ------: | ----: | --------------------------------- | ---------------------------------------------------------------- |
| 100.0% |       1 |     1 | `block in assumed_usage_context?` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/lint/debugger.rb` |

##### `RuboCop::Cop::Style::NumericPredicate#comparison` (`<unknown>`)

|      % | Samples | Calls | Caller                                        | Location                                                                   |
| -----: | ------: | ----: | --------------------------------------------- | -------------------------------------------------------------------------- |
| 100.0% |       1 |     1 | `RuboCop::Cop::Style::NumericPredicate#check` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/style/numeric_predicate.rb` |

##### `block in private_class_methods` (`<unknown>`)

|      % | Samples | Calls | Caller                           | Location                                                                      |
| -----: | ------: | ----: | -------------------------------- | ----------------------------------------------------------------------------- |
| 100.0% |       1 |     1 | `block in visit_all_descendants` | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb` |

##### `RuboCop::AST::NodePattern::Parser#emit_list` (`<unknown>`)

|      % | Samples | Calls | Caller                                        | Location                                                                        |
| -----: | ------: | ----: | --------------------------------------------- | ------------------------------------------------------------------------------- |
| 100.0% |       1 |     1 | `RuboCop::AST::NodePattern::Parser#_reduce_3` | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern/parser.racc.rb` |

##### `RuboCop::AST::Node#proc?` (`<unknown>`)

|      % | Samples | Calls | Caller                               | Location    |
| -----: | ------: | ----: | ------------------------------------ | ----------- |
| 100.0% |       1 |     1 | `RuboCop::AST::Node#lambda_or_proc?` | `<unknown>` |

##### `RuboCop::Cop::Commissioner#on_send` (`<unknown>`)

|      % | Samples | Calls | Caller                             | Location    |
| -----: | ------: | ----: | ---------------------------------- | ----------- |
| 900.0% |       9 |     8 | `block in on_dstr`                 | `<unknown>` |
| 600.0% |       6 |     6 | `RuboCop::AST::Traversal#on_if`    | `<unknown>` |
| 500.0% |       5 |     5 | `block in on_send`                 | `<unknown>` |
| 400.0% |       4 |     4 | `RuboCop::AST::Traversal#on_block` | `<unknown>` |
| 100.0% |       1 |     1 | `block in on_case`                 | `<unknown>` |

##### `block (2 levels) in each_gemspec` (`../lib/ruby/3.4.0/rubygems/specification.rb`)

|      % | Samples | Calls | Caller                    | Location    |
| -----: | ------: | ----: | ------------------------- | ----------- |
| 100.0% |       1 |     1 | `Array#each [c function]` | `<unknown>` |

##### `block in map_stubs` (`../lib/ruby/3.4.0/rubygems/specification_record.rb`)

|      % | Samples | Calls | Caller                    | Location    |
| -----: | ------: | ----: | ------------------------- | ----------- |
| 100.0% |       1 |     1 | `Array#each [c function]` | `<unknown>` |

##### `block in merge` (`../lib/ruby/3.4.0/set.rb`)

|      % | Samples | Calls | Caller                    | Location    |
| -----: | ------: | ----: | ------------------------- | ----------- |
| 100.0% |       1 |     1 | `Array#each [c function]` | `<unknown>` |

##### `Gem::StubSpecification#valid?` (`../lib/ruby/3.4.0/rubygems/stub_specification.rb`)

|      % | Samples | Calls | Caller                      | Location    |
| -----: | ------: | ----: | --------------------------- | ----------- |
| 100.0% |       1 |     1 | `Array#select [c function]` | `<unknown>` |

##### `ERB#initialize` (`../lib/ruby/3.4.0/erb.rb`)

|      % | Samples | Calls | Caller                   | Location    |
| -----: | ------: | ----: | ------------------------ | ----------- |
| 100.0% |       1 |     1 | `Class#new [c function]` | `<unknown>` |

##### `Psych::Nodes::Mapping#initialize` (`../lib/ruby/3.4.0/psych/nodes/mapping.rb`)

|      % | Samples | Calls | Caller                   | Location    |
| -----: | ------: | ----: | ------------------------ | ----------- |
| 100.0% |       1 |     1 | `Class#new [c function]` | `<unknown>` |

##### `block in parse_in_order` (`../lib/ruby/3.4.0/optparse.rb`)

|      % | Samples | Calls | Caller                      | Location    |
| -----: | ------: | ----: | --------------------------- | ----------- |
| 100.0% |       1 |     1 | `Kernel#catch [c function]` | `<unknown>` |

##### `OptionParser#parse!` (`../lib/ruby/3.4.0/optparse.rb`)

|      % | Samples | Calls | Caller                   | Location                                               |
| -----: | ------: | ----: | ------------------------ | ------------------------------------------------------ |
| 100.0% |       1 |     1 | `RuboCop::Options#parse` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/options.rb` |

##### `ERB::Compiler#compile` (`../lib/ruby/3.4.0/erb/compiler.rb`)

|      % | Samples | Calls | Caller           | Location                   |
| -----: | ------: | ----: | ---------------- | -------------------------- |
| 100.0% |       1 |     1 | `ERB#initialize` | `../lib/ruby/3.4.0/erb.rb` |

##### `ERB::Compiler::Buffer#close` (`../lib/ruby/3.4.0/erb/compiler.rb`)

|      % | Samples | Calls | Caller                  | Location                            |
| -----: | ------: | ----: | ----------------------- | ----------------------------------- |
| 100.0% |       1 |     1 | `ERB::Compiler#compile` | `../lib/ruby/3.4.0/erb/compiler.rb` |

##### `OptionParser#order!` (`../lib/ruby/3.4.0/optparse.rb`)

|      % | Samples | Calls | Caller                  | Location                        |
| -----: | ------: | ----: | ----------------------- | ------------------------------- |
| 100.0% |       1 |     1 | `OptionParser#permute!` | `../lib/ruby/3.4.0/optparse.rb` |

#### Callees

Callees ranked by contribution to each function's total samples. Percentages are of the function's total and can exceed 100% for calls within a recursion cycle.

##### `<main>` (`rubocop`)

|     % | Samples | Calls | Callee                     | Location                        |
| ----: | ------: | ----: | -------------------------- | ------------------------------- |
| 97.8% |     132 |     1 | `Kernel#load [c function]` | `<unknown>`                     |
|  2.2% |       3 |     1 | `Gem.activate_bin_path`    | `../lib/ruby/3.4.0/rubygems.rb` |

##### `Kernel#load [c function]` (`<unknown>`)

|     % | Samples | Calls | Callee                     | Location                                              |
| ----: | ------: | ----: | -------------------------- | ----------------------------------------------------- |
| 65.2% |      86 |     1 | `Benchmark.realtime`       | `../lib/ruby/3.4.0/benchmark.rb`                      |
| 32.6% |      43 |     1 | `Kernel#require`           | `<unknown>`                                           |
|  2.3% |       3 |     1 | `RuboCop::Server.running?` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/server.rb` |

##### `Benchmark.realtime` (`../lib/ruby/3.4.0/benchmark.rb`)

|      % | Samples | Calls | Callee                      | Location                                    |
| -----: | ------: | ----: | --------------------------- | ------------------------------------------- |
| 100.0% |      86 |     1 | `block in <top (required)>` | `../bundle/gems/rubocop-1.65.1/exe/rubocop` |

##### `block in <top (required)>` (`../bundle/gems/rubocop-1.65.1/exe/rubocop`)

|      % | Samples | Calls | Callee             | Location                                           |
| -----: | ------: | ----: | ------------------ | -------------------------------------------------- |
| 100.0% |      86 |     1 | `RuboCop::CLI#run` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb` |

##### `RuboCop::CLI#run` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`)

|     % | Samples | Calls | Callee                           | Location                                               |
| ----: | ------: | ----: | -------------------------------- | ------------------------------------------------------ |
| 98.8% |      85 |     1 | `RuboCop::CLI#profile_if_needed` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`     |
|  1.2% |       1 |     1 | `RuboCop::Options#parse`         | `../bundle/gems/rubocop-1.65.1/lib/rubocop/options.rb` |

##### `RuboCop::CLI#profile_if_needed` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`)

|      % | Samples | Calls | Callee         | Location                                           |
| -----: | ------: | ----: | -------------- | -------------------------------------------------- |
| 100.0% |      85 |     1 | `block in run` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb` |

##### `block in run` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`)

|     % | Samples | Calls | Callee                         | Location                                           |
| ----: | ------: | ----: | ------------------------------ | -------------------------------------------------- |
| 94.1% |      80 |     1 | `RuboCop::CLI#execute_runners` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb` |
|  5.9% |       5 |     1 | `RuboCop::CLI#act_on_options`  | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb` |

##### `RuboCop::CLI#execute_runners` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`)

|     % | Samples | Calls | Callee                     | Location                                           |
| ----: | ------: | ----: | -------------------------- | -------------------------------------------------- |
| 98.8% |      79 |     1 | `RuboCop::CLI#run_command` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb` |
|  1.3% |       1 |     1 | `Kernel#tap`               | `<unknown>`                                        |

##### `RuboCop::CLI#run_command` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`)

|      % | Samples | Calls | Callee                          | Location                                                       |
| -----: | ------: | ----: | ------------------------------- | -------------------------------------------------------------- |
| 100.0% |      80 |     2 | `RuboCop::CLI::Environment#run` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/environment.rb` |

##### `RuboCop::CLI::Environment#run` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/environment.rb`)

|      % | Samples | Calls | Callee                      | Location                                                   |
| -----: | ------: | ----: | --------------------------- | ---------------------------------------------------------- |
| 100.0% |      80 |     2 | `RuboCop::CLI::Command.run` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command.rb` |

##### `RuboCop::CLI::Command.run` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command.rb`)

|     % | Samples | Calls | Callee                                         | Location                                                                      |
| ----: | ------: | ----: | ---------------------------------------------- | ----------------------------------------------------------------------------- |
| 98.8% |      79 |     1 | `RuboCop::CLI::Command::ExecuteRunner#run`     | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb`     |
|  1.3% |       1 |     1 | `RuboCop::CLI::Command::SuggestExtensions#run` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command/suggest_extensions.rb` |

##### `Enumerable#reduce [c function]` (`<unknown>`)

|      % | Samples | Calls | Callee                    | Location    |
| -----: | ------: | ----: | ------------------------- | ----------- |
| 100.0% |      79 |     1 | `Array#each [c function]` | `<unknown>` |

##### `RuboCop::CLI::Command::ExecuteRunner#run` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb`)

|      % | Samples | Calls | Callee                                                | Location                                                                  |
| -----: | ------: | ----: | ----------------------------------------------------- | ------------------------------------------------------------------------- |
| 100.0% |      79 |     1 | `RuboCop::CLI::Command::ExecuteRunner#execute_runner` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb` |

##### `RuboCop::CLI::Command::ExecuteRunner#execute_runner` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb`)

|      % | Samples | Calls | Callee                                               | Location                                                                  |
| -----: | ------: | ----: | ---------------------------------------------------- | ------------------------------------------------------------------------- |
| 100.0% |      79 |     1 | `RuboCop::CLI::Command::ExecuteRunner#with_redirect` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb` |

##### `RuboCop::CLI::Command::ExecuteRunner#with_redirect` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb`)

|      % | Samples | Calls | Callee                    | Location                                                                  |
| -----: | ------: | ----: | ------------------------- | ------------------------------------------------------------------------- |
| 100.0% |      79 |     1 | `block in execute_runner` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb` |

##### `block in execute_runner` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb`)

|      % | Samples | Calls | Callee                | Location                                              |
| -----: | ------: | ----: | --------------------- | ----------------------------------------------------- |
| 100.0% |      79 |     1 | `RuboCop::Runner#run` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb` |

##### `RuboCop::Runner#run` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`)

|      % | Samples | Calls | Callee                          | Location                                              |
| -----: | ------: | ----: | ------------------------------- | ----------------------------------------------------- |
| 100.0% |      79 |     1 | `RuboCop::Runner#inspect_files` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb` |

##### `RuboCop::Runner#each_inspected_file` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`)

|      % | Samples | Calls | Callee                           | Location    |
| -----: | ------: | ----: | -------------------------------- | ----------- |
| 100.0% |      79 |     1 | `Enumerable#reduce [c function]` | `<unknown>` |

##### `RuboCop::Runner#inspect_files` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`)

|      % | Samples | Calls | Callee                                | Location                                              |
| -----: | ------: | ----: | ------------------------------------- | ----------------------------------------------------- |
| 100.0% |      79 |     1 | `RuboCop::Runner#each_inspected_file` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb` |

##### `Kernel#require_relative [c function]` (`<unknown>`)

|     % | Samples | Calls | Callee                                               | Location                                                            |
| ----: | ------: | ----: | ---------------------------------------------------- | ------------------------------------------------------------------- |
| 61.5% |      16 |     9 | `Kernel#require`                                     | `<unknown>`                                                         |
| 50.0% |      13 |     6 | `RuboCop::AST::NodePattern::Macros#def_node_matcher` | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern.rb` |
|  7.7% |       2 |     2 | `Module#include [c function]`                        | `<unknown>`                                                         |
|  3.8% |       1 |     1 | `File.realpath [c function]`                         | `<unknown>`                                                         |
|  3.8% |       1 |     1 | `RuboCop::AST::NodePattern::Macros#def_node_search`  | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern.rb` |

##### `Array#each [c function]` (`<unknown>`)

|      % | Samples | Calls | Callee                             | Location                                                                      |
| -----: | ------: | ----: | ---------------------------------- | ----------------------------------------------------------------------------- |
| 725.0% |     174 |    40 | `block in on_dstr`                 | `<unknown>`                                                                   |
| 329.2% |      79 |     1 | `block in each_inspected_file`     | `../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`                         |
| 245.8% |      59 |     1 | `block in inspect_file`            | `../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`                         |
| 154.2% |      37 |    36 | `block in trigger_responding_cops` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`               |
| 141.7% |      34 |    25 | `block in each_child_node`         | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb` |

##### `Kernel#public_send [c function]` (`<unknown>`)

|     % | Samples | Calls | Callee                                                         | Location                                                                                  |
| ----: | ------: | ----: | -------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| 20.0% |       4 |     4 | `RuboCop::Cop::Style::IfUnlessModifier#on_if`                  | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/style/if_unless_modifier.rb`               |
| 10.0% |       2 |     2 | `RuboCop::Cop::Layout::LineLength#on_potential_breakable_node` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/layout/line_length.rb`                     |
| 10.0% |       2 |     2 | `RuboCop::Cop::Layout::SpaceAroundOperators#on_assignment`     | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/layout/space_around_operators.rb`          |
| 10.0% |       2 |     2 | `RuboCop::Cop::Lint::IneffectiveAccessModifier#on_class`       | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/lint/ineffective_access_modifier.rb`       |
| 10.0% |       2 |     2 | `RuboCop::Cop::MultilineExpressionIndentation#on_send`         | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/multiline_expression_indentation.rb` |

##### `Racc::Parser#_racc_do_parse_c [c function]` (`<unknown>`)

|     % | Samples | Calls | Callee                                         | Location                                              |
| ----: | ------: | ----: | ---------------------------------------------- | ----------------------------------------------------- |
| 64.7% |      11 |     5 | `Parser::Base#next_token`                      | `../bundle/gems/parser-3.3.12.0/lib/parser/base.rb`   |
| 17.6% |       3 |     3 | `RuboCop::AST::NodePattern::Parser#next_token` | `<unknown>`                                           |
|  5.9% |       1 |     1 | `Parser::Ruby27#_reduce_549`                   | `../bundle/gems/parser-3.3.12.0/lib/parser/ruby27.rb` |
|  5.9% |       1 |     1 | `Parser::Ruby27#_reduce_580`                   | `../bundle/gems/parser-3.3.12.0/lib/parser/ruby27.rb` |
|  5.9% |       1 |     1 | `Parser::Ruby27#_reduce_600`                   | `../bundle/gems/parser-3.3.12.0/lib/parser/ruby27.rb` |

##### `Parser::Base#next_token` (`../bundle/gems/parser-3.3.12.0/lib/parser/base.rb`)

|     % | Samples | Calls | Callee                         | Location                                                     |
| ----: | ------: | ----: | ------------------------------ | ------------------------------------------------------------ |
| 90.9% |      10 |     5 | `Parser::Lexer#advance`        | `../bundle/gems/parser-3.3.12.0/lib/parser/lexer-F1.rb`      |
|  9.1% |       1 |     1 | `Parser::LexerStrings#advance` | `../bundle/gems/parser-3.3.12.0/lib/parser/lexer-strings.rb` |

##### `Parser::Lexer#advance` (`../bundle/gems/parser-3.3.12.0/lib/parser/lexer-F1.rb`)

|     % | Samples | Calls | Callee                                    | Location                                                     |
| ----: | ------: | ----: | ----------------------------------------- | ------------------------------------------------------------ |
| 20.0% |       2 |     2 | `Parser::Lexer#emit`                      | `../bundle/gems/parser-3.3.12.0/lib/parser/lexer-F1.rb`      |
| 10.0% |       1 |     1 | `Parser::Lexer#emit_instance_var`         | `../bundle/gems/parser-3.3.12.0/lib/parser/lexer-F1.rb`      |
| 10.0% |       1 |     1 | `Parser::Lexer#emit_rbrace_rparen_rbrack` | `../bundle/gems/parser-3.3.12.0/lib/parser/lexer-F1.rb`      |
| 10.0% |       1 |     1 | `Parser::Lexer#tok`                       | `../bundle/gems/parser-3.3.12.0/lib/parser/lexer-F1.rb`      |
| 10.0% |       1 |     1 | `Parser::LexerStrings#advance`            | `../bundle/gems/parser-3.3.12.0/lib/parser/lexer-strings.rb` |

##### `Kernel#require [c function]` (`<unknown>`)

|      % | Samples | Calls | Callee                                 | Location                                      |
| -----: | ------: | ----: | -------------------------------------- | --------------------------------------------- |
| 800.0% |      56 |     9 | `Kernel#require_relative [c function]` | `<unknown>`                                   |
| 157.1% |      11 |     3 | `Kernel#require`                       | `<unknown>`                                   |
|  14.3% |       1 |     1 | `Gem::Specification.load_defaults`     | `../lib/ruby/3.4.0/rubygems/specification.rb` |

##### `Parser::Source::Buffer#slice` (`../bundle/gems/parser-3.3.12.0/lib/parser/source/buffer.rb`)

|     % | Samples | Calls | Callee                       | Location    |
| ----: | ------: | ----: | ---------------------------- | ----------- |
| 57.1% |       4 |     4 | `String#encode [c function]` | `<unknown>` |
| 28.6% |       2 |     2 | `String#[] [c function]`     | `<unknown>` |

##### `Array#select [c function]` (`<unknown>`)

|     % | Samples | Calls | Callee                           | Location                                                |
| ----: | ------: | ----: | -------------------------------- | ------------------------------------------------------- |
| 40.0% |       2 |     1 | `block in callbacks_needed`      | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/base.rb` |
| 20.0% |       1 |     1 | `block in roundup_relevant_cops` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/team.rb` |
| 20.0% |       1 |     1 | `Gem::StubSpecification#valid?`  | `../lib/ruby/3.4.0/rubygems/stub_specification.rb`      |

##### `Class#new [c function]` (`<unknown>`)

|      % | Samples | Calls | Callee                                     | Location                                                                |
| -----: | ------: | ----: | ------------------------------------------ | ----------------------------------------------------------------------- |
| 360.0% |      18 |     1 | `RuboCop::AST::ProcessedSource#initialize` | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/processed_source.rb` |
| 140.0% |       7 |     4 | `RuboCop::AST::NodePattern#initialize`     | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern.rb`     |
|  60.0% |       3 |     1 | `RuboCop::Cop::Commissioner#initialize`    | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`         |
|  60.0% |       3 |     3 | `RuboCop::AST::Node#initialize`            | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node.rb`             |
|  40.0% |       2 |     2 | `Set#initialize`                           | `../lib/ruby/3.4.0/set.rb`                                              |

##### `Parser::Source::Buffer#line_for_position` (`../bundle/gems/parser-3.3.12.0/lib/parser/source/buffer.rb`)

|      % | Samples | Calls | Callee                                           | Location                                                     |
| -----: | ------: | ----: | ------------------------------------------------ | ------------------------------------------------------------ |
| 100.0% |       5 |     4 | `Parser::Source::Buffer#line_index_for_position` | `../bundle/gems/parser-3.3.12.0/lib/parser/source/buffer.rb` |

##### `Parser::Source::Buffer#line_index_for_position` (`../bundle/gems/parser-3.3.12.0/lib/parser/source/buffer.rb`)

|     % | Samples | Calls | Callee                               | Location                                                     |
| ----: | ------: | ----: | ------------------------------------ | ------------------------------------------------------------ |
| 40.0% |       2 |     1 | `Parser::Source::Buffer#line_begins` | `../bundle/gems/parser-3.3.12.0/lib/parser/source/buffer.rb` |

##### `Enumerator#each [c function]` (`<unknown>`)

|     % | Samples | Calls | Callee                                                                | Location                                                                             |
| ----: | ------: | ----: | --------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| 66.7% |       2 |     2 | `RuboCop::AST::Node#each_ancestor`                                    | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node.rb`                          |
| 66.7% |       2 |     2 | `RuboCop::AST::NodePattern::Compiler#enforce_same_captures`           | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern/compiler.rb`         |
| 66.7% |       2 |     2 | `RuboCop::AST::NodePattern::Compiler::Binding#union_bind`             | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern/compiler/binding.rb` |
| 66.7% |       2 |     2 | `RuboCop::Cop::Lint::IneffectiveAccessModifier#private_class_methods` | `<unknown>`                                                                          |
| 33.3% |       1 |     1 | `Integer#downto [c function]`                                         | `<unknown>`                                                                          |

##### `Thread::Mutex#synchronize [c function]` (`<unknown>`)

|      % | Samples | Calls | Callee                       | Location                        |
| -----: | ------: | ----: | ---------------------------- | ------------------------------- |
| 100.0% |       3 |     1 | `block in activate_bin_path` | `../lib/ruby/3.4.0/rubygems.rb` |

##### `RuboCop::AST::NodePattern::Parser#next_token` (`<unknown>`)

|      % | Samples | Calls | Callee                                           | Location                                                                      |
| -----: | ------: | ----: | ------------------------------------------------ | ----------------------------------------------------------------------------- |
| 100.0% |       3 |     3 | `RuboCop::AST::NodePattern::LexerRex#next_token` | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern/lexer.rex.rb` |

##### `block in activate_bin_path` (`../lib/ruby/3.4.0/rubygems.rb`)

|     % | Samples | Calls | Callee                        | Location                                      |
| ----: | ------: | ----: | ----------------------------- | --------------------------------------------- |
| 66.7% |       2 |     1 | `Gem.finish_resolve`          | `../lib/ruby/3.4.0/rubygems.rb`               |
| 33.3% |       1 |     1 | `Gem::Specification#activate` | `../lib/ruby/3.4.0/rubygems/specification.rb` |

##### `Gem.activate_bin_path` (`../lib/ruby/3.4.0/rubygems.rb`)

|      % | Samples | Calls | Callee                                   | Location    |
| -----: | ------: | ----: | ---------------------------------------- | ----------- |
| 100.0% |       3 |     1 | `Thread::Mutex#synchronize [c function]` | `<unknown>` |

##### `Psych.safe_load` (`../lib/ruby/3.4.0/psych.rb`)

|     % | Samples | Calls | Callee                           | Location                                      |
| ----: | ------: | ----: | -------------------------------- | --------------------------------------------- |
| 66.7% |       2 |     2 | `Psych::Visitors::ToRuby#accept` | `../lib/ruby/3.4.0/psych/visitors/to_ruby.rb` |
| 33.3% |       1 |     1 | `Psych.parse`                    | `../lib/ruby/3.4.0/psych.rb`                  |

##### `Enumerable#map [c function]` (`<unknown>`)

|      % | Samples | Calls | Callee                         | Location    |
| -----: | ------: | ----: | ------------------------------ | ----------- |
| 100.0% |       2 |     2 | `Enumerator#each [c function]` | `<unknown>` |

##### `Module#include [c function]` (`<unknown>`)

|      % | Samples | Calls | Callee                                | Location    |
| -----: | ------: | ----: | ------------------------------------- | ----------- |
| 100.0% |       2 |     2 | `Module#append_features [c function]` | `<unknown>` |

##### `Psych::Parser#_native_parse [c function]` (`<unknown>`)

|     % | Samples | Calls | Callee                              | Location    |
| ----: | ------: | ----: | ----------------------------------- | ----------- |
| 50.0% |       1 |     1 | `Psych::TreeBuilder#start_mapping`  | `<unknown>` |
| 50.0% |       1 |     1 | `Psych::TreeBuilder#start_sequence` | `<unknown>` |

##### `block in on_send` (`<unknown>`)

|      % | Samples | Calls | Callee                                | Location    |
| -----: | ------: | ----: | ------------------------------------- | ----------- |
| 250.0% |       5 |     5 | `RuboCop::Cop::Commissioner#on_send`  | `<unknown>` |
| 200.0% |       4 |     3 | `RuboCop::Cop::Commissioner#on_block` | `<unknown>` |
|  50.0% |       1 |     1 | `RuboCop::Cop::Commissioner#on_array` | `<unknown>` |
|  50.0% |       1 |     1 | `RuboCop::Cop::Commissioner#on_dstr`  | `<unknown>` |
|  50.0% |       1 |     1 | `RuboCop::Cop::Commissioner#on_lvar`  | `<unknown>` |

##### `Psych.parse` (`../lib/ruby/3.4.0/psych.rb`)

|      % | Samples | Calls | Callee               | Location                     |
| -----: | ------: | ----: | -------------------- | ---------------------------- |
| 100.0% |       2 |     2 | `Psych.parse_stream` | `../lib/ruby/3.4.0/psych.rb` |

##### `Psych.parse_stream` (`../lib/ruby/3.4.0/psych.rb`)

|      % | Samples | Calls | Callee                | Location                            |
| -----: | ------: | ----: | --------------------- | ----------------------------------- |
| 100.0% |       2 |     2 | `Psych::Parser#parse` | `../lib/ruby/3.4.0/psych/parser.rb` |

##### `Psych::Parser#parse` (`../lib/ruby/3.4.0/psych/parser.rb`)

|      % | Samples | Calls | Callee                                     | Location    |
| -----: | ------: | ----: | ------------------------------------------ | ----------- |
| 100.0% |       2 |     2 | `Psych::Parser#_native_parse [c function]` | `<unknown>` |

##### `Gem.finish_resolve` (`../lib/ruby/3.4.0/rubygems.rb`)

|      % | Samples | Calls | Callee                            | Location                                    |
| -----: | ------: | ----: | --------------------------------- | ------------------------------------------- |
| 100.0% |       2 |     1 | `Gem::RequestSet#resolve_current` | `../lib/ruby/3.4.0/rubygems/request_set.rb` |

##### `Gem::RequestSet#resolve_current` (`../lib/ruby/3.4.0/rubygems/request_set.rb`)

|     % | Samples | Calls | Callee                    | Location                                    |
| ----: | ------: | ----: | ------------------------- | ------------------------------------------- |
| 50.0% |       1 |     1 | `Gem::RequestSet#resolve` | `../lib/ruby/3.4.0/rubygems/request_set.rb` |
| 50.0% |       1 |     1 | `Kernel#require`          | `<unknown>`                                 |

##### `Psych::TreeBuilder#start_mapping` (`<unknown>`)

|      % | Samples | Calls | Callee                   | Location    |
| -----: | ------: | ----: | ------------------------ | ----------- |
| 100.0% |       1 |     1 | `Class#new [c function]` | `<unknown>` |

##### `Psych::TreeBuilder#start_sequence` (`<unknown>`)

|      % | Samples | Calls | Callee                                  | Location                                  |
| -----: | ------: | ----: | --------------------------------------- | ----------------------------------------- |
| 100.0% |       1 |     1 | `Psych::TreeBuilder#set_start_location` | `../lib/ruby/3.4.0/psych/tree_builder.rb` |

##### `Kernel#tap` (`<unknown>`)

|      % | Samples | Calls | Callee                     | Location                                           |
| -----: | ------: | ----: | -------------------------- | -------------------------------------------------- |
| 100.0% |       1 |     1 | `block in execute_runners` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb` |

##### `RuboCop::AST::Node#lambda_or_proc?` (`<unknown>`)

|      % | Samples | Calls | Callee                     | Location    |
| -----: | ------: | ----: | -------------------------- | ----------- |
| 100.0% |       1 |     1 | `RuboCop::AST::Node#proc?` | `<unknown>` |

##### `RuboCop::AST::NodePattern::Parser#emit_list` (`<unknown>`)

|      % | Samples | Calls | Callee                                         | Location                                                                    |
| -----: | ------: | ----: | ---------------------------------------------- | --------------------------------------------------------------------------- |
| 100.0% |       1 |     1 | `RuboCop::AST::NodePattern::Builder#emit_list` | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern/builder.rb` |

##### `RuboCop::Cop::Commissioner#on_send` (`<unknown>`)

|       % | Samples | Calls | Callee                                               | Location                                                        |
| ------: | ------: | ----: | ---------------------------------------------------- | --------------------------------------------------------------- |
| 1500.0% |      15 |    14 | `RuboCop::AST::Traversal#on_send`                    | `<unknown>`                                                     |
| 1200.0% |      12 |    12 | `RuboCop::Cop::Commissioner#trigger_responding_cops` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb` |
|  100.0% |       1 |     1 | `RuboCop::Cop::Commissioner#trigger_restricted_cops` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb` |

##### `block (2 levels) in each_gemspec` (`../lib/ruby/3.4.0/rubygems/specification.rb`)

|      % | Samples | Calls | Callee               | Location                                      |
| -----: | ------: | ----: | -------------------- | --------------------------------------------- |
| 100.0% |       1 |     1 | `block in each_spec` | `../lib/ruby/3.4.0/rubygems/specification.rb` |

##### `block in map_stubs` (`../lib/ruby/3.4.0/rubygems/specification_record.rb`)

|      % | Samples | Calls | Callee                                | Location                                      |
| -----: | ------: | ----: | ------------------------------------- | --------------------------------------------- |
| 100.0% |       1 |     1 | `Gem::Specification.gemspec_stubs_in` | `../lib/ruby/3.4.0/rubygems/specification.rb` |

##### `Gem::StubSpecification#valid?` (`../lib/ruby/3.4.0/rubygems/stub_specification.rb`)

|      % | Samples | Calls | Callee                        | Location                                           |
| -----: | ------: | ----: | ----------------------------- | -------------------------------------------------- |
| 100.0% |       1 |     1 | `Gem::StubSpecification#data` | `../lib/ruby/3.4.0/rubygems/stub_specification.rb` |

##### `ERB#initialize` (`../lib/ruby/3.4.0/erb.rb`)

|      % | Samples | Calls | Callee                  | Location                            |
| -----: | ------: | ----: | ----------------------- | ----------------------------------- |
| 100.0% |       1 |     1 | `ERB::Compiler#compile` | `../lib/ruby/3.4.0/erb/compiler.rb` |

##### `Psych::Nodes::Mapping#initialize` (`../lib/ruby/3.4.0/psych/nodes/mapping.rb`)

|      % | Samples | Calls | Callee                          | Location                                |
| -----: | ------: | ----: | ------------------------------- | --------------------------------------- |
| 100.0% |       1 |     1 | `Psych::Nodes::Node#initialize` | `../lib/ruby/3.4.0/psych/nodes/node.rb` |

##### `OptionParser#parse!` (`../lib/ruby/3.4.0/optparse.rb`)

|      % | Samples | Calls | Callee                  | Location                        |
| -----: | ------: | ----: | ----------------------- | ------------------------------- |
| 100.0% |       1 |     1 | `OptionParser#permute!` | `../lib/ruby/3.4.0/optparse.rb` |

##### `ERB::Compiler#compile` (`../lib/ruby/3.4.0/erb/compiler.rb`)

|      % | Samples | Calls | Callee                        | Location                            |
| -----: | ------: | ----: | ----------------------------- | ----------------------------------- |
| 100.0% |       1 |     1 | `ERB::Compiler::Buffer#close` | `../lib/ruby/3.4.0/erb/compiler.rb` |

##### `OptionParser#order!` (`../lib/ruby/3.4.0/optparse.rb`)

|      % | Samples | Calls | Callee                      | Location    |
| -----: | ------: | ----: | --------------------------- | ----------- |
| 100.0% |       1 |     1 | `Kernel#catch [c function]` | `<unknown>` |
