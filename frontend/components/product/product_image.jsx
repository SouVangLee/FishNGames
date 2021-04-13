import React from 'react';

class ProductImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: this.props.product.photoUrls,
      currentPhotoIdx: 0
    };

    this.changeImage = this.changeImage.bind(this);
  }

  changeImage(idx) {
    return(e) => {
      e.preventDefault();
      this.setState({currentPhotoIdx: idx})
    }
  }


  render() {
    let { product } = this.props;
    const imageList = product.photoUrls.map((url, idx) => (
      <img 
        className="small-photos" 
        key={idx} 
        src={url} 
        onClick={this.changeImage(idx)}/>
    ));

    return (
      <div className="image-container">
        <div className="big-image">
          <img className="big-image-icon" src={this.state.url[this.state.currentPhotoIdx]}/>
        </div>

        <div className="image-icons-container">
          {imageList}
        </div>
      </div>
    );
  }
}

export default ProductImage;