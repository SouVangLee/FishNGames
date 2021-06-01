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

  handleChange() {
    
  }

  render() {
    console.log("CART ITEM PROPS", this.props);
    const { price, name, photoUrls } = this.props.cartItem;
    return (
      <div className="cart-item">
        <img src={photoUrls[0]}/>
        <h3>{ name }</h3>
        <input 
          type="text" 
          value={this.state.quantity}
          onChange={this.handleChange}
        />
      </div>
    )
  }
}

export default CartItem;