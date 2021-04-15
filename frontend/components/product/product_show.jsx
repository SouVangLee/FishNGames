import React from 'react';
import { NavLink } from 'react-router-dom';
import ProductImage from './product_image';
import ReviewFormContainer from '../review/review_form_container';
import ReviewContainer from '../review/review_container';

class Product extends React.Component{
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllProducts();
    this.props.fetchProduct(this.props.match.params.id);
    window.scrollTo(0, 0);
  }

  render() {
    // console.log("PRODUCT PROPS", this.props);
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
              <div>Cart Stuff Later on</div>
              {/* <label className="product-quantity">Quantity: 
                <input type="text"/>
              </label> */}
            </div>
          </section>
        </div>

        <div>REVIEWS LATER ON</div>
        <ReviewFormContainer product_id={product.id} />
        <ReviewContainer product_id={product.id}/>
      </div>
    );
    }
  }
}

export default Product;