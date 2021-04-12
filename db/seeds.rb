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

  fishing_1_1 = open('https://fish-n-games-seeds.s3-us-west-1.amazonaws.com/fishing/fishing_1.jpg')
  fishing_1_2 = open('https://fish-n-games-seeds.s3-us-west-1.amazonaws.com/fishing/fishing_2.jpg')
  product_1.photos.attach(io: fishing_1_1, filename: 'fishing_1.jpg')
  product_1.photos.attach(io: fishing_1_2, filename: 'fishing_2.jpg')

  product_2 = Product.create!(
    name: 'Fly-fishing Trout Rod',
    price: 50.00,
    quantity: 5,
    description: 'Are regular fishing rods too easy? Need a challenge? Learn how to fly fish!',
    category_id: 1
  )

  fishing_2_1 = open('https://fish-n-games-seeds.s3-us-west-1.amazonaws.com/fishing/fishing_2_1.jpg')
  fishing_2_2 = open('https://fish-n-games-seeds.s3-us-west-1.amazonaws.com/fishing/fishing_2_2.jpg')
  product_2.photos.attach(io: fishing_2_1, filename: 'fishing_2_1.jpg')
  product_2.photos.attach(io: fishing_2_1, filename: 'fishing_2_1.jpg')

  # fishing_product_3 = Product.create!(
  #   name: 'Swimming Fish Lure',
  #   price: 9.99,
  #   quantity: 50,
  #   description: 'A 6 inch swimming lure that mimicks how bait fish swim!',
  #   category_id: 1
  # )

  # fishing_3 = open('https://fish-n-games-seeds.s3-us-west-1.amazonaws.com/fishing/fishing_3.jpg')
  # fishing_product_3.photos.attach(io: fishing_3, filename: 'fishing_3.jpg')

  # fishing_product_4 = Product.create!(
  #   name: 'Green Pumpkin Senko',
  #   price: 3.99,
  #   quantity: 100,
  #   description: 'A plastic worm-like bait that is great for all fish.',
  #   category_id: 1
  # )

  # fishing_4_1 = open('https://fish-n-games-seeds.s3-us-west-1.amazonaws.com/fishing/fishing_4_1.jpg')
  # fishing_product_4.photos.attach(io: fishing_4_1, filename: 'fishing_4_1.jpg')

  # fishing_product_5 = Product.create!(
  #   name: 'Red Bobber',
  #   price: 1.99,
  #   quantity: 13,
  #   description: 'A red bobber that helps indicate when a fish has striked your bait.',
  #   category_id: 1
  # )

  # fishing_5_1 = open('https://fish-n-games-seeds.s3-us-west-1.amazonaws.com/fishing/fishing_5_1.jpg')
  # fishing_5_2 = open('https://fish-n-games-seeds.s3-us-west-1.amazonaws.com/fishing/fishing_5_2.jpg')
  # fishing_product_5.photos.attach(io: fishing_5_1, filename: 'fishing_5_1.jpg')
  # fishing_product_5.photos.attach(io: fishing_5_2, filename: 'fishing_5_2.jpg')

  # fishing_product_6 = Product.create!(
  #   name: 'Mini Mackeral',
  #   price: 11.99,
  #   quantity: 20,
  #   description: 'Small swimming lure that has the pattern of a mackeral.',
  #   category_id: 1
  # )

  # fishing_6_1 = open('https://fish-n-games-seeds.s3-us-west-1.amazonaws.com/fishing/fishing_6_1.jpg')
  # fishing_product_6.photos.attach(io: fishing_6_1, filename: 'fishing_6_1.jpg')
 
  # fishing_product_7 = Product.create!(
  #   name: 'Yellow-Orange Mini Spinner',
  #   price: 3.87,
  #   quantity: 18,
  #   description: 'A mini spinner that is great for river trout fishing on fly fishing rods.',
  #   category_id: 1
  # )
  
  # fishing_7_1 = open('https://fish-n-games-seeds.s3-us-west-1.amazonaws.com/fishing/fishing_7_1.jpg')
  # fishing_product_7.photos.attach(io: fishing_7_1, filename: 'fishing_7_1.jpg')

  # fishing_product_8 = Product.create!(
  #   name: 'Black and Copper Vertical Jig',
  #   price: 15.75,
  #   quantity: 64,
  #   description: 'A heavy vertical jig that is great for deep waters in the ocean.',
  #   category_id: 1
  # )

  # fishing_8_1 = open('https://fish-n-games-seeds.s3-us-west-1.amazonaws.com/fishing/fishing_8_1.jpg')
  # fishing_product_8.photos.attach(io: fishing_8_1, filename: 'fishing_8_1.jpg')


  #
  #
  #
  #

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