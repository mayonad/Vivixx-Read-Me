puts '101 Dalmatians'.to_i #
puts 'xxx'.to_f #

puts 'The quick brown fox jumps over the lazy dog'.upcase
#
puts 'The fastest fox tuened backward on the wall'.downcase
#

name = 'Joy, John, Samin'.split(', ')
#
puts name
name.join('_')
#
puts name

input = gets.chomp
#
puts input

puts 'Welcome'.center(30, '=')
#
puts 'Welcome'.prepend(' ').concat(' ').center(30, '#')
#
puts "Goodbye".prepend(' ').concat(' ').center(15, '#')
#
puts "..............".center(35, '=')
