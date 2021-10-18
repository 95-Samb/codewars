require_relative "../pagination"

describe PaginationHelper do

  context "#item_count" do

    it "returns 0 for empty collection" do

      subject = PaginationHelper.new([],0)

      expect(subject.item_count).to eq(0)
    end

    it "returns 1 for [a],0" do

      subject = PaginationHelper.new(["a"],0)

      expect(subject.item_count).to eq(1)
    end
  end

  context "#page_count" do

    it "returns 0 for empty collection" do

      subject = PaginationHelper.new([],0)

      expect(subject.item_count).to eq(0)
    end

    it "returns 1 for [a],0" do

      subject = PaginationHelper.new(["a"],1)

      expect(subject.item_count).to eq(1)
    end

  end

end
