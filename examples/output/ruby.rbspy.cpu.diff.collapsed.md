# Sampling profile diff

Collected 1,555 samples.

| Category         | Change | Delta |             % |   Samples |
| ---------------- | -----: | ----: | ------------: | --------: |
| Native           | +13.9% |  +117 | 54.0% → 61.5% | 839 → 956 |
| Third-party      | -19.5% |  -128 | 42.1% → 33.9% | 655 → 527 |
| Unknown          | +22.0% |   +11 |   3.2% → 3.9% |   50 → 61 |
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
|  +850.0% |   +17 | 0.1% → 1.2% |   2 → 19 | `ActiveSupport::NumberHelper::NumberToDelimitedConverter#parts`        | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_to_delimited_converter.rb` |
|   +29.8% |   +17 | 3.7% → 4.8% |  57 → 74 | `Nokogiri::Gumbo.fragment [c function]`                                | `<unknown>`                                                                                                    |
| +1600.0% |   +16 | 0.1% → 1.1% |   1 → 17 | `Hash#transform_keys [c function]`                                     | `<unknown>`                                                                                                    |
|   +92.3% |   +12 | 0.8% → 1.6% |  13 → 25 | `Kernel#dup [c function]`                                              | `<unknown>`                                                                                                    |
|   +41.7% |   +10 | 1.5% → 2.2% |  24 → 34 | `block in _app_views_statuses_index_html_erb__328993190567029661_3128` | `<unknown>`                                                                                                    |
|      new |   +10 | 0.0% → 0.6% |   0 → 10 | `ActionView::Helpers::NumberHelper#number_with_delimiter`              | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/number_helper.rb`                             |
|  +900.0% |    +9 | 0.1% → 0.6% |   1 → 10 | `Loofah::HTML5::Scrub.cdata_needs_escaping?`                           | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`                                               |
|   +90.0% |    +9 | 0.6% → 1.2% |  10 → 19 | `Nokogiri::XML::Node#node_name [c function]`                           | `<unknown>`                                                                                                    |
|   +88.9% |    +8 | 0.6% → 1.1% |   9 → 17 | `Array#join [c function]`                                              | `<unknown>`                                                                                                    |
|   +25.8% |    +8 | 2.0% → 2.5% |  31 → 39 | `Nokogiri::HTML4::Document.new [c function]`                           | `<unknown>`                                                                                                    |
|   +77.8% |    +7 | 0.6% → 1.0% |   9 → 16 | `ActionView::OutputBuffer#<<`                                          | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/buffers.rb`                                           |
|   +75.0% |    +6 | 0.5% → 0.9% |   8 → 14 | `Class#new [c function]`                                               | `<unknown>`                                                                                                    |
|  +120.0% |    +6 | 0.3% → 0.7% |   5 → 11 | `Nokogiri::HTML5::DocumentFragment#initialize`                         | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/document_fragment.rb`             |
|   +71.4% |    +5 | 0.5% → 0.8% |   7 → 12 | `Nokogiri::XML::Document#decorate`                                     | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`                        |
|   +45.5% |    +5 | 0.7% → 1.0% |  11 → 16 | `Loofah::Scrubber#traverse_conditionally_bottom_up`                    | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/scrubber.rb`                                                  |
|  +100.0% |    +5 | 0.3% → 0.6% |   5 → 10 | `Nokogiri::XML::Node#attribute_nodes [c function]`                     | `<unknown>`                                                                                                    |

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

|  Change | Delta |           % | Samples | Function                                                            | Location                                                                                                       |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| +850.0% |   +17 | 0.1% → 1.2% |  2 → 19 | `ActiveSupport::NumberHelper::NumberToDelimitedConverter#parts`     | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_to_delimited_converter.rb` |
|     new |   +10 | 0.0% → 0.6% |  0 → 10 | `ActionView::Helpers::NumberHelper#number_with_delimiter`           | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/number_helper.rb`                             |
| +900.0% |    +9 | 0.1% → 0.6% |  1 → 10 | `Loofah::HTML5::Scrub.cdata_needs_escaping?`                        | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`                                               |
|  +77.8% |    +7 | 0.6% → 1.0% |  9 → 16 | `ActionView::OutputBuffer#<<`                                       | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/buffers.rb`                                           |
| +120.0% |    +6 | 0.3% → 0.7% |  5 → 11 | `Nokogiri::HTML5::DocumentFragment#initialize`                      | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/document_fragment.rb`             |
|  +71.4% |    +5 | 0.5% → 0.8% |  7 → 12 | `Nokogiri::XML::Document#decorate`                                  | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`                        |
|  +45.5% |    +5 | 0.7% → 1.0% | 11 → 16 | `Loofah::Scrubber#traverse_conditionally_bottom_up`                 | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/scrubber.rb`                                                  |
| +500.0% |    +5 | 0.1% → 0.4% |   1 → 6 | `Rails::HTML::Concern::Serializer::UTF8Encode#serialize`            | `/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/sanitizer.rb`                                |
| +500.0% |    +5 | 0.1% → 0.4% |   1 → 6 | `Nokogiri::XML::Node#attributes`                                    | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb`                            |
| +500.0% |    +5 | 0.1% → 0.4% |   1 → 6 | `Loofah::HTML5::Scrub.scrub_css_attribute`                          | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`                                               |
| +500.0% |    +5 | 0.1% → 0.4% |   1 → 6 | `ActionView::Helpers::UrlHelper#convert_options_to_data_attributes` | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/url_helper.rb`                                |
| +200.0% |    +4 | 0.1% → 0.4% |   2 → 6 | `block in to_html`                                                  | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`                        |
|  +66.7% |    +4 | 0.4% → 0.6% |  6 → 10 | `Nokogiri::XML::Document#decorators`                                | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`                        |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `Rails::HTML::PermitScrubber#scrub_attributes`                      | `/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`                                |
|  +75.0% |    +3 | 0.3% → 0.5% |   4 → 7 | `Nokogiri::XML::NodeSet#to_html`                                    | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`                        |
|  +75.0% |    +3 | 0.3% → 0.5% |   4 → 7 | `I18n::Backend::Base#translate`                                     | `/usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/base.rb`                                                  |
|  +60.0% |    +3 | 0.3% → 0.5% |   5 → 8 | `block in scrub_attributes`                                         | `/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`                                |
| +150.0% |    +3 | 0.1% → 0.3% |   2 → 5 | `Nokogiri::XML::Node#xml?`                                          | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb`                            |
| +100.0% |    +3 | 0.2% → 0.4% |   3 → 6 | `Nokogiri::XML::Document#initialize`                                | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`                        |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `I18n::Base#normalize_key`                                          | `/usr/local/bundle/gems/i18n-1.15.2/lib/i18n.rb`                                                               |

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
|  -50.0% |    -6 | 0.8% → 0.4% |   12 → 6 | `block in each`                                                    | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`           |
|  -60.0% |    -6 | 0.6% → 0.3% |   10 → 4 | `Nokogiri::XML::Node#serialize`                                    | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb`               |
|  -71.4% |    -5 | 0.5% → 0.1% |    7 → 2 | `Set#include?`                                                     | `/usr/local/lib/ruby/3.4.0/set.rb`                                                                |
|  -66.7% |    -4 | 0.4% → 0.1% |    6 → 2 | `Hash#fetch [c function]`                                          | `<unknown>`                                                                                       |
|  -66.7% |    -4 | 0.4% → 0.1% |    6 → 2 | `ActiveSupport::CoreExt::ERBUtil#html_escape`                      | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/core_ext/erb/util.rb`              |
|  -30.8% |    -4 | 0.8% → 0.6% |   13 → 9 | `Nokogiri::XML::DocumentFragment.new`                              | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document_fragment.rb`  |
|  -80.0% |    -4 | 0.3% → 0.1% |    5 → 1 | `Random.urandom [c function]`                                      | `<unknown>`                                                                                       |
|  -80.0% |    -4 | 0.3% → 0.1% |    5 → 1 | `Nokogiri::HTML5::Document#initialize`                             | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/document.rb`         |
|  -33.3% |    -3 | 0.6% → 0.4% |    9 → 6 | `Loofah::ScrubBehavior::Node#scrub!`                               | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`                                     |
| removed |    -3 | 0.2% → 0.0% |    3 → 0 | `Hash#[] [c function]`                                             | `<unknown>`                                                                                       |
| removed |    -3 | 0.2% → 0.0% |    3 → 0 | `I18n::Backend::Simple::Implementation#lookup`                     | `/usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/simple.rb`                                   |

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

|  Change | Delta |           % |  Samples | Function                                                           | Location                                                                                          |
| ------: | ----: | ----------: | -------: | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------- |
|  -86.5% |  -128 | 9.5% → 1.3% | 148 → 20 | `ActiveSupport::NumberHelper::NumberConverter#i18n_format_options` | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb` |
|  -72.2% |   -57 | 5.1% → 1.4% |  79 → 22 | `Nokogiri::XML::NodeSet#each`                                      | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`           |
|  -54.3% |   -25 | 3.0% → 1.4% |  46 → 21 | `block in decorate`                                                | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`           |
|  -64.3% |    -9 | 0.9% → 0.3% |   14 → 5 | `Nokogiri::XML::Node#to_format`                                    | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb`               |
|  -50.0% |    -6 | 0.8% → 0.4% |   12 → 6 | `block in each`                                                    | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`           |
|  -60.0% |    -6 | 0.6% → 0.3% |   10 → 4 | `Nokogiri::XML::Node#serialize`                                    | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb`               |
|  -66.7% |    -4 | 0.4% → 0.1% |    6 → 2 | `ActiveSupport::CoreExt::ERBUtil#html_escape`                      | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/core_ext/erb/util.rb`              |
|  -30.8% |    -4 | 0.8% → 0.6% |   13 → 9 | `Nokogiri::XML::DocumentFragment.new`                              | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document_fragment.rb`  |
|  -80.0% |    -4 | 0.3% → 0.1% |    5 → 1 | `Nokogiri::HTML5::Document#initialize`                             | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/document.rb`         |
|  -33.3% |    -3 | 0.6% → 0.4% |    9 → 6 | `Loofah::ScrubBehavior::Node#scrub!`                               | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`                                     |
| removed |    -3 | 0.2% → 0.0% |    3 → 0 | `I18n::Backend::Simple::Implementation#lookup`                     | `/usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/simple.rb`                                   |
|  -50.0% |    -3 | 0.4% → 0.2% |    6 → 3 | `Nokogiri::XML::Node#to_html`                                      | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb`               |
|  -75.0% |    -3 | 0.3% → 0.1% |    4 → 1 | `Loofah::HtmlFragmentBehavior::ClassMethods#parse`                 | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`                                     |
| removed |    -3 | 0.2% → 0.0% |    3 → 0 | `Rack::Request::Env#get_header`                                    | `/usr/local/bundle/gems/rack-3.2.7/lib/rack/request.rb`                                           |
| removed |    -3 | 0.2% → 0.0% |    3 → 0 | `ActionView::PathRegistry.get_view_paths`                          | `/usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/path_registry.rb`                      |
| removed |    -2 | 0.1% → 0.0% |    2 → 0 | `Rack::ETag#call`                                                  | `/usr/local/bundle/gems/rack-3.2.7/lib/rack/etag.rb`                                              |
| removed |    -2 | 0.1% → 0.0% |    2 → 0 | `ActionView::Rendering#_process_render_template_options`           | `/usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/rendering.rb`                          |
|  -66.7% |    -2 | 0.2% → 0.1% |    3 → 1 | `block (2 levels) in generate_url_helpers`                         | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb`                |
|  -14.3% |    -2 | 0.9% → 0.8% |  14 → 12 | `Nokogiri::HTML5::Node#write_to`                                   | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/node.rb`             |
|  -33.3% |    -2 | 0.4% → 0.3% |    6 → 4 | `ActionView::Helpers::TagHelper::TagBuilder#content_tag_string`    | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/tag_helper.rb`                   |

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

##### `ActiveSupport::NumberHelper::NumberToDelimitedConverter#parts` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_to_delimited_converter.rb`)

|  Change | Delta |             % | Samples | Location                                                                                                            |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------------- |
|     new |   +19 | 0.0% → 100.0% |  0 → 19 | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_to_delimited_converter.rb:37`   |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `/usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/number_helper/number_to_delimited_converter.rb:38` |

##### `block in _app_views_statuses_index_html_erb__328993190567029661_3128` (`<unknown>`)

| Change | Delta |      % | Samples | Location |
| -----: | ----: | -----: | ------: | -------- |
| +41.7% |   +10 | 100.0% | 24 → 34 | 29       |

##### `ActionView::Helpers::NumberHelper#number_with_delimiter` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/number_helper.rb`)

| Change | Delta |             % | Samples | Location                                                                              |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------- |
|    new |   +10 | 0.0% → 100.0% |  0 → 10 | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/number_helper.rb:85` |

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

##### `Loofah::Scrubber#traverse_conditionally_bottom_up` (`/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/scrubber.rb`)

| Change | Delta |      % | Samples | Location                                                          |
| -----: | ----: | -----: | ------: | ----------------------------------------------------------------- |
| +45.5% |    +5 | 100.0% | 11 → 16 | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/scrubber.rb:138` |

##### `Rails::HTML::Concern::Serializer::UTF8Encode#serialize` (`/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/sanitizer.rb`)

|  Change | Delta |      % | Samples | Location                                                                            |
| ------: | ----: | -----: | ------: | ----------------------------------------------------------------------------------- |
| +500.0% |    +5 | 100.0% |   1 → 6 | `/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/sanitizer.rb:192` |

##### `Nokogiri::XML::Node#attributes` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb`)

|  Change | Delta |      % | Samples | Location                                                                                |
| ------: | ----: | -----: | ------: | --------------------------------------------------------------------------------------- |
| +500.0% |    +5 | 100.0% |   1 → 6 | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb:739` |

##### `Loofah::HTML5::Scrub.scrub_css_attribute` (`/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`)

|  Change | Delta |      % | Samples | Location                                                             |
| ------: | ----: | -----: | ------: | -------------------------------------------------------------------- |
| +500.0% |    +5 | 100.0% |   1 → 6 | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb:108` |

##### `ActionView::Helpers::UrlHelper#convert_options_to_data_attributes` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/url_helper.rb`)

|  Change | Delta |      % | Samples | Location                                                                            |
| ------: | ----: | -----: | ------: | ----------------------------------------------------------------------------------- |
| +500.0% |    +5 | 100.0% |   1 → 6 | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/url_helper.rb:720` |

##### `block in to_html` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`)

|  Change | Delta |      % | Samples | Location                                                                                    |
| ------: | ----: | -----: | ------: | ------------------------------------------------------------------------------------------- |
| +200.0% |    +4 | 100.0% |   2 → 6 | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb:354` |

##### `Nokogiri::XML::Document#decorators` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`)

| Change | Delta |      % | Samples | Location                                                                                    |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------------------------------- |
| +66.7% |    +4 | 100.0% |  6 → 10 | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb:372` |

##### `Rails::HTML::PermitScrubber#scrub_attributes` (`/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`)

| Change | Delta |             % | Samples | Location                                                                            |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------------------------------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb:126` |

##### `Nokogiri::XML::NodeSet#to_html` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`)

| Change | Delta |      % | Samples | Location                                                                                    |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------------------------------- |
| +75.0% |    +3 | 100.0% |   4 → 7 | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb:356` |

##### `I18n::Backend::Base#translate` (`/usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/base.rb`)

| Change | Delta |      % | Samples | Location                                                         |
| -----: | ----: | -----: | ------: | ---------------------------------------------------------------- |
| +75.0% |    +3 | 100.0% |   4 → 7 | `/usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/base.rb:69` |

##### `block in scrub_attributes` (`/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`)

| Change | Delta |      % | Samples | Location                                                                            |
| -----: | ----: | -----: | ------: | ----------------------------------------------------------------------------------- |
| +60.0% |    +3 | 100.0% |   5 → 8 | `/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb:120` |

##### `Nokogiri::XML::Node#xml?` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb`)

|  Change | Delta |      % | Samples | Location                                                                                 |
| ------: | ----: | -----: | ------: | ---------------------------------------------------------------------------------------- |
| +150.0% |    +3 | 100.0% |   2 → 5 | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb:1272` |

##### `Nokogiri::XML::Document#initialize` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`)

|  Change | Delta |      % | Samples | Location                                                                                    |
| ------: | ----: | -----: | ------: | ------------------------------------------------------------------------------------------- |
| +100.0% |    +3 | 100.0% |   3 → 6 | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb:195` |

##### `I18n::Base#normalize_key` (`/usr/local/bundle/gems/i18n-1.15.2/lib/i18n.rb`)

| Change | Delta |             % | Samples | Location                                             |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `/usr/local/bundle/gems/i18n-1.15.2/lib/i18n.rb:492` |

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

##### `block in each` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`)

| Change | Delta |      % | Samples | Location                                                                                    |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------------------------------- |
| -50.0% |    -6 | 100.0% |  12 → 6 | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb:238` |

##### `Nokogiri::XML::Node#serialize` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb`)

| Change | Delta |      % | Samples | Location                                                                                 |
| -----: | ----: | -----: | ------: | ---------------------------------------------------------------------------------------- |
| -60.0% |    -6 | 100.0% |  10 → 4 | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb:1433` |

##### `Set#include?` (`/usr/local/lib/ruby/3.4.0/set.rb`)

| Change | Delta |      % | Samples | Location                               |
| -----: | ----: | -----: | ------: | -------------------------------------- |
| -71.4% |    -5 | 100.0% |   7 → 2 | `/usr/local/lib/ruby/3.4.0/set.rb:398` |

##### `ActiveSupport::CoreExt::ERBUtil#html_escape` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/core_ext/erb/util.rb`)

| Change | Delta |      % | Samples | Location                                                                                |
| -----: | ----: | -----: | ------: | --------------------------------------------------------------------------------------- |
| -66.7% |    -4 | 100.0% |   6 → 2 | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/core_ext/erb/util.rb:17` |

##### `Nokogiri::XML::DocumentFragment.new` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document_fragment.rb`)

| Change | Delta |      % | Samples | Location                                                                                            |
| -----: | ----: | -----: | ------: | --------------------------------------------------------------------------------------------------- |
| -30.8% |    -4 | 100.0% |  13 → 9 | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document_fragment.rb:46` |

##### `Nokogiri::HTML5::Document#initialize` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/document.rb`)

| Change | Delta |      % | Samples | Location                                                                                      |
| -----: | ----: | -----: | ------: | --------------------------------------------------------------------------------------------- |
| -80.0% |    -4 | 100.0% |   5 → 1 | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/document.rb:163` |

##### `Loofah::ScrubBehavior::Node#scrub!` (`/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`)

| Change | Delta |      % | Samples | Location                                                         |
| -----: | ----: | -----: | ------: | ---------------------------------------------------------------- |
| -33.3% |    -3 | 100.0% |   9 → 6 | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb:48` |

##### `I18n::Backend::Simple::Implementation#lookup` (`/usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/simple.rb`)

|  Change | Delta |             % | Samples | Location                                                            |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `/usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/simple.rb:107` |

##### `Nokogiri::XML::Node#to_html` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb`)

| Change | Delta |      % | Samples | Location                                                                                 |
| -----: | ----: | -----: | ------: | ---------------------------------------------------------------------------------------- |
| -50.0% |    -3 | 100.0% |   6 → 3 | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb:1444` |

##### `Loofah::HtmlFragmentBehavior::ClassMethods#parse` (`/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`)

| Change | Delta |      % | Samples | Location                                                          |
| -----: | ----: | -----: | ------: | ----------------------------------------------------------------- |
| -75.0% |    -3 | 100.0% |   4 → 1 | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb:178` |

##### `Rack::Request::Env#get_header` (`/usr/local/bundle/gems/rack-3.2.7/lib/rack/request.rb`)

|  Change | Delta |             % | Samples | Location                                                    |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `/usr/local/bundle/gems/rack-3.2.7/lib/rack/request.rb:107` |

##### `ActionView::PathRegistry.get_view_paths` (`/usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/path_registry.rb`)

|  Change | Delta |             % | Samples | Location                                                                        |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `/usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/path_registry.rb:16` |

##### `Rack::ETag#call` (`/usr/local/bundle/gems/rack-3.2.7/lib/rack/etag.rb`)

|  Change | Delta |             % | Samples | Location                                                |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `/usr/local/bundle/gems/rack-3.2.7/lib/rack/etag.rb:49` |

##### `ActionView::Rendering#_process_render_template_options` (`/usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/rendering.rb`)

|  Change | Delta |             % | Samples | Location                                                                     |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `/usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/rendering.rb:187` |

##### `block (2 levels) in generate_url_helpers` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb`)

| Change | Delta |      % | Samples | Location                                                                               |
| -----: | ----: | -----: | ------: | -------------------------------------------------------------------------------------- |
| -66.7% |    -2 | 100.0% |   3 → 1 | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb:615` |

##### `Nokogiri::HTML5::Node#write_to` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/node.rb`)

| Change | Delta |      % | Samples | Location                                                                                 |
| -----: | ----: | -----: | ------: | ---------------------------------------------------------------------------------------- |
| -14.3% |    -2 | 100.0% | 14 → 12 | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/node.rb:68` |

##### `ActionView::Helpers::TagHelper::TagBuilder#content_tag_string` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/tag_helper.rb`)

| Change | Delta |      % | Samples | Location                                                                            |
| -----: | ----: | -----: | ------: | ----------------------------------------------------------------------------------- |
| -33.3% |    -2 | 100.0% |   6 → 4 | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/tag_helper.rb:233` |

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

#### Callers

Callers with the largest change in contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `Module#extend_object [c function]` (`<unknown>`)

| Change | Delta |      % |  Samples | Caller                       | Location    |
| -----: | ----: | -----: | -------: | ---------------------------- | ----------- |
| +80.0% |   +56 | 100.0% | 70 → 126 | `Kernel#extend [c function]` | `<unknown>` |

##### `Nokogiri::XML::Node#html_standard_serialize [c function]` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller                           | Location                                                                              |
| ------: | ----: | -----: | ------: | -------------------------------- | ------------------------------------------------------------------------------------- |
| +105.0% |   +21 | 100.0% | 20 → 41 | `Nokogiri::HTML5::Node#write_to` | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/node.rb` |

##### `String.new [c function]` (`<unknown>`)

|   Change | Delta |             % | Samples | Caller                          | Location                                                                                         |
| -------: | ----: | ------------: | ------: | ------------------------------- | ------------------------------------------------------------------------------------------------ |
| +1500.0% |   +15 | 16.7% → 61.5% |  1 → 16 | `Nokogiri::XML::Node#serialize` | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb`              |
|  +100.0% |    +5 | 83.3% → 38.5% |  5 → 10 | `String#html_safe`              | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/core_ext/string/output_safety.rb` |

##### `Hash#merge [c function]` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                                                        | Location                                                                                          |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| +100.0% |   +11 | 68.8% → 64.7% | 11 → 22 | `I18n::Backend::Fallbacks#translate`                                                          | `/usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/fallbacks.rb`                                |
| +133.3% |    +4 | 18.8% → 20.6% |   3 → 7 | `ActiveSupport::NumberHelper::NumberConverter#options`                                        | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb` |
| +150.0% |    +3 | 12.5% → 14.7% |   2 → 5 | `ActionDispatch::Routing::RouteSet::NamedRouteCollection::UrlHelper::OptimizedUrlHelper#call` | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb`                |

##### `ActiveSupport::NumberHelper::NumberToDelimitedConverter#parts` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_to_delimited_converter.rb`)

|  Change | Delta |      % | Samples | Caller                                                            | Location                                                                                                       |
| ------: | ----: | -----: | ------: | ----------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| +850.0% |   +17 | 100.0% |  2 → 19 | `ActiveSupport::NumberHelper::NumberToDelimitedConverter#convert` | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_to_delimited_converter.rb` |

##### `Nokogiri::Gumbo.fragment [c function]` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                         | Location                                                                                           |
| -----: | ----: | -----: | ------: | ---------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| +29.8% |   +17 | 100.0% | 57 → 74 | `Nokogiri::HTML5::DocumentFragment#initialize` | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/document_fragment.rb` |

##### `Hash#transform_keys [c function]` (`<unknown>`)

|   Change | Delta |      % | Samples | Caller                | Location                                                                              |
| -------: | ----: | -----: | ------: | --------------------- | ------------------------------------------------------------------------------------- |
| +1600.0% |   +16 | 100.0% |  1 → 17 | `Hash#symbolize_keys` | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/core_ext/hash/keys.rb` |

##### `Kernel#dup [c function]` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                                | Location                                                                                          |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
|     new |    +7 |  0.0% → 28.0% |   0 → 7 | `ActionController::UrlFor#url_options`                                | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/url_for.rb`                  |
|  +40.0% |    +2 | 38.5% → 28.0% |   5 → 7 | `ActiveSupport::NumberHelper::NumberConverter#default_format_options` | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb` |
| removed |    -2 |  15.4% → 0.0% |   2 → 0 | `Rails::HTML::PermitScrubber#attributes=`                             | `/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`                   |
|  +50.0% |    +2 | 30.8% → 24.0% |   4 → 6 | `ActiveSupport::NumberHelper::NumberConverter#i18n_format_options`    | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb` |
|     new |    +2 |   0.0% → 8.0% |   0 → 2 | `ActionDispatch::Journey::Format#evaluate`                            | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/visitors.rb`                 |

##### `block in _app_views_statuses_index_html_erb__328993190567029661_3128` (`<unknown>`)

| Change | Delta |      % | Samples | Caller       | Location    |
| -----: | ----: | -----: | ------: | ------------ | ----------- |
| +41.7% |   +10 | 100.0% | 24 → 34 | `Array#each` | `<unknown>` |

##### `ActionView::Helpers::NumberHelper#number_with_delimiter` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/number_helper.rb`)

| Change | Delta |             % | Samples | Caller                                                                 | Location    |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------------------- | ----------- |
|    new |   +10 | 0.0% → 100.0% |  0 → 10 | `block in _app_views_statuses_index_html_erb__328993190567029661_3128` | `<unknown>` |

##### `Loofah::HTML5::Scrub.cdata_needs_escaping?` (`/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`)

|  Change | Delta |      % | Samples | Caller                              | Location                                                                        |
| ------: | ----: | -----: | ------: | ----------------------------------- | ------------------------------------------------------------------------------- |
| +900.0% |    +9 | 100.0% |  1 → 10 | `Rails::HTML::PermitScrubber#scrub` | `/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb` |

##### `Nokogiri::XML::Node#node_name [c function]` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                        | Location                                                                            |
| ------: | ----: | ------------: | ------: | --------------------------------------------- | ----------------------------------------------------------------------------------- |
|     new |    +6 |  0.0% → 31.6% |   0 → 6 | `Rails::HTML::PermitScrubber#scrub_attribute` | `/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`     |
|     new |    +3 |  0.0% → 15.8% |   0 → 3 | `block in force_correct_attribute_escaping!`  | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`                    |
| +200.0% |    +2 | 10.0% → 15.8% |   1 → 3 | `block in attributes`                         | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb` |
|  -20.0% |    -1 | 50.0% → 21.1% |   5 → 4 | `block in scrub_attributes`                   | `/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`     |
|  -25.0% |    -1 | 40.0% → 15.8% |   4 → 3 | `Rails::HTML::PermitScrubber#allowed_node?`   | `/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`     |

##### `Array#join [c function]` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                          | Location                                                                                                       |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
|     new |    +5 |  0.0% → 29.4% |   0 → 5 | `Nokogiri::XML::NodeSet#to_html`                                | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`                        |
|     new |    +4 |  0.0% → 23.5% |   0 → 4 | `ActiveSupport::NumberHelper::NumberToDelimitedConverter#parts` | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_to_delimited_converter.rb` |
|     new |    +2 |  0.0% → 11.8% |   0 → 2 | `ActionView::Helpers::CsrfHelper#csrf_meta_tags`                | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/csrf_helper.rb`                               |
| removed |    -1 |  11.1% → 0.0% |   1 → 0 | `ActiveSupport::CachingKeyGenerator#generate_key`               | `/usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/key_generator.rb`                             |
|  -33.3% |    -1 | 33.3% → 11.8% |   3 → 2 | `ActionDispatch::Journey::Format#evaluate`                      | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/visitors.rb`                              |

##### `Nokogiri::HTML4::Document.new [c function]` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                             | Location                                                      |
| -----: | ----: | -----: | ------: | -------------------------------------------------- | ------------------------------------------------------------- |
| +25.8% |    +8 | 100.0% | 31 → 39 | `Loofah::HtmlFragmentBehavior::ClassMethods#parse` | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb` |

##### `ActionView::OutputBuffer#<<` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/buffers.rb`)

|  Change | Delta |             % | Samples | Caller                                                                                       | Location    |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------------- | ----------- |
| +200.0% |    +8 | 44.4% → 75.0% |  4 → 12 | `block in _app_views_statuses_index_html_erb__328993190567029661_3128`                       | `<unknown>` |
|  -20.0% |    -1 | 55.6% → 25.0% |   5 → 4 | `#<Class:0xffff76d571d8>#_app_views_layouts_application_html_erb___4441820961383043729_3160` | `<unknown>` |

##### `Class#new [c function]` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                              | Location                                                                                          |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| removed |    -1 |  12.5% → 0.0% |   1 → 0 | `ActiveSupport::MessageEncryptor.key_len`                           | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/message_encryptor.rb`              |
| removed |    -1 |  12.5% → 0.0% |   1 → 0 | `TZInfo::LastDayOfMonthTransitionRule#get_day`                      | `/usr/local/bundle/gems/tzinfo-2.0.6/lib/tzinfo/transition_rule.rb`                               |
| removed |    -1 |  12.5% → 0.0% |   1 → 0 | `OpenSSL::HMAC.digest`                                              | `/usr/local/lib/ruby/3.4.0/openssl/hmac.rb`                                                       |
| removed |    -1 |  12.5% → 0.0% |   1 → 0 | `ActionDispatch::Cookies::EncryptedKeyRotatingCookieJar#initialize` | `/usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/cookies.rb`             |
|  +50.0% |    +1 | 25.0% → 21.4% |   2 → 3 | `ActiveSupport::NumberHelper::NumberConverter.convert`              | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb` |

##### `Nokogiri::HTML5::DocumentFragment#initialize` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/document_fragment.rb`)

|  Change | Delta |      % | Samples | Caller                                | Location                                                                                         |
| ------: | ----: | -----: | ------: | ------------------------------------- | ------------------------------------------------------------------------------------------------ |
| +120.0% |    +6 | 100.0% |  5 → 11 | `Nokogiri::XML::DocumentFragment.new` | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document_fragment.rb` |

##### `Nokogiri::XML::Document#decorate` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`)

|  Change | Delta |             % | Samples | Caller                                                    | Location    |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------- | ----------- |
| +133.3% |    +4 | 42.9% → 58.3% |   3 → 7 | `Nokogiri::XML::Node#children [c function]`               | `<unknown>` |
|  -66.7% |    -2 |  42.9% → 8.3% |   3 → 1 | `Nokogiri::XML::Node#attribute_nodes [c function]`        | `<unknown>` |
|     new |    +2 |  0.0% → 16.7% |   0 → 2 | `Nokogiri::XML::DocumentFragment.native_new [c function]` | `<unknown>` |
| +100.0% |    +1 | 14.3% → 16.7% |   1 → 2 | `Nokogiri::XML::Node#internal_subset [c function]`        | `<unknown>` |

##### `Loofah::Scrubber#traverse_conditionally_bottom_up` (`/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/scrubber.rb`)

|  Change | Delta |             % | Samples | Caller                      | Location                                                      |
| ------: | ----: | ------------: | ------: | --------------------------- | ------------------------------------------------------------- |
| +100.0% |    +5 | 45.5% → 62.5% |  5 → 10 | `Loofah::Scrubber#traverse` | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/scrubber.rb` |

##### `Nokogiri::XML::Node#attribute_nodes [c function]` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                   | Location                                                                            |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------- | ----------------------------------------------------------------------------------- |
|     new |    +4 |  0.0% → 40.0% |   0 → 4 | `Loofah::HTML5::Scrub.force_correct_attribute_escaping!` | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`                    |
| +200.0% |    +2 | 20.0% → 30.0% |   1 → 3 | `Nokogiri::XML::Node#attributes`                         | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb` |
|  -25.0% |    -1 | 80.0% → 30.0% |   4 → 3 | `Rails::HTML::PermitScrubber#scrub_attributes`           | `/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`     |

##### `Kernel#initialize_dup [c function]` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller                    | Location    |
| ------: | ----: | -----: | ------: | ------------------------- | ----------- |
| +250.0% |    +5 | 100.0% |   2 → 7 | `Kernel#dup [c function]` | `<unknown>` |

##### `StringIO#write [c function]` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller                                 | Location    |
| ------: | ----: | -----: | ------: | -------------------------------------- | ----------- |
| +500.0% |    +5 | 100.0% |   1 → 6 | `IO::generic_writable#<< [c function]` | `<unknown>` |

##### `CGI::Escape#unescapeHTML [c function]` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                                     | Location                                                         |
| -----: | ----: | ------------: | ------: | ------------------------------------------ | ---------------------------------------------------------------- |
|    new |    +5 | 0.0% → 100.0% |   0 → 5 | `Loofah::HTML5::Scrub.scrub_uri_attribute` | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb` |

##### `(unknown) [c function]` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                                 | Location                                                                                |
| -----: | ----: | ------------: | ------: | -------------------------------------- | --------------------------------------------------------------------------------------- |
| +13.3% |    +2 | 45.5% → 45.9% | 15 → 17 | `Kernel.require [c function]`          | `<unknown>`                                                                             |
| +28.6% |    +2 | 21.2% → 24.3% |   7 → 9 | `Array#each`                           | `<unknown>`                                                                             |
|    new |    +1 |   0.0% → 2.7% |   0 → 1 | `block in each`                        | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb` |
| -11.1% |    -1 | 27.3% → 21.6% |   9 → 8 | `Kernel#require_relative [c function]` | `<unknown>`                                                                             |

##### `String#match? [c function]` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller                      | Location                                                                             |
| ------: | ----: | -----: | ------: | --------------------------- | ------------------------------------------------------------------------------------ |
| +400.0% |    +4 | 100.0% |   1 → 5 | `ERB::Util.xml_name_escape` | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/core_ext/erb/util.rb` |

##### `StringIO#initialize [c function]` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller                      | Location    |
| ------: | ----: | -----: | ------: | --------------------------- | ----------- |
| +400.0% |    +4 | 100.0% |   1 → 5 | `StringIO.new [c function]` | `<unknown>` |

