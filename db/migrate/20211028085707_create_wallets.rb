class CreateWallets < ActiveRecord::Migration[6.0]
  def change
    create_table :wallets do |t|
      t.decimal :amount, min: 0, max: 1_000_000_000
      t.string :currency, default: 'USD'
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
