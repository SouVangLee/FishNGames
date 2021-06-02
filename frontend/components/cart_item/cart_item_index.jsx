import React from 'react';
import CartItem from './cart_item';

class CartItemIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      totalCost: 0
    }

    this.renderCartItem = this.renderCartItem.bind(this);
    this.totalPrice = this.totalPrice.bind(this);
    this.formatPrice = this.formatPrice.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllCartItems()
      .then(() => {
        let totalCost = this.totalPrice(this.props.cartItems);
        this.setState({ totalCost });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    let prevTotalCost = this.totalPrice(prevProps)
  }

  renderCartItem() {
    let cartItems = this.props.cartItems.map((cartItem, i) => (
      <CartItem 
        key={`${i}-${cartItem}`} 
        cartItem={ cartItem } 
        currentUserId={ this.props.currentUserId }
        updateCartItem={ this.props.updateCartItem }
        deleteCartItem={ this.props.deleteCartItem }
      />
    ));
    return cartItems;
  }

  formatPrice(price) {
    const formatPrice = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }).format(price);

    return formatPrice;
  }

  totalPrice(cartItems) {
    let totalCost = 0;
    cartItems.map(cartItem => totalCost += (cartItem.price) * cartItem.quantity);
    return totalCost;
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

        <div className="total-price-container">
          <div className="product-subtotal-container">
            Product Subtotal
            <div className="total-price">
              {this.formatPrice(this.state.totalCost)}
            </div>
          </div>
          <div className="cart-total-container">
            Cart Total*
            <div className="total-price">
              {this.formatPrice(this.state.totalCost)}
            </div>
          </div>
          <div className="shipping-note-container">
            *Shipping and taxes calculated in checkout
          </div>
        </div>

        <div className="cart-checkout">
          <button>CHECKOUT</button>
        </div>
      </div>
    )
  }
}

export default CartItemIndex;