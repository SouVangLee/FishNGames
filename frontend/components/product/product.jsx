import React from 'react';

class Product extends React.Component{
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.id)
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.props.fetchProduct(this.props.match.params.id)
    }
  }


  render() {
    console.log("PROPS", this.props);
    return (
      <div className="product-show-container">
        <div className="product-details">
          <label className="product-name"> hi
          </label>
        </div>
      </div>
    );
  }
}

export default Product;