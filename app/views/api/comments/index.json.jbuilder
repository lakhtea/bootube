@comments.each do |comment|
    json.set! comment.id do
        json.extract! comment, :id, :body, :video_id, :user_id, :parent_comment_id, :updated_at, :replies
        json.extract! comment.user, :username
        if comment.user.avatar.attached?
            json.avatarUrl url_for(comment.user.avatar)
        end
    end
end