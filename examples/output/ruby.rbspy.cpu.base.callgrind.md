# Sampling profile

Collected 1,555 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Native           | 53.5% |     832 |
| Third-party      | 42.1% |     655 |
| Unknown          |  3.7% |      57 |
| Standard library |  0.7% |      11 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|    % | Samples | Function                                                                 | Location                                                                                                 |
| ---: | ------: | ------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------- |
| 9.5% |     148 | `ActiveSupport::NumberHelper::NumberConverter#i18n_format_options`       | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/number_helper/number_converter.rb` |
| 6.0% |      94 | `Digest::Base#<< [c function]`                                           | `<unknown>`                                                                                              |
| 5.1% |      79 | `Nokogiri::XML::NodeSet#each`                                            | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`             |
| 4.5% |      70 | `Module#extend_object [c function]`                                      | `<unknown>`                                                                                              |
| 3.7% |      57 | `Nokogiri::Gumbo.fragment [c function]`                                  | `<unknown>`                                                                                              |
| 3.7% |      57 | `String#encode [c function]`                                             | `<unknown>`                                                                                              |
| 3.0% |      46 | `block in decorate`                                                      | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`             |
| 2.8% |      44 | `String#gsub [c function]`                                               | `<unknown>`                                                                                              |
| 2.0% |      31 | `Nokogiri::HTML4::Document.new [c function]`                             | `<unknown>`                                                                                              |
| 1.9% |      30 | `String#gsub! [c function]`                                              | `<unknown>`                                                                                              |
| 1.6% |      25 | `Kernel.require [c function]`                                            | `<unknown>`                                                                                              |
| 1.5% |      24 | `String#split [c function]`                                              | `<unknown>`                                                                                              |
| 1.5% |      24 | `block in _app_views_statuses_index_html_erb___3573933945962839437_3112` | `<unknown>`                                                                                              |
| 1.4% |      21 | `Regexp#match? [c function]`                                             | `<unknown>`                                                                                              |
| 1.3% |      20 | `Nokogiri::XML::Node#children [c function]`                              | `<unknown>`                                                                                              |
| 1.3% |      20 | `Nokogiri::XML::Node#html_standard_serialize [c function]`               | `<unknown>`                                                                                              |
| 1.0% |      16 | `Array#each`                                                             | `<unknown>`                                                                                              |
| 1.0% |      16 | `Hash#merge [c function]`                                                | `<unknown>`                                                                                              |
| 0.9% |      14 | `Nokogiri::HTML5::Node#write_to`                                         | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/node.rb`               |
| 0.9% |      14 | `Nokogiri::XML::Node#to_format`                                          | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb`                 |

#### Categories

##### Native

|    % | Samples | Function                                                   | Location    |
| ---: | ------: | ---------------------------------------------------------- | ----------- |
| 6.0% |      94 | `Digest::Base#<< [c function]`                             | `<unknown>` |
| 4.5% |      70 | `Module#extend_object [c function]`                        | `<unknown>` |
| 3.7% |      57 | `Nokogiri::Gumbo.fragment [c function]`                    | `<unknown>` |
| 3.7% |      57 | `String#encode [c function]`                               | `<unknown>` |
| 2.8% |      44 | `String#gsub [c function]`                                 | `<unknown>` |
| 2.0% |      31 | `Nokogiri::HTML4::Document.new [c function]`               | `<unknown>` |
| 1.9% |      30 | `String#gsub! [c function]`                                | `<unknown>` |
| 1.6% |      25 | `Kernel.require [c function]`                              | `<unknown>` |
| 1.5% |      24 | `String#split [c function]`                                | `<unknown>` |
| 1.4% |      21 | `Regexp#match? [c function]`                               | `<unknown>` |
| 1.3% |      20 | `Nokogiri::XML::Node#children [c function]`                | `<unknown>` |
| 1.3% |      20 | `Nokogiri::XML::Node#html_standard_serialize [c function]` | `<unknown>` |
| 1.0% |      16 | `Hash#merge [c function]`                                  | `<unknown>` |
| 0.8% |      13 | `Hash#each [c function]`                                   | `<unknown>` |
| 0.8% |      13 | `Kernel#dup [c function]`                                  | `<unknown>` |
| 0.8% |      12 | `Kernel#require_relative [c function]`                     | `<unknown>` |
| 0.6% |      10 | `ERB::Util.html_escape [c function]`                       | `<unknown>` |
| 0.6% |      10 | `Nokogiri::XML::Node#node_name [c function]`               | `<unknown>` |
| 0.6% |       9 | `Array#join [c function]`                                  | `<unknown>` |
| 0.6% |       9 | `Nokogiri::XML::Attr#value= [c function]`                  | `<unknown>` |

##### Third-party

|    % | Samples | Function                                                           | Location                                                                                                 |
| ---: | ------: | ------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------- |
| 9.5% |     148 | `ActiveSupport::NumberHelper::NumberConverter#i18n_format_options` | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/number_helper/number_converter.rb` |
| 5.1% |      79 | `Nokogiri::XML::NodeSet#each`                                      | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`             |
| 3.0% |      46 | `block in decorate`                                                | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`             |
| 0.9% |      14 | `Nokogiri::HTML5::Node#write_to`                                   | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/node.rb`               |
| 0.9% |      14 | `Nokogiri::XML::Node#to_format`                                    | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb`                 |
| 0.8% |      13 | `Nokogiri::XML::DocumentFragment.new`                              | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document_fragment.rb`    |
| 0.8% |      12 | `block in each`                                                    | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`             |
| 0.7% |      11 | `Loofah::Scrubber#traverse_conditionally_bottom_up`                | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/scrubber.rb`                                       |
| 0.6% |      10 | `Nokogiri::XML::Node#serialize`                                    | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb`                 |
| 0.6% |       9 | `ActionView::OutputBuffer#<<`                                      | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/buffers.rb`                              |
| 0.6% |       9 | `Loofah::ScrubBehavior::Node#scrub!`                               | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`                                       |
| 0.6% |       9 | `Rails::HTML::PermitScrubber#skip_node?`                           | `../../usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`                     |
| 0.5% |       8 | `block in force_correct_attribute_escaping!`                       | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`                                    |
| 0.5% |       7 | `Nokogiri::XML::Document#decorate`                                 | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`             |
| 0.4% |       6 | `block (2 levels) in translate`                                    | `../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/fallbacks.rb`                                  |
| 0.4% |       6 | `ActiveSupport::CoreExt::ERBUtil#html_escape`                      | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/core_ext/erb/util.rb`              |
| 0.4% |       6 | `ActionView::Helpers::TagHelper::TagBuilder#content_tag_string`    | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/helpers/tag_helper.rb`                   |
| 0.4% |       6 | `Nokogiri::XML::Document#decorators`                               | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`             |
| 0.4% |       6 | `Nokogiri::XML::DocumentFragment#to_html`                          | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document_fragment.rb`    |
| 0.4% |       6 | `Nokogiri::XML::Node#to_html`                                      | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb`                 |

##### Unknown

|    % | Samples | Function                                                                                    | Location    |
| ---: | ------: | ------------------------------------------------------------------------------------------- | ----------- |
| 1.5% |      24 | `block in _app_views_statuses_index_html_erb___3573933945962839437_3112`                    | `<unknown>` |
| 1.0% |      16 | `Array#each`                                                                                | `<unknown>` |
| 0.1% |       2 | `#<Class:0xffff71e26550>#_app_views_layouts_application_html_erb__2593190439123575800_3144` | `<unknown>` |
| 0.1% |       2 | `ActionDispatch::Request.ignore_accept_header`                                              | `<unknown>` |
| 0.1% |       2 | `ActionView::Helpers::ControllerHelper#response`                                            | `<unknown>` |
| 0.1% |       2 | `String#unpack`                                                                             | `<unknown>` |
| 0.1% |       1 | `Ractor.make_shareable`                                                                     | `<unknown>` |
| 0.1% |       1 | `Time.now`                                                                                  | `<unknown>` |
| 0.1% |       1 | `ActionController::Metal#session`                                                           | `<unknown>` |
| 0.1% |       1 | `ActionController::Base::HelperMethods#content_security_policy?`                            | `<unknown>` |
| 0.1% |       1 | `Kernel#Float`                                                                              | `<unknown>` |
| 0.1% |       1 | `Array#select`                                                                              | `<unknown>` |
| 0.1% |       1 | `Hash#initialize`                                                                           | `<unknown>` |
| 0.1% |       1 | `I18n::Base#default_separator`                                                              | `<unknown>` |
| 0.1% |       1 | `ApplicationController#_layout`                                                             | `<unknown>` |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `ActiveSupport::NumberHelper::NumberConverter#i18n_format_options` (`../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/number_helper/number_converter.rb`)

|      % | Samples | Location                                                                                                     |
| -----: | ------: | ------------------------------------------------------------------------------------------------------------ |
| 100.0% |     148 | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/number_helper/number_converter.rb:164` |

##### `Nokogiri::XML::NodeSet#each` (`../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`)

|      % | Samples | Location                                                                                         |
| -----: | ------: | ------------------------------------------------------------------------------------------------ |
| 100.0% |      79 | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb:240` |

##### `block in decorate` (`../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`)

|      % | Samples | Location                                                                                         |
| -----: | ------: | ------------------------------------------------------------------------------------------------ |
| 100.0% |      46 | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb:417` |

##### `block in _app_views_statuses_index_html_erb___3573933945962839437_3112` (`<unknown>`)

