**Action Mailer Lab / Homework**

Implement reset password feature in simple login app (or app of your choice)

**Prerequisite:** 

-  The welcome email feature works
-  Action Mailer is configured and sending emails


**Requirements:**

- On signin view, user should be able to click a **forgot password link** rendering a forgot password view

- On the **forgot password view**, user should be able to enter and submit username (which is an email) to request a new password.

- System sends **reset password** email containing unique link to reset user's password on the site 

- On **reset password view**, user should be able to enter new password and password confirmation and submit it.

- Upon success, user is logged in and redirected to profile page

**Tips:**

- Use the user's remember_token to generate unique reset password link in reset password email. The link should look something like this: 

```http://localhost:3000/reset/xmbCPqeCfqxossoOcxciSw```


- You will need at least three new routes backed up by three new controller methods (tip: why not use `access_controller` ?)
  - A route responding to forgot password link => renders forgot password view
  - A route responding to the 'Reset password' click in the forgot password view
  - A route responding to the 'reset password' link contained in reset password email => renders reset password view with password/password confirmation inputs (and shows the username)


