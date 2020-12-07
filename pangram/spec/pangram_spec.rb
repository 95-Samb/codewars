require_relative("../pangram")

describe Pangram do

  it "returns false for a" do
    expect(Pangram.new.execute("a")).to eq(false)
  end

  it "returns true for abcdefghijklmnopqrstuvwxyz" do
    expect(Pangram.new.execute("abcdefghijklmnopqrstuvwxyz")).to eq(true)
  end

  it "returns false for 26 a's" do
    expect(Pangram.new.execute("a" * 26)).to eq(false)
  end

  it "returns false for a-q + 1-9 " do
    expect(Pangram.new.execute("abcdefghijklmnopq123456789")).to eq(false)
  end

  it "returns true for a-z + 1 " do
    expect(Pangram.new.execute("abcdefghijklmnopqrstuvwxyz1")).to eq(true)
  end

  it "returns true for given string " do
    expect(Pangram.new.execute("The quick brown fox jumps over the lazy dog.")).to eq(true)
  end

  it "returns true for capitilised alphabet " do
    alphabet =* ("A".."Z")
    alphabet_string = alphabet.join
    expect(Pangram.new.execute(alphabet_string)).to eq(true)
  end
end
