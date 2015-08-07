class Api::BoardsController < ApplicationController
  def create
    @board = current_user.boards.new(board_params)
    if @board.save
      render json: @board
    else
      render json: @board.errors.full_messages, status: :unprocessable_entity
    end
  end

  def index
    @boards = Board.all
    render json: @boards
  end

  def show
    @board = Board.find(params[:id])
    render json: @board
  end

  def update
    @board = Board.find(params[:id])
    if @board.update(board_params)
      render json: @board
    else
      render json: @board.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    board = Board.find(params[:id])
    board.destroy
    render json: board
  end

  private
  def board_params
    params.require(:board).permit(:title)
  end
end
