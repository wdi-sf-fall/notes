"use strict";

module.exports = function(sequelize, DataTypes) {
  var Book = sequelize.define("Book", {
    title: {
      type:DataTypes.STRING,
      validate: {
        len: [6,100]
      }
    },
    genre: DataTypes.STRING,
    AuthorId: {
            type: DataTypes.INTEGER,
            foreignKey: true
        },
  }, {
    classMethods: {
      associate: function(db) {
        Book.belongsTo(db.Author);
      }
    }
  });

  return Book;
};
