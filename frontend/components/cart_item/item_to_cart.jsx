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
            product: cartItem
          });
          break;
        }
      }
    } else {
      for (let i = 0; i < this.props.cartItems.length; i++) {
        let cartItem = this.props.cartItems[i];
        if (prev[cartItem.name] !== cartItem.quantity) {
          let difference = cartItem.quantity - prev[cartItem.name]
          this.setState({ 
            addQuantity: difference, 
            product: cartItem
          });
          break;
        }
      }
    }
  }

  render() {
    // console.log("ITEM TO CART PROPS", this.props);
    if (!this.state) return null;
    console.log("ITEM TO CART STATE", this.state);
    const { addQuantity, product } = this.state; 
    return (
      <div className="add-item-modal-child" onClick={e => e.stopPropagation()}>
        <div className="add-item-container">
          <span>{addQuantity} Item(s) Added to Cart</span>
          <span>${Number(product.price) * addQuantity}</span>
        </div>

        <div className="add-item-info">
          <img src={product.photoUrls[0]}/>
          <span>{product.name}</span>
        </div>

        <div className="add-item-cart-total">
          <span>Cart Total: ${421.21}</span>
          <span>*Taxes calculated during checkout</span>
        </div>
      </div>
    )
  }
}

export default ItemToCart;