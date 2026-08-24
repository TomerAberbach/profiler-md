# frozen_string_literal: true

Rails.application.routes.draw do
  root "statuses#index"
  get "users/:screen_name", to: "statuses#index", as: :user
  get "hashtags/:text", to: "statuses#index", as: :hashtag
end
