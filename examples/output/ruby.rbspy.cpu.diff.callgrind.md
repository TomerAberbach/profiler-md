# Sampling profile diff

Collected 1,555 samples.

| Category         | Change | Delta |             % |   Samples |
| ---------------- | -----: | ----: | ------------: | --------: |
| Native           | +13.7% |  +114 | 53.5% → 60.8% | 832 → 946 |
| Third-party      | -19.4% |  -127 | 42.1% → 34.0% | 655 → 528 |
| Unknown          | +22.8% |   +13 |   3.7% → 4.5% |   57 → 70 |
| Standard library |   0.0% |     0 |          0.7% |        11 |

Paths starting with `./` or `../` are relative to `/src/app/`.

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples collected within the function body, excluding callees. Categories account for at least 1.0% of self samples on the base or the current side.

|   Change | Delta |           % |  Samples | Function                                                               | Location                                                                                                       |
| -------: | ----: | ----------: | -------: | ---------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
|   +80.0% |   +56 | 4.5% → 8.1% | 70 → 126 | `Module#extend_object [c function]`                                    | `<unknown>`                                                                                                    |
|  +105.0% |   +21 | 1.3% → 2.6% |  20 → 41 | `Nokogiri::XML::Node#html_standard_serialize [c function]`             | `<unknown>`                                                                                                    |
|  +333.3% |   +20 | 0.4% → 1.7% |   6 → 26 | `String.new [c function]`                                              | `<unknown>`                                                                                                    |
|  +112.5% |   +18 | 1.0% → 2.2% |  16 → 34 | `Hash#merge [c function]`                                              | `<unknown>`                                                                                                    |
|   +29.8% |   +17 | 3.7% → 4.8% |  57 → 74 | `Nokogiri::Gumbo.fragment [c function]`                                | `<unknown>`                                                                                                    |
|  +850.0% |   +17 | 0.1% → 1.2% |   2 → 19 | `ActiveSupport::NumberHelper::NumberToDelimitedConverter#parts`        | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_to_delimited_converter.rb` |
| +1600.0% |   +16 | 0.1% → 1.1% |   1 → 17 | `Hash#transform_keys [c function]`                                     | `<unknown>`                                                                                                    |
|   +92.3% |   +12 | 0.8% → 1.6% |  13 → 25 | `Kernel#dup [c function]`                                              | `<unknown>`                                                                                                    |
|      new |   +10 | 0.0% → 0.6% |   0 → 10 | `ActionView::Helpers::NumberHelper#number_with_delimiter`              | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/number_helper.rb`                             |
|   +41.7% |   +10 | 1.5% → 2.2% |  24 → 34 | `block in _app_views_statuses_index_html_erb__328993190567029661_3128` | `<unknown>`                                                                                                    |
|   +90.0% |    +9 | 0.6% → 1.2% |  10 → 19 | `Nokogiri::XML::Node#node_name [c function]`                           | `<unknown>`                                                                                                    |
|  +900.0% |    +9 | 0.1% → 0.6% |   1 → 10 | `Loofah::HTML5::Scrub.cdata_needs_escaping?`                           | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`                                               |
|   +88.9% |    +8 | 0.6% → 1.1% |   9 → 17 | `Array#join [c function]`                                              | `<unknown>`                                                                                                    |
|   +25.8% |    +8 | 2.0% → 2.5% |  31 → 39 | `Nokogiri::HTML4::Document.new [c function]`                           | `<unknown>`                                                                                                    |
|   +77.8% |    +7 | 0.6% → 1.0% |   9 → 16 | `ActionView::OutputBuffer#<<`                                          | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/buffers.rb`                                           |
|   +75.0% |    +6 | 0.5% → 0.9% |   8 → 14 | `Class#new [c function]`                                               | `<unknown>`                                                                                                    |
|  +120.0% |    +6 | 0.3% → 0.7% |   5 → 11 | `Nokogiri::HTML5::DocumentFragment#initialize`                         | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/document_fragment.rb`             |
|  +500.0% |    +5 | 0.1% → 0.4% |    1 → 6 | `StringIO#write [c function]`                                          | `<unknown>`                                                                                                    |
|  +250.0% |    +5 | 0.1% → 0.5% |    2 → 7 | `Kernel#initialize_dup [c function]`                                   | `<unknown>`                                                                                                    |
|   +20.0% |    +5 | 1.6% → 1.9% |  25 → 30 | `Kernel.require [c function]`                                          | `<unknown>`                                                                                                    |

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
|  +500.0% |    +5 | 0.1% → 0.4% |    1 → 6 | `StringIO#write [c function]`                              | `<unknown>` |
|  +250.0% |    +5 | 0.1% → 0.5% |    2 → 7 | `Kernel#initialize_dup [c function]`                       | `<unknown>` |
|   +20.0% |    +5 | 1.6% → 1.9% |  25 → 30 | `Kernel.require [c function]`                              | `<unknown>` |
|  +100.0% |    +5 | 0.3% → 0.6% |   5 → 10 | `Nokogiri::XML::Node#attribute_nodes [c function]`         | `<unknown>` |
|      new |    +5 | 0.0% → 0.3% |    0 → 5 | `CGI::Escape#unescapeHTML [c function]`                    | `<unknown>` |
|  +133.3% |    +4 | 0.2% → 0.5% |    3 → 7 | `Nokogiri::XML::Attr#content [c function]`                 | `<unknown>` |
|  +400.0% |    +4 | 0.1% → 0.3% |    1 → 5 | `String#match? [c function]`                               | `<unknown>` |
|  +400.0% |    +4 | 0.1% → 0.3% |    1 → 5 | `StringIO#initialize [c function]`                         | `<unknown>` |
|  +300.0% |    +3 | 0.1% → 0.3% |    1 → 4 | `Nokogiri::XML::NodeSet#[] [c function]`                   | `<unknown>` |

##### Third-party

|  Change | Delta |           % | Samples | Function                                                            | Location                                                                                                       |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| +850.0% |   +17 | 0.1% → 1.2% |  2 → 19 | `ActiveSupport::NumberHelper::NumberToDelimitedConverter#parts`     | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_to_delimited_converter.rb` |
|     new |   +10 | 0.0% → 0.6% |  0 → 10 | `ActionView::Helpers::NumberHelper#number_with_delimiter`           | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/number_helper.rb`                             |
| +900.0% |    +9 | 0.1% → 0.6% |  1 → 10 | `Loofah::HTML5::Scrub.cdata_needs_escaping?`                        | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`                                               |
|  +77.8% |    +7 | 0.6% → 1.0% |  9 → 16 | `ActionView::OutputBuffer#<<`                                       | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/buffers.rb`                                           |
| +120.0% |    +6 | 0.3% → 0.7% |  5 → 11 | `Nokogiri::HTML5::DocumentFragment#initialize`                      | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/document_fragment.rb`             |
|  +71.4% |    +5 | 0.5% → 0.8% |  7 → 12 | `Nokogiri::XML::Document#decorate`                                  | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`                        |
| +500.0% |    +5 | 0.1% → 0.4% |   1 → 6 | `ActionView::Helpers::UrlHelper#convert_options_to_data_attributes` | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/url_helper.rb`                                |
| +500.0% |    +5 | 0.1% → 0.4% |   1 → 6 | `Loofah::HTML5::Scrub.scrub_css_attribute`                          | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`                                               |
| +500.0% |    +5 | 0.1% → 0.4% |   1 → 6 | `Nokogiri::XML::Node#attributes`                                    | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb`                            |
|  +45.5% |    +5 | 0.7% → 1.0% | 11 → 16 | `Loofah::Scrubber#traverse_conditionally_bottom_up`                 | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/scrubber.rb`                                                  |
| +500.0% |    +5 | 0.1% → 0.4% |   1 → 6 | `Rails::HTML::Concern::Serializer::UTF8Encode#serialize`            | `/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/sanitizer.rb`                                |
|  +66.7% |    +4 | 0.4% → 0.6% |  6 → 10 | `Nokogiri::XML::Document#decorators`                                | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`                        |
| +200.0% |    +4 | 0.1% → 0.4% |   2 → 6 | `block in to_html`                                                  | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`                        |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `I18n::Base#normalize_key`                                          | `/usr/local/bundle/gems/i18n-1.15.2/lib/i18n.rb`                                                               |
|  +75.0% |    +3 | 0.3% → 0.5% |   4 → 7 | `I18n::Backend::Base#translate`                                     | `/usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/base.rb`                                                  |
| +100.0% |    +3 | 0.2% → 0.4% |   3 → 6 | `Nokogiri::XML::Document#initialize`                                | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`                        |
|  +75.0% |    +3 | 0.3% → 0.5% |   4 → 7 | `Nokogiri::XML::NodeSet#to_html`                                    | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`                        |
| +150.0% |    +3 | 0.1% → 0.3% |   2 → 5 | `Nokogiri::XML::Node#xml?`                                          | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb`                            |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `Rails::HTML::PermitScrubber#scrub_attributes`                      | `/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`                                |
|  +60.0% |    +3 | 0.3% → 0.5% |   5 → 8 | `block in scrub_attributes`                                         | `/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`                                |

##### Unknown

| Change | Delta |           % | Samples | Function                                                               | Location    |
| -----: | ----: | ----------: | ------: | ---------------------------------------------------------------------- | ----------- |
| +41.7% |   +10 | 1.5% → 2.2% | 24 → 34 | `block in _app_views_statuses_index_html_erb__328993190567029661_3128` | `<unknown>` |
| +25.0% |    +4 | 1.0% → 1.3% | 16 → 20 | `Array#each`                                                           | `<unknown>` |
|    new |    +3 | 0.0% → 0.2% |   0 → 3 | `ActiveSupport::NumberHelper::NumberConverter#namespace`               | `<unknown>` |
|    new |    +2 | 0.0% → 0.1% |   0 → 2 | `Time#initialize`                                                      | `<unknown>` |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `Array#map`                                                            | `<unknown>` |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `ActionController::Base::HelperMethods#form_authenticity_token`        | `<unknown>` |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `ActionController::Base::HelperMethods#protect_against_forgery?`       | `<unknown>` |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `ActionController::Base#allow_forgery_protection`                      | `<unknown>` |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `ActionDispatch::Response.default_charset`                             | `<unknown>` |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `ActionDispatch::Response.default_headers`                             | `<unknown>` |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `ActionController::Base.default_static_extension`                      | `<unknown>` |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `ActionView::Base.default_formats`                                     | `<unknown>` |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `ActiveSupport::NumberHelper::NumberConverter.validate_float`          | `<unknown>` |

#### Improvements

Functions with the largest decrease in samples collected within the function body, excluding callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change | Delta |           % |  Samples | Function                                                           | Location                                                                                          |
| ------: | ----: | ----------: | -------: | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------- |
|  -86.5% |  -128 | 9.5% → 1.3% | 148 → 20 | `ActiveSupport::NumberHelper::NumberConverter#i18n_format_options` | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb` |
|  -72.2% |   -57 | 5.1% → 1.4% |  79 → 22 | `Nokogiri::XML::NodeSet#each`                                      | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`           |
|  -50.9% |   -29 | 3.7% → 1.8% |  57 → 28 | `String#encode [c function]`                                       | `<unknown>`                                                                                       |
|  -28.7% |   -27 | 6.0% → 4.3% |  94 → 67 | `Digest::Base#<< [c function]`                                     | `<unknown>`                                                                                       |
|  -54.3% |   -25 | 3.0% → 1.4% |  46 → 21 | `block in decorate`                                                | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`           |
|  -62.5% |   -15 | 1.5% → 0.6% |   24 → 9 | `String#split [c function]`                                        | `<unknown>`                                                                                       |
|  -40.0% |   -12 | 1.9% → 1.2% |  30 → 18 | `String#gsub! [c function]`                                        | `<unknown>`                                                                                       |
|  -25.0% |   -11 | 2.8% → 2.1% |  44 → 33 | `String#gsub [c function]`                                         | `<unknown>`                                                                                       |
|  -64.3% |    -9 | 0.9% → 0.3% |   14 → 5 | `Nokogiri::XML::Node#to_format`                                    | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb`               |
|  -60.0% |    -6 | 0.6% → 0.3% |   10 → 4 | `Nokogiri::XML::Node#serialize`                                    | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb`               |
|  -41.7% |    -5 | 0.8% → 0.5% |   12 → 7 | `block in each`                                                    | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`           |
|  -71.4% |    -5 | 0.5% → 0.1% |    7 → 2 | `Set#include?`                                                     | `/usr/local/lib/ruby/3.4.0/set.rb`                                                                |
|  -66.7% |    -4 | 0.4% → 0.1% |    6 → 2 | `Hash#fetch [c function]`                                          | `<unknown>`                                                                                       |
|  -80.0% |    -4 | 0.3% → 0.1% |    5 → 1 | `Random.urandom [c function]`                                      | `<unknown>`                                                                                       |
|  -66.7% |    -4 | 0.4% → 0.1% |    6 → 2 | `ActiveSupport::CoreExt::ERBUtil#html_escape`                      | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/core_ext/erb/util.rb`              |
|  -80.0% |    -4 | 0.3% → 0.1% |    5 → 1 | `Nokogiri::HTML5::Document#initialize`                             | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/document.rb`         |
|  -30.8% |    -4 | 0.8% → 0.6% |   13 → 9 | `Nokogiri::XML::DocumentFragment.new`                              | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document_fragment.rb`  |
|  -50.0% |    -3 | 0.4% → 0.2% |    6 → 3 | `OpenSSL::HMAC#initialize [c function]`                            | `<unknown>`                                                                                       |
|  -30.0% |    -3 | 0.6% → 0.5% |   10 → 7 | `ERB::Util.html_escape [c function]`                               | `<unknown>`                                                                                       |
| removed |    -3 | 0.2% → 0.0% |    3 → 0 | `Hash#[] [c function]`                                             | `<unknown>`                                                                                       |

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
|  -50.0% |    -3 | 0.4% → 0.2% |   6 → 3 | `OpenSSL::HMAC#initialize [c function]`             | `<unknown>` |
|  -30.0% |    -3 | 0.6% → 0.5% |  10 → 7 | `ERB::Util.html_escape [c function]`                | `<unknown>` |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `Hash#[] [c function]`                              | `<unknown>` |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `JSON::Ext::Generator::State#generate [c function]` | `<unknown>` |
|  -42.9% |    -3 | 0.5% → 0.3% |   7 → 4 | `Kernel#lambda [c function]`                        | `<unknown>` |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `Kernel#respond_to? [c function]`                   | `<unknown>` |
|  -33.3% |    -3 | 0.6% → 0.4% |   9 → 6 | `Nokogiri::XML::Attr#value= [c function]`           | `<unknown>` |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `String#sub [c function]`                           | `<unknown>` |
|  -66.7% |    -2 | 0.2% → 0.1% |   3 → 1 | `OpenSSL::Cipher#initialize [c function]`           | `<unknown>` |
|  -15.4% |    -2 | 0.8% → 0.7% | 13 → 11 | `Hash#each [c function]`                            | `<unknown>` |
|  -40.0% |    -2 | 0.3% → 0.2% |   5 → 3 | `Hash#dig [c function]`                             | `<unknown>` |
|  -16.7% |    -2 | 0.8% → 0.6% | 12 → 10 | `Kernel#require_relative [c function]`              | `<unknown>` |
|  -66.7% |    -2 | 0.2% → 0.1% |   3 → 1 | `Nokogiri::XML::Node#unlink [c function]`           | `<unknown>` |

##### Third-party

|  Change | Delta |           % |  Samples | Function                                                           | Location                                                                                          |
| ------: | ----: | ----------: | -------: | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------- |
|  -86.5% |  -128 | 9.5% → 1.3% | 148 → 20 | `ActiveSupport::NumberHelper::NumberConverter#i18n_format_options` | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb` |
|  -72.2% |   -57 | 5.1% → 1.4% |  79 → 22 | `Nokogiri::XML::NodeSet#each`                                      | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`           |
|  -54.3% |   -25 | 3.0% → 1.4% |  46 → 21 | `block in decorate`                                                | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`           |
|  -64.3% |    -9 | 0.9% → 0.3% |   14 → 5 | `Nokogiri::XML::Node#to_format`                                    | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb`               |
|  -60.0% |    -6 | 0.6% → 0.3% |   10 → 4 | `Nokogiri::XML::Node#serialize`                                    | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb`               |
|  -41.7% |    -5 | 0.8% → 0.5% |   12 → 7 | `block in each`                                                    | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`           |
|  -66.7% |    -4 | 0.4% → 0.1% |    6 → 2 | `ActiveSupport::CoreExt::ERBUtil#html_escape`                      | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/core_ext/erb/util.rb`              |
|  -80.0% |    -4 | 0.3% → 0.1% |    5 → 1 | `Nokogiri::HTML5::Document#initialize`                             | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/document.rb`         |
|  -30.8% |    -4 | 0.8% → 0.6% |   13 → 9 | `Nokogiri::XML::DocumentFragment.new`                              | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document_fragment.rb`  |
| removed |    -3 | 0.2% → 0.0% |    3 → 0 | `Rack::Request::Env#get_header`                                    | `/usr/local/bundle/gems/rack-3.2.7/lib/rack/request.rb`                                           |
| removed |    -3 | 0.2% → 0.0% |    3 → 0 | `ActionView::PathRegistry.get_view_paths`                          | `/usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/path_registry.rb`                      |
| removed |    -3 | 0.2% → 0.0% |    3 → 0 | `I18n::Backend::Simple::Implementation#lookup`                     | `/usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/simple.rb`                                   |
|  -75.0% |    -3 | 0.3% → 0.1% |    4 → 1 | `Loofah::HtmlFragmentBehavior::ClassMethods#parse`                 | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`                                     |
|  -33.3% |    -3 | 0.6% → 0.4% |    9 → 6 | `Loofah::ScrubBehavior::Node#scrub!`                               | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`                                     |
|  -50.0% |    -3 | 0.4% → 0.2% |    6 → 3 | `Nokogiri::XML::Node#to_html`                                      | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb`               |
| removed |    -2 | 0.1% → 0.0% |    2 → 0 | `block in derive_offsets`                                          | `/usr/local/bundle/gems/tzinfo-2.0.6/lib/tzinfo/data_sources/zoneinfo_reader.rb`                  |
|  -66.7% |    -2 | 0.2% → 0.1% |    3 → 1 | `block (2 levels) in generate_url_helpers`                         | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb`                |
|  -66.7% |    -2 | 0.2% → 0.1% |    3 → 1 | `block in evaluate`                                                | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/visitors.rb`                 |
| removed |    -2 | 0.1% → 0.0% |    2 → 0 | `String#html_safe`                                                 | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/core_ext/string/output_safety.rb`  |
|  -33.3% |    -2 | 0.4% → 0.3% |    6 → 4 | `ActionView::Helpers::TagHelper::TagBuilder#content_tag_string`    | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/tag_helper.rb`                   |

##### Unknown

|  Change | Delta |           % | Samples | Function                                                                                     | Location    |
| ------: | ----: | ----------: | ------: | -------------------------------------------------------------------------------------------- | ----------- |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `#<Class:0xffff76d571d8>#_app_views_layouts_application_html_erb___4441820961383043729_3160` | `<unknown>` |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `ActionView::Helpers::ControllerHelper#response`                                             | `<unknown>` |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `String#unpack`                                                                              | `<unknown>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `Ractor.make_shareable`                                                                      | `<unknown>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `Time.now`                                                                                   | `<unknown>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `ActionController::Metal#session`                                                            | `<unknown>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `ActionController::Base::HelperMethods#content_security_policy?`                             | `<unknown>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `Kernel#Float`                                                                               | `<unknown>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `Array#select`                                                                               | `<unknown>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `Hash#initialize`                                                                            | `<unknown>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `I18n::Base#default_separator`                                                               | `<unknown>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `ApplicationController#_layout`                                                              | `<unknown>` |

#### Lines

Lines with the largest change in contribution to each function's self samples.

##### `ActiveSupport::NumberHelper::NumberToDelimitedConverter#parts` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_to_delimited_converter.rb`)

|  Change | Delta |             % | Samples | Location                                                                                                            |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------------- |
|     new |   +19 | 0.0% → 100.0% |  0 → 19 | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_to_delimited_converter.rb:37`   |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `/usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/number_helper/number_to_delimited_converter.rb:38` |

##### `ActionView::Helpers::NumberHelper#number_with_delimiter` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/number_helper.rb`)

| Change | Delta |             % | Samples | Location                                                                              |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------- |
|    new |   +10 | 0.0% → 100.0% |  0 → 10 | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/number_helper.rb:85` |

##### `block in _app_views_statuses_index_html_erb__328993190567029661_3128` (`<unknown>`)

| Change | Delta |      % | Samples | Location |
| -----: | ----: | -----: | ------: | -------- |
| +41.7% |   +10 | 100.0% | 24 → 34 | 29       |

##### `Loofah::HTML5::Scrub.cdata_needs_escaping?` (`/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`)

|  Change | Delta |      % | Samples | Location                                                             |
| ------: | ----: | -----: | ------: | -------------------------------------------------------------------- |
| +900.0% |    +9 | 100.0% |  1 → 10 | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb:264` |

