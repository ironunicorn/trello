class CreateCards < ActiveRecord::Migration
  def change
    create_table :cards do |t|
      t.references :list, index: true, foreign_key: true
      t.text :description
      t.integer :ord
      t.string :title

      t.timestamps null: false
    end
  end
end
