class Api::StocksController < ApplicationController
  def show
    @stock = Stock.find(params[:id])
    wallet = @stock.wallet
    render :json => {
      stock: {
        id: @stock.id,
        name: @stock.name,
        wallet_id: wallet.id,
        wallet_address: wallet.address,
        balance: wallet.balance,
      }
    }
  end
end
