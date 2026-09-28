# Sampling profile

Collected 1,555 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Native           | 60.8% |     946 |
| Third-party      | 34.0% |     528 |
| Unknown          |  4.5% |      70 |
| Standard library |  0.7% |      11 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|    % | Samples | Function                                                               | Location                                                                                                            |
| ---: | ------: | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| 8.1% |     126 | `Module#extend_object [c function]`                                    | `<unknown>`                                                                                                         |
| 4.8% |      74 | `Nokogiri::Gumbo.fragment [c function]`                                | `<unknown>`                                                                                                         |
| 4.3% |      67 | `Digest::Base#<< [c function]`                                         | `<unknown>`                                                                                                         |
| 2.6% |      41 | `Nokogiri::XML::Node#html_standard_serialize [c function]`             | `<unknown>`                                                                                                         |
| 2.5% |      39 | `Nokogiri::HTML4::Document.new [c function]`                           | `<unknown>`                                                                                                         |
| 2.2% |      34 | `Hash#merge [c function]`                                              | `<unknown>`                                                                                                         |
| 2.2% |      34 | `block in _app_views_statuses_index_html_erb__328993190567029661_3128` | `<unknown>`                                                                                                         |
| 2.1% |      33 | `String#gsub [c function]`                                             | `<unknown>`                                                                                                         |
| 1.9% |      30 | `Kernel.require [c function]`                                          | `<unknown>`                                                                                                         |
| 1.8% |      28 | `String#encode [c function]`                                           | `<unknown>`                                                                                                         |
| 1.7% |      26 | `String.new [c function]`                                              | `<unknown>`                                                                                                         |
| 1.6% |      25 | `Kernel#dup [c function]`                                              | `<unknown>`                                                                                                         |
| 1.4% |      22 | `Nokogiri::XML::NodeSet#each`                                          | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`                        |
| 1.4% |      22 | `Nokogiri::XML::Node#children [c function]`                            | `<unknown>`                                                                                                         |
| 1.4% |      21 | `block in decorate`                                                    | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`                        |
| 1.3% |      20 | `Array#each`                                                           | `<unknown>`                                                                                                         |
| 1.3% |      20 | `ActiveSupport::NumberHelper::NumberConverter#i18n_format_options`     | `../../usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb`              |
| 1.2% |      19 | `Nokogiri::XML::Node#node_name [c function]`                           | `<unknown>`                                                                                                         |
| 1.2% |      19 | `Regexp#match? [c function]`                                           | `<unknown>`                                                                                                         |
| 1.2% |      19 | `ActiveSupport::NumberHelper::NumberToDelimitedConverter#parts`        | `../../usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_to_delimited_converter.rb` |

#### Categories

##### Native

|    % | Samples | Function                                                   | Location    |
| ---: | ------: | ---------------------------------------------------------- | ----------- |
| 8.1% |     126 | `Module#extend_object [c function]`                        | `<unknown>` |
| 4.8% |      74 | `Nokogiri::Gumbo.fragment [c function]`                    | `<unknown>` |
| 4.3% |      67 | `Digest::Base#<< [c function]`                             | `<unknown>` |
| 2.6% |      41 | `Nokogiri::XML::Node#html_standard_serialize [c function]` | `<unknown>` |
| 2.5% |      39 | `Nokogiri::HTML4::Document.new [c function]`               | `<unknown>` |
| 2.2% |      34 | `Hash#merge [c function]`                                  | `<unknown>` |
| 2.1% |      33 | `String#gsub [c function]`                                 | `<unknown>` |
| 1.9% |      30 | `Kernel.require [c function]`                              | `<unknown>` |
| 1.8% |      28 | `String#encode [c function]`                               | `<unknown>` |
| 1.7% |      26 | `String.new [c function]`                                  | `<unknown>` |
| 1.6% |      25 | `Kernel#dup [c function]`                                  | `<unknown>` |
| 1.4% |      22 | `Nokogiri::XML::Node#children [c function]`                | `<unknown>` |
| 1.2% |      19 | `Nokogiri::XML::Node#node_name [c function]`               | `<unknown>` |
| 1.2% |      19 | `Regexp#match? [c function]`                               | `<unknown>` |
| 1.2% |      18 | `String#gsub! [c function]`                                | `<unknown>` |
| 1.1% |      17 | `Array#join [c function]`                                  | `<unknown>` |
| 1.1% |      17 | `Hash#transform_keys [c function]`                         | `<unknown>` |
| 0.9% |      14 | `Class#new [c function]`                                   | `<unknown>` |
| 0.7% |      11 | `Hash#each [c function]`                                   | `<unknown>` |
| 0.6% |      10 | `Kernel#require_relative [c function]`                     | `<unknown>` |

##### Third-party

|    % | Samples | Function                                                           | Location                                                                                                            |
| ---: | ------: | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------- |
| 1.4% |      22 | `Nokogiri::XML::NodeSet#each`                                      | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`                        |
| 1.4% |      21 | `block in decorate`                                                | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`                        |
| 1.3% |      20 | `ActiveSupport::NumberHelper::NumberConverter#i18n_format_options` | `../../usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb`              |
| 1.2% |      19 | `ActiveSupport::NumberHelper::NumberToDelimitedConverter#parts`    | `../../usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_to_delimited_converter.rb` |
| 1.0% |      16 | `ActionView::OutputBuffer#<<`                                      | `../../usr/local/bundle/gems/actionview-8.1.4/lib/action_view/buffers.rb`                                           |
| 1.0% |      16 | `Loofah::Scrubber#traverse_conditionally_bottom_up`                | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/scrubber.rb`                                                  |
| 0.8% |      12 | `Nokogiri::XML::Document#decorate`                                 | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`                        |
| 0.8% |      12 | `Nokogiri::HTML5::Node#write_to`                                   | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/node.rb`                          |
| 0.7% |      11 | `Nokogiri::HTML5::DocumentFragment#initialize`                     | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/document_fragment.rb`             |
| 0.6% |      10 | `ActionView::Helpers::NumberHelper#number_with_delimiter`          | `../../usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/number_helper.rb`                             |
| 0.6% |      10 | `Nokogiri::XML::Document#decorators`                               | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`                        |
| 0.6% |      10 | `Loofah::HTML5::Scrub.cdata_needs_escaping?`                       | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`                                               |
| 0.6% |       9 | `Nokogiri::XML::DocumentFragment.new`                              | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document_fragment.rb`               |
| 0.6% |       9 | `Rails::HTML::PermitScrubber#skip_node?`                           | `../../usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`                                |
| 0.5% |       8 | `block in force_correct_attribute_escaping!`                       | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`                                               |
| 0.5% |       8 | `Nokogiri::XML::DocumentFragment#to_html`                          | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document_fragment.rb`               |
| 0.5% |       8 | `Rails::HTML::PermitScrubber#scrub_attribute`                      | `../../usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`                                |
| 0.5% |       8 | `block in scrub_attributes`                                        | `../../usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`                                |
| 0.5% |       7 | `block in each`                                                    | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`                        |
| 0.5% |       7 | `block (2 levels) in translate`                                    | `../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/fallbacks.rb`                                             |

##### Unknown

|    % | Samples | Function                                                               | Location    |
| ---: | ------: | ---------------------------------------------------------------------- | ----------- |
| 2.2% |      34 | `block in _app_views_statuses_index_html_erb__328993190567029661_3128` | `<unknown>` |
| 1.3% |      20 | `Array#each`                                                           | `<unknown>` |
| 0.2% |       3 | `ActiveSupport::NumberHelper::NumberConverter#namespace`               | `<unknown>` |
| 0.1% |       2 | `Time#initialize`                                                      | `<unknown>` |
| 0.1% |       2 | `ActionDispatch::Request.ignore_accept_header`                         | `<unknown>` |
| 0.1% |       1 | `ActionController::Base#allow_forgery_protection`                      | `<unknown>` |
| 0.1% |       1 | `ActionDispatch::Response.default_charset`                             | `<unknown>` |
| 0.1% |       1 | `ActionDispatch::Response.default_headers`                             | `<unknown>` |
| 0.1% |       1 | `Array#map`                                                            | `<unknown>` |
| 0.1% |       1 | `ActionController::Base.default_static_extension`                      | `<unknown>` |
| 0.1% |       1 | `ActionController::Base::HelperMethods#form_authenticity_token`        | `<unknown>` |
| 0.1% |       1 | `ActionController::Base::HelperMethods#protect_against_forgery?`       | `<unknown>` |
| 0.1% |       1 | `ActionView::Base.default_formats`                                     | `<unknown>` |
| 0.1% |       1 | `ActiveSupport::NumberHelper::NumberConverter.validate_float`          | `<unknown>` |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `block in _app_views_statuses_index_html_erb__328993190567029661_3128` (`<unknown>`)

|      % | Samples | Location |
| -----: | ------: | -------- |
| 100.0% |      34 | 29       |

##### `Nokogiri::XML::NodeSet#each` (`../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`)

|      % | Samples | Location                                                                                         |
| -----: | ------: | ------------------------------------------------------------------------------------------------ |
| 100.0% |      22 | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb:240` |

##### `block in decorate` (`../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`)

|      % | Samples | Location                                                                                         |
| -----: | ------: | ------------------------------------------------------------------------------------------------ |
| 100.0% |      21 | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb:417` |

##### `Array#each` (`<unknown>`)

|      % | Samples | Location |
| -----: | ------: | -------- |
| 100.0% |      20 | 231      |

