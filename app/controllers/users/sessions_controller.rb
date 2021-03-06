class Users::SessionsController < Devise::SessionsController
  respond_to :json
  def create
    super { @token = current_token }
  end

  def new
    super { @token = current_token }
  end

  private

  def respond_with(resource, _opts = {})
    render json: { message: 'You are logged in.', token: @token }, status: :ok
  end

  def respond_to_on_destroy
    log_out_success && return if current_user

    log_out_failure
  end

  def log_out_success
    render json: { message: 'You are logged out.' }, status: :ok
  end

  def log_out_failure
    render json: { message: 'Nothing happened.' }, status: :unauthorized
  end

  def current_token
    request.env['warden-jwt_auth.token']
  end
end