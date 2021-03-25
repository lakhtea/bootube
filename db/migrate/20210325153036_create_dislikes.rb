class CreateDislikes < ActiveRecord::Migration[5.2]
  def change
    create_table :dislikes do |t|
      t.string :dis_type, null: false
      t.integer :dis_id, null: false
      t.integer :user_id, null: false

      t.timestamps
    end
    add_index :dislikes, [:dis_id, :dis_type]
    add_index :dislikes, [:dis_id, :dis_type, :user_id], unique: true
  end
end

