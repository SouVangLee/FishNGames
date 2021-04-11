# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

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
    name: 'Tommy',
    email: 'tommy@tommy.com',
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

  Product.delete_all
  product_1 = Product.create!(
    name: 'Ultra-Light Trout Rod',
    price: 40.00,
    quantity: 5,
    description: ("This Ultra-Light fishing rod is great for catching trout!
    It is 7 feet long and can handle any line weight from 1-4lb Test. It can handle
    lure weights of 1/64 - 1/16oz. This fishing rod is great for beginners."
    ),
    category_id: 1
  )

  fishing1 = open('https://fish-n-games-seeds.s3-us-west-1.amazonaws.com/fishing_1.jpg')
  fishing2 = open('https://fish-n-games-seeds.s3-us-west-1.amazonaws.com/fishing_2.jpg')

  product_1.photos.attach(io: fishing1, filename: 'fishing_1.jpg')
  product_1.photos.attach(io: fishing2, filename: 'fishing_2.jpg')

  product_2 = Product.create!(
    name: 'Fly-fishing Trout Rod',
    price: 50.00,
    quantity: 5,
    description: 'Are regular fishing rods too easy? Need a challenge? Learn how to fly fish!',
    category_id: 1
  )

  product_3 = Product.create!(
    name: 'Little Boat',
    price: 5000,
    quantity: 1,
    description: 'Tired of not catching any fish? Need a little help covering water distance? Get this little boat!',
    category_id: 2
  )

  product_4 = Product.create!(
    name: 'Big Boat',
    price: 10000,
    quantity: 1,
    description: 'Are the waves too big? Need a bigger boat? Buy one today!',
    category_id: 2
  )

  product_5 = Product.create!(
    name: 'Glock',
    price: 500,
    quantity: 1,
    description: 'Planning on going to the shooting range but you need a gun? Get a glock.',
    category_id: 3
  )

  product_6 = Product.create!(
    name: 'Bullets for Glock',
    price: 100,
    quantity: 50,
    description: "You're gonna need some ammo for that Glock.",
    category_id: 3
  )

  product_7 = Product.create!(
    name: 'Turkey Decoy',
    price: 99.99,
    quantity: 7,
    description: 'Lifelike look turkey. Great for calling other turkeys neaby.',
    category_id: 4
  )

  product_8 = Product.create!(
    name: 'Compound Bow',
    price: 400,
    quantity: 3,
    description: 'Easy to handle bow that has a lot of power. Great for hunting and easy to use',
    category_id: 4
  )

  product_9 = Product.create!(
    name: '2-Person Tent',
    price: 80.00,
    quantity: 2,
    description: 'Light-weight backpack tent. Easy to carry during camping trips.',
    category_id: 5
  )

  product_10 = Product.create!(
    name: 'LED headlamps',
    price: 30.00,
    quantity: 13,
    description: '300-lumen beam headlamp. Very bright and easy to charge.',
    category_id: 5
  )

  product_11 = Product.create!(
    name: 'Canvas hooded jacket',
    price: 67.99,
    quantity: 8,
    description: 'Warm and comfortable jacket',
    category_id: 6
  )

  product_12 = Product.create!(
    name: 'Padded Turkey Vest',
    price: 85.99,
    quantity: 11,
    description: 'Camouflage yourself in the bushes while hunting. Has many pockets to carry many things.',
    category_id: 6
  )

  product_13 = Product.create!(
    name: 'Light-weight fishing shoe ',
    price: 95.00,
    quantity: 2,
    description: 'Water-proof shoe that is great for hiking, walking, and fishing. Very sturdy and comfortable.',
    category_id: 7
  )

  product_14 = Product.create!(
    name: 'Hunter boots',
    price: 125.00,
    quantity: 3,
    description: ('Hunter boots great for walking through rugged terrain. 
    They have thick soles and are comfortable.'),
    category_id: 7
  )
end