import React from 'react';
import { Link } from 'react-router-dom';

import CategoryNavContainer from '../category/category_nav_container';
import GreetingContainer from './greeting_container';
import SearchBar from '../search/search_bar';


class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      numberOfCartItems: 0
    }
  }

  componentDidMount() {
    this.props.fetchAllCartItems()
      .then(() => {
        this.setState({ numberOfCartItems: this.props.cartItems.length })
      })
  }

  componentDidUpdate(prevProps) {
    if ((prevProps.cartItems.length !== this.props.cartItems.length) ||
    (prevProps.currentUserId !== this.props.currentUserId)) {
      this.props.fetchAllCartItems()
      .then(() => {
        this.setState({ numberOfCartItems: this.props.cartItems.length });
      })
    }
  }

  render() {
    console.log("NAVBAR PROPS", this.props);
    console.log("NAVBAR state", this.state);
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
            <div className="shopping-cart-container">
              <Link className="cart-link" to="/cart">
              <span className="number-of-cart-items">
                { this.state.numberOfCartItems }
              </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default Navbar;