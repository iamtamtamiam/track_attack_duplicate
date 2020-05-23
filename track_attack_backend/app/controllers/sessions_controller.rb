class SessionsController < ApplicationController

    def create
        #before sessions enabled. with bcrypt still activated
        #user = User.find_by(username: params[:user][:username])
        #if user && user.authenticate(params[:user][:username])
        #    session[:user_id] = user.id
        #    render json: user
        #else
        #    render json: {message: "Login Failed, Please Try Again!"}
        #end 
        #byebug
        user = User.find_by(username: params[:username])
        #.try(:authenticate, params["user"]["password"])
        #user.try(:authenticate, params[:user][:password])
        
        if user
            session[:user_id] = user.id
            render json: {
              status: :created,
              logged_in: true,
              user: user
            }
          else
            render json: { status: 401 }
        end

    end 

end 