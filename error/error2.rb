#inspirational speaker
#profile
#ladi d elano
#age 32
#successful businessman
#nigeria
puts "\n"*2+"THE WALK".center(120)
puts %q{

          __ O
         /  /\_,               |
        ___/\                  |
            /_                 |
  --------------------------------------
                          __o            __o            __o            __o            __o
                        _`\<,_         _`\<,_         _`\<,_         _`\<,_         _`\<,_
                      (_)/ (_)       (_)/ (_)       (_)/ (_)       (_)/ (_)       (_)/ (_)
  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

}

gets

def what
system "cls"
puts "=" * 120
puts "\n\n\nWho is he?".center(120)
gets
puts "Ladi Delano a Nigerian Billionaire and a CEO, Bakrie Delano Africa.".center(120)
puts "At age 22, President Ladi Delano when he made his first millions while living in China.\n\n\n".center(120)
puts "=" * 120
end
what

def who
  puts "=" * 120
profile = {
  first_name: "Ladi",
  last_name: "Delano",
  age: 32,
  occupation: "Inspirational Speaker",
  country: "Nigeria"
}
puts "First name: #{profile[:first_name]}".center(120)
puts "Last name: #{profile[:last_name]}".center(120)
puts "Age: #{profile[:age]}".center(120)
puts "Occupation: #{profile[:occupation]}".center(120)
puts "Country: #{profile[:country]}y".center(120)
puts "=" * 120
gets.chomp
end
who

def go
  system 'cls'
  puts "=" * 120
  puts "\n"*2+"\n\n\nList of Ladi's Business:".center(120)
  puts "1.Solidarnosc Asia (Solid XS)"
  puts "2.The Delano Reid Group"
  puts "3.Bakrie Delano Africa\n\n\n"
  puts "=" * 120
end
go

loop do
 go
  puts "Answer:"
  answer = gets.chomp.to_i

if answer == 1
  puts "A Chinese alcohol beverage company."
  puts "\n"*2
  puts "3 years later, Solid XS went to achieve 50% market share in China, and pulled $20 million in annual revenue."
  gets.chomp

elsif answer == 2
  puts "A real estate investment holding company, focused on mainland China."
  gets.chomp

elsif answer == 3
  puts "Delano is the co-founder and Chief Executive Officer of BDA. A $1 billion joint venture with the $15 billion (market cap) Bakrie Group of Indonesia."
  puts "\n"*2
  puts "And it serves as the investment partner of The Bakrie Group in Negeria."
  gets.chomp

else answer == Exit
  puts "That his story."
  gets.chomp


end
end
