
##AngularJS and Rails - Part 2 - in five steps

####Goals:


* Extend Raffler app from last week
* Refactor app as it grows
* Add more pages, controllers, factories
* Understand Angular routing and links
* Integrate external APIs
* Doing Ajax and using *promises* in Angular

Let's start with a quick overview of what we are going to build.

####1) Getting started - same as last time:

Clone [this repo](https://github.com/wdi-sf-fall/angular-and-rails-part-two) and explore application.

	bundle exec bundle
	bundle exec rake db:create
	bundle exec rake db:migrate
	bundle exec rake db:seed
	rails s

[open app in browser](http://localhost:3000)

####1) Refactoring

Take a quick look at the new folder structure under `app/assets/javascripts`

* app.js
* controllers directory
* factories.js

**Exercise**: Rename `app.js` to `zapp.js`, reload - what happens?

The order of javascript files in the rails assest pipeline is significant. 

	var app = angular.module("raffler", ["rails"]);
	
Needs to be the first line of code, because everything hangs off `app` module.

Solution: Define order in wich asset pipeline processes javascripts in `application.js`
 	
	//= require app/zapp
	//= require_tree .

(Now that we made that point, rename `zapp.js` to `app.js`)


Create **name spaces** for your Angular modules, one for controllers, one for factories etc. 
 
```
angular.module('raffler.controllers',[]);
angular.module('raffler.factories',[]);
```

And inject them in the app module:

```
var app = angular.module("raffler", [
	"rails",
	'raffler.controllers',
	'raffler.factories'
]);
```
	
This way, modules dependencies are resolved from the get go and we don't have to worry about the order in which javascript files are processed from here on.

Note that the function `angular.module` is a getter **and** a setter. 

Now we need to change factory and controller code to reference the modules. Creating the `Player` factory changes from (in `factories.js`):


```
app.factory('Player',
	function (railsResourceFactory) {
```

to:
	
```	
angular.module('raffler.factories')
	.factory('Player',
	function (railsResourceFactory) {
```

The same applies for raffler controller.

**Exercise**: Go ahead an make the corresponding change in `raffler.js` - reload page to verify your changes.

Catch up:

	git checkout one


####2) Multiple pages: Angular routing

Angular provides a powerful client-side router called ngRoute. (See [Angular](https://docs.angularjs.org/tutorial/step_07) tutorial)

ngRoute plays a similar role to the router in Rails, with one key difference: the routing happens in the client's browser rather than on the server.

ngRoute provides a powerful way to map URLs to a specific controller and then render a view alongside that controller.

To use ngRoute, the first thing we need to do is load the angular-route javascript file.

	//= require angular-route

Next, we need to require the `ngRoute` library. We do that by adding it as the last argument of the app module function like this:

```
var app = angular.module("raffler", [
	"rails",
	'raffler.controllers',
	'raffler.factories',
	'ngRoute'
	]);
```	

We would like to is a total of three routes/pages in our app:

`/` -> renders raffler

`/movies` -> goes to a page that lists top 25 movies on YouTube

`/movie/:movie_id` -> goes to page that plays requested movie trailer

**Exercise**: Let's create a new folder `templates` in the public directory:

`/public/templates`

Inside, create three html files and add some placholer content:

* index.html
* movies.html
* movie.html

Copy content of `app/views/raffler/index.html` to the new index.html file under templates. Replace content of `app/views/raffler/index.html` with text: *I used to be the home page, now I'm gone ...* - reload.

Let's fix this and create routes in angular.

In `app.js`, create a new `config` module and inject `$routeProvider` and `$locationProvider`:

	app.config(function($routeProvider, $locationProvider) {
	
	}

About Angular's [$location](https://docs.angularjs.org/guide/$location) service: 

When should I use `$location`? Any time your application needs to react to a change in the current URL or if you want to change the current URL in the browser.

**It does not cause a full page reload when the browser URL is changed. **

*The $location service parses the URL in the browser address bar (based on the window.location) and makes the URL available to your application. Changes to the URL in the address bar are reflected into $location service and changes to $location are reflected into the browser address bar.*


Use html5 URL mode - [Here's why](http://html5demos.com/history). Add this inside the config function:

	$locationProvider.html5Mode({
		enabled: true
	});

*In HTML5 mode, the $location service getters and setters interact with the browser URL address through the HTML5 history API. This allows for use of regular URL path and search segments, instead of their hashbang equivalents.*	
	
Now let's finally do the routes using `$routeProvider`:

```
$routeProvider
  	.when('/',
      {
        templateUrl: '/templates/index.html',
        controller: 'RaffleController'
      })
    .when('/trailer/:movie_id',
      {
        templateUrl: '/templates/movie.html',
        controller: 'MovieController'
      })
    .when('/movies',
      {
        controller: 'MoviesController',
        templateUrl: '/templates/movies.html'
      })
    .otherwise({redirectTo: '/'});
```    

Let's try it out - reload home page.

Hmmm. this didn't work, Why not? Let's take a look at the layout file.
    
Replace:

	<%= yield %>
	
With:

	<div ng-view></div>
	
	
That's better, the real page shows up again. What about '/movies'?

	http://localhost:3000/movies

No luck. Our router isn't sticking. Why is that happening?

It's because in our routes we're using HTML5 mode, but when we send a request to `/movies` Rails is trying to handle a request to that page and it can't find the page.

If we want to use the Angular router, we have to tell Rails to send missing URLs to us. This needs to be the very last route

	match '*path' => "raffler#index", :via => [:get, :post]

Try again, now it should work. Let's add a link on 

Catch up:

	git checkout two

####3) Create controllers and factory with dummy data and test

**Exercise:**
 
* Create `MovieController` and `MoviesController` and test with dummy $scope variable in corresponding pages.
* Create a `YouTube` factory that has a function returning the string "Jaws". Use new factory in MoviesController to set your dummy scoped variable to the return value of the function.
* Add a link to the bottom of the home page that goes to the movies page.  

Catch up:

	git checkout three


####4) Calling external APIs - Dynamically Loading Movies

Here's the URL to the API docs:

	https://developers.google.com/youtube/2.0/developers_guide_protocol_movies_and_shows
	
Youtube has special metadata for movies and trailers and they have endpoints which we can use to fetch data from them. I prepared this URL, let's use it as our API endpoint. 

Take a look at results:

	http://gdata.youtube.com/feeds/api/charts/movies/most_popular?v=2&max-results=10&paid-content=true&hl=en&region=us&alt=json

Now that we know how to read data from Youtube in our browser, how do we load it with Angular? 

**$http** service is Angular's way of making Ajax calls:

```
$http({
  method: 'GET',
  url: 'http://foo.com/v1/api',
  params: {
    api_key: 'abc'
  }
});
```

**$http** is using **promises** instead of success() callbacks. Promises are objects that help make working with async code feel more like we’re writing synchronous code. Angular uses promises extensively, so it is important to get familiar with how to use them.

We use primarily only three methods when we use promises:

```
promise
.then(function(data) {
  // Called when no errors have occurred with data
})
.catch(function(err) {
  // Called when an error has occurred
})
.finally(function(data) {
  // Called always, regardless of the output result
})
```

When we have a promise object, we can depend upon the .then() method to get called when we have a non-failure response, the catch() method to get called when there is an error, and the finally() method to get called regardless of the result of the function.

The $http object returns a promise when it has completed the XHR request. To interact with our request, we'll use the .then() function to load the data on our $scope:

In factory, we do something like this:

```
var promise = $http({
  method: 'GET',
  url: '/v1/api',
  params: {
    api_key: 'abc'
  }
});
```

And the controller wakes up upon fulfillment of the promise:

```
promise.then(function(obj) {
  // obj is the raw request object generated by Angular
  // and contains status codes, the raw data, headers,
  // and the config function used to make the request
  $scope.data = obj.data;
});
```

So let's call the YouTube api and console log results:

```
$http({	method: 'GET', 
      				url: 'http://gdata.youtube.com/feeds/api/charts/movies/most_popular?v=2&max-results=25&paid-content=true&hl=en&region=us&alt=json'}).
      then(function(response) {
      	var movies = response.data.feed.entry.map(function(movie) {
          return {
            youtubeId: movie["media$group"]["yt$videoid"]["$t"],
            title: movie["media$group"]["media$title"]["$t"],
          };
        });
        console.log(movies);
      });
```

Making promises. Let's have the factory return the $http promise. 

In Angular, we create a promise by using the $q service.

There are three parts to creating our own promise.

* 1) We create what is called deferred object
* 2) Then we resolve the promise, either with our successful data or a failure error
* 3) We return the promise

The idea is that the promise is tied to the deferred object. We interact with our deferred object and our client uses the promise.

I know this might sound a little complicated but it's pretty easy to write in practice:

* Inject `$q` service in factory
* Wrap `$http` call in a function on the factory object
* Create deferred object:
	* `var d = $q.defer();`
* Resolve the promise:
	* `d.resolve(movies);`
* return the promise at end of funtion:
	* `return d.promise;` 		 	
	
Now call function in MoviesController and assign result to scope function. Display in view.


```
angular.module('raffler.controllers')
	.controller('MoviesController', [
	"$scope",
	"YouTube",
	function($scope, YouTube) {
		
		YouTube.getTop25Movies().then(function(result){
			$scope.movies = result;
		});

	}]);
```
	
**Exercise:** Repeat over movies and display titles as link to movie page.

Catch up:

	git checkout four
	
		
####5) Creating the movie page

Here's a bare bones movie template:



	<div class="row">
    	<div class="col-xs-12">
    	<h2>{{movie.title}}</h2> 
   		<iframe width="853" height="480" ng-src="{{movie.youtubeUrl}}" frameborder="0" 	allowfullscreen></iframe> 
    	</div>
	</div>

We are going to shoew the trailer in a an [iframe](https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&es_th=1&ie=UTF-8#q=what%20is%20an%20iframe)  
  
Now if we click on a movie we can visit the movie template. It doesn't work! That's because we haven't filled out the controller yet.

First thing we need to do is pull out the list of movies from our movie service, like before.


```
YouTube.getTop25Movies().then(function(result){
	$scope.movies = result;
});
```		


But we don't need all the movies on this page. We only need the one specific movie. But how do we know which movie we need to load?

We need to use Angular's $routeParams service. Inject in MovieController.

```
...
.controller('MoviesController', [
	"$scope",
	"$routeParams"
	"YouTube",
	function($scope, $routeParams, YouTube) {
		
...
```

Then you can get to URL params like this (console.log routeParams!):

	$routeParams.movie_id; 

The parameter name needs to match the name in the router config.

So the new MovieControlle looks like this:

```
angular.module('raffler.controllers')
	.controller('MovieController', [ 
	"$scope",
	"$routeParams",
	"$sce",
	"YouTube",
	function($scope, $routeParams, $sce, YouTube) {
    console.log($routeParams);

		YouTube.getTop25Movies().then(function(result){
			var movies = result;
			console.log(result);
			$scope.movie = _.find(movies, function(v){ 
				return v.youtubeId == $routeParams.movie_id; 
			});
    	
    	$scope.movie.youtubeUrl = "http://www.youtube.com/embed/" + $scope.movie.youtubeId + "?rel=0"
  		
  	});

	}]);
```

**STOP:** The code is using underscore's find function. You need to install underscore gem and require underscore in `application.js` - run bundle and restart rails.

Now refresh the page. Hmm it isn't loading? Why is that? Let's view dev tools. See the error.


```
Error: [$interpolate:interr] Can't interpolate: {{movie.youtubeUrl}}
Error: [$sce:insecurl] Blocked loading resource from url not allowed by $sceDelegate policy. 
```

$sce is a service that provides some security features to AngularJS. SCE stands for Strict Contextual Escaping.

Basically, SCE helps you write code that (a) is secure by default and (b) makes auditing for security vulnerabilities such as XSS, clickjacking, etc. a lot easier.

So what we need to do is to tell angular that we trust this YouTube embed URL as a trusted resource URL. To do that we use the $sce service.

First, we have to inject $sce into our dependencies.

Second, we tell $sce to trust our YouTube URL.


```
$scope.movie.youtubeUrl = $sce.trustAsResourceUrl("http://www.youtube.com/embed/" + 
$scope.movie.youtubeId + "?rel=0"); 
```

###LAB:

* Extend application and add another page that renders result of a 3rd party API - or write another *respond_to :json* api in Rails and call that. Use a factory to wrap API call.

* Add a filter 'fullname' that displays the Southpark character's full name. For example:


```
{{ Stan | fullname }} 
```
	
should result in

	Stan Broflovski
	
Or come up with a more meaningful filter, if you can.
	
	
	 
	



