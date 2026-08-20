# Sampling profile

Collected 1,551 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Native           | 59.8% |     927 |
| Third-party      | 35.3% |     547 |
| Unknown          |  4.4% |      68 |
| Standard library |  0.5% |       8 |
| Ours             |  0.1% |       1 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|    % | Samples | Function                                                                | Location                                                                                                 |
| ---: | ------: | ----------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| 7.7% |     119 | `Module#extend_object [c function]`                                     | `<unknown>`                                                                                              |
| 4.8% |      75 | `Digest::Base#<< [c function]`                                          | `<unknown>`                                                                                              |
| 3.9% |      60 | `Nokogiri::Gumbo.fragment [c function]`                                 | `<unknown>`                                                                                              |
| 3.2% |      50 | `Nokogiri::HTML4::Document.new [c function]`                            | `<unknown>`                                                                                              |
| 3.1% |      48 | `Nokogiri::XML::Node#html_standard_serialize [c function]`              | `<unknown>`                                                                                              |
| 2.4% |      37 | `block in _app_views_statuses_index_html_erb___729550187891421473_3112` | `<unknown>`                                                                                              |
| 2.3% |      36 | `block in decorate`                                                     | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`             |
| 2.2% |      34 | `Kernel#dup [c function]`                                               | `<unknown>`                                                                                              |
| 2.1% |      33 | `String#gsub! [c function]`                                             | `<unknown>`                                                                                              |
| 2.0% |      31 | `Hash#merge [c function]`                                               | `<unknown>`                                                                                              |
| 1.9% |      30 | `String#gsub [c function]`                                              | `<unknown>`                                                                                              |
| 1.8% |      28 | `Nokogiri::XML::Node#children [c function]`                             | `<unknown>`                                                                                              |
| 1.7% |      26 | `Kernel.require [c function]`                                           | `<unknown>`                                                                                              |
| 1.4% |      22 | `String#split [c function]`                                             | `<unknown>`                                                                                              |
| 1.4% |      22 | `String#encode [c function]`                                            | `<unknown>`                                                                                              |
| 1.4% |      21 | `Array#each`                                                            | `<unknown>`                                                                                              |
| 1.3% |      20 | `String.new [c function]`                                               | `<unknown>`                                                                                              |
| 1.3% |      20 | `ActiveSupport::NumberHelper::NumberConverter#i18n_format_options`      | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/number_helper/number_converter.rb` |
| 1.0% |      15 | `Nokogiri::HTML5::Node#write_to`                                        | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/node.rb`               |
| 0.9% |      14 | `Class#new [c function]`                                                | `<unknown>`                                                                                              |

#### Categories

##### Native

|    % | Samples | Function                                                   | Location    |
| ---: | ------: | ---------------------------------------------------------- | ----------- |
| 7.7% |     119 | `Module#extend_object [c function]`                        | `<unknown>` |
| 4.8% |      75 | `Digest::Base#<< [c function]`                             | `<unknown>` |
| 3.9% |      60 | `Nokogiri::Gumbo.fragment [c function]`                    | `<unknown>` |
| 3.2% |      50 | `Nokogiri::HTML4::Document.new [c function]`               | `<unknown>` |
| 3.1% |      48 | `Nokogiri::XML::Node#html_standard_serialize [c function]` | `<unknown>` |
| 2.2% |      34 | `Kernel#dup [c function]`                                  | `<unknown>` |
| 2.1% |      33 | `String#gsub! [c function]`                                | `<unknown>` |
| 2.0% |      31 | `Hash#merge [c function]`                                  | `<unknown>` |
| 1.9% |      30 | `String#gsub [c function]`                                 | `<unknown>` |
| 1.8% |      28 | `Nokogiri::XML::Node#children [c function]`                | `<unknown>` |
| 1.7% |      26 | `Kernel.require [c function]`                              | `<unknown>` |
| 1.4% |      22 | `String#split [c function]`                                | `<unknown>` |
| 1.4% |      22 | `String#encode [c function]`                               | `<unknown>` |
| 1.3% |      20 | `String.new [c function]`                                  | `<unknown>` |
| 0.9% |      14 | `Class#new [c function]`                                   | `<unknown>` |
| 0.8% |      12 | `Array#join [c function]`                                  | `<unknown>` |
| 0.8% |      12 | `Kernel#lambda [c function]`                               | `<unknown>` |
| 0.8% |      12 | `Nokogiri::XML::Node#node_name [c function]`               | `<unknown>` |
| 0.8% |      12 | `Regexp#match? [c function]`                               | `<unknown>` |
| 0.8% |      12 | `String#initialize [c function]`                           | `<unknown>` |

##### Third-party

|    % | Samples | Function                                                           | Location                                                                                                 |
| ---: | ------: | ------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------- |
| 2.3% |      36 | `block in decorate`                                                | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`             |
| 1.3% |      20 | `ActiveSupport::NumberHelper::NumberConverter#i18n_format_options` | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/number_helper/number_converter.rb` |
| 1.0% |      15 | `Nokogiri::HTML5::Node#write_to`                                   | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/node.rb`               |
| 0.9% |      14 | `Loofah::Scrubber#traverse_conditionally_bottom_up`                | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/scrubber.rb`                                       |
| 0.8% |      13 | `block (2 levels) in translate`                                    | `../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/fallbacks.rb`                                  |
| 0.8% |      13 | `I18n::Backend::Base#translate`                                    | `../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/base.rb`                                       |
| 0.8% |      13 | `Nokogiri::HTML5::DocumentFragment#initialize`                     | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/document_fragment.rb`  |
| 0.8% |      12 | `Nokogiri::XML::NodeSet#each`                                      | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`             |
| 0.8% |      12 | `Nokogiri::XML::Document#decorators`                               | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`             |
| 0.7% |      11 | `ActionView::OutputBuffer#<<`                                      | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/buffers.rb`                              |
| 0.7% |      11 | `Rails::HTML::Sanitizer#properly_encode`                           | `../../usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/sanitizer.rb`                     |
| 0.7% |      11 | `Rails::HTML::PermitScrubber#skip_node?`                           | `../../usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`                     |
| 0.6% |      10 | `Nokogiri::XML::Document#decorate`                                 | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`             |
| 0.6% |      10 | `Nokogiri::XML::DocumentFragment.new`                              | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document_fragment.rb`    |
| 0.6% |      10 | `Loofah::ScrubBehavior::Node#scrub!`                               | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`                                       |
| 0.6% |      10 | `block in force_correct_attribute_escaping!`                       | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`                                    |
| 0.6% |      10 | `Nokogiri::XML::NodeSet#to_html`                                   | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`             |
| 0.6% |       9 | `ActionView::Helpers::NumberHelper#number_with_delimiter`          | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/helpers/number_helper.rb`                |
| 0.6% |       9 | `Nokogiri::XML::Node#to_html`                                      | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb`                 |
| 0.5% |       8 | `block in scrub!`                                                  | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`                                       |

##### Unknown

|    % | Samples | Function                                                                | Location    |
| ---: | ------: | ----------------------------------------------------------------------- | ----------- |
| 2.4% |      37 | `block in _app_views_statuses_index_html_erb___729550187891421473_3112` | `<unknown>` |
| 1.4% |      21 | `Array#each`                                                            | `<unknown>` |
| 0.1% |       1 | `Hash#initialize`                                                       | `<unknown>` |
| 0.1% |       1 | `Time#initialize`                                                       | `<unknown>` |
| 0.1% |       1 | `ActionController::Metal#session`                                       | `<unknown>` |
| 0.1% |       1 | `ActionDispatch::ParamBuilder.from_pairs`                               | `<unknown>` |
| 0.1% |       1 | `ActionController::Base::HelperMethods#form_authenticity_token`         | `<unknown>` |
| 0.1% |       1 | `ActionView::Base.default_formats`                                      | `<unknown>` |
| 0.1% |       1 | `ActionController::Base#__callbacks`                                    | `<unknown>` |
| 0.1% |       1 | `Dir.[]`                                                                | `<unknown>` |
| 0.1% |       1 | `Dir.glob`                                                              | `<unknown>` |
| 0.1% |       1 | `ActiveSupport::NumberHelper::NumberConverter.validate_float`           | `<unknown>` |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `block in _app_views_statuses_index_html_erb___729550187891421473_3112` (`<unknown>`)

|      % | Samples | Location |
| -----: | ------: | -------- |
| 100.0% |      37 | 29       |

##### `block in decorate` (`../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`)

|      % | Samples | Location                                                                                         |
| -----: | ------: | ------------------------------------------------------------------------------------------------ |
| 100.0% |      36 | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb:417` |

##### `Array#each` (`<unknown>`)

|      % | Samples | Location |
| -----: | ------: | -------- |
| 100.0% |      21 | 231      |

##### `ActiveSupport::NumberHelper::NumberConverter#i18n_format_options` (`../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/number_helper/number_converter.rb`)

|      % | Samples | Location                                                                                                     |
| -----: | ------: | ------------------------------------------------------------------------------------------------------------ |
| 100.0% |      20 | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/number_helper/number_converter.rb:164` |

##### `Nokogiri::HTML5::Node#write_to` (`../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/node.rb`)

|      % | Samples | Location                                                                                      |
| -----: | ------: | --------------------------------------------------------------------------------------------- |
| 100.0% |      15 | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/node.rb:68` |

##### `Loofah::Scrubber#traverse_conditionally_bottom_up` (`../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/scrubber.rb`)

