json.extract! @product, :id, :name, :price, :quantity, :description, :category_id
json.photoUrls @product.photos.map { |file| url_for(file)}

