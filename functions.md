JavaScript Functions
====================


> *Every programming language has one or two things that you really have to  [`grok`](http://en.wikipedia.org/wiki/Grok) in order to understand the rest of the language and its idioms.*
>
> **Alex Notov**

In Javascript we must *"grok"* functions.

What is a function?
-------------------

A piece of code that we store so we can run it at some point later in
our program. If we have code we'll want to run more than once,
possibly from several different places, we can store it in a function
and call it multiple times.

Syntax
------

This is the basic format of a function.  Parameters are like variables
that we can pass into (i.e., give) the function when it runs. The body
is the code that the function will run (i.e., execute)  when we call it.

```
function (parameter1, parameter2, ...) {
    <body>
}
```

By default, a function does not run its body of code, it saves it for
later. To actually get the body to execute, we need to call the
function. In order to call it, we need to give it a name.

```
var sayHello = function () {
    console.log("Hello, World!");
};
```

This creates a function and stores it in a variable named `sayHello`.
However, the code within the function has not been run yet! To do
that, we need to call the function.

```
sayHello();
```

Putting the `()` after the name of the function will cause it to run
the body of code it contains.  In this case, `Hello, World!` will be
printed to the console.

Parameters (Arguments)
----------

Return Values
-------------

Scope
-----

IIFE
----

Recursion
---------



