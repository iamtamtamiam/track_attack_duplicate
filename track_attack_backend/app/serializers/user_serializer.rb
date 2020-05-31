class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :username, :created_at
end
