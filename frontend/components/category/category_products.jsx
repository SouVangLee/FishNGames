import React from 'react';
import { fetchAllCategories } from '../../actions/category_actions';
import { Link } from 'react-router-dom';

class CategoryProducts extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      categories: {
        1: "fishing",
        2: "boating",
        3: "shooting",
        4: "hunting",
        5: "camping",
        6: "clothing",
        7: "footwear"
      },
      banners: {
        1: window.fishingLeaderboard,
        2: window.boatingLeaderboard,
        3: window.shootingLeaderboard,
        4: window.huntingLeaderboard,
        5: window.campingLeaderboard,
        6: window.clothingLeaderboard,
        7: window.footwearLeaderboard
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
        <div className="category-banner">
          <img 
            className="category-image" 
            src={this.state.banners[this.props.match.params.id]}
          />
          <h2>{this.state.categories[this.props.match.params.id]}</h2>
        </div>
        
        <div className="category-body-container">
          <section className="search-section">
            <h2>future filter...fdff</h2>
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