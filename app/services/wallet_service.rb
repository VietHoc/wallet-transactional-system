class WalletService
  def self.search addresses
    wallets = Wallet.where(address: addresses)
    wallets.map do |wallet|
      name =  if wallet.user.present?
                wallet.user.email
              elsif wallet.team.present?
                wallet.team.name
              elsif wallet.stock.present?
                wallet.stock.name
              else
                ''
              end
      description = "#{name}: #{wallet.address}"
      {
        id: wallet.id,
        name: name,
        description: description,
        address: wallet.address
      }
    end
  end
end
