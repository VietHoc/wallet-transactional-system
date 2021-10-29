wallet_user_1 = Wallet.create!(address: SecureRandom.uuid)
wallet_user_2 = Wallet.create!(address: SecureRandom.uuid)

users = User.create!([{ email: 'tom@gmail.com', password: '12345678', wallet: wallet_user_1 },
                      { email: 'jerry@gmail.com', password: '12345678', wallet: wallet_user_2 }])


Transaction.create!(from_wallet: wallet_user_1,
                    to_wallet: wallet_user_1,
                    amount: 100,
                    transaction_type: Transaction.types["deposit"],
                    status: Transaction.statuses["success"],
                    description: "Recharge 100 USD to my wallet"
                  )


Transaction.create!(from_wallet: wallet_user_2,
                    to_wallet: wallet_user_2,
                    amount: 50,
                    transaction_type: Transaction.types["deposit"],
                    status: Transaction.statuses["success"],
                    description: "Recharge 50 USD to my wallet"
                  )

Transaction.create!(from_wallet: wallet_user_1,
                    to_wallet: wallet_user_2,
                    amount: 10,
                    transaction_type: Transaction.types["transfer"],
                    status: Transaction.statuses["success"],
                    description: "Send 10 USD to Jerry"
                  )


puts "Seed date is successfuly"