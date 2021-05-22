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
      maxPrice: "",
      products: []
    }

    this.handleInput = this.handleInput.bind(this);
    this.filterPrice = this.filterPrice.bind(this);
    this.filterProducts = this.filterProducts.bind(this);
  }


  componentDidMount() {
    this.props.fetchCategoryProducts(this.props.match.params.id)
      .then(() => this.setState({ products: this.props.products }));
    window.scrollTo(0, 0);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.props.fetchCategoryProducts(this.props.match.params.id)
      this.setState({ minPrice: "", maxPrice: "" })

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

  filterProducts() {
    const { minPrice, maxPrice } = this.state;
    const { products } = this.props;
    if (minPrice === "" && maxPrice === "") return products;

    let filteredProducts = this.props.products.filter(product => {
      if (minPrice === "" && maxPrice !== "") {
        return parseInt(product.price) <= parseInt(maxPrice);
      }
      else if (minPrice !== "" && maxPrice === "") {
        return parseInt(product.price) >= parseInt(minPrice);
      } else {
        return parseInt(product.price) >= parseInt(minPrice) && parseInt(product.price) <= parseInt(maxPrice);
      }
    });

    return filteredProducts;
  }


  render() {
    let productArr = this.filterProducts();
    const productList = productArr.map(product => (
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
              <label onClick={this.filterPrice("0", "10")}>
                Between $0 and $10
              </label>
              <label onClick={this.filterPrice("10", "25")}>
                Between $10 and $25
              </label>
              <label onClick={this.filterPrice("25", "50")} >
                Between $25 and $50
              </label>
              <label onClick={this.filterPrice("50", "100")} >
                Between $50 and $100
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
                  placeholder="max price"
                />
              </span>
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