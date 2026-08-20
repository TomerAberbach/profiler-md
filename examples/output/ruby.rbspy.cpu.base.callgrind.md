# Sampling profile

Collected 139 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Native           | 59.7% |      83 |
| Third-party      | 33.8% |      47 |
| Unknown          |  4.3% |       6 |
| Standard library |  2.2% |       3 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|     % | Samples | Function                                     | Location                                                                      |
| ----: | ------: | -------------------------------------------- | ----------------------------------------------------------------------------- |
| 22.3% |      31 | `Kernel#require_relative [c function]`       | `<unknown>`                                                                   |
|  4.3% |       6 | `Kernel#require [c function]`                | `<unknown>`                                                                   |
|  4.3% |       6 | `String#[] [c function]`                     | `<unknown>`                                                                   |
|  3.6% |       5 | `Module#class_eval [c function]`             | `<unknown>`                                                                   |
|  2.9% |       4 | `Array#index [c function]`                   | `<unknown>`                                                                   |
|  2.9% |       4 | `String#encode [c function]`                 | `<unknown>`                                                                   |
|  2.9% |       4 | `Parser::Lexer#advance`                      | `../bundle/gems/parser-3.3.12.0/lib/parser/lexer-F1.rb`                       |
|  2.2% |       3 | `block in visit_descendants_of_types`        | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb` |
|  2.2% |       3 | `Class#new [c function]`                     | `<unknown>`                                                                   |
|  2.2% |       3 | `Kernel#public_send [c function]`            | `<unknown>`                                                                   |
|  2.2% |       3 | `String#index [c function]`                  | `<unknown>`                                                                   |
|  1.4% |       2 | `block in visit_all_descendants`             | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb` |
|  1.4% |       2 | `Array#include? [c function]`                | `<unknown>`                                                                   |
|  1.4% |       2 | `Parser::Source::Range#initialize`           | `../bundle/gems/parser-3.3.12.0/lib/parser/source/range.rb`                   |
|  1.4% |       2 | `RuboCop::AST::Node#initialize`              | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node.rb`                   |
|  1.4% |       2 | `Racc::Parser#_racc_do_parse_c [c function]` | `<unknown>`                                                                   |
|  1.4% |       2 | `RuboCop::Cop::RangeHelp#final_pos`          | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/range_help.rb`           |
|  0.7% |       1 | `Array#each [c function]`                    | `<unknown>`                                                                   |
|  0.7% |       1 | `block in run_hook`                          | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/force.rb`                      |
|  0.7% |       1 | `block in forces_for`                        | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/team.rb`                       |

#### Categories

##### Native

|     % | Samples | Function                                      | Location    |
| ----: | ------: | --------------------------------------------- | ----------- |
| 22.3% |      31 | `Kernel#require_relative [c function]`        | `<unknown>` |
|  4.3% |       6 | `Kernel#require [c function]`                 | `<unknown>` |
|  4.3% |       6 | `String#[] [c function]`                      | `<unknown>` |
|  3.6% |       5 | `Module#class_eval [c function]`              | `<unknown>` |
|  2.9% |       4 | `Array#index [c function]`                    | `<unknown>` |
|  2.9% |       4 | `String#encode [c function]`                  | `<unknown>` |
|  2.2% |       3 | `Class#new [c function]`                      | `<unknown>` |
|  2.2% |       3 | `Kernel#public_send [c function]`             | `<unknown>` |
|  2.2% |       3 | `String#index [c function]`                   | `<unknown>` |
|  1.4% |       2 | `Array#include? [c function]`                 | `<unknown>` |
|  1.4% |       2 | `Racc::Parser#_racc_do_parse_c [c function]`  | `<unknown>` |
|  0.7% |       1 | `Array#each [c function]`                     | `<unknown>` |
|  0.7% |       1 | `Enumerable#each_slice [c function]`          | `<unknown>` |
|  0.7% |       1 | `Enumerable#sort_by [c function]`             | `<unknown>` |
|  0.7% |       1 | `Hash#freeze [c function]`                    | `<unknown>` |
|  0.7% |       1 | `Kernel#binding [c function]`                 | `<unknown>` |
|  0.7% |       1 | `Kernel#eval [c function]`                    | `<unknown>` |
|  0.7% |       1 | `Module#append_features [c function]`         | `<unknown>` |
|  0.7% |       1 | `Module#attr_accessor [c function]`           | `<unknown>` |
|  0.7% |       1 | `Module#public_instance_methods [c function]` | `<unknown>` |

##### Third-party

|    % | Samples | Function                                       | Location                                                                                  |
| ---: | ------: | ---------------------------------------------- | ----------------------------------------------------------------------------------------- |
| 2.9% |       4 | `Parser::Lexer#advance`                        | `../bundle/gems/parser-3.3.12.0/lib/parser/lexer-F1.rb`                                   |
| 2.2% |       3 | `block in visit_descendants_of_types`          | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb`             |
| 1.4% |       2 | `block in visit_all_descendants`               | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb`             |
| 1.4% |       2 | `Parser::Source::Range#initialize`             | `../bundle/gems/parser-3.3.12.0/lib/parser/source/range.rb`                               |
| 1.4% |       2 | `RuboCop::AST::Node#initialize`                | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node.rb`                               |
| 1.4% |       2 | `RuboCop::Cop::RangeHelp#final_pos`            | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/range_help.rb`                       |
| 0.7% |       1 | `block in run_hook`                            | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/force.rb`                                  |
| 0.7% |       1 | `block in forces_for`                          | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/team.rb`                                   |
| 0.7% |       1 | `block (2 levels) in traverse`                 | `../bundle/gems/rubocop-1.65.1/lib/rubocop/yaml_duplication_checker.rb`                   |
| 0.7% |       1 | `Parser::Source::Map::Variable#initialize`     | `../bundle/gems/parser-3.3.12.0/lib/parser/source/map/variable.rb`                        |
| 0.7% |       1 | `RuboCop::Cop::Layout::ElseAlignment#on_if`    | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/layout/else_alignment.rb`                  |
| 0.7% |       1 | `block in <module:DClonable>`                  | `../lib/ruby/gems/3.4.0/gems/rexml-3.4.4/lib/rexml/xpath_parser.rb`                       |
| 0.7% |       1 | `AST::Node#initialize`                         | `../bundle/gems/ast-2.4.3/lib/ast/node.rb`                                                |
| 0.7% |       1 | `Parser::AST::Node#assign_properties`          | `../bundle/gems/parser-3.3.12.0/lib/parser/ast/node.rb`                                   |
| 0.7% |       1 | `Parser::Source::Map#node=`                    | `../bundle/gems/parser-3.3.12.0/lib/parser/source/map.rb`                                 |
| 0.7% |       1 | `Parser::Source::Buffer#slice`                 | `../bundle/gems/parser-3.3.12.0/lib/parser/source/buffer.rb`                              |
| 0.7% |       1 | `Parser::Lexer::Literal#extend_string`         | `../bundle/gems/parser-3.3.12.0/lib/parser/lexer/literal.rb`                              |
| 0.7% |       1 | `Parser::Source::Buffer#line_for_position`     | `../bundle/gems/parser-3.3.12.0/lib/parser/source/buffer.rb`                              |
| 0.7% |       1 | `block in each_single_element_character_class` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/style/redundant_regexp_character_class.rb` |
| 0.7% |       1 | `RuboCop::Cop::AutocorrectLogic#autocorrect?`  | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/autocorrect_logic.rb`                      |

##### Unknown

|    % | Samples | Function                                                                 | Location    |
| ---: | ------: | ------------------------------------------------------------------------ | ----------- |
| 0.7% |       1 | `String#unpack`                                                          | `<unknown>` |
| 0.7% |       1 | `RuboCop::AST::SendNode#attribute_accessor?`                             | `<unknown>` |
| 0.7% |       1 | `RuboCop::Cop::Naming::BinaryOperatorParameterName#op_method_candidate?` | `<unknown>` |
| 0.7% |       1 | `RuboCop::AST::Node#match_guard_clause?`                                 | `<unknown>` |
| 0.7% |       1 | `block in private_class_methods`                                         | `<unknown>` |
| 0.7% |       1 | `RuboCop::AST::Node#lvasgn_type?`                                        | `<unknown>` |

##### Standard library

|    % | Samples | Function                           | Location                                      |
| ---: | ------: | ---------------------------------- | --------------------------------------------- |
| 0.7% |       1 | `Psych::Nodes::Scalar#initialize`  | `../lib/ruby/3.4.0/psych/nodes/scalar.rb`     |
| 0.7% |       1 | `Psych::TreeBuilder#pop`           | `../lib/ruby/3.4.0/psych/tree_builder.rb`     |
| 0.7% |       1 | `Psych::Visitors::ToRuby#register` | `../lib/ruby/3.4.0/psych/visitors/to_ruby.rb` |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `Parser::Lexer#advance` (`../bundle/gems/parser-3.3.12.0/lib/parser/lexer-F1.rb`)

|      % | Samples | Location                                                      |
| -----: | ------: | ------------------------------------------------------------- |
| 100.0% |       4 | `../bundle/gems/parser-3.3.12.0/lib/parser/lexer-F1.rb:14654` |

##### `block in visit_descendants_of_types` (`../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb`)

|      % | Samples | Location                                                                          |
| -----: | ------: | --------------------------------------------------------------------------------- |
| 100.0% |       3 | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb:130` |

##### `block in visit_all_descendants` (`../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb`)

|      % | Samples | Location                                                                          |
| -----: | ------: | --------------------------------------------------------------------------------- |
| 100.0% |       2 | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb:121` |

##### `Parser::Source::Range#initialize` (`../bundle/gems/parser-3.3.12.0/lib/parser/source/range.rb`)

|      % | Samples | Location                                                       |
| -----: | ------: | -------------------------------------------------------------- |
| 100.0% |       2 | `../bundle/gems/parser-3.3.12.0/lib/parser/source/range.rb:49` |