##### `ActionView::OutputBuffer#<<` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/buffers.rb`)

| Change | Delta |      % | Samples | Location                                                                |
| -----: | ----: | -----: | ------: | ----------------------------------------------------------------------- |
| +77.8% |    +7 | 100.0% |  9 → 16 | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/buffers.rb:52` |

##### `Nokogiri::HTML5::DocumentFragment#initialize` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/document_fragment.rb`)

|  Change | Delta |      % | Samples | Location                                                                                               |
| ------: | ----: | -----: | ------: | ------------------------------------------------------------------------------------------------------ |
| +120.0% |    +6 | 100.0% |  5 → 11 | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/document_fragment.rb:167` |

##### `Nokogiri::XML::Document#decorate` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`)

| Change | Delta |      % | Samples | Location                                                                                    |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------------------------------- |
| +71.4% |    +5 | 100.0% |  7 → 12 | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb:418` |

##### `ActionView::Helpers::UrlHelper#convert_options_to_data_attributes` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/url_helper.rb`)

|  Change | Delta |      % | Samples | Location                                                                            |
| ------: | ----: | -----: | ------: | ----------------------------------------------------------------------------------- |
| +500.0% |    +5 | 100.0% |   1 → 6 | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/url_helper.rb:720` |

##### `Loofah::HTML5::Scrub.scrub_css_attribute` (`/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`)

|  Change | Delta |      % | Samples | Location                                                             |
| ------: | ----: | -----: | ------: | -------------------------------------------------------------------- |
| +500.0% |    +5 | 100.0% |   1 → 6 | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb:108` |

##### `Nokogiri::XML::Node#attributes` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb`)

|  Change | Delta |      % | Samples | Location                                                                                |
| ------: | ----: | -----: | ------: | --------------------------------------------------------------------------------------- |
| +500.0% |    +5 | 100.0% |   1 → 6 | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb:739` |

##### `Loofah::Scrubber#traverse_conditionally_bottom_up` (`/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/scrubber.rb`)

| Change | Delta |      % | Samples | Location                                                          |
| -----: | ----: | -----: | ------: | ----------------------------------------------------------------- |
| +45.5% |    +5 | 100.0% | 11 → 16 | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/scrubber.rb:138` |

##### `Rails::HTML::Concern::Serializer::UTF8Encode#serialize` (`/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/sanitizer.rb`)

|  Change | Delta |      % | Samples | Location                                                                            |
| ------: | ----: | -----: | ------: | ----------------------------------------------------------------------------------- |
| +500.0% |    +5 | 100.0% |   1 → 6 | `/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/sanitizer.rb:192` |

##### `Nokogiri::XML::Document#decorators` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`)

| Change | Delta |      % | Samples | Location                                                                                    |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------------------------------- |
| +66.7% |    +4 | 100.0% |  6 → 10 | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb:372` |

##### `block in to_html` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`)

|  Change | Delta |      % | Samples | Location                                                                                    |
| ------: | ----: | -----: | ------: | ------------------------------------------------------------------------------------------- |
| +200.0% |    +4 | 100.0% |   2 → 6 | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb:354` |

##### `I18n::Base#normalize_key` (`/usr/local/bundle/gems/i18n-1.15.2/lib/i18n.rb`)

| Change | Delta |             % | Samples | Location                                             |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `/usr/local/bundle/gems/i18n-1.15.2/lib/i18n.rb:492` |

##### `I18n::Backend::Base#translate` (`/usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/base.rb`)

| Change | Delta |      % | Samples | Location                                                         |
| -----: | ----: | -----: | ------: | ---------------------------------------------------------------- |
| +75.0% |    +3 | 100.0% |   4 → 7 | `/usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/base.rb:69` |

##### `Nokogiri::XML::Document#initialize` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`)

|  Change | Delta |      % | Samples | Location                                                                                    |
| ------: | ----: | -----: | ------: | ------------------------------------------------------------------------------------------- |
| +100.0% |    +3 | 100.0% |   3 → 6 | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb:195` |

##### `Nokogiri::XML::NodeSet#to_html` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`)

| Change | Delta |      % | Samples | Location                                                                                    |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------------------------------- |
| +75.0% |    +3 | 100.0% |   4 → 7 | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb:356` |

##### `Nokogiri::XML::Node#xml?` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb`)

|  Change | Delta |      % | Samples | Location                                                                                 |
| ------: | ----: | -----: | ------: | ---------------------------------------------------------------------------------------- |
| +150.0% |    +3 | 100.0% |   2 → 5 | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb:1272` |

##### `Rails::HTML::PermitScrubber#scrub_attributes` (`/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`)

| Change | Delta |             % | Samples | Location                                                                            |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------------------------------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb:126` |

##### `block in scrub_attributes` (`/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`)

| Change | Delta |      % | Samples | Location                                                                            |
| -----: | ----: | -----: | ------: | ----------------------------------------------------------------------------------- |
| +60.0% |    +3 | 100.0% |   5 → 8 | `/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb:120` |

##### `Array#each` (`<unknown>`)

| Change | Delta |      % | Samples | Location |
| -----: | ----: | -----: | ------: | -------- |
| +25.0% |    +4 | 100.0% | 16 → 20 | 231      |

##### `ActiveSupport::NumberHelper::NumberConverter#namespace` (`<unknown>`)

| Change | Delta |             % | Samples | Location |
| -----: | ----: | ------------: | ------: | -------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | 14       |

##### `Time#initialize` (`<unknown>`)

| Change | Delta |             % | Samples | Location |
| -----: | ----: | ------------: | ------: | -------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | 453      |

##### `Array#map` (`<unknown>`)

| Change | Delta |             % | Samples | Location |
| -----: | ----: | ------------: | ------: | -------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | 251      |

##### `ActionController::Base::HelperMethods#form_authenticity_token` (`<unknown>`)

| Change | Delta |             % | Samples | Location |
| -----: | ----: | ------------: | ------: | -------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | 109      |

##### `ActionController::Base::HelperMethods#protect_against_forgery?` (`<unknown>`)

| Change | Delta |             % | Samples | Location |
| -----: | ----: | ------------: | ------: | -------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | 110      |

##### `ActionController::Base#allow_forgery_protection` (`<unknown>`)

| Change | Delta |             % | Samples | Location |
| -----: | ----: | ------------: | ------: | -------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | 86       |

##### `ActionDispatch::Response.default_charset` (`<unknown>`)

| Change | Delta |             % | Samples | Location |
| -----: | ----: | ------------: | ------: | -------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | 102      |

##### `ActionDispatch::Response.default_headers` (`<unknown>`)

| Change | Delta |             % | Samples | Location |
| -----: | ----: | ------------: | ------: | -------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | 103      |

##### `ActionController::Base.default_static_extension` (`<unknown>`)

| Change | Delta |             % | Samples | Location |
| -----: | ----: | ------------: | ------: | -------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | 35       |

##### `ActionView::Base.default_formats` (`<unknown>`)

| Change | Delta |             % | Samples | Location |
| -----: | ----: | ------------: | ------: | -------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | 174      |

##### `ActiveSupport::NumberHelper::NumberConverter.validate_float` (`<unknown>`)

| Change | Delta |             % | Samples | Location |
| -----: | ----: | ------------: | ------: | -------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | 17       |

##### `ActiveSupport::NumberHelper::NumberConverter#i18n_format_options` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb`)

| Change | Delta |      % |  Samples | Location                                                                                                    |
| -----: | ----: | -----: | -------: | ----------------------------------------------------------------------------------------------------------- |
| -86.5% |  -128 | 100.0% | 148 → 20 | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb:164 → 167` |

##### `Nokogiri::XML::NodeSet#each` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`)

| Change | Delta |      % | Samples | Location                                                                                    |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------------------------------- |
| -72.2% |   -57 | 100.0% | 79 → 22 | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb:240` |

##### `block in decorate` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`)

| Change | Delta |      % | Samples | Location                                                                                    |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------------------------------- |
| -54.3% |   -25 | 100.0% | 46 → 21 | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb:417` |

##### `Nokogiri::XML::Node#to_format` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb`)

| Change | Delta |      % | Samples | Location                                                                                 |
| -----: | ----: | -----: | ------: | ---------------------------------------------------------------------------------------- |
| -64.3% |    -9 | 100.0% |  14 → 5 | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb:1677` |

##### `Nokogiri::XML::Node#serialize` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb`)

| Change | Delta |      % | Samples | Location                                                                                 |
| -----: | ----: | -----: | ------: | ---------------------------------------------------------------------------------------- |
| -60.0% |    -6 | 100.0% |  10 → 4 | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb:1433` |

##### `block in each` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`)

| Change | Delta |      % | Samples | Location                                                                                    |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------------------------------- |
| -41.7% |    -5 | 100.0% |  12 → 7 | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb:238` |

##### `Set#include?` (`/usr/local/lib/ruby/3.4.0/set.rb`)

| Change | Delta |      % | Samples | Location                               |
| -----: | ----: | -----: | ------: | -------------------------------------- |
| -71.4% |    -5 | 100.0% |   7 → 2 | `/usr/local/lib/ruby/3.4.0/set.rb:398` |

##### `ActiveSupport::CoreExt::ERBUtil#html_escape` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/core_ext/erb/util.rb`)

| Change | Delta |      % | Samples | Location                                                                                |
| -----: | ----: | -----: | ------: | --------------------------------------------------------------------------------------- |
| -66.7% |    -4 | 100.0% |   6 → 2 | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/core_ext/erb/util.rb:17` |

##### `Nokogiri::HTML5::Document#initialize` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/document.rb`)

| Change | Delta |      % | Samples | Location                                                                                      |
| -----: | ----: | -----: | ------: | --------------------------------------------------------------------------------------------- |
| -80.0% |    -4 | 100.0% |   5 → 1 | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/document.rb:163` |

##### `Nokogiri::XML::DocumentFragment.new` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document_fragment.rb`)

| Change | Delta |      % | Samples | Location                                                                                            |
| -----: | ----: | -----: | ------: | --------------------------------------------------------------------------------------------------- |
| -30.8% |    -4 | 100.0% |  13 → 9 | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document_fragment.rb:46` |

##### `Rack::Request::Env#get_header` (`/usr/local/bundle/gems/rack-3.2.7/lib/rack/request.rb`)

|  Change | Delta |             % | Samples | Location                                                    |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `/usr/local/bundle/gems/rack-3.2.7/lib/rack/request.rb:107` |

##### `ActionView::PathRegistry.get_view_paths` (`/usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/path_registry.rb`)

|  Change | Delta |             % | Samples | Location                                                                        |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `/usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/path_registry.rb:16` |

##### `I18n::Backend::Simple::Implementation#lookup` (`/usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/simple.rb`)

|  Change | Delta |             % | Samples | Location                                                            |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `/usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/simple.rb:107` |

##### `Loofah::HtmlFragmentBehavior::ClassMethods#parse` (`/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`)

| Change | Delta |      % | Samples | Location                                                          |
| -----: | ----: | -----: | ------: | ----------------------------------------------------------------- |
| -75.0% |    -3 | 100.0% |   4 → 1 | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb:178` |

##### `Loofah::ScrubBehavior::Node#scrub!` (`/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`)

| Change | Delta |      % | Samples | Location                                                         |
| -----: | ----: | -----: | ------: | ---------------------------------------------------------------- |
| -33.3% |    -3 | 100.0% |   9 → 6 | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb:48` |

##### `Nokogiri::XML::Node#to_html` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb`)

| Change | Delta |      % | Samples | Location                                                                                 |
| -----: | ----: | -----: | ------: | ---------------------------------------------------------------------------------------- |
| -50.0% |    -3 | 100.0% |   6 → 3 | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb:1444` |

##### `block in derive_offsets` (`/usr/local/bundle/gems/tzinfo-2.0.6/lib/tzinfo/data_sources/zoneinfo_reader.rb`)

|  Change | Delta |             % | Samples | Location                                                                             |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------ |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `/usr/local/bundle/gems/tzinfo-2.0.6/lib/tzinfo/data_sources/zoneinfo_reader.rb:166` |

##### `block (2 levels) in generate_url_helpers` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb`)

| Change | Delta |      % | Samples | Location                                                                               |
| -----: | ----: | -----: | ------: | -------------------------------------------------------------------------------------- |
| -66.7% |    -2 | 100.0% |   3 → 1 | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb:615` |

##### `block in evaluate` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/visitors.rb`)

|  Change | Delta |              % | Samples | Location                                                                             |
| ------: | ----: | -------------: | ------: | ------------------------------------------------------------------------------------ |
|  -50.0% |    -1 | 66.7% → 100.0% |   2 → 1 | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/visitors.rb:47` |
| removed |    -1 |   33.3% → 0.0% |   1 → 0 | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/visitors.rb:49` |

##### `String#html_safe` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/core_ext/string/output_safety.rb`)

|  Change | Delta |             % | Samples | Location                                                                                             |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/core_ext/string/output_safety.rb:243` |

##### `ActionView::Helpers::TagHelper::TagBuilder#content_tag_string` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/tag_helper.rb`)

| Change | Delta |      % | Samples | Location                                                                            |
| -----: | ----: | -----: | ------: | ----------------------------------------------------------------------------------- |
| -33.3% |    -2 | 100.0% |   6 → 4 | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/tag_helper.rb:233` |

##### `#<Class:0xffff76d571d8>#_app_views_layouts_application_html_erb___4441820961383043729_3160` (`<unknown>`)

|  Change | Delta |             % | Samples | Location |
| ------: | ----: | ------------: | ------: | -------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | 31       |

##### `ActionView::Helpers::ControllerHelper#response` (`<unknown>`)

|  Change | Delta |             % | Samples | Location |
| ------: | ----: | ------------: | ------: | -------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | 18       |

##### `String#unpack` (`<unknown>`)

|  Change | Delta |             % | Samples | Location |
| ------: | ----: | ------------: | ------: | -------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | 26       |

##### `Ractor.make_shareable` (`<unknown>`)

|  Change | Delta |             % | Samples | Location |
| ------: | ----: | ------------: | ------: | -------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | 836      |

##### `Time.now` (`<unknown>`)

|  Change | Delta |             % | Samples | Location |
| ------: | ----: | ------------: | ------: | -------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | 266      |

##### `ActionController::Metal#session` (`<unknown>`)

|  Change | Delta |             % | Samples | Location |
| ------: | ----: | ------------: | ------: | -------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | 176      |

##### `ActionController::Base::HelperMethods#content_security_policy?` (`<unknown>`)

|  Change | Delta |             % | Samples | Location |
| ------: | ----: | ------------: | ------: | -------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | 13       |

##### `Kernel#Float` (`<unknown>`)

|  Change | Delta |             % | Samples | Location |
| ------: | ----: | ------------: | ------: | -------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | 199      |

##### `Array#select` (`<unknown>`)

|  Change | Delta |             % | Samples | Location |
| ------: | ----: | ------------: | ------: | -------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | 276      |

##### `Hash#initialize` (`<unknown>`)

|  Change | Delta |             % | Samples | Location |
| ------: | ----: | ------------: | ------: | -------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | 39       |

##### `I18n::Base#default_separator` (`<unknown>`)

|  Change | Delta |             % | Samples | Location |
| ------: | ----: | ------------: | ------: | -------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | 102      |

##### `ApplicationController#_layout` (`<unknown>`)

|  Change | Delta |             % | Samples | Location |
| ------: | ----: | ------------: | ------: | -------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | 334      |

### Total samples

#### Regressions

Functions with the largest increase in samples collected within the function and its callees, excluding recursive calls. Categories account for at least 1.0% of self samples on the base or the current side.

|   Change | Delta |             % |   Samples | Function                                                               | Location                                                                                           |
| -------: | ----: | ------------: | --------: | ---------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
|   +79.5% |   +58 |   4.7% → 8.4% |  73 → 131 | `Kernel#extend [c function]`                                           | `<unknown>`                                                                                        |
|   +80.0% |   +56 |   4.5% → 8.1% |  70 → 126 | `Module#extend_object [c function]`                                    | `<unknown>`                                                                                        |
|   +74.7% |   +56 |   4.8% → 8.4% |  75 → 131 | `block (2 levels) in decorate`                                         | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`            |
|   +16.6% |   +37 | 14.3% → 16.7% | 223 → 260 | `Array#each`                                                           | `<unknown>`                                                                                        |
|   +51.0% |   +25 |   3.2% → 4.8% |   49 → 74 | `Rails::HTML::PermitScrubber#scrub_attribute`                          | `/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`                    |
|  +105.0% |   +21 |   1.3% → 2.6% |   20 → 41 | `Nokogiri::XML::Node#html_standard_serialize [c function]`             | `<unknown>`                                                                                        |
|  +161.5% |   +21 |   0.8% → 2.2% |   13 → 34 | `String.new [c function]`                                              | `<unknown>`                                                                                        |
|   +48.7% |   +19 |   2.5% → 3.7% |   39 → 58 | `Loofah::HTML5::Scrub.scrub_uri_attribute`                             | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`                                   |
|  +112.5% |   +18 |   1.0% → 2.2% |   16 → 34 | `Hash#merge [c function]`                                              | `<unknown>`                                                                                        |
|   +90.0% |   +18 |   1.3% → 2.4% |   20 → 38 | `Kernel#dup [c function]`                                              | `<unknown>`                                                                                        |
|   +29.8% |   +17 |   3.7% → 4.8% |   57 → 74 | `Nokogiri::Gumbo.fragment [c function]`                                | `<unknown>`                                                                                        |
| +1700.0% |   +17 |   0.1% → 1.2% |    1 → 18 | `Hash#symbolize_keys`                                                  | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/core_ext/hash/keys.rb`              |
|   +18.6% |   +16 |   5.5% → 6.6% |  86 → 102 | `block in _app_views_statuses_index_html_erb__328993190567029661_3128` | `<unknown>`                                                                                        |
|  +750.0% |   +15 |   0.1% → 1.1% |    2 → 17 | `Hash#transform_keys [c function]`                                     | `<unknown>`                                                                                        |
|   +44.4% |   +12 |   1.7% → 2.5% |   27 → 39 | `Class#new [c function]`                                               | `<unknown>`                                                                                        |
|   +44.0% |   +11 |   1.6% → 2.3% |   25 → 36 | `Rails::HTML::PermitScrubber#scrub`                                    | `/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`                    |
|      new |   +11 |   0.0% → 0.7% |    0 → 11 | `ActiveSupport::NumberHelper::NumberConverter#initialize`              | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb`  |
|   +20.8% |   +10 |   3.1% → 3.7% |   48 → 58 | `Nokogiri::HTML4::Document.new [c function]`                           | `<unknown>`                                                                                        |
|  +166.7% |   +10 |   0.4% → 1.0% |    6 → 16 | `ActionController::UrlFor#url_options`                                 | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/url_for.rb`                   |
| +1000.0% |   +10 |   0.1% → 0.7% |    1 → 11 | `ActionDispatch::Session::SessionObject#commit_session`                | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/session/abstract_store.rb` |

##### Native

|  Change | Delta |           % |  Samples | Function                                                   | Location    |
| ------: | ----: | ----------: | -------: | ---------------------------------------------------------- | ----------- |
|  +79.5% |   +58 | 4.7% → 8.4% | 73 → 131 | `Kernel#extend [c function]`                               | `<unknown>` |
|  +80.0% |   +56 | 4.5% → 8.1% | 70 → 126 | `Module#extend_object [c function]`                        | `<unknown>` |
| +105.0% |   +21 | 1.3% → 2.6% |  20 → 41 | `Nokogiri::XML::Node#html_standard_serialize [c function]` | `<unknown>` |
| +161.5% |   +21 | 0.8% → 2.2% |  13 → 34 | `String.new [c function]`                                  | `<unknown>` |
| +112.5% |   +18 | 1.0% → 2.2% |  16 → 34 | `Hash#merge [c function]`                                  | `<unknown>` |
|  +90.0% |   +18 | 1.3% → 2.4% |  20 → 38 | `Kernel#dup [c function]`                                  | `<unknown>` |
|  +29.8% |   +17 | 3.7% → 4.8% |  57 → 74 | `Nokogiri::Gumbo.fragment [c function]`                    | `<unknown>` |
| +750.0% |   +15 | 0.1% → 1.1% |   2 → 17 | `Hash#transform_keys [c function]`                         | `<unknown>` |
|  +44.4% |   +12 | 1.7% → 2.5% |  27 → 39 | `Class#new [c function]`                                   | `<unknown>` |
|  +20.8% |   +10 | 3.1% → 3.7% |  48 → 58 | `Nokogiri::HTML4::Document.new [c function]`               | `<unknown>` |
|     new |    +9 | 0.0% → 0.6% |    0 → 9 | `Enumerator#each [c function]`                             | `<unknown>` |
|  +90.0% |    +9 | 0.6% → 1.2% |  10 → 19 | `Nokogiri::XML::Node#node_name [c function]`               | `<unknown>` |
|  +70.0% |    +7 | 0.6% → 1.1% |  10 → 17 | `Array#join [c function]`                                  | `<unknown>` |
| +700.0% |    +7 | 0.1% → 0.5% |    1 → 8 | `IO::generic_writable#<< [c function]`                     | `<unknown>` |
|  +37.5% |    +6 | 1.0% → 1.4% |  16 → 22 | `Hash#each_pair [c function]`                              | `<unknown>` |
|  +85.7% |    +6 | 0.5% → 0.8% |   7 → 13 | `Kernel#initialize_dup [c function]`                       | `<unknown>` |
|  +23.1% |    +6 | 1.7% → 2.1% |  26 → 32 | `Kernel.require [c function]`                              | `<unknown>` |
| +500.0% |    +5 | 0.1% → 0.4% |    1 → 6 | `StringIO#write [c function]`                              | `<unknown>` |
| +100.0% |    +5 | 0.3% → 0.6% |   5 → 10 | `Nokogiri::XML::Node#attribute_nodes [c function]`         | `<unknown>` |
| +500.0% |    +5 | 0.1% → 0.4% |    1 → 6 | `StringIO#initialize [c function]`                         | `<unknown>` |