##### `Nokogiri::XML::Attr#content [c function]` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                       | Location                                                         |
| ------: | ----: | ------------: | ------: | -------------------------------------------- | ---------------------------------------------------------------- |
| +300.0% |    +3 | 33.3% → 57.1% |   1 → 4 | `block in force_correct_attribute_escaping!` | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb` |
|  +50.0% |    +1 | 66.7% → 42.9% |   2 → 3 | `Loofah::HTML5::Scrub.scrub_uri_attribute`   | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb` |

##### `Kernel.require [c function]` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                | Location                                    |
| -----: | ----: | -----: | ------: | ------------------------------------- | ------------------------------------------- |
| +30.0% |    +3 | 100.0% | 10 → 13 | `block (2 levels) in replace_require` | `/usr/local/lib/ruby/3.4.0/bundled_gems.rb` |

##### `Rails::HTML::Concern::Serializer::UTF8Encode#serialize` (`/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/sanitizer.rb`)

|  Change | Delta |      % | Samples | Caller                                            | Location                                                                        |
| ------: | ----: | -----: | ------: | ------------------------------------------------- | ------------------------------------------------------------------------------- |
| +500.0% |    +5 | 100.0% |   1 → 6 | `Rails::HTML::Concern::ComposedSanitize#sanitize` | `/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/sanitizer.rb` |

##### `Nokogiri::XML::Node#attributes` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb`)

|  Change | Delta |      % | Samples | Caller                                     | Location                                                         |
| ------: | ----: | -----: | ------: | ------------------------------------------ | ---------------------------------------------------------------- |
| +500.0% |    +5 | 100.0% |   1 → 6 | `Loofah::HTML5::Scrub.scrub_css_attribute` | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb` |

##### `Loofah::HTML5::Scrub.scrub_css_attribute` (`/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`)

|  Change | Delta |      % | Samples | Caller                                            | Location                                                                        |
| ------: | ----: | -----: | ------: | ------------------------------------------------- | ------------------------------------------------------------------------------- |
| +500.0% |    +5 | 100.0% |   1 → 6 | `Rails::HTML::PermitScrubber#scrub_css_attribute` | `/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb` |

##### `ActionView::Helpers::UrlHelper#convert_options_to_data_attributes` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/url_helper.rb`)

|  Change | Delta |      % | Samples | Caller                                   | Location                                                                        |
| ------: | ----: | -----: | ------: | ---------------------------------------- | ------------------------------------------------------------------------------- |
| +500.0% |    +5 | 100.0% |   1 → 6 | `ActionView::Helpers::UrlHelper#link_to` | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/url_helper.rb` |

##### `block in to_html` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`)

|  Change | Delta |      % | Samples | Caller                   | Location    |
| ------: | ----: | -----: | ------: | ------------------------ | ----------- |
| +200.0% |    +4 | 100.0% |   2 → 6 | `(unknown) [c function]` | `<unknown>` |

##### `Nokogiri::XML::Document#decorators` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`)

| Change | Delta |      % | Samples | Caller                                 | Location                                                      |
| -----: | ----: | -----: | ------: | -------------------------------------- | ------------------------------------------------------------- |
| +66.7% |    +4 | 100.0% |  6 → 10 | `Loofah::DocumentDecorator#initialize` | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb` |

##### `Rails::HTML::PermitScrubber#scrub_attributes` (`/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`)

| Change | Delta |             % | Samples | Caller                              | Location                                                                        |
| -----: | ----: | ------------: | ------: | ----------------------------------- | ------------------------------------------------------------------------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `Rails::HTML::PermitScrubber#scrub` | `/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb` |

##### `Nokogiri::XML::NodeSet#to_html` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`)

| Change | Delta |      % | Samples | Caller                                    | Location                                                                                         |
| -----: | ----: | -----: | ------: | ----------------------------------------- | ------------------------------------------------------------------------------------------------ |
| +75.0% |    +3 | 100.0% |   4 → 7 | `Nokogiri::XML::DocumentFragment#to_html` | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document_fragment.rb` |

##### `I18n::Backend::Base#translate` (`/usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/base.rb`)

| Change | Delta |      % | Samples | Caller                          | Location                                                           |
| -----: | ----: | -----: | ------: | ------------------------------- | ------------------------------------------------------------------ |
| +75.0% |    +3 | 100.0% |   4 → 7 | `block (2 levels) in translate` | `/usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/fallbacks.rb` |

##### `block in scrub_attributes` (`/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`)

| Change | Delta |      % | Samples | Caller       | Location    |
| -----: | ----: | -----: | ------: | ------------ | ----------- |
| +60.0% |    +3 | 100.0% |   5 → 8 | `Array#each` | `<unknown>` |

##### `Nokogiri::XML::Node#xml?` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb`)

|  Change | Delta |      % | Samples | Caller                                   | Location                                                                        |
| ------: | ----: | -----: | ------: | ---------------------------------------- | ------------------------------------------------------------------------------- |
| +150.0% |    +3 | 100.0% |   2 → 5 | `Rails::HTML::Sanitizer#properly_encode` | `/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/sanitizer.rb` |

##### `Nokogiri::XML::Document#initialize` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`)

|  Change | Delta |      % | Samples | Caller                                 | Location                                                                                  |
| ------: | ----: | -----: | ------: | -------------------------------------- | ----------------------------------------------------------------------------------------- |
| +100.0% |    +3 | 100.0% |   3 → 6 | `Nokogiri::HTML5::Document#initialize` | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/document.rb` |

##### `I18n::Base#normalize_key` (`/usr/local/bundle/gems/i18n-1.15.2/lib/i18n.rb`)

| Change | Delta |             % | Samples | Caller                      | Location                                         |
| -----: | ----: | ------------: | ------: | --------------------------- | ------------------------------------------------ |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `I18n::Base#normalize_keys` | `/usr/local/bundle/gems/i18n-1.15.2/lib/i18n.rb` |

##### `ActiveSupport::NumberHelper::NumberConverter#namespace` (`<unknown>`)

| Change | Delta |            % | Samples | Caller                                                                | Location                                                                                          |
| -----: | ----: | -----------: | ------: | --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
|    new |    +2 | 0.0% → 66.7% |   0 → 2 | `ActiveSupport::NumberHelper::NumberConverter#i18n_format_options`    | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `ActiveSupport::NumberHelper::NumberConverter#default_format_options` | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb` |

##### `Array#each` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                                                | Location                                                                                |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
|  -75.0% |    -3 |  44.4% → 9.1% |   4 → 1 | `Enumerable#detect [c function]`                                                      | `<unknown>`                                                                             |
|  +50.0% |    +1 | 22.2% → 27.3% |   2 → 3 | `block in decorate`                                                                   | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb` |
| removed |    -1 |  11.1% → 0.0% |   1 → 0 | `#<Class:0xffff76d571d8>#_app_views_statuses_index_html_erb__328993190567029661_3128` | `<unknown>`                                                                             |
| +100.0% |    +1 | 11.1% → 18.2% |   1 → 2 | `Enumerable#inject [c function]`                                                      | `<unknown>`                                                                             |
|     new |    +1 |   0.0% → 9.1% |   0 → 1 | `I18n::Backend::Fallbacks#translate`                                                  | `/usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/fallbacks.rb`                      |

##### `Time#initialize` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                   | Location    |
| -----: | ----: | ------------: | ------: | ------------------------ | ----------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `Class#new [c function]` | `<unknown>` |

##### `ActionController::Base::HelperMethods#form_authenticity_token` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                                           | Location                                                                         |
| -----: | ----: | ------------: | ------: | ------------------------------------------------ | -------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `ActionView::Helpers::CsrfHelper#csrf_meta_tags` | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/csrf_helper.rb` |

##### `Array#map` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                                        | Location                                                                        |
| -----: | ----: | ------------: | ------: | --------------------------------------------- | ------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `ActionDispatch::SSL#flag_cookies_as_secure!` | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/ssl.rb` |

##### `ActionController::Base::HelperMethods#protect_against_forgery?` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                                           | Location                                                                         |
| -----: | ----: | ------------: | ------: | ------------------------------------------------ | -------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `ActionView::Helpers::CsrfHelper#csrf_meta_tags` | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/csrf_helper.rb` |

##### `ActiveSupport::NumberHelper::NumberConverter.validate_float` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                                                        | Location    |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------- | ----------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `ActiveSupport::NumberHelper::NumberConverter#validate_float` | `<unknown>` |

##### `ActionView::Base.default_formats` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                           | Location                                                                    |
| -----: | ----: | ------------: | ------: | -------------------------------- | --------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `block in <class:LookupContext>` | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/lookup_context.rb` |

##### `ActionController::Base#allow_forgery_protection` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                                                                | Location                                                                                            |
| -----: | ----: | ------------: | ------: | --------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `ActionController::RequestForgeryProtection#protect_against_forgery?` | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/request_forgery_protection.rb` |

##### `ActionDispatch::Response.default_headers` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                            | Location                                                                       |
| -----: | ----: | ------------: | ------: | --------------------------------- | ------------------------------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `ActionDispatch::Response.create` | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/http/response.rb` |

##### `ActionController::Base.default_static_extension` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                                                | Location                                                                           |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------- | ---------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `ActionDispatch::FileHandler#each_candidate_filepath` | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/static.rb` |

##### `ActionDispatch::Response.default_charset` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                                   | Location                                                                       |
| -----: | ----: | ------------: | ------: | ---------------------------------------- | ------------------------------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `ActionDispatch::Response#content_type=` | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/http/response.rb` |

##### `ActiveSupport::NumberHelper::NumberConverter#i18n_format_options` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb`)

| Change | Delta |      % |  Samples | Caller                                                        | Location                                                                                          |
| -----: | ----: | -----: | -------: | ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| -86.5% |  -128 | 100.0% | 148 → 20 | `ActiveSupport::NumberHelper::NumberConverter#format_options` | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb` |

##### `Nokogiri::XML::NodeSet#each` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`)

| Change | Delta |             % | Samples | Caller                                              | Location                                                      |
| -----: | ----: | ------------: | ------: | --------------------------------------------------- | ------------------------------------------------------------- |
| -87.0% |   -60 | 87.3% → 40.9% |  69 → 9 | `Loofah::Scrubber#traverse_conditionally_bottom_up` | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/scrubber.rb` |
| +28.6% |    +2 |  8.9% → 40.9% |   7 → 9 | `Loofah::ScrubBehavior::NodeSet#scrub!`             | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb` |
| +33.3% |    +1 |  3.8% → 18.2% |   3 → 4 | `Enumerable#map [c function]`                       | `<unknown>`                                                   |

##### `String#encode [c function]` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                           | Location                                                                              |
| -----: | ----: | -----: | ------: | -------------------------------- | ------------------------------------------------------------------------------------- |
| -50.9% |   -29 | 100.0% | 57 → 28 | `Nokogiri::HTML5::Node#write_to` | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/node.rb` |

##### `Digest::Base#<< [c function]` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                 | Location                                             |
| -----: | ----: | -----: | ------: | ---------------------- | ---------------------------------------------------- |
| -28.7% |   -27 | 100.0% | 94 → 67 | `block in digest_body` | `/usr/local/bundle/gems/rack-3.2.7/lib/rack/etag.rb` |

##### `block in decorate` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`)

| Change | Delta |      % | Samples | Caller                   | Location    |
| -----: | ----: | -----: | ------: | ------------------------ | ----------- |
| -54.3% |   -25 | 100.0% | 46 → 21 | `Hash#each [c function]` | `<unknown>` |

##### `String#split [c function]` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                                                          | Location                                                                                                       |
| -----: | ----: | ------------: | ------: | --------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| -77.8% |   -14 | 75.0% → 44.4% |  18 → 4 | `ActiveSupport::NumberHelper::NumberToDelimitedConverter#parts` | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_to_delimited_converter.rb` |
| -16.7% |    -1 | 25.0% → 55.6% |   6 → 5 | `Loofah::HTML5::Scrub.scrub_uri_attribute`                      | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`                                               |

##### `String#gsub! [c function]` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                          | Location                                                                                                         |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| removed |   -12 |  40.0% → 0.0% |  12 → 0 | `ActiveSupport::NumberHelper::NumberToDelimitedConverter#parts` | `/usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/number_helper/number_to_delimited_converter.rb` |
|  +14.3% |    +2 | 46.7% → 88.9% | 14 → 16 | `Loofah::HTML5::Scrub.scrub_uri_attribute`                      | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`                                                 |
| +100.0% |    +1 |  3.3% → 11.1% |   1 → 2 | `URI.encode_www_form_component`                                 | `/usr/local/bundle/gems/uri-1.1.1/lib/uri/common.rb`                                                             |
| removed |    -1 |   3.3% → 0.0% |   1 → 0 | `ActiveSupport::JSON::Encoding::JSONGemCoderEncoder#encode`     | `/usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/json/encoding.rb`                               |
| removed |    -1 |   3.3% → 0.0% |   1 → 0 | `ActiveSupport::Autoload#autoload`                              | `/usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/dependencies/autoload.rb`                       |

##### `String#gsub [c function]` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                              | Location                                                                              |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
|  -92.0% |   -23 |  56.8% → 6.1% |  25 → 2 | `ActionDispatch::Journey::Router::Utils::UriEncoder#escape_segment` | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router/utils.rb` |
|  +80.0% |    +8 | 22.7% → 54.5% | 10 → 18 | `Loofah::HTML5::Scrub.allowed_uri?`                                 | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`                      |
|  +40.0% |    +2 | 11.4% → 21.2% |   5 → 7 | `ActionDispatch::Journey::Router::Utils::UriEncoder#escape`         | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router/utils.rb` |
| +100.0% |    +1 |   2.3% → 6.1% |   1 → 2 | `Loofah::HTML5::Scrub.scrub_uri_attribute`                          | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`                      |
|     new |    +1 |   0.0% → 3.0% |   0 → 1 | `block in <module:Utils>`                                           | `/usr/local/bundle/gems/rack-3.2.7/lib/rack/utils.rb`                                 |

##### `Nokogiri::XML::Node#to_format` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb`)

| Change | Delta |      % | Samples | Caller                        | Location                                                                            |
| -----: | ----: | -----: | ------: | ----------------------------- | ----------------------------------------------------------------------------------- |
| -64.3% |    -9 | 100.0% |  14 → 5 | `Nokogiri::XML::Node#to_html` | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb` |

##### `block in each` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`)

| Change | Delta |      % | Samples | Caller                      | Location    |
| -----: | ----: | -----: | ------: | --------------------------- | ----------- |
| -50.0% |    -6 | 100.0% |  12 → 6 | `Integer#upto [c function]` | `<unknown>` |

##### `Nokogiri::XML::Node#serialize` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb`)

| Change | Delta |      % | Samples | Caller                          | Location                                                                            |
| -----: | ----: | -----: | ------: | ------------------------------- | ----------------------------------------------------------------------------------- |
| -60.0% |    -6 | 100.0% |  10 → 4 | `Nokogiri::XML::Node#to_format` | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb` |

##### `Set#include?` (`/usr/local/lib/ruby/3.4.0/set.rb`)

|  Change | Delta |             % | Samples | Caller                                        | Location                                                                        |
| ------: | ----: | ------------: | ------: | --------------------------------------------- | ------------------------------------------------------------------------------- |
|  -75.0% |    -3 | 57.1% → 50.0% |   4 → 1 | `Rails::HTML::PermitScrubber#scrub_attribute` | `/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb` |
| removed |    -2 |  28.6% → 0.0% |   2 → 0 | `block in force_correct_attribute_escaping!`  | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`                |
| removed |    -1 |  14.3% → 0.0% |   1 → 0 | `I18n::Base#locale_available?`                | `/usr/local/bundle/gems/i18n-1.15.2/lib/i18n.rb`                                |
|     new |    +1 |  0.0% → 50.0% |   0 → 1 | `Loofah::HTML5::Scrub.scrub_uri_attribute`    | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`                |

##### `Hash#fetch [c function]` (`<unknown>`)

|  Change | Delta |              % | Samples | Caller                                                                      | Location                                                                                                                   |
| ------: | ----: | -------------: | ------: | --------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| removed |    -2 |   33.3% → 0.0% |   2 → 0 | `I18n::Backend::Fallbacks#translate`                                        | `/usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/fallbacks.rb`                                                         |
| +100.0% |    +1 | 16.7% → 100.0% |   1 → 2 | `Rack::Request::Env#fetch_header`                                           | `/usr/local/bundle/gems/rack-3.2.7/lib/rack/request.rb`                                                                    |
| removed |    -1 |   16.7% → 0.0% |   1 → 0 | `ActionDispatch::Request::Session::Options#id`                              | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/request/session.rb`                                           |
| removed |    -1 |   16.7% → 0.0% |   1 → 0 | `Concurrent::Collection::NonConcurrentMapBackend#get_or_default`            | `/usr/local/bundle/gems/concurrent-ruby-1.3.8/lib/concurrent-ruby/concurrent/collection/map/non_concurrent_map_backend.rb` |
| removed |    -1 |   16.7% → 0.0% |   1 → 0 | `ActiveSupport::NumberHelper::NumberToDelimitedConverter#delimiter_pattern` | `/usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/number_helper/number_to_delimited_converter.rb`           |

##### `ActiveSupport::CoreExt::ERBUtil#html_escape` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/core_ext/erb/util.rb`)

|  Change | Delta |             % | Samples | Caller                                                          | Location                                                                        |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------- | ------------------------------------------------------------------------------- |
|  -75.0% |    -3 | 66.7% → 50.0% |   4 → 1 | `ActionView::OutputBuffer#<<`                                   | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/buffers.rb`            |
| removed |    -1 |  16.7% → 0.0% |   1 → 0 | `ActionView::Helpers::TagHelper::TagBuilder#content_tag_string` | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/tag_helper.rb` |

##### `Nokogiri::XML::DocumentFragment.new` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document_fragment.rb`)

| Change | Delta |      % | Samples | Caller                                             | Location                                                      |
| -----: | ----: | -----: | ------: | -------------------------------------------------- | ------------------------------------------------------------- |
| -30.8% |    -4 | 100.0% |  13 → 9 | `Loofah::HtmlFragmentBehavior::ClassMethods#parse` | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb` |

##### `Random.urandom [c function]` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                            | Location                                                        |
| -----: | ----: | -----: | ------: | --------------------------------- | --------------------------------------------------------------- |
| -80.0% |    -4 | 100.0% |   5 → 1 | `SecureRandom.gen_random_urandom` | `/usr/local/bundle/gems/securerandom-0.4.1/lib/securerandom.rb` |

##### `Nokogiri::HTML5::Document#initialize` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/document.rb`)

| Change | Delta |      % | Samples | Caller                                 | Location                                                      |
| -----: | ----: | -----: | ------: | -------------------------------------- | ------------------------------------------------------------- |
| -80.0% |    -4 | 100.0% |   5 → 1 | `Loofah::DocumentDecorator#initialize` | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb` |

##### `Loofah::ScrubBehavior::Node#scrub!` (`/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`)

| Change | Delta |             % | Samples | Caller                                           | Location                                                                        |
| -----: | ----: | ------------: | ------: | ------------------------------------------------ | ------------------------------------------------------------------------------- |
| -28.6% |    -2 | 77.8% → 83.3% |   7 → 5 | `Rails::HTML::Concern::Scrubber::SafeList#scrub` | `/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/sanitizer.rb` |
| -50.0% |    -1 | 22.2% → 16.7% |   2 → 1 | `block in scrub!`                                | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`                   |

##### `Hash#[] [c function]` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                       | Location                                                          |
| ------: | ----: | -----------: | ------: | ---------------------------- | ----------------------------------------------------------------- |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `block in lookup`            | `/usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/simple.rb`   |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `Rack::Headers#[]`           | `/usr/local/bundle/gems/rack-3.2.7/lib/rack/headers.rb`           |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `I18n::Locale::Fallbacks#[]` | `/usr/local/bundle/gems/i18n-1.15.2/lib/i18n/locale/fallbacks.rb` |

##### `I18n::Backend::Simple::Implementation#lookup` (`/usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/simple.rb`)

|  Change | Delta |             % | Samples | Caller                          | Location                                                      |
| ------: | ----: | ------------: | ------: | ------------------------------- | ------------------------------------------------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `I18n::Backend::Base#translate` | `/usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/base.rb` |

##### `String#sub [c function]` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                                                         | Location                                                                                   |
| ------: | ----: | -----------: | ------: | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `ActionView::StructuredEventSubscriber::Start#start`           | `/usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/structured_event_subscriber.rb` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `ActionDispatch::Http::URL#host`                               | `/usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/http/url.rb`                |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `ActionView::StructuredEventSubscriber::Utils#from_rails_root` | `/usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/structured_event_subscriber.rb` |

##### `OpenSSL::HMAC#initialize [c function]` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                   | Location    |
| -----: | ----: | -----: | ------: | ------------------------ | ----------- |
| -50.0% |    -3 | 100.0% |   6 → 3 | `Class#new [c function]` | `<unknown>` |

##### `Kernel#respond_to? [c function]` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                                               | Location                                                                                 |
| ------: | ----: | -----------: | ------: | ---------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `ActionView::Helpers::ControllerHelper#respond_to?`  | `/usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/helpers/controller_helper.rb` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `Rails::Rack::Logger#finish_request_instrumentation` | `/usr/local/bundle/gems/railties-8.1.4/lib/rails/rack/logger.rb`                         |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `Rack::Sendfile#call`                                | `/usr/local/bundle/gems/rack-3.2.7/lib/rack/sendfile.rb`                                 |

##### `Kernel#lambda [c function]` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                           | Location                                                                              |
| -----: | ----: | -----: | ------: | -------------------------------- | ------------------------------------------------------------------------------------- |
| -42.9% |    -3 | 100.0% |   7 → 4 | `Nokogiri::HTML5::Node#write_to` | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/node.rb` |

##### `Nokogiri::XML::Attr#value= [c function]` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                       | Location                                                         |
| -----: | ----: | -----: | ------: | -------------------------------------------- | ---------------------------------------------------------------- |
| -33.3% |    -3 | 100.0% |   9 → 6 | `block in force_correct_attribute_escaping!` | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb` |

##### `ERB::Util.html_escape [c function]` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                        | Location                                                                             |
| -----: | ----: | -----: | ------: | --------------------------------------------- | ------------------------------------------------------------------------------------ |
| -30.0% |    -3 | 100.0% |  10 → 7 | `ActiveSupport::CoreExt::ERBUtil#html_escape` | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/core_ext/erb/util.rb` |

##### `JSON::Ext::Generator::State#generate [c function]` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller             | Location                                               |
| ------: | ----: | ------------: | ------: | ------------------ | ------------------------------------------------------ |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `JSON::Coder#dump` | `/usr/local/bundle/gems/json-3.0.2/lib/json/common.rb` |

##### `Hash#each [c function]` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                             | Location                                                                                |
| -----: | ----: | -----: | ------: | ---------------------------------- | --------------------------------------------------------------------------------------- |
| -15.4% |    -2 | 100.0% | 13 → 11 | `Nokogiri::XML::Document#decorate` | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb` |

##### `Regexp#match? [c function]` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                       | Location                                                                                 |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------ | ---------------------------------------------------------------------------------------- |
|  -15.4% |    -2 | 61.9% → 57.9% | 13 → 11 | `String#blank?`                                              | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/core_ext/object/blank.rb` |
|  -16.7% |    -1 | 28.6% → 26.3% |   6 → 5 | `ActionView::Helpers::TagHelper#ensure_valid_html5_tag_name` | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/tag_helper.rb`          |
| removed |    -1 |   4.8% → 0.0% |   1 → 0 | `block in flag_cookies_as_secure!`                           | `/usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/ssl.rb`        |
| +100.0% |    +1 |  4.8% → 10.5% |   1 → 2 | `Loofah::HTML5::Scrub.scrub_uri_attribute`                   | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`                         |
|     new |    +1 |   0.0% → 5.3% |   0 → 1 | `ActionDispatch::FileHandler#compressible?`                  | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/static.rb`       |

##### `OpenSSL::Cipher#initialize [c function]` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                   | Location    |
| -----: | ----: | -----: | ------: | ------------------------ | ----------- |
| -66.7% |    -2 | 100.0% |   3 → 1 | `Class#new [c function]` | `<unknown>` |

##### `Nokogiri::XML::NodeSet#length [c function]` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                        | Location                                                                                |
| ------: | ----: | ------------: | ------: | ----------------------------- | --------------------------------------------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `Nokogiri::XML::NodeSet#each` | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb` |

##### `Symbol#empty? [c function]` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                          | Location                                                      |
| ------: | ----: | ------------: | ------: | ------------------------------- | ------------------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `I18n::Backend::Base#translate` | `/usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/base.rb` |

##### `Nokogiri::XML::Node#to_html` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb`)

| Change | Delta |      % | Samples | Caller             | Location                                                                                |
| -----: | ----: | -----: | ------: | ------------------ | --------------------------------------------------------------------------------------- |
| -50.0% |    -3 | 100.0% |   6 → 3 | `block in to_html` | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb` |

##### `Loofah::HtmlFragmentBehavior::ClassMethods#parse` (`/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`)

| Change | Delta |      % | Samples | Caller                  | Location                                             |
| -----: | ----: | -----: | ------: | ----------------------- | ---------------------------------------------------- |
| -75.0% |    -3 | 100.0% |   4 → 1 | `Loofah.html5_fragment` | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah.rb` |

##### `Rack::Request::Env#get_header` (`/usr/local/bundle/gems/rack-3.2.7/lib/rack/request.rb`)

|  Change | Delta |            % | Samples | Caller                                                              | Location                                                                              |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `Rack::Request::Helpers#request_method`                             | `/usr/local/bundle/gems/rack-3.2.7/lib/rack/request.rb`                               |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `Rack::Request::Helpers#script_name`                                | `/usr/local/bundle/gems/rack-3.2.7/lib/rack/request.rb`                               |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `ActionDispatch::RequestCookieMethods#encrypted_signed_cookie_salt` | `/usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/cookies.rb` |

##### `ActionView::PathRegistry.get_view_paths` (`/usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/path_registry.rb`)

|  Change | Delta |            % | Samples | Caller                                            | Location                                                                     |
| ------: | ----: | -----------: | ------: | ------------------------------------------------- | ---------------------------------------------------------------------------- |
| removed |    -2 | 66.7% → 0.0% |   2 → 0 | `ActionView::ViewPaths::ClassMethods#_view_paths` | `/usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/view_paths.rb`    |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `ActionView::PathRegistry.get_view_paths`         | `/usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/path_registry.rb` |

##### `Rack::ETag#call` (`/usr/local/bundle/gems/rack-3.2.7/lib/rack/etag.rb`)

|  Change | Delta |             % | Samples | Caller                      | Location                                                        |
| ------: | ----: | ------------: | ------: | --------------------------- | --------------------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `Rack::ConditionalGet#call` | `/usr/local/bundle/gems/rack-3.2.7/lib/rack/conditional_get.rb` |

##### `ActionView::Rendering#_process_render_template_options` (`/usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/rendering.rb`)

|  Change | Delta |             % | Samples | Caller                                                 | Location                                                               |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------ | ---------------------------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `ActionView::Layouts#_process_render_template_options` | `/usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/layouts.rb` |

##### `block (2 levels) in generate_url_helpers` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb`)

|  Change | Delta |            % | Samples | Caller                                                        | Location                                                                           |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `ActionDispatch::Routing::UrlFor#optimize_routes_generation?` | `/usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/routing/url_for.rb` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `ActionController::UrlFor#url_options`                        | `/usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_controller/metal/url_for.rb` |

##### `Nokogiri::HTML5::Node#write_to` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/node.rb`)

| Change | Delta |      % | Samples | Caller                          | Location                                                                            |
| -----: | ----: | -----: | ------: | ------------------------------- | ----------------------------------------------------------------------------------- |
| -14.3% |    -2 | 100.0% | 14 → 12 | `Nokogiri::XML::Node#serialize` | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb` |

##### `ActionView::Helpers::TagHelper::TagBuilder#content_tag_string` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/tag_helper.rb`)

| Change | Delta |      % | Samples | Caller                                       | Location                                                                        |
| -----: | ----: | -----: | ------: | -------------------------------------------- | ------------------------------------------------------------------------------- |
| -33.3% |    -2 | 100.0% |   6 → 4 | `ActionView::Helpers::TagHelper#content_tag` | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/tag_helper.rb` |

##### `ActionView::Helpers::ControllerHelper#response` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                          | Location                                                                                |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `ActionView::Helpers::AssetTagHelper#send_preload_links_header` | `/usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/helpers/asset_tag_helper.rb` |

##### `#<Class:0xffff76d571d8>#_app_views_layouts_application_html_erb___4441820961383043729_3160` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                            | Location    |
| ------: | ----: | ------------: | ------: | --------------------------------- | ----------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `Kernel#public_send [c function]` | `<unknown>` |

##### `String#unpack` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                                      | Location                                                                         |
| ------: | ----: | -----------: | ------: | ------------------------------------------- | -------------------------------------------------------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `block in parse`                            | `/usr/local/bundle/gems/tzinfo-2.0.6/lib/tzinfo/data_sources/zoneinfo_reader.rb` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `TZInfo::DataSources::ZoneinfoReader#parse` | `/usr/local/bundle/gems/tzinfo-2.0.6/lib/tzinfo/data_sources/zoneinfo_reader.rb` |

##### `Time.now` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller   | Location       |
| ------: | ----: | ------------: | ------: | -------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `<main>` | `./profile.rb` |

##### `ActionController::Base::HelperMethods#content_security_policy?` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                        | Location                                                                          |
| ------: | ----: | ------------: | ------: | --------------------------------------------- | --------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `ActionView::Helpers::CspHelper#csp_meta_tag` | `/usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/helpers/csp_helper.rb` |

##### `I18n::Base#default_separator` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                      | Location                                         |
| ------: | ----: | ------------: | ------: | --------------------------- | ------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `I18n::Base#normalize_keys` | `/usr/local/bundle/gems/i18n-1.15.2/lib/i18n.rb` |

##### `ApplicationController#_layout` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                       | Location    |
| ------: | ----: | ------------: | ------: | ---------------------------- | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `StatusesController#_layout` | `<unknown>` |

##### `Kernel#Float` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                          | Location                                                                             |
| ------: | ----: | ------------: | ------: | ----------------------------------------------- | ------------------------------------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `ActionView::Helpers::NumberHelper#parse_float` | `/usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/helpers/number_helper.rb` |

##### `ActionController::Metal#session` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                                | Location                                                                                              |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `ActionController::RequestForgeryProtection#protect_against_forgery?` | `/usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_controller/metal/request_forgery_protection.rb` |

##### `Ractor.make_shareable` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                 | Location    |
| ------: | ----: | ------------: | ------: | -------------------------------------- | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `Kernel#require_relative [c function]` | `<unknown>` |

##### `Array#select` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                      | Location                                                                         |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------- | -------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `ActionView::FileSystemResolver#filter_and_sort_by_details` | `/usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/template/resolver.rb` |

##### `Hash#initialize` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                         | Location                                                                             |
| ------: | ----: | ------------: | ------: | ---------------------------------------------- | ------------------------------------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `ActiveSupport::InheritableOptions#initialize` | `/usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/ordered_options.rb` |

### Total samples

#### Regressions

Functions with the largest increase in samples collected within the function and its callees. Categories account for at least 1.0% of self samples on the base or the current side.

| Change | Delta |             % |       Samples | Function                                                                              | Location                                                                                         |
| -----: | ----: | ------------: | ------------: | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| +12.5% |   +93 | 47.7% → 53.7% |     742 → 835 | `ActionView::Helpers::SanitizeHelper#sanitize`                                        | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/sanitize_helper.rb`             |
| +12.3% |   +91 | 47.5% → 53.4% |     739 → 830 | `Rails::HTML::Concern::ComposedSanitize#sanitize`                                     | `/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/sanitizer.rb`                  |
| +39.4% |   +61 | 10.0% → 13.9% |     155 → 216 | `Rails::HTML::PermitScrubber#scrub`                                                   | `/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`                  |
| +79.5% |   +58 |   4.7% → 8.4% |      73 → 131 | `Kernel#extend [c function]`                                                          | `<unknown>`                                                                                      |
| +74.7% |   +56 |   4.8% → 8.4% |      75 → 131 | `block (2 levels) in decorate`                                                        | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`          |
| +80.0% |   +56 |   4.5% → 8.1% |      70 → 126 | `Module#extend_object [c function]`                                                   | `<unknown>`                                                                                      |
| +38.5% |   +50 |  8.4% → 11.6% |     130 → 180 | `Rails::HTML::PermitScrubber#scrub_attributes`                                        | `/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`                  |
| +25.3% |   +45 | 11.4% → 14.3% |     178 → 223 | `Loofah.html5_fragment`                                                               | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah.rb`                                             |
| +24.6% |   +44 | 11.5% → 14.3% |     179 → 223 | `Rails::HTML::Concern::Parser::HTML5#parse_fragment`                                  | `/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/sanitizer.rb`                  |
| +24.2% |   +43 | 11.4% → 14.2% |     178 → 221 | `Loofah::HtmlFragmentBehavior::ClassMethods#parse`                                    | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`                                    |
|  +3.4% |   +42 | 79.3% → 82.0% | 1,233 → 1,275 | `block in _app_views_statuses_index_html_erb__328993190567029661_3128`                | `<unknown>`                                                                                      |
|  +3.3% |   +41 | 79.5% → 82.1% | 1,236 → 1,277 | `#<Class:0xffff76d571d8>#_app_views_statuses_index_html_erb__328993190567029661_3128` | `<unknown>`                                                                                      |
|  +3.3% |   +41 | 79.5% → 82.1% | 1,236 → 1,277 | `block (2 levels) in render_template`                                                 | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`          |
|  +3.3% |   +41 | 79.7% → 82.3% | 1,239 → 1,280 | `block in render_template`                                                            | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`          |
| +31.1% |   +38 |  7.8% → 10.3% |     122 → 160 | `Nokogiri::XML::DocumentFragment.new`                                                 | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document_fragment.rb` |
| +24.0% |   +35 |  9.4% → 11.6% |     146 → 181 | `Nokogiri::XML::Document#decorate`                                                    | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`          |
| +23.6% |   +34 |  9.3% → 11.4% |     144 → 178 | `Hash#each [c function]`                                                              | `<unknown>`                                                                                      |
| +45.8% |   +33 |   4.6% → 6.8% |      72 → 105 | `Rails::HTML::PermitScrubber#scrub_attribute`                                         | `/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`                  |
| +38.4% |   +33 |   5.5% → 7.7% |      86 → 119 | `block in scrub_attributes`                                                           | `/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`                  |
|  +2.5% |   +32 | 83.0% → 85.1% | 1,291 → 1,323 | `block in render_with_layout`                                                         | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`          |

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

| Change | Delta |             % |       Samples | Function                                                | Location                                                                                         |
| -----: | ----: | ------------: | ------------: | ------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| +12.5% |   +93 | 47.7% → 53.7% |     742 → 835 | `ActionView::Helpers::SanitizeHelper#sanitize`          | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/sanitize_helper.rb`             |
| +12.3% |   +91 | 47.5% → 53.4% |     739 → 830 | `Rails::HTML::Concern::ComposedSanitize#sanitize`       | `/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/sanitizer.rb`                  |
| +39.4% |   +61 | 10.0% → 13.9% |     155 → 216 | `Rails::HTML::PermitScrubber#scrub`                     | `/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`                  |
| +74.7% |   +56 |   4.8% → 8.4% |      75 → 131 | `block (2 levels) in decorate`                          | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`          |
| +38.5% |   +50 |  8.4% → 11.6% |     130 → 180 | `Rails::HTML::PermitScrubber#scrub_attributes`          | `/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`                  |
| +25.3% |   +45 | 11.4% → 14.3% |     178 → 223 | `Loofah.html5_fragment`                                 | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah.rb`                                             |
| +24.6% |   +44 | 11.5% → 14.3% |     179 → 223 | `Rails::HTML::Concern::Parser::HTML5#parse_fragment`    | `/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/sanitizer.rb`                  |
| +24.2% |   +43 | 11.4% → 14.2% |     178 → 221 | `Loofah::HtmlFragmentBehavior::ClassMethods#parse`      | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`                                    |
|  +3.3% |   +41 | 79.5% → 82.1% | 1,236 → 1,277 | `block (2 levels) in render_template`                   | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`          |
|  +3.3% |   +41 | 79.7% → 82.3% | 1,239 → 1,280 | `block in render_template`                              | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`          |
| +31.1% |   +38 |  7.8% → 10.3% |     122 → 160 | `Nokogiri::XML::DocumentFragment.new`                   | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document_fragment.rb` |
| +24.0% |   +35 |  9.4% → 11.6% |     146 → 181 | `Nokogiri::XML::Document#decorate`                      | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`          |
| +45.8% |   +33 |   4.6% → 6.8% |      72 → 105 | `Rails::HTML::PermitScrubber#scrub_attribute`           | `/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`                  |
| +38.4% |   +33 |   5.5% → 7.7% |      86 → 119 | `block in scrub_attributes`                             | `/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`                  |
|  +2.5% |   +32 | 83.0% → 85.1% | 1,291 → 1,323 | `block in render_with_layout`                           | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`          |
|  +2.5% |   +32 | 83.0% → 85.1% | 1,291 → 1,323 | `block in instrument`                                   | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`                 |
|  +2.5% |   +32 | 83.2% → 85.2% | 1,293 → 1,325 | `ActiveSupport::Notifications::Instrumenter#instrument` | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications/instrumenter.rb`    |
|  +2.4% |   +32 | 85.9% → 87.9% | 1,335 → 1,367 | `ActionDispatch::Routing::RouteSet::Dispatcher#serve`   | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb`               |
| +25.4% |   +32 |  8.1% → 10.2% |     126 → 158 | `block in decorate`                                     | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`          |
|  +2.4% |   +31 | 82.8% → 84.8% | 1,288 → 1,319 | `ActionView::Template#instrument_render_template`       | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/template.rb`                            |

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

