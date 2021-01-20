class Item < ApplicationRecord
  validates :code, presence: true
  validates :name, presence: true
  validates :vol, presence: true
end
