import React from 'react';

class ProductImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: this.props.product.photoUrls[0],
      currentPhotoIdx: 0
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
  }


  render() {
    console.log('IMAGEPROPS', this.props.product);
    let { product } = this.props;
    const imageList = product.photoUrls.map((url, idx) => (
      <img 
        className="small-photos" 
        key={idx} 
        src={url} 
        onClick={this.handleClick}/>
    ));

    return (
      <div className="image-container">
        <div className="big-image">
          <img className="big-image-icon" src={this.state.url}/>
        </div>

        <div className="image-icons-container">
          {imageList}
        </div>



      </div>
    );
  }
}

export default ProductImage;