Functions with the largest decrease in samples collected within the function and its callees. Categories account for at least 1.0% of self samples on the base or the current side.

| Change | Delta |             % |   Samples | Function                                                                          | Location                                                                                                       |
| -----: | ----: | ------------: | --------: | --------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| -40.7% |  -101 |  15.9% → 9.5% | 248 → 147 | `ActiveSupport::NumberHelper::NumberConverter#i18n_format_options`                | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb`              |
| -37.0% |   -98 | 17.0% → 10.7% | 265 → 167 | `ActiveSupport::NumberHelper::NumberConverter#format_options`                     | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb`              |
| -35.1% |   -94 | 17.2% → 11.2% | 268 → 174 | `ActiveSupport::NumberHelper::NumberConverter#options`                            | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb`              |
| -34.9% |   -94 | 17.3% → 11.3% | 269 → 175 | `ActiveSupport::NumberHelper::NumberToDelimitedConverter#delimiter_pattern`       | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_to_delimited_converter.rb` |
| -30.1% |   -94 | 20.1% → 14.0% | 312 → 218 | `ActiveSupport::NumberHelper::NumberToDelimitedConverter#convert`                 | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_to_delimited_converter.rb` |
| -29.1% |   -93 | 20.6% → 14.6% | 320 → 227 | `ActiveSupport::NumberHelper::NumberConverter#execute`                            | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb`              |
| -30.3% |   -92 | 19.5% → 13.6% | 304 → 212 | `ActiveSupport::NumberHelper::NumberToDelimitedConverter#parts`                   | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_to_delimited_converter.rb` |
| -25.2% |   -81 | 20.7% → 15.5% | 322 → 241 | `ActiveSupport::NumberHelper::NumberConverter.convert`                            | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb`              |
| -25.1% |   -81 | 20.8% → 15.6% | 323 → 242 | `ActiveSupport::NumberHelper#number_to_delimited`                                 | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper.rb`                               |
| -24.2% |   -79 | 21.0% → 15.9% | 326 → 247 | `block in delegate_number_helper_method`                                          | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/number_helper.rb`                             |
| -23.8% |   -79 | 21.4% → 16.3% | 332 → 253 | `ActionView::Helpers::NumberHelper#wrap_with_output_safety_handling`              | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/number_helper.rb`                             |
| -21.7% |   -73 | 21.6% → 16.9% | 336 → 263 | `ActionView::Helpers::NumberHelper#delegate_number_helper_method`                 | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/number_helper.rb`                             |
| -18.8% |   -63 | 21.6% → 17.6% | 336 → 273 | `ActionView::Helpers::NumberHelper#number_with_delimiter`                         | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/number_helper.rb`                             |
| -50.9% |   -29 |   3.7% → 1.8% |   57 → 28 | `String#encode [c function]`                                                      | `<unknown>`                                                                                                    |
| -29.5% |   -28 |   6.1% → 4.3% |   95 → 67 | `Rack::ETag#digest_body`                                                          | `/usr/local/bundle/gems/rack-3.2.7/lib/rack/etag.rb`                                                           |
| -28.7% |   -27 |   6.0% → 4.3% |   94 → 67 | `Digest::Base#<< [c function]`                                                    | `<unknown>`                                                                                                    |
| -28.7% |   -27 |   6.0% → 4.3% |   94 → 67 | `block in digest_body`                                                            | `/usr/local/bundle/gems/rack-3.2.7/lib/rack/etag.rb`                                                           |
| -69.7% |   -23 |   2.1% → 0.6% |   33 → 10 | `block (2 levels) in _app_views_statuses_index_html_erb__328993190567029661_3128` | `<unknown>`                                                                                                    |
| -52.8% |   -19 |   2.3% → 1.1% |   36 → 17 | `block in evaluate`                                                               | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/visitors.rb`                              |
| -54.8% |   -17 |   2.0% → 0.9% |   31 → 14 | `ActionDispatch::Journey::Router::Utils::UriEncoder#escape_segment`               | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router/utils.rb`                          |

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

| Change | Delta |             % |   Samples | Function                                                                    | Location                                                                                                       |
| -----: | ----: | ------------: | --------: | --------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| -40.7% |  -101 |  15.9% → 9.5% | 248 → 147 | `ActiveSupport::NumberHelper::NumberConverter#i18n_format_options`          | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb`              |
| -37.0% |   -98 | 17.0% → 10.7% | 265 → 167 | `ActiveSupport::NumberHelper::NumberConverter#format_options`               | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb`              |
| -35.1% |   -94 | 17.2% → 11.2% | 268 → 174 | `ActiveSupport::NumberHelper::NumberConverter#options`                      | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb`              |
| -34.9% |   -94 | 17.3% → 11.3% | 269 → 175 | `ActiveSupport::NumberHelper::NumberToDelimitedConverter#delimiter_pattern` | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_to_delimited_converter.rb` |
| -30.1% |   -94 | 20.1% → 14.0% | 312 → 218 | `ActiveSupport::NumberHelper::NumberToDelimitedConverter#convert`           | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_to_delimited_converter.rb` |
| -29.1% |   -93 | 20.6% → 14.6% | 320 → 227 | `ActiveSupport::NumberHelper::NumberConverter#execute`                      | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb`              |
| -30.3% |   -92 | 19.5% → 13.6% | 304 → 212 | `ActiveSupport::NumberHelper::NumberToDelimitedConverter#parts`             | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_to_delimited_converter.rb` |
| -25.2% |   -81 | 20.7% → 15.5% | 322 → 241 | `ActiveSupport::NumberHelper::NumberConverter.convert`                      | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb`              |
| -25.1% |   -81 | 20.8% → 15.6% | 323 → 242 | `ActiveSupport::NumberHelper#number_to_delimited`                           | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper.rb`                               |
| -24.2% |   -79 | 21.0% → 15.9% | 326 → 247 | `block in delegate_number_helper_method`                                    | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/number_helper.rb`                             |
| -23.8% |   -79 | 21.4% → 16.3% | 332 → 253 | `ActionView::Helpers::NumberHelper#wrap_with_output_safety_handling`        | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/number_helper.rb`                             |
| -21.7% |   -73 | 21.6% → 16.9% | 336 → 263 | `ActionView::Helpers::NumberHelper#delegate_number_helper_method`           | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/number_helper.rb`                             |
| -18.8% |   -63 | 21.6% → 17.6% | 336 → 273 | `ActionView::Helpers::NumberHelper#number_with_delimiter`                   | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/number_helper.rb`                             |
| -29.5% |   -28 |   6.1% → 4.3% |   95 → 67 | `Rack::ETag#digest_body`                                                    | `/usr/local/bundle/gems/rack-3.2.7/lib/rack/etag.rb`                                                           |
| -28.7% |   -27 |   6.0% → 4.3% |   94 → 67 | `block in digest_body`                                                      | `/usr/local/bundle/gems/rack-3.2.7/lib/rack/etag.rb`                                                           |
| -52.8% |   -19 |   2.3% → 1.1% |   36 → 17 | `block in evaluate`                                                         | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/visitors.rb`                              |
| -54.8% |   -17 |   2.0% → 0.9% |   31 → 14 | `ActionDispatch::Journey::Router::Utils::UriEncoder#escape_segment`         | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router/utils.rb`                          |
| -54.8% |   -17 |   2.0% → 0.9% |   31 → 14 | `ActionDispatch::Journey::Router::Utils.escape_segment`                     | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router/utils.rb`                          |
| -51.6% |   -16 |   2.0% → 1.0% |   31 → 15 | `block in <class:Format>`                                                   | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/visitors.rb`                              |
| -51.6% |   -16 |   2.0% → 1.0% |   31 → 15 | `ActionDispatch::Journey::Format::Parameter#escape`                         | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/visitors.rb`                              |

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

#### Callers

Callers with the largest change in contribution to each function's total samples. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `ActionView::Helpers::SanitizeHelper#sanitize` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/sanitize_helper.rb`)

| Change | Delta |      % |   Samples | Caller                                                                 | Location    |
| -----: | ----: | -----: | --------: | ---------------------------------------------------------------------- | ----------- |
| +12.5% |   +93 | 100.0% | 742 → 835 | `block in _app_views_statuses_index_html_erb__328993190567029661_3128` | `<unknown>` |

##### `Rails::HTML::Concern::ComposedSanitize#sanitize` (`/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/sanitizer.rb`)

| Change | Delta |      % |   Samples | Caller                                         | Location                                                                             |
| -----: | ----: | -----: | --------: | ---------------------------------------------- | ------------------------------------------------------------------------------------ |
| +12.3% |   +91 | 100.0% | 739 → 830 | `ActionView::Helpers::SanitizeHelper#sanitize` | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/sanitize_helper.rb` |

##### `Rails::HTML::PermitScrubber#scrub` (`/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`)

| Change | Delta |      % |   Samples | Caller                                              | Location                                                      |
| -----: | ----: | -----: | --------: | --------------------------------------------------- | ------------------------------------------------------------- |
| +39.4% |   +61 | 100.0% | 155 → 216 | `Loofah::Scrubber#traverse_conditionally_bottom_up` | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/scrubber.rb` |

##### `Kernel#extend [c function]` (`<unknown>`)

| Change | Delta |              % |  Samples | Caller                         | Location                                                                                |
| -----: | ----: | -------------: | -------: | ------------------------------ | --------------------------------------------------------------------------------------- |
| +76.7% |   +56 | 100.0% → 98.5% | 73 → 129 | `block (2 levels) in decorate` | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb` |
|    new |    +2 |    0.0% → 1.5% |    0 → 2 | `Kernel.require [c function]`  | `<unknown>`                                                                             |

##### `block (2 levels) in decorate` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`)

| Change | Delta |      % |  Samples | Caller       | Location    |
| -----: | ----: | -----: | -------: | ------------ | ----------- |
| +74.7% |   +56 | 100.0% | 75 → 131 | `Array#each` | `<unknown>` |

##### `Module#extend_object [c function]` (`<unknown>`)

| Change | Delta |      % |  Samples | Caller                       | Location    |
| -----: | ----: | -----: | -------: | ---------------------------- | ----------- |
| +80.0% |   +56 | 100.0% | 70 → 126 | `Kernel#extend [c function]` | `<unknown>` |

##### `Rails::HTML::PermitScrubber#scrub_attributes` (`/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`)

| Change | Delta |      % |   Samples | Caller                              | Location                                                                        |
| -----: | ----: | -----: | --------: | ----------------------------------- | ------------------------------------------------------------------------------- |
| +38.5% |   +50 | 100.0% | 130 → 180 | `Rails::HTML::PermitScrubber#scrub` | `/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb` |

##### `Loofah.html5_fragment` (`/usr/local/bundle/gems/loofah-2.25.2/lib/loofah.rb`)

| Change | Delta |      % |   Samples | Caller                                               | Location                                                                        |
| -----: | ----: | -----: | --------: | ---------------------------------------------------- | ------------------------------------------------------------------------------- |
| +25.3% |   +45 | 100.0% | 178 → 223 | `Rails::HTML::Concern::Parser::HTML5#parse_fragment` | `/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/sanitizer.rb` |

##### `Rails::HTML::Concern::Parser::HTML5#parse_fragment` (`/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/sanitizer.rb`)

| Change | Delta |      % |   Samples | Caller                                            | Location                                                                        |
| -----: | ----: | -----: | --------: | ------------------------------------------------- | ------------------------------------------------------------------------------- |
| +24.6% |   +44 | 100.0% | 179 → 223 | `Rails::HTML::Concern::ComposedSanitize#sanitize` | `/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/sanitizer.rb` |

##### `Loofah::HtmlFragmentBehavior::ClassMethods#parse` (`/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`)

| Change | Delta |      % |   Samples | Caller                  | Location                                             |
| -----: | ----: | -----: | --------: | ----------------------- | ---------------------------------------------------- |
| +24.2% |   +43 | 100.0% | 178 → 221 | `Loofah.html5_fragment` | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah.rb` |

##### `block in _app_views_statuses_index_html_erb__328993190567029661_3128` (`<unknown>`)

| Change | Delta |      % |       Samples | Caller       | Location    |
| -----: | ----: | -----: | ------------: | ------------ | ----------- |
|  +3.4% |   +42 | 100.0% | 1,233 → 1,275 | `Array#each` | `<unknown>` |

##### `#<Class:0xffff76d571d8>#_app_views_statuses_index_html_erb__328993190567029661_3128` (`<unknown>`)

| Change | Delta |      % |       Samples | Caller                            | Location    |
| -----: | ----: | -----: | ------------: | --------------------------------- | ----------- |
|  +3.3% |   +41 | 100.0% | 1,236 → 1,277 | `Kernel#public_send [c function]` | `<unknown>` |

##### `block (2 levels) in render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`)

| Change | Delta |      % |       Samples | Caller                | Location                                                                         |
| -----: | ----: | -----: | ------------: | --------------------- | -------------------------------------------------------------------------------- |
|  +3.3% |   +41 | 100.0% | 1,236 → 1,277 | `block in instrument` | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb` |

##### `block in render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`)

| Change | Delta |      % |       Samples | Caller                        | Location                                                                                |
| -----: | ----: | -----: | ------------: | ----------------------------- | --------------------------------------------------------------------------------------- |
|  +3.3% |   +41 | 100.0% | 1,239 → 1,280 | `block in render_with_layout` | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb` |

##### `Nokogiri::XML::DocumentFragment.new` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document_fragment.rb`)

| Change | Delta |      % |   Samples | Caller                                             | Location                                                      |
| -----: | ----: | -----: | --------: | -------------------------------------------------- | ------------------------------------------------------------- |
| +31.1% |   +38 | 100.0% | 122 → 160 | `Loofah::HtmlFragmentBehavior::ClassMethods#parse` | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb` |

##### `Nokogiri::XML::Document#decorate` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`)

|  Change | Delta |             % | Samples | Caller                                                    | Location    |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------- | ----------- |
| +133.3% |   +20 | 10.3% → 19.3% | 15 → 35 | `Nokogiri::XML::DocumentFragment.native_new [c function]` | `<unknown>` |
|  +20.5% |   +16 | 53.4% → 51.9% | 78 → 94 | `Nokogiri::XML::Node#children [c function]`               | `<unknown>` |
|   -3.6% |    -1 | 19.2% → 14.9% | 28 → 27 | `Nokogiri::XML::Node#attribute_nodes [c function]`        | `<unknown>` |

##### `Hash#each [c function]` (`<unknown>`)

|  Change | Delta |             % |   Samples | Caller                                     | Location                                                                                |
| ------: | ----: | ------------: | --------: | ------------------------------------------ | --------------------------------------------------------------------------------------- |
|  +21.6% |   +30 | 96.5% → 94.9% | 139 → 169 | `Nokogiri::XML::Document#decorate`         | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb` |
|  +50.0% |    +1 |   1.4% → 1.7% |     2 → 3 | `ActionDispatch::Cookies::CookieJar#write` | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/cookies.rb`     |
|  +50.0% |    +1 |   1.4% → 1.7% |     2 → 3 | `block in eager_load`                      | `/usr/local/bundle/gems/zeitwerk-2.8.3/lib/zeitwerk/loader/eager_load.rb`               |
| +100.0% |    +1 |   0.7% → 1.1% |     1 → 2 | `Enumerable#map [c function]`              | `<unknown>`                                                                             |
|     new |    +1 |   0.0% → 0.6% |     0 → 1 | `ActionView::Base#assign`                  | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/base.rb`                       |

##### `Rails::HTML::PermitScrubber#scrub_attribute` (`/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`)

| Change | Delta |      % |  Samples | Caller                      | Location                                                                        |
| -----: | ----: | -----: | -------: | --------------------------- | ------------------------------------------------------------------------------- |
| +45.8% |   +33 | 100.0% | 72 → 105 | `block in scrub_attributes` | `/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb` |

##### `block in scrub_attributes` (`/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`)

| Change | Delta |      % |  Samples | Caller       | Location    |
| -----: | ----: | -----: | -------: | ------------ | ----------- |
| +38.4% |   +33 | 100.0% | 86 → 119 | `Array#each` | `<unknown>` |

##### `block in render_with_layout` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`)

| Change | Delta |      % |       Samples | Caller                | Location                                                                         |
| -----: | ----: | -----: | ------------: | --------------------- | -------------------------------------------------------------------------------- |
|  +2.5% |   +32 | 100.0% | 1,291 → 1,323 | `block in instrument` | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb` |

##### `Kernel#public_send [c function]` (`<unknown>`)

| Change | Delta |             % |       Samples | Caller                                   | Location                                                                           |
| -----: | ----: | ------------: | ------------: | ---------------------------------------- | ---------------------------------------------------------------------------------- |
| -24.5% |   -80 | 25.3% → 18.7% |     326 → 246 | `block in delegate_number_helper_method` | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/number_helper.rb` |
|  +2.2% |   +28 |        100.0% | 1,288 → 1,316 | `ActionView::Base#_run`                  | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/base.rb`                  |

##### `Nokogiri::XML::Node#html_standard_serialize [c function]` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller                           | Location                                                                              |
| ------: | ----: | -----: | ------: | -------------------------------- | ------------------------------------------------------------------------------------- |
| +105.0% |   +21 | 100.0% | 20 → 41 | `Nokogiri::HTML5::Node#write_to` | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/node.rb` |

##### `String.new [c function]` (`<unknown>`)

|   Change | Delta |             % | Samples | Caller                          | Location                                                                                         |
| -------: | ----: | ------------: | ------: | ------------------------------- | ------------------------------------------------------------------------------------------------ |
| +1500.0% |   +15 |  7.7% → 47.1% |  1 → 16 | `Nokogiri::XML::Node#serialize` | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb`              |
|   +50.0% |    +6 | 92.3% → 52.9% | 12 → 18 | `String#html_safe`              | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/core_ext/string/output_safety.rb` |

##### `Integer#upto [c function]` (`<unknown>`)

| Change | Delta |             % |   Samples | Caller                         | Location                                                                                |
| -----: | ----: | ------------: | --------: | ------------------------------ | --------------------------------------------------------------------------------------- |
|  +4.0% |   +18 | 98.0% → 97.7% | 448 → 466 | `Nokogiri::XML::NodeSet#each`  | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb` |
| +22.2% |    +2 |   2.0% → 2.3% |    9 → 11 | `Enumerator#each [c function]` | `<unknown>`                                                                             |

##### `Nokogiri::XML::DocumentFragment.native_new [c function]` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller                                | Location                                                                                         |
| ------: | ----: | -----: | ------: | ------------------------------------- | ------------------------------------------------------------------------------------------------ |
| +105.3% |   +20 | 100.0% | 19 → 39 | `Nokogiri::XML::DocumentFragment.new` | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document_fragment.rb` |

##### `Nokogiri::XML::Node#children [c function]` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                                              | Location                                                      |
| -----: | ----: | ------------: | ------: | --------------------------------------------------- | ------------------------------------------------------------- |
| +30.3% |   +10 | 33.7% → 37.1% | 33 → 43 | `Loofah::ScrubBehavior::Node#scrub!`                | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb` |
| +16.7% |    +8 | 49.0% → 48.3% | 48 → 56 | `Loofah::Scrubber#traverse_conditionally_bottom_up` | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/scrubber.rb` |

##### `Kernel#dup [c function]` (`<unknown>`)

|   Change | Delta |             % | Samples | Caller                                                                | Location                                                                                          |
| -------: | ----: | ------------: | ------: | --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| +1000.0% |   +10 |  5.0% → 28.9% |  1 → 11 | `ActionController::UrlFor#url_options`                                | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/url_for.rb`                  |
|  +125.0% |    +5 | 20.0% → 23.7% |   4 → 9 | `ActiveSupport::NumberHelper::NumberConverter#i18n_format_options`    | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb` |
|      new |    +5 |  0.0% → 13.2% |   0 → 5 | `ActionDispatch::Journey::Format#evaluate`                            | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/visitors.rb`                 |
|  removed |    -3 |  15.0% → 0.0% |   3 → 0 | `Rails::HTML::PermitScrubber#attributes=`                             | `/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`                   |
|   +25.0% |    +2 | 40.0% → 26.3% |  8 → 10 | `ActiveSupport::NumberHelper::NumberConverter#default_format_options` | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb` |

##### `Hash#merge [c function]` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                                                        | Location                                                                                          |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| +100.0% |   +11 | 68.8% → 64.7% | 11 → 22 | `I18n::Backend::Fallbacks#translate`                                                          | `/usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/fallbacks.rb`                                |
| +133.3% |    +4 | 18.8% → 20.6% |   3 → 7 | `ActiveSupport::NumberHelper::NumberConverter#options`                                        | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb` |
| +150.0% |    +3 | 12.5% → 14.7% |   2 → 5 | `ActionDispatch::Routing::RouteSet::NamedRouteCollection::UrlHelper::OptimizedUrlHelper#call` | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb`                |

##### `Nokogiri::Gumbo.fragment [c function]` (`<unknown>`)

| Change | Delta |      % |  Samples | Caller                                         | Location                                                                                           |
| -----: | ----: | -----: | -------: | ---------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| +19.0% |   +16 | 100.0% | 84 → 100 | `Nokogiri::HTML5::DocumentFragment#initialize` | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/document_fragment.rb` |

##### `(unknown) [c function]` (`<unknown>`)

| Change | Delta |             % |   Samples | Caller                        | Location                                                                                |
| -----: | ----: | ------------: | --------: | ----------------------------- | --------------------------------------------------------------------------------------- |
|  +5.6% |    +8 | 71.0% → 69.8% | 142 → 150 | `block in each`               | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb` |
| +23.1% |    +3 |   6.5% → 7.4% |   13 → 16 | `Array#each`                  | `<unknown>`                                                                             |
| +13.3% |    +2 |   7.5% → 7.9% |   15 → 17 | `Kernel.require [c function]` | `<unknown>`                                                                             |
| +22.2% |    +2 |   4.5% → 5.1% |    9 → 11 | `Integer#upto [c function]`   | `<unknown>`                                                                             |
| +12.5% |    +1 |   4.0% → 4.2% |     8 → 9 | `Integer#times`               | `<unknown>`                                                                             |

##### `Hash#transform_keys [c function]` (`<unknown>`)

|   Change | Delta |              % | Samples | Caller                | Location                                                                                |
| -------: | ----: | -------------: | ------: | --------------------- | --------------------------------------------------------------------------------------- |
| +1600.0% |   +16 | 50.0% → 100.0% |  1 → 17 | `Hash#symbolize_keys` | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/core_ext/hash/keys.rb`   |
|  removed |    -1 |   50.0% → 0.0% |   1 → 0 | `Hash#stringify_keys` | `/usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/core_ext/hash/keys.rb` |

##### `Enumerable#map [c function]` (`<unknown>`)

| Change | Delta |             % |   Samples | Caller                                              | Location                                                                                |
| -----: | ----: | ------------: | --------: | --------------------------------------------------- | --------------------------------------------------------------------------------------- |
|  +7.1% |   +11 | 93.9% → 93.8% | 155 → 166 | `Nokogiri::XML::NodeSet#to_html`                    | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb` |
| +12.5% |    +1 |   4.8% → 5.1% |     8 → 9 | `TZInfo::DataSources::ZoneinfoReader#parse`         | `/usr/local/bundle/gems/tzinfo-2.0.6/lib/tzinfo/data_sources/zoneinfo_reader.rb`        |
| -50.0% |    -1 |   1.2% → 0.6% |     2 → 1 | `ActiveSupport::Notifications::Fanout#build_handle` | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications/fanout.rb` |
|    new |    +1 |   0.0% → 0.6% |     0 → 1 | `Kernel#require_relative [c function]`              | `<unknown>`                                                                             |

##### `Class#new [c function]` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                 | Location                                                                                          |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------ | ------------------------------------------------------------------------------------------------- |
| +600.0% |   +12 |  5.3% → 28.0% |  2 → 14 | `ActiveSupport::NumberHelper::NumberConverter.convert` | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb` |
|  -50.0% |    -5 | 26.3% → 10.0% |  10 → 5 | `ActionDispatch::Cookies::ChainedCookieJars#encrypted` | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/cookies.rb`               |
|  -57.1% |    -4 |  18.4% → 6.0% |   7 → 3 | `OpenSSL::HMAC.digest`                                 | `/usr/local/lib/ruby/3.4.0/openssl/hmac.rb`                                                       |
| +150.0% |    +3 |  5.3% → 10.0% |   2 → 5 | `ActionDispatch::Response.create`                      | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/http/response.rb`                    |
| removed |    -2 |   5.3% → 0.0% |   2 → 0 | `ActiveSupport::MessageEncryptor#new_cipher`           | `/usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/message_encryptor.rb`            |

##### `Kernel#catch [c function]` (`<unknown>`)

|  Change | Delta |              % | Samples | Caller                                                            | Location                                                                       |
| ------: | ----: | -------------: | ------: | ----------------------------------------------------------------- | ------------------------------------------------------------------------------ |
|  +16.5% |   +13 | 96.3% → 100.0% | 79 → 92 | `I18n::Base#translate_key`                                        | `/usr/local/bundle/gems/i18n-1.15.2/lib/i18n.rb`                               |
| removed |    -3 |    3.7% → 0.0% |   3 → 0 | `ActiveSupport::Callbacks::CallbackChain::DefaultTerminator#call` | `/usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/callbacks.rb` |
|   -4.8% |    -2 |  51.2% → 43.5% | 42 → 40 | `block in translate`                                              | `/usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/fallbacks.rb`             |
|  +50.0% |    +1 |    2.4% → 3.3% |   2 → 3 | `I18n::Backend::Fallbacks#resolve_entry`                          | `/usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/fallbacks.rb`             |

##### `Nokogiri::HTML4::Document.new [c function]` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                             | Location                                                      |
| -----: | ----: | -----: | ------: | -------------------------------------------------- | ------------------------------------------------------------- |
| +20.8% |   +10 | 100.0% | 48 → 58 | `Loofah::HtmlFragmentBehavior::ClassMethods#parse` | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb` |

##### `Nokogiri::XML::Node#node_name [c function]` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                        | Location                                                                            |
| ------: | ----: | ------------: | ------: | --------------------------------------------- | ----------------------------------------------------------------------------------- |
|     new |    +6 |  0.0% → 31.6% |   0 → 6 | `Rails::HTML::PermitScrubber#scrub_attribute` | `/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`     |
|     new |    +3 |  0.0% → 15.8% |   0 → 3 | `block in force_correct_attribute_escaping!`  | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`                    |
| +200.0% |    +2 | 10.0% → 15.8% |   1 → 3 | `block in attributes`                         | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb` |
|  -20.0% |    -1 | 50.0% → 21.1% |   5 → 4 | `block in scrub_attributes`                   | `/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`     |
|  -25.0% |    -1 | 40.0% → 15.8% |   4 → 3 | `Rails::HTML::PermitScrubber#allowed_node?`   | `/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`     |

##### `Array#join [c function]` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                          | Location                                                                                                       |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
|     new |    +5 |  0.0% → 29.4% |   0 → 5 | `Nokogiri::XML::NodeSet#to_html`                                | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`                        |
|     new |    +4 |  0.0% → 23.5% |   0 → 4 | `ActiveSupport::NumberHelper::NumberToDelimitedConverter#parts` | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_to_delimited_converter.rb` |
| removed |    -2 |  20.0% → 0.0% |   2 → 0 | `ActiveSupport::CachingKeyGenerator#generate_key`               | `/usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/key_generator.rb`                             |
|     new |    +2 |  0.0% → 11.8% |   0 → 2 | `ActionView::Helpers::CsrfHelper#csrf_meta_tags`                | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/csrf_helper.rb`                               |
|  -33.3% |    -1 | 30.0% → 11.8% |   3 → 2 | `ActionDispatch::Journey::Format#evaluate`                      | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/visitors.rb`                              |

##### `block in instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`)

| Change | Delta |      % |       Samples | Caller                                                  | Location                                                                                      |
| -----: | ----: | -----: | ------------: | ------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
|  +2.5% |   +32 | 100.0% | 1,291 → 1,323 | `ActiveSupport::Notifications::Instrumenter#instrument` | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications/instrumenter.rb` |

##### `ActiveSupport::Notifications::Instrumenter#instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications/instrumenter.rb`)

| Change | Delta |      % |       Samples | Caller                                    | Location                                                                         |
| -----: | ----: | -----: | ------------: | ----------------------------------------- | -------------------------------------------------------------------------------- |
|  +2.5% |   +32 | 100.0% | 1,293 → 1,325 | `ActiveSupport::Notifications.instrument` | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb` |

##### `ActionDispatch::Routing::RouteSet::Dispatcher#serve` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb`)

| Change | Delta |      % |       Samples | Caller           | Location                                                                        |
| -----: | ----: | -----: | ------------: | ---------------- | ------------------------------------------------------------------------------- |
|  +2.4% |   +32 | 100.0% | 1,335 → 1,367 | `block in serve` | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router.rb` |

##### `block in decorate` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`)

| Change | Delta |      % |   Samples | Caller                   | Location    |
| -----: | ----: | -----: | --------: | ------------------------ | ----------- |
| +25.4% |   +32 | 100.0% | 126 → 158 | `Hash#each [c function]` | `<unknown>` |

##### `ActionView::Template#instrument_render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/template.rb`)

| Change | Delta |      % |       Samples | Caller                        | Location                                                              |
| -----: | ----: | -----: | ------------: | ----------------------------- | --------------------------------------------------------------------- |
|  +2.4% |   +31 | 100.0% | 1,288 → 1,319 | `ActionView::Template#render` | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/template.rb` |

##### `Array#each` (`<unknown>`)

| Change | Delta |             % |       Samples | Caller                                                                                | Location                                                                                |
| -----: | ----: | ------------: | ------------: | ------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| +74.0% |   +57 |   5.4% → 9.3% |      77 → 134 | `block in decorate`                                                                   | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb` |
|  +3.3% |   +41 | 85.8% → 88.4% | 1,234 → 1,275 | `#<Class:0xffff76d571d8>#_app_views_statuses_index_html_erb__328993190567029661_3128` | `<unknown>`                                                                             |
|  +2.4% |   +32 | 92.9% → 94.9% | 1,336 → 1,368 | `ActionDispatch::Journey::Router#recognize`                                           | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router.rb`         |
| +36.8% |   +32 |   6.1% → 8.3% |      87 → 119 | `Rails::HTML::PermitScrubber#scrub_attributes`                                        | `/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`         |
| -28.7% |   -27 |   6.5% → 4.6% |       94 → 67 | `Rack::ETag#digest_body`                                                              | `/usr/local/bundle/gems/rack-3.2.7/lib/rack/etag.rb`                                    |

##### `Array#map` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                                                    | Location                                                                              |
| ------: | ----: | -----------: | ------: | --------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| +100.0% |    +2 |        50.0% |   2 → 4 | `ActionView::Helpers::AssetTagHelper#stylesheet_link_tag` | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/asset_tag_helper.rb` |
| +100.0% |    +1 |        25.0% |   1 → 2 | `Rack::Response::Helpers#set_cookie`                      | `/usr/local/bundle/gems/rack-3.2.7/lib/rack/response.rb`                              |
|     new |    +1 | 0.0% → 12.5% |   0 → 1 | `ActiveSupport::BroadcastLogger#dispatch`                 | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/broadcast_logger.rb`   |

##### `ActiveSupport::NumberHelper::NumberConverter#namespace` (`<unknown>`)

