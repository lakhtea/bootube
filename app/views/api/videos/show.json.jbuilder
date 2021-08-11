json.extract! @video, :id, :title, :description, :uploader_id, :created_at, :views
json.extract! @video.user, :username
json.avatarUrl url_for(@video.user.avatar)
json.likes @video.likes.where(category: "Like").length
json.dislikes @video.likes.where(category: "Dislike").length
if current_user
  json.like @video.likes.where(user_id: current_user.id)
end
json.videoUrl url_for(@video.vid)
