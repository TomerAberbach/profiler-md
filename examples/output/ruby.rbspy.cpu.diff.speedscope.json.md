# Sampling profile diff

Took 1.42s → 1.37s (-50.38ms, -3.5%) over 139 samples → 136 samples (10.3ms → 10.1ms per sample).

| Category         | Change |     Delta |             % |              Time | Samples |
| ---------------- | -----: | --------: | ------------: | ----------------: | ------: |
| Native           | -12.9% | -109.31ms | 59.2% → 53.5% | 844.3ms → 735.0ms | 83 → 74 |
| Third-party      |  +3.8% |  +20.28ms | 37.8% → 40.7% | 539.2ms → 559.5ms | 52 → 54 |
| Standard library | +92.3% |  +38.65ms |   2.9% → 5.9% |   41.9ms → 80.5ms |   4 → 8 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time spent directly in the function body, excluding callees.

| Change |    Delta |           % |         Time | Samples | Function                                                                    | Location                                                                                          |
| -----: | -------: | ----------: | -----------: | ------: | --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
|    new | +27.47ms | 0.0% → 2.0% | 0ms → 27.5ms |   0 → 3 | `Parser::Source::Buffer#line_index_for_position`                            | `../bundle/gems/parser-3.3.12.0/lib/parser/source/buffer.rb`                                      |
|    new | +21.53ms | 0.0% → 1.6% | 0ms → 21.5ms |   0 → 2 | `Enumerable#map [c function]`                                               | `<unknown>`                                                                                       |
|    new | +21.45ms | 0.0% → 1.6% | 0ms → 21.5ms |   0 → 1 | `RuboCop::AST::NodePattern::Builder#n`                                      | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern/builder.rb`                       |
|    new | +20.90ms | 0.0% → 1.5% | 0ms → 20.9ms |   0 → 2 | `Symbol#start_with? [c function]`                                           | `<unknown>`                                                                                       |
|    new | +20.84ms | 0.0% → 1.5% | 0ms → 20.8ms |   0 → 2 | `StringScanner#skip [c function]`                                           | `<unknown>`                                                                                       |
|    new | +19.98ms | 0.0% → 1.5% | 0ms → 20.0ms |   0 → 2 | `RuboCop::AST::Descendence#visit_descendants_of_types`                      | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb`                     |
|    new | +19.41ms | 0.0% → 1.4% | 0ms → 19.4ms |   0 → 2 | `block in on_send`                                                          | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/traversal.rb`                                  |
|    new | +19.03ms | 0.0% → 1.4% | 0ms → 19.0ms |   0 → 2 | `RuboCop::Cop::Style::ConditionalAssignment#assignment_type?`               | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/style/conditional_assignment.rb`                   |
|    new | +13.22ms | 0.0% → 1.0% | 0ms → 13.2ms |   0 → 1 | `File#initialize [c function]`                                              | `<unknown>`                                                                                       |
|    new | +12.51ms | 0.0% → 0.9% | 0ms → 12.5ms |   0 → 1 | `Kernel#respond_to? [c function]`                                           | `<unknown>`                                                                                       |
|    new | +12.33ms | 0.0% → 0.9% | 0ms → 12.3ms |   0 → 1 | `RuboCop::AST::Node#type_in?`                                               | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node.rb`                                       |
|    new | +12.23ms | 0.0% → 0.9% | 0ms → 12.2ms |   0 → 1 | `RuboCop::Cop::Layout::SpaceAfterColon#followed_by_space?`                  | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/layout/space_after_colon.rb`                       |
|    new | +11.53ms | 0.0% → 0.8% | 0ms → 11.5ms |   0 → 1 | `block in each_argument_node`                                               | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/multiline_element_indentation.rb`            |
|    new | +11.38ms | 0.0% → 0.8% | 0ms → 11.4ms |   0 → 1 | `RuboCop::AST::Node#updated`                                                | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node.rb`                                       |
|    new | +11.35ms | 0.0% → 0.8% | 0ms → 11.4ms |   0 → 1 | `Array#== [c function]`                                                     | `<unknown>`                                                                                       |
|    new | +11.26ms | 0.0% → 0.8% | 0ms → 11.3ms |   0 → 1 | `RuboCop::AST::NodePattern::Compiler::SequenceSubcompiler#visit_other_type` | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern/compiler/sequence_subcompiler.rb` |
|    new | +11.16ms | 0.0% → 0.8% | 0ms → 11.2ms |   0 → 1 | `Psych::Nodes::Node#initialize`                                             | `../lib/ruby/3.4.0/psych/nodes/node.rb`                                                           |
|    new | +11.12ms | 0.0% → 0.8% | 0ms → 11.1ms |   0 → 1 | `RuboCop::Cop::Team#support_target_ruby_version?`                           | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/team.rb`                                           |
|    new | +10.96ms | 0.0% → 0.8% | 0ms → 11.0ms |   0 → 1 | `block in find_variable`                                                    | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/variable_force/variable_table.rb`                  |
|    new | +10.90ms | 0.0% → 0.8% | 0ms → 10.9ms |   0 → 1 | `RuboCop::Cop::Base.cop_name`                                               | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/base.rb`                                           |

##### Native

| Change |    Delta |           % |           Time | Samples | Function                              | Location    |
| -----: | -------: | ----------: | -------------: | ------: | ------------------------------------- | ----------- |
|    new | +21.53ms | 0.0% → 1.6% |   0ms → 21.5ms |   0 → 2 | `Enumerable#map [c function]`         | `<unknown>` |
|    new | +20.90ms | 0.0% → 1.5% |   0ms → 20.9ms |   0 → 2 | `Symbol#start_with? [c function]`     | `<unknown>` |
|    new | +20.84ms | 0.0% → 1.5% |   0ms → 20.8ms |   0 → 2 | `StringScanner#skip [c function]`     | `<unknown>` |
|    new | +13.22ms | 0.0% → 1.0% |   0ms → 13.2ms |   0 → 1 | `File#initialize [c function]`        | `<unknown>` |
|    new | +12.51ms | 0.0% → 0.9% |   0ms → 12.5ms |   0 → 1 | `Kernel#respond_to? [c function]`     | `<unknown>` |
|    new | +11.35ms | 0.0% → 0.8% |   0ms → 11.4ms |   0 → 1 | `Array#== [c function]`               | `<unknown>` |
|    new |  +9.97ms | 0.0% → 0.7% |   0ms → 10.0ms |   0 → 1 | `Enumerable#to_a [c function]`        | `<unknown>` |
|    new |  +9.82ms | 0.0% → 0.7% |    0ms → 9.8ms |   0 → 1 | `Hash#fetch [c function]`             | `<unknown>` |
| +99.8% |  +9.71ms | 0.7% → 1.4% | 9.7ms → 19.4ms |   1 → 2 | `Module#append_features [c function]` | `<unknown>` |
|    new |  +9.36ms | 0.0% → 0.7% |    0ms → 9.4ms |   0 → 1 | `Enumerator#each [c function]`        | `<unknown>` |
|    new |  +9.34ms | 0.0% → 0.7% |    0ms → 9.3ms |   0 → 1 | `Kernel#freeze [c function]`          | `<unknown>` |
|    new |  +9.20ms | 0.0% → 0.7% |    0ms → 9.2ms |   0 → 1 | `Array#select [c function]`           | `<unknown>` |
|    new |  +9.19ms | 0.0% → 0.7% |    0ms → 9.2ms |   0 → 1 | `Array#each [c function]`             | `<unknown>` |
|    new |  +9.15ms | 0.0% → 0.7% |    0ms → 9.2ms |   0 → 1 | `File.realpath [c function]`          | `<unknown>` |
|    new |  +9.02ms | 0.0% → 0.7% |    0ms → 9.0ms |   0 → 1 | `Kernel#to_enum [c function]`         | `<unknown>` |
|    new |  +8.99ms | 0.0% → 0.7% |    0ms → 9.0ms |   0 → 1 | `Array#<=> [c function]`              | `<unknown>` |
|    new |  +8.97ms | 0.0% → 0.7% |    0ms → 9.0ms |   0 → 1 | `Kernel#require [c function]`         | `<unknown>` |
|    new |  +8.95ms | 0.0% → 0.7% |    0ms → 8.9ms |   0 → 1 | `Symbol#=== [c function]`             | `<unknown>` |

