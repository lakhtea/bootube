json.array! @users.each do |user|
    if user.username.downcase.include?(params[:queryString].downcase)
        json.extract! user, :id, :username

        if user.avatar.attached?
            json.avatarUrl url_for(user.avatar)
        end
    end
end