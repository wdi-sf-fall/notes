
# Object Oriented Programming

###Quick review:

- What's an object, what's a class / prototype?
- What's inheritance?

Let's explore the process of designing an object-oriented (OO) application.

##OO Analysis and Design

OO Analysis and Design aims to create a model of the system's functional requirements that is independent of implementation. Requirements are organized around objects. Objects integrate both behavior -> `methods` and state -> `instance variables` or `properties`. They are modeled after the real world objects that the system interacts with. 

Sometimes you work with a domain expert. For example, before modeling a reservation system for restaurants, you probably want to talk to a restaurant owner first.

###Basic OO Design steps:

- Identify objects base on User Stories, Business Requirements, ...
- Create a basic OBject model - what are the main relationships. Think `is a` versus `has_a`.
- Describe how objects interact.
- Define the behavior -> `methods`
- Define the data/state -> `properties`


###Let's go an do that

Let's assume you are asked to write a rental management application. Let's keep it very simple. 

**Business Requirements** 

Think like: The user should be able to ... 

- create a tenant
- create a unit
- move tenant into a unit
- see a list of all vacant/occupied units
- see annual income / sqft rented

That's a good start.

Go through the narrative and highlight nouns (person, place, thing), as candidate classes and verbs (actions), as methods / behaviors.

Ask yourself how things are related. Look for common scenarios / patterns.

Create a class diagram that represents you model.



