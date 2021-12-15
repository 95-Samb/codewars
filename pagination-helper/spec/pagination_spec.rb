require_relative "../pagination"

describe PaginationHelper do

  context "#item_count" do

    it "returns 0 for empty collection" do

      subject = PaginationHelper.new([],1)

      expect(subject.item_count).to eq(0)

    end

    it "returns 1 for [a],0" do

      subject = PaginationHelper.new(["a"],1)

      expect(subject.item_count).to eq(1)

    end
  end

  context "#page_count" do

    it "returns 0 for empty collection" do

      subject = PaginationHelper.new([],1)

      expect(subject.page_count).to eq(0)

    end

    it "returns 1 for [a],1" do

      subject = PaginationHelper.new(["a"],1)

      expect(subject.page_count).to eq(1)

    end

    it "returns 3 for [a,b,c],1" do

      subject = PaginationHelper.new(["a","b","c"],1)

      expect(subject.page_count).to eq(3)

    end

    it "returns 2 for [a,b,c],2" do

      subject = PaginationHelper.new(["a","b","c"],2)

      expect(subject.page_count).to eq(2)
      
    end

  end

  context "#page_item_count" do

    it "returns 2 for [a,b,c],2 and 0" do 

      subject = PaginationHelper.new(["a","b","c"],2)

      expect(subject.page_item_count(0)).to eq(2)

    end

    it "returns 3 for [a,b,c],3 and 0" do

      subject = PaginationHelper.new(["a","b","c"],3)

      expect(subject.page_item_count(0)).to eq(3)

    end

    it "returns -1 for [a,b,c],3 and 1" do

      subject = PaginationHelper.new(["a","b","c"],3)

      expect(subject.page_item_count(1)).to eq(-1)

    end

    it "returns 1 for [a,b,c,d],3 and 1" do

      subject = PaginationHelper.new(["a","b","c","d"],3)

      expect(subject.page_item_count(1)).to eq(1)

    end


  end

end
