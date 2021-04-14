Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show]
    resources :categories, only: [:index, :show, :create, :destroy]
    resources :products, only: [:show, :create, :destroy, :update, :index]
    resource :session, only: [:create, :destroy, :show]
    # resources :reviews, only: [:index, :show, :update, :create, :destroy]
  end
end
