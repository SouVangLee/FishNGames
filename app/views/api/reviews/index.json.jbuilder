@reviews.each do |review|
  json.set! review.id do
    json.extract! review, :id, :comment, :reviewer_id, :product_id, :rating, :created_at, :updated_at
    json.extract! review.user, :name
  end
end
