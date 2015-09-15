Rails.application.routes.draw do
  root 'todo#index'

  get '*ember' => 'todo#index'
end
