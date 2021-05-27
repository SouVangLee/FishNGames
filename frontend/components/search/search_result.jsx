import React from 'react';
import { Link } from 'react-router-dom';
const queryString = require('querystring');

class SearchResult extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      minPrice: "",
      maxPrice: ""
    }

    this.filterSearch = this.filterSearch.bind(this);
    this.renderProducts = this.renderProducts.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllProducts()
      .then(() => {
        let queryStr = queryString.parse(this.props.location.search);
        let queryWords = queryStr['?search'].split(" ");
        this.filterSearch(queryWords, this.props.products);
      });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.search !== this.props.location.search) {
      let queryStr = queryString.parse(this.props.location.search);
      let queryWords = queryStr['?search'].split(" ");
      this.filterSearch(queryWords, this.props.products);
      this.setState({ minPrice: "", maxPrice: "" })
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

    return productList
  }

  render() {
    if (!this.props.products.length || !this.state.products) return null;
    const productList = this.renderProducts(this.state.products);
    console.log("PROPS SEARCH RESULT", this.props);
    console.log("SEARCH RESULT STATE", this.state);

    return (
      <div >
        { (!productList.length) ? (
          <div>Could not find any products!</div>
        ) : (
          <div>
            { productList }
          </div>
        )}
      </div>
    )
  }
}

export default SearchResult;