|      % | Samples | Location |
| -----: | ------: | -------- |
| 100.0% |      24 | 29       |

##### `Array#each` (`<unknown>`)

|      % | Samples | Location |
| -----: | ------: | -------- |
| 100.0% |      16 | 231      |

##### `Nokogiri::HTML5::Node#write_to` (`../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/node.rb`)

|      % | Samples | Location                                                                                      |
| -----: | ------: | --------------------------------------------------------------------------------------------- |
| 100.0% |      14 | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/node.rb:68` |

##### `Nokogiri::XML::Node#to_format` (`../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb`)

|      % | Samples | Location                                                                                      |
| -----: | ------: | --------------------------------------------------------------------------------------------- |
| 100.0% |      14 | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb:1677` |

##### `Nokogiri::XML::DocumentFragment.new` (`../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document_fragment.rb`)

|      % | Samples | Location                                                                                                 |
| -----: | ------: | -------------------------------------------------------------------------------------------------------- |
| 100.0% |      13 | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document_fragment.rb:46` |

##### `block in each` (`../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`)

|      % | Samples | Location                                                                                         |
| -----: | ------: | ------------------------------------------------------------------------------------------------ |
| 100.0% |      12 | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb:238` |

##### `Loofah::Scrubber#traverse_conditionally_bottom_up` (`../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/scrubber.rb`)

|      % | Samples | Location                                                               |
| -----: | ------: | ---------------------------------------------------------------------- |
| 100.0% |      11 | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/scrubber.rb:138` |

##### `Nokogiri::XML::Node#serialize` (`../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb`)

|      % | Samples | Location                                                                                      |
| -----: | ------: | --------------------------------------------------------------------------------------------- |
| 100.0% |      10 | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb:1433` |

##### `ActionView::OutputBuffer#<<` (`../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/buffers.rb`)

|      % | Samples | Location                                                                       |
| -----: | ------: | ------------------------------------------------------------------------------ |
| 100.0% |       9 | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/buffers.rb:52` |

##### `Loofah::ScrubBehavior::Node#scrub!` (`../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`)

|      % | Samples | Location                                                              |
| -----: | ------: | --------------------------------------------------------------------- |
| 100.0% |       9 | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb:48` |

##### `Rails::HTML::PermitScrubber#skip_node?` (`../../usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`)

|      % | Samples | Location                                                                                |
| -----: | ------: | --------------------------------------------------------------------------------------- |
| 100.0% |       9 | `../../usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb:89` |

##### `block in force_correct_attribute_escaping!` (`../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`)

|      % | Samples | Location                                                                  |
| -----: | ------: | ------------------------------------------------------------------------- |
| 100.0% |       8 | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb:258` |

##### `Nokogiri::XML::Document#decorate` (`../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`)

|      % | Samples | Location                                                                                         |
| -----: | ------: | ------------------------------------------------------------------------------------------------ |
| 100.0% |       7 | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb:418` |

##### `block (2 levels) in translate` (`../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/fallbacks.rb`)

|      % | Samples | Location                                                                   |
| -----: | ------: | -------------------------------------------------------------------------- |
| 100.0% |       6 | `../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/fallbacks.rb:63` |

##### `ActiveSupport::CoreExt::ERBUtil#html_escape` (`../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/core_ext/erb/util.rb`)

|      % | Samples | Location                                                                                       |
| -----: | ------: | ---------------------------------------------------------------------------------------------- |
| 100.0% |       6 | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/core_ext/erb/util.rb:17` |

##### `ActionView::Helpers::TagHelper::TagBuilder#content_tag_string` (`../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/helpers/tag_helper.rb`)

|      % | Samples | Location                                                                                   |
| -----: | ------: | ------------------------------------------------------------------------------------------ |
| 100.0% |       6 | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/helpers/tag_helper.rb:233` |

##### `Nokogiri::XML::Document#decorators` (`../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`)

|      % | Samples | Location                                                                                         |
| -----: | ------: | ------------------------------------------------------------------------------------------------ |
| 100.0% |       6 | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb:372` |

##### `Nokogiri::XML::DocumentFragment#to_html` (`../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document_fragment.rb`)

|      % | Samples | Location                                                                                                  |
| -----: | ------: | --------------------------------------------------------------------------------------------------------- |
| 100.0% |       6 | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document_fragment.rb:145` |

##### `Nokogiri::XML::Node#to_html` (`../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb`)

|      % | Samples | Location                                                                                      |
| -----: | ------: | --------------------------------------------------------------------------------------------- |
| 100.0% |       6 | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb:1444` |

##### `#<Class:0xffff71e26550>#_app_views_layouts_application_html_erb__2593190439123575800_3144` (`<unknown>`)

|      % | Samples | Location |
| -----: | ------: | -------- |
| 100.0% |       2 | 31       |

##### `ActionDispatch::Request.ignore_accept_header` (`<unknown>`)

|      % | Samples | Location |
| -----: | ------: | -------- |
| 100.0% |       2 | 20       |

##### `ActionView::Helpers::ControllerHelper#response` (`<unknown>`)

|      % | Samples | Location |
| -----: | ------: | -------- |
| 100.0% |       2 | 18       |

##### `String#unpack` (`<unknown>`)

|      % | Samples | Location |
| -----: | ------: | -------- |
| 100.0% |       2 | 26       |

##### `Ractor.make_shareable` (`<unknown>`)

|      % | Samples | Location |
| -----: | ------: | -------- |
| 100.0% |       1 | 836      |

##### `Time.now` (`<unknown>`)

|      % | Samples | Location |
| -----: | ------: | -------- |
| 100.0% |       1 | 266      |

##### `ActionController::Metal#session` (`<unknown>`)

|      % | Samples | Location |
| -----: | ------: | -------- |
| 100.0% |       1 | 176      |

##### `ActionController::Base::HelperMethods#content_security_policy?` (`<unknown>`)

|      % | Samples | Location |
| -----: | ------: | -------- |
| 100.0% |       1 | 13       |

##### `Kernel#Float` (`<unknown>`)

|      % | Samples | Location |
| -----: | ------: | -------- |
| 100.0% |       1 | 199      |

##### `Array#select` (`<unknown>`)

|      % | Samples | Location |
| -----: | ------: | -------- |
| 100.0% |       1 | 276      |

##### `Hash#initialize` (`<unknown>`)

|      % | Samples | Location |
| -----: | ------: | -------- |
| 100.0% |       1 | 39       |

##### `I18n::Base#default_separator` (`<unknown>`)

|      % | Samples | Location |
| -----: | ------: | -------- |
| 100.0% |       1 | 102      |

##### `ApplicationController#_layout` (`<unknown>`)

|      % | Samples | Location |
| -----: | ------: | -------- |
| 100.0% |       1 | 334      |

### Total samples

Functions ranked by total samples taken in the function and all its callees. Calls within a recursion cycle are excluded from totals, since they re-count the same work.

|     % | Samples | Function                                                           | Location                                                                                                 |
| ----: | ------: | ------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------- |
| 99.9% |   1,554 | `<main>`                                                           | `profile.rb`                                                                                             |
| 94.9% |   1,475 | `Rails::Engine#call`                                               | `../../usr/local/bundle/gems/railties-8.1.3.1/lib/rails/engine.rb`                                       |
| 94.7% |   1,473 | `ActionDispatch::AssumeSSL#call`                                   | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/assume_ssl.rb`            |
| 94.7% |   1,473 | `ActionDispatch::SSL#call`                                         | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/ssl.rb`                   |
| 94.5% |   1,469 | `Rack::Sendfile#call`                                              | `../../usr/local/bundle/gems/rack-3.2.7/lib/rack/sendfile.rb`                                            |
| 94.4% |   1,468 | `ActionDispatch::Static#call`                                      | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/static.rb`                |
| 94.0% |   1,461 | `ActionDispatch::Executor#call`                                    | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/executor.rb`              |
| 94.0% |   1,461 | `Rack::Runtime#call`                                               | `../../usr/local/bundle/gems/rack-3.2.7/lib/rack/runtime.rb`                                             |
| 93.9% |   1,460 | `ActionDispatch::RequestId#call`                                   | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/request_id.rb`            |
| 93.9% |   1,460 | `Rack::MethodOverride#call`                                        | `../../usr/local/bundle/gems/rack-3.2.7/lib/rack/method_override.rb`                                     |
| 93.8% |   1,459 | `ActionDispatch::RemoteIp#call`                                    | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/remote_ip.rb`             |
| 93.8% |   1,458 | `Rails::Rack::SilenceRequest#call`                                 | `../../usr/local/bundle/gems/railties-8.1.3.1/lib/rails/rack/silence_request.rb`                         |
| 93.8% |   1,458 | `Rails::Rack::Logger#call`                                         | `../../usr/local/bundle/gems/railties-8.1.3.1/lib/rails/rack/logger.rb`                                  |
| 93.8% |   1,458 | `Rails::Rack::Logger#call_app`                                     | `../../usr/local/bundle/gems/railties-8.1.3.1/lib/rails/rack/logger.rb`                                  |
| 93.7% |   1,457 | `ActionDispatch::Callbacks#call`                                   | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/callbacks.rb`             |
| 93.7% |   1,457 | `ActionDispatch::DebugExceptions#call`                             | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/debug_exceptions.rb`      |
| 93.7% |   1,457 | `ActionDispatch::ShowExceptions#call`                              | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/show_exceptions.rb`       |
| 14.3% |     223 | `Array#each`                                                       | `<unknown>`                                                                                              |
| 10.0% |     155 | `block in each`                                                    | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`             |
|  9.8% |     152 | `ActiveSupport::NumberHelper::NumberConverter#i18n_format_options` | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/number_helper/number_converter.rb` |

