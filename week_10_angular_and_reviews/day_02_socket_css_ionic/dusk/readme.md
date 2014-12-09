#Pig Animation

![Pig](http://msjacoby.com/wilbur.gif)

##Objective
Using your knowledege of **animations** in CSS, we will be creating a animation of a pig walking. You can see a gif of what the [final product](http://imgur.com/mwOvBSA) should look like.

###1) Open the HTML file `pigAnimation`
	
* The HTML is already linked to all the assets you need to get working
* I've contained all the assets in a div, which we can refer to as *the scene*
* There has also been a background image provided in the scene
	

###2) Start styling the CSS in `pigAnimation.css`

* Use `position: absolute` on all your elements in the scene to arrange them in the way best replicates the final product above.

* Remember can use `top` `bottom` `left` and `right` on an element with absolute positioning to move it to the position you see best fit.

###3) Once you have your pig positioned correctly you can start to animate.

####The Fences
Your goal here is to get each fence to move to the left just far enough so that a wooden post will be perfectly overlaid with it's prior neighbor. In other words we want to create an effect so that when the fence jumps back to it's origional position, it does so at a moment that is unnoticable to someone that cannot see beyond the borders of the scene.

* Measure the distance in pixles between the same side of two fence posts. On a Mac try the quick command `CMD + SHIFT + 4`. This is the tool to take screenshots, but it can also be used to measure length of objects on the screen in pixles. (After you selected the area you want you can press `ESC` to avoid taking a screenshot).
* You'll want this animation to be `infinite` and `linear`
* Once working you can set the scene's `overflow` property to `hidden`

####The Legs
The aim in this step is to get the legs to all "walking". This is one of the more challenging parts. If you're stuck ask for help or move on and come back.

* First you'll want to get the legs moving. Thinking about how a pig walks. Which legs move in tandem?
* We also probably want this animation to be `alternating` `infinite` and `linear`
* Checkout the CSS property `transform` where you can rotate the images `from` and `to` a different value.


####The Body
Next let's get the body to "bounce" up & down.

* There are several ways to accomplish this, one would be to use the `transform` property to shift the positioning of the element.
* Again we probably want the animation to be alternating, infinite, and linear.

####Last Step, the Ear & Tail
We are looking to create two animations here. Unfortunely if we write two animation properties on the image the last will just overwrite the first. As a result we'll have to create a new animation, maybe called "bounceAndWag" that simulates the bouncing affect of the body and a wagging affect (similar to the legs).

###Bonus

* Write this in SCSS
* Go help the students in week 4!





