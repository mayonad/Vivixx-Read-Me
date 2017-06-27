puts "mr william"
puts "this is my profile"
profile = {
  first_name: "jack",
  last_name: "et",
  height: 73,
  weight: 123,
  country: "hawaii",
  occupation: "assistant"
}
puts "first name: #{profile[:first_name]}"
puts "last name: #{profile[:last_name]}"
puts "height: #{profile[:height]}"
puts "weight: #{profile[:weight]}"
puts "country: #{profile[:country]}"
puts "occupation: #{profile[:occupationt]}"


shopping_list = [
    { item: :clothes, prize: 5000 },
    { item: :tissue, quantity: 50 },
    { item: :face_towel, quantity: 233 }
]
shopping_list.each do |info|
  puts "#{info[:item]} x #{info[:quantity]}"
end