#### Categories

##### Native

|    % | Samples | Function                                                   | Location    |
| ---: | ------: | ---------------------------------------------------------- | ----------- |
| 6.0% |      94 | `Digest::Base#<< [c function]`                             | `<unknown>` |
| 4.7% |      73 | `Kernel#extend [c function]`                               | `<unknown>` |
| 4.5% |      70 | `Module#extend_object [c function]`                        | `<unknown>` |
| 3.7% |      57 | `Nokogiri::Gumbo.fragment [c function]`                    | `<unknown>` |
| 3.7% |      57 | `String#encode [c function]`                               | `<unknown>` |
| 3.1% |      48 | `Nokogiri::HTML4::Document.new [c function]`               | `<unknown>` |
| 2.9% |      45 | `String#gsub [c function]`                                 | `<unknown>` |
| 1.9% |      30 | `String#gsub! [c function]`                                | `<unknown>` |
| 1.7% |      27 | `Class#new [c function]`                                   | `<unknown>` |
| 1.7% |      26 | `Kernel.require [c function]`                              | `<unknown>` |
| 1.5% |      24 | `String#split [c function]`                                | `<unknown>` |
| 1.4% |      21 | `Regexp#match? [c function]`                               | `<unknown>` |
| 1.3% |      20 | `Kernel#dup [c function]`                                  | `<unknown>` |
| 1.3% |      20 | `Nokogiri::XML::Node#children [c function]`                | `<unknown>` |
| 1.3% |      20 | `Nokogiri::XML::Node#html_standard_serialize [c function]` | `<unknown>` |
| 1.0% |      16 | `Hash#each [c function]`                                   | `<unknown>` |
| 1.0% |      16 | `Hash#each_pair [c function]`                              | `<unknown>` |
| 1.0% |      16 | `Hash#merge [c function]`                                  | `<unknown>` |
| 0.9% |      14 | `Kernel#require_relative [c function]`                     | `<unknown>` |
| 0.8% |      13 | `String.new [c function]`                                  | `<unknown>` |

##### Third-party

|     % | Samples | Function                                                           | Location                                                                                                 |
| ----: | ------: | ------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------- |
| 94.9% |   1,475 | `Rails::Engine#call`                                               | `../../usr/local/bundle/gems/railties-8.1.3.1/lib/rails/engine.rb`                                       |
| 94.7% |   1,473 | `ActionDispatch::AssumeSSL#call`                                   | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/assume_ssl.rb`            |
| 94.7% |   1,473 | `ActionDispatch::SSL#call`                                         | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/ssl.rb`                   |
| 94.5% |   1,469 | `Rack::Sendfile#call`                                              | `../../usr/local/bundle/gems/rack-3.2.7/lib/rack/sendfile.rb`                                            |
| 94.4% |   1,468 | `ActionDispatch::Static#call`                                      | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/static.rb`                |
| 94.0% |   1,461 | `ActionDispatch::Executor#call`                                    | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/executor.rb`              |
| 94.0% |   1,461 | `Rack::Runtime#call`                                               | `../../usr/local/bundle/gems/rack-3.2.7/lib/rack/runtime.rb`                                             |
| 93.9% |   1,460 | `ActionDispatch::RequestId#call`                                   | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/request_id.rb`            |
| 93.9% |   1,460 | `Rack::MethodOverride#call`                                        | `../../usr/local/bundle/gems/rack-3.2.7/lib/rack/method_override.rb`                                     |
| 93.8% |   1,459 | `ActionDispatch::RemoteIp#call`                                    | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/remote_ip.rb`             |
| 93.8% |   1,458 | `Rails::Rack::SilenceRequest#call`                                 | `../../usr/local/bundle/gems/railties-8.1.3.1/lib/rails/rack/silence_request.rb`                         |
| 93.8% |   1,458 | `Rails::Rack::Logger#call`                                         | `../../usr/local/bundle/gems/railties-8.1.3.1/lib/rails/rack/logger.rb`                                  |
| 93.8% |   1,458 | `Rails::Rack::Logger#call_app`                                     | `../../usr/local/bundle/gems/railties-8.1.3.1/lib/rails/rack/logger.rb`                                  |
| 93.7% |   1,457 | `ActionDispatch::Callbacks#call`                                   | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/callbacks.rb`             |
| 93.7% |   1,457 | `ActionDispatch::DebugExceptions#call`                             | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/debug_exceptions.rb`      |
| 93.7% |   1,457 | `ActionDispatch::ShowExceptions#call`                              | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/show_exceptions.rb`       |
| 10.0% |     155 | `block in each`                                                    | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`             |
|  9.8% |     152 | `ActiveSupport::NumberHelper::NumberConverter#i18n_format_options` | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/number_helper/number_converter.rb` |
|  9.1% |     142 | `block in to_html`                                                 | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`             |
|  9.0% |     140 | `Nokogiri::XML::Node#to_html`                                      | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb`                 |

##### Unknown

|     % | Samples | Function                                                                                    | Location    |
| ----: | ------: | ------------------------------------------------------------------------------------------- | ----------- |
| 14.3% |     223 | `Array#each`                                                                                | `<unknown>` |
|  5.5% |      86 | `block in _app_views_statuses_index_html_erb___3573933945962839437_3112`                    | `<unknown>` |
|  0.8% |      12 | `#<Class:0xffff71e26550>#_app_views_layouts_application_html_erb__2593190439123575800_3144` | `<unknown>` |
|  0.3% |       4 | `Array#map`                                                                                 | `<unknown>` |
|  0.2% |       3 | `Kernel#tap`                                                                                | `<unknown>` |
|  0.1% |       2 | `ActionController::Metal#content_type=`                                                     | `<unknown>` |
|  0.1% |       2 | `ActionDispatch::Request.ignore_accept_header`                                              | `<unknown>` |
|  0.1% |       2 | `ActionView::Helpers::ControllerHelper#response`                                            | `<unknown>` |
|  0.1% |       2 | `I18n::Base#default_separator`                                                              | `<unknown>` |
|  0.1% |       2 | `String#unpack`                                                                             | `<unknown>` |
|  0.1% |       2 | `block (2 levels) in _app_views_statuses_index_html_erb___3573933945962839437_3112`         | `<unknown>` |
|  0.1% |       1 | `Integer#times`                                                                             | `<unknown>` |
|  0.1% |       1 | `Ractor.make_shareable`                                                                     | `<unknown>` |
|  0.1% |       1 | `Time.now`                                                                                  | `<unknown>` |
|  0.1% |       1 | `ActionController::Base.logger`                                                             | `<unknown>` |
|  0.1% |       1 | `ActionController::Base#per_form_csrf_tokens`                                               | `<unknown>` |
|  0.1% |       1 | `ActionController::Metal#session`                                                           | `<unknown>` |
|  0.1% |       1 | `ActionDispatch::ParamBuilder.from_query_string`                                            | `<unknown>` |
|  0.1% |       1 | `ActionController::Base::HelperMethods#content_security_policy?`                            | `<unknown>` |
|  0.1% |       1 | `Kernel#Float`                                                                              | `<unknown>` |

#### Callers

Callers ranked by the samples taken in each function and its callees during calls from that caller. Percentages are of the function's total and can exceed 100% for calls within a recursion cycle.

##### `Rails::Engine#call` (`../../usr/local/bundle/gems/railties-8.1.3.1/lib/rails/engine.rb`)

|      % | Samples | Calls | Caller   | Location     |
| -----: | ------: | ----: | -------- | ------------ |
| 100.0% |   1,475 |     8 | `<main>` | `profile.rb` |

##### `ActionDispatch::AssumeSSL#call` (`../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/assume_ssl.rb`)

|      % | Samples | Calls | Caller               | Location                                                           |
| -----: | ------: | ----: | -------------------- | ------------------------------------------------------------------ |
| 100.0% |   1,473 |     9 | `Rails::Engine#call` | `../../usr/local/bundle/gems/railties-8.1.3.1/lib/rails/engine.rb` |

##### `ActionDispatch::SSL#call` (`../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/ssl.rb`)

|      % | Samples | Calls | Caller                           | Location                                                                                      |
| -----: | ------: | ----: | -------------------------------- | --------------------------------------------------------------------------------------------- |
| 100.0% |   1,473 |     9 | `ActionDispatch::AssumeSSL#call` | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/assume_ssl.rb` |

##### `Rack::Sendfile#call` (`../../usr/local/bundle/gems/rack-3.2.7/lib/rack/sendfile.rb`)

|      % | Samples | Calls | Caller                     | Location                                                                               |
| -----: | ------: | ----: | -------------------------- | -------------------------------------------------------------------------------------- |
| 100.0% |   1,469 |    13 | `ActionDispatch::SSL#call` | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/ssl.rb` |

##### `ActionDispatch::Static#call` (`../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/static.rb`)

|      % | Samples | Calls | Caller                | Location                                                      |
| -----: | ------: | ----: | --------------------- | ------------------------------------------------------------- |
| 100.0% |   1,468 |    14 | `Rack::Sendfile#call` | `../../usr/local/bundle/gems/rack-3.2.7/lib/rack/sendfile.rb` |

##### `ActionDispatch::Executor#call` (`../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/executor.rb`)

