class Game < ApplicationRecord
  belongs_to :user
  has_many :selections
  has_many :characters, through: :selections

  validates :name, presence: true
end
