validates :subscriber_id, :subscribee_id, presence: true

add_index :subscriptions , [:subscribee_id, :subscriber_id], unique: true