import React from 'react';

class CartItem extends React.Component {
  constructor(props) {
    super(props);

    this.renderCartItem = this.renderCartItem.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllCartItems()
  }

  renderCartItem() {
    let cartItems = this.props.cartItems.map((cartItem, i) => {
      return (
        <li>
          <div>
            <img src={cartItem.photoUrls[0]}/>
          </div>
        </li>
      )
    })
  }

  render() {
    console.log("CART ITEM PROPS", this.props);
    return (
      <div>
        Im in Cart Items
      </div>
    )
  }
}

export default CartItem;