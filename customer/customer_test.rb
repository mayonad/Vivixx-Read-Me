require 'test/unit'
require_relative 'customer'

class CustomerTest < Test::Unit::TestCase
  def test_first_name
    customer = Customer.new('Dave', 'She')
    assert_equal('Dave', customer.first_name)
  end

 def test_full_name
    customer = Customer>new('Dave', 'She')
    assert_equal('Dave', 'She', customer.full_name)
 end

 end
