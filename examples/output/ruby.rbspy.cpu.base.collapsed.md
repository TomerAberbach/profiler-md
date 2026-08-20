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

|     % | Samples | Function                                               | Location                                                                      |
| ----: | ------: | ------------------------------------------------------ | ----------------------------------------------------------------------------- |
| 24.5% |      34 | `(unknown) [c function]`                               | `<unknown>`                                                                   |
|  4.3% |       6 | `String#[] [c function]`                               | `<unknown>`                                                                   |
|  3.6% |       5 | `Module#class_eval [c function]`                       | `<unknown>`                                                                   |
|  2.9% |       4 | `String#encode [c function]`                           | `<unknown>`                                                                   |
|  2.9% |       4 | `Kernel#require_relative [c function]`                 | `<unknown>`                                                                   |
|  2.9% |       4 | `Parser::Lexer#advance`                                | `../bundle/gems/parser-3.3.12.0/lib/parser/lexer-F1.rb`                       |
|  2.9% |       4 | `Array#index [c function]`                             | `<unknown>`                                                                   |
|  2.2% |       3 | `Kernel#public_send [c function]`                      | `<unknown>`                                                                   |
|  2.2% |       3 | `Class#new [c function]`                               | `<unknown>`                                                                   |
|  2.2% |       3 | `String#index [c function]`                            | `<unknown>`                                                                   |
|  2.2% |       3 | `block in visit_descendants_of_types`                  | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb` |
|  1.4% |       2 | `block in visit_all_descendants`                       | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb` |
|  1.4% |       2 | `RuboCop::AST::Node#initialize`                        | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node.rb`                   |
|  1.4% |       2 | `Racc::Parser#_racc_do_parse_c [c function]`           | `<unknown>`                                                                   |
|  1.4% |       2 | `Parser::Source::Range#initialize`                     | `../bundle/gems/parser-3.3.12.0/lib/parser/source/range.rb`                   |
|  1.4% |       2 | `Array#include? [c function]`                          | `<unknown>`                                                                   |
|  1.4% |       2 | `RuboCop::Cop::RangeHelp#final_pos`                    | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/range_help.rb`           |
|  0.7% |       1 | `RuboCop::AST::Descendence#visit_all_descendants`      | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb` |
|  0.7% |       1 | `RuboCop::Cop::Commissioner#with_cop_error_handling`   | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`               |
|  0.7% |       1 | `RuboCop::Cop::Layout::ExtraSpacing#extra_space_range` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/layout/extra_spacing.rb`       |

#### Categories

##### Native

|     % | Samples | Function                                      | Location    |
| ----: | ------: | --------------------------------------------- | ----------- |
| 24.5% |      34 | `(unknown) [c function]`                      | `<unknown>` |
|  4.3% |       6 | `String#[] [c function]`                      | `<unknown>` |
|  3.6% |       5 | `Module#class_eval [c function]`              | `<unknown>` |
|  2.9% |       4 | `String#encode [c function]`                  | `<unknown>` |
|  2.9% |       4 | `Kernel#require_relative [c function]`        | `<unknown>` |
|  2.9% |       4 | `Array#index [c function]`                    | `<unknown>` |
|  2.2% |       3 | `Kernel#public_send [c function]`             | `<unknown>` |
|  2.2% |       3 | `Class#new [c function]`                      | `<unknown>` |
|  2.2% |       3 | `String#index [c function]`                   | `<unknown>` |
|  1.4% |       2 | `Racc::Parser#_racc_do_parse_c [c function]`  | `<unknown>` |
|  1.4% |       2 | `Array#include? [c function]`                 | `<unknown>` |
|  0.7% |       1 | `Regexp#match [c function]`                   | `<unknown>` |
|  0.7% |       1 | `Module#public_instance_methods [c function]` | `<unknown>` |
|  0.7% |       1 | `Module#append_features [c function]`         | `<unknown>` |
|  0.7% |       1 | `Module#attr_accessor [c function]`           | `<unknown>` |
|  0.7% |       1 | `Kernel#binding [c function]`                 | `<unknown>` |
|  0.7% |       1 | `String#% [c function]`                       | `<unknown>` |
|  0.7% |       1 | `Enumerable#each_slice [c function]`          | `<unknown>` |
|  0.7% |       1 | `Hash#freeze [c function]`                    | `<unknown>` |
|  0.7% |       1 | `String#match? [c function]`                  | `<unknown>` |

##### Third-party

|    % | Samples | Function                                                             | Location                                                                                  |
| ---: | ------: | -------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| 2.9% |       4 | `Parser::Lexer#advance`                                              | `../bundle/gems/parser-3.3.12.0/lib/parser/lexer-F1.rb`                                   |
| 2.2% |       3 | `block in visit_descendants_of_types`                                | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb`             |
| 1.4% |       2 | `block in visit_all_descendants`                                     | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb`             |
| 1.4% |       2 | `RuboCop::AST::Node#initialize`                                      | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node.rb`                               |
| 1.4% |       2 | `Parser::Source::Range#initialize`                                   | `../bundle/gems/parser-3.3.12.0/lib/parser/source/range.rb`                               |
| 1.4% |       2 | `RuboCop::Cop::RangeHelp#final_pos`                                  | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/range_help.rb`                       |
| 0.7% |       1 | `RuboCop::AST::Descendence#visit_all_descendants`                    | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb`             |
| 0.7% |       1 | `RuboCop::Cop::Commissioner#with_cop_error_handling`                 | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`                           |
| 0.7% |       1 | `RuboCop::Cop::Layout::ExtraSpacing#extra_space_range`               | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/layout/extra_spacing.rb`                   |
| 0.7% |       1 | `Parser::AST::Node#assign_properties`                                | `../bundle/gems/parser-3.3.12.0/lib/parser/ast/node.rb`                                   |
| 0.7% |       1 | `AST::Node#initialize`                                               | `../bundle/gems/ast-2.4.3/lib/ast/node.rb`                                                |
| 0.7% |       1 | `Parser::Source::Buffer#line_for_position`                           | `../bundle/gems/parser-3.3.12.0/lib/parser/source/buffer.rb`                              |
| 0.7% |       1 | `Parser::Source::Buffer#slice`                                       | `../bundle/gems/parser-3.3.12.0/lib/parser/source/buffer.rb`                              |
| 0.7% |       1 | `RuboCop::Cop::Style::ConditionalAssignmentHelper#end_with_eq?`      | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/style/conditional_assignment.rb`           |
| 0.7% |       1 | `RuboCop::Cop::Lint::Debugger#debugger_method?`                      | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/lint/debugger.rb`                          |
| 0.7% |       1 | `Parser::Lexer::Literal#extend_string`                               | `../bundle/gems/parser-3.3.12.0/lib/parser/lexer/literal.rb`                              |
| 0.7% |       1 | `block in each_single_element_character_class`                       | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/style/redundant_regexp_character_class.rb` |
| 0.7% |       1 | `block (2 levels) in traverse`                                       | `../bundle/gems/rubocop-1.65.1/lib/rubocop/yaml_duplication_checker.rb`                   |
| 0.7% |       1 | `RuboCop::Cop::VariableForce#process_node`                           | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/variable_force.rb`                         |
| 0.7% |       1 | `RuboCop::Cop::Style::LineEndConcatenation#standard_string_literal?` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/style/line_end_concatenation.rb`           |

##### Unknown

|    % | Samples | Function                                                                 | Location    |
| ---: | ------: | ------------------------------------------------------------------------ | ----------- |
| 0.7% |       1 | `block in private_class_methods`                                         | `<unknown>` |
| 0.7% |       1 | `RuboCop::AST::SendNode#attribute_accessor?`                             | `<unknown>` |
| 0.7% |       1 | `String#unpack`                                                          | `<unknown>` |
| 0.7% |       1 | `RuboCop::AST::Node#lvasgn_type?`                                        | `<unknown>` |
| 0.7% |       1 | `RuboCop::Cop::Naming::BinaryOperatorParameterName#op_method_candidate?` | `<unknown>` |
| 0.7% |       1 | `RuboCop::AST::Node#match_guard_clause?`                                 | `<unknown>` |

##### Standard library

|    % | Samples | Function                           | Location                                      |
| ---: | ------: | ---------------------------------- | --------------------------------------------- |
| 0.7% |       1 | `Psych::TreeBuilder#pop`           | `../lib/ruby/3.4.0/psych/tree_builder.rb`     |
| 0.7% |       1 | `Psych::Nodes::Scalar#initialize`  | `../lib/ruby/3.4.0/psych/nodes/scalar.rb`     |
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

##### `RuboCop::AST::Node#initialize` (`../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node.rb`)

|      % | Samples | Location                                                        |
| -----: | ------: | --------------------------------------------------------------- |
| 100.0% |       2 | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node.rb:176` |

##### `Parser::Source::Range#initialize` (`../bundle/gems/parser-3.3.12.0/lib/parser/source/range.rb`)

|      % | Samples | Location                                                       |
| -----: | ------: | -------------------------------------------------------------- |
| 100.0% |       2 | `../bundle/gems/parser-3.3.12.0/lib/parser/source/range.rb:49` |

##### `RuboCop::Cop::RangeHelp#final_pos` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/range_help.rb`)

|      % | Samples | Location                                                                |
| -----: | ------: | ----------------------------------------------------------------------- |
| 100.0% |       2 | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/range_help.rb:114` |

##### `RuboCop::AST::Descendence#visit_all_descendants` (`../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb`)

|      % | Samples | Location                                                                          |
| -----: | ------: | --------------------------------------------------------------------------------- |
| 100.0% |       1 | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb:122` |

##### `RuboCop::Cop::Commissioner#with_cop_error_handling` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`)

|      % | Samples | Location                                                            |
| -----: | ------: | ------------------------------------------------------------------- |
| 100.0% |       1 | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb:179` |

##### `RuboCop::Cop::Layout::ExtraSpacing#extra_space_range` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/layout/extra_spacing.rb`)

|      % | Samples | Location                                                                    |
| -----: | ------: | --------------------------------------------------------------------------- |
| 100.0% |       1 | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/layout/extra_spacing.rb:101` |

##### `Parser::AST::Node#assign_properties` (`../bundle/gems/parser-3.3.12.0/lib/parser/ast/node.rb`)

|      % | Samples | Location                                                   |
| -----: | ------: | ---------------------------------------------------------- |
| 100.0% |       1 | `../bundle/gems/parser-3.3.12.0/lib/parser/ast/node.rb:36` |

##### `AST::Node#initialize` (`../bundle/gems/ast-2.4.3/lib/ast/node.rb`)

|      % | Samples | Location                                      |
| -----: | ------: | --------------------------------------------- |
| 100.0% |       1 | `../bundle/gems/ast-2.4.3/lib/ast/node.rb:80` |

##### `Parser::Source::Buffer#line_for_position` (`../bundle/gems/parser-3.3.12.0/lib/parser/source/buffer.rb`)

|      % | Samples | Location                                                         |
| -----: | ------: | ---------------------------------------------------------------- |
| 100.0% |       1 | `../bundle/gems/parser-3.3.12.0/lib/parser/source/buffer.rb:238` |

##### `Parser::Source::Buffer#slice` (`../bundle/gems/parser-3.3.12.0/lib/parser/source/buffer.rb`)

|      % | Samples | Location                                                         |
| -----: | ------: | ---------------------------------------------------------------- |
| 100.0% |       1 | `../bundle/gems/parser-3.3.12.0/lib/parser/source/buffer.rb:214` |

##### `RuboCop::Cop::Style::ConditionalAssignmentHelper#end_with_eq?` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/style/conditional_assignment.rb`)

|      % | Samples | Location                                                                           |
| -----: | ------: | ---------------------------------------------------------------------------------- |
| 100.0% |       1 | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/style/conditional_assignment.rb:66` |

##### `RuboCop::Cop::Lint::Debugger#debugger_method?` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/lint/debugger.rb`)

|      % | Samples | Location                                                             |
| -----: | ------: | -------------------------------------------------------------------- |
| 100.0% |       1 | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/lint/debugger.rb:108` |

##### `Parser::Lexer::Literal#extend_string` (`../bundle/gems/parser-3.3.12.0/lib/parser/lexer/literal.rb`)

|      % | Samples | Location                                                         |
| -----: | ------: | ---------------------------------------------------------------- |
| 100.0% |       1 | `../bundle/gems/parser-3.3.12.0/lib/parser/lexer/literal.rb:202` |

##### `block in each_single_element_character_class` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/style/redundant_regexp_character_class.rb`)

|      % | Samples | Location                                                                                     |
| -----: | ------: | -------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/style/redundant_regexp_character_class.rb:69` |

##### `block (2 levels) in traverse` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/yaml_duplication_checker.rb`)

|      % | Samples | Location                                                                   |
| -----: | ------: | -------------------------------------------------------------------------- |
| 100.0% |       1 | `../bundle/gems/rubocop-1.65.1/lib/rubocop/yaml_duplication_checker.rb:25` |

##### `RuboCop::Cop::VariableForce#process_node` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/variable_force.rb`)

|      % | Samples | Location                                                             |
| -----: | ------: | -------------------------------------------------------------------- |
| 100.0% |       1 | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/variable_force.rb:92` |

##### `RuboCop::Cop::Style::LineEndConcatenation#standard_string_literal?` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/style/line_end_concatenation.rb`)

|      % | Samples | Location                                                                            |
| -----: | ------: | ----------------------------------------------------------------------------------- |
| 100.0% |       1 | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/style/line_end_concatenation.rb:133` |

##### `block in private_class_methods` (`<unknown>`)

|      % | Samples | Location |
| -----: | ------: | -------- |
| 100.0% |       1 | 60       |

##### `RuboCop::AST::SendNode#attribute_accessor?` (`<unknown>`)

|      % | Samples | Location |
| -----: | ------: | -------- |
| 100.0% |       1 | 28       |

##### `String#unpack` (`<unknown>`)

|      % | Samples | Location |
| -----: | ------: | -------- |
| 100.0% |       1 | 26       |

##### `RuboCop::AST::Node#lvasgn_type?` (`<unknown>`)

|      % | Samples | Location |
| -----: | ------: | -------- |
| 100.0% |       1 | 200      |

##### `RuboCop::Cop::Naming::BinaryOperatorParameterName#op_method_candidate?` (`<unknown>`)

|      % | Samples | Location |
| -----: | ------: | -------- |
| 100.0% |       1 | 39       |

