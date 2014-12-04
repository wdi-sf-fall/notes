
##AngularJS and Rails

####Goals:


Building a raffler application: Randomly pick winners from a list of players. Turn rails server into a pure api and move the app functionality into the client.


####1) Getting started:

Clone [this repo](https://github.com/wdi-sf-fall/angular-and-rails) and explore application.

	bundle
	rake db:create
	rake db:migrate
	rake db:seed
	rails s

[open app in browser](http://localhost:3000)

What does the app do? What are the models, controllers, views?
	
#####A word about turbolinks: [Remove](http://blog.steveklabnik.com/posts/2013-06-25-removing-turbolinks-from-rails-4)!

[What are turbolinks?](http://guides.rubyonrails.org/working_with_javascript_in_rails.html#turbolinks) / [Why remove them?](http://engineering.onlive.com/2014/02/14/turbolinks-the-best-thing-you-wont-ever-use-in-rails-4/)
	

####1) Angularize


a) Add AngularJS gem to Gemfile:

	gem 'angular-gem'
	
We will be using a gem `angularjs-rails-resource` that is specifically designed to work with Rails resources. Add it to Gemfile

	gem 'angularjs-rails-resource', '~> 1.1.1'

Include gems in asset pipeline. In `app/assets/javascripts/application.js`, add:

	//= require angular
	//= require angularjs/rails/resource

b) Turn app into an angular app

	<html ng-app>

c) Quick test	

Embedd a random angular expression in a view and verify it works, for example:

	{{ 12.34 | currency }}	

####2) Turn Rails into api server

Generate RESTful players controller

	rails g controller players index show create update destroy
	

The new controller responds with **json** exclusively.	

```
class PlayersController < ApplicationController
  # controller supports json only, it can't render pages
  respond_to :json

  def index
  	# For a given controller action, 
  	# respond_with generates an appropriate 
  	# response based on the mime-type requested 
  	# by the client.
    respond_with Player.all
  end

  def show
    respond_with Player.find(params[:id])
  end

  def create
    respond_with Player.create(params[:player])
  end

  def update
    respond_with Player.update(params[:id], params[:player])
  end

  def destroy
    respond_with Player.destroy(params[:id])
  end
end
```	

Add players resource routes:

	resources :players

Test it!

	http://localhost:3000/players.json

####3) Replace server side ERB with client side Angular

a) We go back to plain HTML:

* Remove `.erb` from `views/raffler/index.html.erb`


b) In raffler.js, create angular app module

	var app = angular.module("raffler", []);
	
c) Add application name to `ng-app` tag

	<html ng-app='raffler'>

Note that in the html tag, the app name lowercase. The actual module name is uppercase.


####4) Create a RaffleController


```
app.controller('RaffleController', [ 
	"$scope",
	function($scope) { 
	$scope.test = 123;
}
```

**Exercise:** Test controller in view


####5) Make raffler app talk to "players api"

In raffler.js, create a resource module. When using `railsResourceFactory`, the code below is the equivalent of declaring `resource: player`, but for Angular.

```	
app.factory('Player',
  function (railsResourceFactory) {
    var resource = railsResourceFactory({
      url: '/players',
      name: 'player'});
    return resource;
});
```

Make the raffler app depend on "rails" service:

```
var app = angular.module("raffler", [
	'rails'
	]);
```

Inject the new resource module in the controller:

```
app.controller('RaffleController', [ 
	"$scope",
	"Player",
	function($scope, Player) { 
	...
}
```

Now we can use `Player` resource in the Angular controller like we would use ActiveRecord Models in rails controller. Very cool!

```
Player.query()
Player.query({ name: "Cartman"})

var newPlayer = new Player({ name: "Jack"})
newPlayer.create()

newPlayer.delete()

newPlayer.name = "Eric Cartman"
newPlayer.update()
```

So let's use it and get the list of players from the api server. Let's add this to the angular controller.

```
// get list of all players
Player.query().then(function(result) {
    	$scope.players = result;
  	})
```  	

Here's the new view:


	<h1>Southpark Raffle</h1>
	<div ng-controller="RaffleController">
  	<ul>
    	<li ng-repeat="player in players">
      	{{player.name}}
    	</li>
  	</ul>
	</div>


####6) POSTing from Angular - Adding players

Let's add an input form:

	<form ng-submit="addPlayer()">
		<input type="text" ng-model="newName">
		<input type="submit" value="Add">
	</form>
	
And an event handler in the controller:

	$scope.addPlayer = function() {
		var newPlayer = new Player({
			name: $scope.newName
    	})
		newPlayer.create().then(function(newlyCreatedPlayer){
			$scope.players.push(newlyCreatedPlayer);
			$scope.newName = "";
      });
    };

	


  
  

	
	


 
