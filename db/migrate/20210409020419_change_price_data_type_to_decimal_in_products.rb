class ChangePriceDataTypeToDecimalInProducts < ActiveRecord::Migration[5.2]
  def change
    change_column :products, :price, :decimal, precision: 10, scale: 2, null: false
  end
end
