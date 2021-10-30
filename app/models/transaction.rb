class Transaction < ApplicationRecord
  belongs_to :to_wallet, class_name: 'Wallet'
  belongs_to :from_wallet, class_name: 'Wallet'

  validates :amount, presence: true, numericality: { greater_than: 0 }
  validate :transferable, :amount_invalid, :valid_transaction, on: :create

  enum statuses: [:pending, :success, :failed]
  enum types: [:deposit, :withdraw, :transfer]

  def amount_invalid
    in_valid_amount = (transfer? || withdraw?) && self.from_wallet.balance < amount

    errors.add(:amount, 'is greater than the account balance') if in_valid_amount
  end

  def transferable
    is_tranfer_to_same_wallet = self_transaction? && transfer?
    
    errors.add(:to_wallet, 'is the same send wallet') if is_tranfer_to_same_wallet
  end

  def valid_transaction
    invalid = (deposit? || withdraw?) && from_wallet_id != to_wallet_id
    
    errors.add(:transaction, 'is invalid') if invalid
  end

  def deposit_success?
    success? && self_transaction? && deposit?
  end

  def receive_success? (wallet_id)
    success? && to_wallet_id == wallet_id && transfer?
  end

  def success?
    status == Transaction.statuses['success']
  end

  def deposit?
    transaction_type == Transaction.types['deposit']
  end

  def withdraw?
    transaction_type == Transaction.types['withdraw']
  end

  def transfer?
    transaction_type == Transaction.types['transfer']
  end

  def self_transaction?
    from_wallet_id == to_wallet_id
  end
end
