Rails.application.routes.draw do
  devise_for :users,
    controllers: {
        sessions: 'users/sessions',
    }
  namespace :api do
    post 'deposit', to: 'transactions#deposit'
    post 'withdraw', to: 'transactions#withdraw'
    post 'transfer', to: 'transactions#transfer'
    get 'users/me', to: 'users#me'
    get 'users/search', to: 'users#search'

    resources :teams
    resources :stocks
    resources :wallets do
      collection do
        get 'search'
      end
    end
  end

  get '*path' => redirect('/')
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
