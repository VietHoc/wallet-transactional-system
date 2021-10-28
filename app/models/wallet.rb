class Wallet < ApplicationRecord
  belongs_to :user
  has_many :transactions

  def balance
    Transaction.where(from_wallet: self).or(Transaction.where(to_wallet: self)).sum do |tr|
      isWithinTransaction = (tr.status == Transaction.statuses["success"]) && (tr.to_wallet_id == self.id) &&
                              (tr.transaction_type == Transaction.types["deposit"])
      if isWithinTransaction
        tr.amount 
      else
        -tr.amount
      end
    end
  end
end
