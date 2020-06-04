class CharacterSerializer
  include FastJsonapi::ObjectSerializer
  attributes :description, :image, :selections
end
