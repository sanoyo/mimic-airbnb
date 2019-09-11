class ApplicationController < ActionController::API
  include Authenticate
  rescue_from Active::RecordNotFound, with: :render_404

  # TODO 認証エラーなので、401では?
  def render_404
    render json: { error: 'Invalid ID', is_success: false }, status: 404
  end
end
