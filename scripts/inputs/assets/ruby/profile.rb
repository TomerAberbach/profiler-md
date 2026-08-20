# frozen_string_literal: true

# Serves the timeline page in-process, so the sampled frames are Rails handling
# a request: routing, the controller, the compiled ERB template, and the URL
# helpers.

require_relative "config/environment"

deadline = Time.now + Integer(ARGV.fetch(0))
env = Rack::MockRequest.env_for("/")

status = nil
while Time.now < deadline
  status, _headers, body = Rails.application.call(env.dup)
  body.close if body.respond_to?(:close)
end

raise "unexpected response status: #{status}" unless status == 200