##### `RuboCop::AST::Node#initialize` (`../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node.rb`)

|      % | Samples | Location                                                        |
| -----: | ------: | --------------------------------------------------------------- |
| 100.0% |       2 | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node.rb:176` |

##### `RuboCop::Cop::RangeHelp#final_pos` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/range_help.rb`)

|      % | Samples | Location                                                                |
| -----: | ------: | ----------------------------------------------------------------------- |
| 100.0% |       2 | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/range_help.rb:114` |

##### `block in run_hook` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/force.rb`)

|      % | Samples | Location                                                    |
| -----: | ------: | ----------------------------------------------------------- |
| 100.0% |       1 | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/force.rb:47` |

##### `block in forces_for` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/team.rb`)

|      % | Samples | Location                                                   |
| -----: | ------: | ---------------------------------------------------------- |
| 100.0% |       1 | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/team.rb:46` |

##### `block (2 levels) in traverse` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/yaml_duplication_checker.rb`)

|      % | Samples | Location                                                                   |
| -----: | ------: | -------------------------------------------------------------------------- |
| 100.0% |       1 | `../bundle/gems/rubocop-1.65.1/lib/rubocop/yaml_duplication_checker.rb:25` |

##### `Parser::Source::Map::Variable#initialize` (`../bundle/gems/parser-3.3.12.0/lib/parser/source/map/variable.rb`)

|      % | Samples | Location                                                              |
| -----: | ------: | --------------------------------------------------------------------- |
| 100.0% |       1 | `../bundle/gems/parser-3.3.12.0/lib/parser/source/map/variable.rb:14` |

##### `RuboCop::Cop::Layout::ElseAlignment#on_if` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/layout/else_alignment.rb`)

|      % | Samples | Location                                                                    |
| -----: | ------: | --------------------------------------------------------------------------- |
| 100.0% |       1 | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/layout/else_alignment.rb:49` |

##### `block in <module:DClonable>` (`../lib/ruby/gems/3.4.0/gems/rexml-3.4.4/lib/rexml/xpath_parser.rb`)

|      % | Samples | Location                                                               |
| -----: | ------: | ---------------------------------------------------------------------- |
| 100.0% |       1 | `../lib/ruby/gems/3.4.0/gems/rexml-3.4.4/lib/rexml/xpath_parser.rb:43` |

##### `AST::Node#initialize` (`../bundle/gems/ast-2.4.3/lib/ast/node.rb`)

|      % | Samples | Location                                      |
| -----: | ------: | --------------------------------------------- |
| 100.0% |       1 | `../bundle/gems/ast-2.4.3/lib/ast/node.rb:80` |

##### `Parser::AST::Node#assign_properties` (`../bundle/gems/parser-3.3.12.0/lib/parser/ast/node.rb`)

|      % | Samples | Location                                                   |
| -----: | ------: | ---------------------------------------------------------- |
| 100.0% |       1 | `../bundle/gems/parser-3.3.12.0/lib/parser/ast/node.rb:36` |

##### `Parser::Source::Map#node=` (`../bundle/gems/parser-3.3.12.0/lib/parser/source/map.rb`)

|      % | Samples | Location                                                     |
| -----: | ------: | ------------------------------------------------------------ |
| 100.0% |       1 | `../bundle/gems/parser-3.3.12.0/lib/parser/source/map.rb:93` |

##### `Parser::Source::Buffer#slice` (`../bundle/gems/parser-3.3.12.0/lib/parser/source/buffer.rb`)

|      % | Samples | Location                                                         |
| -----: | ------: | ---------------------------------------------------------------- |
| 100.0% |       1 | `../bundle/gems/parser-3.3.12.0/lib/parser/source/buffer.rb:214` |

##### `Parser::Lexer::Literal#extend_string` (`../bundle/gems/parser-3.3.12.0/lib/parser/lexer/literal.rb`)

|      % | Samples | Location                                                         |
| -----: | ------: | ---------------------------------------------------------------- |
| 100.0% |       1 | `../bundle/gems/parser-3.3.12.0/lib/parser/lexer/literal.rb:202` |

##### `Parser::Source::Buffer#line_for_position` (`../bundle/gems/parser-3.3.12.0/lib/parser/source/buffer.rb`)

|      % | Samples | Location                                                         |
| -----: | ------: | ---------------------------------------------------------------- |
| 100.0% |       1 | `../bundle/gems/parser-3.3.12.0/lib/parser/source/buffer.rb:238` |

##### `block in each_single_element_character_class` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/style/redundant_regexp_character_class.rb`)

|      % | Samples | Location                                                                                     |
| -----: | ------: | -------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/style/redundant_regexp_character_class.rb:69` |

##### `RuboCop::Cop::AutocorrectLogic#autocorrect?` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/autocorrect_logic.rb`)

|      % | Samples | Location                                                               |
| -----: | ------: | ---------------------------------------------------------------------- |
| 100.0% |       1 | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/autocorrect_logic.rb:9` |

##### `String#unpack` (`<unknown>`)

|      % | Samples | Location |
| -----: | ------: | -------- |
| 100.0% |       1 | 26       |

##### `RuboCop::AST::SendNode#attribute_accessor?` (`<unknown>`)

|      % | Samples | Location |
| -----: | ------: | -------- |
| 100.0% |       1 | 28       |

##### `RuboCop::Cop::Naming::BinaryOperatorParameterName#op_method_candidate?` (`<unknown>`)

|      % | Samples | Location |
| -----: | ------: | -------- |
| 100.0% |       1 | 39       |

##### `RuboCop::AST::Node#match_guard_clause?` (`<unknown>`)

|      % | Samples | Location |
| -----: | ------: | -------- |
| 100.0% |       1 | 614      |

##### `block in private_class_methods` (`<unknown>`)

|      % | Samples | Location |
| -----: | ------: | -------- |
| 100.0% |       1 | 60       |

##### `RuboCop::AST::Node#lvasgn_type?` (`<unknown>`)

|      % | Samples | Location |
| -----: | ------: | -------- |
| 100.0% |       1 | 200      |

##### `Psych::Nodes::Scalar#initialize` (`../lib/ruby/3.4.0/psych/nodes/scalar.rb`)

|      % | Samples | Location                                     |
| -----: | ------: | -------------------------------------------- |
| 100.0% |       1 | `../lib/ruby/3.4.0/psych/nodes/scalar.rb:65` |

##### `Psych::TreeBuilder#pop` (`../lib/ruby/3.4.0/psych/tree_builder.rb`)

|      % | Samples | Location                                      |
| -----: | ------: | --------------------------------------------- |
| 100.0% |       1 | `../lib/ruby/3.4.0/psych/tree_builder.rb:120` |

##### `Psych::Visitors::ToRuby#register` (`../lib/ruby/3.4.0/psych/visitors/to_ruby.rb`)

|      % | Samples | Location                                          |
| -----: | ------: | ------------------------------------------------- |
| 100.0% |       1 | `../lib/ruby/3.4.0/psych/visitors/to_ruby.rb:335` |

### Total samples

Functions ranked by total samples taken in the function and all its callees. Calls within a recursion cycle are excluded from totals, since they re-count the same work.

|     % | Samples | Function                                              | Location                                                                  |
| ----: | ------: | ----------------------------------------------------- | ------------------------------------------------------------------------- |
| 99.3% |     138 | `<main>`                                              | `rubocop`                                                                 |
| 98.6% |     137 | `Kernel#load [c function]`                            | `<unknown>`                                                               |
| 63.3% |      88 | `Benchmark.realtime`                                  | `../lib/ruby/3.4.0/benchmark.rb`                                          |
| 63.3% |      88 | `block in <top (required)>`                           | `../bundle/gems/rubocop-1.65.1/exe/rubocop`                               |
| 63.3% |      88 | `RuboCop::CLI#run`                                    | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`                        |
| 63.3% |      88 | `RuboCop::CLI#profile_if_needed`                      | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`                        |
| 63.3% |      88 | `block in run`                                        | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`                        |
| 59.0% |      82 | `RuboCop::CLI#execute_runners`                        | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`                        |
| 59.0% |      82 | `RuboCop::CLI#run_command`                            | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`                        |
| 59.0% |      82 | `RuboCop::CLI::Environment#run`                       | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/environment.rb`            |
| 59.0% |      82 | `RuboCop::CLI::Command.run`                           | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command.rb`                |
| 58.3% |      81 | `Enumerable#reduce [c function]`                      | `<unknown>`                                                               |
| 58.3% |      81 | `RuboCop::CLI::Command::ExecuteRunner#run`            | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb` |
| 58.3% |      81 | `RuboCop::CLI::Command::ExecuteRunner#execute_runner` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb` |
| 58.3% |      81 | `RuboCop::CLI::Command::ExecuteRunner#with_redirect`  | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb` |
| 58.3% |      81 | `block in execute_runner`                             | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb` |
| 58.3% |      81 | `RuboCop::Runner#run`                                 | `../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`                     |
| 58.3% |      81 | `RuboCop::Runner#each_inspected_file`                 | `../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`                     |
| 58.3% |      81 | `RuboCop::Runner#inspect_files`                       | `../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`                     |
| 25.9% |      36 | `Kernel#require_relative [c function]`                | `<unknown>`                                                               |

#### Categories

##### Native

