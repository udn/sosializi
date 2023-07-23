# frozen_string_literal: true

namespace :rails_best_practices do
  desc "Run Rails Best Practices"
  task run: :environment do
    sh "rails_best_practices"
  end
end
