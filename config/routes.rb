Rails.application.routes.draw do
  namespace :api, default: { format: :json } do
    namespace :v1 do
      get '/logout' => 'users#logout'
      post '/facebook' => 'users#facebook'

      resources :rooms
    end
  end
end
