# Sampling profile diff

Collected 1,555 samples.

| Category         | Change | Delta |             % |   Samples |
| ---------------- | -----: | ----: | ------------: | --------: |
| Native           | +13.9% |  +117 | 54.0% → 61.5% | 839 → 956 |
| Third-party      | -19.5% |  -128 | 42.1% → 33.9% | 655 → 527 |
| Unknown          | +22.0% |   +11 |   3.2% → 3.9% |   50 → 61 |
| Standard library |   0.0% |     0 |          0.7% |        11 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|   Change | Delta |           % |  Samples | Function                                                               | Location                                                                                                                                                                                                                                  |
| -------: | ----: | ----------: | -------: | ---------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   +80.0% |   +56 | 4.5% → 8.1% | 70 → 126 | `Module#extend_object [c function]`                                    | `<unknown>`                                                                                                                                                                                                                               |
|  +105.0% |   +21 | 1.3% → 2.6% |  20 → 41 | `Nokogiri::XML::Node#html_standard_serialize [c function]`             | `<unknown>`                                                                                                                                                                                                                               |
|  +333.3% |   +20 | 0.4% → 1.7% |   6 → 26 | `String.new [c function]`                                              | `<unknown>`                                                                                                                                                                                                                               |
|  +112.5% |   +18 | 1.0% → 2.2% |  16 → 34 | `Hash#merge [c function]`                                              | `<unknown>`                                                                                                                                                                                                                               |
|  +850.0% |   +17 | 0.1% → 1.2% |   2 → 19 | `ActiveSupport::NumberHelper::NumberToDelimitedConverter#parts`        | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/number_helper/number_to_delimited_converter.rb → ../../usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_to_delimited_converter.rb` |
|   +29.8% |   +17 | 3.7% → 4.8% |  57 → 74 | `Nokogiri::Gumbo.fragment [c function]`                                | `<unknown>`                                                                                                                                                                                                                               |
| +1600.0% |   +16 | 0.1% → 1.1% |   1 → 17 | `Hash#transform_keys [c function]`                                     | `<unknown>`                                                                                                                                                                                                                               |
|   +92.3% |   +12 | 0.8% → 1.6% |  13 → 25 | `Kernel#dup [c function]`                                              | `<unknown>`                                                                                                                                                                                                                               |
|   +41.7% |   +10 | 1.5% → 2.2% |  24 → 34 | `block in _app_views_statuses_index_html_erb__328993190567029661_3128` | `<unknown>`                                                                                                                                                                                                                               |
|      new |   +10 | 0.0% → 0.6% |   0 → 10 | `ActionView::Helpers::NumberHelper#number_with_delimiter`              | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/helpers/number_helper.rb → ../../usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/number_helper.rb`                                                         |
|  +900.0% |    +9 | 0.1% → 0.6% |   1 → 10 | `Loofah::HTML5::Scrub.cdata_needs_escaping?`                           | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`                                                                                                                                                                     |
|   +90.0% |    +9 | 0.6% → 1.2% |  10 → 19 | `Nokogiri::XML::Node#node_name [c function]`                           | `<unknown>`                                                                                                                                                                                                                               |
|   +88.9% |    +8 | 0.6% → 1.1% |   9 → 17 | `Array#join [c function]`                                              | `<unknown>`                                                                                                                                                                                                                               |
|   +25.8% |    +8 | 2.0% → 2.5% |  31 → 39 | `Nokogiri::HTML4::Document.new [c function]`                           | `<unknown>`                                                                                                                                                                                                                               |
|   +77.8% |    +7 | 0.6% → 1.0% |   9 → 16 | `ActionView::OutputBuffer#<<`                                          | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/buffers.rb → ../../usr/local/bundle/gems/actionview-8.1.4/lib/action_view/buffers.rb`                                                                                     |
|   +75.0% |    +6 | 0.5% → 0.9% |   8 → 14 | `Class#new [c function]`                                               | `<unknown>`                                                                                                                                                                                                                               |
|  +120.0% |    +6 | 0.3% → 0.7% |   5 → 11 | `Nokogiri::HTML5::DocumentFragment#initialize`                         | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/document_fragment.rb`                                                                                                                                   |
|   +71.4% |    +5 | 0.5% → 0.8% |   7 → 12 | `Nokogiri::XML::Document#decorate`                                     | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`                                                                                                                                              |
|   +45.5% |    +5 | 0.7% → 1.0% |  11 → 16 | `Loofah::Scrubber#traverse_conditionally_bottom_up`                    | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/scrubber.rb`                                                                                                                                                                        |
|  +100.0% |    +5 | 0.3% → 0.6% |   5 → 10 | `Nokogiri::XML::Node#attribute_nodes [c function]`                     | `<unknown>`                                                                                                                                                                                                                               |

##### Native

|   Change | Delta |           % |  Samples | Function                                                   | Location    |
| -------: | ----: | ----------: | -------: | ---------------------------------------------------------- | ----------- |
|   +80.0% |   +56 | 4.5% → 8.1% | 70 → 126 | `Module#extend_object [c function]`                        | `<unknown>` |
|  +105.0% |   +21 | 1.3% → 2.6% |  20 → 41 | `Nokogiri::XML::Node#html_standard_serialize [c function]` | `<unknown>` |
|  +333.3% |   +20 | 0.4% → 1.7% |   6 → 26 | `String.new [c function]`                                  | `<unknown>` |
|  +112.5% |   +18 | 1.0% → 2.2% |  16 → 34 | `Hash#merge [c function]`                                  | `<unknown>` |
|   +29.8% |   +17 | 3.7% → 4.8% |  57 → 74 | `Nokogiri::Gumbo.fragment [c function]`                    | `<unknown>` |
| +1600.0% |   +16 | 0.1% → 1.1% |   1 → 17 | `Hash#transform_keys [c function]`                         | `<unknown>` |
|   +92.3% |   +12 | 0.8% → 1.6% |  13 → 25 | `Kernel#dup [c function]`                                  | `<unknown>` |
|   +90.0% |    +9 | 0.6% → 1.2% |  10 → 19 | `Nokogiri::XML::Node#node_name [c function]`               | `<unknown>` |
|   +88.9% |    +8 | 0.6% → 1.1% |   9 → 17 | `Array#join [c function]`                                  | `<unknown>` |
|   +25.8% |    +8 | 2.0% → 2.5% |  31 → 39 | `Nokogiri::HTML4::Document.new [c function]`               | `<unknown>` |
|   +75.0% |    +6 | 0.5% → 0.9% |   8 → 14 | `Class#new [c function]`                                   | `<unknown>` |
|  +100.0% |    +5 | 0.3% → 0.6% |   5 → 10 | `Nokogiri::XML::Node#attribute_nodes [c function]`         | `<unknown>` |
|  +250.0% |    +5 | 0.1% → 0.5% |    2 → 7 | `Kernel#initialize_dup [c function]`                       | `<unknown>` |
|  +500.0% |    +5 | 0.1% → 0.4% |    1 → 6 | `StringIO#write [c function]`                              | `<unknown>` |
|      new |    +5 | 0.0% → 0.3% |    0 → 5 | `CGI::Escape#unescapeHTML [c function]`                    | `<unknown>` |
|   +12.1% |    +4 | 2.1% → 2.4% |  33 → 37 | `(unknown) [c function]`                                   | `<unknown>` |
|  +400.0% |    +4 | 0.1% → 0.3% |    1 → 5 | `String#match? [c function]`                               | `<unknown>` |
|  +400.0% |    +4 | 0.1% → 0.3% |    1 → 5 | `StringIO#initialize [c function]`                         | `<unknown>` |
|  +133.3% |    +4 | 0.2% → 0.5% |    3 → 7 | `Nokogiri::XML::Attr#content [c function]`                 | `<unknown>` |
|   +30.0% |    +3 | 0.6% → 0.8% |  10 → 13 | `Kernel.require [c function]`                              | `<unknown>` |

##### Third-party

