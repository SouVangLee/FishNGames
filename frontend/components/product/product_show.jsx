import React from 'react';
import { NavLink } from 'react-router-dom';

class Product extends React.Component{
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.id)
  }

  render() {
    const { product } = this.props

    if (!this.props.product) {
      return null;
    } else {

    return (
      <div className="product-show-page">

        <div className="product-show-container">
          <section className="product-show-left">
              <img className="product-img" src={product.photoUrls[0]}/>
          </section>

          <section className="product-show-right">
            <div className="product-item-info">
              <h2 className="product-name">{product.name}</h2>
              <h3>Description</h3>
              <p className="product-description">{product.description}</p>
              <label className="product-price">Price: {product.price}</label>
              <br/>
              <label className="product-quantity">Quantity: 
                <input type="text"/>
              </label>
            </div>

            <div className="add-to-cart-container">
              <div>Cart Stuff Later on</div>
            </div>
          </section>
        </div>


      </div>
    );
    }
  }
}

export default Product;