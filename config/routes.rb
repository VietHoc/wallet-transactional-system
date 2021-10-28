Rails.application.routes.draw do
  devise_for :users,
    controllers: {
        sessions: 'users/sessions',
    }
  namespace :api do
    post 'deposit', to: 'transactions#deposit'
    post 'withdraw', to: 'transactions#withdraw'
    post 'tranfer', to: 'transactions#tranfer'
    get 'users/me', to: 'users#me'
    get 'users/search', to: 'users#search'
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
