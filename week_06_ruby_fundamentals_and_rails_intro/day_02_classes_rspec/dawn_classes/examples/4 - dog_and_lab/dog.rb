class Dog
  attr_accessor :breed
  def initialize(breed)
    @breed = breed
  end

  def bark
    puts "This #{breed} says Wooof!"
  end
end

d = Dog.new("fido")
d.bark


