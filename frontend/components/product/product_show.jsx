import React from 'react';
import { NavLink } from 'react-router-dom';
import ProductImage from './product_image';
import ReviewFormContainer from '../review/review_form_container';
import ReviewContainer from '../review/review_container';

class Product extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      quantity: "1",
      user_id: this.props.currentUserId,
      product_id: parseInt(this.props.match.params.id)
    }

    this.handleInput = this.handleInput.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.updateQuantity = this.updateQuantity.bind(this);
    // this.renderErrors = this.renderErrors.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllProducts();
    this.props.fetchProduct(this.props.match.params.id);
    window.scrollTo(0, 0);
  }

  handleInput(field) {
    return e => {
      e.preventDefault();
      this.setState({ [field]: e.target.value })
    }
  }

  updateQuantity(field) {
    return e => {
      e.preventDefault();
      let newQuantity = parseInt(this.state.quantity)
      if (field === '+') {
        newQuantity++;
      } else {
        newQuantity--;
      }
      this.setState({ quantity: String(newQuantity) });
    }
  }

  addToCart(e) {
    e.preventDefault();
    let cartItem = {
      quantity: parseInt(this.state.quantity),
      product_id: this.props.product.id,
      user_id: this.props.currentUserId
    }

    this.props.createCartItem(cartItem)
      .then(res => console.log(res));
  }

  // renderErrors() {
  //   return (
  //     <ul className="error-list">
  //       {this.props.errors.map((error, i) => (
  //         <li key={`error-${i}`}>{error}</li>
  //       ))}
  //     </ul>
  //   );
  // }

  render() {
    console.log("PRODUCT SHOW PROPS", this.props);
    console.log("PRODUCT SHOW state", this.state);
    if (!this.props.product) {
      return null;
    } else {

    const { product } = this.props
    const price = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }).format(product.price);
    
    return (
      <div className="product-show-page">
        {/* {this.renderErrors()} */}
        <div className="product-show-container">
          <section className="product-show-left">
            <ProductImage product={product}/>
          </section>

          <section className="product-show-right">
            <div className="product-item-info">
              <h2 className="product-name">{product.name}</h2>
              <h3>Description</h3>
              <p className="product-description">{product.description}</p>

              <label className="product-price">{price}</label>
              <br/>
            </div>

            <div className="add-to-cart-container">
              <div className="show-quantity-container">
                <button className="minus-quantity" onClick={ this.updateQuantity('-')}>-</button>
                <input 
                  type="text" 
                  onChange={this.handleInput("quantity")}
                  value={this.state.quantity}
                />
                <button className="plus-quantity" onClick={ this.updateQuantity('+') }>+</button>
              </div>

              <button 
                className="add-to-cart"
                onClick={this.addToCart}
              >
              ADD TO CART</button>
            </div>
          </section>
        </div>
        { this.props.currentUserId ?
        <ReviewFormContainer product_id={product.id} /> : ""
        }
        <ReviewContainer product_id={product.id} currentUserId={this.props.currentUserId}/>
      </div>
    );
    }
  }
}

export default Product;