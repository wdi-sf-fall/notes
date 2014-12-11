Closures
========

A closure is a phenomenon that occurs when lexical scope
clashes with a
[first-class function](http://en.wikipedia.org/wiki/First-class_function).

First-Class Functions
---------------------

![High Class](img/high-society.jpg)

> In the Kingdom of Javaland, where King Java rules with a
> silicon fist, people aren't allowed to think the way you
> and I do. In Javaland, you see, nouns [objects] are very
> important, by order of the King himself. Nouns are the most
> important citizens in the Kingdom. They parade around looking
> distinguished in their showy finery , which is provided by
> the Adjectives, who are quite relieved at their lot in life.
> The Adjectives are nowhere near as high-class as the Nouns,
> but they consider themselves quite lucky that they weren't
> born Verbs [functions].
>
> <cite>[Execution in the Kingdom of Nouns](http://steve-yegge.blogspot.com/2006/03/execution-in-kingdom-of-nouns.html)</cite>

"First-class" means that functions can do all of the things
you can do with the other citizens (e.g., Strings, Arrays,
Booleans, or Numbers).  This includes the ability to store
functions in variables, pass them as arguments to other
functions, and use them as return values from functions.

Are there languages where functions are __not__ first-class
citizens? Yes, Java (see above) is one example. Functions can
only be methods of Objects, and cannot exist on their own.

#### Examples of First-Class Functions
```javascript
// Store a function in a variable. You could store any
// datatype in the `sayHi` variable, including a string,
// a boolean, or even a function!
var sayHi = function () {
  console.log("hi");
};
```

```javascript
// Pass one function to another function. Here I'm passing
// two arguments to `setTimeout`: a Number and a Function.
// Meaning the Function is first-class, just like Number.
setTimeout(sayHi, 1000);
```

```javascript
// You can even return a function from another function.
var outer = function () {
  console.log("i am outer");
  var inner = function () {
    console.log("i am inner");
  };
  return inner;
};
var result = outer(); // prints "i am outer"
result();             // prints "i am inner"
```


Lexical Scope
-------------

![Lexical Scope](img/lexical-scope.png)

Scope determines what variables are visiable / available
where.

```javascript
var name = "Tim";
var sayHi = function () {
  console.log("Hi, my name is " + name);
};
sayHi(); // prints "Hi, my name is Tim"
```

How did that happen? There is no local variable called `name`
inside of the `sayHi()` function. Due to _lexical scoping_,
JavaScript was able to look into the  surrounding _lexical
environment_ to find the variable `name`.

Closures
--------

> Sometimes it's called a _closure_, other times a saved
> lexical environment. Or, as some of us like to say, _let
> over lambda_. Whatever terminology you use, mastering
> this concept of a closure is the first step to becoming
> a professional lisp programmer. In fact, this skill is
> vital for the proper use of many modern programming
> languages, even ones that don't explicitly contain let
> or lambda, such as Perl or JavaScript.
>
> <cite>[Let Over Lambda](http://www.amazon.com/Let-Over-Lambda-Doug-Hoyte/dp/1435712757) -
> Doug Hoyte</cite>

![Patrick asks a question about closures](img/closure.jpg)

Patrick is pretty close to being correct. Actually, by some
definitions, he may be correct. A function with a function
does create the conditions for a closure, but you have to
return the inner function from the outer one to get the
benefit(s).

##### Step 1

Create an inner function within an outer function.
Use __lexical scope__ to access variable in outer scope
from the inner scope. _Easy peasy_.

```javascript
var outer = function () {

  var name = "Tim";

  var inner = function () {
    console.log("name is " + name);
  };

  inner();
};

outer();  // prints "name is Tim"
```

##### Step 2

Return the created function. _First-class functions_.

```javascript
var outer = function () {

  var name = "Tim";

  var inner = function () {
    console.log("name is " + name);
  };

  return inner;
};
```

##### Step 3

Access variables from the outer function in the inner
function __after__ the outer function has returned.
_Closure_.

```javascript
var outer = function () {

  var name = "Tim";

  var inner = function () {
    console.log("name is " + name);
  };

  return inner;
};

var fn = outer();
fn(); // prints "name is Tim"

// This is a closure. How in the hell is `name` still
// available for use even _outside_ of `outer`?
```
