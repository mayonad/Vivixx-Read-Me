class Person
  attr_accessor :name, :age
  def initialize(name,age)
    @name = name
    @age = age
  end
#getter
#  def age
#    @age
#  end
# #setter
#  def age=(age)
#    @age=age
#  end
end

deyo=Person.new("Deyo", 31)
puts deyo.age
deyo.age = 23

puts deyo.age
