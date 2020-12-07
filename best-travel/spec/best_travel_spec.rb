require_relative "../best_travel"

describe BestTravel do

  it "returns 1 for given information" do
    expect(BestTravel.new.execute(1,1,[1])).to eq(1)
  end

  it "returns nil for given information" do
    expect(BestTravel.new.execute(1,2,[1])).to eq(nil)
  end

  it "returns nil for given information" do
    expect(BestTravel.new.execute(1,2,[1,2])).to eq(nil)
  end

  it "returns 3 for given information" do
    expect(BestTravel.new.execute(3,2,[1,2,3,4])).to eq(3)
  end

  it "returns 3 for given information" do
    expect(BestTravel.new.execute(3,2,[4,3,2,1])).to eq(3)
  end

  it "returns 3 for given information" do
    expect(BestTravel.new.execute(4,2,[7,8,2,1])).to eq(3)
  end

  xit "returns 163 for given information" do
    ts = [50, 55, 56, 57, 58]
    expect(BestTravel.new.execute(163,3,ts)).to eq(163)
  end
end
