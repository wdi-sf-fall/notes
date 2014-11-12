Objectives
----------
- Recall how routes work
- Recall how resources work
- Understand nested routes/resources

Setup
---------

We're going to discuss routes, resources, and nested resources in the
context of an authors and books app. A rails project has been provided
that has most of the code related to authors completed.  Throughout
class we are going to finish it up, then add books, which will belong
to authors.  In other words, a Book will be a _nested resource_ of an
Author.

[https://github.com/wdi-sf-fall/nested_resources](https://github.com/wdi-sf-fall/nested_resources)

    git clone https://github.com/wdi-sf-fall/nested_resources.git
    cd nested_resources
    bundle install
    rake db:create
    rake db:migrate

Routes
------

### Review: what do we know about routes? ###

What would the following accomplish, if it was located in `routes.rb`?

    get '/authors/:id', to: 'authors#show'

- `'/authors/:id` is the URL to be matched.
- `to: 'authors'` refers to the authors_controller.rb
- `#show` refers to the show method within authors_controller.rb

In other words, if a request comes in to the server matching the
'/authors/:id' URL, then we call the `show` method (a.k.a., action)
inside of `authors_controller.rb`.

### Review(?): what do we know about resources? ###

Q: What does this do if it's located in `routes.rb`?

    resources :authors

What's a good way to check? Hint: `rake routes`.

A: It generates all the URLs for a given resource (e.g., Author).

    $ rake routes
          Prefix Verb   URI Pattern            Controller#Action
         authors GET    /authors               authors#index
                 POST   /authors               authors#create
      new_author GET    /authors/new           authors#new
     edit_author GET    /authors/:id/edit      authors#edit
          author GET    /authors/:id           authors#show
                 PATCH  /authors/:id           authors#update
                 PUT    /authors/:id           authors#update
                 DELETE /authors/:id           authors#destroy

### Nested resources

Ok, we've seen resources.  What's all this nonsense about _nested_
resources? Well, sometimes you'll have resources that "belong to"
other resources.  We've already seen how to establish such a
relationship at the  model/database layer, but we can also represent
this relationship in our routes.  In our example, we may have a
resource called Book that belongs to another resource, called Author.

#### Exercise ####

In `routes.rb`, replace `resources :authors` with the following:

    resources :authors do
        resources :books
    end

Running `rake routes` will show that this generates the following
URLs:

    $ rake routes
               Prefix Verb   URI Pattern                             Controller#Action
         author_books GET    /authors/:author_id/books               books#index
                      POST   /authors/:author_id/books               books#create
      new_author_book GET    /authors/:author_id/books/new           books#new
     edit_author_book GET    /authors/:author_id/books/:id/edit      books#edit
          author_book GET    /authors/:author_id/books/:id           books#show
                      PATCH  /authors/:author_id/books/:id           books#update
                      PUT    /authors/:author_id/books/:id           books#update
                      DELETE /authors/:author_id/books/:id           books#destroy
              authors GET    /authors                                authors#index
                      POST   /authors                                authors#create
           new_author GET    /authors/new                            authors#new
          edit_author GET    /authors/:id/edit                       authors#edit
               author GET    /authors/:id                            authors#show
                      PATCH  /authors/:id                            authors#update
                      PUT    /authors/:id                            authors#update
                      DELETE /authors/:id                            authors#destroy

- '/authors' will list all the authors.
- '/authors/17' will show info about that author.
- '/authors/17/books' will show all that author's books.
- '/authors/17/books/5' will show info about that author's 5th book.

Controller#Action
-----------------

In `authors_controller.rb`, the `#show` method (a.k.a., action) can
get access to the requested authorId through the `params` hash.

    def show
        authorId = params[:id]
    end

In `books_controller.rb`, the `#show` method (a.k.a., action) needs to
get both the authorId AND the bookId in order to retrieve the specific
book.

    def show
        authorId = params[:author_id]
        bookId = params[:id]
    end

You can look at the generated routes to tell what the parameters will
be named.

    Prefix        Verb   URI Pattern                      Controller#Action
    author_book   GET    /authors/:author_id/books/:id    books#show

#### Exercise ####

Create `books_controller.rb` by running the following in the terminal:

    rails generate controller books

Implement CRUD operations on books.

Templates (.erb)
----------------

    <%= form_tag authors_path %>
    <% end %>

    <%= form_for @author %>
    <% end %>

    <%= form_form [@author, @book] %>
    <% end %>

    <%= link_to "Show an author", @author %>

    <%= link_to "Edit an author", edit_author_path(@author) %>

    <%= button_to "Delete Author", @author, :method => :delete %>

    <%= button_to "Delete Author's Book", [@author, book], :method => :delete %>

Prefix
------

* Q: What's the first column output from `rake routes`?
* A: Prefix

- Q: When I do a `redirect_to <blank>_path`, what can fill in the blank?
- A: Prefix

- Q: When I do a `form_for <blank>_path(model)`, what can fill in the
blank?
- A: Prefix

## Bonus: Can we handle multiple models in one form?

Let's suppose that we want to create an Author and a Book at the same
time.  We can accomplish this using **Active Record Nested
Attributes**  Nested attributes allow you to save attributes on
associated records through the parent.

Read more about Nested Attributes on
[Rails Docs](http://api.rubyonrails.org/classes/ActiveRecord/NestedAttributes/ClassMethods.html).


Resources
---------
- [Rails Routing](http://guides.rubyonrails.org/routing.html)
