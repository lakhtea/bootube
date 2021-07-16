class Dislike < ApplicationRecord
    validates :user_id,  uniqueness: { scope: [:dis_id, :dis_type] }

    belongs_to :dis, polymorphic: true
    belongs_to :user
end