|  Change | Delta |           % | Samples | Function                                                            | Location                                                                                                                                                                                                                                  |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| +850.0% |   +17 | 0.1% → 1.2% |  2 → 19 | `ActiveSupport::NumberHelper::NumberToDelimitedConverter#parts`     | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/number_helper/number_to_delimited_converter.rb → ../../usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_to_delimited_converter.rb` |
|     new |   +10 | 0.0% → 0.6% |  0 → 10 | `ActionView::Helpers::NumberHelper#number_with_delimiter`           | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/helpers/number_helper.rb → ../../usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/number_helper.rb`                                                         |
| +900.0% |    +9 | 0.1% → 0.6% |  1 → 10 | `Loofah::HTML5::Scrub.cdata_needs_escaping?`                        | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`                                                                                                                                                                     |
|  +77.8% |    +7 | 0.6% → 1.0% |  9 → 16 | `ActionView::OutputBuffer#<<`                                       | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/buffers.rb → ../../usr/local/bundle/gems/actionview-8.1.4/lib/action_view/buffers.rb`                                                                                     |
| +120.0% |    +6 | 0.3% → 0.7% |  5 → 11 | `Nokogiri::HTML5::DocumentFragment#initialize`                      | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/document_fragment.rb`                                                                                                                                   |
|  +71.4% |    +5 | 0.5% → 0.8% |  7 → 12 | `Nokogiri::XML::Document#decorate`                                  | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`                                                                                                                                              |
|  +45.5% |    +5 | 0.7% → 1.0% | 11 → 16 | `Loofah::Scrubber#traverse_conditionally_bottom_up`                 | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/scrubber.rb`                                                                                                                                                                        |
| +500.0% |    +5 | 0.1% → 0.4% |   1 → 6 | `Rails::HTML::Concern::Serializer::UTF8Encode#serialize`            | `../../usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/sanitizer.rb`                                                                                                                                                      |
| +500.0% |    +5 | 0.1% → 0.4% |   1 → 6 | `Nokogiri::XML::Node#attributes`                                    | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb`                                                                                                                                                  |
| +500.0% |    +5 | 0.1% → 0.4% |   1 → 6 | `Loofah::HTML5::Scrub.scrub_css_attribute`                          | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`                                                                                                                                                                     |
| +500.0% |    +5 | 0.1% → 0.4% |   1 → 6 | `ActionView::Helpers::UrlHelper#convert_options_to_data_attributes` | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/helpers/url_helper.rb → ../../usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/url_helper.rb`                                                               |
| +200.0% |    +4 | 0.1% → 0.4% |   2 → 6 | `block in to_html`                                                  | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`                                                                                                                                              |
|  +66.7% |    +4 | 0.4% → 0.6% |  6 → 10 | `Nokogiri::XML::Document#decorators`                                | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`                                                                                                                                              |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `Rails::HTML::PermitScrubber#scrub_attributes`                      | `../../usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`                                                                                                                                                      |
|  +75.0% |    +3 | 0.3% → 0.5% |   4 → 7 | `Nokogiri::XML::NodeSet#to_html`                                    | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`                                                                                                                                              |
|  +75.0% |    +3 | 0.3% → 0.5% |   4 → 7 | `I18n::Backend::Base#translate`                                     | `../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/base.rb`                                                                                                                                                                        |
|  +60.0% |    +3 | 0.3% → 0.5% |   5 → 8 | `block in scrub_attributes`                                         | `../../usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`                                                                                                                                                      |
| +150.0% |    +3 | 0.1% → 0.3% |   2 → 5 | `Nokogiri::XML::Node#xml?`                                          | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb`                                                                                                                                                  |
| +100.0% |    +3 | 0.2% → 0.4% |   3 → 6 | `Nokogiri::XML::Document#initialize`                                | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`                                                                                                                                              |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `I18n::Base#normalize_key`                                          | `../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n.rb`                                                                                                                                                                                     |

##### Unknown

| Change | Delta |           % | Samples | Function                                                               | Location    |
| -----: | ----: | ----------: | ------: | ---------------------------------------------------------------------- | ----------- |
| +41.7% |   +10 | 1.5% → 2.2% | 24 → 34 | `block in _app_views_statuses_index_html_erb__328993190567029661_3128` | `<unknown>` |
|    new |    +3 | 0.0% → 0.2% |   0 → 3 | `ActiveSupport::NumberHelper::NumberConverter#namespace`               | `<unknown>` |
| +22.2% |    +2 | 0.6% → 0.7% |  9 → 11 | `Array#each`                                                           | `<unknown>` |
|    new |    +2 | 0.0% → 0.1% |   0 → 2 | `Time#initialize`                                                      | `<unknown>` |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `ActionController::Base::HelperMethods#form_authenticity_token`        | `<unknown>` |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `Array#map`                                                            | `<unknown>` |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `ActionController::Base::HelperMethods#protect_against_forgery?`       | `<unknown>` |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `ActiveSupport::NumberHelper::NumberConverter.validate_float`          | `<unknown>` |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `ActionView::Base.default_formats`                                     | `<unknown>` |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `ActionController::Base#allow_forgery_protection`                      | `<unknown>` |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `ActionDispatch::Response.default_headers`                             | `<unknown>` |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `ActionController::Base.default_static_extension`                      | `<unknown>` |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `ActionDispatch::Response.default_charset`                             | `<unknown>` |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |           % |  Samples | Function                                                           | Location                                                                                                                                                                                                        |
| ------: | ----: | ----------: | -------: | ------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  -86.5% |  -128 | 9.5% → 1.3% | 148 → 20 | `ActiveSupport::NumberHelper::NumberConverter#i18n_format_options` | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/number_helper/number_converter.rb → ../../usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb` |
|  -72.2% |   -57 | 5.1% → 1.4% |  79 → 22 | `Nokogiri::XML::NodeSet#each`                                      | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`                                                                                                                    |
|  -50.9% |   -29 | 3.7% → 1.8% |  57 → 28 | `String#encode [c function]`                                       | `<unknown>`                                                                                                                                                                                                     |
|  -28.7% |   -27 | 6.0% → 4.3% |  94 → 67 | `Digest::Base#<< [c function]`                                     | `<unknown>`                                                                                                                                                                                                     |
|  -54.3% |   -25 | 3.0% → 1.4% |  46 → 21 | `block in decorate`                                                | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`                                                                                                                    |
|  -62.5% |   -15 | 1.5% → 0.6% |   24 → 9 | `String#split [c function]`                                        | `<unknown>`                                                                                                                                                                                                     |
|  -40.0% |   -12 | 1.9% → 1.2% |  30 → 18 | `String#gsub! [c function]`                                        | `<unknown>`                                                                                                                                                                                                     |
|  -25.0% |   -11 | 2.8% → 2.1% |  44 → 33 | `String#gsub [c function]`                                         | `<unknown>`                                                                                                                                                                                                     |
|  -64.3% |    -9 | 0.9% → 0.3% |   14 → 5 | `Nokogiri::XML::Node#to_format`                                    | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb`                                                                                                                        |
|  -50.0% |    -6 | 0.8% → 0.4% |   12 → 6 | `block in each`                                                    | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`                                                                                                                    |
|  -60.0% |    -6 | 0.6% → 0.3% |   10 → 4 | `Nokogiri::XML::Node#serialize`                                    | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb`                                                                                                                        |
|  -71.4% |    -5 | 0.5% → 0.1% |    7 → 2 | `Set#include?`                                                     | `../../usr/local/lib/ruby/3.4.0/set.rb`                                                                                                                                                                         |
|  -66.7% |    -4 | 0.4% → 0.1% |    6 → 2 | `Hash#fetch [c function]`                                          | `<unknown>`                                                                                                                                                                                                     |
|  -66.7% |    -4 | 0.4% → 0.1% |    6 → 2 | `ActiveSupport::CoreExt::ERBUtil#html_escape`                      | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/core_ext/erb/util.rb → ../../usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/core_ext/erb/util.rb`                           |
|  -30.8% |    -4 | 0.8% → 0.6% |   13 → 9 | `Nokogiri::XML::DocumentFragment.new`                              | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document_fragment.rb`                                                                                                           |
|  -80.0% |    -4 | 0.3% → 0.1% |    5 → 1 | `Random.urandom [c function]`                                      | `<unknown>`                                                                                                                                                                                                     |
|  -80.0% |    -4 | 0.3% → 0.1% |    5 → 1 | `Nokogiri::HTML5::Document#initialize`                             | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/document.rb`                                                                                                                  |
|  -33.3% |    -3 | 0.6% → 0.4% |    9 → 6 | `Loofah::ScrubBehavior::Node#scrub!`                               | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`                                                                                                                                              |
| removed |    -3 | 0.2% → 0.0% |    3 → 0 | `Hash#[] [c function]`                                             | `<unknown>`                                                                                                                                                                                                     |
| removed |    -3 | 0.2% → 0.0% |    3 → 0 | `I18n::Backend::Simple::Implementation#lookup`                     | `../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/simple.rb`                                                                                                                                            |

##### Native

