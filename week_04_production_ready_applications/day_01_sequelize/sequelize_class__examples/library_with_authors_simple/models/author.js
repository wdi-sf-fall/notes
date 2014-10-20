"use strict";

module.exports = function(sequelize, DataTypes) {
  var Author = sequelize.define("Author", {
    name: DataTypes.STRING,
    age: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(db) {
        Author.hasMany(db.Book);
      }
    }
  });

  return Author;
};