##### `ActiveSupport::NumberHelper::NumberConverter#i18n_format_options` (`../../usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb`)

|      % | Samples | Location                                                                                                   |
| -----: | ------: | ---------------------------------------------------------------------------------------------------------- |
| 100.0% |      20 | `../../usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb:167` |

##### `ActiveSupport::NumberHelper::NumberToDelimitedConverter#parts` (`../../usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_to_delimited_converter.rb`)

|      % | Samples | Location                                                                                                               |
| -----: | ------: | ---------------------------------------------------------------------------------------------------------------------- |
| 100.0% |      19 | `../../usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_to_delimited_converter.rb:37` |

##### `ActionView::OutputBuffer#<<` (`../../usr/local/bundle/gems/actionview-8.1.4/lib/action_view/buffers.rb`)

|      % | Samples | Location                                                                     |
| -----: | ------: | ---------------------------------------------------------------------------- |
| 100.0% |      16 | `../../usr/local/bundle/gems/actionview-8.1.4/lib/action_view/buffers.rb:52` |

##### `Loofah::Scrubber#traverse_conditionally_bottom_up` (`../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/scrubber.rb`)

|      % | Samples | Location                                                               |
| -----: | ------: | ---------------------------------------------------------------------- |
| 100.0% |      16 | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/scrubber.rb:138` |

##### `Nokogiri::XML::Document#decorate` (`../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`)

|      % | Samples | Location                                                                                         |
| -----: | ------: | ------------------------------------------------------------------------------------------------ |
| 100.0% |      12 | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb:418` |

##### `Nokogiri::HTML5::Node#write_to` (`../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/node.rb`)

|      % | Samples | Location                                                                                      |
| -----: | ------: | --------------------------------------------------------------------------------------------- |
| 100.0% |      12 | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/node.rb:68` |

##### `Nokogiri::HTML5::DocumentFragment#initialize` (`../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/document_fragment.rb`)

|      % | Samples | Location                                                                                                    |
| -----: | ------: | ----------------------------------------------------------------------------------------------------------- |
| 100.0% |      11 | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/document_fragment.rb:167` |

##### `ActionView::Helpers::NumberHelper#number_with_delimiter` (`../../usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/number_helper.rb`)

|      % | Samples | Location                                                                                   |
| -----: | ------: | ------------------------------------------------------------------------------------------ |
| 100.0% |      10 | `../../usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/number_helper.rb:85` |

##### `Nokogiri::XML::Document#decorators` (`../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`)

|      % | Samples | Location                                                                                         |
| -----: | ------: | ------------------------------------------------------------------------------------------------ |
| 100.0% |      10 | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb:372` |

##### `Loofah::HTML5::Scrub.cdata_needs_escaping?` (`../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`)

|      % | Samples | Location                                                                  |
| -----: | ------: | ------------------------------------------------------------------------- |
| 100.0% |      10 | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb:264` |

##### `Nokogiri::XML::DocumentFragment.new` (`../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document_fragment.rb`)

|      % | Samples | Location                                                                                                 |
| -----: | ------: | -------------------------------------------------------------------------------------------------------- |
| 100.0% |       9 | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document_fragment.rb:46` |

##### `Rails::HTML::PermitScrubber#skip_node?` (`../../usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`)

|      % | Samples | Location                                                                                |
| -----: | ------: | --------------------------------------------------------------------------------------- |
| 100.0% |       9 | `../../usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb:89` |

##### `block in force_correct_attribute_escaping!` (`../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`)

|      % | Samples | Location                                                                  |
| -----: | ------: | ------------------------------------------------------------------------- |
| 100.0% |       8 | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb:258` |

##### `Nokogiri::XML::DocumentFragment#to_html` (`../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document_fragment.rb`)

|      % | Samples | Location                                                                                                  |
| -----: | ------: | --------------------------------------------------------------------------------------------------------- |
| 100.0% |       8 | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document_fragment.rb:145` |

##### `Rails::HTML::PermitScrubber#scrub_attribute` (`../../usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`)

|      % | Samples | Location                                                                                 |
| -----: | ------: | ---------------------------------------------------------------------------------------- |
| 100.0% |       8 | `../../usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb:182` |

##### `block in scrub_attributes` (`../../usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`)

|      % | Samples | Location                                                                                 |
| -----: | ------: | ---------------------------------------------------------------------------------------- |
| 100.0% |       8 | `../../usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb:120` |

##### `block in each` (`../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`)

|      % | Samples | Location                                                                                         |
| -----: | ------: | ------------------------------------------------------------------------------------------------ |
| 100.0% |       7 | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb:238` |

##### `block (2 levels) in translate` (`../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/fallbacks.rb`)

|      % | Samples | Location                                                                   |
| -----: | ------: | -------------------------------------------------------------------------- |
| 100.0% |       7 | `../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/fallbacks.rb:63` |

##### `ActiveSupport::NumberHelper::NumberConverter#namespace` (`<unknown>`)

|      % | Samples | Location |
| -----: | ------: | -------- |
| 100.0% |       3 | 14       |

##### `Time#initialize` (`<unknown>`)

|      % | Samples | Location |
| -----: | ------: | -------- |
| 100.0% |       2 | 453      |

##### `ActionDispatch::Request.ignore_accept_header` (`<unknown>`)

|      % | Samples | Location |
| -----: | ------: | -------- |
| 100.0% |       2 | 20       |

##### `ActionController::Base#allow_forgery_protection` (`<unknown>`)

|      % | Samples | Location |
| -----: | ------: | -------- |
| 100.0% |       1 | 86       |

##### `ActionDispatch::Response.default_charset` (`<unknown>`)

|      % | Samples | Location |
| -----: | ------: | -------- |
| 100.0% |       1 | 102      |

##### `ActionDispatch::Response.default_headers` (`<unknown>`)

|      % | Samples | Location |
| -----: | ------: | -------- |
| 100.0% |       1 | 103      |

##### `Array#map` (`<unknown>`)

|      % | Samples | Location |
| -----: | ------: | -------- |
| 100.0% |       1 | 251      |

##### `ActionController::Base.default_static_extension` (`<unknown>`)

|      % | Samples | Location |
| -----: | ------: | -------- |
| 100.0% |       1 | 35       |

##### `ActionController::Base::HelperMethods#form_authenticity_token` (`<unknown>`)

|      % | Samples | Location |
| -----: | ------: | -------- |
| 100.0% |       1 | 109      |

##### `ActionController::Base::HelperMethods#protect_against_forgery?` (`<unknown>`)

|      % | Samples | Location |
| -----: | ------: | -------- |
| 100.0% |       1 | 110      |

##### `ActionView::Base.default_formats` (`<unknown>`)

|      % | Samples | Location |
| -----: | ------: | -------- |
| 100.0% |       1 | 174      |

##### `ActiveSupport::NumberHelper::NumberConverter.validate_float` (`<unknown>`)

|      % | Samples | Location |
| -----: | ------: | -------- |
| 100.0% |       1 | 17       |

### Total samples

Functions ranked by total samples taken in the function and all its callees. Calls within a recursion cycle are excluded from totals, since they re-count the same work.