##### Third-party

| Change |    Delta |           % |         Time | Samples | Function                                                                    | Location                                                                                          |
| -----: | -------: | ----------: | -----------: | ------: | --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
|    new | +27.47ms | 0.0% → 2.0% | 0ms → 27.5ms |   0 → 3 | `Parser::Source::Buffer#line_index_for_position`                            | `../bundle/gems/parser-3.3.12.0/lib/parser/source/buffer.rb`                                      |
|    new | +21.45ms | 0.0% → 1.6% | 0ms → 21.5ms |   0 → 1 | `RuboCop::AST::NodePattern::Builder#n`                                      | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern/builder.rb`                       |
|    new | +19.98ms | 0.0% → 1.5% | 0ms → 20.0ms |   0 → 2 | `RuboCop::AST::Descendence#visit_descendants_of_types`                      | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb`                     |
|    new | +19.41ms | 0.0% → 1.4% | 0ms → 19.4ms |   0 → 2 | `block in on_send`                                                          | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/traversal.rb`                                  |
|    new | +19.03ms | 0.0% → 1.4% | 0ms → 19.0ms |   0 → 2 | `RuboCop::Cop::Style::ConditionalAssignment#assignment_type?`               | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/style/conditional_assignment.rb`                   |
|    new | +12.33ms | 0.0% → 0.9% | 0ms → 12.3ms |   0 → 1 | `RuboCop::AST::Node#type_in?`                                               | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node.rb`                                       |
|    new | +12.23ms | 0.0% → 0.9% | 0ms → 12.2ms |   0 → 1 | `RuboCop::Cop::Layout::SpaceAfterColon#followed_by_space?`                  | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/layout/space_after_colon.rb`                       |
|    new | +11.53ms | 0.0% → 0.8% | 0ms → 11.5ms |   0 → 1 | `block in each_argument_node`                                               | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/multiline_element_indentation.rb`            |
|    new | +11.38ms | 0.0% → 0.8% | 0ms → 11.4ms |   0 → 1 | `RuboCop::AST::Node#updated`                                                | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node.rb`                                       |
|    new | +11.26ms | 0.0% → 0.8% | 0ms → 11.3ms |   0 → 1 | `RuboCop::AST::NodePattern::Compiler::SequenceSubcompiler#visit_other_type` | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern/compiler/sequence_subcompiler.rb` |
|    new | +11.12ms | 0.0% → 0.8% | 0ms → 11.1ms |   0 → 1 | `RuboCop::Cop::Team#support_target_ruby_version?`                           | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/team.rb`                                           |
|    new | +10.96ms | 0.0% → 0.8% | 0ms → 11.0ms |   0 → 1 | `block in find_variable`                                                    | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/variable_force/variable_table.rb`                  |
|    new | +10.90ms | 0.0% → 0.8% | 0ms → 10.9ms |   0 → 1 | `RuboCop::Cop::Base.cop_name`                                               | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/base.rb`                                           |
|    new | +10.74ms | 0.0% → 0.8% | 0ms → 10.7ms |   0 → 1 | `RuboCop::AST::Node#first_line`                                             | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node.rb`                                       |
|    new | +10.61ms | 0.0% → 0.8% | 0ms → 10.6ms |   0 → 1 | `Parser::Lexer::StackState#pop`                                             | `../bundle/gems/parser-3.3.12.0/lib/parser/lexer/stack_state.rb`                                  |
|    new | +10.58ms | 0.0% → 0.8% | 0ms → 10.6ms |   0 → 1 | `Parser::Lexer#emit_instance_var`                                           | `../bundle/gems/parser-3.3.12.0/lib/parser/lexer-F1.rb`                                           |
|    new | +10.57ms | 0.0% → 0.8% | 0ms → 10.6ms |   0 → 1 | `block in def_node_matcher`                                                 | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern/method_definer.rb`                |
|    new | +10.48ms | 0.0% → 0.8% | 0ms → 10.5ms |   0 → 1 | `RuboCop::Cop::Style::EmptyElse#nil_style?`                                 | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/style/empty_else.rb`                               |
|    new | +10.41ms | 0.0% → 0.8% | 0ms → 10.4ms |   0 → 1 | `RuboCop::AST::MethodIdentifierPredicates#negation_method?`                 | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/method_identifier_predicates.rb`    |
|    new | +10.40ms | 0.0% → 0.8% | 0ms → 10.4ms |   0 → 1 | `RuboCop::Cop::PercentLiteral#process`                                      | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/percent_literal.rb`                          |

##### Standard library

| Change |    Delta |           % |            Time | Samples | Function                                | Location                                      |
| -----: | -------: | ----------: | --------------: | ------: | --------------------------------------- | --------------------------------------------- |
|    new | +11.16ms | 0.0% → 0.8% |    0ms → 11.2ms |   0 → 1 | `Psych::Nodes::Node#initialize`         | `../lib/ruby/3.4.0/psych/nodes/node.rb`       |
|    new | +10.55ms | 0.0% → 0.8% |    0ms → 10.6ms |   0 → 1 | `block in parse_in_order`               | `../lib/ruby/3.4.0/optparse.rb`               |
|    new | +10.35ms | 0.0% → 0.8% |    0ms → 10.3ms |   0 → 1 | `Psych::Visitors::ToRuby#accept`        | `../lib/ruby/3.4.0/psych/visitors/to_ruby.rb` |
|    new | +10.17ms | 0.0% → 0.7% |    0ms → 10.2ms |   0 → 1 | `ERB::Compiler::Buffer#close`           | `../lib/ruby/3.4.0/erb/compiler.rb`           |
|    new | +10.04ms | 0.0% → 0.7% |    0ms → 10.0ms |   0 → 1 | `Psych::Visitors::ToRuby#resolve_class` | `../lib/ruby/3.4.0/psych/visitors/to_ruby.rb` |
|    new |  +9.29ms | 0.0% → 0.7% |     0ms → 9.3ms |   0 → 1 | `Psych::TreeBuilder#set_start_location` | `../lib/ruby/3.4.0/psych/tree_builder.rb`     |
|    new |  +7.73ms | 0.0% → 0.6% |     0ms → 7.7ms |   0 → 1 | `block in merge`                        | `../lib/ruby/3.4.0/set.rb`                    |
|  +2.5% |  +0.27ms |        0.8% | 10.9ms → 11.2ms |       1 | `String#unpack`                         | `<internal:pack>`                             |

#### Improvements

Functions with the largest decrease in time spent directly in the function body, excluding callees.

