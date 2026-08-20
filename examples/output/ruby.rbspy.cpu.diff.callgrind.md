# Sampling profile diff

Collected 139 samples → 136 samples (-3 samples, -2.2%).

| Category         |  Change | Delta |             % | Samples |
| ---------------- | ------: | ----: | ------------: | ------: |
| Native           |  -10.8% |    -9 | 59.7% → 54.4% | 83 → 74 |
| Third-party      |   -2.1% |    -1 |         33.8% | 47 → 46 |
| Unknown          |  +50.0% |    +3 |   4.3% → 6.6% |   6 → 9 |
| Standard library | +133.3% |    +4 |   2.2% → 5.1% |   3 → 7 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |           % | Samples | Function                                                                    | Location                                                                                          |
| ------: | ----: | ----------: | ------: | --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
|     new |    +3 | 0.0% → 2.2% |   0 → 3 | `Parser::Source::Buffer#line_index_for_position`                            | `../bundle/gems/parser-3.3.12.0/lib/parser/source/buffer.rb`                                      |
|     new |    +2 | 0.0% → 1.5% |   0 → 2 | `block in on_send`                                                          | `<unknown>`                                                                                       |
|     new |    +2 | 0.0% → 1.5% |   0 → 2 | `Enumerable#map [c function]`                                               | `<unknown>`                                                                                       |
|     new |    +2 | 0.0% → 1.5% |   0 → 2 | `RuboCop::Cop::Style::ConditionalAssignment#assignment_type?`               | `<unknown>`                                                                                       |
|     new |    +2 | 0.0% → 1.5% |   0 → 2 | `RuboCop::AST::Descendence#visit_descendants_of_types`                      | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb`                     |
|     new |    +2 | 0.0% → 1.5% |   0 → 2 | `StringScanner#skip [c function]`                                           | `<unknown>`                                                                                       |
|     new |    +2 | 0.0% → 1.5% |   0 → 2 | `Symbol#start_with? [c function]`                                           | `<unknown>`                                                                                       |
| +100.0% |    +1 | 0.7% → 1.5% |   1 → 2 | `Array#each [c function]`                                                   | `<unknown>`                                                                                       |
| +100.0% |    +1 | 0.7% → 1.5% |   1 → 2 | `block (2 levels) in traverse`                                              | `../bundle/gems/rubocop-1.65.1/lib/rubocop/yaml_duplication_checker.rb`                           |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `Enumerator#each [c function]`                                              | `<unknown>`                                                                                       |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `Enumerable#to_a [c function]`                                              | `<unknown>`                                                                                       |
|  +16.7% |    +1 | 4.3% → 5.1% |   6 → 7 | `Kernel#require [c function]`                                               | `<unknown>`                                                                                       |
| +100.0% |    +1 | 0.7% → 1.5% |   1 → 2 | `Module#append_features [c function]`                                       | `<unknown>`                                                                                       |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `Parser::Lexer#emit`                                                        | `../bundle/gems/parser-3.3.12.0/lib/parser/lexer-F1.rb`                                           |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `RuboCop::AST::Node#type_in?`                                               | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node.rb`                                       |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `RuboCop::AST::NodePattern::Compiler::SequenceSubcompiler#visit_other_type` | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern/compiler/sequence_subcompiler.rb` |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `RuboCop::AST::NodePattern::MethodDefiner#def_helper`                       | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern/method_definer.rb`                |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `Psych::Visitors::ToRuby#accept`                                            | `../lib/ruby/3.4.0/psych/visitors/to_ruby.rb`                                                     |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `RuboCop::Cop::Commissioner#on_send`                                        | `<unknown>`                                                                                       |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `Array#<=> [c function]`                                                    | `<unknown>`                                                                                       |

##### Native

|  Change | Delta |           % | Samples | Function                              | Location    |
| ------: | ----: | ----------: | ------: | ------------------------------------- | ----------- |
|     new |    +2 | 0.0% → 1.5% |   0 → 2 | `Enumerable#map [c function]`         | `<unknown>` |
|     new |    +2 | 0.0% → 1.5% |   0 → 2 | `StringScanner#skip [c function]`     | `<unknown>` |
|     new |    +2 | 0.0% → 1.5% |   0 → 2 | `Symbol#start_with? [c function]`     | `<unknown>` |
| +100.0% |    +1 | 0.7% → 1.5% |   1 → 2 | `Array#each [c function]`             | `<unknown>` |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `Enumerator#each [c function]`        | `<unknown>` |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `Enumerable#to_a [c function]`        | `<unknown>` |
|  +16.7% |    +1 | 4.3% → 5.1% |   6 → 7 | `Kernel#require [c function]`         | `<unknown>` |
| +100.0% |    +1 | 0.7% → 1.5% |   1 → 2 | `Module#append_features [c function]` | `<unknown>` |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `Array#<=> [c function]`              | `<unknown>` |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `Array#== [c function]`               | `<unknown>` |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `Array#select [c function]`           | `<unknown>` |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `File#initialize [c function]`        | `<unknown>` |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `File.realpath [c function]`          | `<unknown>` |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `Hash#fetch [c function]`             | `<unknown>` |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `Kernel#freeze [c function]`          | `<unknown>` |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `Kernel#respond_to? [c function]`     | `<unknown>` |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `Kernel#to_enum [c function]`         | `<unknown>` |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `Symbol#=== [c function]`             | `<unknown>` |

##### Third-party

