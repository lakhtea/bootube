json.extract! @comment, :id, :body, :video_id, :user_id, :parent_comment_id, :updated_at, :replies
json.extract! @comment.user, :username
json.likes @comment.likes.where(category: "Like").length
if @comment.user.avatar.attached?
    json.avatarUrl url_for(@comment.user.avatar)
end
if current_user
    json.like @comment.likes.where(user_id: current_user.id)
else
    json.like []
end