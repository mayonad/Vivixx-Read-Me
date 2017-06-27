class Me
  def self.weather_today
    puts "=" * 120
    puts "Who am I".center(120)
    gets.chomp
    puts "=" * 120
  end
end


def go
  system 'cls'
  puts "=" * 120
  puts "My name is Arugno. I am from far away land. I live with very own dog.".center(120)
  puts "When I was walking with my own dog, I saw a girl named 'Sara'.".center(120)
  puts "And everything slowdown and only Sara is I can see.".center(120)
  puts "She needs help getting her bag, gently I help her out.".center(120)
  puts "And that way we met each other.".center(120)
  puts "And while we are going, theres some vendors out there selling some foods.".center(120)
  puts "And we drop by..."
  puts "=" * 120
  puts "\n\nWhat do you want:\n\n".center(120)
  puts "What do you want?"
  puts "-- Candies P1"
  "-- Chichirya P5"
  "-- Pizza P500"
  "-- Gulaman P5"
  total = 0
  supertotal = 0
  qtytotal = 0
  order = gets.chomp
  order.downcase
  supertotal += total.to_i
  puts "=" * 120
  prize = "1" if order == "Candies"
  prize = "5" if order == "Chichirya"
  prize = "500" if order == "Pizza"
  prize = "5" if order == "Gulaman"
  puts "And how many of those?"
  qty = gets.chomp
  total = qty.to_i * prize.to_i
  supertotal += total.to_i
  qtytotal += qty.to_i
  puts "Okay, so your total is #{supertotal}. Please pay your bills before we go home."
  puts "......"
  puts "You have a total of #{qtytotal} items. Your total is #{supertotal}."

  puts "You know I have no money"
  gets.chomp
end
go