|  Change | Delta |           % | Samples | Function                                                                    | Location                                                                                          |
| ------: | ----: | ----------: | ------: | --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
|     new |    +3 | 0.0% → 2.2% |   0 → 3 | `Parser::Source::Buffer#line_index_for_position`                            | `../bundle/gems/parser-3.3.12.0/lib/parser/source/buffer.rb`                                      |
|     new |    +2 | 0.0% → 1.5% |   0 → 2 | `RuboCop::AST::Descendence#visit_descendants_of_types`                      | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb`                     |
| +100.0% |    +1 | 0.7% → 1.5% |   1 → 2 | `block (2 levels) in traverse`                                              | `../bundle/gems/rubocop-1.65.1/lib/rubocop/yaml_duplication_checker.rb`                           |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `Parser::Lexer#emit`                                                        | `../bundle/gems/parser-3.3.12.0/lib/parser/lexer-F1.rb`                                           |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `RuboCop::AST::Node#type_in?`                                               | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node.rb`                                       |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `RuboCop::AST::NodePattern::Compiler::SequenceSubcompiler#visit_other_type` | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern/compiler/sequence_subcompiler.rb` |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `RuboCop::AST::NodePattern::MethodDefiner#def_helper`                       | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern/method_definer.rb`                |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `block in each_argument_node`                                               | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/multiline_element_indentation.rb`            |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `block in on_if`                                                            | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/style/redundant_self.rb`                           |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `RuboCop::AST::Node#first_line`                                             | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node.rb`                                       |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `block in find_variable`                                                    | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/variable_force/variable_table.rb`                  |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `RuboCop::Cop::MultilineExpressionIndentation#on_send`                      | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/multiline_expression_indentation.rb`         |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `RuboCop::Cop::Style::RedundantRegexpEscape#on_regexp`                      | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/style/redundant_regexp_escape.rb`                  |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `RuboCop::AST::Node#updated`                                                | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node.rb`                                       |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `Parser::Builders::Default#prefix_string_map`                               | `../bundle/gems/parser-3.3.12.0/lib/parser/builders/default.rb`                                   |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `Parser::Lexer#emit_instance_var`                                           | `../bundle/gems/parser-3.3.12.0/lib/parser/lexer-F1.rb`                                           |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `Parser::Lexer::StackState#pop`                                             | `../bundle/gems/parser-3.3.12.0/lib/parser/lexer/stack_state.rb`                                  |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `Parser::Source::Buffer#column_for_position`                                | `../bundle/gems/parser-3.3.12.0/lib/parser/source/buffer.rb`                                      |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `RuboCop::Cop::Base.cop_name`                                               | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/base.rb`                                           |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `RuboCop::Cop::Base.department`                                             | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/base.rb`                                           |

##### Unknown

| Change | Delta |           % | Samples | Function                                                      | Location    |
| -----: | ----: | ----------: | ------: | ------------------------------------------------------------- | ----------- |
|    new |    +2 | 0.0% → 1.5% |   0 → 2 | `block in on_send`                                            | `<unknown>` |
|    new |    +2 | 0.0% → 1.5% |   0 → 2 | `RuboCop::Cop::Style::ConditionalAssignment#assignment_type?` | `<unknown>` |
|    new |    +1 | 0.0% → 0.7% |   0 → 1 | `RuboCop::Cop::Commissioner#on_send`                          | `<unknown>` |
|    new |    +1 | 0.0% → 0.7% |   0 → 1 | `RuboCop::Cop::Style::NumericPredicate#comparison`            | `<unknown>` |
|    new |    +1 | 0.0% → 0.7% |   0 → 1 | `RuboCop::AST::Node#proc?`                                    | `<unknown>` |

##### Standard library

