class TransactionService
  attr_accessor :from_wallet, :to_wallet, :amount, :description

  def initialize(from_wallet, to_wallet, amount, description)
    @from_wallet = from_wallet
    @to_wallet = to_wallet
    @amount = amount
    @description = description
  end

  def call
    ActiveRecord::Base.transaction do
      Transaction.create(
        from_wallet_id: @from_wallet,
        to_wallet_id: @to_wallet,
        amount: @amount,
        transaction_type: Transaction.types["tranfer"],
        status: Transaction.statuses["success"],
        description: @description
      )
    end
  end
end