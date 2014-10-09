##Intro to TDD with Node, Mocha and Chai

#### NPM, package.json and node_modules

Before we begin talking about testing our code, we first need to introduce a few new concepts, and technologies. We're going to start working with Node.js (which we will dive into much deeper next week) so in order to be prepared for next week, we need to have a grasp on some key Node concepts including:

0. Dependencies - Since Node does not come with a lot built into it, there has been a large amount of external code written to help make Node easier to work with. When we include these external libraries/frameworks in our code, we call them dependencies (as our Node app depends on them to run successfully). To install dependencies we use the package manager that comes with node - this is called NPM.

1. NPM [https://www.npmjs.org/](https://www.npmjs.org/) - NPM is a package manager for node that is included when you install node.js. NPM is our main resource for installing packages (this includes libraries/frameworks and mostly other people's code). To start working with NPM (all done in the terminal) we use some of terminal commands including the following:

    - `npm init` - this will create a package.json and it's where you begin (we will discuss this file a bit further down in the notes)
    - `npm install NAME_OF_PACKAGE` - this command is used to install a package for us. Once installed, the package will be added to a node_modules folder (this is also a bit further down in the notes)
      - adding the `--save` flag will save this file to a dependencies object in our package.json
      - adding the `--save-dev` flat will save the file to a dev-dependencies object in our package.json.
        - The difference between dependencies and dev-dependencies is that when we deploy our code (in production), the dev-dependencies will not be included
    - `npm start` - this will start our node server for us (assuming we have code written to help us do that)
    - `npm test` - this will run our test files (assuming we have a testing framework set up)
    - `npm install` - this will install all of the dependencies in the package.json file. If you are working with someone else's code, you should also start by running `npm install` to make sure you have all of the required dependencies.

    - We're going to be running the command `npm install --save` a lot....how can we save time by typing less? (think back to creating an alias in your .zshrc or .bashrc file)

2. Package.json [https://www.npmjs.org/doc/files/package.json.html](https://www.npmjs.org/doc/files/package.json.html)

 	* The package.json holds various metadata relevant to the project and is your go to place to see information about the app as well as any dependencies you have installed (using npm install --save). If you leave off the --save when you install a package, it will not be added to your package.json file. Best practice is to include the `--save` flag when you run `npm-install` so that you can quickly tell what dependencies your app has and so can others when they look at your code.

 	* If you have not seen JSON before, JSON stands for JavaScript Object Notation and it is a data-interchange format that is easy to read and write (because it looks almost identical to a JavaScript object). We will work with JSON a bit more later, but for now you can read more about it [here](http://en.wikipedia.org/wiki/JSON) and [here](http://www.w3schools.com/json/)

 	* To create a package.json, run `npm-init`. This will prompt you with a bunch of questions and some instructions. You can either press enter to go with a default or type in something different for each prompt (make sure the name of your app is one word or escapes an empty space). At the end, you will see your package.json file and the prompt asking you `Is this ok? (yes)`. If you type in 'y' or 'yes' it will create the file for you. Here is an example of one:

```
  {
  "name": "firstApp",
  "version": "0.0.0",
  "description": "My first app",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Elie Schoppik",
  "license": "ISC",
  "keywords": [
    "first",
    "app"
  ]
}
```

For now, don't worry about the "main" portion, pay more attention to the "test" portion (we're going to want to fix that if we want to run `npm-test`)

##### Node_modules folder

* Whenever you run `npm-install NAME_OF_PACKAGE` successfully, one of two things will happen. Either a node_modules folder will be created with your package inside of it, or if you have an existing node_modules folder (which was created when you ran `npm-install ANOTHER_PACKAGE` earlier), the package will be added to that folder. Only one node_modules folder will exist in the root directory of your application.

# Let's talk about Testing

When you read about testing you will see terms like unit testing, integration testing, functional testing, acceptance testing etc. [Here](http://stackoverflow.com/questions/4904096/whats-the-difference-between-unit-functional-acceptance-and-integration-test) is a great Stack Overflow answer that details some key differences

### The tools we are going to use (Mocha and Chai)

#### Mocha

Mocha is a testing framework to test your code and it can use different assertion libraries. Testing frameworks are used to organize and execute tests.

To install mocha:

- `npm install -g mocha` (if you get an error run `sudo npm install -g mocha` and then put in your password)

To run your tests, just type `mocha`

The mocha binary (what you get when you run `npm install -g mocha`) has a couple nice flags to help you out. One of my favorites is using the -R flag for a reporter and running `mocha -R spec` which gives you a bit more information on the test you are running. You can see more about these flags by typing `mocha -h` and reading the Mocha documentation.

Before we start coding, let's take a look at the Mocha syntax and some of it's key words and functions.

<b>describe</b> - this takes in two parameters, a string and then a function. You use this to describe your test:

```
describe("my first test adds numbers", function(){
	// The it goes in here
})
```

<b>it</b> - this is placed inside the describe function and focuses on 1 specific thing. Inside of the "it" block, you place your assertion or expectation (this is where Node's Assert library or Chai helps out)

```
describe("my first test adds numbers", function(){
	it("Should take 3 + 3 and make 6", function() {
		// Assertion/Expectation goes in here
	})
})
```

Before we introduce Chai, let's spend a little time getting used to Mocha and for now, we will use Node's built in Assert library for assertions (which is what Chai is much better at and will replace soon).

#### EXAMPLE 1 - Testing the indexOf method

```
var assert = require("assert");
describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
    });
  },
    it('should return the value when the value is not present', function(){
      assert.equal(0, [1,2,3].indexOf(1));
  })
  );
});
```
#### EXAMPLE 2 - Testing the length method

```
  describe('length', function(){
    var testString = "taco";
    it('should return the length of a string', function(){
      assert.equal(4, testString.length);
    });
  });
```

Ok, this is pretty cool, but what about when I want to test my own code and not some pre-existing JavaScript? In order to do this, we have to introduce another concept - module.exports (this is a tricky one).

In short, Node comes built with a very nice tool called module.exports that lets you export pieces of your code and wrap it in it's own module (so that variables do not conflict). In order to export your code you can assign module.exports.VARIABLE = YOUR CODE or you can wrap your code in an object and then assign module.exports = YOUR_OBJECT. When you include your module on another page, you use the keyword require(PATH/NAME_OF_JS_FILE). Here is a small example:


#### EXAMPLE 3 - Including your own code with module.exports

In myMathFunctions.js:

```
module.exports.add = function(a,b){
  return a+b;
};
```

In my spec/test.js

```
var mathFunc = require("../myMathFunctions");

//now I can include this function in a (hopefully passing) test!

  describe('add', function(){
    it ('should add two numbers', function(){
      assert.equal(2, mathFunc.add(2,0));
    });
  });
```

A more modular way to do this is my wrapping your code in an Object (so that you don't need module.exports before every variable declaration.

In myMathFunctions.js:

```
var mathFunc = {
  add: function(a,b){
    return a+b;
  }
}

module.exports = mathFunc;
```

Now that we've seen a couple examples, let's try adding Chai to the equation.

#### Chai

Chai is an assertion library, which is a tool to verify that things are correct. You can add plugins to Chai or just use it plain, but you need a testing framework in order to use it (that's what Mocha is for!). This makes it a lot easier to test your code, so you don't have to do thousands of if statements or use a limited assertion library like Node's built in Assert.

To install chai, make sure you are in the root directory of your application and type `npm install chai`.

For now, we will be Using chai.expect (vs chai.assert and chai.should) so in our test file we will want to set `var expect = require("chai").expect`

If you want to read more into the differences between assert, expect and should in Chai - see [this](http://stackoverflow.com/questions/21396524/what-is-the-difference-between-assert-expect-and-should-in-chai) awesome SO (StackOverflow) post.

### EXAMPLE 1 - compare Node assert to Chai

Node's Assert Library:

```
var assert = require("assert");
  describe('starting number', function(){
    it ('should know my starting number variable', function(){
      assert.equal(3, mathFunc.startingNum);
    });
  });
```

Chai Expect Library:

```
var expect = require("chai").expect;
  describe('starting number', function(){
    it ('should know my starting number variable', function(){
      expect(3).to.equal(mathFunc.startingNum);
    });
  });
```

According to the Chai documentation - Asserts that the target is strictly equal (===) to value, while eql asserts that the target is deeply equal to value. What does this mean?


### EXAMPLE 2 - equal vs eql

Using eql

```
  describe('deep equality', function(){
    it('should tell me that two objects are equal in type and content', function(){
      expect([1,2,true]).to.eql([1,2,true]);
      expect({foo:"Bar"}).to.eql({foo:"Bar"});
      expect(3).to.eql(3);
    });
  });
```
Using equal

```  
  describe('strict equality', function(){
    it('should tell me that two primitives are equal in type and content', function(){
      expect(1).to.not.equal("1");
      expect([]).to.not.equal([]);
      expect("foo").to.equal("foo");
    });
  });
```

To see all of the chai expect examples [http://chaijs.com/api/bdd/](http://chaijs.com/api/bdd/)

# Testing code in the real world

Now that we've seen how to test our code, let's talk about how code is tested in the real world. While there are a wide range of unit testing methodologies out there, there are two broad approaches to start with. 

The first approach, is to write unit tests first and this is the ideal approach. It's ideal, because you can catch bugs right away. Often, writing a unit test will reveal problems with your approach to a problem, before you get too far with writing the actual code.  However, there's a pitfall with this. It's not always practical to write tests first. Sometimes, you have to write code that's inherently not testable, but this shouldn't be an excuse to abandon unit testing altogether.

The other approach is to write your application, and then unit test it. This approach helps you find bugs in the code you've already written. When you write unit tests after writing application, it helps you define how the application is supposed to behave, and that can help you catch breakages later on. However, the biggest pitfall with this approach is that you don't get the benefit of fixing bugs before you write your code. That's something that writing tests first will help you with.

Our first approach of writing tests first, falls under the philosophy of __TDD or Test Driven Development__. This idea revolves around the principle of 'Red - Green - Refactor' which means write tests first (they will obviously fail because you have no code), then write code to make these tests pass (turn green in your terminal) and refactor if necessary to improve the quality of the code and ensure that all tests still pass. 