| Change | Delta |           % | Samples | Function                                | Location                                      |
| -----: | ----: | ----------: | ------: | --------------------------------------- | --------------------------------------------- |
|    new |    +1 | 0.0% → 0.7% |   0 → 1 | `Psych::Visitors::ToRuby#accept`        | `../lib/ruby/3.4.0/psych/visitors/to_ruby.rb` |
|    new |    +1 | 0.0% → 0.7% |   0 → 1 | `block in merge`                        | `../lib/ruby/3.4.0/set.rb`                    |
|    new |    +1 | 0.0% → 0.7% |   0 → 1 | `block in parse_in_order`               | `../lib/ruby/3.4.0/optparse.rb`               |
|    new |    +1 | 0.0% → 0.7% |   0 → 1 | `ERB::Compiler::Buffer#close`           | `../lib/ruby/3.4.0/erb/compiler.rb`           |
|    new |    +1 | 0.0% → 0.7% |   0 → 1 | `Psych::Nodes::Node#initialize`         | `../lib/ruby/3.4.0/psych/nodes/node.rb`       |
|    new |    +1 | 0.0% → 0.7% |   0 → 1 | `Psych::TreeBuilder#set_start_location` | `../lib/ruby/3.4.0/psych/tree_builder.rb`     |
|    new |    +1 | 0.0% → 0.7% |   0 → 1 | `Psych::Visitors::ToRuby#resolve_class` | `../lib/ruby/3.4.0/psych/visitors/to_ruby.rb` |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % | Samples | Function                                     | Location                                                                      |
| ------: | ----: | ------------: | ------: | -------------------------------------------- | ----------------------------------------------------------------------------- |
|  -25.8% |    -8 | 22.3% → 16.9% | 31 → 23 | `Kernel#require_relative [c function]`       | `<unknown>`                                                                   |
| removed |    -3 |   2.2% → 0.0% |   3 → 0 | `block in visit_descendants_of_types`        | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb` |
| removed |    -3 |   2.2% → 0.0% |   3 → 0 | `Class#new [c function]`                     | `<unknown>`                                                                   |
| removed |    -2 |   1.4% → 0.0% |   2 → 0 | `block in visit_all_descendants`             | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb` |
| removed |    -2 |   1.4% → 0.0% |   2 → 0 | `Parser::Source::Range#initialize`           | `../bundle/gems/parser-3.3.12.0/lib/parser/source/range.rb`                   |
| removed |    -2 |   1.4% → 0.0% |   2 → 0 | `RuboCop::AST::Node#initialize`              | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node.rb`                   |
| removed |    -2 |   1.4% → 0.0% |   2 → 0 | `Racc::Parser#_racc_do_parse_c [c function]` | `<unknown>`                                                                   |
| removed |    -2 |   1.4% → 0.0% |   2 → 0 | `RuboCop::Cop::RangeHelp#final_pos`          | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/range_help.rb`           |
| removed |    -1 |   0.7% → 0.0% |   1 → 0 | `block in run_hook`                          | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/force.rb`                      |
| removed |    -1 |   0.7% → 0.0% |   1 → 0 | `block in forces_for`                        | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/team.rb`                       |
|  -50.0% |    -1 |   1.4% → 0.7% |   2 → 1 | `Array#include? [c function]`                | `<unknown>`                                                                   |
|  -25.0% |    -1 |   2.9% → 2.2% |   4 → 3 | `Array#index [c function]`                   | `<unknown>`                                                                   |
| removed |    -1 |   0.7% → 0.0% |   1 → 0 | `Parser::Source::Map::Variable#initialize`   | `../bundle/gems/parser-3.3.12.0/lib/parser/source/map/variable.rb`            |
| removed |    -1 |   0.7% → 0.0% |   1 → 0 | `Psych::Nodes::Scalar#initialize`            | `../lib/ruby/3.4.0/psych/nodes/scalar.rb`                                     |
| removed |    -1 |   0.7% → 0.0% |   1 → 0 | `Enumerable#each_slice [c function]`         | `<unknown>`                                                                   |
| removed |    -1 |   0.7% → 0.0% |   1 → 0 | `Enumerable#sort_by [c function]`            | `<unknown>`                                                                   |
| removed |    -1 |   0.7% → 0.0% |   1 → 0 | `Hash#freeze [c function]`                   | `<unknown>`                                                                   |
| removed |    -1 |   0.7% → 0.0% |   1 → 0 | `Kernel#binding [c function]`                | `<unknown>`                                                                   |
|  -33.3% |    -1 |   2.2% → 1.5% |   3 → 2 | `Kernel#public_send [c function]`            | `<unknown>`                                                                   |
| removed |    -1 |   0.7% → 0.0% |   1 → 0 | `RuboCop::Cop::Layout::ElseAlignment#on_if`  | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/layout/else_alignment.rb`      |

##### Native

|  Change | Delta |             % | Samples | Function                                      | Location    |
| ------: | ----: | ------------: | ------: | --------------------------------------------- | ----------- |
|  -25.8% |    -8 | 22.3% → 16.9% | 31 → 23 | `Kernel#require_relative [c function]`        | `<unknown>` |
| removed |    -3 |   2.2% → 0.0% |   3 → 0 | `Class#new [c function]`                      | `<unknown>` |
| removed |    -2 |   1.4% → 0.0% |   2 → 0 | `Racc::Parser#_racc_do_parse_c [c function]`  | `<unknown>` |
|  -50.0% |    -1 |   1.4% → 0.7% |   2 → 1 | `Array#include? [c function]`                 | `<unknown>` |
|  -25.0% |    -1 |   2.9% → 2.2% |   4 → 3 | `Array#index [c function]`                    | `<unknown>` |
| removed |    -1 |   0.7% → 0.0% |   1 → 0 | `Enumerable#each_slice [c function]`          | `<unknown>` |
| removed |    -1 |   0.7% → 0.0% |   1 → 0 | `Enumerable#sort_by [c function]`             | `<unknown>` |
| removed |    -1 |   0.7% → 0.0% |   1 → 0 | `Hash#freeze [c function]`                    | `<unknown>` |
| removed |    -1 |   0.7% → 0.0% |   1 → 0 | `Kernel#binding [c function]`                 | `<unknown>` |
|  -33.3% |    -1 |   2.2% → 1.5% |   3 → 2 | `Kernel#public_send [c function]`             | `<unknown>` |
| removed |    -1 |   0.7% → 0.0% |   1 → 0 | `Module#attr_accessor [c function]`           | `<unknown>` |
|  -20.0% |    -1 |   3.6% → 2.9% |   5 → 4 | `Module#class_eval [c function]`              | `<unknown>` |
| removed |    -1 |   0.7% → 0.0% |   1 → 0 | `Module#public_instance_methods [c function]` | `<unknown>` |
| removed |    -1 |   0.7% → 0.0% |   1 → 0 | `Regexp#match [c function]`                   | `<unknown>` |
| removed |    -1 |   0.7% → 0.0% |   1 → 0 | `String#% [c function]`                       | `<unknown>` |
|  -16.7% |    -1 |   4.3% → 3.7% |   6 → 5 | `String#[] [c function]`                      | `<unknown>` |
|  -33.3% |    -1 |   2.2% → 1.5% |   3 → 2 | `String#index [c function]`                   | `<unknown>` |
| removed |    -1 |   0.7% → 0.0% |   1 → 0 | `String#match? [c function]`                  | `<unknown>` |
| removed |    -1 |   0.7% → 0.0% |   1 → 0 | `String#tr [c function]`                      | `<unknown>` |
| removed |    -1 |   0.7% → 0.0% |   1 → 0 | `StringScanner#scan [c function]`             | `<unknown>` |

##### Third-party

|  Change | Delta |           % | Samples | Function                                                     | Location                                                                                  |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------ | ----------------------------------------------------------------------------------------- |
| removed |    -3 | 2.2% → 0.0% |   3 → 0 | `block in visit_descendants_of_types`                        | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb`             |
| removed |    -2 | 1.4% → 0.0% |   2 → 0 | `block in visit_all_descendants`                             | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb`             |
| removed |    -2 | 1.4% → 0.0% |   2 → 0 | `Parser::Source::Range#initialize`                           | `../bundle/gems/parser-3.3.12.0/lib/parser/source/range.rb`                               |
| removed |    -2 | 1.4% → 0.0% |   2 → 0 | `RuboCop::AST::Node#initialize`                              | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node.rb`                               |
| removed |    -2 | 1.4% → 0.0% |   2 → 0 | `RuboCop::Cop::RangeHelp#final_pos`                          | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/range_help.rb`                       |
| removed |    -1 | 0.7% → 0.0% |   1 → 0 | `block in run_hook`                                          | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/force.rb`                                  |
| removed |    -1 | 0.7% → 0.0% |   1 → 0 | `block in forces_for`                                        | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/team.rb`                                   |
| removed |    -1 | 0.7% → 0.0% |   1 → 0 | `Parser::Source::Map::Variable#initialize`                   | `../bundle/gems/parser-3.3.12.0/lib/parser/source/map/variable.rb`                        |
| removed |    -1 | 0.7% → 0.0% |   1 → 0 | `RuboCop::Cop::Layout::ElseAlignment#on_if`                  | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/layout/else_alignment.rb`                  |
| removed |    -1 | 0.7% → 0.0% |   1 → 0 | `block in <module:DClonable>`                                | `../lib/ruby/gems/3.4.0/gems/rexml-3.4.4/lib/rexml/xpath_parser.rb`                       |
| removed |    -1 | 0.7% → 0.0% |   1 → 0 | `Parser::AST::Node#assign_properties`                        | `../bundle/gems/parser-3.3.12.0/lib/parser/ast/node.rb`                                   |
| removed |    -1 | 0.7% → 0.0% |   1 → 0 | `Parser::Source::Map#node=`                                  | `../bundle/gems/parser-3.3.12.0/lib/parser/source/map.rb`                                 |
| removed |    -1 | 0.7% → 0.0% |   1 → 0 | `Parser::Lexer::Literal#extend_string`                       | `../bundle/gems/parser-3.3.12.0/lib/parser/lexer/literal.rb`                              |
| removed |    -1 | 0.7% → 0.0% |   1 → 0 | `Parser::Source::Buffer#line_for_position`                   | `../bundle/gems/parser-3.3.12.0/lib/parser/source/buffer.rb`                              |
| removed |    -1 | 0.7% → 0.0% |   1 → 0 | `block in each_single_element_character_class`               | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/style/redundant_regexp_character_class.rb` |
| removed |    -1 | 0.7% → 0.0% |   1 → 0 | `RuboCop::Cop::AutocorrectLogic#autocorrect?`                | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/autocorrect_logic.rb`                      |
| removed |    -1 | 0.7% → 0.0% |   1 → 0 | `RuboCop::Cop::Base#cop_name`                                | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/base.rb`                                   |
| removed |    -1 | 0.7% → 0.0% |   1 → 0 | `RuboCop::Cop::Commissioner#with_cop_error_handling`         | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`                           |
| removed |    -1 | 0.7% → 0.0% |   1 → 0 | `RuboCop::Cop::Layout::ArgumentAlignment#fixed_indentation?` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/layout/argument_alignment.rb`              |
| removed |    -1 | 0.7% → 0.0% |   1 → 0 | `RuboCop::Cop::Layout::ClosingParenthesisIndentation#check`  | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/layout/closing_parenthesis_indentation.rb` |

