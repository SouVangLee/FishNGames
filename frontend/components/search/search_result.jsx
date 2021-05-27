import React from 'react';
import { Link } from 'react-router-dom';
const queryString = require('querystring');

class SearchResult extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      minPrice: "",
      maxPrice: "",
      queryStr: ""
    }

    this.filterSearch = this.filterSearch.bind(this);
    this.renderProducts = this.renderProducts.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.filterPrice = this.filterPrice.bind(this);
    this.filterProducts = this.filterProducts.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllProducts()
      .then(() => {
        let queryStr = queryString.parse(this.props.location.search);
        let queryWords = queryStr['?search'].split(" ");
        this.filterSearch(queryWords, this.props.products);
        this.setState({ queryStr: queryStr['?search'] });
      });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.search !== this.props.location.search) {
      let queryStr = queryString.parse(this.props.location.search);
      let queryWords = queryStr['?search'].split(" ");
      this.filterSearch(queryWords, this.props.products);
      this.setState({ minPrice: "", maxPrice: "",  queryStr: queryStr['?search'] })
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

  filterSearch(queryWords, productsArr) {
    let queryArr = queryWords.map(word => word.toLowerCase());
    let productList = productsArr.filter(product => {
      for (let i = 0; i < queryArr.length; i++) {
        if (product.name.toLowerCase().includes(queryArr[i])) {
          return product;
        }
      }
    });
    this.setState({ products: productList });
  }

  filterProducts() {
    const { minPrice, maxPrice, products } = this.state;
    if (minPrice === "" && maxPrice === "") return products;

    let filteredProducts = products.filter(product => {
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


  renderProducts(filteredProducts) {
    const productList = filteredProducts.map(product => (
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

    return productList;
  }

  render() {
    if (!this.props.products.length || !this.state.products) return null;
    let productArr = this.filterProducts();
    const productList = this.renderProducts(productArr);
    console.log("PROPS SEARCH RESULT", this.props);
    console.log("SEARCH RESULT STATE", this.state);

    return (
      <div >
        { (!this.state.products.length) ? (
          <div className="no-results-container">
            <div className="no-results">
              <h2>Sorry, your search for "{`${this.state.queryStr}`}" did not return any results.</h2>
            </div>
            <div className="no-results-suggestion">
              <h2>WE SUGGEST:</h2>
                <ul>
                  <li>Double check the spelling.</li>
                  <li>Use general product term(s) or fewer keywords.</li>
                  <li>Try searching for an item that is less specific and refine results.</li>
                </ul>
            </div>
          </div>
        ) : (
          <div>
            <div className="search-result">
              <h2>This is what we found!</h2>
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
                <div className="search-result">
                  { `${productList.length} Search Result for "${this.state.queryStr}"`}
                </div>
              { productList }
              </section>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default SearchResult;