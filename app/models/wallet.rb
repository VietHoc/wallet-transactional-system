class Wallet < ApplicationRecord
  belongs_to :user
  has_many :transactions

  def amount
    Transaction.where(from_wallet: self).or(Transaction.where(to_wallet: self)).sum do |tr|
      if (tr.status == Transaction.statuses["success"]) && (tr.to_wallet_id == self.id)
        tr.amount 
      else
        -tr.amount
      end
    end
  end
end
