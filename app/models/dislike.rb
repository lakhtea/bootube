class Dislike < ApplicationRecord
    validates :user_id,  uniqueness: { scope: [:dislikeable_id, :dislikeable_type] }

    belongs_to :dislikeable, polymorphic: true
    belongs_to :user
end