|  Change | Delta |           % | Samples | Function                                            | Location    |
| ------: | ----: | ----------: | ------: | --------------------------------------------------- | ----------- |
|  -50.9% |   -29 | 3.7% → 1.8% | 57 → 28 | `String#encode [c function]`                        | `<unknown>` |
|  -28.7% |   -27 | 6.0% → 4.3% | 94 → 67 | `Digest::Base#<< [c function]`                      | `<unknown>` |
|  -62.5% |   -15 | 1.5% → 0.6% |  24 → 9 | `String#split [c function]`                         | `<unknown>` |
|  -40.0% |   -12 | 1.9% → 1.2% | 30 → 18 | `String#gsub! [c function]`                         | `<unknown>` |
|  -25.0% |   -11 | 2.8% → 2.1% | 44 → 33 | `String#gsub [c function]`                          | `<unknown>` |
|  -66.7% |    -4 | 0.4% → 0.1% |   6 → 2 | `Hash#fetch [c function]`                           | `<unknown>` |
|  -80.0% |    -4 | 0.3% → 0.1% |   5 → 1 | `Random.urandom [c function]`                       | `<unknown>` |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `Hash#[] [c function]`                              | `<unknown>` |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `String#sub [c function]`                           | `<unknown>` |
|  -50.0% |    -3 | 0.4% → 0.2% |   6 → 3 | `OpenSSL::HMAC#initialize [c function]`             | `<unknown>` |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `Kernel#respond_to? [c function]`                   | `<unknown>` |
|  -42.9% |    -3 | 0.5% → 0.3% |   7 → 4 | `Kernel#lambda [c function]`                        | `<unknown>` |
|  -33.3% |    -3 | 0.6% → 0.4% |   9 → 6 | `Nokogiri::XML::Attr#value= [c function]`           | `<unknown>` |
|  -30.0% |    -3 | 0.6% → 0.5% |  10 → 7 | `ERB::Util.html_escape [c function]`                | `<unknown>` |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `JSON::Ext::Generator::State#generate [c function]` | `<unknown>` |
|  -15.4% |    -2 | 0.8% → 0.7% | 13 → 11 | `Hash#each [c function]`                            | `<unknown>` |
|   -9.5% |    -2 | 1.4% → 1.2% | 21 → 19 | `Regexp#match? [c function]`                        | `<unknown>` |
|  -66.7% |    -2 | 0.2% → 0.1% |   3 → 1 | `OpenSSL::Cipher#initialize [c function]`           | `<unknown>` |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `Nokogiri::XML::NodeSet#length [c function]`        | `<unknown>` |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `Symbol#empty? [c function]`                        | `<unknown>` |

##### Third-party

|  Change | Delta |           % |  Samples | Function                                                           | Location                                                                                                                                                                                                        |
| ------: | ----: | ----------: | -------: | ------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  -86.5% |  -128 | 9.5% → 1.3% | 148 → 20 | `ActiveSupport::NumberHelper::NumberConverter#i18n_format_options` | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/number_helper/number_converter.rb → ../../usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb` |
|  -72.2% |   -57 | 5.1% → 1.4% |  79 → 22 | `Nokogiri::XML::NodeSet#each`                                      | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`                                                                                                                    |
|  -54.3% |   -25 | 3.0% → 1.4% |  46 → 21 | `block in decorate`                                                | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`                                                                                                                    |
|  -64.3% |    -9 | 0.9% → 0.3% |   14 → 5 | `Nokogiri::XML::Node#to_format`                                    | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb`                                                                                                                        |
|  -50.0% |    -6 | 0.8% → 0.4% |   12 → 6 | `block in each`                                                    | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`                                                                                                                    |
|  -60.0% |    -6 | 0.6% → 0.3% |   10 → 4 | `Nokogiri::XML::Node#serialize`                                    | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb`                                                                                                                        |
|  -66.7% |    -4 | 0.4% → 0.1% |    6 → 2 | `ActiveSupport::CoreExt::ERBUtil#html_escape`                      | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/core_ext/erb/util.rb → ../../usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/core_ext/erb/util.rb`                           |
|  -30.8% |    -4 | 0.8% → 0.6% |   13 → 9 | `Nokogiri::XML::DocumentFragment.new`                              | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document_fragment.rb`                                                                                                           |
|  -80.0% |    -4 | 0.3% → 0.1% |    5 → 1 | `Nokogiri::HTML5::Document#initialize`                             | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/document.rb`                                                                                                                  |
|  -33.3% |    -3 | 0.6% → 0.4% |    9 → 6 | `Loofah::ScrubBehavior::Node#scrub!`                               | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`                                                                                                                                              |
| removed |    -3 | 0.2% → 0.0% |    3 → 0 | `I18n::Backend::Simple::Implementation#lookup`                     | `../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/simple.rb`                                                                                                                                            |
|  -50.0% |    -3 | 0.4% → 0.2% |    6 → 3 | `Nokogiri::XML::Node#to_html`                                      | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb`                                                                                                                        |
|  -75.0% |    -3 | 0.3% → 0.1% |    4 → 1 | `Loofah::HtmlFragmentBehavior::ClassMethods#parse`                 | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`                                                                                                                                              |
| removed |    -3 | 0.2% → 0.0% |    3 → 0 | `Rack::Request::Env#get_header`                                    | `../../usr/local/bundle/gems/rack-3.2.7/lib/rack/request.rb`                                                                                                                                                    |
| removed |    -3 | 0.2% → 0.0% |    3 → 0 | `ActionView::PathRegistry.get_view_paths`                          | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/path_registry.rb`                                                                                                                               |
| removed |    -2 | 0.1% → 0.0% |    2 → 0 | `Rack::ETag#call`                                                  | `../../usr/local/bundle/gems/rack-3.2.7/lib/rack/etag.rb`                                                                                                                                                       |
| removed |    -2 | 0.1% → 0.0% |    2 → 0 | `ActionView::Rendering#_process_render_template_options`           | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/rendering.rb`                                                                                                                                   |
|  -66.7% |    -2 | 0.2% → 0.1% |    3 → 1 | `block (2 levels) in generate_url_helpers`                         | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/routing/route_set.rb → ../../usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb`                               |
|  -14.3% |    -2 | 0.9% → 0.8% |  14 → 12 | `Nokogiri::HTML5::Node#write_to`                                   | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/node.rb`                                                                                                                      |
|  -33.3% |    -2 | 0.4% → 0.3% |    6 → 4 | `ActionView::Helpers::TagHelper::TagBuilder#content_tag_string`    | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/helpers/tag_helper.rb → ../../usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/tag_helper.rb`                                     |

##### Unknown

|  Change | Delta |           % | Samples | Function                                                                                     | Location    |
| ------: | ----: | ----------: | ------: | -------------------------------------------------------------------------------------------- | ----------- |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `ActionView::Helpers::ControllerHelper#response`                                             | `<unknown>` |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `#<Class:0xffff76d571d8>#_app_views_layouts_application_html_erb___4441820961383043729_3160` | `<unknown>` |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `String#unpack`                                                                              | `<unknown>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `Time.now`                                                                                   | `<unknown>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `ActionController::Base::HelperMethods#content_security_policy?`                             | `<unknown>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `I18n::Base#default_separator`                                                               | `<unknown>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `ApplicationController#_layout`                                                              | `<unknown>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `Kernel#Float`                                                                               | `<unknown>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `ActionController::Metal#session`                                                            | `<unknown>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `Ractor.make_shareable`                                                                      | `<unknown>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `Array#select`                                                                               | `<unknown>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `Hash#initialize`                                                                            | `<unknown>` |

#### Lines

Lines with the largest change in contribution to each function's self samples.

##### `ActiveSupport::NumberHelper::NumberToDelimitedConverter#parts` (`../../usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_to_delimited_converter.rb`)

|  Change | Delta |             % | Samples | Location                                                                                                                 |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------------------ |
|     new |   +19 | 0.0% → 100.0% |  0 → 19 | `../../usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_to_delimited_converter.rb:37`   |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/number_helper/number_to_delimited_converter.rb:38` |

##### `block in _app_views_statuses_index_html_erb__328993190567029661_3128` (`<unknown>`)

| Change | Delta |      % | Samples | Location |
| -----: | ----: | -----: | ------: | -------- |
| +41.7% |   +10 | 100.0% | 24 → 34 | 29       |

##### `ActionView::Helpers::NumberHelper#number_with_delimiter` (`../../usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/number_helper.rb`)

| Change | Delta |             % | Samples | Location                                                                                   |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------ |
|    new |   +10 | 0.0% → 100.0% |  0 → 10 | `../../usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/number_helper.rb:85` |

##### `Loofah::HTML5::Scrub.cdata_needs_escaping?` (`../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`)

|  Change | Delta |      % | Samples | Location                                                                  |
| ------: | ----: | -----: | ------: | ------------------------------------------------------------------------- |
| +900.0% |    +9 | 100.0% |  1 → 10 | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb:264` |

##### `ActionView::OutputBuffer#<<` (`../../usr/local/bundle/gems/actionview-8.1.4/lib/action_view/buffers.rb`)

| Change | Delta |      % | Samples | Location                                                                                                                                                    |
| -----: | ----: | -----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| +77.8% |    +7 | 100.0% |  9 → 16 | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/buffers.rb:52 → ../../usr/local/bundle/gems/actionview-8.1.4/lib/action_view/buffers.rb:52` |

##### `Nokogiri::HTML5::DocumentFragment#initialize` (`../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/document_fragment.rb`)