##### Unknown

|  Change | Delta |           % | Samples | Function                                                                 | Location    |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------------------ | ----------- |
| removed |    -1 | 0.7% → 0.0% |   1 → 0 | `RuboCop::AST::SendNode#attribute_accessor?`                             | `<unknown>` |
| removed |    -1 | 0.7% → 0.0% |   1 → 0 | `RuboCop::Cop::Naming::BinaryOperatorParameterName#op_method_candidate?` | `<unknown>` |
| removed |    -1 | 0.7% → 0.0% |   1 → 0 | `RuboCop::AST::Node#match_guard_clause?`                                 | `<unknown>` |
| removed |    -1 | 0.7% → 0.0% |   1 → 0 | `RuboCop::AST::Node#lvasgn_type?`                                        | `<unknown>` |

##### Standard library

|  Change | Delta |           % | Samples | Function                           | Location                                      |
| ------: | ----: | ----------: | ------: | ---------------------------------- | --------------------------------------------- |
| removed |    -1 | 0.7% → 0.0% |   1 → 0 | `Psych::Nodes::Scalar#initialize`  | `../lib/ruby/3.4.0/psych/nodes/scalar.rb`     |
| removed |    -1 | 0.7% → 0.0% |   1 → 0 | `Psych::TreeBuilder#pop`           | `../lib/ruby/3.4.0/psych/tree_builder.rb`     |
| removed |    -1 | 0.7% → 0.0% |   1 → 0 | `Psych::Visitors::ToRuby#register` | `../lib/ruby/3.4.0/psych/visitors/to_ruby.rb` |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|  Change | Delta |             % | Samples | Function                                         | Location                                                                      |
| ------: | ----: | ------------: | ------: | ------------------------------------------------ | ----------------------------------------------------------------------------- |
| +750.0% |   +15 |  1.4% → 12.5% |  2 → 17 | `Racc::Parser#_racc_do_parse_c [c function]`     | `<unknown>`                                                                   |
|     new |   +11 |   0.0% → 8.1% |  0 → 11 | `Parser::Base#next_token`                        | `../bundle/gems/parser-3.3.12.0/lib/parser/base.rb`                           |
|  +60.0% |    +9 | 10.8% → 17.6% | 15 → 24 | `Array#each [c function]`                        | `<unknown>`                                                                   |
|     new |    +5 |   0.0% → 3.7% |   0 → 5 | `Array#select [c function]`                      | `<unknown>`                                                                   |
|     new |    +4 |   0.0% → 2.9% |   0 → 4 | `RuboCop::Cop::Util#same_line?`                  | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/util.rb`                       |
|     new |    +4 |   0.0% → 2.9% |   0 → 4 | `RuboCop::Cop::Util#line`                        | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/util.rb`                       |
|     new |    +3 |   0.0% → 2.2% |   0 → 3 | `block in first_line_comment`                    | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/statement_modifier.rb`   |
|     new |    +3 |   0.0% → 2.2% |   0 → 3 | `RuboCop::AST::NodePattern::Parser#next_token`   | `<unknown>`                                                                   |
|     new |    +3 |   0.0% → 2.2% |   0 → 3 | `RuboCop::AST::NodePattern::LexerRex#next_token` | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern/lexer.rex.rb` |
| +200.0% |    +2 |   0.7% → 2.2% |   1 → 3 | `block in build_callbacks`                       | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`               |
|     new |    +2 |   0.0% → 1.5% |   0 → 2 | `block in on_send`                               | `<unknown>`                                                                   |
| +200.0% |    +2 |   0.7% → 2.2% |   1 → 3 | `Enumerator#each [c function]`                   | `<unknown>`                                                                   |
|     new |    +2 |   0.0% → 1.5% |   0 → 2 | `Enumerable#map [c function]`                    | `<unknown>`                                                                   |
| +200.0% |    +2 |   0.7% → 2.2% |   1 → 3 | `Thread::Mutex#synchronize [c function]`         | `<unknown>`                                                                   |
| +200.0% |    +2 |   0.7% → 2.2% |   1 → 3 | `block in activate_bin_path`                     | `../lib/ruby/3.4.0/rubygems.rb`                                               |
| +200.0% |    +2 |   0.7% → 2.2% |   1 → 3 | `Gem.activate_bin_path`                          | `../lib/ruby/3.4.0/rubygems.rb`                                               |
|  +25.0% |    +2 |   5.8% → 7.4% |  8 → 10 | `Parser::Lexer#advance`                          | `../bundle/gems/parser-3.3.12.0/lib/parser/lexer-F1.rb`                       |
|     new |    +2 |   0.0% → 1.5% |   0 → 2 | `Parser::Lexer#emit`                             | `../bundle/gems/parser-3.3.12.0/lib/parser/lexer-F1.rb`                       |
|  +66.7% |    +2 |   2.2% → 3.7% |   3 → 5 | `Parser::Source::Buffer#line_index_for_position` | `../bundle/gems/parser-3.3.12.0/lib/parser/source/buffer.rb`                  |
| +200.0% |    +2 |   0.7% → 2.2% |   1 → 3 | `RuboCop::Cop::Base#callbacks_needed`            | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/base.rb`                       |

##### Native

|  Change | Delta |             % | Samples | Function                                     | Location    |
| ------: | ----: | ------------: | ------: | -------------------------------------------- | ----------- |
| +750.0% |   +15 |  1.4% → 12.5% |  2 → 17 | `Racc::Parser#_racc_do_parse_c [c function]` | `<unknown>` |
|  +60.0% |    +9 | 10.8% → 17.6% | 15 → 24 | `Array#each [c function]`                    | `<unknown>` |
|     new |    +5 |   0.0% → 3.7% |   0 → 5 | `Array#select [c function]`                  | `<unknown>` |
| +200.0% |    +2 |   0.7% → 2.2% |   1 → 3 | `Enumerator#each [c function]`               | `<unknown>` |
|     new |    +2 |   0.0% → 1.5% |   0 → 2 | `Enumerable#map [c function]`                | `<unknown>` |
| +200.0% |    +2 |   0.7% → 2.2% |   1 → 3 | `Thread::Mutex#synchronize [c function]`     | `<unknown>` |
|     new |    +2 |   0.0% → 1.5% |   0 → 2 | `StringScanner#skip [c function]`            | `<unknown>` |
|     new |    +2 |   0.0% → 1.5% |   0 → 2 | `Symbol#start_with? [c function]`            | `<unknown>` |
|     new |    +1 |   0.0% → 0.7% |   0 → 1 | `Enumerable#to_a [c function]`               | `<unknown>` |
|  +16.7% |    +1 |   4.3% → 5.1% |   6 → 7 | `Kernel#require [c function]`                | `<unknown>` |
| +100.0% |    +1 |   0.7% → 1.5% |   1 → 2 | `Module#include [c function]`                | `<unknown>` |
| +100.0% |    +1 |   0.7% → 1.5% |   1 → 2 | `Module#append_features [c function]`        | `<unknown>` |
|     new |    +1 |   0.0% → 0.7% |   0 → 1 | `Array#<=> [c function]`                     | `<unknown>` |
|     new |    +1 |   0.0% → 0.7% |   0 → 1 | `Array#== [c function]`                      | `<unknown>` |
|     new |    +1 |   0.0% → 0.7% |   0 → 1 | `Array#reverse_each [c function]`            | `<unknown>` |
|     new |    +1 |   0.0% → 0.7% |   0 → 1 | `File#initialize [c function]`               | `<unknown>` |
|     new |    +1 |   0.0% → 0.7% |   0 → 1 | `File.realpath [c function]`                 | `<unknown>` |
|     new |    +1 |   0.0% → 0.7% |   0 → 1 | `Hash#each_value [c function]`               | `<unknown>` |
|     new |    +1 |   0.0% → 0.7% |   0 → 1 | `Hash#fetch [c function]`                    | `<unknown>` |
|     new |    +1 |   0.0% → 0.7% |   0 → 1 | `IO.open [c function]`                       | `<unknown>` |

