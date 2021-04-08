import React from 'react';

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return(
      <div className="splash-page">
        {/* <div className="banner-container">
          <img className="camp-banner" src={window.campBanner}/>
        </div> */}
        I AM THE SPLASH PAGE!
      </div>
    );
  }
}

export default Splash;