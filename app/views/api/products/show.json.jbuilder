json.extract! @product, :id, :name, :price, :quantity, :description, :category_id
json.photoUrl url_for(@product.photo)

