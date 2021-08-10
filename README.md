# README

[FishNGames Live!](https://fish-n-games.herokuapp.com/#/)

# Welcome to FishNGames!

&nbsp;

FishNGames is a clone website of BassProShop, where customers can purchase products that relate to outdoor recreation such as fishing, hunting, camping and hiking.

![splash_gif](https://media.giphy.com/media/wVDksAATNvwSjCfMHo/giphy.gif)


&nbsp;

## Features

&nbsp;

### User Authentication 

Clicking the sign-in button will open a modal on the right side of the screen. A user may sign in with his/her own account or use the demo to log in. A user must be logged in to write/edit/delete a review for a product, and add products to their shopping cart. 

![sign_in_gif](https://media.giphy.com/media/BYnnyW6KKTaSgZvZgm/giphy.gif)

&nbsp;

### Products

Clicking on a category will render all the products for that specific category. There is a filter on the left column to filter products by any price.

![category_gif](https://media.giphy.com/media/BgV9yDJ3B0NDJh2EbY/giphy.gif)

&nbsp;

Clicking on a product will open the product's show page. While on this page, users are able to add the product to their shopping cart and write/view
reviews.

![product_gif](https://media.giphy.com/media/kvIAtYHKnsEE3PQiBu/giphy.gif)

&nbsp;

### Reviews

Users will only be able to write a review if they are signed in. If they are not, the create review form will be hidden. Users can click "Edit" on their post to 
delete or update it.

![review_gif](https://media.giphy.com/media/S2tGoPPdzquise9OYs/giphy.gif)

&nbsp;

### Cart

After adding an item to their shopping cart, A user can choose to go view their shopping cart or continue shopping. When they are on the shopping cart page,
all of the items that the user added to cart will be displayed there. Users can also update the quantity by entering in a new quantity, which will update the
subtotal price and total price of all the items in the shopping cart.

![shopping_cart](https://media.giphy.com/media/fYVini63jN4lToS2bx/giphy.gif)

&nbsp;

## Code Snippets

Below is a code snippet of how the items in the cart will be updated and rendered if there is a change in quantity or if additional items are added.

```jsx
componentDidUpdate(prevProps) {
    if ((prevProps.cartItems.length !== this.props.cartItems.length)) {
      let totalCost = this.totalPrice(this.props.cartItems);
      this.setState({ totalCost });
    } else {
      for (let i = 0; i < prevProps.cartItems.length; i++) {
        if ((prevProps.cartItems[i].quantity !== this.props.cartItems[i].quantity)) {
          let totalCost = this.totalPrice(this.props.cartItems);
          this.setState({ totalCost });
          break;
        }
      }
    }
  }

  renderCartItem() {
    let cartItems = this.props.cartItems.map((cartItem, i) => (
      <li key={`${i}-${cartItem.id}`}>
        <CartItem 
          cartItem={ cartItem } 
          currentUserId={ this.props.currentUserId }
          updateCartItem={ this.props.updateCartItem }
          deleteCartItem={ this.props.deleteCartItem }
        />
      </li>
    ));
    return cartItems;
  }
  
  totalPrice(cartItems) {
    let totalCost = 0;
    cartItems.map(cartItem => totalCost += (cartItem.price) * cartItem.quantity);
    return totalCost;
  }
```

## Built with
* Ruby on Rails (Back End)
* React + Redux (Front End)
* PostgresSQL (Database)
* HTML + CSS
* Active Storage + Amazon Web Services S3
* Heroku (Host)