##### `RuboCop::AST::Node#match_guard_clause?` (`<unknown>`)

|      % | Samples | Location |
| -----: | ------: | -------- |
| 100.0% |       1 | 614      |

##### `Psych::TreeBuilder#pop` (`../lib/ruby/3.4.0/psych/tree_builder.rb`)

|      % | Samples | Location                                      |
| -----: | ------: | --------------------------------------------- |
| 100.0% |       1 | `../lib/ruby/3.4.0/psych/tree_builder.rb:120` |

##### `Psych::Nodes::Scalar#initialize` (`../lib/ruby/3.4.0/psych/nodes/scalar.rb`)

|      % | Samples | Location                                     |
| -----: | ------: | -------------------------------------------- |
| 100.0% |       1 | `../lib/ruby/3.4.0/psych/nodes/scalar.rb:65` |

##### `Psych::Visitors::ToRuby#register` (`../lib/ruby/3.4.0/psych/visitors/to_ruby.rb`)

|      % | Samples | Location                                          |
| -----: | ------: | ------------------------------------------------- |
| 100.0% |       1 | `../lib/ruby/3.4.0/psych/visitors/to_ruby.rb:335` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `(unknown) [c function]` (`<unknown>`)

|     % | Samples | Caller                                 | Location    |
| ----: | ------: | -------------------------------------- | ----------- |
| 79.4% |      27 | `Kernel#require_relative [c function]` | `<unknown>` |
| 17.6% |       6 | `Kernel#require [c function]`          | `<unknown>` |
|  2.9% |       1 | `Array#each [c function]`              | `<unknown>` |

##### `String#[] [c function]` (`<unknown>`)

|     % | Samples | Caller                             | Location                                                            |
| ----: | ------: | ---------------------------------- | ------------------------------------------------------------------- |
| 66.7% |       4 | `Parser::Source::Buffer#slice`     | `../bundle/gems/parser-3.3.12.0/lib/parser/source/buffer.rb`        |
| 33.3% |       2 | `RuboCop::Cop::RangeHelp#move_pos` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/range_help.rb` |

##### `Module#class_eval [c function]` (`<unknown>`)

|     % | Samples | Caller                                                | Location                                                                           |
| ----: | ------: | ----------------------------------------------------- | ---------------------------------------------------------------------------------- |
| 80.0% |       4 | `RuboCop::AST::NodePattern::MethodDefiner#def_helper` | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern/method_definer.rb` |
| 20.0% |       1 | `block in <class:Node>`                               | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node.rb`                        |

##### `String#encode [c function]` (`<unknown>`)

|      % | Samples | Caller                         | Location                                                     |
| -----: | ------: | ------------------------------ | ------------------------------------------------------------ |
| 100.0% |       4 | `Parser::Source::Buffer#slice` | `../bundle/gems/parser-3.3.12.0/lib/parser/source/buffer.rb` |

##### `Kernel#require_relative [c function]` (`<unknown>`)

|     % | Samples | Caller                                 | Location    |
| ----: | ------: | -------------------------------------- | ----------- |
| 50.0% |       2 | `Kernel#require_relative [c function]` | `<unknown>` |
| 50.0% |       2 | `Kernel#require [c function]`          | `<unknown>` |

##### `Parser::Lexer#advance` (`../bundle/gems/parser-3.3.12.0/lib/parser/lexer-F1.rb`)

|      % | Samples | Caller                    | Location                                            |
| -----: | ------: | ------------------------- | --------------------------------------------------- |
| 100.0% |       4 | `Parser::Base#next_token` | `../bundle/gems/parser-3.3.12.0/lib/parser/base.rb` |

##### `Array#index [c function]` (`<unknown>`)

|      % | Samples | Caller                                                    | Location                                                                    |
| -----: | ------: | --------------------------------------------------------- | --------------------------------------------------------------------------- |
| 100.0% |       4 | `RuboCop::Cop::Layout::SpaceAfterComma#before_semicolon?` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/layout/space_after_comma.rb` |

##### `Kernel#public_send [c function]` (`<unknown>`)

|      % | Samples | Caller                                        | Location                                                        |
| -----: | ------: | --------------------------------------------- | --------------------------------------------------------------- |
| 100.0% |       3 | `block (2 levels) in trigger_responding_cops` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb` |

##### `Class#new [c function]` (`<unknown>`)

|     % | Samples | Caller                                 | Location                                                            |
| ----: | ------: | -------------------------------------- | ------------------------------------------------------------------- |
| 33.3% |       1 | `block in mobilize_cops`               | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/team.rb`             |
| 33.3% |       1 | `RuboCop::AST::NodePattern#initialize` | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern.rb` |
| 33.3% |       1 | `Parser::Source::Range#with`           | `../bundle/gems/parser-3.3.12.0/lib/parser/source/range.rb`         |

##### `String#index [c function]` (`<unknown>`)

|      % | Samples | Caller                               | Location                                                     |
| -----: | ------: | ------------------------------------ | ------------------------------------------------------------ |
| 100.0% |       3 | `Parser::Source::Buffer#line_begins` | `../bundle/gems/parser-3.3.12.0/lib/parser/source/buffer.rb` |

##### `block in visit_descendants_of_types` (`../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb`)

|      % | Samples | Caller                    | Location    |
| -----: | ------: | ------------------------- | ----------- |
| 100.0% |       3 | `Array#each [c function]` | `<unknown>` |

##### `block in visit_all_descendants` (`../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb`)

|      % | Samples | Caller                    | Location    |
| -----: | ------: | ------------------------- | ----------- |
| 100.0% |       2 | `Array#each [c function]` | `<unknown>` |

##### `RuboCop::AST::Node#initialize` (`../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node.rb`)

|      % | Samples | Caller                   | Location    |
| -----: | ------: | ------------------------ | ----------- |
| 100.0% |       2 | `Class#new [c function]` | `<unknown>` |

##### `Racc::Parser#_racc_do_parse_c [c function]` (`<unknown>`)

|      % | Samples | Caller                  | Location    |
| -----: | ------: | ----------------------- | ----------- |
| 100.0% |       2 | `Racc::Parser#do_parse` | `<unknown>` |

##### `Parser::Source::Range#initialize` (`../bundle/gems/parser-3.3.12.0/lib/parser/source/range.rb`)

|      % | Samples | Caller                   | Location    |
| -----: | ------: | ------------------------ | ----------- |
| 100.0% |       2 | `Class#new [c function]` | `<unknown>` |

##### `Array#include? [c function]` (`<unknown>`)

|      % | Samples | Caller                        | Location                                                    |
| -----: | ------: | ----------------------------- | ----------------------------------------------------------- |
| 100.0% |       2 | `RuboCop::AST::Node#type_in?` | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node.rb` |

##### `RuboCop::Cop::RangeHelp#final_pos` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/range_help.rb`)

|      % | Samples | Caller                                                 | Location                                                            |
| -----: | ------: | ------------------------------------------------------ | ------------------------------------------------------------------- |
| 100.0% |       2 | `RuboCop::Cop::RangeHelp#range_with_surrounding_space` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/range_help.rb` |

##### `RuboCop::AST::Descendence#visit_all_descendants` (`../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb`)

|      % | Samples | Caller                           | Location                                                                      |
| -----: | ------: | -------------------------------- | ----------------------------------------------------------------------------- |
| 100.0% |       1 | `block in visit_all_descendants` | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb` |

##### `RuboCop::Cop::Commissioner#with_cop_error_handling` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`)

|      % | Samples | Caller                             | Location                                                        |
| -----: | ------: | ---------------------------------- | --------------------------------------------------------------- |
| 100.0% |       1 | `block in trigger_responding_cops` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb` |

##### `RuboCop::Cop::Layout::ExtraSpacing#extra_space_range` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/layout/extra_spacing.rb`)

|      % | Samples | Caller                                           | Location                                                                |
| -----: | ------: | ------------------------------------------------ | ----------------------------------------------------------------------- |
| 100.0% |       1 | `RuboCop::Cop::Layout::ExtraSpacing#check_other` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/layout/extra_spacing.rb` |

##### `Regexp#match [c function]` (`<unknown>`)

|      % | Samples | Caller                      | Location    |
| -----: | ------: | --------------------------- | ----------- |
| 100.0% |       1 | `String#match [c function]` | `<unknown>` |

##### `Module#public_instance_methods [c function]` (`<unknown>`)

|      % | Samples | Caller                                | Location                                                |
| -----: | ------: | ------------------------------------- | ------------------------------------------------------- |
| 100.0% |       1 | `RuboCop::Cop::Base.callbacks_needed` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/base.rb` |

##### `Module#append_features [c function]` (`<unknown>`)

|      % | Samples | Caller                        | Location    |
| -----: | ------: | ----------------------------- | ----------- |
| 100.0% |       1 | `Module#include [c function]` | `<unknown>` |

##### `Module#attr_accessor [c function]` (`<unknown>`)

|      % | Samples | Caller            | Location                                                           |
| -----: | ------: | ----------------- | ------------------------------------------------------------------ |
| 100.0% |       1 | `singleton class` | `../bundle/gems/regexp_parser-2.12.0/lib/regexp_parser/scanner.rb` |

##### `Kernel#binding [c function]` (`<unknown>`)

|      % | Samples | Caller                    | Location                                      |
| -----: | ------: | ------------------------- | --------------------------------------------- |
| 100.0% |       1 | `Gem::Specification.load` | `../lib/ruby/3.4.0/rubygems/specification.rb` |

##### `String#% [c function]` (`<unknown>`)

|      % | Samples | Caller                  | Location                          |
| -----: | ------: | ----------------------- | --------------------------------- |
| 100.0% |       1 | `block in <module:URI>` | `../lib/ruby/3.4.0/uri/common.rb` |

##### `Enumerable#each_slice [c function]` (`<unknown>`)

|      % | Samples | Caller                                     | Location                                                                |
| -----: | ------: | ------------------------------------------ | ----------------------------------------------------------------------- |
| 100.0% |       1 | `RuboCop::YAMLDuplicationChecker.traverse` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/yaml_duplication_checker.rb` |

##### `Hash#freeze [c function]` (`<unknown>`)

|      % | Samples | Caller                         | Location                                                    |
| -----: | ------: | ------------------------------ | ----------------------------------------------------------- |
| 100.0% |       1 | `RuboCop::AST::Node#complete!` | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node.rb` |

##### `String#match? [c function]` (`<unknown>`)

|      % | Samples | Caller                          | Location                                    |
| -----: | ------: | ------------------------------- | ------------------------------------------- |
| 100.0% |       1 | `Psych::ScalarScanner#tokenize` | `../lib/ruby/3.4.0/psych/scalar_scanner.rb` |

##### `Parser::AST::Node#assign_properties` (`../bundle/gems/parser-3.3.12.0/lib/parser/ast/node.rb`)

|      % | Samples | Caller                 | Location                                   |
| -----: | ------: | ---------------------- | ------------------------------------------ |
| 100.0% |       1 | `AST::Node#initialize` | `../bundle/gems/ast-2.4.3/lib/ast/node.rb` |

##### `AST::Node#initialize` (`../bundle/gems/ast-2.4.3/lib/ast/node.rb`)

|      % | Samples | Caller                          | Location                                                    |
| -----: | ------: | ------------------------------- | ----------------------------------------------------------- |
| 100.0% |       1 | `RuboCop::AST::Node#initialize` | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node.rb` |

##### `Parser::Source::Buffer#line_for_position` (`../bundle/gems/parser-3.3.12.0/lib/parser/source/buffer.rb`)

|      % | Samples | Caller                       | Location                                                    |
| -----: | ------: | ---------------------------- | ----------------------------------------------------------- |
| 100.0% |       1 | `Parser::Source::Range#line` | `../bundle/gems/parser-3.3.12.0/lib/parser/source/range.rb` |

##### `Parser::Source::Buffer#slice` (`../bundle/gems/parser-3.3.12.0/lib/parser/source/buffer.rb`)

|      % | Samples | Caller              | Location                                                |
| -----: | ------: | ------------------- | ------------------------------------------------------- |
| 100.0% |       1 | `Parser::Lexer#tok` | `../bundle/gems/parser-3.3.12.0/lib/parser/lexer-F1.rb` |

##### `RuboCop::Cop::Style::ConditionalAssignmentHelper#end_with_eq?` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/style/conditional_assignment.rb`)

|      % | Samples | Caller                                                        | Location    |
| -----: | ------: | ------------------------------------------------------------- | ----------- |
| 100.0% |       1 | `RuboCop::Cop::Style::ConditionalAssignment#assignment_type?` | `<unknown>` |

##### `RuboCop::Cop::Lint::Debugger#debugger_method?` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/lint/debugger.rb`)

|      % | Samples | Caller                                 | Location                                                         |
| -----: | ------: | -------------------------------------- | ---------------------------------------------------------------- |
| 100.0% |       1 | `RuboCop::Cop::Lint::Debugger#on_send` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/lint/debugger.rb` |

##### `Parser::Lexer::Literal#extend_string` (`../bundle/gems/parser-3.3.12.0/lib/parser/lexer/literal.rb`)

|      % | Samples | Caller                                               | Location                                                     |
| -----: | ------: | ---------------------------------------------------- | ------------------------------------------------------------ |
| 100.0% |       1 | `Parser::LexerStrings#extend_string_for_token_range` | `../bundle/gems/parser-3.3.12.0/lib/parser/lexer-strings.rb` |

##### `block in each_single_element_character_class` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/style/redundant_regexp_character_class.rb`)

|      % | Samples | Caller                                   | Location                                                                               |
| -----: | ------: | ---------------------------------------- | -------------------------------------------------------------------------------------- |
| 100.0% |       1 | `block in each_expression_without_index` | `../bundle/gems/regexp_parser-2.12.0/lib/regexp_parser/expression/methods/traverse.rb` |

##### `block (2 levels) in traverse` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/yaml_duplication_checker.rb`)

|      % | Samples | Caller                   | Location    |
| -----: | ------: | ------------------------ | ----------- |
| 100.0% |       1 | `(unknown) [c function]` | `<unknown>` |

##### `RuboCop::Cop::VariableForce#process_node` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/variable_force.rb`)

|      % | Samples | Caller                      | Location                                                          |
| -----: | ------: | --------------------------- | ----------------------------------------------------------------- |
| 100.0% |       1 | `block in process_children` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/variable_force.rb` |

##### `RuboCop::Cop::Style::LineEndConcatenation#standard_string_literal?` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/style/line_end_concatenation.rb`)

