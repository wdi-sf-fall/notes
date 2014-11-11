## Todosession

# Your Task

- Build a todo app using the session hash 
- Your app should not have any models
- You should have only one view
- The user should be able to submit a form and add a task

## Getting started

- create a new rails app `rails new todosession -TBd postgresql`

- In your Gemfile, add `gem pry-rails`, save and run bundle install.

- generate a controller called todos with an index action

- in your routes, add a root route to todos#index and add a delete and post route to 'todos'. Also replace your generated route with:

`get 'todos', to: "todos#index", as: "todos"`

- in your index action, define an instance variable `@todos` as the array session[:todos] or as an empty array

`@todos = session[:todos] ||= []`

- in your view, loop over the `@todos` and print out each todo and at the bottom, have form that takes in a task:
- your index action should render a page with a form that looks like this 


```
   <%= form_tag(todos_path) do %>
	 <p>
      <%= label_tag(:task) %>
      <%= text_field_tag(:task, nil, autofocus: true) %>
    </p>
     <%= submit_tag "Add"%>
  <% end %>


```

- in your create action (when the user submits a form) you should capture the form parameters and push them into the session[:todos] array
- your destroy action should reset session[:todos] to an empty array

### Next steps

- Replace your application.html.erb with the following code before the yield

```
<!DOCTYPE html>
<html>
<head>
  <title>Todosession</title>
  <%= stylesheet_link_tag    'application', media: 'all', 'data-turbolinks-track' => true %>
  <%= javascript_include_tag 'application', 'data-turbolinks-track' => true %>
  <%= csrf_meta_tags %>
  <!-- Latest compiled and minified CSS -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">

  <!-- Optional theme -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap-theme.min.css">

</head>
<body class = "container text-center">

<% flash.each do |key, value| %>
  <% if key == "notice" %>
    <%= content_tag :div, value, class: "text-center alert alert-warning" %>
  <% elsif key == "alert" %>
    <%= content_tag :div, value, class: "text-center alert alert-danger" %>
  <% else %>
    <%= content_tag :div, value, class: "text-center alert alert-success" %>
  <% end %>
<% end %>

<%= yield %>

</body>
</html>

```

- In the notes for this afternoon, research what flash messages are and try to include them before your redirect
- You should have flash messages for when a user creates and deletes a task


## Bonus

- Allow the user to delete one task at a time 
- Style it!