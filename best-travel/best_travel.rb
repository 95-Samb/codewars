class BestTravel

  def execute(t,k,ls)
    if k <= ls.length && t >= ls.sort[0..k-1].sum
      possible_routes = ls.permutation(k).to_a
      possible_journeys = possible_routes.map(&:sum).delete_if { |e| e > t  }
      possible_journeys.max
    else nil
    end
  end
end