|  Change | Delta |      % | Samples | Location                                                                                                    |
| ------: | ----: | -----: | ------: | ----------------------------------------------------------------------------------------------------------- |
| +120.0% |    +6 | 100.0% |  5 → 11 | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/document_fragment.rb:167` |

##### `Nokogiri::XML::Document#decorate` (`../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`)

| Change | Delta |      % | Samples | Location                                                                                         |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------------------------------------ |
| +71.4% |    +5 | 100.0% |  7 → 12 | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb:418` |

##### `Loofah::Scrubber#traverse_conditionally_bottom_up` (`../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/scrubber.rb`)

| Change | Delta |      % | Samples | Location                                                               |
| -----: | ----: | -----: | ------: | ---------------------------------------------------------------------- |
| +45.5% |    +5 | 100.0% | 11 → 16 | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/scrubber.rb:138` |

##### `Rails::HTML::Concern::Serializer::UTF8Encode#serialize` (`../../usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/sanitizer.rb`)

|  Change | Delta |      % | Samples | Location                                                                                 |
| ------: | ----: | -----: | ------: | ---------------------------------------------------------------------------------------- |
| +500.0% |    +5 | 100.0% |   1 → 6 | `../../usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/sanitizer.rb:192` |

##### `Nokogiri::XML::Node#attributes` (`../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb`)

|  Change | Delta |      % | Samples | Location                                                                                     |
| ------: | ----: | -----: | ------: | -------------------------------------------------------------------------------------------- |
| +500.0% |    +5 | 100.0% |   1 → 6 | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb:739` |

##### `Loofah::HTML5::Scrub.scrub_css_attribute` (`../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`)

|  Change | Delta |      % | Samples | Location                                                                  |
| ------: | ----: | -----: | ------: | ------------------------------------------------------------------------- |
| +500.0% |    +5 | 100.0% |   1 → 6 | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb:108` |

##### `ActionView::Helpers::UrlHelper#convert_options_to_data_attributes` (`../../usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/url_helper.rb`)

|  Change | Delta |      % | Samples | Location                                                                                                                                                                            |
| ------: | ----: | -----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| +500.0% |    +5 | 100.0% |   1 → 6 | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/helpers/url_helper.rb:720 → ../../usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/url_helper.rb:720` |

##### `block in to_html` (`../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`)

|  Change | Delta |      % | Samples | Location                                                                                         |
| ------: | ----: | -----: | ------: | ------------------------------------------------------------------------------------------------ |
| +200.0% |    +4 | 100.0% |   2 → 6 | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb:354` |

##### `Nokogiri::XML::Document#decorators` (`../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`)

| Change | Delta |      % | Samples | Location                                                                                         |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------------------------------------ |
| +66.7% |    +4 | 100.0% |  6 → 10 | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb:372` |

##### `Rails::HTML::PermitScrubber#scrub_attributes` (`../../usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`)

| Change | Delta |             % | Samples | Location                                                                                 |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `../../usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb:126` |

##### `Nokogiri::XML::NodeSet#to_html` (`../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`)

| Change | Delta |      % | Samples | Location                                                                                         |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------------------------------------ |
| +75.0% |    +3 | 100.0% |   4 → 7 | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb:356` |

##### `I18n::Backend::Base#translate` (`../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/base.rb`)

| Change | Delta |      % | Samples | Location                                                              |
| -----: | ----: | -----: | ------: | --------------------------------------------------------------------- |
| +75.0% |    +3 | 100.0% |   4 → 7 | `../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/base.rb:69` |

##### `block in scrub_attributes` (`../../usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`)

| Change | Delta |      % | Samples | Location                                                                                 |
| -----: | ----: | -----: | ------: | ---------------------------------------------------------------------------------------- |
| +60.0% |    +3 | 100.0% |   5 → 8 | `../../usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb:120` |

##### `Nokogiri::XML::Node#xml?` (`../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb`)

|  Change | Delta |      % | Samples | Location                                                                                      |
| ------: | ----: | -----: | ------: | --------------------------------------------------------------------------------------------- |
| +150.0% |    +3 | 100.0% |   2 → 5 | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb:1272` |

##### `Nokogiri::XML::Document#initialize` (`../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`)

|  Change | Delta |      % | Samples | Location                                                                                         |
| ------: | ----: | -----: | ------: | ------------------------------------------------------------------------------------------------ |
| +100.0% |    +3 | 100.0% |   3 → 6 | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb:195` |

##### `I18n::Base#normalize_key` (`../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n.rb`)

| Change | Delta |             % | Samples | Location                                                  |
| -----: | ----: | ------------: | ------: | --------------------------------------------------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n.rb:492` |

##### `ActiveSupport::NumberHelper::NumberConverter#namespace` (`<unknown>`)

| Change | Delta |             % | Samples | Location |
| -----: | ----: | ------------: | ------: | -------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | 14       |

##### `Array#each` (`<unknown>`)

| Change | Delta |      % | Samples | Location |
| -----: | ----: | -----: | ------: | -------- |
| +22.2% |    +2 | 100.0% |  9 → 11 | 231      |

##### `Time#initialize` (`<unknown>`)

| Change | Delta |             % | Samples | Location |
| -----: | ----: | ------------: | ------: | -------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | 453      |

##### `ActionController::Base::HelperMethods#form_authenticity_token` (`<unknown>`)

| Change | Delta |             % | Samples | Location |
| -----: | ----: | ------------: | ------: | -------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | 109      |

##### `Array#map` (`<unknown>`)

| Change | Delta |             % | Samples | Location |
| -----: | ----: | ------------: | ------: | -------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | 251      |

##### `ActionController::Base::HelperMethods#protect_against_forgery?` (`<unknown>`)

| Change | Delta |             % | Samples | Location |
| -----: | ----: | ------------: | ------: | -------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | 110      |

##### `ActiveSupport::NumberHelper::NumberConverter.validate_float` (`<unknown>`)

| Change | Delta |             % | Samples | Location |
| -----: | ----: | ------------: | ------: | -------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | 17       |

##### `ActionView::Base.default_formats` (`<unknown>`)

| Change | Delta |             % | Samples | Location |
| -----: | ----: | ------------: | ------: | -------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | 174      |

##### `ActionController::Base#allow_forgery_protection` (`<unknown>`)

| Change | Delta |             % | Samples | Location |
| -----: | ----: | ------------: | ------: | -------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | 86       |

##### `ActionDispatch::Response.default_headers` (`<unknown>`)

| Change | Delta |             % | Samples | Location |
| -----: | ----: | ------------: | ------: | -------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | 103      |

##### `ActionController::Base.default_static_extension` (`<unknown>`)

| Change | Delta |             % | Samples | Location |
| -----: | ----: | ------------: | ------: | -------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | 35       |

##### `ActionDispatch::Response.default_charset` (`<unknown>`)

| Change | Delta |             % | Samples | Location |
| -----: | ----: | ------------: | ------: | -------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | 102      |

##### `ActiveSupport::NumberHelper::NumberConverter#i18n_format_options` (`../../usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb`)

|  Change | Delta |             % | Samples | Location                                                                                                     |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------ |
| removed |  -148 | 100.0% → 0.0% | 148 → 0 | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/number_helper/number_converter.rb:164` |
|     new |   +20 | 0.0% → 100.0% |  0 → 20 | `../../usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb:167`   |

##### `Nokogiri::XML::NodeSet#each` (`../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`)

| Change | Delta |      % | Samples | Location                                                                                         |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------------------------------------ |
| -72.2% |   -57 | 100.0% | 79 → 22 | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb:240` |

##### `block in decorate` (`../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`)

| Change | Delta |      % | Samples | Location                                                                                         |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------------------------------------ |
| -54.3% |   -25 | 100.0% | 46 → 21 | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb:417` |

##### `Nokogiri::XML::Node#to_format` (`../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb`)

| Change | Delta |      % | Samples | Location                                                                                      |
| -----: | ----: | -----: | ------: | --------------------------------------------------------------------------------------------- |
| -64.3% |    -9 | 100.0% |  14 → 5 | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb:1677` |

##### `block in each` (`../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`)

| Change | Delta |      % | Samples | Location                                                                                         |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------------------------------------ |
| -50.0% |    -6 | 100.0% |  12 → 6 | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb:238` |

##### `Nokogiri::XML::Node#serialize` (`../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb`)

| Change | Delta |      % | Samples | Location                                                                                      |
| -----: | ----: | -----: | ------: | --------------------------------------------------------------------------------------------- |
| -60.0% |    -6 | 100.0% |  10 → 4 | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb:1433` |

##### `Set#include?` (`../../usr/local/lib/ruby/3.4.0/set.rb`)

