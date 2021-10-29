class CreateWallets < ActiveRecord::Migration[6.0]
  def change
    create_table :wallets do |t|
      t.uuid :address, unique: true
      t.string :currency, default: 'USD'

      t.timestamps
    end
  end
end
