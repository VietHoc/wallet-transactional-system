class User < ApplicationRecord
  devise :database_authenticatable,
         :jwt_authenticatable,
         :registerable,
         jwt_revocation_strategy: JwtDenylist

  belongs_to :wallet

  scope :search, -> (query) { joins(:wallet)
    .where('(wallets.address::varchar LIKE ?) OR (users.email LIKE ?)',query, query) }
end
