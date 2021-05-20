class AddNotNullToHeaderInReviews < ActiveRecord::Migration[5.2]
  def change
    change_column_null :reviews, :header, false
  end
end
