json.array! @videos.each do |video|
    json.extract! video, :id, :title, :description, :uploader_id, :created_at, :views
    json.extract! video.user, :username
    json.videoUrl url_for(video.vid)
end