class User < ApplicationRecord
    validates :username, :email, presence: true, uniqueness: true
    validates :password_digest, presence: true
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP } 
    validates :password, length: { minimum: 6 }, allow_nil: true
    validates :username, length: { maximum: 16 }

    before_validation :ensure_session_token

    attr_reader :password

    has_many :videos, foreign_key: :uploader_id, dependent: :destroy
    has_many :comments, dependent: :destroy
    has_many :likes

    has_many :liked_videos, through: :likes, source: :likeable, source_type: "Video"
    has_many :liked_comments, through: :likes, source: :likeable, source_type: "Comment"

    def self.find_username(username)
        user = User.find_by(username: username)
        if user 
            return { username: user.username, email: user.email }
        else
            return nil
        end
    end

    def self.find_by_credentials(credential, password) 
        user = User.find_by(username: credential)
        user = User.find_by(email: credential) unless user

        if user && user.is_password?(password)
            return user
        else
            return nil
        end
    end

    def self.generate_session_token
        SecureRandom.urlsafe_base64(16)
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        obj = BCrypt::Password.new(self.password_digest)
        obj.is_password?(password)
    end

    def reset_session_token!
        self.session_token = User.generate_session_token
        self.save!
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= User.generate_session_token
    end
end

#controller
#components
#demo login