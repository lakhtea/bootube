class Addviews < ActiveRecord::Migration[5.2]
  def change
    add_column :videos, :views, :integer
  end
end
