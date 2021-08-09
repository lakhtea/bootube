class Api::UsersController < ApplicationController
    def validation
        @user = User.find_username(params[:username])
        @user = User.find_by(email: params[:username]) unless @user
        if @user 
            render json: @user
        else 
            render json: ["User does not exist"], status: 422
        end
    end

    def no_username
        render json: ["Username cannot be blank"], status: 422
    end

    def show
        p params
        @user = User.find_by(id: params[:id])
    end

    def search
        @users = User.all
    end

    def liked_videos
        render "api/users/liked_videos"
    end

    def videos 
        @videos = User.find_by(id: params[:userId]).videos
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
