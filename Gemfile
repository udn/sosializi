# frozen_string_literal: true

source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "3.2.2"

gem "cpl", "~> 0.3.3"
gem "react_on_rails", "13.2.0"
gem "shakapacker", "7.0.0"

# Bundle edge Rails instead: gem "rails", github: "rails/rails"
gem "listen"
gem "rails", "~> 7.0.5.1"

gem "pg"

gem "puma"

# Use SCSS for stylesheets
gem "sass-rails"
# Use Uglifier as compressor for JavaScript assets
gem "uglifier"
# Use CoffeeScript for .js.coffee assets and views
gem "coffee-rails"

# Turbolinks makes following links in your web application faster.
# Read more: https://github.com/turbolinks/turbolinks
# Get turbolinks from npm!
# gem 'turbolinks', '>= 5.0.0.beta2'

# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem "jbuilder"
gem "redis", "3.3.3"

# bundle exec rake doc:rails generates the API under doc/api.
gem "sdoc", group: :doc

# Use ActiveModel has_secure_password
# gem "bcrypt", "~> 3.1.7"

# Use Rails Html Sanitizer for HTML sanitization
gem "rails-html-sanitizer"

gem "autoprefixer-rails"

gem "awesome_print"

# FIXME: quick fix for rails6, not needed since rails 7.0.1
# https://github.com/rails/rails/pull/44083
gem "net-imap", require: false
gem "net-pop", require: false
gem "net-smtp", require: false

# jquery as the JavaScript library has been moved under /client and managed by npm.
# It is critical to not include any of the jquery gems when following this pattern or
# else you might have multiple jQuery versions.

group :development do
  # Access an IRB console on exceptions page and /console in development
  gem "web-console"
end

group :development, :test do
  ################################################################################
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem "spring"
  gem "spring-commands-rspec"

  ################################################################################
  # Manage application processes
  gem "factory_bot_rails"
  gem "foreman"

  ################################################################################
  # Linters and Security
  gem "rubocop", "1.24.1", require: false
  gem "rubocop-performance", "~> 1.13"
  gem "rubocop-rails"
  gem "rubocop-rspec", "~> 2.7"
  # Critical that require: false be set! https://github.com/brigade/scss-lint/issues/278
  gem "scss_lint", require: false

  ################################################################################
  # Favorite debugging gems
  gem "debug", ">= 1.0.0"

  gem "pry"
  gem "pry-byebug"
  gem "pry-doc"
  gem "pry-rails"
  gem "pry-rescue"
  gem "pry-stack_explorer"

  ################################################################################
  # Color console output
  gem "rainbow"
end

group :test do
  gem "capybara"
  gem "capybara-screenshot"
  gem "coveralls_reborn", "~> 0.25.0", require: false
  gem "database_cleaner"
  gem "generator_spec"
  gem "launchy"
  gem "rails_best_practices"
  gem "rspec-rails", "~> 6.0.0"
  gem "selenium-webdriver", "~> 4"
  gem "webdrivers", "~> 5.2"
end
