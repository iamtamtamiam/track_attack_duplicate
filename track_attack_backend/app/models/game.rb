class Game < ApplicationRecord
  belongs_to :user
  has_many :selections, dependent: :destroy
  has_many :characters, through: :selections, dependent: :destroy

  validates :name, presence: true
end