|     % | Samples | Function                               | Location                                                                                          |
| ----: | ------: | -------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 99.9% |   1,553 | `<main>`                               | `profile.rb`                                                                                      |
| 95.0% |   1,477 | `Rails::Engine#call`                   | `../../usr/local/bundle/gems/railties-8.1.4/lib/rails/engine.rb`                                  |
| 94.8% |   1,474 | `ActionDispatch::AssumeSSL#call`       | `../../usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/assume_ssl.rb`       |
| 94.8% |   1,474 | `ActionDispatch::SSL#call`             | `../../usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/ssl.rb`              |
| 94.6% |   1,471 | `Rack::Sendfile#call`                  | `../../usr/local/bundle/gems/rack-3.2.7/lib/rack/sendfile.rb`                                     |
| 94.6% |   1,471 | `ActionDispatch::Static#call`          | `../../usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/static.rb`           |
| 93.9% |   1,460 | `ActionDispatch::Executor#call`        | `../../usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/executor.rb`         |
| 93.9% |   1,460 | `Rack::Runtime#call`                   | `../../usr/local/bundle/gems/rack-3.2.7/lib/rack/runtime.rb`                                      |
| 93.8% |   1,459 | `ActionDispatch::RemoteIp#call`        | `../../usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/remote_ip.rb`        |
| 93.8% |   1,459 | `Rails::Rack::SilenceRequest#call`     | `../../usr/local/bundle/gems/railties-8.1.4/lib/rails/rack/silence_request.rb`                    |
| 93.8% |   1,459 | `ActionDispatch::RequestId#call`       | `../../usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/request_id.rb`       |
| 93.8% |   1,459 | `Rack::MethodOverride#call`            | `../../usr/local/bundle/gems/rack-3.2.7/lib/rack/method_override.rb`                              |
| 93.8% |   1,459 | `Rails::Rack::Logger#call`             | `../../usr/local/bundle/gems/railties-8.1.4/lib/rails/rack/logger.rb`                             |
| 93.8% |   1,458 | `Rails::Rack::Logger#call_app`         | `../../usr/local/bundle/gems/railties-8.1.4/lib/rails/rack/logger.rb`                             |
| 93.6% |   1,456 | `ActionDispatch::Callbacks#call`       | `../../usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/callbacks.rb`        |
| 93.6% |   1,456 | `ActionDispatch::DebugExceptions#call` | `../../usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/debug_exceptions.rb` |
| 93.6% |   1,456 | `ActionDispatch::ShowExceptions#call`  | `../../usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/show_exceptions.rb`  |
| 16.7% |     260 | `Array#each`                           | `<unknown>`                                                                                       |
|  8.4% |     131 | `Kernel#extend [c function]`           | `<unknown>`                                                                                       |
|  8.4% |     131 | `block (2 levels) in decorate`         | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`      |

#### Categories

##### Native

|    % | Samples | Function                                                   | Location    |
| ---: | ------: | ---------------------------------------------------------- | ----------- |
| 8.4% |     131 | `Kernel#extend [c function]`                               | `<unknown>` |
| 8.1% |     126 | `Module#extend_object [c function]`                        | `<unknown>` |
| 4.8% |      74 | `Nokogiri::Gumbo.fragment [c function]`                    | `<unknown>` |
| 4.3% |      67 | `Digest::Base#<< [c function]`                             | `<unknown>` |
| 3.7% |      58 | `Nokogiri::HTML4::Document.new [c function]`               | `<unknown>` |
| 2.6% |      41 | `Nokogiri::XML::Node#html_standard_serialize [c function]` | `<unknown>` |
| 2.5% |      39 | `Class#new [c function]`                                   | `<unknown>` |
| 2.4% |      38 | `Kernel#dup [c function]`                                  | `<unknown>` |
| 2.4% |      38 | `String#gsub [c function]`                                 | `<unknown>` |
| 2.2% |      34 | `Hash#merge [c function]`                                  | `<unknown>` |
| 2.2% |      34 | `String.new [c function]`                                  | `<unknown>` |
| 2.1% |      32 | `Kernel.require [c function]`                              | `<unknown>` |
| 1.8% |      28 | `String#encode [c function]`                               | `<unknown>` |
| 1.4% |      22 | `Hash#each_pair [c function]`                              | `<unknown>` |
| 1.4% |      22 | `Nokogiri::XML::Node#children [c function]`                | `<unknown>` |
| 1.2% |      19 | `Nokogiri::XML::Node#node_name [c function]`               | `<unknown>` |
| 1.2% |      19 | `Regexp#match? [c function]`                               | `<unknown>` |
| 1.2% |      18 | `String#gsub! [c function]`                                | `<unknown>` |
| 1.1% |      17 | `Array#join [c function]`                                  | `<unknown>` |
| 1.1% |      17 | `Hash#transform_keys [c function]`                         | `<unknown>` |

##### Third-party

|     % | Samples | Function                                      | Location                                                                                          |
| ----: | ------: | --------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 95.0% |   1,477 | `Rails::Engine#call`                          | `../../usr/local/bundle/gems/railties-8.1.4/lib/rails/engine.rb`                                  |
| 94.8% |   1,474 | `ActionDispatch::AssumeSSL#call`              | `../../usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/assume_ssl.rb`       |
| 94.8% |   1,474 | `ActionDispatch::SSL#call`                    | `../../usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/ssl.rb`              |
| 94.6% |   1,471 | `Rack::Sendfile#call`                         | `../../usr/local/bundle/gems/rack-3.2.7/lib/rack/sendfile.rb`                                     |
| 94.6% |   1,471 | `ActionDispatch::Static#call`                 | `../../usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/static.rb`           |
| 93.9% |   1,460 | `ActionDispatch::Executor#call`               | `../../usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/executor.rb`         |
| 93.9% |   1,460 | `Rack::Runtime#call`                          | `../../usr/local/bundle/gems/rack-3.2.7/lib/rack/runtime.rb`                                      |
| 93.8% |   1,459 | `ActionDispatch::RemoteIp#call`               | `../../usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/remote_ip.rb`        |
| 93.8% |   1,459 | `Rails::Rack::SilenceRequest#call`            | `../../usr/local/bundle/gems/railties-8.1.4/lib/rails/rack/silence_request.rb`                    |
| 93.8% |   1,459 | `ActionDispatch::RequestId#call`              | `../../usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/request_id.rb`       |
| 93.8% |   1,459 | `Rack::MethodOverride#call`                   | `../../usr/local/bundle/gems/rack-3.2.7/lib/rack/method_override.rb`                              |
| 93.8% |   1,459 | `Rails::Rack::Logger#call`                    | `../../usr/local/bundle/gems/railties-8.1.4/lib/rails/rack/logger.rb`                             |
| 93.8% |   1,458 | `Rails::Rack::Logger#call_app`                | `../../usr/local/bundle/gems/railties-8.1.4/lib/rails/rack/logger.rb`                             |
| 93.6% |   1,456 | `ActionDispatch::Callbacks#call`              | `../../usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/callbacks.rb`        |
| 93.6% |   1,456 | `ActionDispatch::DebugExceptions#call`        | `../../usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/debug_exceptions.rb` |
| 93.6% |   1,456 | `ActionDispatch::ShowExceptions#call`         | `../../usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/show_exceptions.rb`  |
|  8.4% |     131 | `block (2 levels) in decorate`                | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`      |
|  6.2% |      96 | `Nokogiri::HTML5::Node#write_to`              | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/node.rb`        |
|  4.8% |      74 | `Rails::HTML::PermitScrubber#scrub_attribute` | `../../usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`              |
|  4.3% |      67 | `block in digest_body`                        | `../../usr/local/bundle/gems/rack-3.2.7/lib/rack/etag.rb`                                         |

##### Unknown

|     % | Samples | Function                                                                                     | Location    |
| ----: | ------: | -------------------------------------------------------------------------------------------- | ----------- |
| 16.7% |     260 | `Array#each`                                                                                 | `<unknown>` |
|  6.6% |     102 | `block in _app_views_statuses_index_html_erb__328993190567029661_3128`                       | `<unknown>` |
|  0.6% |      10 | `Integer#times`                                                                              | `<unknown>` |
|  0.5% |       8 | `Array#map`                                                                                  | `<unknown>` |
|  0.3% |       5 | `#<Class:0xffff76d571d8>#_app_views_layouts_application_html_erb___4441820961383043729_3160` | `<unknown>` |
|  0.3% |       4 | `Kernel#tap`                                                                                 | `<unknown>` |
|  0.2% |       3 | `ActiveSupport::NumberHelper::NumberConverter#namespace`                                     | `<unknown>` |
|  0.1% |       2 | `Time#initialize`                                                                            | `<unknown>` |
|  0.1% |       2 | `ActionDispatch::Request.ignore_accept_header`                                               | `<unknown>` |
|  0.1% |       2 | `ActionController::Base::HelperMethods#protect_against_forgery?`                             | `<unknown>` |
|  0.1% |       2 | `ActiveSupport::NumberHelper::NumberConverter#validate_float?`                               | `<unknown>` |
|  0.1% |       2 | `ActiveSupport::NumberHelper::NumberConverter#validate_float`                                | `<unknown>` |
|  0.1% |       1 | `ActionController::Metal#content_type=`                                                      | `<unknown>` |
|  0.1% |       1 | `ActionController::Base#allow_forgery_protection`                                            | `<unknown>` |
|  0.1% |       1 | `ActionDispatch::Response.default_charset`                                                   | `<unknown>` |
|  0.1% |       1 | `ActionDispatch::Response.default_headers`                                                   | `<unknown>` |
|  0.1% |       1 | `ActionController::Base.default_static_extension`                                            | `<unknown>` |
|  0.1% |       1 | `ActionController::Base::HelperMethods#form_authenticity_token`                              | `<unknown>` |
|  0.1% |       1 | `StatusesController#_layout`                                                                 | `<unknown>` |
|  0.1% |       1 | `ActionView::Base.default_formats`                                                           | `<unknown>` |

#### Callers

Callers ranked by the samples taken in each function and its callees during calls from that caller. Percentages are of the function's total and can exceed 100% for calls within a recursion cycle.

##### `Rails::Engine#call` (`../../usr/local/bundle/gems/railties-8.1.4/lib/rails/engine.rb`)

|      % | Samples | Calls | Caller   | Location     |
| -----: | ------: | ----: | -------- | ------------ |
| 100.0% |   1,477 |     4 | `<main>` | `profile.rb` |

##### `ActionDispatch::AssumeSSL#call` (`../../usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/assume_ssl.rb`)

|      % | Samples | Calls | Caller               | Location                                                         |
| -----: | ------: | ----: | -------------------- | ---------------------------------------------------------------- |
| 100.0% |   1,474 |     7 | `Rails::Engine#call` | `../../usr/local/bundle/gems/railties-8.1.4/lib/rails/engine.rb` |

##### `ActionDispatch::SSL#call` (`../../usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/ssl.rb`)

|      % | Samples | Calls | Caller                           | Location                                                                                    |
| -----: | ------: | ----: | -------------------------------- | ------------------------------------------------------------------------------------------- |
| 100.0% |   1,474 |     7 | `ActionDispatch::AssumeSSL#call` | `../../usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/assume_ssl.rb` |

##### `Rack::Sendfile#call` (`../../usr/local/bundle/gems/rack-3.2.7/lib/rack/sendfile.rb`)

|      % | Samples | Calls | Caller                     | Location                                                                             |
| -----: | ------: | ----: | -------------------------- | ------------------------------------------------------------------------------------ |
| 100.0% |   1,471 |    10 | `ActionDispatch::SSL#call` | `../../usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/ssl.rb` |

##### `ActionDispatch::Static#call` (`../../usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/static.rb`)

