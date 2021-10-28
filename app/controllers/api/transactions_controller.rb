class Api::TransactionsController < ApplicationController
  before_action :update_params, only: [:deposit, :withdraw]

  def tranfer
    service = newTransactionService("tranfer")
    @transaction = service.tranfer

    if @transaction.errors.empty?
      render json: { message: "Send money successfully" }, status: 200
    else
      render json: { message: @transaction.errors.full_messages }, status: 400
    end
  end

  def deposit
    service = newTransactionService("deposit")
    @transaction = service.deposit

    if @transaction.errors.empty?
      render json: { message: "Deposit money successfully" }, status: 200
    else
      render json: { message: @transaction.errors.full_messages }, status: 400
    end
  end

  def withdraw
    service = newTransactionService("withdraw")
    @transaction = service.withdraw

    if @transaction.errors.empty?
      render json: { message: "Withdraw money successfully" }, status: 200
    else
      render json: { message: @transaction.errors.full_messages }, status: 400
    end
  end

  private

  def update_params
    params[:transactions][:from_wallet_id] = current_user.wallet.id
    params[:transactions][:to_wallet_id] = current_user.wallet.id
  end

  def transaction_params
    params.require(:transactions).permit(:from_wallet_id, :to_wallet_id, :amount, :description)
  end

  def newTransactionService transaction_type
    TransactionQueueService.instance.send("#{transaction_type}_queue").push(transaction_params)
    instance_param = TransactionQueueService.instance.send("#{transaction_type}_queue").pop
    TransactionService.new( instance_param[:from_wallet_id],
      instance_param[:from_wallet_id],
      instance_param[:amount],
      instance_param[:description]
    )
  end
end
