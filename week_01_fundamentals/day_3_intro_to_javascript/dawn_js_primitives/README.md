# Javascript Primitives
## Intro to Programming fundamentals

![JS, the Good Parts](http://3.bp.blogspot.com/-uPZ2b48viTk/TflhMaivRHI/AAAAAAAABC8/dYV8_fPjFTs/s1600/JavaScript-the-good-parts.jpg "JS, the Good Parts")


## Objectives

| Objectives |
| :----- |
|
| Identify the primary Javascript data types and when to use each |
| Navigate through the JS console |
| Manipulate data types and create expressions in JS |


## Agenda
* History of Javascript
* Understand Data Types
  * Comments
  * Numbers
  * Strings
  * Values & Expressions
  * Objects everywhere
    * Arrays
    * Objects

## History of Javascript
![Javascript Timeline](javascriptimeline.jpg "Javascript Timeline")

* Not to be confused with Java, but it is the baby child of Java syntax & Scheme principles
* Created in 10 days in May 1995 by [Brendan Eich](http://en.wikipedia.org/wiki/Brendan_Eich)
* It's an exciting time to learn Javascript! It's the language that enables web pages to respond to user interaction beyond the basic level.
* The language today is viewed quite differently than how it was 10 years ago

[The famous Douglas Crockford gives a thorough introduction of Javascript](https://www.youtube.com/watch?v=t7_5-XYrkqg)

## Why Should YOU Care About Javascript
* Can use the same language on the front-end and the backend with Node.js
* JS serves as a platform to host other languages as well, i.e. Write in a different language (CoffeeScript or ClojureScript), but using a JS runtime
* Many popular libraries built with JS - jQuery, Underscore.js, Sugar

##Javascript Console
- Allows you to easily interface with your app to run JS commands and display log messages for help with debugging
- Shortcut to open JS console & bring focus to console
  - Mac: Cmd + Opt + J
  - Linux: Ctrl + Shift + J
- Use Tab for autocompletion!

##What's a Data Type?
"A data type or simply type is a classification identifying one of various types of data, such as real, integer or Boolean, that determines the possible values for that type; the operations that can be done on values of that type; the meaning of the data; and the way values of that type can be stored."

## Comments

Comments come in two forms 

  * line comments
  
   ```
   // descriptive stuff
   ```
  * multiline comments
  
  ```
  /*
    These 
    are
    comments on
    many lines
  */
  
  ```
## Numbers 

Numbers are one of the *types* of **values** we want to be able to interact and play with in JS.

* Integers

  ```
   ..., -1,0, 2, 3, 4, 5, ... 
  ```
* Floats (or Decimal numbers)

  ```
   2.718, 3.14, .5, .25, etc
  ```

In JS, these are the same **type** of object, which it calls *Numbers*, so if you know floats and integers do not go looking for them.

## Strings

Strings are collections of letters and symbols known as **Characters**, and we use them to deal with words and text in Javascript. Strings are just another type of **value** in Javascript.

```
"John", "Jane"
```

## Boolean
A boolean represents logical values **true** or **false**

```
var catsAreGreat = true;
var dogsRule = false;
```

## Values and Expressions
Values are the simplest components in JavaScript. ```1``` is a value, ```true``` is a value, ```"hello"``` is a value, ```function() {}``` is a value.

Types of values like `Number` or `String` are not very useful without being able to form **Expressions** or **Combinations**.

Try your favorite number operators

```
  1 + 1
  => 2
  2 - 1
  => 1
```
You can also create expressions with strings using addition

```
  "Hello, " + "world!"
  => "Hello, world!"
```

This is called **String Concatentation.**


### Special Number Operators

Javascript can be a little cheap with the number of operations it allows you to do. For example, how is someone supposed to square a number or cube a number easily? Luckily there is a special `Math` object with some very useful methods.

* Taking a number to some `power`? Then just use `Math.pow`

```
// 3^2 becomes
Math.pow(3,2)
=> 4
// 2^4 becomes
Math.pow(2,4)
=> 16
```
* Taking a square root

```
// √(4) becomes
Math.sqrt(4)
=> 2
```
* Need a `random` number? Then use `Math.random`.

```
// The following only returns a random decimal
Math.random()
=> .229375290430
/** 
  The following will return a 
  random number between 0 and 10
*/
Math.random()*10
```

* Since Numbers can be **Floats** or **Integers** we often want to get rid of remaining decimal places, which can be done using `Math.floor`.

```
// Remove the decimal
Math.floor(3.14)
=> 3
Math.floor(3.9999)
=> 3
```

## Variables

Having made some expressions it becomes evident we want to store these values.

To store values we use things called **variables**. 

The word 'variable' means 'can change' and is used because variables can store many different types of values and can change their value many times. 

```
var myNumber = 1;
// or also

var myString = "Greetings y'all!"
```

The main note to make here is that these variables should always have the `var` keyword and use `camelCase`

Variables can also store the result of any "expression".
For example:

```
var x = 2 + 2;
```
or

```
var name = 'Tripta';
var greeting = 'Hello' + name;
```

##undefined & null

**undefined**: Represents a value that hasn't been defined

```
var notDefinedYet;
```

**null**: Represents an explicitly empty value

```
var dogsRule = null;
```

## Objects Everywhere

In Javascript we just discussed types of values we can use. We call these values objects, which for now just means that in addition to storing some data you also get to use some helpful methods when you are working with them.

* If you want to turn a number into a string you can use a helpful method called `toString`.

```
(1).toString()
=> "1"
/**
  be careful though,
  since numbers can be floats
  javascript might
  misunderstand you.
*/
1.toString()
=> Float Error
// but the following works
1..toString()
```

## Arrays 

Unfortunately, strings and numbers are not enough for most programming purposes. 
What is needed are collections of data that we can use efficiently, Arrays. Think of an Array like a sorted list that you can keep tons of stuff in.

Arrays are great for:

* Storing data
* Enumerating data, i.e. using an index to find them.
* Quickly reordering data 

Elements (that is what you call a single item in an array) that are stored within arrays start at 0 and count up from there

```
var friends = ['Moe', 'Larry', 'Curly'];
=> ['Moe', 'Larry', 'Curly']
```

Items in an array are stored in sequential order, and indexed starting at `0` and ending at `length - 1`.

```
// First friend
var firstFriend = friends[0];
 => 'Moe'
// Get the last friend
var lastFriend = friends[2]
=> 'Curly'
```

To check how many friends you have, you can use ```.length```
To add more friends, you can use ```.push```

Remember: 
  - Arrays will always preserve ordering which means they will remember the order in which you added or defined things. Not everything in JavaScript preserves ordering, so remember this special property of Arrays.

### Exercises

1.) Find the last name in the following array:

```
var friends = [
                'Moe', 
                'Larry', 
                'Curly',
                'Jane',
                'Emma',
                'Elizabeth',
                'Elinor',
                'Mary',
                'Darcy',
                'Grey',
                'Lydia',
                'Harriet'
              ];
```

Add your name to the end of the `friends` and add another name to beginning. Change the `Elizabeth` to `Liz`.

2.) Sort the list of `friends` above.

3.) Here are a list of `ages`