|      % | Samples | Calls | Caller                        | Location                                                                                  |
| -----: | ------: | ----: | ----------------------------- | ----------------------------------------------------------------------------------------- |
| 100.0% |   1,461 |    21 | `ActionDispatch::Static#call` | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/static.rb` |

##### `Rack::Runtime#call` (`../../usr/local/bundle/gems/rack-3.2.7/lib/rack/runtime.rb`)

|      % | Samples | Calls | Caller                          | Location                                                                                    |
| -----: | ------: | ----: | ------------------------------- | ------------------------------------------------------------------------------------------- |
| 100.0% |   1,461 |    21 | `ActionDispatch::Executor#call` | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/executor.rb` |

##### `ActionDispatch::RequestId#call` (`../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/request_id.rb`)

|      % | Samples | Calls | Caller                      | Location                                                             |
| -----: | ------: | ----: | --------------------------- | -------------------------------------------------------------------- |
| 100.0% |   1,460 |    22 | `Rack::MethodOverride#call` | `../../usr/local/bundle/gems/rack-3.2.7/lib/rack/method_override.rb` |

##### `Rack::MethodOverride#call` (`../../usr/local/bundle/gems/rack-3.2.7/lib/rack/method_override.rb`)

|      % | Samples | Calls | Caller               | Location                                                     |
| -----: | ------: | ----: | -------------------- | ------------------------------------------------------------ |
| 100.0% |   1,460 |    22 | `Rack::Runtime#call` | `../../usr/local/bundle/gems/rack-3.2.7/lib/rack/runtime.rb` |

##### `ActionDispatch::RemoteIp#call` (`../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/remote_ip.rb`)

|      % | Samples | Calls | Caller                           | Location                                                                                      |
| -----: | ------: | ----: | -------------------------------- | --------------------------------------------------------------------------------------------- |
| 100.0% |   1,459 |    23 | `ActionDispatch::RequestId#call` | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/request_id.rb` |

##### `Rails::Rack::SilenceRequest#call` (`../../usr/local/bundle/gems/railties-8.1.3.1/lib/rails/rack/silence_request.rb`)

|      % | Samples | Calls | Caller                          | Location                                                                                     |
| -----: | ------: | ----: | ------------------------------- | -------------------------------------------------------------------------------------------- |
| 100.0% |   1,458 |    24 | `ActionDispatch::RemoteIp#call` | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/remote_ip.rb` |

##### `Rails::Rack::Logger#call` (`../../usr/local/bundle/gems/railties-8.1.3.1/lib/rails/rack/logger.rb`)

|      % | Samples | Calls | Caller                             | Location                                                                         |
| -----: | ------: | ----: | ---------------------------------- | -------------------------------------------------------------------------------- |
| 100.0% |   1,458 |    24 | `Rails::Rack::SilenceRequest#call` | `../../usr/local/bundle/gems/railties-8.1.3.1/lib/rails/rack/silence_request.rb` |

##### `Rails::Rack::Logger#call_app` (`../../usr/local/bundle/gems/railties-8.1.3.1/lib/rails/rack/logger.rb`)

|      % | Samples | Calls | Caller                     | Location                                                                |
| -----: | ------: | ----: | -------------------------- | ----------------------------------------------------------------------- |
| 100.0% |   1,458 |    24 | `Rails::Rack::Logger#call` | `../../usr/local/bundle/gems/railties-8.1.3.1/lib/rails/rack/logger.rb` |

##### `ActionDispatch::Callbacks#call` (`../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/callbacks.rb`)

|      % | Samples | Calls | Caller                                 | Location                                                                                            |
| -----: | ------: | ----: | -------------------------------------- | --------------------------------------------------------------------------------------------------- |
| 100.0% |   1,457 |    25 | `ActionDispatch::DebugExceptions#call` | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/debug_exceptions.rb` |

##### `ActionDispatch::DebugExceptions#call` (`../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/debug_exceptions.rb`)

|      % | Samples | Calls | Caller                                | Location                                                                                           |
| -----: | ------: | ----: | ------------------------------------- | -------------------------------------------------------------------------------------------------- |
| 100.0% |   1,457 |    25 | `ActionDispatch::ShowExceptions#call` | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/show_exceptions.rb` |

##### `ActionDispatch::ShowExceptions#call` (`../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/show_exceptions.rb`)

|      % | Samples | Calls | Caller                         | Location                                                                |
| -----: | ------: | ----: | ------------------------------ | ----------------------------------------------------------------------- |
| 100.0% |   1,457 |    25 | `Rails::Rack::Logger#call_app` | `../../usr/local/bundle/gems/railties-8.1.3.1/lib/rails/rack/logger.rb` |

##### `Array#each` (`<unknown>`)

|      % | Samples | Calls | Caller                                                                                  | Location                                                                                     |
| -----: | ------: | ----: | --------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| 599.1% |   1,336 |    97 | `ActionDispatch::Journey::Router#recognize`                                             | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/journey/router.rb`       |
| 553.4% |   1,234 |   149 | `#<Class:0xffff71e26550>#_app_views_statuses_index_html_erb___3573933945962839437_3112` | `<unknown>`                                                                                  |
|  42.2% |      94 |    67 | `Rack::ETag#digest_body`                                                                | `../../usr/local/bundle/gems/rack-3.2.7/lib/rack/etag.rb`                                    |
|  39.0% |      87 |    81 | `Rails::HTML::PermitScrubber#scrub_attributes`                                          | `../../usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`         |
|  34.5% |      77 |    77 | `block in decorate`                                                                     | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb` |

##### `block in each` (`../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`)

|      % | Samples | Calls | Caller                      | Location    |
| -----: | ------: | ----: | --------------------------- | ----------- |
| 308.4% |     478 |   411 | `Integer#upto [c function]` | `<unknown>` |

##### `ActiveSupport::NumberHelper::NumberConverter#i18n_format_options` (`../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/number_helper/number_converter.rb`)

|      % | Samples | Calls | Caller                                                        | Location                                                                                                 |
| -----: | ------: | ----: | ------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| 163.2% |     248 |   219 | `ActiveSupport::NumberHelper::NumberConverter#format_options` | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/number_helper/number_converter.rb` |

##### `block in to_html` (`../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`)

|      % | Samples | Calls | Caller          | Location                                                                                     |
| -----: | ------: | ----: | --------------- | -------------------------------------------------------------------------------------------- |
| 100.0% |     142 |   128 | `block in each` | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb` |

##### `Nokogiri::XML::Node#to_html` (`../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb`)

|      % | Samples | Calls | Caller             | Location                                                                                     |
| -----: | ------: | ----: | ------------------ | -------------------------------------------------------------------------------------------- |
| 100.0% |     140 |   126 | `block in to_html` | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb` |

##### `Digest::Base#<< [c function]` (`<unknown>`)

|      % | Samples | Calls | Caller                 | Location                                                  |
| -----: | ------: | ----: | ---------------------- | --------------------------------------------------------- |
| 100.0% |      94 |    67 | `block in digest_body` | `../../usr/local/bundle/gems/rack-3.2.7/lib/rack/etag.rb` |

##### `block in _app_views_statuses_index_html_erb___3573933945962839437_3112` (`<unknown>`)

|       % | Samples | Calls | Caller       | Location    |
| ------: | ------: | ----: | ------------ | ----------- |
| 1433.7% |   1,233 |   149 | `Array#each` | `<unknown>` |

##### `Kernel#extend [c function]` (`<unknown>`)

|      % | Samples | Calls | Caller                         | Location                                                                                     |
| -----: | ------: | ----: | ------------------------------ | -------------------------------------------------------------------------------------------- |
| 100.0% |      73 |    73 | `block (2 levels) in decorate` | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb` |

##### `Module#extend_object [c function]` (`<unknown>`)

|      % | Samples | Calls | Caller                       | Location    |
| -----: | ------: | ----: | ---------------------------- | ----------- |
| 100.0% |      70 |    70 | `Kernel#extend [c function]` | `<unknown>` |

##### `Nokogiri::Gumbo.fragment [c function]` (`<unknown>`)

|      % | Samples | Calls | Caller                                         | Location                                                                                                |
| -----: | ------: | ----: | ---------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| 147.4% |      84 |    81 | `Nokogiri::HTML5::DocumentFragment#initialize` | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/document_fragment.rb` |

##### `String#encode [c function]` (`<unknown>`)

|      % | Samples | Calls | Caller                           | Location                                                                                   |
| -----: | ------: | ----: | -------------------------------- | ------------------------------------------------------------------------------------------ |
| 100.0% |      57 |    57 | `Nokogiri::HTML5::Node#write_to` | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/node.rb` |

##### `Nokogiri::HTML4::Document.new [c function]` (`<unknown>`)

|      % | Samples | Calls | Caller                                             | Location                                                           |
| -----: | ------: | ----: | -------------------------------------------------- | ------------------------------------------------------------------ |
| 100.0% |      48 |    48 | `Loofah::HtmlFragmentBehavior::ClassMethods#parse` | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb` |

##### `String#gsub [c function]` (`<unknown>`)

|     % | Samples | Calls | Caller                                                              | Location                                                                                     |
| ----: | ------: | ----: | ------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| 57.8% |      26 |    26 | `ActionDispatch::Journey::Router::Utils::UriEncoder#escape_segment` | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/journey/router/utils.rb` |
| 22.2% |      10 |    10 | `Loofah::HTML5::Scrub.allowed_uri?`                                 | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`                        |
| 11.1% |       5 |     5 | `ActionDispatch::Journey::Router::Utils::UriEncoder#escape`         | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/journey/router/utils.rb` |
|  4.4% |       2 |     2 | `Loofah::HTML5::Scrub.decode_numeric_character_references`          | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`                        |
|  2.2% |       1 |     1 | `Loofah::HTML5::Scrub.scrub_uri_attribute`                          | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`                        |

##### `String#gsub! [c function]` (`<unknown>`)

