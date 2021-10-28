class Api::TransactionsController < ApplicationController

  def tranfer_money
    service = TransactionService.new( tranfer_money_params[:from_wallet_id],
                                      tranfer_money_params[:to_wallet_id],
                                      tranfer_money_params[:amount],
                                      tranfer_money_params[:description]
                                    )

    @transaction = service.call

    if @transaction.errors.empty?
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
