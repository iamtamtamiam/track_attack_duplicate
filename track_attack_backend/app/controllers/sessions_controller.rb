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
        
        if user && user.password == params[:password]
            session[:user_id] = user.id
            render json: {
              status: :created,
              logged_in: true,
              user: user,
              current_user: current_user,
              session: session
            }
          else
            render json: { status: 401 }
        end

    end 

    def destroy
      session.destroy
      #reset_session
      render json: {
        session: session,
        current_user: current_user,
        message: "you are logged out"}
    end 

    private

    def current_user
      @current_user ||= User.find_by_id(session[:user_id]) if session[:user_id]
    end 

end 