| Change | Delta |            % | Samples | Caller                                                                | Location                                                                                          |
| -----: | ----: | -----------: | ------: | --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
|    new |    +2 | 0.0% → 66.7% |   0 → 2 | `ActiveSupport::NumberHelper::NumberConverter#i18n_format_options`    | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `ActiveSupport::NumberHelper::NumberConverter#default_format_options` | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb` |

##### `ActiveSupport::NumberHelper::NumberConverter#validate_float` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                                                         | Location    |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------- | ----------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `ActiveSupport::NumberHelper::NumberConverter#validate_float?` | `<unknown>` |

##### `ActiveSupport::NumberHelper::NumberConverter#validate_float?` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                                                 | Location                                                                                          |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------ | ------------------------------------------------------------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `ActiveSupport::NumberHelper::NumberConverter#execute` | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb` |

##### `Time#initialize` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                   | Location    |
| -----: | ----: | ------------: | ------: | ------------------------ | ----------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `Class#new [c function]` | `<unknown>` |

##### `Integer#times` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                                                                     | Location                                                                           |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
|  +12.5% |    +1 | 88.9% → 90.0% |   8 → 9 | `Enumerator#each [c function]`                                                                             | `<unknown>`                                                                        |
| removed |    -1 |  11.1% → 0.0% |   1 → 0 | `Kernel#require_relative [c function]`                                                                     | `<unknown>`                                                                        |
|     new |    +1 |  0.0% → 10.0% |   0 → 1 | `ActionDispatch::Routing::RouteSet::NamedRouteCollection::UrlHelper::OptimizedUrlHelper#parameterize_args` | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb` |

##### `Kernel#tap` (`<unknown>`)

| Change | Delta |            % | Samples | Caller                                                       | Location                                                                            |
| -----: | ----: | -----------: | ------: | ------------------------------------------------------------ | ----------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `ActionDispatch::Cookies::AbstractCookieJar#cookie_metadata` | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/cookies.rb` |

##### `ActiveSupport::NumberHelper::NumberConverter.validate_float` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                                                        | Location    |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------- | ----------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `ActiveSupport::NumberHelper::NumberConverter#validate_float` | `<unknown>` |

##### `ActiveSupport::BroadcastLogger#info` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                         | Location                                                         |
| -----: | ----: | ------------: | ------: | ------------------------------ | ---------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `Rails::Rack::Logger#call_app` | `/usr/local/bundle/gems/railties-8.1.4/lib/rails/rack/logger.rb` |

##### `ActionView::Base.default_formats` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                           | Location                                                                    |
| -----: | ----: | ------------: | ------: | -------------------------------- | --------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `block in <class:LookupContext>` | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/lookup_context.rb` |

##### `ActionController::Base#allow_forgery_protection` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                                                                | Location                                                                                            |
| -----: | ----: | ------------: | ------: | --------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `ActionController::RequestForgeryProtection#protect_against_forgery?` | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/request_forgery_protection.rb` |

##### `ActiveSupport::TaggedLogging#push_tags` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                                          | Location                                                                            |
| -----: | ----: | ------------: | ------: | ----------------------------------------------- | ----------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `ActiveSupport::BroadcastLogger#method_missing` | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/broadcast_logger.rb` |

##### `ActionDispatch::Response.default_headers` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                            | Location                                                                       |
| -----: | ----: | ------------: | ------: | --------------------------------- | ------------------------------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `ActionDispatch::Response.create` | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/http/response.rb` |

##### `ActionController::Base.default_static_extension` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                                                | Location                                                                           |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------- | ---------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `ActionDispatch::FileHandler#each_candidate_filepath` | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/static.rb` |

##### `ActionDispatch::Response.default_charset` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                                   | Location                                                                       |
| -----: | ----: | ------------: | ------: | ---------------------------------------- | ------------------------------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `ActionDispatch::Response#content_type=` | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/http/response.rb` |

##### `ActiveSupport::NumberHelper::NumberConverter#i18n_format_options` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb`)

| Change | Delta |      % |   Samples | Caller                                                        | Location                                                                                          |
| -----: | ----: | -----: | --------: | ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| -40.7% |  -101 | 100.0% | 248 → 147 | `ActiveSupport::NumberHelper::NumberConverter#format_options` | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb` |

##### `ActiveSupport::NumberHelper::NumberConverter#format_options` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb`)

| Change | Delta |      % |   Samples | Caller                                                 | Location                                                                                          |
| -----: | ----: | -----: | --------: | ------------------------------------------------------ | ------------------------------------------------------------------------------------------------- |
| -37.0% |   -98 | 100.0% | 265 → 167 | `ActiveSupport::NumberHelper::NumberConverter#options` | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb` |

##### `ActiveSupport::NumberHelper::NumberConverter#options` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb`)

| Change | Delta |      % |   Samples | Caller                                                                      | Location                                                                                                       |
| -----: | ----: | -----: | --------: | --------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| -35.1% |   -94 | 100.0% | 268 → 174 | `ActiveSupport::NumberHelper::NumberToDelimitedConverter#delimiter_pattern` | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_to_delimited_converter.rb` |

##### `ActiveSupport::NumberHelper::NumberToDelimitedConverter#delimiter_pattern` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_to_delimited_converter.rb`)

| Change | Delta |      % |   Samples | Caller                                                          | Location                                                                                                       |
| -----: | ----: | -----: | --------: | --------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| -34.9% |   -94 | 100.0% | 269 → 175 | `ActiveSupport::NumberHelper::NumberToDelimitedConverter#parts` | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_to_delimited_converter.rb` |

##### `ActiveSupport::NumberHelper::NumberToDelimitedConverter#convert` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_to_delimited_converter.rb`)

| Change | Delta |      % |   Samples | Caller                                                 | Location                                                                                          |
| -----: | ----: | -----: | --------: | ------------------------------------------------------ | ------------------------------------------------------------------------------------------------- |
| -30.1% |   -94 | 100.0% | 312 → 218 | `ActiveSupport::NumberHelper::NumberConverter#execute` | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb` |

##### `ActiveSupport::NumberHelper::NumberConverter#execute` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb`)

| Change | Delta |      % |   Samples | Caller                                                 | Location                                                                                          |
| -----: | ----: | -----: | --------: | ------------------------------------------------------ | ------------------------------------------------------------------------------------------------- |
| -29.1% |   -93 | 100.0% | 320 → 227 | `ActiveSupport::NumberHelper::NumberConverter.convert` | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb` |

##### `ActiveSupport::NumberHelper::NumberToDelimitedConverter#parts` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_to_delimited_converter.rb`)

| Change | Delta |      % |   Samples | Caller                                                            | Location                                                                                                       |
| -----: | ----: | -----: | --------: | ----------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| -30.3% |   -92 | 100.0% | 304 → 212 | `ActiveSupport::NumberHelper::NumberToDelimitedConverter#convert` | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_to_delimited_converter.rb` |

##### `ActiveSupport::NumberHelper::NumberConverter.convert` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb`)

| Change | Delta |      % |   Samples | Caller                                            | Location                                                                         |
| -----: | ----: | -----: | --------: | ------------------------------------------------- | -------------------------------------------------------------------------------- |
| -25.2% |   -81 | 100.0% | 322 → 241 | `ActiveSupport::NumberHelper#number_to_delimited` | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper.rb` |

##### `ActiveSupport::NumberHelper#number_to_delimited` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper.rb`)

| Change | Delta |      % |   Samples | Caller                            | Location    |
| -----: | ----: | -----: | --------: | --------------------------------- | ----------- |
| -25.1% |   -81 | 100.0% | 323 → 242 | `Kernel#public_send [c function]` | `<unknown>` |

##### `block in delegate_number_helper_method` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/number_helper.rb`)

| Change | Delta |      % |   Samples | Caller                                                               | Location                                                                           |
| -----: | ----: | -----: | --------: | -------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| -24.2% |   -79 | 100.0% | 326 → 247 | `ActionView::Helpers::NumberHelper#wrap_with_output_safety_handling` | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/number_helper.rb` |

##### `ActionView::Helpers::NumberHelper#wrap_with_output_safety_handling` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/number_helper.rb`)

| Change | Delta |      % |   Samples | Caller                                                            | Location                                                                           |
| -----: | ----: | -----: | --------: | ----------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| -23.8% |   -79 | 100.0% | 332 → 253 | `ActionView::Helpers::NumberHelper#delegate_number_helper_method` | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/number_helper.rb` |

##### `ActionView::Helpers::NumberHelper#delegate_number_helper_method` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/number_helper.rb`)

| Change | Delta |      % |   Samples | Caller                                                    | Location                                                                           |
| -----: | ----: | -----: | --------: | --------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| -21.7% |   -73 | 100.0% | 336 → 263 | `ActionView::Helpers::NumberHelper#number_with_delimiter` | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/number_helper.rb` |

##### `ActionView::Helpers::NumberHelper#number_with_delimiter` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/number_helper.rb`)

| Change | Delta |      % |   Samples | Caller                                                                 | Location    |
| -----: | ----: | -----: | --------: | ---------------------------------------------------------------------- | ----------- |
| -18.8% |   -63 | 100.0% | 336 → 273 | `block in _app_views_statuses_index_html_erb__328993190567029661_3128` | `<unknown>` |

##### `String#encode [c function]` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                           | Location                                                                              |
| -----: | ----: | -----: | ------: | -------------------------------- | ------------------------------------------------------------------------------------- |
| -50.9% |   -29 | 100.0% | 57 → 28 | `Nokogiri::HTML5::Node#write_to` | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/node.rb` |

##### `Rack::ETag#digest_body` (`/usr/local/bundle/gems/rack-3.2.7/lib/rack/etag.rb`)

| Change | Delta |      % | Samples | Caller            | Location                                             |
| -----: | ----: | -----: | ------: | ----------------- | ---------------------------------------------------- |
| -29.5% |   -28 | 100.0% | 95 → 67 | `Rack::ETag#call` | `/usr/local/bundle/gems/rack-3.2.7/lib/rack/etag.rb` |

##### `Digest::Base#<< [c function]` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                 | Location                                             |
| -----: | ----: | -----: | ------: | ---------------------- | ---------------------------------------------------- |
| -28.7% |   -27 | 100.0% | 94 → 67 | `block in digest_body` | `/usr/local/bundle/gems/rack-3.2.7/lib/rack/etag.rb` |

##### `block in digest_body` (`/usr/local/bundle/gems/rack-3.2.7/lib/rack/etag.rb`)

| Change | Delta |      % | Samples | Caller       | Location    |
| -----: | ----: | -----: | ------: | ------------ | ----------- |
| -28.7% |   -27 | 100.0% | 94 → 67 | `Array#each` | `<unknown>` |

##### `block (2 levels) in _app_views_statuses_index_html_erb__328993190567029661_3128` (`<unknown>`)

| Change | Delta |      % | Samples | Caller       | Location    |
| -----: | ----: | -----: | ------: | ------------ | ----------- |
| -69.7% |   -23 | 100.0% | 33 → 10 | `Array#each` | `<unknown>` |

##### `block in evaluate` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/visitors.rb`)

| Change | Delta |      % | Samples | Caller       | Location    |
| -----: | ----: | -----: | ------: | ------------ | ----------- |
| -52.8% |   -19 | 100.0% | 36 → 17 | `Array#each` | `<unknown>` |

##### `ActionDispatch::Journey::Router::Utils::UriEncoder#escape_segment` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router/utils.rb`)

| Change | Delta |      % | Samples | Caller                                                  | Location                                                                              |
| -----: | ----: | -----: | ------: | ------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| -54.8% |   -17 | 100.0% | 31 → 14 | `ActionDispatch::Journey::Router::Utils.escape_segment` | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router/utils.rb` |

##### `String#split [c function]` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                                                          | Location                                                                                                       |
| -----: | ----: | ------------: | ------: | --------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| -77.8% |   -14 | 75.0% → 44.4% |  18 → 4 | `ActiveSupport::NumberHelper::NumberToDelimitedConverter#parts` | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_to_delimited_converter.rb` |
| -16.7% |    -1 | 25.0% → 55.6% |   6 → 5 | `Loofah::HTML5::Scrub.scrub_uri_attribute`                      | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`                                               |

##### `String#gsub! [c function]` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                          | Location                                                                                                         |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| removed |   -12 |  40.0% → 0.0% |  12 → 0 | `ActiveSupport::NumberHelper::NumberToDelimitedConverter#parts` | `/usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/number_helper/number_to_delimited_converter.rb` |
|  +14.3% |    +2 | 46.7% → 88.9% | 14 → 16 | `Loofah::HTML5::Scrub.scrub_uri_attribute`                      | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`                                                 |
| +100.0% |    +1 |  3.3% → 11.1% |   1 → 2 | `URI.encode_www_form_component`                                 | `/usr/local/bundle/gems/uri-1.1.1/lib/uri/common.rb`                                                             |
| removed |    -1 |   3.3% → 0.0% |   1 → 0 | `ActiveSupport::JSON::Encoding::JSONGemCoderEncoder#encode`     | `/usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/json/encoding.rb`                               |
| removed |    -1 |   3.3% → 0.0% |   1 → 0 | `ActiveSupport::Autoload#autoload`                              | `/usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/dependencies/autoload.rb`                       |

##### `Hash#fetch [c function]` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                           | Location                                                                                                                   |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
|  -40.0% |    -6 | 60.0% → 69.2% |  15 → 9 | `ActionController::RequestForgeryProtection#real_csrf_token`     | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/request_forgery_protection.rb`                        |
|  -31.3% |    -5 | 64.0% → 84.6% | 16 → 11 | `Rack::Request::Env#fetch_header`                                | `/usr/local/bundle/gems/rack-3.2.7/lib/rack/request.rb`                                                                    |
|  -41.7% |    -5 | 48.0% → 53.8% |  12 → 7 | `ActionDispatch::Request::Session::Options#id`                   | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/request/session.rb`                                           |
| removed |    -2 |   8.0% → 0.0% |   2 → 0 | `I18n::Backend::Fallbacks#translate`                             | `/usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/fallbacks.rb`                                                         |
|  -50.0% |    -1 |   8.0% → 7.7% |   2 → 1 | `Concurrent::Collection::NonConcurrentMapBackend#get_or_default` | `/usr/local/bundle/gems/concurrent-ruby-1.3.8/lib/concurrent-ruby/concurrent/collection/map/non_concurrent_map_backend.rb` |

##### `String#gsub [c function]` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                              | Location                                                                              |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
|  -73.1% |   -19 | 57.8% → 18.4% |  26 → 7 | `ActionDispatch::Journey::Router::Utils::UriEncoder#escape_segment` | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router/utils.rb` |
|  +80.0% |    +8 | 22.2% → 47.4% | 10 → 18 | `Loofah::HTML5::Scrub.allowed_uri?`                                 | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`                      |
|  +40.0% |    +2 | 11.1% → 18.4% |   5 → 7 | `ActionDispatch::Journey::Router::Utils::UriEncoder#escape`         | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router/utils.rb` |
| +100.0% |    +1 |   2.2% → 5.3% |   1 → 2 | `Loofah::HTML5::Scrub.scrub_uri_attribute`                          | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`                      |
|     new |    +1 |   0.0% → 2.6% |   0 → 1 | `block in <module:Utils>`                                           | `/usr/local/bundle/gems/rack-3.2.7/lib/rack/utils.rb`                                 |

##### `Hash#[] [c function]` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                             | Location                                                                             |
| ------: | ----: | -----------: | ------: | ---------------------------------- | ------------------------------------------------------------------------------------ |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `block in lookup`                  | `/usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/simple.rb`                      |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `Rack::Headers#[]`                 | `/usr/local/bundle/gems/rack-3.2.7/lib/rack/headers.rb`                              |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `I18n::Locale::Fallbacks#[]`       | `/usr/local/bundle/gems/i18n-1.15.2/lib/i18n/locale/fallbacks.rb`                    |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `ActiveSupport::OrderedOptions#[]` | `/usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/ordered_options.rb` |

##### `Random.urandom [c function]` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                            | Location                                                        |
| -----: | ----: | -----: | ------: | --------------------------------- | --------------------------------------------------------------- |
| -80.0% |    -4 | 100.0% |   5 → 1 | `SecureRandom.gen_random_urandom` | `/usr/local/bundle/gems/securerandom-0.4.1/lib/securerandom.rb` |

##### `String#sub [c function]` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                                                         | Location                                                                                   |
| ------: | ----: | -----------: | ------: | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `ActionView::StructuredEventSubscriber::Start#start`           | `/usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/structured_event_subscriber.rb` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `ActionDispatch::Http::URL#host`                               | `/usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/http/url.rb`                |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `ActionView::StructuredEventSubscriber::Utils#from_rails_root` | `/usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/structured_event_subscriber.rb` |

##### `OpenSSL::HMAC#initialize [c function]` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                   | Location    |
| -----: | ----: | -----: | ------: | ------------------------ | ----------- |
| -50.0% |    -3 | 100.0% |   6 → 3 | `Class#new [c function]` | `<unknown>` |

##### `Kernel#lambda [c function]` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                           | Location                                                                              |
| -----: | ----: | -----: | ------: | -------------------------------- | ------------------------------------------------------------------------------------- |
| -42.9% |    -3 | 100.0% |   7 → 4 | `Nokogiri::HTML5::Node#write_to` | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/node.rb` |

##### `Nokogiri::XML::Attr#value= [c function]` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                       | Location                                                         |
| -----: | ----: | -----: | ------: | -------------------------------------------- | ---------------------------------------------------------------- |
| -33.3% |    -3 | 100.0% |   9 → 6 | `block in force_correct_attribute_escaping!` | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb` |

##### `ERB::Util.html_escape [c function]` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                        | Location                                                                             |
| -----: | ----: | -----: | ------: | --------------------------------------------- | ------------------------------------------------------------------------------------ |
| -30.0% |    -3 | 100.0% |  10 → 7 | `ActiveSupport::CoreExt::ERBUtil#html_escape` | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/core_ext/erb/util.rb` |

##### `JSON::Ext::Generator::State#generate [c function]` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller             | Location                                               |
| ------: | ----: | ------------: | ------: | ------------------ | ------------------------------------------------------ |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `JSON::Coder#dump` | `/usr/local/bundle/gems/json-3.0.2/lib/json/common.rb` |

##### `Regexp#match? [c function]` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                       | Location                                                                                 |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------ | ---------------------------------------------------------------------------------------- |
|  -15.4% |    -2 | 61.9% → 57.9% | 13 → 11 | `String#blank?`                                              | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/core_ext/object/blank.rb` |
|  -16.7% |    -1 | 28.6% → 26.3% |   6 → 5 | `ActionView::Helpers::TagHelper#ensure_valid_html5_tag_name` | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/tag_helper.rb`          |
| removed |    -1 |   4.8% → 0.0% |   1 → 0 | `block in flag_cookies_as_secure!`                           | `/usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/ssl.rb`        |
| +100.0% |    +1 |  4.8% → 10.5% |   1 → 2 | `Loofah::HTML5::Scrub.scrub_uri_attribute`                   | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`                         |
|     new |    +1 |   0.0% → 5.3% |   0 → 1 | `ActionDispatch::FileHandler#compressible?`                  | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/static.rb`       |

##### `Enumerable#inject [c function]` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                         | Location                                                        |
| -----: | ----: | -----: | ------: | ---------------------------------------------- | --------------------------------------------------------------- |
| -25.0% |    -2 | 100.0% |   8 → 6 | `I18n::Backend::Simple::Implementation#lookup` | `/usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/simple.rb` |

##### `OpenSSL::Cipher#initialize [c function]` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                   | Location    |
| -----: | ----: | -----: | ------: | ------------------------ | ----------- |
| -66.7% |    -2 | 100.0% |   3 → 1 | `Class#new [c function]` | `<unknown>` |

##### `Nokogiri::XML::NodeSet#length [c function]` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                        | Location                                                                                |
| ------: | ----: | ------------: | ------: | ----------------------------- | --------------------------------------------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `Nokogiri::XML::NodeSet#each` | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb` |

##### `Symbol#empty? [c function]` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                          | Location                                                      |
| ------: | ----: | ------------: | ------: | ------------------------------- | ------------------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `I18n::Backend::Base#translate` | `/usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/base.rb` |

##### `Enumerable#filter_map [c function]` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                                                 | Location                                                                             |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `ActionController::Rendering#process_action`           | `/usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_controller/metal/rendering.rb` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `Bundler::GemHelpers.select_best_local_platform_match` | `/usr/local/lib/ruby/3.4.0/bundler/gem_helpers.rb`                                   |

##### `ActionDispatch::Journey::Router::Utils.escape_segment` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router/utils.rb`)

| Change | Delta |      % | Samples | Caller                    | Location                                                                          |
| -----: | ----: | -----: | ------: | ------------------------- | --------------------------------------------------------------------------------- |
| -54.8% |   -17 | 100.0% | 31 → 14 | `block in <class:Format>` | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/visitors.rb` |

##### `block in <class:Format>` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/visitors.rb`)

| Change | Delta |      % | Samples | Caller                                              | Location                                                                          |
| -----: | ----: | -----: | ------: | --------------------------------------------------- | --------------------------------------------------------------------------------- |
| -51.6% |   -16 | 100.0% | 31 → 15 | `ActionDispatch::Journey::Format::Parameter#escape` | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/visitors.rb` |

##### `ActionDispatch::Journey::Format::Parameter#escape` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/visitors.rb`)

| Change | Delta |      % | Samples | Caller              | Location                                                                          |
| -----: | ----: | -----: | ------: | ------------------- | --------------------------------------------------------------------------------- |
| -51.6% |   -16 | 100.0% | 31 → 15 | `block in evaluate` | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/visitors.rb` |

##### `#<Class:0xffff76d571d8>#_app_views_layouts_application_html_erb___4441820961383043729_3160` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                            | Location    |
| -----: | ----: | -----: | ------: | --------------------------------- | ----------- |
| -25.0% |   -13 | 100.0% | 52 → 39 | `Kernel#public_send [c function]` | `<unknown>` |

##### `ActionController::Base::HelperMethods#form_authenticity_token` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                           | Location                                                                         |
| -----: | ----: | -----: | ------: | ------------------------------------------------ | -------------------------------------------------------------------------------- |
| -36.7% |   -11 | 100.0% | 30 → 19 | `ActionView::Helpers::CsrfHelper#csrf_meta_tags` | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/csrf_helper.rb` |

##### `Rails::Railtie.config` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                 | Location    |
| -----: | ----: | -----: | ------: | -------------------------------------- | ----------- |
| -75.0% |    -3 | 100.0% |   4 → 1 | `Kernel#require_relative [c function]` | `<unknown>` |

##### `ActionView::Helpers::ControllerHelper#response` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                          | Location                                                                                |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `ActionView::Helpers::AssetTagHelper#send_preload_links_header` | `/usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/helpers/asset_tag_helper.rb` |

##### `String#unpack` (`<unknown>`)

|  Change | Delta |            % | Samples | Caller                                      | Location                                                                         |
| ------: | ----: | -----------: | ------: | ------------------------------------------- | -------------------------------------------------------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `block in parse`                            | `/usr/local/bundle/gems/tzinfo-2.0.6/lib/tzinfo/data_sources/zoneinfo_reader.rb` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `TZInfo::DataSources::ZoneinfoReader#parse` | `/usr/local/bundle/gems/tzinfo-2.0.6/lib/tzinfo/data_sources/zoneinfo_reader.rb` |

##### `I18n::Base#default_separator` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                      | Location                                         |
| ------: | ----: | ------------: | ------: | --------------------------- | ------------------------------------------------ |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `I18n::Base#normalize_keys` | `/usr/local/bundle/gems/i18n-1.15.2/lib/i18n.rb` |

##### `ApplicationController#_layout` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                       | Location    |
| -----: | ----: | -----: | ------: | ---------------------------- | ----------- |
| -66.7% |    -2 | 100.0% |   3 → 1 | `StatusesController#_layout` | `<unknown>` |

##### `StatusesController#_layout` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                | Location                                                             |
| -----: | ----: | -----: | ------: | ------------------------------------- | -------------------------------------------------------------------- |
| -66.7% |    -2 | 100.0% |   3 → 1 | `ActionView::Layouts#_default_layout` | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/layouts.rb` |

##### `ActionController::Metal#session` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                                | Location                                                                                              |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `ActionController::RequestForgeryProtection#protect_against_forgery?` | `/usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_controller/metal/request_forgery_protection.rb` |

##### `ActionController::Metal#content_type=` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                                   | Location                                                                           |
| -----: | ----: | -----: | ------: | -------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| -50.0% |    -1 | 100.0% |   2 → 1 | `ActionController::Rendering#_set_rendered_content_type` | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb` |

##### `ActionView::ViewPaths#template_exists?` (`<unknown>`)

| Change | Delta |      % | Samples | Caller                                            | Location                                                                                 |
| -----: | ----: | -----: | ------: | ------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| -33.3% |    -1 | 100.0% |   3 → 2 | `ActionController::ImplicitRender#default_render` | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/implicit_render.rb` |

##### `Time.now` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller   | Location       |
| ------: | ----: | ------------: | ------: | -------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `<main>` | `./profile.rb` |

##### `ActionController::Base::HelperMethods#content_security_policy?` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                        | Location                                                                          |
| ------: | ----: | ------------: | ------: | --------------------------------------------- | --------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `ActionView::Helpers::CspHelper#csp_meta_tag` | `/usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/helpers/csp_helper.rb` |

##### `Kernel#Float` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                          | Location                                                                             |
| ------: | ----: | ------------: | ------: | ----------------------------------------------- | ------------------------------------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `ActionView::Helpers::NumberHelper#parse_float` | `/usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/helpers/number_helper.rb` |

##### `Ractor.make_shareable` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                 | Location    |
| ------: | ----: | ------------: | ------: | -------------------------------------- | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `Kernel#require_relative [c function]` | `<unknown>` |

##### `Hash#initialize` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                         | Location                                                                             |
| ------: | ----: | ------------: | ------: | ---------------------------------------------- | ------------------------------------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `ActiveSupport::InheritableOptions#initialize` | `/usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/ordered_options.rb` |

##### `ActionController::Base#per_form_csrf_tokens` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                                                 | Location                                                                                              |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `ActionController::RequestForgeryProtection#masked_authenticity_token` | `/usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_controller/metal/request_forgery_protection.rb` |

##### `ActionController::Base.logger` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                                   | Location                                                                            |
| ------: | ----: | ------------: | ------: | ---------------------------------------- | ----------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `ActionController::LogSubscriber#logger` | `/usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_controller/log_subscriber.rb` |

#### Callees

Callees with the largest change in contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `ActionView::Helpers::SanitizeHelper#sanitize` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/sanitize_helper.rb`)

|  Change | Delta |             % |   Samples | Callee                                                                  | Location                                                                                         |
| ------: | ----: | ------------: | --------: | ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
|  +12.3% |   +91 | 99.6% → 99.4% | 739 → 830 | `Rails::HTML::Concern::ComposedSanitize#sanitize`                       | `/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/sanitizer.rb`                  |
| +150.0% |    +3 |   0.3% → 0.6% |     2 → 5 | `String#html_safe`                                                      | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/core_ext/string/output_safety.rb` |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `ActionView::Helpers::SanitizeHelper::ClassMethods#safe_list_sanitizer` | `/usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/helpers/sanitize_helper.rb`           |

##### `Rails::HTML::Concern::ComposedSanitize#sanitize` (`/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/sanitizer.rb`)

| Change | Delta |             % |   Samples | Callee                                                   | Location                                                                        |
| -----: | ----: | ------------: | --------: | -------------------------------------------------------- | ------------------------------------------------------------------------------- |
| +24.6% |   +44 | 24.2% → 26.9% | 179 → 223 | `Rails::HTML::Concern::Parser::HTML5#parse_fragment`     | `/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/sanitizer.rb` |
| +16.1% |   +31 | 26.0% → 26.9% | 192 → 223 | `Rails::HTML::Concern::Serializer::UTF8Encode#serialize` | `/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/sanitizer.rb` |
|  +4.1% |   +15 | 49.8% → 46.1% | 368 → 383 | `Rails::HTML::Concern::Scrubber::SafeList#scrub`         | `/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/sanitizer.rb` |

##### `Rails::HTML::PermitScrubber#scrub` (`/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`)

| Change | Delta |             % |   Samples | Callee                                         | Location                                                                            |
| -----: | ----: | ------------: | --------: | ---------------------------------------------- | ----------------------------------------------------------------------------------- |
| +38.5% |   +50 | 83.9% → 83.3% | 130 → 180 | `Rails::HTML::PermitScrubber#scrub_attributes` | `/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`     |
| +85.7% |    +6 |   4.5% → 6.0% |    7 → 13 | `Loofah::HTML5::Scrub.cdata_needs_escaping?`   | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`                    |
| +80.0% |    +4 |   3.2% → 4.2% |     5 → 9 | `Rails::HTML::PermitScrubber#keep_node?`       | `/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`     |
|    new |    +1 |   0.0% → 0.5% |     0 → 1 | `Nokogiri::XML::Node#element?`                 | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb` |

##### `Kernel#extend [c function]` (`<unknown>`)

| Change | Delta |             % |  Samples | Callee                              | Location    |
| -----: | ----: | ------------: | -------: | ----------------------------------- | ----------- |
| +80.0% |   +56 | 95.9% → 96.2% | 70 → 126 | `Module#extend_object [c function]` | `<unknown>` |

##### `block (2 levels) in decorate` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`)

| Change | Delta |             % |  Samples | Callee                       | Location    |
| -----: | ----: | ------------: | -------: | ---------------------------- | ----------- |
| +76.7% |   +56 | 97.3% → 98.5% | 73 → 129 | `Kernel#extend [c function]` | `<unknown>` |

##### `Rails::HTML::PermitScrubber#scrub_attributes` (`/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`)

|  Change | Delta |             % |  Samples | Callee                                             | Location                                                                        |
| ------: | ----: | ------------: | -------: | -------------------------------------------------- | ------------------------------------------------------------------------------- |
|  +36.8% |   +32 | 66.9% → 66.1% | 87 → 119 | `Array#each`                                       | `<unknown>`                                                                     |
| +154.5% |   +17 |  8.5% → 15.6% |  11 → 28 | `Rails::HTML::PermitScrubber#scrub_css_attribute`  | `/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb` |
|   -6.3% |    -2 | 24.6% → 16.7% |  32 → 30 | `Nokogiri::XML::Node#attribute_nodes [c function]` | `<unknown>`                                                                     |

##### `Loofah.html5_fragment` (`/usr/local/bundle/gems/loofah-2.25.2/lib/loofah.rb`)

| Change | Delta |              % |   Samples | Callee                                             | Location                                                      |
| -----: | ----: | -------------: | --------: | -------------------------------------------------- | ------------------------------------------------------------- |
| +24.2% |   +43 | 100.0% → 99.1% | 178 → 221 | `Loofah::HtmlFragmentBehavior::ClassMethods#parse` | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb` |

##### `Rails::HTML::Concern::Parser::HTML5#parse_fragment` (`/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/sanitizer.rb`)

| Change | Delta |              % |   Samples | Callee                  | Location                                             |
| -----: | ----: | -------------: | --------: | ----------------------- | ---------------------------------------------------- |
| +25.3% |   +45 | 99.4% → 100.0% | 178 → 223 | `Loofah.html5_fragment` | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah.rb` |

##### `Loofah::HtmlFragmentBehavior::ClassMethods#parse` (`/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`)

|  Change | Delta |             % |   Samples | Callee                                           | Location                                                                                         |
| ------: | ----: | ------------: | --------: | ------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
|  +31.1% |   +38 | 68.5% → 72.4% | 122 → 160 | `Nokogiri::XML::DocumentFragment.new`            | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document_fragment.rb` |
|  +20.8% |   +10 | 27.0% → 26.2% |   48 → 58 | `Nokogiri::HTML4::Document.new [c function]`     | `<unknown>`                                                                                      |
| removed |    -1 |   0.6% → 0.0% |     1 → 0 | `Nokogiri::XML::Document#encoding= [c function]` | `<unknown>`                                                                                      |
|  -33.3% |    -1 |   1.7% → 0.9% |     3 → 2 | `Encoding#name [c function]`                     | `<unknown>`                                                                                      |

##### `block in _app_views_statuses_index_html_erb__328993190567029661_3128` (`<unknown>`)

| Change | Delta |             % |   Samples | Callee                                                    | Location                                                                             |
| -----: | ----: | ------------: | --------: | --------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| +12.5% |   +93 | 60.2% → 65.5% | 742 → 835 | `ActionView::Helpers::SanitizeHelper#sanitize`            | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/sanitize_helper.rb` |
| -18.8% |   -63 | 27.3% → 21.4% | 336 → 273 | `ActionView::Helpers::NumberHelper#number_with_delimiter` | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/number_helper.rb`   |
| -69.7% |   -23 |   2.7% → 0.8% |   33 → 10 | `Array#each`                                              | `<unknown>`                                                                          |
| +52.8% |   +19 |   2.9% → 4.3% |   36 → 55 | `block in define_url_helper`                              | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb`   |
| +17.1% |    +6 |   2.8% → 3.2% |   35 → 41 | `ActionView::Helpers::UrlHelper#link_to`                  | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/url_helper.rb`      |

##### `#<Class:0xffff76d571d8>#_app_views_statuses_index_html_erb__328993190567029661_3128` (`<unknown>`)

| Change | Delta |     % |       Samples | Callee       | Location    |
| -----: | ----: | ----: | ------------: | ------------ | ----------- |
|  +3.3% |   +41 | 99.8% | 1,234 → 1,275 | `Array#each` | `<unknown>` |

##### `block (2 levels) in render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`)

| Change | Delta |      % |       Samples | Callee                        | Location                                                              |
| -----: | ----: | -----: | ------------: | ----------------------------- | --------------------------------------------------------------------- |
|  +3.3% |   +41 | 100.0% | 1,236 → 1,277 | `ActionView::Template#render` | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/template.rb` |

##### `block in render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`)

| Change | Delta |      % |       Samples | Callee                                    | Location                                                                         |
| -----: | ----: | -----: | ------------: | ----------------------------------------- | -------------------------------------------------------------------------------- |
|  +3.3% |   +41 | 100.0% | 1,239 → 1,280 | `ActiveSupport::Notifications.instrument` | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb` |

##### `Nokogiri::XML::DocumentFragment.new` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document_fragment.rb`)

|  Change | Delta |             % |  Samples | Callee                                                    | Location                                                                                           |
| ------: | ----: | ------------: | -------: | --------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
|  +24.4% |   +22 | 73.8% → 70.0% | 90 → 112 | `Nokogiri::HTML5::DocumentFragment#initialize`            | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/document_fragment.rb` |
| +105.3% |   +20 | 15.6% → 24.4% |  19 → 39 | `Nokogiri::XML::DocumentFragment.native_new [c function]` | `<unknown>`                                                                                        |

##### `Nokogiri::XML::Document#decorate` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`)

