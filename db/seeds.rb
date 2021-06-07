# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

ActiveRecord::Base.transaction do
  User.destroy_all
  Category.destroy_all
  Product.destroy_all

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

  fishing_category = Category.create!(name: 'fishing') #id: 1
  boating_category = Category.create!(name: 'boating') #id: 2
  shooting_category = Category.create!(name: 'shooting') #id: 3
  hunting_category = Category.create!(name: 'hunting') #id: 4
  camping_category = Category.create!(name: 'camping') #id: 5
  clothing_category = Category.create!(name: 'clothing') #id: 6
  footwear_category = Category.create!(name: 'footwear') #id: 7

  category_fishing = open('https://fish-n-games-seeds.s3-us-west-1.amazonaws.com/categories/category_fishing.jpg')
  fishing_category.photos.attach(io: category_fishing, filename: 'category_fishing.jpg')

  category_boating = open('https://fish-n-games-seeds.s3-us-west-1.amazonaws.com/categories/category_boating.jpg')
  boating_category.photos.attach(io: category_boating, filename: 'category_boating.jpg')

  category_camping = open('https://fish-n-games-seeds.s3-us-west-1.amazonaws.com/categories/category_camping.jpg')
  camping_category.photos.attach(io: category_camping, filename: 'category_camping.jpg')

  category_clothing = open('https://fish-n-games-seeds.s3-us-west-1.amazonaws.com/categories/category_clothing.jpg')
  clothing_category.photos.attach(io: category_clothing, filename: 'category_clothing.jpg')

  category_hunting = open('https://fish-n-games-seeds.s3-us-west-1.amazonaws.com/categories/category_hunting.jpg')
  hunting_category.photos.attach(io: category_hunting, filename: 'category_hunting.jpg')

  #FISHING
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
  fishing_1_2 = open('https://fish-n-games-seeds.s3-us-west-1.amazonaws.com/fishing/fishing_1_2.jpg')
  product_1.photos.attach(io: fishing_1_1, filename: 'fishing_1.jpg')
  product_1.photos.attach(io: fishing_1_2, filename: 'fishing_1_2.jpg')

  product_2 = Product.create!(
    name: 'Fly-fishing Trout Rod',
    price: 50.00,
    quantity: 5,
    description: ('Affordable, entry level fly fishing rod great for fishing in small streams and rivers. It
    is 9 feet long with a size 5 weight.'),
    category_id: 1
  )
  fishing_2_1 = open('https://fish-n-games-seeds.s3-us-west-1.amazonaws.com/fishing/fishing_2_1.jpg')
  fishing_2_2 = open('https://fish-n-games-seeds.s3-us-west-1.amazonaws.com/fishing/fishing_2_2.jpg')
  product_2.photos.attach(io: fishing_2_1, filename: 'fishing_2_1.jpg')
  product_2.photos.attach(io: fishing_2_2, filename: 'fishing_2_2.jpg')


  fishing_product_3 = Product.create!(
    name: 'Swimming Fish Lure',
    price: 9.99,
    quantity: 50,
    description: 'A 6 inch side-to-side, swimming action lure that mimicks how minnows swim! It has a weight of 1oz.',
    category_id: 1
  )
  fishing_3_1 = open('https://fish-n-games-seeds.s3-us-west-1.amazonaws.com/fishing/fishing_3.jpg')
  fishing_product_3.photos.attach(io: fishing_3_1, filename:'fishing_3.jpg')


  fishing_product_4 = Product.create!(
    name: 'Green Pumpkin Senko',
    price: 3.99,
    quantity: 100,
    description: 'A 6 inch plastic worm-like bait that is great for targeting largemouth and smallmouth bass.',
    category_id: 1
  )
  fishing_4_1 = open('https://fish-n-games-seeds.s3-us-west-1.amazonaws.com/fishing/fishing_4_1.jpg')
  fishing_product_4.photos.attach(io: fishing_4_1, filename:'fishing_4_1.jpg')
  
  fishing_product_5 = Product.create!(
    name: 'Red Bobber',
    price: 1.99,
    quantity: 13,
    description: 'A 1-inch diameter red bobber that helps indicate when a fish has striked your bait.',
    category_id: 1
  )
  fishing_5_1 = open('https://fish-n-games-seeds.s3-us-west-1.amazonaws.com/fishing/fishing_5_1.jpg')
  fishing_5_2 = open('https://fish-n-games-seeds.s3-us-west-1.amazonaws.com/fishing/fishing_5_2.jpg')
  fishing_product_5.photos.attach(io: fishing_5_1, filename: 'fishing_5_1.jpg')
  fishing_product_5.photos.attach(io: fishing_5_2, filename: 'fishing_5_2.jpg')

  fishing_product_6 = Product.create!(
    name: 'Mini Mackeral Lure',
    price: 11.99,
    quantity: 20,
    description: 'A 5-inch swimming lure that has the pattern of a mackeral. It is great for fishing in the surf.',
    category_id: 1
  )
  fishing_6_1 = open('https://fish-n-games-seeds.s3-us-west-1.amazonaws.com/fishing/fishing_6_1.jpg')
  fishing_product_6.photos.attach(io: fishing_6_1, filename: 'fishing_6_1.jpg')
 
  fishing_product_7 = Product.create!(
    name: 'Yellow-Orange Mini Spinner',
    price: 3.87,
    quantity: 18,
    description: 'A 1/8-oz mini spinner that is great for river trout fishing on fly fishing rods.',
    category_id: 1
  )
  fishing_7_1 = open('https://fish-n-games-seeds.s3-us-west-1.amazonaws.com/fishing/fishing_7_1.jpg')
  fishing_product_7.photos.attach(io: fishing_7_1, filename: 'fishing_7_1.jpg')

  fishing_product_8 = Product.create!(
    name: 'Black and Copper Vertical Jig',
    price: 15.75,
    quantity: 64,
    description: 'A 3-oz vertical jig that is great for deep waters in the ocean. It is great for targeting rockfish and lingcod.',
    category_id: 1
  )
  fishing_8_1 = open('https://fish-n-games-seeds.s3-us-west-1.amazonaws.com/fishing/fishing_8_1.jpg')
  fishing_product_8.photos.attach(io: fishing_8_1, filename: 'fishing_8_1.jpg')

  fishing_product_9 = Product.create!(
    name: 'Yellow-Black Mini Spinner',
    price: 4.57,
    quantity: 20,
    description: 'A yellow-black 1/8-oz mini spinner with a gold platted spoon. It is great for targeting river trout.',
    category_id: 1
  )
  fishing_9_1 = open('https://fish-n-games-seeds.s3-us-west-1.amazonaws.com/fishing/fishing_9_1.jpg')
  fishing_product_9.photos.attach(io: fishing_9_1, filename: 'fishing_9_1.jpg')

  fishing_product_10 = Product.create!(
    name: 'White and Yellow Spinner Bait',
    price: 6.67,
    quantity: 100,
    description: 'A white and yellow 1/4 oz spinner bait. It is great for targeting largemouth and smallmouth bass.',
    category_id: 1
  )
  fishing_10_1 = open('https://fish-n-games-seeds.s3-us-west-1.amazonaws.com/fishing/fishing_10_1.jpg')
  fishing_product_10.photos.attach(io: fishing_10_1, filename: 'fishing_10_1.jpg')

  fishing_product_11 = Product.create!(
    name: 'BlueGill Pattern Hard Crankbait',
    price: 8.97,
    quantity: 101,
    description: 'A 1 oz BlueGill pattern, hard crankbait. It creates a lot of noise and ripples in the water, causing aggressive bass and catfish to target it.',
    category_id: 1
  )
  fishing_11_1 = open('https://fish-n-games-seeds.s3-us-west-1.amazonaws.com/fishing/fishing_11_1.jpg')
  fishing_product_11.photos.attach(io: fishing_11_1, filename: 'fishing_11_1.jpg')

  fishing_product_12 = Product.create!(
    name: 'Orange-Black Swimmer Bait',
    price: 5.89,
    quantity: 123,
    description: 'A 1/4 oz orange-black swimmer bait. It has a great tail action that will attract aggressive fish.',
    category_id: 1
  )
  fishing_12_1 = open('https://fish-n-games-seeds.s3-us-west-1.amazonaws.com/fishing/fishing_12_1.jpg')
  fishing_product_12.photos.attach(io: fishing_12_1, filename: 'fishing_12_1.jpg')

  #BOATING

  product_3 = Product.create!(
    name: 'Little Boat',
    price: 5000,
    quantity: 1,
    description: 'A beautiful 16 foot boat that can cover water in lakes and reservoirs.',
    category_id: 2
  )
  boating_1_1 = open('https://fish-n-games-seeds.s3-us-west-1.amazonaws.com/boating/boating_1_1.jpg')
  product_3.photos.attach(io: boating_1_1, filename: 'boating_1_1.jpg')

  product_4 = Product.create!(
    name: 'Blue Kayak',
    price: 2000,
    quantity: 1,
    description: 'A 14 foot, well-balanced kayak that is great for kayak fishing.',
    category_id: 2
  )
  boating_2_1 = open('https://fish-n-games-seeds.s3-us-west-1.amazonaws.com/boating/boating_2_1.jpg')
  product_4.photos.attach(io: boating_2_1, filename: 'boating_2_1.jpg')

  boating_product_3 = Product.create!(
    name: 'Big Boat',
    price: 10000,
    quantity: 1,
    description: 'A 20 foot boat that is great for ocean fishing.',
    category_id: 2
  )
  boating_3_1 = open('https://fish-n-games-seeds.s3-us-west-1.amazonaws.com/boating/boating_3_1.jpg')
  boating_product_3.photos.attach(io: boating_3_1, filename: 'boating_3_1.jpg')

  boating_product_4 = Product.create!(
    name: 'Orange Life Jacket',
    price: 30.00,
    quantity: 77,
    description: 'An adult size, orange life jacket.',
    category_id: 2
  )
  boating_4_1 = open('https://fish-n-games-seeds.s3-us-west-1.amazonaws.com/boating/boating_4_1.jpg')
  boating_product_4.photos.attach(io: boating_4_1, filename: 'boating_4_1.jpg')

  boating_product_5 = Product.create!(
    name: 'Blue Synthetic Paddle',
    price: 25.78,
    quantity: 96,
    description: 'A blue, synthetic paddle used for kayaking.',
    category_id: 2
  )
  boating_5_1 = open('https://fish-n-games-seeds.s3-us-west-1.amazonaws.com/boating/boating_5_1.jpg')
  boating_product_5.photos.attach(io: boating_5_1, filename: 'boating_5_1.jpg')

  boating_product_6 = Product.create!(
    name: 'White Boat Fender',
    price: 45.54,
    quantity: 102,
    description: 'A white boat fender used to protect boats from being hit by surrounding objects.',
    category_id: 2
  )
  boating_6_1 = open('https://fish-n-games-seeds.s3-us-west-1.amazonaws.com/boating/boating_6_1.jpg')
  boating_product_6.photos.attach(io: boating_6_1, filename: 'boating_6_1.jpg')

  boating_product_7 = Product.create!(
    name: 'Triple Black Propeller',
    price: 65.23,
    quantity: 123,
    description: 'A Triple black propeller for small boats.',
    category_id: 2
  )
  boating_7_1 = open('https://fish-n-games-seeds.s3-us-west-1.amazonaws.com/boating/boating_7_1.jpg')
  boating_product_7.photos.attach(io: boating_7_1, filename: 'boating_7_1.jpg')

  boating_product_8 = Product.create!(
    name: 'Lowrance Fish Finder',
    price: 235.31,
    quantity: 123,
    description: 'A Lowrance fish finder that shows three different maps of the current area and location.',
    category_id: 2
  )
  boating_8_1 = open('https://fish-n-games-seeds.s3-us-west-1.amazonaws.com/boating/boating_8_1.jpg')
  boating_product_8.photos.attach(io: boating_8_1, filename: 'boating_8_1.jpg')

  boating_product_9 = Product.create!(
    name: '10 Pound Silver Anchor',
    price: 79.32,
    quantity: 123,
    description: 'A 10 Pound Silver Anchor for small kayaks and boats.',
    category_id: 2
  )
  boating_9_1 = open('https://fish-n-games-seeds.s3-us-west-1.amazonaws.com/boating/boating_9_1.jpg')
  boating_product_9.photos.attach(io: boating_9_1, filename: 'boating_9_1.jpg')

  #SHOOTING

  product_5 = Product.create!(
    name: 'Glock',
    price: 500,
    quantity: 1,
    description: '9mm Glock, with the signature "Safe Action" trigger system. It has the capacity of 17 rounds in the standard magazine.',
    category_id: 3
  )
  shooting_1_1 = open('https://fish-n-games-seeds.s3-us-west-1.amazonaws.com/boating/shooting_1_1.jpg')
  product_5.photos.attach(io: shooting_1_1, filename: 'shooting_1_1.jpg')

  product_6 = Product.create!(
    name: 'AR 15',
    price: 2500,
    quantity: 2,
    description: "STNGR AR-15 Free Float Handguard HWK",
    category_id: 3
  )
  shooting_2_1 = open('https://fish-n-games-seeds.s3-us-west-1.amazonaws.com/shooting/shooting_2_1.jpg')
  product_6.photos.attach(io: shooting_2_1, filename: 'shooting_2_1.jpg')

  
  shooting_product_3 = Product.create!(
    name: '9mm Ammo',
    price: 500,
    quantity: 200,
    description: '500 Blank 9mm ammo with a boxer-primed bass casing.',
    category_id: 3
  )
  shooting_3_1 = open('https://fish-n-games-seeds.s3-us-west-1.amazonaws.com/shooting/shooting_3_1.jpg')
  shooting_product_3.photos.attach(io: shooting_3_1, filename: 'shooting_3_1.jpg')

  shooting_product_4 = Product.create!(
    name: 'Paper target',
    price: 10,
    quantity: 200,
    description: 'B-27S Standard Paper targets for the shooting range.',
    category_id: 3
  )
  shooting_4_1 = open('https://fish-n-games-seeds.s3-us-west-1.amazonaws.com/shooting/shooting_4_1.jpg')
  shooting_product_4.photos.attach(io: shooting_4_1, filename: 'shooting_4_1.jpg')

  shooting_product_5 = Product.create!(
    name: 'Slim Shooter Electronic Ear Muffs',
    price: 65.31,
    quantity: 200,
    description: 'Well-built ear muffs for the shooting range to reduce noise cancellation.',
    category_id: 3
  )
  shooting_5_1 = open('https://fish-n-games-seeds.s3-us-west-1.amazonaws.com/shooting/shooting_5_1.jpg')
  shooting_product_5.photos.attach(io: shooting_5_1, filename: 'shooting_5_1.jpg')

  shooting_product_6 = Product.create!(
    name: 'Black Gun Holster',
    price: 36.31,
    quantity: 200,
    description: 'A black gun holster that uses quick-draw, safety locking mechanism.',
    category_id: 3
  )
  shooting_6_1 = open('https://fish-n-games-seeds.s3-us-west-1.amazonaws.com/shooting/shooting_6_1.jpg')
  shooting_product_6.photos.attach(io: shooting_6_1, filename: 'shooting_6_1.jpg')

  #HUNTING

  product_7 = Product.create!(
    name: 'Hunting Rifle',
    price: 489.23,
    quantity: 7,
    description: 'A great hunting rifle.',
    category_id: 4
  )
  hunting_1_1 = open('https://fish-n-games-seeds.s3-us-west-1.amazonaws.com/hunting/hunting_1_1.jpg')
  product_7.photos.attach(io: hunting_1_1, filename: 'hunting_1_1.jpg')

  product_8 = Product.create!(
    name: 'Binoculars',
    price: 93.43,
    quantity: 3,
    description: 'Great Binoculars that let you see 3-5x range.',
    category_id: 4
  )
  hunting_2_1 = open('https://fish-n-games-seeds.s3-us-west-1.amazonaws.com/hunting/hunting_2_1.jpg')
  product_8.photos.attach(io: hunting_2_1, filename: 'hunting_2_1.jpg')

  hunting_product_3 = Product.create!(
    name: 'Compound Bow',
    price: 125.43,
    quantity: 3,
    description: 'A powerful compound bow that is great for hunting small game.',
    category_id: 4
  )
  hunting_3_1 = open('https://fish-n-games-seeds.s3-us-west-1.amazonaws.com/hunting/hunting_3_1.jpg')
  hunting_product_3.photos.attach(io: hunting_3_1, filename: 'hunting_3_1.jpg')

  hunting_product_4 = Product.create!(
    name: 'Turkey Decoy',
    price: 42.67,
    quantity: 3,
    description: 'A turkey decoy used to attract other nearby turkeys.',
    category_id: 4
  )
  hunting_4_1 = open('https://fish-n-games-seeds.s3-us-west-1.amazonaws.com/hunting/hunting_4_1.jpg')
  hunting_product_4.photos.attach(io: hunting_4_1, filename: 'hunting_4_1.jpg')

  hunting_product_5 = Product.create!(
    name: 'Multi-tool kit',
    price: 52.67,
    quantity: 3,
    description: 'A multi-tool kit with very sharp and defined tools.',
    category_id: 4
  )
  hunting_5_1 = open('https://fish-n-games-seeds.s3-us-west-1.amazonaws.com/hunting/hunting_5_1.jpg')
  hunting_product_5.photos.attach(io: hunting_5_1, filename: 'hunting_5_1.jpg')

  hunting_product_6 = Product.create!(
    name: 'Black Deer Caller',
    price: 26.67,
    quantity: 3,
    description: 'A black deer caller that imatates mature and young buck calls.',
    category_id: 4
  )
  hunting_6_1 = open('https://fish-n-games-seeds.s3-us-west-1.amazonaws.com/hunting/hunting_6_1.jpg')
  hunting_product_6.photos.attach(io: hunting_6_1, filename: 'hunting_6_1.jpg')

  #CAMPING

  product_9 = Product.create!(
    name: '2-Person Tent',
    price: 80.00,
    quantity: 2,
    description: 'Light-weight backpack tent. Easy to carry during camping trips.',
    category_id: 5
  )
  camping_1_1 = open('https://fish-n-games-seeds.s3-us-west-1.amazonaws.com/camping/camping_1_1.jpg')
  product_9.photos.attach(io: camping_1_1, filename: 'camping_1_1.jpg')



  product_10 = Product.create!(
    name: 'LED headlamps',
    price: 30.00,
    quantity: 13,
    description: '300-lumen beam headlamp. Very bright and easy to charge.',
    category_id: 5
  )

  camping_2_1 = open('https://fish-n-games-seeds.s3-us-west-1.amazonaws.com/camping/camping_2_1.jpg')
  product_10.photos.attach(io: camping_2_1, filename: 'camping_2_1.jpg')

  camping_product_3 = Product.create!(
    name: 'Portable Mini Camping Stove',
    price: 15.99,
    quantity: 8,
    description: 'Portable mini camping stove great for taking on camping trips.',
    category_id: 5
  )

  camping_3_1 = open('https://fish-n-games-seeds.s3-us-west-1.amazonaws.com/camping/camping_3_1.jpg')
  camping_product_3.photos.attach(io: camping_3_1, filename: 'camping_3_1.jpg')

  camping_product_4 = Product.create!(
    name: 'Blue Comfort Sleeping Bag',
    price: 20.99,
    quantity: 8,
    description: 'A big blue, comfortable, sleeping bag.',
    category_id: 5
  )

  camping_4_1 = open('https://fish-n-games-seeds.s3-us-west-1.amazonaws.com/camping/camping_4_1.jpg')
  camping_product_4.photos.attach(io: camping_4_1, filename: 'camping_4_1.jpg')
  
  camping_product_5 = Product.create!(
    name: '8 Person Tent',
    price: 89.99,
    quantity: 5,
    description: 'A big tent that can fit up to 8 people.',
    category_id: 5
  )

  camping_5_1 = open('https://fish-n-games-seeds.s3-us-west-1.amazonaws.com/camping/camping_5_1.jpg')
  camping_product_5.photos.attach(io: camping_5_1, filename: 'camping_5_1.jpg')


  product_11 = Product.create!(
    name: 'Comfortable Jacket',
    price: 67.99,
    quantity: 8,
    description: 'Warm and comfortable jacket',
    category_id: 6
  )

  clothing_1_1 = open('https://fish-n-games-seeds.s3-us-west-1.amazonaws.com/clothing/clothing_1_1.jpg')
  product_11.photos.attach(io: clothing_1_1, filename: 'clothing_1_1.jpg')
  

  product_12 = Product.create!(
    name: 'Camo Hunting Pants',
    price: 85.99,
    quantity: 11,
    description: 'Camouflage yourself in the bushes while hunting.',
    category_id: 6
  )

  clothing_2_1 = open('https://fish-n-games-seeds.s3-us-west-1.amazonaws.com/clothing/clothing_2_1.jpg')
  product_12.photos.attach(io: clothing_2_1, filename: 'clothing_1_1.jpg')

  product_14 = Product.create!(
    name: 'Light-weight fishing shoe ',
    price: 95.00,
    quantity: 2,
    description: 'Water-proof shoe that is great for hiking, walking, and fishing. Very sturdy and comfortable.',
    category_id: 7
  )

  footwear_2_1 = open('https://fish-n-games-seeds.s3-us-west-1.amazonaws.com/footwear/footwear_2_1.jpg')
  product_14.photos.attach(io: footwear_2_1, filename: 'footwear_2_1.jpg')

  product_13 = Product.create!(
    name: 'Hunter boots',
    price: 125.00,
    quantity: 3,
    description: ('Hunter boots great for walking through rugged terrain. 
    They have thick soles and are comfortable.'),
    category_id: 7
  )

  footwear_1_1 = open('https://fish-n-games-seeds.s3-us-west-1.amazonaws.com/footwear/footwear_1_1.jpg')
  product_13.photos.attach(io: footwear_1_1, filename: 'footwear_1_1.jpg')

  Review.destroy_all
  review_1 = Review.create!(reviewer_id: 4, product_id: 1, rating: 5, header: "best product ever!", comment: "So easy to use!")
  review_2 = Review.create!(reviewer_id: 3, product_id: 2, rating: 5, header: "I wish I found out sooner!", comment: "This is a great product!")
  review_3 = Review.create!(reviewer_id: 4, product_id: 24, rating: 5, header: "Super easy to use!", comment: "This is nice.")


end