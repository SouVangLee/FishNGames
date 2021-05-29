@cart_items.each do |cart_item|
  json.set! cart_item.id do
    json.extract! cart_item, :id, :user_id, :product_id, :quantity
    json.photoUrls cart_item.product.photos.map { |file| url_for(file)}
  end
end