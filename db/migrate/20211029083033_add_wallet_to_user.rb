class AddWalletToUser < ActiveRecord::Migration[6.0]
  def change
    add_reference :users, :wallet, index: true, null: false, foreign_key: true
  end
end
