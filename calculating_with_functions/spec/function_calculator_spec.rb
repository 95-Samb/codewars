require_relative "../function_calculator"

describe FunctionCalculator do
  it "returns 2 for one(plus(one))" do
    expect(FunctionCalculator.new.plus(FunctionCalculator.new.one)).to eq(2)
  end
end
