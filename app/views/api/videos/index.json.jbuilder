json.array! @videos.each do |video|
    json.extract! video, :title, :description
end