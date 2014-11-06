#Procs, Blocks, and Lamdas

## Objectives

* Re-examine blocks
* Write methods that take blocks as arguments
* Write methods using yield
* Define Procs
    *  and lambdas?

##Intro
In JavaScript we were creating functions which we could pass in as arguments. In Ruby we can do that as well.

```
def one
	return 1
end
```
Let's say we want to pass in the above function `one` to another function.
If we say `x = one`, x will not be equal to a method, but rather the
value 1. Remember, in Ruby this is equivalent to `x = one()`.

Clearly we need another way to do this. As a result we have to find a way to pass in a block a code. What is a block though?

## Block Examples

```
[1,2,3].each { |x| puts x*2 } # block is in between the curly braces

[1,2,3].each do |x|
  puts x*2                    # block is everything between the do and end
end
```

What about the calculator we wrote the other day?  It would be nice if
we could pass two numbers and the operation to perform on them.

```
# The & signifies that the third argument will be a block.
def calculator(num1, num2, &callback)
  callback.call(num1, num2)
end

# Outputs 50
calculator(5, 10) { |a, b| a * b }
```

But that `&` syntax is kind of ugly.  I thought Ruby was supposed to
be clean? Enter the `yield` statement.

```
# The block does not need to be specified in the parameter list,
# but can be called with the `yield` statement.
def calculator(num1, num2)
  yield(num1, num2)
end

# Will also output 50
calculator(5, 10) { |a, b| a * b }
```

##Blocks vs Procs
* Exactly the same, except...
* Blocks can't be stored in variables; however, Procs can!

##Procs Examples

```
fact = Proc.new {|n| n * n }
multiply = Proc.new {|x, y| x * y }
```

```
p fact.call(3)               #=>This will invoke ‘fact’ Proc and return 9
p multiply.call(4, 3)        #=>This will invoke ‘multiply’ Proc and return 12
```

```
multiply.call(4, 3)
multiply[4, 3]
```
   
```        
p = Proc.new { |x| puts x*2 }
[1,2,3].each(&p)              # The '&' tells ruby to turn the proc into a block 

proc = Proc.new { puts "Hello World" }
proc.call                     # The body of the Proc object gets executed when called
```

Back to our calculator example.  How would that look with `Proc`s?

```
# Define a calculator function that takes two numbers and a callback.
# Note that the callback does not have an `&` in front of it (because
# it is a Proc, not a block).
def calculator(num1, num2, callback)
  callback.call(num1, num2)
end

# Define a Proc that substracts two numbers.
sub = Proc.new {|a, b| a - b}

# Returns 5, since sub is called with 10 and 5.
calculator(10, 5, sub)
```

```
# Define a calculator function that takes two numbers.
def calculator(num1, num2)
  # yield calls the hidden block argument.
  yield(num1, num2)
end

# Define a Proc that substracts two numbers.
sub = Proc.new {|a, b| a - b}

# Returns 5, since sub is called with 10 and 5.
# Need to use & to convert Proc to block.
calculator(10, 5, &sub)
```

###Extra Credit

##Procs vs Lambdas
* Lambdas are a different 'flavor' of a vanilla Proc.
* Lambdas check the number of arguments, while Procs do not.
	* Procs will drop any extra arguments; lambda will throw an error.
* Lambdas and Procs treat the ‘return’ keyword differently:
	* ‘return’ inside of a lambda exits the lambda.
	* ‘return’ inside of a Proc exits the method containing the Proc.

## Lambda Examples
```
lam = lambda { |x| puts x*2 }
[1,2,3].each(&lam)

lam = lambda { puts "Hello World" }
lam.call
```

## Resources

* [Understanding Ruby blocks, Procs, and methods](http://eli.thegreenplace.net/2006/04/18/understanding-ruby-blocks-procs-and-methods/)
* [Ruby & (Ampersand) Parameter Demystified](http://www.skorks.com/2013/04/ruby-ampersand-parameter-demystified/)
* [Going crazy with to_proc](http://iain.nl/going-crazy-with-to_proc)
