json.extract! @video, :id, :title, :description, :uploader_id, :updated_at
json.extract! @video.user, :username