|      % | Samples | Calls | Caller                | Location                                                      |
| -----: | ------: | ----: | --------------------- | ------------------------------------------------------------- |
| 100.0% |   1,471 |    10 | `Rack::Sendfile#call` | `../../usr/local/bundle/gems/rack-3.2.7/lib/rack/sendfile.rb` |

##### `ActionDispatch::Executor#call` (`../../usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/executor.rb`)

|      % | Samples | Calls | Caller                        | Location                                                                                |
| -----: | ------: | ----: | ----------------------------- | --------------------------------------------------------------------------------------- |
| 100.0% |   1,460 |    21 | `ActionDispatch::Static#call` | `../../usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/static.rb` |

##### `Rack::Runtime#call` (`../../usr/local/bundle/gems/rack-3.2.7/lib/rack/runtime.rb`)

|      % | Samples | Calls | Caller                          | Location                                                                                  |
| -----: | ------: | ----: | ------------------------------- | ----------------------------------------------------------------------------------------- |
| 100.0% |   1,460 |    21 | `ActionDispatch::Executor#call` | `../../usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/executor.rb` |

##### `ActionDispatch::RemoteIp#call` (`../../usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/remote_ip.rb`)

|      % | Samples | Calls | Caller                           | Location                                                                                    |
| -----: | ------: | ----: | -------------------------------- | ------------------------------------------------------------------------------------------- |
| 100.0% |   1,459 |    22 | `ActionDispatch::RequestId#call` | `../../usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/request_id.rb` |

##### `Rails::Rack::SilenceRequest#call` (`../../usr/local/bundle/gems/railties-8.1.4/lib/rails/rack/silence_request.rb`)

|      % | Samples | Calls | Caller                          | Location                                                                                   |
| -----: | ------: | ----: | ------------------------------- | ------------------------------------------------------------------------------------------ |
| 100.0% |   1,459 |    22 | `ActionDispatch::RemoteIp#call` | `../../usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/remote_ip.rb` |

##### `ActionDispatch::RequestId#call` (`../../usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/request_id.rb`)

|      % | Samples | Calls | Caller                      | Location                                                             |
| -----: | ------: | ----: | --------------------------- | -------------------------------------------------------------------- |
| 100.0% |   1,459 |    22 | `Rack::MethodOverride#call` | `../../usr/local/bundle/gems/rack-3.2.7/lib/rack/method_override.rb` |

##### `Rack::MethodOverride#call` (`../../usr/local/bundle/gems/rack-3.2.7/lib/rack/method_override.rb`)

|      % | Samples | Calls | Caller               | Location                                                     |
| -----: | ------: | ----: | -------------------- | ------------------------------------------------------------ |
| 100.0% |   1,459 |    22 | `Rack::Runtime#call` | `../../usr/local/bundle/gems/rack-3.2.7/lib/rack/runtime.rb` |

##### `Rails::Rack::Logger#call` (`../../usr/local/bundle/gems/railties-8.1.4/lib/rails/rack/logger.rb`)

|      % | Samples | Calls | Caller                             | Location                                                                       |
| -----: | ------: | ----: | ---------------------------------- | ------------------------------------------------------------------------------ |
| 100.0% |   1,459 |    22 | `Rails::Rack::SilenceRequest#call` | `../../usr/local/bundle/gems/railties-8.1.4/lib/rails/rack/silence_request.rb` |

##### `Rails::Rack::Logger#call_app` (`../../usr/local/bundle/gems/railties-8.1.4/lib/rails/rack/logger.rb`)

|      % | Samples | Calls | Caller                     | Location                                                              |
| -----: | ------: | ----: | -------------------------- | --------------------------------------------------------------------- |
| 100.0% |   1,458 |    23 | `Rails::Rack::Logger#call` | `../../usr/local/bundle/gems/railties-8.1.4/lib/rails/rack/logger.rb` |

##### `ActionDispatch::Callbacks#call` (`../../usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/callbacks.rb`)

|      % | Samples | Calls | Caller                                 | Location                                                                                          |
| -----: | ------: | ----: | -------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 100.0% |   1,456 |    24 | `ActionDispatch::DebugExceptions#call` | `../../usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/debug_exceptions.rb` |

##### `ActionDispatch::DebugExceptions#call` (`../../usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/debug_exceptions.rb`)

|      % | Samples | Calls | Caller                                | Location                                                                                         |
| -----: | ------: | ----: | ------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% |   1,456 |    24 | `ActionDispatch::ShowExceptions#call` | `../../usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/show_exceptions.rb` |

##### `ActionDispatch::ShowExceptions#call` (`../../usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/show_exceptions.rb`)

|      % | Samples | Calls | Caller                         | Location                                                              |
| -----: | ------: | ----: | ------------------------------ | --------------------------------------------------------------------- |
| 100.0% |   1,456 |    24 | `Rails::Rack::Logger#call_app` | `../../usr/local/bundle/gems/railties-8.1.4/lib/rails/rack/logger.rb` |

##### `Array#each` (`<unknown>`)

|      % | Samples | Calls | Caller                                                                                | Location                                                                                     |
| -----: | ------: | ----: | ------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| 526.2% |   1,368 |   101 | `ActionDispatch::Journey::Router#recognize`                                           | `../../usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router.rb`         |
| 490.4% |   1,275 |   169 | `#<Class:0xffff76d571d8>#_app_views_statuses_index_html_erb__328993190567029661_3128` | `<unknown>`                                                                                  |
|  51.5% |     134 |   131 | `block in decorate`                                                                   | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb` |
|  45.8% |     119 |   105 | `Rails::HTML::PermitScrubber#scrub_attributes`                                        | `../../usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`         |
|  25.8% |      67 |    63 | `Rack::ETag#digest_body`                                                              | `../../usr/local/bundle/gems/rack-3.2.7/lib/rack/etag.rb`                                    |

##### `Kernel#extend [c function]` (`<unknown>`)

|     % | Samples | Calls | Caller                         | Location                                                                                     |
| ----: | ------: | ----: | ------------------------------ | -------------------------------------------------------------------------------------------- |
| 98.5% |     129 |   127 | `block (2 levels) in decorate` | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb` |
|  1.5% |       2 |     2 | `Kernel.require [c function]`  | `<unknown>`                                                                                  |

##### `block (2 levels) in decorate` (`../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`)

|      % | Samples | Calls | Caller       | Location    |
| -----: | ------: | ----: | ------------ | ----------- |
| 100.0% |     131 |   128 | `Array#each` | `<unknown>` |

##### `Module#extend_object [c function]` (`<unknown>`)

|      % | Samples | Calls | Caller                       | Location    |
| -----: | ------: | ----: | ---------------------------- | ----------- |
| 100.0% |     126 |   125 | `Kernel#extend [c function]` | `<unknown>` |

##### `block in _app_views_statuses_index_html_erb__328993190567029661_3128` (`<unknown>`)

|       % | Samples | Calls | Caller       | Location    |
| ------: | ------: | ----: | ------------ | ----------- |
| 1250.0% |   1,275 |   169 | `Array#each` | `<unknown>` |

##### `Nokogiri::HTML5::Node#write_to` (`../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/node.rb`)

|      % | Samples | Calls | Caller                          | Location                                                                                 |
| -----: | ------: | ----: | ------------------------------- | ---------------------------------------------------------------------------------------- |
| 101.0% |      97 |    92 | `Nokogiri::XML::Node#serialize` | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb` |

##### `Nokogiri::Gumbo.fragment [c function]` (`<unknown>`)

|      % | Samples | Calls | Caller                                         | Location                                                                                                |
| -----: | ------: | ----: | ---------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| 135.1% |     100 |    94 | `Nokogiri::HTML5::DocumentFragment#initialize` | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/document_fragment.rb` |

##### `Rails::HTML::PermitScrubber#scrub_attribute` (`../../usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`)

|      % | Samples | Calls | Caller                      | Location                                                                             |
| -----: | ------: | ----: | --------------------------- | ------------------------------------------------------------------------------------ |
| 141.9% |     105 |    91 | `block in scrub_attributes` | `../../usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb` |

##### `Digest::Base#<< [c function]` (`<unknown>`)

|      % | Samples | Calls | Caller                 | Location                                                  |
| -----: | ------: | ----: | ---------------------- | --------------------------------------------------------- |
| 100.0% |      67 |    63 | `block in digest_body` | `../../usr/local/bundle/gems/rack-3.2.7/lib/rack/etag.rb` |

##### `block in digest_body` (`../../usr/local/bundle/gems/rack-3.2.7/lib/rack/etag.rb`)

|      % | Samples | Calls | Caller       | Location    |
| -----: | ------: | ----: | ------------ | ----------- |
| 100.0% |      67 |    63 | `Array#each` | `<unknown>` |

##### `Nokogiri::HTML4::Document.new [c function]` (`<unknown>`)

|      % | Samples | Calls | Caller                                             | Location                                                           |
| -----: | ------: | ----: | -------------------------------------------------- | ------------------------------------------------------------------ |
| 100.0% |      58 |    57 | `Loofah::HtmlFragmentBehavior::ClassMethods#parse` | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb` |

##### `Nokogiri::XML::Node#html_standard_serialize [c function]` (`<unknown>`)

|      % | Samples | Calls | Caller                           | Location                                                                                   |
| -----: | ------: | ----: | -------------------------------- | ------------------------------------------------------------------------------------------ |
| 100.0% |      41 |    40 | `Nokogiri::HTML5::Node#write_to` | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/node.rb` |

##### `Class#new [c function]` (`<unknown>`)