|      % | Samples | Caller                                                          | Location                                                                        |
| -----: | ------: | --------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| 100.0% |       1 | `RuboCop::Cop::Style::LineEndConcatenation#eligible_successor?` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/style/line_end_concatenation.rb` |

##### `block in private_class_methods` (`<unknown>`)

|      % | Samples | Caller                           | Location                                                                      |
| -----: | ------: | -------------------------------- | ----------------------------------------------------------------------------- |
| 100.0% |       1 | `block in visit_all_descendants` | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb` |

##### `RuboCop::AST::SendNode#attribute_accessor?` (`<unknown>`)

|      % | Samples | Caller                                                            | Location                                                                                        |
| -----: | ------: | ----------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `RuboCop::Cop::Lint::TrailingCommaInAttributeDeclaration#on_send` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/lint/trailing_comma_in_attribute_declaration.rb` |

##### `String#unpack` (`<unknown>`)

|      % | Samples | Caller                         | Location                                                |
| -----: | ------: | ------------------------------ | ------------------------------------------------------- |
| 100.0% |       1 | `Parser::Lexer#source_buffer=` | `../bundle/gems/parser-3.3.12.0/lib/parser/lexer-F1.rb` |

##### `RuboCop::AST::Node#lvasgn_type?` (`<unknown>`)

|      % | Samples | Caller                                                  | Location    |
| -----: | ------: | ------------------------------------------------------- | ----------- |
| 100.0% |       1 | `RuboCop::Cop::Style::OrAssignment#ternary_assignment?` | `<unknown>` |

##### `RuboCop::Cop::Naming::BinaryOperatorParameterName#op_method_candidate?` (`<unknown>`)

|      % | Samples | Caller                                                     | Location                                                                                 |
| -----: | ------: | ---------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% |       1 | `RuboCop::Cop::Naming::BinaryOperatorParameterName#on_def` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/naming/binary_operator_parameter_name.rb` |

##### `RuboCop::AST::Node#match_guard_clause?` (`<unknown>`)

|      % | Samples | Caller                             | Location                                                    |
| -----: | ------: | ---------------------------------- | ----------------------------------------------------------- |
| 100.0% |       1 | `RuboCop::AST::Node#guard_clause?` | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node.rb` |

##### `Psych::TreeBuilder#pop` (`../lib/ruby/3.4.0/psych/tree_builder.rb`)

|      % | Samples | Caller                           | Location    |
| -----: | ------: | -------------------------------- | ----------- |
| 100.0% |       1 | `Psych::TreeBuilder#end_mapping` | `<unknown>` |

##### `Psych::Nodes::Scalar#initialize` (`../lib/ruby/3.4.0/psych/nodes/scalar.rb`)

|      % | Samples | Caller                   | Location    |
| -----: | ------: | ------------------------ | ----------- |
| 100.0% |       1 | `Class#new [c function]` | `<unknown>` |

##### `Psych::Visitors::ToRuby#register` (`../lib/ruby/3.4.0/psych/visitors/to_ruby.rb`)

|      % | Samples | Caller                                             | Location                                      |
| -----: | ------: | -------------------------------------------------- | --------------------------------------------- |
| 100.0% |       1 | `Psych::Visitors::ToRuby#visit_Psych_Nodes_Scalar` | `../lib/ruby/3.4.0/psych/visitors/to_ruby.rb` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function                              | Location                                                       |
| ----: | ------: | ------------------------------------- | -------------------------------------------------------------- |
| 99.3% |     138 | `<main>`                              | `rubocop`                                                      |
| 98.6% |     137 | `Kernel#load [c function]`            | `<unknown>`                                                    |
| 85.6% |     119 | `(unknown) [c function]`              | `<unknown>`                                                    |
| 64.0% |      89 | `Array#each [c function]`             | `<unknown>`                                                    |
| 63.3% |      88 | `block in run`                        | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`             |
| 63.3% |      88 | `RuboCop::CLI#profile_if_needed`      | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`             |
| 63.3% |      88 | `RuboCop::CLI#run`                    | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`             |
| 63.3% |      88 | `block in <top (required)>`           | `../bundle/gems/rubocop-1.65.1/exe/rubocop`                    |
| 63.3% |      88 | `Benchmark.realtime`                  | `../lib/ruby/3.4.0/benchmark.rb`                               |
| 59.0% |      82 | `RuboCop::CLI::Command.run`           | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command.rb`     |
| 59.0% |      82 | `RuboCop::CLI::Environment#run`       | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/environment.rb` |
| 59.0% |      82 | `RuboCop::CLI#run_command`            | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`             |
| 59.0% |      82 | `RuboCop::CLI#execute_runners`        | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`             |
| 58.3% |      81 | `RuboCop::Runner#file_offense_cache`  | `../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`          |
| 58.3% |      81 | `RuboCop::Runner#file_offenses`       | `../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`          |
| 58.3% |      81 | `RuboCop::Runner#process_file`        | `../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`          |
| 58.3% |      81 | `block in each_inspected_file`        | `../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`          |
| 58.3% |      81 | `Enumerable#reduce [c function]`      | `<unknown>`                                                    |
| 58.3% |      81 | `RuboCop::Runner#each_inspected_file` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`          |
| 58.3% |      81 | `RuboCop::Runner#inspect_files`       | `../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`          |

#### Categories

##### Native

|     % | Samples | Function                                     | Location    |
| ----: | ------: | -------------------------------------------- | ----------- |
| 98.6% |     137 | `Kernel#load [c function]`                   | `<unknown>` |
| 85.6% |     119 | `(unknown) [c function]`                     | `<unknown>` |
| 64.0% |      89 | `Array#each [c function]`                    | `<unknown>` |
| 58.3% |      81 | `Enumerable#reduce [c function]`             | `<unknown>` |
| 42.4% |      59 | `Enumerable#flat_map [c function]`           | `<unknown>` |
| 36.0% |      50 | `Kernel#require [c function]`                | `<unknown>` |
| 33.1% |      46 | `Kernel#require_relative [c function]`       | `<unknown>` |
| 29.5% |      41 | `Kernel#public_send [c function]`            | `<unknown>` |
| 23.0% |      32 | `Class#new [c function]`                     | `<unknown>` |
| 13.7% |      19 | `Racc::Parser#_racc_do_parse_c [c function]` | `<unknown>` |
|  8.6% |      12 | `Enumerable#each_with_index [c function]`    | `<unknown>` |
|  5.0% |       7 | `Enumerable#each_cons [c function]`          | `<unknown>` |
|  4.3% |       6 | `Enumerator#each [c function]`               | `<unknown>` |
|  4.3% |       6 | `String#[] [c function]`                     | `<unknown>` |
|  3.6% |       5 | `Module#class_eval [c function]`             | `<unknown>` |
|  3.6% |       5 | `Enumerable#each_slice [c function]`         | `<unknown>` |
|  2.9% |       4 | `String#encode [c function]`                 | `<unknown>` |
|  2.9% |       4 | `Array#index [c function]`                   | `<unknown>` |
|  2.2% |       3 | `String#index [c function]`                  | `<unknown>` |
|  2.2% |       3 | `Enumerator#with_object [c function]`        | `<unknown>` |

##### Third-party

|     % | Samples | Function                                              | Location                                                                  |
| ----: | ------: | ----------------------------------------------------- | ------------------------------------------------------------------------- |
| 63.3% |      88 | `block in run`                                        | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`                        |
| 63.3% |      88 | `RuboCop::CLI#profile_if_needed`                      | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`                        |
| 63.3% |      88 | `RuboCop::CLI#run`                                    | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`                        |
| 63.3% |      88 | `block in <top (required)>`                           | `../bundle/gems/rubocop-1.65.1/exe/rubocop`                               |
| 59.0% |      82 | `RuboCop::CLI::Command.run`                           | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command.rb`                |
| 59.0% |      82 | `RuboCop::CLI::Environment#run`                       | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/environment.rb`            |
| 59.0% |      82 | `RuboCop::CLI#run_command`                            | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`                        |
| 59.0% |      82 | `RuboCop::CLI#execute_runners`                        | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`                        |
| 58.3% |      81 | `RuboCop::Runner#file_offense_cache`                  | `../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`                     |
| 58.3% |      81 | `RuboCop::Runner#file_offenses`                       | `../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`                     |
| 58.3% |      81 | `RuboCop::Runner#process_file`                        | `../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`                     |
| 58.3% |      81 | `block in each_inspected_file`                        | `../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`                     |
| 58.3% |      81 | `RuboCop::Runner#each_inspected_file`                 | `../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`                     |
| 58.3% |      81 | `RuboCop::Runner#inspect_files`                       | `../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`                     |
| 58.3% |      81 | `RuboCop::Runner#run`                                 | `../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`                     |
| 58.3% |      81 | `block in execute_runner`                             | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb` |
| 58.3% |      81 | `RuboCop::CLI::Command::ExecuteRunner#with_redirect`  | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb` |
| 58.3% |      81 | `RuboCop::CLI::Command::ExecuteRunner#execute_runner` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb` |
| 58.3% |      81 | `RuboCop::CLI::Command::ExecuteRunner#run`            | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb` |
| 57.6% |      80 | `RuboCop::Runner#do_inspection_loop`                  | `../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`                     |

##### Unknown

|     % | Samples | Function                               | Location    |
| ----: | ------: | -------------------------------------- | ----------- |
| 42.4% |      59 | `Kernel#loop`                          | `<unknown>` |
| 35.3% |      49 | `Kernel#require`                       | `<unknown>` |
| 30.2% |      42 | `RuboCop::Cop::Commissioner#on_module` | `<unknown>` |
| 30.2% |      42 | `block in on_dstr`                     | `<unknown>` |
| 30.2% |      42 | `RuboCop::AST::Traversal#on_dstr`      | `<unknown>` |
| 30.2% |      42 | `RuboCop::Cop::Commissioner#on_begin`  | `<unknown>` |
| 29.5% |      41 | `RuboCop::AST::Traversal#on_while`     | `<unknown>` |
| 24.5% |      34 | `RuboCop::Cop::Commissioner#on_def`    | `<unknown>` |
| 22.3% |      31 | `RuboCop::Cop::Commissioner#on_class`  | `<unknown>` |
| 21.6% |      30 | `RuboCop::AST::Traversal#on_class`     | `<unknown>` |
| 20.1% |      28 | `RuboCop::AST::Traversal#on_def`       | `<unknown>` |
| 13.7% |      19 | `Racc::Parser#do_parse`                | `<unknown>` |
| 13.7% |      19 | `RuboCop::Cop::Commissioner#on_if`     | `<unknown>` |
| 13.7% |      19 | `RuboCop::Cop::Commissioner#on_send`   | `<unknown>` |
|  8.6% |      12 | `RuboCop::AST::Traversal#on_if`        | `<unknown>` |
|  7.2% |      10 | `RuboCop::Cop::Commissioner#on_sclass` | `<unknown>` |
|  5.8% |       8 | `RuboCop::Cop::Commissioner#on_block`  | `<unknown>` |
|  5.8% |       8 | `block in on_send`                     | `<unknown>` |
|  5.8% |       8 | `RuboCop::AST::Traversal#on_send`      | `<unknown>` |
|  5.0% |       7 | `RuboCop::Cop::Commissioner#on_lvasgn` | `<unknown>` |

##### Standard library

|     % | Samples | Function                                             | Location                                      |
| ----: | ------: | ---------------------------------------------------- | --------------------------------------------- |
| 63.3% |      88 | `Benchmark.realtime`                                 | `../lib/ruby/3.4.0/benchmark.rb`              |
|  2.9% |       4 | `Psych.safe_load`                                    | `../lib/ruby/3.4.0/psych.rb`                  |
|  1.4% |       2 | `Psych::Parser#parse`                                | `../lib/ruby/3.4.0/psych/parser.rb`           |
|  1.4% |       2 | `Psych.parse_stream`                                 | `../lib/ruby/3.4.0/psych.rb`                  |
|  1.4% |       2 | `Psych.parse`                                        | `../lib/ruby/3.4.0/psych.rb`                  |
|  1.4% |       2 | `Gem::Specification.load`                            | `../lib/ruby/3.4.0/rubygems/specification.rb` |
|  1.4% |       2 | `Psych::Visitors::ToRuby#visit_Psych_Nodes_Scalar`   | `../lib/ruby/3.4.0/psych/visitors/to_ruby.rb` |
|  1.4% |       2 | `Psych::Visitors::Visitor#visit`                     | `../lib/ruby/3.4.0/psych/visitors/visitor.rb` |
|  1.4% |       2 | `Psych::Visitors::Visitor#accept`                    | `../lib/ruby/3.4.0/psych/visitors/visitor.rb` |
|  1.4% |       2 | `Psych::Visitors::ToRuby#accept`                     | `../lib/ruby/3.4.0/psych/visitors/to_ruby.rb` |
|  1.4% |       2 | `block in revive_hash`                               | `../lib/ruby/3.4.0/psych/visitors/to_ruby.rb` |
|  1.4% |       2 | `Psych::Visitors::ToRuby#revive_hash`                | `../lib/ruby/3.4.0/psych/visitors/to_ruby.rb` |
|  1.4% |       2 | `Psych::Visitors::ToRuby#visit_Psych_Nodes_Mapping`  | `../lib/ruby/3.4.0/psych/visitors/to_ruby.rb` |
|  1.4% |       2 | `Psych::Visitors::ToRuby#visit_Psych_Nodes_Document` | `../lib/ruby/3.4.0/psych/visitors/to_ruby.rb` |
|  0.7% |       1 | `Psych::TreeBuilder#pop`                             | `../lib/ruby/3.4.0/psych/tree_builder.rb`     |
|  0.7% |       1 | `Set#each`                                           | `../lib/ruby/3.4.0/set.rb`                    |
|  0.7% |       1 | `Psych::Nodes::Scalar#initialize`                    | `../lib/ruby/3.4.0/psych/nodes/scalar.rb`     |
|  0.7% |       1 | `Psych::TreeBuilder#scalar`                          | `../lib/ruby/3.4.0/psych/tree_builder.rb`     |
|  0.7% |       1 | `block in each_spec`                                 | `../lib/ruby/3.4.0/rubygems/specification.rb` |
|  0.7% |       1 | `block (2 levels) in each_gemspec`                   | `../lib/ruby/3.4.0/rubygems/specification.rb` |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `<main>` (`rubocop`)

