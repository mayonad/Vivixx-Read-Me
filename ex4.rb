class Warrior
  def initialize(name, clan, strength, dexterity)
    @name = name
    @clan = clan
    @strength = strength
    @dexterity = dexterity
  end

  def about
    puts "#{@name} is a Warrior from the #{@clan} clan. Strength: #{@strength} Dexterity: #{@dexterity} "
  end

$Warrior_info = puts "A fighter. A warior has higher than normal strength. They never back down. Never surrender."

end
player_1 = Warrior.new("Raze","Whitefox",23,21)
player_2 = Warrior.new("Blazerk", "RedFang",19,31)
player_1.about
#player_1.about
#player_2.about

$Warrior_info
