puts "Type of the file name: "
filename = gets.chomp

opened_file = File.open(filename,'a+')

#puts "Opened file name #{filename}"
#puts "="
#print opened_file.read


#puts "Add another Filipino city: "
#city = gets.chomp

#opened_file.write(city)
#opened_file.write("\n")

opened_file.rewind
puts "=" * 15

print opened_file.read

opened_file.close
