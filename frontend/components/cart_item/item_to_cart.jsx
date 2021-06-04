import React from 'react';

class ItemToCart extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps) {
    let prev = {};
    prevProps.cartItems.forEach(cartItem => prev[cartItem.name] = cartItem.quantity);

    if (prevProps.cartItems.length !== this.props.cartItems.length) {
      let prevIdList = [];
      prevProps.cartItems.forEach(cartItem => prevIdList.push(cartItem.id));
      
      for (let i = 0; i < this.props.cartItems.length; i++) {
        let cartItem = this.props.cartItems[i];
        if (!prevIdList.includes(cartItem.id)) {
          this.setState({ 
            addQuantity: cartItem.quantity, 
            productName: cartItem.name, 
            price: cartItem.price 
          });
          break;
        }
      }
    } else {
      for (let i = 0; i < this.props.cartItems.length; i++) {
        let cartItem = this.props.cartItems[i];
        if (prev[cartItem.name] !== undefined && prev[cartItem.name] !== cartItem.quantity) {
          let difference = cartItem.quantity - prev[cartItem.name]
          this.setState({ 
            addQuantity: difference, 
            productName: cartItem.name, 
            price: cartItem.price 
          });
          break;
        }
      }
    }
  }

  render() {
    // console.log("ITEM TO CART PROPS", this.props);
    console.log("ITEM TO CART STATE", this.state);
    return (
      <div className="add-item-modal-child" onClick={e => e.stopPropagation()}>

      </div>
    )
  }
}

export default ItemToCart;