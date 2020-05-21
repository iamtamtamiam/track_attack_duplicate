class SessionsController < ApplicationController

    def create
        user = User.find_by(username: params[:user][:username])
        if user && user.authenticate(params[:user][:username])
            session[:user_id] = user.id
            render json: user
        else
            render json: {message: "Login Failed, Please Try Again!"}
        end 

    end 

end 