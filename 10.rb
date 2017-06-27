class Customer
 def initialize(details)
  @details = details
 end

 def print_customer_details
 puts "Customer details: #{@details}"
 puts "Name: #{@details['name']}"
 puts "Starsign #{@details['starsign']}"
 puts "Age: #{@details['age']}"
 puts "=" * 15
 end
end

pedro = Customer.new({"name"=>"Pedro","starsign"=>"Leo", "age"=>21})
pedro.print_customer_details