```
var ages = [83, 53, 37, 29, 60, 30, 66, 19, 59, 41, 9, 64, 19, 80, 24, 53, 70, 1, 53, 40, 92, 4, 71, 65, 8, 2, 51, 80, 94, 37, 80, 64, 19, 6, 14];

```
find the `median` age.

4.) There are a list of names in a string, below. How could we sort them? Hint: use string and array methods.
 
```
var friends = "Moe,Larry,Curly,Jane,Emma,Elizabeth,Elinor,Mary,Darcy,Grey,Lydia,Harriet";
```

5.) List all the `friends` above in reverse alphabetical order.

6.) We have two lists of friends below:

```
var myFriends = [
                  'Rickon',
                  'Meera',
                  'Hodor',
                  'Jojen',
                  'Osha',
                  'Rickard',
                  'Maester',
                  'Rodrik',
                  'Jory',
                  'Septa',
                  'Jon'
                ];

var yourFriends = [
                    'Bilbo',
                    'Boromir',
                    'Elrond',
                    'Faramir',
                    'Frodo',
                    'Gandalf',
                    'Legolas',
                    'Pippin'
                  ];
```

we need to combine them into one list and sort them.

7.) I have a list of favorite foods below. If `Popcorn` is my favorite food and `Potato chips` my second favorite, then how would you find the rank of another food. Try `Pho`.


