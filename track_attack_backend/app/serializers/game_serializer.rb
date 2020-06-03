class GameSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :user, :selections, :characters
end