|      % | Samples | Location                                                               |
| -----: | ------: | ---------------------------------------------------------------------- |
| 100.0% |      14 | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/scrubber.rb:138` |

##### `block (2 levels) in translate` (`../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/fallbacks.rb`)

|      % | Samples | Location                                                                   |
| -----: | ------: | -------------------------------------------------------------------------- |
| 100.0% |      13 | `../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/fallbacks.rb:63` |

##### `I18n::Backend::Base#translate` (`../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/base.rb`)

|      % | Samples | Location                                                              |
| -----: | ------: | --------------------------------------------------------------------- |
| 100.0% |      13 | `../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/base.rb:69` |

##### `Nokogiri::HTML5::DocumentFragment#initialize` (`../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/document_fragment.rb`)

|      % | Samples | Location                                                                                                    |
| -----: | ------: | ----------------------------------------------------------------------------------------------------------- |
| 100.0% |      13 | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/document_fragment.rb:167` |

##### `Nokogiri::XML::NodeSet#each` (`../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`)

|      % | Samples | Location                                                                                         |
| -----: | ------: | ------------------------------------------------------------------------------------------------ |
| 100.0% |      12 | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb:240` |

##### `Nokogiri::XML::Document#decorators` (`../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`)

|      % | Samples | Location                                                                                         |
| -----: | ------: | ------------------------------------------------------------------------------------------------ |
| 100.0% |      12 | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb:372` |

##### `ActionView::OutputBuffer#<<` (`../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/buffers.rb`)

|      % | Samples | Location                                                                       |
| -----: | ------: | ------------------------------------------------------------------------------ |
| 100.0% |      11 | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/buffers.rb:52` |

##### `Rails::HTML::Sanitizer#properly_encode` (`../../usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/sanitizer.rb`)

|      % | Samples | Location                                                                                |
| -----: | ------: | --------------------------------------------------------------------------------------- |
| 100.0% |      11 | `../../usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/sanitizer.rb:34` |

##### `Rails::HTML::PermitScrubber#skip_node?` (`../../usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`)

|      % | Samples | Location                                                                                |
| -----: | ------: | --------------------------------------------------------------------------------------- |
| 100.0% |      11 | `../../usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb:89` |

##### `Nokogiri::XML::Document#decorate` (`../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`)

|      % | Samples | Location                                                                                         |
| -----: | ------: | ------------------------------------------------------------------------------------------------ |
| 100.0% |      10 | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb:418` |

##### `Nokogiri::XML::DocumentFragment.new` (`../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document_fragment.rb`)

|      % | Samples | Location                                                                                                 |
| -----: | ------: | -------------------------------------------------------------------------------------------------------- |
| 100.0% |      10 | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document_fragment.rb:46` |

##### `Loofah::ScrubBehavior::Node#scrub!` (`../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`)

|      % | Samples | Location                                                              |
| -----: | ------: | --------------------------------------------------------------------- |
| 100.0% |      10 | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb:48` |

##### `block in force_correct_attribute_escaping!` (`../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`)

|      % | Samples | Location                                                                  |
| -----: | ------: | ------------------------------------------------------------------------- |
| 100.0% |      10 | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb:258` |

##### `Nokogiri::XML::NodeSet#to_html` (`../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`)

|      % | Samples | Location                                                                                         |
| -----: | ------: | ------------------------------------------------------------------------------------------------ |
| 100.0% |      10 | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb:356` |

##### `ActionView::Helpers::NumberHelper#number_with_delimiter` (`../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/helpers/number_helper.rb`)

|      % | Samples | Location                                                                                     |
| -----: | ------: | -------------------------------------------------------------------------------------------- |
| 100.0% |       9 | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/helpers/number_helper.rb:85` |

##### `Nokogiri::XML::Node#to_html` (`../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb`)

|      % | Samples | Location                                                                                      |
| -----: | ------: | --------------------------------------------------------------------------------------------- |
| 100.0% |       9 | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb:1444` |

##### `block in scrub!` (`../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`)

|      % | Samples | Location                                                              |
| -----: | ------: | --------------------------------------------------------------------- |
| 100.0% |       8 | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb:53` |

##### `Hash#initialize` (`<unknown>`)

|      % | Samples | Location |
| -----: | ------: | -------- |
| 100.0% |       1 | 39       |

##### `Time#initialize` (`<unknown>`)

|      % | Samples | Location |
| -----: | ------: | -------- |
| 100.0% |       1 | 453      |

##### `ActionController::Metal#session` (`<unknown>`)

|      % | Samples | Location |
| -----: | ------: | -------- |
| 100.0% |       1 | 176      |

##### `ActionDispatch::ParamBuilder.from_pairs` (`<unknown>`)

|      % | Samples | Location |
| -----: | ------: | -------- |
| 100.0% |       1 | 23       |

##### `ActionController::Base::HelperMethods#form_authenticity_token` (`<unknown>`)

|      % | Samples | Location |
| -----: | ------: | -------- |
| 100.0% |       1 | 109      |

##### `ActionView::Base.default_formats` (`<unknown>`)

|      % | Samples | Location |
| -----: | ------: | -------- |
| 100.0% |       1 | 174      |

##### `ActionController::Base#__callbacks` (`<unknown>`)

|      % | Samples | Location |
| -----: | ------: | -------- |
| 100.0% |       1 | 70       |

##### `Dir.[]` (`<unknown>`)

|      % | Samples | Location |
| -----: | ------: | -------- |
| 100.0% |       1 | 224      |

##### `Dir.glob` (`<unknown>`)

|      % | Samples | Location |
| -----: | ------: | -------- |
| 100.0% |       1 | 413      |

##### `ActiveSupport::NumberHelper::NumberConverter.validate_float` (`<unknown>`)

|      % | Samples | Location |
| -----: | ------: | -------- |
| 100.0% |       1 | 17       |

### Total samples

Functions ranked by total samples taken in the function and all its callees. Calls within a recursion cycle are excluded from totals, since they re-count the same work.

|     % | Samples | Function                               | Location                                                                                            |
| ----: | ------: | -------------------------------------- | --------------------------------------------------------------------------------------------------- |
| 99.9% |   1,550 | `<main>`                               | `profile.rb`                                                                                        |
| 95.0% |   1,474 | `Rails::Engine#call`                   | `../../usr/local/bundle/gems/railties-8.1.3.1/lib/rails/engine.rb`                                  |
| 94.9% |   1,472 | `ActionDispatch::AssumeSSL#call`       | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/assume_ssl.rb`       |
| 94.9% |   1,472 | `ActionDispatch::SSL#call`             | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/ssl.rb`              |
| 94.8% |   1,471 | `Rack::Sendfile#call`                  | `../../usr/local/bundle/gems/rack-3.2.7/lib/rack/sendfile.rb`                                       |
| 94.8% |   1,471 | `ActionDispatch::Static#call`          | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/static.rb`           |
| 94.5% |   1,466 | `ActionDispatch::Executor#call`        | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/executor.rb`         |
| 94.5% |   1,466 | `Rack::Runtime#call`                   | `../../usr/local/bundle/gems/rack-3.2.7/lib/rack/runtime.rb`                                        |
| 94.5% |   1,465 | `ActionDispatch::RequestId#call`       | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/request_id.rb`       |
| 94.5% |   1,465 | `Rack::MethodOverride#call`            | `../../usr/local/bundle/gems/rack-3.2.7/lib/rack/method_override.rb`                                |
| 94.4% |   1,464 | `ActionDispatch::RemoteIp#call`        | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/remote_ip.rb`        |
| 94.4% |   1,464 | `Rails::Rack::SilenceRequest#call`     | `../../usr/local/bundle/gems/railties-8.1.3.1/lib/rails/rack/silence_request.rb`                    |
| 94.4% |   1,464 | `Rails::Rack::Logger#call`             | `../../usr/local/bundle/gems/railties-8.1.3.1/lib/rails/rack/logger.rb`                             |
| 94.3% |   1,463 | `Rails::Rack::Logger#call_app`         | `../../usr/local/bundle/gems/railties-8.1.3.1/lib/rails/rack/logger.rb`                             |
| 94.3% |   1,462 | `ActionDispatch::Callbacks#call`       | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/callbacks.rb`        |
| 94.3% |   1,462 | `ActionDispatch::DebugExceptions#call` | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/debug_exceptions.rb` |
| 94.3% |   1,462 | `ActionDispatch::ShowExceptions#call`  | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/show_exceptions.rb`  |
|  8.6% |     134 | `Array#each`                           | `<unknown>`                                                                                         |
|  8.0% |     124 | `Kernel#extend [c function]`           | `<unknown>`                                                                                         |
|  7.7% |     119 | `Module#extend_object [c function]`    | `<unknown>`                                                                                         |

#### Categories

##### Native

