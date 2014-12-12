##Coffee Script##
<hr>
*CoffeeScript is a little language that compiles into JavaScript.* Underneath that awkward Java-esque patina, JavaScript has always had a gorgeous heart. CoffeeScript is an attempt to expose the good parts of JavaScript in a simple way.
<br>
CoffeeScript is a compiler. It's meant to be more readable, and then it outputs 
<br>

###Java Script###

	square = function(x) { <br>
  		return x * x; <br>
	};<br>


	cube = function(x) {<br>
  		return square(x) * x;<br>
	};<br>
	

###Coffee Script###
	square = (x) -> x * x<br>
	cube = (x) -> square(x) * x
	<hr>


<ul>
<li>Coffee Script doesn't require braces and parentheses. </li>
<li>Mandatory indentation </li>
<li>"->" instead of function()</li>
<li>White space sensetivity (be careful)</li>
<li>Poor documentation.</li>
</ul>
<br>
The golden rule of CoffeeScript is: "_It's just JavaScript_". The code compiles one-to-one into the equivalent JS, and there is no interpretation at runtime.
<br>
<br>
<br>
<br>
##Gulp##
<hr>
Task runner<br>

<br>
What's a task runner?
<br>
<br>
	Task runners are small applications that are used to automate many of the time consuming, boring (but very important) tasks that you have to do while developing a project. These include tasks such as running tests, concatenating files, minification, and CSS preprocessing. By simply creating a task file, you can instruct the task runner to automatically take care of just about any development task you can think of as you make changes to your files. It’s a very simple idea that will save you a lot of time and allow you to stay focused on development.
<br>
####We've created a node app and used gulp to compiled coffeescript to javascript.


Here are the principal steps we took: 

Install gulp:

`$ sudo npm install -g gulp`

Start a new node app, as normal. 

Instll gulp locally in the app as a dev dependency in our package.JSON.

`$ npm install --save-dev gulp`

Install the required plugins, for this one we're using:

`$ npm install gulp-coffee --save-dev`

Create our gulpfile - we're calling it gulpfile.js in the root directory. 

`$ touch gulpfile.js`

Create a public folder on your root directory

`$ mkdir public`


Add this code to the gulpfile:

    //require gulp
    var gulp = require('gulp'); 
	

    var coffee = require('gulp-coffee');

	//gulp task named coffee 
    gulp.task('coffee', function() {
      //specifying source file
      gulp.src('./src/*.coffee')
      //convert to javascript
        .pipe(coffee({bare: true}))
        //setting destination to public
        .pipe(gulp.dest('./public/'));
    });

	//gulp watch - just for fun
    gulp.task('watch', function() {
      gulp.watch('./src/*.coffee', ['coffee']);
    });
	
    // Default Task setter to run all of the tasks together
    gulp.task('default', ['coffee', 'watch']);


###Gulp Plugins

This is using one of many gulp plugins, here's a great resource to find more plugins for gulp: https://www.npmjs.com/search?q=gulpplugin