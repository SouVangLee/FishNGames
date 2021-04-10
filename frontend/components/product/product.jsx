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
    // console.log("PROPS", this.props);
    const { product } = this.props
    if (!this.props.product) {
      return null;
    } else {

    return (
      <div className="product-show-container">
        <li className="product-item">
          <h2 className="product-name">{product.name}</h2>
          <label className="product-price">{product.price}</label>
          <label className="product-quantity">Quantity
            <input type="text"/>
          </label>
          <p className="product-description">{product.description}</p>
        </li>
      </div>
    );
    }
  }
}

export default Product;