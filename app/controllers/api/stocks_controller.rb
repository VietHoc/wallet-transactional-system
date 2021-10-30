class Api::StocksController < ApplicationController
  def index
    @stocks = Stock.includes(:wallet).all
    render json: {
      stocks: @stocks.map do |stock|
        {
          id: stock.id,
          name: stock.name,
          wallet_id: stock.wallet.id,
          wallet_address: stock.wallet.address,
          balance: stock.wallet.balance,
          currency: stock.wallet.currency,
        }
      end
    }
  end

  def show
    @stock = Stock.find(params[:id])
    wallet = @stock.wallet
    render json: {
      stock: {
        id: @stock.id,
        name: @stock.name,
        wallet_id: wallet.id,
        wallet_address: wallet.address,
        balance: wallet.balance
      }
    }
  end
end
