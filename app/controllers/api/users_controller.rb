class Api::UsersController < ApplicationController
  def me
    wallet = current_user.wallet
    GuestsCleanupJob.perform_later wallet
    render json: {
      id: current_user.id,
      email: current_user.email,
      balance: wallet.balance,
      currency: wallet.currency,
      wallet_address: wallet.address
    }
  end

  def search
    @users = User.search(params[:query])
    render json: {
      users: @users.map do |user|
        {
          user_id: user.id,
          user_email: user.email,
          wallet_id: user.wallet.id,
          wallet_address: user.wallet.address
        }
      end
    }
  end
end
