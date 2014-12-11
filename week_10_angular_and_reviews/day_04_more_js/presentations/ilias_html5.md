#HTML5

##History
* Developed by [W3C](http://en.wikipedia.org/wiki/World_Wide_Web_Consortium) and [WHATWG](http://en.wikipedia.org/wiki/WHATWG)
* Stable [release] in October 2014 [ref](http://techcrunch.com/2014/10/28/w3c-declares-html5-standard-done/)


##References
* [W3C Docs](http://www.w3.org/TR/)
* [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
* [HTML5 Evolution](http://evolutionofweb.appspot.com/)

##Standard APIs
###Location
Get the user's location

```
navigator.geolocation.getCurrentPosition(function(place){
  console.log("lat:", place.coords.latitude, " log:", place.coords.longitude);
})
```
###Audio API
Buffer a sound

```
var chirps = new Audio("https://www.freesound.org/data/previews/34/34207_229898-lq.mp3");
chirps.play();
```
We can even make it loop!

###Video API
Go to YouTube in Chrome, start playing a [video](https://www.youtube.com/watch?v=9bZkp7q19f0) and try this code into your console.

```
navigator.webkitGetUserMedia (
  //constraints
  {video: true, audio: true},
  // successCallback
  function(localMediaStream) {
      video = $(".video-stream.html5-main-video");
      video.src = window.URL.createObjectURL(localMediaStream);
      video.play();
    },
    // errorCallback
    function(err) {
      console.log("The following error occured: " + err);
    }
);
```
###Fullscreen API
Request fullscreen via an event listener (necessary)

```
document.addEventListener("click", function(e){
  document.documentElement.webkitRequestFullScreen(); //this is chrome specific
})
```
##Stay Up to Date
* Reference [HTML5 Rocks](http://updates.html5rocks.com/) for all updates
* Checkout Chrome's latest experimential features by typing `chrome://flags` into the Chrome's url field and/or use [Canary](https://www.google.com/chrome/browser/canary.html)