|    % | Samples | Function                                                   | Location    |
| ---: | ------: | ---------------------------------------------------------- | ----------- |
| 8.0% |     124 | `Kernel#extend [c function]`                               | `<unknown>` |
| 7.7% |     119 | `Module#extend_object [c function]`                        | `<unknown>` |
| 4.8% |      75 | `Digest::Base#<< [c function]`                             | `<unknown>` |
| 4.8% |      74 | `Nokogiri::HTML4::Document.new [c function]`               | `<unknown>` |
| 3.9% |      60 | `Nokogiri::Gumbo.fragment [c function]`                    | `<unknown>` |
| 3.1% |      48 | `Nokogiri::XML::Node#html_standard_serialize [c function]` | `<unknown>` |
| 2.6% |      41 | `Kernel#dup [c function]`                                  | `<unknown>` |
| 2.5% |      39 | `Class#new [c function]`                                   | `<unknown>` |
| 2.2% |      34 | `String.new [c function]`                                  | `<unknown>` |
| 2.1% |      33 | `String#gsub! [c function]`                                | `<unknown>` |
| 2.0% |      31 | `Hash#merge [c function]`                                  | `<unknown>` |
| 2.0% |      31 | `String#gsub [c function]`                                 | `<unknown>` |
| 1.8% |      28 | `Nokogiri::XML::Node#children [c function]`                | `<unknown>` |
| 1.7% |      27 | `Kernel.require [c function]`                              | `<unknown>` |
| 1.4% |      22 | `String#split [c function]`                                | `<unknown>` |
| 1.4% |      22 | `String#encode [c function]`                               | `<unknown>` |
| 1.1% |      17 | `Hash#each [c function]`                                   | `<unknown>` |
| 0.8% |      13 | `Hash#each_pair [c function]`                              | `<unknown>` |
| 0.8% |      12 | `Array#join [c function]`                                  | `<unknown>` |
| 0.8% |      12 | `Kernel#lambda [c function]`                               | `<unknown>` |

##### Third-party

|     % | Samples | Function                                           | Location                                                                                            |
| ----: | ------: | -------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| 95.0% |   1,474 | `Rails::Engine#call`                               | `../../usr/local/bundle/gems/railties-8.1.3.1/lib/rails/engine.rb`                                  |
| 94.9% |   1,472 | `ActionDispatch::AssumeSSL#call`                   | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/assume_ssl.rb`       |
| 94.9% |   1,472 | `ActionDispatch::SSL#call`                         | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/ssl.rb`              |
| 94.8% |   1,471 | `Rack::Sendfile#call`                              | `../../usr/local/bundle/gems/rack-3.2.7/lib/rack/sendfile.rb`                                       |
| 94.8% |   1,471 | `ActionDispatch::Static#call`                      | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/static.rb`           |
| 94.5% |   1,466 | `ActionDispatch::Executor#call`                    | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/executor.rb`         |
| 94.5% |   1,466 | `Rack::Runtime#call`                               | `../../usr/local/bundle/gems/rack-3.2.7/lib/rack/runtime.rb`                                        |
| 94.5% |   1,465 | `ActionDispatch::RequestId#call`                   | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/request_id.rb`       |
| 94.5% |   1,465 | `Rack::MethodOverride#call`                        | `../../usr/local/bundle/gems/rack-3.2.7/lib/rack/method_override.rb`                                |
| 94.4% |   1,464 | `ActionDispatch::RemoteIp#call`                    | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/remote_ip.rb`        |
| 94.4% |   1,464 | `Rails::Rack::SilenceRequest#call`                 | `../../usr/local/bundle/gems/railties-8.1.3.1/lib/rails/rack/silence_request.rb`                    |
| 94.4% |   1,464 | `Rails::Rack::Logger#call`                         | `../../usr/local/bundle/gems/railties-8.1.3.1/lib/rails/rack/logger.rb`                             |
| 94.3% |   1,463 | `Rails::Rack::Logger#call_app`                     | `../../usr/local/bundle/gems/railties-8.1.3.1/lib/rails/rack/logger.rb`                             |
| 94.3% |   1,462 | `ActionDispatch::Callbacks#call`                   | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/callbacks.rb`        |
| 94.3% |   1,462 | `ActionDispatch::DebugExceptions#call`             | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/debug_exceptions.rb` |
| 94.3% |   1,462 | `ActionDispatch::ShowExceptions#call`              | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/show_exceptions.rb`  |
|  6.6% |     103 | `Nokogiri::HTML5::Node#write_to`                   | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/node.rb`          |
|  5.4% |      83 | `Loofah::HtmlFragmentBehavior::ClassMethods#parse` | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`                                  |
|  4.8% |      75 | `block in digest_body`                             | `../../usr/local/bundle/gems/rack-3.2.7/lib/rack/etag.rb`                                           |
|  4.3% |      67 | `Rails::HTML::PermitScrubber#scrub_attribute`      | `../../usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`                |

##### Unknown

|    % | Samples | Function                                                                                     | Location    |
| ---: | ------: | -------------------------------------------------------------------------------------------- | ----------- |
| 8.6% |     134 | `Array#each`                                                                                 | `<unknown>` |
| 4.3% |      66 | `block in _app_views_statuses_index_html_erb___729550187891421473_3112`                      | `<unknown>` |
| 0.4% |       6 | `Array#map`                                                                                  | `<unknown>` |
| 0.4% |       6 | `I18n::Base#default_separator`                                                               | `<unknown>` |
| 0.1% |       2 | `#<Class:0xffff781257a0>#_app_views_layouts_application_html_erb___2051837960334105314_3144` | `<unknown>` |
| 0.1% |       2 | `ActiveSupport::NumberHelper::NumberConverter#validate_float?`                               | `<unknown>` |
| 0.1% |       2 | `ActiveSupport::NumberHelper::NumberConverter#validate_float`                                | `<unknown>` |
| 0.1% |       2 | `ActiveSupport::NumberHelper::NumberConverter.validate_float`                                | `<unknown>` |
| 0.1% |       1 | `Hash#initialize`                                                                            | `<unknown>` |
| 0.1% |       1 | `Time#initialize`                                                                            | `<unknown>` |
| 0.1% |       1 | `#<Class:0xffff781257a0>#_app_views_statuses_index_html_erb___729550187891421473_3112`       | `<unknown>` |
| 0.1% |       1 | `ActionController::Metal#content_type=`                                                      | `<unknown>` |
| 0.1% |       1 | `ActionController::Metal#session`                                                            | `<unknown>` |
| 0.1% |       1 | `ActionDispatch::ParamBuilder.from_pairs`                                                    | `<unknown>` |
| 0.1% |       1 | `Kernel#tap`                                                                                 | `<unknown>` |
| 0.1% |       1 | `ActionController::Base::HelperMethods#form_authenticity_token`                              | `<unknown>` |
| 0.1% |       1 | `ActionController::Base::HelperMethods#protect_against_forgery?`                             | `<unknown>` |
| 0.1% |       1 | `ActionView::Base.default_formats`                                                           | `<unknown>` |
| 0.1% |       1 | `ActiveSupport::TaggedLogging#push_tags`                                                     | `<unknown>` |
| 0.1% |       1 | `Array#select`                                                                               | `<unknown>` |

#### Callers

Callers ranked by the samples taken in each function and its callees during calls from that caller. Percentages are of the function's total and can exceed 100% for calls within a recursion cycle.

##### `Rails::Engine#call` (`../../usr/local/bundle/gems/railties-8.1.3.1/lib/rails/engine.rb`)

|      % | Samples | Calls | Caller   | Location     |
| -----: | ------: | ----: | -------- | ------------ |
| 100.0% |   1,474 |     9 | `<main>` | `profile.rb` |

##### `ActionDispatch::AssumeSSL#call` (`../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/assume_ssl.rb`)

|      % | Samples | Calls | Caller               | Location                                                           |
| -----: | ------: | ----: | -------------------- | ------------------------------------------------------------------ |
| 100.0% |   1,472 |    11 | `Rails::Engine#call` | `../../usr/local/bundle/gems/railties-8.1.3.1/lib/rails/engine.rb` |

##### `ActionDispatch::SSL#call` (`../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/ssl.rb`)

|      % | Samples | Calls | Caller                           | Location                                                                                      |
| -----: | ------: | ----: | -------------------------------- | --------------------------------------------------------------------------------------------- |
| 100.0% |   1,472 |    11 | `ActionDispatch::AssumeSSL#call` | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/assume_ssl.rb` |

##### `Rack::Sendfile#call` (`../../usr/local/bundle/gems/rack-3.2.7/lib/rack/sendfile.rb`)

|      % | Samples | Calls | Caller                     | Location                                                                               |
| -----: | ------: | ----: | -------------------------- | -------------------------------------------------------------------------------------- |
| 100.0% |   1,471 |    12 | `ActionDispatch::SSL#call` | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/ssl.rb` |

##### `ActionDispatch::Static#call` (`../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/static.rb`)

|      % | Samples | Calls | Caller                | Location                                                      |
| -----: | ------: | ----: | --------------------- | ------------------------------------------------------------- |
| 100.0% |   1,471 |    12 | `Rack::Sendfile#call` | `../../usr/local/bundle/gems/rack-3.2.7/lib/rack/sendfile.rb` |

##### `ActionDispatch::Executor#call` (`../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/executor.rb`)

|      % | Samples | Calls | Caller                        | Location                                                                                  |
| -----: | ------: | ----: | ----------------------------- | ----------------------------------------------------------------------------------------- |
| 100.0% |   1,466 |    16 | `ActionDispatch::Static#call` | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/static.rb` |

##### `Rack::Runtime#call` (`../../usr/local/bundle/gems/rack-3.2.7/lib/rack/runtime.rb`)

|      % | Samples | Calls | Caller                          | Location                                                                                    |
| -----: | ------: | ----: | ------------------------------- | ------------------------------------------------------------------------------------------- |
| 100.0% |   1,466 |    16 | `ActionDispatch::Executor#call` | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/executor.rb` |

##### `ActionDispatch::RequestId#call` (`../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/request_id.rb`)

