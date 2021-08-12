json.extract! @user, :id, :username, :email
if @user.avatar.attached?
  json.avatarUrl url_for(@user.avatar)
end
