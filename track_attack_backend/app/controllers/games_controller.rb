class GamesController < ApplicationController

    def index
        games = Game.all
        render json: games
    end 


    def new
    end

    def create
        game = Game.new(game_params)
        byebug
        game.user_id = current_user.id
        if game.save
            render json: {
                game: game,
                user: current_user
            }
        else
            render game.errors.as_json(full_messages: true)
        end
    end


    private

    def game_params
        params.require(:game).permit(:name, :user_id)
    end 

    def current_user
        @current_user ||= User.find_by_id(session[:user_id]) if session[:user_id]
      end 

end 