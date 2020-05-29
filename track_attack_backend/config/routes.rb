Rails.application.routes.draw do

  post "/login", to: "sessions#create"
  #delete '/logout', to: 'sessions#destroy'
  post "/logout", to: "sessions#destroy"

  resources :games
  resources :users do
    resources :games, only: [:index]
  end 

 

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
