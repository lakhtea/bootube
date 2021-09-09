class Api::CommentsController < ApplicationController
    def index
        comments = Video.find_by(id: params[:video_id]).comments
        @comments = comments.select { |comment| comment.parent_comment_id == nil}
    end

    def child_comments
        @comments = Comment.find_by(id: params[:commentId]).replies
        render :index
    end

    def create
        @comment = Comment.new(comment_params)
        @comment.body = @comment.body.squish
        if @comment.save
            render "api/comments/show"
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def update
         @comment = Comment.find_by(id: params[:id])

        if @comment.update(comment_params)
            render :show
        end
    end

    def destroy
        @comment = Comment.find_by(id: params[:id])

        if @comment.delete
            render :show
        else
            render json: ["Comment could not be deleted"], status: 422
        end
    end

    private
    def comment_params 
        params.require(:comment).permit(:body, :video_id, :user_id, :parent_comment_id, :updated_at)
    end
end
