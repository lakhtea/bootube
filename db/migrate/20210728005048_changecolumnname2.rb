class Changecolumnname2 < ActiveRecord::Migration[5.2]
  def change
    rename_column :likes, :type, :category
  end
end
