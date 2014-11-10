## Auth in Rails

Very similar to our node applications, we will NEVER be storing passwords in plain text. 

While there are lots of different ways to authenticate users, we are going to use Rails sessions and `has_secure_password`

### Getting started with hashing passwords

0. Start with a new rails app `rails new learnauth -TBd postgresql`

1. In your gemfile, ncomment out the `bcrypt-ruby` gem and add `pry-rails`

2. Run `bundle install`

2. Create user and page models

	```
	rails g model User username password password_digest
	rails g model Page title body:text user_id:integer 
	```

5. Validate that your user always has a username and that your post always has 

3. Run `rake db:create db:migrate`

What does `has_secure_password` do under the hood? It adds the following code for us

	attr_reader :password
	
	validates_presence_of :password, on: create
	validates_presence_of :password_confirmation
	validates_confirmation_of :password

	# methods
	authenticated(unencrypted_password)

### Testing our authentication

1. First, let's jump in rails console - `rails c` in terminal
2. Let's create a new user
3. Save the new user
4. Test out .authenticate

### Building our views