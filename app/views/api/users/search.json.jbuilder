json.array! @users.each do |user|
    if user.username.downcase.include?(params[:queryString].downcase)
        json.extract! user, :id, :username
    end
end