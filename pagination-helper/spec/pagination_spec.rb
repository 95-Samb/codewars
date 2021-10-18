require_relative "../pagination"

describe PaginationHelper do

  context "#item_count" do

    it "returns 0 for empty collection" do

      subject = PaginationHelper.new([],0)

      expect(subject.item_count).to eq(0)
    end
  end

end
