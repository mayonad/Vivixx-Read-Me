def menu
  puts "<Car Parts>"
  puts "1. Tires"
  puts "2. Windshield"
  puts #{}"3. Body"
end

loop do
  menu
  car = gets.chomp

  if car == "1"
    puts "\nP10000".prepend(120)
    break

  elsif car == "2"
    puts "P15000"

  else car == "3"
    puts "50000\n"

  end
end
