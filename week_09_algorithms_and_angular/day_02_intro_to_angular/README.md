Intro to AngularJS in eight steps
===


##Goals

- Learn how to build web applications with Angular
- Understand Angular module architecture and data-binding
- Confidently use Angular expressions and directives
- Learn how to create Angular controllers
- Build simple Angular filter
- Build simple Angular directive

##Intro

Brief *history* of web apps:

* First generation web apps: Thin clients - fat servers.
* Very little JavaScript on client: Mostly simple DOM manipulation
* Gmail: The desktop is over. *Desktop apps that happen to run in a browser*
* The advent/resurrection of JavaScript: Only programming language in every browser.
* Powerful Desktop computers and Google's V8
* Now: Fat Clients / thin servers

Recommended reading: [Microsoft is dead](http://www.paulgraham.com/microsoft.html)

**Enter Angular**

AngularJS is a full-featured SPA framework that lets you extend HTML vocabulary for your application. It takes the notion of **MVC** and takes it to the client. The server becomes an API service and place for static content / HTML templates. Advantage: Mobile.

##Step 1 - setup

Fork & clone: 

	https://github.com/wdi-sf-fall/intro-to-angular-in-eight-steps

	
Fire up webserver:

	 npm start
	 
Go to [home page](http://localhost:8000)


Inspect `app/index.html' and include angular library. Best place to get it from is [Google directly](https://developers.google.com/speed/libraries):

The latest release is 1.3.2:

`<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.3.2/angular.min.js"></script>`


		 
##Step 2 - data-binding & directives

Directives teach HTML new tricks.
	
In Angular, we add behavior to HTML through **directives**. A directive is a marker on a HTML tag that tells Angular to run or reference Angular code.

Angular directives start with the prefix **ng-**, for example: 

The **ng-app directive** denotes the beginning of an application, and everything inside its tags will have access to binding. In other words,

[`ng-app`](http://docs.angularjs.org/api/ng/directive/ngApp) turns ordinary HTML into an Angular application

[Data binding](https://docs.angularjs.org/guide/databinding): `ng-model` binds an HTML element to a value / model. The binding is bi-directional: **MVVM**

Double curly brackets denote Angular expressions: ```{{ an angular expression }}``` - this is not HandleBars. Very cool: No 3rd party templating system required. HTML is your *template*
		
More on [directives](http://docs.angularjs.org/guide/directive). Directives [cheat sheet](http://www.cheatography.com/proloser/cheat-sheets/angularjs/)

**Rule**: When using HTML tags/attributes, first look if Angular offers a corresponding directive. If so, use it. For example:

- a tag, href attribute: `ng-href`
- img tag, src attribute: `ng-src`
- class attribute: `ng-class` **(demo)**

To catch up:

	git checkout two

**Exercise**: Show or hide a newly created div based on the value of an expression of your choice.	
	
##Step 3 - expressions and filters

Let's play with angular expressions and some build in filters.

[Filter](http://docs.angularjs.org/api/ng/filter/filter)
	
[Angular expressions in action](http://docs.angularjs.org/guide/expression)

To catch up:

	git checkout three
	
**Exercise**: Bind a new input variable to a model and send it through the **date** filter. Explain results. 
	
##Step 4 - arrays and loops

Loops are directives!

1) setup array. ``ng-init`` is like ``ng-model`` but allows to initialize model.

```
 <div ng-init="names=['Yoni','James', 'Yin' ,'Matt','Tim','Joe', 'Jack', 'Pete', 'Melody', 'David', 'Jacob']">
```

2) ng-repeat

```
<ul>
 <span ng-repeat="name in names">
        <li>{{ name }}
 </span>
</ul> 
```

3) now add a search box

	<p>Search: <input ng-model="query">

4) and add search filter

`| filter:query `

**All this without a single line of JavaScript**

[ngRepeat](http://docs.angularjs.org/api/ng/directive/ngRepeat)

To catch up:

	git checkout four
	
**Exercise**: Change the code and use Angular to display list of names alphabetically.
  
##Step 5 - controller

Now where's the JavaScript? Say hello to [**controller**](http://docs.angularjs.org/guide/controller) ...

Todo:
- Controller says welcome
- Move students into controller.
- **hasSufficientFunds** as value and function
- [Use array/Inline notation when declaring controller](http://scotch.io/tutorials/javascript/declaring-angularjs-modules-for-minification)
- Diagram modules.

Let's create a new file ```simple_controller.js``` and include it in the app.

In ```simple_controller.js```, declare app module:

	var demoApp = angular.module("demoApp", []);

Add a controller:

	demoApp.controller('SimpleController', function($scope) {
		//...
	});
		
Put container div under the control of controller

	<div class="container" ng-controller="SimpleController">

Let's create an ```scoped variable``` and use it in the view.

[Scope](http://docs.angularjs.org/guide/scope): It's like the glue between model and view.

To catch up:

	git checkout five
	
**Exercise**: Create a div that contains the result of a scoped function.
 
##Step 6 - events

Let's build a currency converter function.  

**Exercise:** (XC) Add another controller ```exchange_controller.js``` and include it in ```index.html```. Create a new ```div``` at bottom of page and put it under control of your new contrtoller.

Together: Add event handler, convert function and validation using $watch.

[Events](http://tutorials.jenkov.com/angularjs/events.html)

[Watching models](http://docs.angularjs.org/api/ng/type/$rootScope.Scope)

Dynamic styling example: indicate validation with [``ng-class``](http://docs.angularjs.org/api/ng/directive/ngClass)
	
To catch up:

	git checkout six
	
**Exercise**: What would you need to allow user to choose between E/$ and $/E conversion

**TIME FOR LAB**?!	
	
##Step 7 - creating your own filters

**Exercise** Refactor - create a new file app.js with the following content 

	var demoApp = angular.module("demoApp", []);

Remove line from ```simple_controller.js```. Include ```app.js``` in ```index.html```

create a custom date filter:
	- Displays "Today" if supplied day is today
	- Displays "Yesterday" if supplied value is yesterday
	- Displays date string for all other dates


To catch up:

	git checkout seven


##Step 8 - creating your own directives

That's adding your own tgas to HTML! 

Writing custom directives is one of the more challenging tasks in Angular. Let's look at a very simple example.

Let's create a directive that formats an address in the correct country format. We keep it simple and support only US and German addresses.

Desited usage:

	<formatted-address address="someAddress">
	</formatted-address >

Basic definition of our directive:

```
demoApp.directive('formattedAddress', function() {
  return {
    restrict: 'E', //E = element, A = attribute, C = class, M = comment         
    scope: {
      someAttribute: '=someTagAttribute' // = provides two-way binding
    },
    replace: true,
    templateUrl: "partials/formatted_address.html"
  };
```

Further reading:
	http://weblogs.asp.net/dwahlin/creating-custom-angularjs-directives-part-i-the-fundamentals
	
To catch up:

	git checkout eight

