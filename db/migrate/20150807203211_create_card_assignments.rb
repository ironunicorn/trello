class CreateCardAssignments < ActiveRecord::Migration
  def change
    create_table :card_assignments do |t|
      t.references :user, index: true, foreign_key: true
      t.references :card, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
