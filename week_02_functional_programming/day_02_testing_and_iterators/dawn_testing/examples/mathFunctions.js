// // Quick recap on some math functions

// var add = function(a,b){
//   return a+b;
// };
// var subtract = function(a,b){
//   return a+b;
// };
// var multiply = function(a,b){
//   return a*b;
// };
// var divide = function(a,b){
//   return a/b;
// };

// // Longform example with module.exports

// module.exports.startingNum = 3;
// module.exports.add = function(a,b){
//   return a+b;
// };
// module.exports.subtract = function(a,b){
//   return a+b;
// };
// module.exports.multiply = function(a,b){
//   return a*b;
// };
// module.exports.divide = function(a,b){
//   return a/b;
// };

// Cleaner encapsulation with module.exports
var mathFunc = {
  startingNum: 3,
  add: function(a,b){
    return a+b;
  },
  subtract: function(a,b){
    return a+b;
  },
  multiply: function(a,b){
    return a*b;
  },
  divide: function(a,b){
    return a/b;
  }
};

module.exports = mathFunc;
