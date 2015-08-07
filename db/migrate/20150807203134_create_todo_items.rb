class CreateTodoItems < ActiveRecord::Migration
  def change
    create_table :todo_items do |t|
      t.references :card, index: true, foreign_key: true
      t.string :title
      t.boolean :done

      t.timestamps null: false
    end
  end
end