```

var foods = [
              'Popcorn',
              'Potato chips',
              'Shrimp',
              'Chicken rice',
              'Poutine',
              'Tacos',
              'Toast',
              'French Toast',
              'Crab',
              'Pho',
              'Lasagna',
              'Brownie',
              'Lobster',
              'Donuts',
              'Ice cream',
              'Hamburger',
              'Sushi',
              'Chocolate',
              'Pizza'
            ];

```


8.) I made a mistake with my favorite foods. How can I find the index of `Donuts` and remove it? **(Hint: look up `splice`)**

9.) My friends want to know what my `5`th to `10`th favorite foods are.

10.) How would you create an array that efficiently stored the following information:

```
  'Moe' is 18
  'Larry' is 19
  'Curly' is 20
  'Jane' is 20
  'Emma' is 21
  'Elizabeth' is 18
  'Elinor' is 23
  'Mary' is 25
  'Darcy' is 24
  'Grey' is 18
  'Lydia' is 24
  'Harriet' is 18

```

## Objects

Think of the friend example from earlier. What if you also wanted to store more than just names? Like an address book for all your friends. Would you want to use an array for this?

You can think of Objects like keys on a keyring. Each one is for a specific door and if you have nice labels on your keys you can open doors very fast. 

```
//an object with a single key 'name' and single value 
{name: "tom"}

```
Things on the left hand side of the ```:``` are called **keys** (are also known as properties) and the things on the right hand side are values.

Why use objects to store `key` and `value` pairs? They are like arrays except that data is not stored in any sorted order and keys do not have to numbered indexes.

```
{ date: "10/20/2012", diary: "slept a bit today", name: "Charles" }
```
But the computer could give it back to you like this:

```
{ date: "10/20/2012", diary: "slept a bit today", name: "Charles" }
```

So:
#### creating objects


```
var friend = {name: "john"}

```

#### accessing objects


```
friend[name]
```

### Convenient Methods

* Strings
  * `split`, `join`
* Arrays
  * `.pop`, `.push`, `.concat`, `.slice`, `.reverse`

### Exercise


1.) How would you represent the following using and object literal. Then update `john's` address to `1234 Park ln`.

````

John, Doe, 36, 1234 Park st.

````
**(Hint: think in terms of firstname, lastname, age, address)**


2.) Using a combination of Objects and Array, how would you represent the following:


```
  Moe, Doe, 31, 1234 Park st.
  Larry, Doe, 36, 1234 Spark st.
  Curly, Doe, 36, 1239 Park st.
  Jane, Doe, 32, 1239 Spark st.
  Emma, Doe, 34, 1235 Spark st.
  Elizabeth, Doe, 36, 1234 Park st.
  Elinor, Doe, 35, 1230 Park st.
  Mary, Doe, 31, 1231 Park st.
  Darcy, Doe, 32, 1224 Park st.
  Grey, Doe, 34, 1214 Park st.
  Lydia, Doe, 30, 1294 Park st.
  Harriet, Doe, 32, 1324 Park st.

```

## Loose Typing
JS figures out the type based on value, and the type can change:

```
var x;
x = 2;
x = 'hi';
``` 

##Yet Another Exercise
###The Fortune Teller

  Why pay a fortune teller when you can just program your fortune yourself?

  - Store the following into variables: number of children, partner's name, geographic location, job title.
  - Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."


##Useful JS Tools
* [Mozilla Javascript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [Javascript Style Guide](http://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml)
* [JSHint](http://www.jshint.com/)

##Next Lesson
* Functions & Control Flow
