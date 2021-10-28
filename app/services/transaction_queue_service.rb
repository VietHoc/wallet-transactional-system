class TransactionQueueService
  include Singleton
  attr_accessor :deposit_queue, :withdraw_queue, :tranfer_queue

  def initialize
    @deposit_queue = Queue.new
    @withdraw_queue = Queue.new
    @tranfer_queue = Queue.new
  end
end