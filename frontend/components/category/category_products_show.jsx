import React from 'react';
import { fetchAllCategories } from '../../actions/category_actions';
import { Link } from 'react-router-dom';

class CategoryProducts extends React.Component{
  constructor(props) {
    super(props);

  }


  componentDidMount() {
    this.props.fetchCategoryProducts(this.props.match.params.id);
  }


  render() {
    // console.log("thisprops", this.props);
    const productList = this.props.products.map(product => (
      <li key={`${product.id}`}>
        <Link to={`/products/${product.id}`}>{product.name}</Link>
      </li>
    ));

    return (
      <div>
        <h1>ONE OF THE CATEGORIES PAGES</h1>
        <ul>
          {productList}
        </ul>
      </div>
    )
  }


}

export default CategoryProducts;