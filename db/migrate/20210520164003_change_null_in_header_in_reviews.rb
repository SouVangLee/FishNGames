class ChangeNullInHeaderInReviews < ActiveRecord::Migration[5.2]
  def change
    remove_column :reviews, :header
  end
end
