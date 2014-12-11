#Local Storage Rox

##WHY
Cookie limitations
Included in every HTTP request (slows down apps, less secure)
Limited amount of date
We’re spoiled because this type of thing used to be a lot harder #youths

##WHAT
Local storage offers more storage space, on the client side, that persists beyond a page refresh and isn’t transmitted to the server.
Unlike session storage, local storage stays after a browser is quit (aka is persistent).

##WHERE
Where is all of this data going!?
You can view/delete local storage entries using some browsers. Here is a youtube demo with chrome. Essentially go Chrome > preferences > privacy > content settings > cookies > show cookies and other data. You see a list of cookies stored on your computer.  

##HOW
Mini-example: counting the number of times a user has visited a page

`<p>You have viewed this page   <span id="count">an untold number of</span>   time(s).</p>`

`<script>`

```
if(!localStorage.pageLoadCount) {
	localStorage.pageLoadCount = 0;
}
localStorage.pageLoadCount = parseInt(localStorage.pageLoadCount) + 1;                document.getElementById('count').textContent = localStorage.pageLoadCount;
```
`</script>`

localStorage is a JavaScript object and an extension of Storage. (like sessionStorage)
can think of it as an object of key-value pairs.

To set/retrieve data, can use `localStorage.getItem()` or `.setItem()`. 
Even better, you can use square bracket syntax. For example,

```
var foo = localStorage.getItem("bar"); //
localStorage.setItem("bar", foo);
is the same as
var foo = localStorage["bar”] //
localStorage["bar"] = foo;
```

Important: note that data is stored as strings. You can get around this using some JSON.
**have array ‘names’ you want to store**
`localStorage[“names”] = JSON.stringify(names);`
**want to use it again**
`var storedNames = JSON.parse(localStorage[“names"];`

To track changes to the storage area, can use the storage event.
For example,

```
window.addEventListener(“storage”, handle_storage, false);
window.attachEvent(“on storage”, handle_storage);
could then use the handle_storage callback function with a StorageEvent object.
```

Can pass local storage to Web SQL databases.
Alternative: Indexed Database API = api for key-value data management. uses transactional databases to store key:value pairs. allows local storage data to talk to a database.

##USES
A bit obvious, but...
     if your page renders a lot of data (like a google map), can store the data locally on someone’s comp upon first page load. Then reloading the page will happen instantly.
     Store form data if a user has made some entries but hasn’t submitted yet.
     Maintain the state of a game even if browser is closed.
     Know when it’s a user’s first visit to a site and render the page accordingly. 