|     % | Samples | Calls | Caller                                                            | Location                                                                                                              |
| ----: | ------: | ----: | ----------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| 46.7% |      14 |    14 | `Loofah::HTML5::Scrub.scrub_uri_attribute`                        | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`                                                 |
| 40.0% |      12 |    12 | `ActiveSupport::NumberHelper::NumberToDelimitedConverter#parts`   | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/number_helper/number_to_delimited_converter.rb` |
|  3.3% |       1 |     1 | `ActiveSupport::Autoload#autoload`                                | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/dependencies/autoload.rb`                       |
|  3.3% |       1 |     1 | `ActiveSupport::JSON::Encoding::JSONGemCoderEncoder#encode`       | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/json/encoding.rb`                               |
|  3.3% |       1 |     1 | `ActiveSupport::NumberHelper::NumberToDelimitedConverter#convert` | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/number_helper/number_to_delimited_converter.rb` |

##### `Class#new [c function]` (`<unknown>`)

|     % | Samples | Calls | Caller                                                              | Location                                                                                                   |
| ----: | ------: | ----: | ------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| 37.0% |      10 |    10 | `ActionDispatch::Cookies::ChainedCookieJars#encrypted`              | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/cookies.rb`                 |
| 25.9% |       7 |     7 | `OpenSSL::HMAC.digest`                                              | `../../usr/local/lib/ruby/3.4.0/openssl/hmac.rb`                                                           |
| 11.1% |       3 |     3 | `ActionController::RequestForgeryProtection#csrf_token_hmac`        | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_controller/metal/request_forgery_protection.rb` |
|  7.4% |       2 |     2 | `ActionDispatch::Cookies::EncryptedKeyRotatingCookieJar#initialize` | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/cookies.rb`                 |
|  7.4% |       2 |     2 | `ActionDispatch::Response.create`                                   | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/http/response.rb`                      |

##### `Kernel.require [c function]` (`<unknown>`)

|      % | Samples | Calls | Caller                                | Location                                         |
| -----: | ------: | ----: | ------------------------------------- | ------------------------------------------------ |
| 734.6% |     191 |    55 | `block (2 levels) in replace_require` | `../../usr/local/lib/ruby/3.4.0/bundled_gems.rb` |

##### `String#split [c function]` (`<unknown>`)

|     % | Samples | Calls | Caller                                                          | Location                                                                                                              |
| ----: | ------: | ----: | --------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| 75.0% |      18 |    18 | `ActiveSupport::NumberHelper::NumberToDelimitedConverter#parts` | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/number_helper/number_to_delimited_converter.rb` |
| 25.0% |       6 |     6 | `Loofah::HTML5::Scrub.scrub_uri_attribute`                      | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`                                                 |

##### `Regexp#match? [c function]` (`<unknown>`)

|     % | Samples | Calls | Caller                                                       | Location                                                                                        |
| ----: | ------: | ----: | ------------------------------------------------------------ | ----------------------------------------------------------------------------------------------- |
| 61.9% |      13 |    13 | `String#blank?`                                              | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/core_ext/object/blank.rb` |
| 28.6% |       6 |     6 | `ActionView::Helpers::TagHelper#ensure_valid_html5_tag_name` | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/helpers/tag_helper.rb`          |
|  4.8% |       1 |     1 | `block in flag_cookies_as_secure!`                           | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/ssl.rb`          |
|  4.8% |       1 |     1 | `Loofah::HTML5::Scrub.scrub_uri_attribute`                   | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`                           |

##### `Kernel#dup [c function]` (`<unknown>`)

|     % | Samples | Calls | Caller                                                                | Location                                                                                                 |
| ----: | ------: | ----: | --------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| 40.0% |       8 |     8 | `ActiveSupport::NumberHelper::NumberConverter#default_format_options` | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/number_helper/number_converter.rb` |
| 20.0% |       4 |     4 | `ActiveSupport::NumberHelper::NumberConverter#i18n_format_options`    | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/number_helper/number_converter.rb` |
| 15.0% |       3 |     3 | `Rails::HTML::PermitScrubber#attributes=`                             | `../../usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`                     |
| 15.0% |       3 |     3 | `Rails::HTML::PermitScrubber#tags=`                                   | `../../usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`                     |
|  5.0% |       1 |     1 | `ActionDispatch::Request::Session::Options#to_hash`                   | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/request/session.rb`                  |

##### `Nokogiri::XML::Node#children [c function]` (`<unknown>`)

|      % | Samples | Calls | Caller                                              | Location                                                                                              |
| -----: | ------: | ----: | --------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| 240.0% |      48 |    48 | `Loofah::Scrubber#traverse_conditionally_bottom_up` | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/scrubber.rb`                                    |
| 165.0% |      33 |    32 | `Loofah::ScrubBehavior::Node#scrub!`                | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`                                    |
|  85.0% |      17 |    17 | `Nokogiri::XML::DocumentFragment#to_html`           | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document_fragment.rb` |

##### `Nokogiri::XML::Node#html_standard_serialize [c function]` (`<unknown>`)

|      % | Samples | Calls | Caller                           | Location                                                                                   |
| -----: | ------: | ----: | -------------------------------- | ------------------------------------------------------------------------------------------ |
| 100.0% |      20 |    20 | `Nokogiri::HTML5::Node#write_to` | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/node.rb` |

##### `Hash#each [c function]` (`<unknown>`)

|      % | Samples | Calls | Caller                                     | Location                                                                                     |
| -----: | ------: | ----: | ------------------------------------------ | -------------------------------------------------------------------------------------------- |
| 868.8% |     139 |   137 | `Nokogiri::XML::Document#decorate`         | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb` |
|  12.5% |       2 |     1 | `block in eager_load`                      | `../../usr/local/bundle/gems/zeitwerk-2.8.3/lib/zeitwerk/loader/eager_load.rb`               |
|  12.5% |       2 |     2 | `ActionDispatch::Cookies::CookieJar#write` | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/cookies.rb`   |
|   6.3% |       1 |     1 | `Enumerable#map [c function]`              | `<unknown>`                                                                                  |

##### `Hash#each_pair [c function]` (`<unknown>`)

|     % | Samples | Calls | Caller                                                                 | Location                                                                                               |
| ----: | ------: | ----: | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| 93.8% |      15 |    15 | `ActionView::Helpers::TagHelper::TagBuilder#tag_options`               | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/helpers/tag_helper.rb`                 |
|  6.3% |       1 |     1 | `ActiveSupport::HashWithIndifferentAccess#update_with_single_argument` | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/hash_with_indifferent_access.rb` |

##### `Hash#merge [c function]` (`<unknown>`)

|     % | Samples | Calls | Caller                                                                                        | Location                                                                                                 |
| ----: | ------: | ----: | --------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| 68.8% |      11 |    11 | `I18n::Backend::Fallbacks#translate`                                                          | `../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/fallbacks.rb`                                  |
| 18.8% |       3 |     3 | `ActiveSupport::NumberHelper::NumberConverter#options`                                        | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/number_helper/number_converter.rb` |
| 12.5% |       2 |     2 | `ActionDispatch::Routing::RouteSet::NamedRouteCollection::UrlHelper::OptimizedUrlHelper#call` | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/routing/route_set.rb`                |

##### `Kernel#require_relative [c function]` (`<unknown>`)

|      % | Samples | Calls | Caller                                    | Location                                                    |
| -----: | ------: | ----: | ----------------------------------------- | ----------------------------------------------------------- |
| 507.1% |      71 |     1 | `<main>`                                  | `profile.rb`                                                |
| 178.6% |      25 |     8 | `Kernel.require [c function]`             | `<unknown>`                                                 |
|  21.4% |       3 |     2 | `Kernel#require [c function]`             | `<unknown>`                                                 |
|   7.1% |       1 |     1 | `Bundler::Source::Rubygems#normalize_uri` | `../../usr/local/lib/ruby/3.4.0/bundler/source/rubygems.rb` |

##### `String.new [c function]` (`<unknown>`)

|     % | Samples | Calls | Caller                          | Location                                                                                                |
| ----: | ------: | ----: | ------------------------------- | ------------------------------------------------------------------------------------------------------- |
| 92.3% |      12 |    12 | `String#html_safe`              | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/core_ext/string/output_safety.rb` |
|  7.7% |       1 |     1 | `Nokogiri::XML::Node#serialize` | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb`                |

##### `#<Class:0xffff71e26550>#_app_views_layouts_application_html_erb__2593190439123575800_3144` (`<unknown>`)

|      % | Samples | Calls | Caller                            | Location    |
| -----: | ------: | ----: | --------------------------------- | ----------- |
| 433.3% |      52 |    50 | `Kernel#public_send [c function]` | `<unknown>` |

##### `Array#map` (`<unknown>`)

|     % | Samples | Calls | Caller                                                    | Location                                                                                     |
| ----: | ------: | ----: | --------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| 50.0% |       2 |     2 | `ActionView::Helpers::AssetTagHelper#stylesheet_link_tag` | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/helpers/asset_tag_helper.rb` |
| 25.0% |       1 |     1 | `Rack::Response::Helpers#set_cookie`                      | `../../usr/local/bundle/gems/rack-3.2.7/lib/rack/response.rb`                                |
| 25.0% |       1 |     1 | `ActionDispatch::SSL#flag_cookies_as_secure!`             | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/ssl.rb`       |

##### `Kernel#tap` (`<unknown>`)

