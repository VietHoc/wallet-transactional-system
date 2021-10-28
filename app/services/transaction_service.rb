class TransactionService
  attr_accessor :from_wallet, :to_wallet, :amount, :description

  def initialize(from_wallet, to_wallet, amount, description)
    @from_wallet = from_wallet
    @to_wallet = to_wallet
    @amount = amount
    @description = description
  end

  def tranfer
    create_transaction Transaction.types["tranfer"]
  end

  def deposit
    create_transaction Transaction.types["deposit"]
  end

  def withdraw
    create_transaction Transaction.types["withdraw"]
  end

  private 
  def create_transaction transaction_type
    ActiveRecord::Base.transaction do
      Transaction.create(
        from_wallet_id: @from_wallet,
        to_wallet_id: @to_wallet,
        amount: @amount,
        transaction_type: transaction_type,
        status: Transaction.statuses["success"],
        description: @description
      )
    end
  end
end