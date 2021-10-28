class Transaction < ApplicationRecord
  belongs_to :to_wallet, class_name: "Wallet"
  belongs_to :from_wallet, class_name: "Wallet"

  validates :amount, presence: true, numericality: true

  enum status: [:pending, :success, :failed]
  enum type: [:add_money, :tranfer]
end
