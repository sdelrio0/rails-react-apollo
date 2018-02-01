Rails.application.routes.draw do
  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: '/graphiql', graphql_path: '/graphql'
  end

  # Forwarded to the React App
  get '*path', to: 'frontend#index'
  get '/', to: 'frontend#index'
  post '/graphql', to: 'graphql#execute'
end
