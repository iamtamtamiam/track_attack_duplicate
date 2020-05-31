class Character < ApplicationRecord
    has_many :selections
    has_many :games, through: :selections
end
