class Likesdislikes < ActiveRecord::Migration[5.2]
  def change
    drop_table :dislikes
    add_column :likes, :type, :string
  end
end
