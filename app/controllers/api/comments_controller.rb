class Api::CommentsController < ApplicationController
    def index
        @comments = Video.find_by(id: params[:video_id]).comments
    end

    def create
        @comment = Comment.new(comment_params)

        if @comment.save
            render "api/comments/show"
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def show
        
    end

    def destroy
        @comment = Comment.find_by(id: params[:id])

        if @comment.delete
        else
        render json: ["Comment could not be deleted"], status: 422
        end
    end

    private
    def comment_params 
        params.require(:comment).permit(:body, :video_id, :user_id, :parent_comment_id, :updated_at)
    end
end