|      % | Samples | Calls | Caller                     | Location                                                                               |
| -----: | ------: | ----: | -------------------------- | -------------------------------------------------------------------------------------- |
| 100.0% |       3 |     3 | `ActionDispatch::SSL#call` | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/ssl.rb` |

##### `ActionController::Metal#content_type=` (`<unknown>`)

|      % | Samples | Calls | Caller                                                   | Location                                                                                  |
| -----: | ------: | ----: | -------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| 100.0% |       2 |     2 | `ActionController::Rendering#_set_rendered_content_type` | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_controller/metal/rendering.rb` |

##### `ActionDispatch::Request.ignore_accept_header` (`<unknown>`)

|      % | Samples | Calls | Caller                                                    | Location                                                                                      |
| -----: | ------: | ----: | --------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| 100.0% |       2 |     2 | `ActionDispatch::Http::MimeNegotiation#use_accept_header` | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/http/mime_negotiation.rb` |

##### `ActionView::Helpers::ControllerHelper#response` (`<unknown>`)

|      % | Samples | Calls | Caller                                                          | Location                                                                                     |
| -----: | ------: | ----: | --------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| 100.0% |       2 |     2 | `ActionView::Helpers::AssetTagHelper#send_preload_links_header` | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/helpers/asset_tag_helper.rb` |

##### `I18n::Base#default_separator` (`<unknown>`)

|      % | Samples | Calls | Caller                      | Location                                              |
| -----: | ------: | ----: | --------------------------- | ----------------------------------------------------- |
| 100.0% |       2 |     2 | `I18n::Base#normalize_keys` | `../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n.rb` |

##### `String#unpack` (`<unknown>`)

|     % | Samples | Calls | Caller                                      | Location                                                                              |
| ----: | ------: | ----: | ------------------------------------------- | ------------------------------------------------------------------------------------- |
| 50.0% |       1 |     1 | `block in parse`                            | `../../usr/local/bundle/gems/tzinfo-2.0.6/lib/tzinfo/data_sources/zoneinfo_reader.rb` |
| 50.0% |       1 |     1 | `TZInfo::DataSources::ZoneinfoReader#parse` | `../../usr/local/bundle/gems/tzinfo-2.0.6/lib/tzinfo/data_sources/zoneinfo_reader.rb` |

##### `block (2 levels) in _app_views_statuses_index_html_erb___3573933945962839437_3112` (`<unknown>`)

|       % | Samples | Calls | Caller       | Location    |
| ------: | ------: | ----: | ------------ | ----------- |
| 1650.0% |      33 |    33 | `Array#each` | `<unknown>` |

##### `Integer#times` (`<unknown>`)

|      % | Samples | Calls | Caller                                 | Location    |
| -----: | ------: | ----: | -------------------------------------- | ----------- |
| 800.0% |       8 |     5 | `Enumerator#each [c function]`         | `<unknown>` |
| 100.0% |       1 |     1 | `Kernel#require_relative [c function]` | `<unknown>` |

##### `Ractor.make_shareable` (`<unknown>`)

|      % | Samples | Calls | Caller                                 | Location    |
| -----: | ------: | ----: | -------------------------------------- | ----------- |
| 100.0% |       1 |     1 | `Kernel#require_relative [c function]` | `<unknown>` |

##### `Time.now` (`<unknown>`)

|      % | Samples | Calls | Caller   | Location     |
| -----: | ------: | ----: | -------- | ------------ |
| 100.0% |       1 |     1 | `<main>` | `profile.rb` |

##### `ActionController::Base.logger` (`<unknown>`)

|      % | Samples | Calls | Caller                                   | Location                                                                                 |
| -----: | ------: | ----: | ---------------------------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% |       1 |     1 | `ActionController::LogSubscriber#logger` | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_controller/log_subscriber.rb` |

##### `ActionController::Base#per_form_csrf_tokens` (`<unknown>`)

|      % | Samples | Calls | Caller                                                                 | Location                                                                                                   |
| -----: | ------: | ----: | ---------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| 100.0% |       1 |     1 | `ActionController::RequestForgeryProtection#masked_authenticity_token` | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_controller/metal/request_forgery_protection.rb` |

##### `ActionController::Metal#session` (`<unknown>`)

|      % | Samples | Calls | Caller                                                                | Location                                                                                                   |
| -----: | ------: | ----: | --------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| 200.0% |       2 |     2 | `ActionController::RequestForgeryProtection#protect_against_forgery?` | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_controller/metal/request_forgery_protection.rb` |

##### `ActionDispatch::ParamBuilder.from_query_string` (`<unknown>`)

|      % | Samples | Calls | Caller         | Location                                                                             |
| -----: | ------: | ----: | -------------- | ------------------------------------------------------------------------------------ |
| 100.0% |       1 |     1 | `block in GET` | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/http/request.rb` |

##### `ActionController::Base::HelperMethods#content_security_policy?` (`<unknown>`)

|      % | Samples | Calls | Caller                                        | Location                                                                               |
| -----: | ------: | ----: | --------------------------------------------- | -------------------------------------------------------------------------------------- |
| 100.0% |       1 |     1 | `ActionView::Helpers::CspHelper#csp_meta_tag` | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/helpers/csp_helper.rb` |

##### `Kernel#Float` (`<unknown>`)

|      % | Samples | Calls | Caller                                          | Location                                                                                  |
| -----: | ------: | ----: | ----------------------------------------------- | ----------------------------------------------------------------------------------------- |
| 100.0% |       1 |     1 | `ActionView::Helpers::NumberHelper#parse_float` | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/helpers/number_helper.rb` |

#### Callees

Callees ranked by contribution to each function's total samples. Percentages are of the function's total and can exceed 100% for calls within a recursion cycle.

##### `<main>` (`profile.rb`)

|     % | Samples | Calls | Callee                                 | Location                                                           |
| ----: | ------: | ----: | -------------------------------------- | ------------------------------------------------------------------ |
| 94.9% |   1,475 |     8 | `Rails::Engine#call`                   | `../../usr/local/bundle/gems/railties-8.1.3.1/lib/rails/engine.rb` |
|  4.6% |      71 |     1 | `Kernel#require_relative [c function]` | `<unknown>`                                                        |
|  0.5% |       7 |     6 | `Rack::BodyProxy#close`                | `../../usr/local/bundle/gems/rack-3.2.7/lib/rack/body_proxy.rb`    |
|  0.1% |       1 |     1 | `Time.now`                             | `<unknown>`                                                        |

##### `Rails::Engine#call` (`../../usr/local/bundle/gems/railties-8.1.3.1/lib/rails/engine.rb`)

|     % | Samples | Calls | Callee                             | Location                                                                                      |
| ----: | ------: | ----: | ---------------------------------- | --------------------------------------------------------------------------------------------- |
| 99.9% |   1,473 |     9 | `ActionDispatch::AssumeSSL#call`   | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/assume_ssl.rb` |
|  0.1% |       2 |     2 | `Rails::Application#build_request` | `../../usr/local/bundle/gems/railties-8.1.3.1/lib/rails/application.rb`                       |

##### `ActionDispatch::AssumeSSL#call` (`../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/assume_ssl.rb`)

|      % | Samples | Calls | Callee                     | Location                                                                               |
| -----: | ------: | ----: | -------------------------- | -------------------------------------------------------------------------------------- |
| 100.0% |   1,473 |     9 | `ActionDispatch::SSL#call` | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/ssl.rb` |

##### `ActionDispatch::SSL#call` (`../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/ssl.rb`)

|     % | Samples | Calls | Callee                | Location                                                      |
| ----: | ------: | ----: | --------------------- | ------------------------------------------------------------- |
| 99.7% |   1,469 |    13 | `Rack::Sendfile#call` | `../../usr/local/bundle/gems/rack-3.2.7/lib/rack/sendfile.rb` |
|  0.2% |       3 |     3 | `Kernel#tap`          | `<unknown>`                                                   |

##### `Rack::Sendfile#call` (`../../usr/local/bundle/gems/rack-3.2.7/lib/rack/sendfile.rb`)

|     % | Samples | Calls | Callee                            | Location                                                                                  |
| ----: | ------: | ----: | --------------------------------- | ----------------------------------------------------------------------------------------- |
| 99.9% |   1,468 |    14 | `ActionDispatch::Static#call`     | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/static.rb` |
|  0.1% |       1 |     1 | `Kernel#respond_to? [c function]` | `<unknown>`                                                                               |

##### `ActionDispatch::Static#call` (`../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/static.rb`)

|     % | Samples | Calls | Callee                                | Location                                                                                    |
| ----: | ------: | ----: | ------------------------------------- | ------------------------------------------------------------------------------------------- |
| 99.5% |   1,461 |    21 | `ActionDispatch::Executor#call`       | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/executor.rb` |
|  0.5% |       7 |     7 | `ActionDispatch::FileHandler#attempt` | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/static.rb`   |

##### `ActionDispatch::Executor#call` (`../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/executor.rb`)

|      % | Samples | Calls | Callee               | Location                                                     |
| -----: | ------: | ----: | -------------------- | ------------------------------------------------------------ |
| 100.0% |   1,461 |    21 | `Rack::Runtime#call` | `../../usr/local/bundle/gems/rack-3.2.7/lib/rack/runtime.rb` |

##### `Rack::Runtime#call` (`../../usr/local/bundle/gems/rack-3.2.7/lib/rack/runtime.rb`)

