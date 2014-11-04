# # EXAMPLE ONE
# class Person
#   def initialize(name)
#     @name = name
#   end
#   def greet
#     puts "Hello, #{@name}"
#   end
# end

# elie =  Person.new("Elie Schoppik")
# elie.greet
# p elie.name # Break!

# LETS ADD A GETTER AND SETTER!

# class Person
#   def initialize(name)
#     @name = name
#   end

#   # GETTER
#   def name
#     @name
#   end
#   # SETTER
#   def name=(other)
#     @name = other
#   end

#   def greet
#     puts "Hello, #{@name}"
#   end
# end

# elie =  Person.new("Elie Schoppik")
# elie.name = "Bob"
# p elie.name

# # LETS ADD AN ACCESSOR
# class Person
#   attr_accessor :name
#   def initialize(name)
#     @name = name
#   end

#   # GETTER
#   def name
#     @name
#   end
#   # SETTER
#   def name=(other)
#     @name = other
#   end

#   def greet
#     puts "Hello, #{@name}"
#   end
# end

# elie =  Person.new("Elie Schoppik")
# elie.name = "Bob"
# p elie.name

## CLASS VARIABLES!
class Person
  @@populationSize = 0
  @@populationList = []
  attr_accessor :name
  def initialize(name)
    @name = name
    @@populationSize +=1
    @@populationList << self
  end

  # GETTER
  def self.population
    @@populationSize
  end
  def self.populationList
    @@populationList
  end
  def self.greet
    puts "Hello #{self}"
  end
  def greet
    puts "Hello, #{@name}"
  end
end

elie =  Person.new("Elie Schoppik")
elie =  Person.new("Elie Schoppik")
elie =  Person.new("Elie Schoppik")
elie.name
p Person.populationList.size
Person.greet