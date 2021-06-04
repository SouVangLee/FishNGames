import { connect } from 'react-redux';
import { fetchAllCartItems } from '../../actions/cart_item_actions';
import Navbar from './navbar';

const mSTP = state => {
  return {
    cartItems: Object.values(state.entities.cartItems),
    currentUserId: state.session.currentUserId
  }
}

const mDTP = dispatch => {
  return {
    fetchAllCartItems: () => dispatch(fetchAllCartItems())
  }
}

export default connect(mSTP, mDTP)(Navbar);