# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(username: 'donna', password: 'josie')
User.create(username: 'mary', password: 'jo')

Character.create(description: 'wolf', image: 'https://publicdomainvectors.org/photos/Loup-cartoon.png')
Character.create(description: 'penguin', image: 'https://publicdomainvectors.org/photos/Wild-penguin.png')
Character.create(description: 'octopus', image: 'https://publicdomainvectors.org/photos/oct-.png')
Character.create(description: 'cow', image: 'https://publicdomainvectors.org/photos/Comic-Cow-Character.png')
Character.create(description: 'donkey', image: 'https://publicdomainvectors.org/photos/smilingdonkey.png')
Character.create(description: 'panda', image: 'https://publicdomainvectors.org/photos/Cute-Cartoon-Panda.png')