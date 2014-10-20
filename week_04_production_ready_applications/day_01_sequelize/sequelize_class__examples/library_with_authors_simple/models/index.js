"use strict";

var fs        = require("fs");
var path      = require("path");
var Sequelize = require("sequelize");
var env       = process.env.NODE_ENV || "development";
var config    = require(__dirname + '/../config/config.json')[env];
var sequelize = new Sequelize(config.database, config.username, config.password, config);
var db        = {};
require("locus");

// this wraps the models in a db object
fs
  .readdirSync(__dirname) // [ 'author.js', 'book.js', 'index.js' ]
  .filter(function(file) { // author.js, book.js, index.js

    return (file.indexOf(".") !== 0) && (file !== "index.js");
  })
  .forEach(function(file) {
    var model = sequelize["import"](path.join(__dirname, file));
    db[model.name] = model;

  });


// adds association methods - check for function associate
  // this calls that function
Object.keys(db).forEach(function(modelName) {
  if ("associate" in db[modelName]) {
    db[modelName].associate(db);
  }
});

// db.Author.associations.AuthorsBooks.accessors

// { get: 'getBooks',
//   set: 'setBooks',
//   addMultiple: 'addBooks',
//   add: 'addBook',
//   create: 'createBook',
//   remove: 'removeBook',
//   hasSingle: 'hasBook',
//   hasAll: 'hasBooks' }

// db.Book.associations.Author.accessors

// { get: 'getAuthor',
//   set: 'setAuthor',
//   create: 'createAuthor'
// }

db.sequelize = sequelize;
db.Sequelize = Sequelize;
// eval(locus)

module.exports = db;