##### Third-party

|   Change | Delta |           % |  Samples | Function                                                                                      | Location                                                                                           |
| -------: | ----: | ----------: | -------: | --------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
|   +74.7% |   +56 | 4.8% → 8.4% | 75 → 131 | `block (2 levels) in decorate`                                                                | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`            |
|   +51.0% |   +25 | 3.2% → 4.8% |  49 → 74 | `Rails::HTML::PermitScrubber#scrub_attribute`                                                 | `/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`                    |
|   +48.7% |   +19 | 2.5% → 3.7% |  39 → 58 | `Loofah::HTML5::Scrub.scrub_uri_attribute`                                                    | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`                                   |
| +1700.0% |   +17 | 0.1% → 1.2% |   1 → 18 | `Hash#symbolize_keys`                                                                         | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/core_ext/hash/keys.rb`              |
|   +44.0% |   +11 | 1.6% → 2.3% |  25 → 36 | `Rails::HTML::PermitScrubber#scrub`                                                           | `/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`                    |
|      new |   +11 | 0.0% → 0.7% |   0 → 11 | `ActiveSupport::NumberHelper::NumberConverter#initialize`                                     | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb`  |
|  +166.7% |   +10 | 0.4% → 1.0% |   6 → 16 | `ActionController::UrlFor#url_options`                                                        | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/url_for.rb`                   |
| +1000.0% |   +10 | 0.1% → 0.7% |   1 → 11 | `ActionDispatch::Session::SessionObject#commit_session`                                       | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/session/abstract_store.rb` |
| +1000.0% |   +10 | 0.1% → 0.7% |   1 → 11 | `Rack::Session::Abstract::Persisted#commit_session`                                           | `/usr/local/bundle/gems/rack-session-2.1.2/lib/rack/session/abstract/id.rb`                        |
|      new |   +10 | 0.0% → 0.6% |   0 → 10 | `ActionDispatch::Session::CookieStore#set_cookie`                                             | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/session/cookie_store.rb`   |
|   +40.0% |   +10 | 1.6% → 2.3% |  25 → 35 | `ActionDispatch::Routing::RouteSet::NamedRouteCollection::UrlHelper::OptimizedUrlHelper#call` | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb`                 |
|  +142.9% |   +10 | 0.5% → 1.1% |   7 → 17 | `ActionView::RoutingUrlFor#url_options`                                                       | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/routing_url_for.rb`                       |
|      new |   +10 | 0.0% → 0.6% |   0 → 10 | `ActionView::Helpers::NumberHelper#number_with_delimiter`                                     | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/number_helper.rb`                 |
|  +900.0% |    +9 | 0.1% → 0.6% |   1 → 10 | `ActionDispatch::Cookies::AbstractCookieJar#[]=`                                              | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/cookies.rb`                |
|   +64.3% |    +9 | 0.9% → 1.5% |  14 → 23 | `I18n::Backend::Fallbacks#translate`                                                          | `/usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/fallbacks.rb`                                 |
|   +80.0% |    +8 | 0.6% → 1.2% |  10 → 18 | `Loofah::HTML5::Scrub.allowed_uri?`                                                           | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`                                   |
|  +114.3% |    +8 | 0.5% → 1.0% |   7 → 15 | `Nokogiri::XML::NodeSet#to_html`                                                              | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`            |
|   +46.7% |    +7 | 1.0% → 1.4% |  15 → 22 | `ActionView::Helpers::TagHelper::TagBuilder#tag_options`                                      | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/tag_helper.rb`                    |
|   +41.2% |    +7 | 1.1% → 1.5% |  17 → 24 | `I18n::Base#translate`                                                                        | `/usr/local/bundle/gems/i18n-1.15.2/lib/i18n.rb`                                                   |
|   +40.0% |    +6 | 1.0% → 1.4% |  15 → 21 | `block in tag_options`                                                                        | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/tag_helper.rb`                    |

##### Unknown

|  Change | Delta |             % |   Samples | Function                                                               | Location    |
| ------: | ----: | ------------: | --------: | ---------------------------------------------------------------------- | ----------- |
|  +16.6% |   +37 | 14.3% → 16.7% | 223 → 260 | `Array#each`                                                           | `<unknown>` |
|  +18.6% |   +16 |   5.5% → 6.6% |  86 → 102 | `block in _app_views_statuses_index_html_erb__328993190567029661_3128` | `<unknown>` |
| +900.0% |    +9 |   0.1% → 0.6% |    1 → 10 | `Integer#times`                                                        | `<unknown>` |
| +100.0% |    +4 |   0.3% → 0.5% |     4 → 8 | `Array#map`                                                            | `<unknown>` |
|     new |    +3 |   0.0% → 0.2% |     0 → 3 | `ActiveSupport::NumberHelper::NumberConverter#namespace`               | `<unknown>` |
|     new |    +2 |   0.0% → 0.1% |     0 → 2 | `ActionController::Base::HelperMethods#protect_against_forgery?`       | `<unknown>` |
|     new |    +2 |   0.0% → 0.1% |     0 → 2 | `Time#initialize`                                                      | `<unknown>` |
|     new |    +2 |   0.0% → 0.1% |     0 → 2 | `ActiveSupport::NumberHelper::NumberConverter#validate_float?`         | `<unknown>` |
|     new |    +2 |   0.0% → 0.1% |     0 → 2 | `ActiveSupport::NumberHelper::NumberConverter#validate_float`          | `<unknown>` |
|  +33.3% |    +1 |   0.2% → 0.3% |     3 → 4 | `Kernel#tap`                                                           | `<unknown>` |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `ActionController::Base::HelperMethods#form_authenticity_token`        | `<unknown>` |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `StatusesController#_layout`                                           | `<unknown>` |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `ActionController::Base#allow_forgery_protection`                      | `<unknown>` |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `ActionDispatch::Response.default_charset`                             | `<unknown>` |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `ActionDispatch::Response.default_headers`                             | `<unknown>` |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `ActionController::Base.default_static_extension`                      | `<unknown>` |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `ActionView::Base.default_formats`                                     | `<unknown>` |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `ActiveSupport::TaggedLogging#push_tags`                               | `<unknown>` |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `ActiveSupport::BroadcastLogger#info`                                  | `<unknown>` |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `ActiveSupport::NumberHelper::NumberConverter.validate_float`          | `<unknown>` |

#### Improvements

Functions with the largest decrease in samples collected within the function and its callees, excluding recursive calls. Categories account for at least 1.0% of self samples on the base or the current side.

| Change | Delta |            % |  Samples | Function                                                                                     | Location                                                                                          |
| -----: | ----: | -----------: | -------: | -------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| -92.9% |  -144 | 10.0% → 0.7% | 155 → 11 | `block in each`                                                                              | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`           |
| -97.9% |  -137 |  9.0% → 0.2% |  140 → 3 | `Nokogiri::XML::Node#to_html`                                                                | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb`               |
| -95.8% |  -136 |  9.1% → 0.4% |  142 → 6 | `block in to_html`                                                                           | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`           |
| -96.3% |  -129 |  8.6% → 0.3% |  134 → 5 | `Nokogiri::XML::Node#to_format`                                                              | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb`               |
| -79.6% |  -121 |  9.8% → 2.0% | 152 → 31 | `ActiveSupport::NumberHelper::NumberConverter#i18n_format_options`                           | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb` |
| -68.3% |   -82 |  7.7% → 2.4% | 120 → 38 | `Nokogiri::XML::Node#serialize`                                                              | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb`               |
| -73.2% |   -60 |  5.3% → 1.4% |  82 → 22 | `Nokogiri::XML::NodeSet#each`                                                                | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`           |
| -50.9% |   -29 |  3.7% → 1.8% |  57 → 28 | `String#encode [c function]`                                                                 | `<unknown>`                                                                                       |
| -28.7% |   -27 |  6.0% → 4.3% |  94 → 67 | `Digest::Base#<< [c function]`                                                               | `<unknown>`                                                                                       |
| -28.7% |   -27 |  6.0% → 4.3% |  94 → 67 | `block in digest_body`                                                                       | `/usr/local/bundle/gems/rack-3.2.7/lib/rack/etag.rb`                                              |
| -51.0% |   -25 |  3.2% → 1.5% |  49 → 24 | `block in decorate`                                                                          | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`           |
| -52.9% |   -18 |  2.2% → 1.0% |  34 → 16 | `block in evaluate`                                                                          | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/visitors.rb`                 |
| -54.8% |   -17 |  2.0% → 0.9% |  31 → 14 | `ActionDispatch::Journey::Router::Utils.escape_segment`                                      | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router/utils.rb`             |
| -54.8% |   -17 |  2.0% → 0.9% |  31 → 14 | `ActionDispatch::Journey::Router::Utils::UriEncoder#escape_segment`                          | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router/utils.rb`             |
| -51.6% |   -16 |  2.0% → 1.0% |  31 → 15 | `ActionDispatch::Journey::Format::Parameter#escape`                                          | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/visitors.rb`                 |
| -51.6% |   -16 |  2.0% → 1.0% |  31 → 15 | `block in <class:Format>`                                                                    | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/visitors.rb`                 |
| -62.5% |   -15 |  1.5% → 0.6% |   24 → 9 | `String#split [c function]`                                                                  | `<unknown>`                                                                                       |
| -40.0% |   -12 |  1.9% → 1.2% |  30 → 18 | `String#gsub! [c function]`                                                                  | `<unknown>`                                                                                       |
| -72.7% |    -8 |  0.7% → 0.2% |   11 → 3 | `Hash#fetch [c function]`                                                                    | `<unknown>`                                                                                       |
| -58.3% |    -7 |  0.8% → 0.3% |   12 → 5 | `#<Class:0xffff76d571d8>#_app_views_layouts_application_html_erb___4441820961383043729_3160` | `<unknown>`                                                                                       |

##### Native

|  Change | Delta |           % | Samples | Function                                            | Location    |
| ------: | ----: | ----------: | ------: | --------------------------------------------------- | ----------- |
|  -50.9% |   -29 | 3.7% → 1.8% | 57 → 28 | `String#encode [c function]`                        | `<unknown>` |
|  -28.7% |   -27 | 6.0% → 4.3% | 94 → 67 | `Digest::Base#<< [c function]`                      | `<unknown>` |
|  -62.5% |   -15 | 1.5% → 0.6% |  24 → 9 | `String#split [c function]`                         | `<unknown>` |
|  -40.0% |   -12 | 1.9% → 1.2% | 30 → 18 | `String#gsub! [c function]`                         | `<unknown>` |
|  -72.7% |    -8 | 0.7% → 0.2% |  11 → 3 | `Hash#fetch [c function]`                           | `<unknown>` |
|  -15.6% |    -7 | 2.9% → 2.4% | 45 → 38 | `String#gsub [c function]`                          | `<unknown>` |
| removed |    -4 | 0.3% → 0.0% |   4 → 0 | `Hash#[] [c function]`                              | `<unknown>` |
|  -80.0% |    -4 | 0.3% → 0.1% |   5 → 1 | `Random.urandom [c function]`                       | `<unknown>` |
|  -50.0% |    -3 | 0.4% → 0.2% |   6 → 3 | `OpenSSL::HMAC#initialize [c function]`             | `<unknown>` |
|  -30.0% |    -3 | 0.6% → 0.5% |  10 → 7 | `ERB::Util.html_escape [c function]`                | `<unknown>` |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `JSON::Ext::Generator::State#generate [c function]` | `<unknown>` |
|  -42.9% |    -3 | 0.5% → 0.3% |   7 → 4 | `Kernel#lambda [c function]`                        | `<unknown>` |
|  -33.3% |    -3 | 0.6% → 0.4% |   9 → 6 | `Nokogiri::XML::Attr#value= [c function]`           | `<unknown>` |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `String#sub [c function]`                           | `<unknown>` |
|  -40.0% |    -2 | 0.3% → 0.2% |   5 → 3 | `Array#each [c function]`                           | `<unknown>` |
|  -66.7% |    -2 | 0.2% → 0.1% |   3 → 1 | `OpenSSL::Cipher#initialize [c function]`           | `<unknown>` |
|  -40.0% |    -2 | 0.3% → 0.2% |   5 → 3 | `Hash#dig [c function]`                             | `<unknown>` |
|  -50.0% |    -2 | 0.3% → 0.1% |   4 → 2 | `Kernel#respond_to? [c function]`                   | `<unknown>` |
|  -66.7% |    -2 | 0.2% → 0.1% |   3 → 1 | `Nokogiri::XML::Node#unlink [c function]`           | `<unknown>` |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `Nokogiri::XML::NodeSet#length [c function]`        | `<unknown>` |

##### Third-party

|  Change | Delta |            % |  Samples | Function                                                                 | Location                                                                                               |
| ------: | ----: | -----------: | -------: | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
|  -92.9% |  -144 | 10.0% → 0.7% | 155 → 11 | `block in each`                                                          | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`                |
|  -97.9% |  -137 |  9.0% → 0.2% |  140 → 3 | `Nokogiri::XML::Node#to_html`                                            | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb`                    |
|  -95.8% |  -136 |  9.1% → 0.4% |  142 → 6 | `block in to_html`                                                       | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`                |
|  -96.3% |  -129 |  8.6% → 0.3% |  134 → 5 | `Nokogiri::XML::Node#to_format`                                          | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb`                    |
|  -79.6% |  -121 |  9.8% → 2.0% | 152 → 31 | `ActiveSupport::NumberHelper::NumberConverter#i18n_format_options`       | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb`      |
|  -68.3% |   -82 |  7.7% → 2.4% | 120 → 38 | `Nokogiri::XML::Node#serialize`                                          | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb`                    |
|  -73.2% |   -60 |  5.3% → 1.4% |  82 → 22 | `Nokogiri::XML::NodeSet#each`                                            | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`                |
|  -28.7% |   -27 |  6.0% → 4.3% |  94 → 67 | `block in digest_body`                                                   | `/usr/local/bundle/gems/rack-3.2.7/lib/rack/etag.rb`                                                   |
|  -51.0% |   -25 |  3.2% → 1.5% |  49 → 24 | `block in decorate`                                                      | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`                |
|  -52.9% |   -18 |  2.2% → 1.0% |  34 → 16 | `block in evaluate`                                                      | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/visitors.rb`                      |
|  -54.8% |   -17 |  2.0% → 0.9% |  31 → 14 | `ActionDispatch::Journey::Router::Utils.escape_segment`                  | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router/utils.rb`                  |
|  -54.8% |   -17 |  2.0% → 0.9% |  31 → 14 | `ActionDispatch::Journey::Router::Utils::UriEncoder#escape_segment`      | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router/utils.rb`                  |
|  -51.6% |   -16 |  2.0% → 1.0% |  31 → 15 | `ActionDispatch::Journey::Format::Parameter#escape`                      | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/visitors.rb`                      |
|  -51.6% |   -16 |  2.0% → 1.0% |  31 → 15 | `block in <class:Format>`                                                | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/visitors.rb`                      |
|  -43.8% |    -7 |  1.0% → 0.6% |   16 → 9 | `ActiveSupport::CoreExt::ERBUtil#html_escape`                            | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/core_ext/erb/util.rb`                   |
|  -71.4% |    -5 |  0.5% → 0.1% |    7 → 2 | `Rack::BodyProxy#close`                                                  | `/usr/local/bundle/gems/rack-3.2.7/lib/rack/body_proxy.rb`                                             |
|  -38.5% |    -5 |  0.8% → 0.5% |   13 → 8 | `Rails::HTML::Concern::Scrubber::SafeList#scrub`                         | `/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/sanitizer.rb`                        |
| removed |    -4 |  0.3% → 0.0% |    4 → 0 | `ActiveSupport::Messages::SerializerWithFallback::JsonWithFallback#dump` | `/usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/messages/serializer_with_fallback.rb` |
| removed |    -4 |  0.3% → 0.0% |    4 → 0 | `ActionView::StructuredEventSubscriber::Start#start`                     | `/usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/structured_event_subscriber.rb`             |
| removed |    -4 |  0.3% → 0.0% |    4 → 0 | `ActiveSupport::JSON.encode`                                             | `/usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/json/encoding.rb`                     |

##### Unknown

|  Change | Delta |           % | Samples | Function                                                                                     | Location    |
| ------: | ----: | ----------: | ------: | -------------------------------------------------------------------------------------------- | ----------- |
|  -58.3% |    -7 | 0.8% → 0.3% |  12 → 5 | `#<Class:0xffff76d571d8>#_app_views_layouts_application_html_erb___4441820961383043729_3160` | `<unknown>` |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `ActionView::Helpers::ControllerHelper#response`                                             | `<unknown>` |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `I18n::Base#default_separator`                                                               | `<unknown>` |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `String#unpack`                                                                              | `<unknown>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `Ractor.make_shareable`                                                                      | `<unknown>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `Time.now`                                                                                   | `<unknown>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `ActionController::Base.logger`                                                              | `<unknown>` |
|  -50.0% |    -1 |        0.1% |   2 → 1 | `ActionController::Metal#content_type=`                                                      | `<unknown>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `ActionController::Base#per_form_csrf_tokens`                                                | `<unknown>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `ActionController::Metal#session`                                                            | `<unknown>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `ActionDispatch::ParamBuilder.from_query_string`                                             | `<unknown>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `ActionController::Base::HelperMethods#content_security_policy?`                             | `<unknown>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `Kernel#Float`                                                                               | `<unknown>` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `Hash#initialize`                                                                            | `<unknown>` |
|  -50.0% |    -1 |        0.1% |   2 → 1 | `block (2 levels) in _app_views_statuses_index_html_erb__328993190567029661_3128`            | `<unknown>` |

#### Callers

Callers with the largest change in contribution to each function's total samples. Inlining can make caller attribution imprecise, and percentages can exceed 100% for recursive calls.

##### `Kernel#extend [c function]` (`<unknown>`)

| Change | Delta |              % |  Samples |    Calls | Caller                         | Location                                                                                |
| -----: | ----: | -------------: | -------: | -------: | ------------------------------ | --------------------------------------------------------------------------------------- |
| +76.7% |   +56 | 100.0% → 98.5% | 73 → 129 | 73 → 127 | `block (2 levels) in decorate` | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb` |
|    new |    +2 |    0.0% → 1.5% |    0 → 2 |    0 → 2 | `Kernel.require [c function]`  | `<unknown>`                                                                             |

##### `Module#extend_object [c function]` (`<unknown>`)

| Change | Delta |      % |  Samples |    Calls | Caller                       | Location    |
| -----: | ----: | -----: | -------: | -------: | ---------------------------- | ----------- |
| +80.0% |   +56 | 100.0% | 70 → 126 | 70 → 125 | `Kernel#extend [c function]` | `<unknown>` |

##### `block (2 levels) in decorate` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`)

| Change | Delta |      % |  Samples |    Calls | Caller       | Location    |
| -----: | ----: | -----: | -------: | -------: | ------------ | ----------- |
| +74.7% |   +56 | 100.0% | 75 → 131 | 75 → 128 | `Array#each` | `<unknown>` |

##### `Array#each` (`<unknown>`)

| Change | Delta |               % |       Samples |     Calls | Caller                                                                                | Location                                                                                |
| -----: | ----: | --------------: | ------------: | --------: | ------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| +74.0% |   +57 |   34.5% → 51.5% |      77 → 134 |  77 → 131 | `block in decorate`                                                                   | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb` |
|  +3.3% |   +41 | 553.4% → 490.4% | 1,234 → 1,275 | 149 → 169 | `#<Class:0xffff76d571d8>#_app_views_statuses_index_html_erb__328993190567029661_3128` | `<unknown>`                                                                             |
|  +2.4% |   +32 | 599.1% → 526.2% | 1,336 → 1,368 |  97 → 101 | `ActionDispatch::Journey::Router#recognize`                                           | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router.rb`         |
| +36.8% |   +32 |   39.0% → 45.8% |      87 → 119 |  81 → 105 | `Rails::HTML::PermitScrubber#scrub_attributes`                                        | `/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`         |
| -28.7% |   -27 |   42.2% → 25.8% |       94 → 67 |   67 → 63 | `Rack::ETag#digest_body`                                                              | `/usr/local/bundle/gems/rack-3.2.7/lib/rack/etag.rb`                                    |

##### `Rails::HTML::PermitScrubber#scrub_attribute` (`/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`)