| Change | Delta |      % | Samples | Location                                    |
| -----: | ----: | -----: | ------: | ------------------------------------------- |
| -71.4% |    -5 | 100.0% |   7 → 2 | `../../usr/local/lib/ruby/3.4.0/set.rb:398` |

##### `ActiveSupport::CoreExt::ERBUtil#html_escape` (`../../usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/core_ext/erb/util.rb`)

| Change | Delta |      % | Samples | Location                                                                                                                                                                                    |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| -66.7% |    -4 | 100.0% |   6 → 2 | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/core_ext/erb/util.rb:17 → ../../usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/core_ext/erb/util.rb:17` |

##### `Nokogiri::XML::DocumentFragment.new` (`../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document_fragment.rb`)

| Change | Delta |      % | Samples | Location                                                                                                 |
| -----: | ----: | -----: | ------: | -------------------------------------------------------------------------------------------------------- |
| -30.8% |    -4 | 100.0% |  13 → 9 | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document_fragment.rb:46` |

##### `Nokogiri::HTML5::Document#initialize` (`../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/document.rb`)

| Change | Delta |      % | Samples | Location                                                                                           |
| -----: | ----: | -----: | ------: | -------------------------------------------------------------------------------------------------- |
| -80.0% |    -4 | 100.0% |   5 → 1 | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/document.rb:163` |

##### `Loofah::ScrubBehavior::Node#scrub!` (`../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`)

| Change | Delta |      % | Samples | Location                                                              |
| -----: | ----: | -----: | ------: | --------------------------------------------------------------------- |
| -33.3% |    -3 | 100.0% |   9 → 6 | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb:48` |

##### `I18n::Backend::Simple::Implementation#lookup` (`../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/simple.rb`)

|  Change | Delta |             % | Samples | Location                                                                 |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------ |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `../../usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/simple.rb:107` |

##### `Nokogiri::XML::Node#to_html` (`../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb`)

| Change | Delta |      % | Samples | Location                                                                                      |
| -----: | ----: | -----: | ------: | --------------------------------------------------------------------------------------------- |
| -50.0% |    -3 | 100.0% |   6 → 3 | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb:1444` |

##### `Loofah::HtmlFragmentBehavior::ClassMethods#parse` (`../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`)

| Change | Delta |      % | Samples | Location                                                               |
| -----: | ----: | -----: | ------: | ---------------------------------------------------------------------- |
| -75.0% |    -3 | 100.0% |   4 → 1 | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb:178` |

##### `Rack::Request::Env#get_header` (`../../usr/local/bundle/gems/rack-3.2.7/lib/rack/request.rb`)

|  Change | Delta |             % | Samples | Location                                                         |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `../../usr/local/bundle/gems/rack-3.2.7/lib/rack/request.rb:107` |

##### `ActionView::PathRegistry.get_view_paths` (`../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/path_registry.rb`)

|  Change | Delta |             % | Samples | Location                                                                             |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------ |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/path_registry.rb:16` |

##### `Rack::ETag#call` (`../../usr/local/bundle/gems/rack-3.2.7/lib/rack/etag.rb`)

|  Change | Delta |             % | Samples | Location                                                     |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------ |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `../../usr/local/bundle/gems/rack-3.2.7/lib/rack/etag.rb:49` |

##### `ActionView::Rendering#_process_render_template_options` (`../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/rendering.rb`)

|  Change | Delta |             % | Samples | Location                                                                          |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/rendering.rb:187` |

##### `block (2 levels) in generate_url_helpers` (`../../usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb`)

| Change | Delta |      % | Samples | Location                                                                                                                                                                                  |
| -----: | ----: | -----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| -66.7% |    -2 | 100.0% |   3 → 1 | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/routing/route_set.rb:615 → ../../usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb:615` |

##### `Nokogiri::HTML5::Node#write_to` (`../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/node.rb`)

| Change | Delta |      % | Samples | Location                                                                                      |
| -----: | ----: | -----: | ------: | --------------------------------------------------------------------------------------------- |
| -14.3% |    -2 | 100.0% | 14 → 12 | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/node.rb:68` |

##### `ActionView::Helpers::TagHelper::TagBuilder#content_tag_string` (`../../usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/tag_helper.rb`)

| Change | Delta |      % | Samples | Location                                                                                                                                                                            |
| -----: | ----: | -----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| -33.3% |    -2 | 100.0% |   6 → 4 | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/helpers/tag_helper.rb:233 → ../../usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/tag_helper.rb:233` |

##### `ActionView::Helpers::ControllerHelper#response` (`<unknown>`)

|  Change | Delta |             % | Samples | Location |
| ------: | ----: | ------------: | ------: | -------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | 18       |

##### `#<Class:0xffff76d571d8>#_app_views_layouts_application_html_erb___4441820961383043729_3160` (`<unknown>`)

|  Change | Delta |             % | Samples | Location |
| ------: | ----: | ------------: | ------: | -------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | 31       |

##### `String#unpack` (`<unknown>`)

|  Change | Delta |             % | Samples | Location |
| ------: | ----: | ------------: | ------: | -------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | 26       |

##### `Time.now` (`<unknown>`)

|  Change | Delta |             % | Samples | Location |
| ------: | ----: | ------------: | ------: | -------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | 266      |

##### `ActionController::Base::HelperMethods#content_security_policy?` (`<unknown>`)

|  Change | Delta |             % | Samples | Location |
| ------: | ----: | ------------: | ------: | -------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | 13       |

##### `I18n::Base#default_separator` (`<unknown>`)

|  Change | Delta |             % | Samples | Location |
| ------: | ----: | ------------: | ------: | -------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | 102      |

##### `ApplicationController#_layout` (`<unknown>`)

|  Change | Delta |             % | Samples | Location |
| ------: | ----: | ------------: | ------: | -------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | 334      |

##### `Kernel#Float` (`<unknown>`)

|  Change | Delta |             % | Samples | Location |
| ------: | ----: | ------------: | ------: | -------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | 199      |

##### `ActionController::Metal#session` (`<unknown>`)

|  Change | Delta |             % | Samples | Location |
| ------: | ----: | ------------: | ------: | -------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | 176      |

##### `Ractor.make_shareable` (`<unknown>`)

|  Change | Delta |             % | Samples | Location |
| ------: | ----: | ------------: | ------: | -------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | 836      |

##### `Array#select` (`<unknown>`)

|  Change | Delta |             % | Samples | Location |
| ------: | ----: | ------------: | ------: | -------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | 276      |

##### `Hash#initialize` (`<unknown>`)

|  Change | Delta |             % | Samples | Location |
| ------: | ----: | ------------: | ------: | -------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | 39       |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

