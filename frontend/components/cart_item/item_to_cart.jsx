import React from 'react';

class ItemToCart extends React.Component {
  constructor(props) {
    super(props);

    this.totalPrice = this.totalPrice.bind(this);
    this.formatPrice = this.formatPrice.bind(this);
    this.directToCart = this.directToCart.bind(this);
  }

  componentWillUnmount() {
    this.setState({});
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
  
  totalPrice(cartItems) {
    let totalCost = 0;
    cartItems.map(cartItem => totalCost += (cartItem.price) * cartItem.quantity);
    return totalCost;
  }

  formatPrice(price) {
    const formatPrice = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }).format(price);

    return formatPrice;
  }

  directToCart() {
    this.props.closeModal();
    this.props.history.push("/cart");
  }

  render() {
    if (!this.state) return null;
    let totalCost = this.totalPrice(this.props.cartItems);
    const { addQuantity, product } = this.state; 
    return (
      <div className="add-item-modal-child" onClick={e => e.stopPropagation()}>
        <div className="add-item-container">
          <span>{addQuantity} Item(s) Added to Cart</span>
          <span>{this.formatPrice(Number(product.price) * addQuantity)}</span>
        </div>

        <div className="add-item-info">
          <img src={product.photoUrls[0]}/>
          <span>{product.name}</span>
        </div>

        <div className="add-item-cart-total">
          <span>Cart Total: { this.formatPrice(totalCost) }</span>
          <span>*Taxes calculated during checkout</span>
        </div>

        <div className="add-item-cart-button-container"> 
          <button onClick={ this.directToCart}>VIEW CART</button>
          <button onClick={() => this.props.closeModal()}>CONTINUE SHOPPING</button>
        </div>
      </div>
    )
  }
}

export default ItemToCart;