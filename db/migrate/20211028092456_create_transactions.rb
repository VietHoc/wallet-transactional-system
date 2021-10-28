class CreateTransactions < ActiveRecord::Migration[6.0]
  def change
    create_table :transactions do |t|
      t.decimal :amount
      t.integer :transaction_type
      t.integer :status
      t.string :description
      t.references :from_wallet, null: false, foreign_key: {to_table: :wallets}
      t.references :to_wallet, null: false, foreign_key: {to_table: :wallets}

      t.timestamps
    end
  end
end
