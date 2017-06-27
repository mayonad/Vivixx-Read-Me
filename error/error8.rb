def menu
  puts "\n\n\n== Menu options ==="
  puts "1. Exit program"
  puts "2. Print Japanese haiku\n"
  puts "3. Print test"
  puts "5. Print\n"
end

loop  do
  menu
  command = gets.chomp

  case command
  when "1"
    puts "\nGood bye\n"
    break
  when "2"
    puts "~" * 15
    puts "Furo ika ya"
    puts "Kawazu tobikomu"
    puts "mizu no oto"
  when "3"
    puts "test~" * 15
  when "5"
    puts "Your key is invalid."

  else
    puts  "Wrong command!!!"
  end
end
