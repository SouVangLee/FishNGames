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
    name: 'SuperAdmin',
    email: 'superadmin@superadmin.com',
    password: '123123'
    )
  
  user2 = User.create!(
    name: 'Admin',
    email: 'admin@admin.com',
    password: '123123'
    )
    
  user3 = User.create!(
    name: 'Guest',
    email: 'guest@guest.com',
    password: 'password'
  )

  user4 = User.create!(
    name: 'Tommy,'
    email: 'tommy@tommy.com'
    password: '123123'
  )

  Category.delete_all

  fishing_category = Category.create!(name: 'Fishing')

  boating_category = Category.create!(name: 'Boating')

  shooting_category = Category.create!(name: 'Shooting')

  hunting_category = Category.create!(name: 'Hunting')

  camping_category = Category.create!(name: 'Camping')

  clothing_category = Category.create!(name: 'Clothing')

  footwear_category = Category.create!(name: 'Footwear')
  
end