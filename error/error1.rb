require 'test/unit';
require_relative 'Keyword';
class Main < Test::Unit::TestCase
  def test_keyword
    $keywordArr = ['Phones', 'Food', 'Computers', 'Restaurants', 'Banks', 'Clinics', 'Stage', 'Market', 'Shops', 'Parking Lot'];

    assert_equal('Phonoes', $keyword[0]);
    assert_equal('Food', $keyword[1]);
    assert_equal('Computers', $keyword[2]);
    assert_equal('Restaurant', $keyword[3]);
    assert_equal('Banks', $keyword[4]);
    assert_equal('Clinics', $keyword[5]);
    assert_equal('Stage', $keyword[6]);
    assert_equal('Market', $keyword[7]);
    assert_equal('Shops', $keyword[8]);
    assert_equal('Parking  Lot', $keyword[9])
  end

end



def banner
  p "=".center(50, '=');
  p "SM Mall - Item's of Interest".prepend(' ').concat(' ').center(50, '=');
  p "=".center(50, '=');
end

def displayItems
  i = 0;
  n = 1;
  while i < $keywordArr.length
    p "Item - #{n}: #{$keywordArr[i]}";
    i += 1;
    n += 1;
  end
  p "-"*50;
  redirectToIntro();
end

def introScreen
  system"cls";
  banner();
  p "Welcome to the SM kiosk.";
  p "Would you like to see a list of the top ten items here?"
  choice = gets.chomp.downcase.strip;
  if choice == "y" || choice == "yes"
    displayItems();
  elsif choice == "e" || choice == "exit"
    system"cls";
    exit
  else
    introScreen
  end
end
def redirectToIntro
  p "Would you like to go back to the intro screen? [y/n]"
  redirectToIntroScreen = gets.chomp.strip.downcase;

  if redirectToIntroScreen == "yes" || redirectToIntroScreen == "y"
    introScreen();
  end
end
