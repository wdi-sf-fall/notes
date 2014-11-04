# Intro to Classes

Learning Objectives
====================
* Understand difference between objects and classes
* Understand how objects are referenced 
* Understand getters and setters
* Understand `attr_writer`, `attr_reader`, `attr_accessor`
* Understand instance variables and instance methods
* Understand class variables and class methods
* Recall the `self` keyword
* Understand `Protected`, `Private`, and `Public` methods
* Understand method chaining in a class


======================

## Class Definition of a person

Let's create our first class.


`person.rb` 

	class Person
		
	end
	

This defines a **class** definition of a `Person`. The *class* keyword denotes the *begining* of a class Definition.


To create a new *instance* of our *class* we write the following:

	> Person.new()
	
A particular instance of a *class* is a called an **object**. In general, languages that use *objects* as a primary means of *data abstraction* are said to be **Object Oriented Programming** (OOP) languages.

### Initialize and instance variables

In our class definition we can make use of an *initialize* method, which is run when a *new* instance of the class is created.

	class Person
		def initialize
			puts "A new person was created"
		end
	end


We can also make use of **instance variables** that are defined for each particular object and are available throughout other *methods* in the object. These variables    are prefixed by an *@* symbol, i.e. `@my_var`.

	class Person 
	
		def initialize(name)
			@name = name
		end
		
		def greet
			puts "Hello! My name is #{@name}."
		end
	end		


Now, when we create a new *Person* we are required to specify the `name` of the person.

	> person = Person.new("John")
	> person.greet
	=> Hello! My name is John.

### Getters and Setters

Having created an *instance variable* in our object, we might want to *read* that *outside* our object. However, we have to define a method that will act as an **interface for reading** for this variable called a **Getter Method**.

	class Person
		
		def intialize(name)
			@name = name
		end
		
		def name
			@name
		end
		
		...
	end

Now we can *read* or *get*  the *name* outside the object.

	> person = Person.new("Jane")
	> person.name
	=> "Jane"

Similarly, we may need to *change* or *set* an instance variable from outside the object, so we create a method called a **setter method**.

	class Person
	
		def initialize(name)
			@name = name
		end
		
		def name
			@name
		end
		
		def name=(other)
			@name = other
		end
		...
	end

We can now *get* and *set* the name of a person using the  methods we created for `@name`.

	> person  = Person.new("Samantha")
	> person.name
	=> "Samantha"
	> person.name = "Sam"
	> person.name
	=> "Sam"

### attr_reader, attr_writer, attr_accessor


In ruby, the practice of creating a *getter* method is so common there is a shorthand that can be used at the top of a class definition called `attr_reader`.

	class Person
		
		attr_reader :name
		
		def initailize(name)
			@name = name
		end
		
		def name=(other)
			@name = other
		end
		...
	end


Similarly, we can do the same with the *setter* method using `attr_writer`

	class Person
		attr_reader :name
		attr_writer :name
		
		def initialize(name)
			@name = name
		end
		
		...
	end
	
Moreover, we have a shorthand for telling our class to create both a *getter* and a *setter* method called *attr_accessor*.

	class Person
	
		attr_accessor :name
		
		def initialize(name)
			@name = name
		end
		...
	end
	

### self, class methods, and  class_variables (@@)



Let's first create a variable associated with our class using the `@@var_name` designates a class variable. Then we can access it with a class method using `self.method_name`.

	class Person
		
		@@population = 0
		
		def initialize(name)
			@name = name
			@@population += 1
		end
		
		def self.population
			@@population
		end
	end


If we create a few new people we see the following

	> Person.new("John")
	> Person.new("Jane")
	> Person.population
	=> 2

In most cases, inside an instance method, self refers to the Object, but when used in the context of a method name it refers to the *class* itself`.

You could also say

	class Person 
		...
		def Person.population
			@@population
		end
	end
	
but this has the unfortunate problem of rename each method when you rename the class.


Also, note that `self` can be used in instance methods to refer to particular *object* in use, i.e. `self.var_name` instead of `@var_name`.


### Private and Protected Methods

Ruby allows us to define private and protected methods as well. Here is a quick difference 

- Protected methods can be called by any instance of the defining class or its subclasses.

- Private methods can be called only from within the calling object. You cannot access another instance's private methods directly.

If we create a class `Person` with a name attribute and use `attr_accessor` to create the getters and setters as follows

	class Person
		attr_accessor :name
		
		def initialize(name)
			@name = name
		end
	end

then anyone can read and access `Person#name`. 

	> person1 = Person.new("John")
	> person1.name
	=> "John"
	
We can change this using the `private` keyword

	class Person 
		attr_accessor :name
		
		def initialize(name)
			@name = name
		end
		
		private
			def make_call
				puts "calling friends"
			end
	end


### Chainable methods

What if I wanted to create a class that had **chainable** methods calling many methods in one line.

	class Person
		
		def initialize(name)
			@name = name
		end
		
		def greet
			puts "Hello I am #{@name}."
			puts "What is your name?"
			@other = gets.chomp
			puts "Nice to meet you, #{@other}."
		end
		
		def thank
			puts "Thank you for coming."
		end
		
		def farewell
			puts "Farewell, #{@other}"
		end
	
	end

			
Trying to do 

	> person1 = Person.new("john")
	> person1.greet.thank.farewell
	=> nil has no method `thank`

to achieve this we have to return a reference to the object after each method

	class Person
		
		def initialize(name)
			@name = name
		end
		
		def greet
			puts "Hello I am #{@name}."
			puts "What is your name?"
			@other = gets.chomp
			puts "Nice to meet you, #{@other}."
			self
		end
		
		def thank
			puts "Thank you for coming."
			self
		end
		
		def farewell
			puts "Farewell, #{@other}"
			self
		end
	
	end
	
# Inheritance 

- Inheritance is used to indicate that one class will get most or all of its features from a parent class. 
    
*Why is inheritance useful?

- DRY - Don't Repeat Yourself & reuse code functionality
- Faster implementation time

### Example - FIX

```
class Foo < Test
  def initialize(name)
    super(name)
  end
end
```

### What is this "super" thing?

Using super can DRY up our code by creating a copy of the parent class. In the example above, we do not need to specify `@name = name` because we can capture that from the super (or parent) class.

## Load/require


###load
- This will reload the ruby file every time it's called.
- Load is typically used for checking for small changes and debugging - does not keep track of whether a file or library has been loaded

###require
- This will load a ruby file ONCE and only once. All subsequent require statements will not reload the file.
- Doesn't need the .rb file extension, but won't hurt if it's there.

###require_relative
- Just like require, but looks for a relative path instead of a specific path for your ruby gems (like require does)
- - Doesn't need the .rb file extension, but won't hurt if it's there.