##### Third-party

|  Change | Delta |           % | Samples | Function                                               | Location                                                                                  |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------ | ----------------------------------------------------------------------------------------- |
|     new |   +11 | 0.0% → 8.1% |  0 → 11 | `Parser::Base#next_token`                              | `../bundle/gems/parser-3.3.12.0/lib/parser/base.rb`                                       |
|     new |    +4 | 0.0% → 2.9% |   0 → 4 | `RuboCop::Cop::Util#same_line?`                        | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/util.rb`                                   |
|     new |    +4 | 0.0% → 2.9% |   0 → 4 | `RuboCop::Cop::Util#line`                              | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/util.rb`                                   |
|     new |    +3 | 0.0% → 2.2% |   0 → 3 | `block in first_line_comment`                          | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/statement_modifier.rb`               |
|     new |    +3 | 0.0% → 2.2% |   0 → 3 | `RuboCop::AST::NodePattern::LexerRex#next_token`       | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern/lexer.rex.rb`             |
| +200.0% |    +2 | 0.7% → 2.2% |   1 → 3 | `block in build_callbacks`                             | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`                           |
|  +25.0% |    +2 | 5.8% → 7.4% |  8 → 10 | `Parser::Lexer#advance`                                | `../bundle/gems/parser-3.3.12.0/lib/parser/lexer-F1.rb`                                   |
|     new |    +2 | 0.0% → 1.5% |   0 → 2 | `Parser::Lexer#emit`                                   | `../bundle/gems/parser-3.3.12.0/lib/parser/lexer-F1.rb`                                   |
|  +66.7% |    +2 | 2.2% → 3.7% |   3 → 5 | `Parser::Source::Buffer#line_index_for_position`       | `../bundle/gems/parser-3.3.12.0/lib/parser/source/buffer.rb`                              |
| +200.0% |    +2 | 0.7% → 2.2% |   1 → 3 | `RuboCop::Cop::Base#callbacks_needed`                  | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/base.rb`                                   |
|     new |    +2 | 0.0% → 1.5% |   0 → 2 | `RuboCop::AST::Descendence#visit_descendants_of_types` | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb`             |
|     new |    +2 | 0.0% → 1.5% |   0 → 2 | `block in clear_enrollment_queue`                      | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/registry.rb`                               |
|     new |    +2 | 0.0% → 1.5% |   0 → 2 | `block in callbacks_needed`                            | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/base.rb`                                   |
|     new |    +2 | 0.0% → 1.5% |   0 → 2 | `RuboCop::Cop::MultilineExpressionIndentation#on_send` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/multiline_expression_indentation.rb` |
|     new |    +2 | 0.0% → 1.5% |   0 → 2 | `Parser::LexerStrings#extend_string_slice_end`         | `../bundle/gems/parser-3.3.12.0/lib/parser/lexer-strings.rb`                              |
| +100.0% |    +1 | 0.7% → 1.5% |   1 → 2 | `block (2 levels) in traverse`                         | `../bundle/gems/rubocop-1.65.1/lib/rubocop/yaml_duplication_checker.rb`                   |
| +100.0% |    +1 | 0.7% → 1.5% |   1 → 2 | `RuboCop::AST::Node#each_ancestor`                     | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node.rb`                               |
| +100.0% |    +1 | 0.7% → 1.5% |   1 → 2 | `RuboCop::Cop::Style::ConditionalAssignment#on_send`   | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/style/conditional_assignment.rb`           |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `Parser::Ruby27#_reduce_580`                           | `../bundle/gems/parser-3.3.12.0/lib/parser/ruby27.rb`                                     |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `Parser::Builders::Default#symbol`                     | `../bundle/gems/parser-3.3.12.0/lib/parser/builders/default.rb`                           |

