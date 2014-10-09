// include our House
var House = require("../constructor");
// include Chai
var expect = require("chai").expect;
// Using beforeEach....
var myHouse;




describe("House", function(){

  beforeEach(function(){
    myHouse = new House(2000,3.5,3);
  });

  describe("properties", function(){
    it("should be two thousand square feet", function(){
      expect(myHouse.sqFeet).to.equal(2000);
    });
    it("should have three and a half bathrooms", function(){
      expect(myHouse.bathrooms).to.equal(3.5);
    });
    it("should have three bedrooms", function(){
      expect(myHouse.bedrooms).to.equal(3);
    });
    it("should have an empty neighborhood", function(){
      // make sure the neighborhood is empty when the object is created
    });
  });
});

describe("my neighborhood", function(){
  myHouse = new House(1000,3,2);

  it("should not add the house to my neighborhood more than once", function(){
    myHouse.addToNeighborhood();
    myHouse.addToNeighborhood();
    myHouse.addToNeighborhood();
    expect(1).to.equal(myHouse.neighborhood.length);
  });
});



