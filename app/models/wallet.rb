class Wallet < ApplicationRecord
  has_one :user
  has_one :team
  has_one :stock
  has_many :transactions

  def balance
    Transaction.where(from_wallet: self).or(Transaction.where(to_wallet: self)).sum do |tr|
      deposit = (tr.status == Transaction.statuses["success"]) && (tr.from_wallet_id == self.id) &&
                  (tr.to_wallet_id == self.id) && (tr.transaction_type == Transaction.types["deposit"])
      receive = (tr.status == Transaction.statuses["success"]) && (tr.to_wallet_id == self.id) &&
                    (tr.transaction_type == Transaction.types["transfer"])

      if (deposit || receive)
        tr.amount 
      else
        -tr.amount
      end
    end
  end
end
