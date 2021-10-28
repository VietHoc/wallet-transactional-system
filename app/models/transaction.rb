class Transaction < ApplicationRecord
  belongs_to :to_wallet, class_name: "Wallet"
  belongs_to :from_wallet, class_name: "Wallet"

  validates :amount, presence: true, numericality: true

  enum statuses: [:pending, :success, :failed]
  enum types: [:add_money, :tranfer]
end
