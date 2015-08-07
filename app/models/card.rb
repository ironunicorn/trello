class Card < ActiveRecord::Base
  belongs_to :list
  has_many :todo_items
  has_many :card_assignments
  has_many :users, through: :card_assignments
end
