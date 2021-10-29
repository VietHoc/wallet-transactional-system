class Api::TeamsController < ApplicationController
  def show
    @team = Team.find(params[:id])
    wallet = @team.wallet
    render :json => {
      team: {
        id: @team.id,
        name: @team.name,
        wallet_id: wallet.id,
        wallet_address: wallet.address,
        balance: wallet.balance,
      }
    }
  end
end
