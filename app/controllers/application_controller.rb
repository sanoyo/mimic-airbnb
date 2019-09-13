class ApplicationController < ActionController::API
  include Authenticate
  rescue_from ActiveRecord::RecordNotFound, with: :render_404

  # TODO 認証エラーなので401に変更する
  def render_404
    render json: { error: 'Invalid ID', is_success: false }, status: 404
  end
end
