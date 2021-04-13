# == Schema Information
#
# Table name: products
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  price       :integer          not null
#  quantity    :integer          not null
#  description :text             not null
#  category_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Product < ApplicationRecord
  validates :name, :price, :quantity, :description, :category_id, presence: true

  belongs_to :category, optional: true,
    foreign_key: :category_id,
    class_name: "Category"

  has_many_attached :photos
end