|     % | Samples | Calls | Callee                      | Location                                                             |
| ----: | ------: | ----: | --------------------------- | -------------------------------------------------------------------- |
| 99.9% |   1,460 |    22 | `Rack::MethodOverride#call` | `../../usr/local/bundle/gems/rack-3.2.7/lib/rack/method_override.rb` |

##### `ActionDispatch::RequestId#call` (`../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/request_id.rb`)

|     % | Samples | Calls | Callee                                      | Location                                                                                      |
| ----: | ------: | ----: | ------------------------------------------- | --------------------------------------------------------------------------------------------- |
| 99.9% |   1,459 |    23 | `ActionDispatch::RemoteIp#call`             | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/remote_ip.rb`  |
|  0.1% |       1 |     1 | `ActionDispatch::RequestId#make_request_id` | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/request_id.rb` |

##### `Rack::MethodOverride#call` (`../../usr/local/bundle/gems/rack-3.2.7/lib/rack/method_override.rb`)

|      % | Samples | Calls | Callee                           | Location                                                                                      |
| -----: | ------: | ----: | -------------------------------- | --------------------------------------------------------------------------------------------- |
| 100.0% |   1,460 |    22 | `ActionDispatch::RequestId#call` | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/request_id.rb` |

##### `ActionDispatch::RemoteIp#call` (`../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/remote_ip.rb`)

|     % | Samples | Calls | Callee                               | Location                                                                             |
| ----: | ------: | ----: | ------------------------------------ | ------------------------------------------------------------------------------------ |
| 99.9% |   1,458 |    24 | `Rails::Rack::SilenceRequest#call`   | `../../usr/local/bundle/gems/railties-8.1.3.1/lib/rails/rack/silence_request.rb`     |
|  0.1% |       1 |     1 | `ActionDispatch::Request#remote_ip=` | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/http/request.rb` |

##### `Rails::Rack::SilenceRequest#call` (`../../usr/local/bundle/gems/railties-8.1.3.1/lib/rails/rack/silence_request.rb`)

|      % | Samples | Calls | Callee                     | Location                                                                |
| -----: | ------: | ----: | -------------------------- | ----------------------------------------------------------------------- |
| 100.0% |   1,458 |    24 | `Rails::Rack::Logger#call` | `../../usr/local/bundle/gems/railties-8.1.3.1/lib/rails/rack/logger.rb` |

##### `Rails::Rack::Logger#call` (`../../usr/local/bundle/gems/railties-8.1.3.1/lib/rails/rack/logger.rb`)

|      % | Samples | Calls | Callee                         | Location                                                                |
| -----: | ------: | ----: | ------------------------------ | ----------------------------------------------------------------------- |
| 100.0% |   1,458 |    24 | `Rails::Rack::Logger#call_app` | `../../usr/local/bundle/gems/railties-8.1.3.1/lib/rails/rack/logger.rb` |

##### `Rails::Rack::Logger#call_app` (`../../usr/local/bundle/gems/railties-8.1.3.1/lib/rails/rack/logger.rb`)

|     % | Samples | Calls | Callee                                                    | Location                                                                                             |
| ----: | ------: | ----: | --------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| 99.9% |   1,457 |    25 | `ActionDispatch::ShowExceptions#call`                     | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/show_exceptions.rb`   |
|  0.1% |       1 |     1 | `ActiveSupport::Notifications::Instrumenter#build_handle` | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/notifications/instrumenter.rb` |

##### `ActionDispatch::Callbacks#call` (`../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/callbacks.rb`)

|      % | Samples | Calls | Callee                                   | Location                                                                            |
| -----: | ------: | ----: | ---------------------------------------- | ----------------------------------------------------------------------------------- |
| 100.0% |   1,457 |    25 | `ActiveSupport::Callbacks#run_callbacks` | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/callbacks.rb` |

##### `ActionDispatch::DebugExceptions#call` (`../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/debug_exceptions.rb`)

|      % | Samples | Calls | Callee                           | Location                                                                                     |
| -----: | ------: | ----: | -------------------------------- | -------------------------------------------------------------------------------------------- |
| 100.0% |   1,457 |    25 | `ActionDispatch::Callbacks#call` | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/callbacks.rb` |

##### `ActionDispatch::ShowExceptions#call` (`../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/show_exceptions.rb`)

|      % | Samples | Calls | Callee                                 | Location                                                                                            |
| -----: | ------: | ----: | -------------------------------------- | --------------------------------------------------------------------------------------------------- |
| 100.0% |   1,457 |    25 | `ActionDispatch::DebugExceptions#call` | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/debug_exceptions.rb` |

##### `Array#each` (`<unknown>`)

|      % | Samples | Calls | Callee                                                                   | Location                                                                                     |
| -----: | ------: | ----: | ------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------- |
| 599.1% |   1,336 |    97 | `block in recognize`                                                     | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/journey/router.rb`       |
| 552.9% |   1,233 |   149 | `block in _app_views_statuses_index_html_erb___3573933945962839437_3112` | `<unknown>`                                                                                  |
|  42.2% |      94 |    67 | `block in digest_body`                                                   | `../../usr/local/bundle/gems/rack-3.2.7/lib/rack/etag.rb`                                    |
|  38.6% |      86 |    80 | `block in scrub_attributes`                                              | `../../usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`         |
|  33.6% |      75 |    75 | `block (2 levels) in decorate`                                           | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb` |

##### `block in each` (`../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`)

|      % | Samples | Calls | Callee                                      | Location                                                                                     |
| -----: | ------: | ----: | ------------------------------------------- | -------------------------------------------------------------------------------------------- |
| 189.7% |     294 |   247 | `block in scrub!`                           | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`                           |
|  91.6% |     142 |   128 | `block in to_html`                          | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb` |
|  18.7% |      29 |    29 | `block in traverse_conditionally_bottom_up` | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/scrubber.rb`                           |
|   0.6% |       1 |     1 | `Nokogiri::XML::NodeSet#[] [c function]`    | `<unknown>`                                                                                  |

##### `ActiveSupport::NumberHelper::NumberConverter#i18n_format_options` (`../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/number_helper/number_converter.rb`)

|     % | Samples | Calls | Callee                    | Location                                              |
| ----: | ------: | ----: | ------------------------- | ----------------------------------------------------- |
| 63.2% |      96 |    91 | `I18n::Base#translate`    | `../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n.rb` |
|  2.6% |       4 |     4 | `Kernel#dup [c function]` | `<unknown>`                                           |

##### `block in to_html` (`../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`)

|     % | Samples | Calls | Callee                        | Location                                                                                 |
| ----: | ------: | ----: | ----------------------------- | ---------------------------------------------------------------------------------------- |
| 98.6% |     140 |   126 | `Nokogiri::XML::Node#to_html` | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb` |

##### `Nokogiri::XML::Node#to_html` (`../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb`)

|     % | Samples | Calls | Callee                          | Location                                                                                 |
| ----: | ------: | ----: | ------------------------------- | ---------------------------------------------------------------------------------------- |
| 95.7% |     134 |   120 | `Nokogiri::XML::Node#to_format` | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb` |

##### `block in _app_views_statuses_index_html_erb___3573933945962839437_3112` (`<unknown>`)

|      % | Samples | Calls | Callee                                                    | Location                                                                                    |
| -----: | ------: | ----: | --------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| 862.8% |     742 |   352 | `ActionView::Helpers::SanitizeHelper#sanitize`            | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/helpers/sanitize_helper.rb` |
| 390.7% |     336 |   272 | `ActionView::Helpers::NumberHelper#number_with_delimiter` | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/helpers/number_helper.rb`   |
|  41.9% |      36 |    36 | `block in define_url_helper`                              | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/routing/route_set.rb`   |
|  40.7% |      35 |    35 | `ActionView::Helpers::UrlHelper#link_to`                  | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/helpers/url_helper.rb`      |
|  38.4% |      33 |    33 | `Array#each`                                              | `<unknown>`                                                                                 |

##### `Kernel#extend [c function]` (`<unknown>`)

|     % | Samples | Calls | Callee                              | Location    |
| ----: | ------: | ----: | ----------------------------------- | ----------- |
| 95.9% |      70 |    70 | `Module#extend_object [c function]` | `<unknown>` |

##### `Nokogiri::Gumbo.fragment [c function]` (`<unknown>`)

|     % | Samples | Calls | Callee                                             | Location    |
| ----: | ------: | ----: | -------------------------------------------------- | ----------- |
| 47.4% |      27 |    26 | `Nokogiri::XML::Node#internal_subset [c function]` | `<unknown>` |

##### `Nokogiri::HTML4::Document.new [c function]` (`<unknown>`)

|     % | Samples | Calls | Callee                                 | Location                                                           |
| ----: | ------: | ----: | -------------------------------------- | ------------------------------------------------------------------ |
| 35.4% |      17 |    17 | `Loofah::DocumentDecorator#initialize` | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb` |

##### `String#gsub [c function]` (`<unknown>`)

|    % | Samples | Calls | Callee            | Location                                                                                     |
| ---: | ------: | ----: | ----------------- | -------------------------------------------------------------------------------------------- |
| 2.2% |       1 |     1 | `block in escape` | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/journey/router/utils.rb` |

##### `Class#new [c function]` (`<unknown>`)

