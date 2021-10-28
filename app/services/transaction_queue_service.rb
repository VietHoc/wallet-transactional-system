class TransactionQueueService
  include Singleton
  attr_accessor :queue

  def initialize
    @queue = Queue.new
  end
end