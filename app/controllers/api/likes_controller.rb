class Api::LikesController < ApplicationController
 
    def create
        if like_params[:likeable_type] == "Video"
            liked = Video.find_by(id: like_params[:likeable_id])
        elsif like_params[:likeable_type] == "Comment"
            liked = Comment.find_by(id: like_params[:likeable_id])
        end

        p like_params

        if liked.likes.create(like_params)
        else
            render json: @like.errors.full_messages, status: 422
        end
    end

    def index
        @like = Like.find_by(user_id: current_user.id)

        if @like
            render json: {liked: true, id: @like.id}
        else
            render json: "false"
        end
    end

    def destroy 
        @like = Like.find_by(id: params[:id])

        if @like.delete
        else
            render json: @like.errors.full_messages, status: 422
        end
    end

    private

    def like_params
        params.require(:like).permit(:user_id, :likeable_id, :likeable_type, :category)
    end
    
end