|  Change |    Delta |             % |              Time | Samples | Function                                                             | Location                                                                                  |
| ------: | -------: | ------------: | ----------------: | ------: | -------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
|  -24.7% | -88.46ms | 25.2% → 19.7% | 358.8ms → 270.3ms | 34 → 27 | `(unknown) [c function]`                                             | `<unknown>`                                                                               |
| removed | -32.05ms |   2.2% → 0.0% |      32.1ms → 0ms |   3 → 0 | `block in visit_descendants_of_types`                                | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb`             |
| removed | -30.71ms |   2.2% → 0.0% |      30.7ms → 0ms |   3 → 0 | `Class#new [c function]`                                             | `<unknown>`                                                                               |
| removed | -20.93ms |   1.5% → 0.0% |      20.9ms → 0ms |   2 → 0 | `Parser::Source::Range#initialize`                                   | `../bundle/gems/parser-3.3.12.0/lib/parser/source/range.rb`                               |
| removed | -20.75ms |   1.5% → 0.0% |      20.7ms → 0ms |   2 → 0 | `Racc::Parser#_racc_do_parse_c [c function]`                         | `<unknown>`                                                                               |
| removed | -19.72ms |   1.4% → 0.0% |      19.7ms → 0ms |   2 → 0 | `block in visit_all_descendants`                                     | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb`             |
| removed | -19.58ms |   1.4% → 0.0% |      19.6ms → 0ms |   2 → 0 | `RuboCop::AST::Node#initialize`                                      | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node.rb`                               |
| removed | -19.33ms |   1.4% → 0.0% |      19.3ms → 0ms |   1 → 0 | `block in <module:DClonable>`                                        | `../lib/ruby/gems/3.4.0/gems/rexml-3.4.4/lib/rexml/xpath_parser.rb`                       |
| removed | -19.33ms |   1.4% → 0.0% |      19.3ms → 0ms |   2 → 0 | `RuboCop::Cop::RangeHelp#final_pos`                                  | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/range_help.rb`                       |
|  -30.9% | -17.41ms |   4.0% → 2.8% |   56.3ms → 38.9ms |   5 → 4 | `Module#class_eval [c function]`                                     | `<unknown>`                                                                               |
| removed | -12.57ms |   0.9% → 0.0% |      12.6ms → 0ms |   1 → 0 | `RuboCop::AST::Node#lvasgn_type?`                                    | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node.rb`                               |
| removed | -12.08ms |   0.8% → 0.0% |      12.1ms → 0ms |   1 → 0 | `RuboCop::Cop::Layout::ClosingParenthesisIndentation#check`          | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/layout/closing_parenthesis_indentation.rb` |
| removed | -11.94ms |   0.8% → 0.0% |      11.9ms → 0ms |   1 → 0 | `RuboCop::AST::SendNode#first_argument_index`                        | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/send_node.rb`                     |
| removed | -11.76ms |   0.8% → 0.0% |      11.8ms → 0ms |   1 → 0 | `block in forces_for`                                                | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/team.rb`                                   |
| removed | -11.74ms |   0.8% → 0.0% |      11.7ms → 0ms |   1 → 0 | `RuboCop::Cop::Style::LineEndConcatenation#standard_string_literal?` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/style/line_end_concatenation.rb`           |
| removed | -11.50ms |   0.8% → 0.0% |      11.5ms → 0ms |   1 → 0 | `block in run_hook`                                                  | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/force.rb`                                  |
| removed | -11.35ms |   0.8% → 0.0% |      11.3ms → 0ms |   1 → 0 | `RuboCop::AST::Node#source`                                          | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node.rb`                               |
| removed | -11.32ms |   0.8% → 0.0% |      11.3ms → 0ms |   1 → 0 | `String#tr [c function]`                                             | `<unknown>`                                                                               |
| removed | -11.32ms |   0.8% → 0.0% |      11.3ms → 0ms |   1 → 0 | `RuboCop::Cop::Layout::ExtraSpacing#extra_space_range`               | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/layout/extra_spacing.rb`                   |
| removed | -11.29ms |   0.8% → 0.0% |      11.3ms → 0ms |       1 | `Kernel#eval [c function]`                                           | `<unknown>`                                                                               |

##### Native

|  Change |    Delta |             % |              Time | Samples | Function                                      | Location    |
| ------: | -------: | ------------: | ----------------: | ------: | --------------------------------------------- | ----------- |
|  -24.7% | -88.46ms | 25.2% → 19.7% | 358.8ms → 270.3ms | 34 → 27 | `(unknown) [c function]`                      | `<unknown>` |
| removed | -30.71ms |   2.2% → 0.0% |      30.7ms → 0ms |   3 → 0 | `Class#new [c function]`                      | `<unknown>` |
| removed | -20.75ms |   1.5% → 0.0% |      20.7ms → 0ms |   2 → 0 | `Racc::Parser#_racc_do_parse_c [c function]`  | `<unknown>` |
|  -30.9% | -17.41ms |   4.0% → 2.8% |   56.3ms → 38.9ms |   5 → 4 | `Module#class_eval [c function]`              | `<unknown>` |
| removed | -11.32ms |   0.8% → 0.0% |      11.3ms → 0ms |   1 → 0 | `String#tr [c function]`                      | `<unknown>` |
| removed | -11.29ms |   0.8% → 0.0% |      11.3ms → 0ms |       1 | `Kernel#eval [c function]`                    | `<unknown>` |
| removed | -10.59ms |   0.7% → 0.0% |      10.6ms → 0ms |   1 → 0 | `Module#attr_accessor [c function]`           | `<unknown>` |
|  -54.5% | -10.33ms |   1.3% → 0.6% |    19.0ms → 8.6ms |   2 → 1 | `Array#include? [c function]`                 | `<unknown>` |
| removed | -10.28ms |   0.7% → 0.0% |      10.3ms → 0ms |   1 → 0 | `String#match? [c function]`                  | `<unknown>` |
|  -16.9% | -10.10ms |   4.2% → 3.6% |   59.9ms → 49.8ms |   6 → 5 | `String#[] [c function]`                      | `<unknown>` |
| removed |  -9.97ms |   0.7% → 0.0% |      10.0ms → 0ms |   1 → 0 | `Hash#freeze [c function]`                    | `<unknown>` |
|  -33.0% |  -9.61ms |   2.0% → 1.4% |   29.1ms → 19.5ms |   3 → 2 | `Kernel#public_send [c function]`             | `<unknown>` |
| removed |  -9.57ms |   0.7% → 0.0% |       9.6ms → 0ms |   1 → 0 | `Module#public_instance_methods [c function]` | `<unknown>` |
| removed |  -9.37ms |   0.7% → 0.0% |       9.4ms → 0ms |   1 → 0 | `Enumerable#sort_by [c function]`             | `<unknown>` |
| removed |  -9.33ms |   0.7% → 0.0% |       9.3ms → 0ms |   1 → 0 | `String#% [c function]`                       | `<unknown>` |
|  -31.4% |  -9.22ms |   2.1% → 1.5% |   29.4ms → 20.2ms |   3 → 2 | `String#index [c function]`                   | `<unknown>` |
| removed |  -9.17ms |   0.6% → 0.0% |       9.2ms → 0ms |   1 → 0 | `Regexp#match [c function]`                   | `<unknown>` |
| removed |  -9.06ms |   0.6% → 0.0% |       9.1ms → 0ms |   1 → 0 | `StringScanner#scan [c function]`             | `<unknown>` |
| removed |  -8.97ms |   0.6% → 0.0% |       9.0ms → 0ms |   1 → 0 | `Enumerable#each_slice [c function]`          | `<unknown>` |
|  -17.6% |  -7.21ms |   2.9% → 2.5% |   41.0ms → 33.8ms |   4 → 3 | `Kernel#require_relative [c function]`        | `<unknown>` |

##### Third-party