|     % | Samples | Function                                     | Location    |
| ----: | ------: | -------------------------------------------- | ----------- |
| 98.6% |     137 | `Kernel#load [c function]`                   | `<unknown>` |
| 58.3% |      81 | `Enumerable#reduce [c function]`             | `<unknown>` |
| 25.9% |      36 | `Kernel#require_relative [c function]`       | `<unknown>` |
| 19.4% |      27 | `Kernel#public_send [c function]`            | `<unknown>` |
| 10.8% |      15 | `Array#each [c function]`                    | `<unknown>` |
| 10.1% |      14 | `Class#new [c function]`                     | `<unknown>` |
|  4.3% |       6 | `Kernel#require [c function]`                | `<unknown>` |
|  4.3% |       6 | `String#[] [c function]`                     | `<unknown>` |
|  3.6% |       5 | `Module#class_eval [c function]`             | `<unknown>` |
|  2.9% |       4 | `Array#index [c function]`                   | `<unknown>` |
|  2.9% |       4 | `String#encode [c function]`                 | `<unknown>` |
|  2.2% |       3 | `String#index [c function]`                  | `<unknown>` |
|  1.4% |       2 | `Array#include? [c function]`                | `<unknown>` |
|  1.4% |       2 | `Psych::Parser#_native_parse [c function]`   | `<unknown>` |
|  1.4% |       2 | `Racc::Parser#_racc_do_parse_c [c function]` | `<unknown>` |
|  0.7% |       1 | `Array#bsearch_index [c function]`           | `<unknown>` |
|  0.7% |       1 | `Array#each_index [c function]`              | `<unknown>` |
|  0.7% |       1 | `Array#map [c function]`                     | `<unknown>` |
|  0.7% |       1 | `Dir.chdir [c function]`                     | `<unknown>` |
|  0.7% |       1 | `Enumerator#each [c function]`               | `<unknown>` |

##### Third-party

|     % | Samples | Function                                              | Location                                                                  |
| ----: | ------: | ----------------------------------------------------- | ------------------------------------------------------------------------- |
| 63.3% |      88 | `block in <top (required)>`                           | `../bundle/gems/rubocop-1.65.1/exe/rubocop`                               |
| 63.3% |      88 | `RuboCop::CLI#run`                                    | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`                        |
| 63.3% |      88 | `RuboCop::CLI#profile_if_needed`                      | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`                        |
| 63.3% |      88 | `block in run`                                        | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`                        |
| 59.0% |      82 | `RuboCop::CLI#execute_runners`                        | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`                        |
| 59.0% |      82 | `RuboCop::CLI#run_command`                            | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`                        |
| 59.0% |      82 | `RuboCop::CLI::Environment#run`                       | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/environment.rb`            |
| 59.0% |      82 | `RuboCop::CLI::Command.run`                           | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command.rb`                |
| 58.3% |      81 | `RuboCop::CLI::Command::ExecuteRunner#run`            | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb` |
| 58.3% |      81 | `RuboCop::CLI::Command::ExecuteRunner#execute_runner` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb` |
| 58.3% |      81 | `RuboCop::CLI::Command::ExecuteRunner#with_redirect`  | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb` |
| 58.3% |      81 | `block in execute_runner`                             | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb` |
| 58.3% |      81 | `RuboCop::Runner#run`                                 | `../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`                     |
| 58.3% |      81 | `RuboCop::Runner#each_inspected_file`                 | `../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`                     |
| 58.3% |      81 | `RuboCop::Runner#inspect_files`                       | `../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`                     |
|  6.5% |       9 | `Parser::Source::Buffer#slice`                        | `../bundle/gems/parser-3.3.12.0/lib/parser/source/buffer.rb`              |
|  5.8% |       8 | `Parser::Lexer#advance`                               | `../bundle/gems/parser-3.3.12.0/lib/parser/lexer-F1.rb`                   |
|  4.3% |       6 | `RuboCop::AST::Node#initialize`                       | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node.rb`               |
|  4.3% |       6 | `Parser::Source::Range#source`                        | `../bundle/gems/parser-3.3.12.0/lib/parser/source/range.rb`               |
|  4.3% |       6 | `RuboCop::CLI#act_on_options`                         | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`                        |

##### Unknown

|    % | Samples | Function                                                                 | Location    |
| ---: | ------: | ------------------------------------------------------------------------ | ----------- |
| 0.7% |       1 | `Integer#times`                                                          | `<unknown>` |
| 0.7% |       1 | `Psych::TreeBuilder#end_mapping`                                         | `<unknown>` |
| 0.7% |       1 | `String#unpack`                                                          | `<unknown>` |
| 0.7% |       1 | `Kernel#tap`                                                             | `<unknown>` |
| 0.7% |       1 | `RuboCop::AST::SendNode#attribute_accessor?`                             | `<unknown>` |
| 0.7% |       1 | `RuboCop::Cop::Naming::BinaryOperatorParameterName#op_method_candidate?` | `<unknown>` |
| 0.7% |       1 | `RuboCop::Cop::Style::ConditionalAssignment#assignment_type?`            | `<unknown>` |
| 0.7% |       1 | `RuboCop::Cop::Style::OrAssignment#ternary_assignment?`                  | `<unknown>` |
| 0.7% |       1 | `RuboCop::AST::Node#match_guard_clause?`                                 | `<unknown>` |
| 0.7% |       1 | `block in private_class_methods`                                         | `<unknown>` |
| 0.7% |       1 | `RuboCop::AST::Node#lvasgn_type?`                                        | `<unknown>` |

##### Standard library

|     % | Samples | Function                                           | Location                                           |
| ----: | ------: | -------------------------------------------------- | -------------------------------------------------- |
| 63.3% |      88 | `Benchmark.realtime`                               | `../lib/ruby/3.4.0/benchmark.rb`                   |
|  2.9% |       4 | `Psych.safe_load`                                  | `../lib/ruby/3.4.0/psych.rb`                       |
|  1.4% |       2 | `Psych.parse`                                      | `../lib/ruby/3.4.0/psych.rb`                       |
|  1.4% |       2 | `Psych.parse_stream`                               | `../lib/ruby/3.4.0/psych.rb`                       |
|  1.4% |       2 | `Psych::Parser#parse`                              | `../lib/ruby/3.4.0/psych/parser.rb`                |
|  1.4% |       2 | `Psych::Visitors::ToRuby#visit_Psych_Nodes_Scalar` | `../lib/ruby/3.4.0/psych/visitors/to_ruby.rb`      |
|  1.4% |       2 | `Psych::Visitors::Visitor#visit`                   | `../lib/ruby/3.4.0/psych/visitors/visitor.rb`      |
|  1.4% |       2 | `Gem::Specification.load`                          | `../lib/ruby/3.4.0/rubygems/specification.rb`      |
|  0.7% |       1 | `block (2 levels) in each_gemspec`                 | `../lib/ruby/3.4.0/rubygems/specification.rb`      |
|  0.7% |       1 | `Gem::StubSpecification#spec`                      | `../lib/ruby/3.4.0/rubygems/stub_specification.rb` |
|  0.7% |       1 | `ERB#initialize`                                   | `../lib/ruby/3.4.0/erb.rb`                         |
|  0.7% |       1 | `Psych::Nodes::Scalar#initialize`                  | `../lib/ruby/3.4.0/psych/nodes/scalar.rb`          |
|  0.7% |       1 | `Set#each`                                         | `../lib/ruby/3.4.0/set.rb`                         |
|  0.7% |       1 | `Psych::TreeBuilder#scalar`                        | `../lib/ruby/3.4.0/psych/tree_builder.rb`          |
|  0.7% |       1 | `block in activate_bin_path`                       | `../lib/ruby/3.4.0/rubygems.rb`                    |
|  0.7% |       1 | `Gem.activate_bin_path`                            | `../lib/ruby/3.4.0/rubygems.rb`                    |
|  0.7% |       1 | `ERB::Compiler#compile`                            | `../lib/ruby/3.4.0/erb/compiler.rb`                |
|  0.7% |       1 | `ERB::Compiler::SimpleScanner#scan`                | `../lib/ruby/3.4.0/erb/compiler.rb`                |
|  0.7% |       1 | `Psych::ScalarScanner#tokenize`                    | `../lib/ruby/3.4.0/psych/scalar_scanner.rb`        |
|  0.7% |       1 | `Psych::TreeBuilder#pop`                           | `../lib/ruby/3.4.0/psych/tree_builder.rb`          |

#### Callers

Callers ranked by the samples taken in each function and its callees during calls from that caller. Percentages are of the function's total and can exceed 100% for calls within a recursion cycle.

##### `Kernel#load [c function]` (`<unknown>`)

|      % | Samples | Calls | Caller   | Location  |
| -----: | ------: | ----: | -------- | --------- |
| 100.0% |     137 |     1 | `<main>` | `rubocop` |

##### `Benchmark.realtime` (`../lib/ruby/3.4.0/benchmark.rb`)

|      % | Samples | Calls | Caller                     | Location    |
| -----: | ------: | ----: | -------------------------- | ----------- |
| 100.0% |      88 |     1 | `Kernel#load [c function]` | `<unknown>` |

##### `block in <top (required)>` (`../bundle/gems/rubocop-1.65.1/exe/rubocop`)

|      % | Samples | Calls | Caller               | Location                         |
| -----: | ------: | ----: | -------------------- | -------------------------------- |
| 100.0% |      88 |     1 | `Benchmark.realtime` | `../lib/ruby/3.4.0/benchmark.rb` |

##### `RuboCop::CLI#run` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`)

|      % | Samples | Calls | Caller                      | Location                                    |
| -----: | ------: | ----: | --------------------------- | ------------------------------------------- |
| 100.0% |      88 |     1 | `block in <top (required)>` | `../bundle/gems/rubocop-1.65.1/exe/rubocop` |

##### `RuboCop::CLI#profile_if_needed` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`)

|      % | Samples | Calls | Caller             | Location                                           |
| -----: | ------: | ----: | ------------------ | -------------------------------------------------- |
| 100.0% |      88 |     1 | `RuboCop::CLI#run` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb` |

##### `block in run` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`)

|      % | Samples | Calls | Caller                           | Location                                           |
| -----: | ------: | ----: | -------------------------------- | -------------------------------------------------- |
| 100.0% |      88 |     1 | `RuboCop::CLI#profile_if_needed` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb` |

##### `RuboCop::CLI#execute_runners` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`)

