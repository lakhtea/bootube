json.extract! @comment, :id, :body, :video_id, :user_id, :parent_comment_id, :updated_at
json.extract! @comment.user, :username