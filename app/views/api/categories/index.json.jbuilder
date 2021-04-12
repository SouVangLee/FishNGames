@categories.each do |category|
  json.set! category.id do
    json.extract! category, :id, :name
        json.photoUrls category.photos.map { |file| url_for(file)}
  end
end