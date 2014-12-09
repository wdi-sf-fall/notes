#Advanced CSS

##Objectives
* **Tonight:** make [wilbur walk](http://imgur.com/mwOvBSA)!
* **First:** create simple **CSS Tranitions**
* **Next:** create more advanced **CSS Animations**
* **Also:** note the value of a **Sprites**

##Intro
A few things that are very important to understand:

* Animations & transitions are [supported](http://caniuse.com/#feat=css-animation) by most modern browsers.
* [JQuery Animate](http://api.jquery.com/animate/) is a popular library that uses JS to write CSS Animations for you.
  * Unecessary for simple animations, good for more complicated ones
  * Helps solve vendor specific issues
* [Why do we have vendor prefixes?](http://stackoverflow.com/questions/8131846/why-do-browsers-create-vendor-prefixes-for-css-properties#answer-813187)
* What is [W3C](http://www.w3.org/wiki/The_history_of_the_Web) and why do we care?
  * Hey, so what is the [Internet](http://en.wikipedia.org/wiki/Internet_Protocol) anyway?
* Move on once we start to go into tangents on how the internet works.

##Transitions
* Essentially a simplified CSS animation of specific properties.
* A transition needs aproperty to target, duration of time, and timing function
* What are the [different](http://css3.bradshawenterprises.com/transitions/#differentTiming) timing functions available to us?
* An class [transition exercise](http://jsbin.com/vasow/7/edit?output)
* Now let's try to create a hover over transition that changes the color of a div...

##Animations
* Similar to a transition except more customizable.
  * How do we setup a custom animation?
  * What are keyframes?
  * How can we  from, to, 0%, 50%, 100%?
* [Docs](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Using_CSS_animations)
* An in class [animation exercise](http://jsbin.com/luxapo/2/edit?css,output)
* Now let's think about how to make a shadow move on a piece of text...

##Sprites
* Essentially a CSS hack using background position
* Faster page load time (fewer requests)
* Uses frames rather than actual CSS Animations 
* Helpful [resource](http://www.spritecow.com) to see what you background-positions should be set to 
* http://css-tricks.com/css-sprites/

##Additional Topics
* [Flex Box](http://css-tricks.com/snippets/css/a-guide-to-flexbox/)
* [Write better CSS](http://www.smashingmagazine.com/2007/05/10/70-expert-ideas-for-better-css-coding/)
* [Using SVGs](http://css-tricks.com/using-svg/)