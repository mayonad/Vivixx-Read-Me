class Weather
  def self.weather_today

    puts "=" * 120
    puts "Who am I".center(120)
    puts "=" * 120
  end
end


def go
  system 'cls'
  gets.chomp
  puts "My name is Arugno. I am from far away land. I live with very own dog.".center(120)
  gets.chomp
  puts "When I was walking with my own dog, I saw a girl named 'Sara'.".center(120)
  gets.chomp
  puts "And everything slowdown and only Sara is I can see.".center(120)
  gets.chomp
  puts "She needs help getting her bag, gently I help her out.".center(120)
  gets.chomp
  puts "And that way we met each other.".center(120)
  gets.chomp
  puts "And while we are going, theres some vendors out there selling some foods.".center(120)
  gets.chomp
  puts "And we drop by..."
  puts "=" * 120
  puts "\n\n\nList of the Seller's menu:".center(120)
  puts "1.Candies"
  puts "2.Fishball"
  puts "3.Pizza"
  puts "4.Gulaman\n\n\n"
  puts "=" * 120
end
go

loop do
 go
  puts "Answer:"
  answer = gets.chomp.to_i

if answer == 1
  puts "I ask her candies. No."
  gets.chomp

elsif answer == 2
  puts "Or do you want fishball, no she said."
  gets.chomp

elsif answer == 3
  puts "How about pizza, yeah yeah."
  puts "You want some whole lot of pizza"
  gets.chomp

else answer == 4
  puts "Here gulaman so that you will not be dehydrated"
  gets.chomp

else answer == 5
  puts "And while we finish eating. And I let her ride in my school service. And see you again tommorrow."

end
end