|     % | Samples | Callee                     | Location                        |
| ----: | ------: | -------------------------- | ------------------------------- |
| 99.3% |     137 | `Kernel#load [c function]` | `<unknown>`                     |
|  0.7% |       1 | `Gem.activate_bin_path`    | `../lib/ruby/3.4.0/rubygems.rb` |

##### `Kernel#load [c function]` (`<unknown>`)

|     % | Samples | Callee                     | Location                                              |
| ----: | ------: | -------------------------- | ----------------------------------------------------- |
| 64.2% |      88 | `Benchmark.realtime`       | `../lib/ruby/3.4.0/benchmark.rb`                      |
| 33.6% |      46 | `Kernel#require`           | `<unknown>`                                           |
|  2.2% |       3 | `RuboCop::Server.running?` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/server.rb` |

##### `(unknown) [c function]` (`<unknown>`)

|     % | Samples | Callee                          | Location                                                                         |
| ----: | ------: | ------------------------------- | -------------------------------------------------------------------------------- |
| 68.1% |      81 | `block in each_inspected_file`  | `../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`                            |
| 49.6% |      59 | `block in inspect_file`         | `../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`                            |
|  6.7% |       8 | `block in on_send`              | `<unknown>`                                                                      |
|  3.4% |       4 | `block in each_missing_space`   | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/space_after_punctuation.rb` |
|  2.5% |       3 | `block in on_new_investigation` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/layout/comment_indentation.rb`    |

##### `Array#each [c function]` (`<unknown>`)

|     % | Samples | Callee                             | Location                                                                      |
| ----: | ------: | ---------------------------------- | ----------------------------------------------------------------------------- |
| 96.6% |      86 | `(unknown) [c function]`           | `<unknown>`                                                                   |
| 47.2% |      42 | `block in trigger_responding_cops` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`               |
| 47.2% |      42 | `block in on_dstr`                 | `<unknown>`                                                                   |
| 14.6% |      13 | `block in invoke`                  | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`               |
|  6.7% |       6 | `block in each_child_node`         | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb` |

##### `block in run` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`)

|     % | Samples | Callee                         | Location                                           |
| ----: | ------: | ------------------------------ | -------------------------------------------------- |
| 93.2% |      82 | `RuboCop::CLI#execute_runners` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb` |
|  6.8% |       6 | `RuboCop::CLI#act_on_options`  | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb` |

##### `RuboCop::CLI#profile_if_needed` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`)

|      % | Samples | Callee         | Location                                           |
| -----: | ------: | -------------- | -------------------------------------------------- |
| 100.0% |      88 | `block in run` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb` |

##### `RuboCop::CLI#run` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`)

|      % | Samples | Callee                           | Location                                           |
| -----: | ------: | -------------------------------- | -------------------------------------------------- |
| 100.0% |      88 | `RuboCop::CLI#profile_if_needed` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb` |

##### `block in <top (required)>` (`../bundle/gems/rubocop-1.65.1/exe/rubocop`)

|      % | Samples | Callee             | Location                                           |
| -----: | ------: | ------------------ | -------------------------------------------------- |
| 100.0% |      88 | `RuboCop::CLI#run` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb` |

##### `Benchmark.realtime` (`../lib/ruby/3.4.0/benchmark.rb`)

|      % | Samples | Callee                      | Location                                    |
| -----: | ------: | --------------------------- | ------------------------------------------- |
| 100.0% |      88 | `block in <top (required)>` | `../bundle/gems/rubocop-1.65.1/exe/rubocop` |

##### `RuboCop::CLI::Command.run` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command.rb`)

|     % | Samples | Callee                                         | Location                                                                      |
| ----: | ------: | ---------------------------------------------- | ----------------------------------------------------------------------------- |
| 98.8% |      81 | `RuboCop::CLI::Command::ExecuteRunner#run`     | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb`     |
|  1.2% |       1 | `RuboCop::CLI::Command::SuggestExtensions#run` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command/suggest_extensions.rb` |

##### `RuboCop::CLI::Environment#run` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/environment.rb`)

|      % | Samples | Callee                      | Location                                                   |
| -----: | ------: | --------------------------- | ---------------------------------------------------------- |
| 100.0% |      82 | `RuboCop::CLI::Command.run` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command.rb` |

##### `RuboCop::CLI#run_command` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`)

|      % | Samples | Callee                          | Location                                                       |
| -----: | ------: | ------------------------------- | -------------------------------------------------------------- |
| 100.0% |      82 | `RuboCop::CLI::Environment#run` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/environment.rb` |

##### `RuboCop::CLI#execute_runners` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`)

|     % | Samples | Callee                     | Location                                           |
| ----: | ------: | -------------------------- | -------------------------------------------------- |
| 98.8% |      81 | `RuboCop::CLI#run_command` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb` |
|  1.2% |       1 | `Kernel#tap`               | `<unknown>`                                        |

##### `RuboCop::Runner#file_offense_cache` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`)

|     % | Samples | Callee                         | Location                                              |
| ----: | ------: | ------------------------------ | ----------------------------------------------------- |
| 98.8% |      80 | `block in file_offenses`       | `../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb` |
|  1.2% |       1 | `RuboCop::Runner#standby_team` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb` |

##### `RuboCop::Runner#file_offenses` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`)

|      % | Samples | Callee                               | Location                                              |
| -----: | ------: | ------------------------------------ | ----------------------------------------------------- |
| 100.0% |      81 | `RuboCop::Runner#file_offense_cache` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb` |

##### `RuboCop::Runner#process_file` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`)

|      % | Samples | Callee                          | Location                                              |
| -----: | ------: | ------------------------------- | ----------------------------------------------------- |
| 100.0% |      81 | `RuboCop::Runner#file_offenses` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb` |

##### `block in each_inspected_file` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`)

|      % | Samples | Callee                         | Location                                              |
| -----: | ------: | ------------------------------ | ----------------------------------------------------- |
| 100.0% |      81 | `RuboCop::Runner#process_file` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb` |

##### `Enumerable#reduce [c function]` (`<unknown>`)

|      % | Samples | Callee                    | Location    |
| -----: | ------: | ------------------------- | ----------- |
| 100.0% |      81 | `Array#each [c function]` | `<unknown>` |

##### `RuboCop::Runner#each_inspected_file` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`)

|      % | Samples | Callee                           | Location    |
| -----: | ------: | -------------------------------- | ----------- |
| 100.0% |      81 | `Enumerable#reduce [c function]` | `<unknown>` |

##### `RuboCop::Runner#inspect_files` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`)

|      % | Samples | Callee                                | Location                                              |
| -----: | ------: | ------------------------------------- | ----------------------------------------------------- |
| 100.0% |      81 | `RuboCop::Runner#each_inspected_file` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb` |

##### `RuboCop::Runner#run` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`)

|      % | Samples | Callee                          | Location                                              |
| -----: | ------: | ------------------------------- | ----------------------------------------------------- |
| 100.0% |      81 | `RuboCop::Runner#inspect_files` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb` |

##### `block in execute_runner` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb`)

|      % | Samples | Callee                | Location                                              |
| -----: | ------: | --------------------- | ----------------------------------------------------- |
| 100.0% |      81 | `RuboCop::Runner#run` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb` |

##### `RuboCop::CLI::Command::ExecuteRunner#with_redirect` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb`)

|      % | Samples | Callee                    | Location                                                                  |
| -----: | ------: | ------------------------- | ------------------------------------------------------------------------- |
| 100.0% |      81 | `block in execute_runner` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb` |

##### `RuboCop::CLI::Command::ExecuteRunner#execute_runner` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb`)

|      % | Samples | Callee                                               | Location                                                                  |
| -----: | ------: | ---------------------------------------------------- | ------------------------------------------------------------------------- |
| 100.0% |      81 | `RuboCop::CLI::Command::ExecuteRunner#with_redirect` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb` |

##### `RuboCop::CLI::Command::ExecuteRunner#run` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb`)

|      % | Samples | Callee                                                | Location                                                                  |
| -----: | ------: | ----------------------------------------------------- | ------------------------------------------------------------------------- |
| 100.0% |      81 | `RuboCop::CLI::Command::ExecuteRunner#execute_runner` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb` |

##### `RuboCop::Runner#do_inspection_loop` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`)

|     % | Samples | Callee                                     | Location                                              |
| ----: | ------: | ------------------------------------------ | ----------------------------------------------------- |
| 73.8% |      59 | `RuboCop::Runner#iterate_until_no_changes` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb` |
| 26.3% |      21 | `RuboCop::Runner#get_processed_source`     | `../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb` |

##### `Enumerable#flat_map [c function]` (`<unknown>`)

|      % | Samples | Callee                    | Location    |
| -----: | ------: | ------------------------- | ----------- |
| 100.0% |      59 | `Array#each [c function]` | `<unknown>` |

##### `Kernel#loop` (`<unknown>`)

|      % | Samples | Callee                              | Location                                              |
| -----: | ------: | ----------------------------------- | ----------------------------------------------------- |
| 100.0% |      59 | `block in iterate_until_no_changes` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb` |

##### `Kernel#require [c function]` (`<unknown>`)

|     % | Samples | Callee                                 | Location                                      |
| ----: | ------: | -------------------------------------- | --------------------------------------------- |
| 92.0% |      46 | `Kernel#require_relative [c function]` | `<unknown>`                                   |
| 28.0% |      14 | `Kernel#require`                       | `<unknown>`                                   |
| 12.0% |       6 | `(unknown) [c function]`               | `<unknown>`                                   |
|  2.0% |       1 | `Gem::Specification.load_defaults`     | `../lib/ruby/3.4.0/rubygems/specification.rb` |

##### `Kernel#require` (`<unknown>`)

|      % | Samples | Callee                        | Location    |
| -----: | ------: | ----------------------------- | ----------- |
| 100.0% |      49 | `Kernel#require [c function]` | `<unknown>` |

##### `Kernel#require_relative [c function]` (`<unknown>`)

|     % | Samples | Callee                                               | Location                                                            |
| ----: | ------: | ---------------------------------------------------- | ------------------------------------------------------------------- |
| 58.7% |      27 | `(unknown) [c function]`                             | `<unknown>`                                                         |
| 34.8% |      16 | `Kernel#require`                                     | `<unknown>`                                                         |
| 23.9% |      11 | `Kernel#require_relative [c function]`               | `<unknown>`                                                         |
| 15.2% |       7 | `RuboCop::AST::NodePattern::Macros#def_node_matcher` | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern.rb` |
|  2.2% |       1 | `Set#each`                                           | `../lib/ruby/3.4.0/set.rb`                                          |

##### `RuboCop::Cop::Commissioner#on_module` (`<unknown>`)

|     % | Samples | Callee                                               | Location                                                        |
| ----: | ------: | ---------------------------------------------------- | --------------------------------------------------------------- |
| 97.6% |      41 | `RuboCop::AST::Traversal#on_while`                   | `<unknown>`                                                     |
|  2.4% |       1 | `RuboCop::Cop::Commissioner#trigger_responding_cops` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb` |

##### `block in on_dstr` (`<unknown>`)

|      % | Samples | Callee                                 | Location    |
| -----: | ------: | -------------------------------------- | ----------- |
| 100.0% |      42 | `RuboCop::Cop::Commissioner#on_module` | `<unknown>` |
|  81.0% |      34 | `RuboCop::Cop::Commissioner#on_def`    | `<unknown>` |
|  73.8% |      31 | `RuboCop::Cop::Commissioner#on_class`  | `<unknown>` |
|  33.3% |      14 | `RuboCop::Cop::Commissioner#on_if`     | `<unknown>` |
|  23.8% |      10 | `RuboCop::Cop::Commissioner#on_sclass` | `<unknown>` |

##### `RuboCop::AST::Traversal#on_dstr` (`<unknown>`)

|      % | Samples | Callee                    | Location    |
| -----: | ------: | ------------------------- | ----------- |
| 100.0% |      42 | `Array#each [c function]` | `<unknown>` |

##### `RuboCop::Cop::Commissioner#on_begin` (`<unknown>`)

|      % | Samples | Callee                            | Location    |
| -----: | ------: | --------------------------------- | ----------- |
| 100.0% |      42 | `RuboCop::AST::Traversal#on_dstr` | `<unknown>` |

##### `Kernel#public_send [c function]` (`<unknown>`)

|    % | Samples | Callee                                                     | Location                                                                            |
| ---: | ------: | ---------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| 7.3% |       3 | `RuboCop::Cop::MethodComplexity#on_def`                    | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/method_complexity.rb`          |
| 7.3% |       3 | `RuboCop::Cop::Layout::SpaceBeforeFirstArg#on_send`        | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/layout/space_before_first_arg.rb`    |
| 7.3% |       3 | `RuboCop::Cop::Layout::SpaceAroundOperators#on_assignment` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/layout/space_around_operators.rb`    |
| 4.9% |       2 | `RuboCop::Cop::Lint::IneffectiveAccessModifier#on_class`   | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/lint/ineffective_access_modifier.rb` |
| 4.9% |       2 | `RuboCop::Cop::Layout::ElseAlignment#on_if`                | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/layout/else_alignment.rb`            |

##### `RuboCop::AST::Traversal#on_while` (`<unknown>`)

|      % | Samples | Callee                                | Location    |
| -----: | ------: | ------------------------------------- | ----------- |
| 100.0% |      41 | `RuboCop::Cop::Commissioner#on_begin` | `<unknown>` |

##### `RuboCop::Cop::Commissioner#on_def` (`<unknown>`)

|     % | Samples | Callee                                               | Location                                                        |
| ----: | ------: | ---------------------------------------------------- | --------------------------------------------------------------- |
| 82.4% |      28 | `RuboCop::AST::Traversal#on_def`                     | `<unknown>`                                                     |
| 17.6% |       6 | `RuboCop::Cop::Commissioner#trigger_responding_cops` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb` |

##### `Class#new [c function]` (`<unknown>`)

|     % | Samples | Callee                                     | Location                                                                |
| ----: | ------: | ------------------------------------------ | ----------------------------------------------------------------------- |
| 65.6% |      21 | `RuboCop::AST::ProcessedSource#initialize` | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/processed_source.rb` |
| 18.8% |       6 | `RuboCop::AST::Node#initialize`            | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node.rb`             |
| 12.5% |       4 | `RuboCop::AST::NodePattern#initialize`     | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern.rb`     |
|  6.3% |       2 | `Parser::Source::Range#initialize`         | `../bundle/gems/parser-3.3.12.0/lib/parser/source/range.rb`             |
|  3.1% |       1 | `RuboCop::Cop::Commissioner#initialize`    | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`         |

##### `RuboCop::Cop::Commissioner#on_class` (`<unknown>`)