|     % | Samples | Calls | Caller                                                       | Location                                                                                                 |
| ----: | ------: | ----: | ------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------- |
| 35.9% |      14 |    14 | `ActiveSupport::NumberHelper::NumberConverter.convert`       | `../../usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb`   |
| 12.8% |       5 |     5 | `ActionDispatch::Response.create`                            | `../../usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/http/response.rb`                      |
| 12.8% |       5 |     5 | `ActionDispatch::Cookies::ChainedCookieJars#encrypted`       | `../../usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/cookies.rb`                 |
|  7.7% |       3 |     3 | `OpenSSL::HMAC.digest`                                       | `../../usr/local/lib/ruby/3.4.0/openssl/hmac.rb`                                                         |
|  5.1% |       2 |     2 | `ActionController::RequestForgeryProtection#csrf_token_hmac` | `../../usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/request_forgery_protection.rb` |

##### `Kernel#dup [c function]` (`<unknown>`)

|     % | Samples | Calls | Caller                                                                | Location                                                                                               |
| ----: | ------: | ----: | --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| 28.9% |      11 |    11 | `ActionController::UrlFor#url_options`                                | `../../usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/url_for.rb`                  |
| 26.3% |      10 |    10 | `ActiveSupport::NumberHelper::NumberConverter#default_format_options` | `../../usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb` |
| 23.7% |       9 |     9 | `ActiveSupport::NumberHelper::NumberConverter#i18n_format_options`    | `../../usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb` |
| 13.2% |       5 |     5 | `ActionDispatch::Journey::Format#evaluate`                            | `../../usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/visitors.rb`                 |
|  7.9% |       3 |     3 | `Rails::HTML::PermitScrubber#tags=`                                   | `../../usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`                   |

##### `String#gsub [c function]` (`<unknown>`)

|     % | Samples | Calls | Caller                                                              | Location                                                                                   |
| ----: | ------: | ----: | ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| 47.4% |      18 |    18 | `Loofah::HTML5::Scrub.allowed_uri?`                                 | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`                      |
| 18.4% |       7 |     7 | `ActionDispatch::Journey::Router::Utils::UriEncoder#escape_segment` | `../../usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router/utils.rb` |
| 18.4% |       7 |     7 | `ActionDispatch::Journey::Router::Utils::UriEncoder#escape`         | `../../usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router/utils.rb` |
|  5.3% |       2 |     2 | `Loofah::HTML5::Scrub.decode_numeric_character_references`          | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`                      |
|  5.3% |       2 |     2 | `Loofah::HTML5::Scrub.scrub_uri_attribute`                          | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`                      |

##### `Hash#merge [c function]` (`<unknown>`)

|     % | Samples | Calls | Caller                                                                                        | Location                                                                                               |
| ----: | ------: | ----: | --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| 64.7% |      22 |    21 | `I18n::Backend::Fallbacks#translate`                                                          | `../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/fallbacks.rb`                                |
| 20.6% |       7 |     7 | `ActiveSupport::NumberHelper::NumberConverter#options`                                        | `../../usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb` |
| 14.7% |       5 |     5 | `ActionDispatch::Routing::RouteSet::NamedRouteCollection::UrlHelper::OptimizedUrlHelper#call` | `../../usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb`                |

##### `String.new [c function]` (`<unknown>`)

|     % | Samples | Calls | Caller                          | Location                                                                                              |
| ----: | ------: | ----: | ------------------------------- | ----------------------------------------------------------------------------------------------------- |
| 52.9% |      18 |    17 | `String#html_safe`              | `../../usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/core_ext/string/output_safety.rb` |
| 47.1% |      16 |    16 | `Nokogiri::XML::Node#serialize` | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb`              |

##### `Kernel.require [c function]` (`<unknown>`)

|      % | Samples | Calls | Caller                                | Location                                         |
| -----: | ------: | ----: | ------------------------------------- | ------------------------------------------------ |
| 728.1% |     233 |    72 | `block (2 levels) in replace_require` | `../../usr/local/lib/ruby/3.4.0/bundled_gems.rb` |

##### `String#encode [c function]` (`<unknown>`)

|      % | Samples | Calls | Caller                           | Location                                                                                   |
| -----: | ------: | ----: | -------------------------------- | ------------------------------------------------------------------------------------------ |
| 100.0% |      28 |    28 | `Nokogiri::HTML5::Node#write_to` | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/node.rb` |

##### `Hash#each_pair [c function]` (`<unknown>`)

|     % | Samples | Calls | Caller                                                                 | Location                                                                                             |
| ----: | ------: | ----: | ---------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| 95.5% |      21 |    21 | `ActionView::Helpers::TagHelper::TagBuilder#tag_options`               | `../../usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/tag_helper.rb`                 |
|  4.5% |       1 |     1 | `ActiveSupport::HashWithIndifferentAccess#update_with_single_argument` | `../../usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/hash_with_indifferent_access.rb` |

##### `Nokogiri::XML::Node#children [c function]` (`<unknown>`)

|      % | Samples | Calls | Caller                                              | Location                                                                                              |
| -----: | ------: | ----: | --------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| 254.5% |      56 |    53 | `Loofah::Scrubber#traverse_conditionally_bottom_up` | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/scrubber.rb`                                    |
| 195.5% |      43 |    42 | `Loofah::ScrubBehavior::Node#scrub!`                | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`                                    |
|  77.3% |      17 |    16 | `Nokogiri::XML::DocumentFragment#to_html`           | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document_fragment.rb` |

##### `Nokogiri::XML::Node#node_name [c function]` (`<unknown>`)

|     % | Samples | Calls | Caller                                        | Location                                                                                 |
| ----: | ------: | ----: | --------------------------------------------- | ---------------------------------------------------------------------------------------- |
| 31.6% |       6 |     6 | `Rails::HTML::PermitScrubber#scrub_attribute` | `../../usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`     |
| 21.1% |       4 |     4 | `block in scrub_attributes`                   | `../../usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`     |
| 15.8% |       3 |     3 | `block in force_correct_attribute_escaping!`  | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`                    |
| 15.8% |       3 |     3 | `block in attributes`                         | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb` |
| 15.8% |       3 |     3 | `Rails::HTML::PermitScrubber#allowed_node?`   | `../../usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`     |

##### `Regexp#match? [c function]` (`<unknown>`)

|     % | Samples | Calls | Caller                                                       | Location                                                                                      |
| ----: | ------: | ----: | ------------------------------------------------------------ | --------------------------------------------------------------------------------------------- |
| 57.9% |      11 |    11 | `String#blank?`                                              | `../../usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/core_ext/object/blank.rb` |
| 26.3% |       5 |     5 | `ActionView::Helpers::TagHelper#ensure_valid_html5_tag_name` | `../../usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/tag_helper.rb`          |
| 10.5% |       2 |     2 | `Loofah::HTML5::Scrub.scrub_uri_attribute`                   | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`                         |
|  5.3% |       1 |     1 | `ActionDispatch::FileHandler#compressible?`                  | `../../usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/static.rb`       |

##### `String#gsub! [c function]` (`<unknown>`)

|     % | Samples | Calls | Caller                                     | Location                                                              |
| ----: | ------: | ----: | ------------------------------------------ | --------------------------------------------------------------------- |
| 88.9% |      16 |    16 | `Loofah::HTML5::Scrub.scrub_uri_attribute` | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb` |
| 11.1% |       2 |     2 | `URI.encode_www_form_component`            | `../../usr/local/bundle/gems/uri-1.1.1/lib/uri/common.rb`             |

##### `Array#join [c function]` (`<unknown>`)

|     % | Samples | Calls | Caller                                                            | Location                                                                                                            |
| ----: | ------: | ----: | ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| 29.4% |       5 |     5 | `Nokogiri::XML::NodeSet#to_html`                                  | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`                        |
| 23.5% |       4 |     4 | `ActiveSupport::NumberHelper::NumberToDelimitedConverter#convert` | `../../usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_to_delimited_converter.rb` |
| 23.5% |       4 |     4 | `ActiveSupport::NumberHelper::NumberToDelimitedConverter#parts`   | `../../usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_to_delimited_converter.rb` |
| 11.8% |       2 |     2 | `ActionDispatch::Journey::Format#evaluate`                        | `../../usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/visitors.rb`                              |
| 11.8% |       2 |     2 | `ActionView::Helpers::CsrfHelper#csrf_meta_tags`                  | `../../usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/csrf_helper.rb`                               |

##### `Hash#transform_keys [c function]` (`<unknown>`)

|      % | Samples | Calls | Caller                | Location                                                                                   |
| -----: | ------: | ----: | --------------------- | ------------------------------------------------------------------------------------------ |
| 100.0% |      17 |    17 | `Hash#symbolize_keys` | `../../usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/core_ext/hash/keys.rb` |

##### `Integer#times` (`<unknown>`)

|     % | Samples | Calls | Caller                                                                                                     | Location                                                                                |
| ----: | ------: | ----: | ---------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| 90.0% |       9 |     5 | `Enumerator#each [c function]`                                                                             | `<unknown>`                                                                             |
| 10.0% |       1 |     1 | `ActionDispatch::Routing::RouteSet::NamedRouteCollection::UrlHelper::OptimizedUrlHelper#parameterize_args` | `../../usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb` |

##### `Array#map` (`<unknown>`)

