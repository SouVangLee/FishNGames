@products.each do |product|
  json.set! product.id do
    json.extract! product, :id, :name, :price, :quantity, :description, :category_id
  end
end