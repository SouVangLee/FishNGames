import React from 'react';
import { Link } from 'react-router-dom';

const CategoryNav = () => {
  return (
    <div className="category-list">
    <Link to="/fishing">FISHING</Link>
    <Link to="/boating">BOATING</Link>
    <Link to="/shooting">SHOOTING</Link>
    <Link to="/hunting">HUNTING</Link>
    <Link to="/camping">CAMPING</Link>
    <Link to="/clothing">CLOTHING</Link>
    <Link to="/footwear">FOOTWEAR</Link>
    </div>
  )
}

export default CategoryNav;