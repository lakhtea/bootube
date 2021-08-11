class Comment < ApplicationRecord
    validates :video_id, :user_id, :body, presence: true

    belongs_to :video
    belongs_to :user
    belongs_to :parent_comment, class_name: :Comment, optional: true
    has_many :likes, as: :likeable, dependent: :destroy
    has_many :dislikes, as: :dis, dependent: :destroy
    has_many :replies, class_name: :Comment, foreign_key: :parent_comment_id, dependent: :destroy
end
