Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'
  
  namespace :api, defaults: {format: :json} do
    get '/validation/:username', to: 'users#validation', param: :username
    get '/validation', to: 'users#no_username'
    get '/search', to: 'videos#search'
    resources :users, only: [:create, :index, :show]
    resources :videos, only: [:index, :create, :show, :patch, :delete] do
      resources :comments, only: [:index, :create]
    end
    resources :comments, only: [:delete]
    resource :session, only: [:create, :destroy]
  end
end
