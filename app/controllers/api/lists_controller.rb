class Api::ListsController < ApplicationController
  private
  def list_params
    params.require(:list).permit(:title, :ord, :board_id)
  end
end
