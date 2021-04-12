import React from 'react';

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return(
      <div className="splash-page">
        <div className="banner-container">
          <img className="camp-banner" src={window.fishingBanner1}/>
        </div>
        I AM THE SPLASH PAGE!
        THIS IS A CLONE OF BASS PRO SHOP! CREDITS TO UNSPLASH.COM FOR PICTURES.
      </div>
    );
  }
}

export default Splash;