class Api::UsersController < ApplicationController

    def new

    end

    def show
        @user = User.find_username(params[:username])
        if @user 
            render json: @user
        else 
            render json: ["Invalid credentials"], status: 422
        end
    end
    
    def create
        @user = User.new(user_params)

        if @user.save
            login!(@user)
            render "api/users/show"
        else
            
            render json: @user.errors.full_messages, status: 422
        end
    end

    private
    def user_params
        params.require(:user).permit(:email, :username, :password)
    end
end
