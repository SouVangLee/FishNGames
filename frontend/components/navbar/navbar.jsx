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

    this.checkSignedIn = this.checkSignedIn.bind(this);
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
      // console.log("prevprops userid", prevProps.currentUserId);
      // console.log("props userid", this.props.currentUserId);
      this.props.fetchAllCartItems()
      .then(() => {
        this.setState({ numberOfCartItems: this.props.cartItems.length });
      })
    }

    if (!this.props.currentUserId && this.state.numberOfCartItems !== 0) {
      this.setState({ numberOfCartItems: 0 });
    }
  }

  checkSignedIn() {
    if (!this.props.currentUserId) {
      return alert("Please sign in or sign up.");
    }
  }

  render() {
    // console.log("NAVBAR PROPS", this.props);
    // console.log("NAVBAR state", this.state);
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
              <Link className="cart-link" to="/cart" onClick={ this.checkSignedIn }>
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