class Api::DislikesController < ApplicationController

    def create
        @dislike = Dislike.new(user_id: current_user.id, dis_id: params[:id], dis_type: params[:type])
        p params
        p @dislike

        if @dislike.save
        else
            render json: @dislike.errors.full_messages, status: 422
        end
    end

    def destroy 
        @dislike = Dislike.find_by(user_id: current_user.id, dis_id: params[:id], dis_type: params[:type])

        if @dislike.delete
        else
            render json: @dislike.errors.full_messages, status: 422
        end
    end
    
end
