# == Schema Information
#
# Table name: reviews
#
#  id          :bigint           not null, primary key
#  reviewer_id :integer          not null
#  product_id  :integer          not null
#  rating      :integer          not null
#  comment     :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  header      :string           not null
#
class Review < ApplicationRecord
  validates :reviewer_id, :product_id, :rating, :comment, presence: true
  validates_length_of :header, within: 1..80, too_long: 'cannot be greater than 80 characters!', too_short: 'cannot be empty!'
  validates :rating, inclusion: { in: [1, 2, 3, 4, 5], message: 'Please choose a rating between 1 and 5.'}

  belongs_to :product,
    foreign_key: :product_id,
    class_name: "Product"

  belongs_to :user,
    foreign_key: :reviewer_id,
    class_name: "User"

end
