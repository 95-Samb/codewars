class Pangram

  def execute(string)
    alphabet =* ("a".."z")
    string_array = string.split("").map(&:downcase)
    alphabet.all? { |e| string_array.include?(e) }
  end

end
