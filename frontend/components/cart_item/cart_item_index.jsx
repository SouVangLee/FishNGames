import React from 'react';
import CartItem from './cart_item';

class CartItemIndex extends React.Component {
  constructor(props) {
    super(props);

    this.renderCartItem = this.renderCartItem.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllCartItems()
  }

  renderCartItem() {
    let cartItems = this.props.cartItems.map((cartItem, i) => (
      <CartItem 
        key={`${i}-${cartItem}`} 
        cartItem={cartItem} 
        currentUserId={this.props.currentUserId}
      />
    ));
    return cartItems;
  }

  render() {
    console.log("CART ITEM INDEX", this.props);
    let cartItems = this.renderCartItem();
    return (
      <div>
        Im in Cart Items
        { cartItems }
      </div>
    )
  }
}

export default CartItemIndex;