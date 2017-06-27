class CustomerTesst
  def initialize(first_name, last_name)
    @first_name = first_name
    @last_name = last_name
  end

  def full_name
    @full_name = "#{@first_name} #{@last_name}"
  end

  def first_name
    @first_name
  end
end