| Change | Delta |             % |       Samples | Function                                                                              | Location                                                                                                                                                                                    |
| -----: | ----: | ------------: | ------------: | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| +12.5% |   +93 | 47.7% → 53.7% |     742 → 835 | `ActionView::Helpers::SanitizeHelper#sanitize`                                        | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/helpers/sanitize_helper.rb → ../../usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/sanitize_helper.rb`       |
| +12.3% |   +91 | 47.5% → 53.4% |     739 → 830 | `Rails::HTML::Concern::ComposedSanitize#sanitize`                                     | `../../usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/sanitizer.rb`                                                                                                        |
| +39.4% |   +61 | 10.0% → 13.9% |     155 → 216 | `Rails::HTML::PermitScrubber#scrub`                                                   | `../../usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`                                                                                                        |
| +79.5% |   +58 |   4.7% → 8.4% |      73 → 131 | `Kernel#extend [c function]`                                                          | `<unknown>`                                                                                                                                                                                 |
| +74.7% |   +56 |   4.8% → 8.4% |      75 → 131 | `block (2 levels) in decorate`                                                        | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`                                                                                                |
| +80.0% |   +56 |   4.5% → 8.1% |      70 → 126 | `Module#extend_object [c function]`                                                   | `<unknown>`                                                                                                                                                                                 |
| +38.5% |   +50 |  8.4% → 11.6% |     130 → 180 | `Rails::HTML::PermitScrubber#scrub_attributes`                                        | `../../usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`                                                                                                        |
| +25.3% |   +45 | 11.4% → 14.3% |     178 → 223 | `Loofah.html5_fragment`                                                               | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah.rb`                                                                                                                                   |
| +24.6% |   +44 | 11.5% → 14.3% |     179 → 223 | `Rails::HTML::Concern::Parser::HTML5#parse_fragment`                                  | `../../usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/sanitizer.rb`                                                                                                        |
| +24.2% |   +43 | 11.4% → 14.2% |     178 → 221 | `Loofah::HtmlFragmentBehavior::ClassMethods#parse`                                    | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`                                                                                                                          |
|  +3.4% |   +42 | 79.3% → 82.0% | 1,233 → 1,275 | `block in _app_views_statuses_index_html_erb__328993190567029661_3128`                | `<unknown>`                                                                                                                                                                                 |
|  +3.3% |   +41 | 79.5% → 82.1% | 1,236 → 1,277 | `#<Class:0xffff76d571d8>#_app_views_statuses_index_html_erb__328993190567029661_3128` | `<unknown>`                                                                                                                                                                                 |
|  +3.3% |   +41 | 79.5% → 82.1% | 1,236 → 1,277 | `block (2 levels) in render_template`                                                 | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/renderer/template_renderer.rb → ../../usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb` |
|  +3.3% |   +41 | 79.7% → 82.3% | 1,239 → 1,280 | `block in render_template`                                                            | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/renderer/template_renderer.rb → ../../usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb` |
| +31.1% |   +38 |  7.8% → 10.3% |     122 → 160 | `Nokogiri::XML::DocumentFragment.new`                                                 | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document_fragment.rb`                                                                                       |
| +24.0% |   +35 |  9.4% → 11.6% |     146 → 181 | `Nokogiri::XML::Document#decorate`                                                    | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`                                                                                                |
| +23.6% |   +34 |  9.3% → 11.4% |     144 → 178 | `Hash#each [c function]`                                                              | `<unknown>`                                                                                                                                                                                 |
| +45.8% |   +33 |   4.6% → 6.8% |      72 → 105 | `Rails::HTML::PermitScrubber#scrub_attribute`                                         | `../../usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`                                                                                                        |
| +38.4% |   +33 |   5.5% → 7.7% |      86 → 119 | `block in scrub_attributes`                                                           | `../../usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`                                                                                                        |
|  +2.5% |   +32 | 83.0% → 85.1% | 1,291 → 1,323 | `block in render_with_layout`                                                         | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/renderer/template_renderer.rb → ../../usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb` |

##### Native

|  Change | Delta |             % |       Samples | Function                                                   | Location    |
| ------: | ----: | ------------: | ------------: | ---------------------------------------------------------- | ----------- |
|  +79.5% |   +58 |   4.7% → 8.4% |      73 → 131 | `Kernel#extend [c function]`                               | `<unknown>` |
|  +80.0% |   +56 |   4.5% → 8.1% |      70 → 126 | `Module#extend_object [c function]`                        | `<unknown>` |
|  +23.6% |   +34 |  9.3% → 11.4% |     144 → 178 | `Hash#each [c function]`                                   | `<unknown>` |
|   +2.2% |   +28 | 82.8% → 84.6% | 1,288 → 1,316 | `Kernel#public_send [c function]`                          | `<unknown>` |
| +105.0% |   +21 |   1.3% → 2.6% |       20 → 41 | `Nokogiri::XML::Node#html_standard_serialize [c function]` | `<unknown>` |
| +161.5% |   +21 |   0.8% → 2.2% |       13 → 34 | `String.new [c function]`                                  | `<unknown>` |
|   +4.4% |   +20 | 29.4% → 30.7% |     457 → 477 | `Integer#upto [c function]`                                | `<unknown>` |
| +105.3% |   +20 |   1.2% → 2.5% |       19 → 39 | `Nokogiri::XML::DocumentFragment.native_new [c function]`  | `<unknown>` |
|  +18.4% |   +18 |   6.3% → 7.5% |      98 → 116 | `Nokogiri::XML::Node#children [c function]`                | `<unknown>` |
|  +90.0% |   +18 |   1.3% → 2.4% |       20 → 38 | `Kernel#dup [c function]`                                  | `<unknown>` |
| +112.5% |   +18 |   1.0% → 2.2% |       16 → 34 | `Hash#merge [c function]`                                  | `<unknown>` |
|  +19.0% |   +16 |   5.4% → 6.4% |      84 → 100 | `Nokogiri::Gumbo.fragment [c function]`                    | `<unknown>` |
|   +7.5% |   +15 | 12.9% → 13.8% |     200 → 215 | `(unknown) [c function]`                                   | `<unknown>` |
| +750.0% |   +15 |   0.1% → 1.1% |        2 → 17 | `Hash#transform_keys [c function]`                         | `<unknown>` |
|   +7.3% |   +12 | 10.6% → 11.4% |     165 → 177 | `Enumerable#map [c function]`                              | `<unknown>` |
|  +31.6% |   +12 |   2.4% → 3.2% |       38 → 50 | `Class#new [c function]`                                   | `<unknown>` |
|  +12.2% |   +10 |   5.3% → 5.9% |       82 → 92 | `Kernel#catch [c function]`                                | `<unknown>` |
|  +20.8% |   +10 |   3.1% → 3.7% |       48 → 58 | `Nokogiri::HTML4::Document.new [c function]`               | `<unknown>` |
|  +90.0% |    +9 |   0.6% → 1.2% |       10 → 19 | `Nokogiri::XML::Node#node_name [c function]`               | `<unknown>` |
|  +70.0% |    +7 |   0.6% → 1.1% |       10 → 17 | `Array#join [c function]`                                  | `<unknown>` |

##### Third-party

| Change | Delta |             % |       Samples | Function                                                | Location                                                                                                                                                                                                |
| -----: | ----: | ------------: | ------------: | ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| +12.5% |   +93 | 47.7% → 53.7% |     742 → 835 | `ActionView::Helpers::SanitizeHelper#sanitize`          | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/helpers/sanitize_helper.rb → ../../usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/sanitize_helper.rb`                   |
| +12.3% |   +91 | 47.5% → 53.4% |     739 → 830 | `Rails::HTML::Concern::ComposedSanitize#sanitize`       | `../../usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/sanitizer.rb`                                                                                                                    |
| +39.4% |   +61 | 10.0% → 13.9% |     155 → 216 | `Rails::HTML::PermitScrubber#scrub`                     | `../../usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`                                                                                                                    |
| +74.7% |   +56 |   4.8% → 8.4% |      75 → 131 | `block (2 levels) in decorate`                          | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`                                                                                                            |
| +38.5% |   +50 |  8.4% → 11.6% |     130 → 180 | `Rails::HTML::PermitScrubber#scrub_attributes`          | `../../usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`                                                                                                                    |
| +25.3% |   +45 | 11.4% → 14.3% |     178 → 223 | `Loofah.html5_fragment`                                 | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah.rb`                                                                                                                                               |
| +24.6% |   +44 | 11.5% → 14.3% |     179 → 223 | `Rails::HTML::Concern::Parser::HTML5#parse_fragment`    | `../../usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/sanitizer.rb`                                                                                                                    |
| +24.2% |   +43 | 11.4% → 14.2% |     178 → 221 | `Loofah::HtmlFragmentBehavior::ClassMethods#parse`      | `../../usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`                                                                                                                                      |
|  +3.3% |   +41 | 79.5% → 82.1% | 1,236 → 1,277 | `block (2 levels) in render_template`                   | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/renderer/template_renderer.rb → ../../usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`             |
|  +3.3% |   +41 | 79.7% → 82.3% | 1,239 → 1,280 | `block in render_template`                              | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/renderer/template_renderer.rb → ../../usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`             |
| +31.1% |   +38 |  7.8% → 10.3% |     122 → 160 | `Nokogiri::XML::DocumentFragment.new`                   | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document_fragment.rb`                                                                                                   |
| +24.0% |   +35 |  9.4% → 11.6% |     146 → 181 | `Nokogiri::XML::Document#decorate`                      | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`                                                                                                            |
| +45.8% |   +33 |   4.6% → 6.8% |      72 → 105 | `Rails::HTML::PermitScrubber#scrub_attribute`           | `../../usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`                                                                                                                    |
| +38.4% |   +33 |   5.5% → 7.7% |      86 → 119 | `block in scrub_attributes`                             | `../../usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`                                                                                                                    |
|  +2.5% |   +32 | 83.0% → 85.1% | 1,291 → 1,323 | `block in render_with_layout`                           | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/renderer/template_renderer.rb → ../../usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`             |
|  +2.5% |   +32 | 83.0% → 85.1% | 1,291 → 1,323 | `block in instrument`                                   | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/notifications.rb → ../../usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`                           |
|  +2.5% |   +32 | 83.2% → 85.2% | 1,293 → 1,325 | `ActiveSupport::Notifications::Instrumenter#instrument` | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/notifications/instrumenter.rb → ../../usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications/instrumenter.rb` |
|  +2.4% |   +32 | 85.9% → 87.9% | 1,335 → 1,367 | `ActionDispatch::Routing::RouteSet::Dispatcher#serve`   | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/routing/route_set.rb → ../../usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb`                       |
| +25.4% |   +32 |  8.1% → 10.2% |     126 → 158 | `block in decorate`                                     | `../../usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`                                                                                                            |
|  +2.4% |   +31 | 82.8% → 84.8% | 1,288 → 1,319 | `ActionView::Template#instrument_render_template`       | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/template.rb → ../../usr/local/bundle/gems/actionview-8.1.4/lib/action_view/template.rb`                                                 |

##### Unknown

|  Change | Delta |             % |       Samples | Function                                                                              | Location    |
| ------: | ----: | ------------: | ------------: | ------------------------------------------------------------------------------------- | ----------- |
|   +3.4% |   +42 | 79.3% → 82.0% | 1,233 → 1,275 | `block in _app_views_statuses_index_html_erb__328993190567029661_3128`                | `<unknown>` |
|   +3.3% |   +41 | 79.5% → 82.1% | 1,236 → 1,277 | `#<Class:0xffff76d571d8>#_app_views_statuses_index_html_erb__328993190567029661_3128` | `<unknown>` |
|   +0.3% |    +4 | 92.5% → 92.7% | 1,438 → 1,442 | `Array#each`                                                                          | `<unknown>` |
| +100.0% |    +4 |   0.3% → 0.5% |         4 → 8 | `Array#map`                                                                           | `<unknown>` |
|     new |    +3 |   0.0% → 0.2% |         0 → 3 | `ActiveSupport::NumberHelper::NumberConverter#namespace`                              | `<unknown>` |
|     new |    +2 |   0.0% → 0.1% |         0 → 2 | `ActiveSupport::NumberHelper::NumberConverter#validate_float`                         | `<unknown>` |
|     new |    +2 |   0.0% → 0.1% |         0 → 2 | `ActiveSupport::NumberHelper::NumberConverter#validate_float?`                        | `<unknown>` |
|     new |    +2 |   0.0% → 0.1% |         0 → 2 | `Time#initialize`                                                                     | `<unknown>` |
|  +11.1% |    +1 |          0.6% |        9 → 10 | `Integer#times`                                                                       | `<unknown>` |
|  +33.3% |    +1 |   0.2% → 0.3% |         3 → 4 | `Kernel#tap`                                                                          | `<unknown>` |
|     new |    +1 |   0.0% → 0.1% |         0 → 1 | `ActiveSupport::NumberHelper::NumberConverter.validate_float`                         | `<unknown>` |
|     new |    +1 |   0.0% → 0.1% |         0 → 1 | `ActiveSupport::BroadcastLogger#info`                                                 | `<unknown>` |
|     new |    +1 |   0.0% → 0.1% |         0 → 1 | `ActionView::Base.default_formats`                                                    | `<unknown>` |
|     new |    +1 |   0.0% → 0.1% |         0 → 1 | `ActionController::Base#allow_forgery_protection`                                     | `<unknown>` |
|     new |    +1 |   0.0% → 0.1% |         0 → 1 | `ActiveSupport::TaggedLogging#push_tags`                                              | `<unknown>` |
|     new |    +1 |   0.0% → 0.1% |         0 → 1 | `ActionDispatch::Response.default_headers`                                            | `<unknown>` |
|     new |    +1 |   0.0% → 0.1% |         0 → 1 | `ActionController::Base.default_static_extension`                                     | `<unknown>` |
|     new |    +1 |   0.0% → 0.1% |         0 → 1 | `ActionDispatch::Response.default_charset`                                            | `<unknown>` |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

