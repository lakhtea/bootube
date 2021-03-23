class Api::VideosController < ApplicationController
  def index
    @videos = Video.all
  end

  def show
    @video = Video.find_by(id: params[:id])
  end

  def create
    @video = Video.new(video_params)

    if @video.save
      render "api/videos/show"
    else
      render json: @video.errors.full_messages, status: 422
    end
  end

  def patch
  end

  def delete
    @video = Video.find_by(id: params[:id])
    if @video.delete
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