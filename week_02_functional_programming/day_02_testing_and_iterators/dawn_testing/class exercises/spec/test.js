var expect = require("chai").expect;
var myFunctions = require("../app");

describe("add", function(){
  it("It should add two numbers", function(){
    expect(4).to.eql(myFunctions.add(2,2));
  });
});

describe("subtract", function(){
  it("It should subtract two numbers", function(){
    expect(0).to.eql(myFunctions.sub(2,2));
  });
});

describe("combine", function(){
  it("It should add two numbers when true", function(){
    expect(14).to.eql(myFunctions.combine(10,4,true));
  });
  it("It should subtract two numbers when false", function(){
    expect(0).to.eql(myFunctions.combine(2,2,false));
  });
});

describe("prime", function(){
  it("should return false on a non-prime number", function(){
    expect(true).to.not.eql(myFunctions.prime(8));
  });
  it("Should return a boolean", function(){
    expect(myFunctions.prime(8)).to.be.a('boolean');
  });
  it("should return true on a prime number", function(){
    expect(false).to.eql(myFunctions.prime(8));
  });
});

describe("merge", function(){
  it("should merge two arrays", function(){
    expect(myFunctions.merge([-1,0,5,17], [1,2,3,4,5,7])).to.eql([-1, 0, 1, 2, 3, 4, 5, 5, 7, 17]);
  });
  it("Should merge two empty arrays", function(){
    expect(myFunctions.merge([],[])).to.eql([]);
  });
  it("should merge two empty arrays using Chai's .empty", function(){
    expect(myFunctions.merge([],[])).to.be.empty;
  });
  it("should include all the numbers using Chai's .include", function(){
    expect(myFunctions.merge([1,2,3],[1,2])).to.include(1,2,3,7);
  });
});

