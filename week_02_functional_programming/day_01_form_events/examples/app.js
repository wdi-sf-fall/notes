var form = document.getElementById("movieForm");
var list = document.getElementById("movieList");

// Catch the event when the user clicks "Save".
form.addEventListener("submit", function (event) {

    // Prevent the data from being sent to the server.
    // Also prevents the page from being refreshed.
    event.preventDefault();

    // this.title and this.good are available because of the
    // name="title" and name="good" attributes in index.html
    var title = this.title.value;

    // Make a new list item with document.createElement()
    var li = document.createElement("li");

    // Set the contents of the li to be the movie title. This is a
    // dangerous step because if the user enters HTML then the browser
    // will render it. What if the user enters
    // <style>*{display:none;}</style> or
    // <style>body{color:red;}</style>?
    li.innerHTML = title;

    // Merely creating the element does not add it to the page.
    // Make it visible on the page by using appendChild().
    list.appendChild(li);

    // Clear out the previous title from the text field
    this.title.value = "";
});
