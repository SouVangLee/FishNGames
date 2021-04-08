import React from 'react';
import { Link } from 'react-router-dom';

class PageNotFound extends React.Component {
  render() {
    return (
      <div className="page-not-found-container">
        <img className="error-404" src={window.error_404}/>
        {/* <a href="https://www.freepik.com/vectors/background">
        Background vector created by freepik - www.freepik.com</a> */}
        <div className="redirect-404">
          <Link to="/">{">>Go to Home Page<<"}</Link>
        </div>
      </div>
    )
  } 
}

export default PageNotFound;