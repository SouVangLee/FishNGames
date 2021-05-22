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
        7: window.footwearLeaderboard,
      },
      minPrice: "",
      maxPrice: ""
    }

    this.handleInput = this.handleInput.bind(this);
    this.filterPrice = this.filterPrice.bind(this);
  }


  componentDidMount() {
    this.props.fetchCategoryProducts(this.props.match.params.id);
    window.scrollTo(0, 0);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.props.fetchCategoryProducts(this.props.match.params.id)
    }
  }

  handleInput(field) {
    return e => {
      e.preventDefault();
      this.setState({ [field]: e.target.value})
    }
  }

  filterPrice(minPrice, maxPrice) {
    return e => {
      e.preventDefault();
      this.setState({ minPrice, maxPrice })
    }
  }


  render() {
    const { minPrice, maxPrice } = this.state;
    console.log("category products props", this.props);
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
          <section className="filter-section">
            <h2>Filter By</h2>
            <div className="price-filter-container">
              <label onClick={this.filterPrice("", "")}>
                Any Price
              </label>
              <label onClick={this.filterPrice(0, 10)}>
                Under $10
              </label>
              <label onClick={this.filterPrice(0, 25)}>
                Under $25
              </label>
              <label onClick={this.filterPrice(0, 50)} >
                Under $50
              </label>
              <label onClick={this.filterPrice(0, 100)} >
                Under $100
              </label>
            </div>
            <div className="custom-price-filter">
              <span>$&nbsp;
                <input 
                  type="text" 
                  value={this.state.minPrice} 
                  onChange={this.handleInput('minPrice')} 
                  placeholder="min price"
                />
              </span>
              <span>&nbsp; - &nbsp;
                <input 
                  type="text" 
                  value={this.state.maxPrice} 
                  onChange={this.handleInput('maxPrice')} 
                  placeholder="min price"
                />
              </span>
              <button onClick={this.filterPrice(minPrice, maxPrice)} >Filter!</button>
            </div>
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