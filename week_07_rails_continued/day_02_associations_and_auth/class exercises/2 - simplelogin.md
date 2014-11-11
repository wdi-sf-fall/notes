## Simplelogin

# Your Task

- Build a form for a user to signup. The user should have a username and password and the password should not be stored in plain text
- Once signed up the user should have their id set in the session and be routed to a welcome page (which can only be accessed by someone who has a session[:user_id])
- The user should be able to login as well
- Once signed up, the user should be able to log out and be routed to the login page

### Getting started

- Create a new rails app `rails new simple_login -TBd postgresql`
- in your Gemfile add `pry-rails` and run bundle
- generate a User model with a username, password and password_digest
- in your user model add `has_secure_password`
- validate the presence of a username and make sure it is unique as well
- add the flash code to your `application.html.erb` (from the todosession exercise)
- generate a controller called access with signup, login, home and logout actions
- replace your routes with the following:

```
root 'access#login'
  get 'login', to: "access#login", as: 'login'

  get 'signup', to: "access#signup", as: 'signup'

  post 'login', to: "access#attempt_login"

  post 'signup', to: "access#create"

  get 'home', to: "access#home", as: 'home'

  get 'logout', to: "access#logout"
``` 
- jump into rails console and make sure that your password hashing is working and that your validations for a user are correct

### Next steps

- Add the following code to your `signup.html.erb` (and clean up the formatting a bit)

```
Signup

<% if @user.errors.any? %>
  <% @user.errors.full_messages.each do |error| %>
    <p class = "text-danger"><%= error %></p>
  <% end %>
<% end %>

<%= form_for(@user, url: signup_path) do |f|%>


  <%= f.label(:username) %>
  <%= f.text_field(:username, autofocus: true) %>


  <%= f.label(:password) %>
  <%= f.password_field(:password) %>


  <%= f.submit("Signup", class: "btn btn-primary") %>
</p>
  <%= link_to "Have an account already? Log in here", login_path %>
<% end %>

```

- your next step is to add an action in your controller called `create` 
- make sure you add the permitted parameters! Here is what your code should look like 

```
private
  def user_params
    params.require(:user).permit(:username, :password, :password_digest)
  end
```

- you should be able to render the signup form. If that works, finish up the create action.
- In the create action you should create a user with the permitted parameters. 
- If the user has saved successfully, assign the session[:user_id] to the id of the instance of the user you just created and redirect to the home_path 

## Finishing up

- Include a login form that looks like this: 

```
<%= form_tag(login_path) do %>

  <%= label_tag(:username)%>
  <%= text_field_tag(:username, params[:username], autofocus: true)%>


  <%= label_tag(:password)%>
  <%= password_field_tag(:password)%>

  <%= submit_tag("Log in", class: "btn btn-primary") %>

<% end %>

<%= link_to "Don't have an account? Sign up here", signup_path%>

```

- in your controller, create an action called attempt_login and start with the following: 

```
  if params[:username].present? && params[:password].present?
      found_user = User.where(username: params[:username]).first
      if found_user
        authorized_user = found_user.authenticate(params[:password])
      end
    end
```

This code will check and see if a user has been found, and if so it will call the authenticate method to see if the password typed in was correct. 

- You need to finish writing this method by rendering certain actions when found_user and authorized_user are not correct. Finally, if both of these return true, the user can be logged in. 

- Display a flash message for each error and success

- Write a method for your logout action. This should set the session[:user_id] to nil and redirect the user to the login page. Display a flash message notifying the user that they have signed out successfully. 


## Bonus

- Make sure a logged in user is unable to revisit the login and signup page

