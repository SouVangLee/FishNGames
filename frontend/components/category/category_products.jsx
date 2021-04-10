import React from 'react';
import { fetchAllCategories } from '../../actions/category_actions';
import { Link } from 'react-router-dom';

class CategoryProducts extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      1: "Fishing",
      2: "Boating",
      3: "Shooting",
      4: "Hunting",
      5: "Camping",
      6: "Clothing",
      7: "Footwear"
    }
  }


  componentDidMount() {
    this.props.fetchCategoryProducts(this.props.match.params.id);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.props.fetchCategoryProducts(this.props.match.params.id)
    }
  }


  render() {
    const productList = this.props.products.map(product => (
      <li key={`${product.id}`}>
        <Link to={`/products/${product.id}`}>{product.name}</Link>
      </li>
    ));

    return (
      <div>
        <h1>{this.state[this.props.match.params.id]} Page!</h1>
        <ul>
          {productList}
        </ul>
      </div>
    )
  }


}

export default CategoryProducts;