##### Unknown

|  Change | Delta |           % | Samples | Function                                                      | Location    |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------- | ----------- |
|     new |    +3 | 0.0% → 2.2% |   0 → 3 | `RuboCop::AST::NodePattern::Parser#next_token`                | `<unknown>` |
|     new |    +2 | 0.0% → 1.5% |   0 → 2 | `block in on_send`                                            | `<unknown>` |
| +100.0% |    +1 | 0.7% → 1.5% |   1 → 2 | `RuboCop::Cop::Style::ConditionalAssignment#assignment_type?` | `<unknown>` |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `RuboCop::Cop::Commissioner#on_send`                          | `<unknown>` |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `Psych::TreeBuilder#start_mapping`                            | `<unknown>` |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `Psych::TreeBuilder#start_sequence`                           | `<unknown>` |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `RuboCop::AST::Node#lambda_or_proc?`                          | `<unknown>` |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `RuboCop::Cop::Style::NumericPredicate#comparison`            | `<unknown>` |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `RuboCop::AST::NodePattern::Parser#emit_list`                 | `<unknown>` |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `RuboCop::AST::Node#proc?`                                    | `<unknown>` |

##### Standard library

|  Change | Delta |           % | Samples | Function                                             | Location                                             |
| ------: | ----: | ----------: | ------: | ---------------------------------------------------- | ---------------------------------------------------- |
| +200.0% |    +2 | 0.7% → 2.2% |   1 → 3 | `block in activate_bin_path`                         | `../lib/ruby/3.4.0/rubygems.rb`                      |
| +200.0% |    +2 | 0.7% → 2.2% |   1 → 3 | `Gem.activate_bin_path`                              | `../lib/ruby/3.4.0/rubygems.rb`                      |
|     new |    +2 | 0.0% → 1.5% |   0 → 2 | `Gem.finish_resolve`                                 | `../lib/ruby/3.4.0/rubygems.rb`                      |
|     new |    +2 | 0.0% → 1.5% |   0 → 2 | `Gem::RequestSet#resolve_current`                    | `../lib/ruby/3.4.0/rubygems/request_set.rb`          |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `Psych::Visitors::ToRuby#accept`                     | `../lib/ruby/3.4.0/psych/visitors/to_ruby.rb`        |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `Psych::Visitors::ToRuby#visit_Psych_Nodes_Sequence` | `../lib/ruby/3.4.0/psych/visitors/to_ruby.rb`        |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `block in map_stubs`                                 | `../lib/ruby/3.4.0/rubygems/specification_record.rb` |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `block in merge`                                     | `../lib/ruby/3.4.0/set.rb`                           |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `Gem::StubSpecification#valid?`                      | `../lib/ruby/3.4.0/rubygems/stub_specification.rb`   |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `Psych::Nodes::Mapping#initialize`                   | `../lib/ruby/3.4.0/psych/nodes/mapping.rb`           |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `block in parse_in_order`                            | `../lib/ruby/3.4.0/optparse.rb`                      |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `OptionParser#parse!`                                | `../lib/ruby/3.4.0/optparse.rb`                      |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `ERB::Compiler::Buffer#close`                        | `../lib/ruby/3.4.0/erb/compiler.rb`                  |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `OptionParser#order!`                                | `../lib/ruby/3.4.0/optparse.rb`                      |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `OptionParser#permute!`                              | `../lib/ruby/3.4.0/optparse.rb`                      |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `Psych::Nodes::Node#initialize`                      | `../lib/ruby/3.4.0/psych/nodes/node.rb`              |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `Psych::TreeBuilder#set_start_location`              | `../lib/ruby/3.4.0/psych/tree_builder.rb`            |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `Psych::Visitors::ToRuby#resolve_class`              | `../lib/ruby/3.4.0/psych/visitors/to_ruby.rb`        |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `Gem.open_file`                                      | `../lib/ruby/3.4.0/rubygems.rb`                      |
|     new |    +1 | 0.0% → 0.7% |   0 → 1 | `Gem::RequestSet#resolve`                            | `../lib/ruby/3.4.0/rubygems/request_set.rb`          |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

