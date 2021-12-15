
class PaginationHelper

  def initialize(collection, items_per_page)

    @collection = collection

    @items_per_page = items_per_page

  end
  
  def item_count
    @collection.length
  end
  
  def page_count
    (item_count.to_f / @items_per_page).ceil
  end

  def page_item_count(page_index)

    if (page_index + 1) > page_count
      return -1
    end

    if (page_index + 1) == page_count
      return item_count % @items_per_page == 0 ? 
        @items_per_page : item_count % @items_per_page  
    end

    @items_per_page
    
  end

  def page_index(item_index) 
    item_index
  end

end