|      % | Samples | Calls | Caller                      | Location                                                             |
| -----: | ------: | ----: | --------------------------- | -------------------------------------------------------------------- |
| 100.0% |   1,465 |    17 | `Rack::MethodOverride#call` | `../../usr/local/bundle/gems/rack-3.2.7/lib/rack/method_override.rb` |

##### `Rack::MethodOverride#call` (`../../usr/local/bundle/gems/rack-3.2.7/lib/rack/method_override.rb`)

|      % | Samples | Calls | Caller               | Location                                                     |
| -----: | ------: | ----: | -------------------- | ------------------------------------------------------------ |
| 100.0% |   1,465 |    17 | `Rack::Runtime#call` | `../../usr/local/bundle/gems/rack-3.2.7/lib/rack/runtime.rb` |

##### `ActionDispatch::RemoteIp#call` (`../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/remote_ip.rb`)

|      % | Samples | Calls | Caller                           | Location                                                                                      |
| -----: | ------: | ----: | -------------------------------- | --------------------------------------------------------------------------------------------- |
| 100.0% |   1,464 |    18 | `ActionDispatch::RequestId#call` | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/request_id.rb` |

##### `Rails::Rack::SilenceRequest#call` (`../../usr/local/bundle/gems/railties-8.1.3.1/lib/rails/rack/silence_request.rb`)

|      % | Samples | Calls | Caller                          | Location                                                                                     |
| -----: | ------: | ----: | ------------------------------- | -------------------------------------------------------------------------------------------- |
| 100.0% |   1,464 |    18 | `ActionDispatch::RemoteIp#call` | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/remote_ip.rb` |

##### `Rails::Rack::Logger#call` (`../../usr/local/bundle/gems/railties-8.1.3.1/lib/rails/rack/logger.rb`)

|      % | Samples | Calls | Caller                             | Location                                                                         |
| -----: | ------: | ----: | ---------------------------------- | -------------------------------------------------------------------------------- |
| 100.0% |   1,464 |    18 | `Rails::Rack::SilenceRequest#call` | `../../usr/local/bundle/gems/railties-8.1.3.1/lib/rails/rack/silence_request.rb` |

##### `Rails::Rack::Logger#call_app` (`../../usr/local/bundle/gems/railties-8.1.3.1/lib/rails/rack/logger.rb`)

|      % | Samples | Calls | Caller                     | Location                                                                |
| -----: | ------: | ----: | -------------------------- | ----------------------------------------------------------------------- |
| 100.0% |   1,463 |    19 | `Rails::Rack::Logger#call` | `../../usr/local/bundle/gems/railties-8.1.3.1/lib/rails/rack/logger.rb` |

##### `ActionDispatch::Callbacks#call` (`../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/callbacks.rb`)

|      % | Samples | Calls | Caller                                 | Location                                                                                            |
| -----: | ------: | ----: | -------------------------------------- | --------------------------------------------------------------------------------------------------- |
| 100.0% |   1,462 |    19 | `ActionDispatch::DebugExceptions#call` | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/debug_exceptions.rb` |

##### `ActionDispatch::DebugExceptions#call` (`../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/debug_exceptions.rb`)

|      % | Samples | Calls | Caller                                | Location                                                                                           |
| -----: | ------: | ----: | ------------------------------------- | -------------------------------------------------------------------------------------------------- |
| 100.0% |   1,462 |    19 | `ActionDispatch::ShowExceptions#call` | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/show_exceptions.rb` |

##### `ActionDispatch::ShowExceptions#call` (`../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/show_exceptions.rb`)

|      % | Samples | Calls | Caller                         | Location                                                                |
| -----: | ------: | ----: | ------------------------------ | ----------------------------------------------------------------------- |
| 100.0% |   1,462 |    19 | `Rails::Rack::Logger#call_app` | `../../usr/local/bundle/gems/railties-8.1.3.1/lib/rails/rack/logger.rb` |

##### `Array#each` (`<unknown>`)

|       % | Samples | Calls | Caller                                                                                 | Location                                                                                     |
| ------: | ------: | ----: | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| 1017.9% |   1,364 |    88 | `ActionDispatch::Journey::Router#recognize`                                            | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/journey/router.rb`       |
|  964.2% |   1,292 |   130 | `#<Class:0xffff781257a0>#_app_views_statuses_index_html_erb___729550187891421473_3112` | `<unknown>`                                                                                  |
|   94.8% |     127 |   125 | `block in decorate`                                                                    | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb` |
|   77.6% |     104 |    99 | `Rails::HTML::PermitScrubber#scrub_attributes`                                         | `../../usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`         |
|   56.0% |      75 |    58 | `Rack::ETag#digest_body`                                                               | `../../usr/local/bundle/gems/rack-3.2.7/lib/rack/etag.rb`                                    |

##### `Kernel#extend [c function]` (`<unknown>`)

|      % | Samples | Calls | Caller                         | Location                                                                                     |
| -----: | ------: | ----: | ------------------------------ | -------------------------------------------------------------------------------------------- |
| 100.0% |     124 |   122 | `block (2 levels) in decorate` | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb` |
|   0.8% |       1 |     1 | `Kernel.require [c function]`  | `<unknown>`                                                                                  |

##### `Module#extend_object [c function]` (`<unknown>`)

|      % | Samples | Calls | Caller                       | Location    |
| -----: | ------: | ----: | ---------------------------- | ----------- |
| 100.0% |     119 |   117 | `Kernel#extend [c function]` | `<unknown>` |

##### `Nokogiri::HTML5::Node#write_to` (`../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/node.rb`)

|      % | Samples | Calls | Caller                          | Location                                                                                 |
| -----: | ------: | ----: | ------------------------------- | ---------------------------------------------------------------------------------------- |
| 102.9% |     106 |   100 | `Nokogiri::XML::Node#serialize` | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb` |

##### `Loofah::HtmlFragmentBehavior::ClassMethods#parse` (`../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`)

|      % | Samples | Calls | Caller                  | Location                                                  |
| -----: | ------: | ----: | ----------------------- | --------------------------------------------------------- |
| 283.1% |     235 |   200 | `Loofah.html5_fragment` | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah.rb` |

##### `Digest::Base#<< [c function]` (`<unknown>`)

|      % | Samples | Calls | Caller                 | Location                                                  |
| -----: | ------: | ----: | ---------------------- | --------------------------------------------------------- |
| 100.0% |      75 |    58 | `block in digest_body` | `../../usr/local/bundle/gems/rack-3.2.7/lib/rack/etag.rb` |

##### `block in digest_body` (`../../usr/local/bundle/gems/rack-3.2.7/lib/rack/etag.rb`)

|      % | Samples | Calls | Caller       | Location    |
| -----: | ------: | ----: | ------------ | ----------- |
| 100.0% |      75 |    58 | `Array#each` | `<unknown>` |

##### `Nokogiri::HTML4::Document.new [c function]` (`<unknown>`)

|      % | Samples | Calls | Caller                                             | Location                                                           |
| -----: | ------: | ----: | -------------------------------------------------- | ------------------------------------------------------------------ |
| 100.0% |      74 |    71 | `Loofah::HtmlFragmentBehavior::ClassMethods#parse` | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb` |

##### `Rails::HTML::PermitScrubber#scrub_attribute` (`../../usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`)

|      % | Samples | Calls | Caller                      | Location                                                                             |
| -----: | ------: | ----: | --------------------------- | ------------------------------------------------------------------------------------ |
| 140.3% |      94 |    91 | `block in scrub_attributes` | `../../usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb` |

##### `block in _app_views_statuses_index_html_erb___729550187891421473_3112` (`<unknown>`)

|       % | Samples | Calls | Caller       | Location    |
| ------: | ------: | ----: | ------------ | ----------- |
| 1957.6% |   1,292 |   130 | `Array#each` | `<unknown>` |

##### `Nokogiri::Gumbo.fragment [c function]` (`<unknown>`)

|      % | Samples | Calls | Caller                                         | Location                                                                                                |
| -----: | ------: | ----: | ---------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| 141.7% |      85 |    79 | `Nokogiri::HTML5::DocumentFragment#initialize` | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/document_fragment.rb` |

##### `Nokogiri::XML::Node#html_standard_serialize [c function]` (`<unknown>`)

|      % | Samples | Calls | Caller                           | Location                                                                                   |
| -----: | ------: | ----: | -------------------------------- | ------------------------------------------------------------------------------------------ |
| 100.0% |      48 |    47 | `Nokogiri::HTML5::Node#write_to` | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/node.rb` |

##### `Kernel#dup [c function]` (`<unknown>`)

|     % | Samples | Calls | Caller                                                                | Location                                                                                                 |
| ----: | ------: | ----: | --------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| 29.3% |      12 |    12 | `ActiveSupport::NumberHelper::NumberConverter#default_format_options` | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/number_helper/number_converter.rb` |
| 29.3% |      12 |    12 | `ActiveSupport::NumberHelper::NumberConverter#i18n_format_options`    | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/number_helper/number_converter.rb` |
| 22.0% |       9 |     9 | `ActionController::UrlFor#url_options`                                | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_controller/metal/url_for.rb`                  |
|  9.8% |       4 |     4 | `Rails::HTML::PermitScrubber#tags=`                                   | `../../usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`                     |
|  4.9% |       2 |     2 | `ActionDispatch::Journey::Format#evaluate`                            | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/journey/visitors.rb`                 |

##### `Class#new [c function]` (`<unknown>`)

