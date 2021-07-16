class Video < ApplicationRecord
    validates :title, :uploader_id, :description, presence: true

    belongs_to :user, foreign_key: :uploader_id
    has_many :comments, dependent: :destroy
    has_many :likes, as: :likeable
    has_many :dislikes, as: :dis

    has_one_attached :vid
    has_one_attached :thumb
    has_one_attached :gif
end
