json.array! @videos.each do |video|
    json.extract! video, :id, :title, :description, :uploader_id
    json.videoUrl url_for(video.vid)
end