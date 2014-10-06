Form Events and DOM Manipulation
================================

Forms
-----

We've already seen HTML Forms. A form is a way to capture user input. In case you've forgotten:

- [Day 2 Notes](https://github.com/wdi-sf-fall/notes/tree/master/week_01_fundamentals/day_2_productivity_htmlcssbootstrap/dusk_html_css%20and%20bootstrap#forms-labels-input-types-and-html5-attributes)
- [Day 2 Form Examples](https://github.com/wdi-sf-fall/notes/blob/master/week_01_fundamentals/day_2_productivity_htmlcssbootstrap/dusk_html_css%20and%20bootstrap/html%20examples/3%20-%20forms.html)
- [MDN Form Guide](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Forms)

By default, forms will submit their data to a server, but we can also use
JavaScript to intercept the data before it goes to the server.

Events
------

We've also already seen HTML events.  Our program can respond to
events (e.g., click, change, mouseover) by listening for them.

- [Day 4 Notes](https://github.com/wdi-sf-fall/notes/tree/master/week_01_fundamentals/day_4_dom_events#events)
- [Day 4 Example](https://github.com/wdi-sf-fall/notes/blob/master/week_01_fundamentals/day_4_dom_events/day_lab/app.js)

Form Events
-----------

Combining the previous two topics, it should be no surprise that
forms, like many HTML elements, emit their own events.  When a form is
about to send its data to a server, it emits a `submit` event. We can
use JavaScript to listen to this event and handle the data any way we
want. We also have the ability to prevent the data from being sent to
the server.

Exercise: Create a form
-----------------------

- Create a file called index.html
- Inside of the \<body\>, create a \<form\> element
- Include inside of the \<form\>
    - text field
    - submit button

Exercise: Listen for `submit` event
----------------------------------

- Create a JavaScript file and load it into your index.html
- use `document.getElementById` to grab a reference to your `form`.
- use `addEventListener` to listen for the `submit` event.
- use `event.preventDefault()` to prevent data from being sent to server.

```
var myForm = document.getElementById("myForm");
myForm.addEventListener("submit", function (event) {

    // prevent the data from being sent to the server
    event.preventDefault();

    // add your code to deal with the user's data here.
    // if your form has an text field  with a `name` (not `id`) of
    // taco, then you can access what the user typed with:
    //
    // var userInput = this.taco.value;
});
```

DOM Manipulation
----------------

We've also had an introduction to DOM Manipulation. We can use
JavaScript to interact (add/remove/change) with the HTML on the page.

- [Day 4 Notes](https://github.com/wdi-sf-fall/notes/tree/master/week_01_fundamentals/day_4_dom_events#dom-manipulation-with-javascript)

```
// from last week
var greeting_div = document.getElementById("greeting");
greeting_div.innerHTML = "Wow, something changed."
greeting_div.style.backgroundColor = "yellow"
greeting_div.style.color = "red"
```

We also have the ability to create new elements on the page as well as
remove existing ones with:

- [document.createElement()](https://developer.mozilla.org/en-US/docs/Web/API/document.createElement)
- [appendChild()](https://developer.mozilla.org/en-US/docs/Web/API/Node.appendChild)
- [removeChild()](https://developer.mozilla.org/en-US/docs/Web/API/Node.removeChild)

```
var paragraph = document.createElement("p");
paragraph.setAttribute("id", "myCoolParagaph");
paragraph.innerHTML = "You created an HTML element via JavaScript".
paragraph.style.color = "green";
document.body.appendChild(paragraph);
```

Ok, that was fun, but now you'd like to remove it.

```
var paragraph = document.getElementById("myCoolParagraph");
document.body.removeChild(paragraph);
```

Exercise - Add movies to page
-----------------------------

When you click the save button, the movie title you have entered
should be appended to a list of movies.

Things you might need:

- `document.createElement()` - to make a new HTML element (li?)
- `.innerHTML` or `.innerText` - to add the title to the element (li?)
- `appendChild()` - to add the element you created to the page

### Bonus ###

What happens if you enter a movie title that is
`<style>*{display:none;}</style>`? Does every element on your page
disappear? The `*` CSS selector matches _every_ element and
`display:none;` hides them all.

If you take input from a user and then insert it into your HTML page,
you run the risk that they type something malicious. If the user
enters text then you're fine.  But what if they enter HTML?  When you
set the contents of an element with `.innerHTML`, the browser renders
the content as HTML. Try rendering with `.innerText` instead.  Also,
look into `.createTextNode()`. See the examples provided.