|  Change | Delta |             % |   Samples | Function                                                    | Location                                                                           |
| ------: | ----: | ------------: | --------: | ----------------------------------------------------------- | ---------------------------------------------------------------------------------- |
|  -27.8% |   -10 | 25.9% → 19.1% |   36 → 26 | `Kernel#require_relative [c function]`                      | `<unknown>`                                                                        |
|  -64.3% |    -9 |  10.1% → 3.7% |    14 → 5 | `Class#new [c function]`                                    | `<unknown>`                                                                        |
|  -25.9% |    -7 | 19.4% → 14.7% |   27 → 20 | `Kernel#public_send [c function]`                           | `<unknown>`                                                                        |
|   -3.6% |    -5 | 98.6% → 97.1% | 137 → 132 | `Kernel#load [c function]`                                  | `<unknown>`                                                                        |
|  -75.0% |    -3 |   2.9% → 0.7% |     4 → 1 | `block in visit_descendants_of_types`                       | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb`      |
|  -50.0% |    -3 |   4.3% → 2.2% |     6 → 3 | `RuboCop::AST::Node#initialize`                             | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node.rb`                        |
| removed |    -3 |   2.2% → 0.0% |     3 → 0 | `RuboCop::Cop::Layout::SpaceBeforeFirstArg#on_send`         | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/layout/space_before_first_arg.rb`   |
| removed |    -3 |   2.2% → 0.0% |     3 → 0 | `RuboCop::AST::NodePattern::Macros#def_node_matcher`        | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern.rb`                |
|   -2.2% |    -3 |         99.3% | 138 → 135 | `<main>`                                                    | `rubocop`                                                                          |
|  -50.0% |    -3 |   4.3% → 2.2% |     6 → 3 | `Parser::Source::Range#source`                              | `../bundle/gems/parser-3.3.12.0/lib/parser/source/range.rb`                        |
|   -3.4% |    -3 | 63.3% → 62.5% |   88 → 85 | `RuboCop::CLI#profile_if_needed`                            | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`                                 |
|   -3.4% |    -3 | 63.3% → 62.5% |   88 → 85 | `block in run`                                              | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`                                 |
|  -75.0% |    -3 |   2.9% → 0.7% |     4 → 1 | `RuboCop::AST::IfNode#keyword`                              | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/if_node.rb`                |
| removed |    -3 |   2.2% → 0.0% |     3 → 0 | `RuboCop::AST::IfNode#unless?`                              | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/if_node.rb`                |
| removed |    -3 |   2.2% → 0.0% |     3 → 0 | `RuboCop::AST::NodePattern::MethodDefiner#def_node_matcher` | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern/method_definer.rb` |
|  -66.7% |    -2 |   2.2% → 0.7% |     3 → 1 | `block in visit_all_descendants`                            | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb`      |
| removed |    -2 |   1.4% → 0.0% |     2 → 0 | `Parser::Source::Range#initialize`                          | `../bundle/gems/parser-3.3.12.0/lib/parser/source/range.rb`                        |
|   -2.5% |    -2 | 58.3% → 58.1% |   81 → 79 | `Enumerable#reduce [c function]`                            | `<unknown>`                                                                        |
|   -2.3% |    -2 | 63.3% → 63.2% |   88 → 86 | `Benchmark.realtime`                                        | `../lib/ruby/3.4.0/benchmark.rb`                                                   |
| removed |    -2 |   1.4% → 0.0% |     2 → 0 | `RuboCop::Cop::Layout::ElseAlignment#on_if`                 | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/layout/else_alignment.rb`           |

##### Native

|  Change | Delta |             % |   Samples | Function                                      | Location    |
| ------: | ----: | ------------: | --------: | --------------------------------------------- | ----------- |
|  -27.8% |   -10 | 25.9% → 19.1% |   36 → 26 | `Kernel#require_relative [c function]`        | `<unknown>` |
|  -64.3% |    -9 |  10.1% → 3.7% |    14 → 5 | `Class#new [c function]`                      | `<unknown>` |
|  -25.9% |    -7 | 19.4% → 14.7% |   27 → 20 | `Kernel#public_send [c function]`             | `<unknown>` |
|   -3.6% |    -5 | 98.6% → 97.1% | 137 → 132 | `Kernel#load [c function]`                    | `<unknown>` |
|   -2.5% |    -2 | 58.3% → 58.1% |   81 → 79 | `Enumerable#reduce [c function]`              | `<unknown>` |
| removed |    -1 |   0.7% → 0.0% |     1 → 0 | `Array#bsearch_index [c function]`            | `<unknown>` |
|  -50.0% |    -1 |   1.4% → 0.7% |     2 → 1 | `Array#include? [c function]`                 | `<unknown>` |
|  -25.0% |    -1 |   2.9% → 2.2% |     4 → 3 | `Array#index [c function]`                    | `<unknown>` |
| removed |    -1 |   0.7% → 0.0% |     1 → 0 | `Dir.chdir [c function]`                      | `<unknown>` |
| removed |    -1 |   0.7% → 0.0% |     1 → 0 | `Enumerable#each_slice [c function]`          | `<unknown>` |
| removed |    -1 |   0.7% → 0.0% |     1 → 0 | `Hash#each_key [c function]`                  | `<unknown>` |
| removed |    -1 |   0.7% → 0.0% |     1 → 0 | `Hash#freeze [c function]`                    | `<unknown>` |
| removed |    -1 |   0.7% → 0.0% |     1 → 0 | `Kernel#binding [c function]`                 | `<unknown>` |
| removed |    -1 |   0.7% → 0.0% |     1 → 0 | `Module#refine [c function]`                  | `<unknown>` |
| removed |    -1 |   0.7% → 0.0% |     1 → 0 | `Module#attr_accessor [c function]`           | `<unknown>` |
|  -20.0% |    -1 |   3.6% → 2.9% |     5 → 4 | `Module#class_eval [c function]`              | `<unknown>` |
| removed |    -1 |   0.7% → 0.0% |     1 → 0 | `Module#public_instance_methods [c function]` | `<unknown>` |
| removed |    -1 |   0.7% → 0.0% |     1 → 0 | `Regexp#match [c function]`                   | `<unknown>` |
| removed |    -1 |   0.7% → 0.0% |     1 → 0 | `String#% [c function]`                       | `<unknown>` |
|  -16.7% |    -1 |   4.3% → 3.7% |     6 → 5 | `String#[] [c function]`                      | `<unknown>` |

##### Third-party

|  Change | Delta |             % | Samples | Function                                                    | Location                                                                           |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------- | ---------------------------------------------------------------------------------- |
|  -75.0% |    -3 |   2.9% → 0.7% |   4 → 1 | `block in visit_descendants_of_types`                       | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb`      |
|  -50.0% |    -3 |   4.3% → 2.2% |   6 → 3 | `RuboCop::AST::Node#initialize`                             | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node.rb`                        |
| removed |    -3 |   2.2% → 0.0% |   3 → 0 | `RuboCop::Cop::Layout::SpaceBeforeFirstArg#on_send`         | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/layout/space_before_first_arg.rb`   |
| removed |    -3 |   2.2% → 0.0% |   3 → 0 | `RuboCop::AST::NodePattern::Macros#def_node_matcher`        | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern.rb`                |
|  -50.0% |    -3 |   4.3% → 2.2% |   6 → 3 | `Parser::Source::Range#source`                              | `../bundle/gems/parser-3.3.12.0/lib/parser/source/range.rb`                        |
|   -3.4% |    -3 | 63.3% → 62.5% | 88 → 85 | `RuboCop::CLI#profile_if_needed`                            | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`                                 |
|   -3.4% |    -3 | 63.3% → 62.5% | 88 → 85 | `block in run`                                              | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`                                 |
|  -75.0% |    -3 |   2.9% → 0.7% |   4 → 1 | `RuboCop::AST::IfNode#keyword`                              | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/if_node.rb`                |
| removed |    -3 |   2.2% → 0.0% |   3 → 0 | `RuboCop::AST::IfNode#unless?`                              | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/if_node.rb`                |
| removed |    -3 |   2.2% → 0.0% |   3 → 0 | `RuboCop::AST::NodePattern::MethodDefiner#def_node_matcher` | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern/method_definer.rb` |
|  -66.7% |    -2 |   2.2% → 0.7% |   3 → 1 | `block in visit_all_descendants`                            | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb`      |
| removed |    -2 |   1.4% → 0.0% |   2 → 0 | `Parser::Source::Range#initialize`                          | `../bundle/gems/parser-3.3.12.0/lib/parser/source/range.rb`                        |
| removed |    -2 |   1.4% → 0.0% |   2 → 0 | `RuboCop::Cop::Layout::ElseAlignment#on_if`                 | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/layout/else_alignment.rb`           |
| removed |    -2 |   1.4% → 0.0% |   2 → 0 | `Parser::Lexer#emit_table`                                  | `../bundle/gems/parser-3.3.12.0/lib/parser/lexer-F1.rb`                            |
|  -22.2% |    -2 |   6.5% → 5.1% |   9 → 7 | `Parser::Source::Buffer#slice`                              | `../bundle/gems/parser-3.3.12.0/lib/parser/source/buffer.rb`                       |
|   -2.3% |    -2 | 63.3% → 63.2% | 88 → 86 | `block in <top (required)>`                                 | `../bundle/gems/rubocop-1.65.1/exe/rubocop`                                        |
|   -2.3% |    -2 | 63.3% → 63.2% | 88 → 86 | `RuboCop::CLI#run`                                          | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`                                 |
|   -2.4% |    -2 | 59.0% → 58.8% | 82 → 80 | `RuboCop::CLI#execute_runners`                              | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`                                 |
|   -2.4% |    -2 | 59.0% → 58.8% | 82 → 80 | `RuboCop::CLI#run_command`                                  | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`                                 |
|   -2.4% |    -2 | 59.0% → 58.8% | 82 → 80 | `RuboCop::CLI::Environment#run`                             | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli/environment.rb`                     |

