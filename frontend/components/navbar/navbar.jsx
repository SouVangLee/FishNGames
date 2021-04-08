import React from 'react';
import { Link } from 'react-router-dom';

import CategoryList from './category_list';
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
        <CategoryList />
        <SearchBar />

        <div className="signin-cart-container">
          <GreetingContainer />
          <div className="shopping-cart">
            <Link to="/cart">
              <img className="cart-icon" src={window.cartIcon}/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;