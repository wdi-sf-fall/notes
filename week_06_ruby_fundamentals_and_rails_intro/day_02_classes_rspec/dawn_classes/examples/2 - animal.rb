class Animal
  attr_accessor :kind
  @@zoo = []
  def initialize(kind)
    @kind = kind
    @state = "awake"
    @@zoo << self
    p "THIS IS SELF INSIDE THE CLASS", self
  end

  def self.zoo
    @@zoo
  end

  def eat(food=nil)
    if @state == "awake"
      puts "NOM-nom!!"
      puts "#{@kind} has eaten #{food}"
    else
      puts "SLEEPING"
    end
    self
  end

  def sleep
    @state = "sleeping"
    self
  end

  def wake
    @state = "awake"
    self
  end
end


zebra = Animal.new("zebra")
dog = Animal.new("dog")
dog.sleep
zebra.eat("Tacos!")
