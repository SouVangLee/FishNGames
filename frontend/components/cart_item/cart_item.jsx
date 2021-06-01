import React from 'react';

class CartItem extends React.Component {
  constructor(props) {
    super(props)

    const { quantity, price } = this.props.cartItem
    this.state = {
      quantity: String(quantity),
      subtotal: parseInt(price) * quantity
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(field) {
    return e => {
      e.preventDefault();
      this.setState({ [field]: e.target.value});
    }
  }

  render() {
    console.log("CART ITEM PROPS", this.props);
    console.log("CART ITEM STATE", this.state);
    const { price, name, photoUrls } = this.props.cartItem;
    return (
      <div className="cart-item-container">
        <div className="cart-item-info">
          <img src={photoUrls[0]}/>
          <h3>{ name }</h3>
        </div>
        <div className="quantity-container">
          <input 
            type="text" 
            value={this.state.quantity}
            onChange={this.handleChange('quantity')}
          />
        </div>
        <div className="price-container">${ price }</div>
        <div className="subtotal-container">${ parseInt(price) * this.state.quantity }</div>
      </div>
    )
  }
}

export default CartItem;