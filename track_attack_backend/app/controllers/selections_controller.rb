class SelectionsController < ApplicationController

    def index
        selections = Selection.all
        
        

        render json: selections
    end 


    def new
    end

    def create
        selection = Selection.new(selection_params)
        #byebug
        if selection.save
            render json: selection
            
        else
            render json:{
                status: 401,
                main: selection.errors.as_json(full_messages: true)
            }
        end
    end

    def show

    end 


    private

    def selection_params
        params.require(:selection).permit(:game_id, :character_id)
    end 

    def current_user
        @current_user ||= User.find_by_id(session[:user_id]) if session[:user_id]
      end 

end 