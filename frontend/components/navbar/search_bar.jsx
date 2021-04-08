import React from 'react';

const SearchBar = () => {
  return (

    <div className="search-box">
      <form className="search-box-form">
        <input type="search" placeholder="Search Here..."/>
        <button className="search-logo">Search</button>
      </form>
    </div>
  )
}

export default SearchBar;