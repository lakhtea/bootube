@comments.each do |comment|
    json.set! comment.id do
        json.extract! comment, :id, :body, :video_id, :user_id, :parent_comment_id, :updated_at
        json.extract! comment.user, :username
        json.likes comment.likes.where(category: "Like").length
        if comment.user.avatar.attached?
            json.avatarUrl url_for(comment.user.avatar)
        end
        if current_user
            json.like comment.likes.where(user_id: current_user.id)
        else
            json.like []
        end
        replies = comment.replies
        json.replies replies.each do |reply|
            json.extract! reply, :id, :body, :video_id, :user_id, :parent_comment_id, :updated_at
            json.extract! reply.user, :username
            json.likes reply.likes.where(category: "Like").length
            if reply.user.avatar.attached?
                json.avatarUrl url_for(reply.user.avatar)
            end
            if current_user
                json.like reply.likes.where(user_id: current_user.id)
            else
                json.like []
            end
        end
    end
end