|  Change |    Delta |           % |         Time | Samples | Function                                                             | Location                                                                                  |
| ------: | -------: | ----------: | -----------: | ------: | -------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| removed | -32.05ms | 2.2% → 0.0% | 32.1ms → 0ms |   3 → 0 | `block in visit_descendants_of_types`                                | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb`             |
| removed | -20.93ms | 1.5% → 0.0% | 20.9ms → 0ms |   2 → 0 | `Parser::Source::Range#initialize`                                   | `../bundle/gems/parser-3.3.12.0/lib/parser/source/range.rb`                               |
| removed | -19.72ms | 1.4% → 0.0% | 19.7ms → 0ms |   2 → 0 | `block in visit_all_descendants`                                     | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/mixin/descendence.rb`             |
| removed | -19.58ms | 1.4% → 0.0% | 19.6ms → 0ms |   2 → 0 | `RuboCop::AST::Node#initialize`                                      | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node.rb`                               |
| removed | -19.33ms | 1.4% → 0.0% | 19.3ms → 0ms |   1 → 0 | `block in <module:DClonable>`                                        | `../lib/ruby/gems/3.4.0/gems/rexml-3.4.4/lib/rexml/xpath_parser.rb`                       |
| removed | -19.33ms | 1.4% → 0.0% | 19.3ms → 0ms |   2 → 0 | `RuboCop::Cop::RangeHelp#final_pos`                                  | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/range_help.rb`                       |
| removed | -12.57ms | 0.9% → 0.0% | 12.6ms → 0ms |   1 → 0 | `RuboCop::AST::Node#lvasgn_type?`                                    | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node.rb`                               |
| removed | -12.08ms | 0.8% → 0.0% | 12.1ms → 0ms |   1 → 0 | `RuboCop::Cop::Layout::ClosingParenthesisIndentation#check`          | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/layout/closing_parenthesis_indentation.rb` |
| removed | -11.94ms | 0.8% → 0.0% | 11.9ms → 0ms |   1 → 0 | `RuboCop::AST::SendNode#first_argument_index`                        | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/send_node.rb`                     |
| removed | -11.76ms | 0.8% → 0.0% | 11.8ms → 0ms |   1 → 0 | `block in forces_for`                                                | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/team.rb`                                   |
| removed | -11.74ms | 0.8% → 0.0% | 11.7ms → 0ms |   1 → 0 | `RuboCop::Cop::Style::LineEndConcatenation#standard_string_literal?` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/style/line_end_concatenation.rb`           |
| removed | -11.50ms | 0.8% → 0.0% | 11.5ms → 0ms |   1 → 0 | `block in run_hook`                                                  | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/force.rb`                                  |
| removed | -11.35ms | 0.8% → 0.0% | 11.3ms → 0ms |   1 → 0 | `RuboCop::AST::Node#source`                                          | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node.rb`                               |
| removed | -11.32ms | 0.8% → 0.0% | 11.3ms → 0ms |   1 → 0 | `RuboCop::Cop::Layout::ExtraSpacing#extra_space_range`               | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/layout/extra_spacing.rb`                   |
| removed | -11.14ms | 0.8% → 0.0% | 11.1ms → 0ms |   1 → 0 | `RuboCop::Cop::Util#on_node`                                         | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/util.rb`                                   |
| removed | -11.02ms | 0.8% → 0.0% | 11.0ms → 0ms |   1 → 0 | `RuboCop::AST::Node#match_guard_clause?`                             | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node.rb`                               |
| removed | -10.68ms | 0.7% → 0.0% | 10.7ms → 0ms |   1 → 0 | `Parser::Source::Map#node=`                                          | `../bundle/gems/parser-3.3.12.0/lib/parser/source/map.rb`                                 |
| removed | -10.61ms | 0.7% → 0.0% | 10.6ms → 0ms |   1 → 0 | `Parser::AST::Node#assign_properties`                                | `../bundle/gems/parser-3.3.12.0/lib/parser/ast/node.rb`                                   |
| removed | -10.44ms | 0.7% → 0.0% | 10.4ms → 0ms |   1 → 0 | `RuboCop::Cop::ConfigurableEnforcedStyle#style_detected`             | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/configurable_enforced_style.rb`      |
| removed | -10.27ms | 0.7% → 0.0% | 10.3ms → 0ms |   1 → 0 | `RuboCop::Cop::Layout::ElseAlignment#on_if`                          | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/layout/else_alignment.rb`                  |

##### Standard library

|  Change |    Delta |           % |         Time | Samples | Function                           | Location                                      |
| ------: | -------: | ----------: | -----------: | ------: | ---------------------------------- | --------------------------------------------- |
| removed | -10.63ms | 0.7% → 0.0% | 10.6ms → 0ms |   1 → 0 | `Psych::TreeBuilder#pop`           | `../lib/ruby/3.4.0/psych/tree_builder.rb`     |
| removed | -10.30ms | 0.7% → 0.0% | 10.3ms → 0ms |   1 → 0 | `Psych::Nodes::Scalar#initialize`  | `../lib/ruby/3.4.0/psych/nodes/scalar.rb`     |
| removed |  -9.99ms | 0.7% → 0.0% | 10.0ms → 0ms |   1 → 0 | `Psych::Visitors::ToRuby#register` | `../lib/ruby/3.4.0/psych/visitors/to_ruby.rb` |

### Total time

#### Regressions

Functions with the largest increase in total time spent in the function and all its callees.

|  Change |    Delta |             % |              Time | Samples | Function                                                   | Location                                                                            |
| ------: | -------: | ------------: | ----------------: | ------: | ---------------------------------------------------------- | ----------------------------------------------------------------------------------- |
|  +92.9% | +68.44ms |  5.2% → 10.3% |  73.7ms → 142.1ms |  7 → 13 | `RuboCop::AST::NodePattern::Macros#def_node_matcher`       | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern.rb`                 |
|     new | +54.44ms |   0.0% → 4.0% |      0ms → 54.4ms |   0 → 5 | `Array#select [c function]`                                | `<unknown>`                                                                         |
| +243.7% | +50.37ms |   1.4% → 5.2% |   20.7ms → 71.0ms |   2 → 7 | `Enumerable#find [c function]`                             | `<unknown>`                                                                         |
|  +55.3% | +45.74ms |   5.8% → 9.3% |  82.7ms → 128.5ms |  8 → 13 | `block in on_send`                                         | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/traversal.rb`                    |
|  +55.3% | +45.74ms |   5.8% → 9.3% |  82.7ms → 128.5ms |  8 → 13 | `RuboCop::AST::Traversal#on_send`                          | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/traversal.rb`                    |
|  +16.1% | +45.26ms | 19.7% → 23.7% | 281.0ms → 326.3ms | 28 → 32 | `RuboCop::AST::Traversal#on_def`                           | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/traversal.rb`                    |
|     new | +42.63ms |   0.0% → 3.1% |      0ms → 42.6ms |   0 → 4 | `RuboCop::Cop::Style::IfUnlessModifier#on_if`              | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/style/if_unless_modifier.rb`         |
| +421.5% | +42.02ms |   0.7% → 3.8% |   10.0ms → 52.0ms |   1 → 4 | `RuboCop::AST::NodePattern::Parser#parse`                  | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern/parser.rb`          |
|     new | +41.69ms |   0.0% → 3.0% |      0ms → 41.7ms |   0 → 4 | `RuboCop::Cop::Util#line`                                  | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/util.rb`                             |
|     new | +41.69ms |   0.0% → 3.0% |      0ms → 41.7ms |   0 → 4 | `RuboCop::Cop::Util#same_line?`                            | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/util.rb`                             |
| +100.0% | +40.38ms |   2.8% → 5.9% |   40.4ms → 80.8ms |   4 → 7 | `RuboCop::AST::NodePattern#initialize`                     | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern.rb`                 |
|  +29.3% | +36.00ms |  8.6% → 11.5% | 122.7ms → 158.7ms | 12 → 16 | `Enumerable#each_with_index [c function]`                  | `<unknown>`                                                                         |
|  +17.4% | +32.81ms | 13.2% → 16.1% | 188.5ms → 221.3ms | 19 → 22 | `RuboCop::Cop::Commissioner#on_send`                       | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`                     |
|     new | +32.50ms |   0.0% → 2.4% |      0ms → 32.5ms |   0 → 3 | `RuboCop::Cop::StatementModifier#single_line_as_modifier?` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/statement_modifier.rb`         |
|     new | +32.50ms |   0.0% → 2.4% |      0ms → 32.5ms |   0 → 3 | `RuboCop::Cop::Style::IfUnlessModifier#message`            | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/style/if_unless_modifier.rb`         |
|     new | +32.13ms |   0.0% → 2.3% |      0ms → 32.1ms |   0 → 3 | `block in first_line_comment`                              | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/statement_modifier.rb`         |
|     new | +32.13ms |   0.0% → 2.3% |      0ms → 32.1ms |   0 → 3 | `RuboCop::Cop::StatementModifier#first_line_comment`       | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/statement_modifier.rb`         |
|  +37.6% | +30.89ms |   5.8% → 8.2% |  82.1ms → 113.0ms |  8 → 11 | `RuboCop::Cop::Commissioner#on_block`                      | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`                     |
|     new | +30.54ms |   0.0% → 2.2% |      0ms → 30.5ms |   0 → 3 | `RuboCop::AST::NodePattern::LexerRex#next_token`           | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern/lexer.rex.rb`       |
|     new | +30.54ms |   0.0% → 2.2% |      0ms → 30.5ms |   0 → 3 | `RuboCop::AST::NodePattern::Parser#next_token`             | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/utilities/simple_forwardable.rb` |