##### Unknown

|  Change | Delta |           % | Samples | Function                                                                 | Location    |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------------------ | ----------- |
| removed |    -1 | 0.7% → 0.0% |   1 → 0 | `Integer#times`                                                          | `<unknown>` |
| removed |    -1 | 0.7% → 0.0% |   1 → 0 | `Psych::TreeBuilder#end_mapping`                                         | `<unknown>` |
| removed |    -1 | 0.7% → 0.0% |   1 → 0 | `RuboCop::AST::SendNode#attribute_accessor?`                             | `<unknown>` |
| removed |    -1 | 0.7% → 0.0% |   1 → 0 | `RuboCop::Cop::Naming::BinaryOperatorParameterName#op_method_candidate?` | `<unknown>` |
| removed |    -1 | 0.7% → 0.0% |   1 → 0 | `RuboCop::Cop::Style::OrAssignment#ternary_assignment?`                  | `<unknown>` |
| removed |    -1 | 0.7% → 0.0% |   1 → 0 | `RuboCop::AST::Node#match_guard_clause?`                                 | `<unknown>` |
| removed |    -1 | 0.7% → 0.0% |   1 → 0 | `RuboCop::AST::Node#lvasgn_type?`                                        | `<unknown>` |

##### Standard library

|  Change | Delta |             % | Samples | Function                                           | Location                                           |
| ------: | ----: | ------------: | ------: | -------------------------------------------------- | -------------------------------------------------- |
|   -2.3% |    -2 | 63.3% → 63.2% | 88 → 86 | `Benchmark.realtime`                               | `../lib/ruby/3.4.0/benchmark.rb`                   |
| removed |    -2 |   1.4% → 0.0% |   2 → 0 | `Psych::Visitors::ToRuby#visit_Psych_Nodes_Scalar` | `../lib/ruby/3.4.0/psych/visitors/to_ruby.rb`      |
| removed |    -1 |   0.7% → 0.0% |   1 → 0 | `Gem::StubSpecification#spec`                      | `../lib/ruby/3.4.0/rubygems/stub_specification.rb` |
| removed |    -1 |   0.7% → 0.0% |   1 → 0 | `Psych::Nodes::Scalar#initialize`                  | `../lib/ruby/3.4.0/psych/nodes/scalar.rb`          |
| removed |    -1 |   0.7% → 0.0% |   1 → 0 | `Set#each`                                         | `../lib/ruby/3.4.0/set.rb`                         |
| removed |    -1 |   0.7% → 0.0% |   1 → 0 | `Psych::TreeBuilder#scalar`                        | `../lib/ruby/3.4.0/psych/tree_builder.rb`          |
|  -25.0% |    -1 |   2.9% → 2.2% |   4 → 3 | `Psych.safe_load`                                  | `../lib/ruby/3.4.0/psych.rb`                       |
| removed |    -1 |   0.7% → 0.0% |   1 → 0 | `ERB::Compiler::SimpleScanner#scan`                | `../lib/ruby/3.4.0/erb/compiler.rb`                |
| removed |    -1 |   0.7% → 0.0% |   1 → 0 | `Psych::ScalarScanner#tokenize`                    | `../lib/ruby/3.4.0/psych/scalar_scanner.rb`        |
| removed |    -1 |   0.7% → 0.0% |   1 → 0 | `Psych::TreeBuilder#pop`                           | `../lib/ruby/3.4.0/psych/tree_builder.rb`          |
| removed |    -1 |   0.7% → 0.0% |   1 → 0 | `Psych::Visitors::ToRuby#deserialize`              | `../lib/ruby/3.4.0/psych/visitors/to_ruby.rb`      |
| removed |    -1 |   0.7% → 0.0% |   1 → 0 | `Psych::Visitors::ToRuby#register`                 | `../lib/ruby/3.4.0/psych/visitors/to_ruby.rb`      |
|  -50.0% |    -1 |   1.4% → 0.7% |   2 → 1 | `Psych::Visitors::Visitor#visit`                   | `../lib/ruby/3.4.0/psych/visitors/visitor.rb`      |
| removed |    -1 |   0.7% → 0.0% |   1 → 0 | `Gem::Specification#activate`                      | `../lib/ruby/3.4.0/rubygems/specification.rb`      |
| removed |    -1 |   0.7% → 0.0% |   1 → 0 | `Gem::Specification#activate_dependencies`         | `../lib/ruby/3.4.0/rubygems/specification.rb`      |
|  -50.0% |    -1 |   1.4% → 0.7% |   2 → 1 | `Gem::Specification.load`                          | `../lib/ruby/3.4.0/rubygems/specification.rb`      |
| removed |    -1 |   0.7% → 0.0% |   1 → 0 | `block in <module:URI>`                            | `../lib/ruby/3.4.0/uri/common.rb`                  |
