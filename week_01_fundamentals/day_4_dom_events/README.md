
#Intro to DOM and Events

Grab HTML snippet in today's notes direcory and save it to your local workspace:

**Excercise 1: (5 min)**

Fix the page.

###DOM Manipulation with JavaScript

**Review:** What is the DOM?

Go to Developer Console. Look at DOM in *Elements*, then look at the DOM in *Console*. The object 'document' represents the DOM in JavaScript. We can change the DOM, i.e. the page, by changing the **document object**.

Google "DOM document api", pick the MDN documentation. Inspect a few properties, for example:

	document.URL
	document.head
	document.links (what does it return?)

Question: What makes them properties? 
	
How to change the DOM? Select elements and manipulate them.

**Select by tag id:**

	var greeting_div = document.getElementById("greeting");
	
Now change the text:

	greeting_div.innerHtml = "Wow, I'm different now"

Or the style:

	greeting_div.style.backgroundColor = "yellow"
	
Properties can be a getter and setter. What does this mean?

**Select by class**

	var content_div = document.getElementsByClassName("content");
	
	content_div.innerText = "I can change,too";

Why is this not working? Answer:

	content_div[0].innerHTML = "ha!"

**Exercise 2: (5 min) ** 

Write JavaScript that changes the greeting text to "Hi Planet Earth"

**Select by tag name**

	all_li_elems = document.getElementsByTagName("li")

**Preferred: select using CSS selectors**
	
Get elements by tag name is very unspecific. You can go after specific CSS selectors, just like you would in stylesheets:

	document.querySelectorAll("li")
	document.querySelectorAll("li.selected")
	document.querySelectorAll("div#essentials > ul > li")
		
**Exercise 3: (15 min)**
	
Let's say we want to change the background of all list items? How? Hint:

	document.querySelectorAll("li")
	
Add JavaScript that changes all li elements to yellow. Put your code in a function and call it.

** Accessing and changing element attributes**

	document.querySelector("img").getAttribute("src")
	document.querySelector("img").setAttribute("src","./images/beer.jpeg")

##Events

Now that we know how to select DOM elements, we can attach events to them:

- Common Events:
	- change
	- click
	- mouseover
	- mouseout
	- keydown
	- keyup

#####"Shortcut" Method

```
document.getElementById("myDiv").onchange = function() { };

document.getElementById("myDiv").onclick = function() { };

document.getElementById("myDiv").onmouseover = function() { };
```

Let's attach a click handler to image. Let's try in console first. Try mouseover.

#####addEventListener

```
document.getElementById("myDiv").addEventListener("click", function() {
	//Your code here
}
```

- Events can only be attached to specific elements. Therefore, when you return a collection such as the result of `document.querySelectorAll` you CANNOT simply do this:

```
document.querySelectorAll(".li").addEventListener("click", function() {
	console.log("Click worked");
}
```

**Exercise 6: 20 min** 

a) Loop through each li element and attach a click handler that sets the class attribute to "selected". Remember that you already have a function that loops over li items. Why not repurpose it?

b) How do we know wich item was clicked? **this** is set to the DOM element that received the event. Can you print it out to console?

c) Change the image to reflect what was clicked.

d) Bonus: Add a "Reset" button that removes "selected" class from all list items






		