| Change | Delta |             % |   Samples | Function                                                                          | Location                                                                                                                                                                                                                                  |
| -----: | ----: | ------------: | --------: | --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| -40.7% |  -101 |  15.9% → 9.5% | 248 → 147 | `ActiveSupport::NumberHelper::NumberConverter#i18n_format_options`                | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/number_helper/number_converter.rb → ../../usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb`                           |
| -37.0% |   -98 | 17.0% → 10.7% | 265 → 167 | `ActiveSupport::NumberHelper::NumberConverter#format_options`                     | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/number_helper/number_converter.rb → ../../usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb`                           |
| -35.1% |   -94 | 17.2% → 11.2% | 268 → 174 | `ActiveSupport::NumberHelper::NumberConverter#options`                            | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/number_helper/number_converter.rb → ../../usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb`                           |
| -34.9% |   -94 | 17.3% → 11.3% | 269 → 175 | `ActiveSupport::NumberHelper::NumberToDelimitedConverter#delimiter_pattern`       | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/number_helper/number_to_delimited_converter.rb → ../../usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_to_delimited_converter.rb` |
| -30.1% |   -94 | 20.1% → 14.0% | 312 → 218 | `ActiveSupport::NumberHelper::NumberToDelimitedConverter#convert`                 | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/number_helper/number_to_delimited_converter.rb → ../../usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_to_delimited_converter.rb` |
| -29.1% |   -93 | 20.6% → 14.6% | 320 → 227 | `ActiveSupport::NumberHelper::NumberConverter#execute`                            | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/number_helper/number_converter.rb → ../../usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb`                           |
| -30.3% |   -92 | 19.5% → 13.6% | 304 → 212 | `ActiveSupport::NumberHelper::NumberToDelimitedConverter#parts`                   | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/number_helper/number_to_delimited_converter.rb → ../../usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_to_delimited_converter.rb` |
| -25.2% |   -81 | 20.7% → 15.5% | 322 → 241 | `ActiveSupport::NumberHelper::NumberConverter.convert`                            | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/number_helper/number_converter.rb → ../../usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb`                           |
| -25.1% |   -81 | 20.8% → 15.6% | 323 → 242 | `ActiveSupport::NumberHelper#number_to_delimited`                                 | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/number_helper.rb → ../../usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper.rb`                                                             |
| -24.2% |   -79 | 21.0% → 15.9% | 326 → 247 | `block in delegate_number_helper_method`                                          | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/helpers/number_helper.rb → ../../usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/number_helper.rb`                                                         |
| -23.8% |   -79 | 21.4% → 16.3% | 332 → 253 | `ActionView::Helpers::NumberHelper#wrap_with_output_safety_handling`              | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/helpers/number_helper.rb → ../../usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/number_helper.rb`                                                         |
| -21.7% |   -73 | 21.6% → 16.9% | 336 → 263 | `ActionView::Helpers::NumberHelper#delegate_number_helper_method`                 | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/helpers/number_helper.rb → ../../usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/number_helper.rb`                                                         |
| -18.8% |   -63 | 21.6% → 17.6% | 336 → 273 | `ActionView::Helpers::NumberHelper#number_with_delimiter`                         | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/helpers/number_helper.rb → ../../usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/number_helper.rb`                                                         |
| -50.9% |   -29 |   3.7% → 1.8% |   57 → 28 | `String#encode [c function]`                                                      | `<unknown>`                                                                                                                                                                                                                               |
| -29.5% |   -28 |   6.1% → 4.3% |   95 → 67 | `Rack::ETag#digest_body`                                                          | `../../usr/local/bundle/gems/rack-3.2.7/lib/rack/etag.rb`                                                                                                                                                                                 |
| -28.7% |   -27 |   6.0% → 4.3% |   94 → 67 | `Digest::Base#<< [c function]`                                                    | `<unknown>`                                                                                                                                                                                                                               |
| -28.7% |   -27 |   6.0% → 4.3% |   94 → 67 | `block in digest_body`                                                            | `../../usr/local/bundle/gems/rack-3.2.7/lib/rack/etag.rb`                                                                                                                                                                                 |
| -69.7% |   -23 |   2.1% → 0.6% |   33 → 10 | `block (2 levels) in _app_views_statuses_index_html_erb__328993190567029661_3128` | `<unknown>`                                                                                                                                                                                                                               |
| -52.8% |   -19 |   2.3% → 1.1% |   36 → 17 | `block in evaluate`                                                               | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/journey/visitors.rb → ../../usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/visitors.rb`                                                           |
| -54.8% |   -17 |   2.0% → 0.9% |   31 → 14 | `ActionDispatch::Journey::Router::Utils::UriEncoder#escape_segment`               | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/journey/router/utils.rb → ../../usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router/utils.rb`                                                   |

##### Native