|     % | Samples | Calls | Caller                                                       | Location                                                                                                   |
| ----: | ------: | ----: | ------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------- |
| 25.6% |      10 |    10 | `ActiveSupport::NumberHelper::NumberConverter.convert`       | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/number_helper/number_converter.rb`   |
| 12.8% |       5 |     5 | `ActionController::RequestForgeryProtection#csrf_token_hmac` | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_controller/metal/request_forgery_protection.rb` |
| 12.8% |       5 |     5 | `ActionDispatch::Cookies::ChainedCookieJars#encrypted`       | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/cookies.rb`                 |
|  7.7% |       3 |     3 | `Nokogiri::HTML5::Node#write_to`                             | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/node.rb`                 |
|  5.1% |       2 |     2 | `ActiveSupport::MessageEncryptor.key_len`                    | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/message_encryptor.rb`                |

##### `String.new [c function]` (`<unknown>`)

|     % | Samples | Calls | Caller                          | Location                                                                                                |
| ----: | ------: | ----: | ------------------------------- | ------------------------------------------------------------------------------------------------------- |
| 70.6% |      24 |    24 | `String#html_safe`              | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/core_ext/string/output_safety.rb` |
| 29.4% |      10 |    10 | `Nokogiri::XML::Node#serialize` | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb`                |

##### `String#gsub! [c function]` (`<unknown>`)

|     % | Samples | Calls | Caller                                                          | Location                                                                                                              |
| ----: | ------: | ----: | --------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| 45.5% |      15 |    15 | `Loofah::HTML5::Scrub.scrub_uri_attribute`                      | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`                                                 |
| 42.4% |      14 |    14 | `ActiveSupport::NumberHelper::NumberToDelimitedConverter#parts` | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/number_helper/number_to_delimited_converter.rb` |
|  6.1% |       2 |     2 | `ActiveSupport::JSON::Encoding::JSONGemCoderEncoder#encode`     | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/json/encoding.rb`                               |
|  6.1% |       2 |     2 | `URI.encode_www_form_component`                                 | `../../usr/local/bundle/gems/uri-1.1.1/lib/uri/common.rb`                                                             |

##### `Hash#merge [c function]` (`<unknown>`)

|     % | Samples | Calls | Caller                                                                                        | Location                                                                                                 |
| ----: | ------: | ----: | --------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| 71.0% |      22 |    22 | `I18n::Backend::Fallbacks#translate`                                                          | `../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/fallbacks.rb`                                  |
| 16.1% |       5 |     5 | `ActiveSupport::NumberHelper::NumberConverter#options`                                        | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/number_helper/number_converter.rb` |
| 12.9% |       4 |     4 | `ActionDispatch::Routing::RouteSet::NamedRouteCollection::UrlHelper::OptimizedUrlHelper#call` | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/routing/route_set.rb`                |

##### `String#gsub [c function]` (`<unknown>`)

|     % | Samples | Calls | Caller                                                              | Location                                                                                     |
| ----: | ------: | ----: | ------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| 48.4% |      15 |    15 | `Loofah::HTML5::Scrub.allowed_uri?`                                 | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`                        |
| 19.4% |       6 |     6 | `ActionDispatch::Journey::Router::Utils::UriEncoder#escape_segment` | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/journey/router/utils.rb` |
| 12.9% |       4 |     4 | `ActionDispatch::Journey::Router::Utils::UriEncoder#escape`         | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/journey/router/utils.rb` |
|  9.7% |       3 |     3 | `block in force_correct_attribute_escaping!`                        | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`                        |
|  6.5% |       2 |     2 | `Loofah::HTML5::Scrub.decode_numeric_character_references`          | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`                        |

##### `Nokogiri::XML::Node#children [c function]` (`<unknown>`)

|      % | Samples | Calls | Caller                                              | Location                                                                                              |
| -----: | ------: | ----: | --------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| 192.9% |      54 |    51 | `Loofah::ScrubBehavior::Node#scrub!`                | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`                                    |
| 185.7% |      52 |    51 | `Loofah::Scrubber#traverse_conditionally_bottom_up` | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/scrubber.rb`                                    |
|  75.0% |      21 |    21 | `Nokogiri::XML::DocumentFragment#to_html`           | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document_fragment.rb` |

##### `Kernel.require [c function]` (`<unknown>`)

|      % | Samples | Calls | Caller                                | Location                                         |
| -----: | ------: | ----: | ------------------------------------- | ------------------------------------------------ |
| 733.3% |     198 |    68 | `block (2 levels) in replace_require` | `../../usr/local/lib/ruby/3.4.0/bundled_gems.rb` |

##### `String#split [c function]` (`<unknown>`)

|     % | Samples | Calls | Caller                                                          | Location                                                                                                              |
| ----: | ------: | ----: | --------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| 50.0% |      11 |    11 | `ActiveSupport::NumberHelper::NumberToDelimitedConverter#parts` | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/number_helper/number_to_delimited_converter.rb` |
| 45.5% |      10 |    10 | `Loofah::HTML5::Scrub.scrub_uri_attribute`                      | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`                                                 |
|  4.5% |       1 |     1 | `Class#new [c function]`                                        | `<unknown>`                                                                                                           |

##### `String#encode [c function]` (`<unknown>`)

|      % | Samples | Calls | Caller                           | Location                                                                                   |
| -----: | ------: | ----: | -------------------------------- | ------------------------------------------------------------------------------------------ |
| 100.0% |      22 |    20 | `Nokogiri::HTML5::Node#write_to` | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/node.rb` |

##### `Hash#each [c function]` (`<unknown>`)

|       % | Samples | Calls | Caller                                              | Location                                                                                         |
| ------: | ------: | ----: | --------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 1047.1% |     178 |   175 | `Nokogiri::XML::Document#decorate`                  | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`     |
|   29.4% |       5 |     5 | `ActionDispatch::Cookies::CookieJar#write`          | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/cookies.rb`       |
|   17.6% |       3 |     1 | `block in eager_load`                               | `../../usr/local/bundle/gems/zeitwerk-2.8.3/lib/zeitwerk/loader/eager_load.rb`                   |
|    5.9% |       1 |     1 | `Nokogiri::EncodingHandler.install_default_aliases` | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/encoding_handler.rb` |

##### `Hash#each_pair [c function]` (`<unknown>`)

|      % | Samples | Calls | Caller                                                   | Location                                                                               |
| -----: | ------: | ----: | -------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| 100.0% |      13 |    13 | `ActionView::Helpers::TagHelper::TagBuilder#tag_options` | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/helpers/tag_helper.rb` |

##### `Array#join [c function]` (`<unknown>`)

|     % | Samples | Calls | Caller                                                            | Location                                                                                                              |
| ----: | ------: | ----: | ----------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| 66.7% |       8 |     8 | `Nokogiri::XML::NodeSet#to_html`                                  | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`                          |
| 16.7% |       2 |     2 | `ActionDispatch::Journey::Format#evaluate`                        | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/journey/visitors.rb`                              |
|  8.3% |       1 |     1 | `Rack::Response::Helpers#set_cookie`                              | `../../usr/local/bundle/gems/rack-3.2.7/lib/rack/response.rb`                                                         |
|  8.3% |       1 |     1 | `ActiveSupport::NumberHelper::NumberToDelimitedConverter#convert` | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/number_helper/number_to_delimited_converter.rb` |

##### `Kernel#lambda [c function]` (`<unknown>`)

|      % | Samples | Calls | Caller                           | Location                                                                                   |
| -----: | ------: | ----: | -------------------------------- | ------------------------------------------------------------------------------------------ |
| 100.0% |      12 |    11 | `Nokogiri::HTML5::Node#write_to` | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/node.rb` |

##### `Array#map` (`<unknown>`)

|     % | Samples | Calls | Caller                                                    | Location                                                                                     |
| ----: | ------: | ----: | --------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| 66.7% |       4 |     4 | `ActionView::Helpers::AssetTagHelper#stylesheet_link_tag` | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/helpers/asset_tag_helper.rb` |
| 33.3% |       2 |     2 | `Rack::Response::Helpers#set_cookie`                      | `../../usr/local/bundle/gems/rack-3.2.7/lib/rack/response.rb`                                |

##### `I18n::Base#default_separator` (`<unknown>`)

|      % | Samples | Calls | Caller                      | Location                                              |
| -----: | ------: | ----: | --------------------------- | ----------------------------------------------------- |
| 100.0% |       6 |     6 | `I18n::Base#normalize_keys` | `../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n.rb` |

##### `#<Class:0xffff781257a0>#_app_views_layouts_application_html_erb___2051837960334105314_3144` (`<unknown>`)

|       % | Samples | Calls | Caller                            | Location    |
| ------: | ------: | ----: | --------------------------------- | ----------- |
| 1250.0% |      25 |    24 | `Kernel#public_send [c function]` | `<unknown>` |

##### `ActiveSupport::NumberHelper::NumberConverter#validate_float?` (`<unknown>`)

|      % | Samples | Calls | Caller                                                 | Location                                                                                                 |
| -----: | ------: | ----: | ------------------------------------------------------ | -------------------------------------------------------------------------------------------------------- |
| 100.0% |       2 |     2 | `ActiveSupport::NumberHelper::NumberConverter#execute` | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/number_helper/number_converter.rb` |

##### `ActiveSupport::NumberHelper::NumberConverter#validate_float` (`<unknown>`)

