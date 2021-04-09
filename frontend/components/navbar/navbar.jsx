import React from 'react';
import { Link } from 'react-router-dom';

// import CategoryNav from '../category/category_nav';
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
        {/* <CategoryNav /> */}
        <SearchBar />

        <div className="signin-cart-container">
          <GreetingContainer />
          <div className="shopping-cart">
            <Link className="cart-link" to="/cart">
              <img className="cart-black" src={window.cartBlackIcon}/>
              {/* <img className="cart-teal" src={window.cartTealIcon}/> */}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;