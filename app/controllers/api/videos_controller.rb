class Api::VideosController < ApplicationController
  def index
    @videos = Video.all
  end

  def show
    @video = Video.find_by(id: params[:id])
    
    @video.views += 1
    @video.save
  end

  def create
    if video_params[:vid] == "null"
      render json: ["No video was attached"], status: 422 
      return
    end
    @video = Video.new(video_params)
    if @video.save
      render "api/videos/show"
    else
      render json: @video.errors.full_messages, status: 422
    end
  end

  def search
    @videos = Video.all
  end

  def update 
    @video = Video.find_by(id: params[:id])

    if @video.update(video_params)
      render "api/videos/show"
    end
  end

  def destroy
    @video = Video.find_by(id: params[:id])
    if @video.delete
      render :destroy
    else
      render json: ["Video could not be deleted"], status: 422
    end
  end

  private
  def video_params 
    params.require(:video).permit(:title, :description, :vid, :uploader_id)
  end
end

#vid1.vid.attach(io: File.open("../videos/deadlift.mp4"), filename: "deadlift.mp4")