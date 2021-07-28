json.extract! @video, :id, :title, :description, :uploader_id, :updated_at, :views
json.extract! @video.user, :username
json.likes @video.likes.length
json.videoUrl url_for(@video.vid)
