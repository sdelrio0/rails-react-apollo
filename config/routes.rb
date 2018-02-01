Rails.application.routes.draw do
  # Forwarded to the React App
  get '*path', to: 'frontend#index'
  get '/', to: 'frontend#index'
  post '/graphql', to: 'graphql#execute'
end
