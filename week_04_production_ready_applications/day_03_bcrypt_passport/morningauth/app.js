var express = require("express"),
bodyParser = require("body-parser"),
app = express(),
db = require("./models/index");

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function(req,res){
  res.render("index", {message:null});
});

app.get('/signup', function(req,res){
  res.render("signup", {message:null});
});

app.get('/login', function(req,res){
  res.render("login", {message:null});
});

app.get('/home', function(req,res){
  res.render("home");
});

// when the user submits the signup form.....
app.post('/signup', function(req,res){
  db.User.createNewUser(req.body.username, req.body.password,
    //err
    function(error){
      res.render("signup",{message: error.message});
    },
    //success
    function(success){
      res.render("index", {message: success.message});
    }
    );
});

app.post('/login', function(req,res){
  db.User.authorize(req.body.username, req.body.password,
    function(error){
      res.render("login", {message:error.message});
    },
    function(success){
      res.redirect('/home');
    });
});



app.listen(3000, function(){
  console.log("get this party started on port 3000");
});
