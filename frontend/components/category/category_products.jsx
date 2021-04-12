import React from 'react';
import { fetchAllCategories } from '../../actions/category_actions';
import { Link } from 'react-router-dom';

class CategoryProducts extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      categories: {
        1: "Fishing",
        2: "Boating",
        3: "Shooting",
        4: "Hunting",
        5: "Camping",
        6: "Clothing",
        7: "Footwear"
      },
      banners: {
        1: window.fishingLeaderboard,
        2: window.boatingBanner
      }
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
      <div className="product-info-link" key={`${product.id}`}>
        <Link className="product-link" to={`/products/${product.id}`}>
          <img src={product.photoUrls[0]} alt=""/>
          <h2>{product.name}</h2>
          <h3>
            {new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
              minimumFractionDigits: 2
            }).format(product.price)}
          </h3>
        </Link>
      </div>
    ));

    return (
      <div className="category-container">
        {/* <h1>{this.state.categories[this.props.match.params.id]} Page!</h1> */}
        <div className="category-banner">
          <img 
            className="category-image" 
            src={this.state.banners[this.props.match.params.id]}
          />
        </div>
        
        <div className="category-body-container">
          <section className="search-section">
            <h2>future filter...</h2>
          </section>

          <section className="product-section">
            {productList}
          </section>
        </div>
      </div>
    )
  }


}

export default CategoryProducts;