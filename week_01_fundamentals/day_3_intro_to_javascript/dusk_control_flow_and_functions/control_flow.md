JavaScript Control Flow
===================================

Control Flow
------------

Logical branching & repeating code.

1. [if](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
2. [while](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)
3. [for](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)
4. [for..in](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)

### If ###

The **if statement** executes some code if a specified condition is true.

```
if (true) {
    console.log("this will be printed");
}
```

```
if (false) {
    console.log("this will not be printed");
}
```

```
var x = 4;
//var x = 5;
if (x === 5) {
    console.log("x equals 5");
}
```

```
var isTasty;
var food = "vegetables";
//var food = "pizza";
if (food === "pizza") {
    isTasty = true;
} else {
    isTasty = false;
}
console.log("Is the food tasty?", isTasty);
```

```
var course = "wdi";
if (course === "uxdi") {
    console.log("Hello, User Experience Designer!");
} else if (course === "fewd") {
    console.log("Hello, Front-End Developer");
} else if (course === "wdi") {
    console.log("Hello, Immersed Student")
} else {
    console.log("Who are you?")
}
```

### While ###

A **while loop** repeatedly executes some code as long as a specified
condition is true.

```
var i = 0;
while (i < 5) {
   console.log("i is " + i);
   i++;
}
```

### For ###

A **for loop** is a fancy **while loop**.

```
for (var i = 0; i < 5; i++) {
    console.log("i is " + i);
}
```

Very commonly, you will use it to loop through an array.

```
var foods = ["pizza", "tacos", "ice cream"];
for (var i = 0; i < foods.length; i++) {
    console.log("i like " + foods[i]);
}
```

### For..in ###

A **for..in** loop is similar to a **for loop**, but good for looping
through all the key-value pairs in an Object.

```
var car = {
   wheels: 4,
   doors: 2,
   seats: 5
};
for (var thing in car) {
    console.log("my car has " + car[thing] + " " + thing);
}
```

### Truthy vs. Falsey

What happens if we put something other than a Boolean as the conditional
in an **if statement**?

[http://james.padolsey.com/javascript/truthy-falsey/](http://james.padolsey.com/javascript/truthy-falsey/)

```
var person = null;
if (person) {
    console.log("this will not be printed");
} else {
    console.log("this will be printed");
}
```

```
var num = 0;
if (num) {
    console.log("this will not be printed");
} else {
    console.log("this will be printed");
}
```

```
var num = 5;
if (num) {
    console.log("this will be printed");
}
```

### Common Mistakes

1. Using the assignment operator(=) instead of the equality operator(===)
2. Infinite loops!
