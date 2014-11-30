## Coffeescript

### Getting started 

`sudo npm install -g coffee-script` to install coffee script

# CoffeeScript

## Why CoffeeScript (15 min)

* CoffeeScript is a programming language that has "nice" (Ruby like) syntax that compiles into JavaScript.
* CoffeeScript is easier to write and easier to read than JavaScript (for some....)
* Very well documented.

		* [http://jashkenas.github.io/coffee-script/](http://jashkenas.github.io/coffee-script/)
		* [http://js2coffee.org/]http://js2coffee.org/](http://js2coffee.org/]http://js2coffee.org/)
		* [http://arcturo.github.io/library/coffeescript/index.html](http://arcturo.github.io/library/coffeescript/index.html)

### Installation (not necessary, but useful if you would like to mess around with coffeescript outside of Rails and without a tool like Grunt/Gulp)

	# Everyone should have node and npm installed. npm (node package manager) comes with node.

	# test for node:
	$ node -v

	# test for npm:
	$ npm -v

	# If node and npm are installed, install CoffeeScript
	$ sudo npm install -g coffee-script

	# test installation
	$ coffee -v

## Summary of Features / Quirks - Read this people!

* No var keyword.
* No semicolons.
* Indentation is super important
	* indent two spaces to start a new block
	* improper indentation is the source of __lots__ of problems the __hardest__ part by far when learning coffeescript

### 	Now is a good time to go to Sublime Text > Preferences > Settings-User and make sure you have `"tab_size": 2` in there :)

* Parenthesis are not required:
	* CoffeeScript convention is to use parenthesis on everything except the outermost one
* Parenthesis are required to run a function: function_name( )
* CoffeeScript supports string interpolation
* Comments use hashtag #. CoffeeScript comments do not compile into the .js file.
* @ === this, example:  @name === this.name
* CoffeeScript implicitly returns the last statement, JavaScript implicitly returns undefined



## Configuration

	# Configure directory to automatically compile your CoffeeScript into JavaScript
	# Rails does it automatically!

	$ compiles name.coffee to name.js everytime name.coffee is changed
	$ coffee -bcw name.coffee


## Functions, List Comprehensions, Conditionals (30 min):
## Functions
* Functions are declared with the "Skinny Arrow": ->
	* "->" converts to "function(){ }"
	* functions use "Fat Arrow" => to bind the current value of "this"
* All CoffeeScript functions have a return value
	* like Ruby there is an implicit return of the last line in your function
* CoffeeScript functions are all named functions
* CoffeeScript supports default settings for parameters

		# JavaScript:
		my_function = function(parameter) {
		  console.log("This is my parameter: " + parameter)
		}

		# CoffeeScript:
		my_function = (parameter) ->
		  console.log "This is my parameter: #{parameter}" # string interpolation!


## Arrays
* can be written vertically if you really hate commas
* vertical arrays are easier to review and edit (I think...)

		months = ["January", "February", "March"]

		months = [
			"January"
			"February"
			"March"
		]

## Ranges
* very much like ruby ranges

    	# inclusive range assignment
    	range = [1..6] => [1,2,3,4,5,6]

    	# non-inclusive range assignment
    	range = [1...6] => [1,2,3,4,5]

    	# can get subsets of an array
    	range[1..3] => [2,3,4]
    	range[0..2] => [1,2,3]

## Conditionals

	# two line conditional:
	if x < 5
	  alert 'x is less than 5'

	# One line conditional:
	alert 'x is less than 5' if x < 5

	# if then format
	if x < 5 then alert 'x is less than 5'

	if x < 5
	  alert 'x is less than 5'
	else
	  alert 'x is greater than or equal to 5'

	if x < 5 alert 'x is less than 5' else alert 'x is greater than or equal to 5'


## Operators:
<h3>

<table>
  <thead>
    <tr>
      <th>Operation</th>
      <th>JavaScript</th>
      <th>CoffeeScript</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td> Equality</td>
      <td> === </td>
      <td> ==, is</td>
    </tr>
    <tr>
      <td> Inequality</td>
      <td> !== </td>
      <td> !=, isnt </td>
    </tr>
    <tr>
      <td> Logical Negative </td>
      <td> ! </td>
      <td> not </td>
    </tr>
    <tr>
      <td> Logical AND </td>
      <td> && </td>
      <td> and </td>
    </tr>
    <tr>
      <td> Logical OR </td>
      <td> || </td>
      <td> or </td>
    </tr>
    <tr>
      <td> Logical True </td>
      <td> true </td>
      <td> true, yes, on </td>
    </tr>
    <tr>
      <td> Logical False </td>
      <td> false </td>
      <td> false, no, off </td>
    </tr>
  </tbody>
</table>

</h3>


## Chained Comparison

	if ( x < length && length < y ) { alert 'in between' }

	if x < length < y
	  alert 'in between'


## List Comprehensions / Loops

	months.forEach (month,index) ->
	  console.log "Month: #{month}"

	for month in months
	  console.log "Month: #{month}"

	console.log "Month: #{month}" for month in months

	# Filtering with "when"
	console.log "Month: #{month}" for month in months when month isnt "February"

## Object

	my_pet =
	  name: "Fluffy"
	  species: "Cat"
	  age: 3
	  # name needs the @ symbol: @name === this.name
	  voice: -> alert "Meow, my name is #{@name}"

	console.log my_pet.name
	console.log my_pet.species
	my_pet.voice()

## Existence Operator: ?
* tests for existence of a variable or object
* just at question mark to the end of a variable or object
* don't overuse the existence operator

		# Initialize variable to zero if it does not exist.

		if not variable?
		  variable = 0

		varible = 0 if not variable?

		variable = 0 unless variable?

		variable ?= 0  # combined existance test, conditional assignment

## Switch Statement
* very much like Ruby shorthand

		plate_umpire_call = switch number_outs
			when 0 then "No outs, play ball."
			when 1 then "One out, play ball."
			when 2 then "Two outs, play ball."
			else "The side is retired!"


## Coffeescript Classes

### Constructors and Instance Variables

Coffeescript uses Javascript constructors and prototypes to implement the classes
and inheritance we know and love from Ruby. (And lots of other OO languages)

Instead of `initialize`, in Coffeescript (because it's JS) we declare a function
`constructor`. Classes are just JS objects, so we declare their 'methods' just
like object properties.  Instance variables are nothing more than JS object properties,
but Coffeescript gives us the `@` as a shorthand for `this`.

```
class Person
  constructor: (name) ->
    # Instance variables start with `@` like Ruby
    @name = name # compiles to `this.name = name`

elie = new Person "Elie"
console.log elie.name # => "Elie"

```

Coffeescript functions have a nifty special power: we can assign instance variables directly from the parameter list The below class is identical to the above.

```
class Person
  constructor: (@name) ->
  
  sayHi ->
  	console.log "Sup?"
```

Actually gives us this in JS

```
var Person;

Person = (function() {
  function Person(name) {
    this.name = name;
  }

  Person.prototype.sayHi = function() {
    return console.log("Sup?");
  };

  return Person;

})();
```

### Inheritance and `super()`

We use the CoffeeScript keyword `extends` to say one class inherits from another.
`super` is a reference to the superclass' implementation of the current function,
and (of course) can be called.

```

class Car
   constructor: (@make, @model)->

class Motorcycle extends Car
   constructor: ->
      super(Car)
      
```

### The infamous fat arrow =>  

We know that when Javascript functions execute, the `this` keyword is bound to the object
to which the function is attached.  How might this affect our classes adversely?

```
myObj =
  name: "Snoop doggy dogggg"
  timeout: ->
    console.log "What's my name? #{@name}"
    setTimeout ( ->
      console.log "What about now? #{@name}"
      ), 1000
  github: ->
    $.ajax
      method: "GET"
      url: "https://api.github.com/users/eschoppik"
      success: ->
        console.log @name

myObj.timeout()
myObj.github()
```
What is the value of this? Try refactoring the code using the fat arrow instead of -> and see what happens!

## Additional Resources 

[http://coffeescript.org/](http://coffeescript.org/)

[http://coffeescript.codeschool.com/](http://coffeescript.codeschool.com/)

[http://code.tutsplus.com/tutorials/rocking-out-with-coffeescript--net-17027](http://code.tutsplus.com/tutorials/rocking-out-with-coffeescript--net-17027)