##### Native

|  Change |    Delta |             % |              Time | Samples | Function                                     | Location    |
| ------: | -------: | ------------: | ----------------: | ------: | -------------------------------------------- | ----------- |
|     new | +54.44ms |   0.0% → 4.0% |      0ms → 54.4ms |   0 → 5 | `Array#select [c function]`                  | `<unknown>` |
| +243.7% | +50.37ms |   1.4% → 5.2% |   20.7ms → 71.0ms |   2 → 7 | `Enumerable#find [c function]`               | `<unknown>` |
|  +29.3% | +36.00ms |  8.6% → 11.5% | 122.7ms → 158.7ms | 12 → 16 | `Enumerable#each_with_index [c function]`    | `<unknown>` |
|  +11.3% | +21.47ms | 13.3% → 15.4% | 190.2ms → 211.7ms | 19 → 20 | `Racc::Parser#_racc_do_parse_c [c function]` | `<unknown>` |
|     new | +20.90ms |   0.0% → 1.5% |      0ms → 20.9ms |   0 → 2 | `Symbol#start_with? [c function]`            | `<unknown>` |
|     new | +20.84ms |   0.0% → 1.5% |      0ms → 20.8ms |   0 → 2 | `StringScanner#skip [c function]`            | `<unknown>` |
| +179.4% | +20.26ms |   0.8% → 2.3% |   11.3ms → 31.6ms |   1 → 3 | `Thread::Mutex#synchronize [c function]`     | `<unknown>` |
|  +29.7% | +18.59ms |   4.4% → 5.9% |   62.7ms → 81.3ms |   6 → 8 | `Enumerator#each [c function]`               | `<unknown>` |
|   +4.9% | +15.63ms | 22.4% → 24.4% | 319.9ms → 335.5ms |      32 | `Class#new [c function]`                     | `<unknown>` |
|   +2.2% | +13.23ms | 41.9% → 44.4% | 597.1ms → 610.3ms | 59 → 60 | `Enumerable#flat_map [c function]`           | `<unknown>` |
|     new | +13.22ms |   0.0% → 1.0% |      0ms → 13.2ms |   0 → 1 | `File#initialize [c function]`               | `<unknown>` |
|     new | +13.22ms |   0.0% → 1.0% |      0ms → 13.2ms |   0 → 1 | `IO.open [c function]`                       | `<unknown>` |
|     new | +12.51ms |   0.0% → 0.9% |      0ms → 12.5ms |   0 → 1 | `Kernel#respond_to? [c function]`            | `<unknown>` |
|     new | +11.35ms |   0.0% → 0.8% |      0ms → 11.4ms |   0 → 1 | `Array#== [c function]`                      | `<unknown>` |
|     new | +10.96ms |   0.0% → 0.8% |      0ms → 11.0ms |   0 → 1 | `Array#reverse_each [c function]`            | `<unknown>` |
|     new | +10.90ms |   0.0% → 0.8% |      0ms → 10.9ms |   0 → 1 | `Enumerable#reject [c function]`             | `<unknown>` |
|  +48.9% | +10.78ms |   1.5% → 2.4% |   22.0ms → 32.8ms |   2 → 3 | `Enumerable#map [c function]`                | `<unknown>` |
|     new | +10.55ms |   0.0% → 0.8% |      0ms → 10.6ms |   0 → 1 | `Kernel#catch [c function]`                  | `<unknown>` |
|     new | +10.30ms |   0.0% → 0.7% |      0ms → 10.3ms |   0 → 1 | `Hash#each_value [c function]`               | `<unknown>` |
|     new |  +9.82ms |   0.0% → 0.7% |       0ms → 9.8ms |   0 → 1 | `Hash#fetch [c function]`                    | `<unknown>` |

##### Third-party

|  Change |    Delta |             % |              Time | Samples | Function                                                    | Location                                                                            |
| ------: | -------: | ------------: | ----------------: | ------: | ----------------------------------------------------------- | ----------------------------------------------------------------------------------- |
|  +92.9% | +68.44ms |  5.2% → 10.3% |  73.7ms → 142.1ms |  7 → 13 | `RuboCop::AST::NodePattern::Macros#def_node_matcher`        | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern.rb`                 |
|  +55.3% | +45.74ms |   5.8% → 9.3% |  82.7ms → 128.5ms |  8 → 13 | `block in on_send`                                          | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/traversal.rb`                    |
|  +55.3% | +45.74ms |   5.8% → 9.3% |  82.7ms → 128.5ms |  8 → 13 | `RuboCop::AST::Traversal#on_send`                           | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/traversal.rb`                    |
|  +16.1% | +45.26ms | 19.7% → 23.7% | 281.0ms → 326.3ms | 28 → 32 | `RuboCop::AST::Traversal#on_def`                            | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/traversal.rb`                    |
|     new | +42.63ms |   0.0% → 3.1% |      0ms → 42.6ms |   0 → 4 | `RuboCop::Cop::Style::IfUnlessModifier#on_if`               | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/style/if_unless_modifier.rb`         |
| +421.5% | +42.02ms |   0.7% → 3.8% |   10.0ms → 52.0ms |   1 → 4 | `RuboCop::AST::NodePattern::Parser#parse`                   | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern/parser.rb`          |
|     new | +41.69ms |   0.0% → 3.0% |      0ms → 41.7ms |   0 → 4 | `RuboCop::Cop::Util#line`                                   | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/util.rb`                             |
|     new | +41.69ms |   0.0% → 3.0% |      0ms → 41.7ms |   0 → 4 | `RuboCop::Cop::Util#same_line?`                             | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/util.rb`                             |
| +100.0% | +40.38ms |   2.8% → 5.9% |   40.4ms → 80.8ms |   4 → 7 | `RuboCop::AST::NodePattern#initialize`                      | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern.rb`                 |
|  +17.4% | +32.81ms | 13.2% → 16.1% | 188.5ms → 221.3ms | 19 → 22 | `RuboCop::Cop::Commissioner#on_send`                        | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`                     |
|     new | +32.50ms |   0.0% → 2.4% |      0ms → 32.5ms |   0 → 3 | `RuboCop::Cop::StatementModifier#single_line_as_modifier?`  | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/statement_modifier.rb`         |
|     new | +32.50ms |   0.0% → 2.4% |      0ms → 32.5ms |   0 → 3 | `RuboCop::Cop::Style::IfUnlessModifier#message`             | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/style/if_unless_modifier.rb`         |
|     new | +32.13ms |   0.0% → 2.3% |      0ms → 32.1ms |   0 → 3 | `block in first_line_comment`                               | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/statement_modifier.rb`         |
|     new | +32.13ms |   0.0% → 2.3% |      0ms → 32.1ms |   0 → 3 | `RuboCop::Cop::StatementModifier#first_line_comment`        | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/statement_modifier.rb`         |
|  +37.6% | +30.89ms |   5.8% → 8.2% |  82.1ms → 113.0ms |  8 → 11 | `RuboCop::Cop::Commissioner#on_block`                       | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`                     |
|     new | +30.54ms |   0.0% → 2.2% |      0ms → 30.5ms |   0 → 3 | `RuboCop::AST::NodePattern::LexerRex#next_token`            | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern/lexer.rex.rb`       |
|     new | +30.54ms |   0.0% → 2.2% |      0ms → 30.5ms |   0 → 3 | `RuboCop::AST::NodePattern::Parser#next_token`              | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/utilities/simple_forwardable.rb` |
|  +84.2% | +28.06ms |   2.3% → 4.5% |   33.3ms → 61.4ms |   3 → 6 | `RuboCop::AST::NodePattern::MethodDefiner#def_node_matcher` | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern/method_definer.rb`  |
|  +58.7% | +26.13ms |   3.1% → 5.1% |   44.5ms → 70.7ms |   4 → 7 | `RuboCop::AST::NodePattern::MethodDefiner#def_helper`       | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node_pattern/method_definer.rb`  |
|     new | +22.63ms |   0.0% → 1.6% |      0ms → 22.6ms |   0 → 2 | `RuboCop::Cop::StatementModifier#to_modifier_form`          | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/mixin/statement_modifier.rb`         |

