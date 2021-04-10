import React from 'react';
import { Link } from 'react-router-dom';

import CategoryNavContainer from '../category/category_nav_container';
import GreetingContainer from './greeting_container';
import SearchBar from './search_bar';

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar">
        <h1 className="logo">
          <Link to="/">
          <img className="logo-icon" src={window.logoIcon}/>
          </Link>
        </h1>
        <CategoryNavContainer />
        <SearchBar />

        <div className="signin-cart-container">
          <GreetingContainer />
          <div className="shopping-cart">
            <Link className="cart-link" to="/cart"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;