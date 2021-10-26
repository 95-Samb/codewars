
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
    
  end

  def page_index(item_index) 
   
  end

end
