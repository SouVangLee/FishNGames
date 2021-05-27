import React from 'react';
const queryString = require('querystring');

class SearchResult extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      minPrice: "",
      maxPrice: ""
    }

    this.filterProducts = this.filterProducts.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllProducts()
      .then(() => {
        let queryStr = queryString.parse(this.props.location.search);
        let queryWords = queryStr['?search'].split(" ");
        this.filterProducts(queryWords, this.props.products);
      })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.location.search !== this.props.location.search) {
      let queryStr = queryString.parse(this.props.location.search);
      let queryWords = queryStr['?search'].split(" ");
      this.filterProducts(queryWords, this.props.products);
      this.setState({ minPrice: "", maxPrice: "" })
    }
  }

  filterProducts(queryWords, productsArr) {
    let queryArr = queryWords.map(word => word.toLowerCase());
    let filteredProducts = productsArr.filter(product => {
      for (let i = 0; i < queryArr.length; i++) {
        if (product.name.toLowerCase().includes(queryArr[i])) {
          return product;
        }
      }
    });

    this.setState({ products: filteredProducts });
  }

  renderProducts(filteredProducts) {
    // const productList = productArr.map(product => (
    //   <div className="product-info-link" key={`${product.id}`}>
    //     <Link className="product-link" to={`/products/${product.id}`}>
    //       <img src={product.photoUrls[0]} alt=""/>
    //       <h2>{product.name}</h2>
    //       <h3>
    //         {new Intl.NumberFormat('en-US', {
    //           style: 'currency',
    //           currency: 'USD',
    //           minimumFractionDigits: 2
    //         }).format(product.price)}
    //       </h3>
    //     </Link>
    //   </div>
    // ));

    return productList
  }

  render() {
    if (!this.state.products) return null;

    // let filteredProducts = this.filterProducts(queryWords, this.props.products);

    console.log("PROPS SEARCH RESULT", this.props);
    console.log("SEARCH RESULT STATE", this.state);
    // console.log("QUERY STRING", queryString.parse(this.props.location.search));
    return (
      <div>
        hi
      </div>
    )
  }
}

export default SearchResult;