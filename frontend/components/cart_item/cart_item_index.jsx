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
      <div className="cart-item-index-container">
        <h2 className="shopping-cart-header">Shopping Cart</h2>
        <div className="header-list">
          <div className="product-header">Product</div>
          <div className="quantity-header">Quantity</div>
          <div className="price-header">Price</div>
          <div className="subtotal-header">Subtotal</div>
        </div>
        { cartItems }
      </div>
    )
  }
}

export default CartItemIndex;