|      % | Samples | Calls | Caller         | Location                                           |
| -----: | ------: | ----: | -------------- | -------------------------------------------------- |
| 100.0% |      82 |     1 | `block in run` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb` |

##### `RuboCop::CLI#run_command` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`)

|     % | Samples | Calls | Caller                            | Location                                           |
| ----: | ------: | ----: | --------------------------------- | -------------------------------------------------- |
| 98.8% |      81 |     1 | `RuboCop::CLI#execute_runners`    | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb` |
|  1.2% |       1 |     1 | `RuboCop::CLI#suggest_extensions` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb` |

##### `RuboCop::CLI::Environment#run` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/environment.rb`)

|      % | Samples | Calls | Caller                     | Location                                           |
| -----: | ------: | ----: | -------------------------- | -------------------------------------------------- |
| 100.0% |      82 |     2 | `RuboCop::CLI#run_command` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb` |

##### `RuboCop::CLI::Command.run` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command.rb`)

|      % | Samples | Calls | Caller                          | Location                                                       |
| -----: | ------: | ----: | ------------------------------- | -------------------------------------------------------------- |
| 100.0% |      82 |     2 | `RuboCop::CLI::Environment#run` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/environment.rb` |

##### `Enumerable#reduce [c function]` (`<unknown>`)

|      % | Samples | Calls | Caller                                | Location                                              |
| -----: | ------: | ----: | ------------------------------------- | ----------------------------------------------------- |
| 100.0% |      81 |     1 | `RuboCop::Runner#each_inspected_file` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb` |

##### `RuboCop::CLI::Command::ExecuteRunner#run` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb`)

|      % | Samples | Calls | Caller                      | Location                                                   |
| -----: | ------: | ----: | --------------------------- | ---------------------------------------------------------- |
| 100.0% |      81 |     1 | `RuboCop::CLI::Command.run` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command.rb` |

##### `RuboCop::CLI::Command::ExecuteRunner#execute_runner` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb`)

|      % | Samples | Calls | Caller                                     | Location                                                                  |
| -----: | ------: | ----: | ------------------------------------------ | ------------------------------------------------------------------------- |
| 100.0% |      81 |     1 | `RuboCop::CLI::Command::ExecuteRunner#run` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb` |

##### `RuboCop::CLI::Command::ExecuteRunner#with_redirect` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb`)

|      % | Samples | Calls | Caller                                                | Location                                                                  |
| -----: | ------: | ----: | ----------------------------------------------------- | ------------------------------------------------------------------------- |
| 100.0% |      81 |     1 | `RuboCop::CLI::Command::ExecuteRunner#execute_runner` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb` |

##### `block in execute_runner` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb`)

|      % | Samples | Calls | Caller                                               | Location                                                                  |
| -----: | ------: | ----: | ---------------------------------------------------- | ------------------------------------------------------------------------- |
| 100.0% |      81 |     1 | `RuboCop::CLI::Command::ExecuteRunner#with_redirect` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb` |

##### `RuboCop::Runner#run` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`)

|      % | Samples | Calls | Caller                    | Location                                                                  |
| -----: | ------: | ----: | ------------------------- | ------------------------------------------------------------------------- |
| 100.0% |      81 |     1 | `block in execute_runner` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb` |

##### `RuboCop::Runner#each_inspected_file` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`)

|      % | Samples | Calls | Caller                          | Location                                              |
| -----: | ------: | ----: | ------------------------------- | ----------------------------------------------------- |
| 100.0% |      81 |     1 | `RuboCop::Runner#inspect_files` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb` |

##### `RuboCop::Runner#inspect_files` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`)

|      % | Samples | Calls | Caller                | Location                                              |
| -----: | ------: | ----: | --------------------- | ----------------------------------------------------- |
| 100.0% |      81 |     1 | `RuboCop::Runner#run` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb` |

##### `Kernel#require_relative [c function]` (`<unknown>`)

|      % | Samples | Calls | Caller                        | Location    |
| -----: | ------: | ----: | ----------------------------- | ----------- |
| 163.9% |      59 |     8 | `Kernel#require [c function]` | `<unknown>` |

##### `Kernel#public_send [c function]` (`<unknown>`)

|      % | Samples | Calls | Caller                                        | Location                                                        |
| -----: | ------: | ----: | --------------------------------------------- | --------------------------------------------------------------- |
| 151.9% |      41 |    40 | `block (2 levels) in trigger_responding_cops` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb` |

##### `Array#each [c function]` (`<unknown>`)

|       % | Samples | Calls | Caller                                               | Location                                                                      |
| ------: | ------: | ----: | ---------------------------------------------------- | ----------------------------------------------------------------------------- |
| 1153.3% |     173 |    32 | `RuboCop::AST::Traversal#on_dstr`                    | `<unknown>`                                                                   |
|  540.0% |      81 |     1 | `Enumerable#reduce [c function]`                     | `<unknown>`                                                                   |
|  393.3% |      59 |     1 | `Enumerable#flat_map [c function]`                   | `<unknown>`                                                                   |
|  280.0% |      42 |    41 | `RuboCop::Cop::Commissioner#trigger_responding_cops` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`               |
|  240.0% |      36 |    29 | `RuboCop::AST::Descendence#each_child_node`          | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb` |

##### `Class#new [c function]` (`<unknown>`)

|      % | Samples | Calls | Caller                                               | Location                                                                |
| -----: | ------: | ----: | ---------------------------------------------------- | ----------------------------------------------------------------------- |
| 150.0% |      21 |     1 | `RuboCop::AST::ProcessedSource.from_file`            | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/processed_source.rb` |
|  42.9% |       6 |     6 | `RuboCop::AST::BuilderExtensions#n`                  | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/builder.rb`          |
|  28.6% |       4 |     2 | `RuboCop::AST::NodePattern::Macros#def_node_matcher` | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern.rb`     |
|   7.1% |       1 |     1 | `block in mobilize_cops`                             | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/team.rb`                 |
|   7.1% |       1 |     1 | `RuboCop::AST::NodePattern#initialize`               | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern.rb`     |

##### `Parser::Source::Buffer#slice` (`../bundle/gems/parser-3.3.12.0/lib/parser/source/buffer.rb`)

|     % | Samples | Calls | Caller                         | Location                                                    |
| ----: | ------: | ----: | ------------------------------ | ----------------------------------------------------------- |
| 66.7% |       6 |     6 | `Parser::Source::Range#source` | `../bundle/gems/parser-3.3.12.0/lib/parser/source/range.rb` |
| 33.3% |       3 |     2 | `Parser::Lexer#tok`            | `../bundle/gems/parser-3.3.12.0/lib/parser/lexer-F1.rb`     |

##### `Parser::Lexer#advance` (`../bundle/gems/parser-3.3.12.0/lib/parser/lexer-F1.rb`)

|      % | Samples | Calls | Caller                    | Location                                            |
| -----: | ------: | ----: | ------------------------- | --------------------------------------------------- |
| 112.5% |       9 |     4 | `Parser::Base#next_token` | `../bundle/gems/parser-3.3.12.0/lib/parser/base.rb` |

##### `Kernel#require [c function]` (`<unknown>`)

|       % | Samples | Calls | Caller           | Location    |
| ------: | ------: | ----: | ---------------- | ----------- |
| 1316.7% |      79 |    15 | `Kernel#require` | `<unknown>` |

##### `String#[] [c function]` (`<unknown>`)

|     % | Samples | Calls | Caller                             | Location                                                            |
| ----: | ------: | ----: | ---------------------------------- | ------------------------------------------------------------------- |
| 66.7% |       4 |     4 | `Parser::Source::Buffer#slice`     | `../bundle/gems/parser-3.3.12.0/lib/parser/source/buffer.rb`        |
| 33.3% |       2 |     2 | `RuboCop::Cop::RangeHelp#move_pos` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/range_help.rb` |

##### `RuboCop::AST::Node#initialize` (`../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node.rb`)

|      % | Samples | Calls | Caller                   | Location    |
| -----: | ------: | ----: | ------------------------ | ----------- |
| 100.0% |       6 |     6 | `Class#new [c function]` | `<unknown>` |

##### `Parser::Source::Range#source` (`../bundle/gems/parser-3.3.12.0/lib/parser/source/range.rb`)

|     % | Samples | Calls | Caller                                     | Location                                                                |
| ----: | ------: | ----: | ------------------------------------------ | ----------------------------------------------------------------------- |
| 66.7% |       4 |     4 | `RuboCop::AST::IfNode#keyword`             | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/if_node.rb`     |
| 16.7% |       1 |     1 | `Parser::Source::Range#is?`                | `../bundle/gems/parser-3.3.12.0/lib/parser/source/range.rb`             |
| 16.7% |       1 |     1 | `RuboCop::Cop::TrailingComma#comma_offset` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/trailing_comma.rb` |

##### `RuboCop::CLI#act_on_options` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`)

|      % | Samples | Calls | Caller         | Location                                           |
| -----: | ------: | ----: | -------------- | -------------------------------------------------- |
| 100.0% |       6 |     1 | `block in run` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb` |

##### `Module#class_eval [c function]` (`<unknown>`)

|     % | Samples | Calls | Caller                                                | Location                                                                           |
| ----: | ------: | ----: | ----------------------------------------------------- | ---------------------------------------------------------------------------------- |
| 80.0% |       4 |     4 | `RuboCop::AST::NodePattern::MethodDefiner#def_helper` | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern/method_definer.rb` |
| 20.0% |       1 |     1 | `block in <class:Node>`                               | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node.rb`                        |

##### `Array#index [c function]` (`<unknown>`)

