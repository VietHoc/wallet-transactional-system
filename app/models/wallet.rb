class Wallet < ApplicationRecord
  has_one :user
  has_one :team
  has_one :stock
  has_many :transactions

  def balance
    Transaction.where(from_wallet: self).or(Transaction.where(to_wallet: self)).sum do |tr|
      if tr.deposit_success? || tr.receive_success?(self.id)
        tr.amount 
      else
        -tr.amount
      end
    end
  end
end
