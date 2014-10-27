
##jQuery


###Goals

In this session you will learn to :

- appreciate jQuery
- include jQuery in your project
- apply jQuery selectors to manipulate DOM elements in code
- add and remove DOM elements with jQuery
- bind events with jQuery
- explore jQuery widgets

###Intro

As developers, we are always looking for ways to make our job easier, more efficent and more fun.

*Q: What's a library?*
 
*A: A collection of reusable methods for a particular purpose.*

**What are some libraries that we know and that you most likely use in your projects?**

Today we will introduce you to jQuery, a small, and feature-rich JavaScript library. It makes things like DOM manipulation, event handling, animation much simpler with an easy-to-use API that works across a multitude of browsers.


###Installation

**jQuery is a client-side library**

In order to use jQuery, include a script tag on your page. You have two options.

1) Reference it from the Internet, for example directly from jquery's web site

	<script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>

.. or a content delivery network, such as [cloudflare](https://cdnjs.com/)

	<script type="text/javascript" src="http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>

2) Download library and host it on your server.

Usually libraries are *minified*, that is function and variable names are shortened and stripped of white spaces. The smaller the library the faster it loads.

**Explore cdnjs, look at minified and non minified jQuery**


###DOM Manipulation

jQuery appeals so much to web designers also because it enables us to select DOM elements in code just like we do with CSS. Let's see it in action.

Think back a couple of weeks when we introduced the DOM API and the todo lab:

```
document.getElementById('presentation');
document.getElementsByClassName('slide');
document.getElementsByTagName('body');
document.querySelectorAll('a');
document.querySelector('img');
```  

#### Fun with jQuery

jQuery is an alternative to the standard DOM functions. It provides a set of straight forward functions. Let's explore jQuery, go to reddit.


#####Example: Make all images disappear.

Using the standard DOM API:

```
var elems = document.getElementsByTagName("img");
for (var i = 0; i< elems.length; i++) {
  elems[i].style.display = "none";
}
```

In jQuery, this is a one-liner:

```
$('img').hide()
```

What just happened here? **Select and Manipulate**

- Select element: `$('img')` **returns a jQuery selection** (array)
- Manipulate: `$('img').hide()` 

`$` - The global jQuery function. Can also be "jQuery"

`('img')` - Find DOM elements according to what's in the quotes. Returns a `jQuery collection`

`hide()` - Built-in jQuery method that operates on the collection

#####Finding elements with css selectors and `$`:
              
`$('p')`  **selects** `<p>Welcome!</p>`

`$('#main')`  **selects**  `<div id="main">Welcome!</div>`

`$('.intro')` **selects** `<p class="intro">Welcome!</p>`

`$('#main .intro')` **selects** `<div id="main"><p class="intro">Welcome!</p></div>`


##### Example: Adding and removing DOM elements

Standard DOM API:

```
var p = document.createElement('p');
p.appendChild(document.createTextNode('Hello WDI!!!!!'));
p.style.cssFloat = 'left';
p.style.backgroundColor = 'red';
p.style.fontSize = '100px';
document.getElementById('header-bottom-left').appendChild(p);​
```

Let's do this in jQuery: **Create, Manipulate & Inject**

```
var newP = $('<p>Hello WDI!!!!!</p>');
newP.css({'float': 'left', 'background-color': 'red', 'font-size': '100px'});
$('#header-bottom-left').append(newP);
```

Remove it:

```
newP.remove()
```


##### Example: Animation
  
```
// get a list of all posts, they are in siteTable in div elements
var allPosts = $('body #siteTable > div');

// the first is the top post, duh
var topPost = allPosts.first();

// Let's make sure, what's the rank?
topPost.find('.rank').text()

// What's the title
topPost.find('.title').text()

// Let's change it
topPost.find('.title').text('WDI students are pretty awesome')

// And it's gone
topPost.animate({height: 'toggle' }, 5000);

//Fade ...
topPost.animate({{ opacity: 0.25 }, 5000);

```


### Event handler

Event handling is one of the nicest aspects of jQuery because it makes the process easy and consistent across browsers. jQuery provides the high level .bind() and .unbind() functions to generically attach and detach event handlers on matched sets. In addition most of the common events like click, key and mouse events have dedicated handler functions like .click(), .mousedown(), change() and .keydown(). jQuery event handlers simply take a function as a parameter and jQuery tracks these handlers so that they can also be unbound later.

#### Example: hover and click

```
var allPosts = $('body #siteTable > div');

allPosts
.not(":first")
.hover( function() {
    $(this).css({'background-color': 'red'});
})
.click( function(e) {
    alert("That's Rank: " + $(this).find('.rank').text());
})
```

### [jQuery UI](http://jqueryui.com/)

*jQuery UI is a curated set of user interface interactions, effects, widgets, and themes built on top of the jQuery JavaScript Library. Whether you're building highly interactive web applications or you just need to add a date picker to a form control, jQuery UI is the perfect choice."*

#### Example: Let's build an [accordion](http://jqueryui.com/accordion/)

- The markup of the accordion container needs pairs of headers and content panels
- Accordions support arbitrary markup, but each content panel must always be the next sibling after its associated header. 

Include jQuery and jquery-ui in you page

```
 <script src="http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
  <script src="http://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.10.4/jquery-ui.min.js"></script>
```

Define scope of accordion

	<div id="accordion">

Initialize it

```
  <script>
  $(function() {
    $( "#accordion" ).accordion();
  });
  </script>
```
  




  