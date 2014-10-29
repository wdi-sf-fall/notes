var bcrypt = require("bcrypt");
var passport = require("passport");
var passportLocal = require("passport-local");
var salt = bcrypt.genSaltSync(10);

module.exports = function (sequelize, DataTypes){
   var User = sequelize.define('User', {
     username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
          len: [6, 30]
        }
    },
    password: DataTypes.STRING
    },

  {
    classMethods: {
      encryptPass: function(password) {
        var hash = bcrypt.hashSync(password, salt);
        return hash;
    },
      comparePass: function(userpass, dbpass) {
      // don't salt twice when you compare....watch out for this
        return bcrypt.compareSync(userpass, dbpass);
    },
      createNewUser:function(username, password, err, success ) {
        if(password.length < 6) {
          err({message: "Password should be more than six characters"});
        }
        else{
        User.create({
            username: username,
            password: this.encryptPass(password)
          }).done(function(error,user) {
            if(error) {
              console.log(error)
              if(error.name === 'SequelizeValidationError'){
              err({message: 'Your username should be at least 6 characters long', username: username});
            }
              else if(error.name === 'SequelizeUniqueConstraintError') {
              err({message: 'An account with that username already exists', username: username});
              }
            }
            else{
              // no need for a success message now that we are redirecting with passport
              // if you want to send a message, use res.render in app.js
              // success({message: 'Account created, please log in now'});
              success();
            }
          });
        }
      },
      } // close classMethods
    } //close classMethods outer

  ); // close define user

  passport.use(new passportLocal.Strategy({
      usernameField: 'username',
      passwordField: 'password',
      passReqToCallback : true
    },

    function(req, username, password, done) {
      // find a user in the DB
      User.find({
          where: {
            username: username
          }
        })
        // when that's done,
        .done(function(error,user){
          if(error){
            console.log(error);
            return done (err, req.flash('loginMessage', 'Oops! Something went wrong.'));
          }
          if (user === null){
            return done (null, false, req.flash('loginMessage', 'Username does not exist.'));
          }
          if ((User.comparePass(password, user.password)) !== true){
            return done (null, false, req.flash('loginMessage', 'Invalid Password'));
          }
          done(null, user);
        });
    }));

  return User;
}; // close User function





