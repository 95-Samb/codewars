class BestTravel

  def execute(t,k,ls)
    possible_routes = ls.combination(k).to_a
    possible_journeys = possible_routes.map(&:sum).delete_if { |e| e > t  }
    possible_journeys.max
  end
end