| Change | Delta |               % |  Samples |   Calls | Caller                      | Location                                                                        |
| -----: | ----: | --------------: | -------: | ------: | --------------------------- | ------------------------------------------------------------------------------- |
| +45.8% |   +33 | 146.9% → 141.9% | 72 → 105 | 69 → 91 | `block in scrub_attributes` | `/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb` |

##### `Nokogiri::XML::Node#html_standard_serialize [c function]` (`<unknown>`)

|  Change | Delta |      % | Samples |   Calls | Caller                           | Location                                                                              |
| ------: | ----: | -----: | ------: | ------: | -------------------------------- | ------------------------------------------------------------------------------------- |
| +105.0% |   +21 | 100.0% | 20 → 41 | 20 → 40 | `Nokogiri::HTML5::Node#write_to` | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/node.rb` |

##### `String.new [c function]` (`<unknown>`)

|   Change | Delta |             % | Samples |   Calls | Caller                          | Location                                                                                         |
| -------: | ----: | ------------: | ------: | ------: | ------------------------------- | ------------------------------------------------------------------------------------------------ |
| +1500.0% |   +15 |  7.7% → 47.1% |  1 → 16 |  1 → 16 | `Nokogiri::XML::Node#serialize` | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb`              |
|   +50.0% |    +6 | 92.3% → 52.9% | 12 → 18 | 12 → 17 | `String#html_safe`              | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/core_ext/string/output_safety.rb` |

##### `Loofah::HTML5::Scrub.scrub_uri_attribute` (`/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`)

| Change | Delta |      % | Samples |   Calls | Caller                                        | Location                                                                        |
| -----: | ----: | -----: | ------: | ------: | --------------------------------------------- | ------------------------------------------------------------------------------- |
| +48.7% |   +19 | 100.0% | 39 → 58 | 38 → 53 | `Rails::HTML::PermitScrubber#scrub_attribute` | `/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb` |

##### `Hash#merge [c function]` (`<unknown>`)

|  Change | Delta |             % | Samples |   Calls | Caller                                                                                        | Location                                                                                          |
| ------: | ----: | ------------: | ------: | ------: | --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| +100.0% |   +11 | 68.8% → 64.7% | 11 → 22 | 11 → 21 | `I18n::Backend::Fallbacks#translate`                                                          | `/usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/fallbacks.rb`                                |
| +133.3% |    +4 | 18.8% → 20.6% |   3 → 7 |   3 → 7 | `ActiveSupport::NumberHelper::NumberConverter#options`                                        | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb` |
| +150.0% |    +3 | 12.5% → 14.7% |   2 → 5 |   2 → 5 | `ActionDispatch::Routing::RouteSet::NamedRouteCollection::UrlHelper::OptimizedUrlHelper#call` | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb`                |

##### `Kernel#dup [c function]` (`<unknown>`)

|   Change | Delta |             % | Samples |  Calls | Caller                                                                | Location                                                                                          |
| -------: | ----: | ------------: | ------: | -----: | --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| +1000.0% |   +10 |  5.0% → 28.9% |  1 → 11 | 1 → 11 | `ActionController::UrlFor#url_options`                                | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/url_for.rb`                  |
|  +125.0% |    +5 | 20.0% → 23.7% |   4 → 9 |  4 → 9 | `ActiveSupport::NumberHelper::NumberConverter#i18n_format_options`    | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb` |
|      new |    +5 |  0.0% → 13.2% |   0 → 5 |  0 → 5 | `ActionDispatch::Journey::Format#evaluate`                            | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/visitors.rb`                 |
|  removed |    -3 |  15.0% → 0.0% |   3 → 0 |  3 → 0 | `Rails::HTML::PermitScrubber#attributes=`                             | `/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`                   |
|   +25.0% |    +2 | 40.0% → 26.3% |  8 → 10 | 8 → 10 | `ActiveSupport::NumberHelper::NumberConverter#default_format_options` | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb` |

##### `Nokogiri::Gumbo.fragment [c function]` (`<unknown>`)

| Change | Delta |               % |  Samples |   Calls | Caller                                         | Location                                                                                           |
| -----: | ----: | --------------: | -------: | ------: | ---------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| +19.0% |   +16 | 147.4% → 135.1% | 84 → 100 | 81 → 94 | `Nokogiri::HTML5::DocumentFragment#initialize` | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/document_fragment.rb` |

##### `Hash#symbolize_keys` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/core_ext/hash/keys.rb`)

|  Change | Delta |              % | Samples |  Calls | Caller                                                            | Location                                                                                          |
| ------: | ----: | -------------: | ------: | -----: | ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
|     new |   +11 |   0.0% → 61.1% |  0 → 11 | 0 → 11 | `ActiveSupport::NumberHelper::NumberConverter#initialize`         | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb` |
| +600.0% |    +6 | 100.0% → 38.9% |   1 → 7 |  1 → 7 | `ActionView::Helpers::NumberHelper#delegate_number_helper_method` | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/number_helper.rb`                |

##### `block in _app_views_statuses_index_html_erb__328993190567029661_3128` (`<unknown>`)

| Change | Delta |                 % |       Samples |     Calls | Caller       | Location    |
| -----: | ----: | ----------------: | ------------: | --------: | ------------ | ----------- |
|  +3.4% |   +42 | 1433.7% → 1250.0% | 1,233 → 1,275 | 149 → 169 | `Array#each` | `<unknown>` |

##### `Hash#transform_keys [c function]` (`<unknown>`)

|   Change | Delta |              % | Samples |  Calls | Caller                | Location                                                                                |
| -------: | ----: | -------------: | ------: | -----: | --------------------- | --------------------------------------------------------------------------------------- |
| +1600.0% |   +16 | 50.0% → 100.0% |  1 → 17 | 1 → 17 | `Hash#symbolize_keys` | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/core_ext/hash/keys.rb`   |
|  removed |    -1 |   50.0% → 0.0% |   1 → 0 |  1 → 0 | `Hash#stringify_keys` | `/usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/core_ext/hash/keys.rb` |

##### `Class#new [c function]` (`<unknown>`)

|  Change | Delta |             % | Samples |  Calls | Caller                                                              | Location                                                                                          |
| ------: | ----: | ------------: | ------: | -----: | ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| +600.0% |   +12 |  7.4% → 35.9% |  2 → 14 | 2 → 14 | `ActiveSupport::NumberHelper::NumberConverter.convert`              | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb` |
|  -50.0% |    -5 | 37.0% → 12.8% |  10 → 5 | 10 → 5 | `ActionDispatch::Cookies::ChainedCookieJars#encrypted`              | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/cookies.rb`               |
|  -57.1% |    -4 |  25.9% → 7.7% |   7 → 3 |  7 → 3 | `OpenSSL::HMAC.digest`                                              | `/usr/local/lib/ruby/3.4.0/openssl/hmac.rb`                                                       |
| +150.0% |    +3 |  7.4% → 12.8% |   2 → 5 |  2 → 5 | `ActionDispatch::Response.create`                                   | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/http/response.rb`                    |
| removed |    -2 |   7.4% → 0.0% |   2 → 0 |  2 → 0 | `ActionDispatch::Cookies::EncryptedKeyRotatingCookieJar#initialize` | `/usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/cookies.rb`             |

##### `Rails::HTML::PermitScrubber#scrub` (`/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`)

| Change | Delta |               % |   Samples |     Calls | Caller                                              | Location                                                      |
| -----: | ----: | --------------: | --------: | --------: | --------------------------------------------------- | ------------------------------------------------------------- |
| +39.4% |   +61 | 620.0% → 600.0% | 155 → 216 | 141 → 186 | `Loofah::Scrubber#traverse_conditionally_bottom_up` | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/scrubber.rb` |

##### `ActiveSupport::NumberHelper::NumberConverter#initialize` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb`)

| Change | Delta |             % | Samples |  Calls | Caller                   | Location    |
| -----: | ----: | ------------: | ------: | -----: | ------------------------ | ----------- |
|    new |   +11 | 0.0% → 100.0% |  0 → 11 | 0 → 11 | `Class#new [c function]` | `<unknown>` |

##### `Nokogiri::HTML4::Document.new [c function]` (`<unknown>`)

| Change | Delta |      % | Samples |   Calls | Caller                                             | Location                                                      |
| -----: | ----: | -----: | ------: | ------: | -------------------------------------------------- | ------------------------------------------------------------- |
| +20.8% |   +10 | 100.0% | 48 → 58 | 48 → 57 | `Loofah::HtmlFragmentBehavior::ClassMethods#parse` | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb` |

##### `ActionController::UrlFor#url_options` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/url_for.rb`)

|  Change | Delta |      % | Samples |  Calls | Caller                                  | Location                                                                     |
| ------: | ----: | -----: | ------: | -----: | --------------------------------------- | ---------------------------------------------------------------------------- |
| +166.7% |   +10 | 100.0% |  6 → 16 | 6 → 16 | `ActionView::RoutingUrlFor#url_options` | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/routing_url_for.rb` |

##### `ActionDispatch::Session::SessionObject#commit_session` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/session/abstract_store.rb`)

| Change | Delta |                % | Samples |   Calls | Caller                                       | Location                                                                    |
| -----: | ----: | ---------------: | ------: | ------: | -------------------------------------------- | --------------------------------------------------------------------------- |
| -29.4% |    -5 | 1700.0% → 109.1% | 17 → 12 | 16 → 12 | `Rack::Session::Abstract::Persisted#context` | `/usr/local/bundle/gems/rack-session-2.1.2/lib/rack/session/abstract/id.rb` |

##### `Enumerator#each [c function]` (`<unknown>`)

| Change | Delta |             % | Samples | Calls | Caller                             | Location    |
| -----: | ----: | ------------: | ------: | ----: | ---------------------------------- | ----------- |
| +22.2% |    +2 | 0.0% → 122.2% |  9 → 11 | 7 → 5 | `Enumerable#flat_map [c function]` | `<unknown>` |
| +12.5% |    +1 | 0.0% → 100.0% |   8 → 9 |     5 | `Enumerable#map [c function]`      | `<unknown>` |

##### `Nokogiri::XML::Node#node_name [c function]` (`<unknown>`)

|  Change | Delta |             % | Samples | Calls | Caller                                        | Location                                                                            |
| ------: | ----: | ------------: | ------: | ----: | --------------------------------------------- | ----------------------------------------------------------------------------------- |
|     new |    +6 |  0.0% → 31.6% |   0 → 6 | 0 → 6 | `Rails::HTML::PermitScrubber#scrub_attribute` | `/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`     |
|     new |    +3 |  0.0% → 15.8% |   0 → 3 | 0 → 3 | `block in force_correct_attribute_escaping!`  | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`                    |
| +200.0% |    +2 | 10.0% → 15.8% |   1 → 3 | 1 → 3 | `block in attributes`                         | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb` |
|  -25.0% |    -1 | 40.0% → 15.8% |   4 → 3 | 4 → 3 | `Rails::HTML::PermitScrubber#allowed_node?`   | `/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`     |
|  -20.0% |    -1 | 50.0% → 21.1% |   5 → 4 | 5 → 4 | `block in scrub_attributes`                   | `/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`     |

##### `Array#join [c function]` (`<unknown>`)

|  Change | Delta |             % | Samples | Calls | Caller                                                          | Location                                                                                                       |
| ------: | ----: | ------------: | ------: | ----: | --------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
|     new |    +5 |  0.0% → 29.4% |   0 → 5 | 0 → 5 | `Nokogiri::XML::NodeSet#to_html`                                | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`                        |
|     new |    +4 |  0.0% → 23.5% |   0 → 4 | 0 → 4 | `ActiveSupport::NumberHelper::NumberToDelimitedConverter#parts` | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_to_delimited_converter.rb` |
| removed |    -2 |  20.0% → 0.0% |   2 → 0 | 2 → 0 | `ActiveSupport::CachingKeyGenerator#generate_key`               | `/usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/key_generator.rb`                             |
|     new |    +2 |  0.0% → 11.8% |   0 → 2 | 0 → 2 | `ActionView::Helpers::CsrfHelper#csrf_meta_tags`                | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/csrf_helper.rb`                               |
|  -33.3% |    -1 | 30.0% → 11.8% |   3 → 2 | 3 → 2 | `ActionDispatch::Journey::Format#evaluate`                      | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/visitors.rb`                              |

##### `IO::generic_writable#<< [c function]` (`<unknown>`)

|  Change | Delta |      % | Samples | Calls | Caller                           | Location                                                                              |
| ------: | ----: | -----: | ------: | ----: | -------------------------------- | ------------------------------------------------------------------------------------- |
| +700.0% |    +7 | 100.0% |   1 → 8 | 1 → 8 | `Nokogiri::HTML5::Node#write_to` | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/node.rb` |

##### `Hash#each_pair [c function]` (`<unknown>`)

| Change | Delta |             % | Samples |   Calls | Caller                                                   | Location                                                                        |
| -----: | ----: | ------------: | ------: | ------: | -------------------------------------------------------- | ------------------------------------------------------------------------------- |
| +40.0% |    +6 | 93.8% → 95.5% | 15 → 21 | 15 → 21 | `ActionView::Helpers::TagHelper::TagBuilder#tag_options` | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/tag_helper.rb` |

##### `Kernel#initialize_dup [c function]` (`<unknown>`)

| Change | Delta |      % | Samples |  Calls | Caller                    | Location    |
| -----: | ----: | -----: | ------: | -----: | ------------------------- | ----------- |
| +85.7% |    +6 | 100.0% |  7 → 13 | 7 → 13 | `Kernel#dup [c function]` | `<unknown>` |

##### `Kernel.require [c function]` (`<unknown>`)

| Change | Delta |               % |   Samples |   Calls | Caller                                | Location                                    |
| -----: | ----: | --------------: | --------: | ------: | ------------------------------------- | ------------------------------------------- |
| +22.0% |   +42 | 734.6% → 728.1% | 191 → 233 | 55 → 72 | `block (2 levels) in replace_require` | `/usr/local/lib/ruby/3.4.0/bundled_gems.rb` |

##### `StringIO#write [c function]` (`<unknown>`)

|  Change | Delta |      % | Samples | Calls | Caller                                 | Location    |
| ------: | ----: | -----: | ------: | ----: | -------------------------------------- | ----------- |
| +500.0% |    +5 | 100.0% |   1 → 6 | 1 → 6 | `IO::generic_writable#<< [c function]` | `<unknown>` |

##### `Nokogiri::XML::Node#attribute_nodes [c function]` (`<unknown>`)

|  Change | Delta |               % | Samples |   Calls | Caller                                                   | Location                                                                            |
| ------: | ----: | --------------: | ------: | ------: | -------------------------------------------------------- | ----------------------------------------------------------------------------------- |
|     new |    +4 |    0.0% → 40.0% |   0 → 4 |   0 → 4 | `Loofah::HTML5::Scrub.force_correct_attribute_escaping!` | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`                    |
| +200.0% |    +2 |   20.0% → 30.0% |   1 → 3 |   1 → 3 | `Nokogiri::XML::Node#attributes`                         | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb` |
|   -6.3% |    -2 | 640.0% → 300.0% | 32 → 30 | 32 → 28 | `Rails::HTML::PermitScrubber#scrub_attributes`           | `/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`     |

##### `StringIO#initialize [c function]` (`<unknown>`)

|  Change | Delta |      % | Samples | Calls | Caller                      | Location    |
| ------: | ----: | -----: | ------: | ----: | --------------------------- | ----------- |
| +500.0% |    +5 | 100.0% |   1 → 6 | 1 → 6 | `StringIO.new [c function]` | `<unknown>` |

##### `Rack::Session::Abstract::Persisted#commit_session` (`/usr/local/bundle/gems/rack-session-2.1.2/lib/rack/session/abstract/id.rb`)

| Change | Delta |                % | Samples |   Calls | Caller                                                  | Location                                                                                           |
| -----: | ----: | ---------------: | ------: | ------: | ------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| -31.3% |    -5 | 1600.0% → 100.0% | 16 → 11 | 16 → 11 | `ActionDispatch::Session::SessionObject#commit_session` | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/session/abstract_store.rb` |

##### `ActionDispatch::Session::CookieStore#set_cookie` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/session/cookie_store.rb`)

| Change | Delta |             % | Samples |   Calls | Caller                                              | Location                                                                    |
| -----: | ----: | ------------: | ------: | ------: | --------------------------------------------------- | --------------------------------------------------------------------------- |
| -33.3% |    -5 | 0.0% → 100.0% | 15 → 10 | 15 → 10 | `Rack::Session::Abstract::Persisted#commit_session` | `/usr/local/bundle/gems/rack-session-2.1.2/lib/rack/session/abstract/id.rb` |

##### `ActionDispatch::Routing::RouteSet::NamedRouteCollection::UrlHelper::OptimizedUrlHelper#call` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb`)

| Change | Delta |               % | Samples |   Calls | Caller                       | Location                                                                           |
| -----: | ----: | --------------: | ------: | ------: | ---------------------------- | ---------------------------------------------------------------------------------- |
|  -4.5% |    -3 | 268.0% → 182.9% | 67 → 64 | 67 → 62 | `block in define_url_helper` | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb` |

##### `ActionView::RoutingUrlFor#url_options` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/routing_url_for.rb`)

|  Change | Delta |      % | Samples |  Calls | Caller                                                                                        | Location                                                                           |
| ------: | ----: | -----: | ------: | -----: | --------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| +142.9% |   +10 | 100.0% |  7 → 17 | 7 → 17 | `ActionDispatch::Routing::RouteSet::NamedRouteCollection::UrlHelper::OptimizedUrlHelper#call` | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb` |

##### `ActionView::Helpers::NumberHelper#number_with_delimiter` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/number_helper.rb`)

| Change | Delta |              % |   Samples |     Calls | Caller                                                                 | Location    |
| -----: | ----: | -------------: | --------: | --------: | ---------------------------------------------------------------------- | ----------- |
| -18.8% |   -63 | 0.0% → 2730.0% | 336 → 273 | 272 → 231 | `block in _app_views_statuses_index_html_erb__328993190567029661_3128` | `<unknown>` |

##### `ActionDispatch::Cookies::AbstractCookieJar#[]=` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/cookies.rb`)

| Change | Delta |                % | Samples |   Calls | Caller                                            | Location                                                                                         |
| -----: | ----: | ---------------: | ------: | ------: | ------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| -33.3% |    -5 | 1500.0% → 100.0% | 15 → 10 | 15 → 10 | `ActionDispatch::Session::CookieStore#set_cookie` | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/session/cookie_store.rb` |

##### `I18n::Backend::Fallbacks#translate` (`/usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/fallbacks.rb`)

| Change | Delta |               % | Samples |   Calls | Caller                   | Location                                         |
| -----: | ----: | --------------: | ------: | ------: | ------------------------ | ------------------------------------------------ |
| +14.1% |   +11 | 557.1% → 387.0% | 78 → 89 | 73 → 84 | `block in translate_key` | `/usr/local/bundle/gems/i18n-1.15.2/lib/i18n.rb` |

##### `Loofah::HTML5::Scrub.allowed_uri?` (`/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`)

| Change | Delta |      % | Samples |   Calls | Caller                                     | Location                                                         |
| -----: | ----: | -----: | ------: | ------: | ------------------------------------------ | ---------------------------------------------------------------- |
| +80.0% |    +8 | 100.0% | 10 → 18 | 10 → 18 | `Loofah::HTML5::Scrub.scrub_uri_attribute` | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb` |

##### `Nokogiri::XML::NodeSet#to_html` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`)

| Change | Delta |                 % |   Samples |     Calls | Caller                                    | Location                                                                                         |
| -----: | ----: | ----------------: | --------: | --------: | ----------------------------------------- | ------------------------------------------------------------------------------------------------ |
| +11.7% |   +19 | 2314.3% → 1206.7% | 162 → 181 | 143 → 161 | `Nokogiri::XML::DocumentFragment#to_html` | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document_fragment.rb` |

##### `ActionView::Helpers::TagHelper::TagBuilder#tag_options` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/tag_helper.rb`)

| Change | Delta |             % | Samples |   Calls | Caller                                                          | Location                                                                        |
| -----: | ----: | ------------: | ------: | ------: | --------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| +54.5% |    +6 | 73.3% → 77.3% | 11 → 17 | 11 → 17 | `ActionView::Helpers::TagHelper::TagBuilder#content_tag_string` | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/tag_helper.rb` |
| +25.0% |    +1 | 26.7% → 22.7% |   4 → 5 |   4 → 5 | `ActionView::Helpers::TagHelper#tag`                            | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/tag_helper.rb` |

##### `I18n::Base#translate` (`/usr/local/bundle/gems/i18n-1.15.2/lib/i18n.rb`)

| Change | Delta |               % |  Samples |    Calls | Caller                                                             | Location                                                                                          |
| -----: | ----: | --------------: | -------: | -------: | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------- |
| +20.8% |   +20 | 564.7% → 483.3% | 96 → 116 | 91 → 104 | `ActiveSupport::NumberHelper::NumberConverter#i18n_format_options` | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb` |

##### `block in tag_options` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/tag_helper.rb`)

| Change | Delta |      % | Samples |   Calls | Caller                        | Location    |
| -----: | ----: | -----: | ------: | ------: | ----------------------------- | ----------- |
| +40.0% |    +6 | 100.0% | 15 → 21 | 15 → 21 | `Hash#each_pair [c function]` | `<unknown>` |

