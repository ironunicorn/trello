json.extract! @board, :title, :user_id, :id

json.lists do
  json.array! @board.lists do |list|
    json.extract! list, :title, :board_id, :id
    json.cards do
      json.array! list.cards do |card|
        json.extract! card, :title, :description, :list_id
      end
    end
  end
end
