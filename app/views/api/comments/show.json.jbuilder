json.extract! @comment, :id, :body, :video_id, :user_id, :parent_comment_id, :updated_at
json.extract! @comment.user, :username
if @comment.user.avatar.attached?
  json.avatarUrl url_for(@comment.user.avatar)
end
