class CreateLists < ActiveRecord::Migration
  def change
    create_table :lists do |t|
      t.references :board, index: true, foreign_key: true
      t.string :title
      t.integer :ord

      t.timestamps null: false
    end
  end
end