|     % | Samples | Calls | Caller                                                    | Location                                                                                   |
| ----: | ------: | ----: | --------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| 50.0% |       4 |     4 | `ActionView::Helpers::AssetTagHelper#stylesheet_link_tag` | `../../usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/asset_tag_helper.rb` |
| 25.0% |       2 |     2 | `Rack::Response::Helpers#set_cookie`                      | `../../usr/local/bundle/gems/rack-3.2.7/lib/rack/response.rb`                              |
| 12.5% |       1 |     1 | `ActionDispatch::SSL#flag_cookies_as_secure!`             | `../../usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/ssl.rb`       |
| 12.5% |       1 |     1 | `ActiveSupport::BroadcastLogger#dispatch`                 | `../../usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/broadcast_logger.rb`   |

##### `#<Class:0xffff76d571d8>#_app_views_layouts_application_html_erb___4441820961383043729_3160` (`<unknown>`)

|      % | Samples | Calls | Caller                            | Location    |
| -----: | ------: | ----: | --------------------------------- | ----------- |
| 780.0% |      39 |    37 | `Kernel#public_send [c function]` | `<unknown>` |

##### `Kernel#tap` (`<unknown>`)

|     % | Samples | Calls | Caller                                                       | Location                                                                                 |
| ----: | ------: | ----: | ------------------------------------------------------------ | ---------------------------------------------------------------------------------------- |
| 75.0% |       3 |     3 | `ActionDispatch::SSL#call`                                   | `../../usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/ssl.rb`     |
| 25.0% |       1 |     1 | `ActionDispatch::Cookies::AbstractCookieJar#cookie_metadata` | `../../usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/cookies.rb` |

##### `ActiveSupport::NumberHelper::NumberConverter#namespace` (`<unknown>`)

|     % | Samples | Calls | Caller                                                                | Location                                                                                               |
| ----: | ------: | ----: | --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| 66.7% |       2 |     2 | `ActiveSupport::NumberHelper::NumberConverter#i18n_format_options`    | `../../usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb` |
| 33.3% |       1 |     1 | `ActiveSupport::NumberHelper::NumberConverter#default_format_options` | `../../usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb` |

##### `Time#initialize` (`<unknown>`)

|      % | Samples | Calls | Caller                   | Location    |
| -----: | ------: | ----: | ------------------------ | ----------- |
| 100.0% |       2 |     2 | `Class#new [c function]` | `<unknown>` |

##### `ActionDispatch::Request.ignore_accept_header` (`<unknown>`)

|      % | Samples | Calls | Caller                                                    | Location                                                                                    |
| -----: | ------: | ----: | --------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| 100.0% |       2 |     2 | `ActionDispatch::Http::MimeNegotiation#use_accept_header` | `../../usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/http/mime_negotiation.rb` |

##### `ActionController::Base::HelperMethods#protect_against_forgery?` (`<unknown>`)

|      % | Samples | Calls | Caller                                           | Location                                                                              |
| -----: | ------: | ----: | ------------------------------------------------ | ------------------------------------------------------------------------------------- |
| 100.0% |       2 |     2 | `ActionView::Helpers::CsrfHelper#csrf_meta_tags` | `../../usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/csrf_helper.rb` |

##### `ActiveSupport::NumberHelper::NumberConverter#validate_float?` (`<unknown>`)

|      % | Samples | Calls | Caller                                                 | Location                                                                                               |
| -----: | ------: | ----: | ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| 100.0% |       2 |     2 | `ActiveSupport::NumberHelper::NumberConverter#execute` | `../../usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb` |

##### `ActiveSupport::NumberHelper::NumberConverter#validate_float` (`<unknown>`)

|      % | Samples | Calls | Caller                                                         | Location    |
| -----: | ------: | ----: | -------------------------------------------------------------- | ----------- |
| 100.0% |       2 |     2 | `ActiveSupport::NumberHelper::NumberConverter#validate_float?` | `<unknown>` |

##### `ActionController::Metal#content_type=` (`<unknown>`)

|      % | Samples | Calls | Caller                                                   | Location                                                                                |
| -----: | ------: | ----: | -------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| 100.0% |       1 |     1 | `ActionController::Rendering#_set_rendered_content_type` | `../../usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb` |

##### `ActionController::Base#allow_forgery_protection` (`<unknown>`)

|      % | Samples | Calls | Caller                                                                | Location                                                                                                 |
| -----: | ------: | ----: | --------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| 100.0% |       1 |     1 | `ActionController::RequestForgeryProtection#protect_against_forgery?` | `../../usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/request_forgery_protection.rb` |

##### `ActionDispatch::Response.default_charset` (`<unknown>`)

|      % | Samples | Calls | Caller                                   | Location                                                                            |
| -----: | ------: | ----: | ---------------------------------------- | ----------------------------------------------------------------------------------- |
| 100.0% |       1 |     1 | `ActionDispatch::Response#content_type=` | `../../usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/http/response.rb` |

##### `ActionDispatch::Response.default_headers` (`<unknown>`)

|      % | Samples | Calls | Caller                            | Location                                                                            |
| -----: | ------: | ----: | --------------------------------- | ----------------------------------------------------------------------------------- |
| 100.0% |       1 |     1 | `ActionDispatch::Response.create` | `../../usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/http/response.rb` |

##### `ActionController::Base.default_static_extension` (`<unknown>`)

|      % | Samples | Calls | Caller                                                | Location                                                                                |
| -----: | ------: | ----: | ----------------------------------------------------- | --------------------------------------------------------------------------------------- |
| 100.0% |       1 |     1 | `ActionDispatch::FileHandler#each_candidate_filepath` | `../../usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/static.rb` |

##### `ActionController::Base::HelperMethods#form_authenticity_token` (`<unknown>`)

|       % | Samples | Calls | Caller                                           | Location                                                                              |
| ------: | ------: | ----: | ------------------------------------------------ | ------------------------------------------------------------------------------------- |
| 1900.0% |      19 |    18 | `ActionView::Helpers::CsrfHelper#csrf_meta_tags` | `../../usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/csrf_helper.rb` |

##### `StatusesController#_layout` (`<unknown>`)

|      % | Samples | Calls | Caller                                | Location                                                                  |
| -----: | ------: | ----: | ------------------------------------- | ------------------------------------------------------------------------- |
| 100.0% |       1 |     1 | `ActionView::Layouts#_default_layout` | `../../usr/local/bundle/gems/actionview-8.1.4/lib/action_view/layouts.rb` |

##### `ActionView::Base.default_formats` (`<unknown>`)

|      % | Samples | Calls | Caller                           | Location                                                                         |
| -----: | ------: | ----: | -------------------------------- | -------------------------------------------------------------------------------- |
| 100.0% |       1 |     1 | `block in <class:LookupContext>` | `../../usr/local/bundle/gems/actionview-8.1.4/lib/action_view/lookup_context.rb` |

#### Callees

Callees ranked by contribution to each function's total samples. Percentages are of the function's total and can exceed 100% for calls within a recursion cycle.

##### `<main>` (`profile.rb`)

|     % | Samples | Calls | Callee                                 | Location                                                         |
| ----: | ------: | ----: | -------------------------------------- | ---------------------------------------------------------------- |
| 95.1% |   1,477 |     4 | `Rails::Engine#call`                   | `../../usr/local/bundle/gems/railties-8.1.4/lib/rails/engine.rb` |
|  4.7% |      73 |     1 | `Kernel#require_relative [c function]` | `<unknown>`                                                      |
|  0.1% |       2 |     2 | `Rack::BodyProxy#close`                | `../../usr/local/bundle/gems/rack-3.2.7/lib/rack/body_proxy.rb`  |
|  0.1% |       1 |     1 | `Comparable#< [c function]`            | `<unknown>`                                                      |

##### `Rails::Engine#call` (`../../usr/local/bundle/gems/railties-8.1.4/lib/rails/engine.rb`)

|     % | Samples | Calls | Callee                             | Location                                                                                    |
| ----: | ------: | ----: | ---------------------------------- | ------------------------------------------------------------------------------------------- |
| 99.8% |   1,474 |     7 | `ActionDispatch::AssumeSSL#call`   | `../../usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/assume_ssl.rb` |
|  0.1% |       2 |     2 | `Rails::Application#build_request` | `../../usr/local/bundle/gems/railties-8.1.4/lib/rails/application.rb`                       |

##### `ActionDispatch::AssumeSSL#call` (`../../usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/assume_ssl.rb`)

|      % | Samples | Calls | Callee                     | Location                                                                             |
| -----: | ------: | ----: | -------------------------- | ------------------------------------------------------------------------------------ |
| 100.0% |   1,474 |     7 | `ActionDispatch::SSL#call` | `../../usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/ssl.rb` |

##### `ActionDispatch::SSL#call` (`../../usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/ssl.rb`)

|     % | Samples | Calls | Callee                | Location                                                      |
| ----: | ------: | ----: | --------------------- | ------------------------------------------------------------- |
| 99.8% |   1,471 |    10 | `Rack::Sendfile#call` | `../../usr/local/bundle/gems/rack-3.2.7/lib/rack/sendfile.rb` |
|  0.2% |       3 |     3 | `Kernel#tap`          | `<unknown>`                                                   |

##### `Rack::Sendfile#call` (`../../usr/local/bundle/gems/rack-3.2.7/lib/rack/sendfile.rb`)

|      % | Samples | Calls | Callee                        | Location                                                                                |
| -----: | ------: | ----: | ----------------------------- | --------------------------------------------------------------------------------------- |
| 100.0% |   1,471 |    10 | `ActionDispatch::Static#call` | `../../usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/static.rb` |

