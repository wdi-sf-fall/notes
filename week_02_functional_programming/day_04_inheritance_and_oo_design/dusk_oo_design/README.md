
# Object Oriented Programming

###Quick review:

- What's an object, what's a class / prototype?
- What's inheritance?

Let's explore the process of designing an object-oriented (OO) application.

##OO Analysis and Design

OO Analysis and Design aims to create a model of the system's functional requirements that is independent of implementation. Requirements are organized around objects. Objects integrate both behavior -> `methods` and state -> `instance variables` or `properties`. They are modeled after the real world objects that the system interacts with. 


###Condensed OO Design steps:

- Gather requirements. Work with a `domain expert`. Think in terms of "The User should be able to .."
- Identify objects base on *User Stories*, requirements, ...
- Draw basic Object model - what are the main relationships? Think `is a` versus `has_a`. (Vehicle, Car, Motorcycle ... Engine, Wheel)
- Describe how objects interact.
- Define the behavior -> `methods`
- Define the data/state -> `properties`


###Let's Model a real world problem

You are asked to write a rental management application. Let's keep it **very simple**. 

**requirements**

The User should be able to:

  - set up a building -> enter address
	- set up units -> enter sqft, number, rent
	- assign a building manager
	- keep track of tenants
	- see list of available units
	- move tenant in/out a unit
	- check annual income $$!
	- check total sqft rented
	
Some rules:

	- A building must have a manager
	- A tenant must have references	
	- Manager is not allowed to live in building
	- A tenant can not be a Manager
	- a Unit has only one Tenant, or none
	- Manager and tenants have names and contact info

That's a good start.

Go through the narrative and highlight nouns (person, place, thing), as candidate classes and verbs (actions), as methods / behaviors.

Ask yourself how things are related. Look for common scenarios / patterns.

Create a class diagram that represents you model.



