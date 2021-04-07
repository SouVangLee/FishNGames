import React from 'react';

import CategoryList from './category_list';
import GreetingContainer from './greeting_container';
import SearchBar from './search_bar';

const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className="logo">FISH N GAMES</h1>
      <CategoryList />
      <SearchBar />
      <GreetingContainer />
      <a className="shopping-cart" href="/cart">CART</a>
    </div>
  )
}

export default Navbar;