|      % | Samples | Calls | Caller                                                    | Location                                                                    |
| -----: | ------: | ----: | --------------------------------------------------------- | --------------------------------------------------------------------------- |
| 100.0% |       4 |     1 | `RuboCop::Cop::Layout::SpaceAfterComma#before_semicolon?` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/layout/space_after_comma.rb` |

##### `String#encode [c function]` (`<unknown>`)

|      % | Samples | Calls | Caller                         | Location                                                     |
| -----: | ------: | ----: | ------------------------------ | ------------------------------------------------------------ |
| 100.0% |       4 |     4 | `Parser::Source::Buffer#slice` | `../bundle/gems/parser-3.3.12.0/lib/parser/source/buffer.rb` |

##### `Psych.safe_load` (`../lib/ruby/3.4.0/psych.rb`)

|     % | Samples | Calls | Caller                                  | Location                                                     |
| ----: | ------: | ----: | --------------------------------------- | ------------------------------------------------------------ |
| 50.0% |       2 |     1 | `block in cache_root_dir_from_config`   | `../bundle/gems/rubocop-1.65.1/lib/rubocop/server/cache.rb`  |
| 50.0% |       2 |     1 | `RuboCop::ConfigLoader.yaml_safe_load!` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/config_loader.rb` |

##### `String#index [c function]` (`<unknown>`)

|      % | Samples | Calls | Caller                               | Location                                                     |
| -----: | ------: | ----: | ------------------------------------ | ------------------------------------------------------------ |
| 100.0% |       3 |     1 | `Parser::Source::Buffer#line_begins` | `../bundle/gems/parser-3.3.12.0/lib/parser/source/buffer.rb` |

##### `Array#include? [c function]` (`<unknown>`)

|      % | Samples | Calls | Caller                        | Location                                                    |
| -----: | ------: | ----: | ----------------------------- | ----------------------------------------------------------- |
| 100.0% |       2 |     2 | `RuboCop::AST::Node#type_in?` | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node.rb` |

##### `Psych::Parser#_native_parse [c function]` (`<unknown>`)

|      % | Samples | Calls | Caller                | Location                            |
| -----: | ------: | ----: | --------------------- | ----------------------------------- |
| 100.0% |       2 |     2 | `Psych::Parser#parse` | `../lib/ruby/3.4.0/psych/parser.rb` |

##### `Racc::Parser#_racc_do_parse_c [c function]` (`<unknown>`)

|      % | Samples | Calls | Caller                  | Location    |
| -----: | ------: | ----: | ----------------------- | ----------- |
| 950.0% |      19 |     2 | `Racc::Parser#do_parse` | `<unknown>` |

##### `Psych.parse` (`../lib/ruby/3.4.0/psych.rb`)

|      % | Samples | Calls | Caller            | Location                     |
| -----: | ------: | ----: | ----------------- | ---------------------------- |
| 100.0% |       2 |     2 | `Psych.safe_load` | `../lib/ruby/3.4.0/psych.rb` |

##### `Psych.parse_stream` (`../lib/ruby/3.4.0/psych.rb`)

|      % | Samples | Calls | Caller        | Location                     |
| -----: | ------: | ----: | ------------- | ---------------------------- |
| 100.0% |       2 |     2 | `Psych.parse` | `../lib/ruby/3.4.0/psych.rb` |

##### `Psych::Parser#parse` (`../lib/ruby/3.4.0/psych/parser.rb`)

|      % | Samples | Calls | Caller               | Location                     |
| -----: | ------: | ----: | -------------------- | ---------------------------- |
| 100.0% |       2 |     2 | `Psych.parse_stream` | `../lib/ruby/3.4.0/psych.rb` |

##### `Psych::Visitors::ToRuby#visit_Psych_Nodes_Scalar` (`../lib/ruby/3.4.0/psych/visitors/to_ruby.rb`)

|      % | Samples | Calls | Caller                           | Location                                      |
| -----: | ------: | ----: | -------------------------------- | --------------------------------------------- |
| 100.0% |       2 |     2 | `Psych::Visitors::Visitor#visit` | `../lib/ruby/3.4.0/psych/visitors/visitor.rb` |

##### `Psych::Visitors::Visitor#visit` (`../lib/ruby/3.4.0/psych/visitors/visitor.rb`)

|      % | Samples | Calls | Caller                            | Location                                      |
| -----: | ------: | ----: | --------------------------------- | --------------------------------------------- |
| 450.0% |       9 |     9 | `Psych::Visitors::Visitor#accept` | `../lib/ruby/3.4.0/psych/visitors/visitor.rb` |

##### `Gem::Specification.load` (`../lib/ruby/3.4.0/rubygems/specification.rb`)

|     % | Samples | Calls | Caller                        | Location                                           |
| ----: | ------: | ----: | ----------------------------- | -------------------------------------------------- |
| 50.0% |       1 |     1 | `Gem::StubSpecification#spec` | `../lib/ruby/3.4.0/rubygems/stub_specification.rb` |
| 50.0% |       1 |     1 | `block in each_spec`          | `../lib/ruby/3.4.0/rubygems/specification.rb`      |

##### `Array#bsearch_index [c function]` (`<unknown>`)

|      % | Samples | Calls | Caller                                           | Location                                                                |
| -----: | ------: | ----: | ------------------------------------------------ | ----------------------------------------------------------------------- |
| 100.0% |       1 |     1 | `RuboCop::AST::ProcessedSource#last_token_index` | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/processed_source.rb` |

##### `Array#each_index [c function]` (`<unknown>`)

|      % | Samples | Calls | Caller                                                           | Location                                                                        |
| -----: | ------: | ----: | ---------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| 100.0% |       1 |     1 | `RuboCop::Cop::Style::LineEndConcatenation#on_new_investigation` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/style/line_end_concatenation.rb` |

##### `Array#map [c function]` (`<unknown>`)

|      % | Samples | Calls | Caller                                                                   | Location                                                                                          |
| -----: | ------: | ----: | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------- |
| 400.0% |       4 |     3 | `RuboCop::AST::NodePattern::Compiler::SequenceSubcompiler#compile_terms` | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern/compiler/sequence_subcompiler.rb` |
| 100.0% |       1 |     1 | `Gem::SpecificationRecord#find_all_by_name`                              | `../lib/ruby/3.4.0/rubygems/specification_record.rb`                                              |

##### `Dir.chdir [c function]` (`<unknown>`)

|      % | Samples | Calls | Caller                                          | Location                                                     |
| -----: | ------: | ----: | ----------------------------------------------- | ------------------------------------------------------------ |
| 100.0% |       1 |     1 | `RuboCop::ConfigLoader.load_yaml_configuration` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/config_loader.rb` |

##### `Enumerator#each [c function]` (`<unknown>`)

|      % | Samples | Calls | Caller                                                      | Location                                                                     |
| -----: | ------: | ----: | ----------------------------------------------------------- | ---------------------------------------------------------------------------- |
| 200.0% |       2 |     2 | `Enumerable#to_a [c function]`                              | `<unknown>`                                                                  |
| 100.0% |       1 |     1 | `Enumerable#each_entry [c function]`                        | `<unknown>`                                                                  |
| 100.0% |       1 |     1 | `Enumerable#map [c function]`                               | `<unknown>`                                                                  |
| 100.0% |       1 |     1 | `Enumerable#select [c function]`                            | `<unknown>`                                                                  |
| 100.0% |       1 |     1 | `RuboCop::AST::NodePattern::Compiler#enforce_same_captures` | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern/compiler.rb` |

##### `Integer#times` (`<unknown>`)

|      % | Samples | Calls | Caller                                 | Location    |
| -----: | ------: | ----: | -------------------------------------- | ----------- |
| 100.0% |       1 |     1 | `Kernel#require_relative [c function]` | `<unknown>` |

##### `Psych::TreeBuilder#end_mapping` (`<unknown>`)

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

##### `RuboCop::AST::SendNode#attribute_accessor?` (`<unknown>`)

|      % | Samples | Calls | Caller                                                            | Location                                                                                        |
| -----: | ------: | ----: | ----------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| 100.0% |       1 |     1 | `RuboCop::Cop::Lint::TrailingCommaInAttributeDeclaration#on_send` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/lint/trailing_comma_in_attribute_declaration.rb` |

##### `RuboCop::Cop::Naming::BinaryOperatorParameterName#op_method_candidate?` (`<unknown>`)

|      % | Samples | Calls | Caller                                                     | Location                                                                                 |
| -----: | ------: | ----: | ---------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% |       1 |     1 | `RuboCop::Cop::Naming::BinaryOperatorParameterName#on_def` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/naming/binary_operator_parameter_name.rb` |

##### `RuboCop::Cop::Style::ConditionalAssignment#assignment_type?` (`<unknown>`)

|      % | Samples | Calls | Caller                                               | Location                                                                        |
| -----: | ------: | ----: | ---------------------------------------------------- | ------------------------------------------------------------------------------- |
| 100.0% |       1 |     1 | `RuboCop::Cop::Style::ConditionalAssignment#on_send` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/style/conditional_assignment.rb` |

##### `RuboCop::Cop::Style::OrAssignment#ternary_assignment?` (`<unknown>`)

|      % | Samples | Calls | Caller                                        | Location                                                               |
| -----: | ------: | ----: | --------------------------------------------- | ---------------------------------------------------------------------- |
| 100.0% |       1 |     1 | `RuboCop::Cop::Style::OrAssignment#on_lvasgn` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/style/or_assignment.rb` |

##### `RuboCop::AST::Node#match_guard_clause?` (`<unknown>`)

|      % | Samples | Calls | Caller                             | Location                                                    |
| -----: | ------: | ----: | ---------------------------------- | ----------------------------------------------------------- |
| 100.0% |       1 |     1 | `RuboCop::AST::Node#guard_clause?` | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node.rb` |

##### `block in private_class_methods` (`<unknown>`)

|      % | Samples | Calls | Caller                           | Location                                                                      |
| -----: | ------: | ----: | -------------------------------- | ----------------------------------------------------------------------------- |
| 100.0% |       1 |     1 | `block in visit_all_descendants` | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb` |

