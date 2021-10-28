class Api::TransactionsController < ApplicationController

  def tranfer_money
    TransactionQueueService.instance.queue.push(tranfer_money_params)
    instance_param = TransactionQueueService.instance.queue.pop
    service = TransactionService.new( instance_param[:from_wallet_id],
                                      instance_param[:to_wallet_id],
                                      instance_param[:amount],
                                      instance_param[:description]
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
