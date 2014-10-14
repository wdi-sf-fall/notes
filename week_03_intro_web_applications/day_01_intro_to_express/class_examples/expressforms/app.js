var express = require("express"),
app = express(),
bodyParser = require("body-parser");

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended:true}));

var users = [];
var count = 1;

app.get('/', function(req, res){
  res.render('index');
});

app.post('/signup', function(req, res){
  // console.log("THIS IS THE REQ OBJECT");
  // console.log(req)
  // console.log("THIS IS MY REQ.QUERY OBJECT");
  // console.log(req.query);
  // console.log("THIS IS MY REQ.BODY OBJECT");
  // console.log(req.body);
  var user = {};
  user.id = count;
  user.username = req.body.user.username;
  user.password = req.body.user.password;
  users.push(user);
  count++;
  // console.log(users);
  res.render('welcome', {allMyUsers:users});
});

app.get('/user/:id',function(req,res){
  var userId = Number(req.params.id);
  var foundUser;
  users.forEach(function(user){
    if(user.id === userId){
      foundUser = user;
    }
  });
  res.render('user',{user:foundUser});
});

app.listen(3000, function(){
  console.log("Server is listening on port 3000");
});