##### `Integer#times` (`<unknown>`)

|  Change | Delta |              % | Samples | Calls | Caller                                                                                                     | Location                                                                           |
| ------: | ----: | -------------: | ------: | ----: | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
|  +12.5% |    +1 | 800.0% → 90.0% |   8 → 9 |     5 | `Enumerator#each [c function]`                                                                             | `<unknown>`                                                                        |
| removed |    -1 |  100.0% → 0.0% |   1 → 0 | 1 → 0 | `Kernel#require_relative [c function]`                                                                     | `<unknown>`                                                                        |
|     new |    +1 |   0.0% → 10.0% |   0 → 1 | 0 → 1 | `ActionDispatch::Routing::RouteSet::NamedRouteCollection::UrlHelper::OptimizedUrlHelper#parameterize_args` | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb` |

##### `Array#map` (`<unknown>`)

|  Change | Delta |            % | Samples | Calls | Caller                                                    | Location                                                                              |
| ------: | ----: | -----------: | ------: | ----: | --------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| +100.0% |    +2 |        50.0% |   2 → 4 | 2 → 4 | `ActionView::Helpers::AssetTagHelper#stylesheet_link_tag` | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/asset_tag_helper.rb` |
| +100.0% |    +1 |        25.0% |   1 → 2 | 1 → 2 | `Rack::Response::Helpers#set_cookie`                      | `/usr/local/bundle/gems/rack-3.2.7/lib/rack/response.rb`                              |
|     new |    +1 | 0.0% → 12.5% |   0 → 1 | 0 → 1 | `ActiveSupport::BroadcastLogger#dispatch`                 | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/broadcast_logger.rb`   |

##### `ActiveSupport::NumberHelper::NumberConverter#namespace` (`<unknown>`)

| Change | Delta |            % | Samples | Calls | Caller                                                                | Location                                                                                          |
| -----: | ----: | -----------: | ------: | ----: | --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
|    new |    +2 | 0.0% → 66.7% |   0 → 2 | 0 → 2 | `ActiveSupport::NumberHelper::NumberConverter#i18n_format_options`    | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | 0 → 1 | `ActiveSupport::NumberHelper::NumberConverter#default_format_options` | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb` |

##### `Time#initialize` (`<unknown>`)

| Change | Delta |             % | Samples | Calls | Caller                   | Location    |
| -----: | ----: | ------------: | ------: | ----: | ------------------------ | ----------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | 0 → 2 | `Class#new [c function]` | `<unknown>` |

##### `ActiveSupport::NumberHelper::NumberConverter#validate_float?` (`<unknown>`)

| Change | Delta |             % | Samples | Calls | Caller                                                 | Location                                                                                          |
| -----: | ----: | ------------: | ------: | ----: | ------------------------------------------------------ | ------------------------------------------------------------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | 0 → 2 | `ActiveSupport::NumberHelper::NumberConverter#execute` | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb` |

##### `ActiveSupport::NumberHelper::NumberConverter#validate_float` (`<unknown>`)

| Change | Delta |             % | Samples | Calls | Caller                                                         | Location    |
| -----: | ----: | ------------: | ------: | ----: | -------------------------------------------------------------- | ----------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | 0 → 2 | `ActiveSupport::NumberHelper::NumberConverter#validate_float?` | `<unknown>` |

##### `Kernel#tap` (`<unknown>`)

| Change | Delta |            % | Samples | Calls | Caller                                                       | Location                                                                            |
| -----: | ----: | -----------: | ------: | ----: | ------------------------------------------------------------ | ----------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | 0 → 1 | `ActionDispatch::Cookies::AbstractCookieJar#cookie_metadata` | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/cookies.rb` |

##### `ActionController::Base::HelperMethods#form_authenticity_token` (`<unknown>`)

| Change | Delta |              % | Samples |   Calls | Caller                                           | Location                                                                         |
| -----: | ----: | -------------: | ------: | ------: | ------------------------------------------------ | -------------------------------------------------------------------------------- |
| -36.7% |   -11 | 0.0% → 1900.0% | 30 → 19 | 30 → 18 | `ActionView::Helpers::CsrfHelper#csrf_meta_tags` | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/csrf_helper.rb` |

##### `StatusesController#_layout` (`<unknown>`)

| Change | Delta |             % | Samples | Calls | Caller                                | Location                                                             |
| -----: | ----: | ------------: | ------: | ----: | ------------------------------------- | -------------------------------------------------------------------- |
| -66.7% |    -2 | 0.0% → 100.0% |   3 → 1 | 3 → 1 | `ActionView::Layouts#_default_layout` | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/layouts.rb` |

##### `ActionController::Base#allow_forgery_protection` (`<unknown>`)

| Change | Delta |             % | Samples | Calls | Caller                                                                | Location                                                                                            |
| -----: | ----: | ------------: | ------: | ----: | --------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | 0 → 1 | `ActionController::RequestForgeryProtection#protect_against_forgery?` | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/request_forgery_protection.rb` |

##### `ActionDispatch::Response.default_charset` (`<unknown>`)

| Change | Delta |             % | Samples | Calls | Caller                                   | Location                                                                       |
| -----: | ----: | ------------: | ------: | ----: | ---------------------------------------- | ------------------------------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | 0 → 1 | `ActionDispatch::Response#content_type=` | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/http/response.rb` |

##### `ActionDispatch::Response.default_headers` (`<unknown>`)

| Change | Delta |             % | Samples | Calls | Caller                            | Location                                                                       |
| -----: | ----: | ------------: | ------: | ----: | --------------------------------- | ------------------------------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | 0 → 1 | `ActionDispatch::Response.create` | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/http/response.rb` |

##### `ActionController::Base.default_static_extension` (`<unknown>`)

| Change | Delta |             % | Samples | Calls | Caller                                                | Location                                                                           |
| -----: | ----: | ------------: | ------: | ----: | ----------------------------------------------------- | ---------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | 0 → 1 | `ActionDispatch::FileHandler#each_candidate_filepath` | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/static.rb` |

##### `ActionView::Base.default_formats` (`<unknown>`)

| Change | Delta |             % | Samples | Calls | Caller                           | Location                                                                    |
| -----: | ----: | ------------: | ------: | ----: | -------------------------------- | --------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | 0 → 1 | `block in <class:LookupContext>` | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/lookup_context.rb` |

##### `ActiveSupport::TaggedLogging#push_tags` (`<unknown>`)

| Change | Delta |             % | Samples | Calls | Caller                                          | Location                                                                            |
| -----: | ----: | ------------: | ------: | ----: | ----------------------------------------------- | ----------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | 0 → 1 | `ActiveSupport::BroadcastLogger#method_missing` | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/broadcast_logger.rb` |

##### `ActiveSupport::BroadcastLogger#info` (`<unknown>`)

| Change | Delta |             % | Samples | Calls | Caller                         | Location                                                         |
| -----: | ----: | ------------: | ------: | ----: | ------------------------------ | ---------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | 0 → 1 | `Rails::Rack::Logger#call_app` | `/usr/local/bundle/gems/railties-8.1.4/lib/rails/rack/logger.rb` |

##### `ActiveSupport::NumberHelper::NumberConverter.validate_float` (`<unknown>`)

| Change | Delta |             % | Samples | Calls | Caller                                                        | Location    |
| -----: | ----: | ------------: | ------: | ----: | ------------------------------------------------------------- | ----------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | 0 → 1 | `ActiveSupport::NumberHelper::NumberConverter#validate_float` | `<unknown>` |

##### `block in each` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`)

| Change | Delta |                % |   Samples |     Calls | Caller                      | Location    |
| -----: | ----: | ---------------: | --------: | --------: | --------------------------- | ----------- |
|  +5.2% |   +25 | 308.4% → 4572.7% | 478 → 503 | 411 → 421 | `Integer#upto [c function]` | `<unknown>` |

##### `Nokogiri::XML::Node#to_html` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb`)

| Change | Delta |                % |   Samples |     Calls | Caller             | Location                                                                                |
| -----: | ----: | ---------------: | --------: | --------: | ------------------ | --------------------------------------------------------------------------------------- |
|  +2.1% |    +3 | 100.0% → 4766.7% | 140 → 143 | 126 → 131 | `block in to_html` | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb` |

##### `block in to_html` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`)

| Change | Delta |                % |   Samples |     Calls | Caller          | Location                                                                                |
| -----: | ----: | ---------------: | --------: | --------: | --------------- | --------------------------------------------------------------------------------------- |
|  +4.9% |    +7 | 100.0% → 2483.3% | 142 → 149 | 128 → 137 | `block in each` | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb` |

##### `Nokogiri::XML::Node#to_format` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb`)

| Change | Delta |                % |   Samples |     Calls | Caller                        | Location                                                                            |
| -----: | ----: | ---------------: | --------: | --------: | ----------------------------- | ----------------------------------------------------------------------------------- |
|  +4.5% |    +6 | 100.0% → 2800.0% | 134 → 140 | 120 → 128 | `Nokogiri::XML::Node#to_html` | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb` |

##### `ActiveSupport::NumberHelper::NumberConverter#i18n_format_options` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb`)

| Change | Delta |               % |   Samples |     Calls | Caller                                                        | Location                                                                                          |
| -----: | ----: | --------------: | --------: | --------: | ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| -40.7% |  -101 | 163.2% → 474.2% | 248 → 147 | 219 → 131 | `ActiveSupport::NumberHelper::NumberConverter#format_options` | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb` |

##### `Nokogiri::XML::Node#serialize` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb`)

| Change | Delta |               % |   Samples |     Calls | Caller                          | Location                                                                            |
| -----: | ----: | --------------: | --------: | --------: | ------------------------------- | ----------------------------------------------------------------------------------- |
| +12.5% |   +15 | 100.0% → 355.3% | 120 → 135 | 111 → 124 | `Nokogiri::XML::Node#to_format` | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb` |

##### `Nokogiri::XML::NodeSet#each` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`)

| Change | Delta |                % |   Samples |     Calls | Caller                                              | Location                                                      |
| -----: | ----: | ---------------: | --------: | --------: | --------------------------------------------------- | ------------------------------------------------------------- |
| -52.4% |   -54 |  125.6% → 222.7% |  103 → 49 |  102 → 46 | `Loofah::Scrubber#traverse_conditionally_bottom_up` | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/scrubber.rb` |
|  +6.0% |    +9 |  181.7% → 718.2% | 149 → 158 | 134 → 146 | `Enumerable#map [c function]`                       | `<unknown>`                                                   |
|  +2.9% |    +9 | 380.5% → 1459.1% | 312 → 321 | 254 → 253 | `Loofah::ScrubBehavior::NodeSet#scrub!`             | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb` |

##### `String#encode [c function]` (`<unknown>`)

| Change | Delta |      % | Samples |   Calls | Caller                           | Location                                                                              |
| -----: | ----: | -----: | ------: | ------: | -------------------------------- | ------------------------------------------------------------------------------------- |
| -50.9% |   -29 | 100.0% | 57 → 28 | 57 → 28 | `Nokogiri::HTML5::Node#write_to` | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/node.rb` |

##### `Digest::Base#<< [c function]` (`<unknown>`)

| Change | Delta |      % | Samples |   Calls | Caller                 | Location                                             |
| -----: | ----: | -----: | ------: | ------: | ---------------------- | ---------------------------------------------------- |
| -28.7% |   -27 | 100.0% | 94 → 67 | 67 → 63 | `block in digest_body` | `/usr/local/bundle/gems/rack-3.2.7/lib/rack/etag.rb` |

##### `block in digest_body` (`/usr/local/bundle/gems/rack-3.2.7/lib/rack/etag.rb`)

| Change | Delta |      % | Samples |   Calls | Caller       | Location    |
| -----: | ----: | -----: | ------: | ------: | ------------ | ----------- |
| -28.7% |   -27 | 100.0% | 94 → 67 | 67 → 63 | `Array#each` | `<unknown>` |

##### `block in decorate` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`)

| Change | Delta |               % |   Samples |     Calls | Caller                   | Location    |
| -----: | ----: | --------------: | --------: | --------: | ------------------------ | ----------- |
| +25.4% |   +32 | 257.1% → 658.3% | 126 → 158 | 124 → 155 | `Hash#each [c function]` | `<unknown>` |

##### `block in evaluate` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/visitors.rb`)

| Change | Delta |               % | Samples |   Calls | Caller       | Location    |
| -----: | ----: | --------------: | ------: | ------: | ------------ | ----------- |
| -52.6% |   -20 | 111.8% → 112.5% | 38 → 18 | 38 → 18 | `Array#each` | `<unknown>` |

##### `ActionDispatch::Journey::Router::Utils.escape_segment` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router/utils.rb`)

| Change | Delta |      % | Samples |   Calls | Caller                    | Location                                                                          |
| -----: | ----: | -----: | ------: | ------: | ------------------------- | --------------------------------------------------------------------------------- |
| -54.8% |   -17 | 100.0% | 31 → 14 | 31 → 14 | `block in <class:Format>` | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/visitors.rb` |

##### `ActionDispatch::Journey::Router::Utils::UriEncoder#escape_segment` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router/utils.rb`)

| Change | Delta |      % | Samples |   Calls | Caller                                                  | Location                                                                              |
| -----: | ----: | -----: | ------: | ------: | ------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| -54.8% |   -17 | 100.0% | 31 → 14 | 31 → 14 | `ActionDispatch::Journey::Router::Utils.escape_segment` | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router/utils.rb` |

##### `ActionDispatch::Journey::Format::Parameter#escape` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/visitors.rb`)

| Change | Delta |      % | Samples |   Calls | Caller              | Location                                                                          |
| -----: | ----: | -----: | ------: | ------: | ------------------- | --------------------------------------------------------------------------------- |
| -51.6% |   -16 | 100.0% | 31 → 15 | 31 → 15 | `block in evaluate` | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/visitors.rb` |

##### `block in <class:Format>` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/visitors.rb`)

| Change | Delta |      % | Samples |   Calls | Caller                                              | Location                                                                          |
| -----: | ----: | -----: | ------: | ------: | --------------------------------------------------- | --------------------------------------------------------------------------------- |
| -51.6% |   -16 | 100.0% | 31 → 15 | 31 → 15 | `ActionDispatch::Journey::Format::Parameter#escape` | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/visitors.rb` |

##### `String#split [c function]` (`<unknown>`)

| Change | Delta |             % | Samples |  Calls | Caller                                                          | Location                                                                                                       |
| -----: | ----: | ------------: | ------: | -----: | --------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| -77.8% |   -14 | 75.0% → 44.4% |  18 → 4 | 18 → 4 | `ActiveSupport::NumberHelper::NumberToDelimitedConverter#parts` | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_to_delimited_converter.rb` |
| -16.7% |    -1 | 25.0% → 55.6% |   6 → 5 |  6 → 5 | `Loofah::HTML5::Scrub.scrub_uri_attribute`                      | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`                                               |

##### `String#gsub! [c function]` (`<unknown>`)

|  Change | Delta |             % | Samples |   Calls | Caller                                                            | Location                                                                                                         |
| ------: | ----: | ------------: | ------: | ------: | ----------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| removed |   -12 |  40.0% → 0.0% |  12 → 0 |  12 → 0 | `ActiveSupport::NumberHelper::NumberToDelimitedConverter#parts`   | `/usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/number_helper/number_to_delimited_converter.rb` |
|  +14.3% |    +2 | 46.7% → 88.9% | 14 → 16 | 14 → 16 | `Loofah::HTML5::Scrub.scrub_uri_attribute`                        | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`                                                 |
| removed |    -1 |   3.3% → 0.0% |   1 → 0 |   1 → 0 | `ActiveSupport::Autoload#autoload`                                | `/usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/dependencies/autoload.rb`                       |
| removed |    -1 |   3.3% → 0.0% |   1 → 0 |   1 → 0 | `ActiveSupport::JSON::Encoding::JSONGemCoderEncoder#encode`       | `/usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/json/encoding.rb`                               |
| removed |    -1 |   3.3% → 0.0% |   1 → 0 |   1 → 0 | `ActiveSupport::NumberHelper::NumberToDelimitedConverter#convert` | `/usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/number_helper/number_to_delimited_converter.rb` |

##### `Hash#fetch [c function]` (`<unknown>`)

|  Change | Delta |               % | Samples |   Calls | Caller                                                                      | Location                                                                                                         |
| ------: | ----: | --------------: | ------: | ------: | --------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
|  -40.0% |    -6 | 136.4% → 300.0% |  15 → 9 |  15 → 9 | `ActionController::RequestForgeryProtection#real_csrf_token`                | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/request_forgery_protection.rb`              |
|  -41.7% |    -5 | 109.1% → 233.3% |  12 → 7 |  12 → 7 | `ActionDispatch::Request::Session::Options#id`                              | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/request/session.rb`                                 |
|  -12.5% |    -2 | 145.5% → 466.7% | 16 → 14 | 16 → 14 | `Rack::Request::Env#fetch_header`                                           | `/usr/local/bundle/gems/rack-3.2.7/lib/rack/request.rb`                                                          |
| removed |    -2 |    18.2% → 0.0% |   2 → 0 |   2 → 0 | `I18n::Backend::Fallbacks#translate`                                        | `/usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/fallbacks.rb`                                               |
| removed |    -1 |     9.1% → 0.0% |   1 → 0 |   1 → 0 | `ActiveSupport::NumberHelper::NumberToDelimitedConverter#delimiter_pattern` | `/usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/number_helper/number_to_delimited_converter.rb` |

##### `#<Class:0xffff76d571d8>#_app_views_layouts_application_html_erb___4441820961383043729_3160` (`<unknown>`)

| Change | Delta |               % | Samples |   Calls | Caller                            | Location    |
| -----: | ----: | --------------: | ------: | ------: | --------------------------------- | ----------- |
| -25.0% |   -13 | 433.3% → 780.0% | 52 → 39 | 50 → 37 | `Kernel#public_send [c function]` | `<unknown>` |

##### `String#gsub [c function]` (`<unknown>`)

|  Change | Delta |             % | Samples |   Calls | Caller                                                              | Location                                                                              |
| ------: | ----: | ------------: | ------: | ------: | ------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
|  -73.1% |   -19 | 57.8% → 18.4% |  26 → 7 |  26 → 7 | `ActionDispatch::Journey::Router::Utils::UriEncoder#escape_segment` | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router/utils.rb` |
|  +80.0% |    +8 | 22.2% → 47.4% | 10 → 18 | 10 → 18 | `Loofah::HTML5::Scrub.allowed_uri?`                                 | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`                      |
|  +40.0% |    +2 | 11.1% → 18.4% |   5 → 7 |   5 → 7 | `ActionDispatch::Journey::Router::Utils::UriEncoder#escape`         | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router/utils.rb` |
| +100.0% |    +1 |   2.2% → 5.3% |   1 → 2 |   1 → 2 | `Loofah::HTML5::Scrub.scrub_uri_attribute`                          | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`                      |
|     new |    +1 |   0.0% → 2.6% |   0 → 1 |   0 → 1 | `block in <module:Utils>`                                           | `/usr/local/bundle/gems/rack-3.2.7/lib/rack/utils.rb`                                 |

##### `Hash#[] [c function]` (`<unknown>`)

|  Change | Delta |            % | Samples | Calls | Caller                             | Location                                                                             |
| ------: | ----: | -----------: | ------: | ----: | ---------------------------------- | ------------------------------------------------------------------------------------ |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | 1 → 0 | `Rack::Headers#[]`                 | `/usr/local/bundle/gems/rack-3.2.7/lib/rack/headers.rb`                              |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | 1 → 0 | `ActiveSupport::OrderedOptions#[]` | `/usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/ordered_options.rb` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | 1 → 0 | `I18n::Locale::Fallbacks#[]`       | `/usr/local/bundle/gems/i18n-1.15.2/lib/i18n/locale/fallbacks.rb`                    |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | 1 → 0 | `block in lookup`                  | `/usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/simple.rb`                      |

##### `Random.urandom [c function]` (`<unknown>`)

| Change | Delta |      % | Samples | Calls | Caller                            | Location                                                        |
| -----: | ----: | -----: | ------: | ----: | --------------------------------- | --------------------------------------------------------------- |
| -80.0% |    -4 | 100.0% |   5 → 1 | 5 → 1 | `SecureRandom.gen_random_urandom` | `/usr/local/bundle/gems/securerandom-0.4.1/lib/securerandom.rb` |

##### `OpenSSL::HMAC#initialize [c function]` (`<unknown>`)

| Change | Delta |      % | Samples | Calls | Caller                   | Location    |
| -----: | ----: | -----: | ------: | ----: | ------------------------ | ----------- |
| -50.0% |    -3 | 100.0% |   6 → 3 | 6 → 3 | `Class#new [c function]` | `<unknown>` |

##### `ERB::Util.html_escape [c function]` (`<unknown>`)

| Change | Delta |      % | Samples |  Calls | Caller                                        | Location                                                                             |
| -----: | ----: | -----: | ------: | -----: | --------------------------------------------- | ------------------------------------------------------------------------------------ |
| -30.0% |    -3 | 100.0% |  10 → 7 | 10 → 7 | `ActiveSupport::CoreExt::ERBUtil#html_escape` | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/core_ext/erb/util.rb` |

##### `JSON::Ext::Generator::State#generate [c function]` (`<unknown>`)

