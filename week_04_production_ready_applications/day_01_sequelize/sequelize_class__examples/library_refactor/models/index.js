"use strict";

var fs        = require("fs");
var path      = require("path");
var Sequelize = require("sequelize");
var env       = process.env.NODE_ENV || "development";
var config    = require(__dirname + '/../config/config.json')[env];
var sequelize = new Sequelize(config.database, config.username, config.password, config);
var db        = {};
require("locus");

fs
  .readdirSync(__dirname) // [ 'book.js', 'index.js' ]
  .filter(function(file) { // book.js, index.js
    // makes sure that your model has a name! and that it's not index.js
    // eval the typeof file to see it's a string
    return (file.indexOf(".") !== 0) && (file !== "index.js");
  })
  .forEach(function(file) { //just book.js now
    // the sequelize import function takes in 2 paths
    // this is the same as sequelize.import(takes in a path)
    // path.join(__dirname, file) =
      // /Users/eschoppik/Desktop/sequelize_examples/library_refactor/models/book.js
    var model = sequelize["import"](path.join(__dirname, file));
    // dot notation will not work, db is empty now let's check out model.name
    db[model.name] = model;
    // db['Book'] = model
    eval(locus)
  });

Object.keys(db).forEach(function(modelName) {
  if ("associate" in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
