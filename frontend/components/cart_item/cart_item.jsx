import React from 'react';
import { Link } from 'react-router-dom';

class CartItem extends React.Component {
  constructor(props) {
    super(props)

    const { quantity, price, name } = this.props.cartItem
    this.state = {
      quantity: String(quantity),
      name
    }

    this.handleChange = this.handleChange.bind(this);
    this.formatPrice = this.formatPrice.bind(this);
    this.clickDelete = this.clickDelete.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.quantity !== this.state.quantity) {
      const { id, productId, userId } = this.props.cartItem;
      let updateItem = {
        id,
        productId,
        userId,
        quantity: parseInt(this.state.quantity)
      }
      setTimeout(() => {
        this.props.updateCartItem(updateItem);
      }, 1500);
    }
  }

  handleChange(field) {
    return e => {
      e.preventDefault();
      this.setState({ [field]: e.target.value});
    }
  }

  formatPrice(price) {
    const formatPrice = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }).format(price);

    return formatPrice;
  }

  clickDelete(){
    console.log("inside delete");
    this.props.deleteCartItem(this.props.cartItem.id);
  }

  render() {
    // console.log("CART ITEM PROPS", this.props);
    console.log("CART ITEM STATE", this.state);
    const { price, name, photoUrls, productId } = this.props.cartItem;
    return (
      <div className="cart-item-container">
        <div className="cart-item-info">
          <Link to={`/products/${productId}`}>
            <img className="cart-item-img" src={photoUrls[0]}/>
          </Link>
          <div className="item-name-container">
            <h3>{ name }</h3>
            <div className="remove-cart-item" onClick={this.clickDelete}>Remove</div>
          </div>
        </div>
        <div className="quantity-container">
          <input 
            type="text" 
            value={this.state.quantity}
            onChange={this.handleChange('quantity')}
          />
        </div>
        <div className="price-container">{ this.formatPrice(price) }</div>
        <div className="subtotal-container">{ this.formatPrice(price * this.state.quantity) }</div>
      </div>
    )
  }
}

export default CartItem;