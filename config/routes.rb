Rails.application.routes.draw do
  devise_for :users,
    controllers: {
        sessions: 'users/sessions',
    }
  namespace :api do
    post 'tranfer-money', to: 'transactions#tranfer_money'
    get 'users/me', to: 'users#me'
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