##### `RuboCop::AST::Node#lvasgn_type?` (`<unknown>`)

|      % | Samples | Calls | Caller                                                  | Location    |
| -----: | ------: | ----: | ------------------------------------------------------- | ----------- |
| 100.0% |       1 |     1 | `RuboCop::Cop::Style::OrAssignment#ternary_assignment?` | `<unknown>` |

##### `block (2 levels) in each_gemspec` (`../lib/ruby/3.4.0/rubygems/specification.rb`)

|      % | Samples | Calls | Caller                    | Location    |
| -----: | ------: | ----: | ------------------------- | ----------- |
| 100.0% |       1 |     1 | `Array#each [c function]` | `<unknown>` |

##### `Gem::StubSpecification#spec` (`../lib/ruby/3.4.0/rubygems/stub_specification.rb`)

|      % | Samples | Calls | Caller                   | Location    |
| -----: | ------: | ----: | ------------------------ | ----------- |
| 100.0% |       1 |     1 | `Array#map [c function]` | `<unknown>` |

##### `ERB#initialize` (`../lib/ruby/3.4.0/erb.rb`)

|      % | Samples | Calls | Caller                   | Location    |
| -----: | ------: | ----: | ------------------------ | ----------- |
| 100.0% |       1 |     1 | `Class#new [c function]` | `<unknown>` |

##### `Psych::Nodes::Scalar#initialize` (`../lib/ruby/3.4.0/psych/nodes/scalar.rb`)

|      % | Samples | Calls | Caller                   | Location    |
| -----: | ------: | ----: | ------------------------ | ----------- |
| 100.0% |       1 |     1 | `Class#new [c function]` | `<unknown>` |

##### `Set#each` (`../lib/ruby/3.4.0/set.rb`)

|      % | Samples | Calls | Caller                                 | Location    |
| -----: | ------: | ----: | -------------------------------------- | ----------- |
| 100.0% |       1 |     1 | `Kernel#require_relative [c function]` | `<unknown>` |

##### `Psych::TreeBuilder#scalar` (`../lib/ruby/3.4.0/psych/tree_builder.rb`)

|      % | Samples | Calls | Caller                                     | Location    |
| -----: | ------: | ----: | ------------------------------------------ | ----------- |
| 100.0% |       1 |     1 | `Psych::Parser#_native_parse [c function]` | `<unknown>` |

##### `block in activate_bin_path` (`../lib/ruby/3.4.0/rubygems.rb`)

|      % | Samples | Calls | Caller                                   | Location    |
| -----: | ------: | ----: | ---------------------------------------- | ----------- |
| 100.0% |       1 |     1 | `Thread::Mutex#synchronize [c function]` | `<unknown>` |

##### `Gem.activate_bin_path` (`../lib/ruby/3.4.0/rubygems.rb`)

|      % | Samples | Calls | Caller   | Location  |
| -----: | ------: | ----: | -------- | --------- |
| 100.0% |       1 |     1 | `<main>` | `rubocop` |

##### `ERB::Compiler#compile` (`../lib/ruby/3.4.0/erb/compiler.rb`)

|      % | Samples | Calls | Caller           | Location                   |
| -----: | ------: | ----: | ---------------- | -------------------------- |
| 100.0% |       1 |     1 | `ERB#initialize` | `../lib/ruby/3.4.0/erb.rb` |

##### `ERB::Compiler::SimpleScanner#scan` (`../lib/ruby/3.4.0/erb/compiler.rb`)

|      % | Samples | Calls | Caller                  | Location                            |
| -----: | ------: | ----: | ----------------------- | ----------------------------------- |
| 100.0% |       1 |     1 | `ERB::Compiler#compile` | `../lib/ruby/3.4.0/erb/compiler.rb` |

##### `Psych::ScalarScanner#tokenize` (`../lib/ruby/3.4.0/psych/scalar_scanner.rb`)

|      % | Samples | Calls | Caller                                | Location                                      |
| -----: | ------: | ----: | ------------------------------------- | --------------------------------------------- |
| 100.0% |       1 |     1 | `Psych::Visitors::ToRuby#deserialize` | `../lib/ruby/3.4.0/psych/visitors/to_ruby.rb` |

##### `Psych::TreeBuilder#pop` (`../lib/ruby/3.4.0/psych/tree_builder.rb`)

|      % | Samples | Calls | Caller                           | Location    |
| -----: | ------: | ----: | -------------------------------- | ----------- |
| 100.0% |       1 |     1 | `Psych::TreeBuilder#end_mapping` | `<unknown>` |

#### Callees

Callees ranked by contribution to each function's total samples. Percentages are of the function's total and can exceed 100% for calls within a recursion cycle.

##### `<main>` (`rubocop`)

|     % | Samples | Calls | Callee                     | Location                        |
| ----: | ------: | ----: | -------------------------- | ------------------------------- |
| 99.3% |     137 |     1 | `Kernel#load [c function]` | `<unknown>`                     |
|  0.7% |       1 |     1 | `Gem.activate_bin_path`    | `../lib/ruby/3.4.0/rubygems.rb` |

##### `Kernel#load [c function]` (`<unknown>`)

|     % | Samples | Calls | Callee                     | Location                                              |
| ----: | ------: | ----: | -------------------------- | ----------------------------------------------------- |
| 64.2% |      88 |     1 | `Benchmark.realtime`       | `../lib/ruby/3.4.0/benchmark.rb`                      |
| 33.6% |      46 |     1 | `Kernel#require`           | `<unknown>`                                           |
|  2.2% |       3 |     1 | `RuboCop::Server.running?` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/server.rb` |

##### `Benchmark.realtime` (`../lib/ruby/3.4.0/benchmark.rb`)

|      % | Samples | Calls | Callee                      | Location                                    |
| -----: | ------: | ----: | --------------------------- | ------------------------------------------- |
| 100.0% |      88 |     1 | `block in <top (required)>` | `../bundle/gems/rubocop-1.65.1/exe/rubocop` |

##### `block in <top (required)>` (`../bundle/gems/rubocop-1.65.1/exe/rubocop`)

|      % | Samples | Calls | Callee             | Location                                           |
| -----: | ------: | ----: | ------------------ | -------------------------------------------------- |
| 100.0% |      88 |     1 | `RuboCop::CLI#run` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb` |

##### `RuboCop::CLI#run` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`)

|      % | Samples | Calls | Callee                           | Location                                           |
| -----: | ------: | ----: | -------------------------------- | -------------------------------------------------- |
| 100.0% |      88 |     1 | `RuboCop::CLI#profile_if_needed` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb` |

##### `RuboCop::CLI#profile_if_needed` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`)

|      % | Samples | Calls | Callee         | Location                                           |
| -----: | ------: | ----: | -------------- | -------------------------------------------------- |
| 100.0% |      88 |     1 | `block in run` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb` |

##### `block in run` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`)

|     % | Samples | Calls | Callee                         | Location                                           |
| ----: | ------: | ----: | ------------------------------ | -------------------------------------------------- |
| 93.2% |      82 |     1 | `RuboCop::CLI#execute_runners` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb` |
|  6.8% |       6 |     1 | `RuboCop::CLI#act_on_options`  | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb` |

##### `RuboCop::CLI#execute_runners` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`)

|     % | Samples | Calls | Callee                     | Location                                           |
| ----: | ------: | ----: | -------------------------- | -------------------------------------------------- |
| 98.8% |      81 |     1 | `RuboCop::CLI#run_command` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb` |
|  1.2% |       1 |     1 | `Kernel#tap`               | `<unknown>`                                        |

##### `RuboCop::CLI#run_command` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`)

|      % | Samples | Calls | Callee                          | Location                                                       |
| -----: | ------: | ----: | ------------------------------- | -------------------------------------------------------------- |
| 100.0% |      82 |     2 | `RuboCop::CLI::Environment#run` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/environment.rb` |

##### `RuboCop::CLI::Environment#run` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/environment.rb`)

|      % | Samples | Calls | Callee                      | Location                                                   |
| -----: | ------: | ----: | --------------------------- | ---------------------------------------------------------- |
| 100.0% |      82 |     2 | `RuboCop::CLI::Command.run` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command.rb` |

##### `RuboCop::CLI::Command.run` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command.rb`)

|     % | Samples | Calls | Callee                                         | Location                                                                      |
| ----: | ------: | ----: | ---------------------------------------------- | ----------------------------------------------------------------------------- |
| 98.8% |      81 |     1 | `RuboCop::CLI::Command::ExecuteRunner#run`     | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb`     |
|  1.2% |       1 |     1 | `RuboCop::CLI::Command::SuggestExtensions#run` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command/suggest_extensions.rb` |

##### `Enumerable#reduce [c function]` (`<unknown>`)

|      % | Samples | Calls | Callee                    | Location    |
| -----: | ------: | ----: | ------------------------- | ----------- |
| 100.0% |      81 |     1 | `Array#each [c function]` | `<unknown>` |

##### `RuboCop::CLI::Command::ExecuteRunner#run` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb`)

|      % | Samples | Calls | Callee                                                | Location                                                                  |
| -----: | ------: | ----: | ----------------------------------------------------- | ------------------------------------------------------------------------- |
| 100.0% |      81 |     1 | `RuboCop::CLI::Command::ExecuteRunner#execute_runner` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb` |

##### `RuboCop::CLI::Command::ExecuteRunner#execute_runner` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb`)

|      % | Samples | Calls | Callee                                               | Location                                                                  |
| -----: | ------: | ----: | ---------------------------------------------------- | ------------------------------------------------------------------------- |
| 100.0% |      81 |     1 | `RuboCop::CLI::Command::ExecuteRunner#with_redirect` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb` |

##### `RuboCop::CLI::Command::ExecuteRunner#with_redirect` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb`)

