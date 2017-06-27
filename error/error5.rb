def menu
  puts "\n== Menu Options =="
  puts "1. Exit program"
  puts "2. Print Japanese haiku\n"
end

loop do
  menu
  command = gets.chomp

if command == "1"
  puts "\nGoodbye\n"
  break
elsif command == "2"
  puts "=" * 15
  puts " Furu ike ya"
  puts "kawazu tobikumo"
  puts "mizu no oto\n"
else
  puts "Wrong Command!!"
end
end
