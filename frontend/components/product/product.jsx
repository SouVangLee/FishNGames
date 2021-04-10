import React from 'react';

class Product extends React.Component{
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.id)
  }

  render() {
    console.log("productPage", this.props);
    return null;
  }
}

export default Product;