| Change | Delta |             % |   Samples | Callee                   | Location    |
| -----: | ----: | ------------: | --------: | ------------------------ | ----------- |
| +21.6% |   +30 | 95.2% → 93.4% | 139 → 169 | `Hash#each [c function]` | `<unknown>` |

##### `Hash#each [c function]` (`<unknown>`)

|  Change | Delta |             % |   Samples | Callee                           | Location                                                                                |
| ------: | ----: | ------------: | --------: | -------------------------------- | --------------------------------------------------------------------------------------- |
|  +25.4% |   +32 | 87.5% → 88.8% | 126 → 158 | `block in decorate`              | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb` |
|  +50.0% |    +1 |   1.4% → 1.7% |     2 → 3 | `block in write`                 | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/cookies.rb`     |
|  +50.0% |    +1 |   1.4% → 1.7% |     2 → 3 | `block (2 levels) in eager_load` | `/usr/local/bundle/gems/zeitwerk-2.8.3/lib/zeitwerk/loader/eager_load.rb`               |
| +100.0% |    +1 |   0.7% → 1.1% |     1 → 2 | `(unknown) [c function]`         | `<unknown>`                                                                             |
|     new |    +1 |   0.0% → 0.6% |     0 → 1 | `block in assign`                | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/base.rb`                       |

##### `Rails::HTML::PermitScrubber#scrub_attribute` (`/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`)

|  Change | Delta |             % | Samples | Callee                                                   | Location                                                         |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------- | ---------------------------------------------------------------- |
|  +48.7% |   +19 | 54.2% → 55.2% | 39 → 58 | `Loofah::HTML5::Scrub.scrub_uri_attribute`               | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb` |
| +100.0% |   +10 | 13.9% → 19.0% | 10 → 20 | `Loofah::HTML5::Scrub.force_correct_attribute_escaping!` | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb` |
|     new |    +6 |   0.0% → 5.7% |   0 → 6 | `Nokogiri::XML::Node#node_name [c function]`             | `<unknown>`                                                      |
|  -75.0% |    -3 |   5.6% → 1.0% |   4 → 1 | `Set#include?`                                           | `/usr/local/lib/ruby/3.4.0/set.rb`                               |
|  -15.4% |    -2 | 18.1% → 10.5% | 13 → 11 | `Array#each`                                             | `<unknown>`                                                      |

##### `block in scrub_attributes` (`/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`)

| Change | Delta |             % |  Samples | Callee                                        | Location                                                                        |
| -----: | ----: | ------------: | -------: | --------------------------------------------- | ------------------------------------------------------------------------------- |
| +45.8% |   +33 | 83.7% → 88.2% | 72 → 105 | `Rails::HTML::PermitScrubber#scrub_attribute` | `/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb` |
| -66.7% |    -2 |   3.5% → 0.8% |    3 → 1 | `Nokogiri::XML::Node#unlink [c function]`     | `<unknown>`                                                                     |
| -20.0% |    -1 |   5.8% → 3.4% |    5 → 4 | `Nokogiri::XML::Node#node_name [c function]`  | `<unknown>`                                                                     |

##### `block in render_with_layout` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`)

| Change | Delta |             % |       Samples | Callee                        | Location                                                                                |
| -----: | ----: | ------------: | ------------: | ----------------------------- | --------------------------------------------------------------------------------------- |
|  +3.3% |   +41 | 96.0% → 96.7% | 1,239 → 1,280 | `block in render_template`    | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb` |
| -19.2% |   -10 |   4.0% → 3.2% |       52 → 42 | `ActionView::Template#render` | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/template.rb`                   |

##### `Kernel#public_send [c function]` (`<unknown>`)

| Change | Delta |             % |       Samples | Callee                                                                                       | Location                                                                         |
| -----: | ----: | ------------: | ------------: | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| -25.1% |   -81 | 25.1% → 18.4% |     323 → 242 | `ActiveSupport::NumberHelper#number_to_delimited`                                            | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper.rb` |
|  +3.3% |   +41 | 96.0% → 97.0% | 1,236 → 1,277 | `#<Class:0xffff76d571d8>#_app_views_statuses_index_html_erb__328993190567029661_3128`        | `<unknown>`                                                                      |
| -25.0% |   -13 |   4.0% → 3.0% |       52 → 39 | `#<Class:0xffff76d571d8>#_app_views_layouts_application_html_erb___4441820961383043729_3160` | `<unknown>`                                                                      |

##### `String.new [c function]` (`<unknown>`)

| Change | Delta |             % | Samples | Callee                                 | Location                                                                                         |
| -----: | ----: | ------------: | ------: | -------------------------------------- | ------------------------------------------------------------------------------------------------ |
| +14.3% |    +1 | 53.8% → 23.5% |   7 → 8 | `ActiveSupport::SafeBuffer#initialize` | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/core_ext/string/output_safety.rb` |

##### `Integer#upto [c function]` (`<unknown>`)

| Change | Delta |             % |   Samples | Callee                   | Location                                                                                |
| -----: | ----: | ------------: | --------: | ------------------------ | --------------------------------------------------------------------------------------- |
|  +4.5% |   +20 | 97.4% → 97.5% | 445 → 465 | `block in each`          | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb` |
| +22.2% |    +2 |   2.0% → 2.3% |    9 → 11 | `(unknown) [c function]` | `<unknown>`                                                                             |

##### `Nokogiri::XML::DocumentFragment.native_new [c function]` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                             | Location                                                                                |
| ------: | ----: | ------------: | ------: | ---------------------------------- | --------------------------------------------------------------------------------------- |
| +133.3% |   +20 | 78.9% → 89.7% | 15 → 35 | `Nokogiri::XML::Document#decorate` | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb` |

##### `Nokogiri::XML::Node#children [c function]` (`<unknown>`)

| Change | Delta |             % | Samples | Callee                             | Location                                                                                |
| -----: | ----: | ------------: | ------: | ---------------------------------- | --------------------------------------------------------------------------------------- |
| +20.5% |   +16 | 79.6% → 81.0% | 78 → 94 | `Nokogiri::XML::Document#decorate` | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb` |

##### `Kernel#dup [c function]` (`<unknown>`)

| Change | Delta |             % | Samples | Callee                               | Location    |
| -----: | ----: | ------------: | ------: | ------------------------------------ | ----------- |
| +85.7% |    +6 | 35.0% → 34.2% |  7 → 13 | `Kernel#initialize_dup [c function]` | `<unknown>` |

##### `Nokogiri::Gumbo.fragment [c function]` (`<unknown>`)

| Change | Delta |             % | Samples | Callee                                             | Location    |
| -----: | ----: | ------------: | ------: | -------------------------------------------------- | ----------- |
|  -3.7% |    -1 | 32.1% → 26.0% | 27 → 26 | `Nokogiri::XML::Node#internal_subset [c function]` | `<unknown>` |

##### `(unknown) [c function]` (`<unknown>`)

|  Change | Delta |             % |   Samples | Callee                                  | Location                                                                                |
| ------: | ----: | ------------: | --------: | --------------------------------------- | --------------------------------------------------------------------------------------- |
|   +4.9% |    +7 | 71.0% → 69.3% | 142 → 149 | `block in to_html`                      | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb` |
| +133.3% |    +4 |   1.5% → 3.3% |     3 → 7 | `block in attributes`                   | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb`     |
| removed |    -2 |   1.0% → 0.0% |     2 → 0 | `block in lookup`                       | `/usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/simple.rb`                         |
|  +22.2% |    +2 |   4.5% → 5.1% |    9 → 11 | `block in apply_rules_with_transitions` | `/usr/local/bundle/gems/tzinfo-2.0.6/lib/tzinfo/data_sources/zoneinfo_reader.rb`        |
|  +12.5% |    +1 |   4.0% → 4.2% |     8 → 9 | `block in parse`                        | `/usr/local/bundle/gems/tzinfo-2.0.6/lib/tzinfo/data_sources/zoneinfo_reader.rb`        |

##### `Hash#transform_keys [c function]` (`<unknown>`)

|  Change | Delta |            % | Samples | Callee                    | Location                                                                                |
| ------: | ----: | -----------: | ------: | ------------------------- | --------------------------------------------------------------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `block in stringify_keys` | `/usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/core_ext/hash/keys.rb` |

##### `Enumerable#map [c function]` (`<unknown>`)

|  Change | Delta |             % |   Samples | Callee                         | Location                                                                                |
| ------: | ----: | ------------: | --------: | ------------------------------ | --------------------------------------------------------------------------------------- |
|   +6.0% |    +9 | 90.3% → 89.3% | 149 → 158 | `Nokogiri::XML::NodeSet#each`  | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb` |
|  +12.5% |    +1 |   4.8% → 5.1% |     8 → 9 | `Enumerator#each [c function]` | `<unknown>`                                                                             |
| +100.0% |    +1 |   0.6% → 1.1% |     1 → 2 | `Hash#each [c function]`       | `<unknown>`                                                                             |

##### `Class#new [c function]` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                                              | Location                                                                                          |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
|     new |   +11 |  0.0% → 22.0% |  0 → 11 | `ActiveSupport::NumberHelper::NumberConverter#initialize`           | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb` |
|  -50.0% |    -5 | 26.3% → 10.0% |  10 → 5 | `ActionDispatch::Cookies::EncryptedKeyRotatingCookieJar#initialize` | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/cookies.rb`               |
| removed |    -3 |   7.9% → 0.0% |   3 → 0 | `ActiveSupport::Messages::Rotator#initialize`                       | `/usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/messages/rotator.rb`             |
|  -50.0% |    -3 |  15.8% → 6.0% |   6 → 3 | `OpenSSL::HMAC#initialize [c function]`                             | `<unknown>`                                                                                       |
| +150.0% |    +3 |  5.3% → 10.0% |   2 → 5 | `ActionDispatch::Response#initialize`                               | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/http/response.rb`                    |

##### `Kernel#catch [c function]` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                          | Location                                                                       |
| ------: | ----: | ------------: | ------: | ------------------------------- | ------------------------------------------------------------------------------ |
|  +16.7% |   +13 | 95.1% → 98.9% | 78 → 91 | `block in translate_key`        | `/usr/local/bundle/gems/i18n-1.15.2/lib/i18n.rb`                               |
| removed |    -3 |   3.7% → 0.0% |   3 → 0 | `block in call`                 | `/usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/callbacks.rb` |
|   -2.5% |    -1 | 48.8% → 42.4% | 40 → 39 | `block (2 levels) in translate` | `/usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/fallbacks.rb`             |
|  +50.0% |    +1 |   2.4% → 3.3% |   2 → 3 | `block in resolve_entry`        | `/usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/fallbacks.rb`             |

##### `Nokogiri::HTML4::Document.new [c function]` (`<unknown>`)

| Change | Delta |             % | Samples | Callee                                 | Location                                                      |
| -----: | ----: | ------------: | ------: | -------------------------------------- | ------------------------------------------------------------- |
| +11.8% |    +2 | 35.4% → 32.8% | 17 → 19 | `Loofah::DocumentDecorator#initialize` | `/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb` |

##### `Array#join [c function]` (`<unknown>`)

|  Change | Delta |            % | Samples | Callee                      | Location    |
| ------: | ----: | -----------: | ------: | --------------------------- | ----------- |
| removed |    -1 | 10.0% → 0.0% |   1 → 0 | `Integer#to_s [c function]` | `<unknown>` |

##### `block in instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`)

| Change | Delta |             % |       Samples | Callee                                | Location                                                                                |
| -----: | ----: | ------------: | ------------: | ------------------------------------- | --------------------------------------------------------------------------------------- |
|  +3.3% |   +41 | 95.7% → 96.5% | 1,236 → 1,277 | `block (2 levels) in render_template` | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb` |
|  +2.5% |   +32 |        100.0% | 1,291 → 1,323 | `block in render_with_layout`         | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb` |

##### `ActiveSupport::Notifications::Instrumenter#instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications/instrumenter.rb`)

|  Change | Delta |           % |       Samples | Callee                                                    | Location                                                                                      |
| ------: | ----: | ----------: | ------------: | --------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
|   +2.5% |   +32 |       99.8% | 1,291 → 1,323 | `block in instrument`                                     | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`              |
| removed |    -4 | 0.3% → 0.0% |         4 → 0 | `ActiveSupport::Notifications::Fanout::Handle#start`      | `/usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/notifications/fanout.rb`     |
| +100.0% |    +1 | 0.1% → 0.2% |         1 → 2 | `ActiveSupport::Notifications::Instrumenter#build_handle` | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications/instrumenter.rb` |
|     new |    +1 | 0.0% → 0.1% |         0 → 1 | `ActiveSupport::Notifications::Fanout::Handle#finish`     | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications/fanout.rb`       |

##### `ActionDispatch::Routing::RouteSet::Dispatcher#serve` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb`)

|  Change | Delta |             % |       Samples | Callee                                                          | Location                                                                                 |
| ------: | ----: | ------------: | ------------: | --------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
|   +2.2% |   +29 | 99.8% → 99.6% | 1,332 → 1,361 | `ActionDispatch::Routing::RouteSet::Dispatcher#dispatch`        | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb`       |
| +100.0% |    +3 |   0.2% → 0.4% |         3 → 6 | `ActionController::DefaultHeaders::ClassMethods#make_response!` | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/default_headers.rb` |

##### `block in decorate` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`)

| Change | Delta |             % |  Samples | Callee       | Location    |
| -----: | ----: | ------------: | -------: | ------------ | ----------- |
| +74.0% |   +57 | 61.1% → 84.8% | 77 → 134 | `Array#each` | `<unknown>` |

##### `ActionView::Template#instrument_render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/template.rb`)

| Change | Delta |      % |       Samples | Callee                                    | Location                                                                         |
| -----: | ----: | -----: | ------------: | ----------------------------------------- | -------------------------------------------------------------------------------- |
|  +2.4% |   +31 | 100.0% | 1,288 → 1,319 | `ActiveSupport::Notifications.instrument` | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb` |

##### `Array#each` (`<unknown>`)

| Change | Delta |             % |       Samples | Callee                                                                 | Location                                                                                |
| -----: | ----: | ------------: | ------------: | ---------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| +74.7% |   +56 |   5.2% → 9.1% |      75 → 131 | `block (2 levels) in decorate`                                         | `/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb` |
|  +3.4% |   +42 | 85.7% → 88.4% | 1,233 → 1,275 | `block in _app_views_statuses_index_html_erb__328993190567029661_3128` | `<unknown>`                                                                             |
| +38.4% |   +33 |   6.0% → 8.3% |      86 → 119 | `block in scrub_attributes`                                            | `/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`         |
|  +2.4% |   +32 | 92.9% → 94.9% | 1,336 → 1,368 | `block in recognize`                                                   | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router.rb`         |
| -28.7% |   -27 |   6.5% → 4.6% |       94 → 67 | `block in digest_body`                                                 | `/usr/local/bundle/gems/rack-3.2.7/lib/rack/etag.rb`                                    |

##### `Array#map` (`<unknown>`)

|  Change | Delta |            % | Samples | Callee                             | Location                                                                              |
| ------: | ----: | -----------: | ------: | ---------------------------------- | ------------------------------------------------------------------------------------- |
| +100.0% |    +2 |        50.0% |   2 → 4 | `block in stylesheet_link_tag`     | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/asset_tag_helper.rb` |
| +100.0% |    +1 |        25.0% |   1 → 2 | `block in set_cookie_header`       | `/usr/local/bundle/gems/rack-3.2.7/lib/rack/utils.rb`                                 |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `block in flag_cookies_as_secure!` | `/usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/middleware/ssl.rb`     |
|     new |    +1 | 0.0% → 12.5% |   0 → 1 | `block in dispatch`                | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/broadcast_logger.rb`   |

##### `ActiveSupport::NumberHelper::NumberConverter#validate_float` (`<unknown>`)

| Change | Delta |            % | Samples | Callee                                                                     | Location    |
| -----: | ----: | -----------: | ------: | -------------------------------------------------------------------------- | ----------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `ActiveSupport::NumberHelper::NumberConverter.validate_float`              | `<unknown>` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `ActiveSupport::NumberHelper::NumberConverter.validate_float [c function]` | `<unknown>` |

##### `ActiveSupport::NumberHelper::NumberConverter#validate_float?` (`<unknown>`)

| Change | Delta |             % | Samples | Callee                                                        | Location    |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------- | ----------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `ActiveSupport::NumberHelper::NumberConverter#validate_float` | `<unknown>` |

##### `Integer#times` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                       | Location                                                                           |
| ------: | ----: | ------------: | ------: | ---------------------------- | ---------------------------------------------------------------------------------- |
|  +12.5% |    +1 | 88.9% → 90.0% |   8 → 9 | `(unknown) [c function]`     | `<unknown>`                                                                        |
| removed |    -1 |  11.1% → 0.0% |   1 → 0 | `block in <module:URI>`      | `/usr/local/bundle/gems/uri-1.1.1/lib/uri/common.rb`                               |
|     new |    +1 |  0.0% → 10.0% |   0 → 1 | `block in parameterize_args` | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb` |

##### `Kernel#tap` (`<unknown>`)

| Change | Delta |            % | Samples | Callee                     | Location                                                                            |
| -----: | ----: | -----------: | ------: | -------------------------- | ----------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `block in cookie_metadata` | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/cookies.rb` |

##### `ActiveSupport::BroadcastLogger#info` (`<unknown>`)

| Change | Delta |             % | Samples | Callee                                    | Location                                                                            |
| -----: | ----: | ------------: | ------: | ----------------------------------------- | ----------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `ActiveSupport::BroadcastLogger#dispatch` | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/broadcast_logger.rb` |

##### `ActiveSupport::TaggedLogging#push_tags` (`<unknown>`)

| Change | Delta |             % | Samples | Callee                                              | Location                                                                          |
| -----: | ----: | ------------: | ------: | --------------------------------------------------- | --------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `ActiveSupport::TaggedLogging::Formatter#push_tags` | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/tagged_logging.rb` |

##### `ActiveSupport::NumberHelper::NumberConverter#i18n_format_options` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb`)

|  Change | Delta |             % |  Samples | Callee                                                   | Location                                         |
| ------: | ----: | ------------: | -------: | -------------------------------------------------------- | ------------------------------------------------ |
|  +20.8% |   +20 | 38.7% → 78.9% | 96 → 116 | `I18n::Base#translate`                                   | `/usr/local/bundle/gems/i18n-1.15.2/lib/i18n.rb` |
| +125.0% |    +5 |   1.6% → 6.1% |    4 → 9 | `Kernel#dup [c function]`                                | `<unknown>`                                      |
|     new |    +2 |   0.0% → 1.4% |    0 → 2 | `ActiveSupport::NumberHelper::NumberConverter#namespace` | `<unknown>`                                      |

##### `ActiveSupport::NumberHelper::NumberConverter#format_options` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb`)

| Change | Delta |             % |   Samples | Callee                                                                | Location                                                                                          |
| -----: | ----: | ------------: | --------: | --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| -40.7% |  -101 | 93.6% → 88.0% | 248 → 147 | `ActiveSupport::NumberHelper::NumberConverter#i18n_format_options`    | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb` |
| +30.0% |    +3 |   3.8% → 7.8% |   10 → 13 | `ActiveSupport::NumberHelper::NumberConverter#default_format_options` | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb` |
| +16.7% |    +1 |   2.3% → 4.2% |     6 → 7 | `Hash#merge! [c function]`                                            | `<unknown>`                                                                                       |

##### `ActiveSupport::NumberHelper::NumberConverter#options` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb`)

|  Change | Delta |             % |   Samples | Callee                                                        | Location                                                                                          |
| ------: | ----: | ------------: | --------: | ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
|  -37.0% |   -98 | 98.9% → 96.0% | 265 → 167 | `ActiveSupport::NumberHelper::NumberConverter#format_options` | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb` |
| +133.3% |    +4 |   1.1% → 4.0% |     3 → 7 | `Hash#merge [c function]`                                     | `<unknown>`                                                                                       |

##### `ActiveSupport::NumberHelper::NumberToDelimitedConverter#delimiter_pattern` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_to_delimited_converter.rb`)

|  Change | Delta |             % |   Samples | Callee                                                 | Location                                                                                          |
| ------: | ----: | ------------: | --------: | ------------------------------------------------------ | ------------------------------------------------------------------------------------------------- |
|  -35.1% |   -94 | 99.6% → 99.4% | 268 → 174 | `ActiveSupport::NumberHelper::NumberConverter#options` | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb` |
| removed |    -1 |   0.4% → 0.0% |     1 → 0 | `Hash#fetch [c function]`                              | `<unknown>`                                                                                       |

##### `ActiveSupport::NumberHelper::NumberToDelimitedConverter#convert` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_to_delimited_converter.rb`)

|  Change | Delta |             % |   Samples | Callee                                                          | Location                                                                                                       |
| ------: | ----: | ------------: | --------: | --------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
|  -30.3% |   -92 | 97.4% → 97.2% | 304 → 212 | `ActiveSupport::NumberHelper::NumberToDelimitedConverter#parts` | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_to_delimited_converter.rb` |
| removed |    -2 |   0.6% → 0.0% |     2 → 0 | `Array#compact [c function]`                                    | `<unknown>`                                                                                                    |
| removed |    -1 |   0.3% → 0.0% |     1 → 0 | `String#gsub! [c function]`                                     | `<unknown>`                                                                                                    |
|  -20.0% |    -1 |   1.6% → 1.8% |     5 → 4 | `Array#join [c function]`                                       | `<unknown>`                                                                                                    |

##### `ActiveSupport::NumberHelper::NumberConverter#execute` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb`)

| Change | Delta |             % |   Samples | Callee                                                            | Location                                                                                                       |
| -----: | ----: | ------------: | --------: | ----------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| -30.1% |   -94 | 97.5% → 96.0% | 312 → 218 | `ActiveSupport::NumberHelper::NumberToDelimitedConverter#convert` | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_to_delimited_converter.rb` |
|    new |    +2 |   0.0% → 0.9% |     0 → 2 | `ActiveSupport::NumberHelper::NumberConverter#validate_float?`    | `<unknown>`                                                                                                    |
| -14.3% |    -1 |   2.2% → 2.6% |     7 → 6 | `ActiveSupport::NumberHelper::NumberConverter#valid_bigdecimal`   | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb`              |

##### `ActiveSupport::NumberHelper::NumberToDelimitedConverter#parts` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_to_delimited_converter.rb`)

|  Change | Delta |             % |   Samples | Callee                                                                      | Location                                                                                                       |
| ------: | ----: | ------------: | --------: | --------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
|  -34.9% |   -94 | 88.5% → 82.5% | 269 → 175 | `ActiveSupport::NumberHelper::NumberToDelimitedConverter#delimiter_pattern` | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_to_delimited_converter.rb` |
|  -77.8% |   -14 |   5.9% → 1.9% |    18 → 4 | `String#split [c function]`                                                 | `<unknown>`                                                                                                    |
| removed |   -12 |   3.9% → 0.0% |    12 → 0 | `String#gsub! [c function]`                                                 | `<unknown>`                                                                                                    |
|     new |    +4 |   0.0% → 1.9% |     0 → 4 | `Array#join [c function]`                                                   | `<unknown>`                                                                                                    |
|     new |    +4 |   0.0% → 1.9% |     0 → 4 | `Array#compact [c function]`                                                | `<unknown>`                                                                                                    |

##### `ActiveSupport::NumberHelper::NumberConverter.convert` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb`)

|  Change | Delta |             % |   Samples | Callee                                                 | Location                                                                                          |
| ------: | ----: | ------------: | --------: | ------------------------------------------------------ | ------------------------------------------------------------------------------------------------- |
|  -29.1% |   -93 | 99.4% → 94.2% | 320 → 227 | `ActiveSupport::NumberHelper::NumberConverter#execute` | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb` |
| +600.0% |   +12 |   0.6% → 5.8% |    2 → 14 | `Class#new [c function]`                               | `<unknown>`                                                                                       |

##### `ActiveSupport::NumberHelper#number_to_delimited` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper.rb`)

| Change | Delta |             % |   Samples | Callee                                                 | Location                                                                                          |
| -----: | ----: | ------------: | --------: | ------------------------------------------------------ | ------------------------------------------------------------------------------------------------- |
| -25.2% |   -81 | 99.7% → 99.6% | 322 → 241 | `ActiveSupport::NumberHelper::NumberConverter.convert` | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb` |

##### `block in delegate_number_helper_method` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/number_helper.rb`)

| Change | Delta |              % |   Samples | Callee                            | Location    |
| -----: | ----: | -------------: | --------: | --------------------------------- | ----------- |
| -24.5% |   -80 | 100.0% → 99.6% | 326 → 246 | `Kernel#public_send [c function]` | `<unknown>` |

##### `ActionView::Helpers::NumberHelper#wrap_with_output_safety_handling` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/number_helper.rb`)

|  Change | Delta |             % |   Samples | Callee                                           | Location                                                                             |
| ------: | ----: | ------------: | --------: | ------------------------------------------------ | ------------------------------------------------------------------------------------ |
|  -24.2% |   -79 | 98.2% → 97.6% | 326 → 247 | `block in delegate_number_helper_method`         | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/number_helper.rb`   |
| removed |    -1 |   0.3% → 0.0% |     1 → 0 | `ActionView::Helpers::NumberHelper#valid_float?` | `/usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/helpers/number_helper.rb` |

##### `ActionView::Helpers::NumberHelper#delegate_number_helper_method` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/number_helper.rb`)

|  Change | Delta |             % |   Samples | Callee                                                               | Location                                                                              |
| ------: | ----: | ------------: | --------: | -------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
|  -23.8% |   -79 | 98.8% → 96.2% | 332 → 253 | `ActionView::Helpers::NumberHelper#wrap_with_output_safety_handling` | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/number_helper.rb`    |
| +600.0% |    +6 |   0.3% → 2.7% |     1 → 7 | `Hash#symbolize_keys`                                                | `/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/core_ext/hash/keys.rb` |

##### `ActionView::Helpers::NumberHelper#number_with_delimiter` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/number_helper.rb`)

| Change | Delta |              % |   Samples | Callee                                                            | Location                                                                           |
| -----: | ----: | -------------: | --------: | ----------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| -21.7% |   -73 | 100.0% → 96.3% | 336 → 263 | `ActionView::Helpers::NumberHelper#delegate_number_helper_method` | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/number_helper.rb` |

##### `Rack::ETag#digest_body` (`/usr/local/bundle/gems/rack-3.2.7/lib/rack/etag.rb`)

|  Change | Delta |              % | Samples | Callee                                    | Location    |
| ------: | ----: | -------------: | ------: | ----------------------------------------- | ----------- |
|  -28.7% |   -27 | 98.9% → 100.0% | 94 → 67 | `Array#each`                              | `<unknown>` |
| removed |    -1 |    1.1% → 0.0% |   1 → 0 | `Digest::Instance#hexdigest [c function]` | `<unknown>` |

##### `block in digest_body` (`/usr/local/bundle/gems/rack-3.2.7/lib/rack/etag.rb`)

| Change | Delta |      % | Samples | Callee                         | Location    |
| -----: | ----: | -----: | ------: | ------------------------------ | ----------- |
| -28.7% |   -27 | 100.0% | 94 → 67 | `Digest::Base#<< [c function]` | `<unknown>` |

##### `block (2 levels) in _app_views_statuses_index_html_erb__328993190567029661_3128` (`<unknown>`)

| Change | Delta |             % | Samples | Callee                                   | Location                                                                           |
| -----: | ----: | ------------: | ------: | ---------------------------------------- | ---------------------------------------------------------------------------------- |
| -71.0% |   -22 | 93.9% → 90.0% |  31 → 9 | `block in define_url_helper`             | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb` |
| -50.0% |    -1 |  6.1% → 10.0% |   2 → 1 | `ActionView::Helpers::UrlHelper#link_to` | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/url_helper.rb`    |

##### `block in evaluate` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/visitors.rb`)

| Change | Delta |             % | Samples | Callee                                              | Location                                                                          |
| -----: | ----: | ------------: | ------: | --------------------------------------------------- | --------------------------------------------------------------------------------- |
| -51.6% |   -16 | 86.1% → 88.2% | 31 → 15 | `ActionDispatch::Journey::Format::Parameter#escape` | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/visitors.rb` |
| -50.0% |    -2 | 11.1% → 11.8% |   4 → 2 | `ActionDispatch::Journey::Format#evaluate`          | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/visitors.rb` |

##### `ActionDispatch::Journey::Router::Utils::UriEncoder#escape_segment` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router/utils.rb`)

| Change | Delta |             % | Samples | Callee                                                      | Location                                                                              |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| -73.1% |   -19 | 83.9% → 50.0% |  26 → 7 | `String#gsub [c function]`                                  | `<unknown>`                                                                           |
| +40.0% |    +2 | 16.1% → 50.0% |   5 → 7 | `ActionDispatch::Journey::Router::Utils::UriEncoder#escape` | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router/utils.rb` |

##### `Hash#fetch [c function]` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                          | Location                                                                                            |
| ------: | ----: | ------------: | ------: | ------------------------------- | --------------------------------------------------------------------------------------------------- |
|  -40.0% |    -6 | 60.0% → 69.2% |  15 → 9 | `block in real_csrf_token`      | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/request_forgery_protection.rb` |
|  -36.4% |    -4 | 44.0% → 53.8% |  11 → 7 | `block in unpacked_cookie_data` | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/session/cookie_store.rb`    |
|  -36.4% |    -4 | 44.0% → 53.8% |  11 → 7 | `block in id`                   | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/request/session.rb`                    |
|     new |    +2 |  0.0% → 15.4% |   0 → 2 | `block in cookie_jar`           | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/cookies.rb`                 |
| removed |    -1 |   4.0% → 0.0% |   1 → 0 | `block in formats`              | `/usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/http/mime_negotiation.rb`            |

##### `String#gsub [c function]` (`<unknown>`)

|  Change | Delta |            % | Samples | Callee            | Location                                                                              |
| ------: | ----: | -----------: | ------: | ----------------- | ------------------------------------------------------------------------------------- |
| +400.0% |    +4 | 2.2% → 13.2% |   1 → 5 | `block in escape` | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router/utils.rb` |

##### `Hash#[] [c function]` (`<unknown>`)

|  Change | Delta |            % | Samples | Callee                | Location                                                                             |
| ------: | ----: | -----------: | ------: | --------------------- | ------------------------------------------------------------------------------------ |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `block in initialize` | `/usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/ordered_options.rb` |

##### `Enumerable#inject [c function]` (`<unknown>`)

| Change | Delta |             % | Samples | Callee       | Location    |
| -----: | ----: | ------------: | ------: | ------------ | ----------- |
| -16.7% |    -1 | 75.0% → 83.3% |   6 → 5 | `Array#each` | `<unknown>` |

##### `Enumerable#filter_map [c function]` (`<unknown>`)

|  Change | Delta |            % | Samples | Callee                    | Location    |
| ------: | ----: | -----------: | ------: | ------------------------- | ----------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `Array#each [c function]` | `<unknown>` |

##### `ActionDispatch::Journey::Router::Utils.escape_segment` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router/utils.rb`)

| Change | Delta |      % | Samples | Callee                                                              | Location                                                                              |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| -54.8% |   -17 | 100.0% | 31 → 14 | `ActionDispatch::Journey::Router::Utils::UriEncoder#escape_segment` | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router/utils.rb` |

##### `block in <class:Format>` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/visitors.rb`)

| Change | Delta |              % | Samples | Callee                                                  | Location                                                                              |
| -----: | ----: | -------------: | ------: | ------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| -54.8% |   -17 | 100.0% → 93.3% | 31 → 14 | `ActionDispatch::Journey::Router::Utils.escape_segment` | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router/utils.rb` |

##### `ActionDispatch::Journey::Format::Parameter#escape` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/visitors.rb`)

| Change | Delta |      % | Samples | Callee                    | Location                                                                          |
| -----: | ----: | -----: | ------: | ------------------------- | --------------------------------------------------------------------------------- |
| -51.6% |   -16 | 100.0% | 31 → 15 | `block in <class:Format>` | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/visitors.rb` |

##### `#<Class:0xffff76d571d8>#_app_views_layouts_application_html_erb___4441820961383043729_3160` (`<unknown>`)

| Change | Delta |             % | Samples | Callee                                                    | Location                                                                              |
| -----: | ----: | ------------: | ------: | --------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| -30.0% |   -12 | 76.9% → 71.8% | 40 → 28 | `ActionView::Helpers::CsrfHelper#csrf_meta_tags`          | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/csrf_helper.rb`      |
| +50.0% |    +2 |  7.7% → 15.4% |   4 → 6 | `ActionView::Helpers::AssetTagHelper#stylesheet_link_tag` | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/asset_tag_helper.rb` |
| -20.0% |    -1 |  9.6% → 10.3% |   5 → 4 | `ActionView::OutputBuffer#<<`                             | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/buffers.rb`                  |

##### `ActionController::Base::HelperMethods#form_authenticity_token` (`<unknown>`)

| Change | Delta |              % | Samples | Callee                                                               | Location                                                                                            |
| -----: | ----: | -------------: | ------: | -------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| -40.0% |   -12 | 100.0% → 94.7% | 30 → 18 | `ActionController::RequestForgeryProtection#form_authenticity_token` | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/request_forgery_protection.rb` |

##### `Rails::Railtie.config` (`<unknown>`)

| Change | Delta |      % | Samples | Callee                      | Location                                                         |
| -----: | ----: | -----: | ------: | --------------------------- | ---------------------------------------------------------------- |
| -75.0% |    -3 | 100.0% |   4 → 1 | `Rails::Application#config` | `/usr/local/bundle/gems/railties-8.1.4/lib/rails/application.rb` |

##### `I18n::Base#default_separator` (`<unknown>`)

|  Change | Delta |            % | Samples | Callee                           | Location                                                |
| ------: | ----: | -----------: | ------: | -------------------------------- | ------------------------------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `I18n::Config#default_separator` | `/usr/local/bundle/gems/i18n-1.15.2/lib/i18n/config.rb` |

##### `ApplicationController#_layout` (`<unknown>`)

| Change | Delta |              % | Samples | Callee                                          | Location                                                                    |
| -----: | ----: | -------------: | ------: | ----------------------------------------------- | --------------------------------------------------------------------------- |
| -50.0% |    -1 | 66.7% → 100.0% |   2 → 1 | `ActionView::LookupContext::ViewPaths#find_all` | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/lookup_context.rb` |

##### `StatusesController#_layout` (`<unknown>`)

| Change | Delta |      % | Samples | Callee                          | Location    |
| -----: | ----: | -----: | ------: | ------------------------------- | ----------- |
| -66.7% |    -2 | 100.0% |   3 → 1 | `ApplicationController#_layout` | `<unknown>` |

##### `ActionController::Metal#session` (`<unknown>`)

