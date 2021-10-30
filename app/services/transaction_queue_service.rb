class TransactionQueueService
  include Singleton
  attr_accessor :deposit_queue, :withdraw_queue, :transfer_queue

  def initialize
    @deposit_queue = Queue.new
    @withdraw_queue = Queue.new
    @transfer_queue = Queue.new
  end
end
