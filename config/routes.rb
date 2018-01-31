Rails.application.routes.draw do
  root to: 'pages#home'
  
  get '/login', to: 'auth#new'
  get '/login', to: 'auth#create'
end