|  Change | Delta |            % | Samples | Callee                           | Location                                                |
| ------: | ----: | -----------: | ------: | -------------------------------- | ------------------------------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `Rack::Request::Helpers#session` | `/usr/local/bundle/gems/rack-3.2.7/lib/rack/request.rb` |

##### `ActionController::Metal#content_type=` (`<unknown>`)

| Change | Delta |      % | Samples | Callee                                   | Location                                                                       |
| -----: | ----: | -----: | ------: | ---------------------------------------- | ------------------------------------------------------------------------------ |
| -50.0% |    -1 | 100.0% |   2 → 1 | `ActionDispatch::Response#content_type=` | `/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/http/response.rb` |

##### `ActionView::ViewPaths#template_exists?` (`<unknown>`)

| Change | Delta |      % | Samples | Callee                                         | Location                                                                    |
| -----: | ----: | -----: | ------: | ---------------------------------------------- | --------------------------------------------------------------------------- |
| -33.3% |    -1 | 100.0% |   3 → 2 | `ActionView::LookupContext::ViewPaths#exists?` | `/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/lookup_context.rb` |

##### `ActionController::Base#per_form_csrf_tokens` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                         | Location                                                                             |
| ------: | ----: | ------------: | ------: | ---------------------------------------------- | ------------------------------------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `ActiveSupport::OrderedOptions#method_missing` | `/usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/ordered_options.rb` |

##### `ActionController::Base.logger` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee                                         | Location                                                                             |
| ------: | ----: | ------------: | ------: | ---------------------------------------------- | ------------------------------------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `ActiveSupport::OrderedOptions#method_missing` | `/usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/ordered_options.rb` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in samples collected in their leaf frame.

Common call stack: `Array#each` ← `#<Class:0xffff76d571d8>#_app_views_statuses_index_html_erb__328993190567029661_3128` ← `Kernel#public_send [c function]` ← `ActionView::Base#_run` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/base.rb`) ← `block in render` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/template.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionView::Template#instrument_render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/template.rb`) ← `ActionView::Template#render` ← `block (2 levels) in render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `block in instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActiveSupport::Notifications::Instrumenter#instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications/instrumenter.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `block in render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `block in render_with_layout` ← `block in instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActiveSupport::Notifications::Instrumenter#instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications/instrumenter.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionView::TemplateRenderer#render_with_layout` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `ActionView::TemplateRenderer#render_template` ← `ActionView::TemplateRenderer#render` ← `ActionView::Renderer#render_template_to_object` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/renderer.rb`) ← `ActionView::Renderer#render_to_object` ← `block in _render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionView::Base#in_rendering_context` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/base.rb`) ← `ActionView::Rendering#_render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Streaming#_render_template` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/streaming.rb`) ← `ActionView::Rendering#render_to_body` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Rendering#render_to_body` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `ActionController::Renderers#render_to_body` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/renderers.rb`) ← `AbstractController::Rendering#render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/rendering.rb`) ← `ActionController::Rendering#render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `block (2 levels) in render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActiveSupport::Benchmark.realtime` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/benchmark.rb`) ← `block in render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActionController::Instrumentation#cleanup_view_runtime` ← `ActionController::Instrumentation#render` ← `ActionController::ImplicitRender#default_render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/implicit_render.rb`) ← `ActionController::BasicImplicitRender#send_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/basic_implicit_render.rb`) ← `AbstractController::Base#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/base.rb`) ← `ActionController::Rendering#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `block in process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/callbacks.rb`) ← `ActiveSupport::Callbacks#run_callbacks` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/callbacks.rb`) ← `AbstractController::Callbacks#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/callbacks.rb`) ← `ActionController::Rescue#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rescue.rb`) ← `block in process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionController::Instrumentation#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActionController::ParamsWrapper#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/params_wrapper.rb`) ← `AbstractController::Base#process` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/base.rb`) ← `ActionView::Rendering#process` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Metal#dispatch` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal.rb`) ← `ActionController::Metal.dispatch` ← `ActionDispatch::Routing::RouteSet::Dispatcher#dispatch` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb`) ← `ActionDispatch::Routing::RouteSet::Dispatcher#serve` ← `block in serve` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router.rb`) ← `block in recognize` ← `Array#each` ← `ActionDispatch::Journey::Router#recognize` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router.rb`) ← `ActionDispatch::Journey::Router#serve` ← `ActionDispatch::Routing::RouteSet#call` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb`) ← `Rack::TempfileReaper#call` (`/usr/local/bundle/gems/rack-3.2.7/lib/rack/tempfile_reaper.rb`) ← `Rack::ETag#call` (`/usr/local/bundle/gems/rack-3.2.7/lib/rack/etag.rb`) ← `Rack::ConditionalGet#call` (`/usr/local/bundle/gems/rack-3.2.7/lib/rack/conditional_get.rb`) ← `Rack::Head#call` (`/usr/local/bundle/gems/rack-3.2.7/lib/rack/head.rb`) ← `ActionDispatch::ContentSecurityPolicy::Middleware#call` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/http/content_security_policy.rb`) ← `Rack::Session::Abstract::Persisted#context` (`/usr/local/bundle/gems/rack-session-2.1.2/lib/rack/session/abstract/id.rb`) ← `Rack::Session::Abstract::Persisted#call` ← `ActionDispatch::Cookies#call` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/cookies.rb`) ← `block in call` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/callbacks.rb`) ← `ActiveSupport::Callbacks#run_callbacks` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/callbacks.rb`) ← `ActionDispatch::Callbacks#call` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/callbacks.rb`) ← `ActionDispatch::DebugExceptions#call` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/debug_exceptions.rb`) ← `ActionDispatch::ShowExceptions#call` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/show_exceptions.rb`) ← `Rails::Rack::Logger#call_app` (`/usr/local/bundle/gems/railties-8.1.4/lib/rails/rack/logger.rb`) ← `Rails::Rack::Logger#call` ← `Rails::Rack::SilenceRequest#call` (`/usr/local/bundle/gems/railties-8.1.4/lib/rails/rack/silence_request.rb`) ← `ActionDispatch::RemoteIp#call` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/remote_ip.rb`) ← `ActionDispatch::RequestId#call` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/request_id.rb`) ← `Rack::MethodOverride#call` (`/usr/local/bundle/gems/rack-3.2.7/lib/rack/method_override.rb`) ← `Rack::Runtime#call` (`/usr/local/bundle/gems/rack-3.2.7/lib/rack/runtime.rb`) ← `ActionDispatch::Executor#call` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/executor.rb`) ← `ActionDispatch::Static#call` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/static.rb`) ← `Rack::Sendfile#call` (`/usr/local/bundle/gems/rack-3.2.7/lib/rack/sendfile.rb`) ← `ActionDispatch::SSL#call` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/ssl.rb`) ← `ActionDispatch::AssumeSSL#call` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/assume_ssl.rb`) ← `Rails::Engine#call` (`/usr/local/bundle/gems/railties-8.1.4/lib/rails/engine.rb`) ← `<main>` (`./profile.rb`)

|   Change | Delta |           % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| -------: | ----: | ----------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|  +105.0% |   +21 | 1.3% → 2.6% | 20 → 41 | `Nokogiri::XML::Node#html_standard_serialize [c function]` ← `Nokogiri::HTML5::Node#write_to` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/node.rb`) ← `Nokogiri::XML::Node#serialize` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb`) ← `Nokogiri::XML::Node#to_format` ← `Nokogiri::XML::Node#to_html` ← `block in to_html` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`) ← `(unknown) [c function]` ← `block in each` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`) ← `Integer#upto [c function]` ← `Nokogiri::XML::NodeSet#each` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`) ← `Enumerable#map [c function]` ← `Nokogiri::XML::NodeSet#to_html` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`) ← `Nokogiri::XML::DocumentFragment#to_html` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document_fragment.rb`) ← `Rails::HTML::Sanitizer#properly_encode` (`/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/sanitizer.rb`) ← `Rails::HTML::Concern::Serializer::UTF8Encode#serialize` ← `Rails::HTML::Concern::ComposedSanitize#sanitize` ← `ActionView::Helpers::SanitizeHelper#sanitize` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/sanitize_helper.rb`) ← `block in _app_views_statuses_index_html_erb__328993190567029661_3128`                                                                                                                                                                                                                                             |
|   +29.8% |   +17 | 3.7% → 4.8% | 57 → 74 | `Nokogiri::Gumbo.fragment [c function]` ← `Nokogiri::HTML5::DocumentFragment#initialize` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/document_fragment.rb`) ← `Nokogiri::XML::DocumentFragment.new` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document_fragment.rb`) ← `Loofah::HtmlFragmentBehavior::ClassMethods#parse` (`/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`) ← `Loofah.html5_fragment` (`/usr/local/bundle/gems/loofah-2.25.2/lib/loofah.rb`) ← `Rails::HTML::Concern::Parser::HTML5#parse_fragment` (`/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/sanitizer.rb`) ← `Rails::HTML::Concern::ComposedSanitize#sanitize` ← `ActionView::Helpers::SanitizeHelper#sanitize` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/sanitize_helper.rb`) ← `block in _app_views_statuses_index_html_erb__328993190567029661_3128`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  +850.0% |   +17 | 0.1% → 1.2% |  2 → 19 | `ActiveSupport::NumberHelper::NumberToDelimitedConverter#parts` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_to_delimited_converter.rb`) ← `ActiveSupport::NumberHelper::NumberToDelimitedConverter#convert` ← `ActiveSupport::NumberHelper::NumberConverter#execute` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb`) ← `ActiveSupport::NumberHelper::NumberConverter.convert` ← `ActiveSupport::NumberHelper#number_to_delimited` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper.rb`) ← `Kernel#public_send [c function]` ← `block in delegate_number_helper_method` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/number_helper.rb`) ← `ActionView::Helpers::NumberHelper#wrap_with_output_safety_handling` ← `ActionView::Helpers::NumberHelper#delegate_number_helper_method` ← `ActionView::Helpers::NumberHelper#number_with_delimiter` ← `block in _app_views_statuses_index_html_erb__328993190567029661_3128`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  +228.6% |   +16 | 0.5% → 1.5% |  7 → 23 | `Module#extend_object [c function]` ← `Kernel#extend [c function]` ← `block (2 levels) in decorate` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`) ← `Array#each` ← `block in decorate` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`) ← `Hash#each [c function]` ← `Nokogiri::XML::Document#decorate` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`) ← `Nokogiri::XML::DocumentFragment.native_new [c function]` ← `Nokogiri::XML::DocumentFragment.new` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document_fragment.rb`) ← `Loofah::HtmlFragmentBehavior::ClassMethods#parse` (`/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`) ← `Loofah.html5_fragment` (`/usr/local/bundle/gems/loofah-2.25.2/lib/loofah.rb`) ← `Rails::HTML::Concern::Parser::HTML5#parse_fragment` (`/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/sanitizer.rb`) ← `Rails::HTML::Concern::ComposedSanitize#sanitize` ← `ActionView::Helpers::SanitizeHelper#sanitize` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/sanitize_helper.rb`) ← `block in _app_views_statuses_index_html_erb__328993190567029661_3128`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| +1500.0% |   +15 | 0.1% → 1.0% |  1 → 16 | `String.new [c function]` ← `Nokogiri::XML::Node#serialize` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb`) ← `Nokogiri::XML::Node#to_format` ← `Nokogiri::XML::Node#to_html` ← `block in to_html` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`) ← `(unknown) [c function]` ← `block in each` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`) ← `Integer#upto [c function]` ← `Nokogiri::XML::NodeSet#each` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`) ← `Enumerable#map [c function]` ← `Nokogiri::XML::NodeSet#to_html` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`) ← `Nokogiri::XML::DocumentFragment#to_html` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document_fragment.rb`) ← `Rails::HTML::Sanitizer#properly_encode` (`/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/sanitizer.rb`) ← `Rails::HTML::Concern::Serializer::UTF8Encode#serialize` ← `Rails::HTML::Concern::ComposedSanitize#sanitize` ← `ActionView::Helpers::SanitizeHelper#sanitize` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/sanitize_helper.rb`) ← `block in _app_views_statuses_index_html_erb__328993190567029661_3128`                                                                                                                                                                                                                                                                                                                                                                                                         |
|  +107.1% |   +15 | 0.9% → 1.9% | 14 → 29 | `Module#extend_object [c function]` ← `Kernel#extend [c function]` ← `block (2 levels) in decorate` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`) ← `Array#each` ← `block in decorate` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`) ← `Hash#each [c function]` ← `Nokogiri::XML::Document#decorate` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`) ← `Nokogiri::XML::Node#children [c function]` ← `Loofah::ScrubBehavior::Node#scrub!` (`/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`) ← `Rails::HTML::Concern::Scrubber::SafeList#scrub` (`/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/sanitizer.rb`) ← `Rails::HTML::Concern::ComposedSanitize#sanitize` ← `ActionView::Helpers::SanitizeHelper#sanitize` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/sanitize_helper.rb`) ← `block in _app_views_statuses_index_html_erb__328993190567029661_3128`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  +100.0% |   +11 | 0.7% → 1.4% | 11 → 22 | `Hash#merge [c function]` ← `I18n::Backend::Fallbacks#translate` (`/usr/local/bundle/gems/i18n-1.15.2/lib/i18n/backend/fallbacks.rb`) ← `block in translate_key` (`/usr/local/bundle/gems/i18n-1.15.2/lib/i18n.rb`) ← `Kernel#catch [c function]` ← `I18n::Base#translate_key` (`/usr/local/bundle/gems/i18n-1.15.2/lib/i18n.rb`) ← `I18n::Base#translate` ← `ActiveSupport::NumberHelper::NumberConverter#i18n_format_options` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb`) ← `ActiveSupport::NumberHelper::NumberConverter#format_options` ← `ActiveSupport::NumberHelper::NumberConverter#options` ← `ActiveSupport::NumberHelper::NumberToDelimitedConverter#delimiter_pattern` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_to_delimited_converter.rb`) ← `ActiveSupport::NumberHelper::NumberToDelimitedConverter#parts` ← `ActiveSupport::NumberHelper::NumberToDelimitedConverter#convert` ← `ActiveSupport::NumberHelper::NumberConverter#execute` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb`) ← `ActiveSupport::NumberHelper::NumberConverter.convert` ← `ActiveSupport::NumberHelper#number_to_delimited` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper.rb`) ← `Kernel#public_send [c function]` ← `block in delegate_number_helper_method` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/number_helper.rb`) ← `ActionView::Helpers::NumberHelper#wrap_with_output_safety_handling` ← `ActionView::Helpers::NumberHelper#delegate_number_helper_method` ← `ActionView::Helpers::NumberHelper#number_with_delimiter` ← `block in _app_views_statuses_index_html_erb__328993190567029661_3128` |
|   +41.7% |   +10 | 1.5% → 2.2% | 24 → 34 | `block in _app_views_statuses_index_html_erb__328993190567029661_3128`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|      new |   +10 | 0.0% → 0.6% |  0 → 10 | `Hash#transform_keys [c function]` ← `Hash#symbolize_keys` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/core_ext/hash/keys.rb`) ← `ActiveSupport::NumberHelper::NumberConverter#initialize` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb`) ← `Class#new [c function]` ← `ActiveSupport::NumberHelper::NumberConverter.convert` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb`) ← `ActiveSupport::NumberHelper#number_to_delimited` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper.rb`) ← `Kernel#public_send [c function]` ← `block in delegate_number_helper_method` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/number_helper.rb`) ← `ActionView::Helpers::NumberHelper#wrap_with_output_safety_handling` ← `ActionView::Helpers::NumberHelper#delegate_number_helper_method` ← `ActionView::Helpers::NumberHelper#number_with_delimiter` ← `block in _app_views_statuses_index_html_erb__328993190567029661_3128`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|      new |   +10 | 0.0% → 0.6% |  0 → 10 | `ActionView::Helpers::NumberHelper#number_with_delimiter` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/number_helper.rb`) ← `block in _app_views_statuses_index_html_erb__328993190567029661_3128`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|   +50.0% |    +9 | 1.2% → 1.7% | 18 → 27 | `Module#extend_object [c function]` ← `Kernel#extend [c function]` ← `block (2 levels) in decorate` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`) ← `Array#each` ← `block in decorate` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`) ← `Hash#each [c function]` ← `Nokogiri::XML::Document#decorate` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`) ← `Nokogiri::XML::Node#children [c function]` ← `Loofah::Scrubber#traverse_conditionally_bottom_up` (`/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/scrubber.rb`) ← `Loofah::Scrubber#traverse` ← `Loofah::ScrubBehavior::Node#scrub!` (`/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`) ← `block in scrub!` ← `block in each` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`) ← `Integer#upto [c function]` ← `Nokogiri::XML::NodeSet#each` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`) ← `Loofah::ScrubBehavior::NodeSet#scrub!` (`/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`) ← `Loofah::ScrubBehavior::Node#scrub!` ← `Rails::HTML::Concern::Scrubber::SafeList#scrub` (`/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/sanitizer.rb`) ← `Rails::HTML::Concern::ComposedSanitize#sanitize` ← `ActionView::Helpers::SanitizeHelper#sanitize` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/sanitize_helper.rb`) ← `block in _app_views_statuses_index_html_erb__328993190567029661_3128`                                                                                                                                                                 |
|   +25.8% |    +8 | 2.0% → 2.5% | 31 → 39 | `Nokogiri::HTML4::Document.new [c function]` ← `Loofah::HtmlFragmentBehavior::ClassMethods#parse` (`/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`) ← `Loofah.html5_fragment` (`/usr/local/bundle/gems/loofah-2.25.2/lib/loofah.rb`) ← `Rails::HTML::Concern::Parser::HTML5#parse_fragment` (`/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/sanitizer.rb`) ← `Rails::HTML::Concern::ComposedSanitize#sanitize` ← `ActionView::Helpers::SanitizeHelper#sanitize` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/sanitize_helper.rb`) ← `block in _app_views_statuses_index_html_erb__328993190567029661_3128`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|   +80.0% |    +8 | 0.6% → 1.2% | 10 → 18 | `String#gsub [c function]` ← `Loofah::HTML5::Scrub.allowed_uri?` (`/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`) ← `Loofah::HTML5::Scrub.scrub_uri_attribute` ← `Rails::HTML::PermitScrubber#scrub_attribute` (`/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`) ← `block in scrub_attributes` ← `Array#each` ← `Rails::HTML::PermitScrubber#scrub_attributes` (`/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`) ← `Rails::HTML::PermitScrubber#scrub` ← `Loofah::Scrubber#traverse_conditionally_bottom_up` (`/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/scrubber.rb`) ← `Loofah::Scrubber#traverse` ← `Loofah::ScrubBehavior::Node#scrub!` (`/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`) ← `block in scrub!` ← `block in each` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`) ← `Integer#upto [c function]` ← `Nokogiri::XML::NodeSet#each` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`) ← `Loofah::ScrubBehavior::NodeSet#scrub!` (`/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`) ← `Loofah::ScrubBehavior::Node#scrub!` ← `Rails::HTML::Concern::Scrubber::SafeList#scrub` (`/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/sanitizer.rb`) ← `Rails::HTML::Concern::ComposedSanitize#sanitize` ← `ActionView::Helpers::SanitizeHelper#sanitize` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/sanitize_helper.rb`) ← `block in _app_views_statuses_index_html_erb__328993190567029661_3128`                                                                                                                                                             |
|  +200.0% |    +8 | 0.3% → 0.8% |  4 → 12 | `ActionView::OutputBuffer#<<` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/buffers.rb`) ← `block in _app_views_statuses_index_html_erb__328993190567029661_3128`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|      new |    +7 | 0.0% → 0.5% |   0 → 7 | `Loofah::HTML5::Scrub.cdata_needs_escaping?` (`/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`) ← `Rails::HTML::PermitScrubber#scrub` (`/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`) ← `Loofah::Scrubber#traverse_conditionally_bottom_up` (`/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/scrubber.rb`) ← `block in traverse_conditionally_bottom_up` ← `block in each` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`) ← `Integer#upto [c function]` ← `Nokogiri::XML::NodeSet#each` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`) ← `Loofah::Scrubber#traverse_conditionally_bottom_up` (`/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/scrubber.rb`) ← `Loofah::Scrubber#traverse` ← `Loofah::ScrubBehavior::Node#scrub!` (`/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`) ← `block in scrub!` ← `block in each` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`) ← `Integer#upto [c function]` ← `Nokogiri::XML::NodeSet#each` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`) ← `Loofah::ScrubBehavior::NodeSet#scrub!` (`/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`) ← `Loofah::ScrubBehavior::Node#scrub!` ← `Rails::HTML::Concern::Scrubber::SafeList#scrub` (`/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/sanitizer.rb`) ← `Rails::HTML::Concern::ComposedSanitize#sanitize` ← `ActionView::Helpers::SanitizeHelper#sanitize` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/sanitize_helper.rb`) ← `block in _app_views_statuses_index_html_erb__328993190567029661_3128`                      |
|  +120.0% |    +6 | 0.3% → 0.7% |  5 → 11 | `Nokogiri::HTML5::DocumentFragment#initialize` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/document_fragment.rb`) ← `Nokogiri::XML::DocumentFragment.new` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document_fragment.rb`) ← `Loofah::HtmlFragmentBehavior::ClassMethods#parse` (`/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`) ← `Loofah.html5_fragment` (`/usr/local/bundle/gems/loofah-2.25.2/lib/loofah.rb`) ← `Rails::HTML::Concern::Parser::HTML5#parse_fragment` (`/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/sanitizer.rb`) ← `Rails::HTML::Concern::ComposedSanitize#sanitize` ← `ActionView::Helpers::SanitizeHelper#sanitize` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/sanitize_helper.rb`) ← `block in _app_views_statuses_index_html_erb__328993190567029661_3128`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  +600.0% |    +6 | 0.1% → 0.5% |   1 → 7 | `Hash#transform_keys [c function]` ← `Hash#symbolize_keys` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/core_ext/hash/keys.rb`) ← `ActionView::Helpers::NumberHelper#delegate_number_helper_method` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/number_helper.rb`) ← `ActionView::Helpers::NumberHelper#number_with_delimiter` ← `block in _app_views_statuses_index_html_erb__328993190567029661_3128`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|      new |    +6 | 0.0% → 0.4% |   0 → 6 | `Kernel#dup [c function]` ← `ActionController::UrlFor#url_options` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/url_for.rb`) ← `ActionView::RoutingUrlFor#url_options` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/routing_url_for.rb`) ← `ActionDispatch::Routing::RouteSet::NamedRouteCollection::UrlHelper::OptimizedUrlHelper#call` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb`) ← `block in define_url_helper` ← `block in _app_views_statuses_index_html_erb__328993190567029661_3128`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|      new |    +6 | 0.0% → 0.4% |   0 → 6 | `Nokogiri::XML::Node#node_name [c function]` ← `Rails::HTML::PermitScrubber#scrub_attribute` (`/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`) ← `block in scrub_attributes` ← `Array#each` ← `Rails::HTML::PermitScrubber#scrub_attributes` (`/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`) ← `Rails::HTML::PermitScrubber#scrub` ← `Loofah::Scrubber#traverse_conditionally_bottom_up` (`/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/scrubber.rb`) ← `Loofah::Scrubber#traverse` ← `Loofah::ScrubBehavior::Node#scrub!` (`/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`) ← `block in scrub!` ← `block in each` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`) ← `Integer#upto [c function]` ← `Nokogiri::XML::NodeSet#each` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`) ← `Loofah::ScrubBehavior::NodeSet#scrub!` (`/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`) ← `Loofah::ScrubBehavior::Node#scrub!` ← `Rails::HTML::Concern::Scrubber::SafeList#scrub` (`/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/sanitizer.rb`) ← `Rails::HTML::Concern::ComposedSanitize#sanitize` ← `ActionView::Helpers::SanitizeHelper#sanitize` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/sanitize_helper.rb`) ← `block in _app_views_statuses_index_html_erb__328993190567029661_3128`                                                                                                                                                                                                                                                                                                 |
|  +500.0% |    +5 | 0.1% → 0.4% |   1 → 6 | `Nokogiri::XML::Node#attributes` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb`) ← `Loofah::HTML5::Scrub.scrub_css_attribute` (`/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/html5/scrub.rb`) ← `Rails::HTML::PermitScrubber#scrub_css_attribute` (`/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`) ← `Rails::HTML::PermitScrubber#scrub_attributes` ← `Rails::HTML::PermitScrubber#scrub` ← `Loofah::Scrubber#traverse_conditionally_bottom_up` (`/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/scrubber.rb`) ← `Loofah::Scrubber#traverse` ← `Loofah::ScrubBehavior::Node#scrub!` (`/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`) ← `block in scrub!` ← `block in each` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`) ← `Integer#upto [c function]` ← `Nokogiri::XML::NodeSet#each` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`) ← `Loofah::ScrubBehavior::NodeSet#scrub!` (`/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`) ← `Loofah::ScrubBehavior::Node#scrub!` ← `Rails::HTML::Concern::Scrubber::SafeList#scrub` (`/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/sanitizer.rb`) ← `Rails::HTML::Concern::ComposedSanitize#sanitize` ← `ActionView::Helpers::SanitizeHelper#sanitize` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/sanitize_helper.rb`) ← `block in _app_views_statuses_index_html_erb__328993190567029661_3128`                                                                                                                                                                                                                                  |

### Improvements

Call stacks with the largest decrease in samples collected in their leaf frame.

Common call stack: `Rack::ETag#call` (`/usr/local/bundle/gems/rack-3.2.7/lib/rack/etag.rb`) ← `Rack::ConditionalGet#call` (`/usr/local/bundle/gems/rack-3.2.7/lib/rack/conditional_get.rb`) ← `Rack::Head#call` (`/usr/local/bundle/gems/rack-3.2.7/lib/rack/head.rb`) ← `ActionDispatch::ContentSecurityPolicy::Middleware#call` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/http/content_security_policy.rb`) ← `Rack::Session::Abstract::Persisted#context` (`/usr/local/bundle/gems/rack-session-2.1.2/lib/rack/session/abstract/id.rb`) ← `Rack::Session::Abstract::Persisted#call` ← `ActionDispatch::Cookies#call` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/cookies.rb`) ← `block in call` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/callbacks.rb`) ← `ActiveSupport::Callbacks#run_callbacks` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/callbacks.rb`) ← `ActionDispatch::Callbacks#call` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/callbacks.rb`) ← `ActionDispatch::DebugExceptions#call` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/debug_exceptions.rb`) ← `ActionDispatch::ShowExceptions#call` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/show_exceptions.rb`) ← `Rails::Rack::Logger#call_app` (`/usr/local/bundle/gems/railties-8.1.4/lib/rails/rack/logger.rb`) ← `Rails::Rack::Logger#call` ← `Rails::Rack::SilenceRequest#call` (`/usr/local/bundle/gems/railties-8.1.4/lib/rails/rack/silence_request.rb`) ← `ActionDispatch::RemoteIp#call` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/remote_ip.rb`) ← `ActionDispatch::RequestId#call` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/request_id.rb`) ← `Rack::MethodOverride#call` (`/usr/local/bundle/gems/rack-3.2.7/lib/rack/method_override.rb`) ← `Rack::Runtime#call` (`/usr/local/bundle/gems/rack-3.2.7/lib/rack/runtime.rb`) ← `ActionDispatch::Executor#call` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/executor.rb`) ← `ActionDispatch::Static#call` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/static.rb`) ← `Rack::Sendfile#call` (`/usr/local/bundle/gems/rack-3.2.7/lib/rack/sendfile.rb`) ← `ActionDispatch::SSL#call` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/ssl.rb`) ← `ActionDispatch::AssumeSSL#call` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/middleware/assume_ssl.rb`) ← `Rails::Engine#call` (`/usr/local/bundle/gems/railties-8.1.4/lib/rails/engine.rb`) ← `<main>` (`./profile.rb`)

