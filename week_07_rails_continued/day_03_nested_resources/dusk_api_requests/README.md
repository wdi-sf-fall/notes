API Calls in Ruby/Rails

##Objectives

* Introduction to curl
* Inspect the inner workings of Rails using binding.pry
* Make an API request from the pry REPL using HTTParty
* Parse an API's HTTP response into JSON
* Send out Typheous requests to an API
* Format and pull information out of large data stuctures
    
        
##Overview
We'll start with an overview of curl, next we'll hop into a binding.pry session with a goal of making a simple API request, finally we'll take part in a pair programming excersise to reinforce what we just learned.

##Curl
Curl allows you to make requests from your terminal. It can be particularly helpful in simulating post requests. Our goal here will be to use curl in order to step into a binding.pry session.

##Advanced Binding
Let's examine how we can use binding.pry to peak behind the scenes and get deeper understanding of how the methods we're using work.

* Jump into a binding session and start examining some methods or hashes you typically use. Ie. `sessions` or `link_to`

##HTTParty Code Along
Our controllers not only delegate our app's actions, but they can also request information from other applications' APIs.
In order to make API requests we need to learn about a few gems that can help us do that, first HTTParty.

* gem 'httparty'
* bundle
* go back to binding.pry
* hit the iTunes API in the session

```
search_term = "perpetuum+mobile"
request = HTTParty.get("https://itunes.apple.com/search?term=#{search_term}")
res = JSON.parse(request)
res["results"][0]["previewUrl"]
```

##Typheous Pair Programming
Objective:

* Assign and your teammeber as Person X and Person Y respectively
* Build a page with an input that allows users to search music related queries via the iTunes API **Person X Drives**
* Make an API request in your Rails controller using Typheous or HTTParty **Person Y Drives**
    * As needed reference the iTunes APi [documentation](https://www.apple.com/itunes/affiliates/resources/documentation/itunes-store-web-service-search-api.html)
* Parse the response into JSON **Person X Drives**
* Render a page displays the first song's title, previewurl in an audio tag, and artwork image in an image tag **Person Y Drives**
* Bonus, render all the results onto the page and style it




