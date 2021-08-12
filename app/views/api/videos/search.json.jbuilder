json.array! @videos.each do |video|
    if video.title.downcase.include?(params[:queryString].downcase)
        json.extract! video, :id, :title, :description, :uploader_id, :created_at, :views
        json.extract! video.user, :username
        json.videoUrl url_for(video.vid)
        if video.user.avatar.attached?
            json.avatarUrl url_for(video.user.avatar)
        end
    end
end