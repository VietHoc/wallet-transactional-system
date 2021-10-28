class Api::TransactionsController < ApplicationController

  def tranfer_money
    @transaction = Transaction.new(
      from_wallet_id: tranfer_money_params[:from_wallet_id],
      to_wallet_id: tranfer_money_params[:to_wallet_id],
      amount: tranfer_money_params[:amount],
      transaction_type: Transaction.types["tranfer"],
      status: Transaction.statuses["success"],
      description: tranfer_money_params[:description]
    )

    if @transaction.save
      render json: { message: "Send money successfully" }, status: 200
    else
      render json: { message: @transaction.errors.full_messages }, status: 400
    end
  end

  private

  def tranfer_money_params
    params.require(:transactions).permit(:from_wallet_id, :to_wallet_id, :amount, :description)
  end
end
