import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllProducts();
  }

  render() {
    const arrID = [1, 28, 3, 19]; //23, 29

    if (!this.props.products.length) {
      return null;
    } else {

      console.log("PROPSS", this.props.categories);
      
      const arrItems = arrID.map(id => (
        <Link 
          className="hot-products-link" 
          to={`/products/${id}`}
          key={id}
        >
          <img src={this.props.products[id].photoUrls[0]}/>
          <h2>{this.props.products[id].name}</h2>
          <h3>
              {new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 2
              }).format(this.props.products[id].price)}
          </h3>
        </Link>
      ));

      const CATEGORY_ID_LIST = [1, 2, 4, 5, 6]

      const categoryList = CATEGORY_ID_LIST.map(id => (
        <Link
          className="splash-category-name"
          to={`/categories/${id}`}
          key={id}
        >
          <img src="" alt=""/>
          <h2>{this.props.categories[id].name}</h2>
        </Link>
      ));

      return(
        <div className="splash-page">
          <div className="banner-container">
            <img className="camp-banner" src={window.fishingBanner1}/>
          </div>
          <h2 className="hot-items-h2"> HOT THIS WEEK </h2>

          <div className="hot-items-container">
            {arrItems}
          </div>

          <h2 className="category-h2"> SHOP BY CATEGORY </h2>
          <div className="bottom-category-container">
            {categoryList}
          </div>
          I AM THE SPLASH PAGE!
          THIS IS A CLONE OF BASS PRO SHOP! CREDITS TO UNSPLASH, AMAZON, 
          AND BASSPROSHOP FOR PICTURES.
        </div>
      );
    }
  }
}

export default Splash;