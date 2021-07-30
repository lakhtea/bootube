class Api::LikesController < ApplicationController
 
    def create
        if like_params[:likeable_type] == "Video"
            liked = Video.find_by(id: like_params[:likeable_id])
        elsif like_params[:likeable_type] == "Comment"
            liked = Comment.find_by(id: like_params[:likeable_id])
        end

        @like = liked.likes.new(like_params)

        if @like.save
            render :show
        else
            render json: @like.errors.full_messages, status: 422
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
