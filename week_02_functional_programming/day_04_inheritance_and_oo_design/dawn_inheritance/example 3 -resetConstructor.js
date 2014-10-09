// define the Person Class
function Person(name) {
    this.name = name;
}

// suppose we want to create a method that copies the class
Person.prototype.copy = function() {
    return new this.constructor(this.name);
};

// define the Student class
function Student(name) {
    this.name = name;
}

// inherit Person
Student.prototype = new Person();

// create a new student
var student1 = new Student("bob");

// see if the new student is an instance of a Student constructor
console.log(student1.copy() instanceof Student); // => false ("THIS IS BAD!")

// see if the new student is an instance of a Person constructor
console.log(student1.copy() instanceof Person); // => true ("as expected")

Student.prototype.constructor = Student;

var student2 = new Student("tom");
console.log(student2.copy() instanceof Student); // => true ("MUCH BETTER")
console.log(student2.copy() instanceof Person); // => true ("as expected")