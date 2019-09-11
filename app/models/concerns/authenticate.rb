module Authenticate
  def current_user
    @current_user = User.find_by(access_token: access_token)
  end

  def authenticate_with_token!
    render json: { error: 'Not Authenticated', is_success: false }, status: :unauthorized unless current_user.present?
  end
end