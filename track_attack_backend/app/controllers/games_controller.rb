class GamesController < ApplicationController

    def index
        games = Game.all
        
        if !params[:user_id]
            games = Game.all
        else
            #need to move scope to model 
            games = Game.where(user_id: params[:user_id])
        end

        render json: games
    end 


    def new
    end

    def create
        game = Game.new(game_params)
        #byebug
        #game.user_id = current_user.id
        if game.save
            render json: game
        else
            render json:{
                status: 401,
                main: game.errors.as_json(full_messages: true)
            }
        end
    end

    def show
        game = Game.find(params[:id]) #need id params from url
        render json: game

    end 


    private

    def game_params
        params.require(:game).permit(:name, :user_id)
    end 

    def current_user
        @current_user ||= User.find_by_id(session[:user_id]) if session[:user_id]
      end 

end 