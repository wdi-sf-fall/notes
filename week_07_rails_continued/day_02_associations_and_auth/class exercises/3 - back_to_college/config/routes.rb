Rails.application.routes.draw do

  ## STUDENTS ROUTES

  # You have to make these :)

  ## COURSES ROUTES
  get 'courses', to: "courses#index", as: 'courses'

  get 'courses/new', to: "courses#new", as: 'new_course'

  get 'courses/:id', to: "courses#show", as: 'course'

  get 'courses/:id/edit', to: "courses#edit", as: 'edit_course'

  post 'courses', to: "courses#create"

  patch 'courses/:id', to: "courses#update"

  delete 'courses/:id', to: "courses#destroy"

end