##### Standard library

|  Change |    Delta |           % |            Time | Samples | Function                                     | Location                                             |
| ------: | -------: | ----------: | --------------: | ------: | -------------------------------------------- | ---------------------------------------------------- |
| +179.4% | +20.26ms | 0.8% → 2.3% | 11.3ms → 31.6ms |   1 → 3 | `block in activate_bin_path`                 | `../lib/ruby/3.4.0/rubygems.rb`                      |
| +179.4% | +20.26ms | 0.8% → 2.3% | 11.3ms → 31.6ms |   1 → 3 | `Gem.activate_bin_path`                      | `../lib/ruby/3.4.0/rubygems.rb`                      |
|     new | +18.34ms | 0.0% → 1.3% |    0ms → 18.3ms |   0 → 2 | `Gem::RequestSet#resolve_current`            | `../lib/ruby/3.4.0/rubygems/request_set.rb`          |
|     new | +18.34ms | 0.0% → 1.3% |    0ms → 18.3ms |   0 → 2 | `Gem.finish_resolve`                         | `../lib/ruby/3.4.0/rubygems.rb`                      |
|     new | +13.22ms | 0.0% → 1.0% |    0ms → 13.2ms |   0 → 1 | `Gem.open_file`                              | `../lib/ruby/3.4.0/rubygems.rb`                      |
|     new | +13.22ms | 0.0% → 1.0% |    0ms → 13.2ms |   0 → 1 | `Gem::StubSpecification#data`                | `../lib/ruby/3.4.0/rubygems/stub_specification.rb`   |
|     new | +13.22ms | 0.0% → 1.0% |    0ms → 13.2ms |   0 → 1 | `Gem::StubSpecification#valid?`              | `../lib/ruby/3.4.0/rubygems/stub_specification.rb`   |
|     new | +13.22ms | 0.0% → 1.0% |    0ms → 13.2ms |   0 → 1 | `Gem::Specification.gemspec_stubs_in`        | `../lib/ruby/3.4.0/rubygems/specification.rb`        |
|     new | +13.22ms | 0.0% → 1.0% |    0ms → 13.2ms |   0 → 1 | `block in map_stubs`                         | `../lib/ruby/3.4.0/rubygems/specification_record.rb` |
|     new | +13.22ms | 0.0% → 1.0% |    0ms → 13.2ms |   0 → 1 | `Gem::SpecificationRecord#map_stubs`         | `../lib/ruby/3.4.0/rubygems/specification_record.rb` |
|     new | +13.22ms | 0.0% → 1.0% |    0ms → 13.2ms |   0 → 1 | `Gem::SpecificationRecord#installed_stubs`   | `../lib/ruby/3.4.0/rubygems/specification_record.rb` |
|     new | +13.22ms | 0.0% → 1.0% |    0ms → 13.2ms |   0 → 1 | `Gem::SpecificationRecord#stubs_for_pattern` | `../lib/ruby/3.4.0/rubygems/specification_record.rb` |
|     new | +13.22ms | 0.0% → 1.0% |    0ms → 13.2ms |   0 → 1 | `Gem::SpecificationRecord#stubs_for`         | `../lib/ruby/3.4.0/rubygems/specification_record.rb` |
|     new | +11.16ms | 0.0% → 0.8% |    0ms → 11.2ms |   0 → 1 | `Psych::Nodes::Node#initialize`              | `../lib/ruby/3.4.0/psych/nodes/node.rb`              |
|     new | +11.16ms | 0.0% → 0.8% |    0ms → 11.2ms |   0 → 1 | `Psych::Nodes::Mapping#initialize`           | `../lib/ruby/3.4.0/psych/nodes/mapping.rb`           |
|     new | +11.16ms | 0.0% → 0.8% |    0ms → 11.2ms |   0 → 1 | `Psych::TreeBuilder#start_mapping`           | `../lib/ruby/3.4.0/psych/tree_builder.rb`            |
|     new | +10.55ms | 0.0% → 0.8% |    0ms → 10.6ms |   0 → 1 | `block in parse_in_order`                    | `../lib/ruby/3.4.0/optparse.rb`                      |
|     new | +10.55ms | 0.0% → 0.8% |    0ms → 10.6ms |   0 → 1 | `OptionParser#order!`                        | `../lib/ruby/3.4.0/optparse.rb`                      |
|     new | +10.55ms | 0.0% → 0.8% |    0ms → 10.6ms |   0 → 1 | `OptionParser#permute!`                      | `../lib/ruby/3.4.0/optparse.rb`                      |
|     new | +10.55ms | 0.0% → 0.8% |    0ms → 10.6ms |   0 → 1 | `OptionParser#parse!`                        | `../lib/ruby/3.4.0/optparse.rb`                      |

#### Improvements

Functions with the largest decrease in total time spent in the function and all its callees.

