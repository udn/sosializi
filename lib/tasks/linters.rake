# frozen_string_literal: true

if %w[development test].include? Rails.env
  namespace :lint do
    # require "rubocop/rake_task"
    # require "slim_lint/rake_task"
    require "scss_lint/rake_task"

    # This fails: https://github.com/bbatsov/rubocop/issues/1840
    # RuboCop::RakeTask.new

    desc "Run Rubocop lint as shell. Specify option fix to auto-correct (and don't have uncommitted files!)."
    task :rubocop, [:fix] => [:environment] do |_t, args|
      def to_bool(str)
        return true if /^(true|t|yes|y|1)$/i.match?(str)
        return false if str.blank? || str =~ /^(false|f|no|n|0)$/i

        raise ArgumentError, "invalid value for Boolean: \"#{str}\""
      end

      fix = (args.fix == "fix") || to_bool(args.fix)
      cmd = "rubocop -S -D#{fix ? ' -a' : ''} ."
      puts "Running Rubocop Linters via `#{cmd}`#{fix ? ' auto-correct is turned on!' : ''}"
      sh cmd
    end

    # SlimLint::RakeTask.new do |t|
    #   t.files = ["app/views"]
    # end

    SCSSLint::RakeTask.new do |t|
      t.files = ["client/"]
    end

    desc "eslint"
    task eslint: :environment do
      cmd = "yarn run lint"
      puts "Running eslint via `#{cmd}`"
      sh cmd
    end

    desc "JS Linting"
    task js: [:eslint] do
      puts "Completed running all JavaScript Linters"
    end

    # desc "See docs for task 'slim_lint'"
    # task slim: :slim_lint

    desc "See docs for task 'scss_lint'"
    task scss: :scss_lint

    task lint: %i[rubocop js scss] do
      puts "Completed all linting"
    end
  end

  desc "Runs all linters. Run `rake -D lint` to see all available lint options"
  task lint: ["lint:lint"]
end
