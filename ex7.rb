def question
  puts "What do you like?"
  @answer = gets.chomp
end


def banner
  puts "QWEK QWEK"
end
def precious_greetings
  puts "Hi mr Williams, Im Vivixx"
end

@menu =
[
  {name: "fishball", p: 5, a: 0},
  {name: "kikiam", p: 10, a: 0},
]

banner

precious_greetings


def menu
  @menu.each do |adobo|
    puts "#{adobo[:name]} = P#{adobo[:p]} "
  end
end
menu
system "cnt"
puts "What do you like?"
order = gets.chomp
system "cnt"
puts "How many?"
x = gets.chomp
puts "You ordered #{order} #{x} pcs."


puts "Thank you!"