|  Change |    Delta |             % |              Time |   Samples | Function                                             | Location                                                                   |
| ------: | -------: | ------------: | ----------------: | --------: | ---------------------------------------------------- | -------------------------------------------------------------------------- |
|   -8.0% | -97.18ms | 85.5% → 81.6% |     1.21s → 1.12s | 119 → 111 | `(unknown) [c function]`                             | `<unknown>`                                                                |
|   -5.0% | -70.64ms | 99.2% → 97.7% |     1.41s → 1.34s | 137 → 132 | `Kernel#load [c function]`                           | `<unknown>`                                                                |
|   -3.5% | -50.38ms |        100.0% |     1.42s → 1.37s | 138 → 135 | `<main>`                                             | `rubocop`                                                                  |
|   -8.4% | -48.39ms | 40.4% → 38.4% | 575.8ms → 527.4ms |   57 → 52 | `RuboCop::Cop::Commissioner#with_cop_error_handling` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`            |
|  -11.3% | -47.63ms | 29.7% → 27.3% | 422.8ms → 375.2ms |   42 → 37 | `block in trigger_responding_cops`                   | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`            |
|  -11.3% | -47.63ms | 29.7% → 27.3% | 422.8ms → 375.2ms |   42 → 37 | `RuboCop::Cop::Commissioner#trigger_responding_cops` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`            |
|   -8.0% | -41.76ms | 36.9% → 35.2% | 525.3ms → 483.5ms |   50 → 48 | `Kernel#require [c function]`                        | `<unknown>`                                                                |
|   -8.0% | -41.76ms | 36.9% → 35.2% | 525.3ms → 483.5ms |   49 → 47 | `Kernel#require`                                     | `<internal:/usr/local/lib/ruby/3.4.0/rubygems/core_ext/kernel_require.rb>` |
|  -20.8% | -40.03ms | 13.5% → 11.1% | 192.2ms → 152.2ms |   19 → 15 | `RuboCop::Cop::Commissioner#on_if`                   | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`            |
|   -9.3% | -38.51ms | 29.0% → 27.3% | 413.7ms → 375.2ms |   41 → 37 | `block (2 levels) in trigger_responding_cops`        | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`            |
|  -54.8% | -33.07ms |   4.2% → 2.0% |   60.3ms → 27.3ms |     6 → 3 | `RuboCop::AST::Node#initialize`                      | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node.rb`                |
|  -54.8% | -33.07ms |   4.2% → 2.0% |   60.3ms → 27.3ms |     6 → 3 | `RuboCop::AST::BuilderExtensions#n`                  | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/builder.rb`             |
|  -77.1% | -31.01ms |   2.8% → 0.7% |    40.2ms → 9.2ms |     4 → 1 | `RuboCop::AST::IfNode#keyword`                       | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/if_node.rb`        |
| removed | -30.69ms |   2.2% → 0.0% |      30.7ms → 0ms |     3 → 0 | `RuboCop::AST::IfNode#unless?`                       | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/if_node.rb`        |
|  -15.0% | -30.24ms | 14.1% → 12.4% | 201.1ms → 170.9ms |   20 → 17 | `RuboCop::AST::ProcessedSource#tokenize`             | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/processed_source.rb`    |
|  -14.2% | -29.96ms | 14.8% → 13.2% | 211.1ms → 181.1ms |   21 → 18 | `RuboCop::AST::ProcessedSource#parse`                | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/processed_source.rb`    |
|  -14.2% | -29.96ms | 14.8% → 13.2% | 211.1ms → 181.1ms |   21 → 18 | `RuboCop::AST::ProcessedSource#initialize`           | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/processed_source.rb`    |
|  -14.2% | -29.96ms | 14.8% → 13.2% | 211.1ms → 181.1ms |   21 → 18 | `RuboCop::AST::ProcessedSource.from_file`            | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/processed_source.rb`    |
|  -14.2% | -29.96ms | 14.8% → 13.2% | 211.1ms → 181.1ms |   21 → 18 | `RuboCop::Runner#get_processed_source`               | `../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`                      |
|   -3.7% | -29.95ms | 56.7% → 56.6% | 808.1ms → 778.2ms |   80 → 77 | `RuboCop::Runner#do_inspection_loop`                 | `../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`                      |

##### Native

|  Change |    Delta |             % |              Time |   Samples | Function                                      | Location    |
| ------: | -------: | ------------: | ----------------: | --------: | --------------------------------------------- | ----------- |
|   -8.0% | -97.18ms | 85.5% → 81.6% |     1.21s → 1.12s | 119 → 111 | `(unknown) [c function]`                      | `<unknown>` |
|   -5.0% | -70.64ms | 99.2% → 97.7% |     1.41s → 1.34s | 137 → 132 | `Kernel#load [c function]`                    | `<unknown>` |
|   -8.0% | -41.76ms | 36.9% → 35.2% | 525.3ms → 483.5ms |   50 → 48 | `Kernel#require [c function]`                 | `<unknown>` |
|   -2.6% | -21.55ms | 57.4% → 58.0% | 818.8ms → 797.3ms |   81 → 79 | `Enumerable#reduce [c function]`              | `<unknown>` |
|   -4.4% | -20.77ms | 33.3% → 33.1% | 475.2ms → 454.4ms |   46 → 44 | `Kernel#require_relative [c function]`        | `<unknown>` |
| removed | -19.33ms |   1.4% → 0.0% |      19.3ms → 0ms |     1 → 0 | `Module#refine [c function]`                  | `<unknown>` |
|  -30.9% | -17.41ms |   4.0% → 2.8% |   56.3ms → 38.9ms |     5 → 4 | `Module#class_eval [c function]`              | `<unknown>` |
| removed | -11.81ms |   0.8% → 0.0% |      11.8ms → 0ms |     1 → 0 | `Hash#each_key [c function]`                  | `<unknown>` |
| removed | -11.32ms |   0.8% → 0.0% |      11.3ms → 0ms |     1 → 0 | `String#tr [c function]`                      | `<unknown>` |
| removed | -11.29ms |   0.8% → 0.0% |      11.3ms → 0ms |         1 | `Kernel#eval [c function]`                    | `<unknown>` |
| removed | -10.59ms |   0.7% → 0.0% |      10.6ms → 0ms |     1 → 0 | `Enumerable#select [c function]`              | `<unknown>` |
| removed | -10.59ms |   0.7% → 0.0% |      10.6ms → 0ms |     1 → 0 | `Module#attr_accessor [c function]`           | `<unknown>` |
|  -54.5% | -10.33ms |   1.3% → 0.6% |    19.0ms → 8.6ms |     2 → 1 | `Array#include? [c function]`                 | `<unknown>` |
| removed | -10.28ms |   0.7% → 0.0% |      10.3ms → 0ms |     1 → 0 | `String#match? [c function]`                  | `<unknown>` |
|  -16.9% | -10.10ms |   4.2% → 3.6% |   59.9ms → 49.8ms |     6 → 5 | `String#[] [c function]`                      | `<unknown>` |
|  -33.7% |  -9.98ms |   2.1% → 1.4% |   29.6ms → 19.7ms |     3 → 2 | `Enumerator#with_object [c function]`         | `<unknown>` |
| removed |  -9.97ms |   0.7% → 0.0% |      10.0ms → 0ms |     1 → 0 | `Hash#freeze [c function]`                    | `<unknown>` |
|  -19.8% |  -9.86ms |   3.5% → 2.9% |   49.9ms → 40.0ms |     5 → 4 | `Enumerable#each_slice [c function]`          | `<unknown>` |
|  -13.8% |  -9.85ms |   5.0% → 4.5% |   71.3ms → 61.5ms |     7 → 6 | `Enumerable#each_cons [c function]`           | `<unknown>` |
| removed |  -9.57ms |   0.7% → 0.0% |       9.6ms → 0ms |     1 → 0 | `Module#public_instance_methods [c function]` | `<unknown>` |

##### Third-party

