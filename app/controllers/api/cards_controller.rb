class Api::CardsController < ApplicationController
  private
  def card_params
    params.require(:card).permit(:title, :description, :ord, :list_id)
  end
end