|  Change | Delta |             % | Samples | Calls | Caller             | Location                                               |
| ------: | ----: | ------------: | ------: | ----: | ------------------ | ------------------------------------------------------ |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | 3 → 0 | `JSON::Coder#dump` | `/usr/local/bundle/gems/json-3.0.2/lib/json/common.rb` |

##### `Kernel#lambda [c function]` (`<unknown>`)

| Change | Delta |      % | Samples | Calls | Caller                           | Location                                                                              |
| -----: | ----: | -----: | ------: | ----: | -------------------------------- | ------------------------------------------------------------------------------------- |
| -42.9% |    -3 | 100.0% |   7 → 4 | 6 → 4 | `Nokogiri::HTML5::Node#write_to` | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/node.rb` |

##### `Nokogiri::XML::Attr#value= [c function]` (`<unknown>`)

| Change | Delta |      % | Samples | Calls | Caller                                       | Location                                                         |
| -----: | ----: | -----: | ------: | ----: | -------------------------------------------- | ---------------------------------------------------------------- |
| -33.3% |    -3 | 100.0% |   9 → 6 | 9 → 6 | `block in force_correct_attribute_escaping!` | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb` |

##### `String#sub [c function]` (`<unknown>`)

|  Change | Delta |            % | Samples | Calls | Caller                                                         | Location                                                                                   |
| ------: | ----: | -----------: | ------: | ----: | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | 1 → 0 | `ActionDispatch::Http::URL#host`                               | `/usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/http/url.rb`                |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | 1 → 0 | `ActionView::StructuredEventSubscriber::Start#start`           | `/usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/structured_event_subscriber.rb` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | 1 → 0 | `ActionView::StructuredEventSubscriber::Utils#from_rails_root` | `/usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/structured_event_subscriber.rb` |

##### `Array#each [c function]` (`<unknown>`)

|  Change | Delta |               % | Samples | Calls | Caller                                               | Location                                                                         |
| ------: | ----: | --------------: | ------: | ----: | ---------------------------------------------------- | -------------------------------------------------------------------------------- |
|   -7.4% |    -2 | 540.0% → 833.3% | 27 → 25 |     1 | `block in <module:Finisher>`                         | `/usr/local/bundle/gems/railties-8.1.4/lib/rails/application/finisher.rb`        |
| removed |    -2 |    40.0% → 0.0% |   2 → 0 | 2 → 0 | `Bundler::SpecSet#each`                              | `/usr/local/lib/ruby/3.4.0/bundler/spec_set.rb`                                  |
|   -8.0% |    -2 | 500.0% → 766.7% | 25 → 23 |     1 | `TZInfo::DataSource#eager_load!`                     | `/usr/local/bundle/gems/tzinfo-2.0.6/lib/tzinfo/data_source.rb`                  |
| removed |    -2 |    40.0% → 0.0% |   2 → 0 | 2 → 0 | `TZInfo::DataSources::ZoneinfoReader#derive_offsets` | `/usr/local/bundle/gems/tzinfo-2.0.6/lib/tzinfo/data_sources/zoneinfo_reader.rb` |
| removed |    -1 |    20.0% → 0.0% |   1 → 0 | 1 → 0 | `block in require`                                   | `/usr/local/lib/ruby/3.4.0/bundler/runtime.rb`                                   |

##### `OpenSSL::Cipher#initialize [c function]` (`<unknown>`)

| Change | Delta |      % | Samples | Calls | Caller                   | Location    |
| -----: | ----: | -----: | ------: | ----: | ------------------------ | ----------- |
| -66.7% |    -2 | 100.0% |   3 → 1 | 3 → 1 | `Class#new [c function]` | `<unknown>` |

##### `Hash#dig [c function]` (`<unknown>`)

| Change | Delta |      % | Samples | Calls | Caller                                                                 | Location    |
| -----: | ----: | -----: | ------: | ----: | ---------------------------------------------------------------------- | ----------- |
| -40.0% |    -2 | 100.0% |   5 → 3 | 5 → 3 | `block in _app_views_statuses_index_html_erb__328993190567029661_3128` | `<unknown>` |

##### `Kernel#respond_to? [c function]` (`<unknown>`)

|  Change | Delta |            % | Samples | Calls | Caller                                              | Location                                                                                 |
| ------: | ----: | -----------: | ------: | ----: | --------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | 1 → 0 | `Rack::Sendfile#call`                               | `/usr/local/bundle/gems/rack-3.2.7/lib/rack/sendfile.rb`                                 |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | 1 → 0 | `ActionView::Helpers::ControllerHelper#respond_to?` | `/usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/helpers/controller_helper.rb` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | 1 → 0 | `ActiveSupport::LogSubscriber.flush_all!`           | `/usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/log_subscriber.rb`      |
|     new |    +1 | 0.0% → 50.0% |   0 → 1 | 0 → 1 | `Rack::ETag#call`                                   | `/usr/local/bundle/gems/rack-3.2.7/lib/rack/etag.rb`                                     |

##### `Nokogiri::XML::Node#unlink [c function]` (`<unknown>`)

| Change | Delta |      % | Samples | Calls | Caller                      | Location                                                                        |
| -----: | ----: | -----: | ------: | ----: | --------------------------- | ------------------------------------------------------------------------------- |
| -66.7% |    -2 | 100.0% |   3 → 1 | 3 → 1 | `block in scrub_attributes` | `/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb` |

##### `Nokogiri::XML::NodeSet#length [c function]` (`<unknown>`)

|  Change | Delta |             % | Samples | Calls | Caller                        | Location                                                                                |
| ------: | ----: | ------------: | ------: | ----: | ----------------------------- | --------------------------------------------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | 2 → 0 | `Nokogiri::XML::NodeSet#each` | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb` |

##### `ActiveSupport::CoreExt::ERBUtil#html_escape` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/core_ext/erb/util.rb`)

|  Change | Delta |             % | Samples |  Calls | Caller                                                          | Location                                                                        |
| ------: | ----: | ------------: | ------: | -----: | --------------------------------------------------------------- | ------------------------------------------------------------------------------- |
|  -53.8% |    -7 | 81.3% → 66.7% |  13 → 6 | 13 → 6 | `ActionView::OutputBuffer#<<`                                   | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/buffers.rb`            |
|  -50.0% |    -1 | 12.5% → 11.1% |   2 → 1 |  2 → 1 | `ActionView::Helpers::TagHelper::TagBuilder#content_tag_string` | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/tag_helper.rb` |
| +100.0% |    +1 |  6.3% → 22.2% |   1 → 2 |  1 → 2 | `ActionView::Helpers::TagHelper::TagBuilder#tag_option`         | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/tag_helper.rb` |

##### `Rack::BodyProxy#close` (`/usr/local/bundle/gems/rack-3.2.7/lib/rack/body_proxy.rb`)

| Change | Delta |      % | Samples | Calls | Caller   | Location       |
| -----: | ----: | -----: | ------: | ----: | -------- | -------------- |
| -71.4% |    -5 | 100.0% |   7 → 2 | 6 → 2 | `<main>` | `./profile.rb` |

##### `Rails::HTML::Concern::Scrubber::SafeList#scrub` (`/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/sanitizer.rb`)

| Change | Delta |                 % |   Samples |     Calls | Caller                                            | Location                                                                        |
| -----: | ----: | ----------------: | --------: | --------: | ------------------------------------------------- | ------------------------------------------------------------------------------- |
|  +4.1% |   +15 | 2830.8% → 4787.5% | 368 → 383 | 284 → 282 | `Rails::HTML::Concern::ComposedSanitize#sanitize` | `/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/sanitizer.rb` |

##### `ActiveSupport::Messages::SerializerWithFallback::JsonWithFallback#dump` (`/usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/messages/serializer_with_fallback.rb`)

|  Change | Delta |             % | Samples | Calls | Caller                                                 | Location                                                                              |
| ------: | ----: | ------------: | ------: | ----: | ------------------------------------------------------ | ------------------------------------------------------------------------------------- |
| removed |    -4 | 100.0% → 0.0% |   4 → 0 | 4 → 0 | `ActionDispatch::Cookies::SerializedCookieJars#commit` | `/usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/cookies.rb` |

##### `ActionView::StructuredEventSubscriber::Start#start` (`/usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/structured_event_subscriber.rb`)

|  Change | Delta |             % | Samples | Calls | Caller           | Location                                                                                  |
| ------: | ----: | ------------: | ------: | ----: | ---------------- | ----------------------------------------------------------------------------------------- |
| removed |    -4 | 100.0% → 0.0% |   4 → 0 | 4 → 0 | `block in start` | `/usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/notifications/fanout.rb` |

##### `ActiveSupport::JSON.encode` (`/usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/json/encoding.rb`)

|  Change | Delta |             % | Samples | Calls | Caller                                                                   | Location                                                                                               |
| ------: | ----: | ------------: | ------: | ----: | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| removed |    -4 | 100.0% → 0.0% |   4 → 0 | 4 → 0 | `ActiveSupport::Messages::SerializerWithFallback::JsonWithFallback#dump` | `/usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/messages/serializer_with_fallback.rb` |

##### `ActionView::Helpers::ControllerHelper#response` (`<unknown>`)

|  Change | Delta |             % | Samples | Calls | Caller                                                          | Location                                                                                |
| ------: | ----: | ------------: | ------: | ----: | --------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | 2 → 0 | `ActionView::Helpers::AssetTagHelper#send_preload_links_header` | `/usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/helpers/asset_tag_helper.rb` |

##### `I18n::Base#default_separator` (`<unknown>`)

|  Change | Delta |             % | Samples | Calls | Caller                      | Location                                         |
| ------: | ----: | ------------: | ------: | ----: | --------------------------- | ------------------------------------------------ |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | 2 → 0 | `I18n::Base#normalize_keys` | `/usr/local/bundle/gems/i18n-1.15.2/lib/i18n.rb` |

##### `String#unpack` (`<unknown>`)

|  Change | Delta |            % | Samples | Calls | Caller                                      | Location                                                                         |
| ------: | ----: | -----------: | ------: | ----: | ------------------------------------------- | -------------------------------------------------------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | 1 → 0 | `block in parse`                            | `/usr/local/bundle/gems/tzinfo-2.0.6/lib/tzinfo/data_sources/zoneinfo_reader.rb` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | 1 → 0 | `TZInfo::DataSources::ZoneinfoReader#parse` | `/usr/local/bundle/gems/tzinfo-2.0.6/lib/tzinfo/data_sources/zoneinfo_reader.rb` |

##### `Ractor.make_shareable` (`<unknown>`)

|  Change | Delta |             % | Samples | Calls | Caller                                 | Location    |
| ------: | ----: | ------------: | ------: | ----: | -------------------------------------- | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | 1 → 0 | `Kernel#require_relative [c function]` | `<unknown>` |

##### `Time.now` (`<unknown>`)

|  Change | Delta |             % | Samples | Calls | Caller   | Location       |
| ------: | ----: | ------------: | ------: | ----: | -------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | 1 → 0 | `<main>` | `./profile.rb` |

##### `ActionController::Base.logger` (`<unknown>`)

|  Change | Delta |             % | Samples | Calls | Caller                                   | Location                                                                            |
| ------: | ----: | ------------: | ------: | ----: | ---------------------------------------- | ----------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | 1 → 0 | `ActionController::LogSubscriber#logger` | `/usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_controller/log_subscriber.rb` |

##### `ActionController::Metal#content_type=` (`<unknown>`)

| Change | Delta |      % | Samples | Calls | Caller                                                   | Location                                                                           |
| -----: | ----: | -----: | ------: | ----: | -------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| -50.0% |    -1 | 100.0% |   2 → 1 | 2 → 1 | `ActionController::Rendering#_set_rendered_content_type` | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb` |

##### `ActionController::Base#per_form_csrf_tokens` (`<unknown>`)

|  Change | Delta |             % | Samples | Calls | Caller                                                                 | Location                                                                                              |
| ------: | ----: | ------------: | ------: | ----: | ---------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | 1 → 0 | `ActionController::RequestForgeryProtection#masked_authenticity_token` | `/usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_controller/metal/request_forgery_protection.rb` |

##### `ActionController::Metal#session` (`<unknown>`)

|  Change | Delta |             % | Samples | Calls | Caller                                                                | Location                                                                                              |
| ------: | ----: | ------------: | ------: | ----: | --------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| removed |    -2 | 200.0% → 0.0% |   2 → 0 | 2 → 0 | `ActionController::RequestForgeryProtection#protect_against_forgery?` | `/usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_controller/metal/request_forgery_protection.rb` |

##### `ActionController::Base::HelperMethods#content_security_policy?` (`<unknown>`)

|  Change | Delta |             % | Samples | Calls | Caller                                        | Location                                                                          |
| ------: | ----: | ------------: | ------: | ----: | --------------------------------------------- | --------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | 1 → 0 | `ActionView::Helpers::CspHelper#csp_meta_tag` | `/usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/helpers/csp_helper.rb` |

##### `Kernel#Float` (`<unknown>`)

|  Change | Delta |             % | Samples | Calls | Caller                                          | Location                                                                             |
| ------: | ----: | ------------: | ------: | ----: | ----------------------------------------------- | ------------------------------------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | 1 → 0 | `ActionView::Helpers::NumberHelper#parse_float` | `/usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/helpers/number_helper.rb` |

##### `Hash#initialize` (`<unknown>`)

|  Change | Delta |             % | Samples | Calls | Caller                                         | Location                                                                             |
| ------: | ----: | ------------: | ------: | ----: | ---------------------------------------------- | ------------------------------------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | 1 → 0 | `ActiveSupport::InheritableOptions#initialize` | `/usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/ordered_options.rb` |

##### `block (2 levels) in _app_views_statuses_index_html_erb__328993190567029661_3128` (`<unknown>`)

| Change | Delta |                 % | Samples |  Calls | Caller       | Location    |
| -----: | ----: | ----------------: | ------: | -----: | ------------ | ----------- |
| -69.7% |   -23 | 1650.0% → 1000.0% | 33 → 10 | 33 → 9 | `Array#each` | `<unknown>` |

#### Callees

Callees with the largest change in contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can exceed 100% for recursive calls.

##### `Kernel#extend [c function]` (`<unknown>`)

| Change | Delta |             % |  Samples |    Calls | Callee                              | Location    |
| -----: | ----: | ------------: | -------: | -------: | ----------------------------------- | ----------- |
| +80.0% |   +56 | 95.9% → 96.2% | 70 → 126 | 70 → 125 | `Module#extend_object [c function]` | `<unknown>` |

##### `block (2 levels) in decorate` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`)

| Change | Delta |             % |  Samples |    Calls | Callee                       | Location    |
| -----: | ----: | ------------: | -------: | -------: | ---------------------------- | ----------- |
| +76.7% |   +56 | 97.3% → 98.5% | 73 → 129 | 73 → 127 | `Kernel#extend [c function]` | `<unknown>` |

##### `Array#each` (`<unknown>`)

| Change | Delta |               % |       Samples |     Calls | Callee                                                                 | Location                                                                                |
| -----: | ----: | --------------: | ------------: | --------: | ---------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| +74.7% |   +56 |   33.6% → 50.4% |      75 → 131 |  75 → 128 | `block (2 levels) in decorate`                                         | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb` |
|  +3.4% |   +42 | 552.9% → 490.4% | 1,233 → 1,275 | 149 → 169 | `block in _app_views_statuses_index_html_erb__328993190567029661_3128` | `<unknown>`                                                                             |
| +38.4% |   +33 |   38.6% → 45.8% |      86 → 119 |  80 → 105 | `block in scrub_attributes`                                            | `/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`         |
|  +2.4% |   +32 | 599.1% → 526.2% | 1,336 → 1,368 |  97 → 101 | `block in recognize`                                                   | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router.rb`         |
| -28.7% |   -27 |   42.2% → 25.8% |       94 → 67 |   67 → 63 | `block in digest_body`                                                 | `/usr/local/bundle/gems/rack-3.2.7/lib/rack/etag.rb`                                    |

##### `Rails::HTML::PermitScrubber#scrub_attribute` (`/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`)

|  Change | Delta |             % | Samples |   Calls | Callee                                                   | Location                                                         |
| ------: | ----: | ------------: | ------: | ------: | -------------------------------------------------------- | ---------------------------------------------------------------- |
|  +48.7% |   +19 | 79.6% → 78.4% | 39 → 58 | 38 → 53 | `Loofah::HTML5::Scrub.scrub_uri_attribute`               | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb` |
| +100.0% |   +10 | 20.4% → 27.0% | 10 → 20 | 10 → 19 | `Loofah::HTML5::Scrub.force_correct_attribute_escaping!` | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb` |
|     new |    +6 |   0.0% → 8.1% |   0 → 6 |   0 → 6 | `Nokogiri::XML::Node#node_name [c function]`             | `<unknown>`                                                      |
|  -75.0% |    -3 |   8.2% → 1.4% |   4 → 1 |   4 → 1 | `Set#include?`                                           | `/usr/local/lib/ruby/3.4.0/set.rb`                               |
|  -15.4% |    -2 | 26.5% → 14.9% | 13 → 11 | 13 → 11 | `Array#each`                                             | `<unknown>`                                                      |

##### `String.new [c function]` (`<unknown>`)

| Change | Delta |             % | Samples | Calls | Callee                                 | Location                                                                                         |
| -----: | ----: | ------------: | ------: | ----: | -------------------------------------- | ------------------------------------------------------------------------------------------------ |
| +14.3% |    +1 | 53.8% → 23.5% |   7 → 8 |     7 | `ActiveSupport::SafeBuffer#initialize` | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/core_ext/string/output_safety.rb` |

##### `Loofah::HTML5::Scrub.scrub_uri_attribute` (`/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`)

|  Change | Delta |             % | Samples |   Calls | Callee                                     | Location                                                         |
| ------: | ----: | ------------: | ------: | ------: | ------------------------------------------ | ---------------------------------------------------------------- |
|  +80.0% |    +8 | 25.6% → 31.0% | 10 → 18 | 10 → 18 | `Loofah::HTML5::Scrub.allowed_uri?`        | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb` |
|     new |    +5 |   0.0% → 8.6% |   0 → 5 |   0 → 3 | `CGI::Escape#unescapeHTML [c function]`    | `<unknown>`                                                      |
|  +14.3% |    +2 | 35.9% → 27.6% | 14 → 16 | 14 → 16 | `String#gsub! [c function]`                | `<unknown>`                                                      |
|  +50.0% |    +1 |   5.1% → 5.2% |   2 → 3 |   2 → 3 | `Nokogiri::XML::Attr#content [c function]` | `<unknown>`                                                      |
| +100.0% |    +1 |   2.6% → 3.4% |   1 → 2 |   1 → 2 | `Regexp#match? [c function]`               | `<unknown>`                                                      |

##### `Kernel#dup [c function]` (`<unknown>`)

| Change | Delta |             % | Samples |  Calls | Callee                               | Location    |
| -----: | ----: | ------------: | ------: | -----: | ------------------------------------ | ----------- |
| +85.7% |    +6 | 35.0% → 34.2% |  7 → 13 | 7 → 13 | `Kernel#initialize_dup [c function]` | `<unknown>` |

##### `Nokogiri::Gumbo.fragment [c function]` (`<unknown>`)

| Change | Delta |             % | Samples | Calls | Callee                                             | Location    |
| -----: | ----: | ------------: | ------: | ----: | -------------------------------------------------- | ----------- |
|  -3.7% |    -1 | 47.4% → 35.1% | 27 → 26 |    26 | `Nokogiri::XML::Node#internal_subset [c function]` | `<unknown>` |

##### `Hash#symbolize_keys` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/core_ext/hash/keys.rb`)

|   Change | Delta |              % | Samples |  Calls | Callee                             | Location    |
| -------: | ----: | -------------: | ------: | -----: | ---------------------------------- | ----------- |
| +1600.0% |   +16 | 100.0% → 94.4% |  1 → 17 | 1 → 17 | `Hash#transform_keys [c function]` | `<unknown>` |

##### `block in _app_views_statuses_index_html_erb__328993190567029661_3128` (`<unknown>`)

| Change | Delta |               % |   Samples |     Calls | Callee                                                    | Location                                                                             |
| -----: | ----: | --------------: | --------: | --------: | --------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| +12.5% |   +93 | 862.8% → 818.6% | 742 → 835 | 352 → 379 | `ActionView::Helpers::SanitizeHelper#sanitize`            | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/sanitize_helper.rb` |
| -18.8% |   -63 | 390.7% → 267.6% | 336 → 273 | 272 → 231 | `ActionView::Helpers::NumberHelper#number_with_delimiter` | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/number_helper.rb`   |
| -69.7% |   -23 |    38.4% → 9.8% |   33 → 10 |    33 → 9 | `Array#each`                                              | `<unknown>`                                                                          |
| +52.8% |   +19 |   41.9% → 53.9% |   36 → 55 |   36 → 54 | `block in define_url_helper`                              | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb`   |
| +17.1% |    +6 |   40.7% → 40.2% |   35 → 41 |   35 → 40 | `ActionView::Helpers::UrlHelper#link_to`                  | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/url_helper.rb`      |

