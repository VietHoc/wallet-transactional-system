class Api::TeamsController < ApplicationController
  def index
    @teams = Team.includes(:wallet).all
    render json: {
      teams: @teams.map do |team|
        {
          id: team.id,
          name: team.name,
          wallet_id: team.wallet.id,
          wallet_address: team.wallet.address,
          balance: team.wallet.balance,
          currency: team.wallet.currency
        }
      end
    }
  end

  def show
    @team = Team.find(params[:id])
    wallet = @team.wallet
    render json: {
      team: {
        id: @team.id,
        name: @team.name,
        wallet_id: wallet.id,
        wallet_address: wallet.address,
        balance: wallet.balance
      }
    }
  end
end