|  Change |    Delta |             % |              Time | Samples | Function                                             | Location                                                                         |
| ------: | -------: | ------------: | ----------------: | ------: | ---------------------------------------------------- | -------------------------------------------------------------------------------- |
|   -8.4% | -48.39ms | 40.4% → 38.4% | 575.8ms → 527.4ms | 57 → 52 | `RuboCop::Cop::Commissioner#with_cop_error_handling` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`                  |
|  -11.3% | -47.63ms | 29.7% → 27.3% | 422.8ms → 375.2ms | 42 → 37 | `block in trigger_responding_cops`                   | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`                  |
|  -11.3% | -47.63ms | 29.7% → 27.3% | 422.8ms → 375.2ms | 42 → 37 | `RuboCop::Cop::Commissioner#trigger_responding_cops` | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`                  |
|  -20.8% | -40.03ms | 13.5% → 11.1% | 192.2ms → 152.2ms | 19 → 15 | `RuboCop::Cop::Commissioner#on_if`                   | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`                  |
|   -9.3% | -38.51ms | 29.0% → 27.3% | 413.7ms → 375.2ms | 41 → 37 | `block (2 levels) in trigger_responding_cops`        | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/commissioner.rb`                  |
|  -54.8% | -33.07ms |   4.2% → 2.0% |   60.3ms → 27.3ms |   6 → 3 | `RuboCop::AST::Node#initialize`                      | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node.rb`                      |
|  -54.8% | -33.07ms |   4.2% → 2.0% |   60.3ms → 27.3ms |   6 → 3 | `RuboCop::AST::BuilderExtensions#n`                  | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/builder.rb`                   |
|  -77.1% | -31.01ms |   2.8% → 0.7% |    40.2ms → 9.2ms |   4 → 1 | `RuboCop::AST::IfNode#keyword`                       | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/if_node.rb`              |
| removed | -30.69ms |   2.2% → 0.0% |      30.7ms → 0ms |   3 → 0 | `RuboCop::AST::IfNode#unless?`                       | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/node/if_node.rb`              |
|  -15.0% | -30.24ms | 14.1% → 12.4% | 201.1ms → 170.9ms | 20 → 17 | `RuboCop::AST::ProcessedSource#tokenize`             | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/processed_source.rb`          |
|  -14.2% | -29.96ms | 14.8% → 13.2% | 211.1ms → 181.1ms | 21 → 18 | `RuboCop::AST::ProcessedSource#parse`                | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/processed_source.rb`          |
|  -14.2% | -29.96ms | 14.8% → 13.2% | 211.1ms → 181.1ms | 21 → 18 | `RuboCop::AST::ProcessedSource#initialize`           | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/processed_source.rb`          |
|  -14.2% | -29.96ms | 14.8% → 13.2% | 211.1ms → 181.1ms | 21 → 18 | `RuboCop::AST::ProcessedSource.from_file`            | `../bundle/gems/rubocop-ast-1.50.0/lib/rubocop/ast/processed_source.rb`          |
|  -14.2% | -29.96ms | 14.8% → 13.2% | 211.1ms → 181.1ms | 21 → 18 | `RuboCop::Runner#get_processed_source`               | `../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`                            |
|   -3.7% | -29.95ms | 56.7% → 56.6% | 808.1ms → 778.2ms | 80 → 77 | `RuboCop::Runner#do_inspection_loop`                 | `../bundle/gems/rubocop-1.65.1/lib/rubocop/runner.rb`                            |
| removed | -29.80ms |   2.1% → 0.0% |      29.8ms → 0ms |   3 → 0 | `RuboCop::Cop::Layout::SpaceBeforeFirstArg#on_send`  | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cop/layout/space_before_first_arg.rb` |
|   -3.3% | -29.30ms | 62.2% → 62.4% | 887.3ms → 858.0ms | 88 → 85 | `block in run`                                       | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`                               |
|   -3.3% | -29.30ms | 62.2% → 62.4% | 887.3ms → 858.0ms | 88 → 85 | `RuboCop::CLI#profile_if_needed`                     | `../bundle/gems/rubocop-1.65.1/lib/rubocop/cli.rb`                               |
|  -47.8% | -28.82ms |   4.2% → 2.3% |   60.3ms → 31.4ms |   6 → 3 | `Parser::Source::Range#source`                       | `../bundle/gems/parser-3.3.12.0/lib/parser/source/range.rb`                      |
|  -42.2% | -21.76ms |   3.6% → 2.2% |   51.6ms → 29.8ms |       3 | `block in cache_root_dir_from_config`                | `../bundle/gems/rubocop-1.65.1/lib/rubocop/server/cache.rb`                      |

##### Standard library

|  Change |    Delta |             % |              Time | Samples | Function                                           | Location                                                                   |
| ------: | -------: | ------------: | ----------------: | ------: | -------------------------------------------------- | -------------------------------------------------------------------------- |
|   -8.0% | -41.76ms | 36.9% → 35.2% | 525.3ms → 483.5ms | 49 → 47 | `Kernel#require`                                   | `<internal:/usr/local/lib/ruby/3.4.0/rubygems/core_ext/kernel_require.rb>` |
| removed | -20.26ms |   1.4% → 0.0% |      20.3ms → 0ms |   2 → 0 | `Psych::Visitors::ToRuby#visit_Psych_Nodes_Scalar` | `../lib/ruby/3.4.0/psych/visitors/to_ruby.rb`                              |
|   -2.1% | -18.74ms | 62.2% → 63.2% | 887.3ms → 868.5ms | 88 → 86 | `Benchmark.realtime`                               | `../lib/ruby/3.4.0/benchmark.rb`                                           |
| removed | -11.81ms |   0.8% → 0.0% |      11.8ms → 0ms |   1 → 0 | `Set#each`                                         | `../lib/ruby/3.4.0/set.rb`                                                 |
|  -28.0% | -11.52ms |   2.9% → 2.2% |   41.2ms → 29.7ms |   4 → 3 | `Psych.safe_load`                                  | `../lib/ruby/3.4.0/psych.rb`                                               |
| removed | -11.29ms |   0.8% → 0.0% |      11.3ms → 0ms |   2 → 1 | `Gem::Specification.load`                          | `../lib/ruby/3.4.0/rubygems/specification.rb`                              |
| removed | -11.29ms |   0.8% → 0.0% |      11.3ms → 0ms |   1 → 0 | `Gem::StubSpecification#spec`                      | `../lib/ruby/3.4.0/rubygems/stub_specification.rb`                         |
| removed | -10.63ms |   0.7% → 0.0% |      10.6ms → 0ms |   1 → 0 | `Psych::TreeBuilder#pop`                           | `../lib/ruby/3.4.0/psych/tree_builder.rb`                                  |
| removed | -10.63ms |   0.7% → 0.0% |      10.6ms → 0ms |   1 → 0 | `Psych::TreeBuilder#end_mapping`                   | `../lib/ruby/3.4.0/psych/tree_builder.rb`                                  |
| removed | -10.30ms |   0.7% → 0.0% |      10.3ms → 0ms |   1 → 0 | `Psych::Nodes::Scalar#initialize`                  | `../lib/ruby/3.4.0/psych/nodes/scalar.rb`                                  |
| removed | -10.30ms |   0.7% → 0.0% |      10.3ms → 0ms |   1 → 0 | `Psych::TreeBuilder#scalar`                        | `../lib/ruby/3.4.0/psych/tree_builder.rb`                                  |
| removed | -10.28ms |   0.7% → 0.0% |      10.3ms → 0ms |   1 → 0 | `Psych::ScalarScanner#tokenize`                    | `../lib/ruby/3.4.0/psych/scalar_scanner.rb`                                |
| removed | -10.28ms |   0.7% → 0.0% |      10.3ms → 0ms |   1 → 0 | `Psych::Visitors::ToRuby#deserialize`              | `../lib/ruby/3.4.0/psych/visitors/to_ruby.rb`                              |
| removed | -10.28ms |   0.7% → 0.0% |      10.3ms → 0ms |   1 → 0 | `block in register_empty`                          | `../lib/ruby/3.4.0/psych/visitors/to_ruby.rb`                              |
| removed | -10.28ms |   0.7% → 0.0% |      10.3ms → 0ms |   1 → 0 | `Psych::Visitors::ToRuby#register_empty`           | `../lib/ruby/3.4.0/psych/visitors/to_ruby.rb`                              |
| removed |  -9.99ms |   0.7% → 0.0% |      10.0ms → 0ms |   1 → 0 | `Psych::Visitors::ToRuby#register`                 | `../lib/ruby/3.4.0/psych/visitors/to_ruby.rb`                              |
| removed |  -9.33ms |   0.7% → 0.0% |       9.3ms → 0ms |   1 → 0 | `block in <module:URI>`                            | `../lib/ruby/3.4.0/uri/common.rb`                                          |
| removed |  -9.33ms |   0.7% → 0.0% |       9.3ms → 0ms |   1 → 0 | `Integer#times`                                    | `<internal:numeric>`                                                       |
| removed |  -9.06ms |   0.6% → 0.0% |       9.1ms → 0ms |   1 → 0 | `ERB::Compiler::SimpleScanner#scan`                | `../lib/ruby/3.4.0/erb/compiler.rb`                                        |
|   -2.3% |  -0.48ms |          1.5% |   20.9ms → 20.5ms |       2 | `Psych::Parser#parse`                              | `../lib/ruby/3.4.0/psych/parser.rb`                                        |