|  Change | Delta |           % |  Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ------: | ----: | ----------: | -------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  -86.5% |  -128 | 9.5% → 1.3% | 148 → 20 | `ActiveSupport::NumberHelper::NumberConverter#i18n_format_options` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb`) ← `ActiveSupport::NumberHelper::NumberConverter#format_options` ← `ActiveSupport::NumberHelper::NumberConverter#options` ← `ActiveSupport::NumberHelper::NumberToDelimitedConverter#delimiter_pattern` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_to_delimited_converter.rb`) ← `ActiveSupport::NumberHelper::NumberToDelimitedConverter#parts` ← `ActiveSupport::NumberHelper::NumberToDelimitedConverter#convert` ← `ActiveSupport::NumberHelper::NumberConverter#execute` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb`) ← `ActiveSupport::NumberHelper::NumberConverter.convert` ← `ActiveSupport::NumberHelper#number_to_delimited` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper.rb`) ← `Kernel#public_send [c function]` ← `block in delegate_number_helper_method` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/number_helper.rb`) ← `ActionView::Helpers::NumberHelper#wrap_with_output_safety_handling` ← `ActionView::Helpers::NumberHelper#delegate_number_helper_method` ← `ActionView::Helpers::NumberHelper#number_with_delimiter` ← `block in _app_views_statuses_index_html_erb__328993190567029661_3128` ← `Array#each` ← `#<Class:0xffff76d571d8>#_app_views_statuses_index_html_erb__328993190567029661_3128` ← `Kernel#public_send [c function]` ← `ActionView::Base#_run` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/base.rb`) ← `block in render` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/template.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionView::Template#instrument_render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/template.rb`) ← `ActionView::Template#render` ← `block (2 levels) in render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `block in instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActiveSupport::Notifications::Instrumenter#instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications/instrumenter.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `block in render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `block in render_with_layout` ← `block in instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActiveSupport::Notifications::Instrumenter#instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications/instrumenter.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionView::TemplateRenderer#render_with_layout` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `ActionView::TemplateRenderer#render_template` ← `ActionView::TemplateRenderer#render` ← `ActionView::Renderer#render_template_to_object` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/renderer.rb`) ← `ActionView::Renderer#render_to_object` ← `block in _render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionView::Base#in_rendering_context` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/base.rb`) ← `ActionView::Rendering#_render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Streaming#_render_template` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/streaming.rb`) ← `ActionView::Rendering#render_to_body` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Rendering#render_to_body` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `ActionController::Renderers#render_to_body` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/renderers.rb`) ← `AbstractController::Rendering#render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/rendering.rb`) ← `ActionController::Rendering#render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `block (2 levels) in render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActiveSupport::Benchmark.realtime` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/benchmark.rb`) ← `block in render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActionController::Instrumentation#cleanup_view_runtime` ← `ActionController::Instrumentation#render` ← `ActionController::ImplicitRender#default_render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/implicit_render.rb`) ← `ActionController::BasicImplicitRender#send_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/basic_implicit_render.rb`) ← `AbstractController::Base#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/base.rb`) ← `ActionController::Rendering#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `block in process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/callbacks.rb`) ← `ActiveSupport::Callbacks#run_callbacks` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/callbacks.rb`) ← `AbstractController::Callbacks#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/callbacks.rb`) ← `ActionController::Rescue#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rescue.rb`) ← `block in process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionController::Instrumentation#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActionController::ParamsWrapper#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/params_wrapper.rb`) ← `AbstractController::Base#process` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/base.rb`) ← `ActionView::Rendering#process` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Metal#dispatch` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal.rb`) ← `ActionController::Metal.dispatch` ← `ActionDispatch::Routing::RouteSet::Dispatcher#dispatch` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb`) ← `ActionDispatch::Routing::RouteSet::Dispatcher#serve` ← `block in serve` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router.rb`) ← `block in recognize` ← `Array#each` ← `ActionDispatch::Journey::Router#recognize` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router.rb`) ← `ActionDispatch::Journey::Router#serve` ← `ActionDispatch::Routing::RouteSet#call` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb`) ← `Rack::TempfileReaper#call` (`/usr/local/bundle/gems/rack-3.2.7/lib/rack/tempfile_reaper.rb`)                                                                                                                                                               |
|  -88.4% |   -61 | 4.4% → 0.5% |   69 → 8 | `Nokogiri::XML::NodeSet#each` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`) ← `Loofah::Scrubber#traverse_conditionally_bottom_up` (`/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/scrubber.rb`) ← `Loofah::Scrubber#traverse` ← `Loofah::ScrubBehavior::Node#scrub!` (`/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`) ← `block in scrub!` ← `block in each` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`) ← `Integer#upto [c function]` ← `Nokogiri::XML::NodeSet#each` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`) ← `Loofah::ScrubBehavior::NodeSet#scrub!` (`/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`) ← `Loofah::ScrubBehavior::Node#scrub!` ← `Rails::HTML::Concern::Scrubber::SafeList#scrub` (`/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/sanitizer.rb`) ← `Rails::HTML::Concern::ComposedSanitize#sanitize` ← `ActionView::Helpers::SanitizeHelper#sanitize` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/sanitize_helper.rb`) ← `block in _app_views_statuses_index_html_erb__328993190567029661_3128` ← `Array#each` ← `#<Class:0xffff76d571d8>#_app_views_statuses_index_html_erb__328993190567029661_3128` ← `Kernel#public_send [c function]` ← `ActionView::Base#_run` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/base.rb`) ← `block in render` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/template.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionView::Template#instrument_render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/template.rb`) ← `ActionView::Template#render` ← `block (2 levels) in render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `block in instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActiveSupport::Notifications::Instrumenter#instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications/instrumenter.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `block in render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `block in render_with_layout` ← `block in instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActiveSupport::Notifications::Instrumenter#instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications/instrumenter.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionView::TemplateRenderer#render_with_layout` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `ActionView::TemplateRenderer#render_template` ← `ActionView::TemplateRenderer#render` ← `ActionView::Renderer#render_template_to_object` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/renderer.rb`) ← `ActionView::Renderer#render_to_object` ← `block in _render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionView::Base#in_rendering_context` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/base.rb`) ← `ActionView::Rendering#_render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Streaming#_render_template` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/streaming.rb`) ← `ActionView::Rendering#render_to_body` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Rendering#render_to_body` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `ActionController::Renderers#render_to_body` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/renderers.rb`) ← `AbstractController::Rendering#render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/rendering.rb`) ← `ActionController::Rendering#render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `block (2 levels) in render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActiveSupport::Benchmark.realtime` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/benchmark.rb`) ← `block in render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActionController::Instrumentation#cleanup_view_runtime` ← `ActionController::Instrumentation#render` ← `ActionController::ImplicitRender#default_render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/implicit_render.rb`) ← `ActionController::BasicImplicitRender#send_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/basic_implicit_render.rb`) ← `AbstractController::Base#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/base.rb`) ← `ActionController::Rendering#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `block in process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/callbacks.rb`) ← `ActiveSupport::Callbacks#run_callbacks` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/callbacks.rb`) ← `AbstractController::Callbacks#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/callbacks.rb`) ← `ActionController::Rescue#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rescue.rb`) ← `block in process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionController::Instrumentation#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActionController::ParamsWrapper#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/params_wrapper.rb`) ← `AbstractController::Base#process` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/base.rb`) ← `ActionView::Rendering#process` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Metal#dispatch` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal.rb`) ← `ActionController::Metal.dispatch` ← `ActionDispatch::Routing::RouteSet::Dispatcher#dispatch` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb`) ← `ActionDispatch::Routing::RouteSet::Dispatcher#serve` ← `block in serve` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router.rb`) ← `block in recognize` ← `Array#each` ← `ActionDispatch::Journey::Router#recognize` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router.rb`) ← `ActionDispatch::Journey::Router#serve` ← `ActionDispatch::Routing::RouteSet#call` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb`) ← `Rack::TempfileReaper#call` (`/usr/local/bundle/gems/rack-3.2.7/lib/rack/tempfile_reaper.rb`)                                                                                                                                                                                                                                                                                                                                                                               |
|  -50.9% |   -29 | 3.7% → 1.8% |  57 → 28 | `String#encode [c function]` ← `Nokogiri::HTML5::Node#write_to` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/node.rb`) ← `Nokogiri::XML::Node#serialize` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb`) ← `Nokogiri::XML::Node#to_format` ← `Nokogiri::XML::Node#to_html` ← `block in to_html` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`) ← `(unknown) [c function]` ← `block in each` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`) ← `Integer#upto [c function]` ← `Nokogiri::XML::NodeSet#each` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`) ← `Enumerable#map [c function]` ← `Nokogiri::XML::NodeSet#to_html` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`) ← `Nokogiri::XML::DocumentFragment#to_html` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document_fragment.rb`) ← `Rails::HTML::Sanitizer#properly_encode` (`/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/sanitizer.rb`) ← `Rails::HTML::Concern::Serializer::UTF8Encode#serialize` ← `Rails::HTML::Concern::ComposedSanitize#sanitize` ← `ActionView::Helpers::SanitizeHelper#sanitize` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/sanitize_helper.rb`) ← `block in _app_views_statuses_index_html_erb__328993190567029661_3128` ← `Array#each` ← `#<Class:0xffff76d571d8>#_app_views_statuses_index_html_erb__328993190567029661_3128` ← `Kernel#public_send [c function]` ← `ActionView::Base#_run` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/base.rb`) ← `block in render` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/template.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionView::Template#instrument_render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/template.rb`) ← `ActionView::Template#render` ← `block (2 levels) in render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `block in instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActiveSupport::Notifications::Instrumenter#instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications/instrumenter.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `block in render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `block in render_with_layout` ← `block in instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActiveSupport::Notifications::Instrumenter#instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications/instrumenter.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionView::TemplateRenderer#render_with_layout` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `ActionView::TemplateRenderer#render_template` ← `ActionView::TemplateRenderer#render` ← `ActionView::Renderer#render_template_to_object` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/renderer.rb`) ← `ActionView::Renderer#render_to_object` ← `block in _render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionView::Base#in_rendering_context` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/base.rb`) ← `ActionView::Rendering#_render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Streaming#_render_template` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/streaming.rb`) ← `ActionView::Rendering#render_to_body` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Rendering#render_to_body` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `ActionController::Renderers#render_to_body` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/renderers.rb`) ← `AbstractController::Rendering#render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/rendering.rb`) ← `ActionController::Rendering#render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `block (2 levels) in render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActiveSupport::Benchmark.realtime` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/benchmark.rb`) ← `block in render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActionController::Instrumentation#cleanup_view_runtime` ← `ActionController::Instrumentation#render` ← `ActionController::ImplicitRender#default_render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/implicit_render.rb`) ← `ActionController::BasicImplicitRender#send_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/basic_implicit_render.rb`) ← `AbstractController::Base#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/base.rb`) ← `ActionController::Rendering#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `block in process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/callbacks.rb`) ← `ActiveSupport::Callbacks#run_callbacks` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/callbacks.rb`) ← `AbstractController::Callbacks#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/callbacks.rb`) ← `ActionController::Rescue#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rescue.rb`) ← `block in process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionController::Instrumentation#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActionController::ParamsWrapper#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/params_wrapper.rb`) ← `AbstractController::Base#process` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/base.rb`) ← `ActionView::Rendering#process` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Metal#dispatch` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal.rb`) ← `ActionController::Metal.dispatch` ← `ActionDispatch::Routing::RouteSet::Dispatcher#dispatch` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb`) ← `ActionDispatch::Routing::RouteSet::Dispatcher#serve` ← `block in serve` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router.rb`) ← `block in recognize` ← `Array#each` ← `ActionDispatch::Journey::Router#recognize` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router.rb`) ← `ActionDispatch::Journey::Router#serve` ← `ActionDispatch::Routing::RouteSet#call` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb`) ← `Rack::TempfileReaper#call` (`/usr/local/bundle/gems/rack-3.2.7/lib/rack/tempfile_reaper.rb`)                                                                            |
|  -28.7% |   -27 | 6.0% → 4.3% |  94 → 67 | `Digest::Base#<< [c function]` ← `block in digest_body` (`/usr/local/bundle/gems/rack-3.2.7/lib/rack/etag.rb`) ← `Array#each` ← `Rack::ETag#digest_body` (`/usr/local/bundle/gems/rack-3.2.7/lib/rack/etag.rb`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  -92.0% |   -23 | 1.6% → 0.1% |   25 → 2 | `String#gsub [c function]` ← `ActionDispatch::Journey::Router::Utils::UriEncoder#escape_segment` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router/utils.rb`) ← `ActionDispatch::Journey::Router::Utils.escape_segment` ← `block in <class:Format>` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/visitors.rb`) ← `ActionDispatch::Journey::Format::Parameter#escape` ← `block in evaluate` ← `Array#each` ← `ActionDispatch::Journey::Format#evaluate` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/visitors.rb`) ← `ActionDispatch::Journey::Route#format` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/route.rb`) ← `ActionDispatch::Routing::RouteSet::NamedRouteCollection::UrlHelper::OptimizedUrlHelper#optimized_helper` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb`) ← `ActionDispatch::Routing::RouteSet::NamedRouteCollection::UrlHelper::OptimizedUrlHelper#call` ← `block in define_url_helper` ← `block (2 levels) in _app_views_statuses_index_html_erb__328993190567029661_3128` ← `Array#each` ← `block in _app_views_statuses_index_html_erb__328993190567029661_3128` ← `Array#each` ← `#<Class:0xffff76d571d8>#_app_views_statuses_index_html_erb__328993190567029661_3128` ← `Kernel#public_send [c function]` ← `ActionView::Base#_run` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/base.rb`) ← `block in render` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/template.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionView::Template#instrument_render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/template.rb`) ← `ActionView::Template#render` ← `block (2 levels) in render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `block in instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActiveSupport::Notifications::Instrumenter#instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications/instrumenter.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `block in render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `block in render_with_layout` ← `block in instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActiveSupport::Notifications::Instrumenter#instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications/instrumenter.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionView::TemplateRenderer#render_with_layout` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `ActionView::TemplateRenderer#render_template` ← `ActionView::TemplateRenderer#render` ← `ActionView::Renderer#render_template_to_object` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/renderer.rb`) ← `ActionView::Renderer#render_to_object` ← `block in _render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionView::Base#in_rendering_context` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/base.rb`) ← `ActionView::Rendering#_render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Streaming#_render_template` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/streaming.rb`) ← `ActionView::Rendering#render_to_body` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Rendering#render_to_body` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `ActionController::Renderers#render_to_body` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/renderers.rb`) ← `AbstractController::Rendering#render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/rendering.rb`) ← `ActionController::Rendering#render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `block (2 levels) in render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActiveSupport::Benchmark.realtime` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/benchmark.rb`) ← `block in render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActionController::Instrumentation#cleanup_view_runtime` ← `ActionController::Instrumentation#render` ← `ActionController::ImplicitRender#default_render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/implicit_render.rb`) ← `ActionController::BasicImplicitRender#send_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/basic_implicit_render.rb`) ← `AbstractController::Base#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/base.rb`) ← `ActionController::Rendering#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `block in process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/callbacks.rb`) ← `ActiveSupport::Callbacks#run_callbacks` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/callbacks.rb`) ← `AbstractController::Callbacks#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/callbacks.rb`) ← `ActionController::Rescue#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rescue.rb`) ← `block in process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionController::Instrumentation#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActionController::ParamsWrapper#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/params_wrapper.rb`) ← `AbstractController::Base#process` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/base.rb`) ← `ActionView::Rendering#process` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Metal#dispatch` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal.rb`) ← `ActionController::Metal.dispatch` ← `ActionDispatch::Routing::RouteSet::Dispatcher#dispatch` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb`) ← `ActionDispatch::Routing::RouteSet::Dispatcher#serve` ← `block in serve` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router.rb`) ← `block in recognize` ← `Array#each` ← `ActionDispatch::Journey::Router#recognize` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router.rb`) ← `ActionDispatch::Journey::Router#serve` ← `ActionDispatch::Routing::RouteSet#call` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb`) ← `Rack::TempfileReaper#call` (`/usr/local/bundle/gems/rack-3.2.7/lib/rack/tempfile_reaper.rb`)                                                                                                                                                                                                                                                                                                                                                                               |
|  -77.8% |   -14 | 1.2% → 0.3% |   18 → 4 | `String#split [c function]` ← `ActiveSupport::NumberHelper::NumberToDelimitedConverter#parts` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_to_delimited_converter.rb`) ← `ActiveSupport::NumberHelper::NumberToDelimitedConverter#convert` ← `ActiveSupport::NumberHelper::NumberConverter#execute` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper/number_converter.rb`) ← `ActiveSupport::NumberHelper::NumberConverter.convert` ← `ActiveSupport::NumberHelper#number_to_delimited` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/number_helper.rb`) ← `Kernel#public_send [c function]` ← `block in delegate_number_helper_method` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/number_helper.rb`) ← `ActionView::Helpers::NumberHelper#wrap_with_output_safety_handling` ← `ActionView::Helpers::NumberHelper#delegate_number_helper_method` ← `ActionView::Helpers::NumberHelper#number_with_delimiter` ← `block in _app_views_statuses_index_html_erb__328993190567029661_3128` ← `Array#each` ← `#<Class:0xffff76d571d8>#_app_views_statuses_index_html_erb__328993190567029661_3128` ← `Kernel#public_send [c function]` ← `ActionView::Base#_run` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/base.rb`) ← `block in render` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/template.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionView::Template#instrument_render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/template.rb`) ← `ActionView::Template#render` ← `block (2 levels) in render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `block in instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActiveSupport::Notifications::Instrumenter#instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications/instrumenter.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `block in render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `block in render_with_layout` ← `block in instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActiveSupport::Notifications::Instrumenter#instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications/instrumenter.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionView::TemplateRenderer#render_with_layout` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `ActionView::TemplateRenderer#render_template` ← `ActionView::TemplateRenderer#render` ← `ActionView::Renderer#render_template_to_object` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/renderer.rb`) ← `ActionView::Renderer#render_to_object` ← `block in _render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionView::Base#in_rendering_context` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/base.rb`) ← `ActionView::Rendering#_render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Streaming#_render_template` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/streaming.rb`) ← `ActionView::Rendering#render_to_body` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Rendering#render_to_body` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `ActionController::Renderers#render_to_body` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/renderers.rb`) ← `AbstractController::Rendering#render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/rendering.rb`) ← `ActionController::Rendering#render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `block (2 levels) in render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActiveSupport::Benchmark.realtime` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/benchmark.rb`) ← `block in render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActionController::Instrumentation#cleanup_view_runtime` ← `ActionController::Instrumentation#render` ← `ActionController::ImplicitRender#default_render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/implicit_render.rb`) ← `ActionController::BasicImplicitRender#send_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/basic_implicit_render.rb`) ← `AbstractController::Base#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/base.rb`) ← `ActionController::Rendering#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `block in process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/callbacks.rb`) ← `ActiveSupport::Callbacks#run_callbacks` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/callbacks.rb`) ← `AbstractController::Callbacks#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/callbacks.rb`) ← `ActionController::Rescue#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rescue.rb`) ← `block in process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionController::Instrumentation#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActionController::ParamsWrapper#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/params_wrapper.rb`) ← `AbstractController::Base#process` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/base.rb`) ← `ActionView::Rendering#process` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Metal#dispatch` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal.rb`) ← `ActionController::Metal.dispatch` ← `ActionDispatch::Routing::RouteSet::Dispatcher#dispatch` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb`) ← `ActionDispatch::Routing::RouteSet::Dispatcher#serve` ← `block in serve` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router.rb`) ← `block in recognize` ← `Array#each` ← `ActionDispatch::Journey::Router#recognize` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router.rb`) ← `ActionDispatch::Journey::Router#serve` ← `ActionDispatch::Routing::RouteSet#call` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb`) ← `Rack::TempfileReaper#call` (`/usr/local/bundle/gems/rack-3.2.7/lib/rack/tempfile_reaper.rb`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| removed |   -12 | 0.8% → 0.0% |   12 → 0 | `String#gsub! [c function]` ← `ActiveSupport::NumberHelper::NumberToDelimitedConverter#parts` (`/usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/number_helper/number_to_delimited_converter.rb`) ← `ActiveSupport::NumberHelper::NumberToDelimitedConverter#convert` ← `ActiveSupport::NumberHelper::NumberConverter#execute` (`/usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/number_helper/number_converter.rb`) ← `ActiveSupport::NumberHelper::NumberConverter.convert` ← `ActiveSupport::NumberHelper#number_to_delimited` (`/usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/number_helper.rb`) ← `Kernel#public_send [c function]` ← `block in delegate_number_helper_method` (`/usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/helpers/number_helper.rb`) ← `ActionView::Helpers::NumberHelper#wrap_with_output_safety_handling` ← `ActionView::Helpers::NumberHelper#delegate_number_helper_method` ← `ActionView::Helpers::NumberHelper#number_with_delimiter` ← `block in _app_views_statuses_index_html_erb___3573933945962839437_3112` ← `Array#each` ← `#<Class:0xffff71e26550>#_app_views_statuses_index_html_erb___3573933945962839437_3112` ← `Kernel#public_send [c function]` ← `ActionView::Base#_run` (`/usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/base.rb`) ← `block in render` (`/usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/template.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/notifications.rb`) ← `ActionView::Template#instrument_render_template` (`/usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/template.rb`) ← `ActionView::Template#render` ← `block (2 levels) in render_template` (`/usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/renderer/template_renderer.rb`) ← `block in instrument` (`/usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/notifications.rb`) ← `ActiveSupport::Notifications::Instrumenter#instrument` (`/usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/notifications/instrumenter.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/notifications.rb`) ← `block in render_template` (`/usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/renderer/template_renderer.rb`) ← `block in render_with_layout` ← `block in instrument` (`/usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/notifications.rb`) ← `ActiveSupport::Notifications::Instrumenter#instrument` (`/usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/notifications/instrumenter.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/notifications.rb`) ← `ActionView::TemplateRenderer#render_with_layout` (`/usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/renderer/template_renderer.rb`) ← `ActionView::TemplateRenderer#render_template` ← `ActionView::TemplateRenderer#render` ← `ActionView::Renderer#render_template_to_object` (`/usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/renderer/renderer.rb`) ← `ActionView::Renderer#render_to_object` ← `block in _render_template` (`/usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/rendering.rb`) ← `ActionView::Base#in_rendering_context` (`/usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/base.rb`) ← `ActionView::Rendering#_render_template` (`/usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/rendering.rb`) ← `ActionController::Streaming#_render_template` (`/usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_controller/metal/streaming.rb`) ← `ActionView::Rendering#render_to_body` (`/usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/rendering.rb`) ← `ActionController::Rendering#render_to_body` (`/usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_controller/metal/rendering.rb`) ← `ActionController::Renderers#render_to_body` (`/usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_controller/metal/renderers.rb`) ← `AbstractController::Rendering#render` (`/usr/local/bundle/gems/actionpack-8.1.3.1/lib/abstract_controller/rendering.rb`) ← `ActionController::Rendering#render` (`/usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_controller/metal/rendering.rb`) ← `block (2 levels) in render` (`/usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_controller/metal/instrumentation.rb`) ← `ActiveSupport::Benchmark.realtime` (`/usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/benchmark.rb`) ← `block in render` (`/usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_controller/metal/instrumentation.rb`) ← `ActionController::Instrumentation#cleanup_view_runtime` ← `ActionController::Instrumentation#render` ← `ActionController::ImplicitRender#default_render` (`/usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_controller/metal/implicit_render.rb`) ← `ActionController::BasicImplicitRender#send_action` (`/usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_controller/metal/basic_implicit_render.rb`) ← `AbstractController::Base#process_action` (`/usr/local/bundle/gems/actionpack-8.1.3.1/lib/abstract_controller/base.rb`) ← `ActionController::Rendering#process_action` (`/usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_controller/metal/rendering.rb`) ← `block in process_action` (`/usr/local/bundle/gems/actionpack-8.1.3.1/lib/abstract_controller/callbacks.rb`) ← `ActiveSupport::Callbacks#run_callbacks` (`/usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/callbacks.rb`) ← `AbstractController::Callbacks#process_action` (`/usr/local/bundle/gems/actionpack-8.1.3.1/lib/abstract_controller/callbacks.rb`) ← `ActionController::Rescue#process_action` (`/usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_controller/metal/rescue.rb`) ← `block in process_action` (`/usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_controller/metal/instrumentation.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/notifications.rb`) ← `ActionController::Instrumentation#process_action` (`/usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_controller/metal/instrumentation.rb`) ← `ActionController::ParamsWrapper#process_action` (`/usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_controller/metal/params_wrapper.rb`) ← `AbstractController::Base#process` (`/usr/local/bundle/gems/actionpack-8.1.3.1/lib/abstract_controller/base.rb`) ← `ActionView::Rendering#process` (`/usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/rendering.rb`) ← `ActionController::Metal#dispatch` (`/usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_controller/metal.rb`) ← `ActionController::Metal.dispatch` ← `ActionDispatch::Routing::RouteSet::Dispatcher#dispatch` (`/usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/routing/route_set.rb`) ← `ActionDispatch::Routing::RouteSet::Dispatcher#serve` ← `block in serve` (`/usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/journey/router.rb`) ← `block in recognize` ← `Array#each` ← `ActionDispatch::Journey::Router#recognize` (`/usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/journey/router.rb`) ← `ActionDispatch::Journey::Router#serve` ← `ActionDispatch::Routing::RouteSet#call` (`/usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/routing/route_set.rb`) ← `Rack::TempfileReaper#call` (`/usr/local/bundle/gems/rack-3.2.7/lib/rack/tempfile_reaper.rb`)                                                                                                                                                                                                                                                                                                                                                                                                           |
|  -64.3% |    -9 | 0.9% → 0.3% |   14 → 5 | `Nokogiri::XML::Node#to_format` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb`) ← `Nokogiri::XML::Node#to_html` ← `block in to_html` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`) ← `(unknown) [c function]` ← `block in each` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`) ← `Integer#upto [c function]` ← `Nokogiri::XML::NodeSet#each` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`) ← `Enumerable#map [c function]` ← `Nokogiri::XML::NodeSet#to_html` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`) ← `Nokogiri::XML::DocumentFragment#to_html` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document_fragment.rb`) ← `Rails::HTML::Sanitizer#properly_encode` (`/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/sanitizer.rb`) ← `Rails::HTML::Concern::Serializer::UTF8Encode#serialize` ← `Rails::HTML::Concern::ComposedSanitize#sanitize` ← `ActionView::Helpers::SanitizeHelper#sanitize` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/sanitize_helper.rb`) ← `block in _app_views_statuses_index_html_erb__328993190567029661_3128` ← `Array#each` ← `#<Class:0xffff76d571d8>#_app_views_statuses_index_html_erb__328993190567029661_3128` ← `Kernel#public_send [c function]` ← `ActionView::Base#_run` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/base.rb`) ← `block in render` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/template.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionView::Template#instrument_render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/template.rb`) ← `ActionView::Template#render` ← `block (2 levels) in render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `block in instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActiveSupport::Notifications::Instrumenter#instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications/instrumenter.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `block in render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `block in render_with_layout` ← `block in instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActiveSupport::Notifications::Instrumenter#instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications/instrumenter.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionView::TemplateRenderer#render_with_layout` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `ActionView::TemplateRenderer#render_template` ← `ActionView::TemplateRenderer#render` ← `ActionView::Renderer#render_template_to_object` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/renderer.rb`) ← `ActionView::Renderer#render_to_object` ← `block in _render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionView::Base#in_rendering_context` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/base.rb`) ← `ActionView::Rendering#_render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Streaming#_render_template` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/streaming.rb`) ← `ActionView::Rendering#render_to_body` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Rendering#render_to_body` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `ActionController::Renderers#render_to_body` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/renderers.rb`) ← `AbstractController::Rendering#render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/rendering.rb`) ← `ActionController::Rendering#render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `block (2 levels) in render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActiveSupport::Benchmark.realtime` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/benchmark.rb`) ← `block in render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActionController::Instrumentation#cleanup_view_runtime` ← `ActionController::Instrumentation#render` ← `ActionController::ImplicitRender#default_render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/implicit_render.rb`) ← `ActionController::BasicImplicitRender#send_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/basic_implicit_render.rb`) ← `AbstractController::Base#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/base.rb`) ← `ActionController::Rendering#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `block in process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/callbacks.rb`) ← `ActiveSupport::Callbacks#run_callbacks` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/callbacks.rb`) ← `AbstractController::Callbacks#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/callbacks.rb`) ← `ActionController::Rescue#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rescue.rb`) ← `block in process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionController::Instrumentation#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActionController::ParamsWrapper#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/params_wrapper.rb`) ← `AbstractController::Base#process` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/base.rb`) ← `ActionView::Rendering#process` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Metal#dispatch` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal.rb`) ← `ActionController::Metal.dispatch` ← `ActionDispatch::Routing::RouteSet::Dispatcher#dispatch` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb`) ← `ActionDispatch::Routing::RouteSet::Dispatcher#serve` ← `block in serve` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router.rb`) ← `block in recognize` ← `Array#each` ← `ActionDispatch::Journey::Router#recognize` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router.rb`) ← `ActionDispatch::Journey::Router#serve` ← `ActionDispatch::Routing::RouteSet#call` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb`) ← `Rack::TempfileReaper#call` (`/usr/local/bundle/gems/rack-3.2.7/lib/rack/tempfile_reaper.rb`)                                                                                                                                                                                                                                                                        |
|  -58.3% |    -7 | 0.8% → 0.3% |   12 → 5 | `block in decorate` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`) ← `Hash#each [c function]` ← `Nokogiri::XML::Document#decorate` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`) ← `Nokogiri::XML::Node#attribute_nodes [c function]` ← `Rails::HTML::PermitScrubber#scrub_attributes` (`/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`) ← `Rails::HTML::PermitScrubber#scrub` ← `Loofah::Scrubber#traverse_conditionally_bottom_up` (`/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/scrubber.rb`) ← `Loofah::Scrubber#traverse` ← `Loofah::ScrubBehavior::Node#scrub!` (`/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`) ← `block in scrub!` ← `block in each` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`) ← `Integer#upto [c function]` ← `Nokogiri::XML::NodeSet#each` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`) ← `Loofah::ScrubBehavior::NodeSet#scrub!` (`/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`) ← `Loofah::ScrubBehavior::Node#scrub!` ← `Rails::HTML::Concern::Scrubber::SafeList#scrub` (`/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/sanitizer.rb`) ← `Rails::HTML::Concern::ComposedSanitize#sanitize` ← `ActionView::Helpers::SanitizeHelper#sanitize` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/sanitize_helper.rb`) ← `block in _app_views_statuses_index_html_erb__328993190567029661_3128` ← `Array#each` ← `#<Class:0xffff76d571d8>#_app_views_statuses_index_html_erb__328993190567029661_3128` ← `Kernel#public_send [c function]` ← `ActionView::Base#_run` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/base.rb`) ← `block in render` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/template.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionView::Template#instrument_render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/template.rb`) ← `ActionView::Template#render` ← `block (2 levels) in render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `block in instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActiveSupport::Notifications::Instrumenter#instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications/instrumenter.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `block in render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `block in render_with_layout` ← `block in instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActiveSupport::Notifications::Instrumenter#instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications/instrumenter.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionView::TemplateRenderer#render_with_layout` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `ActionView::TemplateRenderer#render_template` ← `ActionView::TemplateRenderer#render` ← `ActionView::Renderer#render_template_to_object` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/renderer.rb`) ← `ActionView::Renderer#render_to_object` ← `block in _render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionView::Base#in_rendering_context` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/base.rb`) ← `ActionView::Rendering#_render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Streaming#_render_template` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/streaming.rb`) ← `ActionView::Rendering#render_to_body` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Rendering#render_to_body` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `ActionController::Renderers#render_to_body` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/renderers.rb`) ← `AbstractController::Rendering#render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/rendering.rb`) ← `ActionController::Rendering#render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `block (2 levels) in render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActiveSupport::Benchmark.realtime` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/benchmark.rb`) ← `block in render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActionController::Instrumentation#cleanup_view_runtime` ← `ActionController::Instrumentation#render` ← `ActionController::ImplicitRender#default_render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/implicit_render.rb`) ← `ActionController::BasicImplicitRender#send_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/basic_implicit_render.rb`) ← `AbstractController::Base#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/base.rb`) ← `ActionController::Rendering#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `block in process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/callbacks.rb`) ← `ActiveSupport::Callbacks#run_callbacks` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/callbacks.rb`) ← `AbstractController::Callbacks#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/callbacks.rb`) ← `ActionController::Rescue#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rescue.rb`) ← `block in process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionController::Instrumentation#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActionController::ParamsWrapper#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/params_wrapper.rb`) ← `AbstractController::Base#process` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/base.rb`) ← `ActionView::Rendering#process` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Metal#dispatch` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal.rb`) ← `ActionController::Metal.dispatch` ← `ActionDispatch::Routing::RouteSet::Dispatcher#dispatch` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb`) ← `ActionDispatch::Routing::RouteSet::Dispatcher#serve` ← `block in serve` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router.rb`) ← `block in recognize` ← `Array#each` ← `ActionDispatch::Journey::Router#recognize` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router.rb`) ← `ActionDispatch::Journey::Router#serve` ← `ActionDispatch::Routing::RouteSet#call` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb`) ← `Rack::TempfileReaper#call` (`/usr/local/bundle/gems/rack-3.2.7/lib/rack/tempfile_reaper.rb`) |
|  -77.8% |    -7 | 0.6% → 0.1% |    9 → 2 | `block in decorate` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`) ← `Hash#each [c function]` ← `Nokogiri::XML::Document#decorate` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`) ← `Nokogiri::XML::Node#children [c function]` ← `Loofah::Scrubber#traverse_conditionally_bottom_up` (`/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/scrubber.rb`) ← `Loofah::Scrubber#traverse` ← `Loofah::ScrubBehavior::Node#scrub!` (`/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`) ← `block in scrub!` ← `block in each` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`) ← `Integer#upto [c function]` ← `Nokogiri::XML::NodeSet#each` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`) ← `Loofah::ScrubBehavior::NodeSet#scrub!` (`/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`) ← `Loofah::ScrubBehavior::Node#scrub!` ← `Rails::HTML::Concern::Scrubber::SafeList#scrub` (`/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/sanitizer.rb`) ← `Rails::HTML::Concern::ComposedSanitize#sanitize` ← `ActionView::Helpers::SanitizeHelper#sanitize` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/sanitize_helper.rb`) ← `block in _app_views_statuses_index_html_erb__328993190567029661_3128` ← `Array#each` ← `#<Class:0xffff76d571d8>#_app_views_statuses_index_html_erb__328993190567029661_3128` ← `Kernel#public_send [c function]` ← `ActionView::Base#_run` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/base.rb`) ← `block in render` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/template.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionView::Template#instrument_render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/template.rb`) ← `ActionView::Template#render` ← `block (2 levels) in render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `block in instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActiveSupport::Notifications::Instrumenter#instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications/instrumenter.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `block in render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `block in render_with_layout` ← `block in instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActiveSupport::Notifications::Instrumenter#instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications/instrumenter.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionView::TemplateRenderer#render_with_layout` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `ActionView::TemplateRenderer#render_template` ← `ActionView::TemplateRenderer#render` ← `ActionView::Renderer#render_template_to_object` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/renderer.rb`) ← `ActionView::Renderer#render_to_object` ← `block in _render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionView::Base#in_rendering_context` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/base.rb`) ← `ActionView::Rendering#_render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Streaming#_render_template` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/streaming.rb`) ← `ActionView::Rendering#render_to_body` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Rendering#render_to_body` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `ActionController::Renderers#render_to_body` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/renderers.rb`) ← `AbstractController::Rendering#render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/rendering.rb`) ← `ActionController::Rendering#render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `block (2 levels) in render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActiveSupport::Benchmark.realtime` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/benchmark.rb`) ← `block in render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActionController::Instrumentation#cleanup_view_runtime` ← `ActionController::Instrumentation#render` ← `ActionController::ImplicitRender#default_render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/implicit_render.rb`) ← `ActionController::BasicImplicitRender#send_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/basic_implicit_render.rb`) ← `AbstractController::Base#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/base.rb`) ← `ActionController::Rendering#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `block in process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/callbacks.rb`) ← `ActiveSupport::Callbacks#run_callbacks` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/callbacks.rb`) ← `AbstractController::Callbacks#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/callbacks.rb`) ← `ActionController::Rescue#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rescue.rb`) ← `block in process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionController::Instrumentation#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActionController::ParamsWrapper#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/params_wrapper.rb`) ← `AbstractController::Base#process` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/base.rb`) ← `ActionView::Rendering#process` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Metal#dispatch` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal.rb`) ← `ActionController::Metal.dispatch` ← `ActionDispatch::Routing::RouteSet::Dispatcher#dispatch` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb`) ← `ActionDispatch::Routing::RouteSet::Dispatcher#serve` ← `block in serve` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router.rb`) ← `block in recognize` ← `Array#each` ← `ActionDispatch::Journey::Router#recognize` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router.rb`) ← `ActionDispatch::Journey::Router#serve` ← `ActionDispatch::Routing::RouteSet#call` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb`) ← `Rack::TempfileReaper#call` (`/usr/local/bundle/gems/rack-3.2.7/lib/rack/tempfile_reaper.rb`)                                                                                                                                                                                 |
|  -87.5% |    -7 | 0.5% → 0.1% |    8 → 1 | `block in decorate` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`) ← `Hash#each [c function]` ← `Nokogiri::XML::Document#decorate` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`) ← `Nokogiri::XML::Node#children [c function]` ← `Loofah::ScrubBehavior::Node#scrub!` (`/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`) ← `Rails::HTML::Concern::Scrubber::SafeList#scrub` (`/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/sanitizer.rb`) ← `Rails::HTML::Concern::ComposedSanitize#sanitize` ← `ActionView::Helpers::SanitizeHelper#sanitize` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/sanitize_helper.rb`) ← `block in _app_views_statuses_index_html_erb__328993190567029661_3128` ← `Array#each` ← `#<Class:0xffff76d571d8>#_app_views_statuses_index_html_erb__328993190567029661_3128` ← `Kernel#public_send [c function]` ← `ActionView::Base#_run` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/base.rb`) ← `block in render` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/template.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionView::Template#instrument_render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/template.rb`) ← `ActionView::Template#render` ← `block (2 levels) in render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `block in instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActiveSupport::Notifications::Instrumenter#instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications/instrumenter.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `block in render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `block in render_with_layout` ← `block in instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActiveSupport::Notifications::Instrumenter#instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications/instrumenter.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionView::TemplateRenderer#render_with_layout` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `ActionView::TemplateRenderer#render_template` ← `ActionView::TemplateRenderer#render` ← `ActionView::Renderer#render_template_to_object` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/renderer.rb`) ← `ActionView::Renderer#render_to_object` ← `block in _render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionView::Base#in_rendering_context` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/base.rb`) ← `ActionView::Rendering#_render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Streaming#_render_template` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/streaming.rb`) ← `ActionView::Rendering#render_to_body` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Rendering#render_to_body` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `ActionController::Renderers#render_to_body` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/renderers.rb`) ← `AbstractController::Rendering#render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/rendering.rb`) ← `ActionController::Rendering#render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `block (2 levels) in render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActiveSupport::Benchmark.realtime` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/benchmark.rb`) ← `block in render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActionController::Instrumentation#cleanup_view_runtime` ← `ActionController::Instrumentation#render` ← `ActionController::ImplicitRender#default_render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/implicit_render.rb`) ← `ActionController::BasicImplicitRender#send_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/basic_implicit_render.rb`) ← `AbstractController::Base#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/base.rb`) ← `ActionController::Rendering#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `block in process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/callbacks.rb`) ← `ActiveSupport::Callbacks#run_callbacks` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/callbacks.rb`) ← `AbstractController::Callbacks#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/callbacks.rb`) ← `ActionController::Rescue#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rescue.rb`) ← `block in process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionController::Instrumentation#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActionController::ParamsWrapper#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/params_wrapper.rb`) ← `AbstractController::Base#process` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/base.rb`) ← `ActionView::Rendering#process` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Metal#dispatch` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal.rb`) ← `ActionController::Metal.dispatch` ← `ActionDispatch::Routing::RouteSet::Dispatcher#dispatch` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb`) ← `ActionDispatch::Routing::RouteSet::Dispatcher#serve` ← `block in serve` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router.rb`) ← `block in recognize` ← `Array#each` ← `ActionDispatch::Journey::Router#recognize` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router.rb`) ← `ActionDispatch::Journey::Router#serve` ← `ActionDispatch::Routing::RouteSet#call` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb`) ← `Rack::TempfileReaper#call` (`/usr/local/bundle/gems/rack-3.2.7/lib/rack/tempfile_reaper.rb`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  -60.0% |    -6 | 0.6% → 0.3% |   10 → 4 | `Nokogiri::XML::Node#serialize` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node.rb`) ← `Nokogiri::XML::Node#to_format` ← `Nokogiri::XML::Node#to_html` ← `block in to_html` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`) ← `(unknown) [c function]` ← `block in each` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`) ← `Integer#upto [c function]` ← `Nokogiri::XML::NodeSet#each` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`) ← `Enumerable#map [c function]` ← `Nokogiri::XML::NodeSet#to_html` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`) ← `Nokogiri::XML::DocumentFragment#to_html` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document_fragment.rb`) ← `Rails::HTML::Sanitizer#properly_encode` (`/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/sanitizer.rb`) ← `Rails::HTML::Concern::Serializer::UTF8Encode#serialize` ← `Rails::HTML::Concern::ComposedSanitize#sanitize` ← `ActionView::Helpers::SanitizeHelper#sanitize` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/sanitize_helper.rb`) ← `block in _app_views_statuses_index_html_erb__328993190567029661_3128` ← `Array#each` ← `#<Class:0xffff76d571d8>#_app_views_statuses_index_html_erb__328993190567029661_3128` ← `Kernel#public_send [c function]` ← `ActionView::Base#_run` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/base.rb`) ← `block in render` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/template.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionView::Template#instrument_render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/template.rb`) ← `ActionView::Template#render` ← `block (2 levels) in render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `block in instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActiveSupport::Notifications::Instrumenter#instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications/instrumenter.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `block in render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `block in render_with_layout` ← `block in instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActiveSupport::Notifications::Instrumenter#instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications/instrumenter.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionView::TemplateRenderer#render_with_layout` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `ActionView::TemplateRenderer#render_template` ← `ActionView::TemplateRenderer#render` ← `ActionView::Renderer#render_template_to_object` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/renderer.rb`) ← `ActionView::Renderer#render_to_object` ← `block in _render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionView::Base#in_rendering_context` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/base.rb`) ← `ActionView::Rendering#_render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Streaming#_render_template` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/streaming.rb`) ← `ActionView::Rendering#render_to_body` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Rendering#render_to_body` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `ActionController::Renderers#render_to_body` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/renderers.rb`) ← `AbstractController::Rendering#render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/rendering.rb`) ← `ActionController::Rendering#render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `block (2 levels) in render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActiveSupport::Benchmark.realtime` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/benchmark.rb`) ← `block in render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActionController::Instrumentation#cleanup_view_runtime` ← `ActionController::Instrumentation#render` ← `ActionController::ImplicitRender#default_render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/implicit_render.rb`) ← `ActionController::BasicImplicitRender#send_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/basic_implicit_render.rb`) ← `AbstractController::Base#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/base.rb`) ← `ActionController::Rendering#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `block in process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/callbacks.rb`) ← `ActiveSupport::Callbacks#run_callbacks` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/callbacks.rb`) ← `AbstractController::Callbacks#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/callbacks.rb`) ← `ActionController::Rescue#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rescue.rb`) ← `block in process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionController::Instrumentation#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActionController::ParamsWrapper#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/params_wrapper.rb`) ← `AbstractController::Base#process` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/base.rb`) ← `ActionView::Rendering#process` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Metal#dispatch` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal.rb`) ← `ActionController::Metal.dispatch` ← `ActionDispatch::Routing::RouteSet::Dispatcher#dispatch` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb`) ← `ActionDispatch::Routing::RouteSet::Dispatcher#serve` ← `block in serve` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router.rb`) ← `block in recognize` ← `Array#each` ← `ActionDispatch::Journey::Router#recognize` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router.rb`) ← `ActionDispatch::Journey::Router#serve` ← `ActionDispatch::Routing::RouteSet#call` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb`) ← `Rack::TempfileReaper#call` (`/usr/local/bundle/gems/rack-3.2.7/lib/rack/tempfile_reaper.rb`)                                                                                                                                                                                                                                      |
|  -30.8% |    -4 | 0.8% → 0.6% |   13 → 9 | `Nokogiri::XML::DocumentFragment.new` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document_fragment.rb`) ← `Loofah::HtmlFragmentBehavior::ClassMethods#parse` (`/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`) ← `Loofah.html5_fragment` (`/usr/local/bundle/gems/loofah-2.25.2/lib/loofah.rb`) ← `Rails::HTML::Concern::Parser::HTML5#parse_fragment` (`/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/sanitizer.rb`) ← `Rails::HTML::Concern::ComposedSanitize#sanitize` ← `ActionView::Helpers::SanitizeHelper#sanitize` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/sanitize_helper.rb`) ← `block in _app_views_statuses_index_html_erb__328993190567029661_3128` ← `Array#each` ← `#<Class:0xffff76d571d8>#_app_views_statuses_index_html_erb__328993190567029661_3128` ← `Kernel#public_send [c function]` ← `ActionView::Base#_run` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/base.rb`) ← `block in render` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/template.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionView::Template#instrument_render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/template.rb`) ← `ActionView::Template#render` ← `block (2 levels) in render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `block in instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActiveSupport::Notifications::Instrumenter#instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications/instrumenter.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `block in render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `block in render_with_layout` ← `block in instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActiveSupport::Notifications::Instrumenter#instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications/instrumenter.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionView::TemplateRenderer#render_with_layout` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `ActionView::TemplateRenderer#render_template` ← `ActionView::TemplateRenderer#render` ← `ActionView::Renderer#render_template_to_object` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/renderer.rb`) ← `ActionView::Renderer#render_to_object` ← `block in _render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionView::Base#in_rendering_context` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/base.rb`) ← `ActionView::Rendering#_render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Streaming#_render_template` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/streaming.rb`) ← `ActionView::Rendering#render_to_body` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Rendering#render_to_body` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `ActionController::Renderers#render_to_body` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/renderers.rb`) ← `AbstractController::Rendering#render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/rendering.rb`) ← `ActionController::Rendering#render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `block (2 levels) in render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActiveSupport::Benchmark.realtime` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/benchmark.rb`) ← `block in render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActionController::Instrumentation#cleanup_view_runtime` ← `ActionController::Instrumentation#render` ← `ActionController::ImplicitRender#default_render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/implicit_render.rb`) ← `ActionController::BasicImplicitRender#send_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/basic_implicit_render.rb`) ← `AbstractController::Base#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/base.rb`) ← `ActionController::Rendering#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `block in process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/callbacks.rb`) ← `ActiveSupport::Callbacks#run_callbacks` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/callbacks.rb`) ← `AbstractController::Callbacks#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/callbacks.rb`) ← `ActionController::Rescue#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rescue.rb`) ← `block in process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionController::Instrumentation#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActionController::ParamsWrapper#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/params_wrapper.rb`) ← `AbstractController::Base#process` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/base.rb`) ← `ActionView::Rendering#process` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Metal#dispatch` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal.rb`) ← `ActionController::Metal.dispatch` ← `ActionDispatch::Routing::RouteSet::Dispatcher#dispatch` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb`) ← `ActionDispatch::Routing::RouteSet::Dispatcher#serve` ← `block in serve` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router.rb`) ← `block in recognize` ← `Array#each` ← `ActionDispatch::Journey::Router#recognize` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router.rb`) ← `ActionDispatch::Journey::Router#serve` ← `ActionDispatch::Routing::RouteSet#call` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb`) ← `Rack::TempfileReaper#call` (`/usr/local/bundle/gems/rack-3.2.7/lib/rack/tempfile_reaper.rb`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  -80.0% |    -4 | 0.3% → 0.1% |    5 → 1 | `Hash#each [c function]` ← `Nokogiri::XML::Document#decorate` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`) ← `Nokogiri::XML::Node#internal_subset [c function]` ← `Nokogiri::Gumbo.fragment [c function]` ← `Nokogiri::HTML5::DocumentFragment#initialize` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/document_fragment.rb`) ← `Nokogiri::XML::DocumentFragment.new` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document_fragment.rb`) ← `Loofah::HtmlFragmentBehavior::ClassMethods#parse` (`/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`) ← `Loofah.html5_fragment` (`/usr/local/bundle/gems/loofah-2.25.2/lib/loofah.rb`) ← `Rails::HTML::Concern::Parser::HTML5#parse_fragment` (`/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/sanitizer.rb`) ← `Rails::HTML::Concern::ComposedSanitize#sanitize` ← `ActionView::Helpers::SanitizeHelper#sanitize` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/sanitize_helper.rb`) ← `block in _app_views_statuses_index_html_erb__328993190567029661_3128` ← `Array#each` ← `#<Class:0xffff76d571d8>#_app_views_statuses_index_html_erb__328993190567029661_3128` ← `Kernel#public_send [c function]` ← `ActionView::Base#_run` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/base.rb`) ← `block in render` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/template.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionView::Template#instrument_render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/template.rb`) ← `ActionView::Template#render` ← `block (2 levels) in render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `block in instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActiveSupport::Notifications::Instrumenter#instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications/instrumenter.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `block in render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `block in render_with_layout` ← `block in instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActiveSupport::Notifications::Instrumenter#instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications/instrumenter.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionView::TemplateRenderer#render_with_layout` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `ActionView::TemplateRenderer#render_template` ← `ActionView::TemplateRenderer#render` ← `ActionView::Renderer#render_template_to_object` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/renderer.rb`) ← `ActionView::Renderer#render_to_object` ← `block in _render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionView::Base#in_rendering_context` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/base.rb`) ← `ActionView::Rendering#_render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Streaming#_render_template` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/streaming.rb`) ← `ActionView::Rendering#render_to_body` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Rendering#render_to_body` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `ActionController::Renderers#render_to_body` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/renderers.rb`) ← `AbstractController::Rendering#render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/rendering.rb`) ← `ActionController::Rendering#render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `block (2 levels) in render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActiveSupport::Benchmark.realtime` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/benchmark.rb`) ← `block in render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActionController::Instrumentation#cleanup_view_runtime` ← `ActionController::Instrumentation#render` ← `ActionController::ImplicitRender#default_render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/implicit_render.rb`) ← `ActionController::BasicImplicitRender#send_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/basic_implicit_render.rb`) ← `AbstractController::Base#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/base.rb`) ← `ActionController::Rendering#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `block in process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/callbacks.rb`) ← `ActiveSupport::Callbacks#run_callbacks` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/callbacks.rb`) ← `AbstractController::Callbacks#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/callbacks.rb`) ← `ActionController::Rescue#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rescue.rb`) ← `block in process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionController::Instrumentation#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActionController::ParamsWrapper#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/params_wrapper.rb`) ← `AbstractController::Base#process` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/base.rb`) ← `ActionView::Rendering#process` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Metal#dispatch` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal.rb`) ← `ActionController::Metal.dispatch` ← `ActionDispatch::Routing::RouteSet::Dispatcher#dispatch` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb`) ← `ActionDispatch::Routing::RouteSet::Dispatcher#serve` ← `block in serve` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router.rb`) ← `block in recognize` ← `Array#each` ← `ActionDispatch::Journey::Router#recognize` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router.rb`) ← `ActionDispatch::Journey::Router#serve` ← `ActionDispatch::Routing::RouteSet#call` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb`) ← `Rack::TempfileReaper#call` (`/usr/local/bundle/gems/rack-3.2.7/lib/rack/tempfile_reaper.rb`)                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| removed |    -4 | 0.3% → 0.0% |    4 → 0 | `block in decorate` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`) ← `Hash#each [c function]` ← `Nokogiri::XML::Document#decorate` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document.rb`) ← `Nokogiri::XML::Node#children [c function]` ← `Nokogiri::XML::DocumentFragment#to_html` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/document_fragment.rb`) ← `Rails::HTML::Sanitizer#properly_encode` (`/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/sanitizer.rb`) ← `Rails::HTML::Concern::Serializer::UTF8Encode#serialize` ← `Rails::HTML::Concern::ComposedSanitize#sanitize` ← `ActionView::Helpers::SanitizeHelper#sanitize` (`/usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/helpers/sanitize_helper.rb`) ← `block in _app_views_statuses_index_html_erb___3573933945962839437_3112` ← `Array#each` ← `#<Class:0xffff71e26550>#_app_views_statuses_index_html_erb___3573933945962839437_3112` ← `Kernel#public_send [c function]` ← `ActionView::Base#_run` (`/usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/base.rb`) ← `block in render` (`/usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/template.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/notifications.rb`) ← `ActionView::Template#instrument_render_template` (`/usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/template.rb`) ← `ActionView::Template#render` ← `block (2 levels) in render_template` (`/usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/renderer/template_renderer.rb`) ← `block in instrument` (`/usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/notifications.rb`) ← `ActiveSupport::Notifications::Instrumenter#instrument` (`/usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/notifications/instrumenter.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/notifications.rb`) ← `block in render_template` (`/usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/renderer/template_renderer.rb`) ← `block in render_with_layout` ← `block in instrument` (`/usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/notifications.rb`) ← `ActiveSupport::Notifications::Instrumenter#instrument` (`/usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/notifications/instrumenter.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/notifications.rb`) ← `ActionView::TemplateRenderer#render_with_layout` (`/usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/renderer/template_renderer.rb`) ← `ActionView::TemplateRenderer#render_template` ← `ActionView::TemplateRenderer#render` ← `ActionView::Renderer#render_template_to_object` (`/usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/renderer/renderer.rb`) ← `ActionView::Renderer#render_to_object` ← `block in _render_template` (`/usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/rendering.rb`) ← `ActionView::Base#in_rendering_context` (`/usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/base.rb`) ← `ActionView::Rendering#_render_template` (`/usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/rendering.rb`) ← `ActionController::Streaming#_render_template` (`/usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_controller/metal/streaming.rb`) ← `ActionView::Rendering#render_to_body` (`/usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/rendering.rb`) ← `ActionController::Rendering#render_to_body` (`/usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_controller/metal/rendering.rb`) ← `ActionController::Renderers#render_to_body` (`/usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_controller/metal/renderers.rb`) ← `AbstractController::Rendering#render` (`/usr/local/bundle/gems/actionpack-8.1.3.1/lib/abstract_controller/rendering.rb`) ← `ActionController::Rendering#render` (`/usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_controller/metal/rendering.rb`) ← `block (2 levels) in render` (`/usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_controller/metal/instrumentation.rb`) ← `ActiveSupport::Benchmark.realtime` (`/usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/benchmark.rb`) ← `block in render` (`/usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_controller/metal/instrumentation.rb`) ← `ActionController::Instrumentation#cleanup_view_runtime` ← `ActionController::Instrumentation#render` ← `ActionController::ImplicitRender#default_render` (`/usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_controller/metal/implicit_render.rb`) ← `ActionController::BasicImplicitRender#send_action` (`/usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_controller/metal/basic_implicit_render.rb`) ← `AbstractController::Base#process_action` (`/usr/local/bundle/gems/actionpack-8.1.3.1/lib/abstract_controller/base.rb`) ← `ActionController::Rendering#process_action` (`/usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_controller/metal/rendering.rb`) ← `block in process_action` (`/usr/local/bundle/gems/actionpack-8.1.3.1/lib/abstract_controller/callbacks.rb`) ← `ActiveSupport::Callbacks#run_callbacks` (`/usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/callbacks.rb`) ← `AbstractController::Callbacks#process_action` (`/usr/local/bundle/gems/actionpack-8.1.3.1/lib/abstract_controller/callbacks.rb`) ← `ActionController::Rescue#process_action` (`/usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_controller/metal/rescue.rb`) ← `block in process_action` (`/usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_controller/metal/instrumentation.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.3.1/lib/active_support/notifications.rb`) ← `ActionController::Instrumentation#process_action` (`/usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_controller/metal/instrumentation.rb`) ← `ActionController::ParamsWrapper#process_action` (`/usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_controller/metal/params_wrapper.rb`) ← `AbstractController::Base#process` (`/usr/local/bundle/gems/actionpack-8.1.3.1/lib/abstract_controller/base.rb`) ← `ActionView::Rendering#process` (`/usr/local/bundle/gems/actionview-8.1.3.1/lib/action_view/rendering.rb`) ← `ActionController::Metal#dispatch` (`/usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_controller/metal.rb`) ← `ActionController::Metal.dispatch` ← `ActionDispatch::Routing::RouteSet::Dispatcher#dispatch` (`/usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/routing/route_set.rb`) ← `ActionDispatch::Routing::RouteSet::Dispatcher#serve` ← `block in serve` (`/usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/journey/router.rb`) ← `block in recognize` ← `Array#each` ← `ActionDispatch::Journey::Router#recognize` (`/usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/journey/router.rb`) ← `ActionDispatch::Journey::Router#serve` ← `ActionDispatch::Routing::RouteSet#call` (`/usr/local/bundle/gems/actionpack-8.1.3.1/lib/action_dispatch/routing/route_set.rb`) ← `Rack::TempfileReaper#call` (`/usr/local/bundle/gems/rack-3.2.7/lib/rack/tempfile_reaper.rb`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  -80.0% |    -4 | 0.3% → 0.1% |    5 → 1 | `Nokogiri::HTML5::Document#initialize` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/html5/document.rb`) ← `Loofah::DocumentDecorator#initialize` (`/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`) ← `Nokogiri::HTML4::Document.new [c function]` ← `Loofah::HtmlFragmentBehavior::ClassMethods#parse` (`/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`) ← `Loofah.html5_fragment` (`/usr/local/bundle/gems/loofah-2.25.2/lib/loofah.rb`) ← `Rails::HTML::Concern::Parser::HTML5#parse_fragment` (`/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/sanitizer.rb`) ← `Rails::HTML::Concern::ComposedSanitize#sanitize` ← `ActionView::Helpers::SanitizeHelper#sanitize` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/sanitize_helper.rb`) ← `block in _app_views_statuses_index_html_erb__328993190567029661_3128` ← `Array#each` ← `#<Class:0xffff76d571d8>#_app_views_statuses_index_html_erb__328993190567029661_3128` ← `Kernel#public_send [c function]` ← `ActionView::Base#_run` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/base.rb`) ← `block in render` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/template.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionView::Template#instrument_render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/template.rb`) ← `ActionView::Template#render` ← `block (2 levels) in render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `block in instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActiveSupport::Notifications::Instrumenter#instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications/instrumenter.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `block in render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `block in render_with_layout` ← `block in instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActiveSupport::Notifications::Instrumenter#instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications/instrumenter.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionView::TemplateRenderer#render_with_layout` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `ActionView::TemplateRenderer#render_template` ← `ActionView::TemplateRenderer#render` ← `ActionView::Renderer#render_template_to_object` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/renderer.rb`) ← `ActionView::Renderer#render_to_object` ← `block in _render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionView::Base#in_rendering_context` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/base.rb`) ← `ActionView::Rendering#_render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Streaming#_render_template` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/streaming.rb`) ← `ActionView::Rendering#render_to_body` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Rendering#render_to_body` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `ActionController::Renderers#render_to_body` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/renderers.rb`) ← `AbstractController::Rendering#render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/rendering.rb`) ← `ActionController::Rendering#render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `block (2 levels) in render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActiveSupport::Benchmark.realtime` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/benchmark.rb`) ← `block in render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActionController::Instrumentation#cleanup_view_runtime` ← `ActionController::Instrumentation#render` ← `ActionController::ImplicitRender#default_render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/implicit_render.rb`) ← `ActionController::BasicImplicitRender#send_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/basic_implicit_render.rb`) ← `AbstractController::Base#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/base.rb`) ← `ActionController::Rendering#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `block in process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/callbacks.rb`) ← `ActiveSupport::Callbacks#run_callbacks` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/callbacks.rb`) ← `AbstractController::Callbacks#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/callbacks.rb`) ← `ActionController::Rescue#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rescue.rb`) ← `block in process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionController::Instrumentation#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActionController::ParamsWrapper#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/params_wrapper.rb`) ← `AbstractController::Base#process` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/base.rb`) ← `ActionView::Rendering#process` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Metal#dispatch` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal.rb`) ← `ActionController::Metal.dispatch` ← `ActionDispatch::Routing::RouteSet::Dispatcher#dispatch` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb`) ← `ActionDispatch::Routing::RouteSet::Dispatcher#serve` ← `block in serve` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router.rb`) ← `block in recognize` ← `Array#each` ← `ActionDispatch::Journey::Router#recognize` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router.rb`) ← `ActionDispatch::Journey::Router#serve` ← `ActionDispatch::Routing::RouteSet#call` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb`) ← `Rack::TempfileReaper#call` (`/usr/local/bundle/gems/rack-3.2.7/lib/rack/tempfile_reaper.rb`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  -44.4% |    -4 | 0.6% → 0.3% |    9 → 5 | `ERB::Util.html_escape [c function]` ← `ActiveSupport::CoreExt::ERBUtil#html_escape` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/core_ext/erb/util.rb`) ← `ActionView::OutputBuffer#<<` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/buffers.rb`) ← `block in _app_views_statuses_index_html_erb__328993190567029661_3128` ← `Array#each` ← `#<Class:0xffff76d571d8>#_app_views_statuses_index_html_erb__328993190567029661_3128` ← `Kernel#public_send [c function]` ← `ActionView::Base#_run` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/base.rb`) ← `block in render` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/template.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionView::Template#instrument_render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/template.rb`) ← `ActionView::Template#render` ← `block (2 levels) in render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `block in instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActiveSupport::Notifications::Instrumenter#instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications/instrumenter.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `block in render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `block in render_with_layout` ← `block in instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActiveSupport::Notifications::Instrumenter#instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications/instrumenter.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionView::TemplateRenderer#render_with_layout` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `ActionView::TemplateRenderer#render_template` ← `ActionView::TemplateRenderer#render` ← `ActionView::Renderer#render_template_to_object` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/renderer.rb`) ← `ActionView::Renderer#render_to_object` ← `block in _render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionView::Base#in_rendering_context` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/base.rb`) ← `ActionView::Rendering#_render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Streaming#_render_template` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/streaming.rb`) ← `ActionView::Rendering#render_to_body` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Rendering#render_to_body` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `ActionController::Renderers#render_to_body` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/renderers.rb`) ← `AbstractController::Rendering#render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/rendering.rb`) ← `ActionController::Rendering#render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `block (2 levels) in render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActiveSupport::Benchmark.realtime` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/benchmark.rb`) ← `block in render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActionController::Instrumentation#cleanup_view_runtime` ← `ActionController::Instrumentation#render` ← `ActionController::ImplicitRender#default_render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/implicit_render.rb`) ← `ActionController::BasicImplicitRender#send_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/basic_implicit_render.rb`) ← `AbstractController::Base#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/base.rb`) ← `ActionController::Rendering#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `block in process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/callbacks.rb`) ← `ActiveSupport::Callbacks#run_callbacks` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/callbacks.rb`) ← `AbstractController::Callbacks#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/callbacks.rb`) ← `ActionController::Rescue#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rescue.rb`) ← `block in process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionController::Instrumentation#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActionController::ParamsWrapper#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/params_wrapper.rb`) ← `AbstractController::Base#process` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/base.rb`) ← `ActionView::Rendering#process` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Metal#dispatch` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal.rb`) ← `ActionController::Metal.dispatch` ← `ActionDispatch::Routing::RouteSet::Dispatcher#dispatch` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb`) ← `ActionDispatch::Routing::RouteSet::Dispatcher#serve` ← `block in serve` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router.rb`) ← `block in recognize` ← `Array#each` ← `ActionDispatch::Journey::Router#recognize` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router.rb`) ← `ActionDispatch::Journey::Router#serve` ← `ActionDispatch::Routing::RouteSet#call` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb`) ← `Rack::TempfileReaper#call` (`/usr/local/bundle/gems/rack-3.2.7/lib/rack/tempfile_reaper.rb`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  -75.0% |    -3 | 0.3% → 0.1% |    4 → 1 | `Set#include?` (`/usr/local/lib/ruby/3.4.0/set.rb`) ← `Rails::HTML::PermitScrubber#scrub_attribute` (`/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`) ← `block in scrub_attributes` ← `Array#each` ← `Rails::HTML::PermitScrubber#scrub_attributes` (`/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/scrubbers.rb`) ← `Rails::HTML::PermitScrubber#scrub` ← `Loofah::Scrubber#traverse_conditionally_bottom_up` (`/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/scrubber.rb`) ← `Loofah::Scrubber#traverse` ← `Loofah::ScrubBehavior::Node#scrub!` (`/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`) ← `block in scrub!` ← `block in each` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`) ← `Integer#upto [c function]` ← `Nokogiri::XML::NodeSet#each` (`/usr/local/bundle/gems/nokogiri-1.19.4-aarch64-linux-gnu/lib/nokogiri/xml/node_set.rb`) ← `Loofah::ScrubBehavior::NodeSet#scrub!` (`/usr/local/bundle/gems/loofah-2.25.2/lib/loofah/concerns.rb`) ← `Loofah::ScrubBehavior::Node#scrub!` ← `Rails::HTML::Concern::Scrubber::SafeList#scrub` (`/usr/local/bundle/gems/rails-html-sanitizer-1.7.1/lib/rails/html/sanitizer.rb`) ← `Rails::HTML::Concern::ComposedSanitize#sanitize` ← `ActionView::Helpers::SanitizeHelper#sanitize` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/sanitize_helper.rb`) ← `block in _app_views_statuses_index_html_erb__328993190567029661_3128` ← `Array#each` ← `#<Class:0xffff76d571d8>#_app_views_statuses_index_html_erb__328993190567029661_3128` ← `Kernel#public_send [c function]` ← `ActionView::Base#_run` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/base.rb`) ← `block in render` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/template.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionView::Template#instrument_render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/template.rb`) ← `ActionView::Template#render` ← `block (2 levels) in render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `block in instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActiveSupport::Notifications::Instrumenter#instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications/instrumenter.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `block in render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `block in render_with_layout` ← `block in instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActiveSupport::Notifications::Instrumenter#instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications/instrumenter.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionView::TemplateRenderer#render_with_layout` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `ActionView::TemplateRenderer#render_template` ← `ActionView::TemplateRenderer#render` ← `ActionView::Renderer#render_template_to_object` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/renderer.rb`) ← `ActionView::Renderer#render_to_object` ← `block in _render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionView::Base#in_rendering_context` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/base.rb`) ← `ActionView::Rendering#_render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Streaming#_render_template` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/streaming.rb`) ← `ActionView::Rendering#render_to_body` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Rendering#render_to_body` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `ActionController::Renderers#render_to_body` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/renderers.rb`) ← `AbstractController::Rendering#render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/rendering.rb`) ← `ActionController::Rendering#render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `block (2 levels) in render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActiveSupport::Benchmark.realtime` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/benchmark.rb`) ← `block in render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActionController::Instrumentation#cleanup_view_runtime` ← `ActionController::Instrumentation#render` ← `ActionController::ImplicitRender#default_render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/implicit_render.rb`) ← `ActionController::BasicImplicitRender#send_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/basic_implicit_render.rb`) ← `AbstractController::Base#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/base.rb`) ← `ActionController::Rendering#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `block in process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/callbacks.rb`) ← `ActiveSupport::Callbacks#run_callbacks` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/callbacks.rb`) ← `AbstractController::Callbacks#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/callbacks.rb`) ← `ActionController::Rescue#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rescue.rb`) ← `block in process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionController::Instrumentation#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActionController::ParamsWrapper#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/params_wrapper.rb`) ← `AbstractController::Base#process` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/base.rb`) ← `ActionView::Rendering#process` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Metal#dispatch` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal.rb`) ← `ActionController::Metal.dispatch` ← `ActionDispatch::Routing::RouteSet::Dispatcher#dispatch` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb`) ← `ActionDispatch::Routing::RouteSet::Dispatcher#serve` ← `block in serve` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router.rb`) ← `block in recognize` ← `Array#each` ← `ActionDispatch::Journey::Router#recognize` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router.rb`) ← `ActionDispatch::Journey::Router#serve` ← `ActionDispatch::Routing::RouteSet#call` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb`) ← `Rack::TempfileReaper#call` (`/usr/local/bundle/gems/rack-3.2.7/lib/rack/tempfile_reaper.rb`)                                                                                           |
|  -50.0% |    -3 | 0.4% → 0.2% |    6 → 3 | `OpenSSL::HMAC#initialize [c function]` ← `Class#new [c function]` ← `OpenSSL::HMAC.digest` (`/usr/local/lib/ruby/3.4.0/openssl/hmac.rb`) ← `ActionController::RequestForgeryProtection#csrf_token_hmac` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/request_forgery_protection.rb`) ← `ActionController::RequestForgeryProtection#global_csrf_token` ← `ActionController::RequestForgeryProtection#masked_authenticity_token` ← `ActionController::RequestForgeryProtection#form_authenticity_token` ← `ActionController::Base::HelperMethods#form_authenticity_token` ← `ActionView::Helpers::CsrfHelper#csrf_meta_tags` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/helpers/csrf_helper.rb`) ← `#<Class:0xffff76d571d8>#_app_views_layouts_application_html_erb___4441820961383043729_3160` ← `Kernel#public_send [c function]` ← `ActionView::Base#_run` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/base.rb`) ← `block in render` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/template.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionView::Template#instrument_render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/template.rb`) ← `ActionView::Template#render` ← `block in render_with_layout` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `block in instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActiveSupport::Notifications::Instrumenter#instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications/instrumenter.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionView::TemplateRenderer#render_with_layout` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `ActionView::TemplateRenderer#render_template` ← `ActionView::TemplateRenderer#render` ← `ActionView::Renderer#render_template_to_object` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/renderer.rb`) ← `ActionView::Renderer#render_to_object` ← `block in _render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionView::Base#in_rendering_context` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/base.rb`) ← `ActionView::Rendering#_render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Streaming#_render_template` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/streaming.rb`) ← `ActionView::Rendering#render_to_body` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Rendering#render_to_body` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `ActionController::Renderers#render_to_body` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/renderers.rb`) ← `AbstractController::Rendering#render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/rendering.rb`) ← `ActionController::Rendering#render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `block (2 levels) in render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActiveSupport::Benchmark.realtime` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/benchmark.rb`) ← `block in render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActionController::Instrumentation#cleanup_view_runtime` ← `ActionController::Instrumentation#render` ← `ActionController::ImplicitRender#default_render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/implicit_render.rb`) ← `ActionController::BasicImplicitRender#send_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/basic_implicit_render.rb`) ← `AbstractController::Base#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/base.rb`) ← `ActionController::Rendering#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `block in process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/callbacks.rb`) ← `ActiveSupport::Callbacks#run_callbacks` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/callbacks.rb`) ← `AbstractController::Callbacks#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/callbacks.rb`) ← `ActionController::Rescue#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rescue.rb`) ← `block in process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionController::Instrumentation#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActionController::ParamsWrapper#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/params_wrapper.rb`) ← `AbstractController::Base#process` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/base.rb`) ← `ActionView::Rendering#process` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Metal#dispatch` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal.rb`) ← `ActionController::Metal.dispatch` ← `ActionDispatch::Routing::RouteSet::Dispatcher#dispatch` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb`) ← `ActionDispatch::Routing::RouteSet::Dispatcher#serve` ← `block in serve` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router.rb`) ← `block in recognize` ← `Array#each` ← `ActionDispatch::Journey::Router#recognize` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router.rb`) ← `ActionDispatch::Journey::Router#serve` ← `ActionDispatch::Routing::RouteSet#call` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb`) ← `Rack::TempfileReaper#call` (`/usr/local/bundle/gems/rack-3.2.7/lib/rack/tempfile_reaper.rb`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  -75.0% |    -3 | 0.3% → 0.1% |    4 → 1 | `ActiveSupport::CoreExt::ERBUtil#html_escape` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/core_ext/erb/util.rb`) ← `ActionView::OutputBuffer#<<` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/buffers.rb`) ← `block in _app_views_statuses_index_html_erb__328993190567029661_3128` ← `Array#each` ← `#<Class:0xffff76d571d8>#_app_views_statuses_index_html_erb__328993190567029661_3128` ← `Kernel#public_send [c function]` ← `ActionView::Base#_run` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/base.rb`) ← `block in render` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/template.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionView::Template#instrument_render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/template.rb`) ← `ActionView::Template#render` ← `block (2 levels) in render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `block in instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActiveSupport::Notifications::Instrumenter#instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications/instrumenter.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `block in render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `block in render_with_layout` ← `block in instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActiveSupport::Notifications::Instrumenter#instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications/instrumenter.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionView::TemplateRenderer#render_with_layout` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/template_renderer.rb`) ← `ActionView::TemplateRenderer#render_template` ← `ActionView::TemplateRenderer#render` ← `ActionView::Renderer#render_template_to_object` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/renderer/renderer.rb`) ← `ActionView::Renderer#render_to_object` ← `block in _render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionView::Base#in_rendering_context` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/base.rb`) ← `ActionView::Rendering#_render_template` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Streaming#_render_template` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/streaming.rb`) ← `ActionView::Rendering#render_to_body` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Rendering#render_to_body` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `ActionController::Renderers#render_to_body` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/renderers.rb`) ← `AbstractController::Rendering#render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/rendering.rb`) ← `ActionController::Rendering#render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `block (2 levels) in render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActiveSupport::Benchmark.realtime` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/benchmark.rb`) ← `block in render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActionController::Instrumentation#cleanup_view_runtime` ← `ActionController::Instrumentation#render` ← `ActionController::ImplicitRender#default_render` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/implicit_render.rb`) ← `ActionController::BasicImplicitRender#send_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/basic_implicit_render.rb`) ← `AbstractController::Base#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/base.rb`) ← `ActionController::Rendering#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rendering.rb`) ← `block in process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/callbacks.rb`) ← `ActiveSupport::Callbacks#run_callbacks` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/callbacks.rb`) ← `AbstractController::Callbacks#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/callbacks.rb`) ← `ActionController::Rescue#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/rescue.rb`) ← `block in process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActiveSupport::Notifications.instrument` (`/usr/local/bundle/gems/activesupport-8.1.4/lib/active_support/notifications.rb`) ← `ActionController::Instrumentation#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/instrumentation.rb`) ← `ActionController::ParamsWrapper#process_action` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal/params_wrapper.rb`) ← `AbstractController::Base#process` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/abstract_controller/base.rb`) ← `ActionView::Rendering#process` (`/usr/local/bundle/gems/actionview-8.1.4/lib/action_view/rendering.rb`) ← `ActionController::Metal#dispatch` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_controller/metal.rb`) ← `ActionController::Metal.dispatch` ← `ActionDispatch::Routing::RouteSet::Dispatcher#dispatch` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb`) ← `ActionDispatch::Routing::RouteSet::Dispatcher#serve` ← `block in serve` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router.rb`) ← `block in recognize` ← `Array#each` ← `ActionDispatch::Journey::Router#recognize` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/journey/router.rb`) ← `ActionDispatch::Journey::Router#serve` ← `ActionDispatch::Routing::RouteSet#call` (`/usr/local/bundle/gems/actionpack-8.1.4/lib/action_dispatch/routing/route_set.rb`) ← `Rack::TempfileReaper#call` (`/usr/local/bundle/gems/rack-3.2.7/lib/rack/tempfile_reaper.rb`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
