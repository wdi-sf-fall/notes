
#Sending mail from Rails


####Goals

- Learn how to send emails from rails **and** the command line
- Understand basic mail configuration
- Practice adding new feature to exisiting code base

###Brief history

Before we had the web and facebook ...

[Ray Tomlinson](http://en.wikipedia.org/wiki/Ray_Tomlinson)

The mail protocol on the Internet is **Simple Mail Transfer Protocol (SMTP)**. Think of it as http for mail.

You can send emails directly from your computer using **sendmail** and the **mail** comand. Sendmail is a general purpose internetwork email routing facility.

Try it out:

	echo "an interesting way of sending emails" | mail -s 'hi there!' your_email_address_here

A [diagram](http://www.ponderweasel.com/wp-content/uploads/2014/03/how-email-works-diagram.png) about how email works.


##Mail in rails

Sending email from Rails applications is easy thanks to **ActionMailer**. 

ActionMailer behaves like a controller. You create methods that create emails, rather than rendering pages. 

###practice

To demonstrate it we’ll take Tuesday's lab [simple login app](https://github.com/wdi-sf-fall/m2m-auth-class-examples/blob/master/2%20-%20simplelogin.md) and add sending welcome emails upon account creation.

Feel free to use your lab code or clone this [solution](https://github.com/wdi-sf-fall/simple_login). Let's get started.

####1) Create ActionMailer instance

	rails g mailer user_mailer signup_confirmation
	
This command creates an app/mailers directory with a user_mailer.rb file in it and we can use this to send out our signup confirmation email. The generator also creates two views for the message which contains some default text. One view for plain text emails, another formatted in html.

	/app/views/user_mailer/signup_confirmation.text.erb
	/app/views/user_mailer/signup_confirmation.html.erb

Not all clients prefer HTML emails, and so sending both is best practice. ActionMailer takes care of sending both version in the message body, the mail client picks the preferred.
	
####2) Writing the email method
	
Note that we can share instance variables between the view and the mailer itself much like we can with a controller.
		
It’s important that the signup_confirmation method ends with a call to mail as this will generate the email and return it. 

We can pass a variety of options to this method including who we send it to and the message’s subject. 

Here's the `signup_confirmation` email:

```
  def signup_confirmation
    @greeting = "Hi"

    mail to: "to@example.org", subject: "Sign Up Confirmation"
  end
```  
  
See the [API documentation](http://api.rubyonrails.org/classes/ActionMailer/Base.html) for a list of all the options we can pass in to the mail method, for example, how to send attachments.

We still need to specify who to send the email to; this should be the email/username specified in the form. 

By design mailer classes don’t have access to request parameters so we’ll have to pass in the User model in different way. 

We’ll alter the signup_confirmation method so that it takes a user argument and pass the user in that way. We can then call `user.username` to get their email address. We’ll also set an instance variable to that user so that we can use it in the view.

```
def signup_confirmation(user)
  @user = user

  mail to: user.email, subject: "Sign Up Confirmation"
end
```

####3) Customizing the email

Let's go to the views. It's just a view, so we can use instance variables.

```
<%= @user.name %>,

Thank you for signing up!
```

####4) Sending the email

Our email is now pretty much complete and we just need to send it from our `access_controller`.

Decide when you want to send the email and ask `UserMailer` to deliver the email:


    UserMailer.signup_confirmation(@user).deliver

####5) Mail configuration

For **development purposes**, use local sendmail to deliver email. This should work if you were able to send email from the command line earlier. 

The configuration resides in 

	/config/environments/development.rb
	
Search for `mail` and add/adjust these lines:

	config.action_mailer.raise_delivery_errors = true 
	config.action_mailer.delivery_method = :sendmail
	config.action_mailer.perform_deliveries = true

In **production**, you want to use a real smtp server. Find out from your cloud provider or ISP if and how to use provided smtp servers. 

**For your projects**, [you can simply use a gmail account](http://kb.siteground.com/google_free_smtp_server/)!

Here's how it works:

First, create a new [initializer file](http://guides.rubyonrails.org/configuring.html#using-initializer-files):

	/config/initializers/setup_mail.rb
	
Add `ActionMailer` configuration to something like this:

	
```
ActionMailer::Base.smtp_settings = {
  :address              => "smtp.gmail.com",
  :port                 => 587,
  :domain               => "crowdsmart.net",
  :user_name            => "markus@crowdsmart.net",
  :password             => Rails.application.secrets.my_smtp_password,
  :authentication       => "plain",
  :enable_starttls_auto => true
}
```

To not reveal my password, I placed it in `secrets.yml` ... and my ENV variables.

	

  
  
  
