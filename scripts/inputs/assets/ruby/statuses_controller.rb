# frozen_string_literal: true

class StatusesController < ApplicationController
  def index
    @statuses = Rails.application.config.x.statuses
  end
end
