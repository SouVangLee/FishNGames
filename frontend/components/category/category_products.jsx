import React from 'react';
import { Link } from 'react-router-dom';

class CategoryProducts extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
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
    console.log("IM IN THE CATEGORY PRODUCTS", this.props);

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