import React from 'react';
const queryString = require('querystring');

class SearchResult extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      minPrice: "",
      maxPrice: ""
    }
  }

  componentDidMount() {
    this.props.fetchAllProducts()
      .then(() => this.setState({ products: this.props.products }));
  }

  filterProducts(searchQuery, productsArr) {
    let query = queryString.parse(searchQuery);
    let queryWords = query['?search'].split(" ");
    queryWords = queryWords.map(word => word.toLowerCase());
    
    let filteredProducts = productsArr.filter(product => {
      for (let i = 0; i < queryWords.length; i++) {
        if (product.toLowerCase().includes(queryWords[i])) {
          return product;
        }
      }
    });

    return filteredProducts;
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
    console.log("PROPS SEARCH RESULT", this.props);
    console.log("QUERY STRING", queryString.parse(this.props.location.search));
    return (
      <div>
        hi
      </div>
    )
  }
}

export default SearchResult;