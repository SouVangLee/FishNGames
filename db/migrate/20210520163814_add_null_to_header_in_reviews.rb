class AddNullToHeaderInReviews < ActiveRecord::Migration[5.2]
  def change
    change_column_null :reviews, :header, true
  end
end