##### `Hash#transform_keys [c function]` (`<unknown>`)

|  Change | Delta |            % | Samples | Calls | Callee                    | Location                                                                                |
| ------: | ----: | -----------: | ------: | ----: | ------------------------- | --------------------------------------------------------------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | 1 → 0 | `block in stringify_keys` | `/usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/core_ext/hash/keys.rb` |

##### `Class#new [c function]` (`<unknown>`)

|  Change | Delta |             % | Samples |  Calls | Callee                                                              | Location                                                                                          |
| ------: | ----: | ------------: | ------: | -----: | ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
|     new |   +11 |  0.0% → 28.2% |  0 → 11 | 0 → 11 | `ActiveSupport::NumberHelper::NumberConverter#initialize`           | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb` |
|  -50.0% |    -5 | 37.0% → 12.8% |  10 → 5 | 10 → 5 | `ActionDispatch::Cookies::EncryptedKeyRotatingCookieJar#initialize` | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/cookies.rb`               |
| removed |    -4 |  14.8% → 0.0% |   4 → 0 |  4 → 0 | `ActiveSupport::Messages::Rotator#initialize`                       | `/usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/messages/rotator.rb`             |
|  -50.0% |    -3 |  22.2% → 7.7% |   6 → 3 |  6 → 3 | `OpenSSL::HMAC#initialize [c function]`                             | `<unknown>`                                                                                       |
| +150.0% |    +3 |  7.4% → 12.8% |   2 → 5 |  2 → 5 | `ActionDispatch::Response#initialize`                               | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/http/response.rb`                    |

##### `Rails::HTML::PermitScrubber#scrub` (`/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`)

| Change | Delta |               % |   Samples |     Calls | Callee                                         | Location                                                                            |
| -----: | ----: | --------------: | --------: | --------: | ---------------------------------------------- | ----------------------------------------------------------------------------------- |
| +38.5% |   +50 | 520.0% → 500.0% | 130 → 180 | 119 → 158 | `Rails::HTML::PermitScrubber#scrub_attributes` | `/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`     |
| +85.7% |    +6 |   28.0% → 36.1% |    7 → 13 |    7 → 13 | `Loofah::HTML5::Scrub.cdata_needs_escaping?`   | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`                    |
| +80.0% |    +4 |   20.0% → 25.0% |     5 → 9 |     5 → 9 | `Rails::HTML::PermitScrubber#keep_node?`       | `/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`     |
|    new |    +1 |     0.0% → 2.8% |     0 → 1 |     0 → 1 | `Nokogiri::XML::Node#element?`                 | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb` |

##### `ActiveSupport::NumberHelper::NumberConverter#initialize` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb`)

| Change | Delta |             % | Samples |  Calls | Callee                | Location                                                                              |
| -----: | ----: | ------------: | ------: | -----: | --------------------- | ------------------------------------------------------------------------------------- |
|    new |   +11 | 0.0% → 100.0% |  0 → 11 | 0 → 11 | `Hash#symbolize_keys` | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/core_ext/hash/keys.rb` |

##### `Nokogiri::HTML4::Document.new [c function]` (`<unknown>`)

| Change | Delta |             % | Samples |   Calls | Callee                                 | Location                                                      |
| -----: | ----: | ------------: | ------: | ------: | -------------------------------------- | ------------------------------------------------------------- |
| +11.8% |    +2 | 35.4% → 32.8% | 17 → 19 | 17 → 19 | `Loofah::DocumentDecorator#initialize` | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb` |

##### `ActionController::UrlFor#url_options` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/url_for.rb`)

|   Change | Delta |             % | Samples |  Calls | Callee                                     | Location                                                                             |
| -------: | ----: | ------------: | ------: | -----: | ------------------------------------------ | ------------------------------------------------------------------------------------ |
| +1000.0% |   +10 | 16.7% → 68.8% |  1 → 11 | 1 → 11 | `Kernel#dup [c function]`                  | `<unknown>`                                                                          |
|  removed |    -2 |  33.3% → 0.0% |   2 → 0 |  2 → 0 | `Rack::Request::Helpers#script_name`       | `/usr/local/bundle/gems/rack-3.2.7/lib/rack/request.rb`                              |
|  removed |    -1 |  16.7% → 0.0% |   1 → 0 |  1 → 0 | `ActionDispatch::Http::URL#host`           | `/usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/http/url.rb`          |
|  removed |    -1 |  16.7% → 0.0% |   1 → 0 |  1 → 0 | `block (2 levels) in generate_url_helpers` | `/usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/routing/route_set.rb` |
|      new |    +1 |   0.0% → 6.3% |   0 → 1 |  0 → 1 | `ActionDispatch::Request#routes`           | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/http/request.rb`        |

##### `ActionDispatch::Session::SessionObject#commit_session` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/session/abstract_store.rb`)

| Change | Delta |                % | Samples |   Calls | Callee                                              | Location                                                                    |
| -----: | ----: | ---------------: | ------: | ------: | --------------------------------------------------- | --------------------------------------------------------------------------- |
| -31.3% |    -5 | 1600.0% → 100.0% | 16 → 11 | 16 → 11 | `Rack::Session::Abstract::Persisted#commit_session` | `/usr/local/bundle/gems/rack-session-2.1.2/lib/rack/session/abstract/id.rb` |

##### `Enumerator#each [c function]` (`<unknown>`)

| Change | Delta |             % | Samples | Calls | Callee                      | Location    |
| -----: | ----: | ------------: | ------: | ----: | --------------------------- | ----------- |
| +22.2% |    +2 | 0.0% → 122.2% |  9 → 11 | 7 → 5 | `Integer#upto [c function]` | `<unknown>` |
| +12.5% |    +1 | 0.0% → 100.0% |   8 → 9 |     5 | `Integer#times`             | `<unknown>` |

##### `Array#join [c function]` (`<unknown>`)

|  Change | Delta |            % | Samples | Calls | Callee                      | Location    |
| ------: | ----: | -----------: | ------: | ----: | --------------------------- | ----------- |
| removed |    -1 | 10.0% → 0.0% |   1 → 0 | 1 → 0 | `Integer#to_s [c function]` | `<unknown>` |

##### `IO::generic_writable#<< [c function]` (`<unknown>`)

|  Change | Delta |              % | Samples | Calls | Callee                        | Location    |
| ------: | ----: | -------------: | ------: | ----: | ----------------------------- | ----------- |
| +500.0% |    +5 | 100.0% → 75.0% |   1 → 6 | 1 → 6 | `StringIO#write [c function]` | `<unknown>` |

##### `Hash#each_pair [c function]` (`<unknown>`)

| Change | Delta |             % | Samples |   Calls | Callee                                 | Location                                                                                        |
| -----: | ----: | ------------: | ------: | ------: | -------------------------------------- | ----------------------------------------------------------------------------------------------- |
| +40.0% |    +6 | 93.8% → 95.5% | 15 → 21 | 15 → 21 | `block in tag_options`                 | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/tag_helper.rb`                 |
|    new |    +1 |   0.0% → 4.5% |   0 → 1 |   0 → 1 | `block in update_with_single_argument` | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/hash_with_indifferent_access.rb` |

##### `Kernel#initialize_dup [c function]` (`<unknown>`)

| Change | Delta |             % | Samples | Calls | Callee                              | Location    |
| -----: | ----: | ------------: | ------: | ----: | ----------------------------------- | ----------- |
| +33.3% |    +1 | 42.9% → 30.8% |   3 → 4 | 3 → 4 | `Hash#initialize_copy [c function]` | `<unknown>` |

##### `Kernel.require [c function]` (`<unknown>`)

| Change | Delta |               % |   Samples |   Calls | Callee                                 | Location                                                                |
| -----: | ----: | --------------: | --------: | ------: | -------------------------------------- | ----------------------------------------------------------------------- |
| +17.7% |   +20 | 434.6% → 415.6% | 113 → 133 | 24 → 27 | `block (2 levels) in replace_require`  | `/usr/local/lib/ruby/3.4.0/bundled_gems.rb`                             |
| +53.8% |   +14 | 100.0% → 125.0% |   26 → 40 | 13 → 23 | `Kernel#require`                       | `/usr/local/bundle/gems/zeitwerk-2.8.3/lib/zeitwerk/core_ext/kernel.rb` |
|    new |    +3 |     0.0% → 9.4% |     0 → 3 |   0 → 1 | `ActionView.render_tracker=`           | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view.rb`            |
|  -8.0% |    -2 |   96.2% → 71.9% |   25 → 23 |       8 | `Kernel#require_relative [c function]` | `<unknown>`                                                             |
|    new |    +2 |     0.0% → 6.3% |     0 → 2 |   0 → 2 | `Kernel#extend [c function]`           | `<unknown>`                                                             |

##### `Nokogiri::XML::Node#attribute_nodes [c function]` (`<unknown>`)

| Change | Delta |               % | Samples |   Calls | Callee                             | Location                                                                                |
| -----: | ----: | --------------: | ------: | ------: | ---------------------------------- | --------------------------------------------------------------------------------------- |
|  -3.6% |    -1 | 560.0% → 270.0% | 28 → 27 | 28 → 26 | `Nokogiri::XML::Document#decorate` | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb` |

##### `StringIO#initialize [c function]` (`<unknown>`)

| Change | Delta |            % | Samples | Calls | Callee                                | Location    |
| -----: | ----: | -----------: | ------: | ----: | ------------------------------------- | ----------- |
|    new |    +1 | 0.0% → 16.7% |   0 → 1 | 0 → 1 | `BasicObject#initialize [c function]` | `<unknown>` |

##### `Rack::Session::Abstract::Persisted#commit_session` (`/usr/local/bundle/gems/rack-session-2.1.2/lib/rack/session/abstract/id.rb`)

|  Change | Delta |               % | Samples |   Calls | Callee                                               | Location                                                                                         |
| ------: | ----: | --------------: | ------: | ------: | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
|  -33.3% |    -5 | 1500.0% → 90.9% | 15 → 10 | 15 → 10 | `ActionDispatch::Session::CookieStore#set_cookie`    | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/session/cookie_store.rb` |
| removed |    -1 |   100.0% → 0.0% |   1 → 0 |   1 → 0 | `Hash#merge! [c function]`                           | `<unknown>`                                                                                      |
|     new |    +1 |     0.0% → 9.1% |   0 → 1 |   0 → 1 | `Rack::Session::Abstract::Persisted#commit_session?` | `/usr/local/bundle/gems/rack-session-2.1.2/lib/rack/session/abstract/id.rb`                      |

##### `ActionDispatch::Session::CookieStore#set_cookie` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/session/cookie_store.rb`)

| Change | Delta |             % | Samples |   Calls | Callee                                           | Location                                                                            |
| -----: | ----: | ------------: | ------: | ------: | ------------------------------------------------ | ----------------------------------------------------------------------------------- |
| -33.3% |    -5 | 0.0% → 100.0% | 15 → 10 | 15 → 10 | `ActionDispatch::Cookies::AbstractCookieJar#[]=` | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/cookies.rb` |

##### `ActionDispatch::Routing::RouteSet::NamedRouteCollection::UrlHelper::OptimizedUrlHelper#call` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb`)

|  Change | Delta |              % | Samples |   Calls | Callee                                                                                                                            | Location                                                                           |
| ------: | ----: | -------------: | ------: | ------: | --------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
|  -31.0% |   -13 | 168.0% → 82.9% | 42 → 29 | 42 → 29 | `ActionDispatch::Routing::RouteSet::NamedRouteCollection::UrlHelper::OptimizedUrlHelper#optimized_helper`                         | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb` |
| +142.9% |   +10 |  28.0% → 48.6% |  7 → 17 |  7 → 17 | `ActionView::RoutingUrlFor#url_options`                                                                                           | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/routing_url_for.rb`       |
| +150.0% |    +3 |   8.0% → 14.3% |   2 → 5 |   2 → 5 | `Hash#merge [c function]`                                                                                                         | `<unknown>`                                                                        |
|  -75.0% |    -3 |   16.0% → 2.9% |   4 → 1 |   4 → 1 | `ActionDispatch::Routing::RouteSet::NamedRouteCollection::UrlHelper::OptimizedUrlHelper#optimize_routes_generation?`              | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb` |
| removed |    -1 |    4.0% → 0.0% |   1 → 0 |   1 → 0 | `ActionDispatch::Routing::RouteSet::NamedRouteCollection::UrlHelper::OptimizedUrlHelper#optimize_routes_generation? [c function]` | `<unknown>`                                                                        |

##### `ActionView::RoutingUrlFor#url_options` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/routing_url_for.rb`)

|  Change | Delta |             % | Samples |  Calls | Callee                                 | Location                                                                         |
| ------: | ----: | ------------: | ------: | -----: | -------------------------------------- | -------------------------------------------------------------------------------- |
| +166.7% |   +10 | 85.7% → 94.1% |  6 → 16 | 6 → 16 | `ActionController::UrlFor#url_options` | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/url_for.rb` |

##### `ActionView::Helpers::NumberHelper#number_with_delimiter` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/number_helper.rb`)

| Change | Delta |              % |   Samples |     Calls | Callee                                                            | Location                                                                           |
| -----: | ----: | -------------: | --------: | --------: | ----------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| -21.7% |   -73 | 0.0% → 2630.0% | 336 → 263 | 272 → 224 | `ActionView::Helpers::NumberHelper#delegate_number_helper_method` | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/number_helper.rb` |

##### `ActionDispatch::Cookies::AbstractCookieJar#[]=` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/cookies.rb`)

|  Change | Delta |               % | Samples |  Calls | Callee                                                          | Location                                                                              |
| ------: | ----: | --------------: | ------: | -----: | --------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
|  -42.9% |    -6 | 1400.0% → 80.0% |  14 → 8 | 14 → 8 | `ActionDispatch::Cookies::EncryptedKeyRotatingCookieJar#commit` | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/cookies.rb`   |
| removed |    -1 |   100.0% → 0.0% |   1 → 0 |  1 → 0 | `ActionDispatch::Cookies::CookieJar#[]=`                        | `/usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/cookies.rb` |
|     new |    +1 |    0.0% → 10.0% |   0 → 1 |  0 → 1 | `Hash#symbolize_keys!`                                          | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/core_ext/hash/keys.rb` |

##### `I18n::Backend::Fallbacks#translate` (`/usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/fallbacks.rb`)

|  Change | Delta |               % | Samples |   Calls | Callee                                                 | Location                                                           |
| ------: | ----: | --------------: | ------: | ------: | ------------------------------------------------------ | ------------------------------------------------------------------ |
| +100.0% |   +11 |   78.6% → 95.7% | 11 → 22 | 11 → 21 | `Hash#merge [c function]`                              | `<unknown>`                                                        |
|  +31.6% |    +6 | 135.7% → 108.7% | 19 → 25 | 19 → 24 | `I18n::Backend::Fallbacks#extract_non_symbol_default!` | `/usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/fallbacks.rb` |
| removed |    -2 |    14.3% → 0.0% |   2 → 0 |   2 → 0 | `Hash#fetch [c function]`                              | `<unknown>`                                                        |
|   -4.7% |    -2 | 307.1% → 178.3% | 43 → 41 | 41 → 40 | `Array#each`                                           | `<unknown>`                                                        |
|  -50.0% |    -1 |    14.3% → 4.3% |   2 → 1 |   2 → 1 | `I18n.fallbacks`                                       | `/usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/fallbacks.rb` |

##### `Loofah::HTML5::Scrub.allowed_uri?` (`/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`)

| Change | Delta |      % | Samples |   Calls | Callee                     | Location    |
| -----: | ----: | -----: | ------: | ------: | -------------------------- | ----------- |
| +80.0% |    +8 | 100.0% | 10 → 18 | 10 → 18 | `String#gsub [c function]` | `<unknown>` |

##### `Nokogiri::XML::NodeSet#to_html` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`)

| Change | Delta |                 % |   Samples |     Calls | Callee                        | Location    |
| -----: | ----: | ----------------: | --------: | --------: | ----------------------------- | ----------- |
|  +7.1% |   +11 | 2214.3% → 1106.7% | 155 → 166 | 139 → 154 | `Enumerable#map [c function]` | `<unknown>` |
|    new |    +5 |      0.0% → 33.3% |     0 → 5 |     0 → 5 | `Array#join [c function]`     | `<unknown>` |

##### `ActionView::Helpers::TagHelper::TagBuilder#tag_options` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/tag_helper.rb`)

| Change | Delta |              % | Samples |   Calls | Callee                        | Location    |
| -----: | ----: | -------------: | ------: | ------: | ----------------------------- | ----------- |
| +40.0% |    +6 | 100.0% → 95.5% | 15 → 21 | 15 → 21 | `Hash#each_pair [c function]` | `<unknown>` |

##### `I18n::Base#translate` (`/usr/local/bundle/gems/i18n-1.15.2/lib/i18n.rb`)

|  Change | Delta |               % | Samples |   Calls | Callee                                  | Location                                                |
| ------: | ----: | --------------: | ------: | ------: | --------------------------------------- | ------------------------------------------------------- |
|  +16.5% |   +13 | 464.7% → 383.3% | 79 → 92 | 74 → 87 | `I18n::Base#translate_key`              | `/usr/local/bundle/gems/i18n-1.15.2/lib/i18n.rb`        |
|  +75.0% |    +3 |   23.5% → 29.2% |   4 → 7 |   4 → 6 | `I18n::Base#enforce_available_locales!` | `/usr/local/bundle/gems/i18n-1.15.2/lib/i18n.rb`        |
| +200.0% |    +2 |    5.9% → 12.5% |   1 → 3 |   1 → 3 | `I18n::Config#backend`                  | `/usr/local/bundle/gems/i18n-1.15.2/lib/i18n/config.rb` |
|  +20.0% |    +1 |   29.4% → 25.0% |   5 → 6 |       5 | `I18n::Base#config`                     | `/usr/local/bundle/gems/i18n-1.15.2/lib/i18n.rb`        |

##### `block in tag_options` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/tag_helper.rb`)

|  Change | Delta |             % | Samples |   Calls | Callee                                                  | Location                                                                                 |
| ------: | ----: | ------------: | ------: | ------: | ------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
|  +21.4% |    +3 | 93.3% → 81.0% | 14 → 17 | 14 → 17 | `ActionView::Helpers::TagHelper::TagBuilder#tag_option` | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/tag_helper.rb`          |
| +300.0% |    +3 |  6.7% → 19.0% |   1 → 4 |   1 → 4 | `String#blank?`                                         | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/core_ext/object/blank.rb` |

##### `Integer#times` (`<unknown>`)

|  Change | Delta |              % | Samples | Calls | Callee                       | Location                                                                           |
| ------: | ----: | -------------: | ------: | ----: | ---------------------------- | ---------------------------------------------------------------------------------- |
|  +12.5% |    +1 | 800.0% → 90.0% |   8 → 9 |     5 | `block in parse`             | `/usr/local/bundle/gems/tzinfo-2.0.6/lib/tzinfo/data_sources/zoneinfo_reader.rb`   |
| removed |    -1 |  100.0% → 0.0% |   1 → 0 | 1 → 0 | `block in <module:URI>`      | `/usr/local/bundle/gems/uri-1.1.1/lib/uri/common.rb`                               |
|     new |    +1 |   0.0% → 10.0% |   0 → 1 | 0 → 1 | `block in parameterize_args` | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb` |

##### `Array#map` (`<unknown>`)

|  Change | Delta |            % | Samples | Calls | Callee                             | Location                                                                              |
| ------: | ----: | -----------: | ------: | ----: | ---------------------------------- | ------------------------------------------------------------------------------------- |
| +100.0% |    +2 |        50.0% |   2 → 4 | 2 → 4 | `block in stylesheet_link_tag`     | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/asset_tag_helper.rb` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | 1 → 0 | `block in flag_cookies_as_secure!` | `/usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/ssl.rb`     |
| +100.0% |    +1 |        25.0% |   1 → 2 | 1 → 2 | `block in set_cookie_header`       | `/usr/local/bundle/gems/rack-3.2.7/lib/rack/utils.rb`                                 |
|     new |    +1 | 0.0% → 12.5% |   0 → 1 | 0 → 1 | `block in dispatch`                | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/broadcast_logger.rb`   |

##### `ActionController::Base::HelperMethods#protect_against_forgery?` (`<unknown>`)

| Change | Delta |            % | Samples | Calls | Callee                                                                | Location                                                                                            |
| -----: | ----: | -----------: | ------: | ----: | --------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| -50.0% |    -1 | 0.0% → 50.0% |   2 → 1 | 2 → 1 | `ActionController::RequestForgeryProtection#protect_against_forgery?` | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/request_forgery_protection.rb` |

##### `ActiveSupport::NumberHelper::NumberConverter#validate_float?` (`<unknown>`)

| Change | Delta |             % | Samples | Calls | Callee                                                        | Location    |
| -----: | ----: | ------------: | ------: | ----: | ------------------------------------------------------------- | ----------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | 0 → 2 | `ActiveSupport::NumberHelper::NumberConverter#validate_float` | `<unknown>` |

