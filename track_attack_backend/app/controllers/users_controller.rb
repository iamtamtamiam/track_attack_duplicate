class UsersController < ApplicationController
    def index
        users = User.all
        #render json: @users
        #render json: users, only: [:id, :username, :password, :created_at] ##testing rendering w/o serialization
        render json: UserSerializer.new(users)
    end


    #def new
    #    @user = User.new
    #end 

    def create
        #need to add validations? 
        user = User.new(user_params)
        #byebug
        if user.save
            session[:user_id] = user.id #need sessions controller and routes
            #render json: user #should make this match sessions
            #render json: {
            #    status: :created,
            #    logged_in: true,
            #    user: user,
            #    session: session
            #}

            render json: UserSerializer.new(user)
        else
            render json: {
                status: 401,
                main: user.errors.as_json(full_messages: true), 
                reason: "error!"}
        end
    end 


    def show
        user = User.find_by(id: params[:id])
        if user
            render json: user
        else 
            render json: {message: 'user not found'}
        end
    end 



    private

    def user_params
        #params.require(:user).permit(:username, :password)
        params.permit(:username, :password)
    end 

end
