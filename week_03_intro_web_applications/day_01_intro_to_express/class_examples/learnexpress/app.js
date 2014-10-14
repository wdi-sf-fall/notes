var express = require("express"),
app = express();

require("locus");

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

// app.get('/', function(req, res){
//   var name = "Elie";
//   var job = "Instructor";
//   // in my object, the key does not matter, but the value does
//   // {taco:name} is ok, {name:taco} is not ok
//   res.render('index',{username:name, myJob: job});
// });

app.get('/food/:taco', function(req,res){
  var name = req.params.taco;
  console.log(typeof name);
  // var favFood = req.params.favFood;
  res.render('index',{firstname:name, food:favFood});
  // eval(locus)
});

app.get('/add/:num1/:num2', function(req,res){
  var num1 = Number(req.params.num1);
  var num2 = Number(req.params.num2);
  var result = num1 + num2;
  console.log(typeof num1)
  console.log(typeof num2)
  // create a new variable called result that's the sum of those two
  res.render('calculation', {result:result});
});

app.get('/user',function(req,res){
  res.render('user');
});

// app.get('/sufi', function(req,res){
//   var name = "Sufi";
//   var favFood = "pizza";
//   res.render('index',{firstname:name, food: favFood});
// });

app.get('*', function(req,res){
  res.render('404');
});

app.listen(3000, function(){
  console.log("Server starting on port 3000");
});

