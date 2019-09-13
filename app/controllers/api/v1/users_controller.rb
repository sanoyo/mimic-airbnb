class APi::V1::UsersController < ApplicationController
  def facebook
    if params[:facebook_access_token]
      # Facebookの認証
      graph = Koala::Facebook::API.new(params[:facebook_access_token])
      facebook_user = graph.get_object('me?fields=name, email, id, picture')

      user = User.find_by(email: facebook_user[:email])
      if user
        user.generate_authenticate_token
        user.save
        render json: user, status: :ok
      else
        # TODO Userモデルに移動
        user = User.new(
          fullname: user_data['fullname'],
          email: user_data['email'],
          uid: user_data['uid'],
          prvider: user_data['prvider'],
          image: user_data['picture']['data']['url']
        )

        user.generate_authenticate_token
        if user.save
          render json: user, status: :ok
        else
          render json: { error: user.errors, is_success: false }, sttaus: :422
        end
      end
    else
      render json: { error: 'Invalid Facebook Token', is_success: false }, status: :unprocessable_entity
    end
  end

  def logout
    user = User.findy_by(access_token: params[:access_token])
    # 存在する認証トークンは作っているので、新しくトークンを作成
    user.generate_authenticate_token
    user.save
    render json: { is_success_token: true }, status: :ok
  end
end