|      % | Samples | Calls | Caller                                                         | Location    |
| -----: | ------: | ----: | -------------------------------------------------------------- | ----------- |
| 100.0% |       2 |     2 | `ActiveSupport::NumberHelper::NumberConverter#validate_float?` | `<unknown>` |

##### `ActiveSupport::NumberHelper::NumberConverter.validate_float` (`<unknown>`)

|      % | Samples | Calls | Caller                                                        | Location    |
| -----: | ------: | ----: | ------------------------------------------------------------- | ----------- |
| 100.0% |       2 |     2 | `ActiveSupport::NumberHelper::NumberConverter#validate_float` | `<unknown>` |

##### `Hash#initialize` (`<unknown>`)

|      % | Samples | Calls | Caller                   | Location    |
| -----: | ------: | ----: | ------------------------ | ----------- |
| 100.0% |       1 |     1 | `Class#new [c function]` | `<unknown>` |

##### `Time#initialize` (`<unknown>`)

|      % | Samples | Calls | Caller                   | Location    |
| -----: | ------: | ----: | ------------------------ | ----------- |
| 100.0% |       1 |     1 | `Class#new [c function]` | `<unknown>` |

##### `#<Class:0xffff781257a0>#_app_views_statuses_index_html_erb___729550187891421473_3112` (`<unknown>`)

|         % | Samples | Calls | Caller                            | Location    |
| --------: | ------: | ----: | --------------------------------- | ----------- |
| 129400.0% |   1,294 |   129 | `Kernel#public_send [c function]` | `<unknown>` |

##### `ActionController::Metal#content_type=` (`<unknown>`)

|      % | Samples | Calls | Caller                                                   | Location                                                                                  |
| -----: | ------: | ----: | -------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| 100.0% |       1 |     1 | `ActionController::Rendering#_set_rendered_content_type` | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_controller/metal/rendering.rb` |

##### `ActionController::Metal#session` (`<unknown>`)

|      % | Samples | Calls | Caller                                                                | Location                                                                                                   |
| -----: | ------: | ----: | --------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| 100.0% |       1 |     1 | `ActionController::RequestForgeryProtection#protect_against_forgery?` | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_controller/metal/request_forgery_protection.rb` |

##### `ActionDispatch::ParamBuilder.from_pairs` (`<unknown>`)

|      % | Samples | Calls | Caller                     | Location                                                                             |
| -----: | ------: | ----: | -------------------------- | ------------------------------------------------------------------------------------ |
| 100.0% |       1 |     1 | `block (2 levels) in POST` | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/http/request.rb` |

##### `Kernel#tap` (`<unknown>`)

|      % | Samples | Calls | Caller                     | Location                                                                               |
| -----: | ------: | ----: | -------------------------- | -------------------------------------------------------------------------------------- |
| 100.0% |       1 |     1 | `ActionDispatch::SSL#call` | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/ssl.rb` |

##### `ActionController::Base::HelperMethods#form_authenticity_token` (`<unknown>`)

|       % | Samples | Calls | Caller                                           | Location                                                                                |
| ------: | ------: | ----: | ------------------------------------------------ | --------------------------------------------------------------------------------------- |
| 1500.0% |      15 |    15 | `ActionView::Helpers::CsrfHelper#csrf_meta_tags` | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/helpers/csrf_helper.rb` |

##### `ActionController::Base::HelperMethods#protect_against_forgery?` (`<unknown>`)

|      % | Samples | Calls | Caller                                           | Location                                                                                |
| -----: | ------: | ----: | ------------------------------------------------ | --------------------------------------------------------------------------------------- |
| 100.0% |       1 |     1 | `ActionView::Helpers::CsrfHelper#csrf_meta_tags` | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/helpers/csrf_helper.rb` |

##### `ActionView::Base.default_formats` (`<unknown>`)

|      % | Samples | Calls | Caller                           | Location                                                                           |
| -----: | ------: | ----: | -------------------------------- | ---------------------------------------------------------------------------------- |
| 100.0% |       1 |     1 | `block in <class:LookupContext>` | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/lookup_context.rb` |

##### `ActiveSupport::TaggedLogging#push_tags` (`<unknown>`)

|      % | Samples | Calls | Caller                                          | Location                                                                                   |
| -----: | ------: | ----: | ----------------------------------------------- | ------------------------------------------------------------------------------------------ |
| 100.0% |       1 |     1 | `ActiveSupport::BroadcastLogger#method_missing` | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/broadcast_logger.rb` |

##### `Array#select` (`<unknown>`)

|      % | Samples | Calls | Caller                                          | Location                                                                                   |
| -----: | ------: | ----: | ----------------------------------------------- | ------------------------------------------------------------------------------------------ |
| 100.0% |       1 |     1 | `ActiveSupport::BroadcastLogger#method_missing` | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/broadcast_logger.rb` |

#### Callees

Callees ranked by contribution to each function's total samples. Percentages are of the function's total and can exceed 100% for calls within a recursion cycle.

##### `<main>` (`profile.rb`)

|     % | Samples | Calls | Callee                                 | Location                                                           |
| ----: | ------: | ----: | -------------------------------------- | ------------------------------------------------------------------ |
| 95.1% |   1,474 |     9 | `Rails::Engine#call`                   | `../../usr/local/bundle/gems/railties-8.1.3.1/lib/rails/engine.rb` |
|  4.4% |      68 |     1 | `Kernel#require_relative [c function]` | `<unknown>`                                                        |
|  0.5% |       7 |     7 | `Rack::BodyProxy#close`                | `../../usr/local/bundle/gems/rack-3.2.7/lib/rack/body_proxy.rb`    |

##### `Rails::Engine#call` (`../../usr/local/bundle/gems/railties-8.1.3.1/lib/rails/engine.rb`)

|     % | Samples | Calls | Callee                             | Location                                                                                      |
| ----: | ------: | ----: | ---------------------------------- | --------------------------------------------------------------------------------------------- |
| 99.9% |   1,472 |    11 | `ActionDispatch::AssumeSSL#call`   | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/assume_ssl.rb` |
|  0.1% |       2 |     2 | `Rails::Application#build_request` | `../../usr/local/bundle/gems/railties-8.1.3.1/lib/rails/application.rb`                       |

##### `ActionDispatch::AssumeSSL#call` (`../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/assume_ssl.rb`)

|      % | Samples | Calls | Callee                     | Location                                                                               |
| -----: | ------: | ----: | -------------------------- | -------------------------------------------------------------------------------------- |
| 100.0% |   1,472 |    11 | `ActionDispatch::SSL#call` | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/ssl.rb` |

##### `ActionDispatch::SSL#call` (`../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/ssl.rb`)

|     % | Samples | Calls | Callee                | Location                                                      |
| ----: | ------: | ----: | --------------------- | ------------------------------------------------------------- |
| 99.9% |   1,471 |    12 | `Rack::Sendfile#call` | `../../usr/local/bundle/gems/rack-3.2.7/lib/rack/sendfile.rb` |
|  0.1% |       1 |     1 | `Kernel#tap`          | `<unknown>`                                                   |

##### `Rack::Sendfile#call` (`../../usr/local/bundle/gems/rack-3.2.7/lib/rack/sendfile.rb`)

|      % | Samples | Calls | Callee                        | Location                                                                                  |
| -----: | ------: | ----: | ----------------------------- | ----------------------------------------------------------------------------------------- |
| 100.0% |   1,471 |    12 | `ActionDispatch::Static#call` | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/static.rb` |

##### `ActionDispatch::Static#call` (`../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/static.rb`)

|     % | Samples | Calls | Callee                                | Location                                                                                    |
| ----: | ------: | ----: | ------------------------------------- | ------------------------------------------------------------------------------------------- |
| 99.7% |   1,466 |    16 | `ActionDispatch::Executor#call`       | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/executor.rb` |
|  0.3% |       5 |     5 | `ActionDispatch::FileHandler#attempt` | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/static.rb`   |

##### `ActionDispatch::Executor#call` (`../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/executor.rb`)

|      % | Samples | Calls | Callee               | Location                                                     |
| -----: | ------: | ----: | -------------------- | ------------------------------------------------------------ |
| 100.0% |   1,466 |    16 | `Rack::Runtime#call` | `../../usr/local/bundle/gems/rack-3.2.7/lib/rack/runtime.rb` |

##### `Rack::Runtime#call` (`../../usr/local/bundle/gems/rack-3.2.7/lib/rack/runtime.rb`)

|     % | Samples | Calls | Callee                      | Location                                                             |
| ----: | ------: | ----: | --------------------------- | -------------------------------------------------------------------- |
| 99.9% |   1,465 |    17 | `Rack::MethodOverride#call` | `../../usr/local/bundle/gems/rack-3.2.7/lib/rack/method_override.rb` |
|  0.1% |       1 |     1 | `String#% [c function]`     | `<unknown>`                                                          |

##### `ActionDispatch::RequestId#call` (`../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/request_id.rb`)

|     % | Samples | Calls | Callee                                      | Location                                                                                      |
| ----: | ------: | ----: | ------------------------------------------- | --------------------------------------------------------------------------------------------- |
| 99.9% |   1,464 |    18 | `ActionDispatch::RemoteIp#call`             | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/remote_ip.rb`  |
|  0.1% |       1 |     1 | `ActionDispatch::RequestId#make_request_id` | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/request_id.rb` |

##### `Rack::MethodOverride#call` (`../../usr/local/bundle/gems/rack-3.2.7/lib/rack/method_override.rb`)

