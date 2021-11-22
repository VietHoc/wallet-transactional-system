class GuestsCleanupJob < ApplicationJob
  queue_as :default

  def perform(*args)
    # Do something later
    puts "Running job"
  end
end
