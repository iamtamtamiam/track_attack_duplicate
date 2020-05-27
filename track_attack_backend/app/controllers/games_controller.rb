class GamesController < ApplicationController

    def index
        games = Game.all
        render json: games
    end 


    def new
    end

    def create
        game = Game.new(game_params)
        if game.save
            render json: game
        else
            render game.errors.as_json(full_messages: true)
        end
    end


    private

    def game_params
        params.require(:game).permit(:name, :user_id)
    end 


end 