import React from 'react';

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllProducts();
  }


  render() {
    console.log("SPLASHPROPS", this.props);

    // const ARR_ID = [3, ]

    return(
      <div className="splash-page">
        <div className="banner-container">
          <img className="camp-banner" src={window.fishingBanner1}/>
        </div>
        <h2 className="hot-items"> HOT THIS WEEK </h2>
        I AM THE SPLASH PAGE!
        THIS IS A CLONE OF BASS PRO SHOP! CREDITS TO UNSPLASH, AMAZON, 
        AND BASSPROSHOP FOR PICTURES.
      </div>
    );
  }
}

export default Splash;