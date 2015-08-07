class Api::CardsController < ApplicationController
  private
  def card_params
    params.require(:card).permit(:title, :done, :card_id)
  end
end