|      % | Samples | Calls | Callee                           | Location                                                                                      |
| -----: | ------: | ----: | -------------------------------- | --------------------------------------------------------------------------------------------- |
| 100.0% |   1,465 |    17 | `ActionDispatch::RequestId#call` | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/request_id.rb` |

##### `ActionDispatch::RemoteIp#call` (`../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/remote_ip.rb`)

|      % | Samples | Calls | Callee                             | Location                                                                         |
| -----: | ------: | ----: | ---------------------------------- | -------------------------------------------------------------------------------- |
| 100.0% |   1,464 |    18 | `Rails::Rack::SilenceRequest#call` | `../../usr/local/bundle/gems/railties-8.1.3.1/lib/rails/rack/silence_request.rb` |

##### `Rails::Rack::SilenceRequest#call` (`../../usr/local/bundle/gems/railties-8.1.3.1/lib/rails/rack/silence_request.rb`)

|      % | Samples | Calls | Callee                     | Location                                                                |
| -----: | ------: | ----: | -------------------------- | ----------------------------------------------------------------------- |
| 100.0% |   1,464 |    18 | `Rails::Rack::Logger#call` | `../../usr/local/bundle/gems/railties-8.1.3.1/lib/rails/rack/logger.rb` |

##### `Rails::Rack::Logger#call` (`../../usr/local/bundle/gems/railties-8.1.3.1/lib/rails/rack/logger.rb`)

|     % | Samples | Calls | Callee                                          | Location                                                                                   |
| ----: | ------: | ----: | ----------------------------------------------- | ------------------------------------------------------------------------------------------ |
| 99.9% |   1,463 |    19 | `Rails::Rack::Logger#call_app`                  | `../../usr/local/bundle/gems/railties-8.1.3.1/lib/rails/rack/logger.rb`                    |
|  0.1% |       1 |     1 | `ActiveSupport::BroadcastLogger#method_missing` | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/broadcast_logger.rb` |

##### `Rails::Rack::Logger#call_app` (`../../usr/local/bundle/gems/railties-8.1.3.1/lib/rails/rack/logger.rb`)

|     % | Samples | Calls | Callee                                | Location                                                                                           |
| ----: | ------: | ----: | ------------------------------------- | -------------------------------------------------------------------------------------------------- |
| 99.9% |   1,462 |    19 | `ActionDispatch::ShowExceptions#call` | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/show_exceptions.rb` |
|  0.1% |       1 |     1 | `ActiveSupport::BroadcastLogger#info` | `<unknown>`                                                                                        |

##### `ActionDispatch::Callbacks#call` (`../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/callbacks.rb`)

|      % | Samples | Calls | Callee                                   | Location                                                                            |
| -----: | ------: | ----: | ---------------------------------------- | ----------------------------------------------------------------------------------- |
| 100.0% |   1,462 |    19 | `ActiveSupport::Callbacks#run_callbacks` | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/callbacks.rb` |

##### `ActionDispatch::DebugExceptions#call` (`../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/debug_exceptions.rb`)

|      % | Samples | Calls | Callee                           | Location                                                                                     |
| -----: | ------: | ----: | -------------------------------- | -------------------------------------------------------------------------------------------- |
| 100.0% |   1,462 |    19 | `ActionDispatch::Callbacks#call` | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/callbacks.rb` |

##### `ActionDispatch::ShowExceptions#call` (`../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/show_exceptions.rb`)

|      % | Samples | Calls | Callee                                 | Location                                                                                            |
| -----: | ------: | ----: | -------------------------------------- | --------------------------------------------------------------------------------------------------- |
| 100.0% |   1,462 |    19 | `ActionDispatch::DebugExceptions#call` | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/debug_exceptions.rb` |

##### `Array#each` (`<unknown>`)

|       % | Samples | Calls | Callee                                                                  | Location                                                                                     |
| ------: | ------: | ----: | ----------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| 1017.9% |   1,364 |    88 | `block in recognize`                                                    | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/journey/router.rb`       |
|  964.2% |   1,292 |   130 | `block in _app_views_statuses_index_html_erb___729550187891421473_3112` | `<unknown>`                                                                                  |
|   93.3% |     125 |   123 | `block (2 levels) in decorate`                                          | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb` |
|   77.6% |     104 |    99 | `block in scrub_attributes`                                             | `../../usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`         |
|   56.0% |      75 |    58 | `block in digest_body`                                                  | `../../usr/local/bundle/gems/rack-3.2.7/lib/rack/etag.rb`                                    |

##### `Kernel#extend [c function]` (`<unknown>`)

|     % | Samples | Calls | Callee                                    | Location                                                                              |
| ----: | ------: | ----: | ----------------------------------------- | ------------------------------------------------------------------------------------- |
| 96.0% |     119 |   117 | `Module#extend_object [c function]`       | `<unknown>`                                                                           |
|  0.8% |       1 |     1 | `ActionView::Template::Handlers.extended` | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/template/handlers.rb` |

##### `Nokogiri::HTML5::Node#write_to` (`../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/node.rb`)

|     % | Samples | Calls | Callee                                                     | Location    |
| ----: | ------: | ----: | ---------------------------------------------------------- | ----------- |
| 46.6% |      48 |    47 | `Nokogiri::XML::Node#html_standard_serialize [c function]` | `<unknown>` |
| 21.4% |      22 |    20 | `String#encode [c function]`                               | `<unknown>` |
| 11.7% |      12 |    11 | `Kernel#lambda [c function]`                               | `<unknown>` |
|  3.9% |       4 |     4 | `IO::generic_writable#<< [c function]`                     | `<unknown>` |
|  2.9% |       3 |     3 | `Class#new [c function]`                                   | `<unknown>` |

##### `Loofah::HtmlFragmentBehavior::ClassMethods#parse` (`../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`)

|      % | Samples | Calls | Callee                                           | Location                                                                                              |
| -----: | ------: | ----: | ------------------------------------------------ | ----------------------------------------------------------------------------------------------------- |
| 183.1% |     152 |   142 | `Nokogiri::XML::DocumentFragment.new`            | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document_fragment.rb` |
|  89.2% |      74 |    71 | `Nokogiri::HTML4::Document.new [c function]`     | `<unknown>`                                                                                           |
|   2.4% |       2 |     2 | `Nokogiri::XML::Document#encoding= [c function]` | `<unknown>`                                                                                           |
|   2.4% |       2 |     2 | `String#encoding [c function]`                   | `<unknown>`                                                                                           |
|   1.2% |       1 |     1 | `Encoding#name [c function]`                     | `<unknown>`                                                                                           |

##### `block in digest_body` (`../../usr/local/bundle/gems/rack-3.2.7/lib/rack/etag.rb`)

|      % | Samples | Calls | Callee                         | Location    |
| -----: | ------: | ----: | ------------------------------ | ----------- |
| 100.0% |      75 |    58 | `Digest::Base#<< [c function]` | `<unknown>` |

##### `Nokogiri::HTML4::Document.new [c function]` (`<unknown>`)

|     % | Samples | Calls | Callee                                 | Location                                                           |
| ----: | ------: | ----: | -------------------------------------- | ------------------------------------------------------------------ |
| 32.4% |      24 |    23 | `Loofah::DocumentDecorator#initialize` | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb` |

##### `Rails::HTML::PermitScrubber#scrub_attribute` (`../../usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`)

|     % | Samples | Calls | Callee                                                   | Location                                                              |
| ----: | ------: | ----: | -------------------------------------------------------- | --------------------------------------------------------------------- |
| 80.6% |      54 |    53 | `Loofah::HTML5::Scrub.scrub_uri_attribute`               | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb` |
| 28.4% |      19 |    19 | `Loofah::HTML5::Scrub.force_correct_attribute_escaping!` | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb` |
| 11.9% |       8 |     8 | `Array#each`                                             | `<unknown>`                                                           |
|  6.0% |       4 |     4 | `Set#include?`                                           | `../../usr/local/lib/ruby/3.4.0/set.rb`                               |
|  4.5% |       3 |     3 | `Nokogiri::XML::Node#node_name [c function]`             | `<unknown>`                                                           |

##### `block in _app_views_statuses_index_html_erb___729550187891421473_3112` (`<unknown>`)

|       % | Samples | Calls | Callee                                                    | Location                                                                                    |
| ------: | ------: | ----: | --------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| 1289.4% |     851 |   342 | `ActionView::Helpers::SanitizeHelper#sanitize`            | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/helpers/sanitize_helper.rb` |
|  419.7% |     277 |   222 | `ActionView::Helpers::NumberHelper#number_with_delimiter` | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/helpers/number_helper.rb`   |
|   66.7% |      44 |    42 | `block in define_url_helper`                              | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/routing/route_set.rb`   |
|   60.6% |      40 |    39 | `ActionView::Helpers::UrlHelper#link_to`                  | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/helpers/url_helper.rb`      |
|   30.3% |      20 |    20 | `ActionView::OutputBuffer#<<`                             | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/buffers.rb`                 |

##### `Nokogiri::Gumbo.fragment [c function]` (`<unknown>`)

|     % | Samples | Calls | Callee                                             | Location    |
| ----: | ------: | ----: | -------------------------------------------------- | ----------- |
| 41.7% |      25 |    25 | `Nokogiri::XML::Node#internal_subset [c function]` | `<unknown>` |

##### `Kernel#dup [c function]` (`<unknown>`)