|     % | Samples | Calls | Callee                                                              | Location                                                                                   |
| ----: | ------: | ----: | ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| 37.0% |      10 |    10 | `ActionDispatch::Cookies::EncryptedKeyRotatingCookieJar#initialize` | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/cookies.rb` |
| 22.2% |       6 |     6 | `OpenSSL::HMAC#initialize [c function]`                             | `<unknown>`                                                                                |
| 14.8% |       4 |     4 | `ActiveSupport::Messages::Rotator#initialize`                       | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/messages/rotator.rb` |
| 11.1% |       3 |     3 | `OpenSSL::Cipher#initialize [c function]`                           | `<unknown>`                                                                                |
| 11.1% |       3 |     3 | `block (3 levels) in <class:Digest>`                                | `../../usr/local/lib/ruby/3.4.0/openssl/digest.rb`                                         |

##### `Kernel.require [c function]` (`<unknown>`)

|      % | Samples | Calls | Callee                                        | Location                                                                                        |
| -----: | ------: | ----: | --------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| 434.6% |     113 |    24 | `block (2 levels) in replace_require`         | `../../usr/local/lib/ruby/3.4.0/bundled_gems.rb`                                                |
| 100.0% |      26 |    13 | `Kernel#require`                              | `../../usr/local/bundle/gems/zeitwerk-2.8.3/lib/zeitwerk/core_ext/kernel.rb`                    |
|  96.2% |      25 |     8 | `Kernel#require_relative [c function]`        | `<unknown>`                                                                                     |
|   3.8% |       1 |     1 | `ActiveSupport::Autoload#autoload`            | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/dependencies/autoload.rb` |
|   3.8% |       1 |     1 | `ActiveSupport::LazyLoadHooks#run_load_hooks` | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/lazy_load_hooks.rb`       |

##### `Kernel#dup [c function]` (`<unknown>`)

|     % | Samples | Calls | Callee                               | Location    |
| ----: | ------: | ----: | ------------------------------------ | ----------- |
| 35.0% |       7 |     7 | `Kernel#initialize_dup [c function]` | `<unknown>` |

##### `Nokogiri::XML::Node#children [c function]` (`<unknown>`)

|      % | Samples | Calls | Callee                             | Location                                                                                     |
| -----: | ------: | ----: | ---------------------------------- | -------------------------------------------------------------------------------------------- |
| 390.0% |      78 |    77 | `Nokogiri::XML::Document#decorate` | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb` |

##### `Hash#each [c function]` (`<unknown>`)

|      % | Samples | Calls | Callee                           | Location                                                                                       |
| -----: | ------: | ----: | -------------------------------- | ---------------------------------------------------------------------------------------------- |
| 787.5% |     126 |   124 | `block in decorate`              | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`   |
|  12.5% |       2 |     2 | `block in write`                 | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/cookies.rb`     |
|  12.5% |       2 |     1 | `block (2 levels) in eager_load` | `../../usr/local/bundle/gems/zeitwerk-2.8.3/lib/zeitwerk/loader/eager_load.rb`                 |
|   6.3% |       1 |     1 | `block in build_handle`          | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/notifications/fanout.rb` |

##### `Hash#each_pair [c function]` (`<unknown>`)

|     % | Samples | Calls | Callee                 | Location                                                                               |
| ----: | ------: | ----: | ---------------------- | -------------------------------------------------------------------------------------- |
| 93.8% |      15 |    15 | `block in tag_options` | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/helpers/tag_helper.rb` |

##### `Kernel#require_relative [c function]` (`<unknown>`)

|      % | Samples | Calls | Callee                                            | Location                                                                              |
| -----: | ------: | ----: | ------------------------------------------------- | ------------------------------------------------------------------------------------- |
| 250.0% |      35 |     1 | `Rails::Application#initialize!`                  | `../../usr/local/bundle/gems/railties-8.1.3.1/lib/rails/application.rb`               |
| 221.4% |      31 |     4 | `block (2 levels) in replace_require`             | `../../usr/local/lib/ruby/3.4.0/bundled_gems.rb`                                      |
|  57.1% |       8 |     2 | `Kernel#require`                                  | `<unknown>`                                                                           |
|  28.6% |       4 |     1 | `Rails::Application::Configuration#load_defaults` | `../../usr/local/bundle/gems/railties-8.1.3.1/lib/rails/application/configuration.rb` |
|  28.6% |       4 |     1 | `Rails::Railtie.config`                           | `<unknown>`                                                                           |

##### `String.new [c function]` (`<unknown>`)

|     % | Samples | Calls | Callee                                 | Location                                                                                                |
| ----: | ------: | ----: | -------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| 53.8% |       7 |     7 | `ActiveSupport::SafeBuffer#initialize` | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/core_ext/string/output_safety.rb` |

##### `#<Class:0xffff71e26550>#_app_views_layouts_application_html_erb__2593190439123575800_3144` (`<unknown>`)

|      % | Samples | Calls | Callee                                                    | Location                                                                                     |
| -----: | ------: | ----: | --------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| 333.3% |      40 |    40 | `ActionView::Helpers::CsrfHelper#csrf_meta_tags`          | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/helpers/csrf_helper.rb`      |
|  41.7% |       5 |     5 | `ActionView::OutputBuffer#<<`                             | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/buffers.rb`                  |
|  33.3% |       4 |     4 | `ActionView::Helpers::AssetTagHelper#stylesheet_link_tag` | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/helpers/asset_tag_helper.rb` |
|   8.3% |       1 |     1 | `ActionView::Helpers::CspHelper#csp_meta_tag`             | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/helpers/csp_helper.rb`       |

##### `Array#map` (`<unknown>`)

|     % | Samples | Calls | Callee                             | Location                                                                                     |
| ----: | ------: | ----: | ---------------------------------- | -------------------------------------------------------------------------------------------- |
| 50.0% |       2 |     2 | `block in stylesheet_link_tag`     | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/helpers/asset_tag_helper.rb` |
| 25.0% |       1 |     1 | `block in flag_cookies_as_secure!` | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/ssl.rb`       |
| 25.0% |       1 |     1 | `block in set_cookie_header`       | `../../usr/local/bundle/gems/rack-3.2.7/lib/rack/utils.rb`                                   |

##### `Kernel#tap` (`<unknown>`)

|      % | Samples | Calls | Callee          | Location                                                                               |
| -----: | ------: | ----: | --------------- | -------------------------------------------------------------------------------------- |
| 100.0% |       3 |     3 | `block in call` | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/ssl.rb` |

##### `ActionController::Metal#content_type=` (`<unknown>`)

|      % | Samples | Calls | Callee                                   | Location                                                                              |
| -----: | ------: | ----: | ---------------------------------------- | ------------------------------------------------------------------------------------- |
| 100.0% |       2 |     2 | `ActionDispatch::Response#content_type=` | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/http/response.rb` |

##### `I18n::Base#default_separator` (`<unknown>`)

|     % | Samples | Calls | Callee                           | Location                                                     |
| ----: | ------: | ----: | -------------------------------- | ------------------------------------------------------------ |
| 50.0% |       1 |     1 | `I18n::Config#default_separator` | `../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n/config.rb` |

##### `block (2 levels) in _app_views_statuses_index_html_erb___3573933945962839437_3112` (`<unknown>`)

|       % | Samples | Calls | Callee                                   | Location                                                                                  |
| ------: | ------: | ----: | ---------------------------------------- | ----------------------------------------------------------------------------------------- |
| 1550.0% |      31 |    31 | `block in define_url_helper`             | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/routing/route_set.rb` |
|  100.0% |       2 |     2 | `ActionView::Helpers::UrlHelper#link_to` | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/helpers/url_helper.rb`    |

##### `Integer#times` (`<unknown>`)

|      % | Samples | Calls | Callee                  | Location                                                                              |
| -----: | ------: | ----: | ----------------------- | ------------------------------------------------------------------------------------- |
| 800.0% |       8 |     5 | `block in parse`        | `../../usr/local/bundle/gems/tzinfo-2.0.6/lib/tzinfo/data_sources/zoneinfo_reader.rb` |
| 100.0% |       1 |     1 | `block in <module:URI>` | `../../usr/local/bundle/gems/uri-1.1.1/lib/uri/common.rb`                             |

##### `ActionController::Base.logger` (`<unknown>`)

|      % | Samples | Calls | Callee                                         | Location                                                                                  |
| -----: | ------: | ----: | ---------------------------------------------- | ----------------------------------------------------------------------------------------- |
| 100.0% |       1 |     1 | `ActiveSupport::OrderedOptions#method_missing` | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/ordered_options.rb` |

##### `ActionController::Base#per_form_csrf_tokens` (`<unknown>`)

|      % | Samples | Calls | Callee                                         | Location                                                                                  |
| -----: | ------: | ----: | ---------------------------------------------- | ----------------------------------------------------------------------------------------- |
| 100.0% |       1 |     1 | `ActiveSupport::OrderedOptions#method_missing` | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/ordered_options.rb` |

##### `ActionController::Metal#session` (`<unknown>`)

|      % | Samples | Calls | Callee                           | Location                                                     |
| -----: | ------: | ----: | -------------------------------- | ------------------------------------------------------------ |
| 100.0% |       1 |     1 | `Rack::Request::Helpers#session` | `../../usr/local/bundle/gems/rack-3.2.7/lib/rack/request.rb` |

##### `ActionDispatch::ParamBuilder.from_query_string` (`<unknown>`)

|      % | Samples | Calls | Callee                                           | Location                                                                                   |
| -----: | ------: | ----: | ------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| 100.0% |       1 |     1 | `ActionDispatch::ParamBuilder#from_query_string` | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/http/param_builder.rb` |