##### `ActionDispatch::Static#call` (`../../usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/static.rb`)

|     % | Samples | Calls | Callee                                | Location                                                                                  |
| ----: | ------: | ----: | ------------------------------------- | ----------------------------------------------------------------------------------------- |
| 99.3% |   1,460 |    21 | `ActionDispatch::Executor#call`       | `../../usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/executor.rb` |
|  0.7% |      10 |    10 | `ActionDispatch::FileHandler#attempt` | `../../usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/static.rb`   |

##### `ActionDispatch::Executor#call` (`../../usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/executor.rb`)

|      % | Samples | Calls | Callee               | Location                                                     |
| -----: | ------: | ----: | -------------------- | ------------------------------------------------------------ |
| 100.0% |   1,460 |    21 | `Rack::Runtime#call` | `../../usr/local/bundle/gems/rack-3.2.7/lib/rack/runtime.rb` |

##### `Rack::Runtime#call` (`../../usr/local/bundle/gems/rack-3.2.7/lib/rack/runtime.rb`)

|     % | Samples | Calls | Callee                      | Location                                                             |
| ----: | ------: | ----: | --------------------------- | -------------------------------------------------------------------- |
| 99.9% |   1,459 |    22 | `Rack::MethodOverride#call` | `../../usr/local/bundle/gems/rack-3.2.7/lib/rack/method_override.rb` |
|  0.1% |       1 |     1 | `String#% [c function]`     | `<unknown>`                                                          |

##### `ActionDispatch::RemoteIp#call` (`../../usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/remote_ip.rb`)

|      % | Samples | Calls | Callee                             | Location                                                                       |
| -----: | ------: | ----: | ---------------------------------- | ------------------------------------------------------------------------------ |
| 100.0% |   1,459 |    22 | `Rails::Rack::SilenceRequest#call` | `../../usr/local/bundle/gems/railties-8.1.4/lib/rails/rack/silence_request.rb` |

##### `Rails::Rack::SilenceRequest#call` (`../../usr/local/bundle/gems/railties-8.1.4/lib/rails/rack/silence_request.rb`)

|      % | Samples | Calls | Callee                     | Location                                                              |
| -----: | ------: | ----: | -------------------------- | --------------------------------------------------------------------- |
| 100.0% |   1,459 |    22 | `Rails::Rack::Logger#call` | `../../usr/local/bundle/gems/railties-8.1.4/lib/rails/rack/logger.rb` |

##### `ActionDispatch::RequestId#call` (`../../usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/request_id.rb`)

|      % | Samples | Calls | Callee                          | Location                                                                                   |
| -----: | ------: | ----: | ------------------------------- | ------------------------------------------------------------------------------------------ |
| 100.0% |   1,459 |    22 | `ActionDispatch::RemoteIp#call` | `../../usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/remote_ip.rb` |

##### `Rack::MethodOverride#call` (`../../usr/local/bundle/gems/rack-3.2.7/lib/rack/method_override.rb`)

|      % | Samples | Calls | Callee                           | Location                                                                                    |
| -----: | ------: | ----: | -------------------------------- | ------------------------------------------------------------------------------------------- |
| 100.0% |   1,459 |    22 | `ActionDispatch::RequestId#call` | `../../usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/request_id.rb` |

##### `Rails::Rack::Logger#call` (`../../usr/local/bundle/gems/railties-8.1.4/lib/rails/rack/logger.rb`)

|     % | Samples | Calls | Callee                                          | Location                                                                                 |
| ----: | ------: | ----: | ----------------------------------------------- | ---------------------------------------------------------------------------------------- |
| 99.9% |   1,458 |    23 | `Rails::Rack::Logger#call_app`                  | `../../usr/local/bundle/gems/railties-8.1.4/lib/rails/rack/logger.rb`                    |
|  0.1% |       1 |     1 | `ActiveSupport::BroadcastLogger#method_missing` | `../../usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/broadcast_logger.rb` |

##### `Rails::Rack::Logger#call_app` (`../../usr/local/bundle/gems/railties-8.1.4/lib/rails/rack/logger.rb`)

|     % | Samples | Calls | Callee                                                    | Location                                                                                           |
| ----: | ------: | ----: | --------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| 99.9% |   1,456 |    24 | `ActionDispatch::ShowExceptions#call`                     | `../../usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/show_exceptions.rb`   |
|  0.1% |       1 |     1 | `ActiveSupport::Notifications::Instrumenter#build_handle` | `../../usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications/instrumenter.rb` |
|  0.1% |       1 |     1 | `ActiveSupport::BroadcastLogger#info`                     | `<unknown>`                                                                                        |

##### `ActionDispatch::Callbacks#call` (`../../usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/callbacks.rb`)

|      % | Samples | Calls | Callee                                   | Location                                                                          |
| -----: | ------: | ----: | ---------------------------------------- | --------------------------------------------------------------------------------- |
| 100.0% |   1,456 |    24 | `ActiveSupport::Callbacks#run_callbacks` | `../../usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/callbacks.rb` |

##### `ActionDispatch::DebugExceptions#call` (`../../usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/debug_exceptions.rb`)

|      % | Samples | Calls | Callee                           | Location                                                                                   |
| -----: | ------: | ----: | -------------------------------- | ------------------------------------------------------------------------------------------ |
| 100.0% |   1,456 |    24 | `ActionDispatch::Callbacks#call` | `../../usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/callbacks.rb` |

##### `ActionDispatch::ShowExceptions#call` (`../../usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/show_exceptions.rb`)

|      % | Samples | Calls | Callee                                 | Location                                                                                          |
| -----: | ------: | ----: | -------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 100.0% |   1,456 |    24 | `ActionDispatch::DebugExceptions#call` | `../../usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/debug_exceptions.rb` |

##### `Array#each` (`<unknown>`)

|      % | Samples | Calls | Callee                                                                 | Location                                                                                     |
| -----: | ------: | ----: | ---------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| 526.2% |   1,368 |   101 | `block in recognize`                                                   | `../../usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router.rb`         |
| 490.4% |   1,275 |   169 | `block in _app_views_statuses_index_html_erb__328993190567029661_3128` | `<unknown>`                                                                                  |
|  50.4% |     131 |   128 | `block (2 levels) in decorate`                                         | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb` |
|  45.8% |     119 |   105 | `block in scrub_attributes`                                            | `../../usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`         |
|  25.8% |      67 |    63 | `block in digest_body`                                                 | `../../usr/local/bundle/gems/rack-3.2.7/lib/rack/etag.rb`                                    |

##### `Kernel#extend [c function]` (`<unknown>`)

|     % | Samples | Calls | Callee                              | Location    |
| ----: | ------: | ----: | ----------------------------------- | ----------- |
| 96.2% |     126 |   125 | `Module#extend_object [c function]` | `<unknown>` |

##### `block (2 levels) in decorate` (`../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`)

|     % | Samples | Calls | Callee                       | Location    |
| ----: | ------: | ----: | ---------------------------- | ----------- |
| 98.5% |     129 |   127 | `Kernel#extend [c function]` | `<unknown>` |

##### `block in _app_views_statuses_index_html_erb__328993190567029661_3128` (`<unknown>`)

|      % | Samples | Calls | Callee                                                    | Location                                                                                  |
| -----: | ------: | ----: | --------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| 818.6% |     835 |   379 | `ActionView::Helpers::SanitizeHelper#sanitize`            | `../../usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/sanitize_helper.rb` |
| 267.6% |     273 |   231 | `ActionView::Helpers::NumberHelper#number_with_delimiter` | `../../usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/number_helper.rb`   |
|  53.9% |      55 |    54 | `block in define_url_helper`                              | `../../usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb`   |
|  40.2% |      41 |    40 | `ActionView::Helpers::UrlHelper#link_to`                  | `../../usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/url_helper.rb`      |
|  18.6% |      19 |    18 | `ActionView::OutputBuffer#<<`                             | `../../usr/local/bundle/gems/actionview-8.1.4/lib/action_view/buffers.rb`                 |

##### `Nokogiri::HTML5::Node#write_to` (`../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/node.rb`)

|     % | Samples | Calls | Callee                                                     | Location    |
| ----: | ------: | ----: | ---------------------------------------------------------- | ----------- |
| 42.7% |      41 |    40 | `Nokogiri::XML::Node#html_standard_serialize [c function]` | `<unknown>` |
| 29.2% |      28 |    28 | `String#encode [c function]`                               | `<unknown>` |
|  8.3% |       8 |     8 | `IO::generic_writable#<< [c function]`                     | `<unknown>` |
|  4.2% |       4 |     4 | `Kernel#lambda [c function]`                               | `<unknown>` |
|  2.1% |       2 |     2 | `String#* [c function]`                                    | `<unknown>` |

##### `Nokogiri::Gumbo.fragment [c function]` (`<unknown>`)

|     % | Samples | Calls | Callee                                             | Location    |
| ----: | ------: | ----: | -------------------------------------------------- | ----------- |
| 35.1% |      26 |    26 | `Nokogiri::XML::Node#internal_subset [c function]` | `<unknown>` |

##### `Rails::HTML::PermitScrubber#scrub_attribute` (`../../usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`)

