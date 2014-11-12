PI Calls in Ruby/Rails

##Objectives
* Inspect the inner workings of Rails using binding.pry (specifically session, link_to)
* Make API request from the pry REPL using HTTParty
* Parse an API's HTTP response into JSON
* Send out Typheous requests to an API
* Format and pull information out of large data stuctures
    
        
##Overview
We'll start with diving into a binding session, move on to a code along with a goal of making a simple API request, and then a pair programming excersise to reinforce what we just learned.

##Advanced Binding
Let's examine how we can use binding.pry to peak behind the scenes and get deeper understanding of how the methods we're using work.
`method(:link_to).parameters`

##HTTParty Code Along
Our controllers not only delegate our app's actions, but they can also request information from other applications' APIs.
In order to make API requests we need to learn about a few gems that can help us do that, first HTTParty.

```
require('httparty')
require ('json')
search_term = "perpetuum+mobile"
request = HTTParty.get("https://itunes.apple.com/search?term=#{search_term}")
res = JSON.parse(request)
res["results"][0]["previewUrl"]
```


##Typheous Pair Programming
Objective:

* use query string in parameters to dictate search term
* make an API request in your Rails controller using Typheous
* sort through the response and get the first song's previewUrl
* render a page that allows me to play the a preview of the song