|      % | Samples | Calls | Callee                    | Location                                                                  |
| -----: | ------: | ----: | ------------------------- | ------------------------------------------------------------------------- |
| 100.0% |      81 |     1 | `block in execute_runner` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb` |

##### `block in execute_runner` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb`)

|      % | Samples | Calls | Callee                | Location                                              |
| -----: | ------: | ----: | --------------------- | ----------------------------------------------------- |
| 100.0% |      81 |     1 | `RuboCop::Runner#run` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb` |

##### `RuboCop::Runner#run` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`)

|      % | Samples | Calls | Callee                          | Location                                              |
| -----: | ------: | ----: | ------------------------------- | ----------------------------------------------------- |
| 100.0% |      81 |     1 | `RuboCop::Runner#inspect_files` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb` |

##### `RuboCop::Runner#each_inspected_file` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`)

|      % | Samples | Calls | Callee                           | Location    |
| -----: | ------: | ----: | -------------------------------- | ----------- |
| 100.0% |      81 |     1 | `Enumerable#reduce [c function]` | `<unknown>` |

##### `RuboCop::Runner#inspect_files` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`)

|      % | Samples | Calls | Callee                                | Location                                              |
| -----: | ------: | ----: | ------------------------------------- | ----------------------------------------------------- |
| 100.0% |      81 |     1 | `RuboCop::Runner#each_inspected_file` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb` |

##### `Kernel#require_relative [c function]` (`<unknown>`)

|     % | Samples | Calls | Callee                                               | Location                                                            |
| ----: | ------: | ----: | ---------------------------------------------------- | ------------------------------------------------------------------- |
| 44.4% |      16 |     7 | `Kernel#require`                                     | `<unknown>`                                                         |
| 19.4% |       7 |     4 | `RuboCop::AST::NodePattern::Macros#def_node_matcher` | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern.rb` |
|  2.8% |       1 |     1 | `Module#include [c function]`                        | `<unknown>`                                                         |
|  2.8% |       1 |     1 | `Module#refine [c function]`                         | `<unknown>`                                                         |
|  2.8% |       1 |     1 | `RuboCop::AST::NodePattern::Macros#def_node_search`  | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern.rb` |

##### `Kernel#public_send [c function]` (`<unknown>`)

|     % | Samples | Calls | Callee                                                     | Location                                                                            |
| ----: | ------: | ----: | ---------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| 11.1% |       3 |     3 | `RuboCop::Cop::Layout::SpaceAroundOperators#on_assignment` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/layout/space_around_operators.rb`    |
| 11.1% |       3 |     3 | `RuboCop::Cop::Layout::SpaceBeforeFirstArg#on_send`        | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/layout/space_before_first_arg.rb`    |
| 11.1% |       3 |     3 | `RuboCop::Cop::MethodComplexity#on_def`                    | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/method_complexity.rb`          |
|  7.4% |       2 |     2 | `RuboCop::Cop::Layout::ElseAlignment#on_if`                | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/layout/else_alignment.rb`            |
|  7.4% |       2 |     2 | `RuboCop::Cop::Lint::IneffectiveAccessModifier#on_class`   | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/lint/ineffective_access_modifier.rb` |

##### `Array#each [c function]` (`<unknown>`)

|       % | Samples | Calls | Callee                             | Location                                                                      |
| ------: | ------: | ----: | ---------------------------------- | ----------------------------------------------------------------------------- |
| 1153.3% |     173 |    32 | `block in on_dstr`                 | `<unknown>`                                                                   |
|  540.0% |      81 |     1 | `block in each_inspected_file`     | `../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`                         |
|  393.3% |      59 |     1 | `block in inspect_file`            | `../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`                         |
|  280.0% |      42 |    41 | `block in trigger_responding_cops` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`               |
|  240.0% |      36 |    29 | `block in each_child_node`         | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb` |

##### `Class#new [c function]` (`<unknown>`)

|      % | Samples | Calls | Callee                                     | Location                                                                |
| -----: | ------: | ----: | ------------------------------------------ | ----------------------------------------------------------------------- |
| 150.0% |      21 |     1 | `RuboCop::AST::ProcessedSource#initialize` | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/processed_source.rb` |
|  42.9% |       6 |     6 | `RuboCop::AST::Node#initialize`            | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node.rb`             |
|  28.6% |       4 |     2 | `RuboCop::AST::NodePattern#initialize`     | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern.rb`     |
|  14.3% |       2 |     2 | `Parser::Source::Range#initialize`         | `../bundle/gems/parser-3.3.12.0/lib/parser/source/range.rb`             |
|   7.1% |       1 |     1 | `Parser::Source::Map::Variable#initialize` | `../bundle/gems/parser-3.3.12.0/lib/parser/source/map/variable.rb`      |

##### `Parser::Source::Buffer#slice` (`../bundle/gems/parser-3.3.12.0/lib/parser/source/buffer.rb`)

|     % | Samples | Calls | Callee                       | Location    |
| ----: | ------: | ----: | ---------------------------- | ----------- |
| 44.4% |       4 |     4 | `String#[] [c function]`     | `<unknown>` |
| 44.4% |       4 |     4 | `String#encode [c function]` | `<unknown>` |

##### `Parser::Lexer#advance` (`../bundle/gems/parser-3.3.12.0/lib/parser/lexer-F1.rb`)

|     % | Samples | Calls | Callee                                  | Location                                                     |
| ----: | ------: | ----: | --------------------------------------- | ------------------------------------------------------------ |
| 25.0% |       2 |     1 | `Parser::Lexer#emit_table`              | `../bundle/gems/parser-3.3.12.0/lib/parser/lexer-F1.rb`      |
| 12.5% |       1 |     1 | `Parser::Lexer#emit`                    | `../bundle/gems/parser-3.3.12.0/lib/parser/lexer-F1.rb`      |
| 12.5% |       1 |     1 | `Parser::Lexer#emit_comment_from_range` | `../bundle/gems/parser-3.3.12.0/lib/parser/lexer-F1.rb`      |
| 12.5% |       1 |     1 | `Parser::LexerStrings#advance`          | `../bundle/gems/parser-3.3.12.0/lib/parser/lexer-strings.rb` |

##### `Kernel#require [c function]` (`<unknown>`)

|      % | Samples | Calls | Callee                                 | Location                                      |
| -----: | ------: | ----: | -------------------------------------- | --------------------------------------------- |
| 983.3% |      59 |     8 | `Kernel#require_relative [c function]` | `<unknown>`                                   |
| 233.3% |      14 |     4 | `Kernel#require`                       | `<unknown>`                                   |
|  16.7% |       1 |     1 | `Gem::Specification.load_defaults`     | `../lib/ruby/3.4.0/rubygems/specification.rb` |

##### `RuboCop::AST::Node#initialize` (`../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node.rb`)

|     % | Samples | Calls | Callee                 | Location                                   |
| ----: | ------: | ----: | ---------------------- | ------------------------------------------ |
| 66.7% |       4 |     4 | `AST::Node#initialize` | `../bundle/gems/ast-2.4.3/lib/ast/node.rb` |

##### `Parser::Source::Range#source` (`../bundle/gems/parser-3.3.12.0/lib/parser/source/range.rb`)

|      % | Samples | Calls | Callee                         | Location                                                     |
| -----: | ------: | ----: | ------------------------------ | ------------------------------------------------------------ |
| 100.0% |       6 |     6 | `Parser::Source::Buffer#slice` | `../bundle/gems/parser-3.3.12.0/lib/parser/source/buffer.rb` |

##### `RuboCop::CLI#act_on_options` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`)

|      % | Samples | Calls | Callee                                       | Location                                                    |
| -----: | ------: | ----: | -------------------------------------------- | ----------------------------------------------------------- |
| 100.0% |       6 |     1 | `RuboCop::ConfigStore#force_default_config!` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/config_store.rb` |

##### `Psych.safe_load` (`../lib/ruby/3.4.0/psych.rb`)

|     % | Samples | Calls | Callee                           | Location                                      |
| ----: | ------: | ----: | -------------------------------- | --------------------------------------------- |
| 50.0% |       2 |     2 | `Psych.parse`                    | `../lib/ruby/3.4.0/psych.rb`                  |
| 50.0% |       2 |     2 | `Psych::Visitors::ToRuby#accept` | `../lib/ruby/3.4.0/psych/visitors/to_ruby.rb` |

##### `Psych::Parser#_native_parse [c function]` (`<unknown>`)

|     % | Samples | Calls | Callee                           | Location                                  |
| ----: | ------: | ----: | -------------------------------- | ----------------------------------------- |
| 50.0% |       1 |     1 | `Psych::TreeBuilder#scalar`      | `../lib/ruby/3.4.0/psych/tree_builder.rb` |
| 50.0% |       1 |     1 | `Psych::TreeBuilder#end_mapping` | `<unknown>`                               |

##### `Racc::Parser#_racc_do_parse_c [c function]` (`<unknown>`)

|      % | Samples | Calls | Callee                       | Location                                              |
| -----: | ------: | ----: | ---------------------------- | ----------------------------------------------------- |
| 450.0% |       9 |     4 | `Parser::Base#next_token`    | `../bundle/gems/parser-3.3.12.0/lib/parser/base.rb`   |
|  50.0% |       1 |     1 | `Parser::Ruby27#_reduce_418` | `../bundle/gems/parser-3.3.12.0/lib/parser/ruby27.rb` |
|  50.0% |       1 |     1 | `Parser::Ruby27#_reduce_531` | `../bundle/gems/parser-3.3.12.0/lib/parser/ruby27.rb` |
|  50.0% |       1 |     1 | `Parser::Ruby27#_reduce_546` | `../bundle/gems/parser-3.3.12.0/lib/parser/ruby27.rb` |
|  50.0% |       1 |     1 | `Parser::Ruby27#_reduce_549` | `../bundle/gems/parser-3.3.12.0/lib/parser/ruby27.rb` |

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

