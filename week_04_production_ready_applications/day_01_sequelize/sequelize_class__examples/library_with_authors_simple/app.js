var express = require("express"),
app = express(),
methodOverride = require('method-override'),
bodyParser = require("body-parser"),
db = require("./models/index");

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride('_method'));

//Home
app.get('/', function(req, res){
  res.render('home');
});


///////////////// AUTHOR ROUTES  ///////////////////

//Index
app.get('/authors', function(req, res){
  db.Author.findAll().success(function(author){
    res.render('author/index', {allAuthors: author});
  });
});

//New
app.get('/authors/new', function(req, res){
  res.render("author/new");
});

//Create
app.post('/authors', function(req, res) {
  var name = req.body.author.name;
  var age = req.body.author.age;
  db.Author.create({
    name: name,
    age: age
  }).success(function(){
    res.redirect('/authors');
  });
});

//Show
app.get('/authors/:id/books', function(req, res) {
  db.Author.find(req.params.id).done(function(err,author){
    author.getBooks().done(function(err,books){
      res.render('author/show', {allBooks: books, author:author});
    });
  });
});

//Edit
app.get('/authors/:id/edit', function(req, res) {
  //find our author
  var id = req.params.id;
  db.Author.find(id).success(function(author){
    res.render('author/edit', {author: author});
  });
});

//Update
app.put('/authors/:id', function(req, res) {
  var id = req.params.id;
  db.Author.find(id).success(function(author){
    author.updateAttributes({
      name: req.body.author.name,
      age: req.body.author.age
    }).success(function(){
      res.redirect('/authors');
    });
  });
});

//Delete
app.delete('/authors/:id', function(req, res) {
  var id = req.params.id;
  db.Author.find(id).success(function(author){
    db.Book.destroy({
      where: {
        AuthorId: author.id
      }
    }).success(function(){
      author.destroy().success(function(){
        res.redirect('/authors');
        });
      });
    });
  });

//////// BOOKS ROUTES ////////////

//Index
app.get('/book', function(req, res){
  db.Book.findAll().done(function(err,books){
    res.render('library/index', {allBooks: books});
  });
});

//New
app.get('/books/:id/new', function(req, res){
  var id = req.params.id;
  res.render("library/new", {id:id, title:"",genre:""});
});

//Create
app.post('/books/:id', function(req, res) {
  var AuthorId = req.params.id;
  var title = req.body.book.title;
  var genre = req.body.book.genre;

  db.Book.create({
    title: title,
    genre:genre,
    AuthorId: AuthorId
  }).done(function(err,success){
    if(err) {
      var errMsg = "title must be at least 6 characters";
      res.render('library/new',{errMsg:errMsg, id:AuthorId, title:title, genre:genre});
    }
    else{
      res.redirect('/authors/' + AuthorId + '/books');
    }
  });
});

//Show
app.get('/books/:id', function(req, res) {
  db.Book.find(req.params.id).done(function(err,book){
    res.render('library/show', {book: book});
  });
});

//Edit
app.get('/books/:id/edit', function(req, res) {
  //find our book
  var id = req.params.id;
  db.Book.find(id).done(function(err,book){
    res.render('library/edit', {book: book});
  });
});

//Update
app.put('/books/:id', function(req, res) {
  var id = req.params.id;
  db.Book.find(id).done(function(err,book){
    book.getAuthor().success(function(author){
      console.log(author);
      book.updateAttributes({
      title: req.body.book.title,
      genre: req.body.book.genre
    }).done(function(err,success){

      if(err) {
        var errMsg = "title must be at least 6 characters";
        res.render('library/edit',{book: book, errMsg:errMsg});
      }
      else{
        res.redirect('/authors/' + author.id + '/books');
      }
     });
    });
  });
});

//Delete
app.delete('/books/:id', function(req, res) {
  var id = req.params.id;
  db.Book.find(id).done(function(err,book){
    book.getAuthor().done(function(err,author){
      book.destroy().done(function(err,success){
        res.redirect('/authors/' + author.id + '/books');
      });
    });
  });
});

app.get('*', function(req,res){
  res.render('404');
});

app.listen(3000, function(){
  "Server is listening on port 3000";
});