|     % | Samples | Calls | Callee                               | Location    |
| ----: | ------: | ----: | ------------------------------------ | ----------- |
| 17.1% |       7 |     7 | `Kernel#initialize_dup [c function]` | `<unknown>` |

##### `Class#new [c function]` (`<unknown>`)

|     % | Samples | Calls | Callee                                                              | Location                                                                                                 |
| ----: | ------: | ----: | ------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| 12.8% |       5 |     5 | `ActionDispatch::Cookies::EncryptedKeyRotatingCookieJar#initialize` | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/cookies.rb`               |
| 10.3% |       4 |     4 | `ActiveSupport::NumberHelper::NumberConverter#initialize`           | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/number_helper/number_converter.rb` |
| 10.3% |       4 |     4 | `block (3 levels) in <class:Digest>`                                | `../../usr/local/lib/ruby/3.4.0/openssl/digest.rb`                                                       |
|  7.7% |       3 |     3 | `OpenSSL::Cipher#initialize [c function]`                           | `<unknown>`                                                                                              |
|  5.1% |       2 |     2 | `ActionDispatch::Routing::UrlFor#initialize`                        | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/routing/url_for.rb`                  |

##### `String.new [c function]` (`<unknown>`)

|     % | Samples | Calls | Callee                                 | Location                                                                                                |
| ----: | ------: | ----: | -------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| 41.2% |      14 |    14 | `ActiveSupport::SafeBuffer#initialize` | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/core_ext/string/output_safety.rb` |

##### `String#gsub [c function]` (`<unknown>`)

|    % | Samples | Calls | Callee            | Location                                                                                     |
| ---: | ------: | ----: | ----------------- | -------------------------------------------------------------------------------------------- |
| 3.2% |       1 |     1 | `block in escape` | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/journey/router/utils.rb` |

##### `Nokogiri::XML::Node#children [c function]` (`<unknown>`)

|      % | Samples | Calls | Callee                             | Location                                                                                     |
| -----: | ------: | ----: | ---------------------------------- | -------------------------------------------------------------------------------------------- |
| 353.6% |      99 |    97 | `Nokogiri::XML::Document#decorate` | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb` |

##### `Kernel.require [c function]` (`<unknown>`)

|      % | Samples | Calls | Callee                                        | Location                                                                                  |
| -----: | ------: | ----: | --------------------------------------------- | ----------------------------------------------------------------------------------------- |
| 429.6% |     116 |    30 | `block (2 levels) in replace_require`         | `../../usr/local/lib/ruby/3.4.0/bundled_gems.rb`                                          |
| 107.4% |      29 |    17 | `Kernel#require`                              | `../../usr/local/bundle/gems/zeitwerk-2.8.3/lib/zeitwerk/core_ext/kernel.rb`              |
|  74.1% |      20 |     9 | `Kernel#require_relative [c function]`        | `<unknown>`                                                                               |
|   7.4% |       2 |     2 | `ActiveSupport::LazyLoadHooks#run_load_hooks` | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/lazy_load_hooks.rb` |
|   7.4% |       2 |     2 | `Rails::Railtie.config`                       | `<unknown>`                                                                               |

##### `Hash#each [c function]` (`<unknown>`)

|      % | Samples | Calls | Callee                             | Location                                                                                         |
| -----: | ------: | ----: | ---------------------------------- | ------------------------------------------------------------------------------------------------ |
| 982.4% |     167 |   164 | `block in decorate`                | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`     |
|  29.4% |       5 |     5 | `block in write`                   | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/cookies.rb`       |
|  17.6% |       3 |     1 | `block (2 levels) in eager_load`   | `../../usr/local/bundle/gems/zeitwerk-2.8.3/lib/zeitwerk/loader/eager_load.rb`                   |
|   5.9% |       1 |     1 | `block in install_default_aliases` | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/encoding_handler.rb` |

##### `Hash#each_pair [c function]` (`<unknown>`)

|      % | Samples | Calls | Callee                 | Location                                                                               |
| -----: | ------: | ----: | ---------------------- | -------------------------------------------------------------------------------------- |
| 100.0% |      13 |    13 | `block in tag_options` | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/helpers/tag_helper.rb` |

##### `Array#map` (`<unknown>`)

|     % | Samples | Calls | Callee                         | Location                                                                                     |
| ----: | ------: | ----: | ------------------------------ | -------------------------------------------------------------------------------------------- |
| 66.7% |       4 |     4 | `block in stylesheet_link_tag` | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/helpers/asset_tag_helper.rb` |
| 33.3% |       2 |     2 | `block in set_cookie_header`   | `../../usr/local/bundle/gems/rack-3.2.7/lib/rack/utils.rb`                                   |

##### `I18n::Base#default_separator` (`<unknown>`)

|     % | Samples | Calls | Callee                           | Location                                                     |
| ----: | ------: | ----: | -------------------------------- | ------------------------------------------------------------ |
| 83.3% |       5 |     5 | `I18n::Config#default_separator` | `../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n/config.rb` |
| 16.7% |       1 |     1 | `I18n::Base#config`              | `../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n.rb`        |

##### `#<Class:0xffff781257a0>#_app_views_layouts_application_html_erb___2051837960334105314_3144` (`<unknown>`)

|      % | Samples | Calls | Callee                                                    | Location                                                                                     |
| -----: | ------: | ----: | --------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| 850.0% |      17 |    17 | `ActionView::Helpers::CsrfHelper#csrf_meta_tags`          | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/helpers/csrf_helper.rb`      |
| 300.0% |       6 |     6 | `ActionView::Helpers::AssetTagHelper#stylesheet_link_tag` | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/helpers/asset_tag_helper.rb` |
| 100.0% |       2 |     2 | `ActionView::OutputBuffer#<<`                             | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/buffers.rb`                  |

##### `ActiveSupport::NumberHelper::NumberConverter#validate_float?` (`<unknown>`)

|      % | Samples | Calls | Callee                                                        | Location    |
| -----: | ------: | ----: | ------------------------------------------------------------- | ----------- |
| 100.0% |       2 |     2 | `ActiveSupport::NumberHelper::NumberConverter#validate_float` | `<unknown>` |

##### `ActiveSupport::NumberHelper::NumberConverter#validate_float` (`<unknown>`)

|      % | Samples | Calls | Callee                                                        | Location    |
| -----: | ------: | ----: | ------------------------------------------------------------- | ----------- |
| 100.0% |       2 |     2 | `ActiveSupport::NumberHelper::NumberConverter.validate_float` | `<unknown>` |

##### `ActiveSupport::NumberHelper::NumberConverter.validate_float` (`<unknown>`)

|     % | Samples | Calls | Callee              | Location                                                                                  |
| ----: | ------: | ----: | ------------------- | ----------------------------------------------------------------------------------------- |
| 50.0% |       1 |     1 | `block in redefine` | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/class_attribute.rb` |

##### `#<Class:0xffff781257a0>#_app_views_statuses_index_html_erb___729550187891421473_3112` (`<unknown>`)

|         % | Samples | Calls | Callee                                      | Location                                                                                |
| --------: | ------: | ----: | ------------------------------------------- | --------------------------------------------------------------------------------------- |
| 129200.0% |   1,292 |   130 | `Array#each`                                | `<unknown>`                                                                             |
|    100.0% |       1 |     1 | `ActionView::OutputBuffer#safe_concat`      | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/buffers.rb`             |
|    100.0% |       1 |     1 | `ActionView::Helpers::TextHelper#pluralize` | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/helpers/text_helper.rb` |

##### `ActionController::Metal#content_type=` (`<unknown>`)

|      % | Samples | Calls | Callee                                   | Location                                                                              |
| -----: | ------: | ----: | ---------------------------------------- | ------------------------------------------------------------------------------------- |
| 100.0% |       1 |     1 | `ActionDispatch::Response#content_type=` | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/http/response.rb` |

##### `Kernel#tap` (`<unknown>`)

|      % | Samples | Calls | Callee          | Location                                                                               |
| -----: | ------: | ----: | --------------- | -------------------------------------------------------------------------------------- |
| 100.0% |       1 |     1 | `block in call` | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/ssl.rb` |

##### `ActionController::Base::HelperMethods#form_authenticity_token` (`<unknown>`)

|       % | Samples | Calls | Callee                                                               | Location                                                                                                   |
| ------: | ------: | ----: | -------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| 1400.0% |      14 |    14 | `ActionController::RequestForgeryProtection#form_authenticity_token` | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_controller/metal/request_forgery_protection.rb` |

##### `ActionController::Base::HelperMethods#protect_against_forgery?` (`<unknown>`)

|      % | Samples | Calls | Callee                                                                | Location                                                                                                   |
| -----: | ------: | ----: | --------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| 100.0% |       1 |     1 | `ActionController::RequestForgeryProtection#protect_against_forgery?` | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_controller/metal/request_forgery_protection.rb` |

##### `ActiveSupport::TaggedLogging#push_tags` (`<unknown>`)

|      % | Samples | Calls | Callee                                              | Location                                                                                 |
| -----: | ------: | ----: | --------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% |       1 |     1 | `ActiveSupport::TaggedLogging::Formatter#push_tags` | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/tagged_logging.rb` |

##### `Array#select` (`<unknown>`)

|      % | Samples | Calls | Callee                    | Location                                                                                   |
| -----: | ------: | ----: | ------------------------- | ------------------------------------------------------------------------------------------ |
| 100.0% |       1 |     1 | `block in method_missing` | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/broadcast_logger.rb` |
