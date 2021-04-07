# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do 
  User.delete_all

  user1 = User.create!(
    name: 'Guest',
    email: 'guest@guest.com',
    password: 'password'
  )

  user2 = User.create!(
    name: 'Admin',
    email: 'admin@admin.com',
    password: '123123'
  )
  
end