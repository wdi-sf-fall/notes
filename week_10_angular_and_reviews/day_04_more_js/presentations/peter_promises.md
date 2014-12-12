Promises (not the song)
============

##What is a promise?
According to MDN: <em>The Promise object is used for deferred and asynchronous computations.</em>
###But what does that mean? 
In plain english, we need to run a function that takes an argument 'result' that is the result of another function we are running. Problem - javascript is asynchronous so it has no problem running while our 'result' is still undefined. That is an issue. A promise 'promises' not to run our function until our result comes back. 

Okay, that wasn't the most plain english. Maybe a little more ramble, but still... kinda?
###Still not making sense, how about an example:
Say we want to - 

* make an AJAX request to get some data.
* immediately do something with that data, and then
* move onto other things

In our program we initiate our Ajax request. The request is made but unlike with synchronous events, execution of our program isn’t stopped while the server is responding, instead the program continues running. By the time we get the response data from our Ajax request, the program has already finished execution. THUS, we need a promise to say, "hey! pesky javascripts, wait until I get the result for you and then go about doing things to it."
<br><br>

###Wait, wait, wait... Why don't we just use callbacks?
Because [CALLBACK HELL](http://callbackhell.com/)!!! And also the [PYRAMID OF DOOM](http://survivejs.com/common_problems/pyramid.html)!!! 

Here is an example of the PYRAMID OF DOOM!!!

```
step1(function (value1) {
    step2(value1, function(value2) {
        step3(value2, function(value3) {
            step4(value3, function(value4) {
                // Do something with value4
            });
        });
    });
});
```


With a promise library, you can flatten the pyramid. This library is Q. More on promise libraries later...

```
Q.fcall(promisedStep1)
.then(promisedStep2)
.then(promisedStep3)
.then(promisedStep4)
.then(function (value4) {
    // Do something with value4
})
.catch(function (error) {
    // Handle any error from all above steps
})
.done();
```
###So that is pretty cool, but how do these promises work?

Here is a nice diagram we found on the internet - 

![image](http://www.mediumequalsmessage.com/blog-images/promises.png)

###Is deferred something else?
A promise is a placeholder for a result which is initially unknown while a **deferred** represents the computation that results in the value. Every deferred has a promise which functions as a proxy for the future result.

###States?

#####A promise has 3 possible states: unfulfilled, fulfilled and failed.

* **Unfulfilled (waiting)**: since a promise is a proxy for an unknown value it starts in an unfulfilled state
* **Fulfilled (success)**: the promise is filled with the value it was waiting for
* **Failed (error)**: if the promise was returned an exception, it is in the failed state.

A promise may only move from unfulfilled to either fulfilled or failed. Upon resolution or rejection, any observers are notified and passed the promise / value. Once the promise has been resolved or rejected neither it’s state or the resulting value can be modified.

###Handlers?
A handler 'handles' the resulting data once the promise has been fulfilled / failed. Essentially, the .then -or- .when's of the process. 

```
// Promise to be filled with future value
var futureValue = new Promise();

// .then() will return a new promise
var anotherFutureValue = futureValue.then();

// Promise state handlers ( must be a function ).
// The returned value of the fulfilled / failed handler will be the value of the promise.
futureValue.then({

    // Called if/when the promise is fulfilled
    fulfilledHandler: function() {},

    // Called if/when the promise fails
    errorHandler: function() {},

    // Called for progress events (not all implementations of promises have this)
    progressHandler: function() {}
});
```
###Now is all of this baked into Javascript? 
The answer at the moment is no. Therefore, we need to use promise libraries to help us. 

####Promise Libraries
There are a good few libraries. As always, not all libraries are created equal. Here is a good resource to check out what is available. Through our research, we have found Q to be our favorite. Also note, when doing TDD in sequelize with @zealoushacker we used Bluebird. 
<br>

* **When.js**: Fast, lightweight implementation that has a number of useful utilities and as of v2.0 has full support for asynchronous resolution.
* **Q.js**: Runs in the browser or Node.js, offers a robust API and is fully Promise/A compliant.
* **RSVP**: Barebones implementation that is fully Promise/A compliant.
* **jQuery**: Not Promise/A compliant but is widely used. If you are already using jQuery in your project it’s easy to get started with and worth a look.
<br>
[Promise Libraries](http://complexitymaze.com/2014/03/03/javascript-promises-a-comparison-of-libraries/)

####Interesting food for thought on the future: GENERATORS
Possibly the next big thing for control flow in javascript will be "Generators", included in upcoming JS 6 "Harmony".  A few links to launch your generator exploration. Also note, the promise library comparison above says whether or not each library will support future generators. 

[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*)

[http://jlongster.com/A-Study-on-Solving-Callbacks-with-JavaScript-Generators](http://jlongster.com/A-Study-on-Solving-Callbacks-with-JavaScript-Generators)

[http://strongloop.com/strongblog/how-to-generators-node-js-yield-use-cases/](http://strongloop.com/strongblog/how-to-generators-node-js-yield-use-cases/)

<br><br>
Sources:<br>
[Promise & Deferred objects in JavaScript Pt.1: Theory and Semantics.](http://blog.mediumequalsmessage.com/promise-deferred-objects-in-javascript-pt1-theory-and-semantics) 
<br>
[Promise Libraries](http://complexitymaze.com/2014/03/03/javascript-promises-a-comparison-of-libraries/)
<br>
[Q Promise Library](https://github.com/kriskowal/q)
<br>
[MDN Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
<br>
[Pyramid of Doom](http://survivejs.com/common_problems/pyramid.html)
<br>
[Callback Hell](http://callbackhell.com/)
<br>