##### `ActiveSupport::NumberHelper::NumberConverter#validate_float` (`<unknown>`)

| Change | Delta |            % | Samples | Calls | Callee                                                                     | Location    |
| -----: | ----: | -----------: | ------: | ----: | -------------------------------------------------------------------------- | ----------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | 0 → 1 | `ActiveSupport::NumberHelper::NumberConverter.validate_float [c function]` | `<unknown>` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | 0 → 1 | `ActiveSupport::NumberHelper::NumberConverter.validate_float`              | `<unknown>` |

##### `Kernel#tap` (`<unknown>`)

| Change | Delta |            % | Samples | Calls | Callee                     | Location                                                                            |
| -----: | ----: | -----------: | ------: | ----: | -------------------------- | ----------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | 0 → 1 | `block in cookie_metadata` | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/cookies.rb` |

##### `ActionController::Base::HelperMethods#form_authenticity_token` (`<unknown>`)

| Change | Delta |              % | Samples |   Calls | Callee                                                               | Location                                                                                            |
| -----: | ----: | -------------: | ------: | ------: | -------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| -40.0% |   -12 | 0.0% → 1800.0% | 30 → 18 | 30 → 17 | `ActionController::RequestForgeryProtection#form_authenticity_token` | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/request_forgery_protection.rb` |

##### `StatusesController#_layout` (`<unknown>`)

| Change | Delta |             % | Samples | Calls | Callee                          | Location    |
| -----: | ----: | ------------: | ------: | ----: | ------------------------------- | ----------- |
| -66.7% |    -2 | 0.0% → 100.0% |   3 → 1 | 3 → 1 | `ApplicationController#_layout` | `<unknown>` |

##### `ActiveSupport::TaggedLogging#push_tags` (`<unknown>`)

| Change | Delta |             % | Samples | Calls | Callee                                              | Location                                                                          |
| -----: | ----: | ------------: | ------: | ----: | --------------------------------------------------- | --------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | 0 → 1 | `ActiveSupport::TaggedLogging::Formatter#push_tags` | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/tagged_logging.rb` |

##### `ActiveSupport::BroadcastLogger#info` (`<unknown>`)

| Change | Delta |             % | Samples | Calls | Callee                                    | Location                                                                            |
| -----: | ----: | ------------: | ------: | ----: | ----------------------------------------- | ----------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | 0 → 1 | `ActiveSupport::BroadcastLogger#dispatch` | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/broadcast_logger.rb` |

##### `block in each` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`)

|  Change | Delta |                % |   Samples |     Calls | Callee                                      | Location                                                                                |
| ------: | ----: | ---------------: | --------: | --------: | ------------------------------------------- | --------------------------------------------------------------------------------------- |
|   +4.4% |   +13 | 189.7% → 2790.9% | 294 → 307 | 247 → 241 | `block in scrub!`                           | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`                           |
|  +24.1% |    +7 |   18.7% → 327.3% |   29 → 36 |   29 → 33 | `block in traverse_conditionally_bottom_up` | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/scrubber.rb`                           |
|   +4.9% |    +7 |  91.6% → 1354.5% | 142 → 149 | 128 → 137 | `block in to_html`                          | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb` |
| +300.0% |    +3 |     0.6% → 36.4% |     1 → 4 |     1 → 4 | `Nokogiri::XML::NodeSet#[] [c function]`    | `<unknown>`                                                                             |

##### `Nokogiri::XML::Node#to_html` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb`)

| Change | Delta |               % |   Samples |     Calls | Callee                          | Location                                                                            |
| -----: | ----: | --------------: | --------: | --------: | ------------------------------- | ----------------------------------------------------------------------------------- |
|  +4.5% |    +6 | 95.7% → 4666.7% | 134 → 140 | 120 → 128 | `Nokogiri::XML::Node#to_format` | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb` |

##### `block in to_html` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`)

| Change | Delta |               % |   Samples |     Calls | Callee                        | Location                                                                            |
| -----: | ----: | --------------: | --------: | --------: | ----------------------------- | ----------------------------------------------------------------------------------- |
|  +2.1% |    +3 | 98.6% → 2383.3% | 140 → 143 | 126 → 131 | `Nokogiri::XML::Node#to_html` | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb` |

##### `Nokogiri::XML::Node#to_format` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb`)

| Change | Delta |               % |   Samples |     Calls | Callee                          | Location                                                                            |
| -----: | ----: | --------------: | --------: | --------: | ------------------------------- | ----------------------------------------------------------------------------------- |
| +12.5% |   +15 | 89.6% → 2700.0% | 120 → 135 | 111 → 124 | `Nokogiri::XML::Node#serialize` | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb` |

##### `ActiveSupport::NumberHelper::NumberConverter#i18n_format_options` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb`)

|  Change | Delta |              % |  Samples |    Calls | Callee                                                   | Location                                         |
| ------: | ----: | -------------: | -------: | -------: | -------------------------------------------------------- | ------------------------------------------------ |
|  +20.8% |   +20 | 63.2% → 374.2% | 96 → 116 | 91 → 104 | `I18n::Base#translate`                                   | `/usr/local/bundle/gems/i18n-1.15.2/lib/i18n.rb` |
| +125.0% |    +5 |   2.6% → 29.0% |    4 → 9 |    4 → 9 | `Kernel#dup [c function]`                                | `<unknown>`                                      |
|     new |    +2 |    0.0% → 6.5% |    0 → 2 |    0 → 2 | `ActiveSupport::NumberHelper::NumberConverter#namespace` | `<unknown>`                                      |

##### `Nokogiri::XML::Node#serialize` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb`)

|   Change | Delta |              % | Samples |   Calls | Callee                           | Location                                                                              |
| -------: | ----: | -------------: | ------: | ------: | -------------------------------- | ------------------------------------------------------------------------------------- |
| +1500.0% |   +15 |   0.8% → 42.1% |  1 → 16 |  1 → 16 | `String.new [c function]`        | `<unknown>`                                                                           |
|  +125.0% |    +5 |   3.3% → 23.7% |   4 → 9 |   4 → 8 | `StringIO.new [c function]`      | `<unknown>`                                                                           |
|   +50.0% |    +2 |   3.3% → 15.8% |   4 → 6 |   4 → 6 | `Encoding.find [c function]`     | `<unknown>`                                                                           |
|    -2.0% |    -2 | 82.5% → 255.3% | 99 → 97 | 94 → 92 | `Nokogiri::HTML5::Node#write_to` | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/node.rb` |
|      new |    +2 |    0.0% → 5.3% |   0 → 2 |   0 → 2 | `StringIO#string [c function]`   | `<unknown>`                                                                           |

##### `Nokogiri::XML::NodeSet#each` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`)

|  Change | Delta |                % |   Samples |     Calls | Callee                                       | Location    |
| ------: | ----: | ---------------: | --------: | --------: | -------------------------------------------- | ----------- |
|   +5.0% |   +24 | 587.8% → 2300.0% | 482 → 506 | 414 → 424 | `Integer#upto [c function]`                  | `<unknown>` |
| removed |    -2 |      2.4% → 0.0% |     2 → 0 |     2 → 0 | `Nokogiri::XML::NodeSet#length [c function]` | `<unknown>` |
| removed |    -1 |      1.2% → 0.0% |     1 → 0 |     1 → 0 | `Kernel#block_given? [c function]`           | `<unknown>` |

##### `block in digest_body` (`/usr/local/bundle/gems/rack-3.2.7/lib/rack/etag.rb`)

| Change | Delta |      % | Samples |   Calls | Callee                         | Location    |
| -----: | ----: | -----: | ------: | ------: | ------------------------------ | ----------- |
| -28.7% |   -27 | 100.0% | 94 → 67 | 67 → 63 | `Digest::Base#<< [c function]` | `<unknown>` |

##### `block in decorate` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`)

| Change | Delta |               % |  Samples |    Calls | Callee       | Location    |
| -----: | ----: | --------------: | -------: | -------: | ------------ | ----------- |
| +74.0% |   +57 | 157.1% → 558.3% | 77 → 134 | 77 → 131 | `Array#each` | `<unknown>` |

##### `block in evaluate` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/visitors.rb`)

| Change | Delta |             % | Samples |   Calls | Callee                                              | Location                                                                          |
| -----: | ----: | ------------: | ------: | ------: | --------------------------------------------------- | --------------------------------------------------------------------------------- |
| -51.6% |   -16 | 91.2% → 93.8% | 31 → 15 | 31 → 15 | `ActionDispatch::Journey::Format::Parameter#escape` | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/visitors.rb` |
| -50.0% |    -2 | 11.8% → 12.5% |   4 → 2 |   4 → 2 | `ActionDispatch::Journey::Format#evaluate`          | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/visitors.rb` |

##### `ActionDispatch::Journey::Router::Utils.escape_segment` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router/utils.rb`)

| Change | Delta |      % | Samples |   Calls | Callee                                                              | Location                                                                              |
| -----: | ----: | -----: | ------: | ------: | ------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| -54.8% |   -17 | 100.0% | 31 → 14 | 31 → 14 | `ActionDispatch::Journey::Router::Utils::UriEncoder#escape_segment` | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router/utils.rb` |

##### `ActionDispatch::Journey::Router::Utils::UriEncoder#escape_segment` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router/utils.rb`)

| Change | Delta |             % | Samples |  Calls | Callee                                                      | Location                                                                              |
| -----: | ----: | ------------: | ------: | -----: | ----------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| -73.1% |   -19 | 83.9% → 50.0% |  26 → 7 | 26 → 7 | `String#gsub [c function]`                                  | `<unknown>`                                                                           |
| +40.0% |    +2 | 16.1% → 50.0% |   5 → 7 |  5 → 7 | `ActionDispatch::Journey::Router::Utils::UriEncoder#escape` | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router/utils.rb` |

##### `ActionDispatch::Journey::Format::Parameter#escape` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/visitors.rb`)

| Change | Delta |      % | Samples |   Calls | Callee                    | Location                                                                          |
| -----: | ----: | -----: | ------: | ------: | ------------------------- | --------------------------------------------------------------------------------- |
| -51.6% |   -16 | 100.0% | 31 → 15 | 31 → 15 | `block in <class:Format>` | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/visitors.rb` |

##### `block in <class:Format>` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/visitors.rb`)

| Change | Delta |              % | Samples |   Calls | Callee                                                  | Location                                                                              |
| -----: | ----: | -------------: | ------: | ------: | ------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| -54.8% |   -17 | 100.0% → 93.3% | 31 → 14 | 31 → 14 | `ActionDispatch::Journey::Router::Utils.escape_segment` | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router/utils.rb` |

##### `Hash#fetch [c function]` (`<unknown>`)

|  Change | Delta |               % | Samples |  Calls | Callee                          | Location                                                                                            |
| ------: | ----: | --------------: | ------: | -----: | ------------------------------- | --------------------------------------------------------------------------------------------------- |
|  -40.0% |    -6 | 136.4% → 300.0% |  15 → 9 | 15 → 9 | `block in real_csrf_token`      | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/request_forgery_protection.rb` |
|  -36.4% |    -4 | 100.0% → 233.3% |  11 → 7 | 11 → 7 | `block in unpacked_cookie_data` | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/session/cookie_store.rb`    |
|  -36.4% |    -4 | 100.0% → 233.3% |  11 → 7 | 11 → 7 | `block in id`                   | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/request/session.rb`                    |
|     new |    +2 |    0.0% → 66.7% |   0 → 2 |  0 → 2 | `block in cookie_jar`           | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/cookies.rb`                 |
| removed |    -1 |     9.1% → 0.0% |   1 → 0 |  1 → 0 | `block in formats`              | `/usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/http/mime_negotiation.rb`            |

##### `#<Class:0xffff76d571d8>#_app_views_layouts_application_html_erb___4441820961383043729_3160` (`<unknown>`)

| Change | Delta |               % | Samples |   Calls | Callee                                                    | Location                                                                              |
| -----: | ----: | --------------: | ------: | ------: | --------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| -30.0% |   -12 | 333.3% → 560.0% | 40 → 28 | 40 → 27 | `ActionView::Helpers::CsrfHelper#csrf_meta_tags`          | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/csrf_helper.rb`      |
| +50.0% |    +2 |  33.3% → 120.0% |   4 → 6 |   4 → 6 | `ActionView::Helpers::AssetTagHelper#stylesheet_link_tag` | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/asset_tag_helper.rb` |
| -20.0% |    -1 |   41.7% → 80.0% |   5 → 4 |   5 → 4 | `ActionView::OutputBuffer#<<`                             | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/buffers.rb`                  |

##### `String#gsub [c function]` (`<unknown>`)

|  Change | Delta |            % | Samples | Calls | Callee            | Location                                                                              |
| ------: | ----: | -----------: | ------: | ----: | ----------------- | ------------------------------------------------------------------------------------- |
| +400.0% |    +4 | 2.2% → 13.2% |   1 → 5 | 1 → 5 | `block in escape` | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router/utils.rb` |

##### `Hash#[] [c function]` (`<unknown>`)

|  Change | Delta |            % | Samples | Calls | Callee                | Location                                                                             |
| ------: | ----: | -----------: | ------: | ----: | --------------------- | ------------------------------------------------------------------------------------ |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | 1 → 0 | `block in initialize` | `/usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/ordered_options.rb` |

##### `Array#each [c function]` (`<unknown>`)

|  Change | Delta |               % | Samples | Calls | Callee                      | Location                                                                         |
| ------: | ----: | --------------: | ------: | ----: | --------------------------- | -------------------------------------------------------------------------------- |
|   -8.0% |    -2 | 500.0% → 766.7% | 25 → 23 |     1 | `TZInfo.eager_load!`        | `/usr/local/bundle/gems/tzinfo-2.0.6/lib/tzinfo.rb`                              |
|   -8.0% |    -2 | 500.0% → 766.7% | 25 → 23 |     1 | `block in eager_load!`      | `/usr/local/bundle/gems/tzinfo-2.0.6/lib/tzinfo/data_source.rb`                  |
| removed |    -2 |    40.0% → 0.0% |   2 → 0 | 2 → 0 | `block in derive_offsets`   | `/usr/local/bundle/gems/tzinfo-2.0.6/lib/tzinfo/data_sources/zoneinfo_reader.rb` |
| removed |    -1 |    20.0% → 0.0% |   1 → 0 | 1 → 0 | `ActiveModel.eager_load!`   | `/usr/local/bundle/gems/activemodel-8.1.3.1/lib/active_model.rb`                 |
| removed |    -1 |    20.0% → 0.0% |   1 → 0 | 1 → 0 | `ActiveSupport.eager_load!` | `/usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support.rb`             |

##### `Kernel#respond_to? [c function]` (`<unknown>`)

| Change | Delta |            % | Samples | Calls | Callee                                | Location                                                   |
| -----: | ----: | -----------: | ------: | ----: | ------------------------------------- | ---------------------------------------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | 0 → 1 | `Rack::BodyProxy#respond_to_missing?` | `/usr/local/bundle/gems/rack-3.2.7/lib/rack/body_proxy.rb` |

##### `ActiveSupport::CoreExt::ERBUtil#html_escape` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/core_ext/erb/util.rb`)

| Change | Delta |             % | Samples |  Calls | Callee                               | Location    |
| -----: | ----: | ------------: | ------: | -----: | ------------------------------------ | ----------- |
| -30.0% |    -3 | 62.5% → 77.8% |  10 → 7 | 10 → 7 | `ERB::Util.html_escape [c function]` | `<unknown>` |

##### `Rack::BodyProxy#close` (`/usr/local/bundle/gems/rack-3.2.7/lib/rack/body_proxy.rb`)

|  Change | Delta |              % | Samples | Calls | Callee              | Location                                                                               |
| ------: | ----: | -------------: | ------: | ----: | ------------------- | -------------------------------------------------------------------------------------- |
| removed |    -3 |   42.9% → 0.0% |   3 → 0 | 3 → 0 | `block in call`     | `/usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/executor.rb` |
|  -50.0% |    -2 | 57.1% → 100.0% |   4 → 2 | 4 → 2 | `block in call_app` | `/usr/local/bundle/gems/railties-8.1.4/lib/rails/rack/logger.rb`                       |

##### `Rails::HTML::Concern::Scrubber::SafeList#scrub` (`/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/sanitizer.rb`)

|  Change | Delta |                 % |   Samples |     Calls | Callee                                    | Location                                                                        |
| ------: | ----: | ----------------: | --------: | --------: | ----------------------------------------- | ------------------------------------------------------------------------------- |
|   +5.6% |   +20 | 2730.8% → 4687.5% | 355 → 375 | 274 → 280 | `Loofah::ScrubBehavior::Node#scrub!`      | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`                   |
| removed |    -4 |      30.8% → 0.0% |     4 → 0 |     4 → 0 | `Rails::HTML::PermitScrubber#attributes=` | `/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb` |
|  -50.0% |    -3 |     46.2% → 37.5% |     6 → 3 |     6 → 3 | `Rails::HTML::PermitScrubber#tags=`       | `/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb` |

##### `ActiveSupport::Messages::SerializerWithFallback::JsonWithFallback#dump` (`/usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/messages/serializer_with_fallback.rb`)

|  Change | Delta |             % | Samples | Calls | Callee                       | Location                                                                           |
| ------: | ----: | ------------: | ------: | ----: | ---------------------------- | ---------------------------------------------------------------------------------- |
| removed |    -4 | 100.0% → 0.0% |   4 → 0 | 4 → 0 | `ActiveSupport::JSON.encode` | `/usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/json/encoding.rb` |

##### `ActionView::StructuredEventSubscriber::Start#start` (`/usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/structured_event_subscriber.rb`)

|  Change | Delta |            % | Samples | Calls | Callee                                                         | Location                                                                                   |
| ------: | ----: | -----------: | ------: | ----: | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| removed |    -2 | 50.0% → 0.0% |   2 → 0 | 2 → 0 | `String#sub! [c function]`                                     | `<unknown>`                                                                                |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | 1 → 0 | `String#sub [c function]`                                      | `<unknown>`                                                                                |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | 1 → 0 | `ActionView::StructuredEventSubscriber::Utils#from_rails_root` | `/usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/structured_event_subscriber.rb` |

##### `ActiveSupport::JSON.encode` (`/usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/json/encoding.rb`)

|  Change | Delta |             % | Samples | Calls | Callee                                                 | Location                                                                           |
| ------: | ----: | ------------: | ------: | ----: | ------------------------------------------------------ | ---------------------------------------------------------------------------------- |
| removed |    -4 | 100.0% → 0.0% |   4 → 0 | 4 → 0 | `ActiveSupport::JSON::Encoding.encode_without_options` | `/usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/json/encoding.rb` |

##### `I18n::Base#default_separator` (`<unknown>`)

|  Change | Delta |            % | Samples | Calls | Callee                           | Location                                                |
| ------: | ----: | -----------: | ------: | ----: | -------------------------------- | ------------------------------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | 1 → 0 | `I18n::Config#default_separator` | `/usr/local/bundle/gems/i18n-1.15.2/lib/i18n/config.rb` |

##### `ActionController::Base.logger` (`<unknown>`)

|  Change | Delta |             % | Samples | Calls | Callee                                         | Location                                                                             |
| ------: | ----: | ------------: | ------: | ----: | ---------------------------------------------- | ------------------------------------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | 1 → 0 | `ActiveSupport::OrderedOptions#method_missing` | `/usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/ordered_options.rb` |

##### `ActionController::Metal#content_type=` (`<unknown>`)

| Change | Delta |      % | Samples | Calls | Callee                                   | Location                                                                       |
| -----: | ----: | -----: | ------: | ----: | ---------------------------------------- | ------------------------------------------------------------------------------ |
| -50.0% |    -1 | 100.0% |   2 → 1 | 2 → 1 | `ActionDispatch::Response#content_type=` | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/http/response.rb` |

##### `ActionController::Base#per_form_csrf_tokens` (`<unknown>`)

|  Change | Delta |             % | Samples | Calls | Callee                                         | Location                                                                             |
| ------: | ----: | ------------: | ------: | ----: | ---------------------------------------------- | ------------------------------------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | 1 → 0 | `ActiveSupport::OrderedOptions#method_missing` | `/usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/ordered_options.rb` |

##### `ActionController::Metal#session` (`<unknown>`)

|  Change | Delta |             % | Samples | Calls | Callee                           | Location                                                |
| ------: | ----: | ------------: | ------: | ----: | -------------------------------- | ------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | 1 → 0 | `Rack::Request::Helpers#session` | `/usr/local/bundle/gems/rack-3.2.7/lib/rack/request.rb` |

##### `block (2 levels) in _app_views_statuses_index_html_erb__328993190567029661_3128` (`<unknown>`)

| Change | Delta |                % | Samples |  Calls | Callee                                   | Location                                                                           |
| -----: | ----: | ---------------: | ------: | -----: | ---------------------------------------- | ---------------------------------------------------------------------------------- |
| -71.0% |   -22 | 1550.0% → 900.0% |  31 → 9 | 31 → 8 | `block in define_url_helper`             | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb` |
| -50.0% |    -1 |           100.0% |   2 → 1 |  2 → 1 | `ActionView::Helpers::UrlHelper#link_to` | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/url_helper.rb`    |
