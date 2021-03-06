class Api::CardsController < ApplicationController
  def create
    @card = Card.new(card_params)
    if @card.save
      render json: @card
    else
      render json: @card.errors.full_messages, status: :unprocessable_entity
    end
  end

  def index
    @cards = Card.all
    render json: @cards
  end

  def show
    @card = Card.find(params[:id])
    render json: @card
  end

  def update
    @card = Card.find(params[:id])
    if @card.update(card_params)
      render json: @card
    else
      render json: @card.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    card = Card.find(params[:id])
    card.destroy
    render json: card
  end


  private
  def card_params
    params.require(:card).permit(:title, :description, :ord, :list_id)
  end
end
