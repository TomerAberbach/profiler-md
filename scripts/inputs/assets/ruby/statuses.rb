# frozen_string_literal: true

Rails.application.config.x.statuses =
  JSON.parse(File.read(Rails.root.join("twitter.json"))).fetch("statuses")
