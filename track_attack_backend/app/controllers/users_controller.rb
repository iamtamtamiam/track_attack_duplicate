class UsersController < ApplicationController
    def index
        users = User.all
        #render json: @users
        render json: users, only: [:id, :username, :password, :created_at] ##testing rendering w/o serialization

    end


    def new
        @user = User.new
    end 

    def create
        user = User.new(user_params)
        if user.save
            session[:user_id] = user.id #need sessions controller and routes
            render json: user
        else
            render json: {main: user.errors.as_json(full_messages: true), reason: "error!"}
        end
    end 


    def show
        user = User.find_by(id: params[:id])
        render json: user
    end 



    private

    def user_params(params)
        params.require(:employee).permit(:username, :password)
    end 

end
