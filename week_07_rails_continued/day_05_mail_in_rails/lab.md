**Action Mailer Lab / Homework**

Implement a **reset password** feature in simple login app (or app of your choice)


**Requirements:**

- On the **login view**, user should be able to click a **forgot password link** rendering a **forgot password view**

- On the **forgot password view**, user should be able to submit email (i.e. username) to request resetting password.

- In response, the system sends **reset password email** containing a url that takes the user to a **reset password view**.

- On the **reset password view**, user should be able to enter a new password and password confirmation and submit it. The system updates the user with the new password. 

- The system checks that password and password confirmation match.

- Upon success, user is redirected to **login view** where she can try out new password.

**Tips:**

- You will need to generate a random **reset token** that becomes part of the reset url in the **reset password email**. The reset password url in **reset password email** should look something like this: 

```http://localhost:3000/reset/JFJNJHRQFQUNAOKP```

- The system needs to persist the user's **reset token**. Add a column **reset_token** to the users table (migration!)

- You will need a bunch of new routes, views and methods in access_controller:
  - A route for the **forgot password link** => renders a forgot password view
  - A route (post!) for the form in **forgot Password view** => responds to form submit 
  - A route for the **reset password** url contained in **reset password email** => renders reset password view with password/password confirmation inputs (and shows the username)
  - A route for saving the new password in the system
  
So this is four new routes, that means you will need at least four new controller methods responding to the routes and rendering/redirecting the next step.

