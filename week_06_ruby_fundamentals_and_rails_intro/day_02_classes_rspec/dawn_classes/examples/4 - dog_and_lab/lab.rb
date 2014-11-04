require_relative 'dog'

class Lab < Dog
  attr_accessor :name
  def initialize(breed, name)
    # give the dog a breed efficiently
    super(breed)
    @name = name
  end
end

l = Lab.new("Labrador", "Ben")
l.bark
p l