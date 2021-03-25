class Api::LikesController < ApplicationController
 
    def create
        @like = Like.new(user_id: current_user.id, likeable_id: params[:id], likeable_type: params[:type])

        if @like.save
        else
            render json: @like.errors.full_messages, status: 422
        end
    end

    def destroy 
        @like = Like.find_by(user_id: current_user.id, likeable_id: params[:id], likeable_type: params[:type])

        if @like.delete
        else
            render json: @like.errors.full_messages, status: 422
        end
    end
    
end