##### `Psych::Visitors::ToRuby#visit_Psych_Nodes_Scalar` (`../lib/ruby/3.4.0/psych/visitors/to_ruby.rb`)

|     % | Samples | Calls | Callee                                | Location                                      |
| ----: | ------: | ----: | ------------------------------------- | --------------------------------------------- |
| 50.0% |       1 |     1 | `Psych::Visitors::ToRuby#deserialize` | `../lib/ruby/3.4.0/psych/visitors/to_ruby.rb` |
| 50.0% |       1 |     1 | `Psych::Visitors::ToRuby#register`    | `../lib/ruby/3.4.0/psych/visitors/to_ruby.rb` |

##### `Psych::Visitors::Visitor#visit` (`../lib/ruby/3.4.0/psych/visitors/visitor.rb`)

|      % | Samples | Calls | Callee                                               | Location                                      |
| -----: | ------: | ----: | ---------------------------------------------------- | --------------------------------------------- |
| 200.0% |       4 |     4 | `Psych::Visitors::ToRuby#visit_Psych_Nodes_Mapping`  | `../lib/ruby/3.4.0/psych/visitors/to_ruby.rb` |
| 100.0% |       2 |     2 | `Psych::Visitors::ToRuby#visit_Psych_Nodes_Document` | `../lib/ruby/3.4.0/psych/visitors/to_ruby.rb` |
| 100.0% |       2 |     2 | `Psych::Visitors::ToRuby#visit_Psych_Nodes_Scalar`   | `../lib/ruby/3.4.0/psych/visitors/to_ruby.rb` |
|  50.0% |       1 |     1 | `Psych::Visitors::ToRuby#visit_Psych_Nodes_Sequence` | `../lib/ruby/3.4.0/psych/visitors/to_ruby.rb` |

##### `Gem::Specification.load` (`../lib/ruby/3.4.0/rubygems/specification.rb`)

|     % | Samples | Calls | Callee                        | Location    |
| ----: | ------: | ----: | ----------------------------- | ----------- |
| 50.0% |       1 |     1 | `Kernel#binding [c function]` | `<unknown>` |
| 50.0% |       1 |     1 | `Kernel#eval [c function]`    | `<unknown>` |

##### `Array#bsearch_index [c function]` (`<unknown>`)

|      % | Samples | Calls | Callee                      | Location                                                                |
| -----: | ------: | ----: | --------------------------- | ----------------------------------------------------------------------- |
| 100.0% |       1 |     1 | `block in last_token_index` | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/processed_source.rb` |

##### `Array#each_index [c function]` (`<unknown>`)

|      % | Samples | Calls | Callee                          | Location                                                                        |
| -----: | ------: | ----: | ------------------------------- | ------------------------------------------------------------------------------- |
| 100.0% |       1 |     1 | `block in on_new_investigation` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/style/line_end_concatenation.rb` |

##### `Array#map [c function]` (`<unknown>`)

|      % | Samples | Calls | Callee                        | Location                                                                                          |
| -----: | ------: | ----: | ----------------------------- | ------------------------------------------------------------------------------------------------- |
| 400.0% |       4 |     3 | `block in compile_terms`      | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern/compiler/sequence_subcompiler.rb` |
| 100.0% |       1 |     1 | `Gem::StubSpecification#spec` | `../lib/ruby/3.4.0/rubygems/stub_specification.rb`                                                |

##### `Dir.chdir [c function]` (`<unknown>`)

|      % | Samples | Calls | Callee                             | Location                                                     |
| -----: | ------: | ----: | ---------------------------------- | ------------------------------------------------------------ |
| 100.0% |       1 |     1 | `block in load_yaml_configuration` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/config_loader.rb` |

##### `Enumerator#each [c function]` (`<unknown>`)

|      % | Samples | Calls | Callee                                                                | Location                                                                      |
| -----: | ------: | ----: | --------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| 200.0% |       2 |     2 | `RuboCop::AST::Descendence#each_node`                                 | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb` |
| 200.0% |       2 |     2 | `RuboCop::Cop::Lint::IneffectiveAccessModifier#private_class_methods` | `<unknown>`                                                                   |
| 100.0% |       1 |     1 | `Integer#downto [c function]`                                         | `<unknown>`                                                                   |
| 100.0% |       1 |     1 | `RuboCop::AST::Node#each_ancestor`                                    | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node.rb`                   |
| 100.0% |       1 |     1 | `RuboCop::AST::NodePattern::Compiler#enforce_same_captures`           | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern/compiler.rb`  |

##### `Integer#times` (`<unknown>`)

|      % | Samples | Calls | Callee                  | Location                          |
| -----: | ------: | ----: | ----------------------- | --------------------------------- |
| 100.0% |       1 |     1 | `block in <module:URI>` | `../lib/ruby/3.4.0/uri/common.rb` |

##### `Psych::TreeBuilder#end_mapping` (`<unknown>`)

|      % | Samples | Calls | Callee                   | Location                                  |
| -----: | ------: | ----: | ------------------------ | ----------------------------------------- |
| 100.0% |       1 |     1 | `Psych::TreeBuilder#pop` | `../lib/ruby/3.4.0/psych/tree_builder.rb` |

##### `Kernel#tap` (`<unknown>`)

|      % | Samples | Calls | Callee                     | Location                                           |
| -----: | ------: | ----: | -------------------------- | -------------------------------------------------- |
| 100.0% |       1 |     1 | `block in execute_runners` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb` |

##### `RuboCop::Cop::Style::ConditionalAssignment#assignment_type?` (`<unknown>`)

|      % | Samples | Calls | Callee                                                          | Location                                                                        |
| -----: | ------: | ----: | --------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| 100.0% |       1 |     1 | `RuboCop::Cop::Style::ConditionalAssignmentHelper#end_with_eq?` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/style/conditional_assignment.rb` |

##### `RuboCop::Cop::Style::OrAssignment#ternary_assignment?` (`<unknown>`)

|      % | Samples | Calls | Callee                            | Location    |
| -----: | ------: | ----: | --------------------------------- | ----------- |
| 100.0% |       1 |     1 | `RuboCop::AST::Node#lvasgn_type?` | `<unknown>` |

##### `block (2 levels) in each_gemspec` (`../lib/ruby/3.4.0/rubygems/specification.rb`)

|      % | Samples | Calls | Callee               | Location                                      |
| -----: | ------: | ----: | -------------------- | --------------------------------------------- |
| 100.0% |       1 |     1 | `block in each_spec` | `../lib/ruby/3.4.0/rubygems/specification.rb` |

##### `Gem::StubSpecification#spec` (`../lib/ruby/3.4.0/rubygems/stub_specification.rb`)

|      % | Samples | Calls | Callee                    | Location                                      |
| -----: | ------: | ----: | ------------------------- | --------------------------------------------- |
| 100.0% |       1 |     1 | `Gem::Specification.load` | `../lib/ruby/3.4.0/rubygems/specification.rb` |

##### `ERB#initialize` (`../lib/ruby/3.4.0/erb.rb`)

|      % | Samples | Calls | Callee                  | Location                            |
| -----: | ------: | ----: | ----------------------- | ----------------------------------- |
| 100.0% |       1 |     1 | `ERB::Compiler#compile` | `../lib/ruby/3.4.0/erb/compiler.rb` |

##### `Set#each` (`../lib/ruby/3.4.0/set.rb`)

|      % | Samples | Calls | Callee                       | Location    |
| -----: | ------: | ----: | ---------------------------- | ----------- |
| 100.0% |       1 |     1 | `Hash#each_key [c function]` | `<unknown>` |

##### `Psych::TreeBuilder#scalar` (`../lib/ruby/3.4.0/psych/tree_builder.rb`)

|      % | Samples | Calls | Callee                   | Location    |
| -----: | ------: | ----: | ------------------------ | ----------- |
| 100.0% |       1 |     1 | `Class#new [c function]` | `<unknown>` |

##### `block in activate_bin_path` (`../lib/ruby/3.4.0/rubygems.rb`)

|      % | Samples | Calls | Callee                        | Location                                      |
| -----: | ------: | ----: | ----------------------------- | --------------------------------------------- |
| 100.0% |       1 |     1 | `Gem::Specification#activate` | `../lib/ruby/3.4.0/rubygems/specification.rb` |

##### `Gem.activate_bin_path` (`../lib/ruby/3.4.0/rubygems.rb`)

|      % | Samples | Calls | Callee                                   | Location    |
| -----: | ------: | ----: | ---------------------------------------- | ----------- |
| 100.0% |       1 |     1 | `Thread::Mutex#synchronize [c function]` | `<unknown>` |

##### `ERB::Compiler#compile` (`../lib/ruby/3.4.0/erb/compiler.rb`)

|      % | Samples | Calls | Callee                              | Location                            |
| -----: | ------: | ----: | ----------------------------------- | ----------------------------------- |
| 100.0% |       1 |     1 | `ERB::Compiler::SimpleScanner#scan` | `../lib/ruby/3.4.0/erb/compiler.rb` |

##### `ERB::Compiler::SimpleScanner#scan` (`../lib/ruby/3.4.0/erb/compiler.rb`)

|      % | Samples | Calls | Callee                            | Location    |
| -----: | ------: | ----: | --------------------------------- | ----------- |
| 100.0% |       1 |     1 | `StringScanner#scan [c function]` | `<unknown>` |

##### `Psych::ScalarScanner#tokenize` (`../lib/ruby/3.4.0/psych/scalar_scanner.rb`)

|      % | Samples | Calls | Callee                       | Location    |
| -----: | ------: | ----: | ---------------------------- | ----------- |
| 100.0% |       1 |     1 | `String#match? [c function]` | `<unknown>` |