|  Change | Delta |           % | Samples | Function                                            | Location    |
| ------: | ----: | ----------: | ------: | --------------------------------------------------- | ----------- |
|  -50.9% |   -29 | 3.7% → 1.8% | 57 → 28 | `String#encode [c function]`                        | `<unknown>` |
|  -28.7% |   -27 | 6.0% → 4.3% | 94 → 67 | `Digest::Base#<< [c function]`                      | `<unknown>` |
|  -62.5% |   -15 | 1.5% → 0.6% |  24 → 9 | `String#split [c function]`                         | `<unknown>` |
|  -40.0% |   -12 | 1.9% → 1.2% | 30 → 18 | `String#gsub! [c function]`                         | `<unknown>` |
|  -48.0% |   -12 | 1.6% → 0.8% | 25 → 13 | `Hash#fetch [c function]`                           | `<unknown>` |
|  -15.6% |    -7 | 2.9% → 2.4% | 45 → 38 | `String#gsub [c function]`                          | `<unknown>` |
| removed |    -4 | 0.3% → 0.0% |   4 → 0 | `Hash#[] [c function]`                              | `<unknown>` |
|  -80.0% |    -4 | 0.3% → 0.1% |   5 → 1 | `Random.urandom [c function]`                       | `<unknown>` |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `String#sub [c function]`                           | `<unknown>` |
|  -50.0% |    -3 | 0.4% → 0.2% |   6 → 3 | `OpenSSL::HMAC#initialize [c function]`             | `<unknown>` |
|  -42.9% |    -3 | 0.5% → 0.3% |   7 → 4 | `Kernel#lambda [c function]`                        | `<unknown>` |
|  -33.3% |    -3 | 0.6% → 0.4% |   9 → 6 | `Nokogiri::XML::Attr#value= [c function]`           | `<unknown>` |
|  -30.0% |    -3 | 0.6% → 0.5% |  10 → 7 | `ERB::Util.html_escape [c function]`                | `<unknown>` |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `JSON::Ext::Generator::State#generate [c function]` | `<unknown>` |
|   -9.5% |    -2 | 1.4% → 1.2% | 21 → 19 | `Regexp#match? [c function]`                        | `<unknown>` |
|  -25.0% |    -2 | 0.5% → 0.4% |   8 → 6 | `Enumerable#inject [c function]`                    | `<unknown>` |
|  -66.7% |    -2 | 0.2% → 0.1% |   3 → 1 | `OpenSSL::Cipher#initialize [c function]`           | `<unknown>` |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `Nokogiri::XML::NodeSet#length [c function]`        | `<unknown>` |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `Symbol#empty? [c function]`                        | `<unknown>` |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `Enumerable#filter_map [c function]`                | `<unknown>` |

##### Third-party

| Change | Delta |             % |   Samples | Function                                                                    | Location                                                                                                                                                                                                                                  |
| -----: | ----: | ------------: | --------: | --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| -40.7% |  -101 |  15.9% → 9.5% | 248 → 147 | `ActiveSupport::NumberHelper::NumberConverter#i18n_format_options`          | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/number_helper/number_converter.rb → ../../usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb`                           |
| -37.0% |   -98 | 17.0% → 10.7% | 265 → 167 | `ActiveSupport::NumberHelper::NumberConverter#format_options`               | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/number_helper/number_converter.rb → ../../usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb`                           |
| -35.1% |   -94 | 17.2% → 11.2% | 268 → 174 | `ActiveSupport::NumberHelper::NumberConverter#options`                      | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/number_helper/number_converter.rb → ../../usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb`                           |
| -34.9% |   -94 | 17.3% → 11.3% | 269 → 175 | `ActiveSupport::NumberHelper::NumberToDelimitedConverter#delimiter_pattern` | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/number_helper/number_to_delimited_converter.rb → ../../usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_to_delimited_converter.rb` |
| -30.1% |   -94 | 20.1% → 14.0% | 312 → 218 | `ActiveSupport::NumberHelper::NumberToDelimitedConverter#convert`           | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/number_helper/number_to_delimited_converter.rb → ../../usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_to_delimited_converter.rb` |
| -29.1% |   -93 | 20.6% → 14.6% | 320 → 227 | `ActiveSupport::NumberHelper::NumberConverter#execute`                      | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/number_helper/number_converter.rb → ../../usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb`                           |
| -30.3% |   -92 | 19.5% → 13.6% | 304 → 212 | `ActiveSupport::NumberHelper::NumberToDelimitedConverter#parts`             | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/number_helper/number_to_delimited_converter.rb → ../../usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_to_delimited_converter.rb` |
| -25.2% |   -81 | 20.7% → 15.5% | 322 → 241 | `ActiveSupport::NumberHelper::NumberConverter.convert`                      | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/number_helper/number_converter.rb → ../../usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb`                           |
| -25.1% |   -81 | 20.8% → 15.6% | 323 → 242 | `ActiveSupport::NumberHelper#number_to_delimited`                           | `../../usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/number_helper.rb → ../../usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper.rb`                                                             |
| -24.2% |   -79 | 21.0% → 15.9% | 326 → 247 | `block in delegate_number_helper_method`                                    | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/helpers/number_helper.rb → ../../usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/number_helper.rb`                                                         |
| -23.8% |   -79 | 21.4% → 16.3% | 332 → 253 | `ActionView::Helpers::NumberHelper#wrap_with_output_safety_handling`        | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/helpers/number_helper.rb → ../../usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/number_helper.rb`                                                         |
| -21.7% |   -73 | 21.6% → 16.9% | 336 → 263 | `ActionView::Helpers::NumberHelper#delegate_number_helper_method`           | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/helpers/number_helper.rb → ../../usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/number_helper.rb`                                                         |
| -18.8% |   -63 | 21.6% → 17.6% | 336 → 273 | `ActionView::Helpers::NumberHelper#number_with_delimiter`                   | `../../usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/helpers/number_helper.rb → ../../usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/number_helper.rb`                                                         |
| -29.5% |   -28 |   6.1% → 4.3% |   95 → 67 | `Rack::ETag#digest_body`                                                    | `../../usr/local/bundle/gems/rack-3.2.7/lib/rack/etag.rb`                                                                                                                                                                                 |
| -28.7% |   -27 |   6.0% → 4.3% |   94 → 67 | `block in digest_body`                                                      | `../../usr/local/bundle/gems/rack-3.2.7/lib/rack/etag.rb`                                                                                                                                                                                 |
| -52.8% |   -19 |   2.3% → 1.1% |   36 → 17 | `block in evaluate`                                                         | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/journey/visitors.rb → ../../usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/visitors.rb`                                                           |
| -54.8% |   -17 |   2.0% → 0.9% |   31 → 14 | `ActionDispatch::Journey::Router::Utils::UriEncoder#escape_segment`         | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/journey/router/utils.rb → ../../usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router/utils.rb`                                                   |
| -54.8% |   -17 |   2.0% → 0.9% |   31 → 14 | `ActionDispatch::Journey::Router::Utils.escape_segment`                     | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/journey/router/utils.rb → ../../usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router/utils.rb`                                                   |
| -51.6% |   -16 |   2.0% → 1.0% |   31 → 15 | `block in <class:Format>`                                                   | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/journey/visitors.rb → ../../usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/visitors.rb`                                                           |
| -51.6% |   -16 |   2.0% → 1.0% |   31 → 15 | `ActionDispatch::Journey::Format::Parameter#escape`                         | `../../usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/journey/visitors.rb → ../../usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/visitors.rb`                                                           |

##### Unknown

|  Change | Delta |           % | Samples | Function                                                                                     | Location    |
| ------: | ----: | ----------: | ------: | -------------------------------------------------------------------------------------------- | ----------- |
|  -69.7% |   -23 | 2.1% → 0.6% | 33 → 10 | `block (2 levels) in _app_views_statuses_index_html_erb__328993190567029661_3128`            | `<unknown>` |
|  -25.0% |   -13 | 3.3% → 2.5% | 52 → 39 | `#<Class:0xffff76d571d8>#_app_views_layouts_application_html_erb___4441820961383043729_3160` | `<unknown>` |
|  -36.7% |   -11 | 1.9% → 1.2% | 30 → 19 | `ActionController::Base::HelperMethods#form_authenticity_token`                              | `<unknown>` |
|  -75.0% |    -3 | 0.3% → 0.1% |   4 → 1 | `Rails::Railtie.config`                                                                      | `<unknown>` |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `ActionView::Helpers::ControllerHelper#response`                                             | `<unknown>` |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `String#unpack`                                                                              | `<unknown>` |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `I18n::Base#default_separator`                                                               | `<unknown>` |
|  -66.7% |    -2 | 0.2% → 0.1% |   3 → 1 | `ApplicationController#_layout`                                                              | `<unknown>` |
|  -66.7% |    -2 | 0.2% → 0.1% |   3 → 1 | `StatusesController#_layout`                                                                 | `<unknown>` |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `ActionController::Metal#session`                                                            | `<unknown>` |
|  -50.0% |    -1 |        0.1% |   2 → 1 | `ActionController::Metal#content_type=`                                                      | `<unknown>` |
|  -33.3% |    -1 | 0.2% → 0.1% |   3 → 2 | `ActionView::ViewPaths#template_exists?`                                                     | `<unknown>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `Time.now`                                                                                   | `<unknown>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `ActionController::Base::HelperMethods#content_security_policy?`                             | `<unknown>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `Kernel#Float`                                                                               | `<unknown>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `Ractor.make_shareable`                                                                      | `<unknown>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `Hash#initialize`                                                                            | `<unknown>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `ActionController::Base#per_form_csrf_tokens`                                                | `<unknown>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `ActionController::Base.logger`                                                              | `<unknown>` |
