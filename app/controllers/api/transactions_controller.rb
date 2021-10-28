class Api::TransactionsController < ApplicationController

  def tranfer
    TransactionQueueService.instance.tranfer_queue.push(transaction_params)
    instance_param = TransactionQueueService.instance.tranfer_queue.pop

    service = newTransactionService(instance_param)
    @transaction = service.tranfer

    if @transaction.errors.empty?
      render json: { message: "Send money successfully" }, status: 200
    else
      render json: { message: @transaction.errors.full_messages }, status: 400
    end
  end

  def deposit
    params[:transactions][:from_wallet_id] = current_user.wallet.id
    params[:transactions][:to_wallet_id] = current_user.wallet.id
    TransactionQueueService.instance.deposit_queue.push(transaction_params)
    instance_param = TransactionQueueService.instance.deposit_queue.pop

    service = newTransactionService(instance_param)
    @transaction = service.deposit

    if @transaction.errors.empty?
      render json: { message: "Deposit money successfully" }, status: 200
    else
      render json: { message: @transaction.errors.full_messages }, status: 400
    end
  end

  def withdraw
    params[:transactions][:from_wallet_id] = current_user.wallet.id
    params[:transactions][:to_wallet_id] = current_user.wallet.id
    TransactionQueueService.instance.withdraw_queue.push(transaction_params)
    instance_param = TransactionQueueService.instance.withdraw_queue.pop

    service = newTransactionService(instance_param)
    @transaction = service.withdraw

    if @transaction.errors.empty?
      render json: { message: "Withdraw money successfully" }, status: 200
    else
      render json: { message: @transaction.errors.full_messages }, status: 400
    end
  end

  private

  def transaction_params
    params.require(:transactions).permit(:from_wallet_id, :to_wallet_id, :amount, :description)
  end

  def newTransactionService instance_param
    TransactionService.new( instance_param[:from_wallet_id],
      instance_param[:from_wallet_id],
      instance_param[:amount],
      instance_param[:description]
    )
  end
end
