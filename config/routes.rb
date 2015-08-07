Rails.application.routes.draw do
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  root 'root_pages#root'

  resources :users, only: [:new, :create, :destroy]
  resource :session, only: [:new, :create, :destroy]

  namespace :api, defaults: {format: :json} do
    resources :boards, only: [:create, :update, :destroy, :show, :index]
    resources :lists, only: [:create, :update, :destroy, :show, :index]
    resources :cards, only: [:create, :update, :destroy, :show, :index]
  end
end