|     % | Samples | Callee                                               | Location                                                        |
| ----: | ------: | ---------------------------------------------------- | --------------------------------------------------------------- |
| 96.8% |      30 | `RuboCop::AST::Traversal#on_class`                   | `<unknown>`                                                     |
|  3.2% |       1 | `RuboCop::Cop::Commissioner#trigger_responding_cops` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb` |

##### `RuboCop::AST::Traversal#on_class` (`<unknown>`)

|      % | Samples | Callee                                | Location    |
| -----: | ------: | ------------------------------------- | ----------- |
| 100.0% |      30 | `RuboCop::Cop::Commissioner#on_begin` | `<unknown>` |

##### `RuboCop::AST::Traversal#on_def` (`<unknown>`)

|     % | Samples | Callee                                 | Location    |
| ----: | ------: | -------------------------------------- | ----------- |
| 78.6% |      22 | `RuboCop::Cop::Commissioner#on_begin`  | `<unknown>` |
|  7.1% |       2 | `RuboCop::Cop::Commissioner#on_args`   | `<unknown>` |
|  7.1% |       2 | `RuboCop::Cop::Commissioner#on_rescue` | `<unknown>` |
|  3.6% |       1 | `RuboCop::Cop::Commissioner#on_ensure` | `<unknown>` |
|  3.6% |       1 | `RuboCop::Cop::Commissioner#on_if`     | `<unknown>` |

##### `Racc::Parser#_racc_do_parse_c [c function]` (`<unknown>`)

|     % | Samples | Callee                       | Location                                              |
| ----: | ------: | ---------------------------- | ----------------------------------------------------- |
| 47.4% |       9 | `Parser::Base#next_token`    | `../bundle/gems/parser-3.3.12.0/lib/parser/base.rb`   |
|  5.3% |       1 | `Parser::Ruby27#_reduce_418` | `../bundle/gems/parser-3.3.12.0/lib/parser/ruby27.rb` |
|  5.3% |       1 | `Parser::Ruby27#_reduce_588` | `../bundle/gems/parser-3.3.12.0/lib/parser/ruby27.rb` |
|  5.3% |       1 | `Parser::Ruby27#_reduce_549` | `../bundle/gems/parser-3.3.12.0/lib/parser/ruby27.rb` |
|  5.3% |       1 | `Parser::Ruby27#_reduce_546` | `../bundle/gems/parser-3.3.12.0/lib/parser/ruby27.rb` |

##### `Racc::Parser#do_parse` (`<unknown>`)

|      % | Samples | Callee                                       | Location    |
| -----: | ------: | -------------------------------------------- | ----------- |
| 100.0% |      19 | `Racc::Parser#_racc_do_parse_c [c function]` | `<unknown>` |

##### `RuboCop::Cop::Commissioner#on_if` (`<unknown>`)

|     % | Samples | Callee                                               | Location                                                        |
| ----: | ------: | ---------------------------------------------------- | --------------------------------------------------------------- |
| 63.2% |      12 | `RuboCop::AST::Traversal#on_if`                      | `<unknown>`                                                     |
| 42.1% |       8 | `RuboCop::Cop::Commissioner#trigger_responding_cops` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb` |

##### `RuboCop::Cop::Commissioner#on_send` (`<unknown>`)

|     % | Samples | Callee                                               | Location                                                        |
| ----: | ------: | ---------------------------------------------------- | --------------------------------------------------------------- |
| 73.7% |      14 | `RuboCop::Cop::Commissioner#trigger_responding_cops` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb` |
| 42.1% |       8 | `RuboCop::AST::Traversal#on_send`                    | `<unknown>`                                                     |

##### `Enumerable#each_with_index [c function]` (`<unknown>`)

|      % | Samples | Callee                    | Location    |
| -----: | ------: | ------------------------- | ----------- |
| 100.0% |      12 | `Array#each [c function]` | `<unknown>` |

##### `RuboCop::AST::Traversal#on_if` (`<unknown>`)

|     % | Samples | Callee                                  | Location    |
| ----: | ------: | --------------------------------------- | ----------- |
| 66.7% |       8 | `RuboCop::Cop::Commissioner#on_send`    | `<unknown>` |
| 16.7% |       2 | `RuboCop::Cop::Commissioner#on_if`      | `<unknown>` |
|  8.3% |       1 | `RuboCop::Cop::Commissioner#on_op_asgn` | `<unknown>` |
|  8.3% |       1 | `RuboCop::Cop::Commissioner#on_begin`   | `<unknown>` |
|  8.3% |       1 | `RuboCop::Cop::Commissioner#on_or`      | `<unknown>` |

##### `RuboCop::Cop::Commissioner#on_sclass` (`<unknown>`)

|      % | Samples | Callee                             | Location    |
| -----: | ------: | ---------------------------------- | ----------- |
| 100.0% |      10 | `RuboCop::AST::Traversal#on_while` | `<unknown>` |

##### `RuboCop::Cop::Commissioner#on_block` (`<unknown>`)

|     % | Samples | Callee                                               | Location                                                        |
| ----: | ------: | ---------------------------------------------------- | --------------------------------------------------------------- |
| 87.5% |       7 | `RuboCop::AST::Traversal#on_block`                   | `<unknown>`                                                     |
| 12.5% |       1 | `RuboCop::Cop::Commissioner#trigger_responding_cops` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb` |

##### `block in on_send` (`<unknown>`)

|     % | Samples | Callee                                 | Location    |
| ----: | ------: | -------------------------------------- | ----------- |
| 37.5% |       3 | `RuboCop::Cop::Commissioner#on_send`   | `<unknown>` |
| 12.5% |       1 | `RuboCop::Cop::Commissioner#on_regexp` | `<unknown>` |
| 12.5% |       1 | `RuboCop::Cop::Commissioner#on_dstr`   | `<unknown>` |
| 12.5% |       1 | `RuboCop::Cop::Commissioner#on_block`  | `<unknown>` |
| 12.5% |       1 | `RuboCop::Cop::Commissioner#on_lvar`   | `<unknown>` |

##### `RuboCop::AST::Traversal#on_send` (`<unknown>`)

|      % | Samples | Callee                                    | Location    |
| -----: | ------: | ----------------------------------------- | ----------- |
| 100.0% |       8 | `Enumerable#each_with_index [c function]` | `<unknown>` |

##### `Enumerable#each_cons [c function]` (`<unknown>`)

|      % | Samples | Callee                    | Location    |
| -----: | ------: | ------------------------- | ----------- |
| 100.0% |       7 | `Array#each [c function]` | `<unknown>` |

##### `RuboCop::Cop::Commissioner#on_lvasgn` (`<unknown>`)

|     % | Samples | Callee                                               | Location                                                        |
| ----: | ------: | ---------------------------------------------------- | --------------------------------------------------------------- |
| 71.4% |       5 | `RuboCop::AST::Traversal#on_lvasgn`                  | `<unknown>`                                                     |
| 28.6% |       2 | `RuboCop::Cop::Commissioner#trigger_responding_cops` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb` |

##### `Enumerator#each [c function]` (`<unknown>`)

|     % | Samples | Callee                                                                | Location                                                                             |
| ----: | ------: | --------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| 33.3% |       2 | `RuboCop::Cop::Lint::IneffectiveAccessModifier#private_class_methods` | `<unknown>`                                                                          |
| 33.3% |       2 | `RuboCop::AST::Descendence#each_node`                                 | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb`        |
| 16.7% |       1 | `Integer#downto [c function]`                                         | `<unknown>`                                                                          |
| 16.7% |       1 | `RuboCop::AST::Node#each_ancestor`                                    | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node.rb`                          |
| 16.7% |       1 | `RuboCop::AST::NodePattern::Compiler::Binding#union_bind`             | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern/compiler/binding.rb` |

##### `Enumerable#each_slice [c function]` (`<unknown>`)

|      % | Samples | Callee                    | Location    |
| -----: | ------: | ------------------------- | ----------- |
| 100.0% |       5 | `Array#each [c function]` | `<unknown>` |

##### `Psych.safe_load` (`../lib/ruby/3.4.0/psych.rb`)

|     % | Samples | Callee                           | Location                                      |
| ----: | ------: | -------------------------------- | --------------------------------------------- |
| 50.0% |       2 | `Psych.parse`                    | `../lib/ruby/3.4.0/psych.rb`                  |
| 50.0% |       2 | `Psych::Visitors::ToRuby#accept` | `../lib/ruby/3.4.0/psych/visitors/to_ruby.rb` |

##### `Enumerator#with_object [c function]` (`<unknown>`)

|      % | Samples | Callee                               | Location    |
| -----: | ------: | ------------------------------------ | ----------- |
| 100.0% |       3 | `Enumerable#each_slice [c function]` | `<unknown>` |

##### `Psych::Parser#parse` (`../lib/ruby/3.4.0/psych/parser.rb`)

|      % | Samples | Callee                                     | Location    |
| -----: | ------: | ------------------------------------------ | ----------- |
| 100.0% |       2 | `Psych::Parser#_native_parse [c function]` | `<unknown>` |

##### `Psych.parse_stream` (`../lib/ruby/3.4.0/psych.rb`)

|      % | Samples | Callee                | Location                            |
| -----: | ------: | --------------------- | ----------------------------------- |
| 100.0% |       2 | `Psych::Parser#parse` | `../lib/ruby/3.4.0/psych/parser.rb` |

##### `Psych.parse` (`../lib/ruby/3.4.0/psych.rb`)

|      % | Samples | Callee               | Location                     |
| -----: | ------: | -------------------- | ---------------------------- |
| 100.0% |       2 | `Psych.parse_stream` | `../lib/ruby/3.4.0/psych.rb` |

##### `Gem::Specification.load` (`../lib/ruby/3.4.0/rubygems/specification.rb`)

|     % | Samples | Callee                        | Location    |
| ----: | ------: | ----------------------------- | ----------- |
| 50.0% |       1 | `Kernel#binding [c function]` | `<unknown>` |
| 50.0% |       1 | `Kernel#eval [c function]`    | `<unknown>` |

##### `Psych::Visitors::ToRuby#visit_Psych_Nodes_Scalar` (`../lib/ruby/3.4.0/psych/visitors/to_ruby.rb`)

|     % | Samples | Callee                                | Location                                      |
| ----: | ------: | ------------------------------------- | --------------------------------------------- |
| 50.0% |       1 | `Psych::Visitors::ToRuby#deserialize` | `../lib/ruby/3.4.0/psych/visitors/to_ruby.rb` |
| 50.0% |       1 | `Psych::Visitors::ToRuby#register`    | `../lib/ruby/3.4.0/psych/visitors/to_ruby.rb` |

##### `Psych::Visitors::Visitor#visit` (`../lib/ruby/3.4.0/psych/visitors/visitor.rb`)

|      % | Samples | Callee                                               | Location                                      |
| -----: | ------: | ---------------------------------------------------- | --------------------------------------------- |
| 100.0% |       2 | `Psych::Visitors::ToRuby#visit_Psych_Nodes_Scalar`   | `../lib/ruby/3.4.0/psych/visitors/to_ruby.rb` |
| 100.0% |       2 | `Psych::Visitors::ToRuby#visit_Psych_Nodes_Mapping`  | `../lib/ruby/3.4.0/psych/visitors/to_ruby.rb` |
| 100.0% |       2 | `Psych::Visitors::ToRuby#visit_Psych_Nodes_Document` | `../lib/ruby/3.4.0/psych/visitors/to_ruby.rb` |
|  50.0% |       1 | `Psych::Visitors::ToRuby#visit_Psych_Nodes_Sequence` | `../lib/ruby/3.4.0/psych/visitors/to_ruby.rb` |

##### `Psych::Visitors::Visitor#accept` (`../lib/ruby/3.4.0/psych/visitors/visitor.rb`)

|      % | Samples | Callee                           | Location                                      |
| -----: | ------: | -------------------------------- | --------------------------------------------- |
| 100.0% |       2 | `Psych::Visitors::Visitor#visit` | `../lib/ruby/3.4.0/psych/visitors/visitor.rb` |

##### `Psych::Visitors::ToRuby#accept` (`../lib/ruby/3.4.0/psych/visitors/to_ruby.rb`)

|      % | Samples | Callee                            | Location                                      |
| -----: | ------: | --------------------------------- | --------------------------------------------- |
| 100.0% |       2 | `Psych::Visitors::Visitor#accept` | `../lib/ruby/3.4.0/psych/visitors/visitor.rb` |

##### `block in revive_hash` (`../lib/ruby/3.4.0/psych/visitors/to_ruby.rb`)

|      % | Samples | Callee                           | Location                                      |
| -----: | ------: | -------------------------------- | --------------------------------------------- |
| 100.0% |       2 | `Psych::Visitors::ToRuby#accept` | `../lib/ruby/3.4.0/psych/visitors/to_ruby.rb` |

##### `Psych::Visitors::ToRuby#revive_hash` (`../lib/ruby/3.4.0/psych/visitors/to_ruby.rb`)

|      % | Samples | Callee                               | Location    |
| -----: | ------: | ------------------------------------ | ----------- |
| 100.0% |       2 | `Enumerable#each_slice [c function]` | `<unknown>` |

##### `Psych::Visitors::ToRuby#visit_Psych_Nodes_Mapping` (`../lib/ruby/3.4.0/psych/visitors/to_ruby.rb`)

|      % | Samples | Callee                                | Location                                      |
| -----: | ------: | ------------------------------------- | --------------------------------------------- |
| 100.0% |       2 | `Psych::Visitors::ToRuby#revive_hash` | `../lib/ruby/3.4.0/psych/visitors/to_ruby.rb` |

##### `Psych::Visitors::ToRuby#visit_Psych_Nodes_Document` (`../lib/ruby/3.4.0/psych/visitors/to_ruby.rb`)

|      % | Samples | Callee                           | Location                                      |
| -----: | ------: | -------------------------------- | --------------------------------------------- |
| 100.0% |       2 | `Psych::Visitors::ToRuby#accept` | `../lib/ruby/3.4.0/psych/visitors/to_ruby.rb` |

