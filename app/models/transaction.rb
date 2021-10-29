class Transaction < ApplicationRecord
  belongs_to :to_wallet, class_name: "Wallet"
  belongs_to :from_wallet, class_name: "Wallet"

  validates :amount, presence: true, numericality: { greater_than: 0}
  validate :transferable, :amount_valid, on: :create

  enum statuses: [:pending, :success, :failed]
  enum types: [:deposit, :withdraw, :transfer]

  def amount_valid
    isValidAmount = (self.transaction_type ==Transaction.types["transfer"]) && (self.from_wallet.balance < self.amount)
    if isValidAmount
      errors.add(:amount, "is greater than the account balance")
    end
  end

  def transferable
    isTranferToSameWallet = (self.transaction_type ==Transaction.types["transfer"]) && 
                                (self.from_wallet.id == self.to_wallet.id)
    if isTranferToSameWallet
      errors.add(:to_wallet, "is the same send wallet")
    end
  end
end
