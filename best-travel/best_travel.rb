class BestTravel

  def execute(t,k,ls)
    if k <= ls.length && t >= ls.sort[0..k-1].sum
      ls.sort[0..k-1].sum
    else nil
    end
  end
end