|     % | Samples | Calls | Callee                                                   | Location                                                              |
| ----: | ------: | ----: | -------------------------------------------------------- | --------------------------------------------------------------------- |
| 78.4% |      58 |    53 | `Loofah::HTML5::Scrub.scrub_uri_attribute`               | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb` |
| 27.0% |      20 |    19 | `Loofah::HTML5::Scrub.force_correct_attribute_escaping!` | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb` |
| 14.9% |      11 |    11 | `Array#each`                                             | `<unknown>`                                                           |
|  8.1% |       6 |     6 | `Nokogiri::XML::Node#node_name [c function]`             | `<unknown>`                                                           |
|  1.4% |       1 |     1 | `Set#include? [c function]`                              | `<unknown>`                                                           |

##### `block in digest_body` (`../../usr/local/bundle/gems/rack-3.2.7/lib/rack/etag.rb`)

|      % | Samples | Calls | Callee                         | Location    |
| -----: | ------: | ----: | ------------------------------ | ----------- |
| 100.0% |      67 |    63 | `Digest::Base#<< [c function]` | `<unknown>` |

##### `Nokogiri::HTML4::Document.new [c function]` (`<unknown>`)

|     % | Samples | Calls | Callee                                 | Location                                                           |
| ----: | ------: | ----: | -------------------------------------- | ------------------------------------------------------------------ |
| 32.8% |      19 |    19 | `Loofah::DocumentDecorator#initialize` | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb` |

##### `Class#new [c function]` (`<unknown>`)

|     % | Samples | Calls | Callee                                                              | Location                                                                                               |
| ----: | ------: | ----: | ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| 28.2% |      11 |    11 | `ActiveSupport::NumberHelper::NumberConverter#initialize`           | `../../usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb` |
| 12.8% |       5 |     5 | `ActionDispatch::Response#initialize`                               | `../../usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/http/response.rb`                    |
| 12.8% |       5 |     5 | `ActionDispatch::Cookies::EncryptedKeyRotatingCookieJar#initialize` | `../../usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/cookies.rb`               |
|  7.7% |       3 |     3 | `OpenSSL::HMAC#initialize [c function]`                             | `<unknown>`                                                                                            |
|  5.1% |       2 |     1 | `ActionDispatch::MiddlewareStack#initialize`                        | `../../usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/stack.rb`                 |

##### `Kernel#dup [c function]` (`<unknown>`)

|     % | Samples | Calls | Callee                               | Location    |
| ----: | ------: | ----: | ------------------------------------ | ----------- |
| 34.2% |      13 |    13 | `Kernel#initialize_dup [c function]` | `<unknown>` |

##### `String#gsub [c function]` (`<unknown>`)

|     % | Samples | Calls | Callee            | Location                                                                                   |
| ----: | ------: | ----: | ----------------- | ------------------------------------------------------------------------------------------ |
| 13.2% |       5 |     5 | `block in escape` | `../../usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router/utils.rb` |

##### `String.new [c function]` (`<unknown>`)

|     % | Samples | Calls | Callee                                 | Location                                                                                              |
| ----: | ------: | ----: | -------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| 23.5% |       8 |     7 | `ActiveSupport::SafeBuffer#initialize` | `../../usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/core_ext/string/output_safety.rb` |

##### `Kernel.require [c function]` (`<unknown>`)

|      % | Samples | Calls | Callee                                 | Location                                                                     |
| -----: | ------: | ----: | -------------------------------------- | ---------------------------------------------------------------------------- |
| 415.6% |     133 |    27 | `block (2 levels) in replace_require`  | `../../usr/local/lib/ruby/3.4.0/bundled_gems.rb`                             |
| 125.0% |      40 |    23 | `Kernel#require`                       | `../../usr/local/bundle/gems/zeitwerk-2.8.3/lib/zeitwerk/core_ext/kernel.rb` |
|  71.9% |      23 |     8 | `Kernel#require_relative [c function]` | `<unknown>`                                                                  |
|   9.4% |       3 |     1 | `ActionView.render_tracker=`           | `../../usr/local/bundle/gems/actionview-8.1.4/lib/action_view.rb`            |
|   6.3% |       2 |     2 | `Kernel#extend [c function]`           | `<unknown>`                                                                  |

##### `Hash#each_pair [c function]` (`<unknown>`)

|     % | Samples | Calls | Callee                                 | Location                                                                                             |
| ----: | ------: | ----: | -------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| 95.5% |      21 |    21 | `block in tag_options`                 | `../../usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/tag_helper.rb`                 |
|  4.5% |       1 |     1 | `block in update_with_single_argument` | `../../usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/hash_with_indifferent_access.rb` |

##### `Nokogiri::XML::Node#children [c function]` (`<unknown>`)

|      % | Samples | Calls | Callee                             | Location                                                                                     |
| -----: | ------: | ----: | ---------------------------------- | -------------------------------------------------------------------------------------------- |
| 427.3% |      94 |    92 | `Nokogiri::XML::Document#decorate` | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb` |

##### `Integer#times` (`<unknown>`)

|     % | Samples | Calls | Callee                       | Location                                                                                |
| ----: | ------: | ----: | ---------------------------- | --------------------------------------------------------------------------------------- |
| 90.0% |       9 |     5 | `block in parse`             | `../../usr/local/bundle/gems/tzinfo-2.0.6/lib/tzinfo/data_sources/zoneinfo_reader.rb`   |
| 10.0% |       1 |     1 | `block in parameterize_args` | `../../usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb` |

##### `Array#map` (`<unknown>`)

|     % | Samples | Calls | Callee                         | Location                                                                                   |
| ----: | ------: | ----: | ------------------------------ | ------------------------------------------------------------------------------------------ |
| 50.0% |       4 |     4 | `block in stylesheet_link_tag` | `../../usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/asset_tag_helper.rb` |
| 25.0% |       2 |     2 | `block in set_cookie_header`   | `../../usr/local/bundle/gems/rack-3.2.7/lib/rack/utils.rb`                                 |
| 12.5% |       1 |     1 | `block in dispatch`            | `../../usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/broadcast_logger.rb`   |

##### `#<Class:0xffff76d571d8>#_app_views_layouts_application_html_erb___4441820961383043729_3160` (`<unknown>`)

|      % | Samples | Calls | Callee                                                    | Location                                                                                   |
| -----: | ------: | ----: | --------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| 560.0% |      28 |    27 | `ActionView::Helpers::CsrfHelper#csrf_meta_tags`          | `../../usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/csrf_helper.rb`      |
| 120.0% |       6 |     6 | `ActionView::Helpers::AssetTagHelper#stylesheet_link_tag` | `../../usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/asset_tag_helper.rb` |
|  80.0% |       4 |     4 | `ActionView::OutputBuffer#<<`                             | `../../usr/local/bundle/gems/actionview-8.1.4/lib/action_view/buffers.rb`                  |
|  20.0% |       1 |     1 | `ActionView::Helpers::CspHelper#csp_meta_tag`             | `../../usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/csp_helper.rb`       |

##### `Kernel#tap` (`<unknown>`)

|     % | Samples | Calls | Callee                     | Location                                                                                 |
| ----: | ------: | ----: | -------------------------- | ---------------------------------------------------------------------------------------- |
| 75.0% |       3 |     3 | `block in call`            | `../../usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/ssl.rb`     |
| 25.0% |       1 |     1 | `block in cookie_metadata` | `../../usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/cookies.rb` |

##### `ActionController::Base::HelperMethods#protect_against_forgery?` (`<unknown>`)

|     % | Samples | Calls | Callee                                                                | Location                                                                                                 |
| ----: | ------: | ----: | --------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| 50.0% |       1 |     1 | `ActionController::RequestForgeryProtection#protect_against_forgery?` | `../../usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/request_forgery_protection.rb` |

##### `ActiveSupport::NumberHelper::NumberConverter#validate_float?` (`<unknown>`)

|      % | Samples | Calls | Callee                                                        | Location    |
| -----: | ------: | ----: | ------------------------------------------------------------- | ----------- |
| 100.0% |       2 |     2 | `ActiveSupport::NumberHelper::NumberConverter#validate_float` | `<unknown>` |

##### `ActiveSupport::NumberHelper::NumberConverter#validate_float` (`<unknown>`)

|     % | Samples | Calls | Callee                                                                     | Location    |
| ----: | ------: | ----: | -------------------------------------------------------------------------- | ----------- |
| 50.0% |       1 |     1 | `ActiveSupport::NumberHelper::NumberConverter.validate_float [c function]` | `<unknown>` |
| 50.0% |       1 |     1 | `ActiveSupport::NumberHelper::NumberConverter.validate_float`              | `<unknown>` |

##### `ActionController::Metal#content_type=` (`<unknown>`)

|      % | Samples | Calls | Callee                                   | Location                                                                            |
| -----: | ------: | ----: | ---------------------------------------- | ----------------------------------------------------------------------------------- |
| 100.0% |       1 |     1 | `ActionDispatch::Response#content_type=` | `../../usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/http/response.rb` |

##### `ActionController::Base::HelperMethods#form_authenticity_token` (`<unknown>`)

|       % | Samples | Calls | Callee                                                               | Location                                                                                                 |
| ------: | ------: | ----: | -------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| 1800.0% |      18 |    17 | `ActionController::RequestForgeryProtection#form_authenticity_token` | `../../usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/request_forgery_protection.rb` |

##### `StatusesController#_layout` (`<unknown>`)

|      % | Samples | Calls | Callee                          | Location    |
| -----: | ------: | ----: | ------------------------------- | ----------- |
| 100.0% |       1 |     1 | `ApplicationController#_layout` | `<unknown>` |
