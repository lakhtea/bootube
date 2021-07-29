json.extract! @video, :id, :title, :description, :uploader_id, :updated_at, :views
json.extract! @video.user, :username
json.likes @video.likes.where(category: "Like").length
json.dislikes @video.likes.where(category: "Dislike").length
json.like @video.likes.where(user_id: current_user.id)
json.videoUrl url_for(@video.vid)
