class FunctionCalculator

  def one
    1
  end

  def plus(x)
    proc {|x| x + 1}
  end




end
