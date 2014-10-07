
var mathFunc = require("../mathFunctions");
// // TESTING USING node has an assert module
// // http://nodejs.org/api/assert.html
// var assert = require("assert");
  // describe('starting number', function(){
  //   it ('should know my starting number variable', function(){
  //     assert.equal(3, mathFunc.startingNum);
  //   });
  // });
//   describe('add', function(){
//     it ('should add two numbers', function(){
//       assert.equal(2, mathFunc.add(2,0));
//     });
//   });
//   describe('subtract', function(){
//     it ('should subtract two numbers', function(){
//       assert.equal(2, mathFunc.subtract(2,0));
//     });
//   });
//   describe('multiply', function(){
//     it ('should multiply two numbers', function(){
//       assert.equal(0, mathFunc.multiply(2,0));
//     });
//   });
//   describe('divide', function(){
//     it ('should divide two numbers', function(){
//       assert.equal('Infinity', mathFunc.divide(2,0));
//     });
//   });
//   describe('length', function(){
//     var testString = "taco";
//     it('should return the length of a string', function(){
//       assert.equal(4, testString.length);
//     });
//   });

//TESTING USING CHAI EXPECT

var expect = require("chai").expect;
  describe('starting number', function(){
    it ('should know my starting number variable', function(){
      expect(3).to.equal(mathFunc.startingNum);
    });
  });
  describe('add', function(){
    it ('should add two numbers', function(){
      expect(2).to.equal(mathFunc.add(2,0));
    });
  });
  describe('subtract', function(){
    it ('should subtract two numbers', function(){
      expect(2).to.equal(mathFunc.subtract(2,0));
    });
  });
  describe('multiply', function(){
    it ('should multiply two numbers', function(){
      expect(0).to.equal(mathFunc.multiply(2,0));
    });
  });
  describe('divide', function(){
    it ('should divide two numbers', function(){
      expect(Infinity).to.equal(mathFunc.divide(6,0));
    });
  });
  describe('length', function(){
    var testString = "taco";
    it('should return the length of a string', function(){
      expect(4).to.equal(testString.length);
    });
  });
  describe('deep equality', function(){
    it('should tell me that two objects are equal in type and content', function(){
      expect([1,2,true]).to.eql([1,2,true]);
      expect({foo:"Bar"}).to.eql({foo:"Bar"});
      expect(3).to.eql(3);
    });
  });
  describe('strict equality', function(){
    it('should tell me that two primitives are equal in type and content', function(){
      expect(1).to.not.equal("1");
      expect("foo").to.equal("foo");
    });
  });


