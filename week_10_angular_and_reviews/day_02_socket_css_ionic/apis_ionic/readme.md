# Rails APIs, Mobile App Development and Ionic

### Building secure Rails APIs - Things to keep in mind:

- Differences between a public and private API
- Securing your API
- API Keys
- API Versioning

#### Same origin policy and CORS

When you build a public API, you quickly run into the issue of the Same Origin Policy. The same-origin policy restricts how a document or script loaded from one origin can interact with a resource from another origin. Same-origin Policy is used as a means to prevent Cross-site Request Forgery (or XSS) attacks.

You can read more about it [here](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy)

In order to bypass this security, we enable CORS (cross origin resource sharing) in our application:

In your Gemfile add

`gem 'rack-cors'`

In your application.rb add 

```
config.middleware.insert_before "ActionDispatch::Static", "Rack::Cors" do
     allow do
       origins '*'
       resource '*', :headers => :any, :methods => [:get, :post, :patch, :options, :delete, :put]
     end
   end
```

When you run your application in production, you can also change `*` to only match the allowed domains. We also need to change our `application_controller.rb` to restrict with `null_session` instead of `exception`. 

### API Security + Headers

One of the most common ways of securing our API is by giving our users an API key to ensure that they are authenticated. We include this API key in our HTTP header.

To learn more about headers...head on over [here](http://code.tutsplus.com/tutorials/http-headers-for-dummies--net-8039)

If you want to play around with a very small API example - you can check out this repo [here](https://github.com/wdi-sf-fall/sample_rails_api). The next steps in building this API would be to enable CORS as well as changing the CSRF to null_session (when you start adding POST requests).

If you would like to learn more about API and API security, this [codeschool](https://www.codeschool.com/courses/surviving-apis-with-rails) course is phoenominal on teaching how to build secure APIs using Token Authentication. 

This [railscast](http://railscasts.com/episodes/352-securing-an-api?view=asciicast) is also another great resource for learning more about API security

### Mobile App Development - Your Options

Once you have sorted out your application on the backend, you then need to think about how you are going to build your mobile app. Here are the options we have to build mobile apps:

#### Native

The most powerful yet challenging way to build a mobile application is to use it's native development environment. This means learning a new language for each device as well as all of the tiny quirks that come with native development. Here are the most common platforms and their respective languages and IDEs 

- iOS - Objective-C/Swift (Xcode)
- Android - Java (Eclipse)
- Windows Phone - C# (Visual Studio)

Most often, native apps will be more performant than hybrid apps, but native development requires learning an entirely new (and lower level) programming language, which is a tremendous barrier to entry


#### Hybrid

Use a tool like Apache Cordova (previously called Phonegap). Phonegap was created in 2009 by a company called Nitobi and was purchased by Adobe in 2011. In 2012, Adobe donated Phonegap to the Apache Software Foundation and renamed it Cordova.

Cordova Plugins - Cordova comes with a bunch of plugins that allow you to get access to native features of the phone including the contacts, camera, geolocation and many more. You can see them here `http://plugins.cordova.io/#/viewAll`

##### Hybrid vs Native

Pros:

- Faster development
- smaller learning curve
- cross-platform out of the box

Cons:

- Less performant than native development, esspecially on older devices
- Limited to UI capabilities of modern web
- Overall, less flexible

#### Mobile Web

The last and easiest option, is to build an application that is mobile responsive and works on devices of different sizes. This is almost always done using media queries and JavaScript. This does not require you to learn a different framework, but the disadvantage is the access you can get to some of the devices features. 

### What is the technology behind hybrid development?

__Cordova__ - It enables software programmers to build applications for mobile devices using JavaScript, HTML5, and CSS3, instead of relying on platform-specific APIs like those in iOS, Windows Phone, or Android. It enables wrapping up of HTML, CSS and Javascript code depending upon the platform of the device. It extends the features of HTML and Javascript to work with the device. The resulting applications are hybrid, meaning that they are neither truly native mobile application (because all layout rendering is done via web views instead of the platform's native UI framework) nor purely web-based (because they are not just web apps, but are packaged as apps for distribution and have access to native device APIs). 

http://cordova.apache.org/

## WARNING

__DO NOT__ try to build an app in ionic until you are __very__ comfortable with the following concepts in Angular

- dependency injection (understand how to include dependencies in your app/controllers/services)
- controllers
- directives (built in + custom)
- services (and/or factories, providers)
- routing (esspecially this, since ionic does not use ngRoute - it uses a slightly more advanced router)

If you are struggling with these concepts now, building an app will be extremely difficult and frustrating. You are going to be using angular allover the place in your Ionic app, so before you venture into this, make sure you really understand the fundamentals of angular. 

Another thing to think about is the platform you are going to be building on. If you have never used Xcode or Eclipse, deploying your app will be significantly more challenging (esspecially iOS apps).

### What is ionic?

In short, an open source front-end SDK for developing hybrid mobile apps with HTML5. You can think of Ionic as a framework that uses AngularJS along with a built in UI (and Sass/Coffee) that sits on top of Cordova.

### Why is it so powerful?

For many reasons: 

- It has an extremely powerful CLI which allows you to build and simulate apps very easily
- It comes built in with JS and CSS that allows you to smoothly simulate native gestures (scroll/bounce/swipe)
- It comes with an incredible set of UI elements and icons
- It uses Gulp to help you easily work with Sass/Coffeescript 
- It allows you to use all that Cordova offers including cordova plugins (and now ngCordova wraps these in angular)

### Some important things to consider when building a mobile app

- The use of web-based technologies leads many PhoneGap applications to run slower than native applications with similar functionality. There are many times that applications built using PhoneGap may be rejected by Apple for being too slow or not feeling "native" enough (having appearance and functionality consistent with what users have come to expect on the platform) 

### Learn more

[http://api.rubyonrails.org/classes/ActionController/HttpAuthentication/Token.html](http://api.rubyonrails.org/classes/ActionController/HttpAuthentication/Token.html)

[http://learn.ionicframework.com/](http://learn.ionicframework.com/)

[https://www.youtube.com/watch?v=gApduktFwxw](https://www.youtube.com/watch?v=gApduktFwxw)
