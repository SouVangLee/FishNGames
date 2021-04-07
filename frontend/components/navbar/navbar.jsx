import React from 'react';
import { Link } from 'react-router-dom';

import CategoryList from './category_list';
import GreetingContainer from './greeting_container';
import SearchBar from './search_bar';

const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className="logo">
        <Link to="/">FISH N GAMES</Link>
      </h1>
      <CategoryList />
      <SearchBar />
      <GreetingContainer />
      <div className="shopping-cart">
        <Link to="/cart">
          <img className="cart-icon" src={window.cartIcon}/>
        </Link>
      </div>
    </div>
  )
}

export default Navbar;