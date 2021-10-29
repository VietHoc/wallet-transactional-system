class Api::WalletsController < ApplicationController
  def search
    render json: { wallets: WalletService.search(params[:query]) }
  end
end
