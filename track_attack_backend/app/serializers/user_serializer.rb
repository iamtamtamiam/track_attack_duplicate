class UserSerializer
  include FastJsonapi::ObjectSerializer
  #has_many :games
  attributes :username, :created_at, :games
end