##### `Set#each` (`../lib/ruby/3.4.0/set.rb`)

|      % | Samples | Callee                       | Location    |
| -----: | ------: | ---------------------------- | ----------- |
| 100.0% |       1 | `Hash#each_key [c function]` | `<unknown>` |

##### `Psych::TreeBuilder#scalar` (`../lib/ruby/3.4.0/psych/tree_builder.rb`)

|      % | Samples | Callee                   | Location    |
| -----: | ------: | ------------------------ | ----------- |
| 100.0% |       1 | `Class#new [c function]` | `<unknown>` |

##### `block in each_spec` (`../lib/ruby/3.4.0/rubygems/specification.rb`)

|      % | Samples | Callee                    | Location                                      |
| -----: | ------: | ------------------------- | --------------------------------------------- |
| 100.0% |       1 | `Gem::Specification.load` | `../lib/ruby/3.4.0/rubygems/specification.rb` |

##### `block (2 levels) in each_gemspec` (`../lib/ruby/3.4.0/rubygems/specification.rb`)

|      % | Samples | Callee               | Location                                      |
| -----: | ------: | -------------------- | --------------------------------------------- |
| 100.0% |       1 | `block in each_spec` | `../lib/ruby/3.4.0/rubygems/specification.rb` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

Common call stack: `Kernel#load [c function]` ← `<main>` (`rubocop`)

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ---: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 9.4% |      13 | `(unknown) [c function]` ← `Kernel#require_relative [c function]` ← `Kernel#require [c function]` ← `Kernel#require`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 4.3% |       6 | `(unknown) [c function]` ← `Kernel#require_relative [c function]` ← `Kernel#require [c function]` ← `Kernel#require` ← `Kernel#require_relative [c function]` ← `Kernel#require [c function]` ← `Kernel#require` ← `Kernel#require [c function]` ← `Kernel#require`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 2.9% |       4 | `Array#index [c function]` ← `RuboCop::Cop::Layout::SpaceAfterComma#before_semicolon?` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/layout/space_after_comma.rb`) ← `RuboCop::Cop::Layout::SpaceAfterComma#kind` ← `block in each_missing_space` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/space_after_punctuation.rb`) ← `(unknown) [c function]` ← `Array#each [c function]` ← `Enumerable#each_cons [c function]` ← `RuboCop::Cop::SpaceAfterPunctuation#each_missing_space` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/space_after_punctuation.rb`) ← `RuboCop::Cop::SpaceAfterPunctuation#on_new_investigation` ← `block (2 levels) in invoke` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`) ← `RuboCop::Cop::Commissioner#with_cop_error_handling` ← `block in invoke` ← `Array#each [c function]` ← `RuboCop::Cop::Commissioner#invoke` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`) ← `RuboCop::Cop::Commissioner#investigate` ← `RuboCop::Cop::Team#investigate_partial` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/team.rb`) ← `RuboCop::Cop::Team#investigate` ← `block in inspect_file` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `(unknown) [c function]` ← `Array#each [c function]` ← `Enumerable#flat_map [c function]` ← `RuboCop::Runner#inspect_file` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `block in do_inspection_loop` ← `block in iterate_until_no_changes` ← `Kernel#loop` ← `RuboCop::Runner#iterate_until_no_changes` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `RuboCop::Runner#do_inspection_loop` ← `block in file_offenses` ← `RuboCop::Runner#file_offense_cache` ← `RuboCop::Runner#file_offenses` ← `RuboCop::Runner#process_file` ← `block in each_inspected_file` ← `(unknown) [c function]` ← `Array#each [c function]` ← `Enumerable#reduce [c function]` ← `RuboCop::Runner#each_inspected_file` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `RuboCop::Runner#inspect_files` ← `RuboCop::Runner#run` ← `block in execute_runner` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb`) ← `RuboCop::CLI::Command::ExecuteRunner#with_redirect` ← `RuboCop::CLI::Command::ExecuteRunner#execute_runner` ← `RuboCop::CLI::Command::ExecuteRunner#run` ← `RuboCop::CLI::Command.run` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command.rb`) ← `RuboCop::CLI::Environment#run` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/environment.rb`) ← `RuboCop::CLI#run_command` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`) ← `RuboCop::CLI#execute_runners` ← `block in run` ← `RuboCop::CLI#profile_if_needed` ← `RuboCop::CLI#run` ← `block in <top (required)>` (`../bundle/gems/rubocop-1.65.1/exe/rubocop`) ← `Benchmark.realtime` (`../lib/ruby/3.4.0/benchmark.rb`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 2.9% |       4 | `Parser::Lexer#advance` (`../bundle/gems/parser-3.3.12.0/lib/parser/lexer-F1.rb`) ← `Parser::Base#next_token` (`../bundle/gems/parser-3.3.12.0/lib/parser/base.rb`) ← `Racc::Parser#_racc_do_parse_c [c function]` ← `Racc::Parser#do_parse` ← `Parser::Base#parse` (`../bundle/gems/parser-3.3.12.0/lib/parser/base.rb`) ← `Parser::Base#tokenize` ← `RuboCop::AST::ProcessedSource#parse_and_lex` (`../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/processed_source.rb`) ← `RuboCop::AST::ProcessedSource#tokenize` ← `RuboCop::AST::ProcessedSource#parse` ← `RuboCop::AST::ProcessedSource#initialize` ← `Class#new [c function]` ← `RuboCop::AST::ProcessedSource.from_file` (`../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/processed_source.rb`) ← `RuboCop::Runner#get_processed_source` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `RuboCop::Runner#do_inspection_loop` ← `block in file_offenses` ← `RuboCop::Runner#file_offense_cache` ← `RuboCop::Runner#file_offenses` ← `RuboCop::Runner#process_file` ← `block in each_inspected_file` ← `(unknown) [c function]` ← `Array#each [c function]` ← `Enumerable#reduce [c function]` ← `RuboCop::Runner#each_inspected_file` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `RuboCop::Runner#inspect_files` ← `RuboCop::Runner#run` ← `block in execute_runner` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb`) ← `RuboCop::CLI::Command::ExecuteRunner#with_redirect` ← `RuboCop::CLI::Command::ExecuteRunner#execute_runner` ← `RuboCop::CLI::Command::ExecuteRunner#run` ← `RuboCop::CLI::Command.run` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command.rb`) ← `RuboCop::CLI::Environment#run` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/environment.rb`) ← `RuboCop::CLI#run_command` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`) ← `RuboCop::CLI#execute_runners` ← `block in run` ← `RuboCop::CLI#profile_if_needed` ← `RuboCop::CLI#run` ← `block in <top (required)>` (`../bundle/gems/rubocop-1.65.1/exe/rubocop`) ← `Benchmark.realtime` (`../lib/ruby/3.4.0/benchmark.rb`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 2.2% |       3 | `String#index [c function]` ← `Parser::Source::Buffer#line_begins` (`../bundle/gems/parser-3.3.12.0/lib/parser/source/buffer.rb`) ← `Parser::Source::Buffer#line_index_for_position` ← `Parser::Source::Buffer#line_for_position` ← `Parser::Source::Range#line` (`../bundle/gems/parser-3.3.12.0/lib/parser/source/range.rb`) ← `Parser::Source::Map#line` (`../bundle/gems/parser-3.3.12.0/lib/parser/source/map.rb`) ← `RuboCop::Cop::Layout::CommentIndentation#own_line_comment?` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/layout/comment_indentation.rb`) ← `RuboCop::Cop::Layout::CommentIndentation#check` ← `block in on_new_investigation` ← `(unknown) [c function]` ← `Array#each [c function]` ← `Enumerable#each_with_index [c function]` ← `RuboCop::Cop::Layout::CommentIndentation#on_new_investigation` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/layout/comment_indentation.rb`) ← `block (2 levels) in invoke` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`) ← `RuboCop::Cop::Commissioner#with_cop_error_handling` ← `block in invoke` ← `Array#each [c function]` ← `RuboCop::Cop::Commissioner#invoke` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`) ← `RuboCop::Cop::Commissioner#investigate` ← `RuboCop::Cop::Team#investigate_partial` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/team.rb`) ← `RuboCop::Cop::Team#investigate` ← `block in inspect_file` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `(unknown) [c function]` ← `Array#each [c function]` ← `Enumerable#flat_map [c function]` ← `RuboCop::Runner#inspect_file` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `block in do_inspection_loop` ← `block in iterate_until_no_changes` ← `Kernel#loop` ← `RuboCop::Runner#iterate_until_no_changes` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `RuboCop::Runner#do_inspection_loop` ← `block in file_offenses` ← `RuboCop::Runner#file_offense_cache` ← `RuboCop::Runner#file_offenses` ← `RuboCop::Runner#process_file` ← `block in each_inspected_file` ← `(unknown) [c function]` ← `Array#each [c function]` ← `Enumerable#reduce [c function]` ← `RuboCop::Runner#each_inspected_file` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `RuboCop::Runner#inspect_files` ← `RuboCop::Runner#run` ← `block in execute_runner` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb`) ← `RuboCop::CLI::Command::ExecuteRunner#with_redirect` ← `RuboCop::CLI::Command::ExecuteRunner#execute_runner` ← `RuboCop::CLI::Command::ExecuteRunner#run` ← `RuboCop::CLI::Command.run` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command.rb`) ← `RuboCop::CLI::Environment#run` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/environment.rb`) ← `RuboCop::CLI#run_command` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`) ← `RuboCop::CLI#execute_runners` ← `block in run` ← `RuboCop::CLI#profile_if_needed` ← `RuboCop::CLI#run` ← `block in <top (required)>` (`../bundle/gems/rubocop-1.65.1/exe/rubocop`) ← `Benchmark.realtime` (`../lib/ruby/3.4.0/benchmark.rb`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 2.2% |       3 | `Module#class_eval [c function]` ← `RuboCop::AST::NodePattern::MethodDefiner#def_helper` (`../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern/method_definer.rb`) ← `RuboCop::AST::NodePattern::MethodDefiner#def_node_matcher` ← `RuboCop::AST::NodePattern::Macros#def_node_matcher` (`../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern.rb`) ← `Kernel#require_relative [c function]` ← `Kernel#require [c function]` ← `Kernel#require`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 1.4% |       2 | `(unknown) [c function]` ← `Kernel#require_relative [c function]` ← `Kernel#require_relative [c function]` ← `Kernel#require_relative [c function]` ← `Kernel#require [c function]` ← `Kernel#require` ← `Kernel#require_relative [c function]` ← `Kernel#require_relative [c function]` ← `Kernel#require [c function]` ← `Kernel#require`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 1.4% |       2 | `Kernel#require_relative [c function]` ← `Kernel#require [c function]` ← `Kernel#require`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 1.4% |       2 | `(unknown) [c function]` ← `Kernel#require_relative [c function]` ← `Kernel#require [c function]` ← `Kernel#require` ← `Kernel#require_relative [c function]` ← `Kernel#require [c function]` ← `Kernel#require`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 1.4% |       2 | `(unknown) [c function]` ← `Kernel#require_relative [c function]` ← `Kernel#require_relative [c function]` ← `Kernel#require_relative [c function]` ← `Kernel#require [c function]` ← `Kernel#require` ← `Kernel#require [c function]` ← `Kernel#require`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 0.7% |       1 | `RuboCop::AST::Descendence#visit_all_descendants` (`../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb`) ← `block in visit_all_descendants` ← `Array#each [c function]` ← `RuboCop::AST::Descendence#visit_all_descendants` (`../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb`) ← `block in visit_all_descendants` ← `Array#each [c function]` ← `RuboCop::AST::Descendence#visit_all_descendants` (`../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb`) ← `block in visit_all_descendants` ← `Array#each [c function]` ← `RuboCop::AST::Descendence#visit_all_descendants` (`../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb`) ← `block in visit_all_descendants` ← `Array#each [c function]` ← `RuboCop::AST::Descendence#visit_all_descendants` (`../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb`) ← `RuboCop::AST::Descendence#visit_descendants` ← `RuboCop::AST::Descendence#each_node` ← `RuboCop::Cop::Lint::IneffectiveAccessModifier#private_class_methods` ← `Enumerator#each [c function]` ← `Enumerable#to_a [c function]` ← `RuboCop::Cop::Lint::IneffectiveAccessModifier#private_class_method_names` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/lint/ineffective_access_modifier.rb`) ← `block in ineffective_modifier` ← `block in each_child_node` (`../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb`) ← `Array#each [c function]` ← `RuboCop::AST::Descendence#each_child_node` (`../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb`) ← `RuboCop::Cop::Lint::IneffectiveAccessModifier#ineffective_modifier` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/lint/ineffective_access_modifier.rb`) ← `RuboCop::Cop::Lint::IneffectiveAccessModifier#check_node` ← `RuboCop::Cop::Lint::IneffectiveAccessModifier#on_class` ← `Kernel#public_send [c function]` ← `block (2 levels) in trigger_responding_cops` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`) ← `RuboCop::Cop::Commissioner#with_cop_error_handling` ← `block in trigger_responding_cops` ← `Array#each [c function]` ← `RuboCop::Cop::Commissioner#trigger_responding_cops` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`) ← `RuboCop::Cop::Commissioner#on_module` ← `block in on_dstr` ← `Array#each [c function]` ← `RuboCop::AST::Traversal#on_dstr` ← `RuboCop::Cop::Commissioner#on_begin` ← `RuboCop::AST::Traversal#walk` (`../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/traversal.rb`) ← `RuboCop::Cop::Commissioner#investigate` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`) ← `RuboCop::Cop::Team#investigate_partial` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/team.rb`) ← `RuboCop::Cop::Team#investigate` ← `block in inspect_file` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `(unknown) [c function]` ← `Array#each [c function]` ← `Enumerable#flat_map [c function]` ← `RuboCop::Runner#inspect_file` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `block in do_inspection_loop` ← `block in iterate_until_no_changes` ← `Kernel#loop` ← `RuboCop::Runner#iterate_until_no_changes` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `RuboCop::Runner#do_inspection_loop` ← `block in file_offenses` ← `RuboCop::Runner#file_offense_cache` ← `RuboCop::Runner#file_offenses` ← `RuboCop::Runner#process_file` ← `block in each_inspected_file` ← `(unknown) [c function]` ← `Array#each [c function]` ← `Enumerable#reduce [c function]` ← `RuboCop::Runner#each_inspected_file` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `RuboCop::Runner#inspect_files` ← `RuboCop::Runner#run` ← `block in execute_runner` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb`) ← `RuboCop::CLI::Command::ExecuteRunner#with_redirect` ← `RuboCop::CLI::Command::ExecuteRunner#execute_runner` ← `RuboCop::CLI::Command::ExecuteRunner#run` ← `RuboCop::CLI::Command.run` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command.rb`) ← `RuboCop::CLI::Environment#run` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/environment.rb`) ← `RuboCop::CLI#run_command` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`) ← `RuboCop::CLI#execute_runners` ← `block in run` ← `RuboCop::CLI#profile_if_needed` ← `RuboCop::CLI#run` ← `block in <top (required)>` (`../bundle/gems/rubocop-1.65.1/exe/rubocop`) ← `Benchmark.realtime` (`../lib/ruby/3.4.0/benchmark.rb`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 0.7% |       1 | `Class#new [c function]` ← `block in mobilize_cops` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/team.rb`) ← `(unknown) [c function]` ← `Array#each [c function]` ← `RuboCop::Cop::Registry#each` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/registry.rb`) ← `Enumerable#map [c function]` ← `RuboCop::Cop::Team.mobilize_cops` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/team.rb`) ← `RuboCop::Cop::Team.mobilize` ← `RuboCop::Runner#standby_team` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `RuboCop::Runner#file_offense_cache` ← `RuboCop::Runner#file_offenses` ← `RuboCop::Runner#process_file` ← `block in each_inspected_file` ← `(unknown) [c function]` ← `Array#each [c function]` ← `Enumerable#reduce [c function]` ← `RuboCop::Runner#each_inspected_file` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `RuboCop::Runner#inspect_files` ← `RuboCop::Runner#run` ← `block in execute_runner` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb`) ← `RuboCop::CLI::Command::ExecuteRunner#with_redirect` ← `RuboCop::CLI::Command::ExecuteRunner#execute_runner` ← `RuboCop::CLI::Command::ExecuteRunner#run` ← `RuboCop::CLI::Command.run` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command.rb`) ← `RuboCop::CLI::Environment#run` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/environment.rb`) ← `RuboCop::CLI#run_command` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`) ← `RuboCop::CLI#execute_runners` ← `block in run` ← `RuboCop::CLI#profile_if_needed` ← `RuboCop::CLI#run` ← `block in <top (required)>` (`../bundle/gems/rubocop-1.65.1/exe/rubocop`) ← `Benchmark.realtime` (`../lib/ruby/3.4.0/benchmark.rb`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 0.7% |       1 | `RuboCop::Cop::Layout::ExtraSpacing#extra_space_range` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/layout/extra_spacing.rb`) ← `RuboCop::Cop::Layout::ExtraSpacing#check_other` ← `RuboCop::Cop::Layout::ExtraSpacing#check_tokens` ← `block in on_new_investigation` ← `(unknown) [c function]` ← `Array#each [c function]` ← `Enumerable#each_cons [c function]` ← `RuboCop::Cop::Layout::ExtraSpacing#on_new_investigation` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/layout/extra_spacing.rb`) ← `block (2 levels) in invoke` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`) ← `RuboCop::Cop::Commissioner#with_cop_error_handling` ← `block in invoke` ← `Array#each [c function]` ← `RuboCop::Cop::Commissioner#invoke` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`) ← `RuboCop::Cop::Commissioner#investigate` ← `RuboCop::Cop::Team#investigate_partial` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/team.rb`) ← `RuboCop::Cop::Team#investigate` ← `block in inspect_file` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `(unknown) [c function]` ← `Array#each [c function]` ← `Enumerable#flat_map [c function]` ← `RuboCop::Runner#inspect_file` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `block in do_inspection_loop` ← `block in iterate_until_no_changes` ← `Kernel#loop` ← `RuboCop::Runner#iterate_until_no_changes` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `RuboCop::Runner#do_inspection_loop` ← `block in file_offenses` ← `RuboCop::Runner#file_offense_cache` ← `RuboCop::Runner#file_offenses` ← `RuboCop::Runner#process_file` ← `block in each_inspected_file` ← `(unknown) [c function]` ← `Array#each [c function]` ← `Enumerable#reduce [c function]` ← `RuboCop::Runner#each_inspected_file` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `RuboCop::Runner#inspect_files` ← `RuboCop::Runner#run` ← `block in execute_runner` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb`) ← `RuboCop::CLI::Command::ExecuteRunner#with_redirect` ← `RuboCop::CLI::Command::ExecuteRunner#execute_runner` ← `RuboCop::CLI::Command::ExecuteRunner#run` ← `RuboCop::CLI::Command.run` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command.rb`) ← `RuboCop::CLI::Environment#run` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/environment.rb`) ← `RuboCop::CLI#run_command` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`) ← `RuboCop::CLI#execute_runners` ← `block in run` ← `RuboCop::CLI#profile_if_needed` ← `RuboCop::CLI#run` ← `block in <top (required)>` (`../bundle/gems/rubocop-1.65.1/exe/rubocop`) ← `Benchmark.realtime` (`../lib/ruby/3.4.0/benchmark.rb`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 0.7% |       1 | `RuboCop::AST::Node#initialize` (`../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node.rb`) ← `Class#new [c function]` ← `RuboCop::AST::BuilderExtensions#n` (`../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/builder.rb`) ← `Parser::Builders::Default#call_method` (`../bundle/gems/parser-3.3.12.0/lib/parser/builders/default.rb`) ← `Parser::Ruby27#_reduce_418` (`../bundle/gems/parser-3.3.12.0/lib/parser/ruby27.rb`) ← `Racc::Parser#_racc_do_parse_c [c function]` ← `Racc::Parser#do_parse` ← `Parser::Base#parse` (`../bundle/gems/parser-3.3.12.0/lib/parser/base.rb`) ← `Parser::Base#tokenize` ← `RuboCop::AST::ProcessedSource#parse_and_lex` (`../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/processed_source.rb`) ← `RuboCop::AST::ProcessedSource#tokenize` ← `RuboCop::AST::ProcessedSource#parse` ← `RuboCop::AST::ProcessedSource#initialize` ← `Class#new [c function]` ← `RuboCop::AST::ProcessedSource.from_file` (`../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/processed_source.rb`) ← `RuboCop::Runner#get_processed_source` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `RuboCop::Runner#do_inspection_loop` ← `block in file_offenses` ← `RuboCop::Runner#file_offense_cache` ← `RuboCop::Runner#file_offenses` ← `RuboCop::Runner#process_file` ← `block in each_inspected_file` ← `(unknown) [c function]` ← `Array#each [c function]` ← `Enumerable#reduce [c function]` ← `RuboCop::Runner#each_inspected_file` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `RuboCop::Runner#inspect_files` ← `RuboCop::Runner#run` ← `block in execute_runner` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb`) ← `RuboCop::CLI::Command::ExecuteRunner#with_redirect` ← `RuboCop::CLI::Command::ExecuteRunner#execute_runner` ← `RuboCop::CLI::Command::ExecuteRunner#run` ← `RuboCop::CLI::Command.run` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command.rb`) ← `RuboCop::CLI::Environment#run` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/environment.rb`) ← `RuboCop::CLI#run_command` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`) ← `RuboCop::CLI#execute_runners` ← `block in run` ← `RuboCop::CLI#profile_if_needed` ← `RuboCop::CLI#run` ← `block in <top (required)>` (`../bundle/gems/rubocop-1.65.1/exe/rubocop`) ← `Benchmark.realtime` (`../lib/ruby/3.4.0/benchmark.rb`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 0.7% |       1 | `Parser::AST::Node#assign_properties` (`../bundle/gems/parser-3.3.12.0/lib/parser/ast/node.rb`) ← `AST::Node#initialize` (`../bundle/gems/ast-2.4.3/lib/ast/node.rb`) ← `RuboCop::AST::Node#initialize` (`../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node.rb`) ← `Class#new [c function]` ← `RuboCop::AST::BuilderExtensions#n` (`../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/builder.rb`) ← `Parser::Builders::Default#ident` (`../bundle/gems/parser-3.3.12.0/lib/parser/builders/default.rb`) ← `Parser::Ruby27#_reduce_588` (`../bundle/gems/parser-3.3.12.0/lib/parser/ruby27.rb`) ← `Racc::Parser#_racc_do_parse_c [c function]` ← `Racc::Parser#do_parse` ← `Parser::Base#parse` (`../bundle/gems/parser-3.3.12.0/lib/parser/base.rb`) ← `Parser::Base#tokenize` ← `RuboCop::AST::ProcessedSource#parse_and_lex` (`../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/processed_source.rb`) ← `RuboCop::AST::ProcessedSource#tokenize` ← `RuboCop::AST::ProcessedSource#parse` ← `RuboCop::AST::ProcessedSource#initialize` ← `Class#new [c function]` ← `RuboCop::AST::ProcessedSource.from_file` (`../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/processed_source.rb`) ← `RuboCop::Runner#get_processed_source` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `RuboCop::Runner#do_inspection_loop` ← `block in file_offenses` ← `RuboCop::Runner#file_offense_cache` ← `RuboCop::Runner#file_offenses` ← `RuboCop::Runner#process_file` ← `block in each_inspected_file` ← `(unknown) [c function]` ← `Array#each [c function]` ← `Enumerable#reduce [c function]` ← `RuboCop::Runner#each_inspected_file` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `RuboCop::Runner#inspect_files` ← `RuboCop::Runner#run` ← `block in execute_runner` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb`) ← `RuboCop::CLI::Command::ExecuteRunner#with_redirect` ← `RuboCop::CLI::Command::ExecuteRunner#execute_runner` ← `RuboCop::CLI::Command::ExecuteRunner#run` ← `RuboCop::CLI::Command.run` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command.rb`) ← `RuboCop::CLI::Environment#run` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/environment.rb`) ← `RuboCop::CLI#run_command` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`) ← `RuboCop::CLI#execute_runners` ← `block in run` ← `RuboCop::CLI#profile_if_needed` ← `RuboCop::CLI#run` ← `block in <top (required)>` (`../bundle/gems/rubocop-1.65.1/exe/rubocop`) ← `Benchmark.realtime` (`../lib/ruby/3.4.0/benchmark.rb`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 0.7% |       1 | `String#encode [c function]` ← `Parser::Source::Buffer#slice` (`../bundle/gems/parser-3.3.12.0/lib/parser/source/buffer.rb`) ← `Parser::Source::Range#source` (`../bundle/gems/parser-3.3.12.0/lib/parser/source/range.rb`) ← `RuboCop::AST::IfNode#keyword` (`../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/if_node.rb`) ← `RuboCop::AST::IfNode#unless?` ← `RuboCop::AST::IfNode#node_parts` ← `RuboCop::AST::ConditionalNode#condition` (`../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/conditional_node.rb`) ← `RuboCop::Cop::Lint::LiteralAsCondition#condition` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/lint/literal_as_condition.rb`) ← `RuboCop::Cop::Lint::LiteralAsCondition#check_for_literal` ← `RuboCop::Cop::Lint::LiteralAsCondition#on_if` ← `Kernel#public_send [c function]` ← `block (2 levels) in trigger_responding_cops` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`) ← `RuboCop::Cop::Commissioner#with_cop_error_handling` ← `block in trigger_responding_cops` ← `Array#each [c function]` ← `RuboCop::Cop::Commissioner#trigger_responding_cops` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`) ← `RuboCop::Cop::Commissioner#on_if` ← `block in on_dstr` ← `Array#each [c function]` ← `RuboCop::AST::Traversal#on_dstr` ← `RuboCop::Cop::Commissioner#on_begin` ← `RuboCop::AST::Traversal#on_def` ← `RuboCop::Cop::Commissioner#on_def` ← `block in on_dstr` ← `Array#each [c function]` ← `RuboCop::AST::Traversal#on_dstr` ← `RuboCop::Cop::Commissioner#on_begin` ← `RuboCop::AST::Traversal#on_class` ← `RuboCop::Cop::Commissioner#on_class` ← `block in on_dstr` ← `Array#each [c function]` ← `RuboCop::AST::Traversal#on_dstr` ← `RuboCop::Cop::Commissioner#on_begin` ← `RuboCop::AST::Traversal#on_while` ← `RuboCop::Cop::Commissioner#on_module` ← `block in on_dstr` ← `Array#each [c function]` ← `RuboCop::AST::Traversal#on_dstr` ← `RuboCop::Cop::Commissioner#on_begin` ← `RuboCop::AST::Traversal#walk` (`../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/traversal.rb`) ← `RuboCop::Cop::Commissioner#investigate` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`) ← `RuboCop::Cop::Team#investigate_partial` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/team.rb`) ← `RuboCop::Cop::Team#investigate` ← `block in inspect_file` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `(unknown) [c function]` ← `Array#each [c function]` ← `Enumerable#flat_map [c function]` ← `RuboCop::Runner#inspect_file` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `block in do_inspection_loop` ← `block in iterate_until_no_changes` ← `Kernel#loop` ← `RuboCop::Runner#iterate_until_no_changes` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `RuboCop::Runner#do_inspection_loop` ← `block in file_offenses` ← `RuboCop::Runner#file_offense_cache` ← `RuboCop::Runner#file_offenses` ← `RuboCop::Runner#process_file` ← `block in each_inspected_file` ← `(unknown) [c function]` ← `Array#each [c function]` ← `Enumerable#reduce [c function]` ← `RuboCop::Runner#each_inspected_file` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `RuboCop::Runner#inspect_files` ← `RuboCop::Runner#run` ← `block in execute_runner` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb`) ← `RuboCop::CLI::Command::ExecuteRunner#with_redirect` ← `RuboCop::CLI::Command::ExecuteRunner#execute_runner` ← `RuboCop::CLI::Command::ExecuteRunner#run` ← `RuboCop::CLI::Command.run` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command.rb`) ← `RuboCop::CLI::Environment#run` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/environment.rb`) ← `RuboCop::CLI#run_command` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`) ← `RuboCop::CLI#execute_runners` ← `block in run` ← `RuboCop::CLI#profile_if_needed` ← `RuboCop::CLI#run` ← `block in <top (required)>` (`../bundle/gems/rubocop-1.65.1/exe/rubocop`) ← `Benchmark.realtime` (`../lib/ruby/3.4.0/benchmark.rb`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 0.7% |       1 | `RuboCop::Cop::Commissioner#with_cop_error_handling` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`) ← `block in trigger_responding_cops` ← `Array#each [c function]` ← `RuboCop::Cop::Commissioner#trigger_responding_cops` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`) ← `RuboCop::Cop::Commissioner#on_send` ← `RuboCop::AST::Traversal#on_if` ← `RuboCop::Cop::Commissioner#on_if` ← `block in on_dstr` ← `Array#each [c function]` ← `RuboCop::AST::Traversal#on_dstr` ← `RuboCop::Cop::Commissioner#on_begin` ← `RuboCop::AST::Traversal#on_def` ← `RuboCop::Cop::Commissioner#on_def` ← `block in on_dstr` ← `Array#each [c function]` ← `RuboCop::AST::Traversal#on_dstr` ← `RuboCop::Cop::Commissioner#on_begin` ← `RuboCop::AST::Traversal#on_while` ← `RuboCop::Cop::Commissioner#on_module` ← `block in on_dstr` ← `Array#each [c function]` ← `RuboCop::AST::Traversal#on_dstr` ← `RuboCop::Cop::Commissioner#on_begin` ← `RuboCop::AST::Traversal#on_while` ← `RuboCop::Cop::Commissioner#on_module` ← `block in on_dstr` ← `Array#each [c function]` ← `RuboCop::AST::Traversal#on_dstr` ← `RuboCop::Cop::Commissioner#on_begin` ← `RuboCop::AST::Traversal#walk` (`../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/traversal.rb`) ← `RuboCop::Cop::Commissioner#investigate` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`) ← `RuboCop::Cop::Team#investigate_partial` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/team.rb`) ← `RuboCop::Cop::Team#investigate` ← `block in inspect_file` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `(unknown) [c function]` ← `Array#each [c function]` ← `Enumerable#flat_map [c function]` ← `RuboCop::Runner#inspect_file` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `block in do_inspection_loop` ← `block in iterate_until_no_changes` ← `Kernel#loop` ← `RuboCop::Runner#iterate_until_no_changes` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `RuboCop::Runner#do_inspection_loop` ← `block in file_offenses` ← `RuboCop::Runner#file_offense_cache` ← `RuboCop::Runner#file_offenses` ← `RuboCop::Runner#process_file` ← `block in each_inspected_file` ← `(unknown) [c function]` ← `Array#each [c function]` ← `Enumerable#reduce [c function]` ← `RuboCop::Runner#each_inspected_file` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `RuboCop::Runner#inspect_files` ← `RuboCop::Runner#run` ← `block in execute_runner` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb`) ← `RuboCop::CLI::Command::ExecuteRunner#with_redirect` ← `RuboCop::CLI::Command::ExecuteRunner#execute_runner` ← `RuboCop::CLI::Command::ExecuteRunner#run` ← `RuboCop::CLI::Command.run` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command.rb`) ← `RuboCop::CLI::Environment#run` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/environment.rb`) ← `RuboCop::CLI#run_command` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`) ← `RuboCop::CLI#execute_runners` ← `block in run` ← `RuboCop::CLI#profile_if_needed` ← `RuboCop::CLI#run` ← `block in <top (required)>` (`../bundle/gems/rubocop-1.65.1/exe/rubocop`) ← `Benchmark.realtime` (`../lib/ruby/3.4.0/benchmark.rb`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 0.7% |       1 | `block in private_class_methods` ← `block in visit_all_descendants` (`../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb`) ← `Array#each [c function]` ← `RuboCop::AST::Descendence#visit_all_descendants` (`../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb`) ← `block in visit_all_descendants` ← `Array#each [c function]` ← `RuboCop::AST::Descendence#visit_all_descendants` (`../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb`) ← `block in visit_all_descendants` ← `Array#each [c function]` ← `RuboCop::AST::Descendence#visit_all_descendants` (`../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb`) ← `block in visit_all_descendants` ← `Array#each [c function]` ← `RuboCop::AST::Descendence#visit_all_descendants` (`../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb`) ← `block in visit_all_descendants` ← `Array#each [c function]` ← `RuboCop::AST::Descendence#visit_all_descendants` (`../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb`) ← `block in visit_all_descendants` ← `Array#each [c function]` ← `RuboCop::AST::Descendence#visit_all_descendants` (`../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb`) ← `block in visit_all_descendants` ← `Array#each [c function]` ← `RuboCop::AST::Descendence#visit_all_descendants` (`../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb`) ← `RuboCop::AST::Descendence#visit_descendants` ← `RuboCop::AST::Descendence#each_node` ← `RuboCop::Cop::Lint::IneffectiveAccessModifier#private_class_methods` ← `Enumerator#each [c function]` ← `Enumerable#to_a [c function]` ← `RuboCop::Cop::Lint::IneffectiveAccessModifier#private_class_method_names` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/lint/ineffective_access_modifier.rb`) ← `block in ineffective_modifier` ← `block in each_child_node` (`../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb`) ← `Array#each [c function]` ← `RuboCop::AST::Descendence#each_child_node` (`../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb`) ← `RuboCop::Cop::Lint::IneffectiveAccessModifier#ineffective_modifier` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/lint/ineffective_access_modifier.rb`) ← `RuboCop::Cop::Lint::IneffectiveAccessModifier#check_node` ← `RuboCop::Cop::Lint::IneffectiveAccessModifier#on_class` ← `Kernel#public_send [c function]` ← `block (2 levels) in trigger_responding_cops` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`) ← `RuboCop::Cop::Commissioner#with_cop_error_handling` ← `block in trigger_responding_cops` ← `Array#each [c function]` ← `RuboCop::Cop::Commissioner#trigger_responding_cops` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`) ← `RuboCop::Cop::Commissioner#on_class` ← `block in on_dstr` ← `Array#each [c function]` ← `RuboCop::AST::Traversal#on_dstr` ← `RuboCop::Cop::Commissioner#on_begin` ← `RuboCop::AST::Traversal#on_while` ← `RuboCop::Cop::Commissioner#on_module` ← `block in on_dstr` ← `Array#each [c function]` ← `RuboCop::AST::Traversal#on_dstr` ← `RuboCop::Cop::Commissioner#on_begin` ← `RuboCop::AST::Traversal#walk` (`../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/traversal.rb`) ← `RuboCop::Cop::Commissioner#investigate` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`) ← `RuboCop::Cop::Team#investigate_partial` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/team.rb`) ← `RuboCop::Cop::Team#investigate` ← `block in inspect_file` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `(unknown) [c function]` ← `Array#each [c function]` ← `Enumerable#flat_map [c function]` ← `RuboCop::Runner#inspect_file` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `block in do_inspection_loop` ← `block in iterate_until_no_changes` ← `Kernel#loop` ← `RuboCop::Runner#iterate_until_no_changes` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `RuboCop::Runner#do_inspection_loop` ← `block in file_offenses` ← `RuboCop::Runner#file_offense_cache` ← `RuboCop::Runner#file_offenses` ← `RuboCop::Runner#process_file` ← `block in each_inspected_file` ← `(unknown) [c function]` ← `Array#each [c function]` ← `Enumerable#reduce [c function]` ← `RuboCop::Runner#each_inspected_file` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `RuboCop::Runner#inspect_files` ← `RuboCop::Runner#run` ← `block in execute_runner` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb`) ← `RuboCop::CLI::Command::ExecuteRunner#with_redirect` ← `RuboCop::CLI::Command::ExecuteRunner#execute_runner` ← `RuboCop::CLI::Command::ExecuteRunner#run` ← `RuboCop::CLI::Command.run` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command.rb`) ← `RuboCop::CLI::Environment#run` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/environment.rb`) ← `RuboCop::CLI#run_command` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`) ← `RuboCop::CLI#execute_runners` ← `block in run` ← `RuboCop::CLI#profile_if_needed` ← `RuboCop::CLI#run` ← `block in <top (required)>` (`../bundle/gems/rubocop-1.65.1/exe/rubocop`) ← `Benchmark.realtime` (`../lib/ruby/3.4.0/benchmark.rb`) |
| 0.7% |       1 | `Regexp#match [c function]` ← `String#match [c function]` ← `RuboCop::AST::Token#space_after?` (`../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/token.rb`) ← `block in correct_extraneous_space` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/layout/space_inside_parens.rb`) ← `(unknown) [c function]` ← `Array#each [c function]` ← `Enumerable#each_cons [c function]` ← `RuboCop::Cop::Layout::SpaceInsideParens#correct_extraneous_space` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/layout/space_inside_parens.rb`) ← `RuboCop::Cop::Layout::SpaceInsideParens#on_new_investigation` ← `block (2 levels) in invoke` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`) ← `RuboCop::Cop::Commissioner#with_cop_error_handling` ← `block in invoke` ← `Array#each [c function]` ← `RuboCop::Cop::Commissioner#invoke` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`) ← `RuboCop::Cop::Commissioner#investigate` ← `RuboCop::Cop::Team#investigate_partial` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/team.rb`) ← `RuboCop::Cop::Team#investigate` ← `block in inspect_file` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `(unknown) [c function]` ← `Array#each [c function]` ← `Enumerable#flat_map [c function]` ← `RuboCop::Runner#inspect_file` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `block in do_inspection_loop` ← `block in iterate_until_no_changes` ← `Kernel#loop` ← `RuboCop::Runner#iterate_until_no_changes` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `RuboCop::Runner#do_inspection_loop` ← `block in file_offenses` ← `RuboCop::Runner#file_offense_cache` ← `RuboCop::Runner#file_offenses` ← `RuboCop::Runner#process_file` ← `block in each_inspected_file` ← `(unknown) [c function]` ← `Array#each [c function]` ← `Enumerable#reduce [c function]` ← `RuboCop::Runner#each_inspected_file` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `RuboCop::Runner#inspect_files` ← `RuboCop::Runner#run` ← `block in execute_runner` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb`) ← `RuboCop::CLI::Command::ExecuteRunner#with_redirect` ← `RuboCop::CLI::Command::ExecuteRunner#execute_runner` ← `RuboCop::CLI::Command::ExecuteRunner#run` ← `RuboCop::CLI::Command.run` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command.rb`) ← `RuboCop::CLI::Environment#run` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/environment.rb`) ← `RuboCop::CLI#run_command` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`) ← `RuboCop::CLI#execute_runners` ← `block in run` ← `RuboCop::CLI#profile_if_needed` ← `RuboCop::CLI#run` ← `block in <top (required)>` (`../bundle/gems/rubocop-1.65.1/exe/rubocop`) ← `Benchmark.realtime` (`../lib/ruby/3.4.0/benchmark.rb`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 0.7% |       1 | `Kernel#public_send [c function]` ← `block (2 levels) in trigger_responding_cops` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`) ← `RuboCop::Cop::Commissioner#with_cop_error_handling` ← `block in trigger_responding_cops` ← `Array#each [c function]` ← `RuboCop::Cop::Commissioner#trigger_responding_cops` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`) ← `RuboCop::Cop::Commissioner#on_send` ← `RuboCop::AST::Traversal#on_op_asgn` ← `RuboCop::Cop::Commissioner#on_op_asgn` ← `RuboCop::AST::Traversal#on_if` ← `RuboCop::Cop::Commissioner#on_if` ← `block in on_dstr` ← `Array#each [c function]` ← `RuboCop::AST::Traversal#on_dstr` ← `RuboCop::Cop::Commissioner#on_begin` ← `block in on_case` ← `Array#each [c function]` ← `RuboCop::AST::Traversal#on_case` ← `RuboCop::Cop::Commissioner#on_rescue` ← `block in on_case` ← `Array#each [c function]` ← `RuboCop::AST::Traversal#on_case` ← `RuboCop::Cop::Commissioner#on_ensure` ← `RuboCop::AST::Traversal#on_def` ← `RuboCop::Cop::Commissioner#on_def` ← `block in on_dstr` ← `Array#each [c function]` ← `RuboCop::AST::Traversal#on_dstr` ← `RuboCop::Cop::Commissioner#on_begin` ← `RuboCop::AST::Traversal#on_class` ← `RuboCop::Cop::Commissioner#on_class` ← `block in on_dstr` ← `Array#each [c function]` ← `RuboCop::AST::Traversal#on_dstr` ← `RuboCop::Cop::Commissioner#on_begin` ← `RuboCop::AST::Traversal#on_while` ← `RuboCop::Cop::Commissioner#on_module` ← `block in on_dstr` ← `Array#each [c function]` ← `RuboCop::AST::Traversal#on_dstr` ← `RuboCop::Cop::Commissioner#on_begin` ← `RuboCop::AST::Traversal#walk` (`../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/traversal.rb`) ← `RuboCop::Cop::Commissioner#investigate` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`) ← `RuboCop::Cop::Team#investigate_partial` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/team.rb`) ← `RuboCop::Cop::Team#investigate` ← `block in inspect_file` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `(unknown) [c function]` ← `Array#each [c function]` ← `Enumerable#flat_map [c function]` ← `RuboCop::Runner#inspect_file` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `block in do_inspection_loop` ← `block in iterate_until_no_changes` ← `Kernel#loop` ← `RuboCop::Runner#iterate_until_no_changes` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `RuboCop::Runner#do_inspection_loop` ← `block in file_offenses` ← `RuboCop::Runner#file_offense_cache` ← `RuboCop::Runner#file_offenses` ← `RuboCop::Runner#process_file` ← `block in each_inspected_file` ← `(unknown) [c function]` ← `Array#each [c function]` ← `Enumerable#reduce [c function]` ← `RuboCop::Runner#each_inspected_file` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`) ← `RuboCop::Runner#inspect_files` ← `RuboCop::Runner#run` ← `block in execute_runner` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command/execute_runner.rb`) ← `RuboCop::CLI::Command::ExecuteRunner#with_redirect` ← `RuboCop::CLI::Command::ExecuteRunner#execute_runner` ← `RuboCop::CLI::Command::ExecuteRunner#run` ← `RuboCop::CLI::Command.run` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/command.rb`) ← `RuboCop::CLI::Environment#run` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/environment.rb`) ← `RuboCop::CLI#run_command` (`../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`) ← `RuboCop::CLI#execute_runners` ← `block in run` ← `RuboCop::CLI#profile_if_needed` ← `RuboCop::CLI#run` ← `block in <top (required)>` (`../bundle/gems/rubocop-1.65.1/exe/rubocop`) ← `Benchmark.realtime` (`../lib/ruby/3.4.0/benchmark.rb`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
