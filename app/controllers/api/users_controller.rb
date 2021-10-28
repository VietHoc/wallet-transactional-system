class Api::UsersController < ApplicationController
  def me
    render json: { 
      id: current_user.id,
      email: current_user.email,
      balance: current_user.wallet.balance,
      currency: current_user.wallet.currency,
    }
  end
end
