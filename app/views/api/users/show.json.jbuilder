json.extract! @user, :id, :username, :email
json.avatarUrl url_for(@user.avatar)
