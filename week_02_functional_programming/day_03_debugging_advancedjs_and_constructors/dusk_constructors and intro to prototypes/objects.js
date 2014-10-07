require('locus');
// object Literal Syntax

// var thing= new Object();
// var something = new Array();

// var person = {
//   firstName: "anil",
//   lastName: "bridgpal"
// }

// console.log(person.firstName);
// console.log(person.lastName);

// Constructor
var Person = function(firstName, lastName){
  this.firstName = firstName;
  this.age = 0;
  this.lastName = lastName;
};

var elie = new Person("Elie", "Schoppik");
var tim = new Person("Tim", "Licata");

eval(locus);

// Constructors are functions
// Constructors take parameters
